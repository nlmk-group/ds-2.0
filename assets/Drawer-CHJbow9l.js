import{r as a,j as r,m,S as n,U as c}from"./iframe-BiRbIEmb.js";import{useMDXComponents as l}from"./index-DFADegm-.js";import{D as u}from"./index-DzTuMbmH.js";import{DecoratorDefault as d}from"./Decorator.stories-Cq2K7ZK_.js";import{s,H as f,E as i}from"./Header-BOuFM4z3.js";import{F as w}from"./FigmaEmbed-DXWxjqCs.js";import{P as D}from"./Properties-CTw5qxDW.js";import{T as x}from"./Tests-u2K_XUZf.js";import{T as o}from"./index-Bc-rzIjC.js";import{a as j}from"./argsTypes-940CHTRI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDGZFkub.js";import"./index-CIk7IDPA.js";import"./clsx-B-dksMZM.js";import"./index-CuPa9ZS_.js";import"./types-TdnjS80C.js";import"./24-3PxmqcmV.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-CDeU-sH7.js";import"./index-DDnqRqhr.js";import"./index-t6GndyZ6.js";import"./index-BLKLNOs5.js";import"./generateUUID-M57HTP56.js";import"./24-DOr3c8sx.js";import"./sizesMapping-D8QavrGc.js";import"./index-BC1L0GA_.js";import"./index-BbyeJaRT.js";import"./index-17UNxjz6.js";import"./index-D4AgSARz.js";import"./32-Lr1o5q5Y.js";import"./24-BbKUo3HT.js";import"./24-Bp_HhEEU.js";import"./24-A5UfwTSh.js";import"./24-BFTkICnz.js";import"./24-CkBhKuNp.js";import"./24-99ZCpV7Q.js";import"./24-DuGNUhV0.js";import"./24-BSYcdl4j.js";import"./16-XX98Hoxr.js";import"./24-BLu740_K.js";import"./16-DUa4Gnlc.js";import"./16-CSBhMP4b.js";import"./16-DMPWLjn6.js";const b=()=>{const[t,e]=a.useState(0);return r.jsxs("div",{className:s.wrapper,children:[r.jsx(f,{title:"Drawer",description:"Компонент Drawer обеспечивает отображение выдвижной панели с возможностью настройки позиции и обработки закрытия.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Drawer"}),r.jsx("div",{className:s.tabs,children:r.jsxs(o,{children:[r.jsx(o.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>e(0)}),r.jsx(o.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>e(1)}),r.jsx(o.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>e(2)})]})}),Number(t)===0&&r.jsxs(r.Fragment,{children:[r.jsx(i,{height:350,description:"Пример базового использования Drawer.",code:`import { Button, Drawer, Typography }  from '@nlmk/ds-2.0';
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
