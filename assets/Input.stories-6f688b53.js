import{M as y,U as w}from"./chunk-HLWAVYOI-bd2949d1.js";import{a as r,U as m}from"./index-f014e98c.js";import{a as p,j as t,F as u}from"./clsx.m-3764cf42.js";import{r as T}from"./index-f1f749bf.js";import{s,H as k,E as o,T as S}from"./Tests-605cd25b.js";import{F as A}from"./FigmaEmbed-6f82f7c8.js";import{P as v}from"./Properties-83346e89.js";import"./index-ec455f54.js";import"./index-095d5581.js";import"./index-e99519f1.js";import"./index-147655d7.js";import{T as N}from"./index-fb030d50.js";import"./index-c9e69acb.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-bc089e17.js";import{a as q}from"./argsTypes-29b84c4e.js";import{u as M}from"./index-4fb8b842.js";import"./iframe-6c91f604.js";import"../sb-preview/runtime.js";import"./react-16-8c769108.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f8a8f14b.js";import"./get-78cac09e.js";import"./callBound-57fbc82c.js";import"./mapValues-f98d729d.js";import"./index-b75c9059.js";import"./uniq-b8c8c302.js";import"./index-356e4a49.js";import"./index-12f93142.js";import"./index-29c055d1.js";import"./.jest-test-results-108bf634.js";import"./index-c1da5c13.js";const j=()=>{const[e,n]=T.useState(0),d=`import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input />
  </>
);
`,l=`import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input label="Label" />
  </>
);
`,c=`import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input label="Label" helperText="Helper text" />
  </>
);
`,f=`import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input disabled value="Disabled Input" />
  </>
);
`,g=`import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input color="error" helperText="Error message" />
  </>
);
`,h=`import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input color="warning" helperText="Warning message" />
  </>
);
`,I=`import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input color="success" helperText="Success message" />
  </>
);
`,b=`import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input multiline />
  </>
);
`,x=`import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input multiline resize />
  </>
);
`,C=`import { useState, SetStateAction } from 'react';
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
`;return p("div",{className:s.wrapper,children:[t(k,{title:"Input",description:"Компонент Input позволяет пользователям вводить текстовую информацию. Он поддерживает различные варианты, включая лейблы, иконки, многострочный ввод и различные стили.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Input",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20850&mode=design&t=awyt3Fzj1XS6th7v-1"}),t("div",{className:s.tabs,children:p(r,{children:[t(r.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>n(0)}),t(r.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>n(1)}),t(r.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>n(2)})]})}),Number(e)===0&&p(u,{children:[t(o,{height:200,description:"Input по умолчанию",code:d}),t(o,{height:200,description:"Input с лейблом",code:l}),t(o,{height:200,description:"Input с лейблом и вспомогательным текстом",code:c}),t(o,{height:200,description:"Input в состоянии disabled",code:f}),t(o,{height:200,description:"Input в состоянии error",code:g}),t(o,{height:200,description:"Input в состоянии warning",code:h}),t(o,{height:200,description:"Input в состоянии success",code:I}),t(o,{height:200,description:"Textarea по умолчанию",code:b}),t(o,{height:200,description:"Textarea со свойством ресайз",code:x}),t(o,{height:350,description:"Возможно реализовать переключение компонента Input в PseudoInput с помощью пропса pseudo",code:C}),t(v,{argsTypes:q})]}),Number(e)===1&&t(A,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20850&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(e)===2&&t(N,{variant:"Heading4",color:"primary",children:t(S,{componentName:"Input"})})]})};function a(e){return p(u,{children:[t(y,{title:"Components/Input/Info",component:m,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/Input-%CE%B2?node-id=139%3A35130&t=An78pqcphwSJHqiZ-0"},jest:["Input.test.tsx"]}}),`
`,t(w,{children:t(j,{})})]})}function L(e={}){const{wrapper:n}=Object.assign({},M(),e.components);return n?t(n,{...e,children:t(a,{...e})}):a()}const D=()=>{throw new Error("Docs-only story")};D.parameters={docsOnly:!0};const i={title:"Components/Input/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/Input-%CE%B2?node-id=139%3A35130&t=An78pqcphwSJHqiZ-0"},jest:["Input.test.tsx"]},component:m,tags:["stories-mdx"],includeStories:["__page"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:L};const gt=["__page"];export{gt as __namedExportsOrder,D as __page,i as default};
