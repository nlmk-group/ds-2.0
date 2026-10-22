import{r as l,j as t,m as d,S as b,U as c}from"./iframe-DJB5J1Gm.js";import{useMDXComponents as h}from"./index-Ctdy7DcM.js";import{S}from"./index-Cem2Ag1w.js";import{DecoratorDefault as C}from"./Decorator.stories-CLu9BKsp.js";import{s as m,H as I,E as i}from"./Header-DtfMJKVh.js";import{F as g}from"./FigmaEmbed-DChIjyS1.js";import{P as k,T as P}from"./Tests-Dnz3uSUu.js";/* empty css               */import{T as o}from"./index-K-Os3Mkv.js";import{a as f}from"./argsTypes-RCz6Wb9I.js";import"./preload-helper-PPVm8Dsz.js";import"./localeMapping-Cf4j9Ek8.js";import"./index-BuTn90Kx.js";import"./index-CiWWQHM4.js";import"./clsx-B-dksMZM.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-DwqdcbQV.js";import"./32-GoS4XOF1.js";import"./24-OO9CWz_o.js";import"./24-Ds_njt3X.js";import"./24-BJ1WZVGw.js";import"./24-ytII2ozW.js";import"./24-DKN-2bNd.js";import"./24-Bh7XmxMn.js";import"./24-DhKB3mvd.js";import"./24-CU8ORY4X.js";import"./24-Bfhp3VeF.js";import"./16-B11CXHkV.js";import"./24-DGoSPibJ.js";import"./24-DTEPByrl.js";import"./16-DeFHhMUc.js";import"./16-faObEf2T.js";import"./16-CJ_ZU7zi.js";import"./16-CLl9DOT8.js";import"./16-BA4929Um.js";import"./index-CQWz6SQ_.js";import"./index-27Xu9hjA.js";import"./index-BcIuHaz8.js";import"./index-aBKmaxH3.js";import"./types-TdnjS80C.js";import"./index-DL3eBH-P.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CtT43hFd.js";import"./index-CprSx77w.js";import"./index-BnjgdTIo.js";import"./index-BTlJCBjo.js";import"./index-DK9ZFXds.js";import"./index-C1EZBTl0.js";import"./index-Bf78mEfz.js";import"./index-DwnOefxr.js";import"./index-C1y8duee.js";import"./colorsMapping-C6bFIk14.js";import"./index-DRGi1AEL.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-1gFuoChe.js";import"./useFloatingReferenceSync-LO62TbyM.js";import"./index-DcVLIfyB.js";import"./index-6RvY6v79.js";import"./MenuItem-CYKzA5fc.js";import"./floating-ui.react-BitOEuDU.js";import"./sizesMapping-D8QavrGc.js";import"./index-CsNOcf0o.js";import"./index-CD8aF-OU.js";import"./index-CHjGJJzX.js";import"./index-DAf--LqM.js";import"./index-1fbwNQxU.js";import"./index-C_3lvTrt.js";import"./index-BiwwAO30.js";import"./index-DFRqr6gV.js";import"./index-BanPx_DE.js";import"./index-srYpiRUO.js";import"./hook-D9jdXbdP.js";import"./index-CWuaVSgJ.js";import"./index-HWoLZMFR.js";import"./index-B-Q4wIzC.js";import"./index-qo-mggsg.js";import"./index-CAA4Qv86.js";import"./index-DrzY2cvO.js";import"./index-B1fAjmi8.js";import"./index-CBalpVvc.js";import"./index-BhKUEEoJ.js";import"./index-ySRw8COl.js";import"./index-C3D1rheI.js";import"./index-CC4d2-d6.js";import"./index-BkLOgpm1.js";import"./index-ORro-3F_.js";import"./index-Bn6r3qI-.js";import"./index-DCHl1NWI.js";import"./index-xYIn6EQB.js";import"./index-DvdMLPTa.js";import"./index-CZ9VNNID.js";import"./index-sokDMC8X.js";import"./index-DKSgdMEw.js";import"./index-1lDXSB5o.js";import"./index-BS716PzN.js";import"./index-BoULGum0.js";import"./index-QllAPaHn.js";import"./index-DhvmMPlp.js";import"./index-B4DCnhI4.js";import"./index-Wm7yXHG7.js";import"./index-DE9x5FJz.js";import"./index-BU822_AO.js";import"./index-BL3IVkrQ.js";import"./index-C9IwNMpc.js";import"./index-CabIIsyC.js";import"./index-DQOwJSOs.js";import"./index-C7pppfbp.js";import"./ComboBox-_Uzqzogs.js";import"./index-SEGUll7-.js";import"./constants-DzgFZdqM.js";import"./TreeList-BXBmTHhj.js";import"./copyToClipboard-DB_KM_BY.js";const n="Sidebar",p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=287-2084",x=`import { useState } from 'react';
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
export default App;`,v=`import { useState } from 'react';
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

export default App;`,M=`import { useState } from 'react';
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

export default App;`,j=`import { useState } from 'react';
import { Sidebar } from '@nlmk/ds-2.0';

const menuItems = Array.from({ length: 14 }, (_, index) => ({
  path: 'section-' + (index + 1),
  label: 'Раздел меню ' + (index + 1)
}));

const App = () => {
  const [currentPath, setCurrentPath] = useState('section-1');

  return (
    <div style={{ backgroundColor: 'var(--unique-background)', width: '100%', margin: '-20px' }}>
      <Sidebar
        orientation="vertical"
        currentPath={currentPath}
        defaultMenuOpen
        isLoggedIn
        userName="Иван"
        userSurname="Иванов"
        systemName="НЛМК"
        onOpenUser={() => {}}
      >
        <Sidebar.Avatar size="s" imageSrc="" />
        {menuItems.map(item => (
          <Sidebar.MenuItem
            key={item.path}
            path={item.path}
            label={item.label}
            position="top"
            icon="IconKovsh32"
            onClick={() => setCurrentPath(item.path)}
          />
        ))}
        <Sidebar.MenuItem
          path="resources"
          label="Ресурсы"
          position="bottom"
          icon="IconInfoOutlined32"
          onClick={() => setCurrentPath('resources')}
        />
      </Sidebar>
    </div>
  );
};

export default App;`,y=()=>{const[e,r]=l.useState(0),a=u=>e===u;return t.jsxs("div",{className:m.wrapper,children:[t.jsx(I,{title:n,description:"Sidebar используется для навигации по разделам приложения и поддерживает вложенные пункты меню, избранное, режимы отображения и пользовательский блок.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${n}`,figmaLink:p}),t.jsx("div",{className:m.tabs,children:t.jsxs(o,{children:[t.jsx(o.Tab,{label:"Разработчику",active:a(0),onClick:()=>r(0)}),t.jsx(o.Tab,{label:"Дизайнеру",active:a(1),onClick:()=>r(1)}),t.jsx(o.Tab,{label:"Тестирование",active:a(2),onClick:()=>r(2)})]})}),e==0&&t.jsxs(t.Fragment,{children:[t.jsx(i,{minHeight:920,description:"Базовый пример боковой навигации с вложенными разделами.",code:x}),t.jsx(i,{minHeight:920,description:"Режим burger с overlay и управлением видимостью пользовательского блока.",code:v}),t.jsx(i,{minHeight:620,description:"Режим manualExpansion: развернутый сайдбар сворачивается только по кнопке, а клик вне меню закрывает только подменю.",code:M}),t.jsx(i,{minHeight:920,description:"Длинное меню: пользовательский блок закреплён под шапкой, прокручиваются только пункты меню.",code:j}),t.jsx(k,{argsTypes:f})]}),e==1&&t.jsx(g,{url:p}),e==2&&t.jsx(P,{componentName:n})]})};function s(e){return t.jsxs(t.Fragment,{children:[t.jsx(d,{title:"Components/Sidebar/Info",component:S,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=287-2084"},jest:["Sidebar.test.tsx"]}}),`
`,t.jsx(b,{of:C}),`
`,t.jsx(c,{children:t.jsx(y,{})})]})}function Oe(e={}){const{wrapper:r}={...h(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(s,{...e})}):s()}export{Oe as default};
