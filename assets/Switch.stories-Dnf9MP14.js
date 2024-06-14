import{U as h,M as u,e as g}from"./chunk-HLWAVYOI-D_Dl5wLY.js";import{L as s,z as l}from"./index-CfZTnDhX.js";import{a as r,j as e,F as S}from"./jsx-runtime-2xDJh5tt.js";import{r as w}from"./index-CBqU2yxZ.js";import{s as m,H as I,E as i,T as b}from"./Tests-DHTVSmWv.js";import{F as T}from"./FigmaEmbed-YFEQg_l-.js";import{P as y}from"./Properties-DtaLgUr8.js";/* empty css               */import"./generateUUID-xFqDjoto.js";import"./index-qrvtYV6q.js";import"./index-CTkD9j2t.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import{T as M}from"./index-nWYpQihe.js";import"./index-C6sJWxXv.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-CBS9NtKm.js";import"./32-DtWm84R6.js";import{D as v,b as x,S as A,c as D,a as F}from"./constants-BetdFfGG.js";import{useMDXComponents as N}from"./index-DI5IigMn.js";import"./iframe-ezH54IIy.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-rQZ06u7F.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./clsx.m-CH7BE6MN.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-B6pRd-5M.js";import"./index-CMH8wQUv.js";const n="Switch",d="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A29075&mode=design&t=awyt3Fzj1XS6th7v-1",C=()=>{const[t,o]=w.useState(0),a=k=>t===k;return r("div",{className:m.wrapper,children:[e(I,{title:n,description:"Switch - это компонент, который реализует функциональность переключателя, часто используемого в пользовательских интерфейсах для настройки параметров, таких как включение/выключение определенных функций приложения.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${n}`,figmaLink:d}),e("div",{className:m.tabs,children:r(s,{children:[e(s.Tab,{label:"Разработчику",active:a(0),onClick:()=>o(0)}),e(s.Tab,{label:"Дизайнеру",active:a(1),onClick:()=>o(1)}),e(s.Tab,{label:"Тестирование",active:a(2),onClick:()=>o(2)})]})}),t==0&&r(S,{children:[e(i,{description:v,code:`import { useState } from 'react'
import { Switch } from '@nlmk/ds-2.0';

export default App = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <Switch
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
    />
  )
}
              `}),e(i,{description:x,code:`import { Switch } from '@nlmk/ds-2.0';

export default App = () => {
  return (
    <Switch
      checked={false}
      onChange={() => {}}
      disabled
    />
  )
}
              `}),e(i,{description:A,code:`import { useState } from 'react'
import { Switch } from '@nlmk/ds-2.0';

export default App = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isSecondChecked, setIsSecondChecked] = useState(true);
  const [isThirdChecked, setIsThirdChecked] = useState(false);

  return (
    <>
      <Switch
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
        label={'Не активный Switch'}
      />
      <Switch
        checked={isSecondChecked}
        onChange={() => {
          setIsSecondChecked(!isSecondChecked);
        }}
        label={'Активный Switch'}
      />
      <Switch
        checked={isThirdChecked}
        onChange={() => {
          setIsThirdChecked(!isThirdChecked);
        }}
        label={'Заблокированный Switch'}
        disabled
      />
    </>
  )
}
              `}),e(i,{description:D,code:`import { useState } from 'react'
import { Switch, Icon } from '@nlmk/ds-2.0';

export default App = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Switch
      checked={isChecked}
      onChange={() => {
        setIsChecked(!isChecked);
      }}
      activeIcon={(
        <Icon
          name='IconMetallalomScrapFilled16'
          containerSize={16}
          htmlColor={'var(--text-grey-100)'}
        />
      )}
      inactiveIcon={(
        <Icon
          name='IconMetallalomScrap16'
          containerSize={16}
          htmlColor={'var(--primary-blue-600)'}
        />
      )}
    />
  )
}
              `}),e(y,{argsTypes:F})]}),t==1&&e(T,{url:d}),t==2&&e(M,{variant:"Heading4",color:"primary",children:e(b,{componentName:n})})]})};function p(t){return r(S,{children:[e(u,{title:"Components/Switch/Info",component:l,parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/DS2.0-Buttons?type=design&node-id=456-4744&mode=design&t=h4BKfYMGmmTseCcg-0"},jest:["Switch.test.tsx"]}}),`
`,e(g,{name:"Docs",children:e(h,{children:e(C,{})})})]})}function L(t={}){const{wrapper:o}=Object.assign({},N(),t.components);return o?e(o,{...t,children:e(p,{...t})}):p()}const f=()=>e(h,{children:e(C,{})});f.storyName="Docs";f.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const c={title:"Components/Switch/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/DS2.0-Buttons?type=design&node-id=456-4744&mode=design&t=h4BKfYMGmmTseCcg-0"},jest:["Switch.test.tsx"]},component:l,tags:["stories-mdx"],includeStories:["docs"]};c.parameters=c.parameters||{};c.parameters.docs={...c.parameters.docs||{},page:L};const Ce=["docs"];export{Ce as __namedExportsOrder,c as default,f as docs};
