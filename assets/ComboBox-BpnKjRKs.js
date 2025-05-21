import{j as o}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as a}from"./index-CbmgEnq2.js";import"./index-Cg4FlZUc.js";import{ag as e,am as p}from"./TreeList-ChyggQS5.js";import{r as n}from"./index-Bnop-kX6.js";import"./generateUUID-X09o9Pdp.js";import"./index-qbkiYuzD.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DovCGOp-.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-n_FSf3Cv.js";import"./index-DokmLR-l.js";import"./32-BTlKmMLd.js";import{DecoratorDefault as l}from"./Decorator.stories-B1hjNCvN.js";import{s as r,H as c,E as x}from"./Header-DoEz7EVi.js";import{F as d}from"./FigmaEmbed-pZ_Xsbw5.js";import{P as b}from"./Properties-BySoTS4I.js";import{T as f}from"./Tests-OdO6CFav.js";/* empty css               */import{a as C}from"./argsTypes-kB6H_2yR.js";import{c as j,e as g,U as u}from"./DocsRenderer-CFRXHY34-Bs6YVDKr.js";import"./preview-ft71v16T.js";import"./iframe-CWffINz-.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-B5g4YLzC.js";import"./.jest-test-results-mpWeDU2g.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";const m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=594-273525",h="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ComboBox",B=()=>{const[t,s]=n.useState(0);return o.jsxs("div",{className:r.wrapper,children:[o.jsx(c,{title:"ComboBox",description:"Компонент ComboBox предоставляет расширенный функционал для создания выпадающего списка с поддержкой поиска, группировки, перетаскивания и изменения размера.",isStable:!0,codeLink:h,figmaLink:m}),o.jsx("div",{className:r.tabs,children:o.jsxs(e,{children:[o.jsx(e.Tab,{label:"Разработчику",active:t===0,onClick:()=>s(0)}),o.jsx(e.Tab,{label:"Дизайнеру",active:t===1,onClick:()=>s(1)}),o.jsx(e.Tab,{label:"Тестирование",active:t===2,onClick:()=>s(2)})]})}),t===0&&o.jsxs(o.Fragment,{children:[o.jsx(x,{description:"Базовый пример использования ComboBox с простым списком опций.",code:`import { ComboBox } from '@nlmk/ds-2.0';
import ComboList from '@nlmk/ds-2.0/ComboList';

export default App = () => (
  <ComboBox label="Выберите опцию">
    <ComboList
      items={[
        { id: '1', label: 'Опция 1' },
        { id: '2', label: 'Опция 2' },
        { id: '3', label: 'Опция 3' }
      ]}
      onChange={(selected) => console.log(selected)}
      isMultiple={false}
    />
  </ComboBox>
);`}),o.jsx(b,{argsTypes:C})]}),t===1&&o.jsx(d,{url:m}),t===2&&o.jsx(f,{componentName:"ComboBox"})]})};function i(t){return o.jsxs(o.Fragment,{children:[o.jsx(j,{title:"Components/ComboBox/Info",component:p,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=594-273525&t=gzSZWyf2gDh6EKRE-4"},jest:["ComboBox.test.tsx"]}}),`
`,o.jsx(g,{of:l}),`
`,o.jsx(u,{children:o.jsx(B,{})})]})}function ro(t={}){const{wrapper:s}={...a(),...t.components};return s?o.jsx(s,{...t,children:o.jsx(i,{...t})}):i()}export{ro as default};
