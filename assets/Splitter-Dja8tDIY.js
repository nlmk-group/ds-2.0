import{r as a,j as t,m as s,S as n,U as l}from"./iframe-DUDunD5j.js";import{useMDXComponents as c}from"./index-CDbv5Jgm.js";import{S as d}from"./index-CoBKSmjw.js";import{DecoratorDefault as x}from"./Decorator.stories-DJdCAXEf.js";import{s as p,H as g,E as u}from"./Header-BrZEypuE.js";import{F as y}from"./FigmaEmbed-DovFRgvJ.js";import{P as b}from"./Properties-CcP2VO-p.js";import{T as h}from"./Tests-CSK3RYMm.js";/* empty css               */import{T as e}from"./index-DntXJei4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-DyX2qzoz.js";import"./index-rc7u3FmU.js";import"./index-z_YeHj0K.js";import"./index-r-uICxAh.js";import"./index-BS4wiMYT.js";import"./generateUUID-M57HTP56.js";import"./24-C5ui32Ki.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-YMfOmFJ1.js";import"./sizesMapping-D8QavrGc.js";import"./index-BixcmxoL.js";import"./index-aoSKrGJR.js";import"./index-BE6Pvktf.js";import"./index-BjTLv_jS.js";import"./index-DdmbHqmW.js";import"./32-BB59z0Rt.js";import"./24-tbbQM-dv.js";import"./24-BLuChUkw.js";import"./24-BGpvFgfj.js";import"./24-BGrLeqpw.js";import"./24-CAewpWgK.js";import"./24-BoEjxhhs.js";import"./24-BAIQ796Q.js";import"./24-BwgIJwEH.js";import"./24-C99UGV7O.js";import"./16-CfofIm8-.js";import"./24-CoSTS1kQ.js";import"./16-DEDu0dyt.js";import"./16-BarbOM5u.js";import"./16-4gnAFB8p.js";const f={topComponent:{description:"Верхний компонент",type:{summary:"ReactNode"}},bottomComponent:{description:"Нижний компонент",type:{summary:"ReactNode"}}},i="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=286-17862",j=()=>{const[o,r]=a.useState(0);return t.jsxs("div",{className:p.wrapper,children:[t.jsx(g,{title:"Splitter",description:"Splitter — это компонент, предназначенный для разделения экрана на две части: верхнюю и нижнюю панели. Этот компонент полезен, когда вам нужно показать два разных элемента или группы информации в одной области и позволить пользователю управлять их размерами.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Splitter",figmaLink:i}),t.jsx("div",{className:p.tabs,children:t.jsxs(e,{children:[t.jsx(e.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>r(0)}),t.jsx(e.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>r(1)}),t.jsx(e.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>r(2)})]})}),Number(o)===0&&t.jsxs(t.Fragment,{children:[t.jsx(u,{height:500,description:"Базовое использование Splitter",code:`import React from 'react';
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
