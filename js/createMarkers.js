let thisMark = null;

let timerMouse;

const startTimerMouse = (mark, oImg) => {
	isClickDown = true;
	clearTimeout(timerMouse);
	timerMouse = setTimeout(() => {
		if (isClickDown) handlerCleanM(mark, oImg);
	}, 200);
};

const copyIdMarker = () => navigator.clipboard.writeText(thisMark?.id || "");
const copyCoordMarker = () =>
	navigator.clipboard.writeText(`top: ${thisMark?.top},\nleft: ${thisMark?.left},`);
const copyTitleMarker = () => navigator.clipboard.writeText(thisMark?.title || "");
const copyIconMarker = () => navigator.clipboard.writeText(thisMark?.nameIcon || "");
const copyDescriptionMarker = () => {
	navigator.clipboard.writeText(
		thisMark?.description + " \n " + thisMark?.secondDescription.join(" \n ") || ""
	);
};

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

const createMarker = ({ mark, URL, left, top, scaleM }, data) => {
	fabric.Image.fromURL(URL, (oImg) => {
		oImg
			.set("hasControls", false)
			.set("hasBorders", false)
			.set("selectable", false)
			.set("cornerSize", 0)
			.set("originX", "center")
			.set("originY", "center");

		oImg.data = data;

		oImg.scale(scaleM).set("left", left).set("top", top);

		oImg.on("mousedblclick", () => handlerCleanM(mark, oImg));

		oImg.on("mouseover", function (e) {
			typeIcon = "marker";
			thisMark = mark;
			handlerMouseover(mark, oImg);
		});

		oImg.on("mouseout", function (e) {
			typeIcon = "map";
			setScaleHover(oImg, false);
			closeDescription();
			canvas.renderAll();
		});

		oImg.on("mouseup", function (e) {
			isClickDown = false;
			openDescription(mark, oImg);
		});

		oImg.on("mousedown", (e) => {
			startTimerMouse(mark, oImg);
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

		let iconPath = "";

		if (!localStorage.getItem("isHate"))
			iconPath = `image/icon/${(mark?.nameIcon || "circle") + mark.filter}.svg`;
		else iconPath = `image/icon/cave.png`;

		let iconOImg = iconPath;

		let isClean = false;

		cleanLoc.forEach((id) => {
			if (id === mark.id) {
				iconOImg = ICON_CLEAN_URL;
				isClean = true;
			}
		});

		const posM = getPosMark(mark);

		const dataMark = {
			...mark,
			isClean: isClean,
			currUrlImg: iconPath,
		};

		const propMark = {
			mark: mark,
			URL: iconOImg,
			left: posM.left,
			top: posM.top,
			scaleM: getScaleIcon(dataMark.scale),
		};

		createMarker(propMark, dataMark);
	});
}
