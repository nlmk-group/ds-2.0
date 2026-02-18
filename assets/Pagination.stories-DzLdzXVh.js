import{j as e,r as s}from"./iframe-DXgTh6Z1.js";import{B as l}from"./index-Bd4lHRV0.js";import{P as n,s as d}from"./index-Cgkxu7Qk.js";import{a as x}from"./argsTypes-BlQF6Y1m.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-xDA_A-aD.js";import"./index-CnUkpoWG.js";import"./index-Crin4Hk2.js";import"./index-DavKZYHC.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-DYE4Bi1W.js";import"./24-sZrB_4qI.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-C0y4NBi5.js";import"./index-XmWHrheD.js";import"./index-ucJ0GnFn.js";import"./index-jEb4Knwf.js";import"./index-DdxGYpuj.js";import"./32-BZXccBNX.js";import"./24-C30wJjmO.js";import"./24-BbhvzLc-.js";import"./24-CmuppIra.js";import"./24-CHg1C3ZC.js";import"./24-CivDG4N5.js";import"./24-iRhnmlFx.js";import"./24-SIU2poG3.js";import"./24-BhlAG-0S.js";import"./16-BbwgBG1i.js";import"./24-Chag6Oqa.js";import"./24-BHCEpASW.js";import"./16-BY5Rr64R.js";import"./16-CRuPnIyY.js";import"./16-B8cH_bM_.js";import"./useFloatingReferenceSync-DqOI9czm.js";import"./index-DPmsdUVY.js";import"./types-TdnjS80C.js";import"./floating-ui.react-CorT-KP5.js";const C=t=>e.jsx("div",{className:d.wrapper,children:e.jsx(t,{})}),ne={title:"Components/Pagination/Stories",component:n,argTypes:x,decorators:[C]},i=t=>{const[r,a]=s.useState(1);return e.jsx("div",{style:{width:"800px"},children:e.jsx(n,{...t,currentPage:r,setCurrentPage:a,maxPageCount:20})})};i.storyName="Pagination по умолчанию";const P=t=>{const[r,a]=s.useState(7);return e.jsx("div",{style:{width:"800px"},children:e.jsx(n,{...t,currentPage:r,setCurrentPage:a,maxPageCount:20})})};P.storyName="Pagination с разрывами";const g=t=>{const[r,a]=s.useState(17);return e.jsx("div",{style:{width:"800px"},children:e.jsx(n,{...t,currentPage:r,setCurrentPage:a,maxPageCount:20})})};g.storyName="Pagination с левым разрывом";const m=t=>{const[r,a]=s.useState(4);return e.jsx("div",{style:{width:"800px"},children:e.jsx(n,{...t,currentPage:r,setCurrentPage:a,maxPageCount:20})})};m.storyName="Pagination с правым разрывом";const u=t=>{const[r,a]=s.useState(0),[o,p]=s.useState(10);return e.jsx("div",{style:{width:"800px"},children:e.jsx(n,{...t,currentPage:r,setCurrentPage:a,elementsPerPage:o,setElementsPerPage:p,withSelect:!0,maxPageCount:20})})};u.storyName="Pagination с возможностью выбора количества записей на странице";const c=()=>{const[t,r]=s.useState(1),[a,o]=s.useState(20);return e.jsxs(l,{flexDirection:"column",gap:"40px",children:[e.jsx(n,{currentPage:t,setCurrentPage:r,elementsPerPage:a,setElementsPerPage:o,withSelect:!0,maxPageCount:15,itemsLabel:"элементов"}),e.jsx(n,{currentPage:t,setCurrentPage:r,elementsPerPage:a,setElementsPerPage:o,withSelect:!0,maxPageCount:15,itemsLabel:"строк"}),e.jsx(n,{currentPage:t,setCurrentPage:r,elementsPerPage:a,setElementsPerPage:o,withSelect:!0,maxPageCount:15})]})};c.storyName="Pagination с настраиваемым текстом в селекте";i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(argsTypes: IPaginationProps): JSX.Element => {
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
}`,...c.parameters?.docs?.source}}};const se=["PaginationDefault","PaginationWithGap","PaginationWithLeftGap","PaginationWithRightGap","PaginationWithSelect","PaginationWithCustomLabel"];export{i as PaginationDefault,c as PaginationWithCustomLabel,P as PaginationWithGap,g as PaginationWithLeftGap,m as PaginationWithRightGap,u as PaginationWithSelect,se as __namedExportsOrder,ne as default};
