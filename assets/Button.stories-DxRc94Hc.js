import{U as p,M as y,e as $}from"./chunk-HLWAVYOI-D1fLzzdK.js";import{J as a,E as l,e as n,d as o,B as c}from"./index-VLfweUxF.js";import{a as u,j as t,F as f}from"./clsx.m-CcuEzMhP.js";import{r as v}from"./index-CBqU2yxZ.js";import{s as m,H as x,E as i,T as F}from"./Tests-CShFLtrb.js";import{F as k}from"./FigmaEmbed-DCpTw2G9.js";import{P as h}from"./Properties-Ci0YEq_Y.js";/* empty css               */import"./generateUUID-BkPc_NdJ.js";import"./index-SiU_55iz.js";import"./index-Dz0_KCIo.js";import{T as A}from"./index-fbTu1Hcf.js";import"./index-CpJBQeN-.js";import"./index-hvdSV1r-.js";import"./index-BQVY97ak.js";import"./index-B5tj7Glx.js";import"./index-14g2znra.js";import"./32-BmhDzcbC.js";import{a as N}from"./argsTypes-BON6Pgpf.js";import{useMDXComponents as I}from"./index-DI5IigMn.js";import"./iframe-DpfJ_wxM.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./chunk-EIRT5I3Z-DXochb4c.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-CImMyoKX.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BdQ446li.js";import"./index-BO3pQ7ot.js";const B="https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/DS2.0-Buttons?type=design&node-id=102-26898&mode=design&t=AyZ6cEr1XAJLQdOB-0",b=()=>{const[e,r]=v.useState(0);return u("div",{className:m.wrapper,children:[t(x,{title:"Button",description:`Компонент Button представляет собой кнопку, которую можно настроить с помощью различных параметров, таких как
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
`,t($,{name:"Docs",children:t(p,{children:t(b,{})})})]})}function S(e={}){const{wrapper:r}=Object.assign({},I(),e.components);return r?t(r,{...e,children:t(d,{...e})}):d()}const g=()=>t(p,{children:t(b,{})});g.storyName="Docs";g.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const s={title:"Components/Button/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/Buttons?node-id=102%3A26898&t=eLZPv4XPCGiHFviK-0"},jest:["Button.test.tsx"]},component:c,tags:["stories-mdx"],includeStories:["docs"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:S};const mt=["docs"];export{mt as __namedExportsOrder,s as default,g as docs};
