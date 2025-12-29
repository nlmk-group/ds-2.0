import{r as n,j as t,f as m,S as l,U as d}from"./iframe-zk5xXBtA.js";import{useMDXComponents as c}from"./index-CSMoqiIu.js";import{a as u,M as f}from"./argsTypes-DHKHtww2.js";import{DecoratorDefault as g}from"./Decorator.stories-XjMTlGWF.js";import{s as a,H as x,E as s}from"./Header-BMqOixcD.js";import{F as b}from"./FigmaEmbed-Bh-YhisY.js";import{P as y}from"./Properties-BH32KsQA.js";import{T as h}from"./Tests-BiRJAIxZ.js";import{T as r}from"./index-CGZqhooT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CTfBpVCI.js";import"./index-9BCGLlQQ.js";import"./clsx-B-dksMZM.js";import"./index-B9FTsAqd.js";import"./24-CHUQ235a.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-D9zx9C-F.js";import"./index-6T6AONQH.js";import"./index-DjSUGs5w.js";import"./index-CBNcLMKv.js";import"./generateUUID-M57HTP56.js";import"./24-BkbQ4VQu.js";import"./sizesMapping-D8QavrGc.js";import"./index-Is2qauMo.js";import"./index-DirQniBD.js";import"./index-cDYWclvM.js";import"./index-1zUxKm4P.js";import"./32-D1ipBNS6.js";import"./24-BU8fW5nS.js";import"./24-CsxFkFpg.js";import"./24-Cg1MPBHI.js";import"./24-BGS-MQmY.js";import"./24-2PvTlRtj.js";import"./24-DyWGmQTd.js";import"./24-DrF3F4Gh.js";import"./24-DXO8B9MT.js";import"./16-D0071456.js";import"./24-CzaQJmC-.js";import"./16-D1MigzhA.js";import"./16-J9oiRdzb.js";import"./16-qJIrzOil.js";const p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=286-1924&t=HhCDuaOuzHu5rgyf-1",M=()=>{const[o,e]=n.useState(0);return t.jsxs("div",{className:a.wrapper,children:[t.jsx(x,{title:"Modal",description:"Компонент Modal обеспечивает отображение модальных окон с возможностями перетаскивания, изменения размера и обработки закрытия.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Modal",figmaLink:p}),t.jsx("div",{className:a.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>e(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>e(1)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>e(2)})]})}),Number(o)===0&&t.jsxs(t.Fragment,{children:[t.jsx(s,{height:350,description:"Пример базового использования модального окна.",code:`import { Button, Modal, Typography }  from '@nlmk/ds-2.0';
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
