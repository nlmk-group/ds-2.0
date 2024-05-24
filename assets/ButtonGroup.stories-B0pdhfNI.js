import{j as e,a as v}from"./jsx-runtime-2xDJh5tt.js";import{d as u,e as O,b as s,Q as p,B as c,R as t,P as x}from"./index-CPpCWzCZ.js";import"./generateUUID-C4dJbmAm.js";import"./index-DdUHXjGd.js";import"./index-D60oXbFF.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import"./index-nWYpQihe.js";import"./index-tm22VGJr.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-D-OkhesI.js";import{r as P,q as R,s as M,t as H,u as U,v as D,w as F,x as L}from"./32-CjiFhZy5.js";import"./index-CBqU2yxZ.js";import{a as l}from"./chunk-WFFRPTHA-B5TewAtn.js";import{s as q}from"./styles.module-DeLvTIFi.js";import{c as Q,D as W,B as Z,a as J,b as K,d as X}from"./text-SvVW5e7p.js";import"./clsx.m-CH7BE6MN.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-CMH8wQUv.js";import"./preview-errors-Dg5lG0lC.js";import"./index-DrFu-skq.js";const Y=Object.values(u),ee=Object.values(O),ne=Object.values(s),ae=i=>{const n=[];return Y.forEach(a=>{ee.forEach(r=>{i?ne.forEach(o=>{n.push({variant:a,fill:r,size:o})}):n.push({variant:a,fill:r})})}),n},ie=i=>e("div",{style:{width:"fit-content"},className:q.wrapper,children:i()}),fe={title:"Components/ButtonGroup/Stories",component:p,decorators:[ie],argTypes:Q},w=i=>e(p,{...i,children:[...Array(3)].map((n,a)=>e(c,{onClick:l("onClick"),children:"Button"},a))});w.storyName=W;const y=i=>e("div",{className:t["showcase-wrapper-column"],children:Object.values(s).map((n,a)=>e(p,{...i,size:i.size||n,children:[...Array(3)].map((r,o)=>v(c,{onClick:l("onClick"),children:["Size ",n]},o+n))},`${n}${a}`))});y.storyName=Z;const B=i=>v("div",{className:t["showcase-wrapper-column"],children:[e("div",{className:t["showcase-wrapper-row"],children:Object.values(u).map(n=>e("div",{className:t["showcase-wrapper-column"],children:Object.values(s).map(a=>e(p,{size:a,variant:n,...i,children:[...Array(3)].map((r,o)=>e(c,{onClick:l("onClick"),children:"gradient"},o))},`${n}_${a}`))},n))}),e("div",{className:t["showcase-wrapper-row"],children:Object.values(u).map(n=>e("div",{className:t["showcase-wrapper-column"],children:Object.values(s).map(a=>e(p,{size:a,variant:n,disabled:!0,...i,children:[...Array(3)].map((r,o)=>e(c,{onClick:l("onClick"),children:"gradient"},o))},`${n}_${a}`))},n))})]});B.storyName=J;const m=i=>v("div",{className:t["showcase-wrapper-column"],children:[e("div",{className:t["showcase-wrapper-row"],children:Object.values(u).map(n=>e("div",{className:t["showcase-wrapper-column"],children:Object.values(s).map(a=>e(p,{size:a,variant:n,...i,children:[...Array(3)].map((r,o)=>e(c,{onClick:l("onClick"),children:"gradient"},o))},`${n}_${a}`))},n))}),e("div",{className:t["showcase-wrapper-row"],children:Object.values(u).map(n=>e("div",{className:t["showcase-wrapper-column"],children:Object.values(s).map(a=>e(p,{size:a,variant:n,disabled:!0,...i,children:[...Array(3)].map((r,o)=>e(c,{onClick:l("onClick"),children:"gradient"},o))},`${n}_${a}`))},n))})]});m.storyName=K;m.args={orientation:x.vertical};const h=i=>v("div",{children:[e("div",{className:t["showcase-wrapper-column"],children:ae(!0).map((n,a)=>{const{fill:r,variant:o,size:d}=n,k=d===s.xs?e(P,{}):e(R,{});return o===u.secondary&&(r===O.outline||r===O.clear)?e("div",{},a):e(p,{variant:o,fill:r,size:i.size||d,...i,children:[...Array(3)].map((re,A)=>v(c,{startIcon:k,endIcon:k,badge:1,onClick:l("onClick"),children:[o," ",r," ",d]},A))},`${o}_${r}_${d}`)})}),e("div",{style:{marginBottom:"12px"}}),e("div",{className:t["showcase-wrapper-row"],children:Object.values(u).map((n,a)=>e("div",{className:t["showcase-wrapper-column"],children:Object.values(s).map(r=>{const o=r===s.xs?e(M,{}):e(H,{}),d=r===s.xs?e(U,{}):e(D,{}),k=r===s.xs?e(F,{}):e(L,{});return v(p,{size:i.size||r,variant:n,...i,children:[e(c,{onClick:l("onClick"),iconButton:o}),e(c,{onClick:l("onClick"),iconButton:d}),e(c,{onClick:l("onClick"),iconButton:k})]},`${n}_${r}`)})},n+a))})]});h.storyName=X;var z,N,g;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`(argTypes: IButtonGroup): ReactNode => {
  return <ButtonGroup {...argTypes}>
      {[...Array(3)].map((_, i) => <Button key={i} onClick={action('onClick')}>
          Button
        </Button>)}
    </ButtonGroup>;
}`,...(g=(N=w.parameters)==null?void 0:N.docs)==null?void 0:g.source}}};var C,G,_;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`(argTypes: IButtonGroup): ReactNode => {
  return <div className={style['showcase-wrapper-column']}>
      {Object.values(ESizes).map((size: ESizes, i) => <ButtonGroup key={\`\${size}\${i}\`} {...argTypes} size={argTypes.size || size}>
          {[...Array(3)].map((_, i) => <Button key={i + size} onClick={action('onClick')}>
              Size {size}
            </Button>)}
        </ButtonGroup>)}
    </div>;
}`,...(_=(G=y.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var E,I,b;B.parameters={...B.parameters,docs:{...(E=B.parameters)==null?void 0:E.docs,source:{originalSource:`(argTypes: IButtonGroup): ReactNode => {
  return <div className={style['showcase-wrapper-column']}>
      <div className={style['showcase-wrapper-row']}>
        {Object.values(EVariant).map((gradient: EVariant) => <div key={gradient} className={style['showcase-wrapper-column']}>
            {Object.values(ESizes).map((size: ESizes) => <ButtonGroup key={\`\${gradient}_\${size}\`} size={size} variant={gradient} {...argTypes}>
                {[...Array(3)].map((_, i) => <Button key={i} onClick={action('onClick')}>
                    gradient
                  </Button>)}
              </ButtonGroup>)}
          </div>)}
      </div>
      <div className={style['showcase-wrapper-row']}>
        {Object.values(EVariant).map((gradient: EVariant) => <div key={gradient} className={style['showcase-wrapper-column']}>
            {Object.values(ESizes).map((size: ESizes) => <ButtonGroup key={\`\${gradient}_\${size}\`} size={size} variant={gradient} disabled {...argTypes}>
                {[...Array(3)].map((_, i) => <Button key={i} onClick={action('onClick')}>
                    gradient
                  </Button>)}
              </ButtonGroup>)}
          </div>)}
      </div>
    </div>;
}`,...(b=(I=B.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var f,S,$;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`(argTypes: IButtonGroup): ReactNode => {
  return <div className={style['showcase-wrapper-column']}>
      <div className={style['showcase-wrapper-row']}>
        {Object.values(EVariant).map((gradient: EVariant) => <div key={gradient} className={style['showcase-wrapper-column']}>
            {Object.values(ESizes).map((size: ESizes) => <ButtonGroup key={\`\${gradient}_\${size}\`} size={size} variant={gradient} {...argTypes}>
                {[...Array(3)].map((_, i) => <Button key={i} onClick={action('onClick')}>
                    gradient
                  </Button>)}
              </ButtonGroup>)}
          </div>)}
      </div>
      <div className={style['showcase-wrapper-row']}>
        {Object.values(EVariant).map((gradient: EVariant) => <div key={gradient} className={style['showcase-wrapper-column']}>
            {Object.values(ESizes).map((size: ESizes) => <ButtonGroup key={\`\${gradient}_\${size}\`} size={size} variant={gradient} disabled {...argTypes}>
                {[...Array(3)].map((_, i) => <Button key={i} onClick={action('onClick')}>
                    gradient
                  </Button>)}
              </ButtonGroup>)}
          </div>)}
      </div>
    </div>;
}`,...($=(S=m.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var j,T,V;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`(argTypes: IButtonGroup): ReactNode => {
  return <div>
      <div className={style['showcase-wrapper-column']}>
        {combinedOptions(true).map((option: ICombinedOption, i) => {
        const {
          fill,
          variant,
          size
        } = option;
        const iconArticleOutlinedView = size === ESizes.xs ? <IconArticleOutlined16 /> : <IconArticleOutlined24 />;
        if (variant === EVariant.secondary && (fill === EFill.outline || fill === EFill.clear)) return <div key={i}></div>;
        return <ButtonGroup key={\`\${variant}_\${fill}_\${size}\`} variant={variant} fill={fill} size={argTypes.size || size} {...argTypes}>
              {[...Array(3)].map((_, i) => <Button key={i} startIcon={iconArticleOutlinedView} endIcon={iconArticleOutlinedView} badge={1} onClick={action('onClick')}>
                  {variant} {fill} {size}
                </Button>)}
            </ButtonGroup>;
      })}
      </div>
      <div style={{
      marginBottom: '12px'
    }} />
      <div className={style['showcase-wrapper-row']}>
        {Object.values(EVariant).map((gradient: EVariant, i) => <div key={gradient + i} className={style['showcase-wrapper-column']}>
            {Object.values(ESizes).map((size: ESizes) => {
          const iconInfoOutlined = size === ESizes.xs ? <IconInfoOutlined16 /> : <IconInfoOutlined24 />;
          const iconMixerView = size === ESizes.xs ? <IconMixer16 /> : <IconMixer24 />;
          const iconHandPanToolPalmsOutlinedView = size === ESizes.xs ? <IconHandPanToolPalmsOutlined16 /> : <IconHandPanToolPalmsOutlined24 />;
          return <ButtonGroup key={\`\${gradient}_\${size}\`} size={argTypes.size || size} variant={gradient} {...argTypes}>
                  <Button onClick={action('onClick')} iconButton={iconInfoOutlined} />
                  <Button onClick={action('onClick')} iconButton={iconMixerView} />
                  <Button onClick={action('onClick')} iconButton={iconHandPanToolPalmsOutlinedView} />
                </ButtonGroup>;
        })}
          </div>)}
      </div>
    </div>;
}`,...(V=(T=h.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};const Se=["DefaultButtonGroup","ButtonGroupSizes","ButtonGroupGradient","ButtonGroupVertical","ButtonGroupVariations"];export{B as ButtonGroupGradient,y as ButtonGroupSizes,h as ButtonGroupVariations,m as ButtonGroupVertical,w as DefaultButtonGroup,Se as __namedExportsOrder,fe as default};
