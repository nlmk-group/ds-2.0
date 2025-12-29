import{r as m,j as t,f as p,S as n,U as a}from"./iframe-zk5xXBtA.js";import{useMDXComponents as l}from"./index-CSMoqiIu.js";import{a as d,S as c}from"./argsTypes-D7G0GNB4.js";import{DecoratorDefault as g}from"./Decorator.stories-XjMTlGWF.js";import{s as i,H as u,E as x}from"./Header-BMqOixcD.js";import{P as T}from"./Properties-BH32KsQA.js";import{T as f}from"./Tests-BiRJAIxZ.js";/* empty css               */import{T as r}from"./index-CGZqhooT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-9BCGLlQQ.js";import"./index-1zUxKm4P.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-D1ipBNS6.js";import"./24-BU8fW5nS.js";import"./24-CsxFkFpg.js";import"./24-Cg1MPBHI.js";import"./24-BGS-MQmY.js";import"./24-2PvTlRtj.js";import"./24-DyWGmQTd.js";import"./24-DrF3F4Gh.js";import"./24-DXO8B9MT.js";import"./24-CHUQ235a.js";import"./16-D0071456.js";import"./24-CzaQJmC-.js";import"./24-BkbQ4VQu.js";import"./16-D1MigzhA.js";import"./16-J9oiRdzb.js";import"./16-qJIrzOil.js";import"./generateUUID-M57HTP56.js";import"./index-D9zx9C-F.js";import"./index-6T6AONQH.js";import"./index-DjSUGs5w.js";import"./index-CBNcLMKv.js";import"./index-B9FTsAqd.js";import"./sizesMapping-D8QavrGc.js";import"./index-Is2qauMo.js";import"./index-CTfBpVCI.js";import"./index-DirQniBD.js";import"./index-cDYWclvM.js";const S=()=>{const[e,o]=m.useState(0);return t.jsxs("div",{className:i.wrapper,children:[t.jsx(u,{title:"SlideToggle",description:"SlideToggle — элемент, который позволяет отображать/скрывать элемент.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SlideToggle"}),t.jsx("div",{className:i.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>o(0)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>o(2)})]})}),Number(e)==0&&t.jsxs(t.Fragment,{children:[t.jsx(x,{height:350,description:"Пример использование компонента SlideToggle",code:`import { SlideToggle } from '@nlmk/ds-2.0';
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
export default App;`}),t.jsx(T,{argsTypes:d})]}),Number(e)==2&&t.jsx(f,{componentName:"SlideToggle"})]})};function s(e){return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Components/SlideToggle/Info",component:c,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=212-40498&mode=design&t=xnwi6AfHpoUHB7mg-0"},jest:["SlideToggle.test.tsx"]}}),`
`,t.jsx(n,{of:g}),`
`,t.jsx(a,{children:t.jsx(S,{})})]})}function pt(e={}){const{wrapper:o}={...l(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(s,{...e})}):s()}export{pt as default};
