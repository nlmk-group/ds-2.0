import{U as u,M as l,e as g}from"./chunk-HLWAVYOI-DxLekDIW.js";import{J as r,d as p}from"./index-CMWTVP_7.js";import{a as i,j as t,F as d}from"./clsx.m-CcuEzMhP.js";import{r as y}from"./index-CBqU2yxZ.js";import{s,H as b,E as e,T as f}from"./Tests-CaK27JIY.js";import{F as v}from"./FigmaEmbed-CGacdJwF.js";import{P as x}from"./Properties-BLy1Q2m5.js";/* empty css               */import"./index-ehJh3wQv.js";import"./index-D-9trSFj.js";import"./index-DjeAniHW.js";import"./index-fOOxcv8w.js";import{T as h}from"./index-fbTu1Hcf.js";import"./index-BhQGQSXE.js";import"./index-hvdSV1r-.js";import"./index-BQVY97ak.js";import"./index-B5tj7Glx.js";import"./index-DyFb8FNg.js";import"./32-UdY5WLK9.js";import{a as w}from"./argsTypes-Gg1QoiLF.js";import{useMDXComponents as F}from"./index-DI5IigMn.js";import"./iframe-wD_hPM--.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./chunk-EIRT5I3Z-DXochb4c.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-DhLK1VD5.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-B7hcL8-B.js";import"./index-BO3pQ7ot.js";const c=()=>{const[o,n]=y.useState(0);return i("div",{className:s.wrapper,children:[t(b,{title:"Button",description:`Компонент Button представляет собой кнопку, которую можно настроить с помощью различных параметров, таких как
          размер, иконки, знаки и стили.`,isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Button",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20844&mode=design&t=awyt3Fzj1XS6th7v-1"}),t("div",{className:s.tabs,children:i(r,{children:[t(r.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>n(0)}),t(r.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>n(1)}),t(r.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>n(2)})]})}),Number(o)==0&&i(d,{children:[t(e,{description:`Компонент кнопки по умолчанию в трёх размерах: обычный (m) - является размером по умолчанию, высота кнопки
          в таком случае составляет 40px, компактный (s) - высота такой кнопки составляет 32px и экстра компактный
          (xs) с высотой в 28px.`,code:`import { Button } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
  <Button>
    Button
  </Button>
  <Button size="s">
    Button
  </Button>
  <Button size="xs">
    Button
  </Button>
  </>
)`}),t(e,{description:`Всего представлено для кнопки семь различных стилей – primary (отображается по умолчанию), secondary,
          grey, outline, greyOutline, text.`,code:`import { Button } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Button>
      Button
    </Button>
    <Button variant="secondary">
      Button
    </Button>
    <Button variant="grey">
      Button
    </Button>
    <Button variant="outline">
    Button
  </Button>
  <Button variant="greyOutline">
    Button
  </Button>
  <Button variant="text">
    Button
  </Button>
  </>
)`}),t(e,{description:"Компонент кнопки может быть неактивным для пользователя (disabled).",code:`import { Button } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Button disabled>
      Button
    </Button>
    <Button variant="secondary" disabled>
      Button
    </Button>
    <Button variant="grey" disabled>
      Button
    </Button>
    <Button variant="outline" disabled>
    Button
  </Button>
  <Button variant="greyOutline" disabled>
    Button
  </Button>
  <Button variant="text" disabled>
    Button
  </Button>
  </>
)`}),t(e,{description:` Компонент может быть стилизован с помощью иконок. Они могут быть отображены слева (startIcon) и справа
          (endIcon) или одновременно с двух сторон от текста кнопки или только отображать иконку.`,code:`import { Button, IconArticleFilled24 } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Button startIcon={<IconArticleFilled24
      htmlColor="white"
    />}>
      Button
    </Button>
    <Button variant="secondary" endIcon={<IconArticleFilled24
      color="primary"
    />}>
      Button
    </Button>
    <Button variant="outline" iconButton={<IconArticleFilled24
      color="primary"
    />}/>

  </>
)`}),t(e,{description:`Компонент может быть стилизован с помощью бэйджа. Бэйдж может отоброжаться непосредственно справа от
          лэйбла или справа от иконки (startIcon).`,code:`import { Button, Badge } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
  <Button badge={<Badge color="secondary">1</Badge>}>
  Button
</Button>
<Button variant="secondary" badge={<Badge color="primary">1</Badge>}>
  Button
</Button>
<Button variant="outline" badge={<Badge color="primary">1</Badge>}>
  Button
</Button>
  </>
)`}),t(x,{argsTypes:w})]}),Number(o)==1&&t(v,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20844&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(o)==2&&t(h,{variant:"Heading4",color:"primary",children:t(f,{componentName:"Button"})})]})};function m(o){return i(d,{children:[t(l,{title:"Components/Button/Info",component:p,parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/Buttons?node-id=102%3A26898&t=eLZPv4XPCGiHFviK-0"},jest:["Button.test.tsx"]}}),`
`,t(g,{name:"Docs",children:t(u,{children:t(c,{})})})]})}function N(o={}){const{wrapper:n}=Object.assign({},F(),o.components);return n?t(n,{...o,children:t(m,{...o})}):m()}const B=()=>t(u,{children:t(c,{})});B.storyName="Docs";B.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const a={title:"Components/Button/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/Buttons?node-id=102%3A26898&t=eLZPv4XPCGiHFviK-0"},jest:["Button.test.tsx"]},component:p,tags:["stories-mdx"],includeStories:["docs"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:N};const st=["docs"];export{st as __namedExportsOrder,a as default,B as docs};
