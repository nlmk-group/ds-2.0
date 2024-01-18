import{j as e}from"./clsx.m-3764cf42.js";import{r as me}from"./index-f1f749bf.js";import{a as A}from"./index-147655d7.js";import{S as s,f as ue}from"./index-28aa8d3c.js";import{e as x}from"./index-ed56af28.js";import"./IconArticle24-414bfa4c.js";import"./IconPanTool24-f1398bf1.js";import"./index-a4c35820.js";import"./index-63601013.js";import"./index-e99519f1.js";import"./index-cd305b84.js";import"./index-fb030d50.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-8c6efd17.js";import{a as Se}from"./argsTypes-032e5782.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./get-78cac09e.js";import"./IconsList.module-e4fe8555.js";import"./index-c1da5c13.js";const he="_wrapper_8g7kk_1",ye={wrapper:he},be=r=>e("div",{className:ye.wrapper,children:r()}),qe={title:"Components/Select/Stories",component:s,argTypes:Se,decorators:[be]},n=[{value:"lorem",label:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolorum earum eligendi in istenecessitatibus odit optio quidem tenetur! Assumenda deleniti fugiat itaque minus omnis quidem temporibus.Necessitatibus rerum, ullam!"},{value:"banana",label:"Banana",icon:e(x,{})},{value:"cherry",label:"Cherry",disabled:!0},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"},{value:"fig",label:"Fig",icon:e(x,{})},{value:"grape",label:"Grape"}],i=r=>{const{options:o,...t}=r;return e("div",{style:{padding:"50px"},children:e(s,{options:n,...t})})};i.storyName="Select по умолчанию";const a=r=>{const{options:o,...t}=r;return e("div",{style:{padding:"50px"},children:e(s,{options:n,label:"Одиночный выбор",multiple:!1,...t})})};a.storyName="Одиночный выбор";const p=r=>{const{options:o,...t}=r;return e("div",{style:{padding:"50px"},children:e(s,{options:n,label:"Выбор с поиском",isSearchable:!0,...t})})};p.storyName="Выбор с поиском";const l=r=>{const{options:o,...t}=r;return e("div",{style:{padding:"50px"},children:e(s,{options:n,label:"Множественный выбор",multiple:!0,...t})})};l.storyName="Select с множественным выбором";const c=r=>{const{options:o,...t}=r;return e("div",{style:{padding:"50px"},children:e(s,{options:n,label:"Disabled",disabled:!0,...t})})};c.storyName="Выбор в состоянии disabled";const u=r=>{const{options:o,...t}=r,[de,ge]=me.useState("apple");return e("div",{style:{padding:"50px"},children:e(s,{options:n,onSelectionChange:E=>{console.log("Selected Value:",E),ge(E)},selected:de,label:"Обработчик при выборе",...t})})};u.storyName="Выбор с обработчиком при выборе";const d=r=>{const{options:o,...t}=r;return e("div",{style:{padding:"50px"},children:e(s,{options:n,label:"Размер s",size:ue.s,...t})})};d.storyName="Компактный Select";const g=r=>{const{options:o,...t}=r;return e("div",{style:{padding:"50px"},children:e(s,{options:n,label:"Размер xs",size:ue.xs,...t})})};g.storyName="Экстра компактный Select";const m=r=>{const{options:o,...t}=r;return e("div",{style:{padding:"50px"},children:e(s,{options:n,label:"Скролл",scrollingItems:2,...t})})};m.storyName="Select с установленным скроллом";const S=r=>{const{options:o,...t}=r;return e("div",{style:{padding:"50px"},children:e(s,{options:n,label:"Цвет success",color:A.success,...t})})};S.storyName="Цвет success";const h=r=>{const{options:o,...t}=r;return e("div",{style:{padding:"50px"},children:e(s,{options:n,label:"Цвет warning",color:A.warning,...t})})};h.storyName="Цвет warning";const y=r=>{const{options:o,...t}=r;return e("div",{style:{padding:"50px"},children:e(s,{options:n,label:"Цвет error",color:A.error,...t})})};y.storyName="Цвет error";const b=r=>{const{options:o,...t}=r;return e("div",{style:{padding:"50px"},children:e(s,{options:[],label:"Пустой select",...t})})};b.storyName="Пустой Select";const v=r=>{const{options:o,...t}=r;return e("div",{style:{padding:"50px"},children:e(s,{options:n,label:"Выбор с поиском",isClearSearchOnBlur:!0,isSearchable:!0,...t})})};v.storyName="Выбор со сбросои хначения поиске при onBlur поля ввода";var O,T,C;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} {...otherArgs} />
    </div>;
}`,...(C=(T=i.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var I,N,B;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} label="Одиночный выбор" multiple={false} {...otherArgs} />
    </div>;
}`,...(B=(N=a.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var f,J,P;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} label="Выбор с поиском" isSearchable {...otherArgs} />
    </div>;
}`,...(P=(J=p.parameters)==null?void 0:J.docs)==null?void 0:P.source}}};var X,D,w;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} label="Множественный выбор" multiple {...otherArgs} />
    </div>;
}`,...(w=(D=l.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var W,z,_;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} label="Disabled" disabled {...otherArgs} />
    </div>;
}`,...(_=(z=c.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var F,M,k;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  const [option, setOption] = useState<string | string[]>('apple');
  const handleSelectChange = (selectedValue: string | string[]) => {
    console.log('Selected Value:', selectedValue);
    setOption(selectedValue);
  };
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} onSelectionChange={handleSelectChange} selected={option} label="Обработчик при выборе" {...otherArgs} />
    </div>;
}`,...(k=(M=u.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var V,q,j;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} label="Размер s" size={sizesMappingInput.s} {...otherArgs} />
    </div>;
}`,...(j=(q=d.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};var G,L,H;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} label="Размер xs" size={sizesMappingInput.xs} {...otherArgs} />
    </div>;
}`,...(H=(L=g.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var K,Q,R;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} label="Скролл" scrollingItems={2} {...otherArgs} />
    </div>;
}`,...(R=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var U,Y,Z;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} label="Цвет success" color={customInputColors.success} {...otherArgs} />
    </div>;
}`,...(Z=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} label="Цвет warning" color={customInputColors.warning} {...otherArgs} />
    </div>;
}`,...(re=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,se,oe;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} label="Цвет error" color={customInputColors.error} {...otherArgs} />
    </div>;
}`,...(oe=(se=y.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ne,ie,ae;b.parameters={...b.parameters,docs:{...(ne=b.parameters)==null?void 0:ne.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  return <div style={{
    padding: '50px'
  }}>
      <Select options={[]} label="Пустой select" {...otherArgs} />
    </div>;
}`,...(ae=(ie=b.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};var pe,le,ce;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} label="Выбор с поиском" isClearSearchOnBlur isSearchable {...otherArgs} />
    </div>;
}`,...(ce=(le=v.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};const je=["SelectDefault","SelectSingle","SelectWithSearch","SelectMultiple","SelectDisabled","SelectWithSelectionCallback","SelectCompact","SelectExtraCompact","SelectScrollingItems","SelectSuccess","SelectWarning","SelectError","SelectEmpty","SelectWithClearSearchOnBlur"];export{d as SelectCompact,i as SelectDefault,c as SelectDisabled,b as SelectEmpty,y as SelectError,g as SelectExtraCompact,l as SelectMultiple,m as SelectScrollingItems,a as SelectSingle,S as SelectSuccess,h as SelectWarning,v as SelectWithClearSearchOnBlur,p as SelectWithSearch,u as SelectWithSelectionCallback,je as __namedExportsOrder,qe as default};
