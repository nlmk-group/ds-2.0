import{U as p,M as u,e as x}from"./chunk-HLWAVYOI-BfKjnGx9.js";import{B as m}from"./index-BqvJ5JrJ.js";import{a as e,j as t,F as d}from"./jsx-runtime-2xDJh5tt.js";import{r as b}from"./index-CBqU2yxZ.js";import{s,H as f,E as g,T as B}from"./Tests-H48186Ay.js";import{P as y}from"./Properties-uWnm9Trj.js";/* empty css               */import{y as a}from"./index-BTGymsfC.js";import"./generateUUID-1cqmAxQg.js";import"./index-D1sOrwww.js";import{T as h}from"./index-CkVMA9Py.js";import"./index-BulafiJ9.js";import"./index-Dd2IALEV.js";import"./index-BGOHbkSJ.js";import"./index-Dp7-Jy-a.js";import"./index-D8kVD15d.js";import"./32-oKJmtLZM.js";import{a as v}from"./argsTypes-CCIL7-40.js";import{useMDXComponents as k}from"./index-DI5IigMn.js";import"./iframe-CsvrYQR8.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-DCSdqDHf.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./clsx.m-CH7BE6MN.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-C8gfT0_Y.js";import"./index-4J70fF5O.js";const c=()=>{const[o,r]=b.useState(0);return e("div",{className:s.wrapper,children:[t(f,{title:"Box",description:"Компонент Box представляет собой универсальный контейнер, используемый для стилизации и компоновки содержимого. Он обладает пропсами для управления стилями, включая background, paddingSpace, border, borderRadius и flexbox свойствами, такими как display, flexDirection, justifyContent, alignItems, flexWrap и gap. Это делает Box инструментом для создания структурированного и адаптивного интерфейса.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Box"}),t("div",{className:s.tabs,children:e(a,{children:[t(a.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>r(0)}),t(a.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>r(2)})]})}),Number(o)==0&&e(d,{children:[t(g,{height:500,description:"Большинство свойств стилей можно настраивать через пропсы компонента. Также все свойства доступны через пропс st.",code:`import { Box, Button, Divider } from '@nlmk/ds-2.0';

export default  App = () =>(
  <div style={{ width: "100%", padding: 0 }}>
    <Box
      border="1px solid var(--ac-button-grey-outline-default-stroke)"
      borderRadius="var(--8-radius)"
      paddingSpace="s"
    >
      <Button>Заполнить</Button>
      <Button variant="grey">Посмотреть</Button>
    </Box>
    <br/>
    <Divider dashed/>
    <br/>
    <Box justifyContent="center">
      <Box
        width="250px"
        flexDirection="column"
        borderRadius="var(--4-radius)"
        alignItems="center"
        background="var(--background-info)"
        st={{
          boxShadow: "0 10px 10px var(--background-default)",
          padding: "60px"
        }}
      >
        <Button>Заполнить</Button>
      </Box>
    </Box>
  </div>
)`}),t(y,{argsTypes:v})]}),Number(o)==2&&t(h,{variant:"Heading4",color:"primary",children:t(B,{componentName:"Button"})})]})};function n(o){return e(d,{children:[t(u,{title:"Components/Box/Info",component:m,parameters:{design:{type:"figma"},jest:["Box.test.tsx"]}}),`
`,t(x,{name:"Docs",children:t(p,{children:t(c,{})})})]})}function S(o={}){const{wrapper:r}=Object.assign({},k(),o.components);return r?t(r,{...o,children:t(n,{...o})}):n()}const l=()=>t(p,{children:t(c,{})});l.storyName="Docs";l.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const i={title:"Components/Box/Info",parameters:{design:{type:"figma"},jest:["Box.test.tsx"]},component:m,tags:["stories-mdx"],includeStories:["docs"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:S};const it=["docs"];export{it as __namedExportsOrder,i as default,l as docs};
