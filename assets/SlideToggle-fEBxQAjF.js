import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as m}from"./index-D2yTtfOz.js";import"./index-BhfZ6bC3.js";import{af as r,aM as p}from"./TreeList-r95OQsMc.js";import{DecoratorDefault as n}from"./Decorator.stories-D7iJJ_iz.js";import{r as a}from"./index-BcJSXhQi.js";import{s as i,H as l,E as d}from"./Header-BA1sa6FT.js";import{P as c}from"./Properties-ZScLc5Z8.js";import{T as g}from"./Tests-DiluCRUV.js";/* empty css               */import"./generateUUID-DDeHuJRp.js";import"./index-C3pqwiJi.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-BIIyWenB.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-DRazNneG.js";import"./index-C5rKoyII.js";import"./32-Bdg6aZTc.js";import{a as u}from"./argsTypes-BUefzYhk.js";import{c as f,S as x,U as T}from"./DocsRenderer-CFRXHY34-CEAEn9uu.js";import"./index-ChsGqxH_.js";import"./preview-Crnv5oRk.js";import"./iframe-DVotE8Uy.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-yqvZrnpk.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const j=()=>{const[e,o]=a.useState(0);return t.jsxs("div",{className:i.wrapper,children:[t.jsx(l,{title:"SlideToggle",description:"SlideToggle — элемент, который позволяет отображать/скрывать элемент.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SlideToggle"}),t.jsx("div",{className:i.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>o(0)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>o(2)})]})}),Number(e)==0&&t.jsxs(t.Fragment,{children:[t.jsx(d,{height:350,description:"Пример использование компонента SlideToggle",code:`import { SlideToggle } from '@nlmk/ds-2.0';
import { useState } from 'react';

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <SlideToggle
      title={'Заголовок'}
      isShow={show}
      onToggle={() => setShow(!show)}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </SlideToggle>
  );
};
export default App;`}),t.jsx(c,{argsTypes:u})]}),Number(e)==2&&t.jsx(g,{componentName:"SlideToggle"})]})};function s(e){return t.jsxs(t.Fragment,{children:[t.jsx(f,{title:"Components/SlideToggle/Info",component:p,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=212-40498&mode=design&t=xnwi6AfHpoUHB7mg-0"},jest:["SlideToggle.test.tsx"]}}),`
`,t.jsx(x,{of:n}),`
`,t.jsx(T,{children:t.jsx(j,{})})]})}function rt(e={}){const{wrapper:o}={...m(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(s,{...e})}):s()}export{rt as default};
