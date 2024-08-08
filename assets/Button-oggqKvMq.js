import{j as t}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as m}from"./index-CpguRmgc.js";import"./chunk-HLWAVYOI-BpCf8szX.js";import{ae as p,af as d,ag as c}from"./index-CY6AFN3F.js";import{Q as u,d as a,f as n,e as o,B as f}from"./index-De6xVjfl.js";import{DecoratorDefault as x}from"./Decorator.stories-BP3ijO2B.js";import{r as b}from"./index-DQ2WTIsS.js";import{s,H as $,E as r}from"./Header-LklIFrOQ.js";import{F as g}from"./FigmaEmbed-oiCkEjTf.js";import{P as v}from"./Properties-DzW4XCsL.js";import{T as j}from"./Tests-BNc6kC-d.js";/* empty css               */import"./generateUUID-i9L7EtYg.js";import"./index-bLIWCpda.js";import"./index-BgyuaCKK.js";import"./index-B8KuQLf-.js";import"./index-B_c816qF.js";import"./index-DJXOh8UI.js";import"./index-DB41iIPt.js";import"./index-wNTT8eSr.js";import"./index-S3KjbRnp.js";import"./index-CpIRsoAz.js";import"./32-C4VDZHit.js";import{a as y}from"./argsTypes-C0gAscyO.js";import"./iframe-DmgkbAwY.js";import"../sb-preview/runtime.js";import"./client-ClDtLkqA.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DZkQtLdq.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BgRDMNuH.js";import"./index-0sbKER3h.js";const l="https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/DS2.0-Buttons?type=design&node-id=102-26898&mode=design&t=AyZ6cEr1XAJLQdOB-0",k=()=>{const[e,i]=b.useState(0);return t.jsxs("div",{className:s.wrapper,children:[t.jsx($,{title:"Button",description:`Компонент Button представляет собой кнопку, которую можно настроить с помощью различных параметров, таких как
          размер, иконки, знаки и стили.`,isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Button",figmaLink:l}),t.jsx("div",{className:s.tabs,children:t.jsxs(u,{children:[t.jsx(u.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>i(0)}),t.jsx(u.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>i(2)})]})}),Number(e)==0&&t.jsxs(t.Fragment,{children:[t.jsx(r,{description:`Компонент кнопки по умолчанию в трёх размерах: обычный (m) - является размером по умолчанию, высота кнопки
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
)`}),t.jsx(r,{description:`Всего представлено для кнопки семь различных стилей – primary (отображается по умолчанию), secondary,
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
)`}),t.jsx(r,{description:"Компонент кнопки может быть неактивным для пользователя (disabled).",code:`import { Button } from '@nlmk/ds-2.0';

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
)`}),t.jsx(r,{description:` Компонент может быть стилизован с помощью иконок. Они могут быть отображены слева (startIcon) и справа
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
)`}),t.jsx(r,{description:`Компонент может быть стилизован с помощью бэйджа. Бэйдж может отоброжаться непосредственно справа от
          лэйбла или справа от иконки (startIcon).`,code:`import { Button } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Button endBadge={1}>
      Button
    </Button>
    <Button variant="${o.secondary}" endBadge={1}>
      Button
    </Button>
    <Button fill="${n.outline}" endBadge={1}>
      Button
    </Button>
  </>
)`}),t.jsx(v,{argsTypes:y})]}),Number(e)==1&&t.jsx(g,{url:l}),Number(e)==2&&t.jsx(j,{componentName:"Button"})]})};function B(e){return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Components/Button/Info",component:f,parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/Buttons?node-id=102%3A26898&t=eLZPv4XPCGiHFviK-0"},jest:["Button.test.tsx"]}}),`
`,t.jsx(d,{of:x}),`
`,t.jsx(c,{children:t.jsx(k,{})})]})}function st(e={}){const{wrapper:i}={...m(),...e.components};return i?t.jsx(i,{...e,children:t.jsx(B,{...e})}):B()}export{st as default};
