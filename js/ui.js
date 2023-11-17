$(".filter-button").on("click", function (e) {
	$(this).toggleClass("close");
	$(".path-button").addClass("close");
});

const filterType = TYPE_MAP === "skyrim" ? "filter-type-sky" : "filter-type-sols";

if (localStorage.getItem(filterType)?.trim().length > 0) {
	$(".filter-open-icon").show();
	$(".filter-close-icon").hide();
	$(`.filter-item[data-${filterType}="${localStorage.getItem(filterType)}"]`).addClass("filter-item--active");
} else {
	$(".filter-close-icon").show();
	$(".filter-open-icon").hide();
}

$(".filter-item")
	.not(".filter-item--active")
	.on("click", function (e) {
		$(".filter-item").removeClass("filter-item--active");
		$(this).addClass("filter-item--active");
		localStorage.setItem(filterType, $(this).data(filterType));
		location.reload();
	});

$(".filter-item--active").on("click", (e) => {
	$(".filter-item").removeClass("filter-item--active");
	localStorage.setItem(filterType, "");
	location.reload();
});

$(".path-button").on("click", function (e) {
	$(this).toggleClass("close");
	$(".filter-button").addClass("close");
});

if (TYPE_MAP === "skyrim") {
	listPathSky.forEach((path, i) => {
		$(".path-list").html($(".path-list").html() + `<li class="path-item" data-path-sky="${i}">${i + 1}</li>`);
	});

	if (listPathSky.length > 13) {
		$(".path-list").css("width", 500);
		$(".path-list").css("flex-wrap", "wrap");
	}
} else {
	listPathSols.forEach((path, i) => {
		$(".path-list").html($(".path-list").html() + `<li class="path-item" data-path-sols="${i}">${i + 1}</li>`);
	});

	if (listPathSols.length > 13) {
		$(".path-list").css("width", 500);
		$(".path-list").css("flex-wrap", "wrap");
	}
}

const pathType = TYPE_MAP === "skyrim" ? "path-sky" : "path-sols";

if (Number(localStorage.getItem(pathType) || -1) >= 0 && $(".path-list .path-item").length > 0) {
	$(".path-open-icon").show();
	$(".path-close-icon").hide();
	$(`.path-item[data-${pathType}=${localStorage.getItem(pathType)}]`).addClass("path-item--active");
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
		localStorage.setItem(pathType, $(this).data(pathType));
		location.reload();
	});

$(".path-item--active").on("click", (e) => {
	$(".path-item").removeClass("path-item--active");
	localStorage.setItem(pathType, "");
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
		<div class="context-item" data-item="copy"> скачать </div>
		<div class="context-item" data-item="delete"> удалить </div>
		`,
	];
	const thisPath = TYPE_MAP === "skyrim" ? "path-sky" : "path-sols";
	currentPathNumber = Number($(this).data(thisPath));
	currentPath = TYPE_MAP === "skyrim" ? listPathSky[currentPathNumber] : listPathSols[currentPathNumber];
	openContext(e, acceptContextPath, items);
});

$(".donat .icon-donat").on("click", function (e) {
	$(".donat .frame").removeClass("close");
});

$(".canvas-wrap").on("mouseover", function (e) {
	$(".donat .frame").addClass("close");
});
