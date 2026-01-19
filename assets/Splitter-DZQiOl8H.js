import{r as a,j as t,m as s,S as n,U as l}from"./iframe-tXE4xoYc.js";import{useMDXComponents as c}from"./index-BU2Hc1BN.js";import{S as d}from"./index-C6dStd6u.js";import{DecoratorDefault as x}from"./Decorator.stories-DX_mk-19.js";import{s as p,H as g,E as u}from"./Header-D7Lkw1fr.js";import{F as y}from"./FigmaEmbed-DGce_rmk.js";import{P as b}from"./Properties-3Caa_vUq.js";import{T as h}from"./Tests-COuvSTuJ.js";/* empty css               */import{T as e}from"./index-BdAkzp84.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-IJbXH1LS.js";import"./index-BJ8dPBsg.js";import"./index-DnvHMcnj.js";import"./index-BQHkH-Oh.js";import"./index-D0fx2znr.js";import"./generateUUID-M57HTP56.js";import"./24-CGaTDQAV.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-UIqxTLHU.js";import"./sizesMapping-D8QavrGc.js";import"./index-D3OER6c8.js";import"./index-DfJPKXXV.js";import"./index-CjsErmK6.js";import"./index-Cx9ne2MY.js";import"./index-BavAFXG7.js";import"./32-C-sXzJO7.js";import"./24-CmyNkjMd.js";import"./24-DOosEbor.js";import"./24-BWrbmGeu.js";import"./24-BbCg_oVA.js";import"./24-DRYMupHO.js";import"./24-CzQL-KAt.js";import"./24-DKRMhkuJ.js";import"./24-BGmf7Yvo.js";import"./24-C3aWb0fW.js";import"./16-5OD6xOBP.js";import"./24-DhcVhNlZ.js";import"./16-DrGrHANJ.js";import"./16-3aq9OzD6.js";import"./16-Caqr7FMr.js";const f={topComponent:{description:"Верхний компонент",type:{summary:"ReactNode"}},bottomComponent:{description:"Нижний компонент",type:{summary:"ReactNode"}}},i="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=286-17862",j=()=>{const[o,r]=a.useState(0);return t.jsxs("div",{className:p.wrapper,children:[t.jsx(g,{title:"Splitter",description:"Splitter — это компонент, предназначенный для разделения экрана на две части: верхнюю и нижнюю панели. Этот компонент полезен, когда вам нужно показать два разных элемента или группы информации в одной области и позволить пользователю управлять их размерами.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Splitter",figmaLink:i}),t.jsx("div",{className:p.tabs,children:t.jsxs(e,{children:[t.jsx(e.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>r(0)}),t.jsx(e.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>r(1)}),t.jsx(e.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>r(2)})]})}),Number(o)===0&&t.jsxs(t.Fragment,{children:[t.jsx(u,{height:500,description:"Базовое использование Splitter",code:`import React from 'react';
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
