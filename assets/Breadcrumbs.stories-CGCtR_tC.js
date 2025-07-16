import{j as r}from"./jsx-runtime-BTJTZTIL.js";import{L as b}from"./index-eUtQrexB.js";import{e as t}from"./TreeList-BgNZ17Gs.js";import{g as l}from"./styles.module-m0Zsy3Hi.js";import{a as g}from"./argsTypes-CVLd6fMj.js";import{b as B,t as h,B as x,D as f}from"./constants-B2HphWJD.js";import"./index-ChsGqxH_.js";import"./index-BcJSXhQi.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./clsx-B-dksMZM.js";import"./generateUUID-CJxgi7Ha.js";import"./32-BpMTv1cT.js";import"./index-DmffzHLE.js";import"./index-BG4omi31.js";import"./index-DcXliXrs.js";import"./index-D8WlRtvM.js";import"./index-D-jyRV5V.js";import"./index-WHoiTdKD.js";import"./types-CpBSVUgC.js";import"./index-VmJK6twV.js";import"./index-CRm92gKC.js";import"./index-DxgC_uyg.js";import"./index-t2lirjGB.js";import"./index-C5rKoyII.js";import"./tiny-invariant-CopsF_GD.js";const K={title:"Components/Breadcrumbs/Stories",component:t,argTypes:g},s=m=>r.jsx("div",{className:l.wrapper,children:r.jsx(t,{...m,children:B.map((e,o)=>r.jsx(t.Crumb,{children:r.jsx(b,{to:e.href,children:e.label})},o))})});s.storyName=x;s.args={width:"100%"};const a=m=>r.jsx("div",{className:l.wrapper,children:r.jsx(t,{...m,children:h.map((e,o)=>r.jsx(t.Crumb,{children:r.jsx("a",{href:e.href,target:e.target,children:e.label})},o))})});a.storyName=f;a.args={width:"100%"};var i,p,n;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`(argsTypes: IBreadcrumbsProps): ReactNode => {
  return <div className={styles.wrapper}>
      <Breadcrumbs {...argsTypes}>
        {breadcrumbsLinks.map((link, index) => <Breadcrumbs.Crumb key={index}>
            <Link to={link.href}>{link.label}</Link>
          </Breadcrumbs.Crumb>)}
      </Breadcrumbs>
    </div>;
}`,...(n=(p=s.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};var c,d,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`(argsTypes: IBreadcrumbsProps): ReactNode => {
  return <div className={styles.wrapper}>
      <Breadcrumbs {...argsTypes}>
        {targetLinks.map((link, index) => <Breadcrumbs.Crumb key={index}>
            <a href={link.href} target={link.target}>
              {link.label}
            </a>
          </Breadcrumbs.Crumb>)}
      </Breadcrumbs>
    </div>;
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const Q=["BreadcrumbsDefault","BreadcrumbsTarget"];export{s as BreadcrumbsDefault,a as BreadcrumbsTarget,Q as __namedExportsOrder,K as default};
