import{j as r}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as p}from"./index-CpguRmgc.js";import"./chunk-HLWAVYOI-BpCf8szX.js";import{ae as l,af as d,ag as x}from"./index-CY6AFN3F.js";import{I as j}from"./index-DB41iIPt.js";import{DecoratorDefault as h}from"./Decorator.stories-BP3ijO2B.js";import{r as f}from"./index-DQ2WTIsS.js";import{s as i,H as u,E as g}from"./Header-LklIFrOQ.js";import{P as v}from"./Properties-DzW4XCsL.js";import{T}from"./Tests-BNc6kC-d.js";/* empty css               */import{Q as s}from"./index-De6xVjfl.js";import"./generateUUID-i9L7EtYg.js";import"./index-bLIWCpda.js";import"./index-BgyuaCKK.js";import"./index-B8KuQLf-.js";import"./index-B_c816qF.js";import{T as e}from"./index-DJXOh8UI.js";import"./index-wNTT8eSr.js";import"./index-S3KjbRnp.js";import"./index-CpIRsoAz.js";import"./32-C4VDZHit.js";import{l as b,A as I,a as y}from"./Icon.stories-4WH0SBGf.js";import"./iframe-DmgkbAwY.js";import"../sb-preview/runtime.js";import"./client-ClDtLkqA.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DZkQtLdq.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BgRDMNuH.js";import"./index-0sbKER3h.js";import"./index-D0_EUMgh.js";const n="Icon",C=()=>{const[o,t]=f.useState(0),a=c=>o===c;return r.jsxs("div",{className:i.wrapper,children:[r.jsx(u,{title:n,description:"Компонент иконок, который можно использовать как самостоятельно, так и внутри других компонентов",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${n}`}),r.jsxs("div",{className:i["header-wrapper"],children:[r.jsx(e,{variant:"Heading2",color:"var(--steel-90)",children:"Иконки"}),r.jsx("p",{children:"Существует 2 разных способа добавить иконку в проект:"}),r.jsxs("ol",{children:[r.jsx("li",{children:"Использовать компонент Icon"}),r.jsx("li",{children:"Использовать каждую кастомизированную иконку, как отдельный компонент"})]}),r.jsx(e,{variant:"Heading2",color:"var(--steel-90)",children:"Примеры"}),r.jsxs("p",{children:["Компонент Icon - каждая иконка данного компонента имеет контейнер (размер контейнера по умолчанию равен размеру иконки). Важно: загрузка иконки осуществляется по её имени в соответствии с макетом figma.",r.jsx("br",{}),"Для кастомизированных иконок доступны свойства:"]}),r.jsxs("ul",{children:[r.jsx("li",{children:"name - название иконки, соответствующее макету Figma;"}),r.jsx("li",{children:"color - цвет иконки, согласно макету;"}),r.jsx("li",{children:"htmlColor - цвет иконки, задаваемый пользователем;"}),r.jsx("li",{children:"containerSize - размер контейнера иконки (по умолчанию равен размеру иконки)"})]})]}),r.jsx("div",{className:i.tabs,children:r.jsxs(s,{children:[r.jsx(s.Tab,{label:"Разработчику",active:a(0),onClick:()=>t(0)}),r.jsx(s.Tab,{label:"Тестирование",active:a(2),onClick:()=>t(2)})]})}),o==0&&r.jsxs(r.Fragment,{children:[r.jsx(g,{description:"Компонент Icon по умолчанию",code:`import { Icon } from '@nlmk/ds-2.0';

const App = () => (
  <Icon
    name={'IconTackleCrane24'}
    color="primary"
    containerSize={32}
  />
)

export default App;
`}),r.jsx("br",{}),r.jsx(e,{color:"var(--steel-90)",variant:"Heading3",children:"Все доступные иконки"}),r.jsx("br",{}),r.jsx("div",{className:b["wrapper-info"],children:r.jsx(I,{})}),r.jsx(v,{argsTypes:y})]}),o==2&&r.jsx(T,{componentName:n})]})};function m(o){return r.jsxs(r.Fragment,{children:[r.jsx(l,{title:"Components/Icon/Info",component:j,parameters:{design:{type:"figma",url:"https://www.figma.com/file/MgF9yvGQTZuj4qYPcWYTf7/Icons-%CE%B2?node-id=2%3A10&t=STno9o75psLDOLl6-0"}}}),`
`,r.jsx(d,{of:h}),`
`,r.jsx(x,{children:r.jsx(C,{})})]})}function cr(o={}){const{wrapper:t}={...p(),...o.components};return t?r.jsx(t,{...o,children:r.jsx(m,{...o})}):m()}export{cr as default};
