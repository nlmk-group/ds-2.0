import{r as u,j as t,m as b,S as d,U as c}from"./iframe-auckHHdj.js";import{useMDXComponents as h}from"./index-D2-gUu9G.js";import{S}from"./index-DaTNyn08.js";import{DecoratorDefault as C}from"./Decorator.stories-CU9Bre90.js";import{s as n,H as I,E as m}from"./Header-Xv1TykH5.js";import{F as g}from"./FigmaEmbed-UYJ3_Lxu.js";import{P as k,T as f}from"./Tests-Be3Z9p2z.js";/* empty css               */import{T as i}from"./index-DeGyB7Dd.js";import{a as x}from"./argsTypes-DeXJF_WR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D6wJCd8e.js";import"./index-BLWgIzMD.js";import"./clsx-B-dksMZM.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-Dgon7Y2a.js";import"./24-D3OVyFof.js";import"./24-CZ9ZAk74.js";import"./24-JpVCCs1C.js";import"./24-D-Ce91Qj.js";import"./24-DCTJG6OU.js";import"./24-BOn3Xrid.js";import"./24-BC-oV7QY.js";import"./24-Gcxv2DAi.js";import"./24-BbN_tXia.js";import"./16-DoCVdKUE.js";import"./24-zuSrA0QY.js";import"./24-aRDAvjva.js";import"./16-BIzc6kNX.js";import"./16-CQDnK6-A.js";import"./16-DXAjwKj0.js";import"./index-DVSj14ZC.js";import"./index-Bi3cHAEE.js";import"./index-p7YOrb6p.js";import"./index-B-ej4zbU.js";import"./types-TdnjS80C.js";import"./index-7B7uGpjf.js";import"./localeMapping-Cf4j9Ek8.js";import"./index-Clnp6vy5.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CfC-iwgs.js";import"./index-Pjjb9oj1.js";import"./index-WoM53gF_.js";import"./index-c4yDlpPS.js";import"./index-CczZHqJG.js";import"./index-CznkRUli.js";import"./index-HmkWsx8T.js";import"./index-qO9dtrtH.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-Bay6_7KL.js";import"./index-CHU7bacX.js";import"./index-CXN1ldU3.js";import"./index-CsbgtAb7.js";import"./index-Dtv-oYzE.js";import"./floating-ui.react-2bHrE470.js";import"./sizesMapping-D8QavrGc.js";import"./index-Toxo3H46.js";import"./index-BQRpE3vE.js";import"./index-DIknRWC4.js";import"./index-BTrYr-DM.js";import"./index-NkgoTVoy.js";import"./index-DI5MKq0T.js";import"./index-DI7c4HX8.js";import"./index-5_PQcWJ_.js";import"./index-BJ_pO-nS.js";import"./index-Bgj3TetA.js";import"./index-7Ftiwmbj.js";import"./hook-DQjzjF05.js";import"./useFloatingReferenceSync-y2Sb52o3.js";import"./index-B4KZvEgZ.js";import"./index-MeCbP8N7.js";import"./index-DJL6Ketu.js";import"./index-DEqo2gt9.js";import"./index-DEdd9dJR.js";import"./index-symdhavQ.js";import"./index-mikXIReK.js";import"./index-DjEbf1Sc.js";import"./index-DPDFUXOz.js";import"./index-BcPHqDDB.js";import"./index-CmECfUaS.js";import"./index-D5mVsZu_.js";import"./index-CMGZFX1T.js";import"./index-CYpVoyww.js";import"./index-C4xiOmXd.js";import"./index-Ckcsg1R_.js";import"./index-B4AAAwTV.js";import"./index-BbQCbaJ_.js";import"./index-1SaxXTAW.js";import"./index-Bfe18qq-.js";import"./index-DBO3Tr6M.js";import"./index-eQTa5KLe.js";import"./index-jYXTCRtU.js";import"./index-DKRvyNZX.js";import"./index-Cwm_m_JE.js";import"./index-DSyAIbs-.js";import"./index-D9WAgLdq.js";import"./index-BgB7HTk8.js";import"./index-84_n7Alc.js";import"./index-EESLLEw6.js";import"./index-CLlcyrdp.js";import"./ComboBox-0tLuTHDp.js";import"./index-D1zl6Im_.js";import"./TreeList-BsnCF1G8.js";import"./copyToClipboard-DB_KM_BY.js";const a="Sidebar",p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=287-2084&t=EnvIMGos3m33avAX-1",P=`import { useState } from 'react';
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

export default App;`,M=()=>{const[e,r]=u.useState(0),o=l=>e===l;return t.jsxs("div",{className:n.wrapper,children:[t.jsx(I,{title:a,description:"Sidebar используется для навигации по разделам приложения и поддерживает вложенные пункты меню, избранное, режимы отображения и пользовательский блок.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${a}`,figmaLink:p}),t.jsx("div",{className:n.tabs,children:t.jsxs(i,{children:[t.jsx(i.Tab,{label:"Разработчику",active:o(0),onClick:()=>r(0)}),t.jsx(i.Tab,{label:"Дизайнеру",active:o(1),onClick:()=>r(1)}),t.jsx(i.Tab,{label:"Тестирование",active:o(2),onClick:()=>r(2)})]})}),e==0&&t.jsxs(t.Fragment,{children:[t.jsx(m,{minHeight:920,description:"Базовый пример боковой навигации с вложенными разделами.",code:P}),t.jsx(m,{minHeight:920,description:"Режим burger с overlay и управлением видимостью пользовательского блока.",code:v}),t.jsx(k,{argsTypes:x})]}),e==1&&t.jsx(g,{url:p}),e==2&&t.jsx(f,{componentName:a})]})};function s(e){return t.jsxs(t.Fragment,{children:[t.jsx(b,{title:"Components/Sidebar/Info",component:S,parameters:{design:{type:"figma",url:"https://www.figma.com/file/NVWvbpDg0KxYpZOlCMFXdy/DS2.0-Sidebar?type=design&node-id=0-1&mode=design&t=Qh3zxP2KDdKIeZpx-0"},jest:["Sidebar.test.tsx"]}}),`
`,t.jsx(d,{of:C}),`
`,t.jsx(c,{children:t.jsx(M,{})})]})}function ve(e={}){const{wrapper:r}={...h(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(s,{...e})}):s()}export{ve as default};
