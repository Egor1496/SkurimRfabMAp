$(".filter-button").on("click", function (e) {
	$(this).toggleClass("close");
	$(".path-button").addClass("close");
});

if (localStorage.getItem("type")?.trim().length > 0) {
	$(".filter-open-icon").show();
	$(".filter-close-icon").hide();
	$(".filter-item[data-type=" + localStorage.getItem("type") + "]").addClass("filter-item--active");
} else {
	$(".filter-close-icon").show();
	$(".filter-open-icon").hide();
}

$(".filter-item")
	.not(".filter-item--active")
	.on("click", function (e) {
		$(".filter-item").removeClass("filter-item--active");
		$(this).addClass("filter-item--active");
		localStorage.setItem("type", $(this).data("type"));
		location.reload();
	});

$(".filter-item--active").on("click", (e) => {
	$(".filter-item").removeClass("filter-item--active");
	localStorage.setItem("type", "");
	location.reload();
});

$(".path-button").on("click", function (e) {
	$(this).toggleClass("close");
	$(".filter-button").addClass("close");
});

if (Number(localStorage.getItem("path")) > 0 && $(".path-list .path-item").length > 0) {
	$(".path-open-icon").show();
	$(".path-close-icon").hide();
	$(".path-item[data-path=" + localStorage.getItem("path") + "]").addClass("path-item--active");
} else {
	$(".path-close-icon").show();
	$(".path-open-icon").hide();
}

$(".path-item")
	.not(".path-item--active")
	.on("click", function (e) {
		$(".path-item").removeClass("path-item--active");
		$(this).addClass("path-item--active");
		localStorage.setItem("path", $(this).data("path"));
		location.reload();
	});

$(".path-item--active").on("click", (e) => {
	$(".path-item").removeClass("path-item--active");
	localStorage.setItem("path", "");
	location.reload();
});

$(".canvas-wrap").on("click", function (e) {
	closeDescription();
	$(".path-button").addClass("close");
	$(".filter-button").addClass("close");
});
