import{r as m,j as t,f as u,S as p,U as l}from"./iframe-zk5xXBtA.js";import{useMDXComponents as c}from"./index-CSMoqiIu.js";import{S as d}from"./index-C3aSURYB.js";import{DecoratorDefault as S}from"./Decorator.stories-XjMTlGWF.js";import{s as r,H as f,E as s}from"./Header-BMqOixcD.js";import{F as x}from"./FigmaEmbed-Bh-YhisY.js";import{P as b}from"./Properties-BH32KsQA.js";import{T as j}from"./Tests-BiRJAIxZ.js";/* empty css               */import{T as i}from"./index-CGZqhooT.js";import{a as h}from"./argsTypes-CLKcUgFo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-9BCGLlQQ.js";import"./clsx-B-dksMZM.js";import"./index-1zUxKm4P.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-D1ipBNS6.js";import"./24-BU8fW5nS.js";import"./24-CsxFkFpg.js";import"./24-Cg1MPBHI.js";import"./24-BGS-MQmY.js";import"./24-2PvTlRtj.js";import"./24-DyWGmQTd.js";import"./24-DrF3F4Gh.js";import"./24-DXO8B9MT.js";import"./24-CHUQ235a.js";import"./16-D0071456.js";import"./24-CzaQJmC-.js";import"./24-BkbQ4VQu.js";import"./16-D1MigzhA.js";import"./16-J9oiRdzb.js";import"./16-qJIrzOil.js";import"./index-D9zx9C-F.js";import"./index-6T6AONQH.js";import"./index-DjSUGs5w.js";import"./index-CBNcLMKv.js";import"./generateUUID-M57HTP56.js";import"./index-B9FTsAqd.js";import"./sizesMapping-D8QavrGc.js";import"./index-Is2qauMo.js";import"./index-CTfBpVCI.js";import"./index-DirQniBD.js";import"./index-cDYWclvM.js";const n="https://www.figma.com/design/oPDzwafb5EpQ3M7vckuG5x/NLMK-Table?node-id=7107-38220&node-type=canvas&t=o1WBDkQ91vBB2P0e-0",g=()=>{const[o,e]=m.useState(0);return t.jsxs("div",{className:r.wrapper,children:[t.jsx(f,{title:"Status",description:"Компонент Status используется для отображения информации о статусе какого-либо объекта. Он поддерживает различные цвета, размеры и заливку фона.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Status",figmaLink:n}),t.jsx("div",{className:r.tabs,children:t.jsxs(i,{children:[t.jsx(i.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>e(0)}),t.jsx(i.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>e(1)}),t.jsx(i.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>e(2)})]})}),Number(o)==0&&t.jsxs(t.Fragment,{children:[t.jsx(s,{height:150,description:"Компонент Status по умолчанию.",code:`import { Status } from '@nlmk/ds-2.0';

export default  App = () => (
  <Status icon="IconCloudDoneOutlined24">Published</Status>
)`}),t.jsx(s,{description:"Компонент Status может использовать разные цвета: default (отображается по умолчанию), error, warning, success, grey.",code:`import { Status } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Status icon="IconCloudDoneOutlined24">Published</Status>
    <Status icon="IconBlockCloseOutlined24" color="error">Cancelled</Status>
    <Status icon="IconAllDoneDoubleCheckOutlined24" color="success">Pinned</Status>
    <Status icon="IconPeopleCheckDoneOutlined24" color="warning">In progress</Status>
    <Status icon="IconEditPenOutlined24" color="grey">Draft</Status>
  </>
)`}),t.jsx(s,{description:"Компонент Status доступен в двух типах заливки фона: solid - полностью закрашенный, clear - без заливки.",code:`import { Status } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Status icon="IconCloudDoneOutlined24" fill="solid">Published</Status>
    <Status icon="IconCloudDoneOutlined24" fill="clear">Published</Status>
  </>
)`}),t.jsx(s,{height:230,description:"Компонент Status доступен в трёх размерах: s - маленький, m - средний, l - большой.",code:`import { Status } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Status icon="IconCloudDoneOutlined16" size="s">Published</Status>
    <Status icon="IconCloudDoneOutlined24" size="m">Published</Status>
    <Status icon="IconCloudDoneOutlined24" size="l">Published</Status>
  </>
)`}),t.jsx(b,{argsTypes:h})]}),Number(o)==1&&t.jsx(x,{url:n}),Number(o)==2&&t.jsx(j,{componentName:"Status"})]})};function a(o){return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Components/Status/Info",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/file/oPDzwafb5EpQ3M7vckuG5x/NLMK-Table?node-id=7107-38220"},jest:["Status.test.tsx"]}}),`
`,t.jsx(p,{of:S}),`
`,t.jsx(l,{children:t.jsx(g,{})})]})}function pt(o={}){const{wrapper:e}={...c(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(a,{...o})}):a()}export{pt as default};
