import{j as t}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as m}from"./index-CpguRmgc.js";import{ag as d,ah as p,ai as c}from"./chunk-HLWAVYOI-Ui380Jyo.js";import{a0 as u,d as a,f as o,e as n,n as f}from"./index-CMhB4zJG.js";import{DecoratorDefault as b}from"./Decorator.stories-BP3ijO2B.js";import{r as x}from"./index-DQ2WTIsS.js";import{s,H as $,E as e}from"./Header-BHHYucgQ.js";import{F as g}from"./FigmaEmbed-CRHXINJv.js";import{P as v}from"./Properties-BGPqIl86.js";import{T as j}from"./Tests-CJI5C2M6.js";/* empty css               */import"./generateUUID-DB8_0F2G.js";import"./index-C04uUQ85.js";import"./index-CSbymPMC.js";import"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import"./index-ehXB0alm.js";import"./index-5BTuYEoj.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-BThqyTlu.js";import"./32-Y-7Ywnum.js";import{a as y}from"./argsTypes-Cev1dsPd.js";import"./iframe-BG7mJDGh.js";import"../sb-preview/runtime.js";import"./client-ClDtLkqA.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DZkQtLdq.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-PF5RIt03.js";import"./index-BKbm6zW0.js";const l="https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/DS2.0-Buttons?type=design&node-id=102-26898&mode=design&t=AyZ6cEr1XAJLQdOB-0",k=()=>{const[i,r]=x.useState(0);return t.jsxs("div",{className:s.wrapper,children:[t.jsx($,{title:"Button",description:`Компонент Button представляет собой кнопку, которую можно настроить с помощью различных параметров, таких как
          размер, иконки, знаки и стили.`,isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Button",figmaLink:l}),t.jsx("div",{className:s.tabs,children:t.jsxs(u,{children:[t.jsx(u.Tab,{label:"Разработчику",active:Number(i)===0,onClick:()=>r(0)}),t.jsx(u.Tab,{label:"Тестирование",active:Number(i)===2,onClick:()=>r(2)})]})}),Number(i)==0&&t.jsxs(t.Fragment,{children:[t.jsx(e,{description:`Компонент кнопки по умолчанию в трёх размерах: обычный (m) - является размером по умолчанию, высота кнопки
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
)`}),t.jsx(e,{description:`Всего представлено для кнопки пять вариантов стиля –
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
)`}),t.jsx(e,{description:"Компонент кнопки может быть неактивным для пользователя (disabled).",code:`import { Button } from '@nlmk/ds-2.0';

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
)`}),t.jsx(e,{description:` Компонент может быть стилизован с помощью иконок. Они могут быть отображены слева (startIcon) и справа
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
)`}),t.jsx(e,{description:`Компонент может быть стилизован с помощью бэйджа. Бэйдж может отоброжаться непосредственно справа от
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
)`}),t.jsx(v,{argsTypes:y})]}),Number(i)==1&&t.jsx(g,{url:l}),Number(i)==2&&t.jsx(j,{componentName:"Button"})]})};function B(i){return t.jsxs(t.Fragment,{children:[t.jsx(d,{title:"Components/Button/Info",component:f,parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/Buttons?node-id=102%3A26898&t=eLZPv4XPCGiHFviK-0"},jest:["Button.test.tsx"]}}),`
`,t.jsx(p,{of:b}),`
`,t.jsx(c,{children:t.jsx(k,{})})]})}function at(i={}){const{wrapper:r}={...m(),...i.components};return r?t.jsx(r,{...i,children:t.jsx(B,{...i})}):B()}export{at as default};
