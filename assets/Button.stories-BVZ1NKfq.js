import{U as p,M as y,e as $}from"./chunk-HLWAVYOI-ggnRarnC.js";import{L as a,b as l,e as n,d as o,B as c}from"./index-CPpCWzCZ.js";import{a as u,j as t,F as f}from"./jsx-runtime-2xDJh5tt.js";import{r as v}from"./index-CBqU2yxZ.js";import{s as m,H as x,E as i,T as F}from"./Tests-CoYSFcpa.js";import{F as k}from"./FigmaEmbed-CmV2K5m5.js";import{P as h}from"./Properties-B_8eF0HB.js";/* empty css               */import"./generateUUID-C4dJbmAm.js";import"./index-DdUHXjGd.js";import"./index-D60oXbFF.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import{T as A}from"./index-nWYpQihe.js";import"./index-tm22VGJr.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-D-OkhesI.js";import"./32-CjiFhZy5.js";import{a as N}from"./argsTypes-gkFSfGQi.js";import{useMDXComponents as I}from"./index-DI5IigMn.js";import"./iframe-C0O6cAnP.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-DKZlcldG.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./clsx.m-CH7BE6MN.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BEdEGSo6.js";import"./index-CMH8wQUv.js";const B="https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/DS2.0-Buttons?type=design&node-id=102-26898&mode=design&t=AyZ6cEr1XAJLQdOB-0",b=()=>{const[e,r]=v.useState(0);return u("div",{className:m.wrapper,children:[t(x,{title:"Button",description:`Компонент Button представляет собой кнопку, которую можно настроить с помощью различных параметров, таких как
          размер, иконки, знаки и стили.`,isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Button",figmaLink:B}),t("div",{className:m.tabs,children:u(a,{children:[t(a.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>r(0)}),t(a.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>r(1)}),t(a.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>r(2)})]})}),Number(e)==0&&u(f,{children:[t(i,{description:`Компонент кнопки по умолчанию в трёх размерах: обычный (m) - является размером по умолчанию, высота кнопки
          в таком случае составляет 40px, компактный (s) - высота такой кнопки составляет 32px и экстра компактный
          (xs) с высотой в 28px.`,code:`import { Button } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
  <Button>
    Button
  </Button>
  <Button size="${l.s}">
    Button
  </Button>
  <Button size="${l.xs}">
    Button
  </Button>
  </>
)`}),t(i,{description:`Всего представлено для кнопки семь различных стилей – primary (отображается по умолчанию), secondary,
          grey, outline, greyOutline, text.`,code:`import { Button } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Button>
      Button
    </Button>
    <Button fill="${n.outline}">
      Button
    </Button>
    <Button fill="${n.clear}">
      Button
    </Button>
    <Button variant="${o.secondary}">
      Button
    </Button>
    <Button variant="${o.grey}">
      Button
    </Button>
    <Button variant="${o.grey}" fill="${n.outline}">
      Button
    </Button>
    <Button variant="${o.grey}" fill="${n.clear}">
      Button
    </Button>
    <Button variant="${o.black}">
      Button
    </Button>
    <Button variant="${o.black}" fill="${n.outline}">
      Button
    </Button>
    <Button variant="${o.black}" fill="${n.clear}">
      Button
    </Button>
  </>
)`}),t(i,{description:"Компонент кнопки может быть неактивным для пользователя (disabled).",code:`import { Button } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Button disabled>
      Button
    </Button>
    <Button fill="${n.outline}" disabled>
      Button
    </Button>
    <Button fill="${n.clear}" disabled>
      Button
    </Button>
    <Button variant="${o.secondary}" disabled>
      Button
    </Button>
    <Button variant="${o.grey}" disabled>
      Button
    </Button>
    <Button variant="${o.grey}" fill="${n.outline}" disabled>
      Button
    </Button>
    <Button variant="${o.grey}" fill="${n.clear}" disabled>
      Button
    </Button>
    <Button variant="${o.black}" disabled>
      Button
    </Button>
    <Button variant="${o.black}" fill="${n.outline}" disabled>
      Button
    </Button>
    <Button variant="${o.black}" fill="${n.clear}" disabled>
      Button
    </Button>
  </>
)`}),t(i,{description:` Компонент может быть стилизован с помощью иконок. Они могут быть отображены слева (startIcon) и справа
          (endIcon) или одновременно с двух сторон от текста кнопки или только отображать иконку.`,code:`import { Button, IconArticleFilled24 } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Button startIcon={<IconArticleFilled24 />}>
      Button
    </Button>
    <Button variant="${o.secondary}" endIcon={<IconArticleFilled24 />}>
      Button
    </Button>
    <Button fill="${n.outline}" iconButton={<IconArticleFilled24 />}/>

  </>
)`}),t(i,{description:`Компонент может быть стилизован с помощью бэйджа. Бэйдж может отоброжаться непосредственно справа от
          лэйбла или справа от иконки (startIcon).`,code:`import { Button, Badge } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Button badge={1}>
      Button
    </Button>
    <Button variant="${o.secondary}" badge={1}>
      Button
    </Button>
    <Button fill="${n.outline}" badge={1}>
      Button
    </Button>
  </>
)`}),t(h,{argsTypes:N})]}),Number(e)==1&&t(k,{url:B}),Number(e)==2&&t(A,{variant:"Heading4",color:"primary",children:t(F,{componentName:"Button"})})]})};function d(e){return u(f,{children:[t(y,{title:"Components/Button/Info",component:c,parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/Buttons?node-id=102%3A26898&t=eLZPv4XPCGiHFviK-0"},jest:["Button.test.tsx"]}}),`
`,t($,{name:"Docs",children:t(p,{children:t(b,{})})})]})}function S(e={}){const{wrapper:r}=Object.assign({},I(),e.components);return r?t(r,{...e,children:t(d,{...e})}):d()}const g=()=>t(p,{children:t(b,{})});g.storyName="Docs";g.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const s={title:"Components/Button/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/Buttons?node-id=102%3A26898&t=eLZPv4XPCGiHFviK-0"},jest:["Button.test.tsx"]},component:c,tags:["stories-mdx"],includeStories:["docs"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:S};const Bt=["docs"];export{Bt as __namedExportsOrder,s as default,g as docs};
