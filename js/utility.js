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
	var zoomMax = 8, // максимально n-ти кратное увеличение
		zoomMin = 2, // минимальное увеличение - реальный размер картинки
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

const coordIcon = (oImg, icon) => {
	const scale = icon?.scale * W || defaultScaleIcon * W,
		left = icon?.left || 0,
		top = icon?.top || 0;
	oImg
		.scale(scale)
		.set("left", left - (oImg.get("width") * scale) / 2)
		.set("top", top - (oImg.get("height") * scale) / 2);

	// .set("left", (left - (oImg.get("width") * scale) / 2) * W) // * W * 1.027
	// .set("top", (top - (oImg.get("height") * scale) / 2) * H); // * H * 1.005
};

const scaleIcon = (oImg, isSacle) => {
	if (isSacle) {
		oImg
			.scale(oImg.getObjectScaling().scaleX + 0.2)
			.set("left", oImg.get("left") - 4)
			.set("top", oImg.get("top") - 4);
	} else {
		oImg
			.scale(oImg.getObjectScaling().scaleX - 0.2)
			.set("left", oImg.get("left") + 4)
			.set("top", oImg.get("top") + 4);
	}
};

function getMouseCoord(e) {
	var pointer = canvas.getPointer(e);
	var posX = pointer.x;
	var posY = pointer.y;
	console.log(posX + ", " + posY);
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
	scale: 0.3,
	id: "id----------",
	top: ${top},
	left: ${left},
},
`;
	navigator.clipboard.writeText(copy);
};
