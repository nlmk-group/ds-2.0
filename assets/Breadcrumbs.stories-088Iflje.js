import{j as r,L as p}from"./iframe-CE_JzATH.js";import{B as t}from"./index-Os9u-Jz6.js";import{g as i}from"./styles.module-BGEDXogi.js";import{a as n}from"./argsTypes-CVLd6fMj.js";import{b as c,t as d,B as u,D as l}from"./constants-B2HphWJD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-DYU6s7CX.js";import"./index-CLTGTTU8.js";import"./index-MfvAP8aB.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-CrxSrIcc.js";import"./24-0Dk1wnnD.js";import"./24-BBq2cK-Y.js";import"./24-DEt0-nuC.js";import"./24-Cd5pTj28.js";import"./24-DGYmTzFV.js";import"./24-HbFaW7H_.js";import"./24-BQMnublh.js";import"./24-DzFwSmYQ.js";import"./24-J6XSru0N.js";import"./16-DWPiS2iU.js";import"./24-CjAn70IH.js";import"./24-D38MhcLh.js";import"./16-BIs1fvk9.js";import"./16-p0CPjrKD.js";import"./16-BkTHhwnS.js";import"./index-DTnW7Fop.js";import"./types-TdnjS80C.js";const z={title:"Components/Breadcrumbs/Stories",component:t,argTypes:n},s=m=>r.jsx("div",{className:i.wrapper,children:r.jsx(t,{...m,children:c.map((e,o)=>r.jsx(t.Crumb,{children:r.jsx(p,{to:e.href,children:e.label})},o))})});s.storyName=u;s.args={width:"100%"};const a=m=>r.jsx("div",{className:i.wrapper,children:r.jsx(t,{...m,children:d.map((e,o)=>r.jsx(t.Crumb,{children:r.jsx("a",{href:e.href,target:e.target,children:e.label})},o))})});a.storyName=l;a.args={width:"100%"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(argsTypes: IBreadcrumbsProps): ReactNode => {
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
