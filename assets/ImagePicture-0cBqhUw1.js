import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as p}from"./index-CbmgEnq2.js";import{am as c,an as n,ao as u}from"./chunk-NUUEMKO5-VxVRg0Ad.js";import{b as f}from"./index-EMjLjg44.js";import{DecoratorDefault as d}from"./Decorator.stories-B1hjNCvN.js";import{r as l}from"./index-Bnop-kX6.js";import{s,H as x,E as o}from"./Header-NBO0NC2E.js";import{F as g}from"./FigmaEmbed-CjR_CEnC.js";import{P as b}from"./Properties-CoYCT1aE.js";import{T as h}from"./Tests-C9Ej4khg.js";import{ai as r}from"./TreeList-C6MnL0cn.js";import"./generateUUID-DxloPTqA.js";import"./index-CpbWvJzH.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-CzMHMlM5.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-DokmLR-l.js";import"./32-BuOLl5Xl.js";import{a as j}from"./argsTypes-BMbq5eCa.js";import"./iframe-KbdTlsKG.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-CTCZCGJI.js";import"./index-B5g4YLzC.js";const a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=315-7913&t=HhCDuaOuzHu5rgyf-1",I=()=>{const[e,i]=l.useState(0);return t.jsxs("div",{className:s.wrapper,children:[t.jsx(x,{title:"ImagePicture",description:"ImagePicture обеспечивает гибкую отрисовку изображений с различными соотношениями сторон и радиусами границ. Поддерживает функцию зума при наведении.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ImagePicture",figmaLink:a}),t.jsx("div",{className:s.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>i(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>i(1)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>i(2)})]})}),Number(e)===0&&t.jsxs(t.Fragment,{children:[t.jsx(o,{height:400,description:"Базовый ImagePicture. Отображает изображение с заданными параметрами.",code:`import { ImagePicture } from '@nlmk/ds-2.0';

const App = () => {
  const path = 'https://images.unsplash.com/photo-1683343946402-85b144e8ecb6?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <ImagePicture src={path} alt="Описание изображения" />
  )
};

export default App;
`}),t.jsx(o,{height:400,description:"ImagePicture с различными соотношениями сторон.",code:`import { ImagePicture } from '@nlmk/ds-2.0';

const App = () => {
  const path = 'https://images.unsplash.com/photo-1683343946402-85b144e8ecb6?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <>
      <ImagePicture src={path} aspectRatio='ratio-16x9' />
      <ImagePicture src={path} aspectRatio='ratio-1x1' />
    </>
  )
};

export default App;
`}),t.jsx(o,{height:400,description:"ImagePicture с радиусом границ.",code:`import { ImagePicture } from '@nlmk/ds-2.0';

const App = () => {
  const path = 'https://images.unsplash.com/photo-1683343946402-85b144e8ecb6?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <>
      <ImagePicture src={path} radius='radius-small' />
    </>
  )
};

export default App;
`}),t.jsx(b,{argsTypes:j})]}),Number(e)===1&&t.jsx(g,{url:a}),Number(e)===2&&t.jsx(h,{componentName:"ImagePicture"})]})};function m(e){return t.jsxs(t.Fragment,{children:[t.jsx(c,{title:"Components/ImagePicture/Info",component:f,parameters:{design:{type:"figma",url:"https://www.figma.com/file/vyvtqfFuN9lCYoWKqEnm9v/DS2.0-Image-%26-Picture?type=design&node-id=611-56&mode=design&t=LM6egTqSYg4pVyIA-11"},jest:["ImagePicture.test.tsx"]}}),`
`,t.jsx(n,{of:d}),`
`,t.jsx(u,{children:t.jsx(I,{})})]})}function ot(e={}){const{wrapper:i}={...p(),...e.components};return i?t.jsx(i,{...e,children:t.jsx(m,{...e})}):m()}export{ot as default};
