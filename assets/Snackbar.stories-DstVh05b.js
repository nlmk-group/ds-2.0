import{U as y,M,e as v}from"./chunk-HLWAVYOI-ggnRarnC.js";import{L as c,y as d,x as C}from"./index-CPpCWzCZ.js";import{a as i,j as r,F as O}from"./jsx-runtime-2xDJh5tt.js";import{r as T}from"./index-CBqU2yxZ.js";import{s as l,H as $,E as t,T as w}from"./Tests-CoYSFcpa.js";import{F as D}from"./FigmaEmbed-CmV2K5m5.js";import{P as I}from"./Properties-B_8eF0HB.js";/* empty css               */import"./generateUUID-C4dJbmAm.js";import"./index-DdUHXjGd.js";import"./index-D60oXbFF.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import{T as _}from"./index-nWYpQihe.js";import"./index-tm22VGJr.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-D-OkhesI.js";import"./32-CjiFhZy5.js";import{D as b,S,b as k,c as f,d as u,e as g,f as n,a as L}from"./constants-9vaGK0M-.js";import{useMDXComponents as j}from"./index-DI5IigMn.js";import"./iframe-C0O6cAnP.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-DKZlcldG.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./clsx.m-CH7BE6MN.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BEdEGSo6.js";import"./index-CMH8wQUv.js";const p="Snackbar",A="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A29074&mode=design&t=awyt3Fzj1XS6th7v-1",N=()=>{const[o,a]=T.useState(0),m=e=>o===e;return i("div",{className:l.wrapper,children:[r($,{title:p,description:"Snackbar - это компонент, который предоставляет краткое уведомление или сообщение о событии.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${p}`,figmaLink:A}),r("div",{className:l.tabs,children:i(c,{children:[r(c.Tab,{label:"Разработчику",active:m(0),onClick:()=>a(0)}),r(c.Tab,{label:"Дизайнеру",active:m(1),onClick:()=>a(1)}),r(c.Tab,{label:"Тестирование",active:m(2),onClick:()=>a(2)})]})}),o==0&&i(O,{children:[r(t,{description:b,height:150,code:`import { Snackbar } from '@nlmk/ds-2.0';

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
              `}),r(I,{argsTypes:L})]}),o==1&&r(D,{url:A}),o==2&&r(_,{variant:"Heading4",color:"primary",children:r(w,{componentName:p})})]})};function h(o){return i(O,{children:[r(M,{title:"Components/Snackbar/Info",component:C,parameters:{design:{type:"figma",url:"https://www.figma.com/file/rDvhcgytqOP1QYLDMtY2Qg/DS2.0-Snackbars?node-id=701%3A50677&mode=dev"},jest:["Snackbar.test.tsx"]}}),`
`,r(v,{name:"Docs",children:r(y,{children:r(N,{})})})]})}function E(o={}){const{wrapper:a}=Object.assign({},j(),o.components);return a?r(a,{...o,children:r(h,{...o})}):h()}const x=()=>r(y,{children:r(N,{})});x.storyName="Docs";x.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const s={title:"Components/Snackbar/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/rDvhcgytqOP1QYLDMtY2Qg/DS2.0-Snackbars?node-id=701%3A50677&mode=dev"},jest:["Snackbar.test.tsx"]},component:C,tags:["stories-mdx"],includeStories:["docs"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:E};const Ar=["docs"];export{Ar as __namedExportsOrder,s as default,x as docs};
