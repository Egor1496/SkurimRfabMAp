const handlerCleanM = (mark, oImg) => {
	let newList = JSON.parse(localStorage.getItem(CLEAN_TYPE) || "[]");
	let isClean = false;

	newList.forEach((id) => {
		if (id === mark.id) {
			isClean = true;
			return;
		}
	});

	if (isClean) {
		newList = newList.filter((id) => !(id === mark.id));
		replaceOImg(mark, oImg.data.currUrlImg, oImg, false);
	} else {
		newList.push(mark.id);
		replaceOImg(mark, ICON_CLEAN_URL, oImg, true);
	}

	localStorage.setItem(CLEAN_TYPE, JSON.stringify(newList));
};

const handlerMouseover = (mark, oImg) => {
	closeContext();
	closeAllMenu();
	closeAllmodal();
	setScaleHover(oImg, true);
	openDescription(mark, oImg);
	canvas.renderAll();
};
