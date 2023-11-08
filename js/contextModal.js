const openContext = (e, handler, itemsHtml) => {
	const context = $(".context-wrap");
	context.css({ left: e.clientX });
	context.css({ top: e.clientY });
	context.removeClass("close");

	const contextHtml = $(".context-wrap .context");
	contextHtml.html("");

	contextHtml.html(contextHtml.html() + itemsHtml);

	$(".context-item").on("click", function (e) {
		closeContext();
		handler($(this).data("item"));
	});
};

const closeContext = () => {
	const context = $(".context-wrap");
	context.css({ left: -500 });
	context.css({ top: -500 });
};

$(".canvas-wrap").on("contextmenu", function (e) {
	e.preventDefault();
	switch (typeIcon) {
		case "map":
			handlerContextMap(e);
			break;

		case "marker":
			handlerContextMarker(e);
			break;

		case "path":
			handlerContextPath(e);
			break;
	}
});

$(".canvas-wrap").on("click", function (e) {
	closeContext();
});
