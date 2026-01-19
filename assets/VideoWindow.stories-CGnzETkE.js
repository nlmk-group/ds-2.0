import{j as o,r as l}from"./iframe-DUDunD5j.js";import{B as p}from"./index-aoSKrGJR.js";import{V as n}from"./index-DFAWADrh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DyX2qzoz.js";import"./clsx-B-dksMZM.js";import"./index-YMfOmFJ1.js";import"./24-tbbQM-dv.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-C99UGV7O.js";const m="VideoWindow-module__wrapper___o9HMV",c="VideoWindow-module__main___P4Eqh",d={wrapper:m,main:c},u=e=>o.jsx("div",{className:d.wrapper,children:o.jsx(e,{})}),x={title:"Components/VideoWindow/Stories",component:n,decorators:[u],parameters:{actions:{argTypesRegex:"^on.*"}}},r=e=>{const[a,s]=l.useState(!1);return o.jsxs("div",{className:d.main,children:[o.jsx(p,{onClick:()=>s(!0),variant:"primary",size:"s",children:"Открыть видео"}),a&&o.jsx(n,{videoUrl:e.videoUrl,title:e.title,autoPlay:e.autoPlay,resizable:e.resizable,draggable:e.draggable,draggableStartPosition:e.draggableStartPosition,onClose:()=>s(!1)})]})};r.args={videoUrl:"https://nlmk.com/upload/iblock/f27/fusion_short_rus.mp4",title:"Демо-видео",autoPlay:!1,resizable:!1,draggable:!1};r.storyName="VideoWindow по умолчанию";const i=e=>{const[a,s]=l.useState(!1);return o.jsxs("div",{className:d.main,children:[o.jsx(p,{onClick:()=>s(!0),variant:"primary",size:"s",children:"Открыть видео с возможностью перетаскивания и изменения размера"}),a&&o.jsx(n,{videoUrl:e.videoUrl,title:e.title,draggable:!0,resizable:!0,draggableStartPosition:{x:100,y:100},onClose:()=>s(!1)})]})};i.args={videoUrl:"https://nlmk.com/upload/iblock/f27/fusion_short_rus.mp4",title:"Перетаскиваемое видео"};i.storyName="VideoWindow с drag-n-drop и resize";i.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const t=e=>{const[a,s]=l.useState(!1);return o.jsxs("div",{className:d.main,children:[o.jsx(p,{onClick:()=>s(!0),variant:"primary",size:"s",children:"Открыть видео с автозапуском"}),a&&o.jsx(n,{videoUrl:e.videoUrl,title:e.title,autoPlay:!0,onClose:()=>s(!1)})]})};t.args={videoUrl:"https://nlmk.com/upload/iblock/f27/fusion_short_rus.mp4",title:"Видео с автозапуском"};t.storyName="VideoWindow c автозапуском";t.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(argTypes: TVideoWindowProps): JSX.Element => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return <div className={styles.main}>
      <Button onClick={() => setIsVideoOpen(true)} variant="primary" size="s">
        Открыть видео
      </Button>

      {isVideoOpen && <VideoWindow videoUrl={argTypes.videoUrl} title={argTypes.title} autoPlay={argTypes.autoPlay} resizable={argTypes.resizable} draggable={argTypes.draggable} draggableStartPosition={argTypes.draggableStartPosition} onClose={() => setIsVideoOpen(false)} />}
    </div>;
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(argTypes: TVideoWindowProps): JSX.Element => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return <div className={styles.main}>
      <Button onClick={() => setIsVideoOpen(true)} variant="primary" size="s">
        Открыть видео с возможностью перетаскивания и изменения размера
      </Button>

      {isVideoOpen && <VideoWindow videoUrl={argTypes.videoUrl} title={argTypes.title} draggable resizable draggableStartPosition={{
      x: 100,
      y: 100
    }} onClose={() => setIsVideoOpen(false)} />}
    </div>;
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(argTypes: TVideoWindowProps): JSX.Element => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return <div className={styles.main}>
      <Button onClick={() => setIsVideoOpen(true)} variant="primary" size="s">
        Открыть видео с автозапуском
      </Button>

      {isVideoOpen && <VideoWindow videoUrl={argTypes.videoUrl} title={argTypes.title} autoPlay onClose={() => setIsVideoOpen(false)} />}
    </div>;
}`,...t.parameters?.docs?.source}}};const P=["VideoWindowDefault","VideoWindowWithDragAndResize","VideoWindowWithAutoPlay"];export{r as VideoWindowDefault,t as VideoWindowWithAutoPlay,i as VideoWindowWithDragAndResize,P as __namedExportsOrder,x as default};
