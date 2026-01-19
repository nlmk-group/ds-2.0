import{j as e,r as s}from"./iframe-tXE4xoYc.js";import{B as l}from"./index-Cx9ne2MY.js";import{P as n,s as d}from"./index-Dc1ORl7H.js";import{a as x}from"./argsTypes-BlQF6Y1m.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-DfJPKXXV.js";import"./index-IJbXH1LS.js";import"./index-UIqxTLHU.js";import"./index-CtNEMVMn.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-c0V9lvMd.js";import"./24-DRYMupHO.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-q3_oAMiW.js";import"./index-CnPKv_iQ.js";import"./index-BavAFXG7.js";import"./32-C-sXzJO7.js";import"./24-CmyNkjMd.js";import"./24-DOosEbor.js";import"./24-BWrbmGeu.js";import"./24-BbCg_oVA.js";import"./24-CzQL-KAt.js";import"./24-DKRMhkuJ.js";import"./24-BGmf7Yvo.js";import"./24-C3aWb0fW.js";import"./16-5OD6xOBP.js";import"./24-DhcVhNlZ.js";import"./24-CGaTDQAV.js";import"./16-DrGrHANJ.js";import"./16-3aq9OzD6.js";import"./16-Caqr7FMr.js";import"./useFloatingReferenceSync-BoqrGUtC.js";import"./index-BYo_Qif0.js";import"./index-DlYR7-H3.js";import"./index-mWxT_Pnt.js";import"./types-TdnjS80C.js";import"./floating-ui.react-rIU8UbdJ.js";import"./index-FmjVc4PV.js";import"./index-D72bge1Z.js";const C=t=>e.jsx("div",{className:d.wrapper,children:e.jsx(t,{})}),oe={title:"Components/Pagination/Stories",component:n,argTypes:x,decorators:[C]},i=t=>{const[r,a]=s.useState(1);return e.jsx("div",{style:{width:"800px"},children:e.jsx(n,{...t,currentPage:r,setCurrentPage:a,maxPageCount:20})})};i.storyName="Pagination по умолчанию";const P=t=>{const[r,a]=s.useState(7);return e.jsx("div",{style:{width:"800px"},children:e.jsx(n,{...t,currentPage:r,setCurrentPage:a,maxPageCount:20})})};P.storyName="Pagination с разрывами";const g=t=>{const[r,a]=s.useState(17);return e.jsx("div",{style:{width:"800px"},children:e.jsx(n,{...t,currentPage:r,setCurrentPage:a,maxPageCount:20})})};g.storyName="Pagination с левым разрывом";const m=t=>{const[r,a]=s.useState(4);return e.jsx("div",{style:{width:"800px"},children:e.jsx(n,{...t,currentPage:r,setCurrentPage:a,maxPageCount:20})})};m.storyName="Pagination с правым разрывом";const u=t=>{const[r,a]=s.useState(0),[o,p]=s.useState(10);return e.jsx("div",{style:{width:"800px"},children:e.jsx(n,{...t,currentPage:r,setCurrentPage:a,elementsPerPage:o,setElementsPerPage:p,withSelect:!0,maxPageCount:20})})};u.storyName="Pagination с возможностью выбора количества записей на странице";const c=()=>{const[t,r]=s.useState(1),[a,o]=s.useState(20);return e.jsxs(l,{flexDirection:"column",gap:"40px",children:[e.jsx(n,{currentPage:t,setCurrentPage:r,elementsPerPage:a,setElementsPerPage:o,withSelect:!0,maxPageCount:15,itemsLabel:"элементов"}),e.jsx(n,{currentPage:t,setCurrentPage:r,elementsPerPage:a,setElementsPerPage:o,withSelect:!0,maxPageCount:15,itemsLabel:"строк"}),e.jsx(n,{currentPage:t,setCurrentPage:r,elementsPerPage:a,setElementsPerPage:o,withSelect:!0,maxPageCount:15})]})};c.storyName="Pagination с настраиваемым текстом в селекте";i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(argsTypes: IPaginationProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  return <div style={{
    width: '800px'
  }}>
      <Pagination {...argsTypes} currentPage={currentPage} setCurrentPage={setCurrentPage} maxPageCount={20} />
    </div>;
}`,...i.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`(argsTypes: IPaginationProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(7);
  return <div style={{
    width: '800px'
  }}>
      <Pagination {...argsTypes} currentPage={currentPage} setCurrentPage={setCurrentPage} maxPageCount={20} />
    </div>;
}`,...P.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(argsTypes: IPaginationProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(17);
  return <div style={{
    width: '800px'
  }}>
      <Pagination {...argsTypes} currentPage={currentPage} setCurrentPage={setCurrentPage} maxPageCount={20} />
    </div>;
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(argsTypes: IPaginationProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(4);
  return <div style={{
    width: '800px'
  }}>
      <Pagination {...argsTypes} currentPage={currentPage} setCurrentPage={setCurrentPage} maxPageCount={20} />
    </div>;
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(argsTypes: IPaginationProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(0);
  const [elementsPerPage, setElementsPerPage] = useState(10);
  return <div style={{
    width: '800px'
  }}>
      <Pagination {...argsTypes} currentPage={currentPage} setCurrentPage={setCurrentPage} elementsPerPage={elementsPerPage} setElementsPerPage={setElementsPerPage} withSelect maxPageCount={20} />
    </div>;
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage, setElementsPerPage] = useState(20);
  return <Box flexDirection="column" gap="40px">
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} elementsPerPage={elementsPerPage} setElementsPerPage={setElementsPerPage} withSelect maxPageCount={15} itemsLabel="элементов" />

      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} elementsPerPage={elementsPerPage} setElementsPerPage={setElementsPerPage} withSelect maxPageCount={15} itemsLabel="строк" />

      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} elementsPerPage={elementsPerPage} setElementsPerPage={setElementsPerPage} withSelect maxPageCount={15} />
    </Box>;
}`,...c.parameters?.docs?.source}}};const ie=["PaginationDefault","PaginationWithGap","PaginationWithLeftGap","PaginationWithRightGap","PaginationWithSelect","PaginationWithCustomLabel"];export{i as PaginationDefault,c as PaginationWithCustomLabel,P as PaginationWithGap,g as PaginationWithLeftGap,m as PaginationWithRightGap,u as PaginationWithSelect,ie as __namedExportsOrder,oe as default};
