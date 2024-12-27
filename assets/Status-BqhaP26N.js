import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as u}from"./index-CbmgEnq2.js";import{am as m,an as l,ao as c}from"./chunk-NUUEMKO5-CDWB5etm.js";import{ah as s,aF as p}from"./index-C1Xf_hS0.js";import{DecoratorDefault as d}from"./Decorator.stories-B1hjNCvN.js";import{r as S}from"./index-Bnop-kX6.js";import{s as r,H as f,E as i}from"./Header-DqV-uP_8.js";import{F as x}from"./FigmaEmbed-BfkjrBVl.js";import{P as b}from"./Properties-sRwb8j1i.js";import{T as h}from"./Tests-HOEF5-pB.js";/* empty css               */import"./generateUUID-1tgHdX0-.js";import"./index-eOH20s0c.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-CXG1awCY.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-qxD0tkeT.js";import"./index-Br4tp0-d.js";import"./32-Bf_1a6Rp.js";import{a as j}from"./argsTypes-lP8XVkkt.js";import"./iframe-DZPRoslN.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-WTmmaHQ2.js";import"./index-B5g4YLzC.js";const a="https://www.figma.com/design/oPDzwafb5EpQ3M7vckuG5x/NLMK-Table?node-id=7107-38220&node-type=canvas&t=o1WBDkQ91vBB2P0e-0",g=()=>{const[o,e]=S.useState(0);return t.jsxs("div",{className:r.wrapper,children:[t.jsx(f,{title:"Status",description:"Компонент Status используется для отображения информации о статусе какого-либо объекта. Он поддерживает различные цвета, размеры и заливку фона.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Status",figmaLink:a}),t.jsx("div",{className:r.tabs,children:t.jsxs(s,{children:[t.jsx(s.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>e(0)}),t.jsx(s.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>e(1)}),t.jsx(s.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>e(2)})]})}),Number(o)==0&&t.jsxs(t.Fragment,{children:[t.jsx(i,{height:150,description:"Компонент Status по умолчанию.",code:`import { Status } from '@nlmk/ds-2.0';

export default  App = () => (
  <Status icon="IconCloudDoneOutlined24">Published</Status>
)`}),t.jsx(i,{description:"Компонент Status может использовать разные цвета: default (отображается по умолчанию), error, warning, success, grey.",code:`import { Status } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Status icon="IconCloudDoneOutlined24">Published</Status>
    <Status icon="IconBlockCloseOutlined24" color="error">Cancelled</Status>
    <Status icon="IconAllDoneDoubleCheckOutlined24" color="success">Pinned</Status>
    <Status icon="IconPeopleCheckDoneOutlined24" color="warning">In progress</Status>
    <Status icon="IconEditPenOutlined24" color="grey">Draft</Status>
  </>
)`}),t.jsx(i,{description:"Компонент Status доступен в двух типах заливки фона: solid - полностью закрашенный, clear - без заливки.",code:`import { Status } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Status icon="IconCloudDoneOutlined24" fill="solid">Published</Status>
    <Status icon="IconCloudDoneOutlined24" fill="clear">Published</Status>
  </>
)`}),t.jsx(i,{height:230,description:"Компонент Status доступен в трёх размерах: s - маленький, m - средний, l - большой.",code:`import { Status } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Status icon="IconCloudDoneOutlined16" size="s">Published</Status>
    <Status icon="IconCloudDoneOutlined24" size="m">Published</Status>
    <Status icon="IconCloudDoneOutlined24" size="l">Published</Status>
  </>
)`}),t.jsx(b,{argsTypes:j})]}),Number(o)==1&&t.jsx(x,{url:a}),Number(o)==2&&t.jsx(h,{componentName:"Status"})]})};function n(o){return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Components/Status/Info",component:p,parameters:{design:{type:"figma",url:"https://www.figma.com/file/oPDzwafb5EpQ3M7vckuG5x/NLMK-Table?node-id=7107-38220"},jest:["Status.test.tsx"]}}),`
`,t.jsx(l,{of:d}),`
`,t.jsx(c,{children:t.jsx(g,{})})]})}function et(o={}){const{wrapper:e}={...u(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(n,{...o})}):n()}export{et as default};
