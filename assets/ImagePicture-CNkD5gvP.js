import{r as p,j as t,m as c,S as n,U as u}from"./iframe-DUDunD5j.js";import{useMDXComponents as d}from"./index-CDbv5Jgm.js";import{b as f}from"./index-BwhIJYzj.js";import{DecoratorDefault as l}from"./Decorator.stories-DJdCAXEf.js";import{s as m,H as x,E as o}from"./Header-BrZEypuE.js";import{F as g}from"./FigmaEmbed-DovFRgvJ.js";import{P as b}from"./Properties-CcP2VO-p.js";import{T as h}from"./Tests-CSK3RYMm.js";import{T as r}from"./index-DntXJei4.js";import{a as j}from"./argsTypes-o2QaM5Hy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DdmbHqmW.js";import"./clsx-B-dksMZM.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-BB59z0Rt.js";import"./24-tbbQM-dv.js";import"./24-BLuChUkw.js";import"./24-BGpvFgfj.js";import"./24-BGrLeqpw.js";import"./24-CAewpWgK.js";import"./24-BoEjxhhs.js";import"./24-BAIQ796Q.js";import"./24-BwgIJwEH.js";import"./24-C99UGV7O.js";import"./16-CfofIm8-.js";import"./24-CoSTS1kQ.js";import"./24-C5ui32Ki.js";import"./16-DEDu0dyt.js";import"./16-BarbOM5u.js";import"./16-4gnAFB8p.js";import"./index-DyX2qzoz.js";import"./index-rc7u3FmU.js";import"./index-z_YeHj0K.js";import"./index-r-uICxAh.js";import"./index-BS4wiMYT.js";import"./generateUUID-M57HTP56.js";import"./index-YMfOmFJ1.js";import"./sizesMapping-D8QavrGc.js";import"./index-BixcmxoL.js";import"./index-aoSKrGJR.js";import"./index-BE6Pvktf.js";import"./index-BjTLv_jS.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=315-7913&t=HhCDuaOuzHu5rgyf-1",I=()=>{const[e,i]=p.useState(0);return t.jsxs("div",{className:m.wrapper,children:[t.jsx(x,{title:"ImagePicture",description:"ImagePicture обеспечивает гибкую отрисовку изображений с различными соотношениями сторон и радиусами границ. Поддерживает функцию зума при наведении.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ImagePicture",figmaLink:s}),t.jsx("div",{className:m.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>i(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>i(1)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>i(2)})]})}),Number(e)===0&&t.jsxs(t.Fragment,{children:[t.jsx(o,{height:400,description:"Базовый ImagePicture. Отображает изображение с заданными параметрами.",code:`import { ImagePicture } from '@nlmk/ds-2.0';

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
`}),t.jsx(b,{argsTypes:j})]}),Number(e)===1&&t.jsx(g,{url:s}),Number(e)===2&&t.jsx(h,{componentName:"ImagePicture"})]})};function a(e){return t.jsxs(t.Fragment,{children:[t.jsx(c,{title:"Components/ImagePicture/Info",component:f,parameters:{design:{type:"figma",url:"https://www.figma.com/file/vyvtqfFuN9lCYoWKqEnm9v/DS2.0-Image-%26-Picture?type=design&node-id=611-56&mode=design&t=LM6egTqSYg4pVyIA-11"},jest:["ImagePicture.test.tsx"]}}),`
`,t.jsx(n,{of:l}),`
`,t.jsx(u,{children:t.jsx(I,{})})]})}function dt(e={}){const{wrapper:i}={...d(),...e.components};return i?t.jsx(i,{...e,children:t.jsx(a,{...e})}):a()}export{dt as default};
