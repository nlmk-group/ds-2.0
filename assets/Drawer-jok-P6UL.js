import{j as r}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as p}from"./index-CbmgEnq2.js";import"./index-Cg4FlZUc.js";import{ag as o,ay as n}from"./TreeList-ChyggQS5.js";import{DecoratorDefault as m}from"./Decorator.stories-B1hjNCvN.js";import{r as c}from"./index-Bnop-kX6.js";import{s,H as l,E as a}from"./Header-DoEz7EVi.js";import{F as u}from"./FigmaEmbed-pZ_Xsbw5.js";import{P as d}from"./Properties-BySoTS4I.js";import{T as f}from"./Tests-OdO6CFav.js";import"./generateUUID-X09o9Pdp.js";import"./index-qbkiYuzD.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DovCGOp-.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-n_FSf3Cv.js";import"./index-DokmLR-l.js";import"./32-BTlKmMLd.js";import{a as w}from"./argsTypes-Dmx-BuIH.js";import{c as D,e as x,U as g}from"./DocsRenderer-CFRXHY34-Bs6YVDKr.js";import"./preview-ft71v16T.js";import"./iframe-CWffINz-.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-mpWeDU2g.js";import"./index-B5g4YLzC.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";const j=()=>{const[t,e]=c.useState(0);return r.jsxs("div",{className:s.wrapper,children:[r.jsx(l,{title:"Drawer",description:"Компонент Drawer обеспечивает отображение выдвижной панели с возможностью настройки позиции и обработки закрытия.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Drawer"}),r.jsx("div",{className:s.tabs,children:r.jsxs(o,{children:[r.jsx(o.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>e(0)}),r.jsx(o.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>e(1)}),r.jsx(o.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>e(2)})]})}),Number(t)===0&&r.jsxs(r.Fragment,{children:[r.jsx(a,{height:350,description:"Пример базового использования Drawer.",code:`import { Button, Drawer, Typography }  from '@nlmk/ds-2.0';
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
`}),r.jsx(d,{argsTypes:w})]}),Number(t)===1&&r.jsx(u,{url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=286-1924&p=f"}),Number(t)===2&&r.jsx(f,{componentName:"Drawer"})]})};function i(t){return r.jsxs(r.Fragment,{children:[r.jsx(D,{title:"Components/Drawer/Info",component:n,parameters:{design:{type:"figma",url:"https://www.figma.com/file/0BGHYt5CjO71I4KhygQJD5/DS2.0-Filtering-%26-Sorting?node-id=534-67220"},jest:["Drawer.test.tsx"]}}),`
`,r.jsx(x,{of:m}),`
`,r.jsx(g,{children:r.jsx(j,{})})]})}function or(t={}){const{wrapper:e}={...p(),...t.components};return e?r.jsx(e,{...t,children:r.jsx(i,{...t})}):i()}export{or as default};
