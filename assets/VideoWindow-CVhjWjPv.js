import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as m}from"./index-CbmgEnq2.js";import{am as n,an as d,ao as l}from"./chunk-NUUEMKO5-BWJkp_zA.js";import{DecoratorDefault as p}from"./Decorator.stories-B1hjNCvN.js";import{ah as i,aP as u}from"./VideoWindow-DEkDdpx_.js";import{r as c}from"./index-Bnop-kX6.js";import{s as r,H as b,E as f}from"./Header-BQfbJRd8.js";import{F as y}from"./FigmaEmbed-CpF_E67x.js";import{P as x}from"./Properties-Bp1nJrUe.js";import{T as g}from"./Tests-BJI35FML.js";import"./generateUUID-Z4ktHL_f.js";import"./index-CkAXh9uP.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-CvRFF9aG.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-D_lYSbi8.js";import"./index-DokmLR-l.js";import"./32-DmPReyKt.js";import"./iframe-DcuBVtum.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-CiZzCX2U.js";import"./index-B5g4YLzC.js";const w={videoUrl:{description:"Ссылка на видеофайл или поток",table:{defaultValue:{summary:""},type:{summary:"string"}},required:!0},id:{description:"Уникальный идентификатор видео элемента",table:{defaultValue:{summary:""},type:{summary:"string"}}},title:{description:"Заголовок видео",table:{defaultValue:{summary:""},type:{summary:"string"}}},autoPlay:{description:"Включает автоматическое воспроизведение видео при открытии",table:{defaultValue:{summary:!1},type:{summary:"boolean"}}},resizable:{description:"Включает возможность изменения размера окна",table:{defaultValue:{summary:!1},type:{summary:"boolean"}}},draggable:{description:"Включает возможность перетаскивания окна",table:{defaultValue:{summary:!1},type:{summary:"boolean"}}},draggableStartPosition:{description:"Начальная позиция окна при перетаскивании",table:{defaultValue:{summary:"undefined"},type:{summary:"{ x: number; y: number }"}}},onClose:{description:"Callback, вызываемый для закрытия окна с видео",action:"окно закрыто",table:{type:{summary:"() => void"}},required:!0},className:{description:"Дополнительный CSS класс",table:{defaultValue:{summary:"undefined"},type:{summary:"string"}}},style:{description:"Дополнительные CSS стили",table:{defaultValue:{summary:"undefined"},type:{summary:"CSSProperties"}}}},s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=287-2&p=f&t=wic3r5By8WaSACSS-0",V=()=>{const[t,o]=c.useState(0);return e.jsxs("div",{className:r.wrapper,children:[e.jsx(b,{title:"VideoWindow",description:"VideoWindow - компонент для отображения видеоплеера с возможностью изменения размера окна, переключения в полноэкранный режим, минимизации и закрытия.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/VideoWindow",figmaLink:s}),e.jsx("div",{className:r.tabs,children:e.jsxs(i,{children:[e.jsx(i.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>o(0)}),e.jsx(i.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>o(1)}),e.jsx(i.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>o(2)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(f,{height:500,description:"Базовый пример использования VideoWindow",code:`import { VideoWindow } from '@nlmk/ds-2.0';

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
  };`}),e.jsx(x,{argsTypes:w})]}),Number(t)===1&&e.jsx(y,{url:s}),Number(t)===2&&e.jsx(g,{componentName:"VideoWindow"})]})};function a(t){return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Components/VideoWindow/Info",component:u,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=287-2&p=f&t=wic3r5By8WaSACSS-0"},jest:["VideoWindow.test.tsx"]}}),`
`,e.jsx(d,{of:p}),`
`,e.jsx(l,{children:e.jsx(V,{})})]})}function oe(t={}){const{wrapper:o}={...m(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(a,{...t})}):a()}export{oe as default};
