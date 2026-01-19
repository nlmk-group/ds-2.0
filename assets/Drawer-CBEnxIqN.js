import{r as a,j as r,m,S as n,U as c}from"./iframe-BPtLBEuk.js";import{useMDXComponents as l}from"./index-DY5aY42c.js";import{D as u}from"./index-B956QwUM.js";import{DecoratorDefault as d}from"./Decorator.stories-Bt-6wqMy.js";import{s,H as f,E as i}from"./Header-lxb-Wymn.js";import{F as w}from"./FigmaEmbed-IQ2Nn4zn.js";import{P as D}from"./Properties-u6_xeg7P.js";import{T as x}from"./Tests-DUUoQDTR.js";import{T as o}from"./index-CX87Y9E4.js";import{a as j}from"./argsTypes-940CHTRI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5OaxW6Y.js";import"./index-C9_7xPUt.js";import"./clsx-B-dksMZM.js";import"./index-D-pLh_NR.js";import"./types-TdnjS80C.js";import"./24-BA0GVvoT.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-DZQvJksB.js";import"./index-BUWLdeqz.js";import"./index-D9G_R1e4.js";import"./index-V5PZJFO3.js";import"./generateUUID-M57HTP56.js";import"./24-8ackLhic.js";import"./sizesMapping-D8QavrGc.js";import"./index-yAFWEvQV.js";import"./index-CANPVv15.js";import"./index-d_6bz31j.js";import"./index-CDRf2h9x.js";import"./32-DeoBrCvQ.js";import"./24-CrLAaNeG.js";import"./24-CpcywAhj.js";import"./24-Ch6Cnsji.js";import"./24-Q7FkUsyZ.js";import"./24-DOwtHgIx.js";import"./24-B4m_3SjA.js";import"./24-CV2ikCuL.js";import"./24-Ba8I7UHN.js";import"./16-CXoys7qm.js";import"./24-Cxxq2bXd.js";import"./16-DwnwCPW9.js";import"./16-BY-nZnBX.js";import"./16-DaMJtJxQ.js";const b=()=>{const[t,e]=a.useState(0);return r.jsxs("div",{className:s.wrapper,children:[r.jsx(f,{title:"Drawer",description:"Компонент Drawer обеспечивает отображение выдвижной панели с возможностью настройки позиции и обработки закрытия.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Drawer"}),r.jsx("div",{className:s.tabs,children:r.jsxs(o,{children:[r.jsx(o.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>e(0)}),r.jsx(o.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>e(1)}),r.jsx(o.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>e(2)})]})}),Number(t)===0&&r.jsxs(r.Fragment,{children:[r.jsx(i,{height:350,description:"Пример базового использования Drawer.",code:`import { Button, Drawer, Typography }  from '@nlmk/ds-2.0';
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
`}),r.jsx(i,{height:350,description:"Пример Drawer, открывающегося слева.",code:`import { Button, Drawer, Typography }  from '@nlmk/ds-2.0';
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
`}),r.jsx(D,{argsTypes:j})]}),Number(t)===1&&r.jsx(w,{url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=286-1924&p=f"}),Number(t)===2&&r.jsx(x,{componentName:"Drawer"})]})};function p(t){return r.jsxs(r.Fragment,{children:[r.jsx(m,{title:"Components/Drawer/Info",component:u,parameters:{design:{type:"figma",url:"https://www.figma.com/file/0BGHYt5CjO71I4KhygQJD5/DS2.0-Filtering-%26-Sorting?node-id=534-67220"},jest:["Drawer.test.tsx"]}}),`
`,r.jsx(n,{of:d}),`
`,r.jsx(c,{children:r.jsx(b,{})})]})}function lr(t={}){const{wrapper:e}={...l(),...t.components};return e?r.jsx(e,{...t,children:r.jsx(p,{...t})}):p()}export{lr as default};
