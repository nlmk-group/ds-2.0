import{M as g,U as f}from"./chunk-HLWAVYOI-d631769f.js";import{I as l}from"./index-ed56af28.js";import{a as i,j as r,F as d}from"./clsx.m-3764cf42.js";import{r as u}from"./index-f1f749bf.js";import{s as m,H as b,E as T,T as y}from"./Tests-90dff33a.js";import{P as I}from"./Properties-88568f40.js";/* empty css               */import{a}from"./index-28aa8d3c.js";import"./index-a4c35820.js";import"./index-63601013.js";import"./index-e99519f1.js";import"./index-cd305b84.js";import"./index-147655d7.js";import{T as t}from"./index-fb030d50.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-8c6efd17.js";import{A as v,a as C}from"./Icon.stories-d3a5bec3.js";import{u as w}from"./index-4fb8b842.js";import"./iframe-abf28b65.js";import"../sb-preview/runtime.js";import"./react-16-8c769108.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f8a8f14b.js";import"./get-78cac09e.js";import"./callBound-57fbc82c.js";import"./mapValues-f98d729d.js";import"./index-b75c9059.js";import"./uniq-b8c8c302.js";import"./index-356e4a49.js";import"./index-8a8a28ec.js";import"./index-29c055d1.js";import"./IconsList.module-e4fe8555.js";import"./IconArticle24-414bfa4c.js";import"./IconPanTool24-f1398bf1.js";import"./.jest-test-results-551c368c.js";import"./index-c1da5c13.js";import"./Icon.module-c849345d.js";const c="Icon",M=()=>{const[o,e]=u.useState(0),s=h=>o===h;return i("div",{className:m.wrapper,children:[r(b,{title:c,description:"Компонент иконок, который можно использовать как самостоятельно, так и внутри других компонентов",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${c}`}),i("div",{children:[r(t,{variant:"Heading2",children:"Свойства"}),i("ul",{children:[i("li",{children:[r("b",{children:"name: string"})," - название иконки"]}),i("li",{children:[r("b",{children:"color: action | disabled | error | primary | secondary | inherit | success | warning"})," - свойство цвета иконки"]}),i("li",{children:[r("b",{children:"htmlColor: string"})," - свойство пользовательского цвета иконки"]}),i("li",{children:[r("b",{children:"containerSize: 16 | 24 | 32"})," - контейнер иконки, по умолчанию равен размеру иконки. Пропс доступен только для компонента Icon"]}),i("li",{children:[r("b",{children:"size: 16 | 24 | 32"})," - размер иконки."]})]}),r(t,{variant:"Heading2",children:"Иконки"}),r("p",{children:"Существует 2 разных способа добавить иконку в проект:"}),i("ol",{children:[r("li",{children:"Использовать компонент Icon"}),r("li",{children:"Использовать каждую кастомизированную иконку, как отдельный компонент"})]}),r(t,{variant:"Heading2",children:"Примеры"}),i("p",{children:["Компонент Icon - каждая иконка данного компонента имеет контейнер (размер контейнера по умолчанию равен размеру иконки). Важно: загрузка иконки осуществляется по её имени в соответствии с макетом figma.",r("br",{}),"Для кастомизированных иконок доступны свойства:"]}),i("ul",{children:[r("li",{children:"name - название иконки, соответствующее макету Figma;"}),r("li",{children:"color - цвет иконки, согласно макету;"}),r("li",{children:"htmlColor - цвет иконки, задаваемый пользователем;"}),r("li",{children:"containerSize - размер контейнера иконки (по умолчанию равен размеру иконки)"})]})]}),r("div",{className:m.tabs,children:i(a,{children:[r(a.Tab,{label:"Разработчику",active:s(0),onClick:()=>e(0)}),r(a.Tab,{label:"Тестирование",active:s(2),onClick:()=>e(2)})]})}),o==0&&i(d,{children:[r(T,{description:"Компонент Icon по умолчанию",code:`import { Icon } from '@nlmk/ds-2.0';

const App = () => (
  <Icon
    name={'IconTackleCrane24'}
    color="primary"
    containerSize={32}
  />
)

export default App;
`}),r("br",{}),r(t,{variant:"Heading3",children:"Все доступные иконки"}),r(v,{}),r(I,{argsTypes:C})]}),o==2&&r(t,{variant:"Heading4",color:"primary",children:r(y,{componentName:c})})]})};function p(o){return i(d,{children:[r(g,{title:"Components/Icon/Info",component:l,parameters:{design:{type:"figma",url:"https://www.figma.com/file/MgF9yvGQTZuj4qYPcWYTf7/Icons-%CE%B2?node-id=2%3A10&t=STno9o75psLDOLl6-0"}}}),`
`,r(f,{children:r(M,{})})]})}function _(o={}){const{wrapper:e}=Object.assign({},w(),o.components);return e?r(e,{...o,children:r(p,{...o})}):p()}const A=()=>{throw new Error("Docs-only story")};A.parameters={docsOnly:!0};const n={title:"Components/Icon/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/MgF9yvGQTZuj4qYPcWYTf7/Icons-%CE%B2?node-id=2%3A10&t=STno9o75psLDOLl6-0"}},component:l,tags:["stories-mdx"],includeStories:["__page"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:_};const hr=["__page"];export{hr as __namedExportsOrder,A as __page,n as default};