import{r as n,j as t,m,S as l,U as d}from"./iframe-tXE4xoYc.js";import{useMDXComponents as c}from"./index-BU2Hc1BN.js";import{a as u,M as f}from"./argsTypes-CnALDu-v.js";import{DecoratorDefault as g}from"./Decorator.stories-DX_mk-19.js";import{s as a,H as x,E as s}from"./Header-D7Lkw1fr.js";import{F as b}from"./FigmaEmbed-DGce_rmk.js";import{P as y}from"./Properties-3Caa_vUq.js";import{T as h}from"./Tests-COuvSTuJ.js";import{T as r}from"./index-BdAkzp84.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DfJPKXXV.js";import"./index-IJbXH1LS.js";import"./clsx-B-dksMZM.js";import"./index-UIqxTLHU.js";import"./24-C3aWb0fW.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-BJ8dPBsg.js";import"./index-DnvHMcnj.js";import"./index-BQHkH-Oh.js";import"./index-D0fx2znr.js";import"./generateUUID-M57HTP56.js";import"./24-CGaTDQAV.js";import"./sizesMapping-D8QavrGc.js";import"./index-D3OER6c8.js";import"./index-CjsErmK6.js";import"./index-Cx9ne2MY.js";import"./index-BavAFXG7.js";import"./32-C-sXzJO7.js";import"./24-CmyNkjMd.js";import"./24-DOosEbor.js";import"./24-BWrbmGeu.js";import"./24-BbCg_oVA.js";import"./24-DRYMupHO.js";import"./24-CzQL-KAt.js";import"./24-DKRMhkuJ.js";import"./24-BGmf7Yvo.js";import"./16-5OD6xOBP.js";import"./24-DhcVhNlZ.js";import"./16-DrGrHANJ.js";import"./16-3aq9OzD6.js";import"./16-Caqr7FMr.js";const p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=286-1924&t=HhCDuaOuzHu5rgyf-1",M=()=>{const[o,e]=n.useState(0);return t.jsxs("div",{className:a.wrapper,children:[t.jsx(x,{title:"Modal",description:"Компонент Modal обеспечивает отображение модальных окон с возможностями перетаскивания, изменения размера и обработки закрытия.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Modal",figmaLink:p}),t.jsx("div",{className:a.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>e(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>e(1)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>e(2)})]})}),Number(o)===0&&t.jsxs(t.Fragment,{children:[t.jsx(s,{height:350,description:"Пример базового использования модального окна.",code:`import { Button, Modal, Typography }  from '@nlmk/ds-2.0';
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
