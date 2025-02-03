import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as m}from"./index-CbmgEnq2.js";import{am as l,an as d,ao as c}from"./chunk-NUUEMKO5-Cd7bABYI.js";import{ah as s,K as x,S as I}from"./index-C4t5CiEI.js";import{DecoratorDefault as P}from"./Decorator.stories-B1hjNCvN.js";import{r as b}from"./index-Bnop-kX6.js";import{s as i,H as j,E as r}from"./Header-qpworjwL.js";import{P as f}from"./Properties-CeG-woxn.js";import{T as h}from"./Tests-Byh4FwCQ.js";/* empty css               */import"./generateUUID-CwQfW92c.js";import"./index-D73feNss.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-NOJR75CD.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-bks6ELD5.js";import"./index-DokmLR-l.js";import"./32-DRujtrbd.js";import{a as C}from"./argsTypes-CEM1vujE.js";import"./iframe-73SD5tIC.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-Dj_CiLiI.js";import"./index-B5g4YLzC.js";const p="PseudoInput",g=()=>{const[o,e]=b.useState(0),n=a=>o===a;return t.jsxs("div",{className:i.wrapper,children:[t.jsx(j,{title:p,description:"PseudoInput - элемент, который позволяет отображать информацию.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${p}`}),t.jsx("div",{className:i.tabs,children:t.jsxs(s,{children:[t.jsx(s.Tab,{label:"Разработчику",active:n(0),onClick:()=>e(0)}),t.jsx(s.Tab,{label:"Тестирование",active:n(2),onClick:()=>e(2)})]})}),o==0&&t.jsxs(t.Fragment,{children:[t.jsx(r,{height:200,description:"PseudoInput по умолчанию. Компонент предназначен только для чтения пропсов и вывода их на экран",code:`import { PseudoInput } from '@nlmk/ds-2.0';

export default App = () => (
  <PseudoInput label="Label">
    PseudoInput
  </PseudoInput>
)
              `}),t.jsx(r,{description:"PseudoInput разных размеров. Компонент может быть отображен с увеличенным шрифтом: дефолтное значение - s (14px размер лейбла и 16px размер внутреннего текста) и большой - m (16px и 20px). Нужный параметр необходимо передать в проп size.",code:`import { PseudoInput } from '@nlmk/ds-2.0';

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
              `}),t.jsx(r,{description:`Различные состояния PseudoInput. В компонент можно передать проп labelColor со значениями: ${Object.values(x).join(" | ")} для отображения состояний компонента`,code:`import { PseudoInput } from '@nlmk/ds-2.0';

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
              `}),t.jsx(f,{argsTypes:C})]}),o==2&&t.jsx(h,{componentName:p})]})};function u(o){return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"Components/PseudoInput/Info",component:I,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/Input-%CE%B2?node-id=207%3A40297&t=l4wSBLji2Mz59Nd6-0"},jest:["PseudoInput.test.tsx"]}}),`
`,t.jsx(d,{of:P}),`
`,t.jsx(c,{children:t.jsx(g,{})})]})}function st(o={}){const{wrapper:e}={...m(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(u,{...o})}):u()}export{st as default};
