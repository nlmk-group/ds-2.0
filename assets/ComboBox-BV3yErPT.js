import{j as o}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as a}from"./index-D2yTtfOz.js";import"./index-BhfZ6bC3.js";import{af as e,al as p}from"./TreeList-r95OQsMc.js";import{r as n}from"./index-BcJSXhQi.js";import{DecoratorDefault as l}from"./Decorator.stories-D7iJJ_iz.js";import{s as r,H as c,E as x}from"./Header-BA1sa6FT.js";import{F as d}from"./FigmaEmbed-CkZZIlff.js";import{P as b}from"./Properties-ZScLc5Z8.js";import{T as f}from"./Tests-DiluCRUV.js";/* empty css               */import"./generateUUID-DDeHuJRp.js";import"./index-C3pqwiJi.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-BIIyWenB.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-DRazNneG.js";import"./index-C5rKoyII.js";import"./32-Bdg6aZTc.js";import{a as j}from"./argsTypes-DR8YX4TM.js";import{c as C,S as g,U as u}from"./DocsRenderer-CFRXHY34-CEAEn9uu.js";import"./index-ChsGqxH_.js";import"./preview-Crnv5oRk.js";import"./iframe-DVotE8Uy.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-yqvZrnpk.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const i="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=594-273525",h="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ComboBox",B=()=>{const[t,s]=n.useState(0);return o.jsxs("div",{className:r.wrapper,children:[o.jsx(c,{title:"ComboBox",description:"Компонент ComboBox предоставляет расширенный функционал для создания выпадающего списка с поддержкой поиска, группировки, перетаскивания и изменения размера.",isStable:!0,codeLink:h,figmaLink:i}),o.jsx("div",{className:r.tabs,children:o.jsxs(e,{children:[o.jsx(e.Tab,{label:"Разработчику",active:t===0,onClick:()=>s(0)}),o.jsx(e.Tab,{label:"Дизайнеру",active:t===1,onClick:()=>s(1)}),o.jsx(e.Tab,{label:"Тестирование",active:t===2,onClick:()=>s(2)})]})}),t===0&&o.jsxs(o.Fragment,{children:[o.jsx(x,{description:"Базовый пример использования ComboBox с простым списком опций.",code:`import { ComboBox, ComboList } from '@nlmk/ds-2.0';

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
);`}),o.jsx(b,{argsTypes:j})]}),t===1&&o.jsx(d,{url:i}),t===2&&o.jsx(f,{componentName:"ComboBox"})]})};function m(t){return o.jsxs(o.Fragment,{children:[o.jsx(C,{title:"Components/ComboBox/Info",component:p,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=594-273525&t=gzSZWyf2gDh6EKRE-4"},jest:["ComboBox.test.tsx"]}}),`
`,o.jsx(g,{of:l}),`
`,o.jsx(u,{children:o.jsx(B,{})})]})}function mo(t={}){const{wrapper:s}={...a(),...t.components};return s?o.jsx(s,{...t,children:o.jsx(m,{...t})}):m()}export{mo as default};
