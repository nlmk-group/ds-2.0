import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as n}from"./index-D2yTtfOz.js";import"./index-BY8OIdGF.js";import{af as c,ak as m}from"./TreeList-t_gw7Ie1.js";import{DecoratorDefault as l}from"./Decorator.stories-D7iJJ_iz.js";import{r as d}from"./index-BcJSXhQi.js";import{s,H as p,E as r}from"./Header-BLEe49dE.js";import{F as h}from"./FigmaEmbed-C1uE_9Wa.js";import{P as k}from"./Properties-BdkLrwqP.js";import{T as b}from"./Tests-BAbFQrY1.js";/* empty css               */import"./generateUUID-BB0QUzbi.js";import"./index-B_7MXUVi.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-CqWNtYbo.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-CBc2nLPm.js";import"./index-C5rKoyII.js";import"./32-BRZfqcB0.js";import{a as x}from"./argsTypes-BVia0dah.js";import{c as C,S as u,U as g}from"./DocsRenderer-CFRXHY34-DU2Xh_Kd.js";import"./index-ChsGqxH_.js";import"./preview-Dtq5IoV8.js";import"./iframe-wFgOxPBG.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-Dc3oy9un.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const i="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-93353",f=()=>{const[t,o]=d.useState(0);return e.jsxs("div",{className:s.wrapper,children:[e.jsx(p,{title:"Checkbox",description:"Компонент Checkbox является элементом пользовательского интерфейса, который позволяет пользователю взаимодействовать с формой, выбирая или снимая выбор с определённых опций. ",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Checkbox",figmaLink:i}),e.jsx("div",{className:s.tabs,children:e.jsxs(c,{children:[e.jsx(c.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>o(0)}),e.jsx(c.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>o(1)}),e.jsx(c.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>o(2)})]})}),Number(t)==0&&e.jsxs(e.Fragment,{children:[e.jsx(r,{height:150,description:"Компонент checkbox по умолчанию.",code:`import { Checkbox } from '@nlmk/ds-2.0';

export default  App = () => (
  <Checkbox onChange={() => console.log('Changed!')} />
)`}),e.jsx(r,{description:"Актуальные состояния компонента checkbox.",code:`import { Checkbox } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Checkbox />
    <Checkbox color="error"/>
    <Checkbox color="warning"/>
    <Checkbox color="success"/>
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
)}`}),e.jsx(k,{argsTypes:x})]}),Number(t)==1&&e.jsx(h,{url:i}),Number(t)==2&&e.jsx(b,{componentName:"Checkbox"})]})};function a(t){return e.jsxs(e.Fragment,{children:[e.jsx(C,{title:"Components/Checkbox/Info",component:m,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-93353"},jest:["Checkbox.test.tsx"]}}),`
`,e.jsx(u,{of:l}),`
`,e.jsx(g,{children:e.jsx(f,{})})]})}function se(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(a,{...t})}):a()}export{se as default};
