import{M as n,U as c}from"./chunk-HLWAVYOI-bd2949d1.js";import{a as r}from"./index-f014e98c.js";import{a as i,j as t,F as p}from"./clsx.m-3764cf42.js";import{r as b}from"./index-f1f749bf.js";import{s,H as T,E as l,T as d}from"./Tests-605cd25b.js";import{F as y}from"./FigmaEmbed-6f82f7c8.js";/* empty css               */import"./index-ec455f54.js";import"./index-095d5581.js";import"./index-e99519f1.js";import"./index-147655d7.js";import{T as u}from"./index-fb030d50.js";import"./index-c9e69acb.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-bc089e17.js";import{u as g}from"./index-4fb8b842.js";import"./iframe-6c91f604.js";import"../sb-preview/runtime.js";import"./react-16-8c769108.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f8a8f14b.js";import"./get-78cac09e.js";import"./callBound-57fbc82c.js";import"./mapValues-f98d729d.js";import"./index-b75c9059.js";import"./uniq-b8c8c302.js";import"./index-356e4a49.js";import"./index-12f93142.js";import"./index-29c055d1.js";import"./.jest-test-results-108bf634.js";import"./index-c1da5c13.js";const v=()=>{const[e,a]=b.useState(0);return i("div",{className:s.wrapper,children:[t(T,{title:"Tabs",description:"Компонент Tabs, который объединил в себя Tab элементы. Компонент использует подход compound pattern.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Tabs",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A43757&mode=design&t=awyt3Fzj1XS6th7v-1"}),t("div",{className:s.tabs,children:i(r,{children:[t(r.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>a(0)}),t(r.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>a(1)}),t(r.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>a(2)})]})}),Number(e)==0&&t(p,{children:t(l,{height:400,description:"Обычное использование компонента.",code:`import { Tabs, Typography } from '@nlmk/ds-2.0';
import { useState } from 'react';

export default  App = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Tabs>
        <Tabs.Tab
          label="Входящие"
          active={0 === Number(activeTab)}
          onClick={() => setActiveTab(0)}
        />
        <Tabs.Tab
          label="Мои папки"
          active={1 === Number(activeTab)}
          onClick={() => setActiveTab(1)}
        />
        <Tabs.Tab
          label="Спам"
          active={2 === Number(activeTab)}
          onClick={() => setActiveTab(2)}
          badgeNumber="91"
        >
          <Tabs.Tooltip description="Сюда вы можете добавить текстподсказу для компонента">
            <Tabs.Icon
              name="IconInfo16"
              containerSize={16}
              htmlColor="var(--text-grey-500)"
            />
          </Tabs.Tooltip>
        </Tabs.Tab>
        <Tabs.Tab
          label="Черновики"
          active={3 === Number(activeTab)}
          onClick={() => setActiveTab(3)}
          badgeNumber="2"
        />
      </Tabs>

      {Number(activeTab) == 0 && (
        <Typography variant="Heading4" color="primary">
          Входящие
        </Typography>
      )}
      {Number(activeTab) == 1 && (
        <Typography variant="Heading4" color="primary">
          Мои папки
        </Typography>
      )}
      {Number(activeTab) == 2 && (
        <Typography variant="Heading4" color="primary">
          Папка с спамом
        </Typography>
      )}
      {Number(activeTab) == 3 && (
        <Typography variant="Heading4" color="primary">
          Черновики
        </Typography>
      )}
    </>
  )
}
`})}),Number(e)==1&&t(y,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A43757&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(e)==2&&t(u,{variant:"Heading4",color:"primary",children:t(d,{componentName:"Tabs"})})]})};function m(e){return i(p,{children:[t(n,{title:"Components/Tabs/Info",component:r,parameters:{jest:["Tabs.test.tsx"]}}),`
`,t(c,{children:t(v,{})})]})}function h(e={}){const{wrapper:a}=Object.assign({},g(),e.components);return a?t(a,{...e,children:t(m,{...e})}):m()}const f=()=>{throw new Error("Docs-only story")};f.parameters={docsOnly:!0};const o={title:"Components/Tabs/Info",parameters:{jest:["Tabs.test.tsx"]},component:r,tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:h};const et=["__page"];export{et as __namedExportsOrder,f as __page,o as default};
