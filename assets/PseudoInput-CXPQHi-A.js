import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as u}from"./index-CbmgEnq2.js";import{am as l,an as d,ao as c}from"./chunk-NUUEMKO5-JpSA_IYz.js";import{ae as s,H as x,aG as I}from"./TreeList--IdMnsib.js";import{DecoratorDefault as b}from"./Decorator.stories-B1hjNCvN.js";import{r as P}from"./index-Bnop-kX6.js";import{s as i,H as j,E as p}from"./Header-CYkIemZG.js";import{F as f}from"./FigmaEmbed-CWbT5A-_.js";import{P as g}from"./Properties-Baf9lqU9.js";import{T as C}from"./Tests-C3Lj5gnf.js";/* empty css               */import"./generateUUID-X09o9Pdp.js";import"./index-qbkiYuzD.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DovCGOp-.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-n_FSf3Cv.js";import"./index-DokmLR-l.js";import"./32-BTlKmMLd.js";import{a as h}from"./argsTypes-yuxWcvp0.js";import"./iframe--t2Gcnv8.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-DVkCitDq.js";import"./index-B5g4YLzC.js";const n="PseudoInput",L="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-321721",N=()=>{const[o,e]=P.useState(0),r=m=>o===m;return t.jsxs("div",{className:i.wrapper,children:[t.jsx(j,{title:n,description:"PseudoInput - элемент, который позволяет отображать информацию.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${n}`}),t.jsx("div",{className:i.tabs,children:t.jsxs(s,{children:[t.jsx(s.Tab,{label:"Разработчику",active:r(0),onClick:()=>e(0)}),t.jsx(s.Tab,{label:"Дизайнеру",active:r(1),onClick:()=>e(1)}),t.jsx(s.Tab,{label:"Тестирование",active:r(2),onClick:()=>e(2)})]})}),o==0&&t.jsxs(t.Fragment,{children:[t.jsx(p,{height:200,description:"PseudoInput по умолчанию. Компонент предназначен только для чтения пропсов и вывода их на экран",code:`import { PseudoInput } from '@nlmk/ds-2.0';

export default App = () => (
  <PseudoInput label="Label">
    PseudoInput
  </PseudoInput>
)
              `}),t.jsx(p,{description:"PseudoInput разных размеров. Компонент может быть отображен с увеличенным шрифтом: дефолтное значение - s (14px размер лейбла и 16px размер внутреннего текста) и большой - m (16px и 20px). Нужный параметр необходимо передать в проп size.",code:`import { PseudoInput } from '@nlmk/ds-2.0';

export default App = () => (
  <>
  <PseudoInput label="Label" size="m">
    PseudoInput
  </PseudoInput>
  <PseudoInput label="Label" size="s">
    PseudoInput
  </PseudoInput>
  </>
)
              `}),t.jsx(p,{description:`Различные состояния PseudoInput. В компонент можно передать проп labelColor со значениями: ${Object.values(x).join(" | ")} для отображения состояний компонента`,code:`import { PseudoInput } from '@nlmk/ds-2.0';

export default App = () => (
  <>
  <PseudoInput label="Label" labelColor="error">
    PseudoInput
  </PseudoInput>
  <PseudoInput label="Label" labelColor="warning">
    PseudoInput
  </PseudoInput>
  <PseudoInput label="Label" labelColor="success">
    PseudoInput
  </PseudoInput>
  </>
)
              `}),t.jsx(g,{argsTypes:h})]}),o==1&&t.jsx(f,{url:L}),o==2&&t.jsx(C,{componentName:n})]})};function a(o){return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"Components/PseudoInput/Info",component:I,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/Input-%CE%B2?node-id=207%3A40297&t=l4wSBLji2Mz59Nd6-0"},jest:["PseudoInput.test.tsx"]}}),`
`,t.jsx(d,{of:b}),`
`,t.jsx(c,{children:t.jsx(N,{})})]})}function it(o={}){const{wrapper:e}={...u(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(a,{...o})}):a()}export{it as default};
