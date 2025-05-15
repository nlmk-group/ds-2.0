import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as p}from"./index-CbmgEnq2.js";import"./index-CDNBfPUD.js";import{DecoratorDefault as l}from"./Decorator.stories-B1hjNCvN.js";import{E as u,b as x,a as f,A}from"./generateUUID-X09o9Pdp.js";import{r as j}from"./index-Bnop-kX6.js";import{s as m,H as b,E as e}from"./Header-C1-O-XnO.js";import{F as L}from"./FigmaEmbed-BdmsVGpE.js";import{P as v}from"./Properties-C1uV5wRN.js";import{T as g}from"./Tests-DV49_lgf.js";/* empty css               */import{ag as r}from"./TreeList-KafSWxD5.js";import"./index-qbkiYuzD.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DovCGOp-.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-n_FSf3Cv.js";import"./index-DokmLR-l.js";import"./32-BTlKmMLd.js";import{a as E}from"./argsTypes-CNcZiIK5.js";import{c as h,e as y,U as k}from"./DocsRenderer-CFRXHY34-D9cGPbCT.js";import"./preview-B_gHuUAG.js";import"./iframe-Bi6NeCl1.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-AvLRxKSw.js";import"./index-D0sJu8id.js";import"./tiny-invariant-CopsF_GD.js";import"./index-B5g4YLzC.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";const n="Accordion",c="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=451-9601&t=HhCDuaOuzHu5rgyf-1",I=()=>{const[i,o]=j.useState(0),s=d=>i===d;return t.jsxs("div",{className:m.wrapper,children:[t.jsx(b,{title:n,description:`Компонент "аккордеон" предоставляет большие объемы контента в ограниченном пространстве с помощью пошагового раскрытия. Заголовок обеспечивает пользователю общий обзор содержимого, позволяя решить, какие разделы читать.

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
              `}),t.jsx(v,{argsTypes:E})]}),i==1&&t.jsx(L,{url:c}),i==2&&t.jsx(g,{componentName:n})]})};function a(i){return t.jsxs(t.Fragment,{children:[t.jsx(h,{title:"Components/Accordion/Info",component:A,parameters:{design:{type:"figma",url:"https://www.figma.com/file/cApCjzPxrt7tpXhNjyxSlR/DS2.0-accordion?node-id=1110%3A23815&mode=dev"},jest:["Accordion.test.tsx"]}}),`
`,t.jsx(y,{of:l}),`
`,t.jsx(k,{children:t.jsx(I,{})})]})}function at(i={}){const{wrapper:o}={...p(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(a,{...i})}):a()}export{at as default};
