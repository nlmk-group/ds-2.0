import{j as r,a as q,F as z}from"./jsx-runtime-2xDJh5tt.js";import{b as o,A as n,a as g,g as F}from"./index-DdUHXjGd.js";import{o as k,p as H}from"./32-CjiFhZy5.js";import{a as M}from"./argsTypes-evOLRLHS.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-tm22VGJr.js";import"./clsx.m-CH7BE6MN.js";import"./index-nWYpQihe.js";const G="_wrapper_1ptr5_1",K="_row_1ptr5_9",e={wrapper:G,row:K},L=a=>r("div",{style:{minHeight:80},children:a()}),A=F(),er={title:"Components/Avatar/Stories",component:o,decorators:[L],argTypes:M},d=a=>q(z,{children:[r("div",{className:e.row,children:Object.values(n).map((s,t)=>r(o,{...a,size:s,imageSrc:A},t))}),r("div",{className:e.row,children:Object.values(n).map((s,t)=>r(o,{...a,size:s,shape:g.square,imageSrc:A},t))}),r("div",{className:e.row,children:Object.values(n).map((s,t)=>r(o,{...a,size:s,userName:"Антон",userSurname:"Валуев"},t))}),r("div",{className:e.row,children:Object.values(n).map((s,t)=>r(o,{...a,size:s,userName:"Антон",userSurname:"Валуев",shape:g.square},t))}),r("div",{className:e.row,children:Object.values(n).map((s,t)=>r(o,{...a,size:s},t))}),r("div",{className:e.row,children:Object.values(n).map((s,t)=>r(o,{...a,size:s,shape:g.square},t))})]}),v=a=>r("div",{className:e.wrapper,children:r(o,{...a})});v.storyName="Дефолтный аватар";const u=a=>r("div",{className:e.wrapper,children:r(d,{...a})});u.storyName="Дефолтные аватары различных размеров";const c=a=>r("div",{className:e.wrapper,children:r(d,{...a})});c.storyName="Аватар в режиме онлайн";c.args={online:!0};const p=a=>r("div",{className:e.wrapper,children:r(d,{...a})});p.storyName="Аватар в режиме оффлайн";p.args={online:!1};const i=a=>r("div",{className:e.wrapper,children:r(d,{...a})});i.storyName="Аватар c индикатором количества";i.args={numberIndicator:8};const m=a=>r("div",{className:e.wrapper,children:r(d,{...a})});m.storyName="Аватар c дефолтным бейджем";m.args={badgeIconName:r(k,{htmlColor:"white"})};const l=a=>r("div",{className:e.wrapper,children:r(d,{...a})});l.storyName="Аватар cо специальным бейджем";l.args={badgeIconName:r(H,{htmlColor:"var(--ac-avatar-badges-icon-birthdays-violet)"}),badgeSpecialIcon:!0};var h,S,N;v.parameters={...v.parameters,docs:{...(h=v.parameters)==null?void 0:h.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Avatar {...argsTypes} />
    </div>;
}`,...(N=(S=v.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var y,w,f;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...(f=(w=u.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var O,b,I;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...(I=(b=c.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var T,j,_;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...(_=(j=p.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var E,P,W;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...(W=(P=i.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var D,J,X;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...(X=(J=m.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var B,x,C;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...(C=(x=l.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const sr=["AvatarDefault","DefaultAvatarsWithSizes","AvatarOnline","AvatarOffline","AvatarWithNumber","AvatarWithDefaultBadge","AvatarWithSpecialBadge"];export{v as AvatarDefault,p as AvatarOffline,c as AvatarOnline,m as AvatarWithDefaultBadge,i as AvatarWithNumber,l as AvatarWithSpecialBadge,u as DefaultAvatarsWithSizes,sr as __namedExportsOrder,er as default};
