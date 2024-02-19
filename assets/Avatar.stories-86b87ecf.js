import{j as r,a as z,F as C}from"./clsx.m-3764cf42.js";import{A as n,S as F,a as o,b as g,g as k}from"./index-095d5581.js";import{a as H}from"./argsTypes-15314ef5.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-c9e69acb.js";import"./index-fb030d50.js";const L="_wrapper_1ptr5_1",M="_row_1ptr5_9",e={wrapper:L,row:M},G=a=>r("div",{style:{minHeight:80},children:a()}),A=k(),$={title:"Components/Avatar/Stories",component:n,decorators:[G],argTypes:H},d=a=>z(C,{children:[r("div",{className:e.row,children:Object.values(o).map((s,t)=>r(n,{...a,size:s,imageSrc:A},t))}),r("div",{className:e.row,children:Object.values(o).map((s,t)=>r(n,{...a,size:s,shape:g.square,imageSrc:A},t))}),r("div",{className:e.row,children:Object.values(o).map((s,t)=>r(n,{...a,size:s,userName:"Антон",userSurname:"Валуев"},t))}),r("div",{className:e.row,children:Object.values(o).map((s,t)=>r(n,{...a,size:s,userName:"Антон",userSurname:"Валуев",shape:g.square},t))}),r("div",{className:e.row,children:Object.values(o).map((s,t)=>r(n,{...a,size:s},t))}),r("div",{className:e.row,children:Object.values(o).map((s,t)=>r(n,{...a,size:s,shape:g.square},t))})]}),v=a=>r("div",{className:e.wrapper,children:r(n,{...a})});v.storyName="Дефолтный аватар";const u=a=>r("div",{className:e.wrapper,children:r(d,{...a})});u.storyName="Дефолтные аватары различных размеров";const c=a=>r("div",{className:e.wrapper,children:r(d,{...a})});c.storyName="Аватар в режиме онлайн";c.args={online:!0};const p=a=>r("div",{className:e.wrapper,children:r(d,{...a})});p.storyName="Аватар в режиме оффлайн";p.args={online:!1};const m=a=>r("div",{className:e.wrapper,children:r(d,{...a})});m.storyName="Аватар c индикатором количества";m.args={numberIndicator:8};const i=a=>r("div",{className:e.wrapper,children:r(d,{...a})});i.storyName="Аватар c дефолтным бейджем";i.args={badgeIconName:"IconDone24"};const l=a=>r("div",{className:e.wrapper,children:r(d,{...a})});l.storyName="Аватар cо специальным бейджем";l.args={badgeIconName:F[0]};var S,N,h;v.parameters={...v.parameters,docs:{...(S=v.parameters)==null?void 0:S.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Avatar {...argsTypes} />
    </div>;
}`,...(h=(N=v.parameters)==null?void 0:N.docs)==null?void 0:h.source}}};var w,y,f;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...(f=(y=u.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var O,I,b;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...(b=(I=c.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var T,_,j;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...(j=(_=p.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var E,P,W;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...(W=(P=m.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var D,J,X;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...(X=(J=i.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var x,B,q;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...(q=(B=l.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};const rr=["AvatarDefault","DefaultAvatarsWithSizes","AvatarOnline","AvatarOffline","AvatarWithNumber","AvatarWithDefaultBadge","AvatarWithSpecialBadge"];export{v as AvatarDefault,p as AvatarOffline,c as AvatarOnline,i as AvatarWithDefaultBadge,m as AvatarWithNumber,l as AvatarWithSpecialBadge,u as DefaultAvatarsWithSizes,rr as __namedExportsOrder,$ as default};
