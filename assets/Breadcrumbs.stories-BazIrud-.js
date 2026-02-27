import{j as r,L as p}from"./iframe-DXeeMUlS.js";import{B as t}from"./index-Cd-LHCBs.js";import{g as i}from"./styles.module-BGEDXogi.js";import{a as n}from"./argsTypes-CVLd6fMj.js";import{b as c,t as d,B as u,D as l}from"./constants-B2HphWJD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-DTjMDcvY.js";import"./index-Dgj4-etr.js";import"./index-IY4AFwls.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-CGcqymZX.js";import"./24-DzDWDUmy.js";import"./24-DpK5eddQ.js";import"./24-CBLD6MwG.js";import"./24-BtzwVLrk.js";import"./24-BXEslVYf.js";import"./24-BO1wVPpM.js";import"./24-Bdd9D4Ti.js";import"./24-BEN_WnoL.js";import"./24-CHgX55v6.js";import"./16-eB7nAebF.js";import"./24-yThwR12y.js";import"./24-CsKtuqYo.js";import"./16-DPaGmQaD.js";import"./16-9aNWehyQ.js";import"./16-C_DfNdCf.js";import"./index-BAiw0P9_.js";import"./types-TdnjS80C.js";const z={title:"Components/Breadcrumbs/Stories",component:t,argTypes:n},s=m=>r.jsx("div",{className:i.wrapper,children:r.jsx(t,{...m,children:c.map((e,o)=>r.jsx(t.Crumb,{children:r.jsx(p,{to:e.href,children:e.label})},o))})});s.storyName=u;s.args={width:"100%"};const a=m=>r.jsx("div",{className:i.wrapper,children:r.jsx(t,{...m,children:d.map((e,o)=>r.jsx(t.Crumb,{children:r.jsx("a",{href:e.href,target:e.target,children:e.label})},o))})});a.storyName=l;a.args={width:"100%"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(argsTypes: IBreadcrumbsProps): ReactNode => {
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
}`,...a.parameters?.docs?.source}}};const H=["BreadcrumbsDefault","BreadcrumbsTarget"];export{s as BreadcrumbsDefault,a as BreadcrumbsTarget,H as __namedExportsOrder,z as default};
