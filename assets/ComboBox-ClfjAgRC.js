import{r as l,j as o,m as a,S as d,U as n}from"./iframe-BdOpgzrS.js";import{useMDXComponents as b}from"./index-DJy09qRq.js";import{DecoratorDefault as c}from"./Decorator.stories-C28-sXLg.js";import{s as r,H as x,E as e}from"./Header-DXi6_hVE.js";import{F as C}from"./FigmaEmbed-Chyrs9ER.js";import{P as h,T as g}from"./Tests-Oc7S5ZKL.js";/* empty css               */import{T as m}from"./index-BSn6HQzr.js";import{a as u}from"./argsTypes-DR8YX4TM.js";import{C as f}from"./ComboBox-C09mBvpI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-CLAZw8N4.js";import"./index-CJQtOKfQ.js";import"./16--IL1VHaj.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-DVTrHQKM.js";import"./index-B7PkToN1.js";import"./index-BKLHPlSR.js";import"./index-OONZivDn.js";import"./32-ChopWT_z.js";import"./32-ChxPjCDA.js";import"./24-BmvAwPvh.js";import"./24-CV0PNOey.js";import"./24-CRWfoU4Z.js";import"./24-DOFnqipN.js";import"./24-PBHXpKVH.js";import"./24-CBMXdyoG.js";import"./24-BVmNVZn4.js";import"./24-WjLrdny4.js";import"./24-K0yWzWKj.js";import"./24-BznlLpgc.js";import"./24-VDHIr0Dv.js";import"./16-CEnZ3psN.js";import"./16-C2Q8nrRG.js";import"./16-Du9yZ744.js";import"./16-DeFUxAIB.js";import"./16-Cnsgcg9g.js";import"./index-vv3ZnJjs.js";import"./index-CRHD1rp7.js";import"./index-BYrUxwbP.js";import"./index-Ck-XN-ge.js";import"./index-Eg_8IEpf.js";import"./index-BCWgfUlh.js";import"./colorsMapping-C6bFIk14.js";import"./index-D7hqcCmB.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-BO8DxY49.js";import"./useFloatingReferenceSync-DqthvRxQ.js";import"./index-CWizWQ-f.js";import"./index-CeyXG_zt.js";import"./types-TdnjS80C.js";import"./index-BGK3vMRu.js";import"./MenuItem-lW_S4VfZ.js";import"./floating-ui.react-B81N47Rb.js";import"./sizesMapping-D8QavrGc.js";import"./index-BXEDdhur.js";import"./index-Bo3DQfvQ.js";import"./index-BAERPvu_.js";import"./index-4jA536FU.js";import"./index-B-NoUIZI.js";import"./index-CL6fgpqk.js";import"./index-CoT1f0LI.js";import"./index-Bua5qXkb.js";import"./index-DDPpfVml.js";import"./index-B43IYv7N.js";import"./index-imlWOh4l.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-CYye5MAA.js";import"./index-WpmEvsZB.js";import"./index-C1BAN_9s.js";import"./index-B6XbamL1.js";import"./index-BN5r_AV-.js";import"./index-C8MSIeIN.js";import"./index-B0j95XIR.js";import"./index-CeFYkyd7.js";import"./index-R9IHYOO5.js";import"./index-DPvTpWrG.js";import"./index-DkWAreVa.js";import"./index-1Qe_4yAi.js";import"./index-BH6jN-u0.js";import"./index-CUsaH7j6.js";import"./index-jvRyrw0B.js";import"./index-BRrp3xVQ.js";import"./index-ljDOKoqn.js";import"./index-DHYk6Txp.js";import"./index-D9BCvHbX.js";import"./index-k1EAulh0.js";import"./index-C2cVSUod.js";import"./index-D7Mf3A5i.js";import"./index-9Dq95OiO.js";import"./index-Cl4xrWxE.js";import"./index-CrczCUl4.js";import"./index-DcZWdIUK.js";import"./index-DLQT8wYk.js";import"./index-BI0qJ3c6.js";import"./index-B2RalwUT.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-BYJCkP-K.js";import"./index-D-LNKzPH.js";import"./index-C0Y8rlI2.js";import"./index-y60vd0es.js";import"./index-BSXV1Fg-.js";import"./index-G-edGsEt.js";import"./index-BYR3WDA_.js";import"./index-COjirL-c.js";import"./index-B_UPuCF1.js";import"./index-5UE0QfQE.js";import"./constants-DdJvlSUO.js";import"./TreeList-CxWBdKx_.js";import"./copyToClipboard-DB_KM_BY.js";import"./index-Dse-RVNj.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=594-273525",B="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ComboBox",j=`import { ComboBox, ComboList } from '@nlmk/ds-2.0';

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
