import{o as t,p as e,q as o}from"./index-BTGymsfC.js";const r={orientation:{description:`Расположение сайдбара – <b>${Object.values(t).join(" | ")}</b>.`,table:{defaultValue:{summary:t.vertical},type:{summary:"string"}},options:[t.vertical,t.horizontal],control:{type:"select"}},variant:{description:`Тип сайдбара – <b>${Object.values(e).join(" | ")}</b>.`,table:{defaultValue:{summary:e.default},type:{summary:"string"}},options:[e.default,e.burger],control:{type:"select"}},allowFavorites:{description:"Условие доступности добавления разделов в избранное",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}},isLoggedIn:{description:"Свойство, указывающее, залогинен ли пользователь",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}},systemName:{description:"Название системы, отображаемое вверху слева",control:{type:"text"}},userName:{description:"Имя пользователя",control:{type:"text"}},userSurname:{description:"Фамилия пользователя",control:{type:"text"}},currentPath:{description:"Текущий путь",control:{type:"text"}}};`${Object.values(o).join(" | ")}`,Object.values(o);export{r as a};
