import{j as e}from"./jsx-runtime-DFnSfiB4.js";import{r as l}from"./index-DQ2WTIsS.js";import{af as n,r as F,ah as $e,B as nt}from"./index-BGpPsu4k.js";import{s as i}from"./index-B_c816qF.js";import"./generateUUID-C8XntvAg.js";import"./index-ByiRgrzj.js";import"./index-Cd-Fhxqm.js";import"./index-B8KuQLf-.js";import{T as rt}from"./index-ehXB0alm.js";import"./index-CFeGFBie.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-CTg4GkBi.js";import{a as at}from"./32-CkcGOl0S.js";import{a as it}from"./argsTypes-TyScf5dd.js";import{o as a,a as T,b as dt,c as pt}from"./mocks-DqLqnFRD.js";import"./clsx-B-dksMZM.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./index-BKbm6zW0.js";const St="_wrapper_1js0m_1",p={wrapper:St,"item-column-wrapper":"_item-column-wrapper_1js0m_9","item-column-center-wrapper":"_item-column-center-wrapper_1js0m_17","table-cell":"_table-cell_1js0m_26"},gt=t=>e.jsx("div",{className:p.wrapper,children:t()}),Mt={title:"Components/Select/Stories",component:n,argTypes:it,decorators:[gt],parameters:{actions:{argTypesRegex:"^on.*"}}},v=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,...s,selected:o,onSelectionChange:c})})};v.storyName="Select по умолчанию";const b=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Одиночный выбор",multiple:!1,...s,selected:o,onSelectionChange:c})})};b.storyName="Одиночный выбор";const j=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Выбор с поиском",isSearchable:!0,...s,selected:o,onSelectionChange:c})})};j.storyName="Выбор с поиском";const w=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Автовыбор по Enter",autoSelectSingleOnEnter:!0,isSearchable:!0,...s,selected:o,onSelectionChange:c})})};w.storyName="Автовыбор по Enter";const I=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Множественный выбор",multiple:!0,...s,selected:o,onSelectionChange:c})})};I.storyName="Select с множественным выбором";const O=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Disabled",disabled:!0,...s,selected:o,onSelectionChange:c})})};O.storyName="Выбор в состоянии disabled";const A=t=>{const{options:r,...s}=t,[o,c]=l.useState(["apple"]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Обработчик при выборе",...s,selected:o,onSelectionChange:c})})};A.storyName="Выбор с обработчиком при выборе";const N=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Размер s",size:i.s,...s,selected:o,onSelectionChange:c})})};N.storyName="Компактный Select";const E=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Размер xs",size:i.xs,...s,selected:o,onSelectionChange:c})})};E.storyName="Экстра компактный Select";const f=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Скролл",scrollingItems:2,...s,selected:o,onSelectionChange:c})})};f.storyName="Select с установленным скроллом";const z=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Цвет success",color:F.success,...s,selected:o,onSelectionChange:c})})};z.storyName="Цвет success";const W=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Цвет warning",color:F.warning,...s,selected:o,onSelectionChange:c})})};W.storyName="Цвет warning";const J=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Цвет error",color:F.error,...s,selected:o,onSelectionChange:c})})};J.storyName="Цвет error";const P=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:[],label:"Пустой select",...s,selected:o,onSelectionChange:c})})};P.storyName="Пустой Select";const X=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Выбор с поиском",isClearSearchOnBlur:!0,isSearchable:!0,...s,selected:o,onSelectionChange:c})})};X.storyName="Выбор со сбросом значения в поиске при onBlur поля ввода";const S=t=>{const[r,s]=l.useState([]);return e.jsx("div",{style:{padding:"50px",width:"500px"},children:e.jsx(n,{...t,selected:r,onSelectionChange:s})})};S.storyName="Select с иконками";S.args={options:T};const g=t=>{const[r,s]=l.useState([]);return e.jsx("div",{style:{padding:"50px",width:"500px"},children:e.jsx(n,{...t,selected:r,onSelectionChange:s})})};g.storyName='Select "незаметный"';g.args={options:T,stealthy:!0};const h=t=>{const[r,s]=l.useState([]),[o,c]=l.useState([]),[d,C]=l.useState([]);return e.jsxs("div",{className:p["item-column-wrapper"],children:[e.jsx(n,{...t,highlightSelected:!0,selected:r,onSelectionChange:s}),e.jsx(n,{...t,multiple:!0,highlightSelected:!0,selected:o,onSelectionChange:c}),e.jsx(n,{...t,multiple:!0,highlightSelected:!0,withoutCheckbox:!0,selected:d,onSelectionChange:C})]})};h.storyName="Select c опцией выбора галкой";h.args={options:T};const u=t=>{const[r,s]=l.useState([]),[o,c]=l.useState([]),[d,C]=l.useState([]),[et,tt]=l.useState([]),[st,ot]=l.useState([]),[ct,lt]=l.useState([]);return e.jsxs("div",{className:p["item-column-center-wrapper"],children:[e.jsx(n,{...t,size:i.m,selected:r,onSelectionChange:s}),e.jsx(n,{...t,size:i.s,selected:o,onSelectionChange:c}),e.jsx(n,{...t,size:i.xs,highlightSelected:!0,withoutCheckbox:!0,selected:d,onSelectionChange:C}),e.jsx(n,{...t,size:i.m,stealthy:!0,selected:et,onSelectionChange:tt}),e.jsx(n,{...t,size:i.s,stealthy:!0,selected:st,onSelectionChange:ot}),e.jsx(n,{...t,size:i.xs,highlightSelected:!0,withoutCheckbox:!0,stealthy:!0,selected:ct,onSelectionChange:lt})]})};u.storyName="Select c байджем кол-ва выбранных опций";u.args={options:T,multiple:!0,badgeAmount:7};const m=t=>{const[r,s]=l.useState([]),[o,c]=l.useState([]),[d,C]=l.useState([]);return e.jsxs("div",{className:p["item-column-wrapper"],children:[e.jsx(n,{...t,multiple:!0,highlightSelected:!0,selected:r,onSelectionChange:s}),e.jsx(n,{...t,multiple:!0,withoutCheckbox:!0,highlightSelected:!0,selected:o,onSelectionChange:c}),e.jsx(n,{...t,stealthy:!0,highlightSelected:!0,selected:d,onSelectionChange:C})]})};m.storyName="Select опции с описанием";m.args={options:dt};const y=t=>{const[r,s]=l.useState(T[8].value),[o,c]=l.useState("");return l.useEffect(()=>{c("")},[r]),e.jsxs("div",{className:p["table-cell"],children:[e.jsx(n,{...t,className:$e["show-only-icon"],highlightSelected:!0,stealthy:!0,listMinWidth:300,options:T,selected:r,onSelectionChange:s,badgeAmount:r==="Multiple Choice"&&o.length>0?o.length:void 0,activeSelectedValue:o.length>0}),e.jsx(n,{...t,multiple:r==="Multiple Choice",withoutCheckbox:!0,highlightSelected:!0,stealthy:!0,listMinWidth:300,options:a,selected:o,onSelectionChange:c,activeSelectedValue:o.length>0})]})};y.storyName="Select Табличный";y.args={size:"s"};const x=t=>{const[r,s]=l.useState([]),[o,c]=l.useState([]);return e.jsxs("div",{className:p["item-column-wrapper"],children:[e.jsx(n,{...t,selected:r,onSelectionChange:s}),e.jsx(n,{...t,stealthy:!0,selected:o,onSelectionChange:c})]})};x.storyName="Select c цветными иконками";x.args={options:pt};const M=t=>{const[r,s]=l.useState(""),o=[{label:"В формате .xls",value:"xls"},{label:"В формате .pdf",value:"pdf"}],c=d=>{s(d.toString())};return e.jsxs("div",{className:p["item-column-wrapper"],children:[e.jsx(n,{...t,options:o,selected:[],onSelectionChange:c,className:$e["child-wrapper"],children:e.jsx(nt,{variant:"secondary",startIcon:e.jsx(at,{}),children:"Сформировать отчет"})}),r&&e.jsxs(rt,{children:["Вы выбрали файл в формате .",r,"."]})]})};M.storyName="Нативное меню";var _,B,k;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(k=(B=v.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var D,V,R;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(R=(V=b.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var L,q,G;j.parameters={...j.parameters,docs:{...(L=j.parameters)==null?void 0:L.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(G=(q=j.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var H,K,Q;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const {
    options: ignoredOptions,
    ...otherArgs
  } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px'
  }}>
      <Select options={options} label="Автовыбор по Enter" autoSelectSingleOnEnter isSearchable {...otherArgs} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...(Q=(K=w.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,Y,Z;I.parameters={...I.parameters,docs:{...(U=I.parameters)==null?void 0:U.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Z=(Y=I.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,te;O.parameters={...O.parameters,docs:{...($=O.parameters)==null?void 0:$.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(te=(ee=O.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var se,oe,ce;A.parameters={...A.parameters,docs:{...(se=A.parameters)==null?void 0:se.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(ce=(oe=A.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var le,ne,re;N.parameters={...N.parameters,docs:{...(le=N.parameters)==null?void 0:le.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(re=(ne=N.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ae,ie,de;E.parameters={...E.parameters,docs:{...(ae=E.parameters)==null?void 0:ae.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(de=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var pe,Se,ge;f.parameters={...f.parameters,docs:{...(pe=f.parameters)==null?void 0:pe.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(ge=(Se=f.parameters)==null?void 0:Se.docs)==null?void 0:ge.source}}};var he,ue,me;z.parameters={...z.parameters,docs:{...(he=z.parameters)==null?void 0:he.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(me=(ue=z.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ye,xe,Te;W.parameters={...W.parameters,docs:{...(ye=W.parameters)==null?void 0:ye.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Te=(xe=W.parameters)==null?void 0:xe.docs)==null?void 0:Te.source}}};var Ce,ve,be;J.parameters={...J.parameters,docs:{...(Ce=J.parameters)==null?void 0:Ce.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(be=(ve=J.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var je,we,Ie;P.parameters={...P.parameters,docs:{...(je=P.parameters)==null?void 0:je.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Ie=(we=P.parameters)==null?void 0:we.docs)==null?void 0:Ie.source}}};var Oe,Ae,Ne;X.parameters={...X.parameters,docs:{...(Oe=X.parameters)==null?void 0:Oe.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Ne=(Ae=X.parameters)==null?void 0:Ae.docs)==null?void 0:Ne.source}}};var Ee,fe,ze;S.parameters={...S.parameters,docs:{...(Ee=S.parameters)==null?void 0:Ee.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px',
    width: '500px'
  }}>
      <Select {...argTypes} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...(ze=(fe=S.parameters)==null?void 0:fe.docs)==null?void 0:ze.source}}};var We,Je,Pe;g.parameters={...g.parameters,docs:{...(We=g.parameters)==null?void 0:We.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px',
    width: '500px'
  }}>
      <Select {...argTypes} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...(Pe=(Je=g.parameters)==null?void 0:Je.docs)==null?void 0:Pe.source}}};var Xe,Me,Fe;h.parameters={...h.parameters,docs:{...(Xe=h.parameters)==null?void 0:Xe.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  const [selectedTwo, setSelectedTwo] = useState<TSelected>([]);
  const [selectedThree, setSelectedThree] = useState<TSelected>([]);
  return <div className={styles['item-column-wrapper']}>
      <Select {...argTypes} highlightSelected selected={selected} onSelectionChange={setSelected} />
      <Select {...argTypes} multiple highlightSelected selected={selectedTwo} onSelectionChange={setSelectedTwo} />
      <Select {...argTypes} multiple highlightSelected withoutCheckbox selected={selectedThree} onSelectionChange={setSelectedThree} />
    </div>;
}`,...(Fe=(Me=h.parameters)==null?void 0:Me.docs)==null?void 0:Fe.source}}};var _e,Be,ke;u.parameters={...u.parameters,docs:{...(_e=u.parameters)==null?void 0:_e.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(ke=(Be=u.parameters)==null?void 0:Be.docs)==null?void 0:ke.source}}};var De,Ve,Re;m.parameters={...m.parameters,docs:{...(De=m.parameters)==null?void 0:De.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  const [selectedTwo, setSelectedTwo] = useState<TSelected>([]);
  const [selectedThree, setSelectedThree] = useState<TSelected>([]);
  return <div className={styles['item-column-wrapper']}>
      <Select {...argTypes} multiple highlightSelected selected={selected} onSelectionChange={setSelected} />
      <Select {...argTypes} multiple withoutCheckbox highlightSelected selected={selectedTwo} onSelectionChange={setSelectedTwo} />
      <Select {...argTypes} stealthy highlightSelected selected={selectedThree} onSelectionChange={setSelectedThree} />
    </div>;
}`,...(Re=(Ve=m.parameters)==null?void 0:Ve.docs)==null?void 0:Re.source}}};var Le,qe,Ge;y.parameters={...y.parameters,docs:{...(Le=y.parameters)==null?void 0:Le.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [typeSelect, setTypeSelect] = useState<string | string[]>(optionsWithIcons[8].value);
  const [selectedOption, setSelectedOption] = useState<string | string[]>('');
  useEffect(() => {
    setSelectedOption('');
  }, [typeSelect]);
  return <div className={styles['table-cell']}>
      <Select {...argTypes} className={style['show-only-icon']} highlightSelected stealthy listMinWidth={300} options={optionsWithIcons} selected={typeSelect} onSelectionChange={setTypeSelect} badgeAmount={typeSelect === 'Multiple Choice' && selectedOption.length > 0 ? selectedOption.length : undefined} activeSelectedValue={selectedOption.length > 0} />
      <Select {...argTypes} multiple={typeSelect === 'Multiple Choice'} withoutCheckbox highlightSelected stealthy listMinWidth={300} options={options} selected={selectedOption} onSelectionChange={setSelectedOption} activeSelectedValue={selectedOption.length > 0} />
    </div>;
}`,...(Ge=(qe=y.parameters)==null?void 0:qe.docs)==null?void 0:Ge.source}}};var He,Ke,Qe;x.parameters={...x.parameters,docs:{...(He=x.parameters)==null?void 0:He.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  const [selectedStealthy, setSelectedStealthy] = useState<TSelected>([]);
  return <div className={styles['item-column-wrapper']}>
      <Select {...argTypes} selected={selected} onSelectionChange={setSelected} />
      <Select {...argTypes} stealthy selected={selectedStealthy} onSelectionChange={setSelectedStealthy} />
    </div>;
}`,...(Qe=(Ke=x.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var Ue,Ye,Ze;M.parameters={...M.parameters,docs:{...(Ue=M.parameters)==null?void 0:Ue.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
        <Button variant="secondary" startIcon={<IconArticleOutlined24 />}>
          Сформировать отчет
        </Button>
      </Select>
      {format && <Typography>Вы выбрали файл в формате .{format}.</Typography>}
    </div>;
}`,...(Ze=(Ye=M.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};const Ft=["SelectDefault","SelectSingle","SelectWithSearch","SelectWithSearchByEnter","SelectMultiple","SelectDisabled","SelectWithSelectionCallback","SelectCompact","SelectExtraCompact","SelectScrollingItems","SelectSuccess","SelectWarning","SelectError","SelectEmpty","SelectWithClearSearchOnBlur","SelectWithIcons","SelectInvisible","SelectIconSelected","SelectBadgeAmount","SelectWithDescription","SelectTable","SelectWithColorfulIcons","NativeMenu"];export{M as NativeMenu,u as SelectBadgeAmount,N as SelectCompact,v as SelectDefault,O as SelectDisabled,P as SelectEmpty,J as SelectError,E as SelectExtraCompact,h as SelectIconSelected,g as SelectInvisible,I as SelectMultiple,f as SelectScrollingItems,b as SelectSingle,z as SelectSuccess,y as SelectTable,W as SelectWarning,X as SelectWithClearSearchOnBlur,x as SelectWithColorfulIcons,m as SelectWithDescription,S as SelectWithIcons,j as SelectWithSearch,w as SelectWithSearchByEnter,A as SelectWithSelectionCallback,Ft as __namedExportsOrder,Mt as default};
