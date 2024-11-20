import{j as r}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as p}from"./index-CbmgEnq2.js";import{am as l,an as d,ao as x}from"./chunk-NUUEMKO5-BraWSKNL.js";import{I as j}from"./index-Dxx-yGvP.js";import{DecoratorDefault as h}from"./Decorator.stories-B1hjNCvN.js";import{r as f}from"./index-Bnop-kX6.js";import{s,H as u,E as v}from"./Header-C4FG6ioC.js";import{P as g}from"./Properties-Bo9UchF8.js";import{T}from"./Tests-CitszsXr.js";/* empty css               */import{a9 as e}from"./index-CXSd2JwH.js";import"./generateUUID-Dz4mOyMt.js";import"./index-BuHkNwZq.js";import"./index-CiiUx5gY.js";import"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import{T as i}from"./index-qC5wYQgy.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-CG5Hm5ah.js";import"./32-QiGXh8Io.js";import{l as b,A as I,a as y}from"./Icon.stories-BqwBJ8Zb.js";import"./iframe-Bgtob_UG.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-TdYkn6gi.js";import"./index-CT8gBKwQ.js";import"./index-BCXCgIaz.js";import"./styles.module-ox-emdf8.js";const n="Icon",C=()=>{const[o,t]=f.useState(0),a=c=>o===c;return r.jsxs("div",{className:s.wrapper,children:[r.jsx(u,{title:n,description:"Компонент иконок, который можно использовать как самостоятельно, так и внутри других компонентов",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${n}`}),r.jsxs("div",{className:s["header-wrapper"],children:[r.jsx(i,{variant:"Heading2",color:"var(--steel-90)",children:"Иконки"}),r.jsx("p",{children:"Существует 2 разных способа добавить иконку в проект:"}),r.jsxs("ol",{children:[r.jsx("li",{children:"Использовать компонент Icon"}),r.jsx("li",{children:"Использовать каждую кастомизированную иконку, как отдельный компонент"})]}),r.jsx(i,{variant:"Heading2",color:"var(--steel-90)",children:"Примеры"}),r.jsxs("p",{children:["Компонент Icon - каждая иконка данного компонента имеет контейнер (размер контейнера по умолчанию равен размеру иконки). Важно: загрузка иконки осуществляется по её имени в соответствии с макетом figma.",r.jsx("br",{}),"Для кастомизированных иконок доступны свойства:"]}),r.jsxs("ul",{children:[r.jsx("li",{children:"name - название иконки, соответствующее макету Figma;"}),r.jsx("li",{children:"color - цвет иконки, согласно макету;"}),r.jsx("li",{children:"htmlColor - цвет иконки, задаваемый пользователем;"}),r.jsx("li",{children:"containerSize - размер контейнера иконки (по умолчанию равен размеру иконки)"})]})]}),r.jsx("div",{className:s.tabs,children:r.jsxs(e,{children:[r.jsx(e.Tab,{label:"Разработчику",active:a(0),onClick:()=>t(0)}),r.jsx(e.Tab,{label:"Тестирование",active:a(2),onClick:()=>t(2)})]})}),o==0&&r.jsxs(r.Fragment,{children:[r.jsx(v,{description:"Компонент Icon по умолчанию",code:`import { Icon } from '@nlmk/ds-2.0';

const App = () => (
  <Icon
    name={'IconTackleCrane24'}
    color="primary"
    containerSize={32}
  />
)

export default App;
`}),r.jsx("br",{}),r.jsx(i,{color:"var(--steel-90)",variant:"Heading3",children:"Все доступные иконки"}),r.jsx("br",{}),r.jsx("div",{className:b["wrapper-info"],children:r.jsx(I,{})}),r.jsx(g,{argsTypes:y})]}),o==2&&r.jsx(T,{componentName:n})]})};function m(o){return r.jsxs(r.Fragment,{children:[r.jsx(l,{title:"Components/Icon/Info",component:j,parameters:{design:{type:"figma",url:"https://www.figma.com/file/MgF9yvGQTZuj4qYPcWYTf7/Icons-%CE%B2?node-id=2%3A10&t=STno9o75psLDOLl6-0"}}}),`
`,r.jsx(d,{of:h}),`
`,r.jsx(x,{children:r.jsx(C,{})})]})}function nr(o={}){const{wrapper:t}={...p(),...o.components};return t?r.jsx(t,{...o,children:r.jsx(m,{...o})}):m()}export{nr as default};
