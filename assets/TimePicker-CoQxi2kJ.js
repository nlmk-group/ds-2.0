import{r as a,j as e,f as n,S as c,U as d}from"./iframe-CxLN9ksd.js";import{useMDXComponents as l}from"./index-CeChe1UL.js";import{T as u}from"./index-CtX01H_7.js";import{DecoratorDefault as f}from"./Decorator.stories-DWPS1QvQ.js";import{s as m,H as k,E as r}from"./Header-B1Tht5jw.js";import{F as T}from"./FigmaEmbed-gwemKUEC.js";import{P as h}from"./Properties-Be6XSfnk.js";import{T as o}from"./index-Bs6EWGDb.js";import{a as x}from"./argsTypes-By1lE0DO.js";import"./preload-helper-PPVm8Dsz.js";import"./hook-D8gSpNi_.js";import"./useFloatingReferenceSync-DscYnpdV.js";import"./index-DcM-4FYU.js";import"./colorsMapping-C6bFIk14.js";import"./index-LyR6p6RN.js";import"./index-CORENSTS.js";import"./clsx-B-dksMZM.js";import"./index-CYd80pzx.js";import"./types-TdnjS80C.js";import"./floating-ui.react-B9Baa2-L.js";import"./index-BN0H6Yla.js";import"./sizeMappingInput-XXScYzk1.js";import"./index-M8Uj9-kW.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-B2BQHND4.js";import"./24-BGXSSISX.js";import"./24-MJ8JdQQ9.js";import"./24-2IXSosOm.js";import"./24-Dlyxu4_q.js";import"./24-BFZg9aq0.js";import"./24-DMGI7E0m.js";import"./24-voYW8sKN.js";import"./24-DMqNa1pl.js";import"./24-DJtALV7Z.js";import"./16-CchysOzF.js";import"./24-CJ9IDGZV.js";import"./24-CbC-8o3Y.js";import"./16-kcyE2NZr.js";import"./16-DRyq0qh_.js";import"./16-D_ueUpcb.js";import"./generateUUID-M57HTP56.js";import"./lodash-D8MmIXKa.js";import"./index-DUSNaC2m.js";import"./index-Bz6VJdOb.js";import"./index-C9nyZABc.js";import"./index-BnDPEMC8.js";import"./sizesMapping-D8QavrGc.js";import"./index-IRxTPoEY.js";import"./index-D3DoxRCP.js";import"./index-BniRS5vs.js";import"./index-CT_Q_AhL.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=407-30495&t=EnvIMGos3m33avAX-1",b="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/TimePicker",P=()=>{const[t,i]=a.useState(0);return e.jsxs("div",{className:m.wrapper,children:[e.jsx(k,{title:"TimePicker",description:"TimePicker позволяет пользователям выбирать время или период времени. Использует двухуровневую валидацию (IMask + onBlur) для предотвращения ввода невалидных значений (например, 12:95). Поддерживает различные форматы и диапазоны времени.",isStable:!0,codeLink:b,figmaLink:s}),e.jsx("div",{className:m.tabs,children:e.jsxs(o,{children:[e.jsx(o.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>i(0)}),e.jsx(o.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>i(1)}),e.jsx(o.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>i(2)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(r,{height:300,description:"Основной TimePicker с кнопкой сброса. Использует controlled подход - требует внешний state и обработчик onReset.",code:`import { TimePicker } from '@nlmk/ds-2.0';
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
`,e.jsx(c,{of:f}),`
`,e.jsx(d,{children:e.jsx(P,{})})]})}function je(t={}){const{wrapper:i}={...l(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(p,{...t})}):p()}export{je as default};
