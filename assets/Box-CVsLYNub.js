import{r as s,j as t,m as n,S as a,U as x}from"./iframe-CE_JzATH.js";import{useMDXComponents as d}from"./index--LKfDmxm.js";import{B as u}from"./index-2jg-3oeM.js";import{DecoratorDefault as c}from"./Decorator.stories-Cj-tg-7N.js";import{s as e,H as l,E as p}from"./Header-CEastCIP.js";import{P as B,T as b}from"./Tests-BOPY5pZ5.js";/* empty css               */import{T as i}from"./index-DR6oWFtr.js";import{a as f}from"./argsTypes-xsg3B_9m.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-D_aCbd9C.js";import"./index-BBICZI1L.js";import"./index-Vjux8dVh.js";import"./index-CuFOreg9.js";import"./index-BmicXPVL.js";import"./16-BkTHhwnS.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-DEt0-nuC.js";import"./24-J6XSru0N.js";import"./index-vmgVWNov.js";import"./16-DWPiS2iU.js";import"./index-14rW-JY7.js";import"./index-MfvAP8aB.js";import"./32-CrxSrIcc.js";import"./24-0Dk1wnnD.js";import"./24-BBq2cK-Y.js";import"./24-Cd5pTj28.js";import"./24-DGYmTzFV.js";import"./24-HbFaW7H_.js";import"./24-BQMnublh.js";import"./24-DzFwSmYQ.js";import"./24-CjAn70IH.js";import"./24-D38MhcLh.js";import"./16-BIs1fvk9.js";import"./16-p0CPjrKD.js";import"./index-DqQz5Bh6.js";import"./index-DYU6s7CX.js";import"./index-CLTGTTU8.js";import"./index-BGKZjWkn.js";import"./index-C9knVUuX.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-BFAgnURa.js";import"./index-BzyAc0E-.js";import"./index-Dg5Lxpt5.js";import"./index-BiitYh94.js";import"./index-DTnW7Fop.js";import"./types-TdnjS80C.js";import"./floating-ui.react-BU5fnxMH.js";import"./sizesMapping-D8QavrGc.js";import"./index-Dlf_Ao8T.js";import"./index-DCIzctxN.js";import"./index-D9YxWY4C.js";import"./index-Os9u-Jz6.js";import"./index-BaSH6PPb.js";import"./index-Bz3uj4QG.js";import"./index-BvCaACBB.js";import"./index-1zCxhXDP.js";import"./index-C1XFyCw_.js";import"./index-3C1lTiZm.js";import"./index-zLxCaNl1.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-B7kzxF9t.js";import"./useFloatingReferenceSync-B_aNqrAc.js";import"./index-e5L8QLyK.js";import"./index-GJu7X8CR.js";import"./index-CIwcf8Lj.js";import"./index-B98ISFmk.js";import"./index-Bd3jAiyn.js";import"./index-Dg1nWoIh.js";import"./index-DFbFAj2G.js";import"./index-Y_CVE_H3.js";import"./index-8oyMVyrk.js";import"./index-QZq9zOpZ.js";import"./index-CT3rs89l.js";import"./index-CAijYJEe.js";import"./index-CEXEVLrc.js";import"./index-pURGVU60.js";import"./index-D1Sci6D5.js";import"./index-kWQnP7zC.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-tXN-kzru.js";import"./index-DCIrx6NW.js";import"./index-DHVZe4vO.js";import"./index-DuLnj-te.js";import"./index-C7v9s-B0.js";import"./index-y0ewvpMP.js";import"./index-OcscY6If.js";import"./index-DjVMJKcc.js";import"./index-TCeJA5jN.js";import"./index-DtSKDO7f.js";import"./index-DPX3eImA.js";import"./index-DNC3PuSz.js";import"./index-CIs5j9YL.js";import"./index-Bie4xbHL.js";import"./index-WRw5KxXj.js";import"./index-DYl6OFvJ.js";import"./ComboBox-KBNGbY8a.js";import"./index-BdsesjiO.js";import"./TreeList-t_ASH-u2.js";import"./copyToClipboard-DB_KM_BY.js";const g=()=>{const[o,r]=s.useState(0);return t.jsxs("div",{className:e.wrapper,children:[t.jsx(l,{title:"Box",description:"Box — универсальный контейнер для компоновки и стилизации контента. Компонент объединяет управление отступами, размерами, визуальными стилями и flex-layout через единый набор пропсов.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Box"}),t.jsx("div",{className:e.tabs,children:t.jsxs(i,{children:[t.jsx(i.Tab,{label:"Разработчику",active:o===0,onClick:()=>r(0)}),t.jsx(i.Tab,{label:"Тестирование",active:o===2,onClick:()=>r(2)})]})}),o===0&&t.jsxs(t.Fragment,{children:[t.jsx(p,{minHeight:500,description:"Базовая конфигурация Box через пропсы layout и визуальных стилей.",code:`import { Box, Button, Divider } from '@nlmk/ds-2.0';

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
)`}),t.jsx(p,{minHeight:260,description:"Приоритет отступов: p → px/py → pt/pr/pb/pl.",code:`import { Box } from '@nlmk/ds-2.0';

export default App = () => (
  <Box
    p={24}
    px={16}
    py={12}
    pl={32}
    border="1px solid var(--steel-40)"
    borderRadius={8}
    background="var(--steel-10)"
  >
    top: 12px, right: 16px, bottom: 12px, left: 32px
  </Box>
)`}),t.jsx(p,{minHeight:260,description:"Flex-layout контейнер с выравниванием и переносом элементов.",code:`import { Box, Button } from '@nlmk/ds-2.0';

export default App = () => (
  <Box
    width={520}
    p={12}
    border="1px solid var(--steel-40)"
    borderRadius={8}
    justifyContent="space-between"
    alignItems="center"
    flexWrap="wrap"
    gap={12}
  >
    <Button type="button">Создать</Button>
    <Button type="button" color="grey">Редактировать</Button>
    <Button type="button" color="ghost">Удалить</Button>
    <Button type="button" color="success">Применить</Button>
  </Box>
)`}),t.jsx(p,{minHeight:240,description:"Настройка размеров и визуального оформления контейнера.",code:`import { Box } from '@nlmk/ds-2.0';

export default App = () => (
  <Box
    width={320}
    maxWidth="100%"
    minHeight={120}
    border="1px dashed var(--steel-50)"
    borderRadius={12}
    background="var(--spectrum-sky-10)"
    color="var(--steel-90)"
    justifyContent="center"
    alignItems="center"
  >
    Карточка с ограничением ширины
  </Box>
)`}),t.jsx(p,{minHeight:260,description:"Локальное переопределение стилей через st.",code:`import { Box } from '@nlmk/ds-2.0';

export default App = () => (
  <Box
    p={16}
    background="var(--steel-10)"
    borderRadius={8}
    st={{
      backgroundColor: 'var(--spectrum-green-10)',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
      transform: 'translateY(0)'
    }}
  >
    Стиль background переопределён через st
  </Box>
)`}),t.jsx(B,{argsTypes:f})]}),o===2&&t.jsx(b,{componentName:"Box"})]})};function m(o){return t.jsxs(t.Fragment,{children:[t.jsx(n,{title:"Components/Box/Info",component:u,parameters:{jest:["Box.test.tsx"]}}),`
`,t.jsx(a,{of:c}),`
`,t.jsx(x,{children:t.jsx(g,{})})]})}function Bo(o={}){const{wrapper:r}={...d(),...o.components};return r?t.jsx(r,{...o,children:t.jsx(m,{...o})}):m()}export{Bo as default};
