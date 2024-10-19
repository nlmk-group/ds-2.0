import{j as i}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as a}from"./index-CpguRmgc.js";import{ag as n,ah as c,ai as h}from"./chunk-NUUEMKO5-BfWh-sLJ.js";import{a0 as t,C as l}from"./index-CZcUCixh.js";import{DecoratorDefault as C}from"./Decorator.stories-BP3ijO2B.js";import{r as d}from"./index-DQ2WTIsS.js";import{s as e,H as u,E as p}from"./Header-D2gbLVua.js";import{F as f}from"./FigmaEmbed-DjqPO1nf.js";import{P as x}from"./Properties-C9DnMm3G.js";import{T as j}from"./Tests-CzPE_ao-.js";/* empty css               */import"./generateUUID-DDiDEiZj.js";import"./index-BUicYAu_.js";import"./index-CSbymPMC.js";import"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import"./index-ehXB0alm.js";import"./index-BKAatnfy.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-CLzAcar6.js";import"./32-sVrGXRAZ.js";import{a as b}from"./argsTypes-a6AT2aPy.js";import"./iframe-BUM6csBU.js";import"../sb-preview/runtime.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-oHtgdQEu.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DsjOqT4x.js";import"./index-DrFu-skq.js";import"./client-Du4Z4Qeu.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-R5jBLDn_.js";import"./index-BKbm6zW0.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=407-64840&t=HhCDuaOuzHu5rgyf-1",g=()=>{const[r,o]=d.useState(0);return i.jsxs("div",{className:e.wrapper,children:[i.jsx(u,{title:"Chip",description:"Компонент Chip обычно используется для отображения небольших интерактивных элементов пользовательского интерфейса, таких как теги, метки, категории или выборы в фильтрах, а также для представления небольших блоков информации.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Chip",figmaLink:s}),i.jsx("div",{className:e.tabs,children:i.jsxs(t,{children:[i.jsx(t.Tab,{label:"Разработчику",active:Number(r)===0,onClick:()=>o(0)}),i.jsx(t.Tab,{label:"Дизайнеру",active:Number(r)===1,onClick:()=>o(1)}),i.jsx(t.Tab,{label:"Тестирование",active:Number(r)===2,onClick:()=>o(2)})]})}),Number(r)==0&&i.jsxs(i.Fragment,{children:[i.jsx(p,{height:150,description:"Компонент Chip по умолчанию.",code:`import { Chip } from '@nlmk/ds-2.0';

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
)`}),i.jsx(x,{argsTypes:b})]}),Number(r)==1&&i.jsx(f,{url:s}),Number(r)==2&&i.jsx(j,{componentName:"Chip"})]})};function m(r){return i.jsxs(i.Fragment,{children:[i.jsx(n,{title:"Components/Chip/Info",component:l,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?node-id=207%3A40297&mode=dev"},jest:["Chip.test.tsx"]}}),`
`,i.jsx(c,{of:C}),`
`,i.jsx(h,{children:i.jsx(g,{})})]})}function pi(r={}){const{wrapper:o}={...a(),...r.components};return o?i.jsx(o,{...r,children:i.jsx(m,{...r})}):m()}export{pi as default};
