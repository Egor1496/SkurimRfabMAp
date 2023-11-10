const listPath = [
	[
		{
			type: "Point",
			top: 277.3008003234863,
			left: 576.8672008514404,
			line: false,
		},
		{
			type: "Knot",
			top: 298.3008003234863,
			left: 594.8672008514404,
			line: true,
		},
		{
			type: "Point",
			top: 331.3008003234863,
			left: 582.8672008514404,
			line: true,
		},
		{
			type: "Knot",
			top: 337.3008003234863,
			left: 611.8672008514404,
			line: true,
		},
		{
			type: "Knot",
			top: 369.3008003234863,
			left: 576.8672008514404,
			line: true,
		},
		{
			type: "Point",
			top: 500.3008003234863,
			left: 801.1973978137139,
			line: false,
		},
		{
			type: "Point",
			top: 525.3008003234863,
			left: 867.1973978137139,
			line: true,
		},
		{
			type: "Knot",
			top: 553.3008003234863,
			left: 854.1973978137139,
			line: true,
		},
		{
			type: "Point",
			top: 567.3008003234863,
			left: 893.1973978137139,
			line: true,
		},
		{
			type: "Knot",
			top: 601.3008003234863,
			left: 849.1973978137139,
			line: true,
		},
	],
];

listPath.forEach((path, i) => {
	$(".path-list").html($(".path-list").html() + `<li class="path-item" data-path="${i}">${i}</li>`);
});

if (listPath.length > 13) {
	$(".path-list").css("width", 500);
	$(".path-list").css("flex-wrap", "wrap");
}
