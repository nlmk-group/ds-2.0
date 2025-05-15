import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as m}from"./index-CbmgEnq2.js";import"./index-CDNBfPUD.js";import{DecoratorDefault as n}from"./Decorator.stories-B1hjNCvN.js";import{ag as i,aS as d}from"./TreeList-KafSWxD5.js";import{r as l}from"./index-Bnop-kX6.js";import{s as r,H as p,E as u}from"./Header-C1-O-XnO.js";import{F as c}from"./FigmaEmbed-BdmsVGpE.js";import{P as b}from"./Properties-C1uV5wRN.js";import{T as f}from"./Tests-DV49_lgf.js";import"./generateUUID-X09o9Pdp.js";import"./index-qbkiYuzD.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DovCGOp-.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-n_FSf3Cv.js";import"./index-DokmLR-l.js";import"./32-BTlKmMLd.js";import{c as y,e as x,U as g}from"./DocsRenderer-CFRXHY34-D9cGPbCT.js";import"./preview-B_gHuUAG.js";import"./iframe-Bi6NeCl1.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-AvLRxKSw.js";import"./index-B5g4YLzC.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";const w={videoUrl:{description:"Ссылка на видеофайл или поток",table:{defaultValue:{summary:""},type:{summary:"string"}},required:!0},id:{description:"Уникальный идентификатор видео элемента",table:{defaultValue:{summary:""},type:{summary:"string"}}},title:{description:"Заголовок видео",table:{defaultValue:{summary:""},type:{summary:"string"}}},autoPlay:{description:"Включает автоматическое воспроизведение видео при открытии",table:{defaultValue:{summary:!1},type:{summary:"boolean"}}},resizable:{description:"Включает возможность изменения размера окна",table:{defaultValue:{summary:!1},type:{summary:"boolean"}}},draggable:{description:"Включает возможность перетаскивания окна",table:{defaultValue:{summary:!1},type:{summary:"boolean"}}},draggableStartPosition:{description:"Начальная позиция окна при перетаскивании",table:{defaultValue:{summary:"undefined"},type:{summary:"{ x: number; y: number }"}}},onClose:{description:"Callback, вызываемый для закрытия окна с видео",action:"окно закрыто",table:{type:{summary:"() => void"}},required:!0},className:{description:"Дополнительный CSS класс",table:{defaultValue:{summary:"undefined"},type:{summary:"string"}}},style:{description:"Дополнительные CSS стили",table:{defaultValue:{summary:"undefined"},type:{summary:"CSSProperties"}}}},s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=287-2&p=f&t=wic3r5By8WaSACSS-0",V=()=>{const[t,o]=l.useState(0);return e.jsxs("div",{className:r.wrapper,children:[e.jsx(p,{title:"VideoWindow",description:"VideoWindow - компонент для отображения видеоплеера с возможностью изменения размера окна, переключения в полноэкранный режим, минимизации и закрытия.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/VideoWindow",figmaLink:s}),e.jsx("div",{className:r.tabs,children:e.jsxs(i,{children:[e.jsx(i.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>o(0)}),e.jsx(i.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>o(1)}),e.jsx(i.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>o(2)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(u,{height:500,description:"Базовый пример использования VideoWindow",code:`import { VideoWindow } from '@nlmk/ds-2.0';

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
`,e.jsx(g,{children:e.jsx(V,{})})]})}function oe(t={}){const{wrapper:o}={...m(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(a,{...t})}):a()}export{oe as default};
