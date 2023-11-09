let thisMark = null;

const copyIdMarker = () => navigator.clipboard.writeText(thisMark?.id || "");
const copyCoordMarker = () => navigator.clipboard.writeText("top:" + thisMark?.top + "\n" + "left:" + thisMark?.left || "");
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

function createMarkers() {
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

			coordIcon(oImg, mark);

			oImg.on("mouseover", function (e) {
				typeIcon = "marker";
				thisMark = mark;
				scaleIcon(oImg, true);

				closeContext();
				openDescription(mark, oImg);
				applyTransform();
			});

			oImg.on("mouseout", function (e) {
				scaleIcon(oImg, false);

				closeDescription();

				applyTransform();

				typeIcon = "map";
			});

			oImg.on("mouseup", function (e) {
				openDescription(mark, oImg);
			});

			canvas.add(oImg);
		});
	});
}
