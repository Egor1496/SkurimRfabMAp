const handlerContextMap = (e) => {
	const items = [
		`
		<div class="context-item-wrap context-item-path">
			<div class="context-item" data-item="point">
				<img src="image/icon/Point.svg" />
			</div>
			<div class="context-item" data-item="knot">
				<div class="decor-line"></div>
				<img src="image/icon/Knot.svg" class="knot" />
			</div>
			<div class="context-item" data-item="pointL">
				<div class="decor-line"></div>
				<img src="image/icon/Point.svg" />
			</div>
		</div>
		<div class="context-item" data-item="coord"> coord </div>
		`,
	];
	openContext(e, acceptContextMap, items);
};

const handlerContextMarker = (e) => {
	const items = [
		`
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

const acceptContextMap = (selectedNumber) => {
	const select = {
		point: createPoint,
		knot: createKnotL,
		pointL: createPointL,
		coord: () => navigator.clipboard.writeText(baseTop + "\n" + baseLeft),
	};
	select[selectedNumber]();
};
const acceptContextMarker = (selectedNumber) => {
	const select = {
		id: copyIdMarker,
		title: copyTitleMarker,
		description: copyDescriptionMarker,
		icon: copyIconMarker,
		obj: copyObjMarker,
		coord: copyCoordMarker,
	};
	select[selectedNumber]();
};
const acceptContextPath = (selectedNumber) => {
	const select = {
		edit: editPath,
		copy: copyPath,
		delete: deletePath,
	};
	select[selectedNumber]();
};
