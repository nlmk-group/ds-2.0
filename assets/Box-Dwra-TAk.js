import{r as s,j as t,m as n,S as a,U as x}from"./iframe-adG_7yRG.js";import{useMDXComponents as d}from"./index-Cg8Pf3Pw.js";import{B as u}from"./index-Dy1IE1cv.js";import{DecoratorDefault as c}from"./Decorator.stories-Beo23sgK.js";import{s as e,H as l,E as p}from"./Header-cMHYDLeC.js";import{P as B,T as b}from"./Tests-C1XQ0sNC.js";/* empty css               */import{T as i}from"./index-Yehuvb9K.js";import{a as f}from"./argsTypes-xsg3B_9m.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-CnTjgQRx.js";import"./index-DzN3aT-y.js";import"./index-TjqOvBrG.js";import"./index-N0HJx9V2.js";import"./index-y2k2yeKx.js";import"./16-C5RTlL5k.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-C2G2GNsa.js";import"./24-B-tnmrg_.js";import"./index-C6st097g.js";import"./16-LI8OsMJg.js";import"./index-DSz2Fxi8.js";import"./index-DC_nQVbx.js";import"./32-B9XnRb5u.js";import"./24-DrBRk2vS.js";import"./24-BuaVNHQi.js";import"./24-B4fAX0Ec.js";import"./24-Wv8b4C8A.js";import"./24-GH3yabNM.js";import"./24-BDLYxJUB.js";import"./24-DcUw9JWs.js";import"./24-BxGqfMjL.js";import"./24-B0jNPX91.js";import"./16-BTp4GQQG.js";import"./16-D-NUuvME.js";import"./index-BSzISWDV.js";import"./index-Bw5qm4Ov.js";import"./index-75kOkesn.js";import"./index-Dyd59tUY.js";import"./index-BhxlvnnA.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-COV9g-2Q.js";import"./index-DJrVOycg.js";import"./index-DtX9i5FK.js";import"./index-B1pHFt52.js";import"./index-CwSciSyB.js";import"./types-TdnjS80C.js";import"./floating-ui.react-7VA0tf7C.js";import"./sizesMapping-D8QavrGc.js";import"./index-Da_FDSx_.js";import"./index-U_RCd_HH.js";import"./index-CMSErBpE.js";import"./index-CzkpZwDT.js";import"./index-BOTgB3bz.js";import"./index-DFAIDFiK.js";import"./index-CkcKW4Vm.js";import"./index-C0jfxf7x.js";import"./index-Csnb6gHF.js";import"./index-BYkQO_14.js";import"./index-CsSUhH6Q.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-Cl0xhJAL.js";import"./useFloatingReferenceSync-D48fx_Db.js";import"./index-D02QEMLS.js";import"./index-CXTleZNA.js";import"./index-aAdctPR4.js";import"./index-onHurrhQ.js";import"./index-QnhurHRA.js";import"./index--d2ZPp2Q.js";import"./index-44u0uri5.js";import"./index-PgA7KtkC.js";import"./index-CzL7ANP0.js";import"./index-DFN2ZEva.js";import"./index-B97cDh6f.js";import"./index-CZ0fPPTA.js";import"./index-BMxGNkbP.js";import"./index-Bj8TCYsg.js";import"./index-KPC3KFCd.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CjWSOjsl.js";import"./index-x0hwq8uq.js";import"./index-BwyGxYsl.js";import"./index-B9-K2gEf.js";import"./index-BkYL4d7S.js";import"./index-Bikxfajv.js";import"./index-xPNSVzye.js";import"./index-Bh4CHjuX.js";import"./index-DCdHhu1d.js";import"./index-DvU_tOJJ.js";import"./index-DcziJIpL.js";import"./index-CQDvThHr.js";import"./index-BvXrgCCA.js";import"./index-DvSn1Rpa.js";import"./index-DlthScRn.js";import"./index-Dmvi1Ah7.js";import"./index-Bv05uYkg.js";import"./index-Cl4HH77d.js";import"./index-CTk4SyJ7.js";import"./ComboBox-C085h5Nz.js";import"./index-C3nPMNvV.js";import"./TreeList-zjoUqghX.js";import"./copyToClipboard-DB_KM_BY.js";const g=()=>{const[o,r]=s.useState(0);return t.jsxs("div",{className:e.wrapper,children:[t.jsx(l,{title:"Box",description:"Box — универсальный контейнер для компоновки и стилизации контента. Компонент объединяет управление отступами, размерами, визуальными стилями и flex-layout через единый набор пропсов.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Box"}),t.jsx("div",{className:e.tabs,children:t.jsxs(i,{children:[t.jsx(i.Tab,{label:"Разработчику",active:o===0,onClick:()=>r(0)}),t.jsx(i.Tab,{label:"Тестирование",active:o===2,onClick:()=>r(2)})]})}),o===0&&t.jsxs(t.Fragment,{children:[t.jsx(p,{minHeight:500,description:"Базовая конфигурация Box через пропсы layout и визуальных стилей.",code:`import { Box, Button, Divider } from '@nlmk/ds-2.0';

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
