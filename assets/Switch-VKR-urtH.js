import{j as e}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as p}from"./index-CpguRmgc.js";import{ag as h,ah as l,ai as S}from"./chunk-NUUEMKO5-DmRVdHm4.js";import{a0 as o,U as C}from"./index-LmI_Dv35.js";import{DecoratorDefault as u}from"./Decorator.stories-Cj5eYJIK.js";import{r as f}from"./index-DQ2WTIsS.js";import{s as n,H as k,E as i}from"./Header-DSdDcM52.js";import{F as x}from"./FigmaEmbed-CPAeeGqT.js";import{P as I}from"./Properties-BBxvoQ9o.js";import{T as w}from"./Tests-DuDJvCih.js";/* empty css               */import"./generateUUID-DDiDEiZj.js";import"./index-BUicYAu_.js";import"./index-CSbymPMC.js";import"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import"./index-ehXB0alm.js";import"./index-BKAatnfy.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-CLzAcar6.js";import"./32-sVrGXRAZ.js";import{D as g,b as j,S as b,c as T,a as v}from"./constants-BetdFfGG.js";import"./iframe-BdS8jkpQ.js";import"../sb-preview/runtime.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-oHtgdQEu.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DsjOqT4x.js";import"./index-DrFu-skq.js";import"./client-Du4Z4Qeu.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BHGErQnu.js";import"./index-BKbm6zW0.js";const c="Switch",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-42988&t=EnvIMGos3m33avAX-1",A=()=>{const[t,s]=f.useState(0),r=d=>t===d;return e.jsxs("div",{className:n.wrapper,children:[e.jsx(k,{title:c,description:"Switch - это компонент, который реализует функциональность переключателя, часто используемого в пользовательских интерфейсах для настройки параметров, таких как включение/выключение определенных функций приложения.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${c}`,figmaLink:a}),e.jsx("div",{className:n.tabs,children:e.jsxs(o,{children:[e.jsx(o.Tab,{label:"Разработчику",active:r(0),onClick:()=>s(0)}),e.jsx(o.Tab,{label:"Дизайнеру",active:r(1),onClick:()=>s(1)}),e.jsx(o.Tab,{label:"Тестирование",active:r(2),onClick:()=>s(2)})]})}),t==0&&e.jsxs(e.Fragment,{children:[e.jsx(i,{description:g,code:`import { useState } from 'react'
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
              `}),e.jsx(i,{description:j,code:`import { Switch } from '@nlmk/ds-2.0';

export default App = () => {
  return (
    <Switch
      checked={false}
      onChange={() => {}}
      disabled
    />
  )
}
              `}),e.jsx(i,{description:b,code:`import { useState } from 'react'
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
              `}),e.jsx(i,{description:T,code:`import { useState } from 'react'
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
              `}),e.jsx(I,{argsTypes:v})]}),t==1&&e.jsx(x,{url:a}),t==2&&e.jsx(w,{componentName:c})]})};function m(t){return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Components/Switch/Info",component:C,parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/DS2.0-Buttons?type=design&node-id=456-4744&mode=design&t=h4BKfYMGmmTseCcg-0"},jest:["Switch.test.tsx"]}}),`
`,e.jsx(l,{of:u}),`
`,e.jsx(S,{children:e.jsx(A,{})})]})}function de(t={}){const{wrapper:s}={...p(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(m,{...t})}):m()}export{de as default};
