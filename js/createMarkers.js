let thisMark = null;

const copyIdMarker = () => navigator.clipboard.writeText(thisMark?.id || "");
const copyCoordMarker = () => navigator.clipboard.writeText(thisMark?.left + "\n" + thisMark?.top || "");
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

function createMarkers(canvas, element, applyTransform, W, H) {
	let filterList = [];
	const type = localStorage.getItem("type");
	if (type?.trim().length > 0) {
		listMarkers.forEach((mark) => {
			if (~mark.type?.trim().indexOf(type?.trim() || "")) {
				mark.cssFilter = "_red";
				mark.scale += 0.05;
			} else {
				mark.scale -= 0.05;
			}
			filterList.push(mark);
		});
	} else {
		filterList = listMarkers;
	}

	filterList.forEach((mark) => {
		mark.cssFilter = mark?.cssFilter || "";
		mark.type = mark?.type || "";
		mark.title = mark?.title || "";
		mark.description = mark?.description || "";
		mark.secondDescription = mark?.secondDescription || [""];

		const postfix = mark.cssFilter;

		const iconPath = `image/icon/${(mark?.nameIcon || "circle") + postfix}.${mark?.formatIcon || "svg"}`;

		fabric.Image.fromURL(iconPath, (oImg) => {
			oImg.set("hasControls", false).set("hasBorders", false).set("cornerSize", 0).set("selectable", false);

			scaleIcon(oImg, mark, true, W, H);

			oImg.on("mouseover", function (e) {
				oImg
					.scale(oImg.getObjectScaling().scaleX + 0.2)
					.set("left", oImg.get("left") - 4)
					.set("top", oImg.get("top") - 4);

				openDescription(mark, element, oImg);
				closeContext();

				applyTransform();

				typeIcon = "marker";
				thisMark = mark;
			});

			oImg.on("mouseout", function (e) {
				scaleIcon(oImg, null, false);

				closeDescription();

				applyTransform();

				typeIcon = "map";
			});

			oImg.on("mouseup", function (e) {
				openDescription(mark, element, oImg);
			});

			canvas.add(oImg);
		});
	});
}
