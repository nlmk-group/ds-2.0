import{E as t,a,b as e}from"./generateUUID-DB8_0F2G.js";const s={size:{description:"Размер",table:{defaultValue:{summary:t.m},type:{summary:Object.values(t).join(" | ")}},options:Object.values(t),control:{type:"select"}},variant:{description:"Тип аккордеона",table:{defaultValue:{summary:a.default},type:{summary:Object.values(a).join(" | ")}},options:Object.values(a),control:{type:"select"}},multipleExpanded:{description:"Возможноть ракрывать несколько элементов одновременно",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}},startIcon:{description:"Иконка слева от заголовка",table:{defaultValue:{summary:e.arrow},type:{summary:Object.values(e).join(" | ")}},options:Object.values(e),control:{type:"select"}},endIcon:{description:"Иконка справа от заголовка",table:{defaultValue:{summary:"null"},type:{summary:Object.values(e).join(" | ")}},options:Object.values(e),control:{type:"select"}},disabled:{description:"Условие блокировки доступа к элементам компонента",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}}};export{s as a};
