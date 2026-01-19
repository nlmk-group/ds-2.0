import{r as a,j as e,m as n,S as c,U as d}from"./iframe-DUDunD5j.js";import{useMDXComponents as l}from"./index-CDbv5Jgm.js";import{T as u}from"./index-f210TT0-.js";import{DecoratorDefault as k}from"./Decorator.stories-DJdCAXEf.js";import{s as m,H as f,E as r}from"./Header-BrZEypuE.js";import{F as T}from"./FigmaEmbed-DovFRgvJ.js";import{P as h}from"./Properties-CcP2VO-p.js";import{T as o}from"./index-DntXJei4.js";import{a as x}from"./argsTypes-By1lE0DO.js";import"./preload-helper-PPVm8Dsz.js";import"./generateUUID-M57HTP56.js";import"./hook-BrgnIdXy.js";import"./useFloatingReferenceSync-DB9ttEJp.js";import"./index-BBEOAWV5.js";import"./colorsMapping-C6bFIk14.js";import"./index-YMfOmFJ1.js";import"./index-DyX2qzoz.js";import"./clsx-B-dksMZM.js";import"./index-BpbvmvtH.js";import"./types-TdnjS80C.js";import"./floating-ui.react-DkiUDhV9.js";import"./index-CuTegHCu.js";import"./sizeMappingInput-XXScYzk1.js";import"./index-DdmbHqmW.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-BB59z0Rt.js";import"./24-tbbQM-dv.js";import"./24-BLuChUkw.js";import"./24-BGpvFgfj.js";import"./24-BGrLeqpw.js";import"./24-CAewpWgK.js";import"./24-BoEjxhhs.js";import"./24-BAIQ796Q.js";import"./24-BwgIJwEH.js";import"./24-C99UGV7O.js";import"./16-CfofIm8-.js";import"./24-CoSTS1kQ.js";import"./24-C5ui32Ki.js";import"./16-DEDu0dyt.js";import"./16-BarbOM5u.js";import"./16-4gnAFB8p.js";import"./index-rc7u3FmU.js";import"./index-z_YeHj0K.js";import"./index-r-uICxAh.js";import"./index-BS4wiMYT.js";import"./sizesMapping-D8QavrGc.js";import"./index-BixcmxoL.js";import"./index-aoSKrGJR.js";import"./index-BE6Pvktf.js";import"./index-BjTLv_jS.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=407-30495&t=EnvIMGos3m33avAX-1",b="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/TimePicker",P=()=>{const[t,i]=a.useState(0);return e.jsxs("div",{className:m.wrapper,children:[e.jsx(f,{title:"TimePicker",description:"TimePicker позволяет пользователям выбирать время или период времени. Использует двухуровневую валидацию (IMask + onBlur) для предотвращения ввода невалидных значений (например, 12:95). Поддерживает различные форматы и диапазоны времени.",isStable:!0,codeLink:b,figmaLink:s}),e.jsx("div",{className:m.tabs,children:e.jsxs(o,{children:[e.jsx(o.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>i(0)}),e.jsx(o.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>i(1)}),e.jsx(o.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>i(2)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(r,{height:300,description:"Основной TimePicker с кнопкой сброса. Использует controlled подход - требует внешний state и обработчик onReset.",code:`import { TimePicker } from '@nlmk/ds-2.0';
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
