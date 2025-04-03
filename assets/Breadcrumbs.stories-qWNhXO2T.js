import{j as r}from"./jsx-runtime-BRNY0I4F.js";import{L as b}from"./index-DdzAcA2z.js";import{f as t}from"./TreeList-BR3jFxI-.js";import{g as l}from"./styles.module-ox-emdf8.js";import{a as g}from"./argsTypes-CVLd6fMj.js";import{b as B,B as f,t as h,D as x}from"./constants-B2HphWJD.js";import"./index-Bnop-kX6.js";import"./index-D0sJu8id.js";import"./clsx-B-dksMZM.js";import"./generateUUID-DcAM5OoX.js";import"./32-X262ygjI.js";import"./index-qC5wYQgy.js";import"./index-BtfGMBzk.js";import"./index-L_UGJClr.js";import"./index-CH_Nznxf.js";import"./index-ExEzblsB.js";import"./index-DppSdhCO.js";import"./types-CpBSVUgC.js";import"./index-cR4M_wwG.js";import"./index-B5g4YLzC.js";import"./index-FnAFVao7.js";import"./index-nqntSJSg.js";import"./index-DokmLR-l.js";import"./tiny-invariant-CopsF_GD.js";const H={title:"Components/Breadcrumbs/Stories",component:t,argTypes:g},e=m=>r.jsx("div",{className:l.wrapper,children:r.jsx(t,{...m,children:B.map((s,o)=>r.jsx(t.Crumb,{children:r.jsx(b,{to:s.href,children:s.label})},o))})});e.storyName=f;e.args={width:"100%"};const a=m=>r.jsx("div",{className:l.wrapper,children:r.jsx(t,{...m,children:h.map((s,o)=>r.jsx(t.Crumb,{children:r.jsx("a",{href:s.href,target:s.target,children:s.label})},o))})});a.storyName=x;e.args={width:"100%"};var i,n,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`(argsTypes: IBreadcrumbsProps): ReactNode => {
  return <div className={styles.wrapper}>
      <Breadcrumbs {...argsTypes}>
        {breadcrumbsLinks.map((link, index) => <Breadcrumbs.Crumb key={index}>
            <Link to={link.href}>{link.label}</Link>
          </Breadcrumbs.Crumb>)}
      </Breadcrumbs>
    </div>;
}`,...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,d,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`(argsTypes: IBreadcrumbsProps): ReactNode => {
  return <div className={styles.wrapper}>
      <Breadcrumbs {...argsTypes}>
        {targetLinks.map((link, index) => <Breadcrumbs.Crumb key={index}>
            <a href={link.href} target={link.target}>
              {link.label}
            </a>
          </Breadcrumbs.Crumb>)}
      </Breadcrumbs>
    </div>;
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const J=["BreadcrumbsDefault","BreadcrumbsTarget"];export{e as BreadcrumbsDefault,a as BreadcrumbsTarget,J as __namedExportsOrder,H as default};
