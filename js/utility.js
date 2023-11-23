const applyTransform = function () {
	var maxTransX, maxTransY, minTransX, minTransY, group;

	const space = 0;

	// Рассчитаем пороговые значения для смещения по оси x
	if (baseWidth * scale <= width) {
		// Карта целиком помещается на холст
		maxTransX = (width - baseWidth * scale) / (2 * scale);
		minTransX = (width - baseWidth * scale) / (2 * scale);
	} else {
		// Не влазит
		maxTransX = 0;
		minTransX = (width - baseWidth * scale) / scale;
	}
	// Ограничим смещение пороговыми значениями
	if (transX > maxTransX + space) {
		transX = maxTransX + space;
	} else if (transX < minTransX - space) {
		transX = minTransX - space;
	}

	// То же самое для оси y
	if (baseHeight * scale <= height) {
		maxTransY = (height - baseHeight * scale) / (2 * scale);
		minTransY = (height - baseHeight * scale) / (2 * scale);
	} else {
		maxTransY = 0;
		minTransY = (height - baseHeight * scale) / scale;
	}
	if (transY > maxTransY + space) {
		transY = maxTransY + space;
	} else if (transY < minTransY - space) {
		transY = minTransY - space;
	}

	// Сгруппируем все объекты на холсте и применим трансформацию
	group = new fabric.Group(canvas.getObjects());
	group.scaleX = scale / canvas.scale;
	group.scaleY = scale / canvas.scale;

	mapOffsetY = group.top;
	mapOffsetX = group.left;

	group.left = transX * scale; // group.getWidth() / 2 + transX * scale;
	group.top = transY * scale; //group.getHeight() / 2 + transY * scale;
	group.destroy();

	// Обновим глобальный масштаб на холсте
	canvas.scale = scale;

	// Отрисуем холст с изменёнными объектами
	canvas.renderAll();
};

var setScale = function (scaleToSet, anchorX, anchorY) {
	var zoomMax = ZOOM_MAX, // максимально n-ти кратное увеличение
		zoomMin = ZOOM_MIN, // минимальное увеличение - реальный размер картинки
		zoomStep; // необходимое изменение масштаба

	// Ограничим масштаб, если нужно
	if (scaleToSet > zoomMax * baseScale) {
		scaleToSet = zoomMax * baseScale;
		currentZoom = zoomMax - zoomMin;
	} else if (scaleToSet < zoomMin * baseScale) {
		scaleToSet = zoomMin * baseScale;
		currentZoom = 0;
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

const setPosIcon = (oImg, icon) => {
	const scale = icon?.scale * COEFF_WIDTH || DEFAULT_SCALE_ICON * COEFF_WIDTH,
		left = icon?.left || 0,
		top = icon?.top || 0;
	oImg
		.scale(scale)
		.set("left", left * COEFF_WIDTH)
		.set("top", top * COEFF_HEIGHT);
};

const setScaleHover = (oImg, isSacle) => {
	if (isSacle) oImg.scale(oImg.getObjectScaling().scaleX + 0.2);
	else oImg.scale(oImg.getObjectScaling().scaleX - 0.2);
};

const setScaleIcon = () => {
	// const SCALE_ZOOM = (ZOOM_MAX - ZOOM_MIN - currentZoom) * (2 / (ZOOM_MAX - ZOOM_MIN)) + 0.7;
	// listMarkersCanvas.forEach((oImg, i) => {
	// const SCALE_CANVAS = listMarkers[i]?.scale * COEFF_WIDTH || DEFAULT_SCALE_ICON * COEFF_WIDTH;
	// oImg.scale();
	// });
};

function replaceImage(imgUrl, oImg) {
	var imgElem = oImg._element;
	imgElem.src = imgUrl;
	imgElem.onload = () => canvas.renderAll();
}

$(window).mousemove(function (e) {
	winMouseX = e.pageX;
	winMouseY = e.pageY;
});

const coppyObject = (top, left) => {
	const copy = `
{
	title: "",
	description: "",
	secondDescription: [""],
	type: "",
	nameIcon: "",
	scale: 0.6,
	id: "id------",
	top: ${top},
	left: ${left},
},
`;
	navigator.clipboard.writeText(copy);
};

const onDrop = (e, callback) => {
	e.preventDefault();
	if (e.originalEvent.dataTransfer?.items) {
		[...e.originalEvent.dataTransfer.items].forEach((item) => {
			if (item.kind === "file") {
				const file = item.getAsFile();
				const reader = new FileReader();
				reader.readAsText(file);
				reader.onload = () => {
					callback(reader.result);
				};
				reader.onerror = () => {
					console.log(reader.error);
				};
			}
		});
	}
};

const read = (input, callback) => {
	const file = input.files[0];
	const reader = new FileReader();

	reader.readAsText(file);

	reader.onload = () => {
		callback(reader.result);
	};

	reader.onerror = () => {
		console.log(reader.error);
	};
};

const savePathFile = (strArr) => {
	const newPath = JSON.parse(strArr);

	listPath.push(newPath);
	localStorage.setItem(LIST_PATH_LOCAL_STORAGE, JSON.stringify(listPath));
	localStorage.setItem(PATH_LOCAL_STORAGE, listPath.length - 1);
	location.reload();
};

const downloadTxtFile = (text) => {
	const elem = document.createElement("a");
	const file = new Blob([text], { type: "text/plain;charset=utf-8" });
	elem.href = URL.createObjectURL(file);
	elem.download = "RFAB-Path.json";
	document.body.appendChild(elem);
	elem.click();
};

const closeAllMenu = () => {
	$(".path-button").addClass("close");
	$(".filter-button").addClass("close");
	$(".books-button").addClass("close");
	$(".books-button").removeClass("disable");
	$(".dragon-button").addClass("close");
};

const closeAllmodal = () => {
	closeLoadPath();
	$(".modal-question").addClass("close");
	$(".modal-settings").addClass("close");
};
