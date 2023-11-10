const $saveModalWrap = $(".accept-modal-wrap");
const $saveModal = $(".accept-modal");
const $saveModalYes = $(".yes");
const $saveModalNo = $(".no");

$saveModalYes.on("click", function (e) {
	handlerSavePath("yes", e);
});

$saveModalNo.on("click", function (e) {
	handlerSavePath("no", e);
	saveModalClose();
});

const handlerSavePath = (type, e) => {
	if (type === "yes") {
		listPath.push(newPath);
		localStorage.setItem("listPath", JSON.stringify(listPath));
		localStorage.setItem("path", listPath.length - 1);
		location.reload();
	} else {
		location.reload();
	}
};

const saveModalOpen = () => {
	$saveModalWrap.removeClass("close");
};

const saveModalClose = () => {
	$saveModalWrap.addClass("close");
};
