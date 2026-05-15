import{j as e,r as s}from"./iframe-D_LYy3fl.js";import{B as l}from"./index-BtP4eAFz.js";import{P as n,s as d}from"./index-B68SVRmH.js";import{a as x}from"./argsTypes-BlQF6Y1m.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-C_cRJjro.js";import"./index-B1PU1CNi.js";import"./index-BU_GnhDV.js";import"./index-BkmiSUDO.js";import"./24-DBpiE5RN.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-Q5YcqIYP.js";import"./index-Bj6Bthvm.js";import"./index-D2Bt9vO-.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-5PnItkP7.js";import"./index-Y_-eDXu7.js";import"./32-BBjrBt_R.js";import"./32-B1ex1Qfl.js";import"./24-BzTqzIQp.js";import"./24-b_koWyIs.js";import"./24-XaiESbAO.js";import"./24-SvF-uGUY.js";import"./24-C31X8Df1.js";import"./24-DjRuCPMC.js";import"./24-owNDVSH-.js";import"./24-BoWyYuma.js";import"./16-DkYOHGQf.js";import"./24-ZwSrW1fV.js";import"./24-D4x4T2Vm.js";import"./16-BrwH80oO.js";import"./16-CXgWdZwH.js";import"./16-C70VLwWe.js";import"./16-DJp-l2qz.js";import"./16-8C7xLZBI.js";import"./index-oJloIZca.js";import"./useFloatingReferenceSync-DtnNKvIM.js";import"./index-BWcODPGj.js";import"./types-TdnjS80C.js";import"./floating-ui.react-XEmCJJOr.js";const C=t=>e.jsx("div",{className:d.wrapper,children:e.jsx(t,{})}),ie={title:"Components/Pagination/Stories",component:n,argTypes:x,decorators:[C]},i=t=>{const[r,a]=s.useState(1);return e.jsx("div",{style:{width:"800px"},children:e.jsx(n,{...t,currentPage:r,setCurrentPage:a,maxPageCount:20})})};i.storyName="Pagination по умолчанию";const P=t=>{const[r,a]=s.useState(7);return e.jsx("div",{style:{width:"800px"},children:e.jsx(n,{...t,currentPage:r,setCurrentPage:a,maxPageCount:20})})};P.storyName="Pagination с разрывами";const g=t=>{const[r,a]=s.useState(17);return e.jsx("div",{style:{width:"800px"},children:e.jsx(n,{...t,currentPage:r,setCurrentPage:a,maxPageCount:20})})};g.storyName="Pagination с левым разрывом";const m=t=>{const[r,a]=s.useState(4);return e.jsx("div",{style:{width:"800px"},children:e.jsx(n,{...t,currentPage:r,setCurrentPage:a,maxPageCount:20})})};m.storyName="Pagination с правым разрывом";const u=t=>{const[r,a]=s.useState(0),[o,p]=s.useState(10);return e.jsx("div",{style:{width:"800px"},children:e.jsx(n,{...t,currentPage:r,setCurrentPage:a,elementsPerPage:o,setElementsPerPage:p,withSelect:!0,maxPageCount:20})})};u.storyName="Pagination с возможностью выбора количества записей на странице";const c=()=>{const[t,r]=s.useState(1),[a,o]=s.useState(20);return e.jsxs(l,{flexDirection:"column",gap:"40px",children:[e.jsx(n,{currentPage:t,setCurrentPage:r,elementsPerPage:a,setElementsPerPage:o,withSelect:!0,maxPageCount:15,itemsLabel:"элементов"}),e.jsx(n,{currentPage:t,setCurrentPage:r,elementsPerPage:a,setElementsPerPage:o,withSelect:!0,maxPageCount:15,itemsLabel:"строк"}),e.jsx(n,{currentPage:t,setCurrentPage:r,elementsPerPage:a,setElementsPerPage:o,withSelect:!0,maxPageCount:15})]})};c.storyName="Pagination с настраиваемым текстом в селекте";i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(argsTypes: IPaginationProps): JSX.Element => {
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
}`,...c.parameters?.docs?.source}}};const Pe=["PaginationDefault","PaginationWithGap","PaginationWithLeftGap","PaginationWithRightGap","PaginationWithSelect","PaginationWithCustomLabel"];export{i as PaginationDefault,c as PaginationWithCustomLabel,P as PaginationWithGap,g as PaginationWithLeftGap,m as PaginationWithRightGap,u as PaginationWithSelect,Pe as __namedExportsOrder,ie as default};
