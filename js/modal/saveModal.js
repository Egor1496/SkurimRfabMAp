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
		if (TYPE_MAP === "skyrim") {
			listPathSky.push(newPath);
			localStorage.setItem("listPathSky", JSON.stringify(listPathSky));
			localStorage.setItem("path-sky", listPathSky.length - 1);
		} else {
			listPathSols.push(newPath);
			localStorage.setItem("listPathSols", JSON.stringify(listPathSols));
			localStorage.setItem("path-sols", listPathSols.length - 1);
		}
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
