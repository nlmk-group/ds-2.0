import{r as c,j as t,m as u,S as l,U as g}from"./iframe-tXE4xoYc.js";import{useMDXComponents as d}from"./index-BU2Hc1BN.js";import{a as x,S as y}from"./argsTypes-Bm_cmc58.js";import{DecoratorDefault as B}from"./Decorator.stories-DX_mk-19.js";import{s as m,H as S,E as f}from"./Header-D7Lkw1fr.js";import{F as j}from"./FigmaEmbed-DGce_rmk.js";import{P as h}from"./Properties-3Caa_vUq.js";import{T}from"./Tests-COuvSTuJ.js";/* empty css               */import{T as e}from"./index-BdAkzp84.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cx9ne2MY.js";import"./clsx-B-dksMZM.js";import"./index-IJbXH1LS.js";import"./index-BJ8dPBsg.js";import"./index-DnvHMcnj.js";import"./index-BQHkH-Oh.js";import"./index-D0fx2znr.js";import"./generateUUID-M57HTP56.js";import"./24-CGaTDQAV.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-UIqxTLHU.js";import"./sizesMapping-D8QavrGc.js";import"./index-D3OER6c8.js";import"./index-DfJPKXXV.js";import"./index-CjsErmK6.js";import"./index-BavAFXG7.js";import"./32-C-sXzJO7.js";import"./24-CmyNkjMd.js";import"./24-DOosEbor.js";import"./24-BWrbmGeu.js";import"./24-BbCg_oVA.js";import"./24-DRYMupHO.js";import"./24-CzQL-KAt.js";import"./24-DKRMhkuJ.js";import"./24-BGmf7Yvo.js";import"./24-C3aWb0fW.js";import"./16-5OD6xOBP.js";import"./24-DhcVhNlZ.js";import"./16-DrGrHANJ.js";import"./16-3aq9OzD6.js";import"./16-Caqr7FMr.js";const i="SegmentButtonGroup",s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-92301&t=HhCDuaOuzHu5rgyf-1",b=()=>{const[o,r]=c.useState(0),n=a=>o===a;return t.jsxs("div",{className:m.wrapper,children:[t.jsx(S,{title:i,description:"Компонент SegmentButtonGroup - это набор кнопок, из которых пользователь может выбрать только одну.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${i}`,figmaLink:s}),t.jsx("div",{className:m.tabs,children:t.jsxs(e,{children:[t.jsx(e.Tab,{label:"Разработчику",active:n(0),onClick:()=>r(0)}),t.jsx(e.Tab,{label:"Дизайнеру",active:n(1),onClick:()=>r(1)}),t.jsx(e.Tab,{label:"Тестирование",active:n(2),onClick:()=>r(2)})]})}),o==0&&t.jsxs(t.Fragment,{children:[t.jsx(f,{height:600,description:"SegmentButtonGroup по умолчанию",code:`import { SegmentButtonGroup, SegmentButton, Typography } from '@nlmk/ds-2.0';

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
`}),t.jsx(h,{argsTypes:x})]}),o==1&&t.jsx(j,{url:s}),o==2&&t.jsx(T,{componentName:i})]})};function p(o){return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Components/SegmentButtonGroup/Info",component:y,parameters:{design:{type:"figma",url:"https://www.figma.com/design/2bgeOS0URFNqFO1m1bnyvg/Button-DS-3.0?node-id=1386-40366&t=OsXEWBgtT8y4LBgR-0"},jest:["SegmentButtonGroup.test.tsx"]}}),`
`,t.jsx(l,{of:B}),`
`,t.jsx(g,{children:t.jsx(b,{})})]})}function lt(o={}){const{wrapper:r}={...d(),...o.components};return r?t.jsx(r,{...o,children:t.jsx(p,{...o})}):p()}export{lt as default};
