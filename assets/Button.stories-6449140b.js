import{M as d,U as B}from"./chunk-HLWAVYOI-bd2949d1.js";import{a as r,f as u}from"./index-f014e98c.js";import{a,j as t,F as p}from"./clsx.m-3764cf42.js";import{r as c}from"./index-f1f749bf.js";import{s,H as l,E as e,T as g}from"./Tests-605cd25b.js";import{F as b}from"./FigmaEmbed-6f82f7c8.js";import{P as f}from"./Properties-83346e89.js";/* empty css               */import"./index-ec455f54.js";import"./index-095d5581.js";import"./index-e99519f1.js";import"./index-147655d7.js";import{T as y}from"./index-fb030d50.js";import"./index-c9e69acb.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-bc089e17.js";import{a as v}from"./argsTypes-34359838.js";import{u as x}from"./index-4fb8b842.js";import"./iframe-6c91f604.js";import"../sb-preview/runtime.js";import"./react-16-8c769108.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f8a8f14b.js";import"./get-78cac09e.js";import"./callBound-57fbc82c.js";import"./mapValues-f98d729d.js";import"./index-b75c9059.js";import"./uniq-b8c8c302.js";import"./index-356e4a49.js";import"./index-12f93142.js";import"./index-29c055d1.js";import"./.jest-test-results-108bf634.js";import"./index-c1da5c13.js";const h=()=>{const[o,n]=c.useState(0);return a("div",{className:s.wrapper,children:[t(l,{title:"Button",description:`Компонент Button представляет собой кнопку, которую можно настроить с помощью различных параметров, таких как
          размер, иконки, знаки и стили.`,isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Button",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20844&mode=design&t=awyt3Fzj1XS6th7v-1"}),t("div",{className:s.tabs,children:a(r,{children:[t(r.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>n(0)}),t(r.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>n(1)}),t(r.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>n(2)})]})}),Number(o)==0&&a(p,{children:[t(e,{description:`Компонент кнопки по умолчанию в трёх размерах: обычный (m) - является размером по умолчанию, высота кнопки
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
          grey, outline, greyOutline, text, bar.`,code:`import { Button } from '@nlmk/ds-2.0';

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
  <Button variant="bar">
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
  <Button variant="bar" disabled>
    Button
  </Button>
  </>
)`}),t(e,{description:` Компонент может быть стилизован с помощью иконок. Они могут быть отображены слева (startIcon) и справа
          (endIcon) или одновременно с двух сторон от текста кнопки или только отображать иконку.`,code:`import { Button, Icon } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Button startIcon={<Icon
      htmlColor="white"
      containerSize={24}
      name="IconArticle24"
    />}>
      Button
    </Button>
    <Button variant="secondary" endIcon={<Icon
      color="primary"
      containerSize={24}
      name="IconArticle24"
    />}>
      Button
    </Button>
    <Button variant="outline" iconButton={<Icon
      color="primary"
      containerSize={24}
      name="IconArticle24"
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
)`}),t(f,{argsTypes:v})]}),Number(o)==1&&t(b,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20844&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(o)==2&&t(y,{variant:"Heading4",color:"primary",children:t(g,{componentName:"Button"})})]})};function m(o){return a(p,{children:[t(d,{title:"Components/Button/Info",component:u,parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/Buttons?node-id=102%3A26898&t=eLZPv4XPCGiHFviK-0"},jest:["Button.test.tsx"]}}),`
`,t(B,{children:t(h,{})})]})}function w(o={}){const{wrapper:n}=Object.assign({},x(),o.components);return n?t(n,{...o,children:t(m,{...o})}):m()}const C=()=>{throw new Error("Docs-only story")};C.parameters={docsOnly:!0};const i={title:"Components/Button/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/Buttons?node-id=102%3A26898&t=eLZPv4XPCGiHFviK-0"},jest:["Button.test.tsx"]},component:u,tags:["stories-mdx"],includeStories:["__page"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:w};const it=["__page"];export{it as __namedExportsOrder,C as __page,i as default};
