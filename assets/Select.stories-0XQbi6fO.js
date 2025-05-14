import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{r as n}from"./index-Bnop-kX6.js";import{aH as r,H as U,aI as wt,B as It,aJ as At}from"./TreeList-DdX155Lh.js";import{s as u}from"./index-CH_Nznxf.js";import"./generateUUID-X09o9Pdp.js";import"./index-qbkiYuzD.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import{T as jt}from"./index-qC5wYQgy.js";import"./index-DovCGOp-.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-n_FSf3Cv.js";import"./index-DokmLR-l.js";import{a as ft}from"./32-BTlKmMLd.js";import{a as Lt}from"./argsTypes-Bw-VkPV4.js";import{o as i,a as I,b as Nt,c as Et}from"./mocks-B9_jp_NB.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-B5g4YLzC.js";const Pt="_wrapper_1ntrc_1",h={wrapper:Pt,"item-column-wrapper":"_item-column-wrapper_1ntrc_9","item-column-center-wrapper":"_item-column-center-wrapper_1ntrc_17","table-cell":"_table-cell_1ntrc_26"},Wt=t=>e.jsx("div",{className:h.wrapper,children:e.jsx(t,{})}),ss={title:"Components/Select/Stories",component:r,argTypes:Lt,decorators:[Wt],parameters:{actions:{argTypesRegex:"^on.*"}}},Q=[{value:"1",label:"React",subLabel:"Библиотека для UI"},{value:"2",label:"Vue",subLabel:"Прогрессивный фреймворк"},{value:"3",label:"Angular",subLabel:"Фреймворк от Google"},{value:"4",label:"Svelte",subLabel:"Компилируемый фреймворк"},{value:"5",label:"Preact",subLabel:"Легковесная альтернатива React"},{value:"6",label:"Solid",subLabel:"Реактивный фреймворк"},{value:"7",label:"Alpine",subLabel:"Минималистичный фреймворк"},{value:"8",label:"Lit",subLabel:"Для веб-компонентов"},{value:"9",label:"Next.js",subLabel:"React фреймворк"},{value:"10",label:"Nuxt",subLabel:"Vue фреймворк"},{value:"11",label:"Remix",subLabel:"Fullstack фреймворк"},{value:"12",label:"Astro",subLabel:"Статический сайт-генератор"}],K=[{value:"1",label:"JavaScript"},{value:"2",label:"TypeScript"},{value:"3",label:"React"},{value:"4",label:"Vue"},{value:"5",label:"Angular"},{value:"6",label:"Node.js"},{value:"7",label:"Express"},{value:"8",label:"MongoDB"},{value:"9",label:"PostgreSQL"},{value:"10",label:"GraphQL"},{value:"11",label:"Redux"},{value:"12",label:"MobX"}],A=t=>{const{options:c,...o}=t,[s,l]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{options:i,...o,selected:s,onSelectionChange:l})})};A.storyName="Select по умолчанию";const y=t=>{const{options:c,...o}=t,[s,l]=n.useState([]);return console.log(o),e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{options:i,...o,selected:s,onSelectionChange:l})})};y.storyName="Select с переносом текста опции на следующую строку";y.args={multilineOption:!0};const j=t=>{const{options:c,...o}=t,[s,l]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{options:i,label:"Одиночный выбор",multiple:!1,...o,selected:s,onSelectionChange:l})})};j.storyName="Одиночный выбор";const f=t=>{const{options:c,onSearch:o,...s}=t,[l,a]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{options:i,label:"Выбор с поиском",isSearchable:!0,...s,selected:l,onSelectionChange:a})})};f.storyName="Выбор с поиском";const L=t=>{const{options:c,onSearch:o,...s}=t,[l,a]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{options:i,label:"Автовыбор по Enter",autoSelectSingleOnEnter:!0,isSearchable:!0,...s,selected:l,onSelectionChange:a})})};L.storyName="Автовыбор по Enter";const N=t=>{const{options:c,...o}=t,[s,l]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{options:i,label:"Множественный выбор",multiple:!0,...o,selected:s,onSelectionChange:l})})};N.storyName="Select с множественным выбором";const E=t=>{const{options:c,...o}=t,[s,l]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{options:i,label:"Disabled",disabled:!0,...o,selected:s,onSelectionChange:l})})};E.storyName="Выбор в состоянии disabled";const P=t=>{const{options:c,...o}=t,[s,l]=n.useState(["apple"]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{options:i,label:"Обработчик при выборе",...o,selected:s,onSelectionChange:l})})};P.storyName="Выбор с обработчиком при выборе";const W=t=>{const{options:c,...o}=t,[s,l]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{options:i,label:"Размер s",size:u.s,...o,selected:s,onSelectionChange:l})})};W.storyName="Компактный Select";const J=t=>{const{options:c,...o}=t,[s,l]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{options:i,label:"Размер xs",size:u.xs,...o,selected:s,onSelectionChange:l})})};J.storyName="Экстра компактный Select";const M=t=>{const{options:c,...o}=t,[s,l]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{options:i,label:"Скролл",scrollingItems:2,...o,selected:s,onSelectionChange:l})})};M.storyName="Select с установленным скроллом";const X=t=>{const{options:c,...o}=t,[s,l]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{options:i,label:"Цвет success",color:U.success,...o,selected:s,onSelectionChange:l})})};X.storyName="Цвет success";const z=t=>{const{options:c,...o}=t,[s,l]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{options:i,label:"Цвет warning",color:U.warning,...o,selected:s,onSelectionChange:l})})};z.storyName="Цвет warning";const F=t=>{const{options:c,...o}=t,[s,l]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{options:i,label:"Цвет error",color:U.error,...o,selected:s,onSelectionChange:l})})};F.storyName="Цвет error";const k=t=>{const{options:c,...o}=t,[s,l]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{options:[],label:"Пустой select",...o,selected:s,onSelectionChange:l})})};k.storyName="Пустой Select";const B=t=>{const{options:c,onSearch:o,...s}=t,[l,a]=n.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{options:i,label:"Выбор с поиском",isClearSearchOnBlur:!0,isSearchable:!0,...s,selected:l,onSelectionChange:a})})};B.storyName="Выбор со сбросом значения в поиске при onBlur поля ввода";const x=t=>{const[c,o]=n.useState([]);return e.jsx("div",{style:{padding:"50px",width:"500px"},children:e.jsx(r,{...t,selected:c,onSelectionChange:o})})};x.storyName="Select с иконками";x.args={options:I};const T=t=>{const[c,o]=n.useState([]);return e.jsx("div",{style:{padding:"50px",width:"500px"},children:e.jsx(r,{...t,selected:c,onSelectionChange:o})})};T.storyName='Select "незаметный"';T.args={options:I,stealthy:!0};const b=t=>{const[c,o]=n.useState([]),[s,l]=n.useState([]),[a,p]=n.useState([]);return e.jsxs("div",{className:h["item-column-wrapper"],children:[e.jsx(r,{...t,highlightSelected:!0,selected:c,onSelectionChange:o}),e.jsx(r,{...t,multiple:!0,highlightSelected:!0,selected:s,onSelectionChange:l}),e.jsx(r,{...t,multiple:!0,highlightSelected:!0,withoutCheckbox:!0,selected:a,onSelectionChange:p})]})};b.storyName="Select c опцией выбора галкой";b.args={options:I};const v=t=>{const[c,o]=n.useState([]),[s,l]=n.useState([]),[a,p]=n.useState([]),[g,d]=n.useState([]),[S,H]=n.useState([]),[m,G]=n.useState([]);return e.jsxs("div",{className:h["item-column-center-wrapper"],children:[e.jsx(r,{...t,size:u.m,selected:c,onSelectionChange:o}),e.jsx(r,{...t,size:u.s,selected:s,onSelectionChange:l}),e.jsx(r,{...t,size:u.xs,highlightSelected:!0,withoutCheckbox:!0,selected:a,onSelectionChange:p}),e.jsx(r,{...t,size:u.m,stealthy:!0,selected:g,onSelectionChange:d}),e.jsx(r,{...t,size:u.s,stealthy:!0,selected:S,onSelectionChange:H}),e.jsx(r,{...t,size:u.xs,highlightSelected:!0,withoutCheckbox:!0,stealthy:!0,selected:m,onSelectionChange:G})]})};v.storyName="Select c байджем кол-ва выбранных опций";v.args={options:I,multiple:!0,badgeAmount:7};const C=t=>{const[c,o]=n.useState([]),[s,l]=n.useState([]),[a,p]=n.useState([]);return e.jsxs("div",{className:h["item-column-wrapper"],children:[e.jsx(r,{...t,multiple:!0,highlightSelected:!0,selected:c,onSelectionChange:o}),e.jsx(r,{...t,multiple:!0,withoutCheckbox:!0,highlightSelected:!0,selected:s,onSelectionChange:l}),e.jsx(r,{...t,stealthy:!0,highlightSelected:!0,selected:a,onSelectionChange:p})]})};C.storyName="Select опции с описанием";C.args={options:Nt};const O=t=>{const[c,o]=n.useState(I[8].value),[s,l]=n.useState("");return n.useEffect(()=>{l("")},[c]),e.jsxs("div",{className:h["table-cell"],children:[e.jsx(r,{...t,className:wt["show-only-icon"],highlightSelected:!0,stealthy:!0,listMinWidth:300,options:I,selected:c,onSelectionChange:o,badgeAmount:c==="Multiple Choice"&&s.length>0?s.length:void 0,activeSelectedValue:s.length>0}),e.jsx(r,{...t,multiple:c==="Multiple Choice",withoutCheckbox:!0,highlightSelected:!0,stealthy:!0,listMinWidth:300,options:i,selected:s,onSelectionChange:l,activeSelectedValue:s.length>0})]})};O.storyName="Select Табличный";O.args={size:"s"};const w=t=>{const[c,o]=n.useState([]),[s,l]=n.useState([]);return e.jsxs("div",{className:h["item-column-wrapper"],children:[e.jsx(r,{...t,selected:c,onSelectionChange:o}),e.jsx(r,{...t,stealthy:!0,selected:s,onSelectionChange:l})]})};w.storyName="Select c цветными иконками";w.args={options:Et};const _=t=>{const[c,o]=n.useState(""),s=[{label:"В формате .xls",value:"xls"},{label:"В формате .pdf",value:"pdf"}],l=a=>{o(a.toString())};return e.jsxs("div",{className:h["item-column-wrapper"],children:[e.jsx(r,{...t,options:s,selected:[],onSelectionChange:l,className:wt["child-wrapper"],children:e.jsx(It,{type:"button",variant:"secondary",startIcon:e.jsx(ft,{}),children:"Сформировать отчет"})}),c&&e.jsxs(jt,{color:"var(--steel-90)",children:["Вы выбрали файл в формате .",c,"."]})]})};_.storyName="Нативное меню";const V=()=>{const[t,c]=n.useState(""),[o,s]=n.useState(!1),l=async()=>(s(!0),await new Promise(p=>setTimeout(p,1e3)),s(!1),K),a=async p=>{s(!0),await new Promise(d=>setTimeout(d,800));const g=K.filter(d=>d.label.toLowerCase().includes(p.toLowerCase()));return s(!1),g};return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{label:"Поиск технологий",options:[],isSearchable:!0,selected:t,onSelectionChange:c,onOpen:l,onSearch:a,isLoading:o})})};V.storyName="Асинхронный Select с поиском";const D=()=>{const[t,c]=n.useState([]),[o,s]=n.useState(!1),[l,a]=n.useState([]),p=async()=>{s(!0),await new Promise(S=>setTimeout(S,1e3));const d=Q.slice(0,8);return a(d),s(!1),d},g=d=>{c(Array.isArray(d)?d:[d])};return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{label:"Frontend-фреймворки",options:l,multiple:!0,selected:t,onSelectionChange:g,onOpen:p,isLoading:o,highlightSelected:!0,isAllSelectView:!0})})};D.storyName="Асинхронный Select с множественным выбором";const R=()=>{const[t,c]=n.useState([]),[o,s]=n.useState(!1),[l,a]=n.useState([]),p=async()=>(s(!0),await new Promise(S=>setTimeout(S,1e3)),a(Q),s(!1),Q),g=async S=>{s(!0),await new Promise(m=>setTimeout(m,800));const H=l.filter(m=>{var q;const G=S.toLowerCase();return At(m.label).toLowerCase().includes(G)||(((q=m.subLabel)==null?void 0:q.toLowerCase())||"").includes(G)});return s(!1),H},d=S=>{c(Array.isArray(S)?S:[S])};return e.jsx("div",{style:{padding:"50px"},children:e.jsx(r,{label:"Frontend-фреймворки",options:l,multiple:!0,selected:t,onSelectionChange:d,onOpen:p,onSearch:g,isLoading:o,isSearchable:!0,highlightSelected:!0,isAllSelectView:!0,isClearSearchOnBlur:!0})})};R.storyName="Select с поиском, множественным выбором и асинхронной загрузкой";var Y,Z,$;A.parameters={...A.parameters,docs:{...(Y=A.parameters)==null?void 0:Y.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...($=(Z=A.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,se;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(se=(te=y.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var oe,le,ne;j.parameters={...j.parameters,docs:{...(oe=j.parameters)==null?void 0:oe.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(ne=(le=j.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var ce,re,ae;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(ae=(re=f.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var ie,de,pe;L.parameters={...L.parameters,docs:{...(ie=L.parameters)==null?void 0:ie.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(pe=(de=L.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var Se,ue,ge;N.parameters={...N.parameters,docs:{...(Se=N.parameters)==null?void 0:Se.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(ge=(ue=N.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var he,me,ye;E.parameters={...E.parameters,docs:{...(he=E.parameters)==null?void 0:he.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(ye=(me=E.parameters)==null?void 0:me.docs)==null?void 0:ye.source}}};var xe,Te,be;P.parameters={...P.parameters,docs:{...(xe=P.parameters)==null?void 0:xe.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(be=(Te=P.parameters)==null?void 0:Te.docs)==null?void 0:be.source}}};var ve,Ce,Oe;W.parameters={...W.parameters,docs:{...(ve=W.parameters)==null?void 0:ve.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Oe=(Ce=W.parameters)==null?void 0:Ce.docs)==null?void 0:Oe.source}}};var we,Ie,Ae;J.parameters={...J.parameters,docs:{...(we=J.parameters)==null?void 0:we.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Ae=(Ie=J.parameters)==null?void 0:Ie.docs)==null?void 0:Ae.source}}};var je,fe,Le;M.parameters={...M.parameters,docs:{...(je=M.parameters)==null?void 0:je.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Le=(fe=M.parameters)==null?void 0:fe.docs)==null?void 0:Le.source}}};var Ne,Ee,Pe;X.parameters={...X.parameters,docs:{...(Ne=X.parameters)==null?void 0:Ne.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Pe=(Ee=X.parameters)==null?void 0:Ee.docs)==null?void 0:Pe.source}}};var We,Je,Me;z.parameters={...z.parameters,docs:{...(We=z.parameters)==null?void 0:We.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Me=(Je=z.parameters)==null?void 0:Je.docs)==null?void 0:Me.source}}};var Xe,ze,Fe;F.parameters={...F.parameters,docs:{...(Xe=F.parameters)==null?void 0:Xe.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Fe=(ze=F.parameters)==null?void 0:ze.docs)==null?void 0:Fe.source}}};var ke,Be,_e;k.parameters={...k.parameters,docs:{...(ke=k.parameters)==null?void 0:ke.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(_e=(Be=k.parameters)==null?void 0:Be.docs)==null?void 0:_e.source}}};var Ve,De,Re;B.parameters={...B.parameters,docs:{...(Ve=B.parameters)==null?void 0:Ve.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Re=(De=B.parameters)==null?void 0:De.docs)==null?void 0:Re.source}}};var Ge,He,Qe;x.parameters={...x.parameters,docs:{...(Ge=x.parameters)==null?void 0:Ge.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px',
    width: '500px'
  }}>
      <Select {...argTypes} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...(Qe=(He=x.parameters)==null?void 0:He.docs)==null?void 0:Qe.source}}};var Ue,qe,Ke;T.parameters={...T.parameters,docs:{...(Ue=T.parameters)==null?void 0:Ue.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px',
    width: '500px'
  }}>
      <Select {...argTypes} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...(Ke=(qe=T.parameters)==null?void 0:qe.docs)==null?void 0:Ke.source}}};var Ye,Ze,$e;b.parameters={...b.parameters,docs:{...(Ye=b.parameters)==null?void 0:Ye.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  const [selectedTwo, setSelectedTwo] = useState<TSelected>([]);
  const [selectedThree, setSelectedThree] = useState<TSelected>([]);
  return <div className={styles['item-column-wrapper']}>
      <Select {...argTypes} highlightSelected selected={selected} onSelectionChange={setSelected} />
      <Select {...argTypes} multiple highlightSelected selected={selectedTwo} onSelectionChange={setSelectedTwo} />
      <Select {...argTypes} multiple highlightSelected withoutCheckbox selected={selectedThree} onSelectionChange={setSelectedThree} />
    </div>;
}`,...($e=(Ze=b.parameters)==null?void 0:Ze.docs)==null?void 0:$e.source}}};var et,tt,st;v.parameters={...v.parameters,docs:{...(et=v.parameters)==null?void 0:et.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(st=(tt=v.parameters)==null?void 0:tt.docs)==null?void 0:st.source}}};var ot,lt,nt;C.parameters={...C.parameters,docs:{...(ot=C.parameters)==null?void 0:ot.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  const [selectedTwo, setSelectedTwo] = useState<TSelected>([]);
  const [selectedThree, setSelectedThree] = useState<TSelected>([]);
  return <div className={styles['item-column-wrapper']}>
      <Select {...argTypes} multiple highlightSelected selected={selected} onSelectionChange={setSelected} />
      <Select {...argTypes} multiple withoutCheckbox highlightSelected selected={selectedTwo} onSelectionChange={setSelectedTwo} />
      <Select {...argTypes} stealthy highlightSelected selected={selectedThree} onSelectionChange={setSelectedThree} />
    </div>;
}`,...(nt=(lt=C.parameters)==null?void 0:lt.docs)==null?void 0:nt.source}}};var ct,rt,at;O.parameters={...O.parameters,docs:{...(ct=O.parameters)==null?void 0:ct.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [typeSelect, setTypeSelect] = useState<string | string[]>(optionsWithIcons[8].value);
  const [selectedOption, setSelectedOption] = useState<string | string[]>('');
  useEffect(() => {
    setSelectedOption('');
  }, [typeSelect]);
  return <div className={styles['table-cell']}>
      <Select {...argTypes} className={style['show-only-icon']} highlightSelected stealthy listMinWidth={300} options={optionsWithIcons} selected={typeSelect} onSelectionChange={setTypeSelect} badgeAmount={typeSelect === 'Multiple Choice' && selectedOption.length > 0 ? selectedOption.length : undefined} activeSelectedValue={selectedOption.length > 0} />
      <Select {...argTypes} multiple={typeSelect === 'Multiple Choice'} withoutCheckbox highlightSelected stealthy listMinWidth={300} options={options} selected={selectedOption} onSelectionChange={setSelectedOption} activeSelectedValue={selectedOption.length > 0} />
    </div>;
}`,...(at=(rt=O.parameters)==null?void 0:rt.docs)==null?void 0:at.source}}};var it,dt,pt;w.parameters={...w.parameters,docs:{...(it=w.parameters)==null?void 0:it.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  const [selectedStealthy, setSelectedStealthy] = useState<TSelected>([]);
  return <div className={styles['item-column-wrapper']}>
      <Select {...argTypes} selected={selected} onSelectionChange={setSelected} />
      <Select {...argTypes} stealthy selected={selectedStealthy} onSelectionChange={setSelectedStealthy} />
    </div>;
}`,...(pt=(dt=w.parameters)==null?void 0:dt.docs)==null?void 0:pt.source}}};var St,ut,gt;_.parameters={..._.parameters,docs:{...(St=_.parameters)==null?void 0:St.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(gt=(ut=_.parameters)==null?void 0:ut.docs)==null?void 0:gt.source}}};var ht,mt,yt;V.parameters={...V.parameters,docs:{...(ht=V.parameters)==null?void 0:ht.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(yt=(mt=V.parameters)==null?void 0:mt.docs)==null?void 0:yt.source}}};var xt,Tt,bt;D.parameters={...D.parameters,docs:{...(xt=D.parameters)==null?void 0:xt.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(bt=(Tt=D.parameters)==null?void 0:Tt.docs)==null?void 0:bt.source}}};var vt,Ct,Ot;R.parameters={...R.parameters,docs:{...(vt=R.parameters)==null?void 0:vt.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(Ot=(Ct=R.parameters)==null?void 0:Ct.docs)==null?void 0:Ot.source}}};const os=["SelectDefault","SelectMultilineOption","SelectSingle","SelectWithSearch","SelectWithSearchByEnter","SelectMultiple","SelectDisabled","SelectWithSelectionCallback","SelectCompact","SelectExtraCompact","SelectScrollingItems","SelectSuccess","SelectWarning","SelectError","SelectEmpty","SelectWithClearSearchOnBlur","SelectWithIcons","SelectInvisible","SelectIconSelected","SelectBadgeAmount","SelectWithDescription","SelectTable","SelectWithColorfulIcons","NativeMenu","AsyncSelectWithSearch","MultiAsyncSelect","MultiAsyncSelectWithSearch"];export{V as AsyncSelectWithSearch,D as MultiAsyncSelect,R as MultiAsyncSelectWithSearch,_ as NativeMenu,v as SelectBadgeAmount,W as SelectCompact,A as SelectDefault,E as SelectDisabled,k as SelectEmpty,F as SelectError,J as SelectExtraCompact,b as SelectIconSelected,T as SelectInvisible,y as SelectMultilineOption,N as SelectMultiple,M as SelectScrollingItems,j as SelectSingle,X as SelectSuccess,O as SelectTable,z as SelectWarning,B as SelectWithClearSearchOnBlur,w as SelectWithColorfulIcons,C as SelectWithDescription,x as SelectWithIcons,f as SelectWithSearch,L as SelectWithSearchByEnter,P as SelectWithSelectionCallback,os as __namedExportsOrder,ss as default};
