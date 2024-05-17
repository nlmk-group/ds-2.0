import{U as y,M as v,e as x}from"./chunk-HLWAVYOI-BIT6alKZ.js";import{J as c,w as d,S as C}from"./index-2j3g-nq8.js";import{a as i,j as r,F as O}from"./jsx-runtime-2xDJh5tt.js";import{r as T}from"./index-CBqU2yxZ.js";import{s as l,H as w,E as t,T as $}from"./Tests--GyaXTng.js";import{F as D}from"./FigmaEmbed-B-fbtqaF.js";import{P as I}from"./Properties-yOGAxVAd.js";/* empty css               */import"./generateUUID-CbWNkpu4.js";import"./index-YguXCR6_.js";import"./index-D60oXbFF.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import{T as _}from"./index-nWYpQihe.js";import"./index-DbX0JV5O.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-lhFT6koy.js";import"./index-DFeUewHl.js";import"./32-CjiFhZy5.js";import{D as S,S as b,b as k,c as f,d as u,e as g,f as n,a as j}from"./constants-BKQNHTgz.js";import{useMDXComponents as L}from"./index-DI5IigMn.js";import"./iframe-BHvCdcuE.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-BHSuypEB.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./clsx.m-CH7BE6MN.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BsqgCTfd.js";import"./index-CMH8wQUv.js";const p="Snackbar",A="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A29074&mode=design&t=awyt3Fzj1XS6th7v-1",N=()=>{const[o,a]=T.useState(0),m=e=>o===e;return i("div",{className:l.wrapper,children:[r(w,{title:p,description:"Snackbar - это компонент, который предоставляет краткое уведомление или сообщение о событии.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${p}`,figmaLink:A}),r("div",{className:l.tabs,children:i(c,{children:[r(c.Tab,{label:"Разработчику",active:m(0),onClick:()=>a(0)}),r(c.Tab,{label:"Дизайнеру",active:m(1),onClick:()=>a(1)}),r(c.Tab,{label:"Тестирование",active:m(2),onClick:()=>a(2)})]})}),o==0&&i(O,{children:[r(t,{description:S,height:150,code:`import { Snackbar } from '@nlmk/ds-2.0';

export default App = () => (
  <Snackbar> ${S} </Snackbar>
)
              `}),r(t,{height:150,description:b,code:`import { Snackbar } from '@nlmk/ds-2.0';

export default App = () => (
  <Snackbar close={() => {}}> ${b} </Snackbar>
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
              `}),r(t,{description:u,code:`import { Snackbar } from '@nlmk/ds-2.0';

const colors = [${Object.values(d).map(e=>`"${e}"`).join(", ")}];

export default App = () => (
  <>
    {colors.map(color => {
      return <Snackbar key={color} color={color} withIcon> ${u} </Snackbar>
    })}
  </>
)
              `}),r(t,{description:g,code:`import { Snackbar, Icon } from '@nlmk/ds-2.0';

export default App = () => (
  <Snackbar
    withIcon
    color="dark"
    customIcon={(
      <Icon
        name='IconEducationOutlined24'
        containerSize={24}
        htmlColor="red"
      />
    )}
  > ${g} </Snackbar>
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
              `}),r(I,{argsTypes:j})]}),o==1&&r(D,{url:A}),o==2&&r(_,{variant:"Heading4",color:"primary",children:r($,{componentName:p})})]})};function h(o){return i(O,{children:[r(v,{title:"Components/Snackbar/Info",component:C,parameters:{design:{type:"figma",url:"https://www.figma.com/file/rDvhcgytqOP1QYLDMtY2Qg/DS2.0-Snackbars?node-id=701%3A50677&mode=dev"},jest:["Snackbar.test.tsx"]}}),`
`,r(x,{name:"Docs",children:r(y,{children:r(N,{})})})]})}function E(o={}){const{wrapper:a}=Object.assign({},L(),o.components);return a?r(a,{...o,children:r(h,{...o})}):h()}const M=()=>r(y,{children:r(N,{})});M.storyName="Docs";M.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const s={title:"Components/Snackbar/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/rDvhcgytqOP1QYLDMtY2Qg/DS2.0-Snackbars?node-id=701%3A50677&mode=dev"},jest:["Snackbar.test.tsx"]},component:C,tags:["stories-mdx"],includeStories:["docs"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:E};const hr=["docs"];export{hr as __namedExportsOrder,s as default,M as docs};
