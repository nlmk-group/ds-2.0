import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as j}from"./index-DtGqrCZN.js";import{ag as b,ah as g,ai as D}from"./chunk-NUUEMKO5-Ctn7VFPu.js";import{$ as s,H as k}from"./index-ZojCmbpv.js";import{DecoratorDefault as R}from"./Decorator.stories-CffsLfgf.js";import{r as T}from"./index-Cu9bd8lq.js";import{s as m,H as C,E as r}from"./Header-CN10_-75.js";import{P as N}from"./Properties-Btz1YxCe.js";import{T as w}from"./Tests-CWaY5hDn.js";/* empty css               */import"./generateUUID-CG7VmJJw.js";import"./index-XsxLq1mj.js";import"./index-AXtJih2E.js";import"./index-ED8ccfsJ.js";import"./index-CWQ0GGcJ.js";import"./index-BHxe-dnq.js";import"./index-iWHyAWYR.js";import"./index-BztLnIMF.js";import"./index-Udc0C2Qz.js";import"./index-CPdpS9Jm.js";import"./32-Bjhqu_Pf.js";import{D as d,H as n,b as c,c as l,d as f,e as x,f as a,g as u,h as H,a as I}from"./text-CEkvHXm0.js";import{F as _}from"./FigmaEmbed-2TZ9ZXkF.js";import"./iframe-DB6xw0G7.js";import"../sb-preview/runtime.js";import"./index-Ckls47V4.js";import"./index-D-8MO0q_.js";import"./get-CeVb1zXw.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-ebfOklXd.js";import"./index-DrFu-skq.js";import"./client-C_RBoFGa.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-mZjneSg7.js";import"./index-7KVZVlDS.js";const p="Header",h="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=315-23434&t=HhCDuaOuzHu5rgyf-1",$=()=>{const[t,o]=T.useState(0),i=E=>t===E;return e.jsxs("div",{className:m.wrapper,children:[e.jsx(C,{title:p,description:"Header - это компонент, который отображает настраиваемый верхний колонтитул (шапку) веб-страницы или приложения.",isBeta:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${p}`,figmaLink:h}),e.jsx("div",{className:m.tabs,children:e.jsxs(s,{children:[e.jsx(s.Tab,{label:"Разработчику",active:i(0),onClick:()=>o(0)}),e.jsx(s.Tab,{label:"Дизайнеру",active:i(1),onClick:()=>o(1)}),e.jsx(s.Tab,{label:"Тестирование",active:i(2),onClick:()=>o(2)})]})}),t==0&&e.jsxs(e.Fragment,{children:[e.jsx(r,{height:180,description:d,code:`import { Header } from '@nlmk/ds-2.0';

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
`,e.jsx(D,{children:e.jsx($,{})})]})}function ue(t={}){const{wrapper:o}={...j(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(A,{...t})}):A()}export{ue as default};
