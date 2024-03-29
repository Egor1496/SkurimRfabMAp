// FILTER START
$(".filter-button").on("click", function (e) {
	$(this).toggleClass("close");
	$(".path-button").addClass("close");
	$(".books-button").addClass("close");
	$(".books-button").removeClass("disable");
	$(".dragon-button").addClass("close");
	closeAllmodal();
});

const deleteActive = () => {
	$(".filter-open-icon").hide();
	$(".filter-close-icon").show();
	$(".filter-item--icon").removeClass("filter-item--active");
	$(".filter-item_icon").removeClass("filter-item--active");
	$(".filter-item_inner").removeClass("filter-item--active");
};

if (localStorage.getItem(FILTER_TYPE_LOCAL_STORAGE)?.trim().length > 0) {
	$(".filter-open-icon").show();
	$(".filter-close-icon").hide();
	$(`.filter-list [data-${FILTER_TYPE_LOCAL_STORAGE}="${localStorage.getItem(FILTER_TYPE_LOCAL_STORAGE)}"]`).addClass("filter-item--active");
} else {
	$(".filter-open-icon").hide();
	$(".filter-close-icon").show();
}

const setActive = (el) => {
	$(".filter-open-icon").show();
	$(".filter-close-icon").hide();
	$(el).addClass("filter-item--active");
};

const setStore = (str) => {
	localStorage.setItem(FILTER_TYPE_LOCAL_STORAGE, str);
};

const handlerClick = (el, isMulti) => {
	if ($(el).hasClass("filter-item--active")) {
		deleteActive();
		setStore("");
		filterRender();
	} else {
		deleteActive();
		setActive(el);
		setStore($(el).data(FILTER_TYPE_LOCAL_STORAGE));
		const type = $(el).data(FILTER_TYPE_LOCAL_STORAGE);
		filterRender(type, isMulti);
	}
};

$(".filter-item--icon, .filter-item_inner").on("click", function (e) {
	handlerClick(this);
});

$(".filter-item_icon").on("click", function (e) {
	handlerClick(this, true);
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

$(".modal-settings-select-fps .input-label").on("click", function (e) {
	$(".modal-settings-select-fps .input-label").removeClass("input-label--active");
	$(this).addClass("input-label--active");
	const settings = { fps: $(this).attr("data-fps") || 16 };
	localStorage.setItem("rfabMapSettings", JSON.stringify(settings));
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
