import{r as l,j as o,m as a,S as d,U as n}from"./iframe-DaRyOQD4.js";import{useMDXComponents as b}from"./index-BgkguWCX.js";import{DecoratorDefault as c}from"./Decorator.stories-Bdka78jy.js";import{s as r,H as x,E as e}from"./Header-DystUPED.js";import{F as C}from"./FigmaEmbed-BGn6m26F.js";import{P as h,T as g}from"./Tests-CYj1CAIQ.js";/* empty css               */import{T as m}from"./index-gu4HNhdT.js";import{a as u}from"./argsTypes-DR8YX4TM.js";import{C as f}from"./ComboBox-BsvZu-Eq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-CkK1Msss.js";import"./index-Dvw5dMma.js";import"./16-CvdS6GvX.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-CNjWEkXp.js";import"./index-CmkzyLkL.js";import"./index-CBZ_keLy.js";import"./index-7E4T5yQV.js";import"./32-BBsCXdKC.js";import"./32-BjfT3i4e.js";import"./24-CISCaQ63.js";import"./24-60eD6Z-I.js";import"./24-qK0x_3Ma.js";import"./24-B-wOqD5j.js";import"./24-B-h9yLtA.js";import"./24-B_dTG4ub.js";import"./24-D0g0E23x.js";import"./24-gNed2SUN.js";import"./24-C175QdoB.js";import"./24-BGR-3ALd.js";import"./24-DFKe0nyJ.js";import"./16-0E3xB5Tl.js";import"./16-lUiuHRHz.js";import"./16-rE0E2ssb.js";import"./16-BvoUreEM.js";import"./16-BqEOmvvO.js";import"./index-BZ_Hg5x5.js";import"./index-BXFNtNVO.js";import"./index-Chib2uHL.js";import"./index-D8NQ-OjL.js";import"./index-DEiYNjzB.js";import"./index-DdSJm2q8.js";import"./colorsMapping-C6bFIk14.js";import"./index-CcSpOCs_.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-Cf3JpTrJ.js";import"./useFloatingReferenceSync-e0QbxRQz.js";import"./index-B1k1NS-B.js";import"./index-gWNSPh3n.js";import"./types-TdnjS80C.js";import"./index-zgHibT2s.js";import"./MenuItem-DG7Boi2a.js";import"./floating-ui.react-CBGLEHeQ.js";import"./sizesMapping-D8QavrGc.js";import"./index-DU1S_Fke.js";import"./index-BS7WuNoV.js";import"./index-Bhkau184.js";import"./index-BXCEi6ek.js";import"./index-BS3dtI07.js";import"./index-DNRaPIJY.js";import"./index-nmEIrJRc.js";import"./index-XqCM6NuH.js";import"./index--gKAIURH.js";import"./index-C0zJEJdb.js";import"./index-PTZ9yk0y.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-VmrMNmoE.js";import"./index-Bm7gwrWd.js";import"./index-yBLZkpey.js";import"./index-Ct4FpV06.js";import"./index-60xW7gWZ.js";import"./index-CTCWt51c.js";import"./index-Dhp36KE2.js";import"./index-DPciguLF.js";import"./index-WmXQrkmE.js";import"./index-At6H3_hV.js";import"./index-B7ZrQXoO.js";import"./index-Xb4KH60s.js";import"./index-DBz_mHH6.js";import"./index-3og25uON.js";import"./index-BmyIjWMa.js";import"./index-B1-FWV8A.js";import"./index-CzJ2Yzrx.js";import"./index-BOIqM1VF.js";import"./index-Dbbtu5hK.js";import"./index-D3a3kz2n.js";import"./index-DA40l4_1.js";import"./index-C1bYJrqZ.js";import"./index-CM0OZ7FR.js";import"./index-DsgmYFjz.js";import"./index-C-tPqMqK.js";import"./index-97oQTlpb.js";import"./index-C2vyTmKj.js";import"./index-Ce0aIdaY.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-DCWLVNT4.js";import"./index-DJzDGIrh.js";import"./index-11gloAds.js";import"./index-DQw_TNDK.js";import"./index-olQ11wq4.js";import"./index-B2WtkI7A.js";import"./index-BM0Ab2WA.js";import"./index-BZgFgbpd.js";import"./index-Dxzj7Vk2.js";import"./index-DRVVT9BA.js";import"./index-D3Fscyv-.js";import"./constants-rrTgojkT.js";import"./TreeList-BR8MQBpg.js";import"./copyToClipboard-DB_KM_BY.js";import"./index-NjTwKeYa.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=594-273525",B="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ComboBox",j=`import { ComboBox, ComboList } from '@nlmk/ds-2.0';

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
