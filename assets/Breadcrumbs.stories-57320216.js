import{j as t}from"./clsx.m-3764cf42.js";import{e as o,t as r}from"./index-f014e98c.js";import"./index-ec455f54.js";import"./index-095d5581.js";import"./index-e99519f1.js";import"./index-147655d7.js";import"./index-fb030d50.js";import"./index-c9e69acb.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-bc089e17.js";import"./index-f1f749bf.js";import{s as p}from"./styles.module-caf3a80a.js";import{d as h}from"./constants-ce9ada02.js";import{b as B}from"./argsTypes-7335303f.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./get-78cac09e.js";import"./index-c1da5c13.js";const T="Обычное использование компонента",y="Компонент с заданной шириной",N="Компонент содержащий ссылки с разными target",G={title:"Components/Breadcrumbs/Stories",component:o,argTypes:B},e=m=>t("div",{className:p.wrapper,children:t(o,{...m})});e.storyName=T;e.args={crumbs:h,width:100};const s=m=>t("div",{className:p.wrapper,children:t(o,{...m})});s.storyName=y;s.args={width:70,crumbs:h};const a=m=>t("div",{className:p.wrapper,children:t(o,{...m})});a.storyName=N;a.args={width:100,crumbs:[{href:"https://www.lipsum.com/",label:`${r._blank}`,target:r._blank},{href:"https://www.lipsum.com/",label:`${r._parent}`,target:r._parent},{href:"https://www.lipsum.com/",label:`${r._self}`,target:r._self},{href:"https://www.lipsum.com/",label:`${r._top}`,target:r._top}]};var c,i,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`(argTypes: BreadcrumbsProps): ReactNode => {
  return <div className={styles.wrapper}>
      <Breadcrumbs {...argTypes} />
    </div>;
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var n,u,l;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`(argTypes: BreadcrumbsProps): ReactNode => {
  return <div className={styles.wrapper}>
      <Breadcrumbs {...argTypes} />
    </div>;
}`,...(l=(u=s.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var b,g,w;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`(argTypes: BreadcrumbsProps): ReactNode => {
  return <div className={styles.wrapper}>
      <Breadcrumbs {...argTypes} />
    </div>;
}`,...(w=(g=a.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};const H=["BreadcrumbsDefault","BreadcrumbsWidth","BreadcrumbsTarget"];export{e as BreadcrumbsDefault,a as BreadcrumbsTarget,s as BreadcrumbsWidth,H as __namedExportsOrder,G as default};
