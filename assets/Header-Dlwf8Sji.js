import{j as e}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as E}from"./index-CpguRmgc.js";import{ag as j,ah as b,ai as g}from"./chunk-HLWAVYOI-CH-g9ouN.js";import{a0 as s,H as D}from"./index-BNUKZqmp.js";import{DecoratorDefault as k}from"./Decorator.stories-BP3ijO2B.js";import{r as R}from"./index-DQ2WTIsS.js";import{s as m,H as T,E as t}from"./Header-BpVZjetj.js";import{P as C}from"./Properties-BJqT0Khr.js";import{T as N}from"./Tests-BYAJuazn.js";/* empty css               */import"./generateUUID-vFnGh3I6.js";import"./index-CNoQ_QnE.js";import"./index-CSbymPMC.js";import"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import"./index-ehXB0alm.js";import"./index-Cw4KJrZO.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-BvIp-sDO.js";import"./32-MLA202Yz.js";import{D as d,H as n,b as c,c as l,d as f,e as x,f as i,g as H,h as u,a as w}from"./text-D7_-rMff.js";import"./iframe-xwZIZJ7t.js";import"../sb-preview/runtime.js";import"./client-ClDtLkqA.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DZkQtLdq.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-DGK3Cuyg.js";import"./index-BKbm6zW0.js";const a="Header",_=()=>{const[r,o]=R.useState(0),p=A=>r===A;return e.jsxs("div",{className:m.wrapper,children:[e.jsx(T,{title:a,description:"Header - это компонент, который отображает настраиваемый верхний колонтитул (шапку) веб-страницы или приложения.",isBeta:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${a}`}),e.jsx("div",{className:m.tabs,children:e.jsxs(s,{children:[e.jsx(s.Tab,{label:"Разработчику",active:p(0),onClick:()=>o(0)}),e.jsx(s.Tab,{label:"Тестирование",active:p(2),onClick:()=>o(2)})]})}),r==0&&e.jsxs(e.Fragment,{children:[e.jsx(t,{height:180,description:d,code:`import { Header } from '@nlmk/ds-2.0';

export default  App = () => (
  <Header title="${d}" />
)
              `}),e.jsx(t,{height:200,description:n,code:`import { Header } from '@nlmk/ds-2.0';

export default  App = () => (
  <Header title="${n}" back={() => {}} />
)
              `}),e.jsx(t,{height:180,description:c,code:`import { Header } from '@nlmk/ds-2.0';

export default  App = () => (
  <Header title="${c}" date />
)
              `}),e.jsx(t,{height:180,description:l,code:`import { Header } from '@nlmk/ds-2.0';

export default  App = () => (
  <Header title="${l}" favorite={() => {}}/>
)
              `}),e.jsx(t,{height:180,description:f,code:`import { Header } from '@nlmk/ds-2.0';

export default  App = () => (
  <Header title="${f}" notification={() => {}} notificationAmount={9} />
)
              `}),e.jsx(t,{height:180,description:x,code:`import { Header } from '@nlmk/ds-2.0';

export default  App = () => (
  <Header title="${x}" bg />
)
              `}),e.jsx(t,{description:i,code:`import { Header } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Header title="${i}" type="default" />
    <Header title="${i}" type="compact" />
  </>
)
              `}),e.jsx(t,{description:H,code:`import { Header, Breadcrumbs } from '@nlmk/ds-2.0';

export default  App = () => (
  <Header title="${H}" breadcrumbs={(<Breadcrumbs crumbs={[
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
              `}),e.jsx(t,{description:u,code:`import { Header, Breadcrumbs } from '@nlmk/ds-2.0';

export default  App = () => (
  <Header title="${u}"} >
          <Button style={{ marginRight: '25px' }} variant="grey" fill="outline" startIcon={<IconSettingsAltOutlined24 />}>
          Настройки
        </Button>
  </Header>
)
              `}),e.jsx(C,{argsTypes:w})]}),r==2&&e.jsx(N,{componentName:a})]})};function h(r){return e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"Components/Header/Info",component:D,parameters:{jest:["Header.test.tsx"]}}),`
`,e.jsx(b,{of:k}),`
`,e.jsx(g,{children:e.jsx(_,{})})]})}function fe(r={}){const{wrapper:o}={...E(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(h,{...r})}):h()}export{fe as default};
