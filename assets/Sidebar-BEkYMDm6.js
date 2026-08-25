import{r as l,j as t,m as d,S as b,U as c}from"./iframe-B07kYXZc.js";import{useMDXComponents as h}from"./index-CjGunqbw.js";import{S}from"./index-vOYRqFvw.js";import{DecoratorDefault as C}from"./Decorator.stories-B0DPksjy.js";import{s as m,H as I,E as i}from"./Header-BWIBo_NL.js";import{F as g}from"./FigmaEmbed-BR9XTrZ3.js";import{P as k,T as P}from"./Tests-Ddqg8ow3.js";/* empty css               */import{T as o}from"./index-Cp_gevaj.js";import{a as f}from"./argsTypes-B8PCESVS.js";import"./preload-helper-PPVm8Dsz.js";import"./localeMapping-Cf4j9Ek8.js";import"./index-B_xFOywu.js";import"./index-d9zAT72g.js";import"./clsx-B-dksMZM.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-BZSRNIXj.js";import"./32-QMp9o6yj.js";import"./24-Ccs2DJDL.js";import"./24-z3_ytzpX.js";import"./24-BwrZtwQH.js";import"./24-C1AoWM2r.js";import"./24-BvO12ahp.js";import"./24-B7RF46pu.js";import"./24-Bx4D2aXR.js";import"./24-BEhrtGbq.js";import"./24-BbpZ1avt.js";import"./16-pHftyEs8.js";import"./24-DMSuIbyM.js";import"./24-k5ICTj37.js";import"./16-B0Y2v5mC.js";import"./16-7D2L3psa.js";import"./16-Cw3IW5wm.js";import"./16-TYDaleCn.js";import"./16-DlJ0H2so.js";import"./index-6XMOLgd-.js";import"./index-0sw3GI3b.js";import"./index-CTuNz-uH.js";import"./index-COK94YB4.js";import"./types-TdnjS80C.js";import"./index-CwfAWzLk.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CGrwobg7.js";import"./index-DJFZ0Zdl.js";import"./index-IzK8PPRw.js";import"./index-RqeUiUBw.js";import"./index-BqdfdXLw.js";import"./index-DlVjw_Iw.js";import"./index-DOy_CavS.js";import"./index-BoP19oSV.js";import"./index-BejtXQk_.js";import"./colorsMapping-C6bFIk14.js";import"./index-X7iBD8Fn.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-Bwgk6Sxb.js";import"./useFloatingReferenceSync-DbQMH-3c.js";import"./index-Cy6t6Ezk.js";import"./index-BBjCAhaL.js";import"./MenuItem-CIRsK8he.js";import"./floating-ui.react-CDNbLsbS.js";import"./sizesMapping-D8QavrGc.js";import"./index-CNDfqOtX.js";import"./index-FEAihz4M.js";import"./index-BQZWcYlM.js";import"./index-BTSmrueN.js";import"./index-DScTDMmh.js";import"./index-SJgOFp9t.js";import"./index-CSqN0A7u.js";import"./index-B2smvyda.js";import"./index-CFAtiP4c.js";import"./index-DbxPhvPc.js";import"./hook-CJa8o8cf.js";import"./index-8nOplKbR.js";import"./index-B0gG98-R.js";import"./index-DgGoLy7y.js";import"./index-J7Njc-PT.js";import"./index-Dklje7JM.js";import"./index-CJa1u0t1.js";import"./index-C6ef_7XJ.js";import"./index-CMWxTnoS.js";import"./index-BoUKONT_.js";import"./index-CHgcPGEu.js";import"./index-Byj_yMGc.js";import"./index-ClDlTn4P.js";import"./index-UkfqzCFW.js";import"./index-fequeZGH.js";import"./index-B1FDloAn.js";import"./index-B8GZkxEV.js";import"./index-DjgiFHNl.js";import"./index-DeLkfcTC.js";import"./index-DafsOy6K.js";import"./index-DKxgdZhf.js";import"./index-BHmgEshV.js";import"./index-D3bQP97z.js";import"./index-mBiA4WNY.js";import"./index-Yuhpfewd.js";import"./index-T2XevpS6.js";import"./index-DBMo2nZZ.js";import"./index-BEy1wh23.js";import"./index-OtFZfMgj.js";import"./index-D2n5mAtP.js";import"./index-DdwT-0gn.js";import"./index-C3EtJTZW.js";import"./index-BO8JYT_u.js";import"./index-DXXEuEBS.js";import"./index-Ca-tiPXF.js";import"./index-DpajdaDu.js";import"./ComboBox-Dwq3rPDU.js";import"./index-DqxhwPYk.js";import"./constants-eZqyrgzW.js";import"./TreeList-g0RzoTR-.js";import"./copyToClipboard-DB_KM_BY.js";const n="Sidebar",p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=287-2084",x=`import { useState } from 'react';
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
