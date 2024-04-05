import{j as r,a as q,F as z}from"./jsx-runtime-2xDJh5tt.js";import{b as o,A as n,a as g,g as F}from"./index-D-cSLjE-.js";import{c as k,d as H}from"./32-O4MZPT9v.js";import{a as M}from"./argsTypes-M9TZjrgY.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-00CuFchX.js";import"./clsx.m-CH7BE6MN.js";import"./index-CkVMA9Py.js";const G="_wrapper_1ptr5_1",K="_row_1ptr5_9",e={wrapper:G,row:K},L=a=>r("div",{style:{minHeight:80},children:a()}),A=F(),er={title:"Components/Avatar/Stories",component:o,decorators:[L],argTypes:M},d=a=>q(z,{children:[r("div",{className:e.row,children:Object.values(n).map((s,t)=>r(o,{...a,size:s,imageSrc:A},t))}),r("div",{className:e.row,children:Object.values(n).map((s,t)=>r(o,{...a,size:s,shape:g.square,imageSrc:A},t))}),r("div",{className:e.row,children:Object.values(n).map((s,t)=>r(o,{...a,size:s,userName:"Антон",userSurname:"Валуев"},t))}),r("div",{className:e.row,children:Object.values(n).map((s,t)=>r(o,{...a,size:s,userName:"Антон",userSurname:"Валуев",shape:g.square},t))}),r("div",{className:e.row,children:Object.values(n).map((s,t)=>r(o,{...a,size:s},t))}),r("div",{className:e.row,children:Object.values(n).map((s,t)=>r(o,{...a,size:s,shape:g.square},t))})]}),v=a=>r("div",{className:e.wrapper,children:r(o,{...a})});v.storyName="Дефолтный аватар";const u=a=>r("div",{className:e.wrapper,children:r(d,{...a})});u.storyName="Дефолтные аватары различных размеров";const c=a=>r("div",{className:e.wrapper,children:r(d,{...a})});c.storyName="Аватар в режиме онлайн";c.args={online:!0};const p=a=>r("div",{className:e.wrapper,children:r(d,{...a})});p.storyName="Аватар в режиме оффлайн";p.args={online:!1};const m=a=>r("div",{className:e.wrapper,children:r(d,{...a})});m.storyName="Аватар c индикатором количества";m.args={numberIndicator:8};const i=a=>r("div",{className:e.wrapper,children:r(d,{...a})});i.storyName="Аватар c дефолтным бейджем";i.args={badgeIconName:r(k,{htmlColor:"white"})};const l=a=>r("div",{className:e.wrapper,children:r(d,{...a})});l.storyName="Аватар cо специальным бейджем";l.args={badgeIconName:r(H,{htmlColor:"white"}),badgeSpecialIcon:!0};var h,S,N;v.parameters={...v.parameters,docs:{...(h=v.parameters)==null?void 0:h.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Avatar {...argsTypes} />
    </div>;
}`,...(N=(S=v.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var w,y,f;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...(f=(y=u.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var O,I,b;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...(b=(I=c.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var T,j,_;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...(_=(j=p.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var E,P,W;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...(W=(P=m.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var D,J,X;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...(X=(J=i.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var B,x,C;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...(C=(x=l.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const sr=["AvatarDefault","DefaultAvatarsWithSizes","AvatarOnline","AvatarOffline","AvatarWithNumber","AvatarWithDefaultBadge","AvatarWithSpecialBadge"];export{v as AvatarDefault,p as AvatarOffline,c as AvatarOnline,i as AvatarWithDefaultBadge,m as AvatarWithNumber,l as AvatarWithSpecialBadge,u as DefaultAvatarsWithSizes,sr as __namedExportsOrder,er as default};
