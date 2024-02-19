import{M as f,U as g}from"./chunk-HLWAVYOI-bd2949d1.js";import{s as x,i as y,v as L,A as l}from"./index-ec455f54.js";import{a as n,j as t,F as u}from"./clsx.m-3764cf42.js";import{r as b}from"./index-f1f749bf.js";import{s as a,H as v,E as e,T as h}from"./Tests-605cd25b.js";import{F as j}from"./FigmaEmbed-6f82f7c8.js";import{P as w}from"./Properties-83346e89.js";/* empty css               */import{a as r}from"./index-f014e98c.js";import"./index-095d5581.js";import"./index-e99519f1.js";import"./index-147655d7.js";import{T as M}from"./index-fb030d50.js";import"./index-c9e69acb.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-bc089e17.js";import{a as C}from"./argsTypes-47befe6f.js";import{u as E}from"./index-4fb8b842.js";import"./iframe-6c91f604.js";import"../sb-preview/runtime.js";import"./react-16-8c769108.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f8a8f14b.js";import"./get-78cac09e.js";import"./callBound-57fbc82c.js";import"./mapValues-f98d729d.js";import"./index-b75c9059.js";import"./uniq-b8c8c302.js";import"./index-356e4a49.js";import"./index-12f93142.js";import"./index-29c055d1.js";import"./.jest-test-results-108bf634.js";import"./index-c1da5c13.js";const c="Accordion",p="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1026%3A7066&mode=design&t=awyt3Fzj1XS6th7v-1",T=()=>{const[i,o]=b.useState(0),m=A=>i===A;return n("div",{className:a.wrapper,children:[t(v,{title:c,description:`Компонент "аккордеон" предоставляет большие объемы контента в ограниченном пространстве с помощью пошагового раскрытия. Заголовок обеспечивает пользователю общий обзор содержимого, позволяя решить, какие разделы читать.

        Аккордеоны могут сделать обработку информации и поиск более эффективными. Однако они скрывают контент от пользователей, и важно учесть, что пользователь может не заметить или не прочитать весь включенный контент. Если пользователь, вероятно, должен прочесть весь контент, не используйте аккордеон, так как это добавляет дополнительный клик; вместо этого используйте полноценную прокручиваемую страницу с обычными заголовками.`,isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${c}`,figmaLink:p}),t("div",{className:a.tabs,children:n(r,{children:[t(r.Tab,{label:"Разработчику",active:m(0),onClick:()=>o(0)}),t(r.Tab,{label:"Дизайнеру",active:m(1),onClick:()=>o(1)}),t(r.Tab,{label:"Тестирование",active:m(2),onClick:()=>o(2)})]})}),i==0&&n(u,{children:[t(e,{description:"Аккордеон по умолчанию",code:`
import { Accordion } from '@nlmk/ds-2.0';

const items = [
    {
      id: 1,
      title: 'First accordion item',
      content: 'Lorem ipsum',
      initiallyExpanded: true
    },
    {
      id: 2,
      title: '2nd accordion item',
      content: 'Lorem ipsum'
    },
    {
      id: 3,
      title: 'Last accordion item',
      content: 'Lorem ipsum'
    }
  ]

export default App = () => (
  <Accordion items={items} />
)
              `}),t(e,{description:`Варианты размеров аккордеона: ${Object.values(x).join(" | ")}`,code:`
import { Accordion } from '@nlmk/ds-2.0';

const items = [
  {
    id: 1,
    title: 'First accordion item',
    content: 'Lorem ipsum',
    initiallyExpanded: true
  },
  {
    id: 2,
    title: '2nd accordion item',
    content: 'Lorem ipsum'
  },
  {
    id: 3,
    title: 'Last accordion item',
    content: 'Lorem ipsum'
  }
]

export default App = () => (
  <>
  <Accordion size="m" items={items} />
  <Accordion size="s" items={items} />
  <Accordion size="xs" items={items} />
  </>
)
              `}),t(e,{description:`Варианты иконок аккордеона: ${Object.values(y).join(" | ")}`,code:`
import { Accordion } from '@nlmk/ds-2.0';

const items = [
  {
    id: 1,
    title: 'First accordion item',
    content: 'Lorem ipsum',
    initiallyExpanded: true
  },
  {
    id: 2,
    title: '2nd accordion item',
    content: 'Lorem ipsum'
  },
  {
    id: 3,
    title: 'Last accordion item',
    content: 'Lorem ipsum'
  }
]

export default App = () => (
  <>
  <Accordion startIcon="arrow" items={items} />
  <Accordion startIcon="plus" items={items} />
  <Accordion startIcon={null} endIcon="arrow" items={items} />
  <Accordion startIcon={null} endIcon="plus" items={items} />
  </>
)
              `}),t(e,{description:`Цветовые варианты аккордеона: ${Object.values(L).join(" | ")}`,code:`
import { Accordion } from '@nlmk/ds-2.0';

const items = [
  {
    id: 1,
    title: 'First accordion item',
    content: 'Lorem ipsum',
    initiallyExpanded: true
  },
  {
    id: 2,
    title: '2nd accordion item',
    content: 'Lorem ipsum'
  },
  {
    id: 3,
    title: 'Last accordion item',
    content: 'Lorem ipsum'
  }
]

export default App = () => (
  <>
  <Accordion variant="default" items={items} />
  <Accordion variant="paper" items={items} />
  <Accordion variant="default" items={items} disabled />
  <Accordion variant="paper" items={items} disabled />
  </>
)
              `}),t(w,{argsTypes:C})]}),i==1&&t(j,{url:p}),i==2&&t(M,{variant:"Heading4",color:"primary",children:t(h,{componentName:c})})]})};function d(i){return n(u,{children:[t(f,{title:"Components/Accordion/Info",component:l,parameters:{design:{type:"figma",url:"https://www.figma.com/file/cApCjzPxrt7tpXhNjyxSlR/DS2.0-Accordeon?node-id=1110%3A23815&mode=dev"},jest:["Accordion.test.tsx"]}}),`
`,t(g,{children:t(T,{})})]})}function k(i={}){const{wrapper:o}=Object.assign({},E(),i.components);return o?t(o,{...i,children:t(d,{...i})}):d()}const S=()=>{throw new Error("Docs-only story")};S.parameters={docsOnly:!0};const s={title:"Components/Accordion/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/cApCjzPxrt7tpXhNjyxSlR/DS2.0-Accordeon?node-id=1110%3A23815&mode=dev"},jest:["Accordion.test.tsx"]},component:l,tags:["stories-mdx"],includeStories:["__page"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:k};const ut=["__page"];export{ut as __namedExportsOrder,S as __page,s as default};
