import{r as u,j as t,m as b,S as d,U as c}from"./iframe-CiNcYurr.js";import{useMDXComponents as h}from"./index-BaUxFINc.js";import{S}from"./index-DiIsinIh.js";import{DecoratorDefault as C}from"./Decorator.stories-CMY6PrD1.js";import{s as n,H as I,E as m}from"./Header-CSF8pD8M.js";import{F as g}from"./FigmaEmbed-BgSjDHDG.js";import{P as k,T as f}from"./Tests-CuCRZHAs.js";/* empty css               */import{T as i}from"./index-BGUexdM0.js";import{a as x}from"./argsTypes-BcrVIU7Z.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BTbdo8J6.js";import"./index-KTbM5ka_.js";import"./clsx-B-dksMZM.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-BIZlbf4u.js";import"./24-C4GcDMUE.js";import"./24-BpIVUa9s.js";import"./24-CM41UcFe.js";import"./24-CuMa5vAe.js";import"./24-ByfXT0PC.js";import"./24-Dn2lqm-y.js";import"./24-WK1b6lfV.js";import"./24-CbtCS4aD.js";import"./24-Hf1fmE8D.js";import"./16-Bzi-BRTw.js";import"./24-Bt6gBPsC.js";import"./24-B1PR4U9W.js";import"./16-87YGvwqM.js";import"./16-D_wDoKTV.js";import"./16-DGHcuNOQ.js";import"./index-ChNBy6a5.js";import"./index-BW3E00_d.js";import"./index-C62Rz3pb.js";import"./index-5P6wQBGT.js";import"./types-TdnjS80C.js";import"./index-Cc3zI-Zi.js";import"./localeMapping-Cf4j9Ek8.js";import"./index-TMf-q5Af.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-C5ZdoSw6.js";import"./index-BK6wfwgJ.js";import"./index-BgSHXntA.js";import"./index-B5JbKXfP.js";import"./index-Bmplgm43.js";import"./index-Bm9ZTaRK.js";import"./index-DMves0z1.js";import"./index-DKGBjWfT.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-BAO_EFiP.js";import"./index-nCUMzYDY.js";import"./index-ipRY-F18.js";import"./index-BnnFEDSq.js";import"./index-C0rE8VRv.js";import"./floating-ui.react-kz-yE5c0.js";import"./sizesMapping-D8QavrGc.js";import"./index-B6F5exii.js";import"./index-WfOI5tKp.js";import"./index-Di3Tf_NZ.js";import"./index-BSCmrBEE.js";import"./index-k-8s0_Jc.js";import"./index-DtsZdW_k.js";import"./index-BASSBPqG.js";import"./index-BDsxwAhX.js";import"./index-7l3FwTp_.js";import"./index-C19bQcdj.js";import"./index-BvLTT0Bc.js";import"./hook-xNLQpI5_.js";import"./useFloatingReferenceSync-N5nxTT3h.js";import"./index-tFFXhZ5g.js";import"./index-CctpJQDv.js";import"./index-BR9FB4KQ.js";import"./index-BPA0dgrp.js";import"./index-CC8vLZx7.js";import"./index-8zO7yMOe.js";import"./index-DGAhwUTe.js";import"./index-DXyu3KnF.js";import"./index-DwZld9Xy.js";import"./index-Bfa5kPEf.js";import"./index-CWXYOrIJ.js";import"./index-G7kzCBo_.js";import"./index-BlcuogSf.js";import"./index-MwaXdhFc.js";import"./index-Vn4Jr9MH.js";import"./index-BSRH1Q8Z.js";import"./index-Djipz1eP.js";import"./index-oG78am6U.js";import"./index-5yXCpVDE.js";import"./index-B5C_MfFj.js";import"./index-CPQDgGpy.js";import"./index-C-OYgTT5.js";import"./index-DpcbdR_F.js";import"./index-Dk716a-C.js";import"./index-BErnz41e.js";import"./index-Cd5eTZd_.js";import"./index-CUllg0k1.js";import"./index-BdhXnQ-k.js";import"./index-C-hD1Qn7.js";import"./index-Dcu3xPiM.js";import"./index-FqvjfKzP.js";import"./ComboBox-moTAJumu.js";import"./index-CLQNWR2i.js";import"./TreeList-Amzwxkac.js";import"./copyToClipboard-DB_KM_BY.js";const a="Sidebar",p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=287-2084&t=EnvIMGos3m33avAX-1",P=`import { useState } from 'react';
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
