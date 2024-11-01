import{j as r}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as u}from"./index-DtGqrCZN.js";import{ag as A,ah as C,ai as g}from"./chunk-NUUEMKO5-Ctn7VFPu.js";import{$ as s,L as m,M as h}from"./index-ZojCmbpv.js";import{DecoratorDefault as N}from"./Decorator.stories-CffsLfgf.js";import{r as O}from"./index-Cu9bd8lq.js";import{s as p,H as $,E as t}from"./Header-CN10_-75.js";import{F as I}from"./FigmaEmbed-2TZ9ZXkF.js";import{P as v}from"./Properties-Btz1YxCe.js";import{T}from"./Tests-CWaY5hDn.js";/* empty css               */import"./generateUUID-CG7VmJJw.js";import"./index-XsxLq1mj.js";import"./index-AXtJih2E.js";import"./index-ED8ccfsJ.js";import"./index-CWQ0GGcJ.js";import"./index-BHxe-dnq.js";import"./index-iWHyAWYR.js";import"./index-BztLnIMF.js";import"./index-Udc0C2Qz.js";import"./index-CPdpS9Jm.js";import"./32-Bjhqu_Pf.js";import{a as y}from"./argsTypes-DgqlcFs9.js";import"./iframe-DB6xw0G7.js";import"../sb-preview/runtime.js";import"./index-Ckls47V4.js";import"./index-D-8MO0q_.js";import"./get-CeVb1zXw.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-ebfOklXd.js";import"./index-DrFu-skq.js";import"./client-C_RBoFGa.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-mZjneSg7.js";import"./index-7KVZVlDS.js";const l="Snackbar по умолчанию",b="Snackbar с кнопкой закрыть",d="Snackbar с кнопкой действия",k="Варианты цвета Snackbar",S="Snackbar с иконкой",x="Snackbar с кастомной иконкой",c="Snackbar с разной прозрачностью",i="Snackbar",f="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=280-8187&t=EnvIMGos3m33avAX-1",M=()=>{const[o,a]=O.useState(0),e=n=>o===n;return r.jsxs("div",{className:p.wrapper,children:[r.jsx($,{title:i,description:"Snackbar - это компонент, который предоставляет краткое уведомление или сообщение о событии.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${i}`,figmaLink:f}),r.jsx("div",{className:p.tabs,children:r.jsxs(s,{children:[r.jsx(s.Tab,{label:"Разработчику",active:e(0),onClick:()=>a(0)}),r.jsx(s.Tab,{label:"Дизайнеру",active:e(1),onClick:()=>a(1)}),r.jsx(s.Tab,{label:"Тестирование",active:e(2),onClick:()=>a(2)})]})}),o==0&&r.jsxs(r.Fragment,{children:[r.jsx(t,{description:l,height:150,code:`import { Snackbar } from '@nlmk/ds-2.0';

export default App = () => (
  <Snackbar> ${l} </Snackbar>
)
              `}),r.jsx(t,{height:150,description:b,code:`import { Snackbar } from '@nlmk/ds-2.0';

export default App = () => (
  <Snackbar close={() => {}}> ${b} </Snackbar>
)
              `}),r.jsx(t,{height:200,description:d,code:`import { Snackbar } from '@nlmk/ds-2.0';

export default App = () => (
  <Snackbar actionButton={() => {}}> ${d} </Snackbar>
)
              `}),r.jsx(t,{description:k,code:`import { Snackbar } from '@nlmk/ds-2.0';

const colors = [${Object.values(m).map(n=>`"${n}"`).join(", ")}]
export default App = () => (
  <>
    {colors.map(color => {
      return <Snackbar key={color} color={color}> ${k} </Snackbar>
    })}
  </>
)
              `}),r.jsx(t,{description:S,code:`import { Snackbar } from '@nlmk/ds-2.0';

const colors = [${Object.values(m).map(n=>`"${n}"`).join(", ")}];

export default App = () => (
  <>
    {colors.map(color => {
      return <Snackbar key={color} color={color} withIcon> ${S} </Snackbar>
    })}
  </>
)
              `}),r.jsx(t,{description:x,code:`import { Snackbar, Icon } from '@nlmk/ds-2.0';

export default App = () => (
  <Snackbar
    withIcon
    color="dark"
    customIcon={(
      <Icon
        name='IconEducationOutlined24'
        containerSize={24}
        htmlColor="red"
      />
    )}
  > ${x} </Snackbar>
)
              `}),r.jsx(t,{description:c,code:`import { Snackbar } from '@nlmk/ds-2.0';

export default App = () => (
  <>
  <Snackbar
    bgOpacity={100}
  >
    ${c}
  </Snackbar>
  <Snackbar
    bgOpacity={70}
    >
    ${c}
  </Snackbar>
  <Snackbar
    bgOpacity={50}
  >
    ${c}
  </Snackbar>
  <Snackbar
    bgOpacity={20}
  >
    ${c}
  </Snackbar>
</>
)
              `}),r.jsx(v,{argsTypes:y})]}),o==1&&r.jsx(I,{url:f}),o==2&&r.jsx(T,{componentName:i})]})};function j(o){return r.jsxs(r.Fragment,{children:[r.jsx(A,{title:"Components/Snackbar/Info",component:h,parameters:{design:{type:"figma",url:"https://www.figma.com/file/rDvhcgytqOP1QYLDMtY2Qg/DS2.0-Snackbars?node-id=701%3A50677&mode=dev"},jest:["Snackbar.test.tsx"]}}),`
`,r.jsx(C,{of:N}),`
`,r.jsx(g,{children:r.jsx(M,{})})]})}function kr(o={}){const{wrapper:a}={...u(),...o.components};return a?r.jsx(a,{...o,children:r.jsx(j,{...o})}):j()}export{kr as default};
