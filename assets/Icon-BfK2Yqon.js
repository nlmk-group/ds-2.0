import{j as r}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as p}from"./index-DtGqrCZN.js";import{ag as l,ah as d,ai as x}from"./chunk-NUUEMKO5-Ctn7VFPu.js";import{I as j}from"./index-iWHyAWYR.js";import{DecoratorDefault as h}from"./Decorator.stories-CffsLfgf.js";import{r as f}from"./index-Cu9bd8lq.js";import{s as i,H as u,E as g}from"./Header-CN10_-75.js";import{P as v}from"./Properties-Btz1YxCe.js";import{T}from"./Tests-CWaY5hDn.js";/* empty css               */import{$ as s}from"./index-ZojCmbpv.js";import"./generateUUID-CG7VmJJw.js";import"./index-XsxLq1mj.js";import"./index-AXtJih2E.js";import"./index-ED8ccfsJ.js";import"./index-CWQ0GGcJ.js";import{T as e}from"./index-BHxe-dnq.js";import"./index-BztLnIMF.js";import"./index-Udc0C2Qz.js";import"./index-CPdpS9Jm.js";import"./32-Bjhqu_Pf.js";import{l as b,A as I,a as y}from"./Icon.stories-RhLHP-uP.js";import"./iframe-DB6xw0G7.js";import"../sb-preview/runtime.js";import"./index-Ckls47V4.js";import"./index-D-8MO0q_.js";import"./get-CeVb1zXw.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-ebfOklXd.js";import"./index-DrFu-skq.js";import"./client-C_RBoFGa.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-mZjneSg7.js";import"./index-7KVZVlDS.js";import"./index-CT-NzDDa.js";import"./styles.module-DyNiVTaI.js";const n="Icon",C=()=>{const[o,t]=f.useState(0),a=c=>o===c;return r.jsxs("div",{className:i.wrapper,children:[r.jsx(u,{title:n,description:"Компонент иконок, который можно использовать как самостоятельно, так и внутри других компонентов",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${n}`}),r.jsxs("div",{className:i["header-wrapper"],children:[r.jsx(e,{variant:"Heading2",color:"var(--steel-90)",children:"Иконки"}),r.jsx("p",{children:"Существует 2 разных способа добавить иконку в проект:"}),r.jsxs("ol",{children:[r.jsx("li",{children:"Использовать компонент Icon"}),r.jsx("li",{children:"Использовать каждую кастомизированную иконку, как отдельный компонент"})]}),r.jsx(e,{variant:"Heading2",color:"var(--steel-90)",children:"Примеры"}),r.jsxs("p",{children:["Компонент Icon - каждая иконка данного компонента имеет контейнер (размер контейнера по умолчанию равен размеру иконки). Важно: загрузка иконки осуществляется по её имени в соответствии с макетом figma.",r.jsx("br",{}),"Для кастомизированных иконок доступны свойства:"]}),r.jsxs("ul",{children:[r.jsx("li",{children:"name - название иконки, соответствующее макету Figma;"}),r.jsx("li",{children:"color - цвет иконки, согласно макету;"}),r.jsx("li",{children:"htmlColor - цвет иконки, задаваемый пользователем;"}),r.jsx("li",{children:"containerSize - размер контейнера иконки (по умолчанию равен размеру иконки)"})]})]}),r.jsx("div",{className:i.tabs,children:r.jsxs(s,{children:[r.jsx(s.Tab,{label:"Разработчику",active:a(0),onClick:()=>t(0)}),r.jsx(s.Tab,{label:"Тестирование",active:a(2),onClick:()=>t(2)})]})}),o==0&&r.jsxs(r.Fragment,{children:[r.jsx(g,{description:"Компонент Icon по умолчанию",code:`import { Icon } from '@nlmk/ds-2.0';

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
`,r.jsx(x,{children:r.jsx(C,{})})]})}function mr(o={}){const{wrapper:t}={...p(),...o.components};return t?r.jsx(t,{...o,children:r.jsx(m,{...o})}):m()}export{mr as default};
