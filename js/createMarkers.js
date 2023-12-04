let thisMark = null;

const copyIdMarker = () => navigator.clipboard.writeText(thisMark?.id || "");
const copyCoordMarker = () => navigator.clipboard.writeText(`top: ${thisMark?.top},\nleft: ${thisMark?.left},`);
const copyTitleMarker = () => navigator.clipboard.writeText(thisMark?.title || "");
const copyDescriptionMarker = () => navigator.clipboard.writeText(thisMark?.description + " \n " + thisMark?.secondDescription.join(" \n ") || "");
const copyIconMarker = () => navigator.clipboard.writeText(thisMark?.nameIcon || "");

const copyObjMarker = () => {
	let markJSON =
		JSON.stringify(thisMark)
			.split(",")
			.map((str) => {
				return "\n" + str;
			})
			.join() + ",";

	navigator.clipboard.writeText(markJSON);
};

const createMarker = (mark, iconOImg, data) => {
	fabric.Image.fromURL(iconOImg, (oImg) => {
		oImg
			.set("hasControls", false)
			.set("hasBorders", false)
			.set("selectable", false)
			.set("cornerSize", 0)
			.set("originX", "center")
			.set("originY", "center");

		oImg.data = data;

		setPosIcon(oImg, mark);

		oImg.on("mousedblclick", function (e) {
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
				replaceImage(oImg.data.currUrlImg, oImg);
				oImg.set("left", oImg.get("left") - 2);
				oImg.set("top", oImg.get("top") - 2);
				oImg.data.isClean = false;
			} else {
				newList.push(mark.id);
				replaceImage(ICON_CLEAN_URL, oImg);
				oImg.set("left", oImg.get("left") + 2);
				oImg.set("top", oImg.get("top") + 2);
				oImg.data.isClean = true;
			}

			localStorage.setItem(CLEAN_TYPE, JSON.stringify(newList));
		});

		oImg.on("mouseover", function (e) {
			typeIcon = "marker";
			thisMark = mark;
			setScaleHover(oImg, true);
			closeContext();
			openDescription(mark, oImg);
			applyTransform();
			closeAllMenu();
			closeAllmodal();
		});

		oImg.on("mouseout", function (e) {
			setScaleHover(oImg, false);
			closeDescription();
			applyTransform();
			typeIcon = "map";
		});

		oImg.on("mouseup", function (e) {
			openDescription(mark, oImg);
		});

		canvas.add(oImg);
		listMarkersCanvas.push(oImg);
		countLoadMarkers++;
	});
};

function createMarkers() {
	let filtredList = [];
	const type = localStorage.getItem(FILTER_TYPE_LOCAL_STORAGE);

	if (type?.trim().length > 0) {
		listMarkers.forEach((mark) => {
			if (~mark.type?.trim().indexOf(type?.trim() || "")) {
				mark.filter = "_red";
				mark.scale *= ZOOM_ICON_HOVER;
			}
			filtredList.push(mark);
		});
	} else {
		filtredList = listMarkers;
	}

	filtredList.forEach((mark) => {
		mark.filter = mark?.filter || "";
		mark.type = mark?.type || "";
		mark.title = mark?.title || "";
		mark.description = mark?.description || "";
		mark.secondDescription = mark?.secondDescription || [""];

		const iconPath = `image/icon/${(mark?.nameIcon || "circle") + mark.filter}.svg`;

		let iconOImg = iconPath;

		let isClean = false;

		cleanLoc.forEach((id) => {
			if (id === mark.id) {
				iconOImg = ICON_CLEAN_URL;
				isClean = true;
			}
		});

		const data = {
			...mark,
			isClean: isClean,
			currUrlImg: iconPath,
		};

		createMarker(mark, iconOImg, data);
	});
}
