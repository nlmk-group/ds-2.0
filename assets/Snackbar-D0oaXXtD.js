import{j as r}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as j}from"./index-CpguRmgc.js";import"./chunk-HLWAVYOI-BpCf8szX.js";import{ae as A,af as C,ag as g}from"./index-CY6AFN3F.js";import{Q as e,z as m,G as h}from"./index-De6xVjfl.js";import{DecoratorDefault as N}from"./Decorator.stories-BP3ijO2B.js";import{r as O}from"./index-DQ2WTIsS.js";import{s as p,H as y,E as t}from"./Header-LklIFrOQ.js";import{F as $}from"./FigmaEmbed-oiCkEjTf.js";import{P as M}from"./Properties-DzW4XCsL.js";import{T}from"./Tests-BNc6kC-d.js";/* empty css               */import"./generateUUID-i9L7EtYg.js";import"./index-bLIWCpda.js";import"./index-BgyuaCKK.js";import"./index-B8KuQLf-.js";import"./index-B_c816qF.js";import"./index-DJXOh8UI.js";import"./index-DB41iIPt.js";import"./index-wNTT8eSr.js";import"./index-S3KjbRnp.js";import"./index-CpIRsoAz.js";import"./32-C4VDZHit.js";import{a as v}from"./argsTypes-g-K3qhky.js";import"./iframe-DmgkbAwY.js";import"../sb-preview/runtime.js";import"./client-ClDtLkqA.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DZkQtLdq.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BgRDMNuH.js";import"./index-0sbKER3h.js";const l="Snackbar по умолчанию",b="Snackbar с кнопкой закрыть",d="Snackbar с кнопкой действия",S="Варианты цвета Snackbar",k="Snackbar с иконкой",f="Snackbar с кастомной иконкой",c="Snackbar с разной прозрачностью",s="Snackbar",x="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A29074&mode=design&t=awyt3Fzj1XS6th7v-1",I=()=>{const[o,a]=O.useState(0),i=n=>o===n;return r.jsxs("div",{className:p.wrapper,children:[r.jsx(y,{title:s,description:"Snackbar - это компонент, который предоставляет краткое уведомление или сообщение о событии.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${s}`,figmaLink:x}),r.jsx("div",{className:p.tabs,children:r.jsxs(e,{children:[r.jsx(e.Tab,{label:"Разработчику",active:i(0),onClick:()=>a(0)}),r.jsx(e.Tab,{label:"Тестирование",active:i(2),onClick:()=>a(2)})]})}),o==0&&r.jsxs(r.Fragment,{children:[r.jsx(t,{description:l,height:150,code:`import { Snackbar } from '@nlmk/ds-2.0';

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
              `}),r.jsx(t,{description:S,code:`import { Snackbar } from '@nlmk/ds-2.0';

const colors = [${Object.values(m).map(n=>`"${n}"`).join(", ")}]
export default App = () => (
  <>
    {colors.map(color => {
      return <Snackbar key={color} color={color}> ${S} </Snackbar>
    })}
  </>
)
              `}),r.jsx(t,{description:k,code:`import { Snackbar } from '@nlmk/ds-2.0';

const colors = [${Object.values(m).map(n=>`"${n}"`).join(", ")}];

export default App = () => (
  <>
    {colors.map(color => {
      return <Snackbar key={color} color={color} withIcon> ${k} </Snackbar>
    })}
  </>
)
              `}),r.jsx(t,{description:f,code:`import { Snackbar, Icon } from '@nlmk/ds-2.0';

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
  > ${f} </Snackbar>
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
              `}),r.jsx(M,{argsTypes:v})]}),o==1&&r.jsx($,{url:x}),o==2&&r.jsx(T,{componentName:s})]})};function u(o){return r.jsxs(r.Fragment,{children:[r.jsx(A,{title:"Components/Snackbar/Info",component:h,parameters:{design:{type:"figma",url:"https://www.figma.com/file/rDvhcgytqOP1QYLDMtY2Qg/DS2.0-Snackbars?node-id=701%3A50677&mode=dev"},jest:["Snackbar.test.tsx"]}}),`
`,r.jsx(C,{of:N}),`
`,r.jsx(g,{children:r.jsx(I,{})})]})}function fr(o={}){const{wrapper:a}={...j(),...o.components};return a?r.jsx(a,{...o,children:r.jsx(u,{...o})}):u()}export{fr as default};
