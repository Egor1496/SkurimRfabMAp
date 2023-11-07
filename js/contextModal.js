const openContext = (e, handler = () => {}, menuList = []) => {
	const context = $(".context-wrap");
	context.css({ left: e.clientX });
	context.css({ top: e.clientY });
	context.removeClass("close");

	const contextHtml = $(".context-wrap .context");
	contextHtml.html("");

	menuList.forEach((item) => {
		const newItem = `<div class="context-item">${item}</div>`;
		contextHtml.html(contextHtml.html() + newItem);
	});

	$(".context-item").on("click", function (e) {
		closeContext();
		handler($(this).text());
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

// const handlerContext = (text) => {
// 	console.log(text);
// };
