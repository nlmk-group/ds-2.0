import{r as d,j as e,f as h,S as l,U as S}from"./iframe-zk5xXBtA.js";import{useMDXComponents as u}from"./index-CSMoqiIu.js";import{S as f}from"./index-DNfPJ41q.js";import{DecoratorDefault as k}from"./Decorator.stories-XjMTlGWF.js";import{s as n,H as C,E as o}from"./Header-BMqOixcD.js";import{F as x}from"./FigmaEmbed-Bh-YhisY.js";import{P as w}from"./Properties-BH32KsQA.js";import{T as j}from"./Tests-BiRJAIxZ.js";/* empty css               */import{T as s}from"./index-CGZqhooT.js";import{a as g}from"./argsTypes-BJSrcfDt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-9BCGLlQQ.js";import"./clsx-B-dksMZM.js";import"./index-D9zx9C-F.js";import"./index-6T6AONQH.js";import"./index-DjSUGs5w.js";import"./index-CBNcLMKv.js";import"./generateUUID-M57HTP56.js";import"./24-BkbQ4VQu.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-B9FTsAqd.js";import"./sizesMapping-D8QavrGc.js";import"./index-Is2qauMo.js";import"./index-CTfBpVCI.js";import"./index-DirQniBD.js";import"./index-cDYWclvM.js";import"./index-1zUxKm4P.js";import"./32-D1ipBNS6.js";import"./24-BU8fW5nS.js";import"./24-CsxFkFpg.js";import"./24-Cg1MPBHI.js";import"./24-BGS-MQmY.js";import"./24-2PvTlRtj.js";import"./24-DyWGmQTd.js";import"./24-DrF3F4Gh.js";import"./24-DXO8B9MT.js";import"./24-CHUQ235a.js";import"./16-D0071456.js";import"./24-CzaQJmC-.js";import"./16-D1MigzhA.js";import"./16-J9oiRdzb.js";import"./16-qJIrzOil.js";const c="Switch",m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-42988&t=EnvIMGos3m33avAX-1",b=()=>{const[t,i]=d.useState(0),r=p=>t===p;return e.jsxs("div",{className:n.wrapper,children:[e.jsx(C,{title:c,description:"Switch - это компонент, который реализует функциональность переключателя, часто используемого в пользовательских интерфейсах для настройки параметров, таких как включение/выключение определенных функций приложения.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${c}`,figmaLink:m}),e.jsx("div",{className:n.tabs,children:e.jsxs(s,{children:[e.jsx(s.Tab,{label:"Разработчику",active:r(0),onClick:()=>i(0)}),e.jsx(s.Tab,{label:"Дизайнеру",active:r(1),onClick:()=>i(1)}),e.jsx(s.Tab,{label:"Тестирование",active:r(2),onClick:()=>i(2)})]})}),t==0&&e.jsxs(e.Fragment,{children:[e.jsx(o,{description:"Switch по умолчанию",code:`import { useState } from 'react'
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
