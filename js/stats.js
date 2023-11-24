$(".dev-mode").change(function () {
	if (this.checked) $(".stats-dom").addClass("open");
	else $(".stats-dom").removeClass("open");
});

(function () {
	var script = document.createElement("script");
	script.onload = function () {
		var stats = new Stats();
		// add class
		$(stats.dom).addClass("stats-dom");
		$(stats.dom).attr("style", "");
		$(stats.dom).find("canvas").attr("style", "");
		document.body.appendChild(stats.dom);
		requestAnimationFrame(function loop() {
			stats.update();

			requestAnimationFrame(loop);
		});

		if ($(".dev-mode")[0].checked) $(".stats-dom").addClass("open");
	};
	script.src = "https://mrdoob.github.io/stats.js/build/stats.min.js";
	document.head.appendChild(script);
})();
