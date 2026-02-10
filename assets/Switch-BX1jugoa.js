import{r as d,j as e,m as h,S as l,U as S}from"./iframe-BiRbIEmb.js";import{useMDXComponents as u}from"./index-DFADegm-.js";import{S as f}from"./index-C4jOF3ps.js";import{DecoratorDefault as k}from"./Decorator.stories-Cq2K7ZK_.js";import{s as n,H as C,E as o}from"./Header-BOuFM4z3.js";import{F as x}from"./FigmaEmbed-DXWxjqCs.js";import{P as w}from"./Properties-CTw5qxDW.js";import{T as j}from"./Tests-u2K_XUZf.js";/* empty css               */import{T as s}from"./index-Bc-rzIjC.js";import{a as g}from"./argsTypes-CrDRPyAw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CIk7IDPA.js";import"./clsx-B-dksMZM.js";import"./index-CDeU-sH7.js";import"./index-DDnqRqhr.js";import"./index-t6GndyZ6.js";import"./index-BLKLNOs5.js";import"./generateUUID-M57HTP56.js";import"./24-DOr3c8sx.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-CuPa9ZS_.js";import"./sizesMapping-D8QavrGc.js";import"./index-BC1L0GA_.js";import"./index-BDGZFkub.js";import"./index-BbyeJaRT.js";import"./index-17UNxjz6.js";import"./index-D4AgSARz.js";import"./32-Lr1o5q5Y.js";import"./24-BbKUo3HT.js";import"./24-Bp_HhEEU.js";import"./24-A5UfwTSh.js";import"./24-BFTkICnz.js";import"./24-CkBhKuNp.js";import"./24-99ZCpV7Q.js";import"./24-DuGNUhV0.js";import"./24-BSYcdl4j.js";import"./24-3PxmqcmV.js";import"./16-XX98Hoxr.js";import"./24-BLu740_K.js";import"./16-DUa4Gnlc.js";import"./16-CSBhMP4b.js";import"./16-DMPWLjn6.js";const c="Switch",m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-42988&t=EnvIMGos3m33avAX-1",b=()=>{const[t,i]=d.useState(0),r=p=>t===p;return e.jsxs("div",{className:n.wrapper,children:[e.jsx(C,{title:c,description:"Switch - это компонент, который реализует функциональность переключателя, часто используемого в пользовательских интерфейсах для настройки параметров, таких как включение/выключение определенных функций приложения.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${c}`,figmaLink:m}),e.jsx("div",{className:n.tabs,children:e.jsxs(s,{children:[e.jsx(s.Tab,{label:"Разработчику",active:r(0),onClick:()=>i(0)}),e.jsx(s.Tab,{label:"Дизайнеру",active:r(1),onClick:()=>i(1)}),e.jsx(s.Tab,{label:"Тестирование",active:r(2),onClick:()=>i(2)})]})}),t==0&&e.jsxs(e.Fragment,{children:[e.jsx(o,{description:"Switch по умолчанию",code:`import { useState } from 'react'
import { Switch } from '@nlmk/ds-2.0';

export default App = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <Switch
      checked={isChecked}
      onChange={setIsChecked}
    />
  )
}
              `}),e.jsx(o,{description:"Switch в состоянии disabled",code:`import { Switch } from '@nlmk/ds-2.0';

export default App = () => {
  return (
    <Switch
      checked={false}
      onChange={() => {}}
      disabled
    />
  )
}
              `}),e.jsx(o,{description:"Switch с текстом",code:`import { useState } from 'react'
import { Switch } from '@nlmk/ds-2.0';

export default App = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isSecondChecked, setIsSecondChecked] = useState(true);
  const [isThirdChecked, setIsThirdChecked] = useState(false);

  return (
    <>
      <Switch
        checked={isChecked}
        onChange={setIsChecked}
        label={'Не активный Switch'}
      />
      <Switch
        checked={isSecondChecked}
        onChange={setIsSecondChecked}
        label={'Активный Switch'}
      />
      <Switch
        checked={isThirdChecked}
        onChange={setIsThirdChecked}
        label={'Заблокированный Switch'}
        disabled
      />
    </>
  )
}
              `}),e.jsx(o,{description:"Switch с иконкой",code:`import { useState } from 'react'
import { Switch, Icon } from '@nlmk/ds-2.0';

export default App = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Switch
      checked={isChecked}
      onChange={setIsChecked}
      activeIcon={(
        <Icon
          name='IconStarOutlined16'
          containerSize={16}
          htmlColor={'var(--unique-white)'}
        />
      )}
      inactiveIcon={(
        <Icon
          name='IconStarOutlined16'
          containerSize={16}
          htmlColor={'var(--steel-60)'}
        />
      )}
    />
  )
}
              `}),e.jsx(w,{argsTypes:g})]}),t==1&&e.jsx(x,{url:m}),t==2&&e.jsx(j,{componentName:c})]})};function a(t){return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Components/Switch/Info",component:f,parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/DS2.0-Buttons?type=design&node-id=456-4744&mode=design&t=h4BKfYMGmmTseCcg-0"},jest:["Switch.test.tsx"]}}),`
`,e.jsx(l,{of:k}),`
`,e.jsx(S,{children:e.jsx(b,{})})]})}function le(t={}){const{wrapper:i}={...u(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(a,{...t})}):a()}export{le as default};
