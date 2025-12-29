import{r as a,j as r,f as m,S as n,U as c}from"./iframe-CVAHojaF.js";import{useMDXComponents as l}from"./index-DqTt4rKv.js";import{D as u}from"./index-nNl04MKo.js";import{DecoratorDefault as d}from"./Decorator.stories-Pdz9giCE.js";import{s,H as f,E as i}from"./Header-P01wOpj2.js";import{F as w}from"./FigmaEmbed-g9QqaeRo.js";import{P as D}from"./Properties-1BWy3pzy.js";import{T as x}from"./Tests-MQmjhMeS.js";import{T as o}from"./index-Cyj4_MYZ.js";import{a as j}from"./argsTypes-940CHTRI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DZ_c8xXN.js";import"./index-BHrg75jh.js";import"./clsx-B-dksMZM.js";import"./index-x8Y8AkZd.js";import"./types-TdnjS80C.js";import"./24-DKX7LJ7g.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-Bivvm1z2.js";import"./index-BHMo20JE.js";import"./index-DbWCe9dP.js";import"./index-BVgG5EPb.js";import"./generateUUID-M57HTP56.js";import"./24-BKsua3Hk.js";import"./sizesMapping-D8QavrGc.js";import"./index-zQ6Q3aTj.js";import"./index-CqzaiicI.js";import"./index-C8HyjBOv.js";import"./index-BN_w7FjE.js";import"./32-BGkTw_Iv.js";import"./24-DhWu0U6R.js";import"./24-QBRQbIxz.js";import"./24-DbZB43lA.js";import"./24-CpQC9mRz.js";import"./24-D4AD88CD.js";import"./24-i225Oh9B.js";import"./24-Tgd-_Nih.js";import"./24-BHgrLOFn.js";import"./16-D51laVEK.js";import"./24-DoIGH_dx.js";import"./16-D08SDomb.js";import"./16-R8HovCn5.js";import"./16-DOUHJXJi.js";const b=()=>{const[t,e]=a.useState(0);return r.jsxs("div",{className:s.wrapper,children:[r.jsx(f,{title:"Drawer",description:"Компонент Drawer обеспечивает отображение выдвижной панели с возможностью настройки позиции и обработки закрытия.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Drawer"}),r.jsx("div",{className:s.tabs,children:r.jsxs(o,{children:[r.jsx(o.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>e(0)}),r.jsx(o.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>e(1)}),r.jsx(o.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>e(2)})]})}),Number(t)===0&&r.jsxs(r.Fragment,{children:[r.jsx(i,{height:350,description:"Пример базового использования Drawer.",code:`import { Button, Drawer, Typography }  from '@nlmk/ds-2.0';
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
