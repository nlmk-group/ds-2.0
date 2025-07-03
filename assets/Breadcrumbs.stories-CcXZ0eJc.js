import{j as r}from"./jsx-runtime-BTJTZTIL.js";import{L as b}from"./index-eUtQrexB.js";import{e as t}from"./TreeList-BD5pX8WO.js";import{g as l}from"./styles.module-m0Zsy3Hi.js";import{a as g}from"./argsTypes-CVLd6fMj.js";import{b as B,t as h,B as x,D as f}from"./constants-B2HphWJD.js";import"./index-ChsGqxH_.js";import"./index-BcJSXhQi.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./clsx-B-dksMZM.js";import"./generateUUID-Cr6BF8sx.js";import"./32-DMwn_7G4.js";import"./index-DmffzHLE.js";import"./index-D9qQUMnP.js";import"./index-53N2drcz.js";import"./index-D8WlRtvM.js";import"./index-D-jyRV5V.js";import"./index-WHoiTdKD.js";import"./types-CpBSVUgC.js";import"./index-VmJK6twV.js";import"./index-CRm92gKC.js";import"./index-DxgC_uyg.js";import"./index-BQAMZg9d.js";import"./index-C5rKoyII.js";import"./tiny-invariant-CopsF_GD.js";const K={title:"Components/Breadcrumbs/Stories",component:t,argTypes:g},e=m=>r.jsx("div",{className:l.wrapper,children:r.jsx(t,{...m,children:B.map((s,o)=>r.jsx(t.Crumb,{children:r.jsx(b,{to:s.href,children:s.label})},o))})});e.storyName=x;e.args={width:"100%"};const a=m=>r.jsx("div",{className:l.wrapper,children:r.jsx(t,{...m,children:h.map((s,o)=>r.jsx(t.Crumb,{children:r.jsx("a",{href:s.href,target:s.target,children:s.label})},o))})});a.storyName=f;e.args={width:"100%"};var i,p,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`(argsTypes: IBreadcrumbsProps): ReactNode => {
  return <div className={styles.wrapper}>
      <Breadcrumbs {...argsTypes}>
        {breadcrumbsLinks.map((link, index) => <Breadcrumbs.Crumb key={index}>
            <Link to={link.href}>{link.label}</Link>
          </Breadcrumbs.Crumb>)}
      </Breadcrumbs>
    </div>;
}`,...(n=(p=e.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};var c,d,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`(argsTypes: IBreadcrumbsProps): ReactNode => {
  return <div className={styles.wrapper}>
      <Breadcrumbs {...argsTypes}>
        {targetLinks.map((link, index) => <Breadcrumbs.Crumb key={index}>
            <a href={link.href} target={link.target}>
              {link.label}
            </a>
          </Breadcrumbs.Crumb>)}
      </Breadcrumbs>
    </div>;
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const Q=["BreadcrumbsDefault","BreadcrumbsTarget"];export{e as BreadcrumbsDefault,a as BreadcrumbsTarget,Q as __namedExportsOrder,K as default};
