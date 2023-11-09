let thisPath = null,
	oldPageX = -1,
	oldPageY = -1,
	newPageX = -1,
	newPageY = -1;

const deletePath = () => {
	console.log("deletePath");
};
const editPath = () => {
	console.log("editPath");
};

const copyPath = () => {
	let pathJSON =
		JSON.stringify(thisPath)
			.split(",")
			.map((str) => {
				return "\n" + str;
			})
			.join() + ",";

	navigator.clipboard.writeText(pathJSON);
};

const createPoint = () => {
	newPageY = pageY;
	newPageX = pageX;
	drawPoint(newPageY, newPageX, "Point");
	oldPageX = pageX;
	oldPageY = pageY;
	return null;
};

const drawPath = (type) => {
	newPageY = pageY;
	newPageX = pageX;
	drawPoint(newPageY, newPageX, type);
	if (oldPageX > -1 && oldPageY > -1) {
		const newLine = drawLine(oldPageX - 0.7, oldPageY - 0.7, newPageX - 0.7, newPageY - 0.7);
		canvas.add(newLine);
		newLine.moveTo(1);
	}
	oldPageX = pageX;
	oldPageY = pageY;
	return null;
};

const savePath = (path) => {};

function drawLine(leftA, topA, leftB, topB) {
	return new fabric.Line([leftA, topA, leftB, topB], {
		fill: "#2cf704",
		stroke: "#2cf704",
		strokeWidth: 1.5,
		hasControls: false,
		hasBorders: false,
		hasRotatingPoint: false,
		hasControls: false,
		selectable: false,
		cornerSize: 0,
	});
}

function drawPoint(top, left, type) {
	fabric.Image.fromURL(`image/icon/${type}.svg`, (oImg) => {
		oImg.set("hasControls", false).set("hasBorders", false).set("cornerSize", 0).set("selectable", false);

		const point = {
			top: top,
			left: left,
			scale: type === "Point" ? 0.2 : 0.1,
		};

		coordIcon(oImg, point);
		canvas.add(oImg);
		applyTransform();
	});
}

function createPath() {
	const numberPath = localStorage.getItem("path");
	let path = [];

	if (numberPath) path = listPath[Number(numberPath)];

	path.forEach((point, i) => {
		fabric.Image.fromURL("image/icon/" + point.type + ".svg", (oImg) => {
			if (i > 0 && point.line !== false) {
				const newLine = drawLine(path[i - 1].left - 0.7, path[i - 1].top - 0.7, path[i].left - 0.7, path[i].top - 0.7);
				canvas.add(newLine);
				newLine.moveTo(i);
			}

			oImg.set("hasControls", false).set("hasBorders", false).set("cornerSize", 0).set("selectable", false);

			point.scale = point.type === "Point" ? 0.2 : 0.1;

			coordIcon(oImg, point);

			oImg.on("mouseover", function (opt) {
				if (point.type === "Point") {
					scaleIcon(oImg, true);
					typeIcon = "path";
					thisPath = path;
				}

				closeContext();
				openDescription(point, oImg);
				applyTransform();
			});

			oImg.on("mouseout", function (opt) {
				if (point.type === "Point") scaleIcon(oImg, false);
				typeIcon = "map";

				closeDescription();
				applyTransform();
			});

			// oImg.on("mouseup", function (opt) {});

			canvas.add(oImg);
			if (point.type !== "Point") oImg.moveTo(path.length + 1);
		});
	});
}
