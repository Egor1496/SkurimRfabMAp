let baseTop = 0,
	baseLeft = 0,
	baseZoom = 1,
	defaultScaleIcon = 0.3,
	mouseLeft = 0,
	mouseTop = 0,
	typeIcon = "map";

$(window).mousemove(function (e) {
	mouseLeft = e.pageX;
	mouseTop = e.pageY;
});

const scaleIcon = (oImg, mark, isSacle, W, H) => {
	if (isSacle) {
		const scaleImg = mark?.scale * W || defaultScaleIcon * W,
			leftImg = mark?.left || 0,
			topImg = mark?.top || 0;
		oImg
			.scale(scaleImg)
			.set("left", leftImg - (oImg.get("width") * scaleImg) / 2)
			.set("top", topImg - (oImg.get("height") * scaleImg) / 2);

		// .set("left", (leftImg - (oImg.get("width") * scaleImg) / 2) * W) // * W * 1.027
		// .set("top", (topImg - (oImg.get("height") * scaleImg) / 2) * H); // * H * 1.005
	} else {
		oImg
			.scale(oImg.getObjectScaling().scaleX - 0.2)
			.set("left", oImg.get("left") + 4)
			.set("top", oImg.get("top") + 4);
	}
};
