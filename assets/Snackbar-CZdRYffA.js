import{j as r}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as u}from"./index-CpguRmgc.js";import{ag as A,ah as C,ai as g}from"./chunk-NUUEMKO5-BfWh-sLJ.js";import{a0 as s,M as m,N as h}from"./index-CZcUCixh.js";import{DecoratorDefault as N}from"./Decorator.stories-BP3ijO2B.js";import{r as O}from"./index-DQ2WTIsS.js";import{s as p,H as I,E as t}from"./Header-D2gbLVua.js";import{F as $}from"./FigmaEmbed-DjqPO1nf.js";import{P as v}from"./Properties-C9DnMm3G.js";import{T}from"./Tests-CzPE_ao-.js";/* empty css               */import"./generateUUID-DDiDEiZj.js";import"./index-BUicYAu_.js";import"./index-CSbymPMC.js";import"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import"./index-ehXB0alm.js";import"./index-BKAatnfy.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-CLzAcar6.js";import"./32-sVrGXRAZ.js";import{a as y}from"./argsTypes-D9MxFBpY.js";import"./iframe-BUM6csBU.js";import"../sb-preview/runtime.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-oHtgdQEu.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DsjOqT4x.js";import"./index-DrFu-skq.js";import"./client-Du4Z4Qeu.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-R5jBLDn_.js";import"./index-BKbm6zW0.js";const l="Snackbar по умолчанию",b="Snackbar с кнопкой закрыть",d="Snackbar с кнопкой действия",k="Варианты цвета Snackbar",S="Snackbar с иконкой",x="Snackbar с кастомной иконкой",c="Snackbar с разной прозрачностью",i="Snackbar",f="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=280-8187&t=EnvIMGos3m33avAX-1",M=()=>{const[o,a]=O.useState(0),e=n=>o===n;return r.jsxs("div",{className:p.wrapper,children:[r.jsx(I,{title:i,description:"Snackbar - это компонент, который предоставляет краткое уведомление или сообщение о событии.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${i}`,figmaLink:f}),r.jsx("div",{className:p.tabs,children:r.jsxs(s,{children:[r.jsx(s.Tab,{label:"Разработчику",active:e(0),onClick:()=>a(0)}),r.jsx(s.Tab,{label:"Дизайнеру",active:e(1),onClick:()=>a(1)}),r.jsx(s.Tab,{label:"Тестирование",active:e(2),onClick:()=>a(2)})]})}),o==0&&r.jsxs(r.Fragment,{children:[r.jsx(t,{description:l,height:150,code:`import { Snackbar } from '@nlmk/ds-2.0';

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
              `}),r.jsx(v,{argsTypes:y})]}),o==1&&r.jsx($,{url:f}),o==2&&r.jsx(T,{componentName:i})]})};function j(o){return r.jsxs(r.Fragment,{children:[r.jsx(A,{title:"Components/Snackbar/Info",component:h,parameters:{design:{type:"figma",url:"https://www.figma.com/file/rDvhcgytqOP1QYLDMtY2Qg/DS2.0-Snackbars?node-id=701%3A50677&mode=dev"},jest:["Snackbar.test.tsx"]}}),`
`,r.jsx(C,{of:N}),`
`,r.jsx(g,{children:r.jsx(M,{})})]})}function kr(o={}){const{wrapper:a}={...u(),...o.components};return a?r.jsx(a,{...o,children:r.jsx(j,{...o})}):j()}export{kr as default};
