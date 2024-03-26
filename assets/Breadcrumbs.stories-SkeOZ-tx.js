import{j as t}from"./clsx.m-CcuEzMhP.js";import{p as o,t as r}from"./index-VLfweUxF.js";import"./generateUUID-BkPc_NdJ.js";import"./index-SiU_55iz.js";import"./index-Dz0_KCIo.js";import"./index-fbTu1Hcf.js";import"./index-CpJBQeN-.js";import"./index-hvdSV1r-.js";import"./index-BQVY97ak.js";import"./index-B5tj7Glx.js";import"./index-14g2znra.js";import"./32-BmhDzcbC.js";import"./index-CBqU2yxZ.js";import{s as p}from"./styles.module-DeLvTIFi.js";import{b as h}from"./constants-10c0sEa4.js";import{b as B}from"./argsTypes-BsjBUXBh.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-BO3pQ7ot.js";const T="Обычное использование компонента",y="Компонент с заданной шириной",N="Компонент содержащий ссылки с разными target",H={title:"Components/Breadcrumbs/Stories",component:o,argTypes:B},e=m=>t("div",{className:p.wrapper,children:t(o,{...m})});e.storyName=T;e.args={crumbs:h,width:100};const s=m=>t("div",{className:p.wrapper,children:t(o,{...m})});s.storyName=y;s.args={width:70,crumbs:h};const a=m=>t("div",{className:p.wrapper,children:t(o,{...m})});a.storyName=N;a.args={width:100,crumbs:[{href:"https://www.lipsum.com/",label:`${r._blank}`,target:r._blank},{href:"https://www.lipsum.com/",label:`${r._parent}`,target:r._parent},{href:"https://www.lipsum.com/",label:`${r._self}`,target:r._self},{href:"https://www.lipsum.com/",label:`${r._top}`,target:r._top}]};var c,i,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`(argTypes: BreadcrumbsProps): ReactNode => {
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
}`,...(w=(g=a.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};const q=["BreadcrumbsDefault","BreadcrumbsWidth","BreadcrumbsTarget"];export{e as BreadcrumbsDefault,a as BreadcrumbsTarget,s as BreadcrumbsWidth,q as __namedExportsOrder,H as default};
