import{r as a,j as t,m as s,S as n,U as l}from"./iframe-BiRbIEmb.js";import{useMDXComponents as c}from"./index-DFADegm-.js";import{S as d}from"./index-I4z-Q6Gm.js";import{DecoratorDefault as x}from"./Decorator.stories-Cq2K7ZK_.js";import{s as p,H as g,E as u}from"./Header-BOuFM4z3.js";import{F as y}from"./FigmaEmbed-DXWxjqCs.js";import{P as b}from"./Properties-CTw5qxDW.js";import{T as h}from"./Tests-u2K_XUZf.js";/* empty css               */import{T as e}from"./index-Bc-rzIjC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-CIk7IDPA.js";import"./index-CDeU-sH7.js";import"./index-DDnqRqhr.js";import"./index-t6GndyZ6.js";import"./index-BLKLNOs5.js";import"./generateUUID-M57HTP56.js";import"./24-DOr3c8sx.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-CuPa9ZS_.js";import"./sizesMapping-D8QavrGc.js";import"./index-BC1L0GA_.js";import"./index-BDGZFkub.js";import"./index-BbyeJaRT.js";import"./index-17UNxjz6.js";import"./index-D4AgSARz.js";import"./32-Lr1o5q5Y.js";import"./24-BbKUo3HT.js";import"./24-Bp_HhEEU.js";import"./24-A5UfwTSh.js";import"./24-BFTkICnz.js";import"./24-CkBhKuNp.js";import"./24-99ZCpV7Q.js";import"./24-DuGNUhV0.js";import"./24-BSYcdl4j.js";import"./24-3PxmqcmV.js";import"./16-XX98Hoxr.js";import"./24-BLu740_K.js";import"./16-DUa4Gnlc.js";import"./16-CSBhMP4b.js";import"./16-DMPWLjn6.js";const f={topComponent:{description:"Верхний компонент",type:{summary:"ReactNode"}},bottomComponent:{description:"Нижний компонент",type:{summary:"ReactNode"}}},i="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=286-17862",j=()=>{const[o,r]=a.useState(0);return t.jsxs("div",{className:p.wrapper,children:[t.jsx(g,{title:"Splitter",description:"Splitter — это компонент, предназначенный для разделения экрана на две части: верхнюю и нижнюю панели. Этот компонент полезен, когда вам нужно показать два разных элемента или группы информации в одной области и позволить пользователю управлять их размерами.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Splitter",figmaLink:i}),t.jsx("div",{className:p.tabs,children:t.jsxs(e,{children:[t.jsx(e.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>r(0)}),t.jsx(e.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>r(1)}),t.jsx(e.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>r(2)})]})}),Number(o)===0&&t.jsxs(t.Fragment,{children:[t.jsx(u,{height:500,description:"Базовое использование Splitter",code:`import React from 'react';
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
