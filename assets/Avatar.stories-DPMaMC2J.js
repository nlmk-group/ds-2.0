import{j as r}from"./iframe-BPtLBEuk.js";import{A as n,E as i,g}from"./index-CEbWEpSn.js";import{a as x}from"./argsTypes-o8lWiVXf.js";import{I as S}from"./16-DaMJtJxQ.js";import{p as N}from"./index-CDRf2h9x.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C9_7xPUt.js";import"./clsx-B-dksMZM.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-DeoBrCvQ.js";import"./24-CrLAaNeG.js";import"./24-CpcywAhj.js";import"./24-Ch6Cnsji.js";import"./24-Q7FkUsyZ.js";import"./24-DOwtHgIx.js";import"./24-B4m_3SjA.js";import"./24-CV2ikCuL.js";import"./24-Ba8I7UHN.js";import"./24-BA0GVvoT.js";import"./16-CXoys7qm.js";import"./24-Cxxq2bXd.js";import"./24-8ackLhic.js";import"./16-DwnwCPW9.js";import"./16-BY-nZnBX.js";const h="Avatar-module__wrapper___dAhb3",w="Avatar-module__row___V928h",s={wrapper:h,row:w},y=e=>r.jsx("div",{style:{minHeight:80},children:r.jsx(e,{})}),A=g(),Q={title:"Components/Avatar/Stories",component:n,decorators:[y],argTypes:x},j=e=>r.jsxs(r.Fragment,{children:[r.jsx("div",{className:s.row,children:Object.values(i).map((t,a)=>r.jsx(n,{...e,size:t,imageSrc:A},a))}),r.jsx("div",{className:s.row,children:Object.values(i).map((t,a)=>r.jsx(n,{...e,size:t,userName:"Антон",userSurname:"Валуев"},a))}),r.jsx("div",{className:s.row,children:Object.values(i).map((t,a)=>r.jsx(n,{...e,size:t},a))})]}),f=e=>{const t=Object.values(i).filter(a=>a!==i.xxxl);return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:s.row,children:t.map((a,d)=>r.jsx(n,{...e,size:a,imageSrc:A},d))}),r.jsx("div",{className:s.row,children:t.map((a,d)=>r.jsx(n,{...e,size:a,userName:"Антон",userSurname:"Валуев"},d))}),r.jsx("div",{className:s.row,children:t.map((a,d)=>r.jsx(n,{...e,size:a},d))})]})},v=e=>r.jsx("div",{className:s.wrapper,children:r.jsx(n,{...e})});v.storyName="Дефолтный аватар";const u=e=>r.jsx("div",{className:s.wrapper,children:r.jsx(j,{...e})});u.storyName="Дефолтные аватары различных размеров";const o=e=>r.jsx("div",{className:s.wrapper,children:r.jsx(j,{...e})});o.storyName="Аватар в режиме онлайн";o.args={online:!0};const m=e=>r.jsx("div",{className:s.wrapper,children:r.jsx(j,{...e})});m.storyName="Аватар в режиме оффлайн";m.args={online:!1};const c=e=>r.jsx("div",{className:s.wrapper,children:r.jsx(f,{...e})});c.storyName="Аватар c индикатором количества";c.args={numberIndicator:8};const p=e=>r.jsxs("div",{className:s.wrapper,children:[r.jsx("div",{className:s.row,children:Object.values(i).map((t,a)=>r.jsx(n,{...e,size:t,imageSrc:A},a))}),r.jsx("div",{className:s.row,children:Object.values(i).map((t,a)=>r.jsx(n,{...e,size:t,userName:"Антон",userSurname:"Валуев"},a))}),r.jsx("div",{className:s.row,children:Object.values(i).map((t,a)=>r.jsx(n,{...e,size:t},a))})]});p.storyName="Аватар c дефолтным бейджем";p.args={badgeIconName:r.jsx(S,{htmlColor:"var(--unique-white)"})};const l=e=>r.jsx("div",{className:s.wrapper,children:r.jsx(j,{...e})});l.storyName="Аватар cо специальным бейджем";l.args={badgeIconName:r.jsx(N,{htmlColor:"var(--unique-white)"}),badgeSpecialIcon:!0};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Avatar {...argsTypes} />
    </div>;
}`,...v.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...u.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatarsSmall {...argsTypes} />
    </div>;
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
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
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...l.parameters?.docs?.source}}};const U=["AvatarDefault","DefaultAvatarsWithSizes","AvatarOnline","AvatarOffline","AvatarWithNumber","AvatarWithDefaultBadge","AvatarWithSpecialBadge"];export{v as AvatarDefault,m as AvatarOffline,o as AvatarOnline,p as AvatarWithDefaultBadge,c as AvatarWithNumber,l as AvatarWithSpecialBadge,u as DefaultAvatarsWithSizes,U as __namedExportsOrder,Q as default};
