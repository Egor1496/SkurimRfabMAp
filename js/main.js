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
			type: "",
			nameIcon: "",
			scale: 0.3,
			id: "id----------",
			top: ${top},
			left: ${left},
		},
						`;
	navigator.clipboard.writeText(copy);
};

const scaleIcon = (oImg, mark, isSacle, W, H) => {
	if (isSacle) {
		const scaleImg = mark?.scale * W || defaultScaleIcon * W,
			leftImg = mark?.left || 0,
			topImg = mark?.top || 0;
		oImg
			.scale(scaleImg)
			.set("left", leftImg - (oImg.get("width") * scaleImg) / 2) // * W * 1.027
			.set("top", topImg - (oImg.get("height") * scaleImg) / 2); // * H * 1.005
	} else {
		oImg
			.scale(oImg.getObjectScaling().scaleX - 0.2)
			.set("left", oImg.get("left") + 4)
			.set("top", oImg.get("top") + 4);
	}
};

function modal(isOpen = false, mark, element, oImg) {
	const modal = $(".modal-wrap"),
		title = modal.find(".title"),
		description = modal.find(".description"),
		ul = modal.find(".list-info");

	if (isOpen) {
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

		const modalLeft = element.offset().left + oImg.get("left") - modal.width() / 2 + 10 - scrollleft,
			modaTop = element.offset().top + oImg.get("top") - modal.height() - scrolltop;

		modal.css({ left: modalLeft });
		modal.css({ top: modaTop });

		if (ul.length > 1 || title.html().length > 0 || description.html().length > 0) {
			modal.removeClass("close");
		}
	} else {
		modal.addClass("close");
	}
}

function createMarkers(canvas, element, applyTransform, W, H) {
	let filterList;
	if (localStorage.getItem("type")?.trim().length > 0) {
		filterList = listMarkers.filter((mark) => {
			return Boolean(~mark.type?.trim().indexOf(localStorage.getItem("type")?.trim() || ""));
		});
	} else {
		filterList = listMarkers;
	}

	filterList.forEach((mark) => {
		fabric.Image.fromURL(`image/icon/${mark?.nameIcon || "circle"}.${mark?.formatIcon || "svg"}`, (oImg) => {
			mark.type = mark?.type || "";
			mark.title = mark?.title || "";
			mark.description = mark?.description || "";
			mark.secondDescription = mark?.secondDescription || [];

			oImg.set("hasControls", false).set("hasBorders", false).set("cornerSize", 0);

			scaleIcon(oImg, mark, true, W, H);

			oImg.on("mouseover", function (opt) {
				oImg
					.scale(oImg.getObjectScaling().scaleX + 0.2)
					.set("left", oImg.get("left") - 4)
					.set("top", oImg.get("top") - 4);

				modal(true, mark, element, oImg);

				applyTransform();
			});

			oImg.on("mouseout", function (opt) {
				scaleIcon(oImg, null, false);

				modal(false);

				applyTransform();
			});

			oImg.on("mouseup", function (opt) {
				let MarkJSON = JSON.stringify(mark)
					.split(",")
					.map((str) => {
						return "\n" + str;
					});

				navigator.clipboard.writeText(mark.id); //MarkJSON.join() + ","

				modal(true, mark, element, oImg);
			});

			canvas.add(oImg);
		});
	});
}

$(".filter-button").on("click", function (e) {
	$(this).toggleClass("close");
});

if (localStorage.getItem("type")?.trim().length > 0) {
	$(".filter-open-icon").show();
	$(".filter-close-icon").hide();
	$(".filter-item[data-type=" + localStorage.getItem("type") + "]").addClass("filter-item--active");
} else {
	$(".filter-close-icon").show();
	$(".filter-open-icon").hide();
}

$(".filter-item")
	.not(".filter-item--active")
	.on("click", function (e) {
		$(".filter-item").removeClass("filter-item--active");
		$(this).addClass("filter-item--active");
		localStorage.setItem("type", $(this).data("type"));
		location.reload();
	});

$(".filter-item--active").on("click", (e) => {
	$(".filter-item").removeClass("filter-item--active");
	localStorage.setItem("type", "");
	location.reload();
});
