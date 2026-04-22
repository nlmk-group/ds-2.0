import{j as r}from"./iframe-Bo4nALm7.js";import{A as o,E as i}from"./index-5mM__hj5.js";import{g as A}from"./utils-BWsSlcHq.js";import{a as x}from"./argsTypes-akLpcIDf.js";import{I as S}from"./16-BgwH21Xk.js";import{c as N}from"./index-DUNZSITs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CUIhMP_o.js";import"./clsx-B-dksMZM.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-DrwGWWyr.js";import"./24-DMCeAA-V.js";import"./24-85pGpdFN.js";import"./24-DO_3r_fK.js";import"./24-BysagIQq.js";import"./24-D5XAI_AH.js";import"./24-BfwlYFIe.js";import"./24-CbRb0MeE.js";import"./24-NHhFZcqx.js";import"./24-gy5ADEN_.js";import"./24-CNhMk3Hk.js";import"./16-aMqW81vf.js";import"./24-Blxmuo2i.js";import"./24-C8hAPZTM.js";import"./16-BT8X9gPM.js";import"./16-CUTQAt8-.js";import"./16-Bi9OWKG5.js";import"./16-KygOpizh.js";const h="Avatar-module__wrapper___dAhb3",y="Avatar-module__row___V928h",s={wrapper:h,row:y},w=e=>r.jsx("div",{style:{minHeight:80},children:r.jsx(e,{})}),g=A("/img/avatar_mock.png"),$={title:"Components/Avatar/Stories",component:o,decorators:[w],argTypes:x},j=e=>r.jsxs(r.Fragment,{children:[r.jsx("div",{className:s.row,children:Object.values(i).map((t,a)=>r.jsx(o,{...e,size:t,imageSrc:g},a))}),r.jsx("div",{className:s.row,children:Object.values(i).map((t,a)=>r.jsx(o,{...e,size:t,userName:"Антон",userSurname:"Валуев"},a))}),r.jsx("div",{className:s.row,children:Object.values(i).map((t,a)=>r.jsx(o,{...e,size:t},a))})]}),f=e=>{const t=Object.values(i).filter(a=>a!==i.xxxl);return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:s.row,children:t.map((a,d)=>r.jsx(o,{...e,size:a,imageSrc:g},d))}),r.jsx("div",{className:s.row,children:t.map((a,d)=>r.jsx(o,{...e,size:a,userName:"Антон",userSurname:"Валуев"},d))}),r.jsx("div",{className:s.row,children:t.map((a,d)=>r.jsx(o,{...e,size:a},d))})]})},v=e=>r.jsx("div",{className:s.wrapper,children:r.jsx(o,{...e})});v.storyName="Дефолтный аватар";const u=e=>r.jsx("div",{className:s.wrapper,children:r.jsx(j,{...e})});u.storyName="Дефолтные аватары различных размеров";const n=e=>r.jsx("div",{className:s.wrapper,children:r.jsx(j,{...e})});n.storyName="Аватар в режиме онлайн";n.args={online:!0};const m=e=>r.jsx("div",{className:s.wrapper,children:r.jsx(j,{...e})});m.storyName="Аватар в режиме оффлайн";m.args={online:!1};const c=e=>r.jsx("div",{className:s.wrapper,children:r.jsx(f,{...e})});c.storyName="Аватар c индикатором количества";c.args={numberIndicator:8};const p=e=>r.jsxs("div",{className:s.wrapper,children:[r.jsx("div",{className:s.row,children:Object.values(i).map((t,a)=>r.jsx(o,{...e,size:t,imageSrc:g},a))}),r.jsx("div",{className:s.row,children:Object.values(i).map((t,a)=>r.jsx(o,{...e,size:t,userName:"Антон",userSurname:"Валуев"},a))}),r.jsx("div",{className:s.row,children:Object.values(i).map((t,a)=>r.jsx(o,{...e,size:t},a))})]});p.storyName="Аватар c дефолтным бейджем";p.args={badgeIconName:r.jsx(S,{htmlColor:"var(--unique-white)"})};const l=e=>r.jsx("div",{className:s.wrapper,children:r.jsx(j,{...e})});l.storyName="Аватар cо специальным бейджем";l.args={badgeIconName:r.jsx(N,{htmlColor:"var(--unique-white)"}),badgeSpecialIcon:!0};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Avatar {...argsTypes} />
    </div>;
}`,...v.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...u.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>;
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(argsTypes: IAvatarProps): JSX.Element => {
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
}`,...l.parameters?.docs?.source}}};const rr=["AvatarDefault","DefaultAvatarsWithSizes","AvatarOnline","AvatarOffline","AvatarWithNumber","AvatarWithDefaultBadge","AvatarWithSpecialBadge"];export{v as AvatarDefault,m as AvatarOffline,n as AvatarOnline,p as AvatarWithDefaultBadge,c as AvatarWithNumber,l as AvatarWithSpecialBadge,u as DefaultAvatarsWithSizes,rr as __namedExportsOrder,$ as default};
