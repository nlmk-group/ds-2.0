import{j as r}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as u}from"./index-CbmgEnq2.js";import{am as A,an as C,ao as g}from"./chunk-NUUEMKO5-DScqtTyc.js";import{$ as s,L as m,M as h}from"./index-kyLNX40n.js";import{DecoratorDefault as N}from"./Decorator.stories-B1hjNCvN.js";import{r as O}from"./index-Bnop-kX6.js";import{s as p,H as $,E as t}from"./Header-u4eXeAAq.js";import{F as I}from"./FigmaEmbed-DNXKwLJv.js";import{P as v}from"./Properties-Bp57JxMx.js";import{T}from"./Tests-Ddal_X-C.js";/* empty css               */import"./generateUUID-DAuIdu-p.js";import"./index-B0lWqv5F.js";import"./index-DPg--y1u.js";import"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import"./index-qC5wYQgy.js";import"./index-BVI3RfDi.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-BXzk8UvY.js";import"./32-CMOOVZNy.js";import{a as y}from"./argsTypes-BVgmmfF_.js";import"./iframe-Cum5dwoy.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-Ch8OGaVn.js";import"./index-CT8gBKwQ.js";const l="Snackbar по умолчанию",b="Snackbar с кнопкой закрыть",d="Snackbar с кнопкой действия",k="Варианты цвета Snackbar",S="Snackbar с иконкой",x="Snackbar с кастомной иконкой",c="Snackbar с разной прозрачностью",i="Snackbar",f="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=280-8187&t=EnvIMGos3m33avAX-1",M=()=>{const[o,a]=O.useState(0),e=n=>o===n;return r.jsxs("div",{className:p.wrapper,children:[r.jsx($,{title:i,description:"Snackbar - это компонент, который предоставляет краткое уведомление или сообщение о событии.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${i}`,figmaLink:f}),r.jsx("div",{className:p.tabs,children:r.jsxs(s,{children:[r.jsx(s.Tab,{label:"Разработчику",active:e(0),onClick:()=>a(0)}),r.jsx(s.Tab,{label:"Дизайнеру",active:e(1),onClick:()=>a(1)}),r.jsx(s.Tab,{label:"Тестирование",active:e(2),onClick:()=>a(2)})]})}),o==0&&r.jsxs(r.Fragment,{children:[r.jsx(t,{description:l,height:150,code:`import { Snackbar } from '@nlmk/ds-2.0';

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
`,r.jsx(g,{children:r.jsx(M,{})})]})}function br(o={}){const{wrapper:a}={...u(),...o.components};return a?r.jsx(a,{...o,children:r.jsx(j,{...o})}):j()}export{br as default};
