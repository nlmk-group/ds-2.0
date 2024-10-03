import{j as e}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as p}from"./index-CpguRmgc.js";import{ag as n,ah as m,ai as l}from"./chunk-HLWAVYOI-DzIJkqQk.js";import{a0 as r,ai as d}from"./index-BB0QFCoF.js";import{DecoratorDefault as c}from"./Decorator.stories-BP3ijO2B.js";import{r as u}from"./index-DQ2WTIsS.js";import{s as a,H as f,E as s}from"./Header-qJM--RD_.js";import{F as g}from"./FigmaEmbed-DpoWtObf.js";import{P as h}from"./Properties-CSBUKrNS.js";import{T as y}from"./Tests-CiyXmGL-.js";import"./generateUUID-vFnGh3I6.js";import"./index-CNoQ_QnE.js";import"./index-CSbymPMC.js";import"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import"./index-ehXB0alm.js";import"./index-Cw4KJrZO.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-BvIp-sDO.js";import"./32-MLA202Yz.js";import{a as x}from"./argsTypes-BM08roHr.js";import"./iframe-9gfaio-E.js";import"../sb-preview/runtime.js";import"./client-ClDtLkqA.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DZkQtLdq.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-B3F9Q4-B.js";import"./index-BKbm6zW0.js";const M=()=>{const[o,t]=u.useState(0);return e.jsxs("div",{className:a.wrapper,children:[e.jsx(f,{title:"Modal",description:"Компонент Modal обеспечивает отображение модальных окон с возможностями перетаскивания, изменения размера и обработки закрытия.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Modal",figmaLink:"https://www.figma.com/file/BU6Pd9uO1AIVa1yDqhr0hw/Drawer%2FModal-window?type=design&node-id=1-17&mode=dev"}),e.jsx("div",{className:a.tabs,children:e.jsxs(r,{children:[e.jsx(r.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>t(0)}),e.jsx(r.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>t(2)})]})}),Number(o)===0&&e.jsxs(e.Fragment,{children:[e.jsx(s,{height:350,description:"Пример базового использования модального окна.",code:`import { Button, Modal, Typography }  from '@nlmk/ds-2.0';
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
`}),e.jsx(s,{height:350,description:"Пример модального окна с возможностью перетаскивания.",code:`import { Button, Modal, Typography }  from '@nlmk/ds-2.0';
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
`}),e.jsx(s,{height:350,description:"Пример модального окна с возможностью изменения размера.",code:`import { Button, Modal, Typography }  from '@nlmk/ds-2.0';
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
`}),e.jsx(h,{argsTypes:x})]}),Number(o)===1&&e.jsx(g,{url:"https://www.figma.com/file/BU6Pd9uO1AIVa1yDqhr0hw/Drawer%2FModal-window?type=design&node-id=1-17&mode=dev"}),Number(o)===2&&e.jsx(y,{componentName:"Modal"})]})};function i(o){return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Components/Modal/Info",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/file/BU6Pd9uO1AIVa1yDqhr0hw/Drawer%2FModal-window?type=design&node-id=1-17&mode=dev"},jest:["Modal.test.tsx"]}}),`
`,e.jsx(m,{of:c}),`
`,e.jsx(l,{children:e.jsx(M,{})})]})}function ae(o={}){const{wrapper:t}={...p(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(i,{...o})}):i()}export{ae as default};
