import{j as o}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as a}from"./index-CbmgEnq2.js";import{am as p,an as n,ao as l}from"./chunk-NUUEMKO5-JpSA_IYz.js";import{ae as e,ak as c}from"./TreeList--IdMnsib.js";import{r as x}from"./index-Bnop-kX6.js";import"./generateUUID-X09o9Pdp.js";import"./index-qbkiYuzD.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DovCGOp-.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-n_FSf3Cv.js";import"./index-DokmLR-l.js";import"./32-BTlKmMLd.js";import{DecoratorDefault as d}from"./Decorator.stories-B1hjNCvN.js";import{s as r,H as b,E as f}from"./Header-CYkIemZG.js";import{F as C}from"./FigmaEmbed-CWbT5A-_.js";import{P as j}from"./Properties-Baf9lqU9.js";import{T as g}from"./Tests-C3Lj5gnf.js";/* empty css               */import{a as u}from"./argsTypes-kB6H_2yR.js";import"./iframe--t2Gcnv8.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-B5g4YLzC.js";import"./.jest-test-results-DVkCitDq.js";const m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=594-273525",h="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ComboBox",k=()=>{const[t,s]=x.useState(0);return o.jsxs("div",{className:r.wrapper,children:[o.jsx(b,{title:"ComboBox",description:"Компонент ComboBox предоставляет расширенный функционал для создания выпадающего списка с поддержкой поиска, группировки, перетаскивания и изменения размера.",isStable:!0,codeLink:h,figmaLink:m}),o.jsx("div",{className:r.tabs,children:o.jsxs(e,{children:[o.jsx(e.Tab,{label:"Разработчику",active:t===0,onClick:()=>s(0)}),o.jsx(e.Tab,{label:"Дизайнеру",active:t===1,onClick:()=>s(1)}),o.jsx(e.Tab,{label:"Тестирование",active:t===2,onClick:()=>s(2)})]})}),t===0&&o.jsxs(o.Fragment,{children:[o.jsx(f,{description:"Базовый пример использования ComboBox с простым списком опций.",code:`import { ComboBox } from '@nlmk/ds-2.0';
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
);`}),o.jsx(j,{argsTypes:u})]}),t===1&&o.jsx(C,{url:m}),t===2&&o.jsx(g,{componentName:"ComboBox"})]})};function i(t){return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Components/ComboBox/Info",component:c,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=594-273525&t=gzSZWyf2gDh6EKRE-4"},jest:["ComboBox.test.tsx"]}}),`
`,o.jsx(n,{of:d}),`
`,o.jsx(l,{children:o.jsx(k,{})})]})}function ro(t={}){const{wrapper:s}={...a(),...t.components};return s?o.jsx(s,{...t,children:o.jsx(i,{...t})}):i()}export{ro as default};
