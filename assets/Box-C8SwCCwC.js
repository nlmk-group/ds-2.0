import{r as p,j as t,m as n,S as m,U as a}from"./iframe-tXE4xoYc.js";import{useMDXComponents as x}from"./index-BU2Hc1BN.js";import{B as d}from"./index-Cx9ne2MY.js";import{DecoratorDefault as c}from"./Decorator.stories-DX_mk-19.js";import{s as i,H as l,E as u}from"./Header-D7Lkw1fr.js";import{P as b}from"./Properties-3Caa_vUq.js";import{T as f}from"./Tests-COuvSTuJ.js";/* empty css               */import{T as e}from"./index-BdAkzp84.js";import{a as B}from"./argsTypes-xsg3B_9m.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-IJbXH1LS.js";import"./index-BJ8dPBsg.js";import"./index-DnvHMcnj.js";import"./index-BQHkH-Oh.js";import"./index-D0fx2znr.js";import"./generateUUID-M57HTP56.js";import"./24-CGaTDQAV.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-UIqxTLHU.js";import"./sizesMapping-D8QavrGc.js";import"./index-D3OER6c8.js";import"./index-DfJPKXXV.js";import"./index-CjsErmK6.js";import"./index-BavAFXG7.js";import"./32-C-sXzJO7.js";import"./24-CmyNkjMd.js";import"./24-DOosEbor.js";import"./24-BWrbmGeu.js";import"./24-BbCg_oVA.js";import"./24-DRYMupHO.js";import"./24-CzQL-KAt.js";import"./24-DKRMhkuJ.js";import"./24-BGmf7Yvo.js";import"./24-C3aWb0fW.js";import"./16-5OD6xOBP.js";import"./24-DhcVhNlZ.js";import"./16-DrGrHANJ.js";import"./16-3aq9OzD6.js";import"./16-Caqr7FMr.js";const j=()=>{const[o,r]=p.useState(0);return t.jsxs("div",{className:i.wrapper,children:[t.jsx(l,{title:"Box",description:"Компонент Box представляет собой универсальный контейнер, используемый для стилизации и компоновки содержимого. Он обладает пропсами для управления стилями, включая background, padding, border, borderRadius и flexbox свойствами, такими как display, flexDirection, justifyContent, alignItems, flexWrap и gap. Это делает Box инструментом для создания структурированного и адаптивного интерфейса.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Box"}),t.jsx("div",{className:i.tabs,children:t.jsxs(e,{children:[t.jsx(e.Tab,{label:"Разработчику",active:o===0,onClick:()=>r(0)}),t.jsx(e.Tab,{label:"Тестирование",active:o===2,onClick:()=>r(2)})]})}),o===0&&t.jsxs(t.Fragment,{children:[t.jsx(u,{height:500,description:"Большинство свойств стилей можно настраивать через пропсы компонента. Также все свойства доступны через пропс st.",code:`import { Box, Button, Divider } from '@nlmk/ds-2.0';

export default App = () => (
  <div style={{ width: "100%", padding: 0 }}>
    <Box
      border="1px solid var(--steel-90)"
      borderRadius="8px"
      p="8px"
    >
      <Button type="button">Заполнить</Button>
      <Button type="button" color="grey">Посмотреть</Button>
    </Box>
    <br />
    <Divider dashed />
    <br />
    <Box justifyContent="center">
      <Box
        width="250px"
        flexDirection="column"
        borderRadius="4px"
        alignItems="center"
        background="var(--spectrum-sky-10)"
        py="60px"
        px="60px"
        st={{
          boxShadow: "0 10px 10px var(--unique-background)"
        }}
      >
        <Button type="button">Заполнить</Button>
      </Box>
    </Box>
  </div>
)`}),t.jsx(b,{argsTypes:B})]}),o===2&&t.jsx(f,{componentName:"Box"})]})};function s(o){return t.jsxs(t.Fragment,{children:[t.jsx(n,{title:"Components/Box/Info",component:d,parameters:{jest:["Box.test.tsx"]}}),`
`,t.jsx(m,{of:c}),`
`,t.jsx(a,{children:t.jsx(j,{})})]})}function pt(o={}){const{wrapper:r}={...x(),...o.components};return r?t.jsx(r,{...o,children:t.jsx(s,{...o})}):s()}export{pt as default};
