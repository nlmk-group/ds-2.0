import{j as i}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as n}from"./index-D2yTtfOz.js";import"./index-BY8OIdGF.js";import{af as t,C as a}from"./TreeList-t_gw7Ie1.js";import{DecoratorDefault as c}from"./Decorator.stories-D7iJJ_iz.js";import{r as h}from"./index-BcJSXhQi.js";import{s as e,H as l,E as p}from"./Header-BLEe49dE.js";import{F as C}from"./FigmaEmbed-C1uE_9Wa.js";import{P as d}from"./Properties-BdkLrwqP.js";import{T as x}from"./Tests-BAbFQrY1.js";/* empty css               */import"./generateUUID-BB0QUzbi.js";import"./index-B_7MXUVi.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-CqWNtYbo.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-CBc2nLPm.js";import"./index-C5rKoyII.js";import"./32-BRZfqcB0.js";import{a as f}from"./argsTypes-sF5hqKQr.js";import{c as u,S as j,U as b}from"./DocsRenderer-CFRXHY34-DU2Xh_Kd.js";import"./index-ChsGqxH_.js";import"./preview-Dtq5IoV8.js";import"./iframe-wFgOxPBG.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-Dc3oy9un.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=551-522857",g=()=>{const[r,o]=h.useState(0);return i.jsxs("div",{className:e.wrapper,children:[i.jsx(l,{title:"Chip",description:"Компонент Chip обычно используется для отображения небольших интерактивных элементов пользовательского интерфейса, таких как теги, метки, категории или выборы в фильтрах, а также для представления небольших блоков информации.",isDeprecated:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Chip",figmaLink:s}),i.jsx("div",{className:e.tabs,children:i.jsxs(t,{children:[i.jsx(t.Tab,{label:"Разработчику",active:Number(r)===0,onClick:()=>o(0)}),i.jsx(t.Tab,{label:"Дизайнеру",active:Number(r)===1,onClick:()=>o(1)}),i.jsx(t.Tab,{label:"Тестирование",active:Number(r)===2,onClick:()=>o(2)})]})}),Number(r)==0&&i.jsxs(i.Fragment,{children:[i.jsx(p,{height:150,description:"Компонент Chip по умолчанию.",code:`import { Chip } from '@nlmk/ds-2.0';

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
)`}),i.jsx(d,{argsTypes:f})]}),Number(r)==1&&i.jsx(C,{url:s}),Number(r)==2&&i.jsx(x,{componentName:"Chip"})]})};function m(r){return i.jsxs(i.Fragment,{children:[i.jsx(u,{title:"Components/Chip/Info",component:a,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=551-522857"},jest:["Chip.test.tsx"]}}),`
`,i.jsx(j,{of:c}),`
`,i.jsx(b,{children:i.jsx(g,{})})]})}function ei(r={}){const{wrapper:o}={...n(),...r.components};return o?i.jsx(o,{...r,children:i.jsx(m,{...r})}):m()}export{ei as default};
