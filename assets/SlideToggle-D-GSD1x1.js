import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as m}from"./index-CbmgEnq2.js";import{am as p,an as a,ao as n}from"./chunk-NUUEMKO5-CkiiNlyy.js";import{af as r,az as l}from"./index-ByAgZyky.js";import{DecoratorDefault as d}from"./Decorator.stories-B1hjNCvN.js";import{r as c}from"./index-Bnop-kX6.js";import{s as i,H as g,E as u}from"./Header-EP2jVtSV.js";import{P as f}from"./Properties-C46i6TC6.js";import{T as x}from"./Tests-4iTQQ7zx.js";/* empty css               */import"./generateUUID-B22BSTI4.js";import"./index-DJJ0U8Tt.js";import"./index-CGzvFf0p.js";import"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import"./index-qC5wYQgy.js";import"./index-BuA7rasS.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-BAfSYk8P.js";import"./index-Br4tp0-d.js";import"./32-DCTol8-9.js";import{a as T}from"./argsTypes-Bz09UV-O.js";import"./iframe-DNfwqCnh.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BiTg2p7s.js";import"./index-CT8gBKwQ.js";const j=()=>{const[e,o]=c.useState(0);return t.jsxs("div",{className:i.wrapper,children:[t.jsx(g,{title:"SlideToggle",description:"SlideToggle — элемент, который позволяет отображать/скрывать элемент.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SlideToggle"}),t.jsx("div",{className:i.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>o(0)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>o(2)})]})}),Number(e)==0&&t.jsxs(t.Fragment,{children:[t.jsx(u,{height:350,description:"Пример использование компонента SlideToggle",code:`import { SlideToggle } from '@nlmk/ds-2.0';
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
export default App;`}),t.jsx(f,{argsTypes:T})]}),Number(e)==2&&t.jsx(x,{componentName:"SlideToggle"})]})};function s(e){return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Components/SlideToggle/Info",component:l,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=212-40498&mode=design&t=xnwi6AfHpoUHB7mg-0"},jest:["SlideToggle.test.tsx"]}}),`
`,t.jsx(a,{of:d}),`
`,t.jsx(n,{children:t.jsx(j,{})})]})}function tt(e={}){const{wrapper:o}={...m(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(s,{...e})}):s()}export{tt as default};