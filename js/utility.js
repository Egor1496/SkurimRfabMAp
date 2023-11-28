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

	group.left = transX * scale;
	group.top = transY * scale;
	group.destroy();

	// Обновим глобальный масштаб на холсте
	canvas.scale = scale;

	// Рендер холста
	canvas.renderAll();
};

var setScale = function (anchorX, anchorY) {
	// Ограничим масштаб
	if (currentZoom > ZOOM_MAX - ZOOM_MIN) {
		currentZoom = ZOOM_MAX - ZOOM_MIN;
	} else if (currentZoom <= 0) {
		currentZoom = 0;
	}

	const scaleToSet = currentZoom * stepZoomMap + baseScale;

	let zoomStep; // необходимое изменение масштаба

	// Центр масштабирования
	if (typeof anchorX != "undefined" && typeof anchorY != "undefined") {
		// Рассчитаем, сместить все объекты, чтобы центр масштабирования остался на месте.
		zoomStep = scaleToSet / scale;
		transX -= ((zoomStep - 1) / scaleToSet) * anchorX;
		transY -= ((zoomStep - 1) / scaleToSet) * anchorY;
	}

	scale = scaleToSet;

	applyTransform();
};

const setPosIcon = (oImg, icon) => {
	const coeffMapScale = map.scaleX / baseScale;
	const scale = icon.scale * COEFF_WIDTH || DEFAULT_SCALE_ICON * COEFF_WIDTH,
		left = icon.left || 0,
		top = icon.top || 0;
	oImg
		.scale(scale * coeffMapScale * (1.3 - currentZoom * 0.08))
		.set("left", left * COEFF_WIDTH)
		.set("top", top * COEFF_HEIGHT);
};

const setScaleHover = (oImg, isSacle) => {
	if (isSacle) {
		oImg.scale(oImg.getObjectScaling().scaleX * ZOOM_ICON_HOVER);
	} else {
		oImg.scale(oImg.getObjectScaling().scaleX / ZOOM_ICON_HOVER);
	}
};

const setScaleIcon = () => {
	const coeffMapScale = map.scaleX / baseScale;
	listMarkersCanvas.forEach((oImg) => {
		const baseScaleIcon = oImg.data.scale * COEFF_WIDTH || DEFAULT_SCALE_ICON * COEFF_WIDTH;

		oImg.scale(baseScaleIcon * coeffMapScale * (1.3 - currentZoom * 0.08));
	});
};

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

function replaceImage(imgUrl, oImg) {
	var imgElem = oImg._element;
	imgElem.src = imgUrl;
	imgElem.onload = () => canvas.renderAll();
}

function replaceImageList(imgUrl, oImgList, typeIcon) {
	let countLoad = 0;
	oImgList.forEach((oImg, i) => {
		var imgElem = oImg._element;
		const urlIcon = imgElem.src.split("/"),
			urlNewIcon = imgUrl[i].split("/");
		const nameIcon = urlIcon[urlIcon.length - 1],
			nameNewIcon = urlNewIcon[urlNewIcon.length - 1];
		if (nameIcon !== nameNewIcon) {
			imgElem.src = imgUrl[i];
			imgElem.onload = () => countLoad++;
			if (typeIcon === "red") {
				oImg.scale(oImg.getObjectScaling().scaleX * ZOOM_ICON_HOVER);
			} else {
				oImg.scale(oImg.getObjectScaling().scaleX / ZOOM_ICON_HOVER);
			}
		} else {
			countLoad++;
		}
	});

	let time = 0;
	const loadInterval = setInterval(() => {
		if (countLoad >= oImgList.length) {
			canvas.renderAll();
			clearInterval(loadInterval);
		}
		time += 100;

		if (time > 5000) {
			clearInterval(loadInterval);
			canvas.renderAll();
		}
	}, 100);
}

const filterRender = (type = "false") => {
	const redList = [],
		urlRedList = [],
		whiteList = [],
		urlWhiteList = [];

	listMarkersCanvas.forEach((oImg, i) => {
		const urlImg = "image/icon/" + oImg.data.nameIcon;

		if (~oImg.data.type?.trim().indexOf(type.trim())) {
			if (oImg.data.isClean === false) {
				redList.push(oImg);
				urlRedList.push(urlImg + "_red.svg");
			}

			oImg.data.currUrlImg = urlImg + "_red.svg";
		} else {
			if (oImg.data.isClean === false) {
				whiteList.push(oImg);
				urlWhiteList.push(urlImg + ".svg");
			}

			oImg.data.currUrlImg = urlImg + ".svg";
		}
	});

	replaceImageList(urlRedList, redList, "red");
	replaceImageList(urlWhiteList, whiteList, "white");
};
