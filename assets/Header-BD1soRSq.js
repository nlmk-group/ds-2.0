import{j as e}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as j}from"./index-CpguRmgc.js";import{ag as b,ah as g,ai as D}from"./chunk-NUUEMKO5-BfWh-sLJ.js";import{a0 as s,H as k}from"./index-CZcUCixh.js";import{DecoratorDefault as R}from"./Decorator.stories-BP3ijO2B.js";import{r as T}from"./index-DQ2WTIsS.js";import{s as m,H as C,E as r}from"./Header-D2gbLVua.js";import{P as N}from"./Properties-C9DnMm3G.js";import{T as w}from"./Tests-CzPE_ao-.js";/* empty css               */import"./generateUUID-DDiDEiZj.js";import"./index-BUicYAu_.js";import"./index-CSbymPMC.js";import"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import"./index-ehXB0alm.js";import"./index-BKAatnfy.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-CLzAcar6.js";import"./32-sVrGXRAZ.js";import{D as d,H as n,b as c,c as l,d as f,e as x,f as a,g as u,h as H,a as I}from"./text-VuKG0S-9.js";import{F as _}from"./FigmaEmbed-DjqPO1nf.js";import"./iframe-BUM6csBU.js";import"../sb-preview/runtime.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-oHtgdQEu.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DsjOqT4x.js";import"./index-DrFu-skq.js";import"./client-Du4Z4Qeu.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-R5jBLDn_.js";import"./index-BKbm6zW0.js";const p="Header",h="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=315-23434&t=HhCDuaOuzHu5rgyf-1",v=()=>{const[t,o]=T.useState(0),i=E=>t===E;return e.jsxs("div",{className:m.wrapper,children:[e.jsx(C,{title:p,description:"Header - это компонент, который отображает настраиваемый верхний колонтитул (шапку) веб-страницы или приложения.",isBeta:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${p}`,figmaLink:h}),e.jsx("div",{className:m.tabs,children:e.jsxs(s,{children:[e.jsx(s.Tab,{label:"Разработчику",active:i(0),onClick:()=>o(0)}),e.jsx(s.Tab,{label:"Дизайнеру",active:i(1),onClick:()=>o(1)}),e.jsx(s.Tab,{label:"Тестирование",active:i(2),onClick:()=>o(2)})]})}),t==0&&e.jsxs(e.Fragment,{children:[e.jsx(r,{height:180,description:d,code:`import { Header } from '@nlmk/ds-2.0';

export default  App = () => (
  <Header title="${d}" />
)
              `}),e.jsx(r,{height:200,description:n,code:`import { Header } from '@nlmk/ds-2.0';

export default  App = () => (
  <Header title="${n}" back={() => {}} />
)
              `}),e.jsx(r,{height:180,description:c,code:`import { Header } from '@nlmk/ds-2.0';

export default  App = () => (
  <Header title="${c}" date />
)
              `}),e.jsx(r,{height:180,description:l,code:`import { Header } from '@nlmk/ds-2.0';

export default  App = () => (
  <Header title="${l}" favorite={() => {}}/>
)
              `}),e.jsx(r,{height:180,description:f,code:`import { Header } from '@nlmk/ds-2.0';

export default  App = () => (
  <Header title="${f}" notification={() => {}} notificationAmount={9} />
)
              `}),e.jsx(r,{height:180,description:x,code:`import { Header } from '@nlmk/ds-2.0';

export default  App = () => (
  <Header title="${x}" bg />
)
              `}),e.jsx(r,{description:a,code:`import { Header } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Header title="${a}" type="default" />
    <Header title="${a}" type="compact" />
  </>
)
              `}),e.jsx(r,{description:u,code:`import { Header, Breadcrumbs } from '@nlmk/ds-2.0';

export default  App = () => (
  <Header title="${u}" breadcrumbs={(<Breadcrumbs crumbs={[
      {
        href: 'https://developer.mozilla.org/en-US/',
        label: 'MDN'
      },
      {
        href: 'https://www.lipsum.com/',
        label: 'Lorem Ipsum'
      },
      {
        href: 'https://www.w3schools.com/',
        label: 'W3 Schools'
      },
      {
        href: 'https://css-tricks.com/',
        label: 'CSS Tricks'
      },
      {
        href: 'https://www.geeksforgeeks.org/',
        label: 'Geeks For Geeks',
        active: true
      }
    ]} />)} />
)
              `}),e.jsx(r,{description:H,code:`import { Header, Breadcrumbs } from '@nlmk/ds-2.0';

export default  App = () => (
  <Header title="${H}"} >
          <Button style={{ marginRight: '25px' }} variant="grey" fill="outline" startIcon={<IconSettingsAltOutlined24 />}>
          Настройки
        </Button>
  </Header>
)
              `}),e.jsx(N,{argsTypes:I})]}),t==1&&e.jsx(_,{url:h}),t==2&&e.jsx(w,{componentName:p})]})};function A(t){return e.jsxs(e.Fragment,{children:[e.jsx(b,{title:"Components/Header/Info",component:k,parameters:{jest:["Header.test.tsx"]}}),`
`,e.jsx(g,{of:R}),`
`,e.jsx(D,{children:e.jsx(v,{})})]})}function ue(t={}){const{wrapper:o}={...j(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(A,{...t})}):A()}export{ue as default};
