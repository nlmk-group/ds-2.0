import{j as o}from"./clsx.m-3764cf42.js";import{B as e}from"./index-cd305b84.js";import{I as n}from"./IconArticle24-414bfa4c.js";import{a as i}from"./argsTypes-34359838.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-fb030d50.js";import"./IconsList.module-e4fe8555.js";const p="_wrapper_hzl1h_1",m="_table_hzl1h_8",l={wrapper:p,table:m},u=t=>o("div",{style:{minHeight:80},children:t()}),w={title:"Components/Button/Stories",component:e,decorators:[u],argTypes:i},r=t=>o("div",{className:l.wrapper,children:t.iconButton?o(e,{...t,iconButton:o(n,{})}):o(e,{...t,startIcon:t.startIcon&&o(n,{}),endIcon:t.endIcon&&o(n,{}),children:"Button"})});r.storyName="Кнопка по умолчанию";var s,a,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`(argTypes: IButtonProps): JSX.Element => {
  return <div className={styles.wrapper}>
      {argTypes.iconButton ? <Button {...argTypes} iconButton={<IconArticle24 />} /> : <Button {...argTypes} startIcon={argTypes.startIcon && <IconArticle24 />} endIcon={argTypes.endIcon && <IconArticle24 />}>
          Button
        </Button>}
    </div>;
}`,...(c=(a=r.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const v=["ButtonDefault"];export{r as ButtonDefault,v as __namedExportsOrder,w as default};
