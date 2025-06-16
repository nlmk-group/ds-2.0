import{j as o}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as a}from"./index-D2yTtfOz.js";import"./index-DPURVl01.js";import{af as r,al as p}from"./TreeList-Dc9EUqUK.js";import{r as n}from"./index-BcJSXhQi.js";import"./generateUUID-Cr6BF8sx.js";import"./index-D9qQUMnP.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-ClHhEkhs.js";import"./index-DmffzHLE.js";import"./index-53N2drcz.js";import"./index-VmJK6twV.js";import"./index-BPWT-JIL.js";import"./index-BQAMZg9d.js";import"./index-C1EIKtiR.js";import"./32-DMwn_7G4.js";import{DecoratorDefault as l}from"./Decorator.stories-D7iJJ_iz.js";import{s as e,H as c,E as x}from"./Header-DCsDbjem.js";import{F as d}from"./FigmaEmbed-Cz0sPeca.js";import{P as b}from"./Properties-BuFAmruQ.js";import{T as f}from"./Tests-BvJI3PiN.js";/* empty css               */import{a as C}from"./argsTypes-kB6H_2yR.js";import{c as j,S as g,U as u}from"./DocsRenderer-CFRXHY34-Dyg41BAy.js";import"./index-ChsGqxH_.js";import"./preview-tW-mVJDs.js";import"./iframe-CTrSWHGI.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";import"./.jest-test-results-VxmNWdDd.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=594-273525",h="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ComboBox",B=()=>{const[t,s]=n.useState(0);return o.jsxs("div",{className:e.wrapper,children:[o.jsx(c,{title:"ComboBox",description:"Компонент ComboBox предоставляет расширенный функционал для создания выпадающего списка с поддержкой поиска, группировки, перетаскивания и изменения размера.",isStable:!0,codeLink:h,figmaLink:m}),o.jsx("div",{className:e.tabs,children:o.jsxs(r,{children:[o.jsx(r.Tab,{label:"Разработчику",active:t===0,onClick:()=>s(0)}),o.jsx(r.Tab,{label:"Дизайнеру",active:t===1,onClick:()=>s(1)}),o.jsx(r.Tab,{label:"Тестирование",active:t===2,onClick:()=>s(2)})]})}),t===0&&o.jsxs(o.Fragment,{children:[o.jsx(x,{description:"Базовый пример использования ComboBox с простым списком опций.",code:`import { ComboBox } from '@nlmk/ds-2.0';
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
`,o.jsx(u,{children:o.jsx(B,{})})]})}function io(t={}){const{wrapper:s}={...a(),...t.components};return s?o.jsx(s,{...t,children:o.jsx(i,{...t})}):i()}export{io as default};
