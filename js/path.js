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
			description: "123123123",
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
			description: "123123123",
		},
		{
			type: "Knot",
			top: 546,
			left: 1013,
			line: false,
		},
		{
			type: "Point",
			top: 488.3008003234863,
			left: 1147.8672008514404,
			description: "123123123",
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
			description: "123123123",
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
			description: "123123123",
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
			description: "123123123",
		},
	],
	[
		{
			type: "Point",
			top: 287.3008003234863,
			left: 403.86720085144043,
			description: "123123123",
		},
		{
			type: "Knot",
			top: 269.3008003234863,
			left: 429.86720085144043,
			description: "123123123",
		},
		{
			type: "Knot",
			top: 273.3008003234863,
			left: 470.86720085144043,
			description: "123123123",
		},
		{
			type: "Point",
			top: 305.3008003234863,
			left: 482.86720085144043,
			description: "123123123",
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
