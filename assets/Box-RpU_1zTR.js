import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as a}from"./index-CbmgEnq2.js";import{am as n,an as p,ao as m}from"./chunk-NUUEMKO5-DRLKmIkX.js";import{B as d}from"./index-ExEzblsB.js";import{DecoratorDefault as x}from"./Decorator.stories-B1hjNCvN.js";import{r as c}from"./index-Bnop-kX6.js";import{s as i,H as l,E as u}from"./Header-DN6MKiI-.js";import{P as f}from"./Properties-CKpneD_Z.js";import{T as b}from"./Tests-Bj4s1B_c.js";/* empty css               */import{ah as e}from"./TreeList-xp0hkVtZ.js";import"./generateUUID-B-1dzpB_.js";import"./index-CvUjrmfM.js";import"./index-DppSdhCO.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DubX4Ptm.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-CLtrYh5C.js";import"./index-DokmLR-l.js";import"./32-BXnIH58b.js";import{a as B}from"./argsTypes-BguQK6BN.js";import"./iframe-DUZ1hTlE.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-u9G5VVgx.js";import"./index-B5g4YLzC.js";const j=()=>{const[o,r]=c.useState(0);return t.jsxs("div",{className:i.wrapper,children:[t.jsx(l,{title:"Box",description:"Компонент Box представляет собой универсальный контейнер, используемый для стилизации и компоновки содержимого. Он обладает пропсами для управления стилями, включая background, padding, border, borderRadius и flexbox свойствами, такими как display, flexDirection, justifyContent, alignItems, flexWrap и gap. Это делает Box инструментом для создания структурированного и адаптивного интерфейса.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Box"}),t.jsx("div",{className:i.tabs,children:t.jsxs(e,{children:[t.jsx(e.Tab,{label:"Разработчику",active:o===0,onClick:()=>r(0)}),t.jsx(e.Tab,{label:"Тестирование",active:o===2,onClick:()=>r(2)})]})}),o===0&&t.jsxs(t.Fragment,{children:[t.jsx(u,{height:500,description:"Большинство свойств стилей можно настраивать через пропсы компонента. Также все свойства доступны через пропс st.",code:`import { Box, Button, Divider } from '@nlmk/ds-2.0';

export default App = () => (
  <div style={{ width: "100%", padding: 0 }}>
    <Box
      border="1px solid var(--ac-button-grey-outline-default-stroke)"
      borderRadius="var(--8-radius)"
      p="var(--8-space)"
    >
      <Button>Заполнить</Button>
      <Button color="grey">Посмотреть</Button>
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
)`}),t.jsx(f,{argsTypes:B})]}),o===2&&t.jsx(b,{componentName:"Box"})]})};function s(o){return t.jsxs(t.Fragment,{children:[t.jsx(n,{title:"Components/Box/Info",component:d,parameters:{jest:["Box.test.tsx"]}}),`
`,t.jsx(p,{of:x}),`
`,t.jsx(m,{children:t.jsx(j,{})})]})}function $(o={}){const{wrapper:r}={...a(),...o.components};return r?t.jsx(r,{...o,children:t.jsx(s,{...o})}):s()}export{$ as default};
