window.onload = (e) => {
	var setScale = function (scaleToSet, anchorX, anchorY) {
		var zoomMax = 8, // максимально n-ти кратное увеличение
			zoomMin = 2, // минимальное увеличение - реальный размер картинки
			zoomStep; // необходимое изменение масштаба

		// Ограничим масштаб, если нужно
		if (scaleToSet > zoomMax * baseScale) {
			scaleToSet = zoomMax * baseScale;
		} else if (scaleToSet < zoomMin * baseScale) {
			scaleToSet = zoomMin * baseScale;
		}

		// Центр масштабирования - точка, которая должна остаться на месте.
		// Задаётся параметрами anchorX и anchorY.
		// По сути это позиция курсора в момент масштабирования.
		if (typeof anchorX != "undefined" && typeof anchorY != "undefined") {
			zoomStep = scaleToSet / scale;
			// Рассчитаем, на сколько нужно сместить все объекты,
			// чтобы центр масштабирования остался на месте.
			transX -= ((zoomStep - 1) / scaleToSet) * anchorX;
			transY -= ((zoomStep - 1) / scaleToSet) * anchorY;
		}

		scale = scaleToSet;
		applyTransform();
	};

	var bindContainerEvents = function () {
		var mouseDown = false,
			oldPageX,
			oldPageY,
			container = $(canvas.wrapperEl);

		container
			.mouseup(function (e) {
				// const h = (e.pageY - baseTop) / baseZoom / H - element.offset().top, // / H
				// 	w = (e.pageX - baseLeft) / baseZoom / W - element.offset().left; // / W - 15

				// const h = (e.pageY - baseTop) / baseZoom - element.offset().top,
				// 	w = (e.pageX - baseLeft) / baseZoom - element.offset().left;

				pageY = (e.pageY - baseTop) / baseZoom - element.offset().top;
				pageX = (e.pageX - baseLeft) / baseZoom - element.offset().left;

				pageMY = e.pageY / baseZoom - element.offset().top;
				pageMX = e.pageX / baseZoom - element.offset().left;

				// pageY = e.pageY / baseZoom - element.offset().top;
				// pageX = e.pageX / baseZoom - element.offset().left;
			})
			.mousemove(function (e) {
				// Непосредственно перемещение
				if (mouseDown) {
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
				centerY = event.pageY - offset.top, // координата y центра масштабирования
				zoomStep = Math.pow(1.3, deltaY); // шаг масштабирования, удобный для пользователя.
			baseZoom += deltaY * 0.13;
			setScale(scale * zoomStep, centerX, centerY);

			// Отключим скроллирование страницы
			event.preventDefault();
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

	fabric.util.loadImage("image/map/SkurimMap-min-filter-2.jpg", function (img) {
		var map = new fabric.Image(img),
			curBaseScale;
		if ("ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch)) {
			bindContainerTouchEvents();
		} else {
			bindContainerEvents();
		}

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

		// Отмасштабируем, чтобы сразу видеть всё карту
		curBaseScale = baseScale;
		if (width / height > baseWidth / baseHeight) {
			baseScale = height / baseHeight;
		} else {
			baseScale = width / baseWidth;
		}
		scale *= baseScale / curBaseScale;
		transX *= baseScale / curBaseScale;
		transY *= baseScale / curBaseScale;

		canvas.setWidth(width);
		canvas.setHeight(height);

		// Добавить метки на карту
		createMarkers(canvas, element, applyTransform, W, H);

		// Добавить Пути на карту
		createPath(canvas, element, applyTransform, W, H);

		// Обновить карту
		applyTransform();
	});
};
