import{U as l,M as x,e as L}from"./chunk-HLWAVYOI-D1fLzzdK.js";import{s as b,i as v,v as h,A as u}from"./generateUUID-BkPc_NdJ.js";import{a as n,j as t,F as A}from"./clsx.m-CcuEzMhP.js";import{r as j}from"./index-CBqU2yxZ.js";import{s as a,H as M,E as e,T as w}from"./Tests-CShFLtrb.js";import{F as S}from"./FigmaEmbed-DCpTw2G9.js";import{P as C}from"./Properties-Ci0YEq_Y.js";/* empty css               */import{J as r}from"./index-VLfweUxF.js";import"./index-SiU_55iz.js";import"./index-Dz0_KCIo.js";import{T}from"./index-fbTu1Hcf.js";import"./index-CpJBQeN-.js";import"./index-hvdSV1r-.js";import"./index-BQVY97ak.js";import"./index-B5tj7Glx.js";import"./index-14g2znra.js";import"./32-BmhDzcbC.js";import{a as k}from"./argsTypes-FQnKGSLd.js";import{useMDXComponents as E}from"./index-DI5IigMn.js";import"./iframe-DpfJ_wxM.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./chunk-EIRT5I3Z-DXochb4c.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-CImMyoKX.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BdQ446li.js";import"./index-BO3pQ7ot.js";const c="Accordion",d="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1026%3A7066&mode=design&t=awyt3Fzj1XS6th7v-1",f=()=>{const[i,o]=j.useState(0),m=y=>i===y;return n("div",{className:a.wrapper,children:[t(M,{title:c,description:`Компонент "аккордеон" предоставляет большие объемы контента в ограниченном пространстве с помощью пошагового раскрытия. Заголовок обеспечивает пользователю общий обзор содержимого, позволяя решить, какие разделы читать.

        Аккордеоны могут сделать обработку информации и поиск более эффективными. Однако они скрывают контент от пользователей, и важно учесть, что пользователь может не заметить или не прочитать весь включенный контент. Если пользователь, вероятно, должен прочесть весь контент, не используйте аккордеон, так как это добавляет дополнительный клик; вместо этого используйте полноценную прокручиваемую страницу с обычными заголовками.`,isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${c}`,figmaLink:d}),t("div",{className:a.tabs,children:n(r,{children:[t(r.Tab,{label:"Разработчику",active:m(0),onClick:()=>o(0)}),t(r.Tab,{label:"Дизайнеру",active:m(1),onClick:()=>o(1)}),t(r.Tab,{label:"Тестирование",active:m(2),onClick:()=>o(2)})]})}),i==0&&n(A,{children:[t(e,{description:"Аккордеон по умолчанию",code:`import { Accordion } from '@nlmk/ds-2.0';

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
              `}),t(e,{description:`Варианты размеров аккордеона: ${Object.values(b).join(" | ")}`,code:`import { Accordion } from '@nlmk/ds-2.0';

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
              `}),t(e,{description:`Варианты иконок аккордеона: ${Object.values(v).join(" | ")}`,code:`import { Accordion } from '@nlmk/ds-2.0';

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
              `}),t(e,{description:`Цветовые варианты аккордеона: ${Object.values(h).join(" | ")}`,code:`import { Accordion } from '@nlmk/ds-2.0';

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
              `}),t(C,{argsTypes:k})]}),i==1&&t(S,{url:d}),i==2&&t(T,{variant:"Heading4",color:"primary",children:t(w,{componentName:c})})]})};function p(i){return n(A,{children:[t(x,{title:"Components/Accordion/Info",component:u,parameters:{design:{type:"figma",url:"https://www.figma.com/file/cApCjzPxrt7tpXhNjyxSlR/DS2.0-Accordeon?node-id=1110%3A23815&mode=dev"},jest:["Accordion.test.tsx"]}}),`
`,t(L,{name:"Docs",children:t(l,{children:t(f,{})})})]})}function N(i={}){const{wrapper:o}=Object.assign({},E(),i.components);return o?t(o,{...i,children:t(p,{...i})}):p()}const g=()=>t(l,{children:t(f,{})});g.storyName="Docs";g.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const s={title:"Components/Accordion/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/cApCjzPxrt7tpXhNjyxSlR/DS2.0-Accordeon?node-id=1110%3A23815&mode=dev"},jest:["Accordion.test.tsx"]},component:u,tags:["stories-mdx"],includeStories:["docs"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:N};const ut=["docs"];export{ut as __namedExportsOrder,s as default,g as docs};
