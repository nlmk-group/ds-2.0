import{j as r}from"./jsx-runtime-DFnSfiB4.js";import{b as o,A as n,a as g,g as q}from"./index-BenQYTIH.js";import{r as z,s as k}from"./32-CCQbJusC.js";import{a as F}from"./argsTypes-fiCCe1K6.js";import"./index-DQ2WTIsS.js";import"./index-Dvm_EBHX.js";import"./clsx-B-dksMZM.js";import"./index-DJXOh8UI.js";const H="_wrapper_1wn75_1",M="_row_1wn75_9",e={wrapper:H,row:M},R=a=>r.jsx("div",{style:{minHeight:80},children:a()}),j=q(),$={title:"Components/Avatar/Stories",component:o,decorators:[R],argTypes:F},d=a=>r.jsxs(r.Fragment,{children:[r.jsx("div",{className:e.row,children:Object.values(n).map((s,t)=>r.jsx(o,{...a,size:s,imageSrc:j},t))}),r.jsx("div",{className:e.row,children:Object.values(n).map((s,t)=>r.jsx(o,{...a,size:s,shape:g.square,imageSrc:j},t))}),r.jsx("div",{className:e.row,children:Object.values(n).map((s,t)=>r.jsx(o,{...a,size:s,userName:"Антон",userSurname:"Валуев"},t))}),r.jsx("div",{className:e.row,children:Object.values(n).map((s,t)=>r.jsx(o,{...a,size:s,userName:"Антон",userSurname:"Валуев",shape:g.square},t))}),r.jsx("div",{className:e.row,children:Object.values(n).map((s,t)=>r.jsx(o,{...a,size:s},t))}),r.jsx("div",{className:e.row,children:Object.values(n).map((s,t)=>r.jsx(o,{...a,size:s,shape:g.square},t))})]}),v=a=>r.jsx("div",{className:e.wrapper,children:r.jsx(o,{...a})});v.storyName="Дефолтный аватар";const u=a=>r.jsx("div",{className:e.wrapper,children:r.jsx(d,{...a})});u.storyName="Дефолтные аватары различных размеров";const c=a=>r.jsx("div",{className:e.wrapper,children:r.jsx(d,{...a})});c.storyName="Аватар в режиме онлайн";c.args={online:!0};const p=a=>r.jsx("div",{className:e.wrapper,children:r.jsx(d,{...a})});p.storyName="Аватар в режиме оффлайн";p.args={online:!1};const i=a=>r.jsx("div",{className:e.wrapper,children:r.jsx(d,{...a})});i.storyName="Аватар c индикатором количества";i.args={numberIndicator:8};const m=a=>r.jsx("div",{className:e.wrapper,children:r.jsx(d,{...a})});m.storyName="Аватар c дефолтным бейджем";m.args={badgeIconName:r.jsx(z,{htmlColor:"white"})};const l=a=>r.jsx("div",{className:e.wrapper,children:r.jsx(d,{...a})});l.storyName="Аватар cо специальным бейджем";l.args={badgeIconName:r.jsx(k,{htmlColor:"var(--ac-avatar-badges-icon-birthdays-violet)"}),badgeSpecialIcon:!0};var A,h,x;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Avatar {...argsTypes} />
    </div>;
}`,...(x=(h=v.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,N,w;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...(w=(N=u.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var y,f,O;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...(O=(f=c.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var b,I,T;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...(T=(I=p.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var E,_,P;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...(P=(_=i.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var W,D,J;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...(J=(D=m.parameters)==null?void 0:D.docs)==null?void 0:J.source}}};var X,B,C;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...(C=(B=l.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const rr=["AvatarDefault","DefaultAvatarsWithSizes","AvatarOnline","AvatarOffline","AvatarWithNumber","AvatarWithDefaultBadge","AvatarWithSpecialBadge"];export{v as AvatarDefault,p as AvatarOffline,c as AvatarOnline,m as AvatarWithDefaultBadge,i as AvatarWithNumber,l as AvatarWithSpecialBadge,u as DefaultAvatarsWithSizes,rr as __namedExportsOrder,$ as default};
