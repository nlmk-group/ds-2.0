import{M as f,U as l}from"./chunk-HLWAVYOI-bd2949d1.js";import{I as n}from"./index-bc089e17.js";import{a as o,j as t,F as c}from"./clsx.m-3764cf42.js";import{r as h}from"./index-f1f749bf.js";import{s,H as b,E as m,T as x}from"./Tests-605cd25b.js";import{F as w}from"./FigmaEmbed-6f82f7c8.js";import{P as y}from"./Properties-83346e89.js";import{a as i}from"./index-f014e98c.js";import"./index-ec455f54.js";import"./index-095d5581.js";import"./index-e99519f1.js";import"./index-147655d7.js";import{T as I}from"./index-fb030d50.js";import"./index-c9e69acb.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import{a as M}from"./argsTypes-ee63b6ac.js";import{u as P}from"./index-4fb8b842.js";import"./iframe-6c91f604.js";import"../sb-preview/runtime.js";import"./react-16-8c769108.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f8a8f14b.js";import"./get-78cac09e.js";import"./callBound-57fbc82c.js";import"./mapValues-f98d729d.js";import"./index-b75c9059.js";import"./uniq-b8c8c302.js";import"./index-356e4a49.js";import"./index-12f93142.js";import"./index-29c055d1.js";import"./.jest-test-results-108bf634.js";import"./index-c1da5c13.js";const D=()=>{const[e,r]=h.useState(0),d=`import { ImagePicture } from '@nlmk/ds-2.0';

const App = () => {
  const path = 'https://images.unsplash.com/photo-1683343946402-85b144e8ecb6?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <ImagePicture src={path} alt="Описание изображения" />
  )
};

export default App;
`,u=`import { ImagePicture } from '@nlmk/ds-2.0';

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
`,g=`import { ImagePicture } from '@nlmk/ds-2.0';

const App = () => {
  const path = 'https://images.unsplash.com/photo-1683343946402-85b144e8ecb6?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <>
      <ImagePicture src={path} radius='radius-small' />
    </>
  )
};

export default App;
`;return o("div",{className:s.wrapper,children:[t(b,{title:"ImagePicture",description:"ImagePicture обеспечивает гибкую отрисовку изображений с различными соотношениями сторон и радиусами границ. Поддерживает функцию зума при наведении.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ImagePicture",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20849&mode=design&t=awyt3Fzj1XS6th7v-1"}),t("div",{className:s.tabs,children:o(i,{children:[t(i.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>r(0)}),t(i.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>r(1)}),t(i.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>r(2)})]})}),Number(e)===0&&o(c,{children:[t(m,{height:400,description:"Базовый ImagePicture. Отображает изображение с заданными параметрами.",code:d}),t(m,{height:400,description:"ImagePicture с различными соотношениями сторон.",code:u}),t(m,{height:400,description:"ImagePicture с радиусом границ.",code:g}),t(y,{argsTypes:M})]}),Number(e)===1&&t(w,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20849&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(e)===2&&t(I,{variant:"Heading4",color:"primary",children:t(x,{componentName:"ImagePicture"})})]})};function p(e){return o(c,{children:[t(f,{title:"Components/ImagePicture/Info",component:n,parameters:{design:{type:"figma",url:"https://www.figma.com/file/vyvtqfFuN9lCYoWKqEnm9v/DS2.0-Image-%26-Picture?type=design&node-id=611-56&mode=design&t=LM6egTqSYg4pVyIA-11"},jest:["ImagePicture.test.tsx"]}}),`
`,t(l,{children:t(D,{})})]})}function q(e={}){const{wrapper:r}=Object.assign({},P(),e.components);return r?t(r,{...e,children:t(p,{...e})}):p()}const A=()=>{throw new Error("Docs-only story")};A.parameters={docsOnly:!0};const a={title:"Components/ImagePicture/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/vyvtqfFuN9lCYoWKqEnm9v/DS2.0-Image-%26-Picture?type=design&node-id=611-56&mode=design&t=LM6egTqSYg4pVyIA-11"},jest:["ImagePicture.test.tsx"]},component:n,tags:["stories-mdx"],includeStories:["__page"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:q};const pt=["__page"];export{pt as __namedExportsOrder,A as __page,a as default};
