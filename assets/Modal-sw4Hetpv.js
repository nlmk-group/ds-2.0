import{r as n,j as t,f as m,S as l,U as d}from"./iframe-CVAHojaF.js";import{useMDXComponents as c}from"./index-DqTt4rKv.js";import{a as u,M as f}from"./argsTypes-CaE1ze1e.js";import{DecoratorDefault as g}from"./Decorator.stories-Pdz9giCE.js";import{s as a,H as x,E as s}from"./Header-P01wOpj2.js";import{F as b}from"./FigmaEmbed-g9QqaeRo.js";import{P as y}from"./Properties-1BWy3pzy.js";import{T as h}from"./Tests-MQmjhMeS.js";import{T as r}from"./index-Cyj4_MYZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DZ_c8xXN.js";import"./index-BHrg75jh.js";import"./clsx-B-dksMZM.js";import"./index-x8Y8AkZd.js";import"./24-DKX7LJ7g.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-Bivvm1z2.js";import"./index-BHMo20JE.js";import"./index-DbWCe9dP.js";import"./index-BVgG5EPb.js";import"./generateUUID-M57HTP56.js";import"./24-BKsua3Hk.js";import"./sizesMapping-D8QavrGc.js";import"./index-zQ6Q3aTj.js";import"./index-CqzaiicI.js";import"./index-C8HyjBOv.js";import"./index-BN_w7FjE.js";import"./32-BGkTw_Iv.js";import"./24-DhWu0U6R.js";import"./24-QBRQbIxz.js";import"./24-DbZB43lA.js";import"./24-CpQC9mRz.js";import"./24-D4AD88CD.js";import"./24-i225Oh9B.js";import"./24-Tgd-_Nih.js";import"./24-BHgrLOFn.js";import"./16-D51laVEK.js";import"./24-DoIGH_dx.js";import"./16-D08SDomb.js";import"./16-R8HovCn5.js";import"./16-DOUHJXJi.js";const p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=286-1924&t=HhCDuaOuzHu5rgyf-1",M=()=>{const[o,e]=n.useState(0);return t.jsxs("div",{className:a.wrapper,children:[t.jsx(x,{title:"Modal",description:"Компонент Modal обеспечивает отображение модальных окон с возможностями перетаскивания, изменения размера и обработки закрытия.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Modal",figmaLink:p}),t.jsx("div",{className:a.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>e(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>e(1)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>e(2)})]})}),Number(o)===0&&t.jsxs(t.Fragment,{children:[t.jsx(s,{height:350,description:"Пример базового использования модального окна.",code:`import { Button, Modal, Typography }  from '@nlmk/ds-2.0';
import { useState } from 'react';

export default  App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <>
        <Button type="button" onClick={() => setIsOpen(true)}>Открыть модальное окно</Button>
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
`}),t.jsx(s,{height:350,description:"Пример модального окна с возможностью перетаскивания.",code:`import { Button, Modal, Typography }  from '@nlmk/ds-2.0';
import { useState } from 'react';

export default  App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <>
        <Button type="button" onClick={() => setIsOpen(true)}>Открыть модальное окно</Button>
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
`}),t.jsx(s,{height:350,description:"Пример модального окна с возможностью изменения размера.",code:`import { Button, Modal, Typography }  from '@nlmk/ds-2.0';
import { useState } from 'react';

export default  App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
      <>
        <Button type="button" onClick={() => setIsOpen(true)}>Открыть модальное окно</Button>
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
`}),t.jsx(y,{argsTypes:u})]}),Number(o)===1&&t.jsx(b,{url:p}),Number(o)===2&&t.jsx(h,{componentName:"Modal"})]})};function i(o){return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Components/Modal/Info",component:f,parameters:{design:{type:"figma",url:"https://www.figma.com/file/BU6Pd9uO1AIVa1yDqhr0hw/Drawer%2FModal-window?type=design&node-id=1-17&mode=dev"},jest:["Modal.test.tsx"]}}),`
`,t.jsx(l,{of:g}),`
`,t.jsx(d,{children:t.jsx(M,{})})]})}function dt(o={}){const{wrapper:e}={...c(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(i,{...o})}):i()}export{dt as default};
