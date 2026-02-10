import{r as m,j as t,m as p,S as n,U as a}from"./iframe-BiRbIEmb.js";import{useMDXComponents as l}from"./index-DFADegm-.js";import{a as d,S as c}from"./argsTypes-D3E81dCA.js";import{DecoratorDefault as g}from"./Decorator.stories-Cq2K7ZK_.js";import{s as i,H as u,E as x}from"./Header-BOuFM4z3.js";import{P as T}from"./Properties-CTw5qxDW.js";import{T as S}from"./Tests-u2K_XUZf.js";/* empty css               */import{T as r}from"./index-Bc-rzIjC.js";import"./preload-helper-PPVm8Dsz.js";import"./generateUUID-M57HTP56.js";import"./clsx-B-dksMZM.js";import"./index-CIk7IDPA.js";import"./index-D4AgSARz.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-Lr1o5q5Y.js";import"./24-BbKUo3HT.js";import"./24-Bp_HhEEU.js";import"./24-A5UfwTSh.js";import"./24-BFTkICnz.js";import"./24-CkBhKuNp.js";import"./24-99ZCpV7Q.js";import"./24-DuGNUhV0.js";import"./24-BSYcdl4j.js";import"./24-3PxmqcmV.js";import"./16-XX98Hoxr.js";import"./24-BLu740_K.js";import"./24-DOr3c8sx.js";import"./16-DUa4Gnlc.js";import"./16-CSBhMP4b.js";import"./16-DMPWLjn6.js";import"./index-CDeU-sH7.js";import"./index-DDnqRqhr.js";import"./index-t6GndyZ6.js";import"./index-BLKLNOs5.js";import"./index-CuPa9ZS_.js";import"./sizesMapping-D8QavrGc.js";import"./index-BC1L0GA_.js";import"./index-BDGZFkub.js";import"./index-BbyeJaRT.js";import"./index-17UNxjz6.js";const f=()=>{const[e,o]=m.useState(0);return t.jsxs("div",{className:i.wrapper,children:[t.jsx(u,{title:"SlideToggle",description:"SlideToggle — элемент, который позволяет отображать/скрывать элемент.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SlideToggle"}),t.jsx("div",{className:i.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>o(0)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>o(2)})]})}),Number(e)==0&&t.jsxs(t.Fragment,{children:[t.jsx(x,{height:350,description:"Пример использование компонента SlideToggle",code:`import { SlideToggle } from '@nlmk/ds-2.0';
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
export default App;`}),t.jsx(T,{argsTypes:d})]}),Number(e)==2&&t.jsx(S,{componentName:"SlideToggle"})]})};function s(e){return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Components/SlideToggle/Info",component:c,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=212-40498&mode=design&t=xnwi6AfHpoUHB7mg-0"},jest:["SlideToggle.test.tsx"]}}),`
`,t.jsx(n,{of:g}),`
`,t.jsx(a,{children:t.jsx(f,{})})]})}function pt(e={}){const{wrapper:o}={...l(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(s,{...e})}):s()}export{pt as default};
