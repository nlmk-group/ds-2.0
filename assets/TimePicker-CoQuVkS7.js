import{r as a,j as e,f as n,S as c,U as d}from"./iframe-CVAHojaF.js";import{useMDXComponents as l}from"./index-DqTt4rKv.js";import{T as u}from"./index-oMEpn-5b.js";import{DecoratorDefault as f}from"./Decorator.stories-Pdz9giCE.js";import{s as m,H as k,E as r}from"./Header-P01wOpj2.js";import{F as T}from"./FigmaEmbed-g9QqaeRo.js";import{P as h}from"./Properties-1BWy3pzy.js";import{T as o}from"./index-Cyj4_MYZ.js";import{a as x}from"./argsTypes-By1lE0DO.js";import"./preload-helper-PPVm8Dsz.js";import"./hook-Clq0hfHD.js";import"./useFloatingReferenceSync-CrqcXLNv.js";import"./index-dVGqcEPw.js";import"./colorsMapping-C6bFIk14.js";import"./index-x8Y8AkZd.js";import"./index-BHrg75jh.js";import"./clsx-B-dksMZM.js";import"./index-Duoj-8N0.js";import"./types-TdnjS80C.js";import"./floating-ui.react-XV5vKrS5.js";import"./index-Bale6U52.js";import"./sizeMappingInput-XXScYzk1.js";import"./index-BN_w7FjE.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-BGkTw_Iv.js";import"./24-DhWu0U6R.js";import"./24-QBRQbIxz.js";import"./24-DbZB43lA.js";import"./24-CpQC9mRz.js";import"./24-D4AD88CD.js";import"./24-i225Oh9B.js";import"./24-Tgd-_Nih.js";import"./24-BHgrLOFn.js";import"./24-DKX7LJ7g.js";import"./16-D51laVEK.js";import"./24-DoIGH_dx.js";import"./24-BKsua3Hk.js";import"./16-D08SDomb.js";import"./16-R8HovCn5.js";import"./16-DOUHJXJi.js";import"./generateUUID-M57HTP56.js";import"./lodash-DOAXXUjV.js";import"./index-Bivvm1z2.js";import"./index-BHMo20JE.js";import"./index-DbWCe9dP.js";import"./index-BVgG5EPb.js";import"./sizesMapping-D8QavrGc.js";import"./index-zQ6Q3aTj.js";import"./index-DZ_c8xXN.js";import"./index-CqzaiicI.js";import"./index-C8HyjBOv.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=407-30495&t=EnvIMGos3m33avAX-1",b="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/TimePicker",P=()=>{const[t,i]=a.useState(0);return e.jsxs("div",{className:m.wrapper,children:[e.jsx(k,{title:"TimePicker",description:"TimePicker позволяет пользователям выбирать время или период времени. Использует двухуровневую валидацию (IMask + onBlur) для предотвращения ввода невалидных значений (например, 12:95). Поддерживает различные форматы и диапазоны времени.",isStable:!0,codeLink:b,figmaLink:s}),e.jsx("div",{className:m.tabs,children:e.jsxs(o,{children:[e.jsx(o.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>i(0)}),e.jsx(o.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>i(1)}),e.jsx(o.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>i(2)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(r,{height:300,description:"Основной TimePicker с кнопкой сброса. Использует controlled подход - требует внешний state и обработчик onReset.",code:`import { TimePicker } from '@nlmk/ds-2.0';
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
