import{r as n,j as t,m as l,S as a,U as c}from"./iframe-B-8SjXGq.js";import{useMDXComponents as d}from"./index-BM0F5ub6.js";import{F as x}from"./index-DTtZr5oI.js";import{DecoratorDefault as f}from"./Decorator.stories-Dr4lnSCK.js";import{s as p,H as u,E as e}from"./Header-Bt2eZ0XI.js";import{F as T}from"./FigmaEmbed-Cp-K0Ho-.js";import{P as F,T as b}from"./Tests-BJxC6M0y.js";/* empty css               */import{T as o}from"./index-lTVAi1na.js";import{a as j}from"./argsTypes-Cf2HMNUK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CgN-9tGr.js";import"./index-BRmunlbh.js";import"./clsx-B-dksMZM.js";import"./index-Dfriq7lO.js";import"./index-DqQiUiOd.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-CnDyPHET.js";import"./24-DwPXEH6E.js";import"./24-2N5QtnbH.js";import"./24-Dnj2eOeL.js";import"./24-nrV1efA2.js";import"./24-CjfWKKEu.js";import"./24-BSP12KOo.js";import"./24-rC0gEzBb.js";import"./24-DxfkYE9X.js";import"./24-CcDcN9Vt.js";import"./16-BNHSjjb0.js";import"./24-CBHgkWPK.js";import"./24-FlXbOQvU.js";import"./16-B09-A838.js";import"./16-Bjal1Kcy.js";import"./16-BDcju3io.js";import"./index-DWjwH6nq.js";import"./index-DcMeZWW2.js";import"./index-SApy96bT.js";import"./index-WkQvqD6p.js";import"./index-1sCEIwws.js";import"./index-D81MGMsd.js";import"./index-O63UzFtM.js";import"./index-BG3v9Uex.js";import"./index-DjGSmZX3.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-BA-hOJmZ.js";import"./index-C0fhG72W.js";import"./index-CVbeuYKL.js";import"./index-CDSure0q.js";import"./index-DLvwH50I.js";import"./index-DHxtbo6p.js";import"./types-TdnjS80C.js";import"./floating-ui.react-D9KZKjfI.js";import"./sizesMapping-D8QavrGc.js";import"./index-aEU1GZqG.js";import"./index-BFb5q96r.js";import"./index-nnfFZ9zh.js";import"./index-CJXb8S3m.js";import"./index-DQp-at3f.js";import"./index-BKV_kQZi.js";import"./index-BsPt_Eeq.js";import"./index-CA4vmu2I.js";import"./index-DmKJBqLb.js";import"./index-BpxvuqRy.js";import"./index-Bwm1RwE7.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-CezGHJxo.js";import"./useFloatingReferenceSync-Dse8FenO.js";import"./index-lbMvjW_5.js";import"./index-BQw9APNC.js";import"./index-BIIYwqts.js";import"./index-gTdR2BgD.js";import"./index-BO_pppR1.js";import"./index-CA8coT2V.js";import"./index-BOvyB9Hg.js";import"./index-D0y26aqM.js";import"./index-nMsf_JLJ.js";import"./index-CbDdcaTf.js";import"./index-Bemzq2Pd.js";import"./index-CZwmGRm1.js";import"./index-BsUh_WOc.js";import"./index-BiLYqWzA.js";import"./index-CRdPa-5u.js";import"./index-DXDnCKkm.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CHI72_Mb.js";import"./index-6SN77Vs_.js";import"./index-J-DZaU2Z.js";import"./index-DRE2VGwx.js";import"./index-pTCHtkWj.js";import"./index-BistaHJu.js";import"./index-CdcbwH8N.js";import"./index-D7Pw4d7U.js";import"./index-B09XZxaV.js";import"./index--AS7wYhz.js";import"./index-XCg4i2Qb.js";import"./index-K1Up07vg.js";import"./index-CCVipuRP.js";import"./index-CYq0uzEC.js";import"./index-D9xdw-kV.js";import"./ComboBox-D53aWZPr.js";import"./index-CIaEAtE8.js";import"./TreeList-u3mntEr0.js";import"./copyToClipboard-DB_KM_BY.js";const m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=408-44964",g=`import { FilterTip } from '@nlmk/ds-2.0';

const App = () => <FilterTip text="ГК Партии" />;
export default App;
`,v=`import { FilterTip } from '@nlmk/ds-2.0';

const App = () => (
  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
    <FilterTip text="Активный фильтр" isActive />
    <FilterTip text="Малый размер" size="s" />
    <FilterTip text="Средний размер" size="m" />
  </div>
);
export default App;
`,h=`import { useState } from 'react';
import { FilterTip } from '@nlmk/ds-2.0';

const App = () => {
  const [isActive, setIsActive] = useState(false);

  const onChange = () => {
    setIsActive(prev => !prev);
  };

  return <FilterTip isActive={isActive} text="ГК Партии" onClick={onChange} />;
};
export default App;
`,A=`import { useState } from 'react';
import { FilterTip } from '@nlmk/ds-2.0';

const App = () => {
  const [filters, setFilters] = useState([
    { id: 'plant', text: 'Площадка' },
    { id: 'shift', text: 'Смена' }
  ]);

  const onDelete = id => {
    setFilters(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      {filters.map(filter => (
        <FilterTip key={filter.id} id={filter.id} text={filter.text} onDelete={onDelete} />
      ))}
    </div>
  );
};
export default App;
`,k=`import { FilterTip } from '@nlmk/ds-2.0';

const App = () => (
  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
    <FilterTip text="Только чтение" isWithoutCancelIcon />
    <FilterTip text="Недоступен" isDisabled />
  </div>
);
export default App;
`,C=()=>{const[i,r]=n.useState(0);return t.jsxs("div",{className:p.wrapper,children:[t.jsx(u,{title:"FilterTip",description:"FilterTip отображает активные фильтры и поддерживает состояния выбора, удаления и блокировки. Компонент подходит для визуализации выбранных параметров в фильтрах и поиске.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/FilterTip",figmaLink:m}),t.jsx("div",{className:p.tabs,children:t.jsxs(o,{children:[t.jsx(o.Tab,{label:"Разработчику",active:Number(i)===0,onClick:()=>r(0)}),t.jsx(o.Tab,{label:"Дизайнеру",active:Number(i)===1,onClick:()=>r(1)}),t.jsx(o.Tab,{label:"Тестирование",active:Number(i)===2,onClick:()=>r(2)})]})}),Number(i)===0&&t.jsxs(t.Fragment,{children:[t.jsx(e,{minHeight:180,description:"Базовое отображение фильтра.",code:g}),t.jsx(e,{minHeight:220,description:"Состояние активности и настройка размера компонента.",code:v}),t.jsx(e,{minHeight:250,description:"Переключение активности по клику на компонент.",code:h}),t.jsx(e,{minHeight:320,description:"Удаление фильтра через callback onDelete.",code:A}),t.jsx(e,{minHeight:220,description:"Режим только чтения и заблокированное состояние компонента.",code:k}),t.jsx(F,{argsTypes:j})]}),Number(i)===1&&t.jsx(T,{url:m}),Number(i)===2&&t.jsx(b,{componentName:"FilterTip"})]})};function s(i){return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"Components/FilterTip/Info",component:x,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=408-44964"},jest:["FilterTip.test.tsx"]}}),`
`,t.jsx(a,{of:f}),`
`,t.jsx(c,{children:t.jsx(C,{})})]})}function hi(i={}){const{wrapper:r}={...d(),...i.components};return r?t.jsx(r,{...i,children:t.jsx(s,{...i})}):s()}export{hi as default};
