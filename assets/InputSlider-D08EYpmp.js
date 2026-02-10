import{r as a,j as t,m,S as l,U as d}from"./iframe-BiRbIEmb.js";import{useMDXComponents as u}from"./index-DFADegm-.js";import{a as c,I as x}from"./argsTypes-JCaTG7ph.js";import{DecoratorDefault as h}from"./Decorator.stories-Cq2K7ZK_.js";import{s as o,H as f,E as s}from"./Header-BOuFM4z3.js";import{F as b}from"./FigmaEmbed-DXWxjqCs.js";import{P as g}from"./Properties-CTw5qxDW.js";import{T as j}from"./Tests-u2K_XUZf.js";import{T as i}from"./index-Bc-rzIjC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CBBSmFmn.js";import"./clsx-B-dksMZM.js";import"./index-CIk7IDPA.js";import"./index-CDeU-sH7.js";import"./index-DDnqRqhr.js";import"./index-t6GndyZ6.js";import"./index-BLKLNOs5.js";import"./generateUUID-M57HTP56.js";import"./24-DOr3c8sx.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-CuPa9ZS_.js";import"./sizesMapping-D8QavrGc.js";import"./index-BC1L0GA_.js";import"./index-BDGZFkub.js";import"./index-BbyeJaRT.js";import"./index-17UNxjz6.js";import"./index-D4AgSARz.js";import"./32-Lr1o5q5Y.js";import"./24-BbKUo3HT.js";import"./24-Bp_HhEEU.js";import"./24-A5UfwTSh.js";import"./24-BFTkICnz.js";import"./24-CkBhKuNp.js";import"./24-99ZCpV7Q.js";import"./24-DuGNUhV0.js";import"./24-BSYcdl4j.js";import"./24-3PxmqcmV.js";import"./16-XX98Hoxr.js";import"./24-BLu740_K.js";import"./16-DUa4Gnlc.js";import"./16-CSBhMP4b.js";import"./16-DMPWLjn6.js";const p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=496-18891&t=HhCDuaOuzHu5rgyf-1",S=()=>{const[e,r]=a.useState(0);return t.jsxs("div",{className:o.wrapper,children:[t.jsx(f,{title:"InputSlider",description:"InputSlider представляет собой слайдер для ввода числовых значений, который позволяет пользователю выбирать значение в заданном диапазоне.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputSlider",figmaLink:p}),t.jsx("div",{className:o.tabs,children:t.jsxs(i,{children:[t.jsx(i.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>r(0)}),t.jsx(i.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>r(1)}),t.jsx(i.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>r(2)})]})}),Number(e)===0&&t.jsxs(t.Fragment,{children:[t.jsx(s,{height:350,description:"InputSlider по умолчанию. Позволяет пользователю выбирать значение от 0 до 100.",code:`import { useState } from 'react';
import { InputSlider, Chip } from '@nlmk/ds-2.0';

const App = () => {
    const [value, setValue] = useState(20);

    const handleChange = (newValue) => {
      setValue(newValue);
    };

    return (
        <div style={{width: '400px', marginTop: '50px'}}>
            <InputSlider
                min={0}
                max={100}
                step={1}
                value={value}
                onChange={handleChange}
            />
            <Chip>{value}</Chip>
        </div>
    );
  };

export default App;
`}),t.jsx(s,{height:350,description:"Неактивный InputSlider. Слайдер установлен в состояние 'disabled', что предотвращает взаимодействие пользователя.",code:`import { useState } from 'react';

import { InputSlider } from '@nlmk/ds-2.0';

const App = () => {
    const [value, setValue] = useState(500);

    const handleChange = (newValue) => {
      setValue(newValue);
    };

    return (
        <div style={{width: '400px', marginTop: '50px'}}>
            <InputSlider
                min={100}
                max={1000}
                step={10}
                value={value}
                onChange={handleChange}
                disabled
            />
        </div>
    );
  };

export default App;
`}),t.jsx(g,{argsTypes:c})]}),Number(e)===1&&t.jsx(b,{url:p}),Number(e)===2&&t.jsx(j,{componentName:"InputSlider"})]})};function n(e){return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Components/InputSlider/Info",component:x,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=944-6995&t=xN2Xxpz0c5cAQi98-0"},jest:["InputSlider.test.tsx"]}}),`
`,t.jsx(l,{of:h}),`
`,t.jsx(d,{children:t.jsx(S,{})})]})}function dt(e={}){const{wrapper:r}={...u(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(n,{...e})}):n()}export{dt as default};
