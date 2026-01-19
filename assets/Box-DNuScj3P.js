import{r as p,j as t,m as n,S as m,U as a}from"./iframe-BPtLBEuk.js";import{useMDXComponents as x}from"./index-DY5aY42c.js";import{B as d}from"./index-d_6bz31j.js";import{DecoratorDefault as c}from"./Decorator.stories-Bt-6wqMy.js";import{s as i,H as l,E as u}from"./Header-lxb-Wymn.js";import{P as b}from"./Properties-u6_xeg7P.js";import{T as f}from"./Tests-DUUoQDTR.js";/* empty css               */import{T as e}from"./index-CX87Y9E4.js";import{a as B}from"./argsTypes-xsg3B_9m.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-C9_7xPUt.js";import"./index-DZQvJksB.js";import"./index-BUWLdeqz.js";import"./index-D9G_R1e4.js";import"./index-V5PZJFO3.js";import"./generateUUID-M57HTP56.js";import"./24-8ackLhic.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-D-pLh_NR.js";import"./sizesMapping-D8QavrGc.js";import"./index-yAFWEvQV.js";import"./index-C5OaxW6Y.js";import"./index-CANPVv15.js";import"./index-CDRf2h9x.js";import"./32-DeoBrCvQ.js";import"./24-CrLAaNeG.js";import"./24-CpcywAhj.js";import"./24-Ch6Cnsji.js";import"./24-Q7FkUsyZ.js";import"./24-DOwtHgIx.js";import"./24-B4m_3SjA.js";import"./24-CV2ikCuL.js";import"./24-Ba8I7UHN.js";import"./24-BA0GVvoT.js";import"./16-CXoys7qm.js";import"./24-Cxxq2bXd.js";import"./16-DwnwCPW9.js";import"./16-BY-nZnBX.js";import"./16-DaMJtJxQ.js";const j=()=>{const[o,r]=p.useState(0);return t.jsxs("div",{className:i.wrapper,children:[t.jsx(l,{title:"Box",description:"Компонент Box представляет собой универсальный контейнер, используемый для стилизации и компоновки содержимого. Он обладает пропсами для управления стилями, включая background, padding, border, borderRadius и flexbox свойствами, такими как display, flexDirection, justifyContent, alignItems, flexWrap и gap. Это делает Box инструментом для создания структурированного и адаптивного интерфейса.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Box"}),t.jsx("div",{className:i.tabs,children:t.jsxs(e,{children:[t.jsx(e.Tab,{label:"Разработчику",active:o===0,onClick:()=>r(0)}),t.jsx(e.Tab,{label:"Тестирование",active:o===2,onClick:()=>r(2)})]})}),o===0&&t.jsxs(t.Fragment,{children:[t.jsx(u,{height:500,description:"Большинство свойств стилей можно настраивать через пропсы компонента. Также все свойства доступны через пропс st.",code:`import { Box, Button, Divider } from '@nlmk/ds-2.0';

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
