import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as m}from"./index-CbmgEnq2.js";import{am as d,an as p,ao as c}from"./chunk-NUUEMKO5-CSFAqZJK.js";import{ad as u,e as a,g as o,f as n,B as f}from"./index-xrS_0udq.js";import{DecoratorDefault as b}from"./Decorator.stories-B1hjNCvN.js";import{r as x}from"./index-Bnop-kX6.js";import{s,H as $,E as i}from"./Header-CXHxv9Ba.js";import{F as g}from"./FigmaEmbed-CxEiM5qP.js";import{P as j}from"./Properties-hjiScgGC.js";import{T as v}from"./Tests-Bl6b2xe7.js";/* empty css               */import"./generateUUID-B22BSTI4.js";import"./index-DJJ0U8Tt.js";import"./index-CGzvFf0p.js";import"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import"./index-qC5wYQgy.js";import"./index-BuA7rasS.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-BAfSYk8P.js";import"./index-Br4tp0-d.js";import"./32-DCTol8-9.js";import{a as y}from"./argsTypes-CqZVluId.js";import"./iframe-DV-P8AuF.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BXEf8Yvk.js";import"./index-CT8gBKwQ.js";const l="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=117-712&t=HhCDuaOuzHu5rgyf-1",k=()=>{const[r,e]=x.useState(0);return t.jsxs("div",{className:s.wrapper,children:[t.jsx($,{title:"Button",description:`Компонент Button представляет собой кнопку, которую можно настроить с помощью различных параметров, таких как
          размер, иконки, знаки и стили.`,isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Button",figmaLink:l}),t.jsx("div",{className:s.tabs,children:t.jsxs(u,{children:[t.jsx(u.Tab,{label:"Разработчику",active:Number(r)===0,onClick:()=>e(0)}),t.jsx(u.Tab,{label:"Дизайнеру",active:Number(r)===1,onClick:()=>e(1)}),t.jsx(u.Tab,{label:"Тестирование",active:Number(r)===2,onClick:()=>e(2)})]})}),Number(r)==0&&t.jsxs(t.Fragment,{children:[t.jsx(i,{description:`Компонент кнопки по умолчанию в трёх размерах: обычный (m) - является размером по умолчанию, высота кнопки
          в таком случае составляет 40px, компактный (s) - высота такой кнопки составляет 32px и экстра компактный
          (xs) с высотой в 28px.`,code:`import { Button } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
  <Button>
    Button
  </Button>
  <Button size="${a.s}">
    Button
  </Button>
  <Button size="${a.xs}">
    Button
  </Button>
  </>
)`}),t.jsx(i,{description:`Всего представлено для кнопки пять вариантов стиля –
            primary (отображается по умолчанию), secondary, grey, black, info.
            Для каждого варианта до шести варинтов заливки: solid, outline, clear, success, warning, error`,code:`import { Button } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Button>
      Button
    </Button>
    <Button fill="${o.outline}">
      Button
    </Button>
    <Button fill="${o.clear}">
      Button
    </Button>
     <Button fill="${o.success}">
      Button
    </Button>
    <Button fill="${o.warning}">
      Button
    </Button>
    <Button fill="${o.error}">
      Button
    </Button>
    <Button variant="${n.secondary}">
      Button
    </Button>
    <Button variant="${n.grey}">
      Button
    </Button>
    <Button variant="${n.grey}" fill="${o.outline}">
      Button
    </Button>
    <Button variant="${n.grey}" fill="${o.clear}">
      Button
    </Button>
    <Button variant="${n.black}">
      Button
    </Button>
    <Button variant="${n.black}" fill="${o.outline}">
      Button
    </Button>
    <Button variant="${n.black}" fill="${o.clear}">
      Button
    </Button>
  </>
)`}),t.jsx(i,{description:"Компонент кнопки может быть неактивным для пользователя (disabled).",code:`import { Button } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Button disabled>
      Button
    </Button>
    <Button fill="${o.outline}" disabled>
      Button
    </Button>
    <Button fill="${o.clear}" disabled>
      Button
    </Button>
    <Button variant="${n.secondary}" disabled>
      Button
    </Button>
    <Button variant="${n.grey}" disabled>
      Button
    </Button>
    <Button variant="${n.grey}" fill="${o.outline}" disabled>
      Button
    </Button>
    <Button variant="${n.grey}" fill="${o.clear}" disabled>
      Button
    </Button>
    <Button variant="${n.black}" disabled>
      Button
    </Button>
    <Button variant="${n.black}" fill="${o.outline}" disabled>
      Button
    </Button>
    <Button variant="${n.black}" fill="${o.clear}" disabled>
      Button
    </Button>
  </>
)`}),t.jsx(i,{description:` Компонент может быть стилизован с помощью иконок. Они могут быть отображены слева (startIcon) и справа
          (endIcon) или одновременно с двух сторон от текста кнопки или только отображать иконку.`,code:`import { Button, IconArticleFilled24 } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Button startIcon={<IconArticleFilled24 />}>
      Button
    </Button>
    <Button variant="${n.secondary}" endIcon={<IconArticleFilled24 />}>
      Button
    </Button>
    <Button fill="${o.outline}" iconButton={<IconArticleFilled24 />}/>

  </>
)`}),t.jsx(i,{description:`Компонент может быть стилизован с помощью бэйджа. Бэйдж может отоброжаться непосредственно справа от
          лэйбла или справа от иконки (startIcon).`,code:`import { Button } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Button endBadge={1}>
      Button
    </Button>
    <Button variant="${n.secondary}" endBadge={1}>
      Button
    </Button>
    <Button fill="${o.outline}" endBadge={1}>
      Button
    </Button>
  </>
)`}),t.jsx(j,{argsTypes:y})]}),Number(r)==1&&t.jsx(g,{url:l}),Number(r)==2&&t.jsx(v,{componentName:"Button"})]})};function B(r){return t.jsxs(t.Fragment,{children:[t.jsx(d,{title:"Components/Button/Info",component:f,parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/Buttons?node-id=102%3A26898&t=eLZPv4XPCGiHFviK-0"},jest:["Button.test.tsx"]}}),`
`,t.jsx(p,{of:b}),`
`,t.jsx(c,{children:t.jsx(k,{})})]})}function it(r={}){const{wrapper:e}={...m(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(B,{...r})}):B()}export{it as default};
