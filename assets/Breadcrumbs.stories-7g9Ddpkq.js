import{j as r,L as p}from"./iframe-BYEcINU_.js";import{B as t}from"./index-ZNnHXGDD.js";import{g as i}from"./styles.module-P9JyAdOG.js";import{a as n}from"./argsTypes-CVLd6fMj.js";import{b as c,t as d,B as u,D as l}from"./constants-B2HphWJD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-DzEvNTCJ.js";import"./types-TdnjS80C.js";import"./index-aRgZryTI.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-BcLCWGHn.js";import"./32-DEU7E1yO.js";import"./24-nElrukLD.js";import"./24-CuYChjrW.js";import"./24-Bg-YkJof.js";import"./24-DOSHn3uj.js";import"./24-qZuYAR8B.js";import"./24-Mxvma0Zx.js";import"./24-wPS-GG8M.js";import"./24-mlyJft-U.js";import"./24-DTKLnnJ8.js";import"./16-BbOPmjLm.js";import"./24-CSKlV1Hw.js";import"./24-BeWDWat7.js";import"./16-DVw9RX5j.js";import"./16-BucT6FLY.js";import"./16-CjgRgEbF.js";import"./16--L8JfMjs.js";import"./16-B5oEirVJ.js";import"./index-D2JaD0OQ.js";import"./index-U8G7M_Zs.js";const K={title:"Components/Breadcrumbs/Stories",component:t,argTypes:n},s=m=>r.jsx("div",{className:i.wrapper,children:r.jsx(t,{...m,children:c.map((e,o)=>r.jsx(t.Crumb,{children:r.jsx(p,{to:e.href,children:e.label})},o))})});s.storyName=u;s.args={width:"100%"};const a=m=>r.jsx("div",{className:i.wrapper,children:r.jsx(t,{...m,children:d.map((e,o)=>r.jsx(t.Crumb,{children:r.jsx("a",{href:e.href,target:e.target,children:e.label})},o))})});a.storyName=l;a.args={width:"100%"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(argsTypes: IBreadcrumbsProps): ReactNode => {
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
