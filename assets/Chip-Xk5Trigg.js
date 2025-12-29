import{r as n,j as i,f as a,S as c,U as h}from"./iframe-CVAHojaF.js";import{useMDXComponents as l}from"./index-DqTt4rKv.js";import{C}from"./index-CqzaiicI.js";import{DecoratorDefault as d}from"./Decorator.stories-Pdz9giCE.js";import{s as e,H as x,E as p}from"./Header-P01wOpj2.js";import{F as u}from"./FigmaEmbed-g9QqaeRo.js";import{P as f}from"./Properties-1BWy3pzy.js";import{T as j}from"./Tests-MQmjhMeS.js";/* empty css               */import{T as t}from"./index-Cyj4_MYZ.js";import{a as b}from"./argsTypes-BUEHijpo.js";import"./preload-helper-PPVm8Dsz.js";import"./sizesMapping-D8QavrGc.js";import"./index-x8Y8AkZd.js";import"./index-BHrg75jh.js";import"./clsx-B-dksMZM.js";import"./index-C8HyjBOv.js";import"./index-Bivvm1z2.js";import"./index-BHMo20JE.js";import"./index-DbWCe9dP.js";import"./index-BVgG5EPb.js";import"./generateUUID-M57HTP56.js";import"./24-BKsua3Hk.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-zQ6Q3aTj.js";import"./index-DZ_c8xXN.js";import"./index-BN_w7FjE.js";import"./32-BGkTw_Iv.js";import"./24-DhWu0U6R.js";import"./24-QBRQbIxz.js";import"./24-DbZB43lA.js";import"./24-CpQC9mRz.js";import"./24-D4AD88CD.js";import"./24-i225Oh9B.js";import"./24-Tgd-_Nih.js";import"./24-BHgrLOFn.js";import"./24-DKX7LJ7g.js";import"./16-D51laVEK.js";import"./24-DoIGH_dx.js";import"./16-D08SDomb.js";import"./16-R8HovCn5.js";import"./16-DOUHJXJi.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=551-522857",g=()=>{const[r,o]=n.useState(0);return i.jsxs("div",{className:e.wrapper,children:[i.jsx(x,{title:"Chip",description:"Компонент Chip обычно используется для отображения небольших интерактивных элементов пользовательского интерфейса, таких как теги, метки, категории или выборы в фильтрах, а также для представления небольших блоков информации.",isDeprecated:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Chip",figmaLink:s}),i.jsx("div",{className:e.tabs,children:i.jsxs(t,{children:[i.jsx(t.Tab,{label:"Разработчику",active:Number(r)===0,onClick:()=>o(0)}),i.jsx(t.Tab,{label:"Дизайнеру",active:Number(r)===1,onClick:()=>o(1)}),i.jsx(t.Tab,{label:"Тестирование",active:Number(r)===2,onClick:()=>o(2)})]})}),Number(r)==0&&i.jsxs(i.Fragment,{children:[i.jsx(p,{height:150,description:"Компонент Chip по умолчанию.",code:`import { Chip } from '@nlmk/ds-2.0';

export default  App = () => (
  <Chip>1234</Chip>
)`}),i.jsx(p,{description:"Компонент Chip может использовать разные стили: primary (отображается по умолчанию), error, warning, success.",code:`import { Chip } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Chip>1234</Chip>
    <Chip color="error">1234</Chip>
    <Chip color="success">1234</Chip>
    <Chip color="warning">1234</Chip>
  </>
)`}),i.jsx(p,{description:"Компонент доступен в двух типах заливки: solid - полностью закрашенный, outline - закрашенна только граница.",code:`import { Chip } from '@nlmk/ds-2.0';;

export default  App = () =>(
  <>
    <Chip variant="outline">1234</Chip>
    <Chip color="error" variant="outline">1234</Chip>
    <Chip color="success" variant="outline">1234</Chip>
    <Chip color="warning" variant="outline">1234</Chip>
  </>
)`}),i.jsx(p,{height:230,description:"Компонент доступен в двух размерах: s - маленький чип с высотой 16px, m - средний чип, его высота 24px.",code:`import { Chip } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Chip size="s">1234</Chip>
    <Chip size="m">1234</Chip>
  </>
)`}),i.jsx(p,{description:"Чип может содержать суффикс.",code:`import { Chip } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Chip suffix="кг">1234</Chip>
    <Chip color="error" suffix="кг">1234</Chip>
    <Chip color="success" suffix="кг">1234</Chip>
    <Chip color="warning" suffix="кг">1234</Chip>
  </>
)`}),i.jsx(p,{description:"Чип может содержать суффикс.",code:`import { Chip } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Chip label="Цифры">1234</Chip>
    <Chip color="error" label="Цифры">1234</Chip>
    <Chip color="success" label="Цифры">1234</Chip>
    <Chip color="warning" label="Цифры">1234</Chip>
  </>
)`}),i.jsx(f,{argsTypes:b})]}),Number(r)==1&&i.jsx(u,{url:s}),Number(r)==2&&i.jsx(j,{componentName:"Chip"})]})};function m(r){return i.jsxs(i.Fragment,{children:[i.jsx(a,{title:"Components/Chip/Info",component:C,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=551-522857"},jest:["Chip.test.tsx"]}}),`
`,i.jsx(c,{of:d}),`
`,i.jsx(h,{children:i.jsx(g,{})})]})}function ai(r={}){const{wrapper:o}={...l(),...r.components};return o?i.jsx(o,{...r,children:i.jsx(m,{...r})}):m()}export{ai as default};
