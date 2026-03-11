import{r as n,j as t,m as l,S as a,U as c}from"./iframe-DfRM7LXF.js";import{useMDXComponents as d}from"./index-s3G8uf3c.js";import{F as x}from"./index-BvJOeOlN.js";import{DecoratorDefault as f}from"./Decorator.stories-Dc5cDQ_A.js";import{s as p,H as u,E as e}from"./Header-BrYoDfav.js";import{F as T}from"./FigmaEmbed-B7TLU8Q3.js";import{P as F,T as b}from"./Tests-Bl_4nCEK.js";/* empty css               */import{T as o}from"./index-HQdxBngH.js";import{a as j}from"./argsTypes-c0gQk-gk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BBdLC-OA.js";import"./index--nFqMQdT.js";import"./clsx-B-dksMZM.js";import"./index-DINl29EL.js";import"./index-CN5IEPbV.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-Bjn7Co6i.js";import"./24-D-2FQCka.js";import"./24-Bx5Ko4Zf.js";import"./24-DPno0QZj.js";import"./24-CWpuPGUf.js";import"./24-CLWtzJRM.js";import"./24-Cp5qlwo7.js";import"./24-LAGNS7eA.js";import"./24-CSBD1goG.js";import"./24-D3pKJ1t3.js";import"./16-fn2TPoua.js";import"./24-DunoRfpD.js";import"./24-WTey2qPh.js";import"./16-B4jpe3eU.js";import"./16-UKcUYuG7.js";import"./16-BAUAAMRf.js";import"./index-B2VJ83In.js";import"./index-CbWBwQI3.js";import"./index-BRJ-Ua9i.js";import"./index-eg8itsWK.js";import"./index-CqGpx5F6.js";import"./index-D2Kz8Cjc.js";import"./index-DVB7RJDK.js";import"./index-Bbrpw_Ow.js";import"./index-rkxnOxqa.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-BGl-7D4l.js";import"./index-BqE4MY4m.js";import"./index-wON6kCEo.js";import"./index-CRXfl0Vt.js";import"./index-UMg-UgH6.js";import"./index-DZtnbN5A.js";import"./types-TdnjS80C.js";import"./floating-ui.react-CdQVfeSt.js";import"./sizesMapping-D8QavrGc.js";import"./index-DyLcPuXd.js";import"./index-DkFFLpKU.js";import"./index-BRcbigKy.js";import"./index-Bs9bu8w1.js";import"./index-CAWkMWRs.js";import"./index-B6F_DLS2.js";import"./index-D0L1Sk36.js";import"./index-CPQdLsa5.js";import"./index-CJQswicC.js";import"./index-DmFtZ-Ny.js";import"./index-wY5Em-zL.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-nVILX9LA.js";import"./useFloatingReferenceSync-B2OO83Jd.js";import"./index-TH-r5Kbz.js";import"./index-Di10VY84.js";import"./index-CKR5Megx.js";import"./index-Baxn1nZN.js";import"./index-D3rQde2D.js";import"./index-W4qf1pCz.js";import"./index-B7Cg2_me.js";import"./index-BsZ7Kff4.js";import"./index-D2NcEt1k.js";import"./index-DUe44RxZ.js";import"./index-CzpPczJJ.js";import"./index-oHV1kBbR.js";import"./index-ydaVehZ7.js";import"./index-D_2odW5T.js";import"./index-B4s-8p3z.js";import"./index-C6yYWo4G.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-DsM1Nq1m.js";import"./index-S_twP3Il.js";import"./index-C1EDehIY.js";import"./index-BfvSM5Fb.js";import"./index-DTIMN90s.js";import"./index-syqq8EGq.js";import"./index-Dj81d4ZI.js";import"./index-Casca5S3.js";import"./index-Ba4KYGTt.js";import"./index-C6jCapMo.js";import"./index-BzMT43aM.js";import"./index-DsvUz8Pz.js";import"./index-Bk5TUS1W.js";import"./index-DRK0Fag0.js";import"./index-DUBAR20C.js";import"./index-DRVnFPP8.js";import"./ComboBox-Dt4xV1fo.js";import"./index-Cotw6HSH.js";import"./TreeList-k1lhCedt.js";import"./copyToClipboard-DB_KM_BY.js";const m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=408-44964",g=`import { FilterTip } from '@nlmk/ds-2.0';

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
`,t.jsx(c,{children:t.jsx(C,{})})]})}function Ai(i={}){const{wrapper:r}={...d(),...i.components};return r?t.jsx(r,{...i,children:t.jsx(s,{...i})}):s()}export{Ai as default};
