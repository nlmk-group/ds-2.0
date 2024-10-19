import{j as t}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as m}from"./index-CpguRmgc.js";import{ag as d,ah as p,ai as c}from"./chunk-NUUEMKO5-BfWh-sLJ.js";import{a0 as u,d as a,f as o,e as n,n as f}from"./index-CZcUCixh.js";import{DecoratorDefault as b}from"./Decorator.stories-BP3ijO2B.js";import{r as x}from"./index-DQ2WTIsS.js";import{s,H as $,E as e}from"./Header-D2gbLVua.js";import{F as g}from"./FigmaEmbed-DjqPO1nf.js";import{P as j}from"./Properties-C9DnMm3G.js";import{T as v}from"./Tests-CzPE_ao-.js";/* empty css               */import"./generateUUID-DDiDEiZj.js";import"./index-BUicYAu_.js";import"./index-CSbymPMC.js";import"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import"./index-ehXB0alm.js";import"./index-BKAatnfy.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-CLzAcar6.js";import"./32-sVrGXRAZ.js";import{a as y}from"./argsTypes-BbPX-FtS.js";import"./iframe-BUM6csBU.js";import"../sb-preview/runtime.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-oHtgdQEu.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DsjOqT4x.js";import"./index-DrFu-skq.js";import"./client-Du4Z4Qeu.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-R5jBLDn_.js";import"./index-BKbm6zW0.js";const l="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=117-712&t=HhCDuaOuzHu5rgyf-1",k=()=>{const[r,i]=x.useState(0);return t.jsxs("div",{className:s.wrapper,children:[t.jsx($,{title:"Button",description:`Компонент Button представляет собой кнопку, которую можно настроить с помощью различных параметров, таких как
          размер, иконки, знаки и стили.`,isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Button",figmaLink:l}),t.jsx("div",{className:s.tabs,children:t.jsxs(u,{children:[t.jsx(u.Tab,{label:"Разработчику",active:Number(r)===0,onClick:()=>i(0)}),t.jsx(u.Tab,{label:"Дизайнеру",active:Number(r)===1,onClick:()=>i(1)}),t.jsx(u.Tab,{label:"Тестирование",active:Number(r)===2,onClick:()=>i(2)})]})}),Number(r)==0&&t.jsxs(t.Fragment,{children:[t.jsx(e,{description:`Компонент кнопки по умолчанию в трёх размерах: обычный (m) - является размером по умолчанию, высота кнопки
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
)`}),t.jsx(j,{argsTypes:y})]}),Number(r)==1&&t.jsx(g,{url:l}),Number(r)==2&&t.jsx(v,{componentName:"Button"})]})};function B(r){return t.jsxs(t.Fragment,{children:[t.jsx(d,{title:"Components/Button/Info",component:f,parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/Buttons?node-id=102%3A26898&t=eLZPv4XPCGiHFviK-0"},jest:["Button.test.tsx"]}}),`
`,t.jsx(p,{of:b}),`
`,t.jsx(c,{children:t.jsx(k,{})})]})}function ut(r={}){const{wrapper:i}={...m(),...r.components};return i?t.jsx(i,{...r,children:t.jsx(B,{...r})}):B()}export{ut as default};
