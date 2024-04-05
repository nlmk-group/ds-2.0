import{j as n,a as p}from"./jsx-runtime-2xDJh5tt.js";import{T as i}from"./index-CkVMA9Py.js";import{a as S}from"./argsTypes-7B4xoQB2.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx.m-CH7BE6MN.js";const v="_wrapper_534sx_1",E="_table_534sx_7",H="_row_534sx_12",a={wrapper:v,table:E,row:H},C=e=>n("div",{style:{minHeight:80},children:e()}),b={title:"Components/Typography/Stories",component:i,decorators:[C],argTypes:S},u=e=>n("div",{className:a.wrapper,style:{color:"var(--text-grey-900)"},children:n(i,{...e,children:"Default Typography Component"})});u.storyName="Типография по умолчанию";const o=()=>{const e=[{title:"Heading1",fontSize:48,lineHeight:56,fontWeight:700,description:"Заголовок"},{title:"Subheading1",fontSize:32,lineHeight:40,fontWeight:400,description:"Подзаголовок"},{title:"Heading2",fontSize:32,lineHeight:40,fontWeight:700,description:"Заголовок"},{title:"Subheading2",fontSize:24,lineHeight:32,fontWeight:400,description:"Подзаголовок"},{title:"Subheading2-Medium",fontSize:24,lineHeight:32,fontWeight:500,description:"Подзаголовок"},{title:"Heading3",fontSize:24,lineHeight:32,fontWeight:700,description:"Заголовок"},{title:"Subheading3",fontSize:20,lineHeight:28,fontWeight:400,description:"Подзаголовок"},{title:"Subheading3-Medium",fontSize:20,lineHeight:28,fontWeight:500,description:"Подзаголовок"},{title:"Heading4",fontSize:20,lineHeight:28,fontWeight:700,description:"Заголовок"},{title:"Body1",fontSize:16,lineHeight:22,fontWeight:400,description:"Текст контента тонкий"},{title:"Body1-Medium",fontSize:16,lineHeight:22,fontWeight:500,description:"Текст инпутов, ячеек таблиц, контента"},{title:"Body1-Bold",fontSize:16,lineHeight:22,fontWeight:700,description:"Текст в кнопках, жирный текст у активных элементов"},{title:"Body2",fontSize:14,lineHeight:18,fontWeight:400,description:"Текст контента тонкий"},{title:"Body2-Medium",fontSize:14,lineHeight:18,fontWeight:500,description:"Текст инпутов, ячеек таблиц, контента"},{title:"Body2-Bold",fontSize:14,lineHeight:18,fontWeight:700,description:"Текст в кнопках, жирный текст у активных элементов"},{title:"Caption",fontSize:12,lineHeight:16,fontWeight:400,description:"Текст мелких подписей, шкал графиков"},{title:"Caption-Medium",fontSize:12,lineHeight:16,fontWeight:500,description:"Текст мелких подписей, шкал графиков"},{title:"Caption-Bold",fontSize:12,lineHeight:16,fontWeight:700,description:"Текст мелких подписей, шкал графиков"}];return n("div",{className:a.wrapper,children:n("div",{className:a.table,children:e.map(t=>p("div",{className:a.row,children:[n(i,{variant:t.title,color:"primary",children:t.title}),p(i,{color:"primary",children:[t.fontSize," - ",t.lineHeight]}),n(i,{color:"primary",children:t.fontWeight}),n(i,{color:"primary",children:t.description})]},t.title))})})};o.storyName="Варианты типографии";const r=()=>p("div",{className:a.wrapper,style:{display:"flex",flexDirection:"column",gap:"12px"},children:[n(i,{variant:"Heading1",color:"primary",children:"variant: Heading1, color: primary"}),n(i,{variant:"Subheading2-Medium",color:"secondary",children:"variant: Subheading2-Medium, color: secondary"}),n(i,{variant:"Caption",color:"hint",children:"variant: Caption, color: hint"}),n(i,{variant:"Caption-Bold",color:"disabled",children:"variant: Caption-Bold, color: disabled"}),n(i,{variant:"Caption",color:"error",children:"variant: Caption, color: error"}),n(i,{variant:"Caption",color:"success",children:"variant: Caption, color: success"}),n(i,{variant:"Caption",color:"warning",children:"variant: Caption, color: warning"}),n(i,{variant:"Caption",color:"info",children:"variant: Caption, color: info"}),n(i,{variant:"Caption",color:"textPrimary",children:"variant: Caption, color: textPrimary"}),n(i,{variant:"Caption",color:"textSecondary",children:"variant: Caption, color: textSecondary"})]});r.storyName="Цвета типографии";var l,c,d;u.parameters={...u.parameters,docs:{...(l=u.parameters)==null?void 0:l.docs,source:{originalSource:`(argsTypes: any): JSX.Element => {
  return <div className={styles.wrapper} style={{
    color: 'var(--text-grey-900)'
  }}>
      <Typography {...argsTypes}>Default Typography Component</Typography>
    </div>;
}`,...(d=(c=u.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var s,g,h;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`(): JSX.Element => {
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
    description: 'Текст мелких подписей, шкал графиков'
  }, {
    title: 'Caption-Medium',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 500,
    description: 'Текст мелких подписей, шкал графиков'
  }, {
    title: 'Caption-Bold',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 700,
    description: 'Текст мелких подписей, шкал графиков'
  }];
  return <div className={styles.wrapper}>
      <div className={styles.table}>
        {rows.map(variant => <div key={variant.title} className={styles.row}>
            <Typography variant={(variant.title as TVariant)} color="primary">
              {variant.title}
            </Typography>
            <Typography color="primary">
              {variant.fontSize} - {variant.lineHeight}
            </Typography>
            <Typography color="primary">{variant.fontWeight}</Typography>
            <Typography color="primary">{variant.description}</Typography>
          </div>)}
      </div>
    </div>;
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,f,m;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper} style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Typography variant="Heading1" color="primary">
        variant: Heading1, color: primary
      </Typography>
      <Typography variant="Subheading2-Medium" color="secondary">
        variant: Subheading2-Medium, color: secondary
      </Typography>
      <Typography variant="Caption" color="hint">
        variant: Caption, color: hint
      </Typography>
      <Typography variant="Caption-Bold" color="disabled">
        variant: Caption-Bold, color: disabled
      </Typography>
      <Typography variant="Caption" color="error">
        variant: Caption, color: error
      </Typography>
      <Typography variant="Caption" color="success">
        variant: Caption, color: success
      </Typography>
      <Typography variant="Caption" color="warning">
        variant: Caption, color: warning
      </Typography>
      <Typography variant="Caption" color="info">
        variant: Caption, color: info
      </Typography>
      <Typography variant="Caption" color="textPrimary">
        variant: Caption, color: textPrimary
      </Typography>
      <Typography variant="Caption" color="textSecondary">
        variant: Caption, color: textSecondary
      </Typography>
    </div>;
}`,...(m=(f=r.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};const x=["TypographyDefault","TypographyVariants","TypographyColor"];export{r as TypographyColor,u as TypographyDefault,o as TypographyVariants,x as __namedExportsOrder,b as default};
