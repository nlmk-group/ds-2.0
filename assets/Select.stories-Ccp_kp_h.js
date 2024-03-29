import{j as e}from"./jsx-runtime-2xDJh5tt.js";import{r as c}from"./index-CBqU2yxZ.js";import{a7 as r,f as Se,q as E}from"./index-DWTGGx_t.js";import"./generateUUID-DZpKhNdB.js";import"./index-C-x6zlLc.js";import"./index-CgSHB1U0.js";import"./index-BR2u5piM.js";import"./index-D3aZeTS2.js";import"./index-pmCx02Kh.js";import"./index-j1olA-rT.js";import"./index-Dp7-Jy-a.js";import"./index-ByRza-M8.js";import{j as x}from"./32-BI8cdrFX.js";import{a as ge}from"./argsTypes-Df-egiFA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx.m-CH7BE6MN.js";import"./index-BtM5VmRH.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-Y8Vz1tB_.js";const me="_wrapper_mci12_1",he={wrapper:me},ye=t=>e("div",{className:he.wrapper,children:t()}),Fe={title:"Components/Select/Stories",component:r,argTypes:ge,decorators:[ye]},a=[{value:"lorem",label:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolorum earum eligendi in istenecessitatibus odit optio quidem tenetur! Assumenda deleniti fugiat itaque minus omnis quidem temporibus.Necessitatibus rerum, ullam!"},{value:"banana",label:"Banana",icon:e(x,{})},{value:"cherry",label:"Cherry",disabled:!0},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"},{value:"fig",label:"Fig",icon:e(x,{})},{value:"grape",label:"Grape"}],i=t=>{const{options:l,...s}=t,[n,o]=c.useState([]);return e("div",{style:{padding:"50px"},children:e(r,{options:a,...s,selected:n,onSelectionChange:o})})};i.storyName="Select по умолчанию";const d=t=>{const{options:l,...s}=t,[n,o]=c.useState([]);return e("div",{style:{padding:"50px"},children:e(r,{options:a,label:"Одиночный выбор",multiple:!1,...s,selected:n,onSelectionChange:o})})};d.storyName="Одиночный выбор";const p=t=>{const{options:l,...s}=t,[n,o]=c.useState([]);return e("div",{style:{padding:"50px"},children:e(r,{options:a,label:"Выбор с поиском",isSearchable:!0,...s,selected:n,onSelectionChange:o})})};p.storyName="Выбор с поиском";const u=t=>{const{options:l,...s}=t,[n,o]=c.useState([]);return e("div",{style:{padding:"50px"},children:e(r,{options:a,label:"Множественный выбор",multiple:!0,...s,selected:n,onSelectionChange:o})})};u.storyName="Select с множественным выбором";const S=t=>{const{options:l,...s}=t,[n,o]=c.useState([]);return e("div",{style:{padding:"50px"},children:e(r,{options:a,label:"Disabled",disabled:!0,...s,selected:n,onSelectionChange:o})})};S.storyName="Выбор в состоянии disabled";const g=t=>{const{options:l,...s}=t,[n,o]=c.useState(["apple"]);return e("div",{style:{padding:"50px"},children:e(r,{options:a,label:"Обработчик при выборе",...s,selected:n,onSelectionChange:o})})};g.storyName="Выбор с обработчиком при выборе";const m=t=>{const{options:l,...s}=t,[n,o]=c.useState([]);return e("div",{style:{padding:"50px"},children:e(r,{options:a,label:"Размер s",size:Se.s,...s,selected:n,onSelectionChange:o})})};m.storyName="Компактный Select";const h=t=>{const{options:l,...s}=t,[n,o]=c.useState([]);return e("div",{style:{padding:"50px"},children:e(r,{options:a,label:"Размер xs",size:Se.xs,...s,selected:n,onSelectionChange:o})})};h.storyName="Экстра компактный Select";const y=t=>{const{options:l,...s}=t,[n,o]=c.useState([]);return e("div",{style:{padding:"50px"},children:e(r,{options:a,label:"Скролл",scrollingItems:2,...s,selected:n,onSelectionChange:o})})};y.storyName="Select с установленным скроллом";const b=t=>{const{options:l,...s}=t,[n,o]=c.useState([]);return e("div",{style:{padding:"50px"},children:e(r,{options:a,label:"Цвет success",color:E.success,...s,selected:n,onSelectionChange:o})})};b.storyName="Цвет success";const v=t=>{const{options:l,...s}=t,[n,o]=c.useState([]);return e("div",{style:{padding:"50px"},children:e(r,{options:a,label:"Цвет warning",color:E.warning,...s,selected:n,onSelectionChange:o})})};v.storyName="Цвет warning";const A=t=>{const{options:l,...s}=t,[n,o]=c.useState([]);return e("div",{style:{padding:"50px"},children:e(r,{options:a,label:"Цвет error",color:E.error,...s,selected:n,onSelectionChange:o})})};A.storyName="Цвет error";const C=t=>{const{options:l,...s}=t,[n,o]=c.useState([]);return e("div",{style:{padding:"50px"},children:e(r,{options:[],label:"Пустой select",...s,selected:n,onSelectionChange:o})})};C.storyName="Пустой Select";const T=t=>{const{options:l,...s}=t,[n,o]=c.useState([]);return e("div",{style:{padding:"50px"},children:e(r,{options:a,label:"Выбор с поиском",isClearSearchOnBlur:!0,isSearchable:!0,...s,selected:n,onSelectionChange:o})})};T.storyName="Выбор со сбросои хначения поиске при onBlur поля ввода";var O,I,N;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(N=(I=i.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var B,P,J;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(J=(P=d.parameters)==null?void 0:P.docs)==null?void 0:J.source}}};var X,f,D;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} label="Выбор с поиском" isSearchable {...otherArgs} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...(D=(f=p.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var w,W,z;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(z=(W=u.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var _,F,M;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(M=(F=S.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var q,j,k;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(k=(j=g.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var G,L,H;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(H=(L=m.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var K,Q,R;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(R=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var U,V,Y;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Y=(V=y.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var Z,$,ee;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(ee=($=b.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,se,ne;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(ne=(se=v.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var oe,re,ce;A.parameters={...A.parameters,docs:{...(oe=A.parameters)==null?void 0:oe.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(ce=(re=A.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var le,ae,ie;C.parameters={...C.parameters,docs:{...(le=C.parameters)==null?void 0:le.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(ie=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var de,pe,ue;T.parameters={...T.parameters,docs:{...(de=T.parameters)==null?void 0:de.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} label="Выбор с поиском" isClearSearchOnBlur isSearchable {...otherArgs} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...(ue=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};const Me=["SelectDefault","SelectSingle","SelectWithSearch","SelectMultiple","SelectDisabled","SelectWithSelectionCallback","SelectCompact","SelectExtraCompact","SelectScrollingItems","SelectSuccess","SelectWarning","SelectError","SelectEmpty","SelectWithClearSearchOnBlur"];export{m as SelectCompact,i as SelectDefault,S as SelectDisabled,C as SelectEmpty,A as SelectError,h as SelectExtraCompact,u as SelectMultiple,y as SelectScrollingItems,d as SelectSingle,b as SelectSuccess,v as SelectWarning,T as SelectWithClearSearchOnBlur,p as SelectWithSearch,g as SelectWithSelectionCallback,Me as __namedExportsOrder,Fe as default};
