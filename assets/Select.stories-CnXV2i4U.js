import{j as e}from"./clsx.m-CcuEzMhP.js";import{r as me}from"./index-CBqU2yxZ.js";import{a3 as t,f as ue,x as A}from"./index-4w0GPB2W.js";import"./index-ehJh3wQv.js";import"./index-D-9trSFj.js";import"./index-DjeAniHW.js";import"./index-fbTu1Hcf.js";import"./index-BhQGQSXE.js";import"./index-hvdSV1r-.js";import"./index-BQVY97ak.js";import"./index-B5tj7Glx.js";import"./index-DyFb8FNg.js";import{i as E}from"./32-UdY5WLK9.js";import{a as Se}from"./argsTypes-Dq1oY8TW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-BO3pQ7ot.js";const he="_wrapper_8g7kk_1",ye={wrapper:he},be=r=>e("div",{className:ye.wrapper,children:r()}),Me={title:"Components/Select/Stories",component:t,argTypes:Se,decorators:[be]},n=[{value:"lorem",label:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolorum earum eligendi in istenecessitatibus odit optio quidem tenetur! Assumenda deleniti fugiat itaque minus omnis quidem temporibus.Necessitatibus rerum, ullam!"},{value:"banana",label:"Banana",icon:e(E,{})},{value:"cherry",label:"Cherry",disabled:!0},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"},{value:"fig",label:"Fig",icon:e(E,{})},{value:"grape",label:"Grape"}],i=r=>{const{options:o,...s}=r;return e("div",{style:{padding:"50px"},children:e(t,{options:n,...s})})};i.storyName="Select по умолчанию";const a=r=>{const{options:o,...s}=r;return e("div",{style:{padding:"50px"},children:e(t,{options:n,label:"Одиночный выбор",multiple:!1,...s})})};a.storyName="Одиночный выбор";const p=r=>{const{options:o,...s}=r;return e("div",{style:{padding:"50px"},children:e(t,{options:n,label:"Выбор с поиском",isSearchable:!0,...s})})};p.storyName="Выбор с поиском";const l=r=>{const{options:o,...s}=r;return e("div",{style:{padding:"50px"},children:e(t,{options:n,label:"Множественный выбор",multiple:!0,...s})})};l.storyName="Select с множественным выбором";const c=r=>{const{options:o,...s}=r;return e("div",{style:{padding:"50px"},children:e(t,{options:n,label:"Disabled",disabled:!0,...s})})};c.storyName="Выбор в состоянии disabled";const u=r=>{const{options:o,...s}=r,[de,ge]=me.useState("apple");return e("div",{style:{padding:"50px"},children:e(t,{options:n,onSelectionChange:x=>{console.log("Selected Value:",x),ge(x)},selected:de,label:"Обработчик при выборе",...s})})};u.storyName="Выбор с обработчиком при выборе";const d=r=>{const{options:o,...s}=r;return e("div",{style:{padding:"50px"},children:e(t,{options:n,label:"Размер s",size:ue.s,...s})})};d.storyName="Компактный Select";const g=r=>{const{options:o,...s}=r;return e("div",{style:{padding:"50px"},children:e(t,{options:n,label:"Размер xs",size:ue.xs,...s})})};g.storyName="Экстра компактный Select";const m=r=>{const{options:o,...s}=r;return e("div",{style:{padding:"50px"},children:e(t,{options:n,label:"Скролл",scrollingItems:2,...s})})};m.storyName="Select с установленным скроллом";const S=r=>{const{options:o,...s}=r;return e("div",{style:{padding:"50px"},children:e(t,{options:n,label:"Цвет success",color:A.success,...s})})};S.storyName="Цвет success";const h=r=>{const{options:o,...s}=r;return e("div",{style:{padding:"50px"},children:e(t,{options:n,label:"Цвет warning",color:A.warning,...s})})};h.storyName="Цвет warning";const y=r=>{const{options:o,...s}=r;return e("div",{style:{padding:"50px"},children:e(t,{options:n,label:"Цвет error",color:A.error,...s})})};y.storyName="Цвет error";const b=r=>{const{options:o,...s}=r;return e("div",{style:{padding:"50px"},children:e(t,{options:[],label:"Пустой select",...s})})};b.storyName="Пустой Select";const v=r=>{const{options:o,...s}=r;return e("div",{style:{padding:"50px"},children:e(t,{options:n,label:"Выбор с поиском",isClearSearchOnBlur:!0,isSearchable:!0,...s})})};v.storyName="Выбор со сбросои хначения поиске при onBlur поля ввода";var O,T,C;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(B=(N=a.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var P,J,X;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} label="Выбор с поиском" isSearchable {...otherArgs} />
    </div>;
}`,...(X=(J=p.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var f,D,w;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(re=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var se,te,oe;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} label="Цвет error" color={customInputColors.error} {...otherArgs} />
    </div>;
}`,...(oe=(te=y.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ne,ie,ae;b.parameters={...b.parameters,docs:{...(ne=b.parameters)==null?void 0:ne.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(ce=(le=v.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};const ke=["SelectDefault","SelectSingle","SelectWithSearch","SelectMultiple","SelectDisabled","SelectWithSelectionCallback","SelectCompact","SelectExtraCompact","SelectScrollingItems","SelectSuccess","SelectWarning","SelectError","SelectEmpty","SelectWithClearSearchOnBlur"];export{d as SelectCompact,i as SelectDefault,c as SelectDisabled,b as SelectEmpty,y as SelectError,g as SelectExtraCompact,l as SelectMultiple,m as SelectScrollingItems,a as SelectSingle,S as SelectSuccess,h as SelectWarning,v as SelectWithClearSearchOnBlur,p as SelectWithSearch,u as SelectWithSelectionCallback,ke as __namedExportsOrder,Me as default};
