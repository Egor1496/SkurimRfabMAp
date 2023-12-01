const bookList = [
	{
		title: "<span>Острое перо</span> (<q lblue>50lvl</q>)",
		descrTitle: `Острое перо`,
		descr: `
    Луркеры <q green>3</q> (<q lblue>40-60lvl</q>)<br />
    Искателей <q green>11</q> (<q lblue>39-50lvl</q>)<br />
    Призрачного оружия <q green>18</q> (<q lblue>100lvl</q>)<br />
    Волшебных перчаток <q green>9</q> (<q lblue>70lvl</q>)<br />`,
		loot: `
    Баффы
    <q yelow>Сила Драконорожденного</q>
    <q yelow>Пламя Драконорожденного</q>
    <q yelow>Мороз Драконорожденного</q>
    <q yelow>Слово Подчинение Воли</q>
    `,
		secDescr: ``,
	},
	{
		title: "<span>Филамент и филигрань</span> (<q lblue>50lvl</q>)",
		descrTitle: `Филамент и филигрань`,
		descr: `
    Луркеры <q green>2</q> (<q lblue>40-60lvl</q>)<br />
    Искателей <q green>2</q> (<q lblue>39-50lvl</q>)<br />
    Призрачного оружия <q green>10</q> (<q lblue>100lvl</q>)<br />
    Волшебных перчаток <q green>5</q> (<q lblue>70lvl</q>)<br />
    `,
		loot: `
    Баффы
    <q yelow>Секрет Силы</q>
    <q yelow>Секрет Волшебства</q>
    <q yelow>Секрет Защиты</q>
    <br />
    <q yelow>Мастерский стук в сундуке</q>
    `,
		secDescr: `Используй Святой плащ, чтобы не получать урон во тьме`,
	},
	{
		title: "<span>Скрытый сумрак</span> (<q lblue>50lvl</q>)",
		descrTitle: `Скрытый сумрак`,
		descr: `
    Луркеры <q green>3</q> (<q lblue>40-60lvl</q>)<br />
    Искателей <q green>7</q> (<q lblue>39-50lvl</q>)<br />
    Призрачного оружия <q green>15</q> (<q lblue>100lvl</q>)<br />
    Волшебных перчаток <q green>9</q> (<q lblue>70lvl</q>)<br />
    `,
		loot: `
    Баффы
    <q yelow>Огония Моры</q>
    <q yelow>Хватка Моры</q>
    <q yelow>Милость Моры</q>
    `,
		secDescr: ``,
	},
	{
		title: "<span>Болезненный регент</span> (<q lblue>50lvl</q>)",
		descrTitle: `Болезненный регент`,
		descr: `
    Луркер <q green>2</q> (<q lblue>40-60lvl</q>)<br />
    Дремор <q green>3</q>, <br />
    Искателей <q green>2</q> (<q lblue>39-50lvl</q>)<br />
    Призрачного оружия <q green>11</q> (<q lblue>100lvl</q>)<br />
    Волшебных перчаток <q green>4</q> (<q lblue>70lvl</q>)<br />
    Несколько атронахов. <br />
    `,
		loot: `
    Баффы
    <q yelow>Искатель Силы</q> <q yelow>Искатель Волшебства</q> <q yelow>Искатель Тени</q>
    <span>В cундуке возле книги </span>
    <span><q yelow>Превосходное Зелье Веса</q>.</span>
    `,
		secDescr: `
    Используй Святой плащ, чтобы не получать урон во тьме. <br />
    Искатели бьют чистой магией.
    `,
	},
	{
		title: "<span>Ветры перемен</span> (<q lblue>50lvl</q>)",
		descrTitle: `Ветры перемен`,
		descr: `
    Призрачного оружия <q green>5</q> (<q lblue>100lvl</q>)<br />
    Искатели <q green>2</q> (<q lblue>39-50lvl</q>)<br />
    Волшебные перчатки <q green>3</q> (<q lblue>70lvl</q>)<br />
    Луркер (<q lblue>40-60lvl</q>).
    `,
		loot: `
    Баффы
    <q yelow>Интуиция Ученого</q>
    <q yelow>Интуиция Соратника</q>
    <q yelow>Интуиция Любовника</q>
    `,
		secDescr: `
    Самая Маленькая Книга <br />
    Искатели бьют чистой магией.
    `,
	},
	{
		title: "<span>Нерасказанные легенды</span> (<q lblue>50lvl</q>)",
		descrTitle: `Нерасказанные легенды`,
		descr: `
    Луркер <q green>3</q> (<q lblue>40-60lvl</q>)<br />
    Искателей <q green>4</q>, (<q lblue>39-50lvl</q>)<br />
    Призрачного оружия <q green>11</q> (<q lblue>100lvl</q>)<br />
    Волшебных перчаток <q green>8</q> (<q lblue>70lvl</q>).
    `,
		loot: `Баффы <q yelow>Черный Рынок</q> <q yelow>Тайный Слуга</q> <q yelow>Знание Барда</q>`,
		secDescr: `Искатели бьют чистой магией.`,
	},
	{
		title: "<span>Пробуждающие сны </span> (<q lblue>60lvl</q>)",
		descrTitle: `Пробуждающие сны`,
		isMirak: true,
		descr: `
    Луркер (<q lblue>40-60lvl</q>)<br />
    Искателей <q green>15</q> (<q lblue>39-50lvl</q>)<br />
    Призрачного оружия <q green>38</q> (<q lblue>100lvl</q>)<br />
    Волшебных перчаток <q green>21</q> (<q lblue>70lvl</q>)<br />
    <br />
    <q red>Босс</q> Маг Мирак (<q lblue>150lvl</q>) <q lblue>50000xp</q>. Снижает огне и гроз резы. Создает 3 стихийных атронахов каждые
    30с. Призывает морозный шторм и стреляет гроз потоком. Телепортируется стараясь уйти либо сблизиться с игроком. 3 раза полностью
    восстанавливается после потери ХП. <br />
    Если убивает дракона то кастит огне нову (<q red>600 урона</q>). <br />
    При телепортации к вам иногда кастит огне нову (<q red>600 урона</q>). <br />
    Примерно раз в минуту кастит огне нову (<q red>600 урона</q>). <br />
    &nbsp; -Используй: Крик Бесплотность, 80% стих и 60% маг реза, Щит Разрушитель Заклинаний, Зеркало Шалидора, Превосходки.
    `,
		loot: `
    Бафф <q yelow>Истинный Драконорожденный</q> <br />
    <q yelow>Сет Мирака</q> <q yelow>Посох Мирака</q><q yelow>20 Душ Дракона</q>
    <span>Слово <q yelow>Воплощение Дракона</q> можно взять до битвы.</span>
    `,
		secDescr: `
    Квест на Мирака: нужно подчинить дракона и оседлать его. Прилетев на круглую арену, у вас будет 50 сек времени на баффы. Все заклинания
    врагов ухудшают видимость, поэтому сначала убивай атронахов потом Мирака. <br />
    `,
	},
];

const bookUL = $(".wrap-list .books-list"),
	bookULDescr = $(".wrap-list .books-list-descr");

let htmlBookUL = "",
	htmlBookULDescr = "";

bookList.forEach((book, i) => {
	htmlBookUL += `<li class="books-item" data-number="${i}"><span>${book.title}</li>`;
	htmlBookULDescr += `
  <li class="descr-item">
    <div class="title">${book.descrTitle}</div>
    ${book.isMirak ? `<div class="descr descr--mirak">${book.descr}</div>` : `<div class="descr">${book.descr}</div>`}
    <div class="loot">${book.loot}</div>
    <div class="sec-desrc">${book.secDescr}</div>
  </li>
  `;
});

bookUL.html(htmlBookUL);
bookULDescr.html(htmlBookULDescr);
