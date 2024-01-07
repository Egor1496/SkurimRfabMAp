const listMarkersSols = [
	{
		title: "Ледяная пещера",
		description: "Риклинги.",
		secondDescription: ["<q yelow>Череп Карстага</q>."],
		type: "riek",
		nameIcon: "Cave",
		scale: 0.6,
		id: "id1",
		top: 159.30080032348633,
		left: 577.1118360445737,
	},

	{
		title: "Руины замка Карстаг (<q lblue>40lvl</q>)",
		description: "Если положить череп Карстага на стул, появится <q red>босс</q>. Череп в ледяной пещере.",
		secondDescription: [
			"<q red>Босс</q> призрак Карстага (<q lblue>100lvl</q>) великан. <br/>&nbsp; -Вызывает морозный шторм, после потери ХП призывает <q green>3</q> ледяных приведений, больно бьет дубинкой",
			"<q yelow>Бафф Дух Карстага</q>.",
		],
		type: "boss",
		nameIcon: "Cave",
		scale: 0.6,
		id: "id2",
		top: 183.30080032348633,
		left: 419.86720085144043,
	},

	{
		title: "Пещеры замка Карстаг",
		description: "Риклинги. Проход к <q red>боссу</q> Карстагу.",
		secondDescription: [""],
		type: "riek",
		nameIcon: "Cave",
		scale: 0.6,
		id: "id3",
		top: 203.30080032348633,
		left: 459.86720085144043,
	},

	{
		title: "Пещера Щетиноспин (<q lblue>30lvl</q>)",
		description: "Много Риклингов",
		secondDescription: ["Маст сундук <q yelow>Зельям и камни</q>"],
		type: "riek",
		nameIcon: "Cave",
		scale: 0.6,
		id: "id4",
		top: 251.29480032348636,
		left: 248.86720085144043,
	},

	{
		title: "Пещера Харстрад (<q lblue>30lvl</q>)",
		description: "Снаружи и внутри спригган.",
		secondDescription: ["<q yelow>Большой сундук</q>."],
		type: "animal",
		nameIcon: "Cave",
		scale: 0.6,
		id: "id5",
		top: 312.1580991158246,
		left: 634.4735487622337,
	},

	{
		title: "Фроссель (<q lblue>30lvl</q>)",
		description: "Много Риклингов",
		secondDescription: [""],
		type: "riek",
		nameIcon: "Cave",
		scale: 0.6,
		id: "id6",
		top: 245.61175773752984,
		left: 863.0825033514404,
	},

	{
		title: "Алтарь пещеры Тронд (<q lblue>30lvl</q>)",
		description: "Ворожеи <q green>3</q>.",
		secondDescription: [""],
		type: "bandit",
		nameIcon: "Cave",
		scale: 0.6,
		id: "id8",
		top: 520.6117577375298,
		left: 589.8672008514404,
	},

	{
		title: "Утес Морозной Луны (<q lblue>30lvl</q>)",
		description: "Снаружи <q green>4</q> мирных оборотней-ликантропов.",
		secondDescription: [""],
		type: "bandit",
		nameIcon: "Cave",
		scale: 0.6,
		id: "id9",
		top: 555.6117577375298,
		left: 510.86720085144043,
	},

	{
		title: "Бенконгерик (<q lblue>30lvl</q>)",
		description: "Много Риклингов.",
		secondDescription: ["Слово <q yelow>Циклон</q>, Черная Книга <q yelow>Нерассказанные Легенды</q>."],
		type: "riek book word",
		nameIcon: "Cave",
		scale: 0.6,
		id: "id11",
		top: 287.29480032348647,
		left: 590.1118360445737,
	},

	{
		title: "Отмель Хакнира",
		description: "<q green>3</q> бандита.",
		secondDescription: ["Эксперт сундук <q yelow>Шлем Печать Смерти</q>."],
		type: "bandit",
		nameIcon: "Campsite",
		scale: 0.5,
		id: "id12",
		top: 273.2948003234864,
		left: 800.1118360445737,
	},

	{
		title: "Пристанище Буйольд (<q lblue>30lvl</q>)",
		description: "Мирные бандиты <q green>5</q>. Убить бандитов можно по квесту риклингов.",
		secondDescription: [""],
		type: "bandit",
		nameIcon: "Campsite",
		scale: 0.5,
		id: "id13",
		top: 540.2948003234864,
		left: 948.1118360445737,
	},

	{
		title: "Воронья Скала (<q lblue>40lvl</q>)",
		description:
			"Квест на убийство <q green>10</q> порождений пепла. У алхимика можно получить <q green>3</q> превосходных зелья восстановления за <q green>5</q> желе нетча.",
		secondDescription: [""],
		type: "",
		nameIcon: "Raven_Rock_e",
		scale: 1,
		id: "id14",
		top: 794.7898684852884,
		left: 422.2457940379535,
	},

	{
		title: "Застава Сиринга (<q lblue>50lvl</q>)",
		description:
			"Открытая локация. <q red>Дракон</q> (<q lblue>150</q>-<q lblue>200lvl</q>) <q lblue>16000</q>-<q lblue>20000xp</q> и <q green>6</q> драугров.",
		secondDescription: ["<q yelow>Слово Подчинение Воли</q>."],
		type: "dragon draugry word",
		nameIcon: "Dragon",
		scale: 0.5,
		id: "id16",
		top: 263.3008003234863,
		left: 511.1040474927722,
	},

	{
		title: "Фалбтарз (<q lblue>50lvl</q>)",
		description:
			"Снаружи риклинги. Внутри <q green>9</q> механизмов, <q green>4</q> паучков, много ловушек и загадок. <br/>&nbsp; Большой зал Фальбтарза: <q green>2</q> <q red>центуриона</q> спят и <q green>2</q> баллисты. Чтобы пройти дальше нужны <q green>2</q> сердечника центурионов.",
		secondDescription: ["<q yelow>Камень Кагрумеза</q>, <q yelow>Проницательность Мзунда</q>."],
		type: "dwemer riek",
		nameIcon: "DwemerRuins",
		scale: 0.7,
		id: "id17",
		top: 457.4004817071914,
		left: 389.86720085144043,
	},

	{
		title: "Кагрумез (<q lblue>30lvl</q>) (<q lblue>40lvl</q>)",
		description:
			"Внутри <q green>3</q> бандита. <br/> Если вставлять камни Кагрумеза: <br/> &nbsp; (<q red>двери закываются каждый бой</q>) <br/> &nbsp; Бой первый: <q green>3</q> паучка и <q green>3</q> баллисты. <br/> &nbsp; Бой второй: <q green>4</q> баллисты и <q green>3</q> сферы. <br/> &nbsp; Бой третий: <q green>2</q> баллисты, <q green>2</q> сферы, паучки и зачарованная сфера.",
		secondDescription: ["Приручение <q yelow>Двемерского Паучка и Сферу</q>, <q yelow>Двемерский Черный Лук Судьбы</q>."],
		type: "dwemer bandit",
		nameIcon: "DwemerRuins",
		scale: 0.7,
		id: "id19",
		top: 629.9508967071913,
		left: 671.1118360445737,
	},

	{
		title: "Нчардак (<q lblue>30lvl</q>) (<q lblue>50lvl</q>)",
		description:
			"Снаружи <q green>5</q> бандитов. Внутри <q green>2</q> зачар сферы, <q green>2</q> <q red>Центуриона</q>, Баллисты <q green>6</q>. Собрав все кубики и включив все генераторы выйдет <q red>босс</q>. <br/> После выхода с локации, появится <q red>Змеевидный Дракон</q> (<q lblue>200lvl</q>).",
		secondDescription: [
			"<q red>Босс</q> Двемерский Центурион Смотритель Нчардака (<q lblue>80lvl</q>) <q lblue>7000xp</q>, сильнее обычного двемерского центуриона.",
			"<q yelow>Черная Книга Острое Перо</q>, <q yelow>Камень Кагрумеза</q>.",
		],
		type: "bandit dwemer boss book",
		nameIcon: "DwemerRuins",
		scale: 0.7,
		id: "id20",
		top: 754.9508967071913,
		left: 1034.1118360445737,
	},

	{
		title: "Пепельная крепость",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Fort",
		scale: 0.6,
		id: "id21",
		top: 721.300800323486,
		left: 792.8672008514404,
	},

	{
		title: "Форт Морозного Мотылька (<q lblue>30lvl</q>)",
		description: "Снаружи <q green>11</q> порождений. Внутри <q green>3</q> порождения.",
		secondDescription: [
			"<q red>Босс</q> бандит Генерал Фалкс Карий (<q lblue>75lvl</q>) - <q lblue>7000xp</q>, быстрый воин с молотом.",
			"<q yelow>Сет Имперского Генерала</q>, <q yelow>Дубина Защитника</q>, <q yelow>Жилы камней и рубинов</q>.",
		],
		type: "ash boss set",
		nameIcon: "Fort",
		scale: 0.6,
		id: "id22",
		top: 928.300800323486,
		left: 632.8672008514404,
	},

	{
		title: "Вершинная башня",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Fort",
		scale: 0.6,
		id: "id23",
		top: 793.300800323486,
		left: 614.8672008514404,
	},

	{
		title: "Шахта Сломанный Клык (<q lblue>30lvl</q>)",
		description: "Риклинги.",
		secondDescription: ["<q yelow>Жилы Камней</q>."],
		type: "riek",
		nameIcon: "Mine",
		scale: 0.6,
		id: "id24",
		top: 296.3008003234863,
		left: 315.86720085144043,
	},

	{
		title: "Душная шахта (<q lblue>30lvl</q>)",
		description: "Снаружи бандит. Внутри <q green>16</q> бандитов.",
		secondDescription: [""],
		type: "bandit",
		nameIcon: "Mine",
		scale: 0.6,
		id: "id25",
		top: 575.3008003234863,
		left: 332.86720085144043,
	},

	{
		title: "Шахта Вороньей Скалы (<q lblue>50lvl</q>)",
		description:
			"Квест старика. Внутри <q green>12</q> драугров, <q green>2</q> <q red>повелителя</q>. <q red>Упав</q> вниз к <q red>боссам</q> атронахам (стоят вместе), вернуться нельзя. После комнаты с ловушками <q red>Босс</q>, который появляется подойдя к сундуку.",
		secondDescription: [
			"<q red>Босс</q> Грозовой атронах Сош (<q lblue>100lvl</q>) <q lblue>2000xp</q>.",
			"<q red>Босс</q> Грозовой атронах Крий (<q lblue>75lvl</q>) <q lblue>2000xp</q>.",
			"<q red>Босс</q> Грозовой атронах За (<q lblue>50lvl</q>) <q lblue>2000xp</q>.",
			"<q red>Босс</q> Драконий Жрец Закрисош (<q lblue>175lvl</q>) <q lblue>20000xp</q>, кричит грозовым криком, призывает <q green>3</q> гроз. атронахов (<q lblue>90lvl</q>), которые стреляют элек. лучом, быстро ломает щиты магии, использует щит магии и больно стреляет цепной молнией. Используй: зелье хождения по воде, 75% рез. электр.",
			"Жила <q yelow>Сталгрим</q>, Слово <q yelow>Воплощение Дракона</q>, <q yelow>Маска Закрисош</q>, Черная Книга <q yelow>Ветры Перемен</q>, Справа от алхим. стола <q yelow>Зелье хождения по воде</q>, За фонтаном запертая дверь (ученик) <q yelow>Жила Сталгрим</q> <q green>2</q>.",
		],
		type: "draugry boss priests stal book word",
		nameIcon: "Mine",
		scale: 0.6,
		id: "id26",
		top: 743.3008003234862,
		left: 379.86720085144043,
	},

	{
		title: "Курган Белого Хребта (<q lblue>50lvl</q>)",
		description: "Стихийные Паучки и Бандосы. После закрытой паутиной комнаты спит <q red>босс</q>.",
		secondDescription: [
			"<q red>Босс</q> Драконий Жрец Дукан (<q lblue>175lvl</q>) - <q lblue>xp</q>. Призывает <q green>3</q> лед атронахов, юзает оберег. Морозным криком режет СТ и скорость. <br/>&nbsp; -Используй: бессплотность, 75+ холод резов, просто уворачивайся.",
			"Слово <q yelow>Циклон</q>, Черная Книга <q yelow>Болезненый Регент</q>, <q yelow>Маска Дукана</q>.",
		],
		type: "boss book word",
		nameIcon: "Tomb",
		scale: 0.7,
		id: "id27",
		top: 332.3008003234862,
		left: 420.86720085144043,
	},

	{
		title: "Курган Бладскал (<q lblue>30lvl</q>)",
		description: "Бандиты снаружи <q green>14</q>. Внутри <q green>8</q>.",
		secondDescription: [""],
		type: "bandit",
		nameIcon: "Tomb",
		scale: 0.7,
		id: "id29",
		top: 660.3008003234863,
		left: 333.86720085144043,
	},

	{
		title: "Курган Колбьорн (<q lblue>50lvl</q>)??????",
		description: "",
		secondDescription: ["Черная Книга <q yelow>Филармент и Филигрань</q>"],
		type: "book",
		nameIcon: "Tomb",
		scale: 0.7,
		id: "id30",
		top: 900.2948003234864,
		left: 468.1118360445737,
	},

	{
		title: "Гробница Валока (<q lblue>50lvl</q>)",
		description:
			"Справа: <q green>4</q> драугра и <q red>повелитель</q>. <br/> &nbsp; <q yelow>Аметистовый Коготь</q>, Слово <q yelow>Ярость Боя</q>. <br/> Слева: <q green>7</q> драугров и <q red>повелитель</q>. <br/> &nbsp; <q yelow>Аметистовый Коготь</q>, Слово <q yelow>Ярость Боя</q>. <br/> По центру: собрав части когтей, внизу будут скелеты. После комнаты загадки босс, пройдя чуть дальше дверь <q red>закроется</q>.",
		secondDescription: [
			"<q red>Босс</q> Маг Валок Тюремщик (<q lblue>200lvl</q>) <q lblue>20000xp</q>, вначале бессмертный, использует стихийный плащ. Бьет мечем и стреляет цепной молнией. В комнате много ловушек, которые дамажат больнее Валока. <br/> &nbsp; -Используй: 75% стих и 60% маг реза, Крик Бесплотность.",
			"<q yelow>Сет Валока</q>, Слово <q yelow>Ярость Боя</q> (все слова), <q yelow>Драконий Страж</q>, <q yelow>Амик</q>, Заклинание <q yelow>Зеркало Шалидора</q>.",
		],
		type: "draugry boss set word",
		nameIcon: "Tomb",
		scale: 0.7,
		id: "id31",
		top: 624.2948003234865,
		left: 841.1118360445737,
	},

	{
		title: "Курган Гильденхул (<q lblue>45lvl</q>)",
		description:
			"Снаружи <q green>2</q> бандита. Внутри собрав все части брони печати смерти дадут ключ. За сталгримом проход. Забрав клинок <q red>закроется</q> дверь и будет <q red>босс</q>.",
		secondDescription: [
			"<q red>Босс</q> призрак Хакнир Печать Смерти (<q lblue>200lvl</q>) <q lblue>7000xp</q>. Дуальщик, медленные больные расскрутки. Потеряв ХП исчезает, пока не убьешь всех призраков.",
			"<q yelow>Заклинание Трансмутация Деревяшка</q>, <q yelow>Много септимов</q>, <q yelow>Кровавая Коса</q>, <q yelow>Душитель</q>, <q yelow>Жилы Сталгрима</q> <q green>2</q>.",
		],
		type: "bandit boss stal",
		nameIcon: "Tomb",
		scale: 0.7,
		id: "id32",
		top: 385.2948003234863,
		left: 990.1118360445737,
	},

	{
		title: "Проход Моэсринг (<q lblue>30lvl</q>)",
		description: "Риклинги.",
		secondDescription: [""],
		type: "riek",
		nameIcon: "Pass",
		scale: 0.5,
		id: "id33",
		top: 428.30080032348627,
		left: 527.8672008514404,
	},

	{
		title: "Заснеженные руины (<q lblue>30lvl</q>)",
		description: "<q green>3</q> оборотня.",
		secondDescription: [""],
		type: "bandit",
		nameIcon: "NordicDwelling",
		scale: 0.7,
		id: "id34",
		top: 416.30080032348627,
		left: 611.8672008514404,
	},

	{
		title: "Медовый зал Тирска (<q lblue>30lvl</q>)",
		description: "Мирные риклинги. Убить риклингов можно по квесту бандитов.",
		secondDescription: [""],
		type: "riek",
		nameIcon: "Settlement",
		scale: 0.5,
		id: "id35",
		top: 537.3008003234863,
		left: 792.1118360445737,
	},

	{
		title: "Тель-Митрин",
		description: "За выполнения квестов Нелота вы получите ключ от комнаты.",
		secondDescription: ["Черная Книга <q yelow>Скрытый Сумрак</q>, Книга <q yelow>Высшие Чары</q>."],
		type: "book",
		nameIcon: "Telvanni_Tower_e",
		scale: 1,
		id: "id36",
		top: 932.3008003234861,
		left: 907.1118360445737,
	},

	{
		title: "Храм Мирака (<q lblue>45lvl</q>)",
		description:
			"На входе <q green>2</q> члена культа. Внутри <q green>25</q> другров, скелеты, <q green>8</q> членов культа и <q green>2</q> <q red>повелителя</q>.",
		secondDescription: ["<q yelow>Слово Воплощение Дракона</q>, <q yelow>Черная книга Пробуждающие сны</q>"],
		type: "draugry book magic word",
		nameIcon: "Miraak_e",
		scale: 0.8,
		id: "id37",
		top: 525.2948003234865,
		left: 677.1118360445737,
	},

	{
		title: "Старый торговый пост",
		description: "Подает лук.",
		secondDescription: ["<q yelow>Стеклянный Лук Короля Оленя</q>."],
		type: "",
		nameIcon: "Shack",
		scale: 0.5,
		id: "id38",
		top: 702.2948003234865,
		left: 692.8672008514404,
	},

	{
		title: "Дом Хродульфа (<q lblue>30lvl</q>)",
		description: "Снаружи Порождения пепла <q green>2</q>. Внутри <q green>2</q> бандита.",
		secondDescription: [""],
		type: "bandit ash",
		nameIcon: "Shack",
		scale: 0.5,
		id: "id39",
		top: 970.2948003234864,
		left: 537.8672008514404,
	},

	{
		title: "Заброшенный постоялый двор (<q lblue>30lvl</q>)",
		description: "Талморцы <q green>4</q> «по квесту Новый источник сталгрима».",
		secondDescription: [""],
		type: "bandit",
		nameIcon: "Shack",
		scale: 0.5,
		id: "id40",
		top: 602.2948003234865,
		left: 443.86720085144043,
	},
	{
		title: "Святилище Зенитара",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "DaedricShrine",
		scale: 0.5,
		id: "id41",
		top: 530.0118748656939,
		left: 491.86720085144043,
	},

	{
		title: "Святилище Кинарет",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "DaedricShrine",
		scale: 0.5,
		id: "id42",
		top: 750.0118748656939,
		left: 313.86720085144043,
	},

	{
		title: "Курган (<q lblue>50lvl</q>)",
		description: "<q red>Дракон</q> (<q lblue>150</q>-<q lblue>200lvl</q>) <q lblue>16000</q>-<q lblue>20000xp</q>.",
		secondDescription: [""],
		type: "dragon",
		nameIcon: "circle2",
		scale: 0.5,
		id: "id43",
		top: 63.30080032348701,
		left: 722.1118360445737,
	},

	{
		title: "Курган (<q lblue>50lvl</q>)",
		description: "<q red>Дракон</q> (<q lblue>150</q>-<q lblue>200lvl</q>) <q lblue>16000</q>-<q lblue>20000xp</q>.",
		secondDescription: [""],
		type: "dragon",
		nameIcon: "circle2",
		scale: 0.5,
		id: "id44",
		top: 643.300800323487,
		left: 741.8672008514404,
	},

	{
		title: "Камень Ветра (<q lblue>40lvl</q>)",
		description: "Луркер после очистки. Освобдив Скаалов, откроются квесты на сталгрим и Валока.",
		secondDescription: [""],
		type: "roc",
		nameIcon: "Standing_Stones_e",
		scale: 0.5,
		id: "id45",
		top: 347.0783003234863,
		left: 753.8672008514404,
	},

	{
		title: "Камень Древа",
		description: "Открывается после убийства Мирака.",
		secondDescription: [""],
		type: "roc",
		nameIcon: "Standing_Stones_e",
		scale: 0.5,
		id: "id46",
		top: 490.3008003234863,
		left: 676.8672008514404,
	},

	{
		title: "Камень Зверя (<q lblue>40lvl</q>)",
		description: "Камень охраняют <q green>2</q> члена культа.",
		secondDescription: [""],
		type: "magic roc",
		nameIcon: "Standing_Stones_e",
		scale: 0.5,
		id: "id47",
		top: 535.0783003234862,
		left: 747.8672008514404,
	},

	{
		title: "Камень Солнца (<q lblue>40lvl</q>)",
		description: "После очистки появятся <q green>3</q> Луркера (<q lblue>40-50lvl</q>).",
		secondDescription: [""],
		type: "roc",
		nameIcon: "Standing_Stones_e",
		scale: 0.5,
		id: "id48",
		top: 802.078300323486,
		left: 860.8672008514404,
	},

	{
		title: "Камень Земли (<q lblue>40lvl</q>)",
		description: "После очистки появятся <q green>2</q> Луркера (<q lblue>40-50lvl</q>).",
		secondDescription: [""],
		type: "roc",
		nameIcon: "Standing_Stones_e",
		scale: 0.5,
		id: "id49",
		top: 845.078300323486,
		left: 301.86720085144043,
	},

	{
		title: "Камень Воды (<q lblue>40lvl</q>)",
		description: "Луркер и член культа после очистки. Часто появляется <q red>Дракон</q>.",
		secondDescription: [""],
		type: "dragon boss magic roc",
		nameIcon: "Standing_Stones_e",
		scale: 0.5,
		id: "id50",
		top: 469.0783003234861,
		left: 286.86720085144043,
	},

	{
		title: "????????????",
		description: "Квесты на Сталгрим и Валока, если очищен камень Ветра.",
		secondDescription: [""],
		type: "",
		nameIcon: "Town",
		scale: 0.7,
		id: "id51",
		top: 401.29480032348636,
		left: 881.8672008514404,
	},

	{
		title: "Жила",
		description: "",
		secondDescription: ["<q yelow>Эбонит</q>."],
		type: "",
		nameIcon: "Lode",
		scale: 0.4,
		id: "id52",
		top: 158.30080032348633,
		left: 314.86720085144043,
	},

	{
		title: "Жила",
		description: "",
		secondDescription: ["<q yelow>Эбонит</q>."],
		type: "",
		nameIcon: "Lode",
		scale: 0.4,
		id: "id53",
		top: 395.3008003234863,
		left: 1032.8672008514404,
	},

	{
		title: "Северная Пристань (<q lblue>30lvl</q>)",
		description: "На корабле <q green>4</q> талморцев по квесту Новый источник сталгрима.",
		secondDescription: ["<q yelow>Карта</q> Сталгримовой Руды"],
		type: "bandit stal",
		nameIcon: "Dock",
		scale: 0.5,
		id: "id54",
		top: 151.31578947368422,
		left: 293.5672525773969,
	},

	{
		title: "Сталгримовая шахта",
		description: "Используй древне нордскую кирку в Вороньей Скале.",
		secondDescription: ["<q yelow>Жил Сталгрима</q> <q green>10</q>."],
		type: "stal",
		nameIcon: "PointofInterest",
		scale: 0.4,
		id: "id55",
		top: 309.2105263157895,
		left: 373.3918139809057,
	},

	{
		title: "Жила",
		description: "",
		secondDescription: ["<q yelow>Сталгрим</q>."],
		type: "stal",
		nameIcon: "Lode",
		scale: 0.4,
		id: "id56",
		top: 77.63157894736842,
		left: 361.9883052089758,
	},

	{
		title: "Роща Бродира (<q lblue>30lvl</q>)",
		description: "Бандиты <q green>3</q>",
		secondDescription: ["<q yelow>Штормовой Клык</q>."],
		type: "bandit",
		nameIcon: "Pond",
		scale: 0.5,
		id: "id57",
		top: 741.5446901276867,
		left: 540.4914299736772,
	},

	{
		title: "Курган Джолгейрр (<q lblue>60lvl</q>)",
		description: "Нажав на труп, появится <q red>босс</q> и <q red>закроется</q> дверь.",
		secondDescription: [
			"<q red>Босс</q> призрак Снежный Принц (<q lblue>300lvl</q>) <q lblue>50000xp</q>. Издалека больно стреляет холодом, юзает ледяную броню на себя, бьет копьем и меняет на щит с копьем. Парировать опасно для здоровья. Кастит морозный шторм, потеряв ХП призывает <q green>2</q> ледяных атронахов каждые 30 сек. <br/>&nbsp; -Используй проклятие или ослабление нежети, увядание, крик разоружение, святые чары, заклинание Гнев Азуры.",
			"<q yelow>Щит Ауриэля</q>, <q yelow>Копье Снежного Принца</q>.",
		],
		type: "boss",
		nameIcon: "Tomb",
		scale: 0.7,
		id: "id58",
		top: 469.7368421052622,
		left: 579.5321648580987,
	},

	{
		title: "Луркер (<q lblue>40lvl</q>)",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Star",
		scale: 0.5,
		id: "id59",
		top: 460.9649122807,
		left: 782.596693131572,
	},

	{
		title: "Событие (<q lblue>40lvl</q>)",
		description: "Сприганы <q green>2</q>, зверь.",
		secondDescription: [""],
		type: "animal",
		nameIcon: "Star",
		scale: 0.5,
		id: "id60",
		top: 588.1578947368422,
		left: 947.5089738333264,
	},

	{
		title: "Событие (<q lblue>30lvl</q>)",
		description: "Порождения <q green>3</q> деруться со стражником.",
		secondDescription: [""],
		type: "ash",
		nameIcon: "Star",
		scale: 0.5,
		id: "id61",
		top: 857.4561403508776,
		left: 430.4093578405548,
	},

	{
		title: "По квесту Печать Смерти (<q lblue>30lvl</q>)",
		description: "бандитов <q green>2</q>.",
		secondDescription: ["Эксперт сундук <q yelow>Нагрудник Печати Смерти</q>."],
		type: "bandit",
		nameIcon: "Star",
		scale: 0.5,
		id: "id62",
		top: 739.0350877192988,
		left: 272.9475703245544,
	},

	{
		title: "По квесту Печать Смерти (<q lblue>30lvl</q>)",
		description: "Порождений <q green>3</q> и сприган.",
		secondDescription: ["Эксперт сундук <q yelow>Сапоги Печати Смерти</q>."],
		type: "ash",
		nameIcon: "Star",
		scale: 0.5,
		id: "id63",
		top: 936.4035087719303,
		left: 864.175640499993,
	},

	{
		title: "По квесту Печать Смерти (<q lblue>30lvl</q>)",
		description: "Риклинги и крабики.",
		secondDescription: ["Эксперт сундук <q yelow>Перчатки Печати Смерти</q>."],
		type: "riek",
		nameIcon: "Star",
		scale: 0.5,
		id: "id64",
		top: 356.5789473684205,
		left: 244.44444555985302,
	},

	{
		title: "Лагерь (<q lblue>30lvl</q>)",
		description: "Бандиты <q green>5</q>",
		secondDescription: ["Книга <q yelow>Похотливая Арганианская дева</q>."],
		type: "bandit",
		nameIcon: "Campsite",
		scale: 0.5,
		id: "id65",
		top: 1060.1052631578948,
		left: 455.7076034545899,
	},

	{
		title: "Палатка торговца",
		description: "",
		secondDescription: ["Продает <q yelow>Камень Кагрумеза</q>."],
		type: "",
		nameIcon: "Star",
		scale: 0.5,
		id: "id66",
		top: 867.1052631578948,
		left: 812.865498191432,
	},

	{
		title: "Кладбище (<q lblue>30lvl</q>)",
		description: "Порождение пепла.",
		secondDescription: ["<q yelow>Посох Упокоения</q>."],
		type: "ash",
		nameIcon: "Star",
		scale: 0.5,
		id: "id67",
		top: 869.7368421052632,
		left: 940.0584806475724,
	},

	{
		title: "Водопад (<q lblue>40lvl</q>)",
		description: "Луркер и пару бандитов неподалеку.",
		secondDescription: [""],
		type: "",
		nameIcon: "Star",
		scale: 0.5,
		id: "id68",
		top: 737.6436780238971,
		left: 752.2402693503033,
	},
];

if (TYPE_MAP === "solstheim") listMarkers = listMarkersSols;

// {
// 	title: "",
// 	description: "",
// 	secondDescription: [""],
// 	type: "bandit",
// 	nameIcon: "",
// 	scale: 0.7,
// 	id: "id----------",
// 	top: 0,
// 	left: 0,
// },

// Altar_e - Алтарь
// Castle_3_e - Замок 4 крыши
// Castle_4_e - Бутылочный домик с дымоходом
// Miraak_e - Мирак
// Raven_Rock_e - клякса с усами
// Standing_Stones_e - 3 камня-столба
// Telvanni_Tower_e - Гриб

// «»
// Star - звездочка.
// bandit - Бандиты.
// Campsite - Лагерь (Camp)
// Cave - Пещера (Cave)
// Tower - Форт (Fort)
// Fort - Форт (Fort)
// DwemerRuins - Двемерские руины (Dwarven Ruin)
// Shipwreck - Корабли (Ship)
// Shack - Лачуга (Shack)

// DaedricShrine - святилище (Daedric Shrine)
// Dragon - Логово дракона (Dragon Lair)
// NordicDwelling - Руины (Ruin)
// Tomb - Нордские руины (Nordic Ruin)
// OrcStronghold - Крепость орков (Orc Stronghold)
// Grove - Роща (Grove)
// Mine - Шахта (Mine)
// Pass - Проход (Pass)
// Pond - Поляна (Clearing)

// Town - Город (Town)
// Settlement - Поселение (Settlement)
// WoodMill - Лесопилка (Wood Mill)
// Farm - Ферма (Farm)
// FarmWithMill - Мельница (Wheat Mill)
// Stable - Конюшня (Stable)
// Dock - Пристань (Dock)
// Lighthouse - Маяк (Lighthouse)

// ImperialTower - Сторожевая башная (Watchtower)
// GiantCamp - Лагерь великанов (giant Camp)
// NordicTower - Башня нордов (Nordic Tower)
// PointofInterest - Достопримечательность (Landmark)
// StandingStone - Камни хранители (Standing Stone)
// ImperialCamp - Имперский лагерь (Imperial Camp)
// StormcloakCamp - Лагерь Братьев Бури (Stormcloak Camp)
