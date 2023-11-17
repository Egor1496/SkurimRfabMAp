const listMarkersSols = [
	{
		title: "Ледяная пещера",
		description: "Риклинги.",
		secondDescription: ["<q yelow>Череп Карстага</q>."],
		type: "riek loot",
		nameIcon: "Cave",
		scale: 0.6,
		id: "id1",
		top: 159.30080032348633,
		left: 577.1118360445737,
	},

	{
		title: "Руины замка Карстаг (<q lblue>???????lvl</q>)",
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
		title: "Пещера Щетиноспин",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Cave",
		scale: 0.6,
		id: "id4",
		top: 251.29480032348636,
		left: 248.86720085144043,
	},

	{
		title: "Пещера Харстрад",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Cave",
		scale: 0.6,
		id: "id5",
		top: 312.1580991158246,
		left: 634.4735487622337,
	},

	{
		title: "Фроссель",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Cave",
		scale: 0.6,
		id: "id6",
		top: 245.61175773752984,
		left: 863.0825033514404,
	},

	{
		title: "Курган Хротмунда",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Cave",
		scale: 0.6,
		id: "id7",
		top: 348.61175773752984,
		left: 533.0825033514404,
	},

	{
		title: "Алтарь пещеры Тронд",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Cave",
		scale: 0.6,
		id: "id8",
		top: 520.6117577375298,
		left: 589.8672008514404,
	},

	{
		title: "Утес Морозной Луны",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Cave",
		scale: 0.6,
		id: "id9",
		top: 555.6117577375298,
		left: 510.86720085144043,
	},

	{
		title: "Пещера Холодный Уголь",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Cave",
		scale: 0.6,
		id: "id10",
		top: 846.6117577375298,
		left: 443.86720085144043,
	},

	{
		title: "Бенконгерик",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Cave",
		scale: 0.6,
		id: "id11",
		top: 287.29480032348647,
		left: 590.1118360445737,
	},

	{
		title: "Отмель Хакнира",
		description: "<q green>3</q> бандита.",
		secondDescription: ["Эксперт <q yelow>сундук</q> с частью брони «Печать смерти»"],
		type: "loot bandit",
		nameIcon: "Campsite",
		scale: 0.5,
		id: "id12",
		top: 273.2948003234864,
		left: 800.1118360445737,
	},

	{
		title: "Пристанище Буйольд",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Campsite",
		scale: 0.5,
		id: "id13",
		top: 540.2948003234864,
		left: 948.1118360445737,
	},

	{
		title: "Воронья Скала",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Raven_Rock_e",
		scale: 1,
		id: "id14",
		top: 794.7898684852884,
		left: 422.2457940379535,
	},

	{
		title: "Верховье Харстрада (<q lblue>30lvl</q>)",
		description: "Снаружи и внутри спригган.",
		secondDescription: ["<q yelow>Большой сундук</q>."],
		type: "animal",
		nameIcon: "Pond",
		scale: 0.5,
		id: "id15",
		top: 318.3008003234863,
		left: 650.8672008514404,
	},

	{
		title: "Застава Сиринга (<q lblue>50lvl</q>)",
		description: "Открытая локация. Дракон и <q green>6</q> драугров.",
		secondDescription: ["<q yelow>Слово Подчинение Воли</q>."],
		type: "dragon boss draugry",
		nameIcon: "Dragon",
		scale: 0.5,
		id: "id16",
		top: 263.3008003234863,
		left: 511.1040474927722,
	},

	{
		title: "Фалбтарз",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "DwemerRuins",
		scale: 0.7,
		id: "id17",
		top: 457.4004817071914,
		left: 389.86720085144043,
	},

	{
		title: "Большой зал Фалбтарза",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "DwemerRuins",
		scale: 0.7,
		id: "id18",
		top: 553.9508967071914,
		left: 428.86720085144043,
	},

	{
		title: "Кагрумез",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "DwemerRuins",
		scale: 0.7,
		id: "id19",
		top: 629.9508967071913,
		left: 671.1118360445737,
	},

	{
		title: "Нчардак",
		description: "",
		secondDescription: [""],
		type: "",
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
		title: "Форт Морозного Мотылька",
		description: "",
		secondDescription: [""],
		type: "",
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
		title: "Шахта Сломанный Клык",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Mine",
		scale: 0.6,
		id: "id24",
		top: 296.3008003234863,
		left: 315.86720085144043,
	},

	{
		title: "Душная шахта",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Mine",
		scale: 0.6,
		id: "id25",
		top: 575.3008003234863,
		left: 332.86720085144043,
	},

	{
		title: "Шахта Вороньей Скалы",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Mine",
		scale: 0.6,
		id: "id26",
		top: 743.3008003234862,
		left: 379.86720085144043,
	},

	{
		title: "Курган Белого Хребта",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Tomb",
		scale: 0.7,
		id: "id27",
		top: 332.3008003234862,
		left: 420.86720085144043,
	},

	{
		title: "Святилище Белый хребет",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Tomb",
		scale: 0.7,
		id: "id28",
		top: 407.3008003234862,
		left: 417.86720085144043,
	},

	{
		title: "Курган Бладскал",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Tomb",
		scale: 0.7,
		id: "id29",
		top: 660.3008003234863,
		left: 333.86720085144043,
	},

	{
		title: "Курган Колбьорн ",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Tomb",
		scale: 0.7,
		id: "id30",
		top: 900.2948003234864,
		left: 468.1118360445737,
	},

	{
		title: "Гробница Валока",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Tomb",
		scale: 0.7,
		id: "id31",
		top: 624.2948003234865,
		left: 841.1118360445737,
	},

	{
		title: "Курган Гильденхул",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Tomb",
		scale: 0.7,
		id: "id32",
		top: 385.2948003234863,
		left: 990.1118360445737,
	},

	{
		title: "Проход Моэсринг",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Pass",
		scale: 0.5,
		id: "id33",
		top: 428.30080032348627,
		left: 527.8672008514404,
	},

	{
		title: "Заснеженные руины",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "NordicDwelling",
		scale: 0.7,
		id: "id34",
		top: 416.30080032348627,
		left: 611.8672008514404,
	},

	{
		title: "Медовый зал Тирска",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Settlement",
		scale: 0.5,
		id: "id35",
		top: 537.3008003234863,
		left: 792.1118360445737,
	},

	{
		title: "Тель-Митрин",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Telvanni_Tower_e",
		scale: 1,
		id: "id36",
		top: 932.3008003234861,
		left: 907.1118360445737,
	},

	{
		title: "Храм Мирака (<q lblue>50lvl</q>)",
		description:
			"На входе <q green>2</q> члена культа. Внутри <q green>25</q> другров, скелеты, <q green>8</q> членов культа и <q green>2</q> <q red>повелителя</q>.",
		secondDescription: ["<q yelow>Слово Воплощение Дракона</q>, <q yelow>Черная книга Пробуждающие сны</q>"],
		type: "draugry loot",
		nameIcon: "Miraak_e",
		scale: 0.8,
		id: "id37",
		top: 510.2948003234865,
		left: 677.1118360445737,
	},

	{
		title: "Старый торговый пост",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Shack",
		scale: 0.5,
		id: "id38",
		top: 702.2948003234865,
		left: 692.8672008514404,
	},

	{
		title: "Дом Хродульфа",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Shack",
		scale: 0.5,
		id: "id39",
		top: 970.2948003234864,
		left: 537.8672008514404,
	},

	{
		title: "Заброшенный постоялый двор",
		description: "",
		secondDescription: [""],
		type: "",
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
		description: "<q red>Босс</q> Дракон (<q lblue>150-250lvl</q>) <q lblue>16000-20000xp</q>.",
		secondDescription: [""],
		type: "dragon boss",
		nameIcon: "circle2",
		scale: 0.5,
		id: "id43",
		top: 63.30080032348701,
		left: 722.1118360445737,
	},

	{
		title: "Курган (<q lblue>50lvl</q>)",
		description: "<q red>Босс</q> Дракон (<q lblue>150-250lvl</q>) <q lblue>16000-20000xp</q>.",
		secondDescription: [""],
		type: "dragon boss",
		nameIcon: "circle2",
		scale: 0.5,
		id: "id44",
		top: 643.300800323487,
		left: 741.8672008514404,
	},

	{
		title: "Камень Ветра",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Standing_Stones_e",
		scale: 0.5,
		id: "id45",
		top: 347.0783003234863,
		left: 753.8672008514404,
	},

	{
		title: "Камень????",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Standing_Stones_e",
		scale: 0.5,
		id: "id46",
		top: 478.3008003234863,
		left: 675.8672008514404,
	},

	{
		title: "Камень Зверя",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Standing_Stones_e",
		scale: 0.5,
		id: "id47",
		top: 535.0783003234862,
		left: 747.8672008514404,
	},

	{
		title: "Камень Солнца",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Standing_Stones_e",
		scale: 0.5,
		id: "id48",
		top: 802.078300323486,
		left: 860.8672008514404,
	},

	{
		title: "Камень Земли",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Standing_Stones_e",
		scale: 0.5,
		id: "id49",
		top: 845.078300323486,
		left: 301.86720085144043,
	},

	{
		title: "Камень Воды",
		description: "",
		secondDescription: [""],
		type: "",
		nameIcon: "Standing_Stones_e",
		scale: 0.5,
		id: "id50",
		top: 469.0783003234861,
		left: 286.86720085144043,
	},

	{
		title: "",
		description: "",
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
		type: "loot",
		nameIcon: "Lode",
		scale: 0.3,
		id: "id52",
		top: 158.30080032348633,
		left: 314.86720085144043,
	},

	{
		title: "Жила",
		description: "",
		secondDescription: ["<q yelow>Эбонит</q>."],
		type: "loot",
		nameIcon: "Lode",
		scale: 0.3,
		id: "id53",
		top: 395.3008003234863,
		left: 1032.8672008514404,
	},
];

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
