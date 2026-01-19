import{r as m,j as e,m as n,S as p,U as d}from"./iframe-BPtLBEuk.js";import{useMDXComponents as l}from"./index-DY5aY42c.js";import{DecoratorDefault as u}from"./Decorator.stories-Bt-6wqMy.js";import{V as c}from"./index-Dqb4VyLS.js";import{s as r,H as b,E as f}from"./Header-lxb-Wymn.js";import{F as y}from"./FigmaEmbed-IQ2Nn4zn.js";import{P as x}from"./Properties-u6_xeg7P.js";import{T as g}from"./Tests-DUUoQDTR.js";import{T as i}from"./index-CX87Y9E4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5OaxW6Y.js";import"./index-C9_7xPUt.js";import"./clsx-B-dksMZM.js";import"./index-D-pLh_NR.js";import"./24-CrLAaNeG.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-BA0GVvoT.js";import"./index-DZQvJksB.js";import"./index-BUWLdeqz.js";import"./index-D9G_R1e4.js";import"./index-V5PZJFO3.js";import"./generateUUID-M57HTP56.js";import"./24-8ackLhic.js";import"./sizesMapping-D8QavrGc.js";import"./index-yAFWEvQV.js";import"./index-CANPVv15.js";import"./index-d_6bz31j.js";import"./index-CDRf2h9x.js";import"./32-DeoBrCvQ.js";import"./24-CpcywAhj.js";import"./24-Ch6Cnsji.js";import"./24-Q7FkUsyZ.js";import"./24-DOwtHgIx.js";import"./24-B4m_3SjA.js";import"./24-CV2ikCuL.js";import"./24-Ba8I7UHN.js";import"./16-CXoys7qm.js";import"./24-Cxxq2bXd.js";import"./16-DwnwCPW9.js";import"./16-BY-nZnBX.js";import"./16-DaMJtJxQ.js";const V={videoUrl:{description:"Ссылка на видеофайл или поток",table:{defaultValue:{summary:""},type:{summary:"string"}},required:!0},id:{description:"Уникальный идентификатор видео элемента",table:{defaultValue:{summary:""},type:{summary:"string"}}},title:{description:"Заголовок видео",table:{defaultValue:{summary:""},type:{summary:"string"}}},autoPlay:{description:"Включает автоматическое воспроизведение видео при открытии",table:{defaultValue:{summary:!1},type:{summary:"boolean"}}},resizable:{description:"Включает возможность изменения размера окна",table:{defaultValue:{summary:!1},type:{summary:"boolean"}}},draggable:{description:"Включает возможность перетаскивания окна",table:{defaultValue:{summary:!1},type:{summary:"boolean"}}},draggableStartPosition:{description:"Начальная позиция окна при перетаскивании",table:{defaultValue:{summary:"undefined"},type:{summary:"{ x: number; y: number }"}}},onClose:{description:"Callback, вызываемый для закрытия окна с видео",action:"окно закрыто",table:{type:{summary:"() => void"}},required:!0},className:{description:"Дополнительный CSS класс",table:{defaultValue:{summary:"undefined"},type:{summary:"string"}}},style:{description:"Дополнительные CSS стили",table:{defaultValue:{summary:"undefined"},type:{summary:"CSSProperties"}}}},s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=287-2&p=f&t=wic3r5By8WaSACSS-0",w=()=>{const[t,o]=m.useState(0);return e.jsxs("div",{className:r.wrapper,children:[e.jsx(b,{title:"VideoWindow",description:"VideoWindow - компонент для отображения видеоплеера с возможностью изменения размера окна, переключения в полноэкранный режим, минимизации и закрытия.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/VideoWindow",figmaLink:s}),e.jsx("div",{className:r.tabs,children:e.jsxs(i,{children:[e.jsx(i.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>o(0)}),e.jsx(i.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>o(1)}),e.jsx(i.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>o(2)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(f,{height:500,description:"Базовый пример использования VideoWindow",code:`import React, { useState } from 'react';
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
