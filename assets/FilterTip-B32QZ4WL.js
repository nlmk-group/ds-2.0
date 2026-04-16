import{r as n,j as t,m as l,S as a,U as c}from"./iframe-CHHQDVoX.js";import{useMDXComponents as d}from"./index-B1LTtkqD.js";import{F as x}from"./index-CNVqUNB9.js";import{DecoratorDefault as f}from"./Decorator.stories-DNZYnr5K.js";import{s as p,H as u,E as e}from"./Header-C4Gtm_L5.js";import{F as T}from"./FigmaEmbed-pveWd2DR.js";import{P as F,T as b}from"./Tests-B0qmEzAm.js";/* empty css               */import{T as o}from"./index-BTZVm9Y3.js";import{a as j}from"./argsTypes-Dv1vFwFE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DYQTidD-.js";import"./index-C5RO9eqh.js";import"./clsx-B-dksMZM.js";import"./index-CwmmLxy5.js";import"./index-Di9izlqG.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-BrvnL8Hj.js";import"./24-BunGgvie.js";import"./24-CZW84qpr.js";import"./24-O653EECt.js";import"./24-DIXfQiLz.js";import"./24-CD6xrv2j.js";import"./24-CWmeerJT.js";import"./24-Gpv48tUf.js";import"./24-BKM1KU47.js";import"./24-JhZx5C50.js";import"./16-1skbPHrv.js";import"./24-Bp815V0R.js";import"./24-BaGOPWtX.js";import"./16-CjM46jjK.js";import"./16-DL1hQxMw.js";import"./16-CzdCZHDH.js";import"./index-DucDzwTg.js";import"./index-DBfCc0Jn.js";import"./index-XGZPkqjb.js";import"./index-vSQLaUqp.js";import"./index-BEx0Kzll.js";import"./index-CJmLln8K.js";import"./index-CSuovX3X.js";import"./index-BHnpI8kT.js";import"./index-dSmaknGw.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-De57FWCK.js";import"./index-BzIC8vFU.js";import"./index-B-9sGLZR.js";import"./index-BANVVOGG.js";import"./index-DZgd0Qfe.js";import"./index-IsGk3ZIX.js";import"./types-TdnjS80C.js";import"./floating-ui.react-6VfTZOrw.js";import"./sizesMapping-D8QavrGc.js";import"./index-CdHeQl8P.js";import"./index-DxMlVd1J.js";import"./index-DtzYchqB.js";import"./index-D-VDIxFn.js";import"./index-BmtuxTTp.js";import"./index-CMjJ_rHR.js";import"./index-Y1gY5mOJ.js";import"./index-DmLZE8cz.js";import"./index-BI9I3JHz.js";import"./index-8V-zlFGO.js";import"./index-qkZhGjnb.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-01GcG0LR.js";import"./useFloatingReferenceSync-adXaq3Ya.js";import"./index-KI_mLAAh.js";import"./index-BtFeD-3X.js";import"./index-CxXtU9jM.js";import"./index-DD65tyqZ.js";import"./index-3J2s6a0v.js";import"./index-C6OX9F5-.js";import"./index-DvPBu460.js";import"./index-BhlmHl_K.js";import"./index-DicmkMu7.js";import"./index-CRrW3b0X.js";import"./index-G8_-uYaZ.js";import"./index-CC5B16j-.js";import"./index-TWHnUoEw.js";import"./index-a9LznR3Q.js";import"./index-HGD0h4gs.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CWser92f.js";import"./index-CQek3CAN.js";import"./index-p2bUiyyW.js";import"./index-CzvxnUYC.js";import"./index-B1ffb27g.js";import"./index-DdD0P9sc.js";import"./index-DhCDiUD2.js";import"./index-DgjlDdW0.js";import"./index-Ge3Tw8iO.js";import"./index-BGj-2ukp.js";import"./index-Bg5xPX9b.js";import"./index-c_MoiZvK.js";import"./index-U8RdPQdR.js";import"./index-rMcQZCT_.js";import"./index-DqjA2CJI.js";import"./index-DUcChkPA.js";import"./index-Bd568ebt.js";import"./index-CXzLkByr.js";import"./ComboBox-BthUrrTu.js";import"./index-CV7DnwVd.js";import"./TreeList-BLcOMBIT.js";import"./copyToClipboard-DB_KM_BY.js";const m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=408-44964",g=`import { FilterTip } from '@nlmk/ds-2.0';

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
`,t.jsx(c,{children:t.jsx(C,{})})]})}function ki(i={}){const{wrapper:r}={...d(),...i.components};return r?t.jsx(r,{...i,children:t.jsx(s,{...i})}):s()}export{ki as default};
