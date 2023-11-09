const PATHHTML = `
<div class="context-item-wrap context-item-path">
	<div class="context-item" data-item="knot">
		<div class="decor-line"></div>
		<img src="image/icon/Knot.svg" class="knot" />
	</div>
	<div class="context-item" data-item="pointL">
		<div class="decor-line"></div>
		<img src="image/icon/Point.svg" />
	</div>
	<div class="context-item" data-item="point">
		<img src="image/icon/Point.svg" />
	</div>
</div>
`;

const handlerContextMap = (e) => {
	const items = [
		`
		${PATHHTML}
		<div class="context-item" data-item="coord"> coord </div>
		`,
	];
	openContext(e, acceptContextMap, items);
};

const handlerContextMarker = (e) => {
	const items = [
		`
		${PATHHTML}
		<div class="context-item" data-item="id"> id </div>
		<div class="context-item" data-item="title"> заголовок </div>
		<div class="context-item" data-item="description"> описание </div>
		<div class="context-item" data-item="icon"> иконка </div>
		<div class="context-item" data-item="obj"> obj </div>
		<div class="context-item" data-item="coord"> coord </div>
		`,
	];
	openContext(e, acceptContextMarker, items);
};

const handlerContextPath = (e) => {
	const items = [
		`
		<div class="context-item" data-item="copy"> копировать </div>
		<div class="context-item" data-item="edit"> редактировать </div>
		<div class="context-item" data-item="delete"> удалить </div>
		`,
	];
	openContext(e, acceptContextPath, items);
};

const acceptContextMap = (selectedName) => {
	const select = {
		point: createPoint,
		knot: () => drawPath("point"),
		pointL: () => drawPath("point"),
		coord: () => navigator.clipboard.writeText("top:" + pageY + "\n" + "left:" + pageX),
	};
	select[selectedName]();
};
const acceptContextMarker = (selectedName) => {
	const select = {
		point: createPoint,
		knot: createKnotL,
		pointL: createPointL,
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
		copy: copyPath,
		delete: deletePath,
	};
	select[selectedName]();
};
