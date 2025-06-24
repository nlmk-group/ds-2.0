import{j as o}from"./jsx-runtime-BTJTZTIL.js";import{r as d}from"./index-BcJSXhQi.js";import{aR as n,B as p}from"./TreeList-BqxVwK_V.js";import"./index-ChsGqxH_.js";import"./clsx-B-dksMZM.js";import"./generateUUID-Cr6BF8sx.js";import"./32-DMwn_7G4.js";import"./index-DmffzHLE.js";import"./index-D9qQUMnP.js";import"./index-53N2drcz.js";import"./index-D8WlRtvM.js";import"./index-D-jyRV5V.js";import"./index-WHoiTdKD.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./index-VmJK6twV.js";import"./index-CRm92gKC.js";import"./index-BPWT-JIL.js";import"./index-BQAMZg9d.js";import"./index-C1EIKtiR.js";import"./tiny-invariant-CopsF_GD.js";const w="_wrapper_1262v_1",W="_main_1262v_9",l={wrapper:w,main:W},O=e=>o.jsx("div",{className:l.wrapper,children:o.jsx(e,{})}),G={title:"Components/VideoWindow/Stories",component:n,decorators:[O],parameters:{actions:{argTypesRegex:"^on.*"}}},r=e=>{const[a,s]=d.useState(!1);return o.jsxs("div",{className:l.main,children:[o.jsx(p,{onClick:()=>s(!0),variant:"primary",size:"s",children:"Открыть видео"}),a&&o.jsx(n,{videoUrl:e.videoUrl,title:e.title,autoPlay:e.autoPlay,resizable:e.resizable,draggable:e.draggable,draggableStartPosition:e.draggableStartPosition,onClose:()=>s(!1)})]})};r.args={videoUrl:"https://nlmk.com/upload/iblock/f27/fusion_short_rus.mp4",title:"Демо-видео",autoPlay:!1,resizable:!1,draggable:!1};r.storyName="VideoWindow по умолчанию";const i=e=>{const[a,s]=d.useState(!1);return o.jsxs("div",{className:l.main,children:[o.jsx(p,{onClick:()=>s(!0),variant:"primary",size:"s",children:"Открыть видео с возможностью перетаскивания и изменения размера"}),a&&o.jsx(n,{videoUrl:e.videoUrl,title:e.title,draggable:!0,resizable:!0,draggableStartPosition:{x:100,y:100},onClose:()=>s(!1)})]})};i.args={videoUrl:"https://nlmk.com/upload/iblock/f27/fusion_short_rus.mp4",title:"Перетаскиваемое видео"};i.storyName="VideoWindow с drag-n-drop и resize";i.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const t=e=>{const[a,s]=d.useState(!1);return o.jsxs("div",{className:l.main,children:[o.jsx(p,{onClick:()=>s(!0),variant:"primary",size:"s",children:"Открыть видео с автозапуском"}),a&&o.jsx(n,{videoUrl:e.videoUrl,title:e.title,autoPlay:!0,onClose:()=>s(!1)})]})};t.args={videoUrl:"https://nlmk.com/upload/iblock/f27/fusion_short_rus.mp4",title:"Видео с автозапуском"};t.storyName="VideoWindow c автозапуском";t.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};var m,c,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`(argTypes: TVideoWindowProps): JSX.Element => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return <div className={styles.main}>
      <Button onClick={() => setIsVideoOpen(true)} variant="primary" size="s">
        Открыть видео
      </Button>

      {isVideoOpen && <VideoWindow videoUrl={argTypes.videoUrl} title={argTypes.title} autoPlay={argTypes.autoPlay} resizable={argTypes.resizable} draggable={argTypes.draggable} draggableStartPosition={argTypes.draggableStartPosition} onClose={() => setIsVideoOpen(false)} />}
    </div>;
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var g,V,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`(argTypes: TVideoWindowProps): JSX.Element => {
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
}`,...(v=(V=i.parameters)==null?void 0:V.docs)==null?void 0:v.source}}};var y,b,f;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`(argTypes: TVideoWindowProps): JSX.Element => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return <div className={styles.main}>
      <Button onClick={() => setIsVideoOpen(true)} variant="primary" size="s">
        Открыть видео с автозапуском
      </Button>

      {isVideoOpen && <VideoWindow videoUrl={argTypes.videoUrl} title={argTypes.title} autoPlay onClose={() => setIsVideoOpen(false)} />}
    </div>;
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const H=["VideoWindowDefault","VideoWindowWithDragAndResize","VideoWindowWithAutoPlay"];export{r as VideoWindowDefault,t as VideoWindowWithAutoPlay,i as VideoWindowWithDragAndResize,H as __namedExportsOrder,G as default};
