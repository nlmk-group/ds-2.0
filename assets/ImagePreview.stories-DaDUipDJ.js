import{j as r,r as I}from"./iframe-B-8SjXGq.js";import{I as g}from"./index-BiLYqWzA.js";import{a as y}from"./argsTypes-WcU9-2zx.js";import{B as S}from"./index-CVbeuYKL.js";import{w as C}from"./index-DqQiUiOd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-CgN-9tGr.js";import"./index-BRmunlbh.js";import"./index-Dfriq7lO.js";import"./index-CA4vmu2I.js";import"./index-DmKJBqLb.js";import"./generateUUID-M57HTP56.js";import"./index-aEU1GZqG.js";import"./16-BNHSjjb0.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-CjfWKKEu.js";import"./24-Dnj2eOeL.js";import"./24-CcDcN9Vt.js";import"./index-DcMeZWW2.js";import"./16-BDcju3io.js";import"./32-CnDyPHET.js";import"./24-DwPXEH6E.js";import"./24-2N5QtnbH.js";import"./24-nrV1efA2.js";import"./24-BSP12KOo.js";import"./24-rC0gEzBb.js";import"./24-DxfkYE9X.js";import"./24-CBHgkWPK.js";import"./24-FlXbOQvU.js";import"./16-B09-A838.js";import"./16-Bjal1Kcy.js";const _="ImagePreview-stories-module__wrapper___zLVqq",T="ImagePreview-stories-module__container___XKFWs",v={wrapper:_,container:T},u=(e,t)=>!e.length||t<=0?[]:Array.from({length:t},(h,n)=>{const i=e[n%e.length],o=n+1,d=i.titlePrefix??"Этап",l=i.descriptionPrefix??"Название фото",{titlePrefix:w,descriptionPrefix:b,...f}=i;return{...f,id:o,title:`${d} ${o}`,description:`${l} ${o}`}}),P="img/image_picture_mock.jpg",k="img/image_workers.jpg",x="img/avatar_mock.png",M=e=>r.jsx(S,{className:v.wrapper,justifyContent:"center",children:r.jsx("div",{className:v.container,children:r.jsx(e,{})})}),m=[{previewSrc:P,fullSrc:P,downloadName:"photo.jpg",alt:"Mock photo",titlePrefix:"Этап",descriptionPrefix:"Название фото",previewTitle:"Фотография"},{previewSrc:k,fullSrc:k,downloadName:"photo.jpg",alt:"Mock photo",titlePrefix:"Этап",descriptionPrefix:"Горячекатаный прокат НЛМК является основой для всех дальнейших переделов, и его качество гарантируется тщательно отработанной технологией производства. Основные потребительские достоинства горячекатаной стали заложены в структуре металла и на 60% зависят от поступающего полуфабриката — слябов НЛМК, которые закладывают химический состав, чистоту металла и качество поверхности."},{previewSrc:x,fullSrc:x,downloadName:"photo.png",alt:"Mock photo",titlePrefix:"Этап",descriptionPrefix:"Название фото",previewTitle:"Горячекатаный прокат широко востребован при строительстве нефтегазопроводов"}],ce={title:"Components/ImagePreview/Stories",component:g,decorators:[M],argTypes:y},a=e=>r.jsx(g,{...e});a.storyName="ImagePreview c несколькими изображениями";a.args={items:u(m,15),previewImgSize:180};const s=e=>{const t=e.items?.[1]?.id,[h,n]=I.useState(()=>t==null?{}:{[String(t)]:!0}),i=({item:o,checked:d})=>{const l=String(o.id);n(w=>({...w,[l]:d}))};return r.jsx(g,{...e,checkedMap:h,handleCheckbox:i})};s.storyName="ImagePreview c чекбоксом";s.args={items:u(m,5),previewImgSize:180};const c=e=>r.jsx(g,{...e});c.storyName="ImagePreview c длинным заголовком и описанием";c.args={items:u([{...m[0],previewTitle:"Горячекатаный прокат НЛМК",titlePrefix:"Горячекатаный прокат НЛМК является основой для всех дальнейших переделов, и его качество гарантируется тщательно отработанной технологией производства. Основные потребительские достоинства горячекатаной стали заложены в структуре металла и на 60% зависят от поступающего полуфабриката — слябов НЛМК, которые закладывают химический состав, чистоту металла и качество поверхности.",descriptionPrefix:"За четким соблюдением необходимых параметров следят томографические и рентгеновские системы: каждая марка стали охлаждается с определенной скоростью и до нужного и заранее установленного для нее предела температуры, обретая свои главные потребительские свойства: прочность, штампуемость, пластичность и потенциал получения специальных магнитных свойств."},{...m[1],previewTitle:"За четким соблюдением необходимых параметров следят томографические и рентгеновские системы"}],2),previewImgSize:180};const p=e=>{const t=e.items?.[0]?.id,[h,n]=I.useState(()=>t==null?{}:{[String(t)]:!0}),i=({item:o,checked:d})=>{const l=String(o.id);n(w=>({...w,[l]:d}))};return r.jsx(S,{p:24,background:"var(--steel-10)",borderRadius:8,children:r.jsx(g,{...e,checkedMap:h,handleCheckbox:i})})};p.storyName="ImagePreview без изображения";p.args={items:u([{previewSrc:"",fullSrc:"",previewTitle:"name-1.file",titlePrefix:"Файл",descriptionPrefix:"Неграфический файл"},{previewSrc:"",fullSrc:"",previewTitle:"name-2.file",titlePrefix:"Файл",descriptionPrefix:"Неграфический файл"},{previewSrc:"",fullSrc:"",PlaceholderSvgIcon:r.jsx(C,{}),previewTitle:"name-3.docx",titlePrefix:"Файл",descriptionPrefix:"Неграфический файл"},m[0],m[1]],5),previewImgSize:180};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(argTypes: IImagePreviewProps): JSX.Element => {
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
