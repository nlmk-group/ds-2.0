import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{r as n}from"./index-Bnop-kX6.js";import{P as s,J as G}from"./index-N7PQoZjI.js";import"./generateUUID-Dz4mOyMt.js";import"./index-BuHkNwZq.js";import"./index-CiiUx5gY.js";import"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import"./index-qC5wYQgy.js";import"./index-Dxx-yGvP.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-CG5Hm5ah.js";import"./32-QiGXh8Io.js";import{a as J}from"./argsTypes-Bs5lrdRI.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./index-CT8gBKwQ.js";const N=t=>e.jsx("div",{className:G.wrapper,children:e.jsx(t,{})}),V={title:"Components/Pagination/Stories",component:s,argTypes:J,decorators:[N]},o=t=>{const[r,a]=n.useState(1);return e.jsx("div",{style:{width:"800px"},children:e.jsx(s,{...t,currentPage:r,setCurrentPage:a,maxPageCount:20})})};o.storyName="Pagination по умолчанию";const i=t=>{const[r,a]=n.useState(7);return e.jsx("div",{style:{width:"800px"},children:e.jsx(s,{...t,currentPage:r,setCurrentPage:a,maxPageCount:20})})};i.storyName="Pagination с разрывами";const g=t=>{const[r,a]=n.useState(17);return e.jsx("div",{style:{width:"800px"},children:e.jsx(s,{...t,currentPage:r,setCurrentPage:a,maxPageCount:20})})};g.storyName="Pagination с левым разрывом";const P=t=>{const[r,a]=n.useState(4);return e.jsx("div",{style:{width:"800px"},children:e.jsx(s,{...t,currentPage:r,setCurrentPage:a,maxPageCount:20})})};P.storyName="Pagination с правым разрывом";const u=t=>{const[r,a]=n.useState(0),[f,W]=n.useState(10);return e.jsx("div",{style:{width:"800px"},children:e.jsx(s,{...t,currentPage:r,setCurrentPage:a,elementsPerPage:f,setElementsPerPage:W,withSelect:!0,maxPageCount:20})})};u.storyName="Pagination с возможностью выбора количества записей на странице";var c,p,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`(argsTypes: IPaginationProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  return <div style={{
    width: '800px'
  }}>
      <Pagination {...argsTypes} currentPage={currentPage} setCurrentPage={setCurrentPage} maxPageCount={20} />
    </div>;
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,l,x;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`(argsTypes: IPaginationProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(7);
  return <div style={{
    width: '800px'
  }}>
      <Pagination {...argsTypes} currentPage={currentPage} setCurrentPage={setCurrentPage} maxPageCount={20} />
    </div>;
}`,...(x=(l=i.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};var C,h,y;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`(argsTypes: IPaginationProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(17);
  return <div style={{
    width: '800px'
  }}>
      <Pagination {...argsTypes} currentPage={currentPage} setCurrentPage={setCurrentPage} maxPageCount={20} />
    </div>;
}`,...(y=(h=g.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var S,v,j;P.parameters={...P.parameters,docs:{...(S=P.parameters)==null?void 0:S.docs,source:{originalSource:`(argsTypes: IPaginationProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(4);
  return <div style={{
    width: '800px'
  }}>
      <Pagination {...argsTypes} currentPage={currentPage} setCurrentPage={setCurrentPage} maxPageCount={20} />
    </div>;
}`,...(j=(v=P.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var w,E,T;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`(argsTypes: IPaginationProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(0);
  const [elementsPerPage, setElementsPerPage] = useState(10);
  return <div style={{
    width: '800px'
  }}>
      <Pagination {...argsTypes} currentPage={currentPage} setCurrentPage={setCurrentPage} elementsPerPage={elementsPerPage} setElementsPerPage={setElementsPerPage} withSelect maxPageCount={20} />
    </div>;
}`,...(T=(E=u.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};const Y=["PaginationDefault","PaginationWithGap","PaginationWithLeftGap","PaginationWithRightGap","PaginationWithSelect"];export{o as PaginationDefault,i as PaginationWithGap,g as PaginationWithLeftGap,P as PaginationWithRightGap,u as PaginationWithSelect,Y as __namedExportsOrder,V as default};
