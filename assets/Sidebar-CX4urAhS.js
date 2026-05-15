import{r as u,j as t,m as b,S as d,U as c}from"./iframe-D_LYy3fl.js";import{useMDXComponents as h}from"./index-BGCmU5NS.js";import{S}from"./index-EATrCG3U.js";import{DecoratorDefault as C}from"./Decorator.stories-BO1qjJJ1.js";import{s as n,H as I,E as m}from"./Header-BLbLqtI-.js";import{F as g}from"./FigmaEmbed-DSb0w-ZX.js";import{P as k,T as f}from"./Tests-BJKeRIHR.js";/* empty css               */import{T as i}from"./index-B0cY82zJ.js";import{a as P}from"./argsTypes-cnk20FxL.js";import"./preload-helper-PPVm8Dsz.js";import"./localeMapping-Cf4j9Ek8.js";import"./index-D0zaiIGb.js";import"./index-Y_-eDXu7.js";import"./clsx-B-dksMZM.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-BBjrBt_R.js";import"./32-B1ex1Qfl.js";import"./24-BzTqzIQp.js";import"./24-b_koWyIs.js";import"./24-XaiESbAO.js";import"./24-SvF-uGUY.js";import"./24-DBpiE5RN.js";import"./24-C31X8Df1.js";import"./24-DjRuCPMC.js";import"./24-owNDVSH-.js";import"./24-BoWyYuma.js";import"./16-DkYOHGQf.js";import"./24-ZwSrW1fV.js";import"./24-D4x4T2Vm.js";import"./16-BrwH80oO.js";import"./16-CXgWdZwH.js";import"./16-C70VLwWe.js";import"./16-DJp-l2qz.js";import"./16-8C7xLZBI.js";import"./index-B1PU1CNi.js";import"./index-C_cRJjro.js";import"./index-BU_GnhDV.js";import"./index-BWcODPGj.js";import"./types-TdnjS80C.js";import"./index-Bj6Bthvm.js";import"./index-BNXMfZxy.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-lR55cdNn.js";import"./index-BiOm7QyS.js";import"./index-R8QHUFR1.js";import"./index-BkmiSUDO.js";import"./index-Q5YcqIYP.js";import"./index-BDsANEzD.js";import"./index-yDzNc95d.js";import"./index-B95bsGI0.js";import"./colorsMapping-C6bFIk14.js";import"./index-5PnItkP7.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-oJloIZca.js";import"./useFloatingReferenceSync-DtnNKvIM.js";import"./index-BtP4eAFz.js";import"./index-CzXcIb-j.js";import"./MenuItem-CMiMvsFX.js";import"./floating-ui.react-XEmCJJOr.js";import"./sizesMapping-D8QavrGc.js";import"./index-CLHUbwEU.js";import"./index-BRXpQ6Hr.js";import"./index-BsdBWJ3a.js";import"./index-CAVMCCtJ.js";import"./index-CMQId7KD.js";import"./index-DqUjQ6V8.js";import"./index-S_LgkFS5.js";import"./index-D3lr74sg.js";import"./index-C3TSEdgN.js";import"./index-B1rmkdDL.js";import"./hook-Cus-K6LR.js";import"./index-BIF_MlAn.js";import"./index-DReekAV_.js";import"./index-P7ZTb--l.js";import"./index-BZOhfber.js";import"./index-CtdZrVFs.js";import"./index-zXTcph7i.js";import"./index-DQYYPt0I.js";import"./index-C3JMqomg.js";import"./index-C_UiSZZG.js";import"./index-D0qqrzz7.js";import"./index-C4C0VBq-.js";import"./index-D0bJ_vk5.js";import"./index-BJJ_y91S.js";import"./index-Bm_nqkYB.js";import"./index-C9OsoAfb.js";import"./index-Bg0Nv3pS.js";import"./index-DPxKDXZx.js";import"./index-BrBqwFe2.js";import"./index-C1VUP76c.js";import"./index-B68SVRmH.js";import"./index-D2Bt9vO-.js";import"./index-BJHfEa9h.js";import"./index-BvNJt26d.js";import"./index-BPOlQxyv.js";import"./index-CeTCku7Z.js";import"./index-hZhhfzT2.js";import"./index-Dm1Av42Y.js";import"./index-D-Ucr6ou.js";import"./index-DK6KR7s9.js";import"./index-Br2zG6qh.js";import"./index-B32oSB5V.js";import"./index-DVf28Hrl.js";import"./index-DmvA6fX4.js";import"./index-uifo1Fcm.js";import"./index-CTJfTsFr.js";import"./ComboBox-D7VaQLp6.js";import"./index-BUSsu5Rl.js";import"./constants-DVt2R2sY.js";import"./TreeList-B_Os3dVZ.js";import"./copyToClipboard-DB_KM_BY.js";const a="Sidebar",p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=287-2084",x=`import { useState } from 'react';
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
