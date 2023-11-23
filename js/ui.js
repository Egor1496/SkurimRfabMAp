// FILTER START
$(".filter-button").on("click", function (e) {
	$(this).toggleClass("close");
	$(".path-button").addClass("close");
	$(".books-button").addClass("close");
	$(".books-button").removeClass("disable");
	$(".dragon-button").addClass("close");
	closeAllmodal();
});

if (localStorage.getItem(FILTER_TYPE_LOCAL_STORAGE)?.trim().length > 0) {
	$(".filter-open-icon").show();
	$(".filter-close-icon").hide();
	$(`.filter-item[data-${FILTER_TYPE_LOCAL_STORAGE}="${localStorage.getItem(FILTER_TYPE_LOCAL_STORAGE)}"]`).addClass("filter-item--active");
} else {
	$(".filter-close-icon").show();
	$(".filter-open-icon").hide();
}

$(".filter-item")
	.not(".filter-item--active")
	.on("click", function (e) {
		$(".filter-item").removeClass("filter-item--active");
		$(this).addClass("filter-item--active");
		localStorage.setItem(FILTER_TYPE_LOCAL_STORAGE, $(this).data(FILTER_TYPE_LOCAL_STORAGE));
		location.reload();
		// const type = $(this).data(FILTER_TYPE_LOCAL_STORAGE);
		// listMarkersCanvas.forEach((oImg, i) => {
		// 	if (type?.trim().length > 0 && oImg.data.isClean === false) {
		// 		let urlImg = "image/icon/" + oImg.data.nameIcon;
		// 		if (~oImg.data.type?.trim().indexOf(type?.trim() || "")) {
		// 			replaceImage(urlImg + "_red.svg", oImg);
		// 			// oImg.scale += 0.05;
		// 		} else {
		// 			replaceImage(urlImg + ".svg", oImg);
		// 			// oImg.scale -= 0.05;
		// 		}
		// 	}
		// });
	});

$(".filter-item--active").on("click", (e) => {
	$(".filter-item").removeClass("filter-item--active");
	localStorage.setItem(FILTER_TYPE_LOCAL_STORAGE, "");
	location.reload();
});
// FILTER END

// PATH START
$(".path-button").on("click", function (e) {
	$(this).toggleClass("close");
	$(".filter-button").addClass("close");
	$(".books-button").addClass("close");
	$(".dragon-button").addClass("close");
	closeAllmodal();
	if ($(".path-list .path-item").length > 0) $(".books-button").toggleClass("disable");
});

listPath.forEach((path, i) => {
	$(".path-list").html($(".path-list").html() + `<li class="path-item" data-${PATH_LOCAL_STORAGE}="${i}">${i + 1}</li>`);
});

if (listPath.length > 13) {
	$(".path-list").css("width", 500);
	$(".path-list").css("flex-wrap", "wrap");
}

if (Number(localStorage.getItem(PATH_LOCAL_STORAGE) || -1) >= 0 && $(".path-list .path-item").length > 0) {
	$(".path-open-icon").show();
	$(".path-close-icon").hide();
	$(`.path-item[data-${PATH_LOCAL_STORAGE}=${localStorage.getItem(PATH_LOCAL_STORAGE)}]`).addClass("path-item--active");
} else {
	$(".path-close-icon").show();
	$(".path-open-icon").hide();
}

$(".path-item")
	.not(".path-item--active")
	.on("click", function (e) {
		console.log(123);
		$(".path-item").removeClass("path-item--active");
		$(this).addClass("path-item--active");
		localStorage.setItem(PATH_LOCAL_STORAGE, $(this).data(PATH_LOCAL_STORAGE));
		location.reload();
	});

$(".path-item--active").on("click", (e) => {
	$(".path-item").removeClass("path-item--active");
	localStorage.setItem(PATH_LOCAL_STORAGE, "");
	location.reload();
});

$(".path-list .path-item").on("contextmenu", function (e) {
	e.preventDefault();
	const items = [
		`
		<div class="context-item" data-item="download"> скачать </div>
		<div class="context-item" data-item="delete"> удалить </div>
		`,
	];

	currentPathNumber = Number($(this).data(PATH_LOCAL_STORAGE));
	currentPath = listPath[currentPathNumber];
	openContext(e, acceptContextPath, items);
});
// PATH END

// FILTER-PATH-BOOKS-DRAGON START
$(".canvas-wrap").on("click", function (e) {
	closeDescription();
	closeAllMenu();
});
// FILTER-PATH-BOOKS-DRAGON END

// DONAT START
$(".donat .icon-donat").on("click", function (e) {
	$(".donat .frame").removeClass("close");
	$(".donat").addClass("close");
});

$(".canvas-wrap").on("mouseover", function (e) {
	$(".donat .frame").addClass("close");
	$(".donat").removeClass("close");
});
// DONAT END

// BOOKS START
$(".books-button").on("click", function (e) {
	$(this).toggleClass("close");
	$(".filter-button").addClass("close");
	$(".path-button").addClass("close");
	$(".dragon-button").addClass("close");
	closeAllmodal();
});

$(".books-item").on("mouseenter", function (e) {
	$(".books-wrap .descr-item").removeClass("descr-item--active");
	const item = $(".books-wrap .descr-item").get(Number($(this).data("number")));
	$(item).addClass("descr-item--active");
});
// BOOKS END

// DRAGON START
$(".dragon-button").on("click", function (e) {
	$(this).toggleClass("close");
	$(".filter-button").addClass("close");
	$(".path-button").addClass("close");
	$(".books-button").addClass("close");
	$(".books-button").removeClass("disable");
	closeAllmodal();
});

$(".dragon-item").on("mouseenter", function (e) {
	$(".dragon-wrap .descr-item").removeClass("descr-item--active");
	const item = $(".dragon-wrap .descr-item").get(Number($(this).data("number")));
	$(item).addClass("descr-item--active");
});
// DRAGON END

// SETTINGS START
$(".settings .icon-settings").on("click", function (e) {
	$(".modal-settings").toggleClass("close");
	$(".modal-question").addClass("close");
	closeLoadPath();
	closeAllMenu();
});

$(".modal-settings-bg").on("click", function (e) {
	$(".modal-settings").addClass("close");
});

$(".modal-settings .clear-path").on("click", function (e) {
	localStorage.removeItem(LIST_PATH_LOCAL_STORAGE);
	localStorage.removeItem(PATH_LOCAL_STORAGE);
	location.reload();
});

$(".modal-settings .clear-clean").on("click", function (e) {
	localStorage.removeItem(CLEAN_TYPE);
	location.reload();
});
// SETTINGS END

// question START
$(".icon-link-video").on("click", function (e) {
	$(".modal-question").toggleClass("close");
	closeLoadPath();
	$(".modal-settings").addClass("close");
	closeAllMenu();
});

$(".modal-question-bg").on("click", function (e) {
	closeAllmodal();
});
// question END
