import{j as t}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as d}from"./index-CpguRmgc.js";import{ag as l,ah as c,ai as I}from"./chunk-HLWAVYOI-CH-g9ouN.js";import{a0 as s,r as x,P}from"./index-BNUKZqmp.js";import{DecoratorDefault as j}from"./Decorator.stories-BP3ijO2B.js";import{r as f}from"./index-DQ2WTIsS.js";import{s as n,H as b,E as r}from"./Header-BpVZjetj.js";import{F as g}from"./FigmaEmbed-CosuUJ5A.js";import{P as h}from"./Properties-BJqT0Khr.js";import{T as C}from"./Tests-BYAJuazn.js";/* empty css               */import"./generateUUID-vFnGh3I6.js";import"./index-CNoQ_QnE.js";import"./index-CSbymPMC.js";import"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import"./index-ehXB0alm.js";import"./index-Cw4KJrZO.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-BvIp-sDO.js";import"./32-MLA202Yz.js";import{a as L}from"./argsTypes-BVAElntD.js";import"./iframe-xwZIZJ7t.js";import"../sb-preview/runtime.js";import"./client-ClDtLkqA.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DZkQtLdq.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-DGK3Cuyg.js";import"./index-BKbm6zW0.js";const p="PseudoInput",m="https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/Input-%CE%B2?node-id=207%3A40297&t=l4wSBLji2Mz59Nd6-0",w=()=>{const[o,e]=f.useState(0),i=a=>o===a;return t.jsxs("div",{className:n.wrapper,children:[t.jsx(b,{title:p,description:"PseudoInput - элемент, который позволяет отображать информацию.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${p}`,figmaLink:m}),t.jsx("div",{className:n.tabs,children:t.jsxs(s,{children:[t.jsx(s.Tab,{label:"Разработчику",active:i(0),onClick:()=>e(0)}),t.jsx(s.Tab,{label:"Тестирование",active:i(2),onClick:()=>e(2)})]})}),o==0&&t.jsxs(t.Fragment,{children:[t.jsx(r,{height:200,description:"PseudoInput по умолчанию. Компонент предназначен только для чтения пропсов и вывода их на экран",code:`import { PseudoInput } from '@nlmk/ds-2.0';

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
              `}),t.jsx(h,{argsTypes:L})]}),o==1&&t.jsx(g,{url:m}),o==2&&t.jsx(C,{componentName:p})]})};function u(o){return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"Components/PseudoInput/Info",component:P,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/Input-%CE%B2?node-id=207%3A40297&t=l4wSBLji2Mz59Nd6-0"},jest:["PseudoInput.test.tsx"]}}),`
`,t.jsx(c,{of:j}),`
`,t.jsx(I,{children:t.jsx(w,{})})]})}function mt(o={}){const{wrapper:e}={...d(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(u,{...o})}):u()}export{mt as default};
