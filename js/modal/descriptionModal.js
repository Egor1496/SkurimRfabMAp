const closeDescription = () => {
	const modal = $(".modal-marker.modal-wrap");
	modal.css({ left: -500 });
	modal.css({ top: -500 });
	modal.addClass("close");
};

const openModal = () => {};

const openDescription = (mark, oImg) => {
	const modal = $(".modal-marker.modal-wrap"),
		title = modal.find(".title"),
		description = modal.find(".description"),
		ul = modal.find(".list-info");

	title.html("");
	description.html("");
	ul.html("");

	title.html(mark?.title || "");
	description.html(mark?.description || "");

	mark.secondDescription = mark?.secondDescription || [];

	if (ul.length > 1 || title.html().length > 0 || description.html().length > 0) {
		mark.secondDescription.forEach((description) => {
			ul.html(ul.html() + `\n <li class="item-info">${description}</li>`);
		});

		const doc = document.documentElement,
			scrollleft = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0),
			scrolltop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

		let modalLeft = element.offset().left + oImg.get("left") - modal.width() / 2 - scrollleft,
			modaTop = element.offset().top + oImg.get("top") - oImg.get("height") / 3 - modal.height() - scrolltop;

		if (modalLeft < 0) {
			modalLeft = 0;
		}
		if (modaTop < 0) {
			modaTop += 5 + modal.height() + oImg.get("width") * oImg.scaleX;
			if (modaTop + modal.height() > $(window).height()) {
				if (winMouseX <= modal.width() && winMouseY <= modal.height()) {
					modaTop = 0;
					modalLeft = $(window).width() - modal.width();
				} else {
					modaTop = 0;
					modalLeft = 0;
				}
			}
		}
		if (modalLeft + modal.width() > $(window).width()) {
			modalLeft = $(window).width() - modal.width();
		}

		modal.css({ left: modalLeft });
		modal.css({ top: modaTop });
		modal.removeClass("close");
	}
};
