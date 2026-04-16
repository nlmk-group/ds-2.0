import{r as s,j as t,m as n,S as a,U as x}from"./iframe-CHHQDVoX.js";import{useMDXComponents as d}from"./index-B1LTtkqD.js";import{B as u}from"./index-B-9sGLZR.js";import{DecoratorDefault as c}from"./Decorator.stories-DNZYnr5K.js";import{s as e,H as l,E as p}from"./Header-C4Gtm_L5.js";import{P as B,T as b}from"./Tests-B0qmEzAm.js";/* empty css               */import{T as i}from"./index-BTZVm9Y3.js";import{a as f}from"./argsTypes-xsg3B_9m.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-DucDzwTg.js";import"./index-DYQTidD-.js";import"./index-C5RO9eqh.js";import"./index-CwmmLxy5.js";import"./index-DBfCc0Jn.js";import"./16-CzdCZHDH.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-O653EECt.js";import"./24-JhZx5C50.js";import"./index-XGZPkqjb.js";import"./16-1skbPHrv.js";import"./index-vSQLaUqp.js";import"./index-Di9izlqG.js";import"./32-BrvnL8Hj.js";import"./24-BunGgvie.js";import"./24-CZW84qpr.js";import"./24-DIXfQiLz.js";import"./24-CD6xrv2j.js";import"./24-CWmeerJT.js";import"./24-Gpv48tUf.js";import"./24-BKM1KU47.js";import"./24-Bp815V0R.js";import"./24-BaGOPWtX.js";import"./16-CjM46jjK.js";import"./16-DL1hQxMw.js";import"./index-BEx0Kzll.js";import"./index-CJmLln8K.js";import"./index-CSuovX3X.js";import"./index-BHnpI8kT.js";import"./index-dSmaknGw.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-De57FWCK.js";import"./index-BzIC8vFU.js";import"./index-BANVVOGG.js";import"./index-DZgd0Qfe.js";import"./index-IsGk3ZIX.js";import"./types-TdnjS80C.js";import"./floating-ui.react-6VfTZOrw.js";import"./sizesMapping-D8QavrGc.js";import"./index-CdHeQl8P.js";import"./index-DxMlVd1J.js";import"./index-DtzYchqB.js";import"./index-D-VDIxFn.js";import"./index-BmtuxTTp.js";import"./index-CMjJ_rHR.js";import"./index-Y1gY5mOJ.js";import"./index-DmLZE8cz.js";import"./index-BI9I3JHz.js";import"./index-8V-zlFGO.js";import"./index-qkZhGjnb.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-01GcG0LR.js";import"./useFloatingReferenceSync-adXaq3Ya.js";import"./index-KI_mLAAh.js";import"./index-BtFeD-3X.js";import"./index-CxXtU9jM.js";import"./index-DD65tyqZ.js";import"./index-3J2s6a0v.js";import"./index-C6OX9F5-.js";import"./index-DvPBu460.js";import"./index-BhlmHl_K.js";import"./index-DicmkMu7.js";import"./index-CRrW3b0X.js";import"./index-G8_-uYaZ.js";import"./index-CC5B16j-.js";import"./index-TWHnUoEw.js";import"./index-a9LznR3Q.js";import"./index-HGD0h4gs.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CWser92f.js";import"./index-CQek3CAN.js";import"./index-p2bUiyyW.js";import"./index-CzvxnUYC.js";import"./index-B1ffb27g.js";import"./index-DdD0P9sc.js";import"./index-DhCDiUD2.js";import"./index-DgjlDdW0.js";import"./index-Ge3Tw8iO.js";import"./index-CNVqUNB9.js";import"./index-BGj-2ukp.js";import"./index-Bg5xPX9b.js";import"./index-c_MoiZvK.js";import"./index-U8RdPQdR.js";import"./index-rMcQZCT_.js";import"./index-DqjA2CJI.js";import"./index-DUcChkPA.js";import"./index-Bd568ebt.js";import"./index-CXzLkByr.js";import"./ComboBox-BthUrrTu.js";import"./index-CV7DnwVd.js";import"./TreeList-BLcOMBIT.js";import"./copyToClipboard-DB_KM_BY.js";const g=()=>{const[o,r]=s.useState(0);return t.jsxs("div",{className:e.wrapper,children:[t.jsx(l,{title:"Box",description:"Box — универсальный контейнер для компоновки и стилизации контента. Компонент объединяет управление отступами, размерами, визуальными стилями и flex-layout через единый набор пропсов.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Box"}),t.jsx("div",{className:e.tabs,children:t.jsxs(i,{children:[t.jsx(i.Tab,{label:"Разработчику",active:o===0,onClick:()=>r(0)}),t.jsx(i.Tab,{label:"Тестирование",active:o===2,onClick:()=>r(2)})]})}),o===0&&t.jsxs(t.Fragment,{children:[t.jsx(p,{minHeight:500,description:"Базовая конфигурация Box через пропсы layout и визуальных стилей.",code:`import { Box, Button, Divider } from '@nlmk/ds-2.0';

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
`,t.jsx(x,{children:t.jsx(g,{})})]})}function fo(o={}){const{wrapper:r}={...d(),...o.components};return r?t.jsx(r,{...o,children:t.jsx(m,{...o})}):m()}export{fo as default};
