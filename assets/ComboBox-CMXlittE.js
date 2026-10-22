import{r as l,j as o,m as a,S as d,U as n}from"./iframe-DJB5J1Gm.js";import{useMDXComponents as b}from"./index-Ctdy7DcM.js";import{DecoratorDefault as c}from"./Decorator.stories-CLu9BKsp.js";import{s as r,H as x,E as e}from"./Header-DtfMJKVh.js";import{F as C}from"./FigmaEmbed-DChIjyS1.js";import{P as h,T as g}from"./Tests-Dnz3uSUu.js";/* empty css               */import{T as m}from"./index-K-Os3Mkv.js";import{a as u}from"./argsTypes-DR8YX4TM.js";import{C as f}from"./ComboBox-_Uzqzogs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-BnjgdTIo.js";import"./index-CQWz6SQ_.js";import"./16-B11CXHkV.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-BTlJCBjo.js";import"./index-27Xu9hjA.js";import"./index-BcIuHaz8.js";import"./index-CiWWQHM4.js";import"./32-DwqdcbQV.js";import"./32-GoS4XOF1.js";import"./24-OO9CWz_o.js";import"./24-Ds_njt3X.js";import"./24-BJ1WZVGw.js";import"./24-ytII2ozW.js";import"./24-DKN-2bNd.js";import"./24-Bh7XmxMn.js";import"./24-DhKB3mvd.js";import"./24-CU8ORY4X.js";import"./24-Bfhp3VeF.js";import"./24-DGoSPibJ.js";import"./24-DTEPByrl.js";import"./16-DeFHhMUc.js";import"./16-faObEf2T.js";import"./16-CJ_ZU7zi.js";import"./16-CLl9DOT8.js";import"./16-BA4929Um.js";import"./index-DK9ZFXds.js";import"./index-C1EZBTl0.js";import"./index-DL3eBH-P.js";import"./index-Bf78mEfz.js";import"./index-DwnOefxr.js";import"./index-C1y8duee.js";import"./colorsMapping-C6bFIk14.js";import"./index-DRGi1AEL.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-1gFuoChe.js";import"./useFloatingReferenceSync-LO62TbyM.js";import"./index-DcVLIfyB.js";import"./index-aBKmaxH3.js";import"./types-TdnjS80C.js";import"./index-6RvY6v79.js";import"./MenuItem-CYKzA5fc.js";import"./floating-ui.react-BitOEuDU.js";import"./sizesMapping-D8QavrGc.js";import"./index-CsNOcf0o.js";import"./index-CD8aF-OU.js";import"./index-BuTn90Kx.js";import"./index-CHjGJJzX.js";import"./index-DAf--LqM.js";import"./index-1fbwNQxU.js";import"./index-C_3lvTrt.js";import"./index-BiwwAO30.js";import"./index-DFRqr6gV.js";import"./index-BanPx_DE.js";import"./index-srYpiRUO.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-D9jdXbdP.js";import"./index-CWuaVSgJ.js";import"./index-HWoLZMFR.js";import"./index-B-Q4wIzC.js";import"./index-qo-mggsg.js";import"./index-CAA4Qv86.js";import"./index-DrzY2cvO.js";import"./index-B1fAjmi8.js";import"./index-CBalpVvc.js";import"./index-BhKUEEoJ.js";import"./index-CprSx77w.js";import"./index-ySRw8COl.js";import"./index-C3D1rheI.js";import"./index-CC4d2-d6.js";import"./index-BkLOgpm1.js";import"./index-ORro-3F_.js";import"./index-Bn6r3qI-.js";import"./index-DCHl1NWI.js";import"./index-xYIn6EQB.js";import"./index-DvdMLPTa.js";import"./index-CZ9VNNID.js";import"./index-sokDMC8X.js";import"./index-DKSgdMEw.js";import"./index-1lDXSB5o.js";import"./index-BS716PzN.js";import"./index-BoULGum0.js";import"./index-QllAPaHn.js";import"./index-Cem2Ag1w.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CtT43hFd.js";import"./index-DhvmMPlp.js";import"./index-B4DCnhI4.js";import"./index-Wm7yXHG7.js";import"./index-DE9x5FJz.js";import"./index-BU822_AO.js";import"./index-BL3IVkrQ.js";import"./index-C9IwNMpc.js";import"./index-CabIIsyC.js";import"./index-DQOwJSOs.js";import"./index-C7pppfbp.js";import"./constants-DzgFZdqM.js";import"./TreeList-BXBmTHhj.js";import"./copyToClipboard-DB_KM_BY.js";import"./index-SEGUll7-.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=594-273525",B="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ComboBox",j=`import { ComboBox, ComboList } from '@nlmk/ds-2.0';

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
