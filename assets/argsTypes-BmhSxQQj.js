import{i as t}from"./index-BuA7rasS.js";import{a1 as e,a2 as s,a3 as a}from"./index-DTc5U-ED.js";const i={children:{description:"Текст статуса",control:{type:"text"}},icon:{description:"Иконка статуса",table:{defaultValue:{summary:""},type:{summary:"string"}},options:[...Object.keys({...t[16],...t[24],...t[32]})],control:{type:"select"}},size:{description:`Размер статуса – <b>${Object.values(e).join(" | ")}</b>`,table:{defaultValue:{summary:e.m},type:{summary:"string"}},options:Object.values(e),control:{type:"select"}},color:{description:`Тип статуса – <b>${Object.values(s).join(" | ")}</b>`,table:{defaultValue:{summary:s.default},type:{summary:"string"}},options:Object.values(s),control:{type:"select"}},fill:{description:`Заливка статуса – <b>${Object.values(a).join(" | ")}</b>`,table:{defaultValue:{summary:a.solid},type:{summary:"string"}},options:Object.values(a),control:{type:"select"}},className:{description:"Дополнительный класс статуса",control:{type:"text"}}};export{i as a};
