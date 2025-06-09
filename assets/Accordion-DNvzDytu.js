import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as p}from"./index-D2yTtfOz.js";import"./index-9sFvlkdQ.js";import{DecoratorDefault as l}from"./Decorator.stories-D7iJJ_iz.js";import{b as u,E as x,a as f,A}from"./generateUUID-306HU3fz.js";import{r as j}from"./index-BcJSXhQi.js";import{s as m,H as b,E as e}from"./Header-DfSPAofw.js";import{F as L}from"./FigmaEmbed-CxKRSr1H.js";import{P as v}from"./Properties-BWHYCmk8.js";import{T as E}from"./Tests-DVJ0l8E_.js";/* empty css               */import{af as r}from"./TreeList-CN2Fuc3O.js";import"./index-CeXAN7vm.js";import"./index-Dd1OPmdN.js";import"./index-vbXA6nr0.js";import"./index-PY2fm1mi.js";import"./index-DmffzHLE.js";import"./index-C431fSij.js";import"./index-VmJK6twV.js";import"./index-BPWT-JIL.js";import"./index-BAYgGaKw.js";import"./index-C1EIKtiR.js";import"./32-DmJYGC0n.js";import{a as g}from"./argsTypes-DM-FQp4D.js";import{c as h,S as y,U as k}from"./DocsRenderer-CFRXHY34-BIX0eLwf.js";import"./index-ChsGqxH_.js";import"./preview-CKjZdpa9.js";import"./iframe-DumMmOON.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-jn7_epoG.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const n="Accordion",c="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=451-9601&t=HhCDuaOuzHu5rgyf-1",I=()=>{const[i,o]=j.useState(0),s=d=>i===d;return t.jsxs("div",{className:m.wrapper,children:[t.jsx(b,{title:n,description:`Компонент "аккордеон" предоставляет большие объемы контента в ограниченном пространстве с помощью пошагового раскрытия. Заголовок обеспечивает пользователю общий обзор содержимого, позволяя решить, какие разделы читать.

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
              `}),t.jsx(e,{description:`Варианты размеров аккордеона: ${Object.values(u).join(" | ")}`,code:`import { Accordion } from '@nlmk/ds-2.0';

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
              `}),t.jsx(e,{description:`Варианты иконок аккордеона: ${Object.values(x).join(" | ")}`,code:`import { Accordion } from '@nlmk/ds-2.0';

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
              `}),t.jsx(e,{description:`Цветовые варианты аккордеона: ${Object.values(f).join(" | ")}`,code:`import { Accordion } from '@nlmk/ds-2.0';

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
              `}),t.jsx(v,{argsTypes:g})]}),i==1&&t.jsx(L,{url:c}),i==2&&t.jsx(E,{componentName:n})]})};function a(i){return t.jsxs(t.Fragment,{children:[t.jsx(h,{title:"Components/Accordion/Info",component:A,parameters:{design:{type:"figma",url:"https://www.figma.com/file/cApCjzPxrt7tpXhNjyxSlR/DS2.0-accordion?node-id=1110%3A23815&mode=dev"},jest:["Accordion.test.tsx"]}}),`
`,t.jsx(y,{of:l}),`
`,t.jsx(k,{children:t.jsx(I,{})})]})}function pt(i={}){const{wrapper:o}={...p(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(a,{...i})}):a()}export{pt as default};
