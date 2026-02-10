import{r as u,j as t,m as a,S as m,U as d}from"./iframe-BiRbIEmb.js";import{useMDXComponents as l}from"./index-DFADegm-.js";import{I as c}from"./index-CAP2lHO4.js";import{DecoratorDefault as x}from"./Decorator.stories-Cq2K7ZK_.js";import{s as i,H as f,E as o}from"./Header-BOuFM4z3.js";import{F as h}from"./FigmaEmbed-DXWxjqCs.js";import{P as I}from"./Properties-CTw5qxDW.js";import{T as g}from"./Tests-u2K_XUZf.js";import{T as p}from"./index-Bc-rzIjC.js";import{a as b}from"./argsTypes-CIU6cl2G.js";import"./preload-helper-PPVm8Dsz.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-BkTYmJOH.js";import"./index-CuPa9ZS_.js";import"./index-CIk7IDPA.js";import"./clsx-B-dksMZM.js";import"./index-D4AgSARz.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-Lr1o5q5Y.js";import"./24-BbKUo3HT.js";import"./24-Bp_HhEEU.js";import"./24-A5UfwTSh.js";import"./24-BFTkICnz.js";import"./24-CkBhKuNp.js";import"./24-99ZCpV7Q.js";import"./24-DuGNUhV0.js";import"./24-BSYcdl4j.js";import"./24-3PxmqcmV.js";import"./16-XX98Hoxr.js";import"./24-BLu740_K.js";import"./24-DOr3c8sx.js";import"./16-DUa4Gnlc.js";import"./16-CSBhMP4b.js";import"./16-DMPWLjn6.js";import"./index-CDeU-sH7.js";import"./index-DDnqRqhr.js";import"./index-t6GndyZ6.js";import"./index-BLKLNOs5.js";import"./sizesMapping-D8QavrGc.js";import"./index-BC1L0GA_.js";import"./index-BDGZFkub.js";import"./index-BbyeJaRT.js";import"./index-17UNxjz6.js";const n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=557-223626&t=HhCDuaOuzHu5rgyf-1",j=()=>{const[e,r]=u.useState(0);return t.jsxs("div",{className:i.wrapper,children:[t.jsx(f,{title:"Input",description:"Компонент Input позволяет пользователям вводить текстовую информацию. Он поддерживает различные варианты, включая лейблы, иконки, многострочный ввод и различные стили.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Input",figmaLink:n}),t.jsx("div",{className:i.tabs,children:t.jsxs(p,{children:[t.jsx(p.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>r(0)}),t.jsx(p.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>r(1)}),t.jsx(p.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>r(2)})]})}),Number(e)===0&&t.jsxs(t.Fragment,{children:[t.jsx(o,{height:200,description:"Input по умолчанию",code:`import { Input } from '@nlmk/ds-2.0';

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
`}),t.jsx(I,{argsTypes:b})]}),Number(e)===1&&t.jsx(h,{url:n}),Number(e)===2&&t.jsx(g,{componentName:"Input"})]})};function s(e){return t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"Components/Input/Info",component:c,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/Input-%CE%B2?node-id=139%3A35130&t=An78pqcphwSJHqiZ-0"},jest:["Input.test.tsx"]}}),`
`,t.jsx(m,{of:x}),`
`,t.jsx(d,{children:t.jsx(j,{})})]})}function Tt(e={}){const{wrapper:r}={...l(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(s,{...e})}):s()}export{Tt as default};
