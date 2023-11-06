$("#canvas").on("contextmenu", function (e) {
	e.preventDefault();
	const context = $(".context-wrap");
	context.css({ left: e.clientX });
	context.css({ top: e.clientY });
	context.removeClass("close");
});

$("#canvas").on("click", function (e) {
	e.preventDefault();
	const context = $(".context-wrap");
	context.css({ left: -500 });
	context.css({ top: -500 });
});
