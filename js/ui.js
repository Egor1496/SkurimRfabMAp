$(".filter-button").on("click", function (e) {
	$(this).toggleClass("close");
	$(".path-button").addClass("close");
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
	});

$(".filter-item--active").on("click", (e) => {
	$(".filter-item").removeClass("filter-item--active");
	localStorage.setItem(FILTER_TYPE_LOCAL_STORAGE, "");
	location.reload();
});

$(".path-button").on("click", function (e) {
	$(this).toggleClass("close");
	$(".filter-button").addClass("close");
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

$(".canvas-wrap").on("click", function (e) {
	closeDescription();
	$(".path-button").addClass("close");
	$(".filter-button").addClass("close");
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

$(".donat .icon-donat").on("click", function (e) {
	$(".donat .frame").removeClass("close");
	$(".donat").addClass("close");
});

$(".canvas-wrap").on("mouseover", function (e) {
	$(".donat .frame").addClass("close");
	$(".donat").removeClass("close");
});
