import{j as n,a as r,F as V}from"./clsx.m-CcuEzMhP.js";import{d as v,e as z,E as h,O as u,B as e,P as s,N as R}from"./index-eGAKGCMw.js";import"./generateUUID-BkPc_NdJ.js";import"./index-SiU_55iz.js";import"./index-BzeUb5Di.js";import"./index-fbTu1Hcf.js";import"./index-CpJBQeN-.js";import"./index-hvdSV1r-.js";import"./index-BQVY97ak.js";import"./index-B5tj7Glx.js";import"./index-14g2znra.js";import{f as p,g as A,h as P,i as x}from"./32-BmhDzcbC.js";import"./index-CBqU2yxZ.js";import{a as i}from"./chunk-WFFRPTHA-B5TewAtn.js";import{s as F}from"./styles.module-DeLvTIFi.js";import{c as M,D as U,B as D,a as H,b as L,d as W}from"./text-yfQZFYbM.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-BO3pQ7ot.js";import"./preview-errors-Dg5lG0lC.js";import"./index-DrFu-skq.js";const Z=Object.values(v),q=Object.values(z),J=Object.values(h),K=a=>{const o=[];return Z.forEach(t=>{q.forEach(c=>{a?J.forEach(l=>{o.push({variant:t,fill:c,size:l})}):o.push({variant:t,fill:c})})}),o},Q=a=>n("div",{style:{width:"fit-content"},className:F.wrapper,children:a()}),On={title:"Components/ButtonGroup/Stories",component:u,decorators:[Q],argTypes:M},m=a=>r(u,{...a,children:[n(e,{onClick:i("onClick"),children:"Button"}),n(e,{onClick:i("onClick"),children:"Button"}),n(e,{onClick:i("onClick"),children:"Button"})]});m.storyName=U;const B=a=>n("div",{className:s["showcase-wrapper-column"],children:Object.values(h).map(o=>r(u,{...a,size:a.size||o,children:[r(e,{onClick:i("onClick"),children:["Size ",o]}),r(e,{onClick:i("onClick"),children:["Size ",o]}),r(e,{onClick:i("onClick"),children:["Size ",o]})]},o))});B.storyName=D;const k=a=>n("div",{className:s["showcase-wrapper-row"],children:Object.values(v).map(o=>n("div",{className:s["showcase-wrapper-column"],children:Object.values(h).map(t=>r(u,{size:t,variant:o,...a,children:[n(e,{onClick:i("onClick"),children:o}),n(e,{onClick:i("onClick"),children:o}),n(e,{onClick:i("onClick"),children:o})]},`${o}_${t}`))},o))});k.storyName=H;const d=a=>n("div",{className:s["showcase-wrapper-row"],children:Object.values(v).map(o=>n("div",{className:s["showcase-wrapper-column"],children:Object.values(h).map(t=>r(u,{size:t,variant:o,...a,children:[n(e,{onClick:i("onClick"),children:o}),n(e,{onClick:i("onClick"),children:o}),n(e,{onClick:i("onClick"),children:o})]},`${o}_${t}`))},o))});d.storyName=L;d.args={orientation:R.vertical};const C=a=>r("div",{children:[n("div",{className:s["showcase-wrapper-column"],children:K(!0).map(o=>{const{fill:t,variant:c,size:l}=o;return c===v.secondary&&(t===z.outline||t===z.clear)?n(V,{}):r(u,{variant:c,fill:t,size:a.size||l,...a,children:[r(e,{startIcon:n(p,{}),endIcon:n(p,{}),badge:1,onClick:i("onClick"),children:[c," ",t," ",l]}),r(e,{startIcon:n(p,{}),endIcon:n(p,{}),badge:1,onClick:i("onClick"),children:[c," ",t," ",l]}),r(e,{startIcon:n(p,{}),endIcon:n(p,{}),badge:1,onClick:i("onClick"),children:[c," ",t," ",l]})]},`${c}_${t}_${l}`)})}),n("div",{style:{marginBottom:"12px"}}),n("div",{className:s["showcase-wrapper-row"],children:Object.values(v).map(o=>n("div",{className:s["showcase-wrapper-column"],children:Object.values(h).map(t=>r(u,{size:a.size||t,variant:o,...a,children:[n(e,{onClick:i("onClick"),iconButton:n(A,{})}),n(e,{onClick:i("onClick"),iconButton:n(P,{})}),n(e,{onClick:i("onClick"),iconButton:n(x,{})})]},`${o}_${t}`))},o))})]});C.storyName=W;var w,y,O;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`(argTypes: IButtonGroup): ReactNode => {
  return <ButtonGroup {...argTypes}>
      <Button onClick={action('onClick')}>Button</Button>
      <Button onClick={action('onClick')}>Button</Button>
      <Button onClick={action('onClick')}>Button</Button>
    </ButtonGroup>;
}`,...(O=(y=m.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var g,G,I;B.parameters={...B.parameters,docs:{...(g=B.parameters)==null?void 0:g.docs,source:{originalSource:`(argTypes: IButtonGroup): ReactNode => {
  return <div className={style['showcase-wrapper-column']}>
      {Object.values(ESizes).map((size: ESizes) => <ButtonGroup key={size} {...argTypes} size={argTypes.size || size}>
          <Button onClick={action('onClick')}>Size {size}</Button>
          <Button onClick={action('onClick')}>Size {size}</Button>
          <Button onClick={action('onClick')}>Size {size}</Button>
        </ButtonGroup>)}
    </div>;
}`,...(I=(G=B.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var N,f,E;k.parameters={...k.parameters,docs:{...(N=k.parameters)==null?void 0:N.docs,source:{originalSource:`(argTypes: IButtonGroup): ReactNode => {
  return <div className={style['showcase-wrapper-row']}>
      {Object.values(EVariant).map((gradient: EVariant) => <div key={gradient} className={style['showcase-wrapper-column']}>
          {Object.values(ESizes).map((size: ESizes) => <ButtonGroup key={\`\${gradient}_\${size}\`} size={size} variant={gradient} {...argTypes}>
              <Button onClick={action('onClick')}>{gradient}</Button>
              <Button onClick={action('onClick')}>{gradient}</Button>
              <Button onClick={action('onClick')}>{gradient}</Button>
            </ButtonGroup>)}
        </div>)}
    </div>;
}`,...(E=(f=k.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var b,S,T;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`(argTypes: IButtonGroup): ReactNode => {
  return <div className={style['showcase-wrapper-row']}>
      {Object.values(EVariant).map((gradient: EVariant) => <div key={gradient} className={style['showcase-wrapper-column']}>
          {Object.values(ESizes).map((size: ESizes) => <ButtonGroup key={\`\${gradient}_\${size}\`} size={size} variant={gradient} {...argTypes}>
              <Button onClick={action('onClick')}>{gradient}</Button>
              <Button onClick={action('onClick')}>{gradient}</Button>
              <Button onClick={action('onClick')}>{gradient}</Button>
            </ButtonGroup>)}
        </div>)}
    </div>;
}`,...(T=(S=d.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var _,j,$;C.parameters={...C.parameters,docs:{...(_=C.parameters)==null?void 0:_.docs,source:{originalSource:`(argTypes: IButtonGroup): ReactNode => {
  return <div>
      <div className={style['showcase-wrapper-column']}>
        {combinedOptions(true).map((option: IcombinedOption) => {
        const {
          fill,
          variant,
          size
        } = option;
        if (variant === EVariant.secondary && (fill === EFill.outline || fill === EFill.clear)) return <></>;
        return <ButtonGroup key={\`\${variant}_\${fill}_\${size}\`} variant={variant} fill={fill} size={argTypes.size || size} {...argTypes}>
              <Button startIcon={<IconArticleOutlined32 />} endIcon={<IconArticleOutlined32 />} badge={1} onClick={action('onClick')}>
                {variant} {fill} {size}
              </Button>
              <Button startIcon={<IconArticleOutlined32 />} endIcon={<IconArticleOutlined32 />} badge={1} onClick={action('onClick')}>
                {variant} {fill} {size}
              </Button>
              <Button startIcon={<IconArticleOutlined32 />} endIcon={<IconArticleOutlined32 />} badge={1} onClick={action('onClick')}>
                {variant} {fill} {size}
              </Button>
            </ButtonGroup>;
      })}
      </div>
      <div style={{
      marginBottom: '12px'
    }} />
      <div className={style['showcase-wrapper-row']}>
        {Object.values(EVariant).map((gradient: EVariant) => <div key={gradient} className={style['showcase-wrapper-column']}>
            {Object.values(ESizes).map((size: ESizes) => <ButtonGroup key={\`\${gradient}_\${size}\`} size={argTypes.size || size} variant={gradient} {...argTypes}>
                <Button onClick={action('onClick')} iconButton={<IconInfoOutlined32 />} />
                <Button onClick={action('onClick')} iconButton={<IconMixer32 />} />
                <Button onClick={action('onClick')} iconButton={<IconHandPanToolPalmsOutlined32 />} />
              </ButtonGroup>)}
          </div>)}
      </div>
    </div>;
}`,...($=(j=C.parameters)==null?void 0:j.docs)==null?void 0:$.source}}};const gn=["DefaultButtonGroup","ButtonGroupSizes","ButtonGroupGradient","ButtonGroupVertical","ButtonGroupVariations"];export{k as ButtonGroupGradient,B as ButtonGroupSizes,C as ButtonGroupVariations,d as ButtonGroupVertical,m as DefaultButtonGroup,gn as __namedExportsOrder,On as default};
