import{r as s,j as t,m as n,S as a,U as x}from"./iframe-GHQjEpsb.js";import{useMDXComponents as d}from"./index-B8Cb6mvA.js";import{B as u}from"./index-BNokyj4D.js";import{DecoratorDefault as c}from"./Decorator.stories-CCUX5JA5.js";import{s as e,H as l,E as p}from"./Header-BXWzIQpV.js";import{P as B,T as b}from"./Tests-uugUZoLC.js";/* empty css               */import{T as i}from"./index-CV-3xeQ8.js";import{a as f}from"./argsTypes-xsg3B_9m.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-CdSRMft-.js";import"./index-DJb1dn78.js";import"./16-BqW1rNBw.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-CxExZRzk.js";import"./index-ByRS7bpi.js";import"./index-CwMtZ6LD.js";import"./index-CAqv-5FK.js";import"./32-Ch8UEd8D.js";import"./24-CvJc9f8d.js";import"./24-V-842Hd4.js";import"./24-BFYJrOCK.js";import"./24-CFV5ODyi.js";import"./24-BT3VdodN.js";import"./24-CD438uYz.js";import"./24-NYxH4Wn7.js";import"./24-0wMAnnTO.js";import"./24-xN4MxKIZ.js";import"./24-Ec1WffcD.js";import"./24-Bf3BEapt.js";import"./16-Dc97ioNZ.js";import"./16-CwgMkzPr.js";import"./16-FVLzaVo_.js";import"./index-C3jjOzzq.js";import"./index-B6KRA3ZB.js";import"./index-DDjduPuu.js";import"./index-CbMtuaR9.js";import"./index-Cb1Vgv7Y.js";import"./index-CrbCcHei.js";import"./colorsMapping-C6bFIk14.js";import"./index-BhXb1I4E.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-9xxbj185.js";import"./useFloatingReferenceSync-BPKQ-_Ey.js";import"./index-gU83LE3e.js";import"./types-TdnjS80C.js";import"./index-Dw4HSGie.js";import"./MenuItem-cwmhea0w.js";import"./floating-ui.react-C_9nhsMo.js";import"./sizesMapping-D8QavrGc.js";import"./index-D5tiDrSz.js";import"./index-DB2EGOHJ.js";import"./index-DfeOlOst.js";import"./index-qKoEXpn1.js";import"./index-BSlyJZDR.js";import"./index-CtknrjY8.js";import"./index-Cl3rcdje.js";import"./index-Cdnk68Wu.js";import"./index-DdQSMaZ7.js";import"./index-CzKhCsRQ.js";import"./index-BrzikNzy.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-BEyzHPFb.js";import"./index-DW1qxpHI.js";import"./index-D40PzGBW.js";import"./index-DXM8gjTJ.js";import"./index-BgqdrSax.js";import"./index-GcZm5qpl.js";import"./index-DimFK3AM.js";import"./index-DubUX2Fh.js";import"./index-DyQbf3Bh.js";import"./index-wFL7JQ-x.js";import"./index-DWnr0vN9.js";import"./index-CelkrSVu.js";import"./index-UmocORK-.js";import"./index-D1KDSdER.js";import"./index-DkqDQe7V.js";import"./index-Bro8qKYA.js";import"./index-PXofUIZt.js";import"./index-DbSaRUy7.js";import"./index-BVyDT0rk.js";import"./index-B2itxtYy.js";import"./index-CEj65Quy.js";import"./index-hoM-fUW3.js";import"./index-CH2jIRDc.js";import"./index-B-moVc61.js";import"./index-B9gAWxrO.js";import"./index-DFBiLkHj.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-B_r75_Ag.js";import"./index-zf3baTui.js";import"./index-CUmnQamA.js";import"./index-DHdy5BVi.js";import"./index-BKpcjK-S.js";import"./index-DClnzsLR.js";import"./index-CD_D33wX.js";import"./index-CA7cvvjp.js";import"./index-C22prfeM.js";import"./index-CJWWB0hS.js";import"./ComboBox-B8JamNo2.js";import"./index-DmgKK2CE.js";import"./TreeList-DV7BpuGG.js";import"./copyToClipboard-DB_KM_BY.js";const g=()=>{const[o,r]=s.useState(0);return t.jsxs("div",{className:e.wrapper,children:[t.jsx(l,{title:"Box",description:"Box — универсальный контейнер для компоновки и стилизации контента. Компонент объединяет управление отступами, размерами, визуальными стилями и flex-layout через единый набор пропсов.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Box"}),t.jsx("div",{className:e.tabs,children:t.jsxs(i,{children:[t.jsx(i.Tab,{label:"Разработчику",active:o===0,onClick:()=>r(0)}),t.jsx(i.Tab,{label:"Тестирование",active:o===2,onClick:()=>r(2)})]})}),o===0&&t.jsxs(t.Fragment,{children:[t.jsx(p,{minHeight:500,description:"Базовая конфигурация Box через пропсы layout и визуальных стилей.",code:`import { Box, Button, Divider } from '@nlmk/ds-2.0';

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
