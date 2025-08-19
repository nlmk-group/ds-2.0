import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as m}from"./index-D2yTtfOz.js";import"./index-CMwP_0Az.js";import{DecoratorDefault as n}from"./Decorator.stories-D7iJJ_iz.js";import{af as i,aR as d}from"./TreeList-BgLkmMSk.js";import{r as l}from"./index-BcJSXhQi.js";import{s as r,H as p,E as u}from"./Header-EC-IOHOy.js";import{F as c}from"./FigmaEmbed-NBMPmQ_G.js";import{P as b}from"./Properties-D1nslhrP.js";import{T as f}from"./Tests-DhYlvQSd.js";import"./generateUUID-B0loqD05.js";import"./index-B_7MXUVi.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-CqWNtYbo.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-CBc2nLPm.js";import"./index-C5rKoyII.js";import"./32-BRZfqcB0.js";import{c as y,S as x,U as g}from"./DocsRenderer-CFRXHY34-BrtqZdGj.js";import"./index-ChsGqxH_.js";import"./preview-B4c1B1-C.js";import"./iframe-B7DNsbkf.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-geiMASTa.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const w={videoUrl:{description:"Ссылка на видеофайл или поток",table:{defaultValue:{summary:""},type:{summary:"string"}},required:!0},id:{description:"Уникальный идентификатор видео элемента",table:{defaultValue:{summary:""},type:{summary:"string"}}},title:{description:"Заголовок видео",table:{defaultValue:{summary:""},type:{summary:"string"}}},autoPlay:{description:"Включает автоматическое воспроизведение видео при открытии",table:{defaultValue:{summary:!1},type:{summary:"boolean"}}},resizable:{description:"Включает возможность изменения размера окна",table:{defaultValue:{summary:!1},type:{summary:"boolean"}}},draggable:{description:"Включает возможность перетаскивания окна",table:{defaultValue:{summary:!1},type:{summary:"boolean"}}},draggableStartPosition:{description:"Начальная позиция окна при перетаскивании",table:{defaultValue:{summary:"undefined"},type:{summary:"{ x: number; y: number }"}}},onClose:{description:"Callback, вызываемый для закрытия окна с видео",action:"окно закрыто",table:{type:{summary:"() => void"}},required:!0},className:{description:"Дополнительный CSS класс",table:{defaultValue:{summary:"undefined"},type:{summary:"string"}}},style:{description:"Дополнительные CSS стили",table:{defaultValue:{summary:"undefined"},type:{summary:"CSSProperties"}}}},s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=287-2&p=f&t=wic3r5By8WaSACSS-0",V=()=>{const[t,o]=l.useState(0);return e.jsxs("div",{className:r.wrapper,children:[e.jsx(p,{title:"VideoWindow",description:"VideoWindow - компонент для отображения видеоплеера с возможностью изменения размера окна, переключения в полноэкранный режим, минимизации и закрытия.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/VideoWindow",figmaLink:s}),e.jsx("div",{className:r.tabs,children:e.jsxs(i,{children:[e.jsx(i.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>o(0)}),e.jsx(i.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>o(1)}),e.jsx(i.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>o(2)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(u,{height:500,description:"Базовый пример использования VideoWindow",code:`import { VideoWindow } from '@nlmk/ds-2.0';

  export default App = () => {
    const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
    
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
  };`}),e.jsx(b,{argsTypes:w})]}),Number(t)===1&&e.jsx(c,{url:s}),Number(t)===2&&e.jsx(f,{componentName:"VideoWindow"})]})};function a(t){return e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"Components/VideoWindow/Info",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=287-2&p=f&t=wic3r5By8WaSACSS-0"},jest:["VideoWindow.test.tsx"]}}),`
`,e.jsx(x,{of:n}),`
`,e.jsx(g,{children:e.jsx(V,{})})]})}function re(t={}){const{wrapper:o}={...m(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(a,{...t})}):a()}export{re as default};
