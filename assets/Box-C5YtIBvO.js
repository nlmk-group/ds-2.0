import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as p}from"./index-D2yTtfOz.js";import"./index-Ceocx6vA.js";import{B as n}from"./index-D-jyRV5V.js";import{DecoratorDefault as m}from"./Decorator.stories-D7iJJ_iz.js";import{r as a}from"./index-BcJSXhQi.js";import{s as i,H as x,E as d}from"./Header-CJB5cioC.js";import{P as c}from"./Properties-3USjPPd0.js";import{T as l}from"./Tests-BZxq-0ur.js";/* empty css               */import{ah as e}from"./TreeList-ls9Njcdr.js";import"./generateUUID-CpKhmTry.js";import"./index-CzNzGEue.js";import"./index-WHoiTdKD.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-CaDFz05s.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-BZ5zMSTm.js";import"./index-C5rKoyII.js";import"./32-icvDJE6i.js";import{a as u}from"./argsTypes-xsg3B_9m.js";import{c as b,S as f,U as B}from"./DocsRenderer-CFRXHY34-DrtSSUxY.js";import"./index-ChsGqxH_.js";import"./preview-Rx2hgzzb.js";import"./iframe-DMa-tgy1.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-2cKemHd6.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const j=()=>{const[o,r]=a.useState(0);return t.jsxs("div",{className:i.wrapper,children:[t.jsx(x,{title:"Box",description:"Компонент Box представляет собой универсальный контейнер, используемый для стилизации и компоновки содержимого. Он обладает пропсами для управления стилями, включая background, padding, border, borderRadius и flexbox свойствами, такими как display, flexDirection, justifyContent, alignItems, flexWrap и gap. Это делает Box инструментом для создания структурированного и адаптивного интерфейса.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Box"}),t.jsx("div",{className:i.tabs,children:t.jsxs(e,{children:[t.jsx(e.Tab,{label:"Разработчику",active:o===0,onClick:()=>r(0)}),t.jsx(e.Tab,{label:"Тестирование",active:o===2,onClick:()=>r(2)})]})}),o===0&&t.jsxs(t.Fragment,{children:[t.jsx(d,{height:500,description:"Большинство свойств стилей можно настраивать через пропсы компонента. Также все свойства доступны через пропс st.",code:`import { Box, Button, Divider } from '@nlmk/ds-2.0';

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
)`}),t.jsx(c,{argsTypes:u})]}),o===2&&t.jsx(l,{componentName:"Box"})]})};function s(o){return t.jsxs(t.Fragment,{children:[t.jsx(b,{title:"Components/Box/Info",component:n,parameters:{jest:["Box.test.tsx"]}}),`
`,t.jsx(f,{of:m}),`
`,t.jsx(B,{children:t.jsx(j,{})})]})}function rt(o={}){const{wrapper:r}={...p(),...o.components};return r?t.jsx(r,{...o,children:t.jsx(s,{...o})}):s()}export{rt as default};
