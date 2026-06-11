import{r as l,j as o,m as a,S as d,U as n}from"./iframe-C2j-UzJI.js";import{useMDXComponents as b}from"./index-CnUiOmhK.js";import{DecoratorDefault as c}from"./Decorator.stories-DBUaiF2k.js";import{s as r,H as x,E as e}from"./Header-CS8Ul-7Z.js";import{F as C}from"./FigmaEmbed-BXpMjOC7.js";import{P as h,T as g}from"./Tests-BzXlcuiS.js";/* empty css               */import{T as m}from"./index-j_056LZh.js";import{a as u}from"./argsTypes-DR8YX4TM.js";import{C as f}from"./ComboBox-DginoVkT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-B6CIWydZ.js";import"./index-P9-ONPUI.js";import"./16-049IwUhX.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-BI-uMOwr.js";import"./index-EKbY0pty.js";import"./index-D3z7S9ph.js";import"./index-Cgs4mkOo.js";import"./32-BI8xtbsU.js";import"./32-CJ0o-VIC.js";import"./24-CuDIHvWX.js";import"./24-Cva_JBwh.js";import"./24-KVke6soD.js";import"./24-BrI2by3D.js";import"./24-B5ODlOpD.js";import"./24-OjUQZVfT.js";import"./24-CeOxJPqx.js";import"./24-CHP3BsWo.js";import"./24-CKMbmC7d.js";import"./24-nYvLFNAE.js";import"./24-fUQbig4h.js";import"./16-BMa1J7tj.js";import"./16-SQC_C9px.js";import"./16-BuZexhOR.js";import"./16-DPV7Mbm7.js";import"./16-ChsbLgyw.js";import"./index-D9e0IWV-.js";import"./index-yGzPLeeo.js";import"./index-Cm_Ba9v7.js";import"./index-CtJ4Gng-.js";import"./index-DQwYpJV-.js";import"./index-Cdr1B_yf.js";import"./colorsMapping-C6bFIk14.js";import"./index-DRJdSF_u.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-DubnQ8iR.js";import"./useFloatingReferenceSync-B9wLGTQm.js";import"./index-DniZBuyb.js";import"./index-mz-Fux1b.js";import"./types-TdnjS80C.js";import"./index-DJNN3joX.js";import"./MenuItem-2rBr_5IO.js";import"./floating-ui.react-B-hVAgIp.js";import"./sizesMapping-D8QavrGc.js";import"./index-BlB3gbyn.js";import"./index-BxD8CrGk.js";import"./index-D--QrFHf.js";import"./index-CNN_3_D-.js";import"./index-DKRZUTnz.js";import"./index-BIghOfGk.js";import"./index-BCWSZamI.js";import"./index-dafhDTNg.js";import"./index-DBzDQ-ch.js";import"./index-AnGV7slG.js";import"./index-Dw3c2VVg.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-DZ9AfOMR.js";import"./index-ClEzh6W5.js";import"./index-BpckL99B.js";import"./index-DxVRZIMU.js";import"./index-BYk4kF2r.js";import"./index-p4R0JKbs.js";import"./index-DX43l6l8.js";import"./index-BYjJWpD4.js";import"./index-D_f15RZF.js";import"./index-dHWQfCU4.js";import"./index-B9O-LOtF.js";import"./index-B8k0jrF3.js";import"./index-EikiiVfW.js";import"./index-jAVg74ZN.js";import"./index-DhCmc_-U.js";import"./index-DGfhABU5.js";import"./index-CrdTlCOS.js";import"./index-Cjmo6ss0.js";import"./index-mFyay1Jh.js";import"./index-CWWsFxD8.js";import"./index-CFvqY2-I.js";import"./index-CLjZt-U5.js";import"./index-DxU2rFyU.js";import"./index-BztNwpqP.js";import"./index-C3s3_K12.js";import"./index-BPEi8AAc.js";import"./index-nrqGK399.js";import"./index-D_AdWthx.js";import"./index-CC1rooLK.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-DqweFzDp.js";import"./index-BP9NHWE2.js";import"./index-DTAmrxZ5.js";import"./index-Cia1E6ra.js";import"./index-C7GKKkXm.js";import"./index-D5Omujth.js";import"./index-CzeiuUcG.js";import"./index-CBv4Ru4y.js";import"./index-CCMQkG81.js";import"./index-BmhtsoHO.js";import"./constants-C_zUGLqh.js";import"./TreeList-CmR72Klg.js";import"./copyToClipboard-DB_KM_BY.js";import"./index-B_pht6vj.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=594-273525",B="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ComboBox",j=`import { ComboBox, ComboList } from '@nlmk/ds-2.0';

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
