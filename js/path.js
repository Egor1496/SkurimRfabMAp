const lP = JSON.parse(localStorage.getItem("listPath")) || [];

if (lP?.length > 0) {
	listPath = lP;
} else {
	listPath = [
		[
			{
				type: "Knot",
				top: 260.3008003234863,
				left: 430.86720085144043,
				line: false,
			},
			{
				type: "Knot",
				top: 285.3008003234863,
				left: 294.86720085144043,
				line: true,
			},
			{
				type: "Knot",
				top: 563.3008003234864,
				left: 92.86720085144043,
				line: false,
			},
			{
				type: "Knot",
				top: 460.30080032348644,
				left: 207.86720085144043,
				line: true,
			},
			{
				type: "Knot",
				top: 452.30080032348644,
				left: 216.86720085144043,
				line: true,
			},
			{
				type: "Knot",
				top: 284.30080032348644,
				left: 292.86720085144043,
				line: false,
			},
			{
				type: "Knot",
				top: 330.30080032348644,
				left: 149.86720085144043,
				line: true,
			},
			{
				type: "Knot",
				top: 563.3008003234863,
				left: 91.86720085144043,
				line: false,
			},
			{
				type: "Knot",
				top: 652.3008003234863,
				left: 134.86720085144043,
				line: true,
			},
			{
				type: "Knot",
				top: 664.3008003234863,
				left: 178.86720085144043,
				line: true,
			},
			{
				type: "Knot",
				top: 609.300800323486,
				left: 700.1973978137139,
				line: false,
			},
			{
				type: "Knot",
				top: 584.300800323486,
				left: 724.1973978137139,
				line: true,
			},
			{
				type: "Knot",
				top: 609.300800323486,
				left: 700.1973978137139,
				line: false,
			},
			{
				type: "Knot",
				top: 571.300800323486,
				left: 657.1973978137139,
				line: true,
			},
			{
				type: "Knot",
				top: 548.300800323486,
				left: 740.1973978137139,
				line: true,
			},
			{
				type: "Knot",
				top: 504.300800323486,
				left: 713.1973978137139,
				line: true,
			},
			{
				type: "Knot",
				top: 432.300800323486,
				left: 733.1973978137139,
				line: true,
			},
			{
				type: "Knot",
				top: 338.300800323486,
				left: 703.1973978137139,
				line: true,
			},
			{
				type: "Knot",
				top: 259.300800323486,
				left: 717.1973978137139,
				line: true,
			},
			{
				type: "Knot",
				top: 262.300800323486,
				left: 979.1973978137139,
				line: false,
			},
			{
				type: "Knot",
				top: 230.300800323486,
				left: 1007.1973978137139,
				line: true,
			},
			{
				type: "Knot",
				top: 262.300800323486,
				left: 980.1973978137139,
				line: false,
			},
			{
				type: "Knot",
				top: 282.300800323486,
				left: 1023.1973978137139,
				line: true,
			},
			{
				type: "Knot",
				top: 261.300800323486,
				left: 979.1973978137139,
				line: false,
			},
			{
				type: "Knot",
				top: 212.300800323486,
				left: 944.1973978137139,
				line: true,
			},
			{
				type: "Knot",
				top: 261.300800323486,
				left: 977.1973978137139,
				line: false,
			},
			{
				type: "Knot",
				top: 300.300800323486,
				left: 923.1973978137139,
				line: true,
			},
			{
				type: "Knot",
				top: 296.300800323486,
				left: 884.1973978137139,
				line: true,
			},
			{
				type: "Knot",
				top: 570.3008003234863,
				left: 655.1973978137139,
				line: false,
			},
			{
				type: "Knot",
				top: 539.3008003234863,
				left: 546.1973978137139,
				line: true,
			},
			{
				type: "Knot",
				top: 474.30080032348644,
				left: 1058.197397813714,
				line: false,
			},
			{
				type: "Knot",
				top: 419.30080032348644,
				left: 1057.197397813714,
				line: true,
			},
			{
				type: "Knot",
				top: 475.30080032348644,
				left: 1058.197397813714,
				line: false,
			},
			{
				type: "Knot",
				top: 545.3008003234864,
				left: 1069.197397813714,
				line: true,
			},
			{
				type: "Knot",
				top: 570.3008003234864,
				left: 1137.197397813714,
				line: true,
			},
			{
				type: "Knot",
				top: 608.3008003234864,
				left: 1106.197397813714,
				line: true,
			},
			{
				type: "Knot",
				top: 669.3008003234864,
				left: 1100.197397813714,
				line: true,
			},
			{
				type: "Knot",
				top: 696.3008003234864,
				left: 1013.1973978137139,
				line: true,
			},
			{
				type: "Knot",
				top: 677.3008003234864,
				left: 994.1973978137139,
				line: true,
			},
			{
				type: "Knot",
				top: 651.3008003234864,
				left: 1023.1973978137139,
				line: true,
			},
			{
				type: "Knot",
				top: 604.3008003234864,
				left: 1013.1973978137139,
				line: true,
			},
			{
				type: "Knot",
				top: 606.3008003234864,
				left: 976.1973978137139,
				line: true,
			},
			{
				type: "Knot",
				top: 593.3008003234864,
				left: 943.1973978137139,
				line: true,
			},
			{
				type: "Knot",
				top: 632.3008003234864,
				left: 921.1973978137139,
				line: true,
			},
			{
				type: "Knot",
				top: 610.3008003234864,
				left: 698.1973978137139,
				line: false,
			},
			{
				type: "Knot",
				top: 620.3008003234864,
				left: 860.1973978137139,
				line: true,
			},
			{
				type: "Knot",
				top: 883.2948003234864,
				left: 1178.197397813714,
				line: false,
			},
			{
				type: "Knot",
				top: 844.2948003234864,
				left: 1199.197397813714,
				line: true,
			},
			{
				type: "Knot",
				top: 749.2948003234864,
				left: 1164.197397813714,
				line: true,
			},
			{
				type: "Knot",
				top: 843.2948003234864,
				left: 1200.197397813714,
				line: false,
			},
			{
				type: "Knot",
				top: 871.2948003234864,
				left: 1253.197397813714,
				line: true,
			},
			{
				type: "Knot",
				top: 915.2948003234864,
				left: 1325.197397813714,
				line: true,
			},
			{
				type: "Knot",
				top: 985.2948003234864,
				left: 1225.197397813714,
				line: true,
			},
			{
				type: "Knot",
				top: 851.2948003234864,
				left: 879.1973978137139,
				line: false,
			},
			{
				type: "Knot",
				top: 902.2948003234864,
				left: 935.1973978137139,
				line: true,
			},
			{
				type: "Knot",
				top: 911.2948003234864,
				left: 935.1973978137139,
				line: true,
			},
			{
				type: "Knot",
				top: 922.2948003234864,
				left: 928.1973978137139,
				line: true,
			},
			{
				type: "Knot",
				top: 924.2948003234864,
				left: 904.1973978137139,
				line: true,
			},
			{
				type: "Point",
				top: 834.2948003234864,
				left: 711.1973978137139,
				line: false,
			},
			{
				type: "Knot",
				top: 805.2948003234864,
				left: 675.1973978137139,
				line: true,
			},
			{
				type: "Knot",
				top: 758.2948003234864,
				left: 644.1973978137139,
				line: true,
			},
		],
	];
	localStorage.setItem("listPath", JSON.stringify(listPath));
}

listPath.forEach((path, i) => {
	$(".path-list").html($(".path-list").html() + `<li class="path-item" data-path="${i}">${i + 1}</li>`);
});

if (listPath.length > 13) {
	$(".path-list").css("width", 500);
	$(".path-list").css("flex-wrap", "wrap");
}
