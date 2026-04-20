import{j as r,r as S}from"./iframe-D1ppCfJL.js";import{I as P,a as T}from"./index-C3RlDP0j.js";import{B as k}from"./index-D1MtTpbs.js";import{B as j}from"./index-DQiorVga.js";import{a as N}from"./argsTypes-CY--wepH.js";import{v as E}from"./index-1Ia9d37J.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./16-CJBceTE3.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-DvGStvE4.js";import"./index-B8OV2sj9.js";import"./index-dwkJrdOm.js";import"./index-CdGiUjLy.js";import"./index-CoVi-s7L.js";import"./generateUUID-M57HTP56.js";import"./24-CRTRQ8Ly.js";import"./24-hEGWduDH.js";import"./index-_EnS4SPv.js";import"./16-Dg_oBXFF.js";import"./index-pBOwR2Sr.js";import"./32-DzcHwvay.js";import"./24-Cp8l4Ntb.js";import"./24-CXzdah1X.js";import"./24-eQHncE30.js";import"./24-C2zrmoH8.js";import"./24-DEoWbW1a.js";import"./24-DTwfOo-x.js";import"./24-Dwzv70HG.js";import"./24-BoJlH0P7.js";import"./24-DeVNRByj.js";import"./16-DDpVoX5v.js";import"./16-DyMPAZyw.js";import"./16-m76_vWtK.js";import"./16-CtdeCqSX.js";const m=(e,t)=>!e.length||t<=0?[]:Array.from({length:t},(p,s)=>{const o=e[s%e.length],a=s+1,n=o.titlePrefix??"Этап",c=o.descriptionPrefix??"Название фото",{titlePrefix:d,descriptionPrefix:M,...b}=o;return{...b,id:a,title:`${n} ${a}`,description:`${c} ${a}`}}),D="ImagePreview-stories-module__wrapper___zLVqq",X="ImagePreview-stories-module__container___XKFWs",x={wrapper:D,container:X,"hide-sidebar":"ImagePreview-stories-module__hide-sidebar___7Wivy"},y="img/image_picture_mock.jpg",_="img/image_workers.jpg",C="img/avatar_mock.png",B=e=>r.jsx(k,{className:x.wrapper,justifyContent:"center",children:r.jsx("div",{className:x.container,children:r.jsx(e,{})})}),i=[{previewSrc:y,fullSrc:y,downloadName:"photo.jpg",alt:"Mock photo",titlePrefix:"Этап",descriptionPrefix:"Название фото",previewTitle:"Фотография"},{previewSrc:_,fullSrc:_,downloadName:"photo.jpg",alt:"Mock photo",titlePrefix:"Этап",descriptionPrefix:"Горячекатаный прокат НЛМК является основой для всех дальнейших переделов, и его качество гарантируется тщательно отработанной технологией производства. Основные потребительские достоинства горячекатаной стали заложены в структуре металла и на 60% зависят от поступающего полуфабриката — слябов НЛМК, которые закладывают химический состав, чистоту металла и качество поверхности."},{previewSrc:C,fullSrc:C,downloadName:"photo.png",alt:"Mock photo",titlePrefix:"Этап",descriptionPrefix:"Название фото",previewTitle:"Горячекатаный прокат широко востребован при строительстве нефтегазопроводов"}],Ie={title:"Components/ImagePreview/Stories",component:P,decorators:[B],argTypes:N},l=e=>r.jsx(P,{...e});l.storyName="ImagePreview c несколькими изображениями";l.args={items:m(i,15),previewImgSize:180};const g=e=>{const t=e.items?.[1]?.id,[p,s]=S.useState(()=>t==null?{}:{[String(t)]:!0}),o=({item:a,checked:n})=>{const c=String(a.id);s(d=>({...d,[c]:n}))};return r.jsx(P,{...e,checkedMap:p,handleCheckbox:o})};g.storyName="ImagePreview c чекбоксом";g.args={items:m(i,5),previewImgSize:180};const u=e=>r.jsx(P,{...e});u.storyName="ImagePreview c длинным заголовком и описанием";u.args={items:m([{...i[0],previewTitle:"Горячекатаный прокат НЛМК",titlePrefix:"Горячекатаный прокат НЛМК является основой для всех дальнейших переделов, и его качество гарантируется тщательно отработанной технологией производства. Основные потребительские достоинства горячекатаной стали заложены в структуре металла и на 60% зависят от поступающего полуфабриката — слябов НЛМК, которые закладывают химический состав, чистоту металла и качество поверхности.",descriptionPrefix:"За четким соблюдением необходимых параметров следят томографические и рентгеновские системы: каждая марка стали охлаждается с определенной скоростью и до нужного и заранее установленного для нее предела температуры, обретая свои главные потребительские свойства: прочность, штампуемость, пластичность и потенциал получения специальных магнитных свойств."},{...i[1],previewTitle:"За четким соблюдением необходимых параметров следят томографические и рентгеновские системы"}],2),previewImgSize:180};const v=e=>{const t=e.items?.[0]?.id,[p,s]=S.useState(()=>t==null?{}:{[String(t)]:!0}),o=({item:a,checked:n})=>{const c=String(a.id);s(d=>({...d,[c]:n}))};return r.jsx(k,{p:24,background:"var(--steel-10)",borderRadius:8,children:r.jsx(P,{...e,checkedMap:p,handleCheckbox:o})})};v.storyName="ImagePreview без изображения";v.args={items:m([{previewSrc:"",fullSrc:"",previewTitle:"name-1.file",titlePrefix:"Файл",descriptionPrefix:"Неграфический файл"},{previewSrc:"",fullSrc:"",previewTitle:"name-2.file",titlePrefix:"Файл",descriptionPrefix:"Неграфический файл"},{previewSrc:"",fullSrc:"",PlaceholderSvgIcon:r.jsx(E,{}),previewTitle:"name-3.docx",titlePrefix:"Файл",descriptionPrefix:"Неграфический файл"},i[0],i[1]],5),previewImgSize:180};const f=({items:e,activeIndex:t=0,showDownloadButton:p=!0,classNameModal:s,portalContainerId:o,zoomDisabled:a})=>{const[n,c]=S.useState(!1),[d,M]=S.useState(t);return r.jsxs(k,{p:24,children:[!n&&r.jsx(j,{onClick:()=>c(!0),variant:"primary",children:"Открыть модальное окно"}),n&&r.jsx(T,{items:e,activeIndex:d,setActiveIndex:M,onClose:()=>c(!1),showDownloadButton:p,classNameModal:s,portalContainerId:o,zoomDisabled:a})]})},w=()=>r.jsx(f,{items:m(i,5)});w.storyName="ImagePreviewModal по умолчанию";const I=()=>r.jsx(f,{items:m(i,3),zoomDisabled:!0});I.storyName="ImagePreviewModal без зума";const h=()=>r.jsx(f,{items:m([i[0]],1),showDownloadButton:!1,classNameModal:x["hide-sidebar"]});h.storyName="ImagePreviewModal с одной картинкой без кнопки для загрузки изображения";l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(argTypes: IImagePreviewProps): JSX.Element => {
  return <ImagePreview {...argTypes} />;
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(argTypes: IImagePreviewProps): JSX.Element => {
  const secondId = argTypes.items?.[1]?.id;
  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>(() => secondId == null ? {} : {
    [String(secondId)]: true
  });
  const handleCheckbox = ({
    item,
    checked
  }: {
    item: IImageItem;
    checked: boolean;
  }) => {
    const key = String(item.id);
    setCheckedMap(prev => ({
      ...prev,
      [key]: checked
    }));
  };
  return <ImagePreview {...argTypes} checkedMap={checkedMap} handleCheckbox={handleCheckbox} />;
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(argTypes: IImagePreviewProps): JSX.Element => {
  return <ImagePreview {...argTypes} />;
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`(argTypes: IImagePreviewProps): JSX.Element => {
  const alreadyChecked = argTypes.items?.[0]?.id;
  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>(() => alreadyChecked == null ? {} : {
    [String(alreadyChecked)]: true
  });
  const handleCheckbox = ({
    item,
    checked
  }: {
    item: IImageItem;
    checked: boolean;
  }) => {
    const key = String(item.id);
    setCheckedMap(prev => ({
      ...prev,
      [key]: checked
    }));
  };
  return <Box p={24} background="var(--steel-10)" borderRadius={8}>
      <ImagePreview {...argTypes} checkedMap={checkedMap} handleCheckbox={handleCheckbox} />
    </Box>;
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`(): JSX.Element => {
  return <ModalStory items={makeItems(MOCK_ITEMS, 5)} />;
}`,...w.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`(): JSX.Element => {
  return <ModalStory items={makeItems(MOCK_ITEMS, 3)} zoomDisabled />;
}`,...I.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`(): JSX.Element => {
  return <ModalStory items={makeItems([MOCK_ITEMS[0]], 1)} showDownloadButton={false} classNameModal={styles['hide-sidebar']} />;
}`,...h.parameters?.docs?.source}}};const he=["ImagePreviewDefault","ImagePreviewCheckbox","ImagePreviewLongTitle","ImagePreviewNoPreviewSrc","ImagePreviewModalDefault","ImagePreviewModalZoomDisabled","ImagePreviewModalSingle"];export{g as ImagePreviewCheckbox,l as ImagePreviewDefault,u as ImagePreviewLongTitle,w as ImagePreviewModalDefault,h as ImagePreviewModalSingle,I as ImagePreviewModalZoomDisabled,v as ImagePreviewNoPreviewSrc,he as __namedExportsOrder,Ie as default};
