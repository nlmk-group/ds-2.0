import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as n}from"./index-CbmgEnq2.js";import{am as m,an as l,ao as d}from"./chunk-NUUEMKO5-dBm1alr4.js";import{a9 as s,am as c}from"./index-N7PQoZjI.js";import{DecoratorDefault as u}from"./Decorator.stories-B1hjNCvN.js";import{r as f}from"./index-Bnop-kX6.js";import{s as a,H as g,E as r}from"./Header-qj4SNJue.js";import{F as x}from"./FigmaEmbed-R2hIZcYQ.js";import{P as h}from"./Properties-DRW4mgpN.js";import{T as b}from"./Tests-SAvD4l8-.js";import"./generateUUID-Dz4mOyMt.js";import"./index-BuHkNwZq.js";import"./index-CiiUx5gY.js";import"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import"./index-qC5wYQgy.js";import"./index-Dxx-yGvP.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-CG5Hm5ah.js";import"./32-QiGXh8Io.js";import{a as y}from"./argsTypes-BM08roHr.js";import"./iframe-BexKgGB-.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BmSRDSfW.js";import"./index-CT8gBKwQ.js";const i="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=286-1924&t=HhCDuaOuzHu5rgyf-1",M=()=>{const[e,o]=f.useState(0);return t.jsxs("div",{className:a.wrapper,children:[t.jsx(g,{title:"Modal",description:"Компонент Modal обеспечивает отображение модальных окон с возможностями перетаскивания, изменения размера и обработки закрытия.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Modal",figmaLink:i}),t.jsx("div",{className:a.tabs,children:t.jsxs(s,{children:[t.jsx(s.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>o(0)}),t.jsx(s.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>o(1)}),t.jsx(s.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>o(2)})]})}),Number(e)===0&&t.jsxs(t.Fragment,{children:[t.jsx(r,{height:350,description:"Пример базового использования модального окна.",code:`import { Button, Modal, Typography }  from '@nlmk/ds-2.0';
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
            <Typography color="var(--steel-90)">Содержимое модального окна</Typography>
        </Modal>
      </>
  );
};
`}),t.jsx(r,{height:350,description:"Пример модального окна с возможностью перетаскивания.",code:`import { Button, Modal, Typography }  from '@nlmk/ds-2.0';
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
            <Typography color="var(--steel-90)">Содержимое модального окна</Typography>
        </Modal>
      </>
  );
};
`}),t.jsx(r,{height:350,description:"Пример модального окна с возможностью изменения размера.",code:`import { Button, Modal, Typography }  from '@nlmk/ds-2.0';
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
            <Typography color="var(--steel-90)">Содержимое модального окна</Typography>
        </Modal>
      </>
  );
};
`}),t.jsx(h,{argsTypes:y})]}),Number(e)===1&&t.jsx(x,{url:i}),Number(e)===2&&t.jsx(b,{componentName:"Modal"})]})};function p(e){return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Components/Modal/Info",component:c,parameters:{design:{type:"figma",url:"https://www.figma.com/file/BU6Pd9uO1AIVa1yDqhr0hw/Drawer%2FModal-window?type=design&node-id=1-17&mode=dev"},jest:["Modal.test.tsx"]}}),`
`,t.jsx(l,{of:u}),`
`,t.jsx(d,{children:t.jsx(M,{})})]})}function st(e={}){const{wrapper:o}={...n(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(p,{...e})}):p()}export{st as default};
