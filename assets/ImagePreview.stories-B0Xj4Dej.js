import{j as r,r as I}from"./iframe-CE_JzATH.js";import{I as g}from"./index-pURGVU60.js";import{a as y}from"./argsTypes-WcU9-2zx.js";import{B as S}from"./index-2jg-3oeM.js";import{w as C}from"./index-MfvAP8aB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-BBICZI1L.js";import"./index-Vjux8dVh.js";import"./index-CuFOreg9.js";import"./index-1zCxhXDP.js";import"./index-C1XFyCw_.js";import"./generateUUID-M57HTP56.js";import"./index-Dlf_Ao8T.js";import"./16-DWPiS2iU.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-DGYmTzFV.js";import"./24-DEt0-nuC.js";import"./24-J6XSru0N.js";import"./index-BmicXPVL.js";import"./16-BkTHhwnS.js";import"./32-CrxSrIcc.js";import"./24-0Dk1wnnD.js";import"./24-BBq2cK-Y.js";import"./24-Cd5pTj28.js";import"./24-HbFaW7H_.js";import"./24-BQMnublh.js";import"./24-DzFwSmYQ.js";import"./24-CjAn70IH.js";import"./24-D38MhcLh.js";import"./16-BIs1fvk9.js";import"./16-p0CPjrKD.js";const _="ImagePreview-stories-module__wrapper___zLVqq",T="ImagePreview-stories-module__container___XKFWs",v={wrapper:_,container:T},u=(e,t)=>!e.length||t<=0?[]:Array.from({length:t},(h,n)=>{const i=e[n%e.length],o=n+1,d=i.titlePrefix??"Этап",l=i.descriptionPrefix??"Название фото",{titlePrefix:w,descriptionPrefix:b,...f}=i;return{...f,id:o,title:`${d} ${o}`,description:`${l} ${o}`}}),P="img/image_picture_mock.jpg",k="img/image_workers.jpg",x="img/avatar_mock.png",M=e=>r.jsx(S,{className:v.wrapper,justifyContent:"center",children:r.jsx("div",{className:v.container,children:r.jsx(e,{})})}),m=[{previewSrc:P,fullSrc:P,downloadName:"photo.jpg",alt:"Mock photo",titlePrefix:"Этап",descriptionPrefix:"Название фото",previewTitle:"Фотография"},{previewSrc:k,fullSrc:k,downloadName:"photo.jpg",alt:"Mock photo",titlePrefix:"Этап",descriptionPrefix:"Горячекатаный прокат НЛМК является основой для всех дальнейших переделов, и его качество гарантируется тщательно отработанной технологией производства. Основные потребительские достоинства горячекатаной стали заложены в структуре металла и на 60% зависят от поступающего полуфабриката — слябов НЛМК, которые закладывают химический состав, чистоту металла и качество поверхности."},{previewSrc:x,fullSrc:x,downloadName:"photo.png",alt:"Mock photo",titlePrefix:"Этап",descriptionPrefix:"Название фото",previewTitle:"Горячекатаный прокат широко востребован при строительстве нефтегазопроводов"}],ce={title:"Components/ImagePreview/Stories",component:g,decorators:[M],argTypes:y},a=e=>r.jsx(g,{...e});a.storyName="ImagePreview c несколькими изображениями";a.args={items:u(m,15),previewImgSize:180};const s=e=>{const t=e.items?.[1]?.id,[h,n]=I.useState(()=>t==null?{}:{[String(t)]:!0}),i=({item:o,checked:d})=>{const l=String(o.id);n(w=>({...w,[l]:d}))};return r.jsx(g,{...e,checkedMap:h,handleCheckbox:i})};s.storyName="ImagePreview c чекбоксом";s.args={items:u(m,5),previewImgSize:180};const c=e=>r.jsx(g,{...e});c.storyName="ImagePreview c длинным заголовком и описанием";c.args={items:u([{...m[0],previewTitle:"Горячекатаный прокат НЛМК",titlePrefix:"Горячекатаный прокат НЛМК является основой для всех дальнейших переделов, и его качество гарантируется тщательно отработанной технологией производства. Основные потребительские достоинства горячекатаной стали заложены в структуре металла и на 60% зависят от поступающего полуфабриката — слябов НЛМК, которые закладывают химический состав, чистоту металла и качество поверхности.",descriptionPrefix:"За четким соблюдением необходимых параметров следят томографические и рентгеновские системы: каждая марка стали охлаждается с определенной скоростью и до нужного и заранее установленного для нее предела температуры, обретая свои главные потребительские свойства: прочность, штампуемость, пластичность и потенциал получения специальных магнитных свойств."},{...m[1],previewTitle:"За четким соблюдением необходимых параметров следят томографические и рентгеновские системы"}],2),previewImgSize:180};const p=e=>{const t=e.items?.[0]?.id,[h,n]=I.useState(()=>t==null?{}:{[String(t)]:!0}),i=({item:o,checked:d})=>{const l=String(o.id);n(w=>({...w,[l]:d}))};return r.jsx(S,{p:24,background:"var(--steel-10)",borderRadius:8,children:r.jsx(g,{...e,checkedMap:h,handleCheckbox:i})})};p.storyName="ImagePreview без изображения";p.args={items:u([{previewSrc:"",fullSrc:"",previewTitle:"name-1.file",titlePrefix:"Файл",descriptionPrefix:"Неграфический файл"},{previewSrc:"",fullSrc:"",previewTitle:"name-2.file",titlePrefix:"Файл",descriptionPrefix:"Неграфический файл"},{previewSrc:"",fullSrc:"",PlaceholderSvgIcon:r.jsx(C,{}),previewTitle:"name-3.docx",titlePrefix:"Файл",descriptionPrefix:"Неграфический файл"},m[0],m[1]],5),previewImgSize:180};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(argTypes: IImagePreviewProps): JSX.Element => {
  return <ImagePreview {...argTypes} />;
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(argTypes: IImagePreviewProps): JSX.Element => {
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
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(argTypes: IImagePreviewProps): JSX.Element => {
  return <ImagePreview {...argTypes} />;
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(argTypes: IImagePreviewProps): JSX.Element => {
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
}`,...p.parameters?.docs?.source}}};const pe=["ImagePreviewDefault","ImagePreviewCheckbox","ImagePreviewLongTitle","ImagePreviewNoPreviewSrc"];export{s as ImagePreviewCheckbox,a as ImagePreviewDefault,c as ImagePreviewLongTitle,p as ImagePreviewNoPreviewSrc,pe as __namedExportsOrder,ce as default};
