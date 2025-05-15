import{j as r}from"./jsx-runtime-BRNY0I4F.js";import{A as n,E as i,g as B}from"./index-C1V47aNp.js";import{x as C,y as F}from"./32-_u7P3aNG.js";import{a as q}from"./argsTypes-Dj03WQ_K.js";import"./index-Bnop-kX6.js";import"./index-C34gbTH6.js";import"./clsx-B-dksMZM.js";import"./index-qC5wYQgy.js";const M="_wrapper_tgfxr_1",H="_row_tgfxr_9",s={wrapper:M,row:H},R=e=>r.jsx("div",{style:{minHeight:80},children:r.jsx(e,{})}),x=B(),rr={title:"Components/Avatar/Stories",component:n,decorators:[R],argTypes:q},j=e=>r.jsxs(r.Fragment,{children:[r.jsx("div",{className:s.row,children:Object.values(i).map((t,a)=>r.jsx(n,{...e,size:t,imageSrc:x},a))}),r.jsx("div",{className:s.row,children:Object.values(i).map((t,a)=>r.jsx(n,{...e,size:t,userName:"Антон",userSurname:"Валуев"},a))}),r.jsx("div",{className:s.row,children:Object.values(i).map((t,a)=>r.jsx(n,{...e,size:t},a))})]}),G=e=>{const t=Object.values(i).filter(a=>a!==i.xxxl);return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:s.row,children:t.map((a,d)=>r.jsx(n,{...e,size:a,imageSrc:x},d))}),r.jsx("div",{className:s.row,children:t.map((a,d)=>r.jsx(n,{...e,size:a,userName:"Антон",userSurname:"Валуев"},d))}),r.jsx("div",{className:s.row,children:t.map((a,d)=>r.jsx(n,{...e,size:a},d))})]})},v=e=>r.jsx("div",{className:s.wrapper,children:r.jsx(n,{...e})});v.storyName="Дефолтный аватар";const u=e=>r.jsx("div",{className:s.wrapper,children:r.jsx(j,{...e})});u.storyName="Дефолтные аватары различных размеров";const c=e=>r.jsx("div",{className:s.wrapper,children:r.jsx(j,{...e})});c.storyName="Аватар в режиме онлайн";c.args={online:!0};const o=e=>r.jsx("div",{className:s.wrapper,children:r.jsx(j,{...e})});o.storyName="Аватар в режиме оффлайн";o.args={online:!1};const m=e=>r.jsx("div",{className:s.wrapper,children:r.jsx(G,{...e})});m.storyName="Аватар c индикатором количества";m.args={numberIndicator:8};const l=e=>r.jsxs("div",{className:s.wrapper,children:[r.jsx("div",{className:s.row,children:Object.values(i).map((t,a)=>r.jsx(n,{...e,size:t,imageSrc:x},a))}),r.jsx("div",{className:s.row,children:Object.values(i).map((t,a)=>r.jsx(n,{...e,size:t,userName:"Антон",userSurname:"Валуев"},a))}),r.jsx("div",{className:s.row,children:Object.values(i).map((t,a)=>r.jsx(n,{...e,size:t},a))})]});l.storyName="Аватар c дефолтным бейджем";l.args={badgeIconName:r.jsx(C,{htmlColor:"var(--unique-white)"})};const p=e=>r.jsx("div",{className:s.wrapper,children:r.jsx(j,{...e})});p.storyName="Аватар cо специальным бейджем";p.args={badgeIconName:r.jsx(F,{htmlColor:"var(--unique-white)"}),badgeSpecialIcon:!0};var g,A,S;v.parameters={...v.parameters,docs:{...(g=v.parameters)==null?void 0:g.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Avatar {...argsTypes} />
    </div>;
}`,...(S=(A=v.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var N,y,h;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...(h=(y=u.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var w,f,O;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...(O=(f=c.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var b,z,I;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...(I=(z=o.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var E,T,_;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatarsSmall {...argsTypes} />
    </div>;
}`,...(_=(T=m.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var P,W,D;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <div className={styles.row}>
        {Object.values(EAvatarSize).map((size, i) => {
        return <Avatar key={i} {...argsTypes} size={size} imageSrc={AvatarImageMock} />;
      })}
      </div>
      <div className={styles.row}>
        {Object.values(EAvatarSize).map((size, i) => {
        return <Avatar key={i} {...argsTypes} size={size} userName="Антон" userSurname="Валуев" />;
      })}
      </div>
      <div className={styles.row}>
        {Object.values(EAvatarSize).map((size, i) => {
        return <Avatar key={i} {...argsTypes} size={size} />;
      })}
      </div>
    </div>;
}`,...(D=(W=l.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var J,X,k;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...(k=(X=p.parameters)==null?void 0:X.docs)==null?void 0:k.source}}};const er=["AvatarDefault","DefaultAvatarsWithSizes","AvatarOnline","AvatarOffline","AvatarWithNumber","AvatarWithDefaultBadge","AvatarWithSpecialBadge"];export{v as AvatarDefault,o as AvatarOffline,c as AvatarOnline,l as AvatarWithDefaultBadge,m as AvatarWithNumber,p as AvatarWithSpecialBadge,u as DefaultAvatarsWithSizes,er as __namedExportsOrder,rr as default};
