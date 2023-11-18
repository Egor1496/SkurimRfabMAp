let baseWidth = 0, // начальная ширина
	baseHeight = 0, // начальная высота
	baseScale = 1; // начальный масштаб

let mapOffsetY = 0, // Внутренний отступ карты от холста (top).
	mapOffsetX = 0; // Внутренний отступ карты от холста (left).

let winMouseX = 0, // Курсор по оси X (от окна).
	winMouseY = 0; // Курсор по оси Y (от окна).

let pageY = 0, // Курсор по оси X (от холста с учетом увеличения и отступа)(*).
	pageX = 0; // Курсор по оси Y (от холста с учетом увеличения и отступа)(*).

let pageMY = 0, // Курсор по оси X (от холста).
	pageMX = 0; // Курсор по оси Y (от холста).

let newPath = []; // Новый маршрут для сохранения.

let width = 0, // текущая ширина
	height = 0, // текущая высота
	transX = 0, // текущее смещение по оси x
	transY = 0, // текущее смещение по оси y
	scale = 2, // текущий масштаб в целом
	currentPath = null, // Текущий маршрут.
	currentPathNumber = -1, // Текущий номер маршрута.
	typeIcon = "map", // Текущий тип объекта при наведении.
	currentZoom = 0; // Текущий шаг увеличения.

let listMarkers = [], // Список маршрутов.
	listPath = [], // Список путей.
	isLoadMarkers = false, // Загрузка всех локаций.
	isLoadPath = false; // Загрузка всех путей.

let map = null; // карта,

const element = $("#canvas");

const DEFAULT_SCALE_ICON = 0.3; // Размер иконок по умолчанию.

const TYPE_MAP = element.data("type"),
	LIST_PATH_LOCAL_STORAGE = TYPE_MAP === "skyrim" ? "listPathSky" : "listPathSols",
	PATH_LOCAL_STORAGE = TYPE_MAP === "skyrim" ? "path-sky" : "path-sols",
	FILTER_TYPE_LOCAL_STORAGE = TYPE_MAP === "skyrim" ? "filter-type-sky" : "filter-type-sols";

const H = 1, // коэфф-нт увеличения карты в высоту. COEFF_HEIGHT
	W = 1; // коэфф-нт увеличения карты в ширину. COEFF_WIDTH

// const X = $("body").width() / element[0].width,
// 	H = $("body").height() / element[0].height;
// const W = X > H ? H : X;
// element[0].width = element[0].width * W;
// element[0].height = element[0].height * W;

let canvas = new fabric.Canvas(element.get(0), {
	selection: false, // возможность выбора группы
	scale: 1, // масштаб по умолчанию
	// renderOnAddRemove: false, // авто-отрисовка
	moveCursor: "default", // сброс курсора
	hoverCursor: "default", // сброс курсора
});
