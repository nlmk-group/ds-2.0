import{r as u,j as t,m as b,S as d,U as c}from"./iframe-D_geb98U.js";import{useMDXComponents as h}from"./index-DEBIPiNl.js";import{S}from"./index-Cml4jBdN.js";import{DecoratorDefault as C}from"./Decorator.stories-CtbByLLQ.js";import{s as n,H as I,E as m}from"./Header-Cp8G-9CM.js";import{F as g}from"./FigmaEmbed-CpTK-aEq.js";import{P as k,T as f}from"./Tests-BFrILV54.js";/* empty css               */import{T as i}from"./index-Cbxger2I.js";import{a as P}from"./argsTypes-WaO7fQyb.js";import"./preload-helper-PPVm8Dsz.js";import"./localeMapping-Cf4j9Ek8.js";import"./index-DurTHLjl.js";import"./index-DXqbsWBL.js";import"./clsx-B-dksMZM.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-CJsTn9GR.js";import"./32-CSeewk7k.js";import"./24-Dks7beat.js";import"./24-wTI-a7Qj.js";import"./24-B20dUB8u.js";import"./24-ckbWkRdy.js";import"./24-Cpo6jKx5.js";import"./24-8OlOIiot.js";import"./24-D4VquirR.js";import"./24-Dh3bHrWZ.js";import"./24-l18nGkor.js";import"./16-ytttYgy7.js";import"./24-CvT8JzoY.js";import"./24-Bgy5v27I.js";import"./16-CQHHA9le.js";import"./16-ZmyXGQ60.js";import"./16-Dy6XUum1.js";import"./16-CAqgkR1g.js";import"./16-B1x2jzVj.js";import"./index-DVKWK4-j.js";import"./index-DzpyBbEs.js";import"./index-CV6hzqCP.js";import"./index-Ds2s981t.js";import"./types-TdnjS80C.js";import"./index-DY6Wauvi.js";import"./index-DEt2dyhg.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-BEr6Yej_.js";import"./index-BOQlEYEy.js";import"./index-CRYZ0TC_.js";import"./index-gGDdMD4Z.js";import"./index-Dc0Smdiq.js";import"./index-DskztHOz.js";import"./index-DziAzwH5.js";import"./index-CdX0h1x8.js";import"./colorsMapping-C6bFIk14.js";import"./index-C9yrXfLO.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-DtINpL4z.js";import"./useFloatingReferenceSync-Uu7LJ-ip.js";import"./index-hZv1vyiY.js";import"./index-CHLxKCE-.js";import"./MenuItem-RKU4owtw.js";import"./floating-ui.react-C_U8tQaz.js";import"./sizesMapping-D8QavrGc.js";import"./index-CVwy7aMy.js";import"./index-B82E4k1I.js";import"./index-BmAyGkEC.js";import"./index-B207YH3y.js";import"./index-D2pVVHYb.js";import"./index-D-VB7JJf.js";import"./index-CNpEsrMB.js";import"./index-CS6EpHju.js";import"./index-B4KF8t6p.js";import"./index-Col1tz7G.js";import"./hook-CTGxoHFE.js";import"./index-CmX5uS9r.js";import"./index-8pjDucJj.js";import"./index-XAV3gP1c.js";import"./index-CqItqX1T.js";import"./index-B4Lvy_xN.js";import"./index-BsU4-z2O.js";import"./index-DGVoojgO.js";import"./index-BJ_EJkVt.js";import"./index-DWfoHQZi.js";import"./index-DsiBS6O_.js";import"./index-BRmfAQM5.js";import"./index-7M5-vNro.js";import"./index-BBQxN6Hh.js";import"./index-WEJ-wiwM.js";import"./index-B0vyHZT0.js";import"./index-DOrebIlF.js";import"./index-DUNXWP3K.js";import"./index-CRQ1F-kQ.js";import"./index-IhMb7mOd.js";import"./index-Dk_eh4hq.js";import"./index-BHIlvHWF.js";import"./index-CmZWJowM.js";import"./index-CUlZZogs.js";import"./index-CdZRxSQR.js";import"./index-BCQKokda.js";import"./index-CsAs8tg2.js";import"./index-Tlp5L_x6.js";import"./index-Bg9A9_j3.js";import"./index-BRE8g-Px.js";import"./index-vrktoCUN.js";import"./index-DwD6M5XP.js";import"./index-Cd99GZ_P.js";import"./index-B34m8eE0.js";import"./index-D0nJVAiy.js";import"./index-B5MzhOMl.js";import"./ComboBox-ru-vv14S.js";import"./index-NvAUagqQ.js";import"./constants-DBot8vvE.js";import"./TreeList-DmNOIBRU.js";import"./copyToClipboard-DB_KM_BY.js";const a="Sidebar",p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=287-2084",x=`import { useState } from 'react';
import { Sidebar } from '@nlmk/ds-2.0';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const path = 'https://images.unsplash.com/photo-1683343946402-85b144e8ecb6?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <div style={{
      backgroundColor: "var(--unique-background)",
      width: "100%", margin: "-20px"
    }}>
     <Sidebar
      key="vertical"
      orientation="vertical"
      allowFavorites
      isLoggedIn={isLoggedIn}
      onLogout={() => setIsLoggedIn(false)}
      onLogin={() => setIsLoggedIn(true)}
      currentPath={currentPath}
    >
      <Sidebar.Avatar imageSrc="" />
      <Sidebar.MenuItem
        path="Задание на добавление"
        label="Задание на добавление"
        position="top"
        icon="IconKovsh32"
        onClick={() => setCurrentPath('cars')}
      >
        <Sidebar.SubmenuItem path="Плавка стали" label="Плавка стали" image={path} onClick={() => setCurrentPath('Плавка стали')} />
        <Sidebar.SubmenuItem
          path="Обработка и термообработка"
          label="Обработка и термообработка"
          image={path}
          onClick={() => setCurrentPath('Обработка и термообработка')}
        >
          <Sidebar.SubmenuItem path="Закалка и отпуск" label="Закалка и отпуск" onClick={() => setCurrentPath('Закалка и отпуск')} />
          <Sidebar.SubmenuItem path="Отжиг и нормализация" label="Отжиг и нормализация" onClick={() => setCurrentPath('Отжиг и нормализация')} />
          <Sidebar.SubmenuItem path="Механическая обработка" label="Механическая обработка" onClick={() => setCurrentPath('Механическая обработка')} disabled />
        </Sidebar.SubmenuItem>
        <Sidebar.SubmenuItem path="Литье сталепродукции" label="Литье сталепродукции" image={path} onClick={() => setCurrentPath('Литье сталепродукции')} />
        <Sidebar.SubmenuItem path="Автоматизация производства" label="Автоматизация производства" image={path} onClick={() => setCurrentPath('Автоматизация производства')} />
      </Sidebar.MenuItem>
      <Sidebar.MenuItem
        path="Дивизионы НЛМК"
        label="Дивизионы НЛМК"
        position="top"
        icon="IconBunkerOutlined32"
        onClick={() => setCurrentPath('Дивизионы НЛМК')}
      >
        <Sidebar.SubmenuItem path="НЛМК-Европа" label="НЛМК-Европа" onClick={() => setCurrentPath('НЛМК-Европа')} />
        <Sidebar.SubmenuItem path="НЛМК-Россия" label="НЛМК-Россия" onClick={() => setCurrentPath('НЛМК-Россия')}>
          <Sidebar.SubmenuItem
            path="Стагдок"
            label="Стагдок"
            onClick={() => setCurrentPath('Стагдок')}
          />
          <Sidebar.SubmenuItem
            path="Доломит"
            label="Доломит"
            onClick={() => setCurrentPath('Доломит')}
          />
          <Sidebar.SubmenuItem path="Стойленский ГОК" label="Стойленский ГОК" onClick={() => setCurrentPath('Стойленский ГОК')} />
          <Sidebar.SubmenuItem path="ВИЗ-Сталь" label="ВИЗ-Сталь" onClick={() => setCurrentPath('ВИЗ-Сталь')} />
        </Sidebar.SubmenuItem>
        <Sidebar.SubmenuItem path="НЛМК-США" label="НЛМК-США" onClick={() => setCurrentPath('НЛМК-США')} />
      </Sidebar.MenuItem>
      <Sidebar.MenuItem
        path="Раздел меню"
        label="Раздел меню"
        position="top"
        icon="IconLightningStroke32"
        onClick={() => setCurrentPath('Раздел меню')}
      />
      <Sidebar.MenuItem
        path="Отключенный раздел"
        label="Отключенный раздел"
        position="top"
        icon="IconMapPinaltOutlined32"
        disabled
        onClick={() => setCurrentPath('Отключенный раздел')}
      />
      <Sidebar.MenuItem
        path="Ресурсы"
        label="Ресурсы"
        position="bottom"
        icon="IconInfoOutlined32"
        onClick={() => setCurrentPath('Ресурсы')}
      >
        <Sidebar.SubmenuItem path="Сталь" label="Сталь" onClick={() => setCurrentPath('Сталь')} />
        <Sidebar.SubmenuItem path="Чугун" label="Чугун" onClick={() => setCurrentPath('Чугун')} />
        <Sidebar.SubmenuItem path="Медь" label="Медь" onClick={() => setCurrentPath('Медь')} />
      </Sidebar.MenuItem>
    </Sidebar>
    </div>
  );
}
export default App;`,M=`import { useState } from 'react';
import { Sidebar } from '@nlmk/ds-2.0';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPath, setCurrentPath] = useState('dashboard');

  return (
    <div style={{ backgroundColor: 'var(--unique-background)', width: '100%', margin: '-20px' }}>
      <Sidebar
        orientation="vertical"
        variant="burger"
        currentPath={currentPath}
        isLoggedIn={isLoggedIn}
        defaultMenuOpen
        overlay
        isShowUserControl={false}
        onLogin={() => setIsLoggedIn(true)}
        onLogout={() => setIsLoggedIn(false)}
      >
        <Sidebar.Avatar imageSrc="" />
        <Sidebar.MenuItem path="dashboard" label="Дашборд" position="top" icon="IconKovsh32" onClick={() => setCurrentPath('dashboard')} />
        <Sidebar.MenuItem path="reports" label="Отчеты" position="top" icon="IconChartDonut32" onClick={() => setCurrentPath('reports')}>
          <Sidebar.SubmenuItem path="daily" label="Ежедневные" onClick={() => setCurrentPath('daily')} />
          <Sidebar.SubmenuItem path="weekly" label="Недельные" onClick={() => setCurrentPath('weekly')} />
        </Sidebar.MenuItem>
        <Sidebar.MenuItem path="help" label="Помощь" position="bottom" icon="IconInfoOutlined32" onClick={() => setCurrentPath('help')} />
      </Sidebar>
    </div>
  );
};

export default App;`,v=()=>{const[e,r]=u.useState(0),o=l=>e===l;return t.jsxs("div",{className:n.wrapper,children:[t.jsx(I,{title:a,description:"Sidebar используется для навигации по разделам приложения и поддерживает вложенные пункты меню, избранное, режимы отображения и пользовательский блок.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${a}`,figmaLink:p}),t.jsx("div",{className:n.tabs,children:t.jsxs(i,{children:[t.jsx(i.Tab,{label:"Разработчику",active:o(0),onClick:()=>r(0)}),t.jsx(i.Tab,{label:"Дизайнеру",active:o(1),onClick:()=>r(1)}),t.jsx(i.Tab,{label:"Тестирование",active:o(2),onClick:()=>r(2)})]})}),e==0&&t.jsxs(t.Fragment,{children:[t.jsx(m,{minHeight:920,description:"Базовый пример боковой навигации с вложенными разделами.",code:x}),t.jsx(m,{minHeight:920,description:"Режим burger с overlay и управлением видимостью пользовательского блока.",code:M}),t.jsx(k,{argsTypes:P})]}),e==1&&t.jsx(g,{url:p}),e==2&&t.jsx(f,{componentName:a})]})};function s(e){return t.jsxs(t.Fragment,{children:[t.jsx(b,{title:"Components/Sidebar/Info",component:S,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=287-2084"},jest:["Sidebar.test.tsx"]}}),`
`,t.jsx(d,{of:C}),`
`,t.jsx(c,{children:t.jsx(v,{})})]})}function Ae(e={}){const{wrapper:r}={...h(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(s,{...e})}):s()}export{Ae as default};
