import{c as e}from"./index-147655d7.js";import{d as s,v as a}from"./index-28aa8d3c.js";const r={children:{description:"Текст лейбла бэйджа",control:{type:"text"}},size:{description:`Размер бэйджа – <b>${Object.values(s).join(" | ")}</b>`,table:{defaultValue:{summary:s.m},type:{summary:"string"}},options:Object.values(s),control:{type:"select"}},color:{description:`Цвет бэйджа – <b>${Object.values(e).join(" | ")}</b>`,table:{defaultValue:{summary:e.primary},type:{summary:"string"}},options:Object.values(e).filter(t=>t!==e.disabled&&t!==e.inherit&&t!==e.info),control:{type:"select"}},variant:{description:`Вариант бэйджа <b>${Object.values(a).join(" | ")}</b>`,table:{defaultValue:{summary:a.solid},type:{summary:"string"}},options:Object.values(a),control:{type:"select"}}};export{r as a};