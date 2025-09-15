import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as c}from"./index-D2yTtfOz.js";import"./index-BZj5W0-3.js";import{af as e,S as u}from"./TreeList-Dfumwbts.js";import{DecoratorDefault as l}from"./Decorator.stories-D7iJJ_iz.js";import{r as g}from"./index-BcJSXhQi.js";import{s as m,H as d,E as x}from"./Header-DMN9oXvM.js";import{F as y}from"./FigmaEmbed-CdX5UTsK.js";import{P as f}from"./Properties-D2HIDxL_.js";import{T as B}from"./Tests-Beah3iGJ.js";/* empty css               */import"./generateUUID-BavcPfJ4.js";import"./index-Inj23kr-.js";import"./index-2_my9O6o.js";import"./index-BTu6RRiT.js";import"./index-CkFns3eu.js";import"./index-DmffzHLE.js";import"./index-Btxx-I9m.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-DqPMIbXX.js";import"./index-C5rKoyII.js";import"./32-DGpMxF8b.js";import{a as S}from"./argsTypes-DqYLtEpz.js";import{c as j,S as h,U as T}from"./DocsRenderer-CFRXHY34-Bxb1GJd9.js";import"./index-ChsGqxH_.js";import"./preview-CFLYHfFH.js";import"./iframe-Vwkb464U.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-4j-JTKdD.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const i="SegmentButtonGroup",s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-92301&t=HhCDuaOuzHu5rgyf-1",b=()=>{const[o,r]=g.useState(0),n=a=>o===a;return t.jsxs("div",{className:m.wrapper,children:[t.jsx(d,{title:i,description:"Компонент SegmentButtonGroup - это набор кнопок, из которых пользователь может выбрать только одну.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${i}`,figmaLink:s}),t.jsx("div",{className:m.tabs,children:t.jsxs(e,{children:[t.jsx(e.Tab,{label:"Разработчику",active:n(0),onClick:()=>r(0)}),t.jsx(e.Tab,{label:"Дизайнеру",active:n(1),onClick:()=>r(1)}),t.jsx(e.Tab,{label:"Тестирование",active:n(2),onClick:()=>r(2)})]})}),o==0&&t.jsxs(t.Fragment,{children:[t.jsx(x,{height:600,description:"SegmentButtonGroup по умолчанию",code:`import { SegmentButtonGroup, SegmentButton, Typography } from '@nlmk/ds-2.0';

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
`}),t.jsx(f,{argsTypes:S})]}),o==1&&t.jsx(y,{url:s}),o==2&&t.jsx(B,{componentName:i})]})};function p(o){return t.jsxs(t.Fragment,{children:[t.jsx(j,{title:"Components/SegmentButtonGroup/Info",component:u,parameters:{design:{type:"figma",url:"https://www.figma.com/design/2bgeOS0URFNqFO1m1bnyvg/Button-DS-3.0?node-id=1386-40366&t=OsXEWBgtT8y4LBgR-0"},jest:["SegmentButtonGroup.test.tsx"]}}),`
`,t.jsx(h,{of:l}),`
`,t.jsx(T,{children:t.jsx(b,{})})]})}function pt(o={}){const{wrapper:r}={...c(),...o.components};return r?t.jsx(r,{...o,children:t.jsx(p,{...o})}):p()}export{pt as default};
