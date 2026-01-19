import{r as a,j as e,m as n,S as c,U as d}from"./iframe-tXE4xoYc.js";import{useMDXComponents as l}from"./index-BU2Hc1BN.js";import{T as u}from"./index-BDyN5Bhv.js";import{DecoratorDefault as k}from"./Decorator.stories-DX_mk-19.js";import{s as m,H as f,E as r}from"./Header-D7Lkw1fr.js";import{F as T}from"./FigmaEmbed-DGce_rmk.js";import{P as h}from"./Properties-3Caa_vUq.js";import{T as o}from"./index-BdAkzp84.js";import{a as x}from"./argsTypes-By1lE0DO.js";import"./preload-helper-PPVm8Dsz.js";import"./generateUUID-M57HTP56.js";import"./hook-CbfYfmAI.js";import"./useFloatingReferenceSync-BoqrGUtC.js";import"./index-CnPKv_iQ.js";import"./colorsMapping-C6bFIk14.js";import"./index-UIqxTLHU.js";import"./index-IJbXH1LS.js";import"./clsx-B-dksMZM.js";import"./index-mWxT_Pnt.js";import"./types-TdnjS80C.js";import"./floating-ui.react-rIU8UbdJ.js";import"./index-q3_oAMiW.js";import"./sizeMappingInput-XXScYzk1.js";import"./index-BavAFXG7.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-C-sXzJO7.js";import"./24-CmyNkjMd.js";import"./24-DOosEbor.js";import"./24-BWrbmGeu.js";import"./24-BbCg_oVA.js";import"./24-DRYMupHO.js";import"./24-CzQL-KAt.js";import"./24-DKRMhkuJ.js";import"./24-BGmf7Yvo.js";import"./24-C3aWb0fW.js";import"./16-5OD6xOBP.js";import"./24-DhcVhNlZ.js";import"./24-CGaTDQAV.js";import"./16-DrGrHANJ.js";import"./16-3aq9OzD6.js";import"./16-Caqr7FMr.js";import"./index-BJ8dPBsg.js";import"./index-DnvHMcnj.js";import"./index-BQHkH-Oh.js";import"./index-D0fx2znr.js";import"./sizesMapping-D8QavrGc.js";import"./index-D3OER6c8.js";import"./index-DfJPKXXV.js";import"./index-CjsErmK6.js";import"./index-Cx9ne2MY.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=407-30495&t=EnvIMGos3m33avAX-1",b="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/TimePicker",P=()=>{const[t,i]=a.useState(0);return e.jsxs("div",{className:m.wrapper,children:[e.jsx(f,{title:"TimePicker",description:"TimePicker позволяет пользователям выбирать время или период времени. Использует двухуровневую валидацию (IMask + onBlur) для предотвращения ввода невалидных значений (например, 12:95). Поддерживает различные форматы и диапазоны времени.",isStable:!0,codeLink:b,figmaLink:s}),e.jsx("div",{className:m.tabs,children:e.jsxs(o,{children:[e.jsx(o.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>i(0)}),e.jsx(o.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>i(1)}),e.jsx(o.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>i(2)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(r,{height:300,description:"Основной TimePicker с кнопкой сброса. Использует controlled подход - требует внешний state и обработчик onReset.",code:`import { TimePicker } from '@nlmk/ds-2.0';
import { useState } from 'react';

const App = () => {
  const [time, setTime] = useState<Date | undefined>(new Date());

  return (
    <TimePicker
      value={time}
      onChange={setTime}
      reset={true}
      onReset={() => setTime(undefined)}
    />
  );
};

export default App;
`}),e.jsx(r,{height:300,description:"TimePicker с лейблом. IMask автоматически блокирует ввод невалидных значений (например, 25:30 или 12:95).",code:`import { TimePicker } from '@nlmk/ds-2.0';
import { useState } from 'react';

const App = () => {
  const [time, setTime] = useState<Date | undefined>(new Date());

  return (
    <TimePicker
      label="Время"
      value={time}
      onChange={setTime}
    />
  );
};

export default App;
`}),e.jsx(r,{height:300,description:"Отключенный TimePicker. Не доступен для взаимодействия.",code:`import { TimePicker } from '@nlmk/ds-2.0';
import { useState } from 'react';

const App = () => {
  const [time, setTime] = useState<Date | undefined>(new Date());

  return (
    <TimePicker
      disabled
      value={time}
      onChange={setTime}
    />
  );
};

export default App;
`}),e.jsx(r,{height:300,description:"TimePicker с withPortal={true}. Критично для использования в таблицах или контейнерах с overflow:hidden.",code:`import { TimePicker } from '@nlmk/ds-2.0';
import { useState } from 'react';

const App = () => {
  const [time, setTime] = useState<Date | undefined>(new Date());

  return (
    <div style={{ overflow: 'hidden', height: '200px' }}>
      {/* withPortal предотвращает обрезку выпадающей панели */}
      <TimePicker
        value={time}
        onChange={setTime}
        withPortal={true}
        label="Время (с порталом)"
      />
    </div>
  );
};

export default App;
`}),e.jsx(h,{argsTypes:x})]}),Number(t)===1&&e.jsx(T,{url:s})]})};function p(t){return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Components/TimePicker/Info",component:u,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=407-30495&t=EnvIMGos3m33avAX-1"},jest:["TimePicker.test.tsx"]}}),`
`,e.jsx(c,{of:k}),`
`,e.jsx(d,{children:e.jsx(P,{})})]})}function ge(t={}){const{wrapper:i}={...l(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(p,{...t})}):p()}export{ge as default};
