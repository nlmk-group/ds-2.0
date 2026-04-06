import{r as n,j as t,m as l,S as a,U as c}from"./iframe-adG_7yRG.js";import{useMDXComponents as d}from"./index-Cg8Pf3Pw.js";import{F as x}from"./index-DvU_tOJJ.js";import{DecoratorDefault as f}from"./Decorator.stories-Beo23sgK.js";import{s as p,H as u,E as e}from"./Header-cMHYDLeC.js";import{F as T}from"./FigmaEmbed-BWR-OLCZ.js";import{P as F,T as b}from"./Tests-C1XQ0sNC.js";/* empty css               */import{T as o}from"./index-Yehuvb9K.js";import{a as j}from"./argsTypes-Jj9tmtTa.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DzN3aT-y.js";import"./index-TjqOvBrG.js";import"./clsx-B-dksMZM.js";import"./index-N0HJx9V2.js";import"./index-DC_nQVbx.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-B9XnRb5u.js";import"./24-DrBRk2vS.js";import"./24-BuaVNHQi.js";import"./24-C2G2GNsa.js";import"./24-B4fAX0Ec.js";import"./24-Wv8b4C8A.js";import"./24-GH3yabNM.js";import"./24-BDLYxJUB.js";import"./24-DcUw9JWs.js";import"./24-B-tnmrg_.js";import"./16-LI8OsMJg.js";import"./24-BxGqfMjL.js";import"./24-B0jNPX91.js";import"./16-BTp4GQQG.js";import"./16-D-NUuvME.js";import"./16-C5RTlL5k.js";import"./index-CnTjgQRx.js";import"./index-y2k2yeKx.js";import"./index-C6st097g.js";import"./index-DSz2Fxi8.js";import"./index-BSzISWDV.js";import"./index-Bw5qm4Ov.js";import"./index-75kOkesn.js";import"./index-Dyd59tUY.js";import"./index-BhxlvnnA.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-COV9g-2Q.js";import"./index-DJrVOycg.js";import"./index-Dy1IE1cv.js";import"./index-DtX9i5FK.js";import"./index-B1pHFt52.js";import"./index-CwSciSyB.js";import"./types-TdnjS80C.js";import"./floating-ui.react-7VA0tf7C.js";import"./sizesMapping-D8QavrGc.js";import"./index-Da_FDSx_.js";import"./index-U_RCd_HH.js";import"./index-CMSErBpE.js";import"./index-CzkpZwDT.js";import"./index-BOTgB3bz.js";import"./index-DFAIDFiK.js";import"./index-CkcKW4Vm.js";import"./index-C0jfxf7x.js";import"./index-Csnb6gHF.js";import"./index-BYkQO_14.js";import"./index-CsSUhH6Q.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-Cl0xhJAL.js";import"./useFloatingReferenceSync-D48fx_Db.js";import"./index-D02QEMLS.js";import"./index-CXTleZNA.js";import"./index-aAdctPR4.js";import"./index-onHurrhQ.js";import"./index-QnhurHRA.js";import"./index--d2ZPp2Q.js";import"./index-44u0uri5.js";import"./index-PgA7KtkC.js";import"./index-CzL7ANP0.js";import"./index-DFN2ZEva.js";import"./index-B97cDh6f.js";import"./index-CZ0fPPTA.js";import"./index-BMxGNkbP.js";import"./index-Bj8TCYsg.js";import"./index-KPC3KFCd.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CjWSOjsl.js";import"./index-x0hwq8uq.js";import"./index-BwyGxYsl.js";import"./index-B9-K2gEf.js";import"./index-BkYL4d7S.js";import"./index-Bikxfajv.js";import"./index-xPNSVzye.js";import"./index-Bh4CHjuX.js";import"./index-DCdHhu1d.js";import"./index-DcziJIpL.js";import"./index-CQDvThHr.js";import"./index-BvXrgCCA.js";import"./index-DvSn1Rpa.js";import"./index-DlthScRn.js";import"./index-Dmvi1Ah7.js";import"./index-Bv05uYkg.js";import"./index-Cl4HH77d.js";import"./index-CTk4SyJ7.js";import"./ComboBox-C085h5Nz.js";import"./index-C3nPMNvV.js";import"./TreeList-zjoUqghX.js";import"./copyToClipboard-DB_KM_BY.js";const m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=408-44964",g=`import { FilterTip } from '@nlmk/ds-2.0';

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
