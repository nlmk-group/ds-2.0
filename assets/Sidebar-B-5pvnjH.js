import{r as u,j as t,m as b,S as d,U as c}from"./iframe-BdOpgzrS.js";import{useMDXComponents as h}from"./index-DJy09qRq.js";import{S}from"./index-BI0qJ3c6.js";import{DecoratorDefault as C}from"./Decorator.stories-C28-sXLg.js";import{s as n,H as I,E as m}from"./Header-DXi6_hVE.js";import{F as g}from"./FigmaEmbed-Chyrs9ER.js";import{P as k,T as f}from"./Tests-Oc7S5ZKL.js";/* empty css               */import{T as i}from"./index-BSn6HQzr.js";import{a as P}from"./argsTypes-CTxj12Pe.js";import"./preload-helper-PPVm8Dsz.js";import"./localeMapping-Cf4j9Ek8.js";import"./index-BAERPvu_.js";import"./index-OONZivDn.js";import"./clsx-B-dksMZM.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-ChopWT_z.js";import"./32-ChxPjCDA.js";import"./24-BmvAwPvh.js";import"./24-CV0PNOey.js";import"./24-CRWfoU4Z.js";import"./24-DOFnqipN.js";import"./24-PBHXpKVH.js";import"./24-CBMXdyoG.js";import"./24-BVmNVZn4.js";import"./24-WjLrdny4.js";import"./24-K0yWzWKj.js";import"./16--IL1VHaj.js";import"./24-BznlLpgc.js";import"./24-VDHIr0Dv.js";import"./16-CEnZ3psN.js";import"./16-C2Q8nrRG.js";import"./16-Du9yZ744.js";import"./16-DeFUxAIB.js";import"./16-Cnsgcg9g.js";import"./index-CJQtOKfQ.js";import"./index-B7PkToN1.js";import"./index-BKLHPlSR.js";import"./index-CeyXG_zt.js";import"./types-TdnjS80C.js";import"./index-BYrUxwbP.js";import"./index-B2RalwUT.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-DkWAreVa.js";import"./index-CLAZw8N4.js";import"./index-DVTrHQKM.js";import"./index-vv3ZnJjs.js";import"./index-CRHD1rp7.js";import"./index-Ck-XN-ge.js";import"./index-Eg_8IEpf.js";import"./index-BCWgfUlh.js";import"./colorsMapping-C6bFIk14.js";import"./index-D7hqcCmB.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-BO8DxY49.js";import"./useFloatingReferenceSync-DqthvRxQ.js";import"./index-CWizWQ-f.js";import"./index-BGK3vMRu.js";import"./MenuItem-lW_S4VfZ.js";import"./floating-ui.react-B81N47Rb.js";import"./sizesMapping-D8QavrGc.js";import"./index-BXEDdhur.js";import"./index-Bo3DQfvQ.js";import"./index-4jA536FU.js";import"./index-B-NoUIZI.js";import"./index-CL6fgpqk.js";import"./index-CoT1f0LI.js";import"./index-Bua5qXkb.js";import"./index-DDPpfVml.js";import"./index-B43IYv7N.js";import"./index-imlWOh4l.js";import"./hook-CYye5MAA.js";import"./index-WpmEvsZB.js";import"./index-C1BAN_9s.js";import"./index-B6XbamL1.js";import"./index-BN5r_AV-.js";import"./index-C8MSIeIN.js";import"./index-B0j95XIR.js";import"./index-CeFYkyd7.js";import"./index-R9IHYOO5.js";import"./index-DPvTpWrG.js";import"./index-1Qe_4yAi.js";import"./index-BH6jN-u0.js";import"./index-CUsaH7j6.js";import"./index-jvRyrw0B.js";import"./index-BRrp3xVQ.js";import"./index-ljDOKoqn.js";import"./index-DHYk6Txp.js";import"./index-D9BCvHbX.js";import"./index-k1EAulh0.js";import"./index-C2cVSUod.js";import"./index-D7Mf3A5i.js";import"./index-9Dq95OiO.js";import"./index-Cl4xrWxE.js";import"./index-CrczCUl4.js";import"./index-DcZWdIUK.js";import"./index-DLQT8wYk.js";import"./index-BYJCkP-K.js";import"./index-D-LNKzPH.js";import"./index-C0Y8rlI2.js";import"./index-y60vd0es.js";import"./index-BSXV1Fg-.js";import"./index-G-edGsEt.js";import"./index-BYR3WDA_.js";import"./index-COjirL-c.js";import"./index-B_UPuCF1.js";import"./index-5UE0QfQE.js";import"./ComboBox-C09mBvpI.js";import"./index-Dse-RVNj.js";import"./constants-DdJvlSUO.js";import"./TreeList-CxWBdKx_.js";import"./copyToClipboard-DB_KM_BY.js";const a="Sidebar",p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=287-2084",x=`import { useState } from 'react';
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
