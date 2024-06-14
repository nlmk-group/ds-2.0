import{U as p,M as u,e as f}from"./chunk-HLWAVYOI-D_Dl5wLY.js";import{L as t,N as c}from"./index-CfZTnDhX.js";import{a as i,j as e,F as g}from"./jsx-runtime-2xDJh5tt.js";import{r as b}from"./index-CBqU2yxZ.js";import{s as d,H as y,E as a,T as h}from"./Tests-DHTVSmWv.js";import{F as x}from"./FigmaEmbed-YFEQg_l-.js";import{P as v}from"./Properties-DtaLgUr8.js";/* empty css               */import"./generateUUID-xFqDjoto.js";import"./index-qrvtYV6q.js";import"./index-CTkD9j2t.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import{T as w}from"./index-nWYpQihe.js";import"./index-C6sJWxXv.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-CBS9NtKm.js";import"./32-DtWm84R6.js";import{a as N}from"./argsTypes-Ceppz0Yu.js";import{useMDXComponents as S}from"./index-DI5IigMn.js";import"./iframe-ezH54IIy.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-rQZ06u7F.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./clsx.m-CH7BE6MN.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-B6pRd-5M.js";import"./index-CMH8wQUv.js";const m="https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/DS2.0-Buttons?type=design&node-id=116-31671&mode=design&t=hegxGpGd02Ims4tD-0",l=()=>{const[o,r]=b.useState(0);return i("div",{className:d.wrapper,children:[e(y,{title:"Badge",description:"Компонент Badge используется для отображения меток (badges), таких как лейблы, тэги, статусы и т.д. Обычно Badge используют внутри или в непосредственной близости от другого более крупного компонента интерфейса.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Badge",figmaLink:m}),e("div",{className:d.tabs,children:i(t,{children:[e(t.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>r(0)}),e(t.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>r(1)}),e(t.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>r(2)})]})}),Number(o)==0&&i(g,{children:[e(a,{height:150,description:"Компонент бэйджа по умолчанию.",code:`import { Badge } from '@nlmk/ds-2.0';

export default  App = () =>(
  <Badge>1</Badge>
)`}),e(a,{description:"Badge является компоненетом с обязательно примененными стилем: цветом (color). Доступные стили: primary (отображается по умолчанию), secondary, grey, error, warning, success.",code:`import { Badge } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Badge>1</Badge>
    <Badge color="secondary">1</Badge>
    <Badge color="grey">1</Badge>
    <Badge color="error">1</Badge>
    <Badge color="warning">1</Badge>
    <Badge color="success">1</Badge>
  </>
)`}),e(a,{description:"Badge представлен в нескольких вариациях (стилях): solid (с заливкой) и outline (с контуром).",code:`import { Badge } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Badge variant="outline">1</Badge>
    <Badge color="secondary" variant="outline">1</Badge>
    <Badge color="grey" variant="outline">1</Badge>
    <Badge color="error" variant="outline">1</Badge>
    <Badge color="warning" variant="outline">1</Badge>
    <Badge color="success" variant="outline">1</Badge>
  </>
)`}),e(a,{description:"Компонент Badge доступен в трёх размерах: s - маленький бэйдж с высотой 16px, m - средний бэйдж, его высота 24px и l - большой бэйдж высотой 26px.",code:`import { Badge } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Badge size="l">1</Badge>
    <Badge size="m">1</Badge>
    <Badge size="s">1</Badge>
    <Badge size="xs">1</Badge>
  </>
)`}),e(v,{argsTypes:N})]}),Number(o)==1&&e(x,{url:m}),Number(o)==2&&e(w,{variant:"Heading4",color:"primary",children:e(h,{componentName:"Badge"})})]})};function n(o){return i(g,{children:[e(u,{title:"Components/Badge/Info",component:c,parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/DS2.0-Buttons?node-id=116%3A31671&t=yFPw0pVcbpSRu4AT-0"},jest:["Badge.test.tsx"]}}),`
`,e(f,{name:"Docs",children:e(p,{children:e(l,{})})})]})}function F(o={}){const{wrapper:r}=Object.assign({},S(),o.components);return r?e(r,{...o,children:e(n,{...o})}):n()}const B=()=>e(p,{children:e(l,{})});B.storyName="Docs";B.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const s={title:"Components/Badge/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/DS2.0-Buttons?node-id=116%3A31671&t=yFPw0pVcbpSRu4AT-0"},jest:["Badge.test.tsx"]},component:c,tags:["stories-mdx"],includeStories:["docs"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:F};const me=["docs"];export{me as __namedExportsOrder,s as default,B as docs};
