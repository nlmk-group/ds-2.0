import{j as e}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as n}from"./index-CpguRmgc.js";import{ag as m,ah as l,ai as d}from"./chunk-NUUEMKO5-DmRVdHm4.js";import{a0 as c,a6 as h}from"./index-LmI_Dv35.js";import{DecoratorDefault as p}from"./Decorator.stories-Cj5eYJIK.js";import{r as k}from"./index-DQ2WTIsS.js";import{s,H as b,E as r}from"./Header-DSdDcM52.js";import{F as x}from"./FigmaEmbed-CPAeeGqT.js";import{P as C}from"./Properties-BBxvoQ9o.js";import{T as u}from"./Tests-DuDJvCih.js";/* empty css               */import"./generateUUID-DDiDEiZj.js";import"./index-BUicYAu_.js";import"./index-CSbymPMC.js";import"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import"./index-ehXB0alm.js";import"./index-BKAatnfy.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-CLzAcar6.js";import"./32-sVrGXRAZ.js";import{a as g}from"./argsTypes-CUJVptIF.js";import"./iframe-BdS8jkpQ.js";import"../sb-preview/runtime.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-oHtgdQEu.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DsjOqT4x.js";import"./index-DrFu-skq.js";import"./client-Du4Z4Qeu.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BHGErQnu.js";import"./index-BKbm6zW0.js";const a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-93353&t=HhCDuaOuzHu5rgyf-1",f=()=>{const[t,o]=k.useState(0);return e.jsxs("div",{className:s.wrapper,children:[e.jsx(b,{title:"Checkbox",description:"Компонент Checkbox является элементом пользовательского интерфейса, который позволяет пользователю взаимодействовать с формой, выбирая или снимая выбор с определённых опций. ",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Checkbox",figmaLink:a}),e.jsx("div",{className:s.tabs,children:e.jsxs(c,{children:[e.jsx(c.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>o(0)}),e.jsx(c.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>o(1)}),e.jsx(c.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>o(2)})]})}),Number(t)==0&&e.jsxs(e.Fragment,{children:[e.jsx(r,{height:150,description:"Компонент checkbox по умолчанию.",code:`import { Checkbox } from '@nlmk/ds-2.0';

export default  App = () => (
  <Checkbox onChange={() => console.log('Changed!')} />
)`}),e.jsx(r,{description:"Актуальные состояния компонента checkbox.",code:`import { Checkbox } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Checkbox />
    <Checkbox color="error"/>
  </>
)`}),e.jsx(r,{description:"Checkbox с установленными флагами для параметров checked, disabled, multiple и с текстом label.",code:`import { Checkbox } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Checkbox label="default" />
    <Checkbox label="disabled" disabled />
    <Checkbox label="multiple" multiple checked />
    <Checkbox label="multiple disabled" disabled multiple checked />
  </>
)`}),e.jsx(r,{description:"Ниже представлен checkbox с параметром multiple, который меняет свое состояние в зависимости от количества выбранных дочерних элементов (работает только при наличии пропса checked).",code:`import { useState } from 'react';
import { Checkbox } from '@nlmk/ds-2.0';

export default  App = () => {
  const [checked, setChecked] = useState([true, false]);

  const handleChange1 = (event: { target: { checked: boolean } }) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: { target: { checked: boolean } }) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: { target: { checked: boolean } }) => {
    setChecked([checked[0], event.target.checked]);
  };

  const isCheckedMultiple = checked[0] !== checked[1];

  return (
            <>
              <Checkbox
                label="Parent"
                checked={isCheckedMultiple || (checked[0] && checked[1])}
                multiple={isCheckedMultiple}
                onChange={handleChange1}
              />
              <Checkbox
                label="Child 1"
                checked={checked[0]}
                onChange={handleChange2}
              />
              <Checkbox
                label="Child 2"
                checked={checked[1]}
                onChange={handleChange3}
              />
    </>
)}`}),e.jsx(C,{argsTypes:g})]}),Number(t)==1&&e.jsx(x,{url:a}),Number(t)==2&&e.jsx(u,{componentName:"Checkbox"})]})};function i(t){return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Components/Checkbox/Info",component:h,parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/Buttons?node-id=456%3A4682&t=ZFGPW4icr1XmCIFw-0"},jest:["Checkbox.test.tsx"]}}),`
`,e.jsx(l,{of:p}),`
`,e.jsx(d,{children:e.jsx(f,{})})]})}function ce(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i()}export{ce as default};
