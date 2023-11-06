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

			oImg.on("mouseover", function (opt) {
				oImg
					.scale(oImg.getObjectScaling().scaleX + 0.2)
					.set("left", oImg.get("left") - 4)
					.set("top", oImg.get("top") - 4);

				modal(mark, element, oImg);

				applyTransform();
			});

			oImg.on("mouseout", function (opt) {
				scaleIcon(oImg, null, false);

				modalClose();

				applyTransform();
			});

			oImg.on("mouseup", function (opt) {
				let MarkJSON = JSON.stringify(mark)
					.split(",")
					.map((str) => {
						return "\n" + str;
					});

				navigator.clipboard.writeText(mark.id); //MarkJSON.join() + ","

				modal(mark, element, oImg);
			});

			canvas.add(oImg);
		});
	});
}
