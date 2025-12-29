import{r as a,j as t,f as l,S as d,U as c}from"./iframe-zk5xXBtA.js";import{useMDXComponents as x}from"./index-CSMoqiIu.js";import{P as I}from"./index-DlGInOJ7.js";import{DecoratorDefault as P}from"./Decorator.stories-XjMTlGWF.js";import{s as n,H as b,E as p}from"./Header-BMqOixcD.js";import{F as j}from"./FigmaEmbed-Bh-YhisY.js";import{P as f}from"./Properties-BH32KsQA.js";import{T as g}from"./Tests-BiRJAIxZ.js";/* empty css               */import{c as C}from"./colorsMapping-C6bFIk14.js";import{T as s}from"./index-CGZqhooT.js";import{a as h}from"./argsTypes-sPID3ad7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B9FTsAqd.js";import"./index-9BCGLlQQ.js";import"./clsx-B-dksMZM.js";import"./index-D9zx9C-F.js";import"./index-6T6AONQH.js";import"./index-DjSUGs5w.js";import"./index-CBNcLMKv.js";import"./generateUUID-M57HTP56.js";import"./24-BkbQ4VQu.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./sizesMapping-D8QavrGc.js";import"./index-Is2qauMo.js";import"./index-CTfBpVCI.js";import"./index-DirQniBD.js";import"./index-cDYWclvM.js";import"./index-1zUxKm4P.js";import"./32-D1ipBNS6.js";import"./24-BU8fW5nS.js";import"./24-CsxFkFpg.js";import"./24-Cg1MPBHI.js";import"./24-BGS-MQmY.js";import"./24-2PvTlRtj.js";import"./24-DyWGmQTd.js";import"./24-DrF3F4Gh.js";import"./24-DXO8B9MT.js";import"./24-CHUQ235a.js";import"./16-D0071456.js";import"./24-CzaQJmC-.js";import"./16-D1MigzhA.js";import"./16-J9oiRdzb.js";import"./16-qJIrzOil.js";const i="PseudoInput",T="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-321721",L=()=>{const[o,e]=a.useState(0),r=u=>o===u;return t.jsxs("div",{className:n.wrapper,children:[t.jsx(b,{title:i,description:"PseudoInput - элемент, который позволяет отображать информацию.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${i}`}),t.jsx("div",{className:n.tabs,children:t.jsxs(s,{children:[t.jsx(s.Tab,{label:"Разработчику",active:r(0),onClick:()=>e(0)}),t.jsx(s.Tab,{label:"Дизайнеру",active:r(1),onClick:()=>e(1)}),t.jsx(s.Tab,{label:"Тестирование",active:r(2),onClick:()=>e(2)})]})}),o==0&&t.jsxs(t.Fragment,{children:[t.jsx(p,{height:200,description:"PseudoInput по умолчанию. Компонент предназначен только для чтения пропсов и вывода их на экран",code:`import { PseudoInput } from '@nlmk/ds-2.0';

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
              `}),t.jsx(p,{description:`Различные состояния PseudoInput. В компонент можно передать проп labelColor со значениями: ${Object.values(C).join(" | ")} для отображения состояний компонента`,code:`import { PseudoInput } from '@nlmk/ds-2.0';

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
              `}),t.jsx(f,{argsTypes:h})]}),o==1&&t.jsx(j,{url:T}),o==2&&t.jsx(g,{componentName:i})]})};function m(o){return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"Components/PseudoInput/Info",component:I,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/Input-%CE%B2?node-id=207%3A40297&t=l4wSBLji2Mz59Nd6-0"},jest:["PseudoInput.test.tsx"]}}),`
`,t.jsx(d,{of:P}),`
`,t.jsx(c,{children:t.jsx(L,{})})]})}function It(o={}){const{wrapper:e}={...x(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(m,{...o})}):m()}export{It as default};
