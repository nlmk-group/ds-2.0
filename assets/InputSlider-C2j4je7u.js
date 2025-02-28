import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as p}from"./index-CbmgEnq2.js";import{am as m,an as l,ao as d}from"./chunk-NUUEMKO5-BOWIa_V1.js";import{I as u}from"./index-FnAFVao7.js";import{DecoratorDefault as c}from"./Decorator.stories-B1hjNCvN.js";import{r as x}from"./index-Bnop-kX6.js";import{s as o,H as f,E as s}from"./Header-BFE7zsBB.js";import{F as h}from"./FigmaEmbed-BL7csGAz.js";import{P as g}from"./Properties-B40w3n_w.js";import{T as b}from"./Tests-BAcW5GGH.js";import{ag as i}from"./TreeList-biahPqpH.js";import"./generateUUID-C85qI4Bk.js";import"./index-lePHaZI9.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-Cy-FRK8M.js";import"./index-cR4M_wwG.js";import"./index-cYFuzf0Y.js";import"./index-DokmLR-l.js";import"./32-D2mD275C.js";import{a as j}from"./argsTypes-OA9StBF6.js";import"./iframe-eqSkRmfN.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./index-B5g4YLzC.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-CVGUngMg.js";const a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=496-18891&t=HhCDuaOuzHu5rgyf-1",S=()=>{const[t,r]=x.useState(0);return e.jsxs("div",{className:o.wrapper,children:[e.jsx(f,{title:"InputSlider",description:"InputSlider представляет собой слайдер для ввода числовых значений, который позволяет пользователю выбирать значение в заданном диапазоне.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputSlider",figmaLink:a}),e.jsx("div",{className:o.tabs,children:e.jsxs(i,{children:[e.jsx(i.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>r(0)}),e.jsx(i.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>r(1)}),e.jsx(i.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>r(2)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(s,{height:350,description:"InputSlider по умолчанию. Позволяет пользователю выбирать значение от 0 до 100.",code:`import { useState } from 'react';
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
`}),e.jsx(g,{argsTypes:j})]}),Number(t)===1&&e.jsx(h,{url:a}),Number(t)===2&&e.jsx(b,{componentName:"InputSlider"})]})};function n(t){return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Components/InputSlider/Info",component:u,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=944-6995&t=xN2Xxpz0c5cAQi98-0"},jest:["InputSlider.test.tsx"]}}),`
`,e.jsx(l,{of:c}),`
`,e.jsx(d,{children:e.jsx(S,{})})]})}function ie(t={}){const{wrapper:r}={...p(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(n,{...t})}):n()}export{ie as default};
