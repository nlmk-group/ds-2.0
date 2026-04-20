import{r as g,j as t,m as l,S as d,U as w}from"./iframe-D1ppCfJL.js";import{useMDXComponents as u}from"./index-DUXc5yr1.js";import{I as v}from"./index-C3RlDP0j.js";import{DecoratorDefault as f}from"./Decorator.stories-Ce4quGEU.js";import{s as p,H as j,E as m}from"./Header-CrzktEKM.js";import{F as x}from"./FigmaEmbed-C7Y9lIWu.js";import{P as h,T as b}from"./Tests-ErrWIcVc.js";import{g as r}from"./utils-BWsSlcHq.js";import{T as o}from"./index-DlP1k4gA.js";import{a as I}from"./argsTypes-CY--wepH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D1MtTpbs.js";import"./clsx-B-dksMZM.js";import"./index-DQiorVga.js";import"./index-B8OV2sj9.js";import"./index-pBOwR2Sr.js";import"./index-1Ia9d37J.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-DzcHwvay.js";import"./24-Cp8l4Ntb.js";import"./24-CXzdah1X.js";import"./24-eQHncE30.js";import"./24-CRTRQ8Ly.js";import"./24-C2zrmoH8.js";import"./24-DvGStvE4.js";import"./24-DEoWbW1a.js";import"./24-DTwfOo-x.js";import"./24-Dwzv70HG.js";import"./24-hEGWduDH.js";import"./16-CJBceTE3.js";import"./24-BoJlH0P7.js";import"./24-DeVNRByj.js";import"./16-DDpVoX5v.js";import"./16-DyMPAZyw.js";import"./16-Dg_oBXFF.js";import"./16-m76_vWtK.js";import"./16-CtdeCqSX.js";import"./index-dwkJrdOm.js";import"./index-CdGiUjLy.js";import"./index-CoVi-s7L.js";import"./generateUUID-M57HTP56.js";import"./index-_EnS4SPv.js";import"./index-BhAG1mVA.js";import"./index-BbmMdiDL.js";import"./index-D3y4eWrN.js";import"./index-BkONTIs-.js";import"./index-DTDhhVJl.js";import"./index-BQXeN0eF.js";import"./index-DCLji6qX.js";import"./colorsMapping-C6bFIk14.js";import"./index-BuboyXZl.js";import"./sizeMappingInput-XXScYzk1.js";import"./index-CskC-lf5.js";import"./useFloatingReferenceSync-_s1uppib.js";import"./index-BAWCPbpv.js";import"./types-TdnjS80C.js";import"./MenuItem-BiyJ08nY.js";import"./floating-ui.react-DKQvXyy0.js";import"./sizesMapping-D8QavrGc.js";import"./index-CYVJgBAK.js";import"./index-BwhgPU9I.js";import"./index-DwwGufnW.js";import"./index-DuvGnr4P.js";import"./index-Cn43EhjI.js";import"./index-Dq_AZ4Gl.js";import"./index-BKgG2BUu.js";import"./index-CZz4O3t8.js";import"./index-DDTzxOqr.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-Ct8-B2RS.js";import"./index-BtqWnsFW.js";import"./index-DZ1-9d6d.js";import"./index-BPCh3R_L.js";import"./index-CEUVPE5x.js";import"./index-Bsj2pXl4.js";import"./index-BFBGSixy.js";import"./index-DBTyYIq5.js";import"./index-B2DrMXcC.js";import"./index-CD-VGwDt.js";import"./index-Dt9QaNhs.js";import"./index-D9eBI-ul.js";import"./index-DvVC4LD1.js";import"./index-ppwxfrOJ.js";import"./index-CZI9tviC.js";import"./index-BvPqZPcI.js";import"./index-CHKV4Xzj.js";import"./index-BDHI1vN6.js";import"./index-RJYyFZKU.js";import"./index-BYlJK5W5.js";import"./index-BBrdAj2S.js";import"./index-C_PjMrzg.js";import"./index-CV1Omkp3.js";import"./index-BDde93qT.js";import"./index-VSWU4_A4.js";import"./index-CFOhRc1z.js";import"./index-BYVv5Ws0.js";import"./index-CRzaLeVS.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-D-Ocfrfd.js";import"./index-CSNQVful.js";import"./index-DrgSnG8u.js";import"./index-BOz-GYvQ.js";import"./index-OW61RsAS.js";import"./index-0w7-TbBZ.js";import"./index-GjSckLp0.js";import"./index-C8eAPz1j.js";import"./index-BZ11wUJ2.js";import"./index-CIHIr33g.js";import"./ComboBox-BIeVukHs.js";import"./index-T1NdoD8u.js";import"./TreeList-COEGgzHL.js";import"./copyToClipboard-DB_KM_BY.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=16052-4554&m=dev",P=()=>{const[i,e]=g.useState(0),n=`import { ImagePreview } from '@nlmk/ds-2.0';

const App = () => {
  const items = [
    {
      id: 1,
      previewSrc: '${r("/img/image_career.jpg")}',
      fullSrc: '${r("/img/image_career.jpg")}',
      title: 'Этап 1',
      description: 'Название фото 1',
      previewTitle: 'Фото',
      downloadName: 'photo-1.jpg',
      alt: 'Mock photo 1'
    }
  ];

  return <ImagePreview items={items} />;
};

export default App;
`,c=`import { ImagePreview } from '@nlmk/ds-2.0';

const App = () => {
  const items = [
    {
      id: 1,
      previewSrc: '${r("/img/image_career.jpg")}',
      fullSrc: '${r("/img/image_career.jpg")}',
      title: 'Этап 1',
      previewTitle: 'Фото 1',
      description: 'Название фото 1',
      downloadName: 'photo-1.jpg'
    },
    {
      id: 2,
      previewSrc: '${r("/img/image_warehouse.png")}',
      fullSrc: '${r("/img/image_warehouse.png")}',
      title: 'Этап 2',
      previewTitle: 'Фото 2',
      description: 'Название фото 2',
      downloadName: 'photo-2.jpg'
    },
    {
      id: 3,
      previewSrc: '${r("/img/image_rolled_steel_sheet.png")}',
      fullSrc: '${r("/img/image_rolled_steel_sheet.png")}',
      title: 'Этап 3',
      previewTitle: 'Фото 3',
      description: 'Название фото 3',
      downloadName: 'photo-3.jpg'
    }
  ];

  return <ImagePreview items={items} />;
};

export default App;
`;return t.jsxs("div",{className:p.wrapper,children:[t.jsx(j,{title:"ImagePreview",description:"ImagePreview отображает список изображений-миниатюр и открывает модальное окно с просмотром большого изображения, каруселью миниатюр, навигацией и скачиванием.",codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ImagePreview",figmaLink:s}),t.jsx("div",{className:p.tabs,children:t.jsxs(o,{children:[t.jsx(o.Tab,{label:"Разработчику",active:Number(i)===0,onClick:()=>e(0)}),t.jsx(o.Tab,{label:"Дизайнеру",active:Number(i)===1,onClick:()=>e(1)}),t.jsx(o.Tab,{label:"Тестирование",active:Number(i)===2,onClick:()=>e(2)})]})}),Number(i)===0&&t.jsxs(t.Fragment,{children:[t.jsx(m,{minHeight:420,description:"ImagePreview с одним изображением.",code:n}),t.jsx(m,{minHeight:520,description:"ImagePreview с несколькими изображениями: слева карусель, навигация стрелками, заголовок и описание.",code:c}),t.jsx(m,{minHeight:260,description:"Пустое состояние (если items пустой, компонент ничего не рисует).",code:`import { ImagePreview } from '@nlmk/ds-2.0';

const App = () => {
  return <ImagePreview items={[]} />;
};

export default App;
`}),t.jsx(h,{argsTypes:I})]}),Number(i)===1&&t.jsx(x,{url:s}),Number(i)===2&&t.jsx(b,{componentName:"ImagePreview"})]})};function a(i){return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"Components/ImagePreview/Info",component:v,parameters:{docs:{page:null},design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=315-7913&t=HhCDuaOuzHu5rgyf-1"},jest:["ImagePreview.test.tsx"]}}),`
`,t.jsx(d,{of:f,name:"Декоратор"}),`
`,t.jsx(w,{children:t.jsx(P,{})})]})}function Ci(i={}){const{wrapper:e}={...u(),...i.components};return e?t.jsx(e,{...i,children:t.jsx(a,{...i})}):a()}export{Ci as default};
