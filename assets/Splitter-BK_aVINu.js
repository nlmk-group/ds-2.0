import{r as a,j as t,f as s,S as n,U as l}from"./iframe-CVAHojaF.js";import{useMDXComponents as c}from"./index-DqTt4rKv.js";import{S as d}from"./index-D86ZRs-a.js";import{DecoratorDefault as x}from"./Decorator.stories-Pdz9giCE.js";import{s as p,H as g,E as u}from"./Header-P01wOpj2.js";import{F as y}from"./FigmaEmbed-g9QqaeRo.js";import{P as b}from"./Properties-1BWy3pzy.js";import{T as h}from"./Tests-MQmjhMeS.js";/* empty css               */import{T as e}from"./index-Cyj4_MYZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-BHrg75jh.js";import"./index-Bivvm1z2.js";import"./index-BHMo20JE.js";import"./index-DbWCe9dP.js";import"./index-BVgG5EPb.js";import"./generateUUID-M57HTP56.js";import"./24-BKsua3Hk.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-x8Y8AkZd.js";import"./sizesMapping-D8QavrGc.js";import"./index-zQ6Q3aTj.js";import"./index-DZ_c8xXN.js";import"./index-CqzaiicI.js";import"./index-C8HyjBOv.js";import"./index-BN_w7FjE.js";import"./32-BGkTw_Iv.js";import"./24-DhWu0U6R.js";import"./24-QBRQbIxz.js";import"./24-DbZB43lA.js";import"./24-CpQC9mRz.js";import"./24-D4AD88CD.js";import"./24-i225Oh9B.js";import"./24-Tgd-_Nih.js";import"./24-BHgrLOFn.js";import"./24-DKX7LJ7g.js";import"./16-D51laVEK.js";import"./24-DoIGH_dx.js";import"./16-D08SDomb.js";import"./16-R8HovCn5.js";import"./16-DOUHJXJi.js";const f={topComponent:{description:"Верхний компонент",type:{summary:"ReactNode"}},bottomComponent:{description:"Нижний компонент",type:{summary:"ReactNode"}}},i="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=286-17862",j=()=>{const[o,r]=a.useState(0);return t.jsxs("div",{className:p.wrapper,children:[t.jsx(g,{title:"Splitter",description:"Splitter — это компонент, предназначенный для разделения экрана на две части: верхнюю и нижнюю панели. Этот компонент полезен, когда вам нужно показать два разных элемента или группы информации в одной области и позволить пользователю управлять их размерами.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Splitter",figmaLink:i}),t.jsx("div",{className:p.tabs,children:t.jsxs(e,{children:[t.jsx(e.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>r(0)}),t.jsx(e.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>r(1)}),t.jsx(e.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>r(2)})]})}),Number(o)===0&&t.jsxs(t.Fragment,{children:[t.jsx(u,{height:500,description:"Базовое использование Splitter",code:`import React from 'react';
import { Splitter, Box, Typography, ImagePicture } from '@nlmk/ds-2.0';

const SplitterExample = () => {
  const topComponent = (
    <Box 
      alignItems="flex-start"
      gap="16px"
      style={{ 
        height: '100%',
        padding: '16px',
        background: 'var(--unique-background)'
      }}
    >
      <Typography variant="Heading4" color="var(--steel-90)">
        Информация
      </Typography>
      <Typography variant="Body1-Medium" color="var(--steel-90)">
        Верхняя панель со скроллом при необходимости. 
        Разделитель можно перетаскивать для изменения размеров панелей.
      </Typography>
    </Box>
  );

  const bottomComponent = (
    <Box 
      alignItems="flex-start"
      gap="16px"
      style={{ 
        height: '100%',
        padding: '16px',
        background: 'var(--unique-background)'
      }}
    >
      <Typography variant="Heading4" color="var(--steel-90)">
        Информация
      </Typography>
      <Typography variant="Body1-Medium" color="var(--steel-90)">
        Нижняя панель со скроллом при необходимости. 
        Разделитель можно перетаскивать для изменения размеров панелей.
      </Typography>
    </Box>
  );

  return (
    <>
      <div style={{ height: '200px' }}>
        <Splitter
          topComponent={topComponent}
          bottomComponent={bottomComponent}
        />
      </div>
    </>
  );
};

export default SplitterExample;`}),t.jsx(b,{argsTypes:f})]}),Number(o)===1&&t.jsx(y,{url:i}),Number(o)===2&&t.jsx(h,{componentName:"Splitter"})]})};function m(o){return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Components/Splitter/Info",component:d,parameters:{design:{type:"figma"},jest:["Splitter.test.tsx"]}}),`
`,t.jsx(n,{of:x}),`
`,t.jsx(l,{children:t.jsx(j,{})})]})}function nt(o={}){const{wrapper:r}={...c(),...o.components};return r?t.jsx(r,{...o,children:t.jsx(m,{...o})}):m()}export{nt as default};
