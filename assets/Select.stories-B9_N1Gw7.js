import{j as e,r as n}from"./iframe-CxLN9ksd.js";import{c as Z}from"./colorsMapping-C6bFIk14.js";import{s as g}from"./sizeMappingInput-XXScYzk1.js";import{S as c,s as Y,g as $}from"./index-DRzRogyp.js";import{B as ee}from"./index-D3DoxRCP.js";import{T as K}from"./index-CORENSTS.js";import{a as te}from"./argsTypes-DVvIbylh.js";import{o as i,a as I,b as se,c as oe}from"./mocks-BFCnz4Ix.js";import{I as le}from"./24-CbC-8o3Y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CYd80pzx.js";import"./types-TdnjS80C.js";import"./floating-ui.react-B9Baa2-L.js";import"./clsx-B-dksMZM.js";import"./sizesMapping-D8QavrGc.js";import"./index-LyR6p6RN.js";import"./index-CosC_TVD.js";import"./index-AybKi-wv.js";import"./index-Boblobe5.js";import"./24-BFZg9aq0.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-BN0H6Yla.js";import"./index-DcM-4FYU.js";import"./index-M8Uj9-kW.js";import"./32-B2BQHND4.js";import"./24-BGXSSISX.js";import"./24-MJ8JdQQ9.js";import"./24-2IXSosOm.js";import"./24-Dlyxu4_q.js";import"./24-DMGI7E0m.js";import"./24-voYW8sKN.js";import"./24-DMqNa1pl.js";import"./24-DJtALV7Z.js";import"./16-CchysOzF.js";import"./24-CJ9IDGZV.js";import"./16-kcyE2NZr.js";import"./16-DRyq0qh_.js";import"./16-D_ueUpcb.js";import"./generateUUID-M57HTP56.js";import"./index-DYBNPjYe.js";import"./index-Ck8f73vE.js";const ne="Select-module__wrapper___APfB7",h={wrapper:ne,"item-column-wrapper":"Select-module__item-column-wrapper___oPKh4","item-column-center-wrapper":"Select-module__item-column-center-wrapper___ZvFzh","table-cell":"Select-module__table-cell___igcXn"},re=t=>e.jsx("div",{className:h.wrapper,children:e.jsx(t,{})}),Ke={title:"Components/Select/Stories",component:c,argTypes:te,decorators:[re],parameters:{actions:{argTypesRegex:"^on.*"}}},U=[{value:"1",label:"React",subLabel:"Библиотека для UI"},{value:"2",label:"Vue",subLabel:"Прогрессивный фреймворк"},{value:"3",label:"Angular",subLabel:"Фреймворк от Google"},{value:"4",label:"Svelte",subLabel:"Компилируемый фреймворк"},{value:"5",label:"Preact",subLabel:"Легковесная альтернатива React"},{value:"6",label:"Solid",subLabel:"Реактивный фреймворк"},{value:"7",label:"Alpine",subLabel:"Минималистичный фреймворк"},{value:"8",label:"Lit",subLabel:"Для веб-компонентов"},{value:"9",label:"Next.js",subLabel:"React фреймворк"},{value:"10",label:"Nuxt",subLabel:"Vue фреймворк"},{value:"11",label:"Remix",subLabel:"Fullstack фреймворк"},{value:"12",label:"Astro",subLabel:"Статический сайт-генератор"}],q=[{value:"1",label:"JavaScript"},{value:"2",label:"TypeScript"},{value:"3",label:"React"},{value:"4",label:"Vue"},{value:"5",label:"Angular"},{value:"6",label:"Node.js"},{value:"7",label:"Express"},{value:"8",label:"MongoDB"},{value:"9",label:"PostgreSQL"},{value:"10",label:"GraphQL"},{value:"11",label:"Redux"},{value:"12",label:"MobX"}],j=t=>{const{options:r,...l}=t,[s,o]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(c,{options:i,...l,selected:s,onSelectionChange:o})})};j.storyName="Select по умолчанию";const y=t=>{const{options:r,...l}=t,[s,o]=n.useState([]);return console.log(l),e.jsx("div",{style:{padding:"50px"},children:e.jsx(c,{options:i,...l,selected:s,onSelectionChange:o})})};y.storyName="Select с переносом текста опции на следующую строку";y.args={multilineOption:!0};const A=t=>{const{options:r,...l}=t,[s,o]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(c,{options:i,label:"Одиночный выбор",multiple:!1,...l,selected:s,onSelectionChange:o})})};A.storyName="Одиночный выбор";const f=t=>{const{options:r,onSearch:l,...s}=t,[o,a]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(c,{options:i,label:"Выбор с поиском",isSearchable:!0,...s,selected:o,onSelectionChange:a})})};f.storyName="Выбор с поиском";const L=t=>{const{options:r,onSearch:l,...s}=t,[o,a]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(c,{options:i,label:"Автовыбор по Enter",autoSelectSingleOnEnter:!0,isSearchable:!0,...s,selected:o,onSelectionChange:a})})};L.storyName="Автовыбор по Enter";const N=t=>{const{options:r,...l}=t,[s,o]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(c,{options:i,label:"Множественный выбор",multiple:!0,...l,selected:s,onSelectionChange:o})})};N.storyName="Select с множественным выбором";const E=t=>{const{options:r,...l}=t,[s,o]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(c,{options:i,label:"Disabled",disabled:!0,...l,selected:s,onSelectionChange:o})})};E.storyName="Выбор в состоянии disabled";const P=t=>{const{options:r,...l}=t,[s,o]=n.useState(["apple"]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(c,{options:i,label:"Обработчик при выборе",...l,selected:s,onSelectionChange:o})})};P.storyName="Выбор с обработчиком при выборе";const M=t=>{const{options:r,...l}=t,[s,o]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(c,{options:i,label:"Размер s",size:g.s,...l,selected:s,onSelectionChange:o})})};M.storyName="Компактный Select";const W=t=>{const{options:r,...l}=t,[s,o]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(c,{options:i,label:"Размер xs",size:g.xs,...l,selected:s,onSelectionChange:o})})};W.storyName="Экстра компактный Select";const X=t=>{const{options:r,...l}=t,[s,o]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(c,{options:i,label:"Скролл",scrollingItems:2,...l,selected:s,onSelectionChange:o})})};X.storyName="Select с установленным скроллом";const J=t=>{const{options:r,...l}=t,[s,o]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(c,{options:i,label:"Цвет success",color:Z.success,...l,selected:s,onSelectionChange:o})})};J.storyName="Цвет success";const z=t=>{const{options:r,...l}=t,[s,o]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(c,{options:i,label:"Цвет warning",color:Z.warning,...l,selected:s,onSelectionChange:o})})};z.storyName="Цвет warning";const F=t=>{const{options:r,...l}=t,[s,o]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(c,{options:i,label:"Цвет error",color:Z.error,...l,selected:s,onSelectionChange:o})})};F.storyName="Цвет error";const B=t=>{const{options:r,...l}=t,[s,o]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(c,{options:[],label:"Пустой select",...l,selected:s,onSelectionChange:o})})};B.storyName="Пустой Select";const _=t=>{const{options:r,onSearch:l,...s}=t,[o,a]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(c,{options:i,label:"Выбор с поиском",isClearSearchOnBlur:!0,isSearchable:!0,...s,selected:o,onSelectionChange:a})})};_.storyName="Выбор со сбросом значения в поиске при onBlur поля ввода";const x=t=>{const[r,l]=n.useState([]);return e.jsx("div",{style:{padding:"50px",width:"500px"},children:e.jsx(c,{...t,selected:r,onSelectionChange:l})})};x.storyName="Select с иконками";x.args={options:I};const T=t=>{const[r,l]=n.useState([]);return e.jsx("div",{style:{padding:"50px",width:"500px"},children:e.jsx(c,{...t,selected:r,onSelectionChange:l})})};T.storyName='Select "незаметный"';T.args={options:I,stealthy:!0};const v=t=>{const[r,l]=n.useState([]),[s,o]=n.useState([]),[a,p]=n.useState([]);return e.jsxs("div",{className:h["item-column-wrapper"],children:[e.jsx(c,{...t,highlightSelected:!0,selected:r,onSelectionChange:l}),e.jsx(c,{...t,multiple:!0,highlightSelected:!0,selected:s,onSelectionChange:o}),e.jsx(c,{...t,multiple:!0,highlightSelected:!0,withoutCheckbox:!0,selected:a,onSelectionChange:p})]})};v.storyName="Select c опцией выбора галкой";v.args={options:I};const b=t=>{const[r,l]=n.useState([]),[s,o]=n.useState([]),[a,p]=n.useState([]),[u,d]=n.useState([]),[S,Q]=n.useState([]),[m,G]=n.useState([]);return e.jsxs("div",{className:h["item-column-center-wrapper"],children:[e.jsx(c,{...t,size:g.m,selected:r,onSelectionChange:l}),e.jsx(c,{...t,size:g.s,selected:s,onSelectionChange:o}),e.jsx(c,{...t,size:g.xs,highlightSelected:!0,withoutCheckbox:!0,selected:a,onSelectionChange:p}),e.jsx(c,{...t,size:g.m,stealthy:!0,selected:u,onSelectionChange:d}),e.jsx(c,{...t,size:g.s,stealthy:!0,selected:S,onSelectionChange:Q}),e.jsx(c,{...t,size:g.xs,highlightSelected:!0,withoutCheckbox:!0,stealthy:!0,selected:m,onSelectionChange:G})]})};b.storyName="Select c байджем кол-ва выбранных опций";b.args={options:I,multiple:!0,badgeAmount:7};const C=t=>{const[r,l]=n.useState([]),[s,o]=n.useState([]),[a,p]=n.useState([]);return e.jsxs("div",{className:h["item-column-wrapper"],children:[e.jsx(c,{...t,multiple:!0,highlightSelected:!0,selected:r,onSelectionChange:l}),e.jsx(c,{...t,multiple:!0,withoutCheckbox:!0,highlightSelected:!0,selected:s,onSelectionChange:o}),e.jsx(c,{...t,stealthy:!0,highlightSelected:!0,selected:a,onSelectionChange:p})]})};C.storyName="Select опции с описанием";C.args={options:se};const O=t=>{const[r,l]=n.useState(I[8].value),[s,o]=n.useState("");return n.useEffect(()=>{o("")},[r]),e.jsxs("div",{className:h["table-cell"],children:[e.jsx(c,{...t,className:Y["show-only-icon"],highlightSelected:!0,stealthy:!0,listMinWidth:300,options:I,selected:r,onSelectionChange:l,badgeAmount:r==="Multiple Choice"&&s.length>0?s.length:void 0,activeSelectedValue:s.length>0}),e.jsx(c,{...t,multiple:r==="Multiple Choice",withoutCheckbox:!0,highlightSelected:!0,stealthy:!0,listMinWidth:300,options:i,selected:s,onSelectionChange:o,activeSelectedValue:s.length>0})]})};O.storyName="Select Табличный";O.args={size:"s"};const w=t=>{const[r,l]=n.useState([]),[s,o]=n.useState([]);return e.jsxs("div",{className:h["item-column-wrapper"],children:[e.jsx(c,{...t,selected:r,onSelectionChange:l}),e.jsx(c,{...t,stealthy:!0,selected:s,onSelectionChange:o})]})};w.storyName="Select c цветными иконками";w.args={options:oe};const k=t=>{const[r,l]=n.useState(""),s=[{label:"В формате .xls",value:"xls"},{label:"В формате .pdf",value:"pdf"}],o=a=>{l(a.toString())};return e.jsxs("div",{className:h["item-column-wrapper"],children:[e.jsx(c,{...t,options:s,selected:[],onSelectionChange:o,className:Y["child-wrapper"],children:e.jsx(ee,{type:"button",variant:"secondary",startIcon:e.jsx(le,{}),children:"Сформировать отчет"})}),r&&e.jsxs(K,{color:"var(--steel-90)",children:["Вы выбрали файл в формате .",r,"."]})]})};k.storyName="Нативное меню";const V=()=>{const[t,r]=n.useState(""),[l,s]=n.useState(!1),o=async()=>(s(!0),await new Promise(p=>setTimeout(p,1e3)),s(!1),q),a=async p=>{s(!0),await new Promise(d=>setTimeout(d,800));const u=q.filter(d=>d.label.toLowerCase().includes(p.toLowerCase()));return s(!1),u};return e.jsx("div",{style:{padding:"50px"},children:e.jsx(c,{label:"Поиск технологий",options:[],isSearchable:!0,selected:t,onSelectionChange:r,onOpen:o,onSearch:a,isLoading:l})})};V.storyName="Асинхронный Select с поиском";const R=()=>{const[t,r]=n.useState([]),[l,s]=n.useState(!1),[o,a]=n.useState([]),p=async()=>{s(!0),await new Promise(S=>setTimeout(S,1e3));const d=U.slice(0,8);return a(d),s(!1),d},u=d=>{r(Array.isArray(d)?d:[d])};return e.jsx("div",{style:{padding:"50px"},children:e.jsx(c,{label:"Frontend-фреймворки",options:o,multiple:!0,selected:t,onSelectionChange:u,onOpen:p,isLoading:l,highlightSelected:!0,isAllSelectView:!0})})};R.storyName="Асинхронный Select с множественным выбором";const D=()=>{const[t,r]=n.useState([]),[l,s]=n.useState(!1),[o,a]=n.useState([]),p=async()=>(s(!0),await new Promise(S=>setTimeout(S,1e3)),a(U),s(!1),U),u=async S=>{s(!0),await new Promise(m=>setTimeout(m,800));const Q=o.filter(m=>{const G=S.toLowerCase();return $(m.label).toLowerCase().includes(G)||(m.subLabel?.toLowerCase()||"").includes(G)});return s(!1),Q},d=S=>{r(Array.isArray(S)?S:[S])};return e.jsx("div",{style:{padding:"50px"},children:e.jsx(c,{label:"Frontend-фреймворки",options:o,multiple:!0,selected:t,onSelectionChange:d,onOpen:p,onSearch:u,isLoading:l,isSearchable:!0,highlightSelected:!0,isAllSelectView:!0,isClearSearchOnBlur:!0})})};D.storyName="Select с поиском, множественным выбором и асинхронной загрузкой";const H=t=>{const{options:r,...l}=t,[s,o]=n.useState(""),[a,p]=n.useState([]),u=S=>{o(S)},d=S=>{p(S)};return e.jsxs("div",{style:{padding:"50px"},children:[e.jsxs("div",{style:{marginBottom:"30px"},children:[e.jsx(K,{variant:"Heading4",style:{marginBottom:"10px"},children:"Одиночный выбор с кнопкой сброса"}),e.jsx(c,{options:i,label:"Выберите опцию",selected:s,onSelectionChange:u,reset:!0})]}),e.jsxs("div",{children:[e.jsx(K,{variant:"Heading4",style:{marginBottom:"10px"},children:"Множественный выбор с кнопкой сброса"}),e.jsx(c,{options:i,label:"Выберите несколько опций",multiple:!0,selected:a,onSelectionChange:d,reset:!0})]})]})};H.storyName="Select с кнопкой сброса";j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} {...otherArgs} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...j.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);
  console.log(otherArgs);
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} {...otherArgs} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...y.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} label="Одиночный выбор" multiple={false} {...otherArgs} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...A.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    onSearch,
    ...otherArgs
  } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} label="Выбор с поиском" isSearchable {...otherArgs} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...f.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    onSearch,
    ...otherArgs
  } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} label="Автовыбор по Enter" autoSelectSingleOnEnter isSearchable {...otherArgs} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...L.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} label="Множественный выбор" multiple {...otherArgs} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...N.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} label="Disabled" disabled {...otherArgs} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...E.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  const [option, setOption] = useState<TSelected>(['apple']);
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} label="Обработчик при выборе" {...otherArgs} selected={option} onSelectionChange={setOption} />
    </div>;
}`,...P.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} label="Размер s" size={sizesMappingInput.s} {...otherArgs} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...M.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} label="Размер xs" size={sizesMappingInput.xs} {...otherArgs} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...W.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} label="Скролл" scrollingItems={2} {...otherArgs} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...X.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} label="Цвет success" color={customInputColors.success} {...otherArgs} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...J.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} label="Цвет warning" color={customInputColors.warning} {...otherArgs} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...z.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} label="Цвет error" color={customInputColors.error} {...otherArgs} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...F.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px'
  }}>
      <Select options={[]} label="Пустой select" {...otherArgs} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...B.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    onSearch,
    ...otherArgs
  } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} label="Выбор с поиском" isClearSearchOnBlur isSearchable {...otherArgs} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,..._.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px',
    width: '500px'
  }}>
      <Select {...argTypes} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...x.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px',
    width: '500px'
  }}>
      <Select {...argTypes} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...T.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  const [selectedTwo, setSelectedTwo] = useState<TSelected>([]);
  const [selectedThree, setSelectedThree] = useState<TSelected>([]);
  return <div className={styles['item-column-wrapper']}>
      <Select {...argTypes} highlightSelected selected={selected} onSelectionChange={setSelected} />
      <Select {...argTypes} multiple highlightSelected selected={selectedTwo} onSelectionChange={setSelectedTwo} />
      <Select {...argTypes} multiple highlightSelected withoutCheckbox selected={selectedThree} onSelectionChange={setSelectedThree} />
    </div>;
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  const [selectedTwo, setSelectedTwo] = useState<TSelected>([]);
  const [selectedThree, setSelectedThree] = useState<TSelected>([]);
  const [selectedFourth, setSelectedFourth] = useState<TSelected>([]);
  const [selectedFifth, setSelectedFifth] = useState<TSelected>([]);
  const [selectedSixth, setSelectedSixth] = useState<TSelected>([]);
  return <div className={styles['item-column-center-wrapper']}>
      <Select {...argTypes} size={sizesMappingInput.m} selected={selected} onSelectionChange={setSelected} />
      <Select {...argTypes} size={sizesMappingInput.s} selected={selectedTwo} onSelectionChange={setSelectedTwo} />
      <Select {...argTypes} size={sizesMappingInput.xs} highlightSelected withoutCheckbox selected={selectedThree} onSelectionChange={setSelectedThree} />
      <Select {...argTypes} size={sizesMappingInput.m} stealthy selected={selectedFourth} onSelectionChange={setSelectedFourth} />
      <Select {...argTypes} size={sizesMappingInput.s} stealthy selected={selectedFifth} onSelectionChange={setSelectedFifth} />
      <Select {...argTypes} size={sizesMappingInput.xs} highlightSelected withoutCheckbox stealthy selected={selectedSixth} onSelectionChange={setSelectedSixth} />
    </div>;
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  const [selectedTwo, setSelectedTwo] = useState<TSelected>([]);
  const [selectedThree, setSelectedThree] = useState<TSelected>([]);
  return <div className={styles['item-column-wrapper']}>
      <Select {...argTypes} multiple highlightSelected selected={selected} onSelectionChange={setSelected} />
      <Select {...argTypes} multiple withoutCheckbox highlightSelected selected={selectedTwo} onSelectionChange={setSelectedTwo} />
      <Select {...argTypes} stealthy highlightSelected selected={selectedThree} onSelectionChange={setSelectedThree} />
    </div>;
}`,...C.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [typeSelect, setTypeSelect] = useState<string | string[]>(optionsWithIcons[8].value);
  const [selectedOption, setSelectedOption] = useState<string | string[]>('');
  useEffect(() => {
    setSelectedOption('');
  }, [typeSelect]);
  return <div className={styles['table-cell']}>
      <Select {...argTypes} className={style['show-only-icon']} highlightSelected stealthy listMinWidth={300} options={optionsWithIcons} selected={typeSelect} onSelectionChange={setTypeSelect} badgeAmount={typeSelect === 'Multiple Choice' && selectedOption.length > 0 ? selectedOption.length : undefined} activeSelectedValue={selectedOption.length > 0} />
      <Select {...argTypes} multiple={typeSelect === 'Multiple Choice'} withoutCheckbox highlightSelected stealthy listMinWidth={300} options={options} selected={selectedOption} onSelectionChange={setSelectedOption} activeSelectedValue={selectedOption.length > 0} />
    </div>;
}`,...O.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  const [selectedStealthy, setSelectedStealthy] = useState<TSelected>([]);
  return <div className={styles['item-column-wrapper']}>
      <Select {...argTypes} selected={selected} onSelectionChange={setSelected} />
      <Select {...argTypes} stealthy selected={selectedStealthy} onSelectionChange={setSelectedStealthy} />
    </div>;
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [format, setFormat] = useState('');
  const optionsFormats: ISelectOption[] = [{
    label: 'В формате .xls',
    value: 'xls'
  }, {
    label: 'В формате .pdf',
    value: 'pdf'
  }];
  const handleChange = (f: TSelected) => {
    setFormat(f.toString());
  };
  return <div className={styles['item-column-wrapper']}>
      <Select {...argTypes} options={optionsFormats} selected={[]} onSelectionChange={handleChange} className={style['child-wrapper']}>
        <Button type="button" variant="secondary" startIcon={<IconArticleOutlined24 />}>
          Сформировать отчет
        </Button>
      </Select>
      {format && <Typography color="var(--steel-90)">Вы выбрали файл в формате .{format}.</Typography>}
    </div>;
}`,...k.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`(): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>('');
  const [isLoading, setIsLoading] = useState(false);
  const loadOptions = async (): Promise<ISelectOption[]> => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    return techStackOptions;
  };
  const searchOptions = async (searchTerm: string): Promise<ISelectOption[]> => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    const filteredOptions = techStackOptions.filter(option => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
    setIsLoading(false);
    return filteredOptions;
  };
  return <div style={{
    padding: '50px'
  }}>
      <Select label="Поиск технологий" options={[]} isSearchable={true} selected={selected} onSelectionChange={setSelected} onOpen={loadOptions} onSearch={searchOptions} isLoading={isLoading} />
    </div>;
}`,...V.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`(): JSX.Element => {
  const [selected, setSelected] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<ISelectOption[]>([]);
  const loadOptions = async (): Promise<ISelectOption[]> => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    const options = frameworkOptions.slice(0, 8);
    setOptions(options);
    setIsLoading(false);
    return options;
  };
  const handleSelectionChange = (newSelected: string | string[]) => {
    setSelected(Array.isArray(newSelected) ? newSelected : [newSelected]);
  };
  return <div style={{
    padding: '50px'
  }}>
      <Select label="Frontend-фреймворки" options={options} multiple={true} selected={selected} onSelectionChange={handleSelectionChange} onOpen={loadOptions} isLoading={isLoading} highlightSelected={true} isAllSelectView={true} />
    </div>;
}`,...R.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`(): JSX.Element => {
  const [selected, setSelected] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<ISelectOption[]>([]);
  const loadOptions = async (): Promise<ISelectOption[]> => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setOptions(frameworkOptions);
    setIsLoading(false);
    return frameworkOptions;
  };
  const searchOptions = async (searchTerm: string): Promise<ISelectOption[]> => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    const filteredOptions = options.filter(option => {
      const searchTermLower = searchTerm.toLowerCase();
      return getLabel(option.label).toLowerCase().includes(searchTermLower) || (option.subLabel?.toLowerCase() || '').includes(searchTermLower);
    });
    setIsLoading(false);
    return filteredOptions;
  };
  const handleSelectionChange = (newSelected: string | string[]) => {
    setSelected(Array.isArray(newSelected) ? newSelected : [newSelected]);
  };
  return <div style={{
    padding: '50px'
  }}>
      <Select label="Frontend-фреймворки" options={options} multiple={true} selected={selected} onSelectionChange={handleSelectionChange} onOpen={loadOptions} onSearch={searchOptions} isLoading={isLoading} isSearchable={true} highlightSelected={true} isAllSelectView={true} isClearSearchOnBlur={true} />
    </div>;
}`,...D.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  const [selected, setSelected] = useState<TSelected>('');
  const [selectedMultiple, setSelectedMultiple] = useState<TSelected>([]);
  const handleSelectionChangeSingle = (value: TSelected) => {
    setSelected(value);
  };
  const handleSelectionChangeMultiple = (value: TSelected) => {
    setSelectedMultiple(value);
  };
  return <div style={{
    padding: '50px'
  }}>
      <div style={{
      marginBottom: '30px'
    }}>
        <Typography variant="Heading4" style={{
        marginBottom: '10px'
      }}>
          Одиночный выбор с кнопкой сброса
        </Typography>
        <Select options={options} label="Выберите опцию" selected={selected} onSelectionChange={handleSelectionChangeSingle} reset={true} />
      </div>

      <div>
        <Typography variant="Heading4" style={{
        marginBottom: '10px'
      }}>
          Множественный выбор с кнопкой сброса
        </Typography>
        <Select options={options} label="Выберите несколько опций" multiple={true} selected={selectedMultiple} onSelectionChange={handleSelectionChangeMultiple} reset={true} />
      </div>
    </div>;
}`,...H.parameters?.docs?.source}}};const Ue=["SelectDefault","SelectMultilineOption","SelectSingle","SelectWithSearch","SelectWithSearchByEnter","SelectMultiple","SelectDisabled","SelectWithSelectionCallback","SelectCompact","SelectExtraCompact","SelectScrollingItems","SelectSuccess","SelectWarning","SelectError","SelectEmpty","SelectWithClearSearchOnBlur","SelectWithIcons","SelectInvisible","SelectIconSelected","SelectBadgeAmount","SelectWithDescription","SelectTable","SelectWithColorfulIcons","NativeMenu","AsyncSelectWithSearch","MultiAsyncSelect","MultiAsyncSelectWithSearch","SelectWithReset"];export{V as AsyncSelectWithSearch,R as MultiAsyncSelect,D as MultiAsyncSelectWithSearch,k as NativeMenu,b as SelectBadgeAmount,M as SelectCompact,j as SelectDefault,E as SelectDisabled,B as SelectEmpty,F as SelectError,W as SelectExtraCompact,v as SelectIconSelected,T as SelectInvisible,y as SelectMultilineOption,N as SelectMultiple,X as SelectScrollingItems,A as SelectSingle,J as SelectSuccess,O as SelectTable,z as SelectWarning,_ as SelectWithClearSearchOnBlur,w as SelectWithColorfulIcons,C as SelectWithDescription,x as SelectWithIcons,H as SelectWithReset,f as SelectWithSearch,L as SelectWithSearchByEnter,P as SelectWithSelectionCallback,Ue as __namedExportsOrder,Ke as default};
