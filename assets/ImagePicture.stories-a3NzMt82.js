import{U as n,M as f,e as h}from"./chunk-HLWAVYOI-Ch1IEzre.js";import{b as d}from"./index-fHOzSRtI.js";import{a as o,j as t,F as u}from"./jsx-runtime-2xDJh5tt.js";import{r as b}from"./index-CBqU2yxZ.js";import{s,H as x,E as m,T as I}from"./Tests-ByYiu-7-.js";import{F as y}from"./FigmaEmbed-BUFRpaj3.js";import{P}from"./Properties-Nvz-lqsf.js";import{C as i}from"./index-CnL2Y1yT.js";import"./generateUUID-BVRVPcdt.js";import"./index-jIJAWU0x.js";import"./index-B8bUpJH3.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import{T as w}from"./index-CkVMA9Py.js";import"./index-BxqmQ_Es.js";import"./index-Cs1erf_V.js";import"./index-DFf4wlr3.js";import"./index-lhFT6koy.js";import"./32-CH6kctYz.js";import{a as D}from"./argsTypes-2fW1BvdT.js";import{useMDXComponents as M}from"./index-DI5IigMn.js";import"./iframe-BdulU-RU.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-CqTSy7Yj.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./clsx.m-CH7BE6MN.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-B1rhm0lK.js";import"./index-prZMZXcd.js";const p="https://www.figma.com/file/vyvtqfFuN9lCYoWKqEnm9v/DS2.0-Image-%26-Picture?type=design&node-id=667-1393&mode=design&t=hr2Gk5nIjO2Ka48f-0",g=()=>{const[e,r]=b.useState(0);return o("div",{className:s.wrapper,children:[t(x,{title:"ImagePicture",description:"ImagePicture обеспечивает гибкую отрисовку изображений с различными соотношениями сторон и радиусами границ. Поддерживает функцию зума при наведении.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ImagePicture",figmaLink:p}),t("div",{className:s.tabs,children:o(i,{children:[t(i.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>r(0)}),t(i.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>r(1)}),t(i.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>r(2)})]})}),Number(e)===0&&o(u,{children:[t(m,{height:400,description:"Базовый ImagePicture. Отображает изображение с заданными параметрами.",code:`import { ImagePicture } from '@nlmk/ds-2.0';

const App = () => {
  const path = 'https://images.unsplash.com/photo-1683343946402-85b144e8ecb6?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <ImagePicture src={path} alt="Описание изображения" />
  )
};

export default App;
`}),t(m,{height:400,description:"ImagePicture с различными соотношениями сторон.",code:`import { ImagePicture } from '@nlmk/ds-2.0';

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
`}),t(m,{height:400,description:"ImagePicture с радиусом границ.",code:`import { ImagePicture } from '@nlmk/ds-2.0';

const App = () => {
  const path = 'https://images.unsplash.com/photo-1683343946402-85b144e8ecb6?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <>
      <ImagePicture src={path} radius='radius-small' />
    </>
  )
};

export default App;
`}),t(P,{argsTypes:D})]}),Number(e)===1&&t(y,{url:p}),Number(e)===2&&t(w,{variant:"Heading4",color:"primary",children:t(I,{componentName:"ImagePicture"})})]})};function c(e){return o(u,{children:[t(f,{title:"Components/ImagePicture/Info",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/file/vyvtqfFuN9lCYoWKqEnm9v/DS2.0-Image-%26-Picture?type=design&node-id=611-56&mode=design&t=LM6egTqSYg4pVyIA-11"},jest:["ImagePicture.test.tsx"]}}),`
`,t(h,{name:"Docs",children:t(n,{children:t(g,{})})})]})}function C(e={}){const{wrapper:r}=Object.assign({},M(),e.components);return r?t(r,{...e,children:t(c,{...e})}):c()}const l=()=>t(n,{children:t(g,{})});l.storyName="Docs";l.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const a={title:"Components/ImagePicture/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/vyvtqfFuN9lCYoWKqEnm9v/DS2.0-Image-%26-Picture?type=design&node-id=611-56&mode=design&t=LM6egTqSYg4pVyIA-11"},jest:["ImagePicture.test.tsx"]},component:d,tags:["stories-mdx"],includeStories:["docs"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:C};const dt=["docs"];export{dt as __namedExportsOrder,a as default,l as docs};
