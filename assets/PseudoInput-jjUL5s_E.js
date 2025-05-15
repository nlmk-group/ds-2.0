import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as a}from"./index-CbmgEnq2.js";import"./index-CDNBfPUD.js";import{ag as s,H as l,aI as d}from"./TreeList-KafSWxD5.js";import{DecoratorDefault as c}from"./Decorator.stories-B1hjNCvN.js";import{r as I}from"./index-Bnop-kX6.js";import{s as i,H as x,E as p}from"./Header-C1-O-XnO.js";import{F as b}from"./FigmaEmbed-BdmsVGpE.js";import{P}from"./Properties-C1uV5wRN.js";import{T as j}from"./Tests-DV49_lgf.js";/* empty css               */import"./generateUUID-X09o9Pdp.js";import"./index-qbkiYuzD.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DovCGOp-.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-n_FSf3Cv.js";import"./index-DokmLR-l.js";import"./32-BTlKmMLd.js";import{a as f}from"./argsTypes-DikFQwD2.js";import{c as g,e as C,U as h}from"./DocsRenderer-CFRXHY34-D9cGPbCT.js";import"./preview-B_gHuUAG.js";import"./iframe-Bi6NeCl1.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-AvLRxKSw.js";import"./index-B5g4YLzC.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";const n="PseudoInput",L="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-321721",N=()=>{const[o,e]=I.useState(0),r=m=>o===m;return t.jsxs("div",{className:i.wrapper,children:[t.jsx(x,{title:n,description:"PseudoInput - элемент, который позволяет отображать информацию.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${n}`}),t.jsx("div",{className:i.tabs,children:t.jsxs(s,{children:[t.jsx(s.Tab,{label:"Разработчику",active:r(0),onClick:()=>e(0)}),t.jsx(s.Tab,{label:"Дизайнеру",active:r(1),onClick:()=>e(1)}),t.jsx(s.Tab,{label:"Тестирование",active:r(2),onClick:()=>e(2)})]})}),o==0&&t.jsxs(t.Fragment,{children:[t.jsx(p,{height:200,description:"PseudoInput по умолчанию. Компонент предназначен только для чтения пропсов и вывода их на экран",code:`import { PseudoInput } from '@nlmk/ds-2.0';

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
              `}),t.jsx(p,{description:`Различные состояния PseudoInput. В компонент можно передать проп labelColor со значениями: ${Object.values(l).join(" | ")} для отображения состояний компонента`,code:`import { PseudoInput } from '@nlmk/ds-2.0';

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
              `}),t.jsx(P,{argsTypes:f})]}),o==1&&t.jsx(b,{url:L}),o==2&&t.jsx(j,{componentName:n})]})};function u(o){return t.jsxs(t.Fragment,{children:[t.jsx(g,{title:"Components/PseudoInput/Info",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/Input-%CE%B2?node-id=207%3A40297&t=l4wSBLji2Mz59Nd6-0"},jest:["PseudoInput.test.tsx"]}}),`
`,t.jsx(C,{of:c}),`
`,t.jsx(h,{children:t.jsx(N,{})})]})}function it(o={}){const{wrapper:e}={...a(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(u,{...o})}):u()}export{it as default};
