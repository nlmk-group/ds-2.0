import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as n}from"./index-BcJSXhQi.js";import{P as s,L as G}from"./TreeList-BgNZ17Gs.js";import"./generateUUID-CJxgi7Ha.js";import"./index-BG4omi31.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-DcXliXrs.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-t2lirjGB.js";import"./index-C5rKoyII.js";import"./32-BpMTv1cT.js";import{a as N}from"./argsTypes-BlQF6Y1m.js";import"./index-ChsGqxH_.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";const I=t=>e.jsx("div",{className:G.wrapper,children:e.jsx(t,{})}),ee={title:"Components/Pagination/Stories",component:s,argTypes:N,decorators:[I]},o=t=>{const[r,a]=n.useState(1);return e.jsx("div",{style:{width:"800px"},children:e.jsx(s,{...t,currentPage:r,setCurrentPage:a,maxPageCount:20})})};o.storyName="Pagination по умолчанию";const i=t=>{const[r,a]=n.useState(7);return e.jsx("div",{style:{width:"800px"},children:e.jsx(s,{...t,currentPage:r,setCurrentPage:a,maxPageCount:20})})};i.storyName="Pagination с разрывами";const g=t=>{const[r,a]=n.useState(17);return e.jsx("div",{style:{width:"800px"},children:e.jsx(s,{...t,currentPage:r,setCurrentPage:a,maxPageCount:20})})};g.storyName="Pagination с левым разрывом";const P=t=>{const[r,a]=n.useState(4);return e.jsx("div",{style:{width:"800px"},children:e.jsx(s,{...t,currentPage:r,setCurrentPage:a,maxPageCount:20})})};P.storyName="Pagination с правым разрывом";const u=t=>{const[r,a]=n.useState(0),[f,W]=n.useState(10);return e.jsx("div",{style:{width:"800px"},children:e.jsx(s,{...t,currentPage:r,setCurrentPage:a,elementsPerPage:f,setElementsPerPage:W,withSelect:!0,maxPageCount:20})})};u.storyName="Pagination с возможностью выбора количества записей на странице";var p,c,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`(argsTypes: IPaginationProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  return <div style={{
    width: '800px'
  }}>
      <Pagination {...argsTypes} currentPage={currentPage} setCurrentPage={setCurrentPage} maxPageCount={20} />
    </div>;
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,l,x;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`(argsTypes: IPaginationProps): JSX.Element => {
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
}`,...(T=(E=u.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};const te=["PaginationDefault","PaginationWithGap","PaginationWithLeftGap","PaginationWithRightGap","PaginationWithSelect"];export{o as PaginationDefault,i as PaginationWithGap,g as PaginationWithLeftGap,P as PaginationWithRightGap,u as PaginationWithSelect,te as __namedExportsOrder,ee as default};
