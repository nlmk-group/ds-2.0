import{r as m,j as e,f as n,S as p,U as d}from"./iframe-zk5xXBtA.js";import{useMDXComponents as l}from"./index-CSMoqiIu.js";import{DecoratorDefault as u}from"./Decorator.stories-XjMTlGWF.js";import{V as c}from"./index-CW7TPOqT.js";import{s as r,H as b,E as f}from"./Header-BMqOixcD.js";import{F as y}from"./FigmaEmbed-Bh-YhisY.js";import{P as x}from"./Properties-BH32KsQA.js";import{T as g}from"./Tests-BiRJAIxZ.js";import{T as i}from"./index-CGZqhooT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CTfBpVCI.js";import"./index-9BCGLlQQ.js";import"./clsx-B-dksMZM.js";import"./index-B9FTsAqd.js";import"./24-BU8fW5nS.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-CHUQ235a.js";import"./index-D9zx9C-F.js";import"./index-6T6AONQH.js";import"./index-DjSUGs5w.js";import"./index-CBNcLMKv.js";import"./generateUUID-M57HTP56.js";import"./24-BkbQ4VQu.js";import"./sizesMapping-D8QavrGc.js";import"./index-Is2qauMo.js";import"./index-DirQniBD.js";import"./index-cDYWclvM.js";import"./index-1zUxKm4P.js";import"./32-D1ipBNS6.js";import"./24-CsxFkFpg.js";import"./24-Cg1MPBHI.js";import"./24-BGS-MQmY.js";import"./24-2PvTlRtj.js";import"./24-DyWGmQTd.js";import"./24-DrF3F4Gh.js";import"./24-DXO8B9MT.js";import"./16-D0071456.js";import"./24-CzaQJmC-.js";import"./16-D1MigzhA.js";import"./16-J9oiRdzb.js";import"./16-qJIrzOil.js";const V={videoUrl:{description:"Ссылка на видеофайл или поток",table:{defaultValue:{summary:""},type:{summary:"string"}},required:!0},id:{description:"Уникальный идентификатор видео элемента",table:{defaultValue:{summary:""},type:{summary:"string"}}},title:{description:"Заголовок видео",table:{defaultValue:{summary:""},type:{summary:"string"}}},autoPlay:{description:"Включает автоматическое воспроизведение видео при открытии",table:{defaultValue:{summary:!1},type:{summary:"boolean"}}},resizable:{description:"Включает возможность изменения размера окна",table:{defaultValue:{summary:!1},type:{summary:"boolean"}}},draggable:{description:"Включает возможность перетаскивания окна",table:{defaultValue:{summary:!1},type:{summary:"boolean"}}},draggableStartPosition:{description:"Начальная позиция окна при перетаскивании",table:{defaultValue:{summary:"undefined"},type:{summary:"{ x: number; y: number }"}}},onClose:{description:"Callback, вызываемый для закрытия окна с видео",action:"окно закрыто",table:{type:{summary:"() => void"}},required:!0},className:{description:"Дополнительный CSS класс",table:{defaultValue:{summary:"undefined"},type:{summary:"string"}}},style:{description:"Дополнительные CSS стили",table:{defaultValue:{summary:"undefined"},type:{summary:"CSSProperties"}}}},s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=287-2&p=f&t=wic3r5By8WaSACSS-0",w=()=>{const[t,o]=m.useState(0);return e.jsxs("div",{className:r.wrapper,children:[e.jsx(b,{title:"VideoWindow",description:"VideoWindow - компонент для отображения видеоплеера с возможностью изменения размера окна, переключения в полноэкранный режим, минимизации и закрытия.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/VideoWindow",figmaLink:s}),e.jsx("div",{className:r.tabs,children:e.jsxs(i,{children:[e.jsx(i.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>o(0)}),e.jsx(i.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>o(1)}),e.jsx(i.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>o(2)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(f,{height:500,description:"Базовый пример использования VideoWindow",code:`import React, { useState } from 'react';
import { VideoWindow } from '@nlmk/ds-2.0';

const App = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    
    return (
      <div style={{display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center'}}>
        <button onClick={() => setIsVideoOpen(true)}>Открыть видео</button>
  
        {isVideoOpen && (
          <VideoWindow
            videoUrl="https://www.w3schools.com/html/mov_bbb.mp4"
            title="Демо-видео"
            autoPlay
            draggable
            resizable
            draggableStartPosition={{ x: 100, y: 100 }}
            onClose={() => setIsVideoOpen(false)}
          />
        )}
      </div>
    );
  };

export default App;`}),e.jsx(x,{argsTypes:V})]}),Number(t)===1&&e.jsx(y,{url:s}),Number(t)===2&&e.jsx(g,{componentName:"VideoWindow"})]})};function a(t){return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Components/VideoWindow/Info",component:c,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=287-2&p=f&t=wic3r5By8WaSACSS-0"},jest:["VideoWindow.test.tsx"]}}),`
`,e.jsx(p,{of:u}),`
`,e.jsx(d,{children:e.jsx(w,{})})]})}function pe(t={}){const{wrapper:o}={...l(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(a,{...t})}):a()}export{pe as default};
