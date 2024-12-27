import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as j}from"./index-CbmgEnq2.js";import{am as b,an as g,ao as D}from"./chunk-NUUEMKO5-CDWB5etm.js";import{ah as s,H as k}from"./index-C1Xf_hS0.js";import{DecoratorDefault as R}from"./Decorator.stories-B1hjNCvN.js";import{r as T}from"./index-Bnop-kX6.js";import{s as m,H as C,E as r}from"./Header-DqV-uP_8.js";import{P as N}from"./Properties-sRwb8j1i.js";import{T as w}from"./Tests-HOEF5-pB.js";/* empty css               */import"./generateUUID-1tgHdX0-.js";import"./index-eOH20s0c.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-CXG1awCY.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-qxD0tkeT.js";import"./index-Br4tp0-d.js";import"./32-Bf_1a6Rp.js";import{D as d,H as n,b as c,c as l,d as f,e as x,f as a,g as u,h as H,a as I}from"./text-DRF-t4SK.js";import{F as _}from"./FigmaEmbed-BfkjrBVl.js";import"./iframe-DZPRoslN.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-WTmmaHQ2.js";import"./index-B5g4YLzC.js";const p="Header",h="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=315-23434&t=HhCDuaOuzHu5rgyf-1",v=()=>{const[t,o]=T.useState(0),i=E=>t===E;return e.jsxs("div",{className:m.wrapper,children:[e.jsx(C,{title:p,description:"Header - это компонент, который отображает настраиваемый верхний колонтитул (шапку) веб-страницы или приложения.",isBeta:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${p}`,figmaLink:h}),e.jsx("div",{className:m.tabs,children:e.jsxs(s,{children:[e.jsx(s.Tab,{label:"Разработчику",active:i(0),onClick:()=>o(0)}),e.jsx(s.Tab,{label:"Дизайнеру",active:i(1),onClick:()=>o(1)}),e.jsx(s.Tab,{label:"Тестирование",active:i(2),onClick:()=>o(2)})]})}),t==0&&e.jsxs(e.Fragment,{children:[e.jsx(r,{height:180,description:d,code:`import { Header } from '@nlmk/ds-2.0';

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
          <Button style={{ marginRight: '25px' }} color="grey" variant="secondary" startIcon={<IconSettingsAltOutlined24 />}>
          Настройки
        </Button>
  </Header>
)
              `}),e.jsx(N,{argsTypes:I})]}),t==1&&e.jsx(_,{url:h}),t==2&&e.jsx(w,{componentName:p})]})};function A(t){return e.jsxs(e.Fragment,{children:[e.jsx(b,{title:"Components/Header/Info",component:k,parameters:{jest:["Header.test.tsx"]}}),`
`,e.jsx(g,{of:R}),`
`,e.jsx(D,{children:e.jsx(v,{})})]})}function xe(t={}){const{wrapper:o}={...j(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(A,{...t})}):A()}export{xe as default};