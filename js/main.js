let baseTop = 0,
	baseLeft = 0,
	baseZoom = 1,
	defaultScaleIcon = 0.3;

const coppyObject = (top, left) => {
	// console.log(top, left);
	// `
	// title: "",
	// description: "",
	// secondDescription: [],
	// type: "circle",
	// scale: 0.4,
	// `
	const copy = `
		{
			title: "",
			description: "",
			secondDescription: [""],
			nameIcon: "",
			scale: 0.3,
			id: "id${listMarkers.length + 1}",
			top: ${top},
			left: ${left},
		},
						`;
	navigator.clipboard.writeText(copy);
};

const scaleIcon = (oImg, mark, isSacle) => {
	if (isSacle) {
		const scaleImg = mark?.scale || defaultScaleIcon,
			leftImg = mark.left || 0,
			topImg = mark.top || 0;
		oImg
			.scale(scaleImg)
			.set("left", leftImg - (oImg.get("width") * scaleImg) / 2)
			.set("top", topImg - (oImg.get("height") * scaleImg) / 2);
	} else {
		oImg
			.scale(oImg.getObjectScaling().scaleX - 0.2)
			.set("left", oImg.get("left") + 4)
			.set("top", oImg.get("top") + 4);
	}
};

function createMarkers(canvas, element, applyTransform) {
	listMarkers.forEach((mark) => {
		fabric.Image.fromURL(`image/icon/${mark?.nameIcon || "circle"}.${mark?.formatIcon || "svg"}`, (oImg) => {
			const modal = $(".modal-wrap"),
				title = modal.find(".title"),
				description = modal.find(".description"),
				ul = modal.find(".list-info");

			mark.type = mark?.type || "";
			mark.title = mark?.title || "";
			mark.description = mark?.description || "";
			mark.secondDescription = mark?.secondDescription || [];

			scaleIcon(oImg, mark, true);

			oImg.on("mouseover", function (opt) {
				oImg
					.set("hasControls", false)
					.set("hasBorders", false)
					.set("cornerSize", 0)
					.scale(oImg.getObjectScaling().scaleX + 0.2)
					.set("left", oImg.get("left") - 4)
					.set("top", oImg.get("top") - 4);

				title.html("");
				description.html("");
				ul.html("");

				title.html(mark?.title);
				description.html(mark?.description);

				mark?.secondDescription.forEach((description) => {
					ul.html(ul.html() + `\n <li class="item-info">${description}</li>`);
				});

				const doc = document.documentElement,
					scrollleft = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0),
					scrolltop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

				// console.log(scrollleft, scrolltop);

				const modalLeft = element.offset().left + oImg.get("left") - modal.width() / 2 + 10 - scrollleft,
					modaTop = element.offset().top + oImg.get("top") - modal.height() - scrolltop;

				modal.css({ left: modalLeft });
				modal.css({ top: modaTop });

				if (ul.length > 1 || title.html().length > 0 || description.html().length > 0) {
					modal.removeClass("close");
				}

				applyTransform();
			});

			oImg.on("mouseout", function (opt) {
				scaleIcon(oImg, null, false);

				modal.addClass("close");

				applyTransform();
			});

			oImg.on("mouseup", function (opt) {
				let MarkJSON = JSON.stringify(mark)
					.split(",")
					.map((str) => {
						return "\n" + str;
					});

				navigator.clipboard.writeText(mark.id); //MarkJSON.join() + ","
			});

			canvas.add(oImg);
		});
	});
}
