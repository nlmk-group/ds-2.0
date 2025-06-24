import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as n}from"./index-D2yTtfOz.js";import"./index-D6_S9Wxc.js";import{DecoratorDefault as l}from"./Decorator.stories-D7iJJ_iz.js";import{af as r,aU as m}from"./TreeList-BqxVwK_V.js";import{r as p}from"./index-BcJSXhQi.js";import{s as a,H as c,E as d}from"./Header--yT6lINj.js";import{F as y}from"./FigmaEmbed-qtKAclLv.js";import{P as u}from"./Properties-D9m8XxST.js";import{T as b}from"./Tests-BCbKFRWX.js";import"./generateUUID-Cr6BF8sx.js";import"./index-D9qQUMnP.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-53N2drcz.js";import"./index-VmJK6twV.js";import"./index-BPWT-JIL.js";import"./index-BQAMZg9d.js";import"./index-C1EIKtiR.js";import"./32-DMwn_7G4.js";import{c as g,S as f,U as D}from"./DocsRenderer-CFRXHY34-CFH1eQhb.js";import"./index-ChsGqxH_.js";import"./preview-a1BA6wSx.js";import"./iframe-CgXnHU-M.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-DsmJLuSk.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const x={data:{description:"Массив данных для построения дерева",table:{type:{summary:"TNodeItem[]"}}},onSelectedNode:{description:"Callback, вызываемый при выборе узла. Возвращает информацию о выбранном узле и всех выбранных узлах",action:"выбран узел",table:{type:{summary:"(e: TSelectedNodeEvent) => void"}}},onDataAfterDrag:{description:"Callback, вызываемый после перетаскивания узла. Возвращает обновленный массив данных",action:"перемещен узел",table:{type:{summary:"(e: TNodeItem[]) => void"}}},onDragStart:{description:"Callback, вызываемый в начале перетаскивания узла. Возвращает информацию о событии и перетаскиваемом узле",action:"начало перетаскивания узла",table:{type:{summary:"(e: TDragEvent) => void"}}},onDragEnd:{description:"Callback, вызываемый в конце перетаскивания узла. Возвращает информацию о событии и перетаскиваемом узле",action:"конец перетаскивания узла",table:{type:{summary:"(e: TDragEvent) => void"}}},checkable:{description:"Включает отображение чекбоксов с каскадным выделением",table:{defaultValue:{summary:!1},type:{summary:"boolean"}},control:{type:"boolean"}},draggable:{description:"Включает возможность перетаскивания узлов",table:{defaultValue:{summary:!1},type:{summary:"boolean"}},control:{type:"boolean"}},checkableSimple:{description:"Включает отображение простых чекбоксов без каскадного выделения",table:{defaultValue:{summary:!1},type:{summary:"boolean"}},control:{type:"boolean"}},rowHeight:{description:"Определяет высоту строки узла",table:{defaultValue:{summary:"s"},type:{summary:"ERowHeight"}},options:["m","s","xs"],control:{type:"select"}},initialCheckedKeys:{description:"Массив ключей элементов, которые должны быть отмечены (выбраны) при первом рендере",table:{type:{summary:"Key[]"}}},initialExpandedKeys:{description:"Массив ключей элементов, которые должны быть развернуты при первом рендере",table:{type:{summary:"Key[]"}}}},i="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=417-86981&p=f&t=pOZSSeIHfpaoa1eT-0",k=()=>{const[t,o]=p.useState(0);return e.jsxs("div",{className:a.wrapper,children:[e.jsx(c,{title:"TreeList",description:"TreeList - компонент древовидного списка, который позволяет отображать иерархические данные с возможностью выбора элементов и drag-n-drop функциональностью.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/TreeList",figmaLink:i}),e.jsx("div",{className:a.tabs,children:e.jsxs(r,{children:[e.jsx(r.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>o(0)}),e.jsx(r.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>o(1)}),e.jsx(r.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>o(2)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(d,{height:500,description:"Базовый пример использования TreeList с чекбоксами и drag-n-drop",code:`import { TreeList } from '@nlmk/ds-2.0';

const defaultTreeData = [
  {
    key: '0-0',
    title: 'Производство стали',
    children: [
      {
        key: '0-0-0',
        title: 'Конвертерный цех',
        children: [
          { key: '0-0-0-0', title: 'Конвертер №1' },
          { key: '0-0-0-1', title: 'МНЛЗ №3' },
          { key: '0-0-0-2', title: 'Установка ковш-печь' }
        ]
      },
      {
        key: '0-0-1',
        title: 'Электросталеплавильный цех',
        children: [
          { key: '0-0-1-0', title: 'ДСП №1' },
          { key: '0-0-1-1', title: 'Агрегат печь-ковш' }
        ]
      }
    ]
  },
  {
    key: '0-1',
    title: 'Прокатное производство',
    children: [
      {
        key: '0-1-0',
        title: 'Цех горячей прокатки',
        children: [
          { key: '0-1-0-0', title: 'Стан 2000' },
          { key: '0-1-0-1', title: 'Методические печи' }
        ]
      }
    ]
  }
];

export default App = () => {
  const onSelectedNode = (e) => {
    console.log('Выбранный узел:', e);
  };

  const onDataAfterDrag = (newData) => {
    console.log('Структура после перемещения:', newData);
  };

  const onDragStart = (e) => {
    console.log('Событие начала перетаскивания: ',  e.event)
  }
  
  const onDragEnd = (e) => {
    console.log('Событие конца перетаскивания: ', e.event)
  }

  return (
    <TreeList
      data={defaultTreeData}
      checkable
      draggable
      rowHeight="s"
      onSelectedNode={onSelectedNode}
      onDataAfterDrag={onDataAfterDrag}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    />
  );
};`}),e.jsx(u,{argsTypes:x})]}),Number(t)===1&&e.jsx(y,{url:i}),Number(t)===2&&e.jsx(b,{componentName:"TreeList"})]})};function s(t){return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"Components/TreeList/Info",component:m,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=417-86981&p=f&t=pOZSSeIHfpaoa1eT-0"},jest:["TreeList.test.tsx"]}}),`
`,e.jsx(f,{of:l}),`
`,e.jsx(D,{children:e.jsx(k,{})})]})}function ae(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(s,{...t})}):s()}export{ae as default};
