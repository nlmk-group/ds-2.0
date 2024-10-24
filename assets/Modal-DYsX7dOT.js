import{j as t}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as n}from"./index-CpguRmgc.js";import{ag as m,ah as l,ai as d}from"./chunk-NUUEMKO5-DmRVdHm4.js";import{a0 as s,ai as c}from"./index-LmI_Dv35.js";import{DecoratorDefault as u}from"./Decorator.stories-Cj5eYJIK.js";import{r as f}from"./index-DQ2WTIsS.js";import{s as a,H as g,E as r}from"./Header-DSdDcM52.js";import{F as x}from"./FigmaEmbed-CPAeeGqT.js";import{P as h}from"./Properties-BBxvoQ9o.js";import{T as b}from"./Tests-DuDJvCih.js";import"./generateUUID-DDiDEiZj.js";import"./index-BUicYAu_.js";import"./index-CSbymPMC.js";import"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import"./index-ehXB0alm.js";import"./index-BKAatnfy.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-CLzAcar6.js";import"./32-sVrGXRAZ.js";import{a as y}from"./argsTypes-BM08roHr.js";import"./iframe-BdS8jkpQ.js";import"../sb-preview/runtime.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-oHtgdQEu.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DsjOqT4x.js";import"./index-DrFu-skq.js";import"./client-Du4Z4Qeu.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BHGErQnu.js";import"./index-BKbm6zW0.js";const i="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=286-1924&t=HhCDuaOuzHu5rgyf-1",M=()=>{const[e,o]=f.useState(0);return t.jsxs("div",{className:a.wrapper,children:[t.jsx(g,{title:"Modal",description:"Компонент Modal обеспечивает отображение модальных окон с возможностями перетаскивания, изменения размера и обработки закрытия.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Modal",figmaLink:i}),t.jsx("div",{className:a.tabs,children:t.jsxs(s,{children:[t.jsx(s.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>o(0)}),t.jsx(s.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>o(1)}),t.jsx(s.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>o(2)})]})}),Number(e)===0&&t.jsxs(t.Fragment,{children:[t.jsx(r,{height:350,description:"Пример базового использования модального окна.",code:`import { Button, Modal, Typography }  from '@nlmk/ds-2.0';
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
`,t.jsx(d,{children:t.jsx(M,{})})]})}function at(e={}){const{wrapper:o}={...n(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(p,{...e})}):p()}export{at as default};
