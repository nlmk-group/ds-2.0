import{r as n,j as i,f as a,S as c,U as h}from"./iframe-CxLN9ksd.js";import{useMDXComponents as l}from"./index-CeChe1UL.js";import{C}from"./index-BniRS5vs.js";import{DecoratorDefault as d}from"./Decorator.stories-DWPS1QvQ.js";import{s as e,H as x,E as p}from"./Header-B1Tht5jw.js";import{F as u}from"./FigmaEmbed-gwemKUEC.js";import{P as f}from"./Properties-Be6XSfnk.js";import{T as j}from"./Tests-B-cCRdNI.js";/* empty css               */import{T as t}from"./index-Bs6EWGDb.js";import{a as b}from"./argsTypes-Cfl6-ksU.js";import"./preload-helper-PPVm8Dsz.js";import"./sizesMapping-D8QavrGc.js";import"./index-LyR6p6RN.js";import"./index-CORENSTS.js";import"./clsx-B-dksMZM.js";import"./index-CT_Q_AhL.js";import"./index-DUSNaC2m.js";import"./index-Bz6VJdOb.js";import"./index-C9nyZABc.js";import"./index-BnDPEMC8.js";import"./generateUUID-M57HTP56.js";import"./24-CbC-8o3Y.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-IRxTPoEY.js";import"./index-D3DoxRCP.js";import"./index-M8Uj9-kW.js";import"./32-B2BQHND4.js";import"./24-BGXSSISX.js";import"./24-MJ8JdQQ9.js";import"./24-2IXSosOm.js";import"./24-Dlyxu4_q.js";import"./24-BFZg9aq0.js";import"./24-DMGI7E0m.js";import"./24-voYW8sKN.js";import"./24-DMqNa1pl.js";import"./24-DJtALV7Z.js";import"./16-CchysOzF.js";import"./24-CJ9IDGZV.js";import"./16-kcyE2NZr.js";import"./16-DRyq0qh_.js";import"./16-D_ueUpcb.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=551-522857",g=()=>{const[r,o]=n.useState(0);return i.jsxs("div",{className:e.wrapper,children:[i.jsx(x,{title:"Chip",description:"Компонент Chip обычно используется для отображения небольших интерактивных элементов пользовательского интерфейса, таких как теги, метки, категории или выборы в фильтрах, а также для представления небольших блоков информации.",isDeprecated:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Chip",figmaLink:s}),i.jsx("div",{className:e.tabs,children:i.jsxs(t,{children:[i.jsx(t.Tab,{label:"Разработчику",active:Number(r)===0,onClick:()=>o(0)}),i.jsx(t.Tab,{label:"Дизайнеру",active:Number(r)===1,onClick:()=>o(1)}),i.jsx(t.Tab,{label:"Тестирование",active:Number(r)===2,onClick:()=>o(2)})]})}),Number(r)==0&&i.jsxs(i.Fragment,{children:[i.jsx(p,{height:150,description:"Компонент Chip по умолчанию.",code:`import { Chip } from '@nlmk/ds-2.0';

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
