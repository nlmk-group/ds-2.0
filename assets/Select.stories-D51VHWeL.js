import{j as e,a as p}from"./jsx-runtime-2xDJh5tt.js";import{r as l}from"./index-CBqU2yxZ.js";import{a6 as c,l as D,ac as at,D as ht}from"./index-BTGymsfC.js";import{s as d}from"./index-BqvJ5JrJ.js";import"./generateUUID-1cqmAxQg.js";import"./index-D1sOrwww.js";import{T as mt}from"./index-CkVMA9Py.js";import"./index-BulafiJ9.js";import"./index-Dd2IALEV.js";import"./index-BGOHbkSJ.js";import"./index-Dp7-Jy-a.js";import"./index-D8kVD15d.js";import{l as k,m as g,n as i,o as R,p as G,q as V,r as J,s as X,t as j,u as Q,v as Y,w as H,e as yt}from"./32-oKJmtLZM.js";import{a as Ct}from"./argsTypes-CkR51JqF.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx.m-CH7BE6MN.js";import"./index-BtM5VmRH.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-4J70fF5O.js";const bt="_wrapper_16zts_1",S={wrapper:bt,"item-column-wrapper":"_item-column-wrapper_16zts_9","item-column-center-wrapper":"_item-column-center-wrapper_16zts_17","table-cell":"_table-cell_16zts_26"},a=[{value:"lorem",label:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolorum earum eligendi
      in istenecessitatibus odit optio quidem tenetur! Assumenda deleniti fugiat
      itaque minus omnis quidem temporibus.Necessitatibus rerum, ullam!`},{value:"banana",label:"Banana",iconRight:e(k,{})},{value:"cherry",label:"Cherry",disabled:!0},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"},{value:"fig",label:"Fig",iconRight:e(k,{})},{value:"grape",label:"Grape"}],x=[{value:"lorem",label:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolorum earum eligendi
      in istenecessitatibus odit optio quidem tenetur! Assumenda deleniti fugiat
      itaque minus omnis quidem temporibus.Necessitatibus rerum, ullam!`,iconLeft:e(g,{}),iconRight:e(g,{})},{value:"finishing_contains",label:"Finishing Contains",iconLeft:e(i,{}),iconRight:e(i,{})},{value:"equals_sign",label:"Equals Sign",disabled:!0,iconLeft:e(R,{}),iconRight:e(R,{})},{value:"selection_contains",label:"Selection Contains",iconLeft:e(g,{}),iconRight:e(g,{})},{value:"greater",label:"Greater",iconLeft:e(G,{}),iconRight:e(G,{})},{value:"greater_or_equal",label:"Greater Or Equal",iconLeft:e(V,{}),iconRight:e(V,{})},{value:"less",label:"Less",iconLeft:e(J,{}),iconRight:e(J,{})},{value:"less_or_equal",label:"Less Or Equal",iconLeft:e(X,{}),iconRight:e(X,{})},{value:"multiple_choice",label:"Multiple Choice",iconLeft:e(j,{}),iconRight:e(j,{})},{value:"exception_contains",label:"Exception Contains",iconLeft:e(Q,{}),iconRight:e(Q,{})},{value:"not_equal",label:"Not Equal",iconLeft:e(Y,{}),iconRight:e(Y,{})},{value:"starting_contains",label:"Starting Contains",iconLeft:e(H,{}),iconRight:e(H,{})}],Tt=[{value:"finishing_contains",label:"Finishing Contains",subLabel:"Morbi laoreet, ex sed cursus fringilla, sapien leo lobortis est",iconRight:e(i,{})},{value:"equals_sign",label:"Equals Sign",disabled:!0,subLabel:"Cras ut lorem mauris",iconLeft:e(R,{})},{value:"selection_contains",label:"Selection Contains",subLabel:"Aliquam luctus enim tortor",iconLeft:e(g,{}),iconRight:e(g,{})},{value:"greater",label:"Greater",subLabel:"Donec mauris neque"},{value:"greater_or_equal",label:"Greater Or Equal",subLabel:"Phasellus rutrum quis magna sed tincidunt"},{value:"less",label:"Less",subLabel:"Quisque augue sem",iconLeft:e(J,{})},{value:"less_or_equal",label:"Less Or Equal",subLabel:"Cras ut lorem mauris",iconRight:e(X,{})}],vt=[{value:"red-icon",label:e("div",{children:"Red !"}),iconLeft:e(i,{color:"error"}),iconRight:e(i,{color:"error"})},{value:"yellow-icon",label:e("div",{children:"Yellow !"}),iconLeft:e(i,{color:"warning"}),iconRight:e(i,{color:"warning"})},{value:"green-icon",label:"Green !",iconLeft:e(i,{color:"success"}),iconRight:e(i,{color:"success"})},{value:"combined-icon",label:"Combined !",iconLeft:e(i,{color:"primary"}),iconRight:e(i,{color:"success"})}],xt=t=>e("div",{className:S.wrapper,children:t()}),kt={title:"Components/Select/Stories",component:c,argTypes:Ct,decorators:[xt],parameters:{actions:{argTypesRegex:"^on.*"}}},I=t=>{const{options:r,...s}=t,[n,o]=l.useState([]);return e("div",{style:{padding:"50px"},children:e(c,{options:a,...s,selected:n,onSelectionChange:o})})};I.storyName="Select по умолчанию";const w=t=>{const{options:r,...s}=t,[n,o]=l.useState([]);return e("div",{style:{padding:"50px"},children:e(c,{options:a,label:"Одиночный выбор",multiple:!1,...s,selected:n,onSelectionChange:o})})};w.storyName="Одиночный выбор";const f=t=>{const{options:r,...s}=t,[n,o]=l.useState([]);return e("div",{style:{padding:"50px"},children:e(c,{options:a,label:"Выбор с поиском",isSearchable:!0,...s,selected:n,onSelectionChange:o})})};f.storyName="Выбор с поиском";const A=t=>{const{options:r,...s}=t,[n,o]=l.useState([]);return e("div",{style:{padding:"50px"},children:e(c,{options:a,label:"Множественный выбор",multiple:!0,...s,selected:n,onSelectionChange:o})})};A.storyName="Select с множественным выбором";const O=t=>{const{options:r,...s}=t,[n,o]=l.useState([]);return e("div",{style:{padding:"50px"},children:e(c,{options:a,label:"Disabled",disabled:!0,...s,selected:n,onSelectionChange:o})})};O.storyName="Выбор в состоянии disabled";const N=t=>{const{options:r,...s}=t,[n,o]=l.useState(["apple"]);return e("div",{style:{padding:"50px"},children:e(c,{options:a,label:"Обработчик при выборе",...s,selected:n,onSelectionChange:o})})};N.storyName="Выбор с обработчиком при выборе";const L=t=>{const{options:r,...s}=t,[n,o]=l.useState([]);return e("div",{style:{padding:"50px"},children:e(c,{options:a,label:"Размер s",size:d.s,...s,selected:n,onSelectionChange:o})})};L.storyName="Компактный Select";const _=t=>{const{options:r,...s}=t,[n,o]=l.useState([]);return e("div",{style:{padding:"50px"},children:e(c,{options:a,label:"Размер xs",size:d.xs,...s,selected:n,onSelectionChange:o})})};_.storyName="Экстра компактный Select";const z=t=>{const{options:r,...s}=t,[n,o]=l.useState([]);return e("div",{style:{padding:"50px"},children:e(c,{options:a,label:"Скролл",scrollingItems:2,...s,selected:n,onSelectionChange:o})})};z.storyName="Select с установленным скроллом";const q=t=>{const{options:r,...s}=t,[n,o]=l.useState([]);return e("div",{style:{padding:"50px"},children:e(c,{options:a,label:"Цвет success",color:D.success,...s,selected:n,onSelectionChange:o})})};q.storyName="Цвет success";const F=t=>{const{options:r,...s}=t,[n,o]=l.useState([]);return e("div",{style:{padding:"50px"},children:e(c,{options:a,label:"Цвет warning",color:D.warning,...s,selected:n,onSelectionChange:o})})};F.storyName="Цвет warning";const B=t=>{const{options:r,...s}=t,[n,o]=l.useState([]);return e("div",{style:{padding:"50px"},children:e(c,{options:a,label:"Цвет error",color:D.error,...s,selected:n,onSelectionChange:o})})};B.storyName="Цвет error";const M=t=>{const{options:r,...s}=t,[n,o]=l.useState([]);return e("div",{style:{padding:"50px"},children:e(c,{options:[],label:"Пустой select",...s,selected:n,onSelectionChange:o})})};M.storyName="Пустой Select";const P=t=>{const{options:r,...s}=t,[n,o]=l.useState([]);return e("div",{style:{padding:"50px"},children:e(c,{options:a,label:"Выбор с поиском",isClearSearchOnBlur:!0,isSearchable:!0,...s,selected:n,onSelectionChange:o})})};P.storyName="Выбор со сбросом значения в поиске при onBlur поля ввода";const h=t=>{const[r,s]=l.useState([]);return e("div",{style:{padding:"50px",width:"500px"},children:e(c,{...t,selected:r,onSelectionChange:s})})};h.storyName="Select с иконками";h.args={options:x};const m=t=>{const[r,s]=l.useState([]);return e("div",{style:{padding:"50px",width:"500px"},children:e(c,{...t,selected:r,onSelectionChange:s})})};m.storyName='Select "незаметный"';m.args={options:x,stealthy:!0};const y=t=>{const[r,s]=l.useState([]),[n,o]=l.useState([]),[u,E]=l.useState([]);return p("div",{className:S["item-column-wrapper"],children:[e(c,{...t,highlightSelected:!0,selected:r,onSelectionChange:s}),e(c,{...t,multiple:!0,highlightSelected:!0,selected:n,onSelectionChange:o}),e(c,{...t,multiple:!0,highlightSelected:!0,withoutCheckbox:!0,selected:u,onSelectionChange:E})]})};y.storyName="Select c опцией выбора галкой";y.args={options:x};const C=t=>{const[r,s]=l.useState([]),[n,o]=l.useState([]),[u,E]=l.useState([]),[it,dt]=l.useState([]),[ut,pt]=l.useState([]),[St,gt]=l.useState([]);return p("div",{className:S["item-column-center-wrapper"],children:[e(c,{...t,size:d.m,selected:r,onSelectionChange:s}),e(c,{...t,size:d.s,selected:n,onSelectionChange:o}),e(c,{...t,size:d.xs,highlightSelected:!0,withoutCheckbox:!0,selected:u,onSelectionChange:E}),e(c,{...t,size:d.m,stealthy:!0,selected:it,onSelectionChange:dt}),e(c,{...t,size:d.s,stealthy:!0,selected:ut,onSelectionChange:pt}),e(c,{...t,size:d.xs,highlightSelected:!0,withoutCheckbox:!0,stealthy:!0,selected:St,onSelectionChange:gt})]})};C.storyName="Select c байджем кол-ва выбранных опций";C.args={options:x,multiple:!0,badgeAmount:7};const b=t=>{const[r,s]=l.useState([]),[n,o]=l.useState([]),[u,E]=l.useState([]);return p("div",{className:S["item-column-wrapper"],children:[e(c,{...t,multiple:!0,highlightSelected:!0,selected:r,onSelectionChange:s}),e(c,{...t,multiple:!0,withoutCheckbox:!0,highlightSelected:!0,selected:n,onSelectionChange:o}),e(c,{...t,stealthy:!0,highlightSelected:!0,selected:u,onSelectionChange:E})]})};b.storyName="Select опции с описанием";b.args={options:Tt};const T=t=>{const[r,s]=l.useState(x[8].value),[n,o]=l.useState("");return l.useEffect(()=>{o("")},[r]),p("div",{className:S["table-cell"],children:[e(c,{...t,className:at["show-only-icon"],highlightSelected:!0,stealthy:!0,listMinWidth:300,options:x,selected:r,onSelectionChange:s,badgeAmount:r==="Multiple Choice"&&n.length>0?n.length:void 0,activeSelectedValue:n.length>0}),e(c,{...t,multiple:r==="Multiple Choice",withoutCheckbox:!0,highlightSelected:!0,stealthy:!0,listMinWidth:300,options:a,selected:n,onSelectionChange:o,activeSelectedValue:n.length>0})]})};T.storyName="Select Табличный";T.args={size:"s"};const v=t=>{const[r,s]=l.useState([]),[n,o]=l.useState([]);return p("div",{className:S["item-column-wrapper"],children:[e(c,{...t,selected:r,onSelectionChange:s}),e(c,{...t,stealthy:!0,selected:n,onSelectionChange:o})]})};v.storyName="Select c цветными иконками";v.args={options:vt};const W=t=>{const[r,s]=l.useState(""),n=[{label:"В формате .xls",value:"xls"},{label:"В формате .pdf",value:"pdf"}],o=u=>{s(u.toString())};return p("div",{className:S["item-column-wrapper"],children:[e(c,{...t,options:n,selected:[],onSelectionChange:o,className:at["child-wrapper"],children:e(ht,{variant:"secondary",startIcon:e(yt,{}),children:"Сформировать отчет"})}),r&&p(mt,{color:"success",children:["Вы выбрали файл в формате .",r,"."]})]})};W.storyName="Нативное меню";var K,U,Z;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Z=(U=I.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var $,ee,te;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(te=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var se,ne,oe;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(oe=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var le,ce,re;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(re=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:re.source}}};var ae,ie,de;O.parameters={...O.parameters,docs:{...(ae=O.parameters)==null?void 0:ae.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(de=(ie=O.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ue,pe,Se;N.parameters={...N.parameters,docs:{...(ue=N.parameters)==null?void 0:ue.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Se=(pe=N.parameters)==null?void 0:pe.docs)==null?void 0:Se.source}}};var ge,he,me;L.parameters={...L.parameters,docs:{...(ge=L.parameters)==null?void 0:ge.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(me=(he=L.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var ye,Ce,be;_.parameters={..._.parameters,docs:{...(ye=_.parameters)==null?void 0:ye.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(be=(Ce=_.parameters)==null?void 0:Ce.docs)==null?void 0:be.source}}};var Te,ve,xe;z.parameters={...z.parameters,docs:{...(Te=z.parameters)==null?void 0:Te.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(xe=(ve=z.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var Ee,Ie,we;q.parameters={...q.parameters,docs:{...(Ee=q.parameters)==null?void 0:Ee.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(we=(Ie=q.parameters)==null?void 0:Ie.docs)==null?void 0:we.source}}};var fe,Ae,Oe;F.parameters={...F.parameters,docs:{...(fe=F.parameters)==null?void 0:fe.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Oe=(Ae=F.parameters)==null?void 0:Ae.docs)==null?void 0:Oe.source}}};var Ne,Le,_e;B.parameters={...B.parameters,docs:{...(Ne=B.parameters)==null?void 0:Ne.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(_e=(Le=B.parameters)==null?void 0:Le.docs)==null?void 0:_e.source}}};var ze,qe,Fe;M.parameters={...M.parameters,docs:{...(ze=M.parameters)==null?void 0:ze.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Fe=(qe=M.parameters)==null?void 0:qe.docs)==null?void 0:Fe.source}}};var Be,Me,Pe;P.parameters={...P.parameters,docs:{...(Be=P.parameters)==null?void 0:Be.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(Pe=(Me=P.parameters)==null?void 0:Me.docs)==null?void 0:Pe.source}}};var We,Re,Je;h.parameters={...h.parameters,docs:{...(We=h.parameters)==null?void 0:We.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px',
    width: '500px'
  }}>
      <Select {...argTypes} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...(Je=(Re=h.parameters)==null?void 0:Re.docs)==null?void 0:Je.source}}};var Xe,De,ke;m.parameters={...m.parameters,docs:{...(Xe=m.parameters)==null?void 0:Xe.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  return <div style={{
    padding: '50px',
    width: '500px'
  }}>
      <Select {...argTypes} selected={selected} onSelectionChange={setSelected} />
    </div>;
}`,...(ke=(De=m.parameters)==null?void 0:De.docs)==null?void 0:ke.source}}};var Ge,Ve,je;y.parameters={...y.parameters,docs:{...(Ge=y.parameters)==null?void 0:Ge.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  const [selectedTwo, setSelectedTwo] = useState<TSelected>([]);
  const [selectedThree, setSelectedThree] = useState<TSelected>([]);
  return <div className={styles['item-column-wrapper']}>
      <Select {...argTypes} highlightSelected selected={selected} onSelectionChange={setSelected} />
      <Select {...argTypes} multiple highlightSelected selected={selectedTwo} onSelectionChange={setSelectedTwo} />
      <Select {...argTypes} multiple highlightSelected withoutCheckbox selected={selectedThree} onSelectionChange={setSelectedThree} />
    </div>;
}`,...(je=(Ve=y.parameters)==null?void 0:Ve.docs)==null?void 0:je.source}}};var Qe,Ye,He;C.parameters={...C.parameters,docs:{...(Qe=C.parameters)==null?void 0:Qe.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(He=(Ye=C.parameters)==null?void 0:Ye.docs)==null?void 0:He.source}}};var Ke,Ue,Ze;b.parameters={...b.parameters,docs:{...(Ke=b.parameters)==null?void 0:Ke.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  const [selectedTwo, setSelectedTwo] = useState<TSelected>([]);
  const [selectedThree, setSelectedThree] = useState<TSelected>([]);
  return <div className={styles['item-column-wrapper']}>
      <Select {...argTypes} multiple highlightSelected selected={selected} onSelectionChange={setSelected} />
      <Select {...argTypes} multiple withoutCheckbox highlightSelected selected={selectedTwo} onSelectionChange={setSelectedTwo} />
      <Select {...argTypes} stealthy highlightSelected selected={selectedThree} onSelectionChange={setSelectedThree} />
    </div>;
}`,...(Ze=(Ue=b.parameters)==null?void 0:Ue.docs)==null?void 0:Ze.source}}};var $e,et,tt;T.parameters={...T.parameters,docs:{...($e=T.parameters)==null?void 0:$e.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [typeSelect, setTypeSelect] = useState<string | string[]>(optionsWithIcons[8].value);
  const [selectedOption, setSelectedOption] = useState<string | string[]>('');
  useEffect(() => {
    setSelectedOption('');
  }, [typeSelect]);
  return <div className={styles['table-cell']}>
      <Select {...argTypes} className={style['show-only-icon']} highlightSelected stealthy listMinWidth={300} options={optionsWithIcons} selected={typeSelect} onSelectionChange={setTypeSelect} badgeAmount={typeSelect === 'Multiple Choice' && selectedOption.length > 0 ? selectedOption.length : undefined} activeSelectedValue={selectedOption.length > 0} />
      <Select {...argTypes} multiple={typeSelect === 'Multiple Choice'} withoutCheckbox highlightSelected stealthy listMinWidth={300} options={options} selected={selectedOption} onSelectionChange={setSelectedOption} activeSelectedValue={selectedOption.length > 0} />
    </div>;
}`,...(tt=(et=T.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var st,nt,ot;v.parameters={...v.parameters,docs:{...(st=v.parameters)==null?void 0:st.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  const [selectedStealthy, setSelectedStealthy] = useState<TSelected>([]);
  return <div className={styles['item-column-wrapper']}>
      <Select {...argTypes} selected={selected} onSelectionChange={setSelected} />
      <Select {...argTypes} stealthy selected={selectedStealthy} onSelectionChange={setSelectedStealthy} />
    </div>;
}`,...(ot=(nt=v.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var lt,ct,rt;W.parameters={...W.parameters,docs:{...(lt=W.parameters)==null?void 0:lt.docs,source:{originalSource:`(argTypes: ISelectProps): JSX.Element => {
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
}`,...(rt=(ct=W.parameters)==null?void 0:ct.docs)==null?void 0:rt.source}}};const Gt=["SelectDefault","SelectSingle","SelectWithSearch","SelectMultiple","SelectDisabled","SelectWithSelectionCallback","SelectCompact","SelectExtraCompact","SelectScrollingItems","SelectSuccess","SelectWarning","SelectError","SelectEmpty","SelectWithClearSearchOnBlur","SelectWithIcons","SelectInvisible","SelectIconSelected","SelectBadgeAmount","SelectWithDescription","SelectTable","SelectWithColorfulIcons","NativeMenu"];export{W as NativeMenu,C as SelectBadgeAmount,L as SelectCompact,I as SelectDefault,O as SelectDisabled,M as SelectEmpty,B as SelectError,_ as SelectExtraCompact,y as SelectIconSelected,m as SelectInvisible,A as SelectMultiple,z as SelectScrollingItems,w as SelectSingle,q as SelectSuccess,T as SelectTable,F as SelectWarning,P as SelectWithClearSearchOnBlur,v as SelectWithColorfulIcons,b as SelectWithDescription,h as SelectWithIcons,f as SelectWithSearch,N as SelectWithSelectionCallback,Gt as __namedExportsOrder,kt as default};
