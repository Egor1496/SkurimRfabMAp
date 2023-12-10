let baseWidth = 0, // Начальная ширина.
	baseHeight = 0, // Начальная высота.
	baseScale = 1, // Начальный масштаб.
	stepZoomMap = 0.07; // Шаг увеличения карты.

let mapOffsetY = 0, // Внутренний отступ карты от холста (top).
	mapOffsetX = 0; // Внутренний отступ карты от холста (left).

let winMouseX = 0, // Курсор по оси X (от окна).
	winMouseY = 0; // Курсор по оси Y (от окна).

let pageY = 0, // Курсор по оси X (от холста с учетом увеличения и отступа)(!).
	pageX = 0; // Курсор по оси Y (от холста с учетом увеличения и отступа)(!).

let pageMY = 0, // Курсор по оси X (от холста).
	pageMX = 0; // Курсор по оси Y (от холста).

let newPath = []; // Новый маршрут для сохранения в стор.

let width = 0, // текущая ширина карты
	height = 0, // текущая высота карты
	transX = 0, // текущее смещение карты по оси x
	transY = 0, // текущее смещение карты по оси y
	scale = 2, // текущий масштаб карты в целом
	currentPath = null, // Текущий маршрут (объект).
	currentPathNumber = -1, // Текущий номер маршрута.
	typeIcon = "map", // Текущий тип объекта при наведении.
	currentZoom = 0; // Текущий шаг увеличения.

let listMarkersCanvas = []; // Список маршрутов на холсте.
let listPathCanvas = []; // Список путей на холсте.

let listMarkers = [], // Список маршрутов json.
	listPath = [], // Список путей json.
	countLoadMarkers = 0, // Кол-во загрузок локаций.
	countLoadPath = 0; // Кол-во загрузок путей.

let map = null; // Карта.

const element = $("#canvas"); // Холст.

const DEFAULT_SCALE_ICON = 0.3,
	ICON_CLEAN_URL = "image/icon/cross.svg"; // Размер иконок по умолчанию.

const ZOOM_MAX = 10,
	ZOOM_MIN = 2,
	ZOOM_ICON_HOVER = 1.3;

const TYPE_MAP = element.data("type"), // Тип карты.
	LIST_PATH_LOCAL_STORAGE = TYPE_MAP === "skyrim" ? "listPathSky" : "listPathSols",
	PATH_LOCAL_STORAGE = TYPE_MAP === "skyrim" ? "path-sky" : "path-sols",
	FILTER_TYPE_LOCAL_STORAGE = TYPE_MAP === "skyrim" ? "filter-type-sky" : "filter-type-sols",
	CLEAN_TYPE = TYPE_MAP === "skyrim" ? "clean-locations-sky" : "clean-locations-sols";

const NUMBER_PATH_ACTIVE = localStorage.getItem(PATH_LOCAL_STORAGE); // Номер выбранного пути.

const cleanLoc = JSON.parse(localStorage.getItem(CLEAN_TYPE) || "[]");

const CFW = $("body").width() / element[0].width, // коэфф-нт увеличения размера карты в высоту.
	CFH = $("body").height() / element[0].height, // коэфф-нт увеличения размера карты в ширину.
	CFA = CFW > CFH ? CFW : CFH; // коэфф-нт увеличения размера карты.

const COEFF_HEIGHT = Math.ceil(CFA * 100) / 100,
	COEFF_WIDTH = Math.ceil(CFA * 100) / 100;

element[0].height = element[0].height * COEFF_HEIGHT;
element[0].width = element[0].width * COEFF_WIDTH;

const canvas = new fabric.Canvas(element.get(0), {
	selection: false, // возможность выбора группы
	scale: 1, // масштаб по умолчанию
	// renderOnAddRemove: false, // авто-отрисовка
	moveCursor: "default", // сброс курсора
	hoverCursor: "default", // сброс курсора
});

// масштаб интерфейса
// Обновлять иконку в соответствии со свойствами isClean и isFiltred. (баг)
// mark scale. (баг)
// create map base scale
// Отрисовка меток после загрузки путей
// Сохранение и загрузка положения камеры при перезагрузки.
// Создание путей и меток с учетом зумма и отступа.
// Баг. Мылит карту при зумме core (карта в высоком разрешении).
