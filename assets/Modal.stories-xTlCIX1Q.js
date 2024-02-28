import{U as m,M as f,e as y}from"./chunk-HLWAVYOI-CUNbYoBU.js";import{J as r,a0 as d}from"./index-4w0GPB2W.js";import{a,j as e,F as l}from"./clsx.m-CcuEzMhP.js";import{r as g}from"./index-CBqU2yxZ.js";import{s as p,H as h,E as i,T as w}from"./Tests-DLeBDtOW.js";import{F as M}from"./FigmaEmbed-C5HTb5rS.js";import{P as b}from"./Properties-B60pte38.js";import"./index-ehJh3wQv.js";import"./index-D-9trSFj.js";import"./index-DjeAniHW.js";import{T as O}from"./index-fbTu1Hcf.js";import"./index-BhQGQSXE.js";import"./index-hvdSV1r-.js";import"./index-BQVY97ak.js";import"./index-B5tj7Glx.js";import"./index-DyFb8FNg.js";import"./32-UdY5WLK9.js";import{a as C}from"./argsTypes-BwQ77pvL.js";import{useMDXComponents as T}from"./index-DI5IigMn.js";import"./iframe-vZ3FYMC0.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./chunk-EIRT5I3Z-DXochb4c.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-BhBVvAvs.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BMC0l3yZ.js";import"./index-BO3pQ7ot.js";const c=()=>{const[o,t]=g.useState(0);return a("div",{className:p.wrapper,children:[e(h,{title:"Modal",description:"Компонент Modal обеспечивает отображение модальных окон с возможностями перетаскивания, изменения размера и обработки закрытия.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Modal",figmaLink:"https://www.figma.com/file/BU6Pd9uO1AIVa1yDqhr0hw/Drawer%2FModal-window?type=design&node-id=1-17&mode=dev"}),e("div",{className:p.tabs,children:a(r,{children:[e(r.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>t(0)}),e(r.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>t(1)}),e(r.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>t(2)})]})}),Number(o)===0&&a(l,{children:[e(i,{height:350,description:"Пример базового использования модального окна.",code:`import { Button, Modal, Typography }  from '@nlmk/ds-2.0';
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
`}),e(i,{height:350,description:"Пример модального окна с возможностью перетаскивания.",code:`import { Button, Modal, Typography }  from '@nlmk/ds-2.0';
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
`}),e(i,{height:350,description:"Пример модального окна с возможностью изменения размера.",code:`import { Button, Modal, Typography }  from '@nlmk/ds-2.0';
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
`}),e(b,{argsTypes:C})]}),Number(o)===1&&e(M,{url:"https://www.figma.com/file/BU6Pd9uO1AIVa1yDqhr0hw/Drawer%2FModal-window?type=design&node-id=1-17&mode=dev"}),Number(o)===2&&e(O,{variant:"Heading4",color:"primary",children:e(w,{componentName:"Modal"})})]})};function n(o){return a(l,{children:[e(f,{title:"Components/Modal/Info",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/file/BU6Pd9uO1AIVa1yDqhr0hw/Drawer%2FModal-window?type=design&node-id=1-17&mode=dev"},jest:["Modal.test.tsx"]}}),`
`,e(y,{name:"Docs",children:e(m,{children:e(c,{})})})]})}function D(o={}){const{wrapper:t}=Object.assign({},T(),o.components);return t?e(t,{...o,children:e(n,{...o})}):n()}const u=()=>e(m,{children:e(c,{})});u.storyName="Docs";u.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const s={title:"Components/Modal/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/BU6Pd9uO1AIVa1yDqhr0hw/Drawer%2FModal-window?type=design&node-id=1-17&mode=dev"},jest:["Modal.test.tsx"]},component:d,tags:["stories-mdx"],includeStories:["docs"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:D};const ne=["docs"];export{ne as __namedExportsOrder,s as default,u as docs};
