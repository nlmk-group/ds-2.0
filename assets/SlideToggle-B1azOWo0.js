import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as m}from"./index-D2yTtfOz.js";import"./index-B8DvOqk1.js";import{ah as r,aN as p}from"./TreeList-CvZqtDrx.js";import{DecoratorDefault as n}from"./Decorator.stories-D7iJJ_iz.js";import{r as a}from"./index-BcJSXhQi.js";import{s as i,H as l,E as d}from"./Header-CiapITfv.js";import{P as c}from"./Properties-Cf3zhWaH.js";import{T as g}from"./Tests-fyb8YS1h.js";/* empty css               */import"./generateUUID-CwHnX0Hw.js";import"./index-BekOEyNL.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-9k2b7QWQ.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-uupel1IP.js";import"./index-C5rKoyII.js";import"./32-BKmqX1Rw.js";import{a as u}from"./argsTypes-Crxm7lVO.js";import{c as x,S as f,U as T}from"./DocsRenderer-CFRXHY34-By352SZU.js";import"./index-ChsGqxH_.js";import"./preview-D3PPJEDW.js";import"./iframe-Bcy3tJBh.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-oeyBqvW7.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const j=()=>{const[e,o]=a.useState(0);return t.jsxs("div",{className:i.wrapper,children:[t.jsx(l,{title:"SlideToggle",description:"SlideToggle — элемент, который позволяет отображать/скрывать элемент.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SlideToggle"}),t.jsx("div",{className:i.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>o(0)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>o(2)})]})}),Number(e)==0&&t.jsxs(t.Fragment,{children:[t.jsx(d,{height:350,description:"Пример использование компонента SlideToggle",code:`import { SlideToggle } from '@nlmk/ds-2.0';
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
`,t.jsx(T,{children:t.jsx(j,{})})]})}function rt(e={}){const{wrapper:o}={...m(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(s,{...e})}):s()}export{rt as default};
