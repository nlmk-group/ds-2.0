import{j as r}from"./jsx-runtime-BRNY0I4F.js";import{M as b,L as g}from"./index-ByC9Mgvh.js";import{d as t}from"./index-Z14Faoel.js";import{g as l}from"./styles.module-ox-emdf8.js";import{a as B}from"./argsTypes-CVLd6fMj.js";import{b as h,B as x,t as y,D as f}from"./constants-B2HphWJD.js";import"./index-Bnop-kX6.js";import"./index-D0sJu8id.js";import"./clsx-B-dksMZM.js";import"./generateUUID-Dz4mOyMt.js";import"./32-QiGXh8Io.js";import"./index-qC5wYQgy.js";import"./index-BuHkNwZq.js";import"./index-Dxx-yGvP.js";import"./index-C7kuRPht.js";import"./index-wMnNF9Um.js";import"./index-CiiUx5gY.js";import"./types-CpBSVUgC.js";import"./index-CocscvOf.js";import"./index-CT8gBKwQ.js";import"./index-XJ5PfNkm.js";import"./index-CG5Hm5ah.js";const z={title:"Components/Breadcrumbs/Stories",component:t,argTypes:B},e=m=>r.jsx("div",{className:l.wrapper,children:r.jsx(b,{children:r.jsx(t,{...m,children:h.map((s,o)=>r.jsx(t.Crumb,{children:r.jsx(g,{to:s.href,children:s.label})},o))})})});e.storyName=x;e.args={width:"100%"};const a=m=>r.jsx("div",{className:l.wrapper,children:r.jsx(t,{...m,children:y.map((s,o)=>r.jsx(t.Crumb,{children:r.jsx("a",{href:s.href,target:s.target,children:s.label})},o))})});a.storyName=f;e.args={width:"100%"};var i,n,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`(argsTypes: IBreadcrumbsProps): ReactNode => {
  return <div className={styles.wrapper}>
      <MemoryRouter>
        <Breadcrumbs {...argsTypes}>
          {breadcrumbsLinks.map((link, index) => <Breadcrumbs.Crumb key={index}>
              <Link to={link.href}>{link.label}</Link>
            </Breadcrumbs.Crumb>)}
        </Breadcrumbs>
      </MemoryRouter>
    </div>;
}`,...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var d,c,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`(argsTypes: IBreadcrumbsProps): ReactNode => {
  return <div className={styles.wrapper}>
      <Breadcrumbs {...argsTypes}>
        {targetLinks.map((link, index) => <Breadcrumbs.Crumb key={index}>
            <a href={link.href} target={link.target}>
              {link.label}
            </a>
          </Breadcrumbs.Crumb>)}
      </Breadcrumbs>
    </div>;
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const H=["BreadcrumbsDefault","BreadcrumbsTarget"];export{e as BreadcrumbsDefault,a as BreadcrumbsTarget,H as __namedExportsOrder,z as default};
