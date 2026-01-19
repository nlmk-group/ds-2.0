import{j as i}from"./iframe-tXE4xoYc.js";import{T as e}from"./index-IJbXH1LS.js";import{a as d}from"./argsTypes-JSRsgyqy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";const g="Typography-stories-module__wrapper___0f9IW",s="Typography-stories-module__table___jzCVT",h="Typography-stories-module__row___yGiJ0",r={wrapper:g,table:s,row:h},p=o=>i.jsx("div",{style:{minHeight:80},children:i.jsx(o,{})}),H={title:"Components/Typography/Stories",component:e,decorators:[p],argTypes:d},n=o=>i.jsx("div",{className:r.wrapper,children:i.jsx(e,{...o,children:"Default Typography Component"})});n.storyName="Типография по умолчанию";const l=()=>{const o=[{title:"Heading1",fontSize:48,lineHeight:56,fontWeight:700,description:"Заголовок"},{title:"Subheading1",fontSize:32,lineHeight:40,fontWeight:400,description:"Подзаголовок"},{title:"Heading2",fontSize:32,lineHeight:40,fontWeight:700,description:"Заголовок"},{title:"Subheading2",fontSize:24,lineHeight:32,fontWeight:400,description:"Подзаголовок"},{title:"Subheading2-Medium",fontSize:24,lineHeight:32,fontWeight:500,description:"Подзаголовок"},{title:"Heading3",fontSize:24,lineHeight:32,fontWeight:700,description:"Заголовок"},{title:"Subheading3",fontSize:20,lineHeight:28,fontWeight:400,description:"Подзаголовок"},{title:"Subheading3-Medium",fontSize:20,lineHeight:28,fontWeight:500,description:"Подзаголовок"},{title:"Heading4",fontSize:20,lineHeight:28,fontWeight:700,description:"Заголовок"},{title:"Body",fontSize:18,lineHeight:24,fontWeight:400,description:""},{title:"Body-Medium",fontSize:18,lineHeight:24,fontWeight:500,description:""},{title:"Body-Bold",fontSize:18,lineHeight:24,fontWeight:700,description:""},{title:"Body1",fontSize:16,lineHeight:22,fontWeight:400,description:"Текст контента тонкий"},{title:"Body1-Medium",fontSize:16,lineHeight:22,fontWeight:500,description:"Текст инпутов, ячеек таблиц, контента"},{title:"Body1Table-Medium",fontSize:16,lineHeight:16,fontWeight:500,description:"Текст для ячеек таблиц 40px и 32px"},{title:"Body1Mono-Medium",fontSize:16,lineHeight:22,fontWeight:500,description:"Текст для цифр в ячейках таблиц"},{title:"Body1Mono-Bold",fontSize:16,lineHeight:22,fontWeight:700,description:"Жирный текст для цифр в ячейках таблиц"},{title:"Body1-Bold",fontSize:16,lineHeight:22,fontWeight:700,description:"Текст в кнопках, жирный текст у активных элементов"},{title:"Body2",fontSize:14,lineHeight:18,fontWeight:400,description:"Текст контента тонкий"},{title:"Body2-Medium",fontSize:14,lineHeight:18,fontWeight:500,description:"Текст инпутов, ячеек таблиц, контента"},{title:"Body2Mono-Medium",fontSize:14,lineHeight:18,fontWeight:500,description:"Текст для цифр в ячейках таблиц"},{title:"Body2Mono-Bold",fontSize:14,lineHeight:18,fontWeight:700,description:"Жирный текст для цифр в ячейках таблиц"},{title:"Body2-Bold",fontSize:14,lineHeight:18,fontWeight:700,description:"Текст в кнопках, жирный текст у активных элементов"},{title:"Caption",fontSize:12,lineHeight:16,fontWeight:400,description:"Текст мелкий для подписей, шкал графиков"},{title:"Caption-Medium",fontSize:12,lineHeight:16,fontWeight:500,description:"Текст мелкий для подписей, шкал графиков"},{title:"Caption-Bold",fontSize:12,lineHeight:16,fontWeight:700,description:"Текст мелкий для подписей, шкал графиков"},{title:"CaptionMono",fontSize:12,lineHeight:16,fontWeight:400,description:"Моноширинное начертание для числовых данных"},{title:"CaptionMono-Medium",fontSize:12,lineHeight:16,fontWeight:500,description:"Моноширинное начертание для числовых данных"},{title:"CaptionMono-Bold",fontSize:12,lineHeight:16,fontWeight:700,description:"Моноширинное начертание для числовых данных"},{title:"Additional-Bold",fontSize:9,lineHeight:12,fontWeight:700,description:"Жирный текст для Badge XS"}];return i.jsx("div",{className:r.wrapper,children:i.jsx("div",{className:r.table,children:o.map(t=>i.jsxs("div",{className:r.row,children:[i.jsx(e,{variant:t.title,color:"var(--steel-90)",children:t.title}),i.jsxs(e,{color:"var(--steel-90)",children:[t.fontSize," - ",t.lineHeight]}),i.jsx(e,{color:"var(--steel-90)",children:t.fontWeight}),i.jsx(e,{color:"var(--steel-90)",children:t.description})]},t.title))})})};l.storyName="Варианты типографии";n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(argsTypes: any): JSX.Element => {
  return <div className={styles.wrapper}>
      <Typography {...argsTypes}>Default Typography Component</Typography>
    </div>;
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(): JSX.Element => {
  const rows = [{
    title: 'Heading1',
    fontSize: 48,
    lineHeight: 56,
    fontWeight: 700,
    description: 'Заголовок'
  }, {
    title: 'Subheading1',
    fontSize: 32,
    lineHeight: 40,
    fontWeight: 400,
    description: 'Подзаголовок'
  }, {
    title: 'Heading2',
    fontSize: 32,
    lineHeight: 40,
    fontWeight: 700,
    description: 'Заголовок'
  }, {
    title: 'Subheading2',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 400,
    description: 'Подзаголовок'
  }, {
    title: 'Subheading2-Medium',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 500,
    description: 'Подзаголовок'
  }, {
    title: 'Heading3',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 700,
    description: 'Заголовок'
  }, {
    title: 'Subheading3',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 400,
    description: 'Подзаголовок'
  }, {
    title: 'Subheading3-Medium',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 500,
    description: 'Подзаголовок'
  }, {
    title: 'Heading4',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 700,
    description: 'Заголовок'
  }, {
    title: 'Body',
    fontSize: 18,
    lineHeight: 24,
    fontWeight: 400,
    description: ''
  }, {
    title: 'Body-Medium',
    fontSize: 18,
    lineHeight: 24,
    fontWeight: 500,
    description: ''
  }, {
    title: 'Body-Bold',
    fontSize: 18,
    lineHeight: 24,
    fontWeight: 700,
    description: ''
  }, {
    title: 'Body1',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 400,
    description: 'Текст контента тонкий'
  }, {
    title: 'Body1-Medium',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 500,
    description: 'Текст инпутов, ячеек таблиц, контента'
  }, {
    title: 'Body1Table-Medium',
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 500,
    description: 'Текст для ячеек таблиц 40px и 32px'
  }, {
    title: 'Body1Mono-Medium',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 500,
    description: 'Текст для цифр в ячейках таблиц'
  }, {
    title: 'Body1Mono-Bold',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 700,
    description: 'Жирный текст для цифр в ячейках таблиц'
  }, {
    title: 'Body1-Bold',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 700,
    description: 'Текст в кнопках, жирный текст у активных элементов'
  }, {
    title: 'Body2',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: 400,
    description: 'Текст контента тонкий'
  }, {
    title: 'Body2-Medium',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: 500,
    description: 'Текст инпутов, ячеек таблиц, контента'
  }, {
    title: 'Body2Mono-Medium',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: 500,
    description: 'Текст для цифр в ячейках таблиц'
  }, {
    title: 'Body2Mono-Bold',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: 700,
    description: 'Жирный текст для цифр в ячейках таблиц'
  }, {
    title: 'Body2-Bold',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: 700,
    description: 'Текст в кнопках, жирный текст у активных элементов'
  }, {
    title: 'Caption',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 400,
    description: 'Текст мелкий для подписей, шкал графиков'
  }, {
    title: 'Caption-Medium',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 500,
    description: 'Текст мелкий для подписей, шкал графиков'
  }, {
    title: 'Caption-Bold',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 700,
    description: 'Текст мелкий для подписей, шкал графиков'
  }, {
    title: 'CaptionMono',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 400,
    description: 'Моноширинное начертание для числовых данных'
  }, {
    title: 'CaptionMono-Medium',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 500,
    description: 'Моноширинное начертание для числовых данных'
  }, {
    title: 'CaptionMono-Bold',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 700,
    description: 'Моноширинное начертание для числовых данных'
  }, {
    title: 'Additional-Bold',
    fontSize: 9,
    lineHeight: 12,
    fontWeight: 700,
    description: 'Жирный текст для Badge XS'
  }];
  return <div className={styles.wrapper}>
      <div className={styles.table}>
        {rows.map(variant => <div key={variant.title} className={styles.row}>
            <Typography variant={variant.title as ETypographyVariants} color="var(--steel-90)">
              {variant.title}
            </Typography>
            <Typography color="var(--steel-90)">
              {variant.fontSize} - {variant.lineHeight}
            </Typography>
            <Typography color="var(--steel-90)">{variant.fontWeight}</Typography>
            <Typography color="var(--steel-90)">{variant.description}</Typography>
          </div>)}
      </div>
    </div>;
}`,...l.parameters?.docs?.source}}};const z=["TypographyDefault","TypographyVariants"];export{n as TypographyDefault,l as TypographyVariants,z as __namedExportsOrder,H as default};
