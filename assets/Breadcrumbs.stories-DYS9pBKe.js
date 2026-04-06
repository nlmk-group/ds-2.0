import{j as r,L as p}from"./iframe-adG_7yRG.js";import{B as t}from"./index-CzkpZwDT.js";import{g as i}from"./styles.module-BGEDXogi.js";import{a as n}from"./argsTypes-CVLd6fMj.js";import{b as c,t as d,B as u,D as l}from"./constants-B2HphWJD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-Bw5qm4Ov.js";import"./index-75kOkesn.js";import"./index-DC_nQVbx.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-B9XnRb5u.js";import"./24-DrBRk2vS.js";import"./24-BuaVNHQi.js";import"./24-C2G2GNsa.js";import"./24-B4fAX0Ec.js";import"./24-Wv8b4C8A.js";import"./24-GH3yabNM.js";import"./24-BDLYxJUB.js";import"./24-DcUw9JWs.js";import"./24-B-tnmrg_.js";import"./16-LI8OsMJg.js";import"./24-BxGqfMjL.js";import"./24-B0jNPX91.js";import"./16-BTp4GQQG.js";import"./16-D-NUuvME.js";import"./16-C5RTlL5k.js";import"./index-CwSciSyB.js";import"./types-TdnjS80C.js";const z={title:"Components/Breadcrumbs/Stories",component:t,argTypes:n},s=m=>r.jsx("div",{className:i.wrapper,children:r.jsx(t,{...m,children:c.map((e,o)=>r.jsx(t.Crumb,{children:r.jsx(p,{to:e.href,children:e.label})},o))})});s.storyName=u;s.args={width:"100%"};const a=m=>r.jsx("div",{className:i.wrapper,children:r.jsx(t,{...m,children:d.map((e,o)=>r.jsx(t.Crumb,{children:r.jsx("a",{href:e.href,target:e.target,children:e.label})},o))})});a.storyName=l;a.args={width:"100%"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(argsTypes: IBreadcrumbsProps): ReactNode => {
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
