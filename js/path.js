const listPath = [
	[
		{
			type: "Point",
			top: 559.661994934082,
			left: 568.3909759521484,
			description: "Шкуры.",
		},
		{
			type: "Point",
			top: 581,
			left: 539,
			description: "Опыт.",
		},
		{
			type: "Knot",
			top: 510.7760009765625,
			left: 807.9280090332031,
		},
		{
			type: "Point",
			top: 543,
			left: 952,
			description: "Опыт.",
		},
		{
			type: "Knot",
			top: 546,
			left: 1013,
		},
		{
			type: "Point",
			top: 488.3008003234863,
			left: 1147.8672008514404,
			description: "Опыт.",
		},
	],
	[
		{
			type: "Point",
			top: 569.661994934082,
			left: 518.3909759521484,
			description: "Шкуры.",
		},
		{
			type: "Point",
			top: 591,
			left: 589,
			description: "Опыт.",
		},
		{
			type: "Knot",
			top: 480.7760009765625,
			left: 807.9280090332031,
		},
		{
			type: "Point",
			top: 523,
			left: 962,
			description: "Опыт.",
		},
		{
			type: "Knot",
			top: 556,
			left: 1013,
		},
		{
			type: "Point",
			top: 458.3008003234863,
			left: 1147.8672008514404,
			description: "Опыт.",
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
