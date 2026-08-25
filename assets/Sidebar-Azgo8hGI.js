import{r as l,j as t,m as d,S as b,U as c}from"./iframe-DaRyOQD4.js";import{useMDXComponents as h}from"./index-BgkguWCX.js";import{S}from"./index-Ce0aIdaY.js";import{DecoratorDefault as C}from"./Decorator.stories-Bdka78jy.js";import{s as m,H as I,E as i}from"./Header-DystUPED.js";import{F as g}from"./FigmaEmbed-BGn6m26F.js";import{P as k,T as P}from"./Tests-CYj1CAIQ.js";/* empty css               */import{T as o}from"./index-gu4HNhdT.js";import{a as f}from"./argsTypes-D1BieydL.js";import"./preload-helper-PPVm8Dsz.js";import"./localeMapping-Cf4j9Ek8.js";import"./index-Bhkau184.js";import"./index-7E4T5yQV.js";import"./clsx-B-dksMZM.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-BBsCXdKC.js";import"./32-BjfT3i4e.js";import"./24-CISCaQ63.js";import"./24-60eD6Z-I.js";import"./24-qK0x_3Ma.js";import"./24-B-wOqD5j.js";import"./24-B-h9yLtA.js";import"./24-B_dTG4ub.js";import"./24-D0g0E23x.js";import"./24-gNed2SUN.js";import"./24-C175QdoB.js";import"./16-CvdS6GvX.js";import"./24-BGR-3ALd.js";import"./24-DFKe0nyJ.js";import"./16-0E3xB5Tl.js";import"./16-lUiuHRHz.js";import"./16-rE0E2ssb.js";import"./16-BvoUreEM.js";import"./16-BqEOmvvO.js";import"./index-Dvw5dMma.js";import"./index-CmkzyLkL.js";import"./index-CBZ_keLy.js";import"./index-gWNSPh3n.js";import"./types-TdnjS80C.js";import"./index-Chib2uHL.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-DCWLVNT4.js";import"./index-B7ZrQXoO.js";import"./index-CkK1Msss.js";import"./index-CNjWEkXp.js";import"./index-BZ_Hg5x5.js";import"./index-BXFNtNVO.js";import"./index-D8NQ-OjL.js";import"./index-DEiYNjzB.js";import"./index-DdSJm2q8.js";import"./colorsMapping-C6bFIk14.js";import"./index-CcSpOCs_.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-Cf3JpTrJ.js";import"./useFloatingReferenceSync-e0QbxRQz.js";import"./index-B1k1NS-B.js";import"./index-zgHibT2s.js";import"./MenuItem-DG7Boi2a.js";import"./floating-ui.react-CBGLEHeQ.js";import"./sizesMapping-D8QavrGc.js";import"./index-DU1S_Fke.js";import"./index-BS7WuNoV.js";import"./index-BXCEi6ek.js";import"./index-BS3dtI07.js";import"./index-DNRaPIJY.js";import"./index-nmEIrJRc.js";import"./index-XqCM6NuH.js";import"./index--gKAIURH.js";import"./index-C0zJEJdb.js";import"./index-PTZ9yk0y.js";import"./hook-VmrMNmoE.js";import"./index-Bm7gwrWd.js";import"./index-yBLZkpey.js";import"./index-Ct4FpV06.js";import"./index-60xW7gWZ.js";import"./index-CTCWt51c.js";import"./index-Dhp36KE2.js";import"./index-DPciguLF.js";import"./index-WmXQrkmE.js";import"./index-At6H3_hV.js";import"./index-Xb4KH60s.js";import"./index-DBz_mHH6.js";import"./index-3og25uON.js";import"./index-BmyIjWMa.js";import"./index-B1-FWV8A.js";import"./index-CzJ2Yzrx.js";import"./index-BOIqM1VF.js";import"./index-Dbbtu5hK.js";import"./index-D3a3kz2n.js";import"./index-DA40l4_1.js";import"./index-C1bYJrqZ.js";import"./index-CM0OZ7FR.js";import"./index-DsgmYFjz.js";import"./index-C-tPqMqK.js";import"./index-97oQTlpb.js";import"./index-C2vyTmKj.js";import"./index-DJzDGIrh.js";import"./index-11gloAds.js";import"./index-DQw_TNDK.js";import"./index-olQ11wq4.js";import"./index-B2WtkI7A.js";import"./index-BM0Ab2WA.js";import"./index-BZgFgbpd.js";import"./index-Dxzj7Vk2.js";import"./index-DRVVT9BA.js";import"./index-D3Fscyv-.js";import"./ComboBox-BsvZu-Eq.js";import"./index-NjTwKeYa.js";import"./constants-rrTgojkT.js";import"./TreeList-BR8MQBpg.js";import"./copyToClipboard-DB_KM_BY.js";const n="Sidebar",p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=287-2084",x=`import { useState } from 'react';
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
