import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as m}from"./index-CbmgEnq2.js";import{am as p,an as n,ao as a}from"./chunk-NUUEMKO5-zybvIu1X.js";import{$ as r,an as l}from"./index-Bult1pSm.js";import{DecoratorDefault as d}from"./Decorator.stories-B1hjNCvN.js";import{r as c}from"./index-Bnop-kX6.js";import{s as i,H as g,E as u}from"./Header-Cqd_i1aV.js";import{P as x}from"./Properties-Bv2rjfL_.js";import{T as f}from"./Tests-cYn1xz5o.js";/* empty css               */import"./generateUUID-DAuIdu-p.js";import"./index-B0lWqv5F.js";import"./index-DPg--y1u.js";import"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import"./index-qC5wYQgy.js";import"./index-BVI3RfDi.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-BXzk8UvY.js";import"./32-CMOOVZNy.js";import{a as T}from"./argsTypes-CXBCamH7.js";import"./iframe-Bqux-A90.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-DNyW-qLm.js";import"./index-CT8gBKwQ.js";const j=()=>{const[t,o]=c.useState(0);return e.jsxs("div",{className:i.wrapper,children:[e.jsx(g,{title:"SlideToggle",description:"SlideToggle — элемент, который позволяет отображать/скрывать элемент.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SlideToggle"}),e.jsx("div",{className:i.tabs,children:e.jsxs(r,{children:[e.jsx(r.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>o(0)}),e.jsx(r.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>o(2)})]})}),Number(t)==0&&e.jsxs(e.Fragment,{children:[e.jsx(u,{height:350,description:"Пример использование компонента SlideToggle",code:`import { SlideToggle } from '@nlmk/ds-2.0';
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
export default App;`}),e.jsx(x,{argsTypes:T})]}),Number(t)==2&&e.jsx(f,{componentName:"SlideToggle"})]})};function s(t){return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Components/SlideToggle/Info",component:l,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=212-40498&mode=design&t=xnwi6AfHpoUHB7mg-0"},jest:["SlideToggle.test.tsx"]}}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(a,{children:e.jsx(j,{})})]})}function Z(t={}){const{wrapper:o}={...m(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(s,{...t})}):s()}export{Z as default};
