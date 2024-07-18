import{U as m,M as f,e as w}from"./chunk-HLWAVYOI-SF85AK4L.js";import{J as o,D as c}from"./index-B_lQn97I.js";import{a,j as r,F as d}from"./jsx-runtime-2xDJh5tt.js";import{r as g}from"./index-CBqU2yxZ.js";import{s as i,H as D,E as n,T as y}from"./Tests-Blt8Zyt5.js";import{F as h}from"./FigmaEmbed-C1VnM6Sb.js";import{P as b}from"./Properties-BqRv8IKb.js";import"./generateUUID-BitdulAq.js";import"./index-D_z3tN8U.js";import"./index-CTkD9j2t.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import{T as C}from"./index-nWYpQihe.js";import"./index-CZmYKfHv.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-BDxIiU-V.js";import"./32-D4qDQhsJ.js";import{a as S}from"./argsTypes-DzglXe4b.js";import{useMDXComponents as O}from"./index-DI5IigMn.js";import"./iframe-C_y8s-SQ.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-uzXR7sYQ.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./clsx.m-CH7BE6MN.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-Oo-_7YZz.js";import"./index-CMH8wQUv.js";const l=()=>{const[e,t]=g.useState(0);return a("div",{className:i.wrapper,children:[r(D,{title:"Drawer",description:"Компонент Drawer обеспечивает отображение выдвижной панели с возможностью настройки позиции и обработки закрытия.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Drawer",figmaLink:"https://www.figma.com/file/0BGHYt5CjO71I4KhygQJD5/DS2.0-Filtering-%26-Sorting?node-id=534-67220&mode=dev"}),r("div",{className:i.tabs,children:a(o,{children:[r(o.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>t(0)}),r(o.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>t(1)}),r(o.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>t(2)})]})}),Number(e)===0&&a(d,{children:[r(n,{height:350,description:"Пример базового использования Drawer.",code:`import { Button, Drawer, Typography }  from '@nlmk/ds-2.0';
import { useState } from 'react';

export default  App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <>
        <Button onClick={() => setIsOpen(true)}>Открыть Drawer</Button>
        <Drawer
            isOpen={isOpen}
            onClose={() => {
                setIsOpen(false);
            }}
        >
            <Typography color="primary">Содержимое Drawer</Typography>
        </Drawer>
      </>
  );
};
`}),r(n,{height:350,description:"Пример Drawer, открывающегося слева.",code:`import { Button, Drawer, Typography }  from '@nlmk/ds-2.0';
import { useState } from 'react';

export default  App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <>
        <Button onClick={() => setIsOpen(true)}>Открыть Drawer слева</Button>
        <Drawer
            isOpen={isOpen}
            position="left"
            onClose={() => {
                setIsOpen(false);
            }}
        >
            <Typography color="primary">Drawer, открывающийся слева</Typography>
        </Drawer>
      </>
  );
};
`}),r(b,{argsTypes:S})]}),Number(e)===1&&r(h,{url:"https://www.figma.com/file/0BGHYt5CjO71I4KhygQJD5/DS2.0-Filtering-%26-Sorting?node-id=534-67220"}),Number(e)===2&&r(C,{variant:"Heading4",color:"primary",children:r(y,{componentName:"Drawer"})})]})};function p(e){return a(d,{children:[r(f,{title:"Components/Drawer/Info",component:c,parameters:{design:{type:"figma",url:"https://www.figma.com/file/0BGHYt5CjO71I4KhygQJD5/DS2.0-Filtering-%26-Sorting?node-id=534-67220"},jest:["Drawer.test.tsx"]}}),`
`,r(w,{name:"Docs",children:r(m,{children:r(l,{})})})]})}function T(e={}){const{wrapper:t}=Object.assign({},O(),e.components);return t?r(t,{...e,children:r(p,{...e})}):p()}const u=()=>r(m,{children:r(l,{})});u.storyName="Docs";u.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const s={title:"Components/Drawer/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/0BGHYt5CjO71I4KhygQJD5/DS2.0-Filtering-%26-Sorting?node-id=534-67220"},jest:["Drawer.test.tsx"]},component:c,tags:["stories-mdx"],includeStories:["docs"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:T};const pr=["docs"];export{pr as __namedExportsOrder,s as default,u as docs};
