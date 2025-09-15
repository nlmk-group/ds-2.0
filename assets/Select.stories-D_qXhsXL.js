import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as n}from"./index-BcJSXhQi.js";import{aI as r,l as q,aJ as Lt,B as Nt,aK as Et}from"./TreeList-Dx-quzH6.js";import{s as g}from"./index-Dl1-T1_Z.js";import"./generateUUID-Cm0X4XRy.js";import"./index-cHpEh_mw.js";import"./index-0Ow6mfXJ.js";import"./index-DMhwcTYd.js";import{T as K}from"./index-DmffzHLE.js";import"./index-CQem5UP1.js";import"./index-VmJK6twV.js";import"./index-DWrMXfke.js";import"./index-bO57duG5.js";import"./index-C5rKoyII.js";import{a as Pt}from"./32-CkUgnIrf.js";import{a as Mt}from"./argsTypes-BcfQONyH.js";import{o as i,a as I,b as Wt,c as Jt}from"./mocks-G1o9aA6A.js";import"./index-ChsGqxH_.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";const Xt="_wrapper_1ntrc_1",h={wrapper:Xt,"item-column-wrapper":"_item-column-wrapper_1ntrc_9","item-column-center-wrapper":"_item-column-center-wrapper_1ntrc_17","table-cell":"_table-cell_1ntrc_26"},zt=t=>e.jsx("div",{className:h.wrapper,children:e.jsx(t,{})}),as={title:"Components/Select/Stories",component:r,argTypes:Mt,decorators:[zt],parameters:{actions:{argTypesRegex:"^on.*"}}},U=[{value:"1",label:"React",subLabel:"Библиотека для UI"},{value:"2",label:"Vue",subLabel:"Прогрессивный фреймворк"},{value:"3",label:"Angular",subLabel:"Фреймворк от Google"},{value:"4",label:"Svelte",subLabel:"Компилируемый фреймворк"},{value:"5",label:"Preact",subLabel:"Легковесная альтернатива React"},{value:"6",label:"Solid",subLabel:"Реактивный фреймворк"},{value:"7",label:"Alpine",subLabel:"Минималистичный фреймворк"},{value:"8",label:"Lit",subLabel:"Для веб-компонентов"},{value:"9",label:"Next.js",subLabel:"React фреймворк"},{value:"10",label:"Nuxt",subLabel:"Vue фреймворк"},{value:"11",label:"Remix",subLabel:"Fullstack фреймворк"},{value:"12",label:"Astro",subLabel:"Статический сайт-генератор"}],Z=[{value:"1",label:"JavaScript"},{value:"2",label:"TypeScript"},{value:"3",label:"React"},{value:"4",label:"Vue"},{value:"5",label:"Angular"},{value:"6",label:"Node.js"},{value:"7",label:"Express"},{value:"8",label:"MongoDB"},{value:"9",label:"PostgreSQL"},{value:"10",label:"GraphQL"},{value:"11",label:"Redux"},{value:"12",label:"MobX"}],j=t=>{const{options:c,...l}=t,[s,o]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{options:i,...l,selected:s,onSelectionChange:o})})};j.storyName="Select по умолчанию";const y=t=>{const{options:c,...l}=t,[s,o]=n.useState([]);return console.log(l),e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{options:i,...l,selected:s,onSelectionChange:o})})};y.storyName="Select с переносом текста опции на следующую строку";y.args={multilineOption:!0};const A=t=>{const{options:c,...l}=t,[s,o]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{options:i,label:"Одиночный выбор",multiple:!1,...l,selected:s,onSelectionChange:o})})};A.storyName="Одиночный выбор";const f=t=>{const{options:c,onSearch:l,...s}=t,[o,a]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{options:i,label:"Выбор с поиском",isSearchable:!0,...s,selected:o,onSelectionChange:a})})};f.storyName="Выбор с поиском";const L=t=>{const{options:c,onSearch:l,...s}=t,[o,a]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{options:i,label:"Автовыбор по Enter",autoSelectSingleOnEnter:!0,isSearchable:!0,...s,selected:o,onSelectionChange:a})})};L.storyName="Автовыбор по Enter";const N=t=>{const{options:c,...l}=t,[s,o]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{options:i,label:"Множественный выбор",multiple:!0,...l,selected:s,onSelectionChange:o})})};N.storyName="Select с множественным выбором";const E=t=>{const{options:c,...l}=t,[s,o]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{options:i,label:"Disabled",disabled:!0,...l,selected:s,onSelectionChange:o})})};E.storyName="Выбор в состоянии disabled";const P=t=>{const{options:c,...l}=t,[s,o]=n.useState(["apple"]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{options:i,label:"Обработчик при выборе",...l,selected:s,onSelectionChange:o})})};P.storyName="Выбор с обработчиком при выборе";const M=t=>{const{options:c,...l}=t,[s,o]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{options:i,label:"Размер s",size:g.s,...l,selected:s,onSelectionChange:o})})};M.storyName="Компактный Select";const W=t=>{const{options:c,...l}=t,[s,o]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{options:i,label:"Размер xs",size:g.xs,...l,selected:s,onSelectionChange:o})})};W.storyName="Экстра компактный Select";const J=t=>{const{options:c,...l}=t,[s,o]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{options:i,label:"Скролл",scrollingItems:2,...l,selected:s,onSelectionChange:o})})};J.storyName="Select с установленным скроллом";const X=t=>{const{options:c,...l}=t,[s,o]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{options:i,label:"Цвет success",color:q.success,...l,selected:s,onSelectionChange:o})})};X.storyName="Цвет success";const z=t=>{const{options:c,...l}=t,[s,o]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{options:i,label:"Цвет warning",color:q.warning,...l,selected:s,onSelectionChange:o})})};z.storyName="Цвет warning";const F=t=>{const{options:c,...l}=t,[s,o]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{options:i,label:"Цвет error",color:q.error,...l,selected:s,onSelectionChange:o})})};F.storyName="Цвет error";const B=t=>{const{options:c,...l}=t,[s,o]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{options:[],label:"Пустой select",...l,selected:s,onSelectionChange:o})})};B.storyName="Пустой Select";const k=t=>{const{options:c,onSearch:l,...s}=t,[o,a]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{options:i,label:"Выбор с поиском",isClearSearchOnBlur:!0,isSearchable:!0,...s,selected:o,onSelectionChange:a})})};k.storyName="Выбор со сбросом значения в поиске при onBlur поля ввода";const x=t=>{const[c,l]=n.useState([]);return e.jsx("div",{style:{padding:"50px",width:"500px"},children:e.jsx(r,{...t,selected:c,onSelectionChange:l})})};x.storyName="Select с иконками";x.args={options:I};const T=t=>{const[c,l]=n.useState([]);return e.jsx("div",{style:{padding:"50px",width:"500px"},children:e.jsx(r,{...t,selected:c,onSelectionChange:l})})};T.storyName='Select "незаметный"';T.args={options:I,stealthy:!0};const v=t=>{const[c,l]=n.useState([]),[s,o]=n.useState([]),[a,p]=n.useState([]);return e.jsxs("div",{className:h["item-column-wrapper"],children:[e.jsx(r,{...t,highlightSelected:!0,selected:c,onSelectionChange:l}),e.jsx(r,{...t,multiple:!0,highlightSelected:!0,selected:s,onSelectionChange:o}),e.jsx(r,{...t,multiple:!0,highlightSelected:!0,withoutCheckbox:!0,selected:a,onSelectionChange:p})]})};v.storyName="Select c опцией выбора галкой";v.args={options:I};const b=t=>{const[c,l]=n.useState([]),[s,o]=n.useState([]),[a,p]=n.useState([]),[u,d]=n.useState([]),[S,Q]=n.useState([]),[m,G]=n.useState([]);return e.jsxs("div",{className:h["item-column-center-wrapper"],children:[e.jsx(r,{...t,size:g.m,selected:c,onSelectionChange:l}),e.jsx(r,{...t,size:g.s,selected:s,onSelectionChange:o}),e.jsx(r,{...t,size:g.xs,highlightSelected:!0,withoutCheckbox:!0,selected:a,onSelectionChange:p}),e.jsx(r,{...t,size:g.m,stealthy:!0,selected:u,onSelectionChange:d}),e.jsx(r,{...t,size:g.s,stealthy:!0,selected:S,onSelectionChange:Q}),e.jsx(r,{...t,size:g.xs,highlightSelected:!0,withoutCheckbox:!0,stealthy:!0,selected:m,onSelectionChange:G})]})};b.storyName="Select c байджем кол-ва выбранных опций";b.args={options:I,multiple:!0,badgeAmount:7};const C=t=>{const[c,l]=n.useState([]),[s,o]=n.useState([]),[a,p]=n.useState([]);return e.jsxs("div",{className:h["item-column-wrapper"],children:[e.jsx(r,{...t,multiple:!0,highlightSelected:!0,selected:c,onSelectionChange:l}),e.jsx(r,{...t,multiple:!0,withoutCheckbox:!0,highlightSelected:!0,selected:s,onSelectionChange:o}),e.jsx(r,{...t,stealthy:!0,highlightSelected:!0,selected:a,onSelectionChange:p})]})};C.storyName="Select опции с описанием";C.args={options:Wt};const O=t=>{const[c,l]=n.useState(I[8].value),[s,o]=n.useState("");return n.useEffect(()=>{o("")},[c]),e.jsxs("div",{className:h["table-cell"],children:[e.jsx(r,{...t,className:Lt["show-only-icon"],highlightSelected:!0,stealthy:!0,listMinWidth:300,options:I,selected:c,onSelectionChange:l,badgeAmount:c==="Multiple Choice"&&s.length>0?s.length:void 0,activeSelectedValue:s.length>0}),e.jsx(r,{...t,multiple:c==="Multiple Choice",withoutCheckbox:!0,highlightSelected:!0,stealthy:!0,listMinWidth:300,options:i,selected:s,onSelectionChange:o,activeSelectedValue:s.length>0})]})};O.storyName="Select Табличный";O.args={size:"s"};const w=t=>{const[c,l]=n.useState([]),[s,o]=n.useState([]);return e.jsxs("div",{className:h["item-column-wrapper"],children:[e.jsx(r,{...t,selected:c,onSelectionChange:l}),e.jsx(r,{...t,stealthy:!0,selected:s,onSelectionChange:o})]})};w.storyName="Select c цветными иконками";w.args={options:Jt};const _=t=>{const[c,l]=n.useState(""),s=[{label:"В формате .xls",value:"xls"},{label:"В формате .pdf",value:"pdf"}],o=a=>{l(a.toString())};return e.jsxs("div",{className:h["item-column-wrapper"],children:[e.jsx(r,{...t,options:s,selected:[],onSelectionChange:o,className:Lt["child-wrapper"],children:e.jsx(Nt,{type:"button",variant:"secondary",startIcon:e.jsx(Pt,{}),children:"Сформировать отчет"})}),c&&e.jsxs(K,{color:"var(--steel-90)",children:["Вы выбрали файл в формате .",c,"."]})]})};_.storyName="Нативное меню";const V=()=>{const[t,c]=n.useState(""),[l,s]=n.useState(!1),o=async()=>(s(!0),await new Promise(p=>setTimeout(p,1e3)),s(!1),Z),a=async p=>{s(!0),await new Promise(d=>setTimeout(d,800));const u=Z.filter(d=>d.label.toLowerCase().includes(p.toLowerCase()));return s(!1),u};return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{label:"Поиск технологий",options:[],isSearchable:!0,selected:t,onSelectionChange:c,onOpen:o,onSearch:a,isLoading:l})})};V.storyName="Асинхронный Select с поиском";const R=()=>{const[t,c]=n.useState([]),[l,s]=n.useState(!1),[o,a]=n.useState([]),p=async()=>{s(!0),await new Promise(S=>setTimeout(S,1e3));const d=U.slice(0,8);return a(d),s(!1),d},u=d=>{c(Array.isArray(d)?d:[d])};return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{label:"Frontend-фреймворки",options:o,multiple:!0,selected:t,onSelectionChange:u,onOpen:p,isLoading:l,highlightSelected:!0,isAllSelectView:!0})})};R.storyName="Асинхронный Select с множественным выбором";const D=()=>{const[t,c]=n.useState([]),[l,s]=n.useState(!1),[o,a]=n.useState([]),p=async()=>(s(!0),await new Promise(S=>setTimeout(S,1e3)),a(U),s(!1),U),u=async S=>{s(!0),await new Promise(m=>setTimeout(m,800));const Q=o.filter(m=>{var Y;const G=S.toLowerCase();return Et(m.label).toLowerCase().includes(G)||(((Y=m.subLabel)==null?void 0:Y.toLowerCase())||"").includes(G)});return s(!1),Q},d=S=>{c(Array.isArray(S)?S:[S])};return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{label:"Frontend-фреймворки",options:o,multiple:!0,selected:t,onSelectionChange:d,onOpen:p,onSearch:u,isLoading:l,isSearchable:!0,highlightSelected:!0,isAllSelectView:!0,isClearSearchOnBlur:!0})})};D.storyName="Select с поиском, множественным выбором и асинхронной загрузкой";const H=t=>{const{options:c,...l}=t,[s,o]=n.useState(""),[a,p]=n.useState([]),u=S=>{o(S)},d=S=>{p(S)};return e.jsxs("div",{style:{padding:"50px"},children:[e.jsxs("div",{style:{marginBottom:"30px"},children:[e.jsx(K,{variant:"Heading4",style:{marginBottom:"10px"},children:"Одиночный выбор с кнопкой сброса"}),e.jsx(r,{options:i,label:"Выберите опцию",selected:s,onSelectionChange:u,reset:!0})]}),e.jsxs("div",{children:[e.jsx(K,{variant:"Heading4",style:{marginBottom:"10px"},children:"Множественный выбор с кнопкой сброса"}),e.jsx(r,{options:i,label:"Выберите несколько опций",multiple:!0,selected:a,onSelectionChange:d,reset:!0})]})]})};H.storyName="Select с кнопкой сброса";var $,ee,te;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(te=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var se,oe,le;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(le=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ne,ce,re;A.parameters={...A.parameters,docs:{...(ne=A.parameters)==null?void 0:ne.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(re=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:re.source}}};var ae,ie,de;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(de=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var pe,Se,ue;L.parameters={...L.parameters,docs:{...(pe=L.parameters)==null?void 0:pe.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(ue=(Se=L.parameters)==null?void 0:Se.docs)==null?void 0:ue.source}}};var ge,he,me;N.parameters={...N.parameters,docs:{...(ge=N.parameters)==null?void 0:ge.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(me=(he=N.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var ye,xe,Te;E.parameters={...E.parameters,docs:{...(ye=E.parameters)==null?void 0:ye.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Te=(xe=E.parameters)==null?void 0:xe.docs)==null?void 0:Te.source}}};var ve,be,Ce;P.parameters={...P.parameters,docs:{...(ve=P.parameters)==null?void 0:ve.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Ce=(be=P.parameters)==null?void 0:be.docs)==null?void 0:Ce.source}}};var Oe,we,Ie;M.parameters={...M.parameters,docs:{...(Oe=M.parameters)==null?void 0:Oe.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Ie=(we=M.parameters)==null?void 0:we.docs)==null?void 0:Ie.source}}};var je,Ae,fe;W.parameters={...W.parameters,docs:{...(je=W.parameters)==null?void 0:je.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(fe=(Ae=W.parameters)==null?void 0:Ae.docs)==null?void 0:fe.source}}};var Le,Ne,Ee;J.parameters={...J.parameters,docs:{...(Le=J.parameters)==null?void 0:Le.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Ee=(Ne=J.parameters)==null?void 0:Ne.docs)==null?void 0:Ee.source}}};var Pe,Me,We;X.parameters={...X.parameters,docs:{...(Pe=X.parameters)==null?void 0:Pe.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(We=(Me=X.parameters)==null?void 0:Me.docs)==null?void 0:We.source}}};var Je,Xe,ze;z.parameters={...z.parameters,docs:{...(Je=z.parameters)==null?void 0:Je.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(ze=(Xe=z.parameters)==null?void 0:Xe.docs)==null?void 0:ze.source}}};var Fe,Be,ke;F.parameters={...F.parameters,docs:{...(Fe=F.parameters)==null?void 0:Fe.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(ke=(Be=F.parameters)==null?void 0:Be.docs)==null?void 0:ke.source}}};var _e,Ve,Re;B.parameters={...B.parameters,docs:{...(_e=B.parameters)==null?void 0:_e.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Re=(Ve=B.parameters)==null?void 0:Ve.docs)==null?void 0:Re.source}}};var De,He,Ge;k.parameters={...k.parameters,docs:{...(De=k.parameters)==null?void 0:De.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Ge=(He=k.parameters)==null?void 0:He.docs)==null?void 0:Ge.source}}};var Qe,Ke,Ue;x.parameters={...x.parameters,docs:{...(Qe=x.parameters)==null?void 0:Qe.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px',
    width: '500px'
  }}>
      <Select {...argTypes} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...(Ue=(Ke=x.parameters)==null?void 0:Ke.docs)==null?void 0:Ue.source}}};var qe,Ye,Ze;T.parameters={...T.parameters,docs:{...(qe=T.parameters)==null?void 0:qe.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px',
    width: '500px'
  }}>
      <Select {...argTypes} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...(Ze=(Ye=T.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var $e,et,tt;v.parameters={...v.parameters,docs:{...($e=v.parameters)==null?void 0:$e.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  const [selectedTwo, setSelectedTwo] = useState<TSelected>([]);
  const [selectedThree, setSelectedThree] = useState<TSelected>([]);
  return <div className={styles['item-column-wrapper']}>
      <Select {...argTypes} highlightSelected selected={selected} onSelectionChange={setSelected} />
      <Select {...argTypes} multiple highlightSelected selected={selectedTwo} onSelectionChange={setSelectedTwo} />
      <Select {...argTypes} multiple highlightSelected withoutCheckbox selected={selectedThree} onSelectionChange={setSelectedThree} />
    </div>;
}`,...(tt=(et=v.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var st,ot,lt;b.parameters={...b.parameters,docs:{...(st=b.parameters)==null?void 0:st.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(lt=(ot=b.parameters)==null?void 0:ot.docs)==null?void 0:lt.source}}};var nt,ct,rt;C.parameters={...C.parameters,docs:{...(nt=C.parameters)==null?void 0:nt.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  const [selectedTwo, setSelectedTwo] = useState<TSelected>([]);
  const [selectedThree, setSelectedThree] = useState<TSelected>([]);
  return <div className={styles['item-column-wrapper']}>
      <Select {...argTypes} multiple highlightSelected selected={selected} onSelectionChange={setSelected} />
      <Select {...argTypes} multiple withoutCheckbox highlightSelected selected={selectedTwo} onSelectionChange={setSelectedTwo} />
      <Select {...argTypes} stealthy highlightSelected selected={selectedThree} onSelectionChange={setSelectedThree} />
    </div>;
}`,...(rt=(ct=C.parameters)==null?void 0:ct.docs)==null?void 0:rt.source}}};var at,it,dt;O.parameters={...O.parameters,docs:{...(at=O.parameters)==null?void 0:at.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [typeSelect, setTypeSelect] = useState<string | string[]>(optionsWithIcons[8].value);
  const [selectedOption, setSelectedOption] = useState<string | string[]>('');
  useEffect(() => {
    setSelectedOption('');
  }, [typeSelect]);
  return <div className={styles['table-cell']}>
      <Select {...argTypes} className={style['show-only-icon']} highlightSelected stealthy listMinWidth={300} options={optionsWithIcons} selected={typeSelect} onSelectionChange={setTypeSelect} badgeAmount={typeSelect === 'Multiple Choice' && selectedOption.length > 0 ? selectedOption.length : undefined} activeSelectedValue={selectedOption.length > 0} />
      <Select {...argTypes} multiple={typeSelect === 'Multiple Choice'} withoutCheckbox highlightSelected stealthy listMinWidth={300} options={options} selected={selectedOption} onSelectionChange={setSelectedOption} activeSelectedValue={selectedOption.length > 0} />
    </div>;
}`,...(dt=(it=O.parameters)==null?void 0:it.docs)==null?void 0:dt.source}}};var pt,St,ut;w.parameters={...w.parameters,docs:{...(pt=w.parameters)==null?void 0:pt.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  const [selectedStealthy, setSelectedStealthy] = useState<TSelected>([]);
  return <div className={styles['item-column-wrapper']}>
      <Select {...argTypes} selected={selected} onSelectionChange={setSelected} />
      <Select {...argTypes} stealthy selected={selectedStealthy} onSelectionChange={setSelectedStealthy} />
    </div>;
}`,...(ut=(St=w.parameters)==null?void 0:St.docs)==null?void 0:ut.source}}};var gt,ht,mt;_.parameters={..._.parameters,docs:{...(gt=_.parameters)==null?void 0:gt.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(mt=(ht=_.parameters)==null?void 0:ht.docs)==null?void 0:mt.source}}};var yt,xt,Tt;V.parameters={...V.parameters,docs:{...(yt=V.parameters)==null?void 0:yt.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(Tt=(xt=V.parameters)==null?void 0:xt.docs)==null?void 0:Tt.source}}};var vt,bt,Ct;R.parameters={...R.parameters,docs:{...(vt=R.parameters)==null?void 0:vt.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(Ct=(bt=R.parameters)==null?void 0:bt.docs)==null?void 0:Ct.source}}};var Ot,wt,It;D.parameters={...D.parameters,docs:{...(Ot=D.parameters)==null?void 0:Ot.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(It=(wt=D.parameters)==null?void 0:wt.docs)==null?void 0:It.source}}};var jt,At,ft;H.parameters={...H.parameters,docs:{...(jt=H.parameters)==null?void 0:jt.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(ft=(At=H.parameters)==null?void 0:At.docs)==null?void 0:ft.source}}};const is=["SelectDefault","SelectMultilineOption","SelectSingle","SelectWithSearch","SelectWithSearchByEnter","SelectMultiple","SelectDisabled","SelectWithSelectionCallback","SelectCompact","SelectExtraCompact","SelectScrollingItems","SelectSuccess","SelectWarning","SelectError","SelectEmpty","SelectWithClearSearchOnBlur","SelectWithIcons","SelectInvisible","SelectIconSelected","SelectBadgeAmount","SelectWithDescription","SelectTable","SelectWithColorfulIcons","NativeMenu","AsyncSelectWithSearch","MultiAsyncSelect","MultiAsyncSelectWithSearch","SelectWithReset"];export{V as AsyncSelectWithSearch,R as MultiAsyncSelect,D as MultiAsyncSelectWithSearch,_ as NativeMenu,b as SelectBadgeAmount,M as SelectCompact,j as SelectDefault,E as SelectDisabled,B as SelectEmpty,F as SelectError,W as SelectExtraCompact,v as SelectIconSelected,T as SelectInvisible,y as SelectMultilineOption,N as SelectMultiple,J as SelectScrollingItems,A as SelectSingle,X as SelectSuccess,O as SelectTable,z as SelectWarning,k as SelectWithClearSearchOnBlur,w as SelectWithColorfulIcons,C as SelectWithDescription,x as SelectWithIcons,H as SelectWithReset,f as SelectWithSearch,L as SelectWithSearchByEnter,P as SelectWithSelectionCallback,is as __namedExportsOrder,as as default};
