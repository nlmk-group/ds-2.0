import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as p}from"./index-D2yTtfOz.js";import"./index-BhfZ6bC3.js";import{b as c}from"./index-DRazNneG.js";import{DecoratorDefault as n}from"./Decorator.stories-D7iJJ_iz.js";import{r as u}from"./index-BcJSXhQi.js";import{s as m,H as f,E as o}from"./Header-BA1sa6FT.js";import{F as d}from"./FigmaEmbed-CkZZIlff.js";import{P as l}from"./Properties-ZScLc5Z8.js";import{T as x}from"./Tests-DiluCRUV.js";import{af as r}from"./TreeList-r95OQsMc.js";import"./generateUUID-DDeHuJRp.js";import"./index-C3pqwiJi.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-BIIyWenB.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-C5rKoyII.js";import"./32-Bdg6aZTc.js";import{a as g}from"./argsTypes-D3PICHM5.js";import{c as b,S as h,U as j}from"./DocsRenderer-CFRXHY34-CEAEn9uu.js";import"./index-ChsGqxH_.js";import"./preview-Crnv5oRk.js";import"./iframe-DVotE8Uy.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-yqvZrnpk.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=315-7913&t=HhCDuaOuzHu5rgyf-1",I=()=>{const[e,i]=u.useState(0);return t.jsxs("div",{className:m.wrapper,children:[t.jsx(f,{title:"ImagePicture",description:"ImagePicture обеспечивает гибкую отрисовку изображений с различными соотношениями сторон и радиусами границ. Поддерживает функцию зума при наведении.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ImagePicture",figmaLink:s}),t.jsx("div",{className:m.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>i(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>i(1)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>i(2)})]})}),Number(e)===0&&t.jsxs(t.Fragment,{children:[t.jsx(o,{height:400,description:"Базовый ImagePicture. Отображает изображение с заданными параметрами.",code:`import { ImagePicture } from '@nlmk/ds-2.0';

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
`}),t.jsx(l,{argsTypes:g})]}),Number(e)===1&&t.jsx(d,{url:s}),Number(e)===2&&t.jsx(x,{componentName:"ImagePicture"})]})};function a(e){return t.jsxs(t.Fragment,{children:[t.jsx(b,{title:"Components/ImagePicture/Info",component:c,parameters:{design:{type:"figma",url:"https://www.figma.com/file/vyvtqfFuN9lCYoWKqEnm9v/DS2.0-Image-%26-Picture?type=design&node-id=611-56&mode=design&t=LM6egTqSYg4pVyIA-11"},jest:["ImagePicture.test.tsx"]}}),`
`,t.jsx(h,{of:n}),`
`,t.jsx(j,{children:t.jsx(I,{})})]})}function at(e={}){const{wrapper:i}={...p(),...e.components};return i?t.jsx(i,{...e,children:t.jsx(a,{...e})}):a()}export{at as default};
