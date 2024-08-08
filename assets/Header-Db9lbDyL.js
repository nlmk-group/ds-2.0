import{j as e}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as A}from"./index-CpguRmgc.js";import"./chunk-HLWAVYOI-BpCf8szX.js";import{ae as E,af as j,ag as b}from"./index-CY6AFN3F.js";import{Q as s,H as D}from"./index-De6xVjfl.js";import{DecoratorDefault as k}from"./Decorator.stories-BP3ijO2B.js";import{r as g}from"./index-DQ2WTIsS.js";import{s as m,H as T,E as r}from"./Header-LklIFrOQ.js";import{P as R}from"./Properties-DzW4XCsL.js";import{T as C}from"./Tests-BNc6kC-d.js";/* empty css               */import"./generateUUID-i9L7EtYg.js";import"./index-bLIWCpda.js";import"./index-BgyuaCKK.js";import"./index-B8KuQLf-.js";import"./index-B_c816qF.js";import"./index-DJXOh8UI.js";import"./index-DB41iIPt.js";import"./index-wNTT8eSr.js";import"./index-S3KjbRnp.js";import"./index-CpIRsoAz.js";import"./32-C4VDZHit.js";import{D as d,H as n,b as c,c as l,d as f,e as x,f as i,g as H,a as w}from"./text-Bt4AdQ-z.js";import"./iframe-DmgkbAwY.js";import"../sb-preview/runtime.js";import"./client-ClDtLkqA.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DZkQtLdq.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BgRDMNuH.js";import"./index-0sbKER3h.js";const a="Header",N=()=>{const[t,o]=g.useState(0),p=u=>t===u;return e.jsxs("div",{className:m.wrapper,children:[e.jsx(T,{title:a,description:"Header - это компонент, который отображает настраиваемый верхний колонтитул (шапку) веб-страницы или приложения.",isBeta:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${a}`}),e.jsx("div",{className:m.tabs,children:e.jsxs(s,{children:[e.jsx(s.Tab,{label:"Разработчику",active:p(0),onClick:()=>o(0)}),e.jsx(s.Tab,{label:"Тестирование",active:p(2),onClick:()=>o(2)})]})}),t==0&&e.jsxs(e.Fragment,{children:[e.jsx(r,{height:180,description:d,code:`import { Header } from '@nlmk/ds-2.0';

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
              `}),e.jsx(r,{description:i,code:`import { Header } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Header title="${i}" type="default" />
    <Header title="${i}" type="compact" />
  </>
)
              `}),e.jsx(r,{description:H,code:`import { Header, Breadcrumbs } from '@nlmk/ds-2.0';

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
              `}),e.jsx(R,{argsTypes:w})]}),t==2&&e.jsx(C,{componentName:a})]})};function h(t){return e.jsxs(e.Fragment,{children:[e.jsx(E,{title:"Components/Header/Info",component:D,parameters:{jest:["Header.test.tsx"]}}),`
`,e.jsx(j,{of:k}),`
`,e.jsx(b,{children:e.jsx(N,{})})]})}function fe(t={}){const{wrapper:o}={...A(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(h,{...t})}):h()}export{fe as default};
