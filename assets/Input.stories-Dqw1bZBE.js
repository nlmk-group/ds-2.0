import{U as m,M as h,e as f}from"./chunk-HLWAVYOI-C7PqFZo0.js";import{J as r,I as u}from"./index-CTSkFh7q.js";import{a as i,j as t,F as d}from"./jsx-runtime-2xDJh5tt.js";import{r as g}from"./index-CBqU2yxZ.js";import{s,H as I,E as o,T as C}from"./Tests-Tg5e2fxD.js";import{F as b}from"./FigmaEmbed-DJ6dUPkg.js";import{P as x}from"./Properties-DBrGegiF.js";import"./generateUUID-B5cPxuxR.js";import"./index-CcmeEFL2.js";import"./index-CTkD9j2t.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import{T as y}from"./index-nWYpQihe.js";import"./index-D_LOBm7Z.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-DkuQRQ9j.js";import"./32-C0P3XX_L.js";import{a as S}from"./argsTypes-DpkWQQSX.js";import{useMDXComponents as T}from"./index-DI5IigMn.js";import"./iframe-CDZx1GSb.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-B4-PFky_.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./clsx.m-CH7BE6MN.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-C4g1n-GZ.js";import"./index-CMH8wQUv.js";const c=()=>{const[e,n]=g.useState(0);return i("div",{className:s.wrapper,children:[t(I,{title:"Input",description:"Компонент Input позволяет пользователям вводить текстовую информацию. Он поддерживает различные варианты, включая лейблы, иконки, многострочный ввод и различные стили.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Input",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20850&mode=design&t=awyt3Fzj1XS6th7v-1"}),t("div",{className:s.tabs,children:i(r,{children:[t(r.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>n(0)}),t(r.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>n(1)}),t(r.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>n(2)})]})}),Number(e)===0&&i(d,{children:[t(o,{height:200,description:"Input по умолчанию",code:`import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input />
  </>
);
`}),t(o,{height:200,description:"Input с лейблом",code:`import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input label="Label" />
  </>
);
`}),t(o,{height:200,description:"Input с лейблом и вспомогательным текстом",code:`import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input label="Label" helperText="Helper text" />
  </>
);
`}),t(o,{height:200,description:"Input в состоянии disabled",code:`import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input disabled value="Disabled Input" />
  </>
);
`}),t(o,{height:200,description:"Input в состоянии error",code:`import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input color="error" helperText="Error message" />
  </>
);
`}),t(o,{height:200,description:"Input в состоянии warning",code:`import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input color="warning" helperText="Warning message" />
  </>
);
`}),t(o,{height:200,description:"Input в состоянии success",code:`import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input color="success" helperText="Success message" />
  </>
);
`}),t(o,{height:200,description:"Textarea по умолчанию",code:`import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input multiline />
  </>
);
`}),t(o,{height:200,description:"Textarea со свойством ресайз",code:`import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input multiline resize />
  </>
);
`}),t(o,{height:350,description:"Возможно реализовать переключение компонента Input в PseudoInput с помощью пропса pseudo",code:`import { useState, SetStateAction } from 'react';
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
`}),t(x,{argsTypes:S})]}),Number(e)===1&&t(b,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20850&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(e)===2&&t(y,{variant:"Heading4",color:"primary",children:t(C,{componentName:"Input"})})]})};function a(e){return i(d,{children:[t(h,{title:"Components/Input/Info",component:u,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/Input-%CE%B2?node-id=139%3A35130&t=An78pqcphwSJHqiZ-0"},jest:["Input.test.tsx"]}}),`
`,t(f,{name:"Docs",children:t(m,{children:t(c,{})})})]})}function k(e={}){const{wrapper:n}=Object.assign({},T(),e.components);return n?t(n,{...e,children:t(a,{...e})}):a()}const l=()=>t(m,{children:t(c,{})});l.storyName="Docs";l.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const p={title:"Components/Input/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/Input-%CE%B2?node-id=139%3A35130&t=An78pqcphwSJHqiZ-0"},jest:["Input.test.tsx"]},component:u,tags:["stories-mdx"],includeStories:["docs"]};p.parameters=p.parameters||{};p.parameters.docs={...p.parameters.docs||{},page:k};const gt=["docs"];export{gt as __namedExportsOrder,p as default,l as docs};
