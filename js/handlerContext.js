const handlerContextMap = (e) => {
	const items = ["точка +линия", "узел +линия", "точка -линия", "узел -линия", "coord"];
	openContext(e, acceptContextMap, items);
};

const handlerContextMarker = (e) => {
	const items = ["id", "заголовок", "описание", "obj", "coord"];
	openContext(e, acceptContextMarker, items);
};

const handlerContextPath = (e) => {
	const items = ["копировать", "редактировать", "удалить"];
	openContext(e, acceptContextPath, items);
};

const acceptContextMap = (selectedText) => {
	const select = {
		coord: F,
		"точка +линия": F,
		"узел +линия": F,
		"точка -линия": F,
		"узел -линия": F,
	};
	select[selectedText]();
};
const acceptContextMarker = (selectedText) => {
	const select = {
		id: copyIdMarker,
		coord: copyCoordMarker,
		заголовок: copyTitleMarker,
		описание: copyDescriptionMarker,
		obj: copyObjMarker,
	};
	select[selectedText]();
};
const acceptContextPath = (selectedText) => {
	const select = {
		редактировать: editPath,
		копировать: copyPath,
		удалить: deletePath,
	};
	select[selectedText]();
};

const F = () => {
	console.log("f");
};
