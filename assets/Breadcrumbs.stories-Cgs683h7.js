import{j as r,L as p}from"./iframe-C2j-UzJI.js";import{B as t}from"./index-CNN_3_D-.js";import{g as i}from"./styles.module-P9JyAdOG.js";import{a as n}from"./argsTypes-CVLd6fMj.js";import{b as c,t as d,B as u,D as l}from"./constants-B2HphWJD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-mz-Fux1b.js";import"./types-TdnjS80C.js";import"./index-Cgs4mkOo.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-BI8xtbsU.js";import"./32-CJ0o-VIC.js";import"./24-CuDIHvWX.js";import"./24-Cva_JBwh.js";import"./24-KVke6soD.js";import"./24-BrI2by3D.js";import"./24-B5ODlOpD.js";import"./24-OjUQZVfT.js";import"./24-CeOxJPqx.js";import"./24-CHP3BsWo.js";import"./24-CKMbmC7d.js";import"./16-049IwUhX.js";import"./24-nYvLFNAE.js";import"./24-fUQbig4h.js";import"./16-BMa1J7tj.js";import"./16-SQC_C9px.js";import"./16-BuZexhOR.js";import"./16-DPV7Mbm7.js";import"./16-ChsbLgyw.js";import"./index-yGzPLeeo.js";import"./index-Cm_Ba9v7.js";const K={title:"Components/Breadcrumbs/Stories",component:t,argTypes:n},s=m=>r.jsx("div",{className:i.wrapper,children:r.jsx(t,{...m,children:c.map((e,o)=>r.jsx(t.Crumb,{children:r.jsx(p,{to:e.href,children:e.label})},o))})});s.storyName=u;s.args={width:"100%"};const a=m=>r.jsx("div",{className:i.wrapper,children:r.jsx(t,{...m,children:d.map((e,o)=>r.jsx(t.Crumb,{children:r.jsx("a",{href:e.href,target:e.target,children:e.label})},o))})});a.storyName=l;a.args={width:"100%"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(argsTypes: IBreadcrumbsProps): ReactNode => {
  return <div className={styles.wrapper}>
      <Breadcrumbs {...argsTypes}>
        {breadcrumbsLinks.map((link, index) => <Breadcrumbs.Crumb key={index}>
            <Link to={link.href}>{link.label}</Link>
          </Breadcrumbs.Crumb>)}
      </Breadcrumbs>
    </div>;
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(argsTypes: IBreadcrumbsProps): ReactNode => {
  return <div className={styles.wrapper}>
      <Breadcrumbs {...argsTypes}>
        {targetLinks.map((link, index) => <Breadcrumbs.Crumb key={index}>
            <a href={link.href} target={link.target}>
              {link.label}
            </a>
          </Breadcrumbs.Crumb>)}
      </Breadcrumbs>
    </div>;
}`,...a.parameters?.docs?.source}}};const Q=["BreadcrumbsDefault","BreadcrumbsTarget"];export{s as BreadcrumbsDefault,a as BreadcrumbsTarget,Q as __namedExportsOrder,K as default};
