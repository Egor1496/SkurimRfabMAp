const PATHHTML = `
<div class="context-item-wrap context-item-path">
	<div class="context-item" data-item="knotL">
		<div class="decor-line"></div>
		<img src="image/icon/Knot.svg" class="knot" />
	</div>
	<div class="context-item" data-item="pointL">
		<div class="decor-line"></div>
		<img src="image/icon/Point.svg" />
	</div>
	<div class="context-item" data-item="knot">
		<img src="image/icon/Knot.svg" class="knot" />
	</div>
	<div class="context-item" data-item="point">
		<img src="image/icon/Point.svg" />
	</div>
</div>
`;

const handlerContextMap = (e) => {
	if (currentZoom === 0) {
		const items = `${PATHHTML}
		<div class="context-item" data-item="coord"> coord </div>
		<div class="context-item" data-item="coppyObject"> obj </div>`;
		openContext(e, acceptContextMap, items);
	}
};

const handlerContextMarker = (e) => {
	const items = `${currentZoom === 0 ? PATHHTML : ""}
		<div class="context-item" data-item="id"> id </div>
		<div class="context-item" data-item="title"> заголовок </div>
		<div class="context-item" data-item="description"> описание </div>
		<div class="context-item" data-item="icon"> иконка </div>
		<div class="context-item" data-item="obj"> obj </div>
		<div class="context-item" data-item="coord"> coord </div>`;
	openContext(e, acceptContextMarker, items);
};

const handlerContextPath = (e) => {
	const items = `
		<div class="context-item" data-item="download"> скачать </div>
		<div class="context-item" data-item="delete"> удалить </div>
		<div class="context-item" data-item="copy"> coord </div>
	`;
	openContext(e, acceptContextPath, items);
};
// <div class="context-item" data-item="edit"> + описание </div>

const acceptContextMap = (selectedName) => {
	const select = {
		point: () => createNewPath("Point", false),
		knot: () => createNewPath("Knot", false),
		knotL: () => createNewPath("Knot", true),
		pointL: () => createNewPath("Point", true),
		coord: () => navigator.clipboard.writeText(`top: ${pageY / COEFF_HEIGHT}, \n left: ${pageX / COEFF_WIDTH},`),
		coppyObject: () => coppyObject(pageY / COEFF_HEIGHT, pageX / COEFF_WIDTH),
	};
	select[selectedName]();
};

const acceptContextMarker = (selectedName) => {
	const select = {
		point: () => {
			createNewPath("Point", false);
		},
		knot: () => {
			createNewPath("Knot", false);
		},
		knotL: () => {
			createNewPath("Knot", true);
		},
		pointL: () => {
			createNewPath("Point", true);
		},
		id: copyIdMarker,
		title: copyTitleMarker,
		description: copyDescriptionMarker,
		icon: copyIconMarker,
		obj: copyObjMarker,
		coord: copyCoordMarker,
	};
	select[selectedName]();
};
const acceptContextPath = (selectedName) => {
	const select = {
		edit: editPath,
		download: downLoadPath,
		delete: deletePath,
		copy: copyCoordPath,
	};
	select[selectedName]();
};

const deletePath = () => {
	listPath.splice(currentPathNumber, 1);
	localStorage.setItem(LIST_PATH_LOCAL_STORAGE, JSON.stringify(listPath));
	localStorage.setItem(PATH_LOCAL_STORAGE, -1);

	location.reload();
};

const editPath = () => {
	console.log("editPath");
};

const downLoadPath = () => {
	let pathJSON = JSON.stringify(currentPath);
	downloadTxtFile(pathJSON);
};
