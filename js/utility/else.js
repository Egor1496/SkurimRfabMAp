$(window).mousemove(function (e) {
	winMouseX = e.pageX;
	winMouseY = e.pageY;
});

const coppyObject = (top, left) => {
	const copy = `
{
	title: "",
	description: "",
	secondDescription: [""],
	type: "",
	nameIcon: "",
	scale: 0.6,
	id: "id------",
	top: ${top},
	left: ${left},
},
`;
	navigator.clipboard.writeText(copy);
};

const onDrop = (e, callback) => {
	e.preventDefault();
	if (e.originalEvent.dataTransfer?.items) {
		[...e.originalEvent.dataTransfer.items].forEach((item) => {
			if (item.kind === "file") {
				const file = item.getAsFile();
				const reader = new FileReader();
				reader.readAsText(file);
				reader.onload = () => {
					callback(reader.result);
				};
				reader.onerror = () => {
					console.log(reader.error);
				};
			}
		});
	}
};

const read = (input, callback) => {
	const file = input.files[0];
	const reader = new FileReader();

	reader.readAsText(file);

	reader.onload = () => {
		callback(reader.result);
	};

	reader.onerror = () => {
		console.log(reader.error);
	};
};

const savePathFile = (strArr) => {
	const newPath = JSON.parse(strArr);

	listPath.push(newPath);
	localStorage.setItem(LIST_PATH_LOCAL_STORAGE, JSON.stringify(listPath));
	localStorage.setItem(PATH_LOCAL_STORAGE, listPath.length - 1);
	location.reload();
};

const downloadTxtFile = (text) => {
	const elem = document.createElement("a");
	const file = new Blob([text], { type: "text/plain;charset=utf-8" });
	elem.href = URL.createObjectURL(file);
	elem.download = "RFAB-Path.json";
	document.body.appendChild(elem);
	elem.click();
};

const closeAllMenu = () => {
	$(".path-button").addClass("close");
	$(".filter-button").addClass("close");
	$(".books-button").addClass("close");
	$(".books-button").removeClass("disable");
	$(".dragon-button").addClass("close");
};

const closeAllmodal = () => {
	closeLoadPath();
	$(".modal-question").addClass("close");
	$(".modal-settings").addClass("close");
};
