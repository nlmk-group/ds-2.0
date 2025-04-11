import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as a}from"./index-CbmgEnq2.js";import{am as u,an as m,ao as d}from"./chunk-NUUEMKO5-CYeaHTsV.js";import{af as r,I as l}from"./TreeList-BjAYGU6i.js";import{DecoratorDefault as c}from"./Decorator.stories-B1hjNCvN.js";import{r as x}from"./index-Bnop-kX6.js";import{s as p,H as f,E as o}from"./Header-ClKrHdpp.js";import{F as h}from"./FigmaEmbed-DHnX0NKb.js";import{P as I}from"./Properties-N-2-JxOc.js";import{T as g}from"./Tests-BTN5Mu5Y.js";import"./generateUUID-BLuKx6pe.js";import"./index-DcUsRIWc.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-Dj-Wh1Bz.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-C9xHhmyi.js";import"./index-DokmLR-l.js";import"./32-70JnsVF1.js";import{a as b}from"./argsTypes-DqXI5oOM.js";import"./iframe-Bfxx6DB4.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-6mv60_jZ.js";import"./index-B5g4YLzC.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=557-223626&t=HhCDuaOuzHu5rgyf-1",j=()=>{const[e,n]=x.useState(0);return t.jsxs("div",{className:p.wrapper,children:[t.jsx(f,{title:"Input",description:"Компонент Input позволяет пользователям вводить текстовую информацию. Он поддерживает различные варианты, включая лейблы, иконки, многострочный ввод и различные стили.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Input",figmaLink:s}),t.jsx("div",{className:p.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>n(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>n(1)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>n(2)})]})}),Number(e)===0&&t.jsxs(t.Fragment,{children:[t.jsx(o,{height:200,description:"Input по умолчанию",code:`import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input />
  </>
);
`}),t.jsx(o,{height:200,description:"Input с лейблом",code:`import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input label="Label" />
  </>
);
`}),t.jsx(o,{height:200,description:"Input с лейблом и вспомогательным текстом",code:`import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input label="Label" helperText="Helper text" />
  </>
);
`}),t.jsx(o,{height:200,description:"Input в состоянии disabled",code:`import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input disabled value="Disabled Input" />
  </>
);
`}),t.jsx(o,{height:200,description:"Input в состоянии error",code:`import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input color="error" helperText="Error message" />
  </>
);
`}),t.jsx(o,{height:200,description:"Input в состоянии warning",code:`import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input color="warning" helperText="Warning message" />
  </>
);
`}),t.jsx(o,{height:200,description:"Input в состоянии success",code:`import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input color="success" helperText="Success message" />
  </>
);
`}),t.jsx(o,{height:200,description:"Textarea по умолчанию",code:`import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input multiline />
  </>
);
`}),t.jsx(o,{height:200,description:"Textarea со свойством ресайз",code:`import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input multiline resize />
  </>
);
`}),t.jsx(o,{height:350,description:"Возможно реализовать переключение компонента Input в PseudoInput с помощью пропса pseudo",code:`import { useState, SetStateAction } from 'react';
import { Input, Button } from '@nlmk/ds-2.0';

const App = () => {
    const [isPseudo, setIsPseudo] = useState(false);
    const [innerValue, setInnerValue] = useState('value');

    const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
        setInnerValue(e.target.value);
    };

    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Input pseudo={isPseudo} value={innerValue} label='Label' onChange={handleChange} />
                <Button type="button" onClick={() => setIsPseudo(!isPseudo)} style={{ marginTop: '10px' }}>
                    Переключить
                </Button>
            </div>
        </>
    );
};

export default App;
`}),t.jsx(I,{argsTypes:b})]}),Number(e)===1&&t.jsx(h,{url:s}),Number(e)===2&&t.jsx(g,{componentName:"Input"})]})};function i(e){return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Components/Input/Info",component:l,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/Input-%CE%B2?node-id=139%3A35130&t=An78pqcphwSJHqiZ-0"},jest:["Input.test.tsx"]}}),`
`,t.jsx(m,{of:c}),`
`,t.jsx(d,{children:t.jsx(j,{})})]})}function lt(e={}){const{wrapper:n}={...a(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(i,{...e})}):i()}export{lt as default};
