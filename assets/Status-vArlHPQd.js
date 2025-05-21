import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as u}from"./index-CbmgEnq2.js";import"./index-Cg4FlZUc.js";import{ag as s,aP as m}from"./TreeList-ChyggQS5.js";import{DecoratorDefault as l}from"./Decorator.stories-B1hjNCvN.js";import{r as c}from"./index-Bnop-kX6.js";import{s as r,H as p,E as i}from"./Header-DoEz7EVi.js";import{F as d}from"./FigmaEmbed-pZ_Xsbw5.js";import{P as S}from"./Properties-BySoTS4I.js";import{T as f}from"./Tests-OdO6CFav.js";/* empty css               */import"./generateUUID-X09o9Pdp.js";import"./index-qbkiYuzD.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DovCGOp-.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-n_FSf3Cv.js";import"./index-DokmLR-l.js";import"./32-BTlKmMLd.js";import{a as x}from"./argsTypes-CxEowYN-.js";import{c as b,e as j,U as h}from"./DocsRenderer-CFRXHY34-Bs6YVDKr.js";import"./preview-ft71v16T.js";import"./iframe-CWffINz-.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-mpWeDU2g.js";import"./index-B5g4YLzC.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";const a="https://www.figma.com/design/oPDzwafb5EpQ3M7vckuG5x/NLMK-Table?node-id=7107-38220&node-type=canvas&t=o1WBDkQ91vBB2P0e-0",g=()=>{const[o,e]=c.useState(0);return t.jsxs("div",{className:r.wrapper,children:[t.jsx(p,{title:"Status",description:"Компонент Status используется для отображения информации о статусе какого-либо объекта. Он поддерживает различные цвета, размеры и заливку фона.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Status",figmaLink:a}),t.jsx("div",{className:r.tabs,children:t.jsxs(s,{children:[t.jsx(s.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>e(0)}),t.jsx(s.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>e(1)}),t.jsx(s.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>e(2)})]})}),Number(o)==0&&t.jsxs(t.Fragment,{children:[t.jsx(i,{height:150,description:"Компонент Status по умолчанию.",code:`import { Status } from '@nlmk/ds-2.0';

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
)`}),t.jsx(S,{argsTypes:x})]}),Number(o)==1&&t.jsx(d,{url:a}),Number(o)==2&&t.jsx(f,{componentName:"Status"})]})};function n(o){return t.jsxs(t.Fragment,{children:[t.jsx(b,{title:"Components/Status/Info",component:m,parameters:{design:{type:"figma",url:"https://www.figma.com/file/oPDzwafb5EpQ3M7vckuG5x/NLMK-Table?node-id=7107-38220"},jest:["Status.test.tsx"]}}),`
`,t.jsx(j,{of:l}),`
`,t.jsx(h,{children:t.jsx(g,{})})]})}function st(o={}){const{wrapper:e}={...u(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(n,{...o})}):n()}export{st as default};
