let thisPath = null,
	oldPageX = -1,
	oldPageY = -1,
	newPageX = -1,
	newPageY = -1,
	oldPageMX = -1,
	oldPageMY = -1,
	newPageMX = -1,
	newPageMY = -1,
	newPath = [];

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
	newPageMY = pageMY;
	newPageMX = pageMX;

	drawPoint(newPageMY, newPageMX, "Point");

	oldPageX = pageX;
	oldPageY = pageY;
	oldPageMX = pageMX;
	oldPageMY = pageMY;

	savePath({
		type: "Point",
		top: newPageY,
		left: newPageX,
		line: false,
	});
};

const createNewPath = (type) => {
	newPageY = pageY;
	newPageX = pageX;
	newPageMY = pageMY;
	newPageMX = pageMX;

	let isLine = false;

	drawPoint(newPageMY, newPageMX, type);

	if (oldPageX > -1 && oldPageY > -1) {
		isLine = true;
		const newLine = drawLine(oldPageMX - 0.7, oldPageMY - 0.7, newPageMX - 0.7, newPageMY - 0.7);
		canvas.add(newLine);
		newLine.moveTo(1);
	}

	oldPageX = pageX;
	oldPageY = pageY;
	oldPageMX = pageMX;
	oldPageMY = pageMY;

	savePath({
		type: type,
		top: newPageY,
		left: newPageX,
		line: isLine,
	});
};

const savePath = (path) => {
	newPath.push(path);
	console.log(newPath);
};

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
