import{r as l,j as o,m as a,S as d,U as n}from"./iframe-Bo4nALm7.js";import{useMDXComponents as b}from"./index-CNvPJL2u.js";import{DecoratorDefault as c}from"./Decorator.stories-C3iA9RHT.js";import{s as r,H as x,E as e}from"./Header-Bi47uln5.js";import{F as C}from"./FigmaEmbed-CwaUbb0p.js";import{P as g,T as h}from"./Tests-CBVV_6V2.js";/* empty css               */import{T as m}from"./index-DX_ysYvL.js";import{a as u}from"./argsTypes-DR8YX4TM.js";import{C as f}from"./ComboBox-BaEbyY7G.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-CRs1WgNz.js";import"./index-CUIhMP_o.js";import"./16-aMqW81vf.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-BBFxLaJS.js";import"./index-BdFgkFQG.js";import"./index-DcKSVsFY.js";import"./index-DUNZSITs.js";import"./32-DrwGWWyr.js";import"./24-DMCeAA-V.js";import"./24-85pGpdFN.js";import"./24-DO_3r_fK.js";import"./24-BysagIQq.js";import"./24-D5XAI_AH.js";import"./24-BfwlYFIe.js";import"./24-CbRb0MeE.js";import"./24-NHhFZcqx.js";import"./24-gy5ADEN_.js";import"./24-CNhMk3Hk.js";import"./24-Blxmuo2i.js";import"./24-C8hAPZTM.js";import"./16-BT8X9gPM.js";import"./16-CUTQAt8-.js";import"./16-BgwH21Xk.js";import"./16-Bi9OWKG5.js";import"./16-KygOpizh.js";import"./index-cy5tNcXH.js";import"./index-C-nYBGLl.js";import"./index-DMp9sWPh.js";import"./index-D9HYjQb0.js";import"./index-DDZBgTK0.js";import"./index-Bk9qrNZ3.js";import"./colorsMapping-C6bFIk14.js";import"./index-rp9NcFhw.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-yK1xfIEO.js";import"./useFloatingReferenceSync-Bw3HtT9W.js";import"./index-CptZomEK.js";import"./index-BOLRlznn.js";import"./types-TdnjS80C.js";import"./index-i6hjNmeh.js";import"./MenuItem-Bua9EO5H.js";import"./floating-ui.react-C906_DDE.js";import"./sizesMapping-D8QavrGc.js";import"./index-CiQrrBbP.js";import"./index-D1TI5Y5u.js";import"./index-5mM__hj5.js";import"./index-xjOxjbir.js";import"./index-DFP8AFjH.js";import"./index-Yu4XOZcE.js";import"./index-BcObFQTT.js";import"./index-DLmt8FUL.js";import"./index-Cnz5MgXS.js";import"./index-Cb5WN4nC.js";import"./index-CiKGUfYn.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-DLNO0Sc-.js";import"./index-BH32iLo9.js";import"./index-Bi6e8oFp.js";import"./index-DZcyuWQ6.js";import"./index-DCWDgjRo.js";import"./index-R1K1l0qL.js";import"./index-D0KUbv5S.js";import"./index-Cq5dlaEe.js";import"./index-BE9G9-1L.js";import"./index-BMsjPRPD.js";import"./index-BVqpk8_K.js";import"./index-BFSn3M6J.js";import"./index-C-aAOGaG.js";import"./index-B6633_5K.js";import"./index-KMoa1m14.js";import"./index-U5t1T9aa.js";import"./index-BKl3Bi28.js";import"./index-Dg2gdaVK.js";import"./index-DyD8r78B.js";import"./index-t_AVc4Gt.js";import"./index-Bi15G151.js";import"./index-CjPvelGF.js";import"./index-BIa2fxZk.js";import"./index-CVumvtuI.js";import"./index-DF-bDP0l.js";import"./index-BLcxd_1e.js";import"./index-9uW_AGTn.js";import"./index-A-Ir1b2D.js";import"./index-CXj-YKM1.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CNR-ofzU.js";import"./index-DZkdzlJ9.js";import"./index-C9Wj5XRW.js";import"./index-B36MGRax.js";import"./index-B9qru-GC.js";import"./index-pRNUvCjI.js";import"./index-BURAcp9Z.js";import"./index-Cs7fUJPF.js";import"./index-C1iGHzcO.js";import"./index-CgLFB2Hb.js";import"./index-Xr1AR9qo.js";import"./TreeList-DpVIVhWV.js";import"./copyToClipboard-DB_KM_BY.js";import"./index-BWYedRL0.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=594-273525",B="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ComboBox",j=`import { ComboBox, ComboList } from '@nlmk/ds-2.0';

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
);`,v=()=>{const[t,i]=l.useState(0);return o.jsxs("div",{className:r.wrapper,children:[o.jsx(x,{title:"ComboBox",description:"ComboBox предназначен для выбора значений из выпадающего списка с расширенными сценариями работы. Компонент поддерживает поиск, множественный выбор, группировку, дерево и настройку поведения dropdown.",isStable:!0,codeLink:B,figmaLink:s}),o.jsx("div",{className:r.tabs,children:o.jsxs(m,{children:[o.jsx(m.Tab,{label:"Разработчику",active:t===0,onClick:()=>i(0)}),o.jsx(m.Tab,{label:"Дизайнеру",active:t===1,onClick:()=>i(1)}),o.jsx(m.Tab,{label:"Тестирование",active:t===2,onClick:()=>i(2)})]})}),t===0&&o.jsxs(o.Fragment,{children:[o.jsx(e,{minHeight:500,description:"Базовый ComboBox с одиночным выбором.",code:j}),o.jsx(e,{minHeight:500,description:"Множественный выбор с поиском и чекбоксом «Выбрать все».",code:L}),o.jsx(e,{minHeight:500,description:"Группированный список через ComboGroupList.",code:w}),o.jsx(e,{minHeight:500,description:"Древовидный список через ComboTreeList.",code:k}),o.jsx(e,{minHeight:500,description:"Состояние disabled и кастомизация через style/className.",code:y}),o.jsx(e,{minHeight:500,description:"Управление dropdown через isResize, withPortal и размеры.",code:S}),o.jsx(g,{argsTypes:u})]}),t===1&&o.jsx(C,{url:s}),t===2&&o.jsx(h,{componentName:"ComboBox"})]})};function p(t){return o.jsxs(o.Fragment,{children:[o.jsx(a,{title:"Components/ComboBox/Info",component:f,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=594-273525&t=gzSZWyf2gDh6EKRE-4"},jest:["ComboBox.test.tsx"]}}),`
`,o.jsx(d,{of:c}),`
`,o.jsx(n,{children:o.jsx(v,{})})]})}function Ht(t={}){const{wrapper:i}={...b(),...t.components};return i?o.jsx(i,{...t,children:o.jsx(p,{...t})}):p()}export{Ht as default};
