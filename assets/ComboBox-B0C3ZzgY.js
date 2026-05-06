import{r as l,j as o,m as a,S as d,U as n}from"./iframe-D_geb98U.js";import{useMDXComponents as b}from"./index-DEBIPiNl.js";import{DecoratorDefault as c}from"./Decorator.stories-CtbByLLQ.js";import{s as r,H as x,E as e}from"./Header-Cp8G-9CM.js";import{F as C}from"./FigmaEmbed-CpTK-aEq.js";import{P as h,T as g}from"./Tests-BFrILV54.js";/* empty css               */import{T as m}from"./index-Cbxger2I.js";import{a as u}from"./argsTypes-DR8YX4TM.js";import{C as f}from"./ComboBox-ru-vv14S.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-BOQlEYEy.js";import"./index-DVKWK4-j.js";import"./16-ytttYgy7.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-CRYZ0TC_.js";import"./index-DzpyBbEs.js";import"./index-CV6hzqCP.js";import"./index-DXqbsWBL.js";import"./32-CJsTn9GR.js";import"./32-CSeewk7k.js";import"./24-Dks7beat.js";import"./24-wTI-a7Qj.js";import"./24-B20dUB8u.js";import"./24-ckbWkRdy.js";import"./24-Cpo6jKx5.js";import"./24-8OlOIiot.js";import"./24-D4VquirR.js";import"./24-Dh3bHrWZ.js";import"./24-l18nGkor.js";import"./24-CvT8JzoY.js";import"./24-Bgy5v27I.js";import"./16-CQHHA9le.js";import"./16-ZmyXGQ60.js";import"./16-Dy6XUum1.js";import"./16-CAqgkR1g.js";import"./16-B1x2jzVj.js";import"./index-gGDdMD4Z.js";import"./index-Dc0Smdiq.js";import"./index-DY6Wauvi.js";import"./index-DskztHOz.js";import"./index-DziAzwH5.js";import"./index-CdX0h1x8.js";import"./colorsMapping-C6bFIk14.js";import"./index-C9yrXfLO.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-DtINpL4z.js";import"./useFloatingReferenceSync-Uu7LJ-ip.js";import"./index-hZv1vyiY.js";import"./index-Ds2s981t.js";import"./types-TdnjS80C.js";import"./index-CHLxKCE-.js";import"./MenuItem-RKU4owtw.js";import"./floating-ui.react-C_U8tQaz.js";import"./sizesMapping-D8QavrGc.js";import"./index-CVwy7aMy.js";import"./index-B82E4k1I.js";import"./index-DurTHLjl.js";import"./index-BmAyGkEC.js";import"./index-B207YH3y.js";import"./index-D2pVVHYb.js";import"./index-D-VB7JJf.js";import"./index-CNpEsrMB.js";import"./index-CS6EpHju.js";import"./index-B4KF8t6p.js";import"./index-Col1tz7G.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-CTGxoHFE.js";import"./index-CmX5uS9r.js";import"./index-8pjDucJj.js";import"./index-XAV3gP1c.js";import"./index-CqItqX1T.js";import"./index-B4Lvy_xN.js";import"./index-BsU4-z2O.js";import"./index-DGVoojgO.js";import"./index-BJ_EJkVt.js";import"./index-DWfoHQZi.js";import"./index-BEr6Yej_.js";import"./index-DsiBS6O_.js";import"./index-BRmfAQM5.js";import"./index-7M5-vNro.js";import"./index-BBQxN6Hh.js";import"./index-WEJ-wiwM.js";import"./index-B0vyHZT0.js";import"./index-DOrebIlF.js";import"./index-DUNXWP3K.js";import"./index-CRQ1F-kQ.js";import"./index-IhMb7mOd.js";import"./index-Dk_eh4hq.js";import"./index-BHIlvHWF.js";import"./index-CmZWJowM.js";import"./index-CUlZZogs.js";import"./index-CdZRxSQR.js";import"./index-BCQKokda.js";import"./index-Cml4jBdN.js";import"./index-DEt2dyhg.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CsAs8tg2.js";import"./index-Tlp5L_x6.js";import"./index-Bg9A9_j3.js";import"./index-BRE8g-Px.js";import"./index-vrktoCUN.js";import"./index-DwD6M5XP.js";import"./index-Cd99GZ_P.js";import"./index-B34m8eE0.js";import"./index-D0nJVAiy.js";import"./index-B5MzhOMl.js";import"./constants-DBot8vvE.js";import"./TreeList-DmNOIBRU.js";import"./copyToClipboard-DB_KM_BY.js";import"./index-NvAUagqQ.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=594-273525",B="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ComboBox",j=`import { ComboBox, ComboList } from '@nlmk/ds-2.0';

const items = [
  { id: '1', label: 'Опция 1' },
  { id: '2', label: 'Опция 2' },
  { id: '3', label: 'Опция 3' }
];

export default App = () => (
  <ComboBox label="Одиночный выбор">
    <ComboList
      items={items}
      onChange={(selected) => console.log(selected)}
      isMultiple={false}
    />
  </ComboBox>
);`,L=`import { ComboBox, ComboList } from '@nlmk/ds-2.0';

const items = [
  { id: '1', label: 'Лист стальной' },
  { id: '2', label: 'Прокат сортовой' },
  { id: '3', label: 'Труба профильная' },
  { id: '4', label: 'Арматура' }
];

export default App = () => (
  <ComboBox label="Множественный выбор">
    <ComboList
      items={items}
      isMultiple
      isSearch
      isCheckAll
      onChange={(selected) => console.log(selected)}
    />
  </ComboBox>
);`,w=`import { ComboBox, ComboGroupList } from '@nlmk/ds-2.0';

const items = [
  { id: '1', label: 'Лист 2 мм', groupId: 'sheets', groupLabel: 'Листы' },
  { id: '2', label: 'Лист 3 мм', groupId: 'sheets', groupLabel: 'Листы' },
  { id: '3', label: 'Труба 40x40', groupId: 'pipes', groupLabel: 'Трубы' },
  { id: '4', label: 'Труба 60x60', groupId: 'pipes', groupLabel: 'Трубы' }
];

export default App = () => (
  <ComboBox label="Группированный список">
    <ComboGroupList
      items={items}
      isMultiple
      isSearch
      onChange={(selected) => console.log(selected)}
    />
  </ComboBox>
);`,k=`import { ComboBox, ComboTreeList } from '@nlmk/ds-2.0';

const items = [
  {
    id: 'metallurgy',
    label: 'Металлургия',
    children: [
      { id: 'steelmaking', label: 'Сталеплавильное производство' },
      { id: 'rolling', label: 'Прокатное производство' }
    ]
  },
  {
    id: 'logistics',
    label: 'Логистика',
    children: [
      { id: 'warehouse', label: 'Склад' },
      { id: 'delivery', label: 'Доставка' }
    ]
  }
];

export default App = () => (
  <ComboBox label="Древовидный список" autoExpandOnSearch>
    <ComboTreeList
      items={items}
      isMultiple
      isSearch
      isCheckAll
      onChange={(selected) => console.log(selected)}
    />
  </ComboBox>
);`,y=`import { ComboBox, ComboList } from '@nlmk/ds-2.0';

const items = [
  { id: '1', label: 'Пункт 1' },
  { id: '2', label: 'Пункт 2' }
];

export default App = () => (
  <>
    <ComboBox label="Отключённый ComboBox" isDisabled>
      <ComboList items={items} />
    </ComboBox>

    <div style={{ height: 12 }} />

    <ComboBox
      label="Кастомизация контейнера и dropdown"
      className="custom-combobox"
      style={{ maxWidth: 420 }}
      dropdownStyle={{ maxHeight: 260 }}
      inputStyle={{ borderColor: 'var(--brand-sapphire-60)' }}
    >
      <ComboList items={items} isSearch />
    </ComboBox>
  </>
);`,S=`import { ComboBox, ComboList } from '@nlmk/ds-2.0';

const items = [
  { id: '1', label: 'Пункт 1' },
  { id: '2', label: 'Пункт 2' },
  { id: '3', label: 'Пункт 3' }
];

export default App = () => (
  <div style={{ height: 260, overflow: 'hidden' }}>
    <ComboBox
      label="Resize и портал"
      isResize
      withPortal
      portalContainerId="root"
      dropdownWidth={420}
      dropdownMinHeight={180}
    >
      <ComboList items={items} isSearch />
    </ComboBox>
  </div>
);`,v=()=>{const[t,i]=l.useState(0);return o.jsxs("div",{className:r.wrapper,children:[o.jsx(x,{title:"ComboBox",description:"ComboBox предназначен для выбора значений из выпадающего списка с расширенными сценариями работы. Компонент поддерживает поиск, множественный выбор, группировку, дерево и настройку поведения dropdown.",isStable:!0,codeLink:B,figmaLink:s}),o.jsx("div",{className:r.tabs,children:o.jsxs(m,{children:[o.jsx(m.Tab,{label:"Разработчику",active:t===0,onClick:()=>i(0)}),o.jsx(m.Tab,{label:"Дизайнеру",active:t===1,onClick:()=>i(1)}),o.jsx(m.Tab,{label:"Тестирование",active:t===2,onClick:()=>i(2)})]})}),t===0&&o.jsxs(o.Fragment,{children:[o.jsx(e,{minHeight:500,description:"Базовый ComboBox с одиночным выбором.",code:j}),o.jsx(e,{minHeight:500,description:"Множественный выбор с поиском и чекбоксом «Выбрать все».",code:L}),o.jsx(e,{minHeight:500,description:"Группированный список через ComboGroupList.",code:w}),o.jsx(e,{minHeight:500,description:"Древовидный список через ComboTreeList.",code:k}),o.jsx(e,{minHeight:500,description:"Состояние disabled и кастомизация через style/className.",code:y}),o.jsx(e,{minHeight:500,description:"Управление dropdown через isResize, withPortal и размеры.",code:S}),o.jsx(h,{argsTypes:u})]}),t===1&&o.jsx(C,{url:s}),t===2&&o.jsx(g,{componentName:"ComboBox"})]})};function p(t){return o.jsxs(o.Fragment,{children:[o.jsx(a,{title:"Components/ComboBox/Info",component:f,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=594-273525"},jest:["ComboBox.test.tsx"]}}),`
`,o.jsx(d,{of:c}),`
`,o.jsx(n,{children:o.jsx(v,{})})]})}function Dt(t={}){const{wrapper:i}={...b(),...t.components};return i?o.jsx(i,{...t,children:o.jsx(p,{...t})}):p()}export{Dt as default};
