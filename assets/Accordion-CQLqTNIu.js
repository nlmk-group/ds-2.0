import{j as t}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as p}from"./index-CpguRmgc.js";import{ag as l,ah as u,ai as x}from"./chunk-HLWAVYOI-CH-g9ouN.js";import{DecoratorDefault as f}from"./Decorator.stories-BP3ijO2B.js";import{E as A,b as j,a as L,A as b}from"./generateUUID-vFnGh3I6.js";import{r as v}from"./index-DQ2WTIsS.js";import{s as m,H as g,E as e}from"./Header-BpVZjetj.js";import{F as y}from"./FigmaEmbed-CosuUJ5A.js";import{P as E}from"./Properties-BJqT0Khr.js";import{T as h}from"./Tests-BYAJuazn.js";/* empty css               */import{a0 as r}from"./index-BNUKZqmp.js";import"./index-CNoQ_QnE.js";import"./index-CSbymPMC.js";import"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import"./index-ehXB0alm.js";import"./index-Cw4KJrZO.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-BvIp-sDO.js";import"./32-MLA202Yz.js";import{a as w}from"./argsTypes-BmxnBz1O.js";import"./iframe-xwZIZJ7t.js";import"../sb-preview/runtime.js";import"./client-ClDtLkqA.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DZkQtLdq.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-DGK3Cuyg.js";import"./index-BKbm6zW0.js";const s="Accordion",c="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1026%3A7066&mode=design&t=awyt3Fzj1XS6th7v-1",M=()=>{const[i,o]=v.useState(0),n=d=>i===d;return t.jsxs("div",{className:m.wrapper,children:[t.jsx(g,{title:s,description:`Компонент "аккордеон" предоставляет большие объемы контента в ограниченном пространстве с помощью пошагового раскрытия. Заголовок обеспечивает пользователю общий обзор содержимого, позволяя решить, какие разделы читать.

        Аккордеоны могут сделать обработку информации и поиск более эффективными. Однако они скрывают контент от пользователей, и важно учесть, что пользователь может не заметить или не прочитать весь включенный контент. Если пользователь, вероятно, должен прочесть весь контент, не используйте аккордеон, так как это добавляет дополнительный клик; вместо этого используйте полноценную прокручиваемую страницу с обычными заголовками.`,isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${s}`,figmaLink:c}),t.jsx("div",{className:m.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:n(0),onClick:()=>o(0)}),t.jsx(r.Tab,{label:"Тестирование",active:n(2),onClick:()=>o(2)})]})}),i==0&&t.jsxs(t.Fragment,{children:[t.jsx(e,{description:"Аккордеон по умолчанию",code:`import { Accordion } from '@nlmk/ds-2.0';

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
              `}),t.jsx(e,{description:`Варианты размеров аккордеона: ${Object.values(A).join(" | ")}`,code:`import { Accordion } from '@nlmk/ds-2.0';

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
              `}),t.jsx(e,{description:`Варианты иконок аккордеона: ${Object.values(j).join(" | ")}`,code:`import { Accordion } from '@nlmk/ds-2.0';

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
              `}),t.jsx(E,{argsTypes:w})]}),i==1&&t.jsx(y,{url:c}),i==2&&t.jsx(h,{componentName:s})]})};function a(i){return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"Components/Accordion/Info",component:b,parameters:{design:{type:"figma",url:"https://www.figma.com/file/cApCjzPxrt7tpXhNjyxSlR/DS2.0-accordion?node-id=1110%3A23815&mode=dev"},jest:["Accordion.test.tsx"]}}),`
`,t.jsx(u,{of:f}),`
`,t.jsx(x,{children:t.jsx(M,{})})]})}function dt(i={}){const{wrapper:o}={...p(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(a,{...i})}):a()}export{dt as default};
