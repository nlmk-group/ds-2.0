import{j as r}from"./jsx-runtime-BRNY0I4F.js";import{M as b,L as g}from"./index-ByC9Mgvh.js";import{f as t}from"./index-ByAgZyky.js";import{g as l}from"./styles.module-ox-emdf8.js";import{a as B}from"./argsTypes-CVLd6fMj.js";import{b as h,B as x,t as f,D as y}from"./constants-B2HphWJD.js";import"./index-Bnop-kX6.js";import"./index-D0sJu8id.js";import"./clsx-B-dksMZM.js";import"./generateUUID-B22BSTI4.js";import"./32-DCTol8-9.js";import"./index-qC5wYQgy.js";import"./index-DJJ0U8Tt.js";import"./index-BuA7rasS.js";import"./index-C7kuRPht.js";import"./index-wMnNF9Um.js";import"./index-CGzvFf0p.js";import"./types-CpBSVUgC.js";import"./index-CocscvOf.js";import"./index-CT8gBKwQ.js";import"./index-XJ5PfNkm.js";import"./index-BAfSYk8P.js";import"./index-Br4tp0-d.js";const H={title:"Components/Breadcrumbs/Stories",component:t,argTypes:B},e=m=>r.jsx("div",{className:l.wrapper,children:r.jsx(b,{children:r.jsx(t,{...m,children:h.map((s,o)=>r.jsx(t.Crumb,{children:r.jsx(g,{to:s.href,children:s.label})},o))})})});e.storyName=x;e.args={width:"100%"};const a=m=>r.jsx("div",{className:l.wrapper,children:r.jsx(t,{...m,children:f.map((s,o)=>r.jsx(t.Crumb,{children:r.jsx("a",{href:s.href,target:s.target,children:s.label})},o))})});a.storyName=y;e.args={width:"100%"};var i,n,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`(argsTypes: IBreadcrumbsProps): ReactNode => {
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