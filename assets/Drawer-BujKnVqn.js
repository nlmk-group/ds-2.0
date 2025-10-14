import{j as r}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as p}from"./index-D2yTtfOz.js";import"./index-DdXQuNHV.js";import{ah as o,ax as m}from"./TreeList-BLZWONv9.js";import{DecoratorDefault as n}from"./Decorator.stories-D7iJJ_iz.js";import{r as c}from"./index-BcJSXhQi.js";import{s,H as l,E as a}from"./Header-BAtFoR7j.js";import{F as u}from"./FigmaEmbed-iL38sq9v.js";import{P as d}from"./Properties-DyMPcb7Z.js";import{T as f}from"./Tests-BetImSxx.js";import"./generateUUID-Cm0X4XRy.js";import"./index-cHpEh_mw.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-CQem5UP1.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-bO57duG5.js";import"./index-C5rKoyII.js";import"./32-CkUgnIrf.js";import{a as w}from"./argsTypes-BuiAsmg8.js";import{c as x,S as D,U as j}from"./DocsRenderer-CFRXHY34-mULDhUCX.js";import"./index-ChsGqxH_.js";import"./preview-BTcIOkug.js";import"./iframe-tAyiefTe.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-DvnLtGpU.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const b=()=>{const[t,e]=c.useState(0);return r.jsxs("div",{className:s.wrapper,children:[r.jsx(l,{title:"Drawer",description:"Компонент Drawer обеспечивает отображение выдвижной панели с возможностью настройки позиции и обработки закрытия.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Drawer"}),r.jsx("div",{className:s.tabs,children:r.jsxs(o,{children:[r.jsx(o.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>e(0)}),r.jsx(o.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>e(1)}),r.jsx(o.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>e(2)})]})}),Number(t)===0&&r.jsxs(r.Fragment,{children:[r.jsx(a,{height:350,description:"Пример базового использования Drawer.",code:`import { Button, Drawer, Typography }  from '@nlmk/ds-2.0';
import { useState } from 'react';

export default  App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <>
        <Button type="button" onClick={() => setIsOpen(true)}>Открыть Drawer</Button>
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
`}),r.jsx(a,{height:350,description:"Пример Drawer, открывающегося слева.",code:`import { Button, Drawer, Typography }  from '@nlmk/ds-2.0';
import { useState } from 'react';

export default  App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <>
        <Button type="button" onClick={() => setIsOpen(true)}>Открыть Drawer слева</Button>
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
`}),r.jsx(d,{argsTypes:w})]}),Number(t)===1&&r.jsx(u,{url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=286-1924&p=f"}),Number(t)===2&&r.jsx(f,{componentName:"Drawer"})]})};function i(t){return r.jsxs(r.Fragment,{children:[r.jsx(x,{title:"Components/Drawer/Info",component:m,parameters:{design:{type:"figma",url:"https://www.figma.com/file/0BGHYt5CjO71I4KhygQJD5/DS2.0-Filtering-%26-Sorting?node-id=534-67220"},jest:["Drawer.test.tsx"]}}),`
`,r.jsx(D,{of:n}),`
`,r.jsx(j,{children:r.jsx(b,{})})]})}function ar(t={}){const{wrapper:e}={...p(),...t.components};return e?r.jsx(e,{...t,children:r.jsx(i,{...t})}):i()}export{ar as default};
