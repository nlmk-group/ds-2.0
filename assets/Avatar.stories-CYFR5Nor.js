import{j as r,a as z,F}from"./jsx-runtime-2xDJh5tt.js";import{b as o,A as n,a as g,g as k}from"./index-C-x6zlLc.js";import{a as C}from"./argsTypes-BWgzDRzs.js";import{c as H,d as M}from"./32-BI8cdrFX.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3aZeTS2.js";import"./clsx.m-CH7BE6MN.js";import"./index-BR2u5piM.js";const G="_wrapper_1ptr5_1",K="_row_1ptr5_9",e={wrapper:G,row:K},L=a=>r("div",{style:{minHeight:80},children:a()}),A=k(),er={title:"Components/Avatar/Stories",component:o,decorators:[L],argTypes:C},d=a=>z(F,{children:[r("div",{className:e.row,children:Object.values(n).map((s,t)=>r(o,{...a,size:s,imageSrc:A},t))}),r("div",{className:e.row,children:Object.values(n).map((s,t)=>r(o,{...a,size:s,shape:g.square,imageSrc:A},t))}),r("div",{className:e.row,children:Object.values(n).map((s,t)=>r(o,{...a,size:s,userName:"Антон",userSurname:"Валуев"},t))}),r("div",{className:e.row,children:Object.values(n).map((s,t)=>r(o,{...a,size:s,userName:"Антон",userSurname:"Валуев",shape:g.square},t))}),r("div",{className:e.row,children:Object.values(n).map((s,t)=>r(o,{...a,size:s},t))}),r("div",{className:e.row,children:Object.values(n).map((s,t)=>r(o,{...a,size:s,shape:g.square},t))})]}),v=a=>r("div",{className:e.wrapper,children:r(o,{...a})});v.storyName="Дефолтный аватар";const u=a=>r("div",{className:e.wrapper,children:r(d,{...a})});u.storyName="Дефолтные аватары различных размеров";const c=a=>r("div",{className:e.wrapper,children:r(d,{...a})});c.storyName="Аватар в режиме онлайн";c.args={online:!0};const p=a=>r("div",{className:e.wrapper,children:r(d,{...a})});p.storyName="Аватар в режиме оффлайн";p.args={online:!1};const m=a=>r("div",{className:e.wrapper,children:r(d,{...a})});m.storyName="Аватар c индикатором количества";m.args={numberIndicator:8};const i=a=>r("div",{className:e.wrapper,children:r(d,{...a})});i.storyName="Аватар c дефолтным бейджем";i.args={badgeIconName:r(H,{color:"secondary"})};const l=a=>r("div",{className:e.wrapper,children:r(d,{...a})});l.storyName="Аватар cо специальным бейджем";l.args={badgeIconName:r(M,{color:"secondary"}),badgeSpecialIcon:!0};var S,N,h;v.parameters={...v.parameters,docs:{...(S=v.parameters)==null?void 0:S.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Avatar {...argsTypes} />
    </div>;
}`,...(h=(N=v.parameters)==null?void 0:N.docs)==null?void 0:h.source}}};var y,w,f;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...(f=(w=u.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var O,I,b;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
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
}`,...(X=(J=i.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var B,x,q;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...(q=(x=l.parameters)==null?void 0:x.docs)==null?void 0:q.source}}};const sr=["AvatarDefault","DefaultAvatarsWithSizes","AvatarOnline","AvatarOffline","AvatarWithNumber","AvatarWithDefaultBadge","AvatarWithSpecialBadge"];export{v as AvatarDefault,p as AvatarOffline,c as AvatarOnline,i as AvatarWithDefaultBadge,m as AvatarWithNumber,l as AvatarWithSpecialBadge,u as DefaultAvatarsWithSizes,sr as __namedExportsOrder,er as default};
