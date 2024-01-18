import{M as O,U as _}from"./chunk-HLWAVYOI-4d59c488.js";import{a as c,X as d,Y as C}from"./index-28aa8d3c.js";import{a as i,j as r,F as y}from"./clsx.m-3764cf42.js";import{r as N}from"./index-f1f749bf.js";import{s as l,H as M,E as t,T as v}from"./Tests-92994681.js";import{F as w}from"./FigmaEmbed-653a4a96.js";import{P as x}from"./Properties-7b487036.js";/* empty css               */import"./index-a4c35820.js";import"./index-63601013.js";import"./index-e99519f1.js";import"./index-cd305b84.js";import"./index-147655d7.js";import{T}from"./index-fb030d50.js";import"./index-ed56af28.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-8c6efd17.js";import{D as b,S,a as k,b as f,c as g,d as u,e as n,f as $}from"./constants-137ed8f5.js";import{u as D}from"./index-4fb8b842.js";import"./iframe-4fc83fa0.js";import"../sb-preview/runtime.js";import"./react-16-8c769108.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f8a8f14b.js";import"./get-78cac09e.js";import"./callBound-57fbc82c.js";import"./mapValues-f98d729d.js";import"./index-b75c9059.js";import"./uniq-b8c8c302.js";import"./index-356e4a49.js";import"./index-ec9e1ac8.js";import"./index-29c055d1.js";import"./IconArticle24-414bfa4c.js";import"./IconsList.module-e4fe8555.js";import"./IconPanTool24-f1398bf1.js";import"./.jest-test-results-de22beba.js";import"./index-c1da5c13.js";const m="Snackbar",A="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A29074&mode=design&t=awyt3Fzj1XS6th7v-1",I=()=>{const[o,a]=N.useState(0),p=e=>o===e;return i("div",{className:l.wrapper,children:[r(M,{title:m,description:"Snackbar - это компонент, который предоставляет краткое уведомление или сообщение о событии.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${m}`,figmaLink:A}),r("div",{className:l.tabs,children:i(c,{children:[r(c.Tab,{label:"Разработчику",active:p(0),onClick:()=>a(0)}),r(c.Tab,{label:"Дизайнеру",active:p(1),onClick:()=>a(1)}),r(c.Tab,{label:"Тестирование",active:p(2),onClick:()=>a(2)})]})}),o==0&&i(y,{children:[r(t,{description:b,height:150,code:`import { Snackbar } from '@nlmk/ds-2.0';

export default App = () => (
  <Snackbar> ${b} </Snackbar>
)
              `}),r(t,{height:150,description:S,code:`import { Snackbar } from '@nlmk/ds-2.0';

export default App = () => (
  <Snackbar close={() => {}}> ${S} </Snackbar>
)
              `}),r(t,{height:200,description:k,code:`import { Snackbar } from '@nlmk/ds-2.0';

export default App = () => (
  <Snackbar actionButton={() => {}}> ${k} </Snackbar>
)
              `}),r(t,{description:f,code:`import { Snackbar } from '@nlmk/ds-2.0';

const colors = [${Object.values(d).map(e=>`"${e}"`).join(", ")}]
export default App = () => (
  <>
    {colors.map(color => {
      return <Snackbar key={color} color={color}> ${f} </Snackbar>
    })}
  </>
)
              `}),r(t,{description:g,code:`import { Snackbar } from '@nlmk/ds-2.0';

const colors = [${Object.values(d).map(e=>`"${e}"`).join(", ")}];

export default App = () => (
  <>
    {colors.map(color => {
      return <Snackbar key={color} color={color} withIcon> ${g} </Snackbar>
    })}
  </>
)
              `}),r(t,{description:u,code:`import { Snackbar, Icon } from '@nlmk/ds-2.0';

export default App = () => (
  <Snackbar
    withIcon
    color="dark"
    customIcon={(
      <Icon
        name='IconEducation24'
        containerSize={24}
        htmlColor="red"
      />
    )}
  > ${u} </Snackbar>
)
              `}),r(t,{description:n,code:`import { Snackbar } from '@nlmk/ds-2.0';

export default App = () => (
  <>
  <Snackbar
    bgOpacity={100}
  >
    ${n}
  </Snackbar>
  <Snackbar
    bgOpacity={70}
    >
    ${n}
  </Snackbar>
  <Snackbar
    bgOpacity={50}
  >
    ${n}
  </Snackbar>
  <Snackbar
    bgOpacity={20}
  >
    ${n}
  </Snackbar>
</>
)
              `}),r(x,{argsTypes:$})]}),o==1&&r(w,{url:A}),o==2&&r(T,{variant:"Heading4",color:"primary",children:r(v,{componentName:m})})]})};function h(o){return i(y,{children:[r(O,{title:"Components/Snackbar/Info",component:C,parameters:{design:{type:"figma",url:"https://www.figma.com/file/rDvhcgytqOP1QYLDMtY2Qg/DS2.0-Snackbars?node-id=701%3A50677&mode=dev"},jest:["Snackbar.test.tsx"]}}),`
`,r(_,{children:r(I,{})})]})}function j(o={}){const{wrapper:a}=Object.assign({},D(),o.components);return a?r(a,{...o,children:r(h,{...o})}):h()}const E=()=>{throw new Error("Docs-only story")};E.parameters={docsOnly:!0};const s={title:"Components/Snackbar/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/rDvhcgytqOP1QYLDMtY2Qg/DS2.0-Snackbars?node-id=701%3A50677&mode=dev"},jest:["Snackbar.test.tsx"]},component:C,tags:["stories-mdx"],includeStories:["__page"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:j};const yr=["__page"];export{yr as __namedExportsOrder,E as __page,s as default};
