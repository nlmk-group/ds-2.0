import{r as l,j as e,f as s,S as c,U as m}from"./iframe-CVAHojaF.js";import{useMDXComponents as d}from"./index-DqTt4rKv.js";import{DecoratorDefault as p}from"./Decorator.stories-Pdz9giCE.js";import{T as u}from"./TreeList-D6bLJl_1.js";import{s as i,H as b,E as y}from"./Header-P01wOpj2.js";import{F as g}from"./FigmaEmbed-g9QqaeRo.js";import{P as f}from"./Properties-1BWy3pzy.js";import{T as D}from"./Tests-MQmjhMeS.js";import{T as r}from"./index-Cyj4_MYZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RGmS5SUD.js";import"./index-BHrg75jh.js";import"./clsx-B-dksMZM.js";import"./16-DOUHJXJi.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./lodash-DOAXXUjV.js";import"./index-BVgG5EPb.js";import"./index-Bivvm1z2.js";import"./index-BHMo20JE.js";import"./index-DbWCe9dP.js";import"./generateUUID-M57HTP56.js";import"./24-BKsua3Hk.js";import"./index-x8Y8AkZd.js";import"./sizesMapping-D8QavrGc.js";import"./index-zQ6Q3aTj.js";import"./index-DZ_c8xXN.js";import"./index-CqzaiicI.js";import"./index-C8HyjBOv.js";import"./index-BN_w7FjE.js";import"./32-BGkTw_Iv.js";import"./24-DhWu0U6R.js";import"./24-QBRQbIxz.js";import"./24-DbZB43lA.js";import"./24-CpQC9mRz.js";import"./24-D4AD88CD.js";import"./24-i225Oh9B.js";import"./24-Tgd-_Nih.js";import"./24-BHgrLOFn.js";import"./24-DKX7LJ7g.js";import"./16-D51laVEK.js";import"./24-DoIGH_dx.js";import"./16-D08SDomb.js";import"./16-R8HovCn5.js";const T={data:{description:"Массив данных для построения дерева",table:{type:{summary:"TNodeItem[]"}}},onSelectedNode:{description:"Callback, вызываемый при выборе узла. Возвращает информацию о выбранном узле и всех выбранных узлах",action:"выбран узел",table:{type:{summary:"(e: TSelectedNodeEvent) => void"}}},onDataAfterDrag:{description:"Callback, вызываемый после перетаскивания узла. Возвращает обновленный массив данных",action:"перемещен узел",table:{type:{summary:"(e: TNodeItem[]) => void"}}},onDragStart:{description:"Callback, вызываемый в начале перетаскивания узла. Возвращает информацию о событии и перетаскиваемом узле",action:"начало перетаскивания узла",table:{type:{summary:"(e: TDragEvent) => void"}}},onDragEnd:{description:"Callback, вызываемый в конце перетаскивания узла. Возвращает информацию о событии и перетаскиваемом узле",action:"конец перетаскивания узла",table:{type:{summary:"(e: TDragEvent) => void"}}},checkable:{description:"Включает отображение чекбоксов с каскадным выделением",table:{defaultValue:{summary:!1},type:{summary:"boolean"}},control:{type:"boolean"}},draggable:{description:"Включает возможность перетаскивания узлов",table:{defaultValue:{summary:!1},type:{summary:"boolean"}},control:{type:"boolean"}},checkableSimple:{description:"Включает отображение простых чекбоксов без каскадного выделения",table:{defaultValue:{summary:!1},type:{summary:"boolean"}},control:{type:"boolean"}},rowHeight:{description:"Определяет высоту строки узла",table:{defaultValue:{summary:"s"},type:{summary:"ERowHeight"}},options:["m","s","xs"],control:{type:"select"}},initialCheckedKeys:{description:"Массив ключей элементов, которые должны быть отмечены (выбраны) при первом рендере",table:{type:{summary:"Key[]"}}},initialExpandedKeys:{description:"Массив ключей элементов, которые должны быть развернуты при первом рендере",table:{type:{summary:"Key[]"}}}},a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=417-86981&p=f&t=pOZSSeIHfpaoa1eT-0",x=()=>{const[t,o]=l.useState(0);return e.jsxs("div",{className:i.wrapper,children:[e.jsx(b,{title:"TreeList",description:"TreeList - компонент древовидного списка, который позволяет отображать иерархические данные с возможностью выбора элементов и drag-n-drop функциональностью.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/TreeList",figmaLink:a}),e.jsx("div",{className:i.tabs,children:e.jsxs(r,{children:[e.jsx(r.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>o(0)}),e.jsx(r.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>o(1)}),e.jsx(r.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>o(2)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(y,{height:500,description:"Базовый пример использования TreeList с чекбоксами и drag-n-drop",code:`import React, { useState } from 'react';
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
`,e.jsx(m,{children:e.jsx(x,{})})]})}function de(t={}){const{wrapper:o}={...d(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n()}export{de as default};
