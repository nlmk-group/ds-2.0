import{j as r}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as p}from"./index-D2yTtfOz.js";import"./index-DPURVl01.js";import{af as o,ax as m}from"./TreeList-Dc9EUqUK.js";import{DecoratorDefault as n}from"./Decorator.stories-D7iJJ_iz.js";import{r as c}from"./index-BcJSXhQi.js";import{s,H as l,E as a}from"./Header-DCsDbjem.js";import{F as u}from"./FigmaEmbed-Cz0sPeca.js";import{P as d}from"./Properties-BuFAmruQ.js";import{T as f}from"./Tests-BvJI3PiN.js";import"./generateUUID-Cr6BF8sx.js";import"./index-D9qQUMnP.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-ClHhEkhs.js";import"./index-DmffzHLE.js";import"./index-53N2drcz.js";import"./index-VmJK6twV.js";import"./index-BPWT-JIL.js";import"./index-BQAMZg9d.js";import"./index-C1EIKtiR.js";import"./32-DMwn_7G4.js";import{a as w}from"./argsTypes-GYoHfaOx.js";import{c as x,S as D,U as j}from"./DocsRenderer-CFRXHY34-Dyg41BAy.js";import"./index-ChsGqxH_.js";import"./preview-tW-mVJDs.js";import"./iframe-CTrSWHGI.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-VxmNWdDd.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const b=()=>{const[t,e]=c.useState(0);return r.jsxs("div",{className:s.wrapper,children:[r.jsx(l,{title:"Drawer",description:"Компонент Drawer обеспечивает отображение выдвижной панели с возможностью настройки позиции и обработки закрытия.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Drawer"}),r.jsx("div",{className:s.tabs,children:r.jsxs(o,{children:[r.jsx(o.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>e(0)}),r.jsx(o.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>e(1)}),r.jsx(o.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>e(2)})]})}),Number(t)===0&&r.jsxs(r.Fragment,{children:[r.jsx(a,{height:350,description:"Пример базового использования Drawer.",code:`import { Button, Drawer, Typography }  from '@nlmk/ds-2.0';
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
