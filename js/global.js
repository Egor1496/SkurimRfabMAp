let mapOffsetY = 0, // Внутренний отступ карты от холста (top).
	mapOffsetX = 0, // Внутренний отступ карты от холста (left).
	currentZoom = 0, // Текущий шаг увеличения.
	defaultScaleIcon = 0.3, // Размер иконок по умолчанию.
	winMouseX = 0, // Курсор по оси X (от окна).
	winMouseY = 0, // Курсор по оси Y (от окна).
	typeIcon = "map", // Текущий тип обьекта при наведении.
	pageY = 0, //   Курсор по оси X (от холста с учетом зумма и отступа)(*).
	pageX = 0, //   Курсор по оси Y (от холста с учетом зумма и отступа)(*).
	pageMY = 0, //   Курсор по оси X (от холста).
	pageMX = 0, //   Курсор по оси Y (от холста).
	newPath = [], // Новый маршрут
	currentPath = null, // Текущий маршрут.
	currentPathNumber = -1, // Номер текущего маршрута.
	listPath, // Список маршрутов.
	map; // карта,

const TYPE_MAP = $("#canvas").data("type");

const W = 1;
H = 1;

// const X = $("body").width() / element[0].width,
// 	H = $("body").height() / element[0].height;

// const W = X > H ? H : X;

let element = $("#canvas");

// element[0].width = element[0].width * W;
// element[0].height = element[0].height * W;

let canvas = new fabric.Canvas(element.get(0), {
	selection: false, // возможность выбора группы
	scale: 1, // масштаб по умолчанию
	// renderOnAddRemove: false, // авто-отрисовка
	moveCursor: "default", // сброс курсора
	hoverCursor: "default", // сброс курсора
});

let baseWidth = 0, // начальная ширина
	baseHeight = 0, // начальная высота
	baseScale = 1, // начальный масштаб 0.5
	width = 0, // текущая ширина
	height = 0, // текущая высота
	transX = 0, // текущее смещение по оси x
	transY = 0, // текущее смещение по оси y
	scale = 2; // текущий масштаб в целом
