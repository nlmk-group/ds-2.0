import{r as l,j as o,m as a,S as d,U as n}from"./iframe-B07kYXZc.js";import{useMDXComponents as b}from"./index-CjGunqbw.js";import{DecoratorDefault as c}from"./Decorator.stories-B0DPksjy.js";import{s as r,H as x,E as e}from"./Header-BWIBo_NL.js";import{F as C}from"./FigmaEmbed-BR9XTrZ3.js";import{P as h,T as g}from"./Tests-Ddqg8ow3.js";/* empty css               */import{T as m}from"./index-Cp_gevaj.js";import{a as u}from"./argsTypes-DR8YX4TM.js";import{C as f}from"./ComboBox-Dwq3rPDU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-IzK8PPRw.js";import"./index-6XMOLgd-.js";import"./16-pHftyEs8.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-RqeUiUBw.js";import"./index-0sw3GI3b.js";import"./index-CTuNz-uH.js";import"./index-d9zAT72g.js";import"./32-BZSRNIXj.js";import"./32-QMp9o6yj.js";import"./24-Ccs2DJDL.js";import"./24-z3_ytzpX.js";import"./24-BwrZtwQH.js";import"./24-C1AoWM2r.js";import"./24-BvO12ahp.js";import"./24-B7RF46pu.js";import"./24-Bx4D2aXR.js";import"./24-BEhrtGbq.js";import"./24-BbpZ1avt.js";import"./24-DMSuIbyM.js";import"./24-k5ICTj37.js";import"./16-B0Y2v5mC.js";import"./16-7D2L3psa.js";import"./16-Cw3IW5wm.js";import"./16-TYDaleCn.js";import"./16-DlJ0H2so.js";import"./index-BqdfdXLw.js";import"./index-DlVjw_Iw.js";import"./index-CwfAWzLk.js";import"./index-DOy_CavS.js";import"./index-BoP19oSV.js";import"./index-BejtXQk_.js";import"./colorsMapping-C6bFIk14.js";import"./index-X7iBD8Fn.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-Bwgk6Sxb.js";import"./useFloatingReferenceSync-DbQMH-3c.js";import"./index-Cy6t6Ezk.js";import"./index-COK94YB4.js";import"./types-TdnjS80C.js";import"./index-BBjCAhaL.js";import"./MenuItem-CIRsK8he.js";import"./floating-ui.react-CDNbLsbS.js";import"./sizesMapping-D8QavrGc.js";import"./index-CNDfqOtX.js";import"./index-FEAihz4M.js";import"./index-B_xFOywu.js";import"./index-BQZWcYlM.js";import"./index-BTSmrueN.js";import"./index-DScTDMmh.js";import"./index-SJgOFp9t.js";import"./index-CSqN0A7u.js";import"./index-B2smvyda.js";import"./index-CFAtiP4c.js";import"./index-DbxPhvPc.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-CJa8o8cf.js";import"./index-8nOplKbR.js";import"./index-B0gG98-R.js";import"./index-DgGoLy7y.js";import"./index-J7Njc-PT.js";import"./index-Dklje7JM.js";import"./index-CJa1u0t1.js";import"./index-C6ef_7XJ.js";import"./index-CMWxTnoS.js";import"./index-BoUKONT_.js";import"./index-DJFZ0Zdl.js";import"./index-CHgcPGEu.js";import"./index-Byj_yMGc.js";import"./index-ClDlTn4P.js";import"./index-UkfqzCFW.js";import"./index-fequeZGH.js";import"./index-B1FDloAn.js";import"./index-B8GZkxEV.js";import"./index-DjgiFHNl.js";import"./index-DeLkfcTC.js";import"./index-DafsOy6K.js";import"./index-DKxgdZhf.js";import"./index-BHmgEshV.js";import"./index-D3bQP97z.js";import"./index-mBiA4WNY.js";import"./index-Yuhpfewd.js";import"./index-T2XevpS6.js";import"./index-vOYRqFvw.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CGrwobg7.js";import"./index-DBMo2nZZ.js";import"./index-BEy1wh23.js";import"./index-OtFZfMgj.js";import"./index-D2n5mAtP.js";import"./index-DdwT-0gn.js";import"./index-C3EtJTZW.js";import"./index-BO8JYT_u.js";import"./index-DXXEuEBS.js";import"./index-Ca-tiPXF.js";import"./index-DpajdaDu.js";import"./constants-eZqyrgzW.js";import"./TreeList-g0RzoTR-.js";import"./copyToClipboard-DB_KM_BY.js";import"./index-DqxhwPYk.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=594-273525",B="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ComboBox",j=`import { ComboBox, ComboList } from '@nlmk/ds-2.0';

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
