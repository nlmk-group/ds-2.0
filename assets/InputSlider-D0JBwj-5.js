import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as p}from"./index-D2yTtfOz.js";import"./index-ClUish4o.js";import{I as m}from"./index-DxgC_uyg.js";import{DecoratorDefault as l}from"./Decorator.stories-D7iJJ_iz.js";import{r as d}from"./index-BcJSXhQi.js";import{s as o,H as u,E as s}from"./Header-DpoTPdk5.js";import{F as c}from"./FigmaEmbed-CT6-D-h9.js";import{P as x}from"./Properties-BX0Upu8d.js";import{T as f}from"./Tests-D-CJ43Hi.js";import{af as i}from"./TreeList-DzeN3YWi.js";import"./generateUUID-CJxgi7Ha.js";import"./index-BG4omi31.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-DcXliXrs.js";import"./index-VmJK6twV.js";import"./index-t2lirjGB.js";import"./index-C5rKoyII.js";import"./32-BpMTv1cT.js";import{a as h}from"./argsTypes-CuzCe2Pa.js";import{c as b,S as g,U as j}from"./DocsRenderer-CFRXHY34-wq7ryaw6.js";import"./index-ChsGqxH_.js";import"./preview-DWiXlkB8.js";import"./iframe-kozRxfYS.js";import"./index-CRm92gKC.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-Di62IBcE.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=496-18891&t=HhCDuaOuzHu5rgyf-1",S=()=>{const[t,r]=d.useState(0);return e.jsxs("div",{className:o.wrapper,children:[e.jsx(u,{title:"InputSlider",description:"InputSlider представляет собой слайдер для ввода числовых значений, который позволяет пользователю выбирать значение в заданном диапазоне.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputSlider",figmaLink:n}),e.jsx("div",{className:o.tabs,children:e.jsxs(i,{children:[e.jsx(i.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>r(0)}),e.jsx(i.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>r(1)}),e.jsx(i.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>r(2)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(s,{height:350,description:"InputSlider по умолчанию. Позволяет пользователю выбирать значение от 0 до 100.",code:`import { useState } from 'react';
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
`}),e.jsx(s,{height:350,description:"Неактивный InputSlider. Слайдер установлен в состояние 'disabled', что предотвращает взаимодействие пользователя.",code:`import { useState } from 'react';

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
`}),e.jsx(x,{argsTypes:h})]}),Number(t)===1&&e.jsx(c,{url:n}),Number(t)===2&&e.jsx(f,{componentName:"InputSlider"})]})};function a(t){return e.jsxs(e.Fragment,{children:[e.jsx(b,{title:"Components/InputSlider/Info",component:m,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=944-6995&t=xN2Xxpz0c5cAQi98-0"},jest:["InputSlider.test.tsx"]}}),`
`,e.jsx(g,{of:l}),`
`,e.jsx(j,{children:e.jsx(S,{})})]})}function ne(t={}){const{wrapper:r}={...p(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(a,{...t})}):a()}export{ne as default};
