import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as m}from"./index-CbmgEnq2.js";import"./index-CDNBfPUD.js";import{ag as r,aN as p}from"./TreeList-KafSWxD5.js";import{DecoratorDefault as n}from"./Decorator.stories-B1hjNCvN.js";import{r as a}from"./index-Bnop-kX6.js";import{s as i,H as l,E as d}from"./Header-C1-O-XnO.js";import{P as c}from"./Properties-C1uV5wRN.js";import{T as g}from"./Tests-DV49_lgf.js";/* empty css               */import"./generateUUID-X09o9Pdp.js";import"./index-qbkiYuzD.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DovCGOp-.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-n_FSf3Cv.js";import"./index-DokmLR-l.js";import"./32-BTlKmMLd.js";import{a as u}from"./argsTypes-hKEp4F6F.js";import{c as x,e as f,U as T}from"./DocsRenderer-CFRXHY34-D9cGPbCT.js";import"./preview-B_gHuUAG.js";import"./iframe-Bi6NeCl1.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-AvLRxKSw.js";import"./index-B5g4YLzC.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";const j=()=>{const[e,o]=a.useState(0);return t.jsxs("div",{className:i.wrapper,children:[t.jsx(l,{title:"SlideToggle",description:"SlideToggle — элемент, который позволяет отображать/скрывать элемент.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SlideToggle"}),t.jsx("div",{className:i.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>o(0)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>o(2)})]})}),Number(e)==0&&t.jsxs(t.Fragment,{children:[t.jsx(d,{height:350,description:"Пример использование компонента SlideToggle",code:`import { SlideToggle } from '@nlmk/ds-2.0';
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
export default App;`}),t.jsx(c,{argsTypes:u})]}),Number(e)==2&&t.jsx(g,{componentName:"SlideToggle"})]})};function s(e){return t.jsxs(t.Fragment,{children:[t.jsx(x,{title:"Components/SlideToggle/Info",component:p,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=212-40498&mode=design&t=xnwi6AfHpoUHB7mg-0"},jest:["SlideToggle.test.tsx"]}}),`
`,t.jsx(f,{of:n}),`
`,t.jsx(T,{children:t.jsx(j,{})})]})}function et(e={}){const{wrapper:o}={...m(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(s,{...e})}):s()}export{et as default};
