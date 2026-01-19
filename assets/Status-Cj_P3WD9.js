import{r as m,j as t,m as u,S as p,U as l}from"./iframe-BPtLBEuk.js";import{useMDXComponents as c}from"./index-DY5aY42c.js";import{S as d}from"./index-BDlPbt_l.js";import{DecoratorDefault as S}from"./Decorator.stories-Bt-6wqMy.js";import{s as r,H as f,E as s}from"./Header-lxb-Wymn.js";import{F as x}from"./FigmaEmbed-IQ2Nn4zn.js";import{P as b}from"./Properties-u6_xeg7P.js";import{T as j}from"./Tests-DUUoQDTR.js";/* empty css               */import{T as i}from"./index-CX87Y9E4.js";import{a as h}from"./argsTypes-CsYaY5ZI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C9_7xPUt.js";import"./clsx-B-dksMZM.js";import"./index-CDRf2h9x.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-DeoBrCvQ.js";import"./24-CrLAaNeG.js";import"./24-CpcywAhj.js";import"./24-Ch6Cnsji.js";import"./24-Q7FkUsyZ.js";import"./24-DOwtHgIx.js";import"./24-B4m_3SjA.js";import"./24-CV2ikCuL.js";import"./24-Ba8I7UHN.js";import"./24-BA0GVvoT.js";import"./16-CXoys7qm.js";import"./24-Cxxq2bXd.js";import"./24-8ackLhic.js";import"./16-DwnwCPW9.js";import"./16-BY-nZnBX.js";import"./16-DaMJtJxQ.js";import"./index-DZQvJksB.js";import"./index-BUWLdeqz.js";import"./index-D9G_R1e4.js";import"./index-V5PZJFO3.js";import"./generateUUID-M57HTP56.js";import"./index-D-pLh_NR.js";import"./sizesMapping-D8QavrGc.js";import"./index-yAFWEvQV.js";import"./index-C5OaxW6Y.js";import"./index-CANPVv15.js";import"./index-d_6bz31j.js";const n="https://www.figma.com/design/oPDzwafb5EpQ3M7vckuG5x/NLMK-Table?node-id=7107-38220&node-type=canvas&t=o1WBDkQ91vBB2P0e-0",g=()=>{const[o,e]=m.useState(0);return t.jsxs("div",{className:r.wrapper,children:[t.jsx(f,{title:"Status",description:"Компонент Status используется для отображения информации о статусе какого-либо объекта. Он поддерживает различные цвета, размеры и заливку фона.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Status",figmaLink:n}),t.jsx("div",{className:r.tabs,children:t.jsxs(i,{children:[t.jsx(i.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>e(0)}),t.jsx(i.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>e(1)}),t.jsx(i.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>e(2)})]})}),Number(o)==0&&t.jsxs(t.Fragment,{children:[t.jsx(s,{height:150,description:"Компонент Status по умолчанию.",code:`import { Status } from '@nlmk/ds-2.0';

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
