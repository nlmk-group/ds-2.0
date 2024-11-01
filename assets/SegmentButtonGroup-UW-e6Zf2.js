import{j as t}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as c}from"./index-DtGqrCZN.js";import{ag as u,ah as l,ai as g}from"./chunk-NUUEMKO5-Ctn7VFPu.js";import{$ as r,S as d}from"./index-ZojCmbpv.js";import{DecoratorDefault as x}from"./Decorator.stories-CffsLfgf.js";import{r as f}from"./index-Cu9bd8lq.js";import{s as i,H as j,E as B}from"./Header-CN10_-75.js";import{F as b}from"./FigmaEmbed-2TZ9ZXkF.js";import{P as S}from"./Properties-Btz1YxCe.js";import{T as h}from"./Tests-CWaY5hDn.js";/* empty css               */import"./generateUUID-CG7VmJJw.js";import"./index-XsxLq1mj.js";import"./index-AXtJih2E.js";import"./index-ED8ccfsJ.js";import"./index-CWQ0GGcJ.js";import"./index-BHxe-dnq.js";import"./index-iWHyAWYR.js";import"./index-BztLnIMF.js";import"./index-Udc0C2Qz.js";import"./index-CPdpS9Jm.js";import"./32-Bjhqu_Pf.js";import{D as T,a as D}from"./constants-BOM42jyp.js";import"./iframe-DB6xw0G7.js";import"../sb-preview/runtime.js";import"./index-Ckls47V4.js";import"./index-D-8MO0q_.js";import"./get-CeVb1zXw.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-ebfOklXd.js";import"./index-DrFu-skq.js";import"./client-C_RBoFGa.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-mZjneSg7.js";import"./index-7KVZVlDS.js";const s="SegmentButtonGroup",m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-92301&t=HhCDuaOuzHu5rgyf-1",C=()=>{const[o,e]=f.useState(0),n=a=>o===a;return t.jsxs("div",{className:i.wrapper,children:[t.jsx(j,{title:s,description:"Компонент SegmentButtonGroup - это набор кнопок, из которых пользователь может выбрать только одну.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${s}`,figmaLink:m}),t.jsx("div",{className:i.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:n(0),onClick:()=>e(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:n(1),onClick:()=>e(1)}),t.jsx(r.Tab,{label:"Тестирование",active:n(2),onClick:()=>e(2)})]})}),o==0&&t.jsxs(t.Fragment,{children:[t.jsx(B,{height:600,description:T,code:`import { SegmentButtonGroup } from '@nlmk/ds-2.0';

const { Button } = SegmentButtonGroup;

export default App = () => {
  return (
    <SegmentButtonGroup>
      <Button onClick={() => console.log(new Date())}>
        Печенье
      </Button>
      <Button onClick={() => console.log(new Date())}>
        Торты
      </Button>
      <Button onClick={() => console.log(new Date())}>
        Конфеты
      </Button>
    </SegmentButtonGroup>
  )
}
`}),t.jsx(S,{argsTypes:D})]}),o==1&&t.jsx(b,{url:m}),o==2&&t.jsx(h,{componentName:s})]})};function p(o){return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Components/SegmentButtonGroup/Info",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/design/2bgeOS0URFNqFO1m1bnyvg/Button-DS-3.0?node-id=1386-40366&t=OsXEWBgtT8y4LBgR-0"},jest:["SegmentButtonGroup.test.tsx"]}}),`
`,t.jsx(l,{of:x}),`
`,t.jsx(g,{children:t.jsx(C,{})})]})}function mt(o={}){const{wrapper:e}={...c(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(p,{...o})}):p()}export{mt as default};
