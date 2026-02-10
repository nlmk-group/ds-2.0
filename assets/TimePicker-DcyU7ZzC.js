import{r as a,j as e,m as n,S as c,U as d}from"./iframe-BiRbIEmb.js";import{useMDXComponents as l}from"./index-DFADegm-.js";import{T as u}from"./index-zfsKOJvk.js";import{DecoratorDefault as k}from"./Decorator.stories-Cq2K7ZK_.js";import{s as m,H as f,E as r}from"./Header-BOuFM4z3.js";import{F as T}from"./FigmaEmbed-DXWxjqCs.js";import{P as h}from"./Properties-CTw5qxDW.js";import{T as o}from"./index-Bc-rzIjC.js";import{a as x}from"./argsTypes-By1lE0DO.js";import"./preload-helper-PPVm8Dsz.js";import"./generateUUID-M57HTP56.js";import"./hook-CquVQWfr.js";import"./useFloatingReferenceSync-DMzAqXRO.js";import"./index-BkTYmJOH.js";import"./colorsMapping-C6bFIk14.js";import"./index-CuPa9ZS_.js";import"./index-CIk7IDPA.js";import"./clsx-B-dksMZM.js";import"./index-BE82tuFH.js";import"./types-TdnjS80C.js";import"./floating-ui.react-Cvixt3Zk.js";import"./index-CAP2lHO4.js";import"./sizeMappingInput-XXScYzk1.js";import"./index-D4AgSARz.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-Lr1o5q5Y.js";import"./24-BbKUo3HT.js";import"./24-Bp_HhEEU.js";import"./24-A5UfwTSh.js";import"./24-BFTkICnz.js";import"./24-CkBhKuNp.js";import"./24-99ZCpV7Q.js";import"./24-DuGNUhV0.js";import"./24-BSYcdl4j.js";import"./24-3PxmqcmV.js";import"./16-XX98Hoxr.js";import"./24-BLu740_K.js";import"./24-DOr3c8sx.js";import"./16-DUa4Gnlc.js";import"./16-CSBhMP4b.js";import"./16-DMPWLjn6.js";import"./index-CDeU-sH7.js";import"./index-DDnqRqhr.js";import"./index-t6GndyZ6.js";import"./index-BLKLNOs5.js";import"./sizesMapping-D8QavrGc.js";import"./index-BC1L0GA_.js";import"./index-BDGZFkub.js";import"./index-BbyeJaRT.js";import"./index-17UNxjz6.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=407-30495&t=EnvIMGos3m33avAX-1",b="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/TimePicker",P=()=>{const[t,i]=a.useState(0);return e.jsxs("div",{className:m.wrapper,children:[e.jsx(f,{title:"TimePicker",description:"TimePicker позволяет пользователям выбирать время или период времени. Использует двухуровневую валидацию (IMask + onBlur) для предотвращения ввода невалидных значений (например, 12:95). Поддерживает различные форматы и диапазоны времени.",isStable:!0,codeLink:b,figmaLink:s}),e.jsx("div",{className:m.tabs,children:e.jsxs(o,{children:[e.jsx(o.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>i(0)}),e.jsx(o.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>i(1)}),e.jsx(o.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>i(2)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(r,{height:300,description:"Основной TimePicker с кнопкой сброса. Использует controlled подход - требует внешний state и обработчик onReset.",code:`import { TimePicker } from '@nlmk/ds-2.0';
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
