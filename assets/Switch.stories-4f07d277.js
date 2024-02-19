import{M as C,U as f}from"./chunk-HLWAVYOI-bd2949d1.js";import{a as s,a3 as h}from"./index-f014e98c.js";import{a as r,j as e,F as l}from"./clsx.m-3764cf42.js";import{r as k}from"./index-f1f749bf.js";import{s as m,H as g,E as i,T as u}from"./Tests-605cd25b.js";import{F as w}from"./FigmaEmbed-6f82f7c8.js";import{P as I}from"./Properties-83346e89.js";/* empty css               */import"./index-ec455f54.js";import"./index-095d5581.js";import"./index-e99519f1.js";import"./index-147655d7.js";import{T as b}from"./index-fb030d50.js";import"./index-c9e69acb.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-bc089e17.js";import{D as T,a as y,S as M,b as _,c as v}from"./constants-17052e8f.js";import{u as x}from"./index-4fb8b842.js";import"./iframe-6c91f604.js";import"../sb-preview/runtime.js";import"./react-16-8c769108.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f8a8f14b.js";import"./get-78cac09e.js";import"./callBound-57fbc82c.js";import"./mapValues-f98d729d.js";import"./index-b75c9059.js";import"./uniq-b8c8c302.js";import"./index-356e4a49.js";import"./index-12f93142.js";import"./index-29c055d1.js";import"./.jest-test-results-108bf634.js";import"./index-c1da5c13.js";const n="Switch",d="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A29075&mode=design&t=awyt3Fzj1XS6th7v-1",A=()=>{const[t,o]=k.useState(0),a=S=>t===S;return r("div",{className:m.wrapper,children:[e(g,{title:n,description:"Switch - это компонент, который реализует функциональность переключателя, часто используемого в пользовательских интерфейсах для настройки параметров, таких как включение/выключение определенных функций приложения.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${n}`,figmaLink:d}),e("div",{className:m.tabs,children:r(s,{children:[e(s.Tab,{label:"Разработчику",active:a(0),onClick:()=>o(0)}),e(s.Tab,{label:"Дизайнеру",active:a(1),onClick:()=>o(1)}),e(s.Tab,{label:"Тестирование",active:a(2),onClick:()=>o(2)})]})}),t==0&&r(l,{children:[e(i,{description:T,code:`import { useState } from 'react'
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
              `}),e(i,{description:y,code:`import { Switch } from '@nlmk/ds-2.0';

export default App = () => {
  return (
    <Switch
      checked={false}
      onChange={() => {}}
      disabled
    />
  )
}
              `}),e(i,{description:M,code:`import { useState } from 'react'
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
              `}),e(i,{description:_,code:`import { useState } from 'react'
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
              `}),e(I,{argsTypes:v})]}),t==1&&e(w,{url:d}),t==2&&e(b,{variant:"Heading4",color:"primary",children:e(u,{componentName:n})})]})};function p(t){return r(l,{children:[e(C,{title:"Components/Switch/Info",component:h,parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/DS2.0-Buttons?type=design&node-id=456-4744&mode=design&t=h4BKfYMGmmTseCcg-0"},jest:["Switch.test.tsx"]}}),`
`,e(f,{children:e(A,{})})]})}function F(t={}){const{wrapper:o}=Object.assign({},x(),t.components);return o?e(o,{...t,children:e(p,{...t})}):p()}const D=()=>{throw new Error("Docs-only story")};D.parameters={docsOnly:!0};const c={title:"Components/Switch/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/DS2.0-Buttons?type=design&node-id=456-4744&mode=design&t=h4BKfYMGmmTseCcg-0"},jest:["Switch.test.tsx"]},component:h,tags:["stories-mdx"],includeStories:["__page"]};c.parameters=c.parameters||{};c.parameters.docs={...c.parameters.docs||{},page:F};const Se=["__page"];export{Se as __namedExportsOrder,D as __page,c as default};
