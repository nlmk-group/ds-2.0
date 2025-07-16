import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as a}from"./index-D2yTtfOz.js";import"./index-BoJ3VS2T.js";import{af as s,l,aH as d}from"./TreeList-BgNZ17Gs.js";import{DecoratorDefault as c}from"./Decorator.stories-D7iJJ_iz.js";import{r as x}from"./index-BcJSXhQi.js";import{s as n,H as I,E as p}from"./Header-B13J54Ql.js";import{F as b}from"./FigmaEmbed-XMv6-p-m.js";import{P}from"./Properties-BjQNGjzc.js";import{T as j}from"./Tests-CFiWu12S.js";/* empty css               */import"./generateUUID-CJxgi7Ha.js";import"./index-BG4omi31.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-DcXliXrs.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-t2lirjGB.js";import"./index-C5rKoyII.js";import"./32-BpMTv1cT.js";import{a as f}from"./argsTypes-DLqARwiw.js";import{c as g,S as C,U as h}from"./DocsRenderer-CFRXHY34-BwxJCIPq.js";import"./index-ChsGqxH_.js";import"./preview-BMh0uLOu.js";import"./iframe-CDXuiHNu.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-CN3TbABt.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const i="PseudoInput",L="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-321721",N=()=>{const[o,e]=x.useState(0),r=u=>o===u;return t.jsxs("div",{className:n.wrapper,children:[t.jsx(I,{title:i,description:"PseudoInput - элемент, который позволяет отображать информацию.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${i}`}),t.jsx("div",{className:n.tabs,children:t.jsxs(s,{children:[t.jsx(s.Tab,{label:"Разработчику",active:r(0),onClick:()=>e(0)}),t.jsx(s.Tab,{label:"Дизайнеру",active:r(1),onClick:()=>e(1)}),t.jsx(s.Tab,{label:"Тестирование",active:r(2),onClick:()=>e(2)})]})}),o==0&&t.jsxs(t.Fragment,{children:[t.jsx(p,{height:200,description:"PseudoInput по умолчанию. Компонент предназначен только для чтения пропсов и вывода их на экран",code:`import { PseudoInput } from '@nlmk/ds-2.0';

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
              `}),t.jsx(P,{argsTypes:f})]}),o==1&&t.jsx(b,{url:L}),o==2&&t.jsx(j,{componentName:i})]})};function m(o){return t.jsxs(t.Fragment,{children:[t.jsx(g,{title:"Components/PseudoInput/Info",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/Input-%CE%B2?node-id=207%3A40297&t=l4wSBLji2Mz59Nd6-0"},jest:["PseudoInput.test.tsx"]}}),`
`,t.jsx(C,{of:c}),`
`,t.jsx(h,{children:t.jsx(N,{})})]})}function ut(o={}){const{wrapper:e}={...a(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(m,{...o})}):m()}export{ut as default};
