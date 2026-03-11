import{r as s,j as t,m as n,S as a,U as x}from"./iframe-DfRM7LXF.js";import{useMDXComponents as d}from"./index-s3G8uf3c.js";import{B as u}from"./index-wON6kCEo.js";import{DecoratorDefault as c}from"./Decorator.stories-Dc5cDQ_A.js";import{s as e,H as l,E as p}from"./Header-BrYoDfav.js";import{P as B,T as b}from"./Tests-Bl_4nCEK.js";/* empty css               */import{T as i}from"./index-HQdxBngH.js";import{a as f}from"./argsTypes-xsg3B_9m.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-B2VJ83In.js";import"./index-BBdLC-OA.js";import"./index--nFqMQdT.js";import"./index-DINl29EL.js";import"./index-CbWBwQI3.js";import"./16-BAUAAMRf.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-DPno0QZj.js";import"./24-D3pKJ1t3.js";import"./index-BRJ-Ua9i.js";import"./16-fn2TPoua.js";import"./index-eg8itsWK.js";import"./index-CN5IEPbV.js";import"./32-Bjn7Co6i.js";import"./24-D-2FQCka.js";import"./24-Bx5Ko4Zf.js";import"./24-CWpuPGUf.js";import"./24-CLWtzJRM.js";import"./24-Cp5qlwo7.js";import"./24-LAGNS7eA.js";import"./24-CSBD1goG.js";import"./24-DunoRfpD.js";import"./24-WTey2qPh.js";import"./16-B4jpe3eU.js";import"./16-UKcUYuG7.js";import"./index-CqGpx5F6.js";import"./index-D2Kz8Cjc.js";import"./index-DVB7RJDK.js";import"./index-Bbrpw_Ow.js";import"./index-rkxnOxqa.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-BGl-7D4l.js";import"./index-BqE4MY4m.js";import"./index-CRXfl0Vt.js";import"./index-UMg-UgH6.js";import"./index-DZtnbN5A.js";import"./types-TdnjS80C.js";import"./floating-ui.react-CdQVfeSt.js";import"./sizesMapping-D8QavrGc.js";import"./index-DyLcPuXd.js";import"./index-DkFFLpKU.js";import"./index-BRcbigKy.js";import"./index-Bs9bu8w1.js";import"./index-CAWkMWRs.js";import"./index-B6F_DLS2.js";import"./index-D0L1Sk36.js";import"./index-CPQdLsa5.js";import"./index-CJQswicC.js";import"./index-DmFtZ-Ny.js";import"./index-wY5Em-zL.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-nVILX9LA.js";import"./useFloatingReferenceSync-B2OO83Jd.js";import"./index-TH-r5Kbz.js";import"./index-Di10VY84.js";import"./index-CKR5Megx.js";import"./index-Baxn1nZN.js";import"./index-D3rQde2D.js";import"./index-W4qf1pCz.js";import"./index-B7Cg2_me.js";import"./index-BsZ7Kff4.js";import"./index-D2NcEt1k.js";import"./index-DUe44RxZ.js";import"./index-CzpPczJJ.js";import"./index-oHV1kBbR.js";import"./index-ydaVehZ7.js";import"./index-D_2odW5T.js";import"./index-B4s-8p3z.js";import"./index-C6yYWo4G.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-DsM1Nq1m.js";import"./index-S_twP3Il.js";import"./index-C1EDehIY.js";import"./index-BfvSM5Fb.js";import"./index-DTIMN90s.js";import"./index-syqq8EGq.js";import"./index-Dj81d4ZI.js";import"./index-Casca5S3.js";import"./index-Ba4KYGTt.js";import"./index-BvJOeOlN.js";import"./index-C6jCapMo.js";import"./index-BzMT43aM.js";import"./index-DsvUz8Pz.js";import"./index-Bk5TUS1W.js";import"./index-DRK0Fag0.js";import"./index-DUBAR20C.js";import"./index-DRVnFPP8.js";import"./ComboBox-Dt4xV1fo.js";import"./index-Cotw6HSH.js";import"./TreeList-k1lhCedt.js";import"./copyToClipboard-DB_KM_BY.js";const g=()=>{const[o,r]=s.useState(0);return t.jsxs("div",{className:e.wrapper,children:[t.jsx(l,{title:"Box",description:"Box — универсальный контейнер для компоновки и стилизации контента. Компонент объединяет управление отступами, размерами, визуальными стилями и flex-layout через единый набор пропсов.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Box"}),t.jsx("div",{className:e.tabs,children:t.jsxs(i,{children:[t.jsx(i.Tab,{label:"Разработчику",active:o===0,onClick:()=>r(0)}),t.jsx(i.Tab,{label:"Тестирование",active:o===2,onClick:()=>r(2)})]})}),o===0&&t.jsxs(t.Fragment,{children:[t.jsx(p,{minHeight:500,description:"Базовая конфигурация Box через пропсы layout и визуальных стилей.",code:`import { Box, Button, Divider } from '@nlmk/ds-2.0';

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
`,t.jsx(x,{children:t.jsx(g,{})})]})}function bo(o={}){const{wrapper:r}={...d(),...o.components};return r?t.jsx(r,{...o,children:t.jsx(m,{...o})}):m()}export{bo as default};
