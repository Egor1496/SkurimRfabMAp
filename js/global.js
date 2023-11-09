let baseTop = 0,
	baseLeft = 0,
	baseZoom = 1,
	defaultScaleIcon = 0.3,
	mouseLeft = 0,
	mouseTop = 0,
	typeIcon = "map",
	pageY = 0,
	pageX = 0;

const W = 1;
H = 1;

// const X = $("body").width() / element[0].width,
// 	H = $("body").height() / element[0].height;

// const W = X > H ? H : X;

let element = $("#canvas");

// element[0].width = element[0].width * W;
// element[0].height = element[0].height * W;

let canvas = new fabric.Canvas(element.get(0), {
	selection: false, // возможность выбора группы
	scale: 1, // масштаб по умолчанию
	// renderOnAddRemove: false, // авто-отрисовка
	moveCursor: "default", // сброс курсора
	hoverCursor: "default", // сброс курсора
});

let baseWidth = 0, // начальная ширина
	baseHeight = 0, // начальная высота
	baseScale = 1, // начальный масштаб 0.5
	width = 0, // текущая ширина
	height = 0, // текущая высота
	transX = 0, // текущее смещение по оси x
	transY = 0, // текущее смещение по оси y
	scale = 2; // текущий масштаб в целом

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
	baseTop = group.top;
	baseLeft = group.left;
	group.left = transX * scale; // group.getWidth() / 2 + transX * scale;
	group.top = transY * scale; //group.getHeight() / 2 + transY * scale;
	group.destroy();

	// Обновим глобальный масштаб на холсте
	canvas.scale = scale;

	// Отрисуем холст с изменёнными объектами
	canvas.renderAll();
};

$(window).mousemove(function (e) {
	mouseLeft = e.pageX;
	mouseTop = e.pageY;
});

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
