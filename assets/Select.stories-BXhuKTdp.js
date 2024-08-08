import{j as e}from"./jsx-runtime-DFnSfiB4.js";import{r as l}from"./index-DQ2WTIsS.js";import{ab as n,p as M,af as Qe,B as st}from"./index-De6xVjfl.js";import{s as i}from"./index-B_c816qF.js";import"./generateUUID-i9L7EtYg.js";import"./index-bLIWCpda.js";import"./index-BgyuaCKK.js";import"./index-B8KuQLf-.js";import{T as ot}from"./index-DJXOh8UI.js";import"./index-DB41iIPt.js";import"./index-wNTT8eSr.js";import"./index-S3KjbRnp.js";import"./index-CpIRsoAz.js";import{a as ct}from"./32-C4VDZHit.js";import{a as lt}from"./argsTypes-DqjoNldK.js";import{o as a,a as T,b as nt,c as rt}from"./mocks-S883t80l.js";import"./clsx-B-dksMZM.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./index-0sbKER3h.js";const at="_wrapper_1js0m_1",p={wrapper:at,"item-column-wrapper":"_item-column-wrapper_1js0m_9","item-column-center-wrapper":"_item-column-center-wrapper_1js0m_17","table-cell":"_table-cell_1js0m_26"},it=t=>e.jsx("div",{className:p.wrapper,children:t()}),Wt={title:"Components/Select/Stories",component:n,argTypes:lt,decorators:[it],parameters:{actions:{argTypesRegex:"^on.*"}}},v=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,...s,selected:o,onSelectionChange:c})})};v.storyName="Select по умолчанию";const b=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Одиночный выбор",multiple:!1,...s,selected:o,onSelectionChange:c})})};b.storyName="Одиночный выбор";const j=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Выбор с поиском",isSearchable:!0,...s,selected:o,onSelectionChange:c})})};j.storyName="Выбор с поиском";const w=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Множественный выбор",multiple:!0,...s,selected:o,onSelectionChange:c})})};w.storyName="Select с множественным выбором";const I=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Disabled",disabled:!0,...s,selected:o,onSelectionChange:c})})};I.storyName="Выбор в состоянии disabled";const O=t=>{const{options:r,...s}=t,[o,c]=l.useState(["apple"]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Обработчик при выборе",...s,selected:o,onSelectionChange:c})})};O.storyName="Выбор с обработчиком при выборе";const A=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Размер s",size:i.s,...s,selected:o,onSelectionChange:c})})};A.storyName="Компактный Select";const N=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Размер xs",size:i.xs,...s,selected:o,onSelectionChange:c})})};N.storyName="Экстра компактный Select";const f=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Скролл",scrollingItems:2,...s,selected:o,onSelectionChange:c})})};f.storyName="Select с установленным скроллом";const E=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Цвет success",color:M.success,...s,selected:o,onSelectionChange:c})})};E.storyName="Цвет success";const z=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Цвет warning",color:M.warning,...s,selected:o,onSelectionChange:c})})};z.storyName="Цвет warning";const W=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Цвет error",color:M.error,...s,selected:o,onSelectionChange:c})})};W.storyName="Цвет error";const J=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:[],label:"Пустой select",...s,selected:o,onSelectionChange:c})})};J.storyName="Пустой Select";const P=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Выбор с поиском",isClearSearchOnBlur:!0,isSearchable:!0,...s,selected:o,onSelectionChange:c})})};P.storyName="Выбор со сбросом значения в поиске при onBlur поля ввода";const S=t=>{const[r,s]=l.useState([]);return e.jsx("div",{style:{padding:"50px",width:"500px"},children:e.jsx(n,{...t,selected:r,onSelectionChange:s})})};S.storyName="Select с иконками";S.args={options:T};const g=t=>{const[r,s]=l.useState([]);return e.jsx("div",{style:{padding:"50px",width:"500px"},children:e.jsx(n,{...t,selected:r,onSelectionChange:s})})};g.storyName='Select "незаметный"';g.args={options:T,stealthy:!0};const h=t=>{const[r,s]=l.useState([]),[o,c]=l.useState([]),[d,C]=l.useState([]);return e.jsxs("div",{className:p["item-column-wrapper"],children:[e.jsx(n,{...t,highlightSelected:!0,selected:r,onSelectionChange:s}),e.jsx(n,{...t,multiple:!0,highlightSelected:!0,selected:o,onSelectionChange:c}),e.jsx(n,{...t,multiple:!0,highlightSelected:!0,withoutCheckbox:!0,selected:d,onSelectionChange:C})]})};h.storyName="Select c опцией выбора галкой";h.args={options:T};const u=t=>{const[r,s]=l.useState([]),[o,c]=l.useState([]),[d,C]=l.useState([]),[Ue,Ye]=l.useState([]),[Ze,$e]=l.useState([]),[et,tt]=l.useState([]);return e.jsxs("div",{className:p["item-column-center-wrapper"],children:[e.jsx(n,{...t,size:i.m,selected:r,onSelectionChange:s}),e.jsx(n,{...t,size:i.s,selected:o,onSelectionChange:c}),e.jsx(n,{...t,size:i.xs,highlightSelected:!0,withoutCheckbox:!0,selected:d,onSelectionChange:C}),e.jsx(n,{...t,size:i.m,stealthy:!0,selected:Ue,onSelectionChange:Ye}),e.jsx(n,{...t,size:i.s,stealthy:!0,selected:Ze,onSelectionChange:$e}),e.jsx(n,{...t,size:i.xs,highlightSelected:!0,withoutCheckbox:!0,stealthy:!0,selected:et,onSelectionChange:tt})]})};u.storyName="Select c байджем кол-ва выбранных опций";u.args={options:T,multiple:!0,badgeAmount:7};const m=t=>{const[r,s]=l.useState([]),[o,c]=l.useState([]),[d,C]=l.useState([]);return e.jsxs("div",{className:p["item-column-wrapper"],children:[e.jsx(n,{...t,multiple:!0,highlightSelected:!0,selected:r,onSelectionChange:s}),e.jsx(n,{...t,multiple:!0,withoutCheckbox:!0,highlightSelected:!0,selected:o,onSelectionChange:c}),e.jsx(n,{...t,stealthy:!0,highlightSelected:!0,selected:d,onSelectionChange:C})]})};m.storyName="Select опции с описанием";m.args={options:nt};const y=t=>{const[r,s]=l.useState(T[8].value),[o,c]=l.useState("");return l.useEffect(()=>{c("")},[r]),e.jsxs("div",{className:p["table-cell"],children:[e.jsx(n,{...t,className:Qe["show-only-icon"],highlightSelected:!0,stealthy:!0,listMinWidth:300,options:T,selected:r,onSelectionChange:s,badgeAmount:r==="Multiple Choice"&&o.length>0?o.length:void 0,activeSelectedValue:o.length>0}),e.jsx(n,{...t,multiple:r==="Multiple Choice",withoutCheckbox:!0,highlightSelected:!0,stealthy:!0,listMinWidth:300,options:a,selected:o,onSelectionChange:c,activeSelectedValue:o.length>0})]})};y.storyName="Select Табличный";y.args={size:"s"};const x=t=>{const[r,s]=l.useState([]),[o,c]=l.useState([]);return e.jsxs("div",{className:p["item-column-wrapper"],children:[e.jsx(n,{...t,selected:r,onSelectionChange:s}),e.jsx(n,{...t,stealthy:!0,selected:o,onSelectionChange:c})]})};x.storyName="Select c цветными иконками";x.args={options:rt};const X=t=>{const[r,s]=l.useState(""),o=[{label:"В формате .xls",value:"xls"},{label:"В формате .pdf",value:"pdf"}],c=d=>{s(d.toString())};return e.jsxs("div",{className:p["item-column-wrapper"],children:[e.jsx(n,{...t,options:o,selected:[],onSelectionChange:c,className:Qe["child-wrapper"],children:e.jsx(st,{variant:"secondary",startIcon:e.jsx(ct,{}),children:"Сформировать отчет"})}),r&&e.jsxs(ot,{children:["Вы выбрали файл в формате .",r,"."]})]})};X.storyName="Нативное меню";var F,_,k;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(k=(_=v.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var B,D,V;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(V=(D=b.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var R,L,q;j.parameters={...j.parameters,docs:{...(R=j.parameters)==null?void 0:R.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(q=(L=j.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var G,H,K;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(K=(H=w.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var Q,U,Y;I.parameters={...I.parameters,docs:{...(Q=I.parameters)==null?void 0:Q.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Y=(U=I.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,$,ee;O.parameters={...O.parameters,docs:{...(Z=O.parameters)==null?void 0:Z.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(ee=($=O.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,se,oe;A.parameters={...A.parameters,docs:{...(te=A.parameters)==null?void 0:te.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(oe=(se=A.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ce,le,ne;N.parameters={...N.parameters,docs:{...(ce=N.parameters)==null?void 0:ce.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(ne=(le=N.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var re,ae,ie;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(ie=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var de,pe,Se;E.parameters={...E.parameters,docs:{...(de=E.parameters)==null?void 0:de.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Se=(pe=E.parameters)==null?void 0:pe.docs)==null?void 0:Se.source}}};var ge,he,ue;z.parameters={...z.parameters,docs:{...(ge=z.parameters)==null?void 0:ge.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(ue=(he=z.parameters)==null?void 0:he.docs)==null?void 0:ue.source}}};var me,ye,xe;W.parameters={...W.parameters,docs:{...(me=W.parameters)==null?void 0:me.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(xe=(ye=W.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var Te,Ce,ve;J.parameters={...J.parameters,docs:{...(Te=J.parameters)==null?void 0:Te.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(ve=(Ce=J.parameters)==null?void 0:Ce.docs)==null?void 0:ve.source}}};var be,je,we;P.parameters={...P.parameters,docs:{...(be=P.parameters)==null?void 0:be.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(we=(je=P.parameters)==null?void 0:je.docs)==null?void 0:we.source}}};var Ie,Oe,Ae;S.parameters={...S.parameters,docs:{...(Ie=S.parameters)==null?void 0:Ie.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px',
    width: '500px'
  }}>
      <Select {...argTypes} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...(Ae=(Oe=S.parameters)==null?void 0:Oe.docs)==null?void 0:Ae.source}}};var Ne,fe,Ee;g.parameters={...g.parameters,docs:{...(Ne=g.parameters)==null?void 0:Ne.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px',
    width: '500px'
  }}>
      <Select {...argTypes} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...(Ee=(fe=g.parameters)==null?void 0:fe.docs)==null?void 0:Ee.source}}};var ze,We,Je;h.parameters={...h.parameters,docs:{...(ze=h.parameters)==null?void 0:ze.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  const [selectedTwo, setSelectedTwo] = useState<TSelected>([]);
  const [selectedThree, setSelectedThree] = useState<TSelected>([]);
  return <div className={styles['item-column-wrapper']}>
      <Select {...argTypes} highlightSelected selected={selected} onSelectionChange={setSelected} />
      <Select {...argTypes} multiple highlightSelected selected={selectedTwo} onSelectionChange={setSelectedTwo} />
      <Select {...argTypes} multiple highlightSelected withoutCheckbox selected={selectedThree} onSelectionChange={setSelectedThree} />
    </div>;
}`,...(Je=(We=h.parameters)==null?void 0:We.docs)==null?void 0:Je.source}}};var Pe,Xe,Me;u.parameters={...u.parameters,docs:{...(Pe=u.parameters)==null?void 0:Pe.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Me=(Xe=u.parameters)==null?void 0:Xe.docs)==null?void 0:Me.source}}};var Fe,_e,ke;m.parameters={...m.parameters,docs:{...(Fe=m.parameters)==null?void 0:Fe.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  const [selectedTwo, setSelectedTwo] = useState<TSelected>([]);
  const [selectedThree, setSelectedThree] = useState<TSelected>([]);
  return <div className={styles['item-column-wrapper']}>
      <Select {...argTypes} multiple highlightSelected selected={selected} onSelectionChange={setSelected} />
      <Select {...argTypes} multiple withoutCheckbox highlightSelected selected={selectedTwo} onSelectionChange={setSelectedTwo} />
      <Select {...argTypes} stealthy highlightSelected selected={selectedThree} onSelectionChange={setSelectedThree} />
    </div>;
}`,...(ke=(_e=m.parameters)==null?void 0:_e.docs)==null?void 0:ke.source}}};var Be,De,Ve;y.parameters={...y.parameters,docs:{...(Be=y.parameters)==null?void 0:Be.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [typeSelect, setTypeSelect] = useState<string | string[]>(optionsWithIcons[8].value);
  const [selectedOption, setSelectedOption] = useState<string | string[]>('');
  useEffect(() => {
    setSelectedOption('');
  }, [typeSelect]);
  return <div className={styles['table-cell']}>
      <Select {...argTypes} className={style['show-only-icon']} highlightSelected stealthy listMinWidth={300} options={optionsWithIcons} selected={typeSelect} onSelectionChange={setTypeSelect} badgeAmount={typeSelect === 'Multiple Choice' && selectedOption.length > 0 ? selectedOption.length : undefined} activeSelectedValue={selectedOption.length > 0} />
      <Select {...argTypes} multiple={typeSelect === 'Multiple Choice'} withoutCheckbox highlightSelected stealthy listMinWidth={300} options={options} selected={selectedOption} onSelectionChange={setSelectedOption} activeSelectedValue={selectedOption.length > 0} />
    </div>;
}`,...(Ve=(De=y.parameters)==null?void 0:De.docs)==null?void 0:Ve.source}}};var Re,Le,qe;x.parameters={...x.parameters,docs:{...(Re=x.parameters)==null?void 0:Re.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  const [selectedStealthy, setSelectedStealthy] = useState<TSelected>([]);
  return <div className={styles['item-column-wrapper']}>
      <Select {...argTypes} selected={selected} onSelectionChange={setSelected} />
      <Select {...argTypes} stealthy selected={selectedStealthy} onSelectionChange={setSelectedStealthy} />
    </div>;
}`,...(qe=(Le=x.parameters)==null?void 0:Le.docs)==null?void 0:qe.source}}};var Ge,He,Ke;X.parameters={...X.parameters,docs:{...(Ge=X.parameters)==null?void 0:Ge.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Ke=(He=X.parameters)==null?void 0:He.docs)==null?void 0:Ke.source}}};const Jt=["SelectDefault","SelectSingle","SelectWithSearch","SelectMultiple","SelectDisabled","SelectWithSelectionCallback","SelectCompact","SelectExtraCompact","SelectScrollingItems","SelectSuccess","SelectWarning","SelectError","SelectEmpty","SelectWithClearSearchOnBlur","SelectWithIcons","SelectInvisible","SelectIconSelected","SelectBadgeAmount","SelectWithDescription","SelectTable","SelectWithColorfulIcons","NativeMenu"];export{X as NativeMenu,u as SelectBadgeAmount,A as SelectCompact,v as SelectDefault,I as SelectDisabled,J as SelectEmpty,W as SelectError,N as SelectExtraCompact,h as SelectIconSelected,g as SelectInvisible,w as SelectMultiple,f as SelectScrollingItems,b as SelectSingle,E as SelectSuccess,y as SelectTable,z as SelectWarning,P as SelectWithClearSearchOnBlur,x as SelectWithColorfulIcons,m as SelectWithDescription,S as SelectWithIcons,j as SelectWithSearch,O as SelectWithSelectionCallback,Jt as __namedExportsOrder,Wt as default};
