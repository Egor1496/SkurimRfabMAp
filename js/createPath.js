function createLine({ leftA, topA, leftB, topB }) {
	return new fabric.Line([leftA, topA, leftB, topB], {
		fill: "#2cf704",
		stroke: "#2cf704",
		strokeWidth: 1.5,
		// opacity: 0.7,
		hasControls: false,
		hasBorders: false,
		hasRotatingPoint: false,
		hasControls: false,
		selectable: false,
		cornerSize: 0,
	});
}

function createPath(canvas, element, applyTransform, W, H) {
	const numberPath = localStorage.getItem("path");
	let path = [];

	if (numberPath) path = listPath[Number(numberPath)];

	path.forEach((point, i) => {
		fabric.Image.fromURL("image/icon/" + point.type + ".svg", (oImg) => {
			if (i > 0 && point.line !== false) {
				const newLine = createLine({
					leftA: path[i - 1].left - 0.7,
					topA: path[i - 1].top - 0.7,
					leftB: path[i].left - 0.7,
					topB: path[i].top - 0.7,
				});
				canvas.add(newLine);
				newLine.moveTo(i);
			}

			oImg.set("hasControls", false).set("hasBorders", false).set("cornerSize", 0).set("selectable", false);

			point.scale = point.type === "Point" ? 0.2 : 0.1;

			scaleIcon(oImg, point, true, W, H);

			oImg.on("mouseover", function (opt) {
				if (point.type === "Point")
					oImg
						.scale(oImg.getObjectScaling().scaleX + 0.2)
						.set("left", oImg.get("left") - 4)
						.set("top", oImg.get("top") - 4);

				applyTransform();

				modal(point, element, oImg);
			});

			oImg.on("mouseout", function (opt) {
				if (point.type === "Point") scaleIcon(oImg, null, false);
				applyTransform();

				modalClose();
			});

			// oImg.on("mouseup", function (opt) {
			// 	let MarkJSON = JSON.stringify(mark)
			// 		.split(",")
			// 		.map((str) => {
			// 			return "\n" + str;
			// 		});

			// 	navigator.clipboard.writeText(mark.id); //MarkJSON.join() + ","

			// 	modal(mark, element, oImg);
			// });

			canvas.add(oImg);
			if (point.type !== "Point") oImg.moveTo(path.length);
		});
	});
}
