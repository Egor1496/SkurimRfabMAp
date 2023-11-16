const $loadPathButton = $(".add-path .icon-add-path"),
	$modalLoadPath = $(".add-path .modal"),
	$modalLoadPathClose = $(".add-path .modal.close"),
	$dropZone = $(".modal_drop-zone"),
	$dropZoneInput = $(".modal_drop-zone input");

const openLoadPath = () => {
	$modalLoadPath.removeClass("close");
};

const closeLoadPath = () => {
	$modalLoadPath.addClass("close");
};

$loadPathButton.on("click", function (e) {
	openLoadPath();
});

$(".add-path_modal_bg").on("click", function (e) {
	closeLoadPath();
});

$dropZone.on("drop", function (e) {
	onDrop(e, (result) => {
		savePathFile(result);
	});
});

$dropZone.on("dragover", function (e) {
	e.preventDefault();
});

$dropZoneInput.on("change", function (e) {
	read(e.target, (result) => {
		savePathFile(result);
	});
});
