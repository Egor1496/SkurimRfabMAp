(<q lblue>lvl</q>)
description: "Бандиты <q green>ЧИСЛО</q> снаружи и <q green>ЧИСЛО</q> внутри.",
secondDescription: [
  "<q red>Босс</q> НАЗВАНИЕ <q lblue>xp</q>. ПОЛОЖЕНИЕиСОСТОЯНИЕ.<br/>&nbsp; -ПОВЕДЕНИЕ.",
  "<q yelow>ЦЕННОСТЬ</q>.",
   ],

Для создания метки:
1. Перезагрузи страницу и не трогай колесико мышки (зум) для корректного сохранения координат.
2. Перед перезагрузкой ты можешь увеличить масштаб страницы браузера для увеличения карты.
3. Кликни на карту в том месте где хочешь поставить метку. При клике в буфер обмена копируется "объект" метка.
4. Отредактируйте объект и отправьте его(их) разработчику.

Для изменения метки:
1. Кликни по метке (не промахнись). При клике в буфер обмена копируется "объект" метка со всеми свойствами.
2. Отредактируйте объект и отправьте его(их) разработчику.

Описание:
Рекомендуемый уровень в заголовок (голубым ц.)
Количество врагов со случайным lvl, уникальных врагов/боссов и их особенности.
Уникальные предметы/сундуки/квестовые активности (голубым ц.) (предметы, зачистка врагов)/артефакты (фиолет ц.)/ одиночное оружие.
Боссы (красным ц.) их повадки/опасные мувы, Фазы боссов, Особые удары/выстрелы, оружие, тактика убийства (для воина), уникальное снаряжение.
Локации. Магические руны, закрывающиеся двери, безвозвратные пути (проходы без возможности вернуться).

Пример объекта:
{
title: "Бандиты.",
description: "2-шт.",
secondDescription: ["3. после открытия сундука.", "", "", "", ""],
type: "bandit",
nameIcon: "bandit",
id: "id15",
scale: 0.2,
top: 575,
left: 694,
},

title - Заголовок.
description - Описание.
secondDescription - Доп. описание (масив строк ["строка 1", "строка 2", "строка n..."])
type - Тип метки для фильтра.
nameIcon - иконка метки.
id - уникальный номер метки (игнорируй)
scale - Масштаб метки (0.0-1).
top - Расстояние от верхнего левого угла по вертикали.
left - Расстояние от верхнего левого угла по горизонтали.

Размеры иконок (default 0.3)
Пример - "scale: 0.3,".
Большие города/замки - scale 0.5.
Больше дажни - scale 0.4.
Лагеря и п. мелкие данжи - scale 0.3.
Великаны - scale 0.3.
Одиночные бандиты/изгои м прочее - scale 0.2.

Типы меток.
Пример: 'type: "treasure",'
treasure - ценности
bandit - Бандиты
trash - Изгои
animal - Звери
giant - Великаны
daedric - Дреморы
dwemer - Двемеры
falmer - Фалмеры
dragon boss - Драконы
magic - Маги
vampire - Вампиры
skelet - Скелеты и призраки
draugry - Драугры

"red" rgb(255, 58, 58);
"green" rgb(79, 255, 52);
"lblue" rgb(50, 187, 255);
"blue" rgb(60, 50, 255);
"yelow" rgb(255, 238, 49);
"orange" rgb(253, 162, 35);
"grey" rgb(160, 160, 160);
"purple" rgb(244, 83, 255);

Цвета для Заголовков и описаний
Пример: '<q purple>Винтерхолд</q>'
<q green></q> - количество
<q red></q> - Боссы
<q yelow></q> - Ценности
<q purple></q> - Артефакты
<q blue></q>
<q orange></q>
<q lblue></q> - Опыт, лвл

Перенос описания на новую строку.
<br/>

Табуляция
&#9;

Доступные иконки
"\_undiscovered" - Постфикс для темных иконок (если такая есть в списке)

Whiterun | Whiterun_undiscovered - Вайтран (Whiterun)
Solitude | Solitude_undiscovered - Солитьюд (Solitude)
Riften | Riften_undiscovered - Рифтен (Riften)
Markarth - Маркарт (Markarth)
Winterhold - Винтерхолд (Winterhold)
Windhelm | Windhelm_undiscovered - Виндхельм (Windhelm)
Dawnstar | Dawnstar_undiscovered - Данстар (Dawnstar)
Morthal | Morthal_undiscovered - Морфал (Morthal)
Falkreath | Falkreath_undiscovered - Фолкрит (Falkreath)

JarlResidence - Замок ярла (Dragonsreach)
CollegeofWinterhold - Коллегия винтерхолда
UnderstoneKeep - Подземная крепость (Understone Keep)
PalaceoftheKings - Дворец королей (Palace of the Kings)
MistveilKeep - Крепость тумана (Mistveil Keep)
BluePalace - Синий дворец

Star - звездочка.
bandit - Бандиты.
Campsite - Лагерь (Camp)
Cave - Пещера (Cave)
Tower - Форт (Fort)
Fort - Форт (Fort)
DwemerRuins - Двемерские руины (Dwarven Ruin)
Shipwreck - Корабли (Ship)

DaedricShrine - Даэдрическое святилище (Daedric Shrine)
Dragon - Логово дракона (Dragon Lair)
NordicDwelling - Руины (Ruin)
Tomb - Нордские руины (Nordic Ruin)
OrcStronghold - Крепость орков (Orc Stronghold)
Grove - Роща (Grove)
Mine - Шахта (Mine)
Pass - Проход (Pass)
Pond - Поляна (Clearing)

ImperialTower - Сторожевая башная (Watchtower)
GiantCamp - Лагерь великанов (Giant Camp)
NordicTower - Башня нордов (Nordic Tower)
PointofInterest - Достопримечательность (Landmark)
StandingStone - Камни хранители (Standing Stone)
ImperialCamp - Имперский лагерь (Imperial Camp)
StormcloakCamp - Лагерь Братьев Бури (Stormcloak Camp)

Town - Город (Town)
Settlement - Поселение (Settlement)
WoodMill - Лесопилка (Wood Mill)
Farm - Ферма (Farm)
FarmWithMill - Мельница (Wheat Mill)
Shack - Лачуга (Shack)
Stable - Конюшня (Stable)
Dock - Пристань (Dock)
Lighthouse - Маяк (Lighthouse)
