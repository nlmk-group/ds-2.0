import{j as r}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as p}from"./index-DtGqrCZN.js";import{ag as m,ah as n,ai as c}from"./chunk-NUUEMKO5-Ctn7VFPu.js";import{$ as o,D as l}from"./index-ZojCmbpv.js";import{DecoratorDefault as d}from"./Decorator.stories-CffsLfgf.js";import{r as u}from"./index-Cu9bd8lq.js";import{s,H as f,E as a}from"./Header-CN10_-75.js";import{F as w}from"./FigmaEmbed-2TZ9ZXkF.js";import{P as D}from"./Properties-Btz1YxCe.js";import{T as x}from"./Tests-CWaY5hDn.js";import"./generateUUID-CG7VmJJw.js";import"./index-XsxLq1mj.js";import"./index-AXtJih2E.js";import"./index-ED8ccfsJ.js";import"./index-CWQ0GGcJ.js";import"./index-BHxe-dnq.js";import"./index-iWHyAWYR.js";import"./index-BztLnIMF.js";import"./index-Udc0C2Qz.js";import"./index-CPdpS9Jm.js";import"./32-Bjhqu_Pf.js";import{a as g}from"./argsTypes-DzglXe4b.js";import"./iframe-DB6xw0G7.js";import"../sb-preview/runtime.js";import"./index-Ckls47V4.js";import"./index-D-8MO0q_.js";import"./get-CeVb1zXw.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-ebfOklXd.js";import"./index-DrFu-skq.js";import"./client-C_RBoFGa.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-mZjneSg7.js";import"./index-7KVZVlDS.js";const h=()=>{const[t,e]=u.useState(0);return r.jsxs("div",{className:s.wrapper,children:[r.jsx(f,{title:"Drawer",description:"Компонент Drawer обеспечивает отображение выдвижной панели с возможностью настройки позиции и обработки закрытия.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Drawer"}),r.jsx("div",{className:s.tabs,children:r.jsxs(o,{children:[r.jsx(o.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>e(0)}),r.jsx(o.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>e(2)})]})}),Number(t)===0&&r.jsxs(r.Fragment,{children:[r.jsx(a,{height:350,description:"Пример базового использования Drawer.",code:`import { Button, Drawer, Typography }  from '@nlmk/ds-2.0';
import { useState } from 'react';

export default  App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <>
        <Button onClick={() => setIsOpen(true)}>Открыть Drawer</Button>
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
        <Button onClick={() => setIsOpen(true)}>Открыть Drawer слева</Button>
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
`}),r.jsx(D,{argsTypes:g})]}),Number(t)===1&&r.jsx(w,{url:"https://www.figma.com/file/0BGHYt5CjO71I4KhygQJD5/DS2.0-Filtering-%26-Sorting?node-id=534-67220"}),Number(t)===2&&r.jsx(x,{componentName:"Drawer"})]})};function i(t){return r.jsxs(r.Fragment,{children:[r.jsx(m,{title:"Components/Drawer/Info",component:l,parameters:{design:{type:"figma",url:"https://www.figma.com/file/0BGHYt5CjO71I4KhygQJD5/DS2.0-Filtering-%26-Sorting?node-id=534-67220"},jest:["Drawer.test.tsx"]}}),`
`,r.jsx(n,{of:d}),`
`,r.jsx(c,{children:r.jsx(h,{})})]})}function or(t={}){const{wrapper:e}={...p(),...t.components};return e?r.jsx(e,{...t,children:r.jsx(i,{...t})}):i()}export{or as default};
