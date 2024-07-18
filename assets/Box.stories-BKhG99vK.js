import{U as p,M as u,e as x}from"./chunk-HLWAVYOI-SF85AK4L.js";import{B as m}from"./index-DGfD3wI4.js";import{a as e,j as t,F as d}from"./jsx-runtime-2xDJh5tt.js";import{r as f}from"./index-CBqU2yxZ.js";import{s as i,H as b,E as B,T as g}from"./Tests-Blt8Zyt5.js";import{P as v}from"./Properties-BqRv8IKb.js";/* empty css               */import{J as s}from"./index-B_lQn97I.js";import"./generateUUID-BitdulAq.js";import"./index-D_z3tN8U.js";import"./index-CTkD9j2t.js";import"./index-CjrtVycB.js";import{T as h}from"./index-nWYpQihe.js";import"./index-CZmYKfHv.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-BDxIiU-V.js";import"./32-D4qDQhsJ.js";import{a as y}from"./argsTypes-BguQK6BN.js";import{useMDXComponents as k}from"./index-DI5IigMn.js";import"./iframe-C_y8s-SQ.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-uzXR7sYQ.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./clsx.m-CH7BE6MN.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-Oo-_7YZz.js";import"./index-CMH8wQUv.js";const c=()=>{const[o,r]=f.useState(0);return e("div",{className:i.wrapper,children:[t(b,{title:"Box",description:"Компонент Box представляет собой универсальный контейнер, используемый для стилизации и компоновки содержимого. Он обладает пропсами для управления стилями, включая background, padding, border, borderRadius и flexbox свойствами, такими как display, flexDirection, justifyContent, alignItems, flexWrap и gap. Это делает Box инструментом для создания структурированного и адаптивного интерфейса.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Box"}),t("div",{className:i.tabs,children:e(s,{children:[t(s.Tab,{label:"Разработчику",active:o===0,onClick:()=>r(0)}),t(s.Tab,{label:"Тестирование",active:o===2,onClick:()=>r(2)})]})}),o===0&&e(d,{children:[t(B,{height:500,description:"Большинство свойств стилей можно настраивать через пропсы компонента. Также все свойства доступны через пропс st.",code:`import { Box, Button, Divider } from '@nlmk/ds-2.0';

export default App = () => (
  <div style={{ width: "100%", padding: 0 }}>
    <Box
      border="1px solid var(--ac-button-grey-outline-default-stroke)"
      borderRadius="var(--8-radius)"
      p="var(--8-space)"
    >
      <Button>Заполнить</Button>
      <Button variant="grey">Посмотреть</Button>
    </Box>
    <br />
    <Divider dashed />
    <br />
    <Box justifyContent="center">
      <Box
        width="250px"
        flexDirection="column"
        borderRadius="var(--4-radius)"
        alignItems="center"
        background="var(--background-info)"
        py="var(--60-space)"
        px="var(--60-space)"
        st={{
          boxShadow: "0 10px 10px var(--background-default)"
        }}
      >
        <Button>Заполнить</Button>
      </Box>
    </Box>
  </div>
)`}),t(v,{argsTypes:y})]}),o===2&&t(h,{variant:"Heading4",color:"primary",children:t(g,{componentName:"Box"})})]})};function n(o){return e(d,{children:[t(u,{title:"Components/Box/Info",component:m,parameters:{jest:["Box.test.tsx"]}}),`
`,t(x,{name:"Docs",children:t(p,{children:t(c,{})})})]})}function T(o={}){const{wrapper:r}=Object.assign({},k(),o.components);return r?t(r,{...o,children:t(n,{...o})}):n()}const l=()=>t(p,{children:t(c,{})});l.storyName="Docs";l.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const a={title:"Components/Box/Info",parameters:{jest:["Box.test.tsx"]},component:m,tags:["stories-mdx"],includeStories:["docs"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:T};const st=["docs"];export{st as __namedExportsOrder,a as default,l as docs};
