import{j as t}from"./jsx-runtime-2xDJh5tt.js";import{B as o,t as r}from"./index-BTGymsfC.js";import"./generateUUID-1cqmAxQg.js";import"./index-D1sOrwww.js";import"./index-BqvJ5JrJ.js";import"./index-CkVMA9Py.js";import"./index-BulafiJ9.js";import"./index-Dd2IALEV.js";import"./index-BGOHbkSJ.js";import"./index-Dp7-Jy-a.js";import"./index-D8kVD15d.js";import"./32-oKJmtLZM.js";import"./index-CBqU2yxZ.js";import{s as p}from"./styles.module-DeLvTIFi.js";import{b as B}from"./constants-Ckt_QAMn.js";import{b as h}from"./argsTypes-DABHVc1B.js";import"./clsx.m-CH7BE6MN.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-4J70fF5O.js";const T="Обычное использование компонента",y="Компонент с заданной шириной",N="Компонент содержащий ссылки с разными target",q={title:"Components/Breadcrumbs/Stories",component:o,argTypes:h},e=m=>t("div",{className:p.wrapper,children:t(o,{...m})});e.storyName=T;e.args={crumbs:B,width:100};const s=m=>t("div",{className:p.wrapper,children:t(o,{...m})});s.storyName=y;s.args={width:70,crumbs:B};const a=m=>t("div",{className:p.wrapper,children:t(o,{...m})});a.storyName=N;a.args={width:100,crumbs:[{href:"https://www.lipsum.com/",label:`${r._blank}`,target:r._blank},{href:"https://www.lipsum.com/",label:`${r._parent}`,target:r._parent},{href:"https://www.lipsum.com/",label:`${r._self}`,target:r._self},{href:"https://www.lipsum.com/",label:`${r._top}`,target:r._top}]};var c,i,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`(argTypes: BreadcrumbsProps): ReactNode => {
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
}`,...(w=(g=a.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};const z=["BreadcrumbsDefault","BreadcrumbsWidth","BreadcrumbsTarget"];export{e as BreadcrumbsDefault,a as BreadcrumbsTarget,s as BreadcrumbsWidth,z as __namedExportsOrder,q as default};