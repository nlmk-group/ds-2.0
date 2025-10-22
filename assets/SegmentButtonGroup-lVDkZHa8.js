import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as c}from"./index-D2yTtfOz.js";import"./index-5Xbyem7j.js";import{ah as e,U as u}from"./TreeList-DaNCMioE.js";import{DecoratorDefault as l}from"./Decorator.stories-D7iJJ_iz.js";import{r as g}from"./index-BcJSXhQi.js";import{s as m,H as d,E as x}from"./Header-C72SdBwM.js";import{F as y}from"./FigmaEmbed-DodypkXL.js";import{P as B}from"./Properties-BVB2raxr.js";import{T as f}from"./Tests-DzMj4-oe.js";/* empty css               */import"./generateUUID-CwHnX0Hw.js";import"./index-BekOEyNL.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-9k2b7QWQ.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-uupel1IP.js";import"./index-C5rKoyII.js";import"./32-BKmqX1Rw.js";import{a as S}from"./argsTypes-BV2PO4Xu.js";import{c as h,S as j,U as T}from"./DocsRenderer-CFRXHY34-CPUA_46S.js";import"./index-ChsGqxH_.js";import"./preview-CjFDHAeW.js";import"./iframe-A9Gfrthy.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-DQ8ZqkF6.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const i="SegmentButtonGroup",s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-92301&t=HhCDuaOuzHu5rgyf-1",b=()=>{const[o,r]=g.useState(0),n=a=>o===a;return t.jsxs("div",{className:m.wrapper,children:[t.jsx(d,{title:i,description:"Компонент SegmentButtonGroup - это набор кнопок, из которых пользователь может выбрать только одну.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${i}`,figmaLink:s}),t.jsx("div",{className:m.tabs,children:t.jsxs(e,{children:[t.jsx(e.Tab,{label:"Разработчику",active:n(0),onClick:()=>r(0)}),t.jsx(e.Tab,{label:"Дизайнеру",active:n(1),onClick:()=>r(1)}),t.jsx(e.Tab,{label:"Тестирование",active:n(2),onClick:()=>r(2)})]})}),o==0&&t.jsxs(t.Fragment,{children:[t.jsx(x,{height:600,description:"SegmentButtonGroup по умолчанию",code:`import { SegmentButtonGroup, SegmentButton, Typography } from '@nlmk/ds-2.0';

export default App = () => {
  return (
    <SegmentButtonGroup {...argTypes}>
      <SegmentButton onClick={action('onClick')}>
        <Typography variant="Body1-Bold" color="var(--steel-90)">
          Сталь
        </Typography>
      </SegmentButton>
      <SegmentButton onClick={action('onClick')}>
        <Typography variant="Body1-Bold" color="var(--steel-90)">
          Цинк
        </Typography>
      </SegmentButton>
      <SegmentButton onClick={action('onClick')}>
        <Typography variant="Body1-Bold" color="var(--steel-90)">
          Чугун
        </Typography>
      </SegmentButton>
    </SegmentButtonGroup>
  )
}
`}),t.jsx(B,{argsTypes:S})]}),o==1&&t.jsx(y,{url:s}),o==2&&t.jsx(f,{componentName:i})]})};function p(o){return t.jsxs(t.Fragment,{children:[t.jsx(h,{title:"Components/SegmentButtonGroup/Info",component:u,parameters:{design:{type:"figma",url:"https://www.figma.com/design/2bgeOS0URFNqFO1m1bnyvg/Button-DS-3.0?node-id=1386-40366&t=OsXEWBgtT8y4LBgR-0"},jest:["SegmentButtonGroup.test.tsx"]}}),`
`,t.jsx(j,{of:l}),`
`,t.jsx(T,{children:t.jsx(b,{})})]})}function pt(o={}){const{wrapper:r}={...c(),...o.components};return r?t.jsx(r,{...o,children:t.jsx(p,{...o})}):p()}export{pt as default};
