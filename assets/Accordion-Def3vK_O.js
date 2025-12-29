import{r as p,j as t,f as l,S as u,U as x}from"./iframe-zk5xXBtA.js";import{useMDXComponents as A}from"./index-CSMoqiIu.js";import{DecoratorDefault as j}from"./Decorator.stories-XjMTlGWF.js";import{E as f,a as b,b as L,c as v,A as E}from"./argsTypes-DmfnC3pZ.js";import{s as m,H as g,E as e}from"./Header-BMqOixcD.js";import{F as h}from"./FigmaEmbed-Bh-YhisY.js";import{P as y}from"./Properties-BH32KsQA.js";import{T as k}from"./Tests-BiRJAIxZ.js";/* empty css               */import{T as r}from"./index-CGZqhooT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-9BCGLlQQ.js";import"./16-D0071456.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-D9zx9C-F.js";import"./index-6T6AONQH.js";import"./index-DjSUGs5w.js";import"./index-CBNcLMKv.js";import"./generateUUID-M57HTP56.js";import"./24-BkbQ4VQu.js";import"./index-B9FTsAqd.js";import"./sizesMapping-D8QavrGc.js";import"./index-Is2qauMo.js";import"./index-CTfBpVCI.js";import"./index-DirQniBD.js";import"./index-cDYWclvM.js";import"./index-1zUxKm4P.js";import"./32-D1ipBNS6.js";import"./24-BU8fW5nS.js";import"./24-CsxFkFpg.js";import"./24-Cg1MPBHI.js";import"./24-BGS-MQmY.js";import"./24-2PvTlRtj.js";import"./24-DyWGmQTd.js";import"./24-DrF3F4Gh.js";import"./24-DXO8B9MT.js";import"./24-CHUQ235a.js";import"./24-CzaQJmC-.js";import"./16-D1MigzhA.js";import"./16-J9oiRdzb.js";import"./16-qJIrzOil.js";const n="Accordion",c="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=451-9601&t=HhCDuaOuzHu5rgyf-1",I=()=>{const[i,o]=p.useState(0),s=d=>i===d;return t.jsxs("div",{className:m.wrapper,children:[t.jsx(g,{title:n,description:`Компонент "аккордеон" предоставляет большие объемы контента в ограниченном пространстве с помощью пошагового раскрытия. Заголовок обеспечивает пользователю общий обзор содержимого, позволяя решить, какие разделы читать.

        Аккордеоны могут сделать обработку информации и поиск более эффективными. Однако они скрывают контент от пользователей, и важно учесть, что пользователь может не заметить или не прочитать весь включенный контент. Если пользователь, вероятно, должен прочесть весь контент, не используйте аккордеон, так как это добавляет дополнительный клик; вместо этого используйте полноценную прокручиваемую страницу с обычными заголовками.`,isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${n}`,figmaLink:c}),t.jsx("div",{className:m.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:s(0),onClick:()=>o(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:s(1),onClick:()=>o(1)}),t.jsx(r.Tab,{label:"Тестирование",active:s(2),onClick:()=>o(2)})]})}),i==0&&t.jsxs(t.Fragment,{children:[t.jsx(e,{description:"Аккордеон по умолчанию",code:`import { Accordion } from '@nlmk/ds-2.0';

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
              `}),t.jsx(e,{description:`Варианты размеров аккордеона: ${Object.values(f).join(" | ")}`,code:`import { Accordion } from '@nlmk/ds-2.0';

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
              `}),t.jsx(e,{description:`Варианты иконок аккордеона: ${Object.values(b).join(" | ")}`,code:`import { Accordion } from '@nlmk/ds-2.0';

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
              `}),t.jsx(e,{description:`Цветовые варианты аккордеона: ${Object.values(L).join(" | ")}`,code:`import { Accordion } from '@nlmk/ds-2.0';

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
              `}),t.jsx(y,{argsTypes:v})]}),i==1&&t.jsx(h,{url:c}),i==2&&t.jsx(k,{componentName:n})]})};function a(i){return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"Components/Accordion/Info",component:E,parameters:{design:{type:"figma",url:"https://www.figma.com/file/cApCjzPxrt7tpXhNjyxSlR/DS2.0-accordion?node-id=1110%3A23815&mode=dev"},jest:["Accordion.test.tsx"]}}),`
`,t.jsx(u,{of:j}),`
`,t.jsx(x,{children:t.jsx(I,{})})]})}function At(i={}){const{wrapper:o}={...A(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(a,{...i})}):a()}export{At as default};
