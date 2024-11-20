import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as m}from"./index-CbmgEnq2.js";import{am as s,an as n,ao as c}from"./chunk-NUUEMKO5-BraWSKNL.js";import{a9 as e,ax as l}from"./index-CXSd2JwH.js";import{DecoratorDefault as d}from"./Decorator.stories-B1hjNCvN.js";import{r as x}from"./index-Bnop-kX6.js";import{s as p,H as g,E as y}from"./Header-C4FG6ioC.js";import{F as u}from"./FigmaEmbed-C9PxBtjy.js";import{P as b}from"./Properties-Bo9UchF8.js";import{T as h}from"./Tests-CitszsXr.js";/* empty css               */import"./generateUUID-Dz4mOyMt.js";import"./index-BuHkNwZq.js";import"./index-CiiUx5gY.js";import"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import"./index-qC5wYQgy.js";import"./index-Dxx-yGvP.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-CG5Hm5ah.js";import"./32-QiGXh8Io.js";import"./iframe-Bgtob_UG.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-TdYkn6gi.js";import"./index-CT8gBKwQ.js";const f={topComponent:{description:"Верхний компонент",type:{summary:"ReactNode"}},bottomComponent:{description:"Нижний компонент",type:{summary:"ReactNode"}}},i="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=286-17862",j=()=>{const[o,r]=x.useState(0);return t.jsxs("div",{className:p.wrapper,children:[t.jsx(g,{title:"Splitter",description:"Splitter — это компонент, предназначенный для разделения экрана на две части: верхнюю и нижнюю панели. Этот компонент полезен, когда вам нужно показать два разных элемента или группы информации в одной области и позволить пользователю управлять их размерами.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Splitter",figmaLink:i}),t.jsx("div",{className:p.tabs,children:t.jsxs(e,{children:[t.jsx(e.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>r(0)}),t.jsx(e.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>r(1)}),t.jsx(e.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>r(2)})]})}),Number(o)===0&&t.jsxs(t.Fragment,{children:[t.jsx(y,{height:200,description:"Базовое использование Splitter",code:`import React from 'react';
import { Splitter, Box, Typography, ImagePicture } from '@nlmk/ds-2.0';

const SplitterExample = () => {
  const topComponent = (
    <Box 
      alignItems="flex-start"
      gap="16px"
      style={{ 
        height: '100%',
        padding: '16px',
        background: 'var(--background-secondary)'
      }}
    >
      <Typography variant="Heading4">
        Информация
      </Typography>
      <Typography variant="Body1-Medium">
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
        background: 'var(--background-secondary)'
      }}
    >
      <Typography variant="Heading4">
        Информация
      </Typography>
      <Typography variant="Body1-Medium">
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

export default SplitterExample;`}),t.jsx(b,{argsTypes:f})]}),Number(o)===1&&t.jsx(u,{url:i}),Number(o)===2&&t.jsx(h,{componentName:"Splitter"})]})};function a(o){return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Components/Splitter/Info",component:l,parameters:{design:{type:"figma"},jest:["Splitter.test.tsx"]}}),`
`,t.jsx(n,{of:d}),`
`,t.jsx(c,{children:t.jsx(j,{})})]})}function tt(o={}){const{wrapper:r}={...m(),...o.components};return r?t.jsx(r,{...o,children:t.jsx(a,{...o})}):a()}export{tt as default};
