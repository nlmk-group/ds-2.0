import{r as a,j as t,m,S as l,U as d}from"./iframe-BPtLBEuk.js";import{useMDXComponents as u}from"./index-DY5aY42c.js";import{a as c,I as x}from"./argsTypes-wfVM_080.js";import{DecoratorDefault as h}from"./Decorator.stories-Bt-6wqMy.js";import{s as o,H as f,E as s}from"./Header-lxb-Wymn.js";import{F as b}from"./FigmaEmbed-IQ2Nn4zn.js";import{P as g}from"./Properties-u6_xeg7P.js";import{T as j}from"./Tests-DUUoQDTR.js";import{T as i}from"./index-CX87Y9E4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C6GHE7im.js";import"./clsx-B-dksMZM.js";import"./index-C9_7xPUt.js";import"./index-DZQvJksB.js";import"./index-BUWLdeqz.js";import"./index-D9G_R1e4.js";import"./index-V5PZJFO3.js";import"./generateUUID-M57HTP56.js";import"./24-8ackLhic.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-D-pLh_NR.js";import"./sizesMapping-D8QavrGc.js";import"./index-yAFWEvQV.js";import"./index-C5OaxW6Y.js";import"./index-CANPVv15.js";import"./index-d_6bz31j.js";import"./index-CDRf2h9x.js";import"./32-DeoBrCvQ.js";import"./24-CrLAaNeG.js";import"./24-CpcywAhj.js";import"./24-Ch6Cnsji.js";import"./24-Q7FkUsyZ.js";import"./24-DOwtHgIx.js";import"./24-B4m_3SjA.js";import"./24-CV2ikCuL.js";import"./24-Ba8I7UHN.js";import"./24-BA0GVvoT.js";import"./16-CXoys7qm.js";import"./24-Cxxq2bXd.js";import"./16-DwnwCPW9.js";import"./16-BY-nZnBX.js";import"./16-DaMJtJxQ.js";const p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=496-18891&t=HhCDuaOuzHu5rgyf-1",S=()=>{const[e,r]=a.useState(0);return t.jsxs("div",{className:o.wrapper,children:[t.jsx(f,{title:"InputSlider",description:"InputSlider представляет собой слайдер для ввода числовых значений, который позволяет пользователю выбирать значение в заданном диапазоне.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputSlider",figmaLink:p}),t.jsx("div",{className:o.tabs,children:t.jsxs(i,{children:[t.jsx(i.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>r(0)}),t.jsx(i.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>r(1)}),t.jsx(i.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>r(2)})]})}),Number(e)===0&&t.jsxs(t.Fragment,{children:[t.jsx(s,{height:350,description:"InputSlider по умолчанию. Позволяет пользователю выбирать значение от 0 до 100.",code:`import { useState } from 'react';
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
