const $saveModalWrap = $(".accept-modal-wrap");
const $saveModal = $(".accept-modal");
const $saveModalYes = $(".accept-modal .yes");
const $saveModalNo = $(".accept-modal .no");

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
		localStorage.setItem(LIST_PATH_LOCAL_STORAGE, JSON.stringify(listPath));
		localStorage.setItem(PATH_LOCAL_STORAGE, listPath.length - 1);
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
