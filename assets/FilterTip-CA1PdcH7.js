import{r as n,j as t,m as l,S as a,U as c}from"./iframe-CE_JzATH.js";import{useMDXComponents as d}from"./index--LKfDmxm.js";import{F as x}from"./index-DtSKDO7f.js";import{DecoratorDefault as f}from"./Decorator.stories-Cj-tg-7N.js";import{s as p,H as u,E as e}from"./Header-CEastCIP.js";import{F as T}from"./FigmaEmbed-CqtAEVAd.js";import{P as F,T as b}from"./Tests-BOPY5pZ5.js";/* empty css               */import{T as o}from"./index-DR6oWFtr.js";import{a as j}from"./argsTypes-DvLI_Snc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BBICZI1L.js";import"./index-Vjux8dVh.js";import"./clsx-B-dksMZM.js";import"./index-CuFOreg9.js";import"./index-MfvAP8aB.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-CrxSrIcc.js";import"./24-0Dk1wnnD.js";import"./24-BBq2cK-Y.js";import"./24-DEt0-nuC.js";import"./24-Cd5pTj28.js";import"./24-DGYmTzFV.js";import"./24-HbFaW7H_.js";import"./24-BQMnublh.js";import"./24-DzFwSmYQ.js";import"./24-J6XSru0N.js";import"./16-DWPiS2iU.js";import"./24-CjAn70IH.js";import"./24-D38MhcLh.js";import"./16-BIs1fvk9.js";import"./16-p0CPjrKD.js";import"./16-BkTHhwnS.js";import"./index-D_aCbd9C.js";import"./index-BmicXPVL.js";import"./index-vmgVWNov.js";import"./index-14rW-JY7.js";import"./index-DqQz5Bh6.js";import"./index-DYU6s7CX.js";import"./index-CLTGTTU8.js";import"./index-BGKZjWkn.js";import"./index-C9knVUuX.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-BFAgnURa.js";import"./index-BzyAc0E-.js";import"./index-2jg-3oeM.js";import"./index-Dg5Lxpt5.js";import"./index-BiitYh94.js";import"./index-DTnW7Fop.js";import"./types-TdnjS80C.js";import"./floating-ui.react-BU5fnxMH.js";import"./sizesMapping-D8QavrGc.js";import"./index-Dlf_Ao8T.js";import"./index-DCIzctxN.js";import"./index-D9YxWY4C.js";import"./index-Os9u-Jz6.js";import"./index-BaSH6PPb.js";import"./index-Bz3uj4QG.js";import"./index-BvCaACBB.js";import"./index-1zCxhXDP.js";import"./index-C1XFyCw_.js";import"./index-3C1lTiZm.js";import"./index-zLxCaNl1.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-B7kzxF9t.js";import"./useFloatingReferenceSync-B_aNqrAc.js";import"./index-e5L8QLyK.js";import"./index-GJu7X8CR.js";import"./index-CIwcf8Lj.js";import"./index-B98ISFmk.js";import"./index-Bd3jAiyn.js";import"./index-Dg1nWoIh.js";import"./index-DFbFAj2G.js";import"./index-Y_CVE_H3.js";import"./index-8oyMVyrk.js";import"./index-QZq9zOpZ.js";import"./index-CT3rs89l.js";import"./index-CAijYJEe.js";import"./index-CEXEVLrc.js";import"./index-pURGVU60.js";import"./index-D1Sci6D5.js";import"./index-kWQnP7zC.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-tXN-kzru.js";import"./index-DCIrx6NW.js";import"./index-DHVZe4vO.js";import"./index-DuLnj-te.js";import"./index-C7v9s-B0.js";import"./index-y0ewvpMP.js";import"./index-OcscY6If.js";import"./index-DjVMJKcc.js";import"./index-TCeJA5jN.js";import"./index-DPX3eImA.js";import"./index-DNC3PuSz.js";import"./index-CIs5j9YL.js";import"./index-Bie4xbHL.js";import"./index-WRw5KxXj.js";import"./index-DYl6OFvJ.js";import"./ComboBox-KBNGbY8a.js";import"./index-BdsesjiO.js";import"./TreeList-t_ASH-u2.js";import"./copyToClipboard-DB_KM_BY.js";const m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=408-44964",g=`import { FilterTip } from '@nlmk/ds-2.0';

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
