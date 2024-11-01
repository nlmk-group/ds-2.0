import{j as r}from"./jsx-runtime-DoxjgJx5.js";import{M as b,L as g}from"./index-DHK7V2bJ.js";import{B as t}from"./index-ZojCmbpv.js";import{g as l}from"./styles.module-DyNiVTaI.js";import{a as B}from"./argsTypes-hrjbNv6a.js";import{b as h,B as x,t as y,D as f}from"./constants-B2HphWJD.js";import"./index-Cu9bd8lq.js";import"./index-Ckls47V4.js";import"./index-ED8ccfsJ.js";import"./clsx-B-dksMZM.js";import"./generateUUID-CG7VmJJw.js";import"./32-Bjhqu_Pf.js";import"./index-BHxe-dnq.js";import"./index-XsxLq1mj.js";import"./index-iWHyAWYR.js";import"./index-CWQ0GGcJ.js";import"./index-AXtJih2E.js";import"./types-CpBSVUgC.js";import"./index-BztLnIMF.js";import"./index-7KVZVlDS.js";import"./index-Udc0C2Qz.js";import"./index-CPdpS9Jm.js";import"./get-CeVb1zXw.js";const H={title:"Components/Breadcrumbs/Stories",component:t,argTypes:B},e=m=>r.jsx("div",{className:l.wrapper,children:r.jsx(b,{children:r.jsx(t,{...m,children:h.map((s,o)=>r.jsx(t.Crumb,{children:r.jsx(g,{to:s.href,children:s.label})},o))})})});e.storyName=x;e.args={width:"100%"};const a=m=>r.jsx("div",{className:l.wrapper,children:r.jsx(t,{...m,children:y.map((s,o)=>r.jsx(t.Crumb,{children:r.jsx("a",{href:s.href,target:s.target,children:s.label})},o))})});a.storyName=f;e.args={width:"100%"};var i,n,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`(argsTypes: IBreadcrumbsProps): ReactNode => {
  return <div className={styles.wrapper}>
      <MemoryRouter>
        <Breadcrumbs {...argsTypes}>
          {breadcrumbsLinks.map((link, index) => <Breadcrumbs.Crumb key={index}>
              <Link to={link.href}>{link.label}</Link>
            </Breadcrumbs.Crumb>)}
        </Breadcrumbs>
      </MemoryRouter>
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
