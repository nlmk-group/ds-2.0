import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as p}from"./index-CbmgEnq2.js";import{am as h,an as l,ao as S}from"./chunk-NUUEMKO5-QuCeAFte.js";import{ag as o,aa as u}from"./TreeList-Du-Vk2h5.js";import{DecoratorDefault as f}from"./Decorator.stories-B1hjNCvN.js";import{r as k}from"./index-Bnop-kX6.js";import{s as n,H as C,E as i}from"./Header-Cbap2EGW.js";import{F as x}from"./FigmaEmbed-CttL3-5C.js";import{P as w}from"./Properties-BmnA7EPr.js";import{T as g}from"./Tests--X8BGCzR.js";/* empty css               */import"./generateUUID-C85qI4Bk.js";import"./index-lePHaZI9.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-Cy-FRK8M.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-cYFuzf0Y.js";import"./index-DokmLR-l.js";import"./32-D2mD275C.js";import{a as j}from"./argsTypes-BpcrUDWD.js";import"./iframe-NHsMxCVk.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BqvfYhAB.js";import"./index-B5g4YLzC.js";const c="Switch",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-42988&t=EnvIMGos3m33avAX-1",b=()=>{const[t,s]=k.useState(0),r=d=>t===d;return e.jsxs("div",{className:n.wrapper,children:[e.jsx(C,{title:c,description:"Switch - это компонент, который реализует функциональность переключателя, часто используемого в пользовательских интерфейсах для настройки параметров, таких как включение/выключение определенных функций приложения.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${c}`,figmaLink:a}),e.jsx("div",{className:n.tabs,children:e.jsxs(o,{children:[e.jsx(o.Tab,{label:"Разработчику",active:r(0),onClick:()=>s(0)}),e.jsx(o.Tab,{label:"Дизайнеру",active:r(1),onClick:()=>s(1)}),e.jsx(o.Tab,{label:"Тестирование",active:r(2),onClick:()=>s(2)})]})}),t==0&&e.jsxs(e.Fragment,{children:[e.jsx(i,{description:"Switch по умолчанию",code:`import { useState } from 'react'
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
              `}),e.jsx(i,{description:"Switch в состоянии disabled",code:`import { Switch } from '@nlmk/ds-2.0';

export default App = () => {
  return (
    <Switch
      checked={false}
      onChange={() => {}}
      disabled
    />
  )
}
              `}),e.jsx(i,{description:"Switch с текстом",code:`import { useState } from 'react'
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
              `}),e.jsx(i,{description:"Switch с иконкой",code:`import { useState } from 'react'
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
              `}),e.jsx(w,{argsTypes:j})]}),t==1&&e.jsx(x,{url:a}),t==2&&e.jsx(g,{componentName:c})]})};function m(t){return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Components/Switch/Info",component:u,parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/DS2.0-Buttons?type=design&node-id=456-4744&mode=design&t=h4BKfYMGmmTseCcg-0"},jest:["Switch.test.tsx"]}}),`
`,e.jsx(l,{of:f}),`
`,e.jsx(S,{children:e.jsx(b,{})})]})}function re(t={}){const{wrapper:s}={...p(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(m,{...t})}):m()}export{re as default};
