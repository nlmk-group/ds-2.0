import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as m}from"./index-CbmgEnq2.js";import{am as n,an as l,ao as p}from"./chunk-NUUEMKO5-DRLKmIkX.js";import{DecoratorDefault as c}from"./Decorator.stories-B1hjNCvN.js";import{ah as r,aJ as d}from"./TreeList-xp0hkVtZ.js";import{r as u}from"./index-Bnop-kX6.js";import{s as a,H as b,E as f}from"./Header-DN6MKiI-.js";import{F as y}from"./FigmaEmbed-Ce_-7NFz.js";import{P as g}from"./Properties-CKpneD_Z.js";import{T as x}from"./Tests-Bj4s1B_c.js";import"./generateUUID-B-1dzpB_.js";import"./index-CvUjrmfM.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DubX4Ptm.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-CLtrYh5C.js";import"./index-DokmLR-l.js";import"./32-BXnIH58b.js";import"./iframe-DUZ1hTlE.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-u9G5VVgx.js";import"./index-B5g4YLzC.js";const T={data:{description:"Массив данных для построения дерева",table:{type:{summary:"TNodeItem[]"}}},onSelectedNode:{description:"Callback, вызываемый при выборе узла. Возвращает информацию о выбранном узле и всех выбранных узлах",action:"выбран узел",table:{type:{summary:"(e: TSelectedNodeEvent) => void"}}},onDataAfterDrag:{description:"Callback, вызываемый после перетаскивания узла. Возвращает обновленный массив данных",action:"перемещен узел",table:{type:{summary:"(e: TNodeItem[]) => void"}}},checkable:{description:"Включает отображение чекбоксов с каскадным выделением",table:{defaultValue:{summary:!1},type:{summary:"boolean"}},control:{type:"boolean"}},draggable:{description:"Включает возможность перетаскивания узлов",table:{defaultValue:{summary:!1},type:{summary:"boolean"}},control:{type:"boolean"}},checkableSimple:{description:"Включает отображение простых чекбоксов без каскадного выделения",table:{defaultValue:{summary:!1},type:{summary:"boolean"}},control:{type:"boolean"}},rowHeight:{description:"Определяет высоту строки узла",table:{defaultValue:{summary:"s"},type:{summary:"ERowHeight"}},options:["m","s","xs"],control:{type:"select"}}},s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=417-86981&p=f&t=pOZSSeIHfpaoa1eT-0",k=()=>{const[t,o]=u.useState(0);return e.jsxs("div",{className:a.wrapper,children:[e.jsx(b,{title:"TreeList",description:"TreeList - компонент древовидного списка, который позволяет отображать иерархические данные с возможностью выбора элементов и drag-n-drop функциональностью.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/TreeList",figmaLink:s}),e.jsx("div",{className:a.tabs,children:e.jsxs(r,{children:[e.jsx(r.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>o(0)}),e.jsx(r.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>o(1)}),e.jsx(r.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>o(2)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(f,{height:500,description:"Базовый пример использования TreeList с чекбоксами и drag-n-drop",code:`import { TreeList } from '@nlmk/ds-2.0';

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

  return (
    <TreeList
      data={defaultTreeData}
      checkable
      draggable
      rowHeight="s"
      onSelectedNode={onSelectedNode}
      onDataAfterDrag={onDataAfterDrag}
    />
  );
};`}),e.jsx(g,{argsTypes:T})]}),Number(t)===1&&e.jsx(y,{url:s}),Number(t)===2&&e.jsx(x,{componentName:"TreeList"})]})};function i(t){return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Components/TreeList/Info",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=417-86981&p=f&t=pOZSSeIHfpaoa1eT-0"},jest:["TreeList.test.tsx"]}}),`
`,e.jsx(l,{of:c}),`
`,e.jsx(p,{children:e.jsx(k,{})})]})}function te(t={}){const{wrapper:o}={...m(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i()}export{te as default};
