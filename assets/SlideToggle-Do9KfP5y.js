import{r as m,j as t,m as p,S as n,U as a}from"./iframe-DUDunD5j.js";import{useMDXComponents as l}from"./index-CDbv5Jgm.js";import{a as d,S as c}from"./argsTypes-CjLL7Oqe.js";import{DecoratorDefault as g}from"./Decorator.stories-DJdCAXEf.js";import{s as i,H as u,E as x}from"./Header-BrZEypuE.js";import{P as T}from"./Properties-CcP2VO-p.js";import{T as S}from"./Tests-CSK3RYMm.js";/* empty css               */import{T as r}from"./index-DntXJei4.js";import"./preload-helper-PPVm8Dsz.js";import"./generateUUID-M57HTP56.js";import"./clsx-B-dksMZM.js";import"./index-DyX2qzoz.js";import"./index-DdmbHqmW.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-BB59z0Rt.js";import"./24-tbbQM-dv.js";import"./24-BLuChUkw.js";import"./24-BGpvFgfj.js";import"./24-BGrLeqpw.js";import"./24-CAewpWgK.js";import"./24-BoEjxhhs.js";import"./24-BAIQ796Q.js";import"./24-BwgIJwEH.js";import"./24-C99UGV7O.js";import"./16-CfofIm8-.js";import"./24-CoSTS1kQ.js";import"./24-C5ui32Ki.js";import"./16-DEDu0dyt.js";import"./16-BarbOM5u.js";import"./16-4gnAFB8p.js";import"./index-rc7u3FmU.js";import"./index-z_YeHj0K.js";import"./index-r-uICxAh.js";import"./index-BS4wiMYT.js";import"./index-YMfOmFJ1.js";import"./sizesMapping-D8QavrGc.js";import"./index-BixcmxoL.js";import"./index-aoSKrGJR.js";import"./index-BE6Pvktf.js";import"./index-BjTLv_jS.js";const f=()=>{const[e,o]=m.useState(0);return t.jsxs("div",{className:i.wrapper,children:[t.jsx(u,{title:"SlideToggle",description:"SlideToggle — элемент, который позволяет отображать/скрывать элемент.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SlideToggle"}),t.jsx("div",{className:i.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>o(0)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>o(2)})]})}),Number(e)==0&&t.jsxs(t.Fragment,{children:[t.jsx(x,{height:350,description:"Пример использование компонента SlideToggle",code:`import { SlideToggle } from '@nlmk/ds-2.0';
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
