import{M as f,U as g}from"./chunk-HLWAVYOI-bd2949d1.js";import{a as r,Z as m}from"./index-f014e98c.js";import{a,j as e,F as d}from"./clsx.m-3764cf42.js";import{r as y}from"./index-f1f749bf.js";import{s as p,H as h,E as i,T as w}from"./Tests-605cd25b.js";import{F as M}from"./FigmaEmbed-6f82f7c8.js";import{P as O}from"./Properties-83346e89.js";import"./index-ec455f54.js";import"./index-095d5581.js";import"./index-e99519f1.js";import"./index-147655d7.js";import{T as b}from"./index-fb030d50.js";import"./index-c9e69acb.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-bc089e17.js";import{a as T}from"./argsTypes-b285a84e.js";import{u as C}from"./index-4fb8b842.js";import"./iframe-6c91f604.js";import"../sb-preview/runtime.js";import"./react-16-8c769108.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f8a8f14b.js";import"./get-78cac09e.js";import"./callBound-57fbc82c.js";import"./mapValues-f98d729d.js";import"./index-b75c9059.js";import"./uniq-b8c8c302.js";import"./index-356e4a49.js";import"./index-12f93142.js";import"./index-29c055d1.js";import"./.jest-test-results-108bf634.js";import"./index-c1da5c13.js";const D=()=>{const[t,o]=y.useState(0),l=`import { Button, Modal, Typography }  from '@nlmk/ds-2.0';
import { useState } from 'react';

export default  App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <>
        <Button onClick={() => setIsOpen(true)}>Открыть модальное окно</Button>
        <Modal
            isOpen={isOpen}
            onClose={() => {
                setIsOpen(false);
            }}
        >
            <Typography color="primary">Содержимое модального окна</Typography>
        </Modal>
      </>
  );
};
`,c=`import { Button, Modal, Typography }  from '@nlmk/ds-2.0';
import { useState } from 'react';

export default  App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <>
        <Button onClick={() => setIsOpen(true)}>Открыть модальное окно</Button>
        <Modal
            isOpen={isOpen}
            isDraggable
            onClose={() => {
                setIsOpen(false);
            }}
        >
            <Typography color="primary">Содержимое модального окна</Typography>
        </Modal>
      </>
  );
};
`,u=`import { Button, Modal, Typography }  from '@nlmk/ds-2.0';
import { useState } from 'react';

export default  App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
      <>
        <Button onClick={() => setIsOpen(true)}>Открыть модальное окно</Button>
        <Modal
            isOpen={isOpen}
            isResizable
            onClose={() => {
                setIsOpen(false);
            }}
        >
            <Typography color="primary">Содержимое модального окна</Typography>
        </Modal>
      </>
  );
};
`;return a("div",{className:p.wrapper,children:[e(h,{title:"Modal",description:"Компонент Modal обеспечивает отображение модальных окон с возможностями перетаскивания, изменения размера и обработки закрытия.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Modal",figmaLink:"https://www.figma.com/file/BU6Pd9uO1AIVa1yDqhr0hw/Drawer%2FModal-window?type=design&node-id=1-17&mode=dev"}),e("div",{className:p.tabs,children:a(r,{children:[e(r.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>o(0)}),e(r.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>o(1)}),e(r.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>o(2)})]})}),Number(t)===0&&a(d,{children:[e(i,{height:350,description:"Пример базового использования модального окна.",code:l}),e(i,{height:350,description:"Пример модального окна с возможностью перетаскивания.",code:c}),e(i,{height:350,description:"Пример модального окна с возможностью изменения размера.",code:u}),e(O,{argsTypes:T})]}),Number(t)===1&&e(M,{url:"https://www.figma.com/file/BU6Pd9uO1AIVa1yDqhr0hw/Drawer%2FModal-window?type=design&node-id=1-17&mode=dev"}),Number(t)===2&&e(b,{variant:"Heading4",color:"primary",children:e(w,{componentName:"Modal"})})]})};function n(t){return a(d,{children:[e(f,{title:"Components/Modal/Info",component:m,parameters:{design:{type:"figma",url:"https://www.figma.com/file/BU6Pd9uO1AIVa1yDqhr0hw/Drawer%2FModal-window?type=design&node-id=1-17&mode=dev"},jest:["Modal.test.tsx"]}}),`
`,e(g,{children:e(D,{})})]})}function I(t={}){const{wrapper:o}=Object.assign({},C(),t.components);return o?e(o,{...t,children:e(n,{...t})}):n()}const B=()=>{throw new Error("Docs-only story")};B.parameters={docsOnly:!0};const s={title:"Components/Modal/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/BU6Pd9uO1AIVa1yDqhr0hw/Drawer%2FModal-window?type=design&node-id=1-17&mode=dev"},jest:["Modal.test.tsx"]},component:m,tags:["stories-mdx"],includeStories:["__page"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:I};const ne=["__page"];export{ne as __namedExportsOrder,B as __page,s as default};
