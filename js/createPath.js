let thisPath = null;

let oldPageX = -1,
	oldPageY = -1,
	oldPageMX = -1,
	oldPageMY = -1,
	oldMapOffsetY = 0,
	oldMapOffsetX = 0;

const copyCoordPath = () => navigator.clipboard.writeText(`top: ${thisPath.top},\nleft: ${thisPath.left},` || "");

const createNewPath = (type, isLine) => {
	drawPoint(pageMY / COEFF_HEIGHT, pageMX / COEFF_WIDTH, type);

	const differenceY = mapOffsetY - oldMapOffsetY,
		differenceX = mapOffsetX - oldMapOffsetX;

	if (oldPageX > -1 && oldPageY > -1 && isLine === true) {
		const lineX1 = oldPageMX + differenceX - 0.7,
			lineY1 = oldPageMY + differenceY - 0.7,
			lineX2 = pageMX - 0.7,
			lineY2 = pageMY - 0.7;
		const newLine = drawLine(lineX1, lineY1, lineX2, lineY2);
		canvas.add(newLine);
		newLine.moveTo(1);
	} else {
		isLine = false;
	}

	oldPageX = pageX;
	oldPageY = pageY;
	oldPageMX = pageMX;
	oldPageMY = pageMY;
	oldMapOffsetY = mapOffsetY;
	oldMapOffsetX = mapOffsetX;

	savePath({
		type: type,
		top: pageY / COEFF_HEIGHT,
		left: pageX / COEFF_WIDTH,
		line: isLine,
	});

	saveModalOpen();
};

const savePath = (path) => {
	newPath.push(path);
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

		setPosIcon(oImg, point);
		canvas.add(oImg);
		applyTransform();
	});
}

function createPath() {
	const numberPath = localStorage.getItem(PATH_LOCAL_STORAGE);
	let path = [];

	if (numberPath) {
		path = listPath[Number(numberPath)];
	}

	path?.forEach((point, i) => {
		fabric.Image.fromURL("image/icon/" + point.type + ".svg", (oImg) => {
			oImg.set("hasControls", false).set("hasBorders", false).set("cornerSize", 0).set("selectable", false);

			point.scale = point.type === "Point" ? 0.2 : 0.1;

			setPosIcon(oImg, point);

			if (point.type === "Knot") oImg.moveTo(1);

			oImg.on("mouseover", function (opt) {
				thisPath = point;
				typeIcon = point.type === "Point" ? "path" : "knot";

				setScaleIcon(oImg, true);
				currentPath = path;
				currentPathNumber = Number(numberPath);

				closeContext();
				openDescription(point, oImg);
				applyTransform();
			});

			oImg.on("mouseout", function (opt) {
				setScaleIcon(oImg, false);
				typeIcon = "map";

				closeDescription();
				applyTransform();
			});

			// oImg.on("mouseup", function (opt) {});

			canvas.add(oImg);
			countLoadPath++;

			if (i > 0 && point.line) {
				const lineX1 = path[i - 1].left - 0.7,
					lineY1 = path[i - 1].top - 0.7,
					lineX2 = path[i].left - 0.7,
					lineY2 = path[i].top - 0.7;
				const newLine = drawLine(lineX1 * COEFF_WIDTH, lineY1 * COEFF_HEIGHT, lineX2 * COEFF_WIDTH, lineY2 * COEFF_HEIGHT);
				canvas.add(newLine);
				newLine.moveTo(1);
			}
		});
	});
}
