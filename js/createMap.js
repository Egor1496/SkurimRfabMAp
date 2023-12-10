const skyMap = "image/map/SkurimMap-min-filter-2.jpg",
	solsMap = "image/map/SolstheimMap-filter-mini.jpg",
	nameMapURL = TYPE_MAP === "skyrim" ? skyMap : solsMap;

fabric.util.loadImage(nameMapURL, function (img) {
	map = new fabric.Image(img);

	// Установим начальные и текущие размеры
	baseWidth = map.width;
	baseHeight = map.height;
	width = element.width();
	height = element.height();

	// Отключим любую возможность редактирования и выбора карты как объекта на холсте
	map.set({
		hasRotatingPoint: false,
		hasBorders: false,
		hasControls: false,
		lockScalingY: true,
		lockScalingX: true,
		selectable: false,
		left: map.width / 2,
		top: map.height / 2,
		originX: "center",
		originY: "center",
	});

	canvas.add(map);

	// От масштабируем, чтобы сразу видеть всё карту
	let newScale;
	if (width / height > baseWidth / baseHeight) {
		newScale = height / baseHeight;
	} else {
		newScale = width / baseWidth;
	}

	scale *= newScale;
	transX *= newScale;
	transY *= newScale;

	canvas.setWidth(width);
	canvas.setHeight(height);

	// Добавить пути на карту
	createPath();

	// Добавить метки на карту
	createMarkers();

	baseScale = scale;

	// Обновить карту
	applyTransform();

	let loadInterval = setInterval(() => {
		const isLoadMarkers = listMarkers.length === countLoadMarkers,
			countPath = listPath[NUMBER_PATH_ACTIVE]?.length,
			isLoadPath = countPath ? countPath === countLoadPath : true;

		if (isLoadMarkers && isLoadPath) {
			if ("ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch)) {
				bindContainerTouchEvents();
			} else {
				bindContainerEvents();
			}
			// canvas.update();
			clearInterval(loadInterval);
		}
	}, 100);
});

var bindContainerEvents = function () {
	var mouseDown = false,
		oldPageX,
		oldPageY,
		container = $(canvas.wrapperEl);

	const COEFF = 0.3; // ???????????????????????????????????????????

	container
		.mouseup(function (e) {
			pageY = (e.pageY - mapOffsetY) / (1 + COEFF * currentZoom) - element.offset().top;
			pageX = (e.pageX - mapOffsetX) / (1 + COEFF * currentZoom) - element.offset().left;
			pageMY = e.pageY - element.offset().top;
			pageMX = e.pageX - element.offset().left;
		})
		.mousemove(function (e) {
			// Непосредственно перемещение
			if (mouseDown) {
				isClickDown = false; // отменить отметку локации

				// Рассчитываем смещение с учётом масштаба
				transX -= (oldPageX - e.pageX) / scale;
				transY -= (oldPageY - e.pageY) / scale;

				applyTransform();

				oldPageX = e.pageX;
				oldPageY = e.pageY;

				return false;
			}
		})
		.mousedown(function (e) {
			// Запомним положение в начале перемещения по карте
			mouseDown = true;
			oldPageX = e.pageX;
			oldPageY = e.pageY;

			// Закрыть вспылвашку.
			closeDescription();

			return false;
		});

	$(window).mouseup(function () {
		mouseDown = false;
		applyTransform();
	});

	// Масштабирование колесом мыши
	container.mousewheel(function (event, delta, deltaX, deltaY) {
		var offset = element.offset(), // положение холста на странице
			centerX = event.pageX - offset.left, // координата x центра масштабирования
			centerY = event.pageY - offset.top; // координата y центра масштабирования

		currentZoom += deltaY; // получить текущий шаг зумма

		setScale(centerX, centerY, deltaY);

		setScaleIcon();

		applyTransform();

		// Отключим скролл страницы
		event.preventDefault();

		// 	console.log(`currentZoom - ${currentZoom},
		// 	e.pageY - ${event.pageY},
		// 	e.pageX - ${event.pageX},
		// 	mapOffsetY - ${mapOffsetY},
		// 	mapOffsetX - ${mapOffsetX}
		// 	текущее смещение по оси x - ${transX},
		// 	текущее смещение по оси y - ${transY},
		// 	текущий масштаб в целом - ${scale}`);
	});
};

var bindContainerTouchEvents = function () {
	var touchStartScale,
		touchStartDistance,
		container = $(canvas.wrapperEl),
		touchX,
		touchY,
		centerTouchX,
		centerTouchY,
		lastTouchesLength,
		handleTouchEvent = function (e) {
			var touches = e.originalEvent.touches,
				offset,
				currentScale,
				transXOld,
				transYOld;

			if (e.type == "touchstart") {
				lastTouchesLength = 0;
			}
			if (touches.length == 1) {
				// Простое перемещение
				if (lastTouchesLength == 1) {
					transXOld = transX;
					transYOld = transY;
					transX -= (touchX - touches[0].pageX) / scale;
					transY -= (touchY - touches[0].pageY) / scale;
					applyTransform();
					if (transXOld != transX || transYOld != transY) {
						e.preventDefault();
					}
				}
				touchX = touches[0].pageX;
				touchY = touches[0].pageY;
			} else if (touches.length == 2) {
				// Масштабирование
				if (lastTouchesLength == 2) {
					currentScale =
						Math.sqrt(Math.pow(touches[0].pageX - touches[1].pageX, 2) + Math.pow(touches[0].pageY - touches[1].pageY, 2)) / touchStartDistance;
					setScale(touchStartScale * currentScale, centerTouchX, centerTouchY);
					e.preventDefault();
				} else {
					// Момент начала масштабирования, запомним параметры
					offset = element.offset();
					if (touches[0].pageX > touches[1].pageX) {
						centerTouchX = touches[1].pageX + (touches[0].pageX - touches[1].pageX) / 2;
					} else {
						centerTouchX = touches[0].pageX + (touches[1].pageX - touches[0].pageX) / 2;
					}
					if (touches[0].pageY > touches[1].pageY) {
						centerTouchY = touches[1].pageY + (touches[0].pageY - touches[1].pageY) / 2;
					} else {
						centerTouchY = touches[0].pageY + (touches[1].pageY - touches[0].pageY) / 2;
					}
					centerTouchX -= offset.left;
					centerTouchY -= offset.top;

					touchStartScale = scale;
					touchStartDistance = Math.sqrt(Math.pow(touches[0].pageX - touches[1].pageX, 2) + Math.pow(touches[0].pageY - touches[1].pageY, 2));
				}
			}

			lastTouchesLength = touches.length;
		};

	container.bind("touchstart", handleTouchEvent);
	container.bind("touchmove", handleTouchEvent);
};
