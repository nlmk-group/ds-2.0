import{r as l,j as e,m as s,S as c,U as m}from"./iframe-DUDunD5j.js";import{useMDXComponents as d}from"./index-CDbv5Jgm.js";import{DecoratorDefault as p}from"./Decorator.stories-DJdCAXEf.js";import{T as u}from"./TreeList-BqVw7unH.js";import{s as i,H as b,E as y}from"./Header-BrZEypuE.js";import{F as g}from"./FigmaEmbed-DovFRgvJ.js";import{P as f}from"./Properties-CcP2VO-p.js";import{T as D}from"./Tests-CSK3RYMm.js";import{T as r}from"./index-DntXJei4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cka9l4Jl.js";import"./index-DyX2qzoz.js";import"./clsx-B-dksMZM.js";import"./16-4gnAFB8p.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-BS4wiMYT.js";import"./index-rc7u3FmU.js";import"./index-z_YeHj0K.js";import"./index-r-uICxAh.js";import"./generateUUID-M57HTP56.js";import"./24-C5ui32Ki.js";import"./index-YMfOmFJ1.js";import"./sizesMapping-D8QavrGc.js";import"./index-BixcmxoL.js";import"./index-aoSKrGJR.js";import"./index-BE6Pvktf.js";import"./index-BjTLv_jS.js";import"./index-DdmbHqmW.js";import"./32-BB59z0Rt.js";import"./24-tbbQM-dv.js";import"./24-BLuChUkw.js";import"./24-BGpvFgfj.js";import"./24-BGrLeqpw.js";import"./24-CAewpWgK.js";import"./24-BoEjxhhs.js";import"./24-BAIQ796Q.js";import"./24-BwgIJwEH.js";import"./24-C99UGV7O.js";import"./16-CfofIm8-.js";import"./24-CoSTS1kQ.js";import"./16-DEDu0dyt.js";import"./16-BarbOM5u.js";const T={data:{description:"Массив данных для построения дерева",table:{type:{summary:"TNodeItem[]"}}},onSelectedNode:{description:"Callback, вызываемый при выборе узла. Возвращает информацию о выбранном узле и всех выбранных узлах",action:"выбран узел",table:{type:{summary:"(e: TSelectedNodeEvent) => void"}}},onDataAfterDrag:{description:"Callback, вызываемый после перетаскивания узла. Возвращает обновленный массив данных",action:"перемещен узел",table:{type:{summary:"(e: TNodeItem[]) => void"}}},onDragStart:{description:"Callback, вызываемый в начале перетаскивания узла. Возвращает информацию о событии и перетаскиваемом узле",action:"начало перетаскивания узла",table:{type:{summary:"(e: TDragEvent) => void"}}},onDragEnd:{description:"Callback, вызываемый в конце перетаскивания узла. Возвращает информацию о событии и перетаскиваемом узле",action:"конец перетаскивания узла",table:{type:{summary:"(e: TDragEvent) => void"}}},checkable:{description:"Включает отображение чекбоксов с каскадным выделением",table:{defaultValue:{summary:!1},type:{summary:"boolean"}},control:{type:"boolean"}},draggable:{description:"Включает возможность перетаскивания узлов",table:{defaultValue:{summary:!1},type:{summary:"boolean"}},control:{type:"boolean"}},checkableSimple:{description:"Включает отображение простых чекбоксов без каскадного выделения",table:{defaultValue:{summary:!1},type:{summary:"boolean"}},control:{type:"boolean"}},rowHeight:{description:"Определяет высоту строки узла",table:{defaultValue:{summary:"s"},type:{summary:"ERowHeight"}},options:["m","s","xs"],control:{type:"select"}},initialCheckedKeys:{description:"Массив ключей элементов, которые должны быть отмечены (выбраны) при первом рендере",table:{type:{summary:"Key[]"}}},initialExpandedKeys:{description:"Массив ключей элементов, которые должны быть развернуты при первом рендере",table:{type:{summary:"Key[]"}}}},a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=417-86981&p=f&t=pOZSSeIHfpaoa1eT-0",x=()=>{const[t,o]=l.useState(0);return e.jsxs("div",{className:i.wrapper,children:[e.jsx(b,{title:"TreeList",description:"TreeList - компонент древовидного списка, который позволяет отображать иерархические данные с возможностью выбора элементов и drag-n-drop функциональностью.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/TreeList",figmaLink:a}),e.jsx("div",{className:i.tabs,children:e.jsxs(r,{children:[e.jsx(r.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>o(0)}),e.jsx(r.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>o(1)}),e.jsx(r.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>o(2)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(y,{height:500,description:"Базовый пример использования TreeList с чекбоксами и drag-n-drop",code:`import React, { useState } from 'react';
import { TreeList, IconFolderFilled24, IconCircleOutlined24, IconWarningFilled24, IconFolderOutlined24 } from '@nlmk/ds-2.0';

const defaultTreeData = [
  {
    key: '0-0',
    title: 'Производство стали',
    icon: <IconFolderFilled24 />, // Кастомная иконка
    children: [
      {
        key: '0-0-0',
        title: 'Конвертерный цех',
        icon: <IconFolderFilled24 />,
        children: [
          { 
            key: '0-0-0-0', 
            title: 'Конвертер №1',
            icon: <IconCircleOutlined24 />
          },
          { 
            key: '0-0-0-1', 
            title: 'МНЛЗ №3 (заблокировано)',
            icon: <IconWarningFilled24 />,
            disabled: true // Полная блокировка узла
          },
          { 
            key: '0-0-0-2', 
            title: 'Установка ковш-печь (нельзя перетаскивать)',
            icon: <IconCircleOutlined24 />,
            disableDraggable: true // Запрет только на перетаскивание
          }
        ]
      },
      {
        key: '0-0-1',
        title: 'Электросталеплавильный цех',
        icon: <IconFolderFilled24 />,
        children: [
          { 
            key: '0-0-1-0', 
            title: 'ДСП №1',
            icon: <IconCircleOutlined24 />
          },
          { 
            key: '0-0-1-1', 
            title: 'Агрегат печь-ковш',
            icon: <IconCircleOutlined24 />
          }
        ]
      }
    ]
  },
  {
    key: '0-1',
    title: 'Прокатное производство',
    icon: <IconFolderOutlined24 />,
    children: [
      {
        key: '0-1-0',
        title: 'Цех горячей прокатки',
        icon: <IconFolderFilled24 />,
        children: [
          { 
            key: '0-1-0-0', 
            title: 'Стан 2000',
            icon: <IconCircleOutlined24 />
          },
          { 
            key: '0-1-0-1', 
            title: 'Методические печи',
            icon: <IconCircleOutlined24 />
          }
        ]
      }
    ]
  }
];

const App = () => {
  const [data, setData] = useState(defaultTreeData);

  const onSelectedNode = (e) => {
    console.log('Выбранный узел:', e);
  };

  const onDataAfterDrag = (newData) => {
    console.log('Структура после перемещения:', newData);
    setData(newData);
  };

  const onDragStart = (e) => {
    console.log('Событие начала перетаскивания: ',  e.event)
  }
  
  const onDragEnd = (e) => {
    console.log('Событие конца перетаскивания: ', e.event)
  }

  return (
    <TreeList
      data={data}
      checkable
      draggable
      rowHeight="s"
      onSelectedNode={onSelectedNode}
      onDataAfterDrag={onDataAfterDrag}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    />
  );
};

export default App;`}),e.jsx(f,{argsTypes:T})]}),Number(t)===1&&e.jsx(g,{url:a}),Number(t)===2&&e.jsx(D,{componentName:"TreeList"})]})};function n(t){return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/TreeList/Info",component:u,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=417-86981&p=f&t=pOZSSeIHfpaoa1eT-0"},jest:["TreeList.test.tsx"]}}),`
`,e.jsx(c,{of:p}),`
`,e.jsx(m,{children:e.jsx(x,{})})]})}function me(t={}){const{wrapper:o}={...d(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n()}export{me as default};
