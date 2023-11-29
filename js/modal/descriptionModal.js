const closeDescription = () => {
	const modal = $(".modal-marker.modal-wrap");
	modal.css({ left: -500 });
	modal.css({ top: -500 });
	modal.addClass("close");
};

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
			scrollOffsetX = (window.scrollX || doc.scrollLeft) - (doc.clientLeft || 0),
			scrollOffsetY = (window.scrollY || doc.scrollTop) - (doc.clientTop || 0);

		const winOffsetX = element.offset().left - scrollOffsetX,
			winOffsetY = element.offset().top - scrollOffsetY;

		const modalWidth = modal.width(),
			modalWidthMid = modal.width() / 2,
			modalHeight = modal.height(),
			modalHeightMid = modal.height() / 2;

		const iconWidth = ((oImg.get("width") * oImg.scaleX) / 2) * 1.1,
			iconHeight = ((oImg.get("height") * oImg.scaleY) / 2) * 1.1;

		const margin = 10;

		let modalLeft = winOffsetX + oImg.get("left") - modalWidthMid,
			modalTop = winOffsetY + oImg.get("top") - modalHeight - iconHeight;

		if (modalLeft < margin) {
			modalLeft = margin;
		} else if (modalLeft + modal.width() > $(window).width()) {
			modalLeft = $(window).width() - modal.width() - margin;
		}

		if (modalTop < margin) {
			modalTop = winOffsetY + oImg.get("top") + iconHeight;

			if (modalTop + modal.height() > $(window).height() - margin) {
				if (oImg.get("left") > element.width() / 2) {
					modalLeft = winOffsetX + oImg.get("left") - modalWidth - iconWidth;
					modalTop = winOffsetY + oImg.get("top") - modalHeightMid;
				} else {
					modalLeft = winOffsetX + oImg.get("left") + iconWidth;
					modalTop = winOffsetY + oImg.get("top") - modalHeightMid;
				}

				if (modalTop < margin) {
					modalTop = margin;
				} else if (modalTop + modalHeight + margin > $(window).height()) {
					modalTop = $(window).height() - modalHeight - margin;
				}
			}
		}

		modal.css({ left: modalLeft });
		modal.css({ top: modalTop });
		modal.removeClass("close");
	}
};
