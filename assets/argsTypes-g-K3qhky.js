import{z as t,v as e}from"./index-De6xVjfl.js";import"./index-DQ2WTIsS.js";const a={children:{description:"Содержимое, которое будет отображаться на Snackbar, например текст.",control:{type:"text"}},color:{description:"Необязательное свойство. Цвет фона Snackbar. Значение по умолчанию - серый.",table:{defaultValue:{summary:t.dark},type:{summary:Object.values(t).join(" | ")}},options:Object.values(t),control:{type:"select"}},variant:{description:"Вариант Snackbar",table:{defaultValue:{summary:e.solid},type:{summary:Object.values(e).join(" | ")}},options:Object.values(e),control:{type:"select"}},close:{description:"Необязательное свойство. Функция, которая будет вызываться при клике на кнопку закрытия. Если не предоставлено, кнопка закрытия не будет отображаться.",control:{type:"boolean"}},actionButton:{description:"Необязательное свойство. Функция, которая будет вызываться при клике на кнопку действия. Если не предоставлено, кнопка действия не будет отображаться.",control:{type:"boolean"}},actionText:{description:'Необязательное свойство. Текст для кнопки действия. Если не предоставлено, по умолчанию будет использован текст "Посмотреть".',table:{defaultValue:{summary:"Посмотреть"},type:{summary:"string"}},control:{type:"text"}},autoHideDuration:{description:"Необязательное свойство. Время в миллисекундах, через которое Snackbar автоматически скроется. Если установлено в 0 или не указано, Snackbar не будет автоматически скрываться.",table:{defaultValue:{summary:0},type:{summary:"number"}},control:{type:"number"}}},n=a;export{n as a};
