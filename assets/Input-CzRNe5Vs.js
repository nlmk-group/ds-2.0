import{j as t}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as s}from"./index-CpguRmgc.js";import"./chunk-HLWAVYOI-BpCf8szX.js";import{ae as a,af as u,ag as m}from"./index-CY6AFN3F.js";import{Q as i,I as d}from"./index-De6xVjfl.js";import{DecoratorDefault as l}from"./Decorator.stories-BP3ijO2B.js";import{r as c}from"./index-DQ2WTIsS.js";import{s as r,H as x,E as o}from"./Header-LklIFrOQ.js";import{F as f}from"./FigmaEmbed-oiCkEjTf.js";import{P as h}from"./Properties-DzW4XCsL.js";import{T as I}from"./Tests-BNc6kC-d.js";import"./generateUUID-i9L7EtYg.js";import"./index-bLIWCpda.js";import"./index-BgyuaCKK.js";import"./index-B8KuQLf-.js";import"./index-B_c816qF.js";import"./index-DJXOh8UI.js";import"./index-DB41iIPt.js";import"./index-wNTT8eSr.js";import"./index-S3KjbRnp.js";import"./index-CpIRsoAz.js";import"./32-C4VDZHit.js";import{a as g}from"./argsTypes-Ck5EExuU.js";import"./iframe-DmgkbAwY.js";import"../sb-preview/runtime.js";import"./client-ClDtLkqA.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DZkQtLdq.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BgRDMNuH.js";import"./index-0sbKER3h.js";const C=()=>{const[e,n]=c.useState(0);return t.jsxs("div",{className:r.wrapper,children:[t.jsx(x,{title:"Input",description:"Компонент Input позволяет пользователям вводить текстовую информацию. Он поддерживает различные варианты, включая лейблы, иконки, многострочный ввод и различные стили.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Input",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20850&mode=design&t=awyt3Fzj1XS6th7v-1"}),t.jsx("div",{className:r.tabs,children:t.jsxs(i,{children:[t.jsx(i.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>n(0)}),t.jsx(i.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>n(2)})]})}),Number(e)===0&&t.jsxs(t.Fragment,{children:[t.jsx(o,{height:200,description:"Input по умолчанию",code:`import { Input } from '@nlmk/ds-2.0';

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
                <Button onClick={() => setIsPseudo(!isPseudo)} style={{ marginTop: '10px' }}>
                    Переключить
                </Button>
            </div>
        </>
    );
};

export default App;
`}),t.jsx(h,{argsTypes:g})]}),Number(e)===1&&t.jsx(f,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20850&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(e)===2&&t.jsx(I,{componentName:"Input"})]})};function p(e){return t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"Components/Input/Info",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/Input-%CE%B2?node-id=139%3A35130&t=An78pqcphwSJHqiZ-0"},jest:["Input.test.tsx"]}}),`
`,t.jsx(u,{of:l}),`
`,t.jsx(m,{children:t.jsx(C,{})})]})}function ct(e={}){const{wrapper:n}={...s(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(p,{...e})}):p()}export{ct as default};
