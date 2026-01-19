import{r as a,j as t,m as l,S as d,U as c}from"./iframe-BPtLBEuk.js";import{useMDXComponents as x}from"./index-DY5aY42c.js";import{P as I}from"./index-Dr7AntG3.js";import{DecoratorDefault as P}from"./Decorator.stories-Bt-6wqMy.js";import{s as n,H as b,E as p}from"./Header-lxb-Wymn.js";import{F as j}from"./FigmaEmbed-IQ2Nn4zn.js";import{P as f}from"./Properties-u6_xeg7P.js";import{T as g}from"./Tests-DUUoQDTR.js";/* empty css               */import{c as C}from"./colorsMapping-C6bFIk14.js";import{T as s}from"./index-CX87Y9E4.js";import{a as h}from"./argsTypes-CSAVBZS8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D-pLh_NR.js";import"./index-C9_7xPUt.js";import"./clsx-B-dksMZM.js";import"./index-DZQvJksB.js";import"./index-BUWLdeqz.js";import"./index-D9G_R1e4.js";import"./index-V5PZJFO3.js";import"./generateUUID-M57HTP56.js";import"./24-8ackLhic.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./sizesMapping-D8QavrGc.js";import"./index-yAFWEvQV.js";import"./index-C5OaxW6Y.js";import"./index-CANPVv15.js";import"./index-d_6bz31j.js";import"./index-CDRf2h9x.js";import"./32-DeoBrCvQ.js";import"./24-CrLAaNeG.js";import"./24-CpcywAhj.js";import"./24-Ch6Cnsji.js";import"./24-Q7FkUsyZ.js";import"./24-DOwtHgIx.js";import"./24-B4m_3SjA.js";import"./24-CV2ikCuL.js";import"./24-Ba8I7UHN.js";import"./24-BA0GVvoT.js";import"./16-CXoys7qm.js";import"./24-Cxxq2bXd.js";import"./16-DwnwCPW9.js";import"./16-BY-nZnBX.js";import"./16-DaMJtJxQ.js";const i="PseudoInput",T="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-321721",L=()=>{const[o,e]=a.useState(0),r=u=>o===u;return t.jsxs("div",{className:n.wrapper,children:[t.jsx(b,{title:i,description:"PseudoInput - элемент, который позволяет отображать информацию.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${i}`}),t.jsx("div",{className:n.tabs,children:t.jsxs(s,{children:[t.jsx(s.Tab,{label:"Разработчику",active:r(0),onClick:()=>e(0)}),t.jsx(s.Tab,{label:"Дизайнеру",active:r(1),onClick:()=>e(1)}),t.jsx(s.Tab,{label:"Тестирование",active:r(2),onClick:()=>e(2)})]})}),o==0&&t.jsxs(t.Fragment,{children:[t.jsx(p,{height:200,description:"PseudoInput по умолчанию. Компонент предназначен только для чтения пропсов и вывода их на экран",code:`import { PseudoInput } from '@nlmk/ds-2.0';

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
