import{j as r,L as p}from"./iframe-D_LYy3fl.js";import{B as t}from"./index-BsdBWJ3a.js";import{g as i}from"./styles.module-P9JyAdOG.js";import{a as n}from"./argsTypes-CVLd6fMj.js";import{b as c,t as d,B as u,D as l}from"./constants-B2HphWJD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-BWcODPGj.js";import"./types-TdnjS80C.js";import"./index-Y_-eDXu7.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-BBjrBt_R.js";import"./32-B1ex1Qfl.js";import"./24-BzTqzIQp.js";import"./24-b_koWyIs.js";import"./24-XaiESbAO.js";import"./24-SvF-uGUY.js";import"./24-DBpiE5RN.js";import"./24-C31X8Df1.js";import"./24-DjRuCPMC.js";import"./24-owNDVSH-.js";import"./24-BoWyYuma.js";import"./16-DkYOHGQf.js";import"./24-ZwSrW1fV.js";import"./24-D4x4T2Vm.js";import"./16-BrwH80oO.js";import"./16-CXgWdZwH.js";import"./16-C70VLwWe.js";import"./16-DJp-l2qz.js";import"./16-8C7xLZBI.js";import"./index-Q5YcqIYP.js";import"./index-Bj6Bthvm.js";const K={title:"Components/Breadcrumbs/Stories",component:t,argTypes:n},s=m=>r.jsx("div",{className:i.wrapper,children:r.jsx(t,{...m,children:c.map((e,o)=>r.jsx(t.Crumb,{children:r.jsx(p,{to:e.href,children:e.label})},o))})});s.storyName=u;s.args={width:"100%"};const a=m=>r.jsx("div",{className:i.wrapper,children:r.jsx(t,{...m,children:d.map((e,o)=>r.jsx(t.Crumb,{children:r.jsx("a",{href:e.href,target:e.target,children:e.label})},o))})});a.storyName=l;a.args={width:"100%"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(argsTypes: IBreadcrumbsProps): ReactNode => {
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
