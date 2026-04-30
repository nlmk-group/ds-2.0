import{r as l,j as o,m as a,S as d,U as n}from"./iframe-BYEcINU_.js";import{useMDXComponents as b}from"./index-Bpsqjrzl.js";import{DecoratorDefault as c}from"./Decorator.stories-BJBADL9m.js";import{s as r,H as x,E as e}from"./Header-QIn0U31P.js";import{F as C}from"./FigmaEmbed-DhnyYYAw.js";import{P as h,T as g}from"./Tests-BIMEJe_y.js";/* empty css               */import{T as m}from"./index-nj7VEw_R.js";import{a as u}from"./argsTypes-DR8YX4TM.js";import{C as f}from"./ComboBox-4epN55r0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-XP9rVAlC.js";import"./index-CTms4VQ3.js";import"./16-BbOPmjLm.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-CaNWwqgI.js";import"./index-DEnU3uQc.js";import"./index-CrpGn3Cf.js";import"./index-aRgZryTI.js";import"./32-BcLCWGHn.js";import"./32-DEU7E1yO.js";import"./24-nElrukLD.js";import"./24-CuYChjrW.js";import"./24-Bg-YkJof.js";import"./24-DOSHn3uj.js";import"./24-qZuYAR8B.js";import"./24-Mxvma0Zx.js";import"./24-wPS-GG8M.js";import"./24-mlyJft-U.js";import"./24-DTKLnnJ8.js";import"./24-CSKlV1Hw.js";import"./24-BeWDWat7.js";import"./16-DVw9RX5j.js";import"./16-BucT6FLY.js";import"./16-CjgRgEbF.js";import"./16--L8JfMjs.js";import"./16-B5oEirVJ.js";import"./index-BQVhB4iE.js";import"./index-D2JaD0OQ.js";import"./index-U8G7M_Zs.js";import"./index-DH6ASFUC.js";import"./index-si5AuEoF.js";import"./index-COgWJkER.js";import"./colorsMapping-C6bFIk14.js";import"./index-BYOusy-M.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-CK0J7sHo.js";import"./useFloatingReferenceSync-CsYvYhZU.js";import"./index-D6OuuQjE.js";import"./index-DzEvNTCJ.js";import"./types-TdnjS80C.js";import"./index-DZzZHuYh.js";import"./MenuItem-DdgCvPH4.js";import"./floating-ui.react-_Zuln8if.js";import"./sizesMapping-D8QavrGc.js";import"./index-Bzsm1X0Z.js";import"./index-CyD8HQ96.js";import"./index-COznie4U.js";import"./index-ZNnHXGDD.js";import"./index-BC0Sks76.js";import"./index-uwXEqcGR.js";import"./index-BBfWv7b0.js";import"./index-C0g5OMD9.js";import"./index-CojpXGg7.js";import"./index-C39GlgiC.js";import"./index-CaLPl1qK.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-CA87DmbL.js";import"./index-CkchZA1S.js";import"./index-C3exR97g.js";import"./index-7nLr9Lje.js";import"./index-7AUFuuQ2.js";import"./index-DY9r7tva.js";import"./index-D0bmCGQd.js";import"./index-8w1in6Dy.js";import"./index-CadNeeou.js";import"./index-DEdwYyQK.js";import"./index-dQ62oyVP.js";import"./index-BLillJGO.js";import"./index-BiaIOUue.js";import"./index-BUTff1zv.js";import"./index-D1Kdw1Ur.js";import"./index-CMCaOPVQ.js";import"./index-De9lbcqo.js";import"./index-CkFogjvg.js";import"./index-DNO6SmUQ.js";import"./index-atP-xhLu.js";import"./index-NFm-qVra.js";import"./index-CCZFPEUL.js";import"./index-CgIvrtde.js";import"./index-Ch64POBU.js";import"./index-DCa7h74_.js";import"./index-CWpqocMb.js";import"./index-D0MIXxpi.js";import"./index-BQH0MRqt.js";import"./index-Dbavy875.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-2AxAz-gb.js";import"./index-CVi-cyUF.js";import"./index-YYfSsAzR.js";import"./index-YVaISHls.js";import"./index-CQY7sNNS.js";import"./index-Bbvb6W_F.js";import"./index-DOV__V4z.js";import"./index-QJ3E8HAN.js";import"./index-ByTrgoFe.js";import"./index-Brevh8m6.js";import"./constants-C9-wC4hs.js";import"./TreeList-DI_XRzGG.js";import"./copyToClipboard-DB_KM_BY.js";import"./index-7YhxVk_9.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=594-273525",B="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ComboBox",j=`import { ComboBox, ComboList } from '@nlmk/ds-2.0';

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
