import{j as r}from"./jsx-runtime-BRNY0I4F.js";import{M as b,L as g}from"./index-ByC9Mgvh.js";import{B as t}from"./index-kyLNX40n.js";import{g as l}from"./styles.module-CfbNvgm1.js";import{a as B}from"./argsTypes-CVLd6fMj.js";import{b as h,B as x,t as y,D as f}from"./constants-B2HphWJD.js";import"./index-Bnop-kX6.js";import"./index-D0sJu8id.js";import"./index-wMnNF9Um.js";import"./clsx-B-dksMZM.js";import"./generateUUID-DAuIdu-p.js";import"./32-CMOOVZNy.js";import"./index-qC5wYQgy.js";import"./index-B0lWqv5F.js";import"./index-BVI3RfDi.js";import"./index-C7kuRPht.js";import"./index-DPg--y1u.js";import"./types-CpBSVUgC.js";import"./index-CocscvOf.js";import"./index-CT8gBKwQ.js";import"./index-XJ5PfNkm.js";import"./index-BXzk8UvY.js";const z={title:"Components/Breadcrumbs/Stories",component:t,argTypes:B},e=m=>r.jsx("div",{className:l.wrapper,children:r.jsx(b,{children:r.jsx(t,{...m,children:h.map((s,o)=>r.jsx(t.Crumb,{children:r.jsx(g,{to:s.href,children:s.label})},o))})})});e.storyName=x;e.args={width:"100%"};const a=m=>r.jsx("div",{className:l.wrapper,children:r.jsx(t,{...m,children:y.map((s,o)=>r.jsx(t.Crumb,{children:r.jsx("a",{href:s.href,target:s.target,children:s.label})},o))})});a.storyName=f;e.args={width:"100%"};var i,n,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`(argsTypes: IBreadcrumbsProps): ReactNode => {
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
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const H=["BreadcrumbsDefault","BreadcrumbsTarget"];export{e as BreadcrumbsDefault,a as BreadcrumbsTarget,H as __namedExportsOrder,z as default};
