import{j as t,a as p}from"./jsx-runtime-2xDJh5tt.js";import{r as c}from"./index-CBqU2yxZ.js";import{a5 as l,l as M,a9 as Ue,I as nt}from"./index-CnL2Y1yT.js";import{s as i}from"./index-CjrtVycB.js";import"./generateUUID-BVRVPcdt.js";import"./index-jIJAWU0x.js";import"./index-B8bUpJH3.js";import"./index-DGfD3wI4.js";import{T as ot}from"./index-CkVMA9Py.js";import"./index-BxqmQ_Es.js";import"./index-Cs1erf_V.js";import"./index-DFf4wlr3.js";import"./index-lhFT6koy.js";import"./index-fHOzSRtI.js";import{q as ct}from"./32-CH6kctYz.js";import{a as lt}from"./argsTypes-D9DFmgcc.js";import{o as a,a as v,b as rt,c as at}from"./mocks-BCeNeOIw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx.m-CH7BE6MN.js";import"./index-BtM5VmRH.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-prZMZXcd.js";const it="_wrapper_16zts_1",u={wrapper:it,"item-column-wrapper":"_item-column-wrapper_16zts_9","item-column-center-wrapper":"_item-column-center-wrapper_16zts_17","table-cell":"_table-cell_16zts_26"},dt=e=>t("div",{className:u.wrapper,children:e()}),Jt={title:"Components/Select/Stories",component:l,argTypes:lt,decorators:[dt],parameters:{actions:{argTypesRegex:"^on.*"}}},b=e=>{const{options:r,...s}=e,[n,o]=c.useState([]);return t("div",{style:{padding:"50px"},children:t(l,{options:a,...s,selected:n,onSelectionChange:o})})};b.storyName="Select по умолчанию";const w=e=>{const{options:r,...s}=e,[n,o]=c.useState([]);return t("div",{style:{padding:"50px"},children:t(l,{options:a,label:"Одиночный выбор",multiple:!1,...s,selected:n,onSelectionChange:o})})};w.storyName="Одиночный выбор";const I=e=>{const{options:r,...s}=e,[n,o]=c.useState([]);return t("div",{style:{padding:"50px"},children:t(l,{options:a,label:"Выбор с поиском",isSearchable:!0,...s,selected:n,onSelectionChange:o})})};I.storyName="Выбор с поиском";const E=e=>{const{options:r,...s}=e,[n,o]=c.useState([]);return t("div",{style:{padding:"50px"},children:t(l,{options:a,label:"Множественный выбор",multiple:!0,...s,selected:n,onSelectionChange:o})})};E.storyName="Select с множественным выбором";const A=e=>{const{options:r,...s}=e,[n,o]=c.useState([]);return t("div",{style:{padding:"50px"},children:t(l,{options:a,label:"Disabled",disabled:!0,...s,selected:n,onSelectionChange:o})})};A.storyName="Выбор в состоянии disabled";const O=e=>{const{options:r,...s}=e,[n,o]=c.useState(["apple"]);return t("div",{style:{padding:"50px"},children:t(l,{options:a,label:"Обработчик при выборе",...s,selected:n,onSelectionChange:o})})};O.storyName="Выбор с обработчиком при выборе";const N=e=>{const{options:r,...s}=e,[n,o]=c.useState([]);return t("div",{style:{padding:"50px"},children:t(l,{options:a,label:"Размер s",size:i.s,...s,selected:n,onSelectionChange:o})})};N.storyName="Компактный Select";const f=e=>{const{options:r,...s}=e,[n,o]=c.useState([]);return t("div",{style:{padding:"50px"},children:t(l,{options:a,label:"Размер xs",size:i.xs,...s,selected:n,onSelectionChange:o})})};f.storyName="Экстра компактный Select";const z=e=>{const{options:r,...s}=e,[n,o]=c.useState([]);return t("div",{style:{padding:"50px"},children:t(l,{options:a,label:"Скролл",scrollingItems:2,...s,selected:n,onSelectionChange:o})})};z.storyName="Select с установленным скроллом";const W=e=>{const{options:r,...s}=e,[n,o]=c.useState([]);return t("div",{style:{padding:"50px"},children:t(l,{options:a,label:"Цвет success",color:M.success,...s,selected:n,onSelectionChange:o})})};W.storyName="Цвет success";const B=e=>{const{options:r,...s}=e,[n,o]=c.useState([]);return t("div",{style:{padding:"50px"},children:t(l,{options:a,label:"Цвет warning",color:M.warning,...s,selected:n,onSelectionChange:o})})};B.storyName="Цвет warning";const F=e=>{const{options:r,...s}=e,[n,o]=c.useState([]);return t("div",{style:{padding:"50px"},children:t(l,{options:a,label:"Цвет error",color:M.error,...s,selected:n,onSelectionChange:o})})};F.storyName="Цвет error";const J=e=>{const{options:r,...s}=e,[n,o]=c.useState([]);return t("div",{style:{padding:"50px"},children:t(l,{options:[],label:"Пустой select",...s,selected:n,onSelectionChange:o})})};J.storyName="Пустой Select";const P=e=>{const{options:r,...s}=e,[n,o]=c.useState([]);return t("div",{style:{padding:"50px"},children:t(l,{options:a,label:"Выбор с поиском",isClearSearchOnBlur:!0,isSearchable:!0,...s,selected:n,onSelectionChange:o})})};P.storyName="Выбор со сбросом значения в поиске при onBlur поля ввода";const S=e=>{const[r,s]=c.useState([]);return t("div",{style:{padding:"50px",width:"500px"},children:t(l,{...e,selected:r,onSelectionChange:s})})};S.storyName="Select с иконками";S.args={options:v};const g=e=>{const[r,s]=c.useState([]);return t("div",{style:{padding:"50px",width:"500px"},children:t(l,{...e,selected:r,onSelectionChange:s})})};g.storyName='Select "незаметный"';g.args={options:v,stealthy:!0};const h=e=>{const[r,s]=c.useState([]),[n,o]=c.useState([]),[d,x]=c.useState([]);return p("div",{className:u["item-column-wrapper"],children:[t(l,{...e,highlightSelected:!0,selected:r,onSelectionChange:s}),t(l,{...e,multiple:!0,highlightSelected:!0,selected:n,onSelectionChange:o}),t(l,{...e,multiple:!0,highlightSelected:!0,withoutCheckbox:!0,selected:d,onSelectionChange:x})]})};h.storyName="Select c опцией выбора галкой";h.args={options:v};const m=e=>{const[r,s]=c.useState([]),[n,o]=c.useState([]),[d,x]=c.useState([]),[Ye,Ze]=c.useState([]),[$e,et]=c.useState([]),[tt,st]=c.useState([]);return p("div",{className:u["item-column-center-wrapper"],children:[t(l,{...e,size:i.m,selected:r,onSelectionChange:s}),t(l,{...e,size:i.s,selected:n,onSelectionChange:o}),t(l,{...e,size:i.xs,highlightSelected:!0,withoutCheckbox:!0,selected:d,onSelectionChange:x}),t(l,{...e,size:i.m,stealthy:!0,selected:Ye,onSelectionChange:Ze}),t(l,{...e,size:i.s,stealthy:!0,selected:$e,onSelectionChange:et}),t(l,{...e,size:i.xs,highlightSelected:!0,withoutCheckbox:!0,stealthy:!0,selected:tt,onSelectionChange:st})]})};m.storyName="Select c байджем кол-ва выбранных опций";m.args={options:v,multiple:!0,badgeAmount:7};const y=e=>{const[r,s]=c.useState([]),[n,o]=c.useState([]),[d,x]=c.useState([]);return p("div",{className:u["item-column-wrapper"],children:[t(l,{...e,multiple:!0,highlightSelected:!0,selected:r,onSelectionChange:s}),t(l,{...e,multiple:!0,withoutCheckbox:!0,highlightSelected:!0,selected:n,onSelectionChange:o}),t(l,{...e,stealthy:!0,highlightSelected:!0,selected:d,onSelectionChange:x})]})};y.storyName="Select опции с описанием";y.args={options:rt};const T=e=>{const[r,s]=c.useState(v[8].value),[n,o]=c.useState("");return c.useEffect(()=>{o("")},[r]),p("div",{className:u["table-cell"],children:[t(l,{...e,className:Ue["show-only-icon"],highlightSelected:!0,stealthy:!0,listMinWidth:300,options:v,selected:r,onSelectionChange:s,badgeAmount:r==="Multiple Choice"&&n.length>0?n.length:void 0,activeSelectedValue:n.length>0}),t(l,{...e,multiple:r==="Multiple Choice",withoutCheckbox:!0,highlightSelected:!0,stealthy:!0,listMinWidth:300,options:a,selected:n,onSelectionChange:o,activeSelectedValue:n.length>0})]})};T.storyName="Select Табличный";T.args={size:"s"};const C=e=>{const[r,s]=c.useState([]),[n,o]=c.useState([]);return p("div",{className:u["item-column-wrapper"],children:[t(l,{...e,selected:r,onSelectionChange:s}),t(l,{...e,stealthy:!0,selected:n,onSelectionChange:o})]})};C.storyName="Select c цветными иконками";C.args={options:at};const X=e=>{const[r,s]=c.useState(""),n=[{label:"В формате .xls",value:"xls"},{label:"В формате .pdf",value:"pdf"}],o=d=>{s(d.toString())};return p("div",{className:u["item-column-wrapper"],children:[t(l,{...e,options:n,selected:[],onSelectionChange:o,className:Ue["child-wrapper"],children:t(nt,{variant:"secondary",startIcon:t(ct,{}),children:"Сформировать отчет"})}),r&&p(ot,{color:"success",children:["Вы выбрали файл в формате .",r,"."]})]})};X.storyName="Нативное меню";var _,D,k;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(k=(D=b.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var V,j,q;w.parameters={...w.parameters,docs:{...(V=w.parameters)==null?void 0:V.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(q=(j=w.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var L,R,G;I.parameters={...I.parameters,docs:{...(L=I.parameters)==null?void 0:L.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(G=(R=I.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var H,K,Q;E.parameters={...E.parameters,docs:{...(H=E.parameters)==null?void 0:H.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Q=(K=E.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,Y,Z;A.parameters={...A.parameters,docs:{...(U=A.parameters)==null?void 0:U.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Z=(Y=A.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,te;O.parameters={...O.parameters,docs:{...($=O.parameters)==null?void 0:$.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(te=(ee=O.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var se,ne,oe;N.parameters={...N.parameters,docs:{...(se=N.parameters)==null?void 0:se.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(oe=(ne=N.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ce,le,re;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(re=(le=f.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var ae,ie,de;z.parameters={...z.parameters,docs:{...(ae=z.parameters)==null?void 0:ae.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(de=(ie=z.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var pe,ue,Se;W.parameters={...W.parameters,docs:{...(pe=W.parameters)==null?void 0:pe.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Se=(ue=W.parameters)==null?void 0:ue.docs)==null?void 0:Se.source}}};var ge,he,me;B.parameters={...B.parameters,docs:{...(ge=B.parameters)==null?void 0:ge.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(me=(he=B.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var ye,Te,Ce;F.parameters={...F.parameters,docs:{...(ye=F.parameters)==null?void 0:ye.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Ce=(Te=F.parameters)==null?void 0:Te.docs)==null?void 0:Ce.source}}};var ve,xe,be;J.parameters={...J.parameters,docs:{...(ve=J.parameters)==null?void 0:ve.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(be=(xe=J.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var we,Ie,Ee;P.parameters={...P.parameters,docs:{...(we=P.parameters)==null?void 0:we.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Ee=(Ie=P.parameters)==null?void 0:Ie.docs)==null?void 0:Ee.source}}};var Ae,Oe,Ne;S.parameters={...S.parameters,docs:{...(Ae=S.parameters)==null?void 0:Ae.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px',
    width: '500px'
  }}>
      <Select {...argTypes} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...(Ne=(Oe=S.parameters)==null?void 0:Oe.docs)==null?void 0:Ne.source}}};var fe,ze,We;g.parameters={...g.parameters,docs:{...(fe=g.parameters)==null?void 0:fe.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px',
    width: '500px'
  }}>
      <Select {...argTypes} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...(We=(ze=g.parameters)==null?void 0:ze.docs)==null?void 0:We.source}}};var Be,Fe,Je;h.parameters={...h.parameters,docs:{...(Be=h.parameters)==null?void 0:Be.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  const [selectedTwo, setSelectedTwo] = useState<TSelected>([]);
  const [selectedThree, setSelectedThree] = useState<TSelected>([]);
  return <div className={styles['item-column-wrapper']}>
      <Select {...argTypes} highlightSelected selected={selected} onSelectionChange={setSelected} />
      <Select {...argTypes} multiple highlightSelected selected={selectedTwo} onSelectionChange={setSelectedTwo} />
      <Select {...argTypes} multiple highlightSelected withoutCheckbox selected={selectedThree} onSelectionChange={setSelectedThree} />
    </div>;
}`,...(Je=(Fe=h.parameters)==null?void 0:Fe.docs)==null?void 0:Je.source}}};var Pe,Xe,Me;m.parameters={...m.parameters,docs:{...(Pe=m.parameters)==null?void 0:Pe.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Me=(Xe=m.parameters)==null?void 0:Xe.docs)==null?void 0:Me.source}}};var _e,De,ke;y.parameters={...y.parameters,docs:{...(_e=y.parameters)==null?void 0:_e.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  const [selectedTwo, setSelectedTwo] = useState<TSelected>([]);
  const [selectedThree, setSelectedThree] = useState<TSelected>([]);
  return <div className={styles['item-column-wrapper']}>
      <Select {...argTypes} multiple highlightSelected selected={selected} onSelectionChange={setSelected} />
      <Select {...argTypes} multiple withoutCheckbox highlightSelected selected={selectedTwo} onSelectionChange={setSelectedTwo} />
      <Select {...argTypes} stealthy highlightSelected selected={selectedThree} onSelectionChange={setSelectedThree} />
    </div>;
}`,...(ke=(De=y.parameters)==null?void 0:De.docs)==null?void 0:ke.source}}};var Ve,je,qe;T.parameters={...T.parameters,docs:{...(Ve=T.parameters)==null?void 0:Ve.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [typeSelect, setTypeSelect] = useState<string | string[]>(optionsWithIcons[8].value);
  const [selectedOption, setSelectedOption] = useState<string | string[]>('');
  useEffect(() => {
    setSelectedOption('');
  }, [typeSelect]);
  return <div className={styles['table-cell']}>
      <Select {...argTypes} className={style['show-only-icon']} highlightSelected stealthy listMinWidth={300} options={optionsWithIcons} selected={typeSelect} onSelectionChange={setTypeSelect} badgeAmount={typeSelect === 'Multiple Choice' && selectedOption.length > 0 ? selectedOption.length : undefined} activeSelectedValue={selectedOption.length > 0} />
      <Select {...argTypes} multiple={typeSelect === 'Multiple Choice'} withoutCheckbox highlightSelected stealthy listMinWidth={300} options={options} selected={selectedOption} onSelectionChange={setSelectedOption} activeSelectedValue={selectedOption.length > 0} />
    </div>;
}`,...(qe=(je=T.parameters)==null?void 0:je.docs)==null?void 0:qe.source}}};var Le,Re,Ge;C.parameters={...C.parameters,docs:{...(Le=C.parameters)==null?void 0:Le.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  const [selectedStealthy, setSelectedStealthy] = useState<TSelected>([]);
  return <div className={styles['item-column-wrapper']}>
      <Select {...argTypes} selected={selected} onSelectionChange={setSelected} />
      <Select {...argTypes} stealthy selected={selectedStealthy} onSelectionChange={setSelectedStealthy} />
    </div>;
}`,...(Ge=(Re=C.parameters)==null?void 0:Re.docs)==null?void 0:Ge.source}}};var He,Ke,Qe;X.parameters={...X.parameters,docs:{...(He=X.parameters)==null?void 0:He.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
      {format && <Typography color='success'>Вы выбрали файл в формате .{format}.</Typography>}
    </div>;
}`,...(Qe=(Ke=X.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};const Pt=["SelectDefault","SelectSingle","SelectWithSearch","SelectMultiple","SelectDisabled","SelectWithSelectionCallback","SelectCompact","SelectExtraCompact","SelectScrollingItems","SelectSuccess","SelectWarning","SelectError","SelectEmpty","SelectWithClearSearchOnBlur","SelectWithIcons","SelectInvisible","SelectIconSelected","SelectBadgeAmount","SelectWithDescription","SelectTable","SelectWithColorfulIcons","NativeMenu"];export{X as NativeMenu,m as SelectBadgeAmount,N as SelectCompact,b as SelectDefault,A as SelectDisabled,J as SelectEmpty,F as SelectError,f as SelectExtraCompact,h as SelectIconSelected,g as SelectInvisible,E as SelectMultiple,z as SelectScrollingItems,w as SelectSingle,W as SelectSuccess,T as SelectTable,B as SelectWarning,P as SelectWithClearSearchOnBlur,C as SelectWithColorfulIcons,y as SelectWithDescription,S as SelectWithIcons,I as SelectWithSearch,O as SelectWithSelectionCallback,Pt as __namedExportsOrder,Jt as default};
