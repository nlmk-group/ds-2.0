import{j as r,L as p}from"./iframe-GHQjEpsb.js";import{B as t}from"./index-qKoEXpn1.js";import{g as i}from"./styles.module-P9JyAdOG.js";import{a as n}from"./argsTypes-CVLd6fMj.js";import{b as c,t as d,B as u,D as l}from"./constants-B2HphWJD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-gU83LE3e.js";import"./types-TdnjS80C.js";import"./index-CAqv-5FK.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-Ch8UEd8D.js";import"./24-CvJc9f8d.js";import"./24-V-842Hd4.js";import"./24-BFYJrOCK.js";import"./24-CFV5ODyi.js";import"./24-BT3VdodN.js";import"./24-CD438uYz.js";import"./24-NYxH4Wn7.js";import"./24-0wMAnnTO.js";import"./24-xN4MxKIZ.js";import"./16-BqW1rNBw.js";import"./24-Ec1WffcD.js";import"./24-Bf3BEapt.js";import"./16-Dc97ioNZ.js";import"./16-CwgMkzPr.js";import"./16-FVLzaVo_.js";import"./index-B6KRA3ZB.js";import"./index-DDjduPuu.js";const z={title:"Components/Breadcrumbs/Stories",component:t,argTypes:n},s=m=>r.jsx("div",{className:i.wrapper,children:r.jsx(t,{...m,children:c.map((e,o)=>r.jsx(t.Crumb,{children:r.jsx(p,{to:e.href,children:e.label})},o))})});s.storyName=u;s.args={width:"100%"};const a=m=>r.jsx("div",{className:i.wrapper,children:r.jsx(t,{...m,children:d.map((e,o)=>r.jsx(t.Crumb,{children:r.jsx("a",{href:e.href,target:e.target,children:e.label})},o))})});a.storyName=l;a.args={width:"100%"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(argsTypes: IBreadcrumbsProps): ReactNode => {
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
