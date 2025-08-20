import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as p}from"./index-D2yTtfOz.js";import"./index-BnEi3PKH.js";import{af as o,a9 as h}from"./TreeList-CKujmJpy.js";import{DecoratorDefault as l}from"./Decorator.stories-D7iJJ_iz.js";import{r as S}from"./index-BcJSXhQi.js";import{s as n,H as u,E as i}from"./Header-W0qZdeSK.js";import{F as f}from"./FigmaEmbed-DxGAIiFc.js";import{P as k}from"./Properties-Bvh17lDI.js";import{T as C}from"./Tests-CyRfR22c.js";/* empty css               */import"./generateUUID-Cm0X4XRy.js";import"./index-cHpEh_mw.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-CQem5UP1.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-bO57duG5.js";import"./index-C5rKoyII.js";import"./32-CkUgnIrf.js";import{a as x}from"./argsTypes-DcUm-_Vs.js";import{c as w,S as j,U as g}from"./DocsRenderer-CFRXHY34-Bm_YSRyE.js";import"./index-ChsGqxH_.js";import"./preview-DJTt2ryF.js";import"./iframe-DlyCZmm1.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-DF9iIiuz.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const c="Switch",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-42988&t=EnvIMGos3m33avAX-1",b=()=>{const[t,s]=S.useState(0),r=d=>t===d;return e.jsxs("div",{className:n.wrapper,children:[e.jsx(u,{title:c,description:"Switch - это компонент, который реализует функциональность переключателя, часто используемого в пользовательских интерфейсах для настройки параметров, таких как включение/выключение определенных функций приложения.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${c}`,figmaLink:a}),e.jsx("div",{className:n.tabs,children:e.jsxs(o,{children:[e.jsx(o.Tab,{label:"Разработчику",active:r(0),onClick:()=>s(0)}),e.jsx(o.Tab,{label:"Дизайнеру",active:r(1),onClick:()=>s(1)}),e.jsx(o.Tab,{label:"Тестирование",active:r(2),onClick:()=>s(2)})]})}),t==0&&e.jsxs(e.Fragment,{children:[e.jsx(i,{description:"Switch по умолчанию",code:`import { useState } from 'react'
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
              `}),e.jsx(k,{argsTypes:x})]}),t==1&&e.jsx(f,{url:a}),t==2&&e.jsx(C,{componentName:c})]})};function m(t){return e.jsxs(e.Fragment,{children:[e.jsx(w,{title:"Components/Switch/Info",component:h,parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/DS2.0-Buttons?type=design&node-id=456-4744&mode=design&t=h4BKfYMGmmTseCcg-0"},jest:["Switch.test.tsx"]}}),`
`,e.jsx(j,{of:l}),`
`,e.jsx(g,{children:e.jsx(b,{})})]})}function ae(t={}){const{wrapper:s}={...p(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(m,{...t})}):m()}export{ae as default};
