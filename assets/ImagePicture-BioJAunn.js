import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as p}from"./index-CbmgEnq2.js";import"./index-Cg4FlZUc.js";import{b as c}from"./index-n_FSf3Cv.js";import{DecoratorDefault as n}from"./Decorator.stories-B1hjNCvN.js";import{r as u}from"./index-Bnop-kX6.js";import{s,H as f,E as o}from"./Header-DoEz7EVi.js";import{F as d}from"./FigmaEmbed-pZ_Xsbw5.js";import{P as l}from"./Properties-BySoTS4I.js";import{T as x}from"./Tests-OdO6CFav.js";import{ag as r}from"./TreeList-ChyggQS5.js";import"./generateUUID-X09o9Pdp.js";import"./index-qbkiYuzD.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DovCGOp-.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-DokmLR-l.js";import"./32-BTlKmMLd.js";import{a as g}from"./argsTypes-Dl3jW0yC.js";import{c as b,e as h,U as j}from"./DocsRenderer-CFRXHY34-Bs6YVDKr.js";import"./preview-ft71v16T.js";import"./iframe-CWffINz-.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-mpWeDU2g.js";import"./index-D0sJu8id.js";import"./tiny-invariant-CopsF_GD.js";import"./index-B5g4YLzC.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";const m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=315-7913&t=HhCDuaOuzHu5rgyf-1",I=()=>{const[e,i]=u.useState(0);return t.jsxs("div",{className:s.wrapper,children:[t.jsx(f,{title:"ImagePicture",description:"ImagePicture обеспечивает гибкую отрисовку изображений с различными соотношениями сторон и радиусами границ. Поддерживает функцию зума при наведении.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ImagePicture",figmaLink:m}),t.jsx("div",{className:s.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>i(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>i(1)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>i(2)})]})}),Number(e)===0&&t.jsxs(t.Fragment,{children:[t.jsx(o,{height:400,description:"Базовый ImagePicture. Отображает изображение с заданными параметрами.",code:`import { ImagePicture } from '@nlmk/ds-2.0';

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
`}),t.jsx(l,{argsTypes:g})]}),Number(e)===1&&t.jsx(d,{url:m}),Number(e)===2&&t.jsx(x,{componentName:"ImagePicture"})]})};function a(e){return t.jsxs(t.Fragment,{children:[t.jsx(b,{title:"Components/ImagePicture/Info",component:c,parameters:{design:{type:"figma",url:"https://www.figma.com/file/vyvtqfFuN9lCYoWKqEnm9v/DS2.0-Image-%26-Picture?type=design&node-id=611-56&mode=design&t=LM6egTqSYg4pVyIA-11"},jest:["ImagePicture.test.tsx"]}}),`
`,t.jsx(h,{of:n}),`
`,t.jsx(j,{children:t.jsx(I,{})})]})}function st(e={}){const{wrapper:i}={...p(),...e.components};return i?t.jsx(i,{...e,children:t.jsx(a,{...e})}):a()}export{st as default};
