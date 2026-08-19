import{r as l,j as o,m as a,S as d,U as n}from"./iframe-CiFytELZ.js";import{useMDXComponents as b}from"./index-DybNXUjF.js";import{DecoratorDefault as c}from"./Decorator.stories-BzItgCqc.js";import{s as r,H as x,E as e}from"./Header-X6Kr5SHJ.js";import{F as C}from"./FigmaEmbed-C2oXb4D3.js";import{P as h,T as g}from"./Tests-BcceQP3J.js";/* empty css               */import{T as m}from"./index-BQkij8xm.js";import{a as u}from"./argsTypes-DR8YX4TM.js";import{C as f}from"./ComboBox-PS9Y9Xue.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-yhpuehNm.js";import"./index-AScBX7ch.js";import"./16-DE4viI8O.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-DJEYtQIn.js";import"./index-Caup2jln.js";import"./index-DawP55CX.js";import"./index-ageiqw5d.js";import"./32-BUE7duXK.js";import"./32-dCVSFMeK.js";import"./24-CEYPuBp0.js";import"./24-DMYK_POk.js";import"./24-Bt83Uokx.js";import"./24-Cg37IYki.js";import"./24-URZj1P3S.js";import"./24-C7n6mi1f.js";import"./24-B6ivgZpd.js";import"./24-RrFXbNlX.js";import"./24-DG7ZIblO.js";import"./24-C2S-g5KW.js";import"./24-r-rrcgWc.js";import"./16-BfVH5IGj.js";import"./16-CdjU_4JV.js";import"./16-BT9sIG7U.js";import"./16-CqiQVPWz.js";import"./16-D7g-PMEy.js";import"./index-Cw2HZq9h.js";import"./index-g6EAEksG.js";import"./index-BxUgnl0U.js";import"./index-yVptosnr.js";import"./index-DxDzu7P3.js";import"./index-7UQTagkh.js";import"./colorsMapping-C6bFIk14.js";import"./index-DKkLeCla.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-BbS2YyIp.js";import"./useFloatingReferenceSync-BSceUB3Q.js";import"./index-BCkmK5YD.js";import"./index-BbXZCDfz.js";import"./types-TdnjS80C.js";import"./index-DVfkSf50.js";import"./MenuItem-DEzF3Wos.js";import"./floating-ui.react-KcrBVsuh.js";import"./sizesMapping-D8QavrGc.js";import"./index-BA4dGRCH.js";import"./index-D7Enchig.js";import"./index-JoZBJQz1.js";import"./index-Y7pOMNss.js";import"./index-CRJtbCyP.js";import"./index-CJaX5efT.js";import"./index-5rbdE4ra.js";import"./index-D2T7B9nx.js";import"./index-DpPQjWyC.js";import"./index-BtEyOEDh.js";import"./index-C-AQ4SnI.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-DH6FMXCn.js";import"./index-DJ0iMoCC.js";import"./index-IX9qaxFo.js";import"./index-BJsQCtoC.js";import"./index-GdPBVw6h.js";import"./index-mDMSBCcD.js";import"./index-BBwGQaN3.js";import"./index-PUDlQz6m.js";import"./index-BKVJajSn.js";import"./index-CtOsqJ6t.js";import"./index-B98CSxRp.js";import"./index-A9JPGDIL.js";import"./index-CswK6oZ4.js";import"./index-BB_iyaOG.js";import"./index-CAlDJVEd.js";import"./index-CdHqNcI6.js";import"./index-B7G0hzPa.js";import"./index-BtVPDrmD.js";import"./index-BFdlLUWB.js";import"./index-C9riXii6.js";import"./index-CwibpBsN.js";import"./index-DQFKTQjB.js";import"./index-DaZRXyVS.js";import"./index-3AXam_x1.js";import"./index-Dhsf1Its.js";import"./index-BBOasYPk.js";import"./index-Ce4DEavg.js";import"./index-B-uV3fk6.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-0qRpJbl9.js";import"./index-CTO_m6qR.js";import"./index-Co7ZUFcE.js";import"./index-DoIF5vPd.js";import"./index-DptaoNrR.js";import"./index-C3SBMNpO.js";import"./index-DvWfCBSL.js";import"./index-CcYULIfU.js";import"./index-Daq8v7vG.js";import"./index-Cz_vA1hZ.js";import"./index-BlRSHBC7.js";import"./constants-ClWdtWAL.js";import"./TreeList-77y535wQ.js";import"./copyToClipboard-DB_KM_BY.js";import"./index-CYnbSGsW.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=594-273525",B="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ComboBox",j=`import { ComboBox, ComboList } from '@nlmk/ds-2.0';

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
