import{Y as e,Z as t,_ as o}from"./TreeList-xp0hkVtZ.js";const n={orientation:{description:`Расположение сайдбара – <b>${Object.values(e).join(" | ")}</b>.`,table:{defaultValue:{summary:e.vertical},type:{summary:"string"}},options:[e.vertical,e.horizontal],control:{type:"select"}},variant:{description:`Тип сайдбара – <b>${Object.values(t).join(" | ")}</b>.`,table:{defaultValue:{summary:t.default},type:{summary:"string"}},options:[t.default,t.burger],control:{type:"select"}},allowFavorites:{description:"Условие доступности добавления разделов в избранное",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}},isLoggedIn:{description:"Свойство, указывающее, залогинен ли пользователь",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}},systemName:{description:"Название системы, отображаемое вверху слева",control:{type:"text"}},userName:{description:"Имя пользователя",control:{type:"text"}},userSurname:{description:"Фамилия пользователя",control:{type:"text"}},currentPath:{description:"Текущий путь",control:{type:"text"}},defaultMenuOpen:{description:"Флаг начального состояния меню (развернуто/свернуто)",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}},overlay:{description:"Флаг отображения оверлея при открытом подменю",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}},onChangeFavorites:{description:"Обработчик, позволяющий отслеживать изменения в списке избранного",action:"onChangeFavorites"}};`${Object.values(o).join(" | ")}`,Object.values(o);export{n as a};
