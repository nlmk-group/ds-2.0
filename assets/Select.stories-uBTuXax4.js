import{j as e}from"./jsx-runtime-DFnSfiB4.js";import{r as l}from"./index-DQ2WTIsS.js";import{aj as n,r as _,al as ot,n as dt}from"./index-BNUKZqmp.js";import{s as i}from"./index-rzy6QoZO.js";import"./generateUUID-vFnGh3I6.js";import"./index-CNoQ_QnE.js";import"./index-CSbymPMC.js";import"./index-c1a7ry8u.js";import{T as pt}from"./index-ehXB0alm.js";import"./index-Cw4KJrZO.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-BvIp-sDO.js";import{a as St}from"./32-MLA202Yz.js";import{a as gt}from"./argsTypes-DigF7XFB.js";import{o as a,a as C,b as ht,c as ut}from"./mocks-D2SVZKQr.js";import"./clsx-B-dksMZM.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./index-BKbm6zW0.js";const mt="_wrapper_1js0m_1",p={wrapper:mt,"item-column-wrapper":"_item-column-wrapper_1js0m_9","item-column-center-wrapper":"_item-column-center-wrapper_1js0m_17","table-cell":"_table-cell_1js0m_26"},yt=t=>e.jsx("div",{className:p.wrapper,children:t()}),Bt={title:"Components/Select/Stories",component:n,argTypes:gt,decorators:[yt],parameters:{actions:{argTypesRegex:"^on.*"}}},b=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,...s,selected:o,onSelectionChange:c})})};b.storyName="Select по умолчанию";const S=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return console.log(s),e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,...s,selected:o,onSelectionChange:c})})};S.storyName="Select с переносом текста опции на следующую строку";S.args={multilineOption:!0};const j=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Одиночный выбор",multiple:!1,...s,selected:o,onSelectionChange:c})})};j.storyName="Одиночный выбор";const w=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Выбор с поиском",isSearchable:!0,...s,selected:o,onSelectionChange:c})})};w.storyName="Выбор с поиском";const O=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Автовыбор по Enter",autoSelectSingleOnEnter:!0,isSearchable:!0,...s,selected:o,onSelectionChange:c})})};O.storyName="Автовыбор по Enter";const I=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Множественный выбор",multiple:!0,...s,selected:o,onSelectionChange:c})})};I.storyName="Select с множественным выбором";const A=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Disabled",disabled:!0,...s,selected:o,onSelectionChange:c})})};A.storyName="Выбор в состоянии disabled";const N=t=>{const{options:r,...s}=t,[o,c]=l.useState(["apple"]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Обработчик при выборе",...s,selected:o,onSelectionChange:c})})};N.storyName="Выбор с обработчиком при выборе";const E=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Размер s",size:i.s,...s,selected:o,onSelectionChange:c})})};E.storyName="Компактный Select";const f=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Размер xs",size:i.xs,...s,selected:o,onSelectionChange:c})})};f.storyName="Экстра компактный Select";const z=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Скролл",scrollingItems:2,...s,selected:o,onSelectionChange:c})})};z.storyName="Select с установленным скроллом";const W=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Цвет success",color:_.success,...s,selected:o,onSelectionChange:c})})};W.storyName="Цвет success";const J=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Цвет warning",color:_.warning,...s,selected:o,onSelectionChange:c})})};J.storyName="Цвет warning";const P=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Цвет error",color:_.error,...s,selected:o,onSelectionChange:c})})};P.storyName="Цвет error";const X=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:[],label:"Пустой select",...s,selected:o,onSelectionChange:c})})};X.storyName="Пустой Select";const M=t=>{const{options:r,...s}=t,[o,c]=l.useState([]);return e.jsx("div",{style:{padding:"50px"},children:e.jsx(n,{options:a,label:"Выбор с поиском",isClearSearchOnBlur:!0,isSearchable:!0,...s,selected:o,onSelectionChange:c})})};M.storyName="Выбор со сбросом значения в поиске при onBlur поля ввода";const g=t=>{const[r,s]=l.useState([]);return e.jsx("div",{style:{padding:"50px",width:"500px"},children:e.jsx(n,{...t,selected:r,onSelectionChange:s})})};g.storyName="Select с иконками";g.args={options:C};const h=t=>{const[r,s]=l.useState([]);return e.jsx("div",{style:{padding:"50px",width:"500px"},children:e.jsx(n,{...t,selected:r,onSelectionChange:s})})};h.storyName='Select "незаметный"';h.args={options:C,stealthy:!0};const u=t=>{const[r,s]=l.useState([]),[o,c]=l.useState([]),[d,v]=l.useState([]);return e.jsxs("div",{className:p["item-column-wrapper"],children:[e.jsx(n,{...t,highlightSelected:!0,selected:r,onSelectionChange:s}),e.jsx(n,{...t,multiple:!0,highlightSelected:!0,selected:o,onSelectionChange:c}),e.jsx(n,{...t,multiple:!0,highlightSelected:!0,withoutCheckbox:!0,selected:d,onSelectionChange:v})]})};u.storyName="Select c опцией выбора галкой";u.args={options:C};const m=t=>{const[r,s]=l.useState([]),[o,c]=l.useState([]),[d,v]=l.useState([]),[ct,lt]=l.useState([]),[nt,rt]=l.useState([]),[at,it]=l.useState([]);return e.jsxs("div",{className:p["item-column-center-wrapper"],children:[e.jsx(n,{...t,size:i.m,selected:r,onSelectionChange:s}),e.jsx(n,{...t,size:i.s,selected:o,onSelectionChange:c}),e.jsx(n,{...t,size:i.xs,highlightSelected:!0,withoutCheckbox:!0,selected:d,onSelectionChange:v}),e.jsx(n,{...t,size:i.m,stealthy:!0,selected:ct,onSelectionChange:lt}),e.jsx(n,{...t,size:i.s,stealthy:!0,selected:nt,onSelectionChange:rt}),e.jsx(n,{...t,size:i.xs,highlightSelected:!0,withoutCheckbox:!0,stealthy:!0,selected:at,onSelectionChange:it})]})};m.storyName="Select c байджем кол-ва выбранных опций";m.args={options:C,multiple:!0,badgeAmount:7};const y=t=>{const[r,s]=l.useState([]),[o,c]=l.useState([]),[d,v]=l.useState([]);return e.jsxs("div",{className:p["item-column-wrapper"],children:[e.jsx(n,{...t,multiple:!0,highlightSelected:!0,selected:r,onSelectionChange:s}),e.jsx(n,{...t,multiple:!0,withoutCheckbox:!0,highlightSelected:!0,selected:o,onSelectionChange:c}),e.jsx(n,{...t,stealthy:!0,highlightSelected:!0,selected:d,onSelectionChange:v})]})};y.storyName="Select опции с описанием";y.args={options:ht};const x=t=>{const[r,s]=l.useState(C[8].value),[o,c]=l.useState("");return l.useEffect(()=>{c("")},[r]),e.jsxs("div",{className:p["table-cell"],children:[e.jsx(n,{...t,className:ot["show-only-icon"],highlightSelected:!0,stealthy:!0,listMinWidth:300,options:C,selected:r,onSelectionChange:s,badgeAmount:r==="Multiple Choice"&&o.length>0?o.length:void 0,activeSelectedValue:o.length>0}),e.jsx(n,{...t,multiple:r==="Multiple Choice",withoutCheckbox:!0,highlightSelected:!0,stealthy:!0,listMinWidth:300,options:a,selected:o,onSelectionChange:c,activeSelectedValue:o.length>0})]})};x.storyName="Select Табличный";x.args={size:"s"};const T=t=>{const[r,s]=l.useState([]),[o,c]=l.useState([]);return e.jsxs("div",{className:p["item-column-wrapper"],children:[e.jsx(n,{...t,selected:r,onSelectionChange:s}),e.jsx(n,{...t,stealthy:!0,selected:o,onSelectionChange:c})]})};T.storyName="Select c цветными иконками";T.args={options:ut};const F=t=>{const[r,s]=l.useState(""),o=[{label:"В формате .xls",value:"xls"},{label:"В формате .pdf",value:"pdf"}],c=d=>{s(d.toString())};return e.jsxs("div",{className:p["item-column-wrapper"],children:[e.jsx(n,{...t,options:o,selected:[],onSelectionChange:c,className:ot["child-wrapper"],children:e.jsx(dt,{variant:"secondary",startIcon:e.jsx(St,{}),children:"Сформировать отчет"})}),r&&e.jsxs(pt,{color:"var(--steel-90)",children:["Вы выбрали файл в формате .",r,"."]})]})};F.storyName="Нативное меню";var k,B,D;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(D=(B=b.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var V,R,L;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(L=(R=S.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var q,G,H;j.parameters={...j.parameters,docs:{...(q=j.parameters)==null?void 0:q.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(H=(G=j.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var K,Q,U;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(U=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,Z,$;O.parameters={...O.parameters,docs:{...(Y=O.parameters)==null?void 0:Y.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...($=(Z=O.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,se;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(se=(te=I.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var oe,ce,le;A.parameters={...A.parameters,docs:{...(oe=A.parameters)==null?void 0:oe.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(le=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var ne,re,ae;N.parameters={...N.parameters,docs:{...(ne=N.parameters)==null?void 0:ne.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(ae=(re=N.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var ie,de,pe;E.parameters={...E.parameters,docs:{...(ie=E.parameters)==null?void 0:ie.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(pe=(de=E.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var Se,ge,he;f.parameters={...f.parameters,docs:{...(Se=f.parameters)==null?void 0:Se.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(he=(ge=f.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var ue,me,ye;z.parameters={...z.parameters,docs:{...(ue=z.parameters)==null?void 0:ue.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(ye=(me=z.parameters)==null?void 0:me.docs)==null?void 0:ye.source}}};var xe,Te,Ce;W.parameters={...W.parameters,docs:{...(xe=W.parameters)==null?void 0:xe.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Ce=(Te=W.parameters)==null?void 0:Te.docs)==null?void 0:Ce.source}}};var ve,be,je;J.parameters={...J.parameters,docs:{...(ve=J.parameters)==null?void 0:ve.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(je=(be=J.parameters)==null?void 0:be.docs)==null?void 0:je.source}}};var we,Oe,Ie;P.parameters={...P.parameters,docs:{...(we=P.parameters)==null?void 0:we.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Ie=(Oe=P.parameters)==null?void 0:Oe.docs)==null?void 0:Ie.source}}};var Ae,Ne,Ee;X.parameters={...X.parameters,docs:{...(Ae=X.parameters)==null?void 0:Ae.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Ee=(Ne=X.parameters)==null?void 0:Ne.docs)==null?void 0:Ee.source}}};var fe,ze,We;M.parameters={...M.parameters,docs:{...(fe=M.parameters)==null?void 0:fe.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(We=(ze=M.parameters)==null?void 0:ze.docs)==null?void 0:We.source}}};var Je,Pe,Xe;g.parameters={...g.parameters,docs:{...(Je=g.parameters)==null?void 0:Je.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px',
    width: '500px'
  }}>
      <Select {...argTypes} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...(Xe=(Pe=g.parameters)==null?void 0:Pe.docs)==null?void 0:Xe.source}}};var Me,Fe,_e;h.parameters={...h.parameters,docs:{...(Me=h.parameters)==null?void 0:Me.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px',
    width: '500px'
  }}>
      <Select {...argTypes} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...(_e=(Fe=h.parameters)==null?void 0:Fe.docs)==null?void 0:_e.source}}};var ke,Be,De;u.parameters={...u.parameters,docs:{...(ke=u.parameters)==null?void 0:ke.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  const [selectedTwo, setSelectedTwo] = useState<TSelected>([]);
  const [selectedThree, setSelectedThree] = useState<TSelected>([]);
  return <div className={styles['item-column-wrapper']}>
      <Select {...argTypes} highlightSelected selected={selected} onSelectionChange={setSelected} />
      <Select {...argTypes} multiple highlightSelected selected={selectedTwo} onSelectionChange={setSelectedTwo} />
      <Select {...argTypes} multiple highlightSelected withoutCheckbox selected={selectedThree} onSelectionChange={setSelectedThree} />
    </div>;
}`,...(De=(Be=u.parameters)==null?void 0:Be.docs)==null?void 0:De.source}}};var Ve,Re,Le;m.parameters={...m.parameters,docs:{...(Ve=m.parameters)==null?void 0:Ve.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Le=(Re=m.parameters)==null?void 0:Re.docs)==null?void 0:Le.source}}};var qe,Ge,He;y.parameters={...y.parameters,docs:{...(qe=y.parameters)==null?void 0:qe.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  const [selectedTwo, setSelectedTwo] = useState<TSelected>([]);
  const [selectedThree, setSelectedThree] = useState<TSelected>([]);
  return <div className={styles['item-column-wrapper']}>
      <Select {...argTypes} multiple highlightSelected selected={selected} onSelectionChange={setSelected} />
      <Select {...argTypes} multiple withoutCheckbox highlightSelected selected={selectedTwo} onSelectionChange={setSelectedTwo} />
      <Select {...argTypes} stealthy highlightSelected selected={selectedThree} onSelectionChange={setSelectedThree} />
    </div>;
}`,...(He=(Ge=y.parameters)==null?void 0:Ge.docs)==null?void 0:He.source}}};var Ke,Qe,Ue;x.parameters={...x.parameters,docs:{...(Ke=x.parameters)==null?void 0:Ke.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [typeSelect, setTypeSelect] = useState<string | string[]>(optionsWithIcons[8].value);
  const [selectedOption, setSelectedOption] = useState<string | string[]>('');
  useEffect(() => {
    setSelectedOption('');
  }, [typeSelect]);
  return <div className={styles['table-cell']}>
      <Select {...argTypes} className={style['show-only-icon']} highlightSelected stealthy listMinWidth={300} options={optionsWithIcons} selected={typeSelect} onSelectionChange={setTypeSelect} badgeAmount={typeSelect === 'Multiple Choice' && selectedOption.length > 0 ? selectedOption.length : undefined} activeSelectedValue={selectedOption.length > 0} />
      <Select {...argTypes} multiple={typeSelect === 'Multiple Choice'} withoutCheckbox highlightSelected stealthy listMinWidth={300} options={options} selected={selectedOption} onSelectionChange={setSelectedOption} activeSelectedValue={selectedOption.length > 0} />
    </div>;
}`,...(Ue=(Qe=x.parameters)==null?void 0:Qe.docs)==null?void 0:Ue.source}}};var Ye,Ze,$e;T.parameters={...T.parameters,docs:{...(Ye=T.parameters)==null?void 0:Ye.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  const [selectedStealthy, setSelectedStealthy] = useState<TSelected>([]);
  return <div className={styles['item-column-wrapper']}>
      <Select {...argTypes} selected={selected} onSelectionChange={setSelected} />
      <Select {...argTypes} stealthy selected={selectedStealthy} onSelectionChange={setSelectedStealthy} />
    </div>;
}`,...($e=(Ze=T.parameters)==null?void 0:Ze.docs)==null?void 0:$e.source}}};var et,tt,st;F.parameters={...F.parameters,docs:{...(et=F.parameters)==null?void 0:et.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
      {format && <Typography color='var(--steel-90)'>Вы выбрали файл в формате .{format}.</Typography>}
    </div>;
}`,...(st=(tt=F.parameters)==null?void 0:tt.docs)==null?void 0:st.source}}};const Dt=["SelectDefault","SelectMultilineOption","SelectSingle","SelectWithSearch","SelectWithSearchByEnter","SelectMultiple","SelectDisabled","SelectWithSelectionCallback","SelectCompact","SelectExtraCompact","SelectScrollingItems","SelectSuccess","SelectWarning","SelectError","SelectEmpty","SelectWithClearSearchOnBlur","SelectWithIcons","SelectInvisible","SelectIconSelected","SelectBadgeAmount","SelectWithDescription","SelectTable","SelectWithColorfulIcons","NativeMenu"];export{F as NativeMenu,m as SelectBadgeAmount,E as SelectCompact,b as SelectDefault,A as SelectDisabled,X as SelectEmpty,P as SelectError,f as SelectExtraCompact,u as SelectIconSelected,h as SelectInvisible,S as SelectMultilineOption,I as SelectMultiple,z as SelectScrollingItems,j as SelectSingle,W as SelectSuccess,x as SelectTable,J as SelectWarning,M as SelectWithClearSearchOnBlur,T as SelectWithColorfulIcons,y as SelectWithDescription,g as SelectWithIcons,w as SelectWithSearch,O as SelectWithSearchByEnter,N as SelectWithSelectionCallback,Dt as __namedExportsOrder,Bt as default};
