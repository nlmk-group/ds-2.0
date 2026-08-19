import{r as u,j as t,m as b,S as d,U as c}from"./iframe-CiFytELZ.js";import{useMDXComponents as h}from"./index-DybNXUjF.js";import{S}from"./index-B-uV3fk6.js";import{DecoratorDefault as C}from"./Decorator.stories-BzItgCqc.js";import{s as m,H as I,E as a}from"./Header-X6Kr5SHJ.js";import{F as g}from"./FigmaEmbed-C2oXb4D3.js";import{P as k,T as P}from"./Tests-BcceQP3J.js";/* empty css               */import{T as i}from"./index-BQkij8xm.js";import{a as f}from"./argsTypes-BkZ9exkN.js";import"./preload-helper-PPVm8Dsz.js";import"./localeMapping-Cf4j9Ek8.js";import"./index-JoZBJQz1.js";import"./index-ageiqw5d.js";import"./clsx-B-dksMZM.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-BUE7duXK.js";import"./32-dCVSFMeK.js";import"./24-CEYPuBp0.js";import"./24-DMYK_POk.js";import"./24-Bt83Uokx.js";import"./24-Cg37IYki.js";import"./24-URZj1P3S.js";import"./24-C7n6mi1f.js";import"./24-B6ivgZpd.js";import"./24-RrFXbNlX.js";import"./24-DG7ZIblO.js";import"./16-DE4viI8O.js";import"./24-C2S-g5KW.js";import"./24-r-rrcgWc.js";import"./16-BfVH5IGj.js";import"./16-CdjU_4JV.js";import"./16-BT9sIG7U.js";import"./16-CqiQVPWz.js";import"./16-D7g-PMEy.js";import"./index-AScBX7ch.js";import"./index-Caup2jln.js";import"./index-DawP55CX.js";import"./index-BbXZCDfz.js";import"./types-TdnjS80C.js";import"./index-BxUgnl0U.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-0qRpJbl9.js";import"./index-B98CSxRp.js";import"./index-yhpuehNm.js";import"./index-DJEYtQIn.js";import"./index-Cw2HZq9h.js";import"./index-g6EAEksG.js";import"./index-yVptosnr.js";import"./index-DxDzu7P3.js";import"./index-7UQTagkh.js";import"./colorsMapping-C6bFIk14.js";import"./index-DKkLeCla.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-BbS2YyIp.js";import"./useFloatingReferenceSync-BSceUB3Q.js";import"./index-BCkmK5YD.js";import"./index-DVfkSf50.js";import"./MenuItem-DEzF3Wos.js";import"./floating-ui.react-KcrBVsuh.js";import"./sizesMapping-D8QavrGc.js";import"./index-BA4dGRCH.js";import"./index-D7Enchig.js";import"./index-Y7pOMNss.js";import"./index-CRJtbCyP.js";import"./index-CJaX5efT.js";import"./index-5rbdE4ra.js";import"./index-D2T7B9nx.js";import"./index-DpPQjWyC.js";import"./index-BtEyOEDh.js";import"./index-C-AQ4SnI.js";import"./hook-DH6FMXCn.js";import"./index-DJ0iMoCC.js";import"./index-IX9qaxFo.js";import"./index-BJsQCtoC.js";import"./index-GdPBVw6h.js";import"./index-mDMSBCcD.js";import"./index-BBwGQaN3.js";import"./index-PUDlQz6m.js";import"./index-BKVJajSn.js";import"./index-CtOsqJ6t.js";import"./index-A9JPGDIL.js";import"./index-CswK6oZ4.js";import"./index-BB_iyaOG.js";import"./index-CAlDJVEd.js";import"./index-CdHqNcI6.js";import"./index-B7G0hzPa.js";import"./index-BtVPDrmD.js";import"./index-BFdlLUWB.js";import"./index-C9riXii6.js";import"./index-CwibpBsN.js";import"./index-DQFKTQjB.js";import"./index-DaZRXyVS.js";import"./index-3AXam_x1.js";import"./index-Dhsf1Its.js";import"./index-BBOasYPk.js";import"./index-Ce4DEavg.js";import"./index-CTO_m6qR.js";import"./index-Co7ZUFcE.js";import"./index-DoIF5vPd.js";import"./index-DptaoNrR.js";import"./index-C3SBMNpO.js";import"./index-DvWfCBSL.js";import"./index-CcYULIfU.js";import"./index-Daq8v7vG.js";import"./index-Cz_vA1hZ.js";import"./index-BlRSHBC7.js";import"./ComboBox-PS9Y9Xue.js";import"./index-CYnbSGsW.js";import"./constants-ClWdtWAL.js";import"./TreeList-77y535wQ.js";import"./copyToClipboard-DB_KM_BY.js";const n="Sidebar",p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=287-2084",x=`import { useState } from 'react';
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

export default App;`,v=`import { useState } from 'react';
import { Sidebar } from '@nlmk/ds-2.0';

const App = () => {
  const [currentPath, setCurrentPath] = useState('dashboard');

  return (
    <div style={{ backgroundColor: 'var(--unique-background)', width: '100%', margin: '-20px' }}>
      <Sidebar
        orientation="vertical"
        currentPath={currentPath}
        defaultMenuOpen
        manualExpansion
      >
        <Sidebar.MenuItem path="dashboard" label="Дашборд" position="top" icon="IconKovsh32" onClick={() => setCurrentPath('dashboard')} />
        <Sidebar.MenuItem path="reports" label="Отчеты" position="top" icon="IconChartDonut32" onClick={() => setCurrentPath('reports')}>
          <Sidebar.SubmenuItem path="daily" label="Ежедневные" onClick={() => setCurrentPath('daily')} />
          <Sidebar.SubmenuItem path="weekly" label="Недельные" onClick={() => setCurrentPath('weekly')} />
        </Sidebar.MenuItem>
      </Sidebar>
    </div>
  );
};

export default App;`,j=()=>{const[e,r]=u.useState(0),o=l=>e===l;return t.jsxs("div",{className:m.wrapper,children:[t.jsx(I,{title:n,description:"Sidebar используется для навигации по разделам приложения и поддерживает вложенные пункты меню, избранное, режимы отображения и пользовательский блок.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${n}`,figmaLink:p}),t.jsx("div",{className:m.tabs,children:t.jsxs(i,{children:[t.jsx(i.Tab,{label:"Разработчику",active:o(0),onClick:()=>r(0)}),t.jsx(i.Tab,{label:"Дизайнеру",active:o(1),onClick:()=>r(1)}),t.jsx(i.Tab,{label:"Тестирование",active:o(2),onClick:()=>r(2)})]})}),e==0&&t.jsxs(t.Fragment,{children:[t.jsx(a,{minHeight:920,description:"Базовый пример боковой навигации с вложенными разделами.",code:x}),t.jsx(a,{minHeight:920,description:"Режим burger с overlay и управлением видимостью пользовательского блока.",code:M}),t.jsx(a,{minHeight:620,description:"Режим manualExpansion: развернутый сайдбар сворачивается только по кнопке, а клик вне меню закрывает только подменю.",code:v}),t.jsx(k,{argsTypes:f})]}),e==1&&t.jsx(g,{url:p}),e==2&&t.jsx(P,{componentName:n})]})};function s(e){return t.jsxs(t.Fragment,{children:[t.jsx(b,{title:"Components/Sidebar/Info",component:S,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=287-2084"},jest:["Sidebar.test.tsx"]}}),`
`,t.jsx(d,{of:C}),`
`,t.jsx(c,{children:t.jsx(j,{})})]})}function Ne(e={}){const{wrapper:r}={...h(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(s,{...e})}):s()}export{Ne as default};
