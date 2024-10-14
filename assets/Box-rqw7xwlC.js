import{j as t}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as a}from"./index-CpguRmgc.js";import{ag as n,ah as p,ai as m}from"./chunk-HLWAVYOI-DE0BXQ17.js";import{B as d}from"./index-c1a7ry8u.js";import{DecoratorDefault as x}from"./Decorator.stories-BP3ijO2B.js";import{r as c}from"./index-DQ2WTIsS.js";import{s as i,H as l,E as u}from"./Header-BTkqM39J.js";import{P as f}from"./Properties-fBpJ-g-x.js";import{T as b}from"./Tests-DUA7Exig.js";/* empty css               */import{a0 as e}from"./index-C8yIAa62.js";import"./generateUUID-7LaMQRml.js";import"./index-KO6O_hQW.js";import"./index-CSbymPMC.js";import"./index-rzy6QoZO.js";import"./index-ehXB0alm.js";import"./index-StdbG6rE.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-Bl5L39jK.js";import"./32-l5SNSvvS.js";import{a as B}from"./argsTypes-BguQK6BN.js";import"./iframe-CCXtlOg0.js";import"../sb-preview/runtime.js";import"./client-ClDtLkqA.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DZkQtLdq.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-jRqiM776.js";import"./index-BKbm6zW0.js";const j=()=>{const[o,r]=c.useState(0);return t.jsxs("div",{className:i.wrapper,children:[t.jsx(l,{title:"Box",description:"Компонент Box представляет собой универсальный контейнер, используемый для стилизации и компоновки содержимого. Он обладает пропсами для управления стилями, включая background, padding, border, borderRadius и flexbox свойствами, такими как display, flexDirection, justifyContent, alignItems, flexWrap и gap. Это делает Box инструментом для создания структурированного и адаптивного интерфейса.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Box"}),t.jsx("div",{className:i.tabs,children:t.jsxs(e,{children:[t.jsx(e.Tab,{label:"Разработчику",active:o===0,onClick:()=>r(0)}),t.jsx(e.Tab,{label:"Тестирование",active:o===2,onClick:()=>r(2)})]})}),o===0&&t.jsxs(t.Fragment,{children:[t.jsx(u,{height:500,description:"Большинство свойств стилей можно настраивать через пропсы компонента. Также все свойства доступны через пропс st.",code:`import { Box, Button, Divider } from '@nlmk/ds-2.0';

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
)`}),t.jsx(f,{argsTypes:B})]}),o===2&&t.jsx(b,{componentName:"Box"})]})};function s(o){return t.jsxs(t.Fragment,{children:[t.jsx(n,{title:"Components/Box/Info",component:d,parameters:{jest:["Box.test.tsx"]}}),`
`,t.jsx(p,{of:x}),`
`,t.jsx(m,{children:t.jsx(j,{})})]})}function ot(o={}){const{wrapper:r}={...a(),...o.components};return r?t.jsx(r,{...o,children:t.jsx(s,{...o})}):s()}export{ot as default};
