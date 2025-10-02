import{j as l}from"./jsx-runtime-BTJTZTIL.js";import{r as u}from"./index-BcJSXhQi.js";import{aE as o,aF as p,l as w}from"./TreeList-c_Bstqqa.js";import{s as ce}from"./index-D8WlRtvM.js";import"./generateUUID-Cm0X4XRy.js";import"./index-cHpEh_mw.js";import"./index-WHoiTdKD.js";import{B as O}from"./index-D-jyRV5V.js";import{T as i}from"./index-DmffzHLE.js";import"./index-CQem5UP1.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-bO57duG5.js";import"./index-C5rKoyII.js";import{m as T}from"./32-CkUgnIrf.js";import{a as de}from"./index-B-lxVbXh.js";import{a as me}from"./argsTypes-EH-L50lK.js";import"./index-ChsGqxH_.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";import"./v4-CtRu48qb.js";const ge="_wrapper_1r3dx_1",ve="_customOption_1r3dx_9",pe={wrapper:ge,customOption:ve},Se=a=>l.jsx("div",{className:pe.wrapper,children:l.jsx(a,{})}),d=[{value:"steel",label:"High-Strength Low-Alloy Steel"},{value:"aluminum",label:"Aluminum"},{value:"copper",label:"Copper",disabled:!0},{value:"nickel",label:"Nickel"},{value:"zinc",label:"Zinc"},{value:"lead",label:"Lead"},{value:"tin",label:"Tin"}],Le={title:"Components/SimpleSelect/Stories",component:o,argTypes:me,decorators:[Se],parameters:{actions:{argTypesRegex:"^on.*"}}},m=a=>{const[n,s]=u.useState(a.value||"");return l.jsx("div",{style:{padding:"50px"},children:l.jsx(o,{...a,value:n,onChange:e=>{s(e),a.onChange&&a.onChange(e)},children:d.map(({value:e,label:t,disabled:r})=>l.jsx(p,{value:e,label:t,disabled:r,children:l.jsx(i,{variant:"Body1-Medium",children:t})},e))})})};m.args={label:"Select по умолчанию"};m.storyName="Select по умолчанию";const g=a=>{const[n,s]=u.useState(a.value||"");return l.jsx("div",{style:{padding:"50px"},children:l.jsx(o,{...a,value:n,onChange:e=>{s(e),a.onChange&&a.onChange(e)},children:d.map(({value:e,label:t,disabled:r})=>l.jsx(p,{value:e,label:t,disabled:r,children:l.jsx(i,{variant:"Body1-Medium",children:t})},e))})})};g.args={label:"Select с поиском",searchable:!0};g.storyName="Select с поиском";const v=a=>{const[n,s]=u.useState(a.value||"");return l.jsx("div",{style:{padding:"50px"},children:l.jsx(o,{...a,value:n,onChange:e=>{s(e),a.onChange&&a.onChange(e)},children:d.map(({value:e,label:t,disabled:r})=>l.jsx(p,{value:e,label:t,children:l.jsx(i,{variant:"Body1-Medium",children:t})},e))})})};v.args={label:"Disabled",disabled:!0};v.storyName="Заблокированный Select";const S=a=>{const[n,s]=u.useState(a.value||"apple");return l.jsx("div",{style:{padding:"50px"},children:l.jsx(o,{...a,value:n,onChange:e=>{s(e),a.onChange&&a.onChange(e),de("onSelectionChange")(e)},children:d.map(({value:e,label:t,disabled:r})=>l.jsx(p,{value:e,label:t,children:l.jsx(i,{variant:"Body1-Medium",children:t})},e))})})};S.args={label:"Обработчик при выборе"};S.storyName="Select с коллбэком при выборе";const h=a=>{const[n,s]=u.useState(a.value||"");return l.jsx("div",{style:{padding:"50px"},children:l.jsx(o,{...a,value:n,onChange:e=>{s(e),a.onChange&&a.onChange(e)},children:d.map(({value:e,label:t,disabled:r})=>l.jsx(p,{value:e,label:t,children:l.jsx(i,{variant:"Body1-Medium",children:t})},e))})})};h.args={label:"Размер s",size:ce.s};h.storyName="Select компактный";const y=a=>{const[n,s]=u.useState(a.value||"");return l.jsx("div",{style:{padding:"50px"},children:l.jsx(o,{...a,value:n,onChange:e=>{s(e),a.onChange&&a.onChange(e)},children:d.map(({value:e,label:t,disabled:r})=>l.jsx(p,{value:e,label:t,children:l.jsx(i,{variant:"Body1-Medium",children:t})},e))})})};y.args={label:"Скролл",scrollingItems:2};y.storyName="Select с настройкой скролла";const C=a=>{const[n,s]=u.useState(a.value||"");return l.jsx("div",{style:{padding:"50px"},children:l.jsx(o,{...a,value:n,onChange:e=>{s(e),a.onChange&&a.onChange(e)},children:d.map(({value:e,label:t,disabled:r})=>l.jsx(p,{value:e,label:t,children:l.jsx(i,{variant:"Body1-Medium",children:t})},e))})})};C.args={label:"Цвет success",color:w.success};C.storyName="Select в состоянии success";const b=a=>{const[n,s]=u.useState(a.value||"");return l.jsx("div",{style:{padding:"50px"},children:l.jsx(o,{...a,value:n,onChange:e=>{s(e),a.onChange&&a.onChange(e)},children:d.map(({value:e,label:t,disabled:r})=>l.jsx(p,{value:e,label:t,children:l.jsx(i,{variant:"Body1-Medium",children:t})},e))})})};b.args={label:"Цвет warning",color:w.warning};b.storyName="Select в состоянии warning";const x=a=>{const[n,s]=u.useState(a.value||"");return l.jsx("div",{style:{padding:"50px"},children:l.jsx(o,{...a,value:n,onChange:e=>{s(e),a.onChange&&a.onChange(e)},children:d.map(({value:e,label:t,disabled:r})=>l.jsx(p,{value:e,label:t,children:l.jsx(i,{variant:"Body1-Medium",children:t})},e))})})};x.args={label:"Цвет error",color:w.error};x.storyName="Select в состоянии error";const V=a=>{const[n,s]=u.useState(a.value||"");return l.jsx("div",{style:{padding:"50px"},children:l.jsx(o,{...a,value:n,onChange:e=>{s(e),a.onChange&&a.onChange(e)}})})};V.args={label:"Пустой select"};V.storyName="Select пустой";const j=a=>{const[n,s]=u.useState(a.value||"");return l.jsx(o,{...a,value:n,onChange:e=>{s(e),a.onChange&&a.onChange(e)},children:d.map(({value:e,label:t,disabled:r})=>l.jsx(p,{value:e,label:t,disabled:r,className:pe.customOption,children:l.jsxs(O,{alignItems:"center",justifyContent:"space-between",width:"100%",children:[l.jsx(T,{}),l.jsxs(O,{flexDirection:"column",alignItems:"center",gap:"4px",children:[l.jsx(i,{variant:"Body1-Medium",children:t}),l.jsxs(i,{variant:"Caption",color:"success",children:["Дополнительное описание ",t]})]}),l.jsx(T,{})]})},e))})};j.args={label:"Select со стилизованными OptionItems"};j.storyName="Select со стилизованными OptionItems";const I=a=>{const[n,s]=u.useState("10"),e=[10,20,30,50,100],t=c=>c?`${Number(c)} записей на странице`:"",r=()=>{s(""),a.onReset&&a.onReset()};return l.jsx(o,{...a,value:n,displayValue:t(n),onChange:c=>{s(c.toString()),a.onChange&&a.onChange(c)},onReset:r,reset:!0,label:"Количество записей",children:e.map(c=>l.jsx(p,{value:c.toString(),label:c.toString(),children:l.jsxs(i,{variant:"Body1-Medium",children:[c," записей"]})},c))})};I.args={label:"Select с кастомным displayValue"};I.storyName="Select с кастомным displayValue";var B,M,E;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
  const [value, setValue] = useState(args.value || '');
  return <div style={{
    padding: '50px'
  }}>
      <SimpleSelect {...args} value={value} onChange={newValue => {
      setValue(newValue);
      args.onChange && args.onChange(newValue);
    }}>
        {options.map(({
        value,
        label,
        disabled
      }) => <OptionItem key={value} value={value} label={label} disabled={disabled}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>)}
      </SimpleSelect>
    </div>;
}`,...(E=(M=m.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var N,f,P;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
  const [value, setValue] = useState(args.value || '');
  return <div style={{
    padding: '50px'
  }}>
      <SimpleSelect {...args} value={value} onChange={newValue => {
      setValue(newValue);
      args.onChange && args.onChange(newValue);
    }}>
        {options.map(({
        value,
        label,
        disabled
      }) => <OptionItem key={value} value={value} label={label} disabled={disabled}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>)}
      </SimpleSelect>
    </div>;
}`,...(P=(f=g.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};var k,D,J;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
  const [value, setValue] = useState(args.value || '');
  return <div style={{
    padding: '50px'
  }}>
      <SimpleSelect {...args} value={value} onChange={newValue => {
      setValue(newValue);
      args.onChange && args.onChange(newValue);
    }}>
        {options.map(({
        value,
        label,
        disabled
      }) => <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>)}
      </SimpleSelect>
    </div>;
}`,...(J=(D=v.parameters)==null?void 0:D.docs)==null?void 0:J.source}}};var X,R,W;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
  const [value, setValue] = useState(args.value || 'apple');
  return <div style={{
    padding: '50px'
  }}>
      <SimpleSelect {...args} value={value} onChange={newValue => {
      setValue(newValue);
      args.onChange && args.onChange(newValue);
      action('onSelectionChange')(newValue);
    }}>
        {options.map(({
        value,
        label,
        disabled
      }) => <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>)}
      </SimpleSelect>
    </div>;
}`,...(W=(R=S.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var _,z,A;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
  const [value, setValue] = useState(args.value || '');
  return <div style={{
    padding: '50px'
  }}>
      <SimpleSelect {...args} value={value} onChange={newValue => {
      setValue(newValue);
      args.onChange && args.onChange(newValue);
    }}>
        {options.map(({
        value,
        label,
        disabled
      }) => <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>)}
      </SimpleSelect>
    </div>;
}`,...(A=(z=h.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var L,$,F;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
  const [value, setValue] = useState(args.value || '');
  return <div style={{
    padding: '50px'
  }}>
      <SimpleSelect {...args} value={value} onChange={newValue => {
      setValue(newValue);
      args.onChange && args.onChange(newValue);
    }}>
        {options.map(({
        value,
        label,
        disabled
      }) => <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>)}
      </SimpleSelect>
    </div>;
}`,...(F=($=y.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var H,Z,q;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
  const [value, setValue] = useState(args.value || '');
  return <div style={{
    padding: '50px'
  }}>
      <SimpleSelect {...args} value={value} onChange={newValue => {
      setValue(newValue);
      args.onChange && args.onChange(newValue);
    }}>
        {options.map(({
        value,
        label,
        disabled
      }) => <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>)}
      </SimpleSelect>
    </div>;
}`,...(q=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:q.source}}};var G,K,Q;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
  const [value, setValue] = useState(args.value || '');
  return <div style={{
    padding: '50px'
  }}>
      <SimpleSelect {...args} value={value} onChange={newValue => {
      setValue(newValue);
      args.onChange && args.onChange(newValue);
    }}>
        {options.map(({
        value,
        label,
        disabled
      }) => <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>)}
      </SimpleSelect>
    </div>;
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,Y,ee;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
  const [value, setValue] = useState(args.value || '');
  return <div style={{
    padding: '50px'
  }}>
      <SimpleSelect {...args} value={value} onChange={newValue => {
      setValue(newValue);
      args.onChange && args.onChange(newValue);
    }}>
        {options.map(({
        value,
        label,
        disabled
      }) => <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>)}
      </SimpleSelect>
    </div>;
}`,...(ee=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var ae,le,te;V.parameters={...V.parameters,docs:{...(ae=V.parameters)==null?void 0:ae.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
  const [value, setValue] = useState(args.value || '');
  return <div style={{
    padding: '50px'
  }}>
      <SimpleSelect {...args} value={value} onChange={newValue => {
      setValue(newValue);
      args.onChange && args.onChange(newValue);
    }}>
        {/* No options */}
      </SimpleSelect>
    </div>;
}`,...(te=(le=V.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var ne,se,re;j.parameters={...j.parameters,docs:{...(ne=j.parameters)==null?void 0:ne.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
  const [value, setValue] = useState(args.value || '');
  return <SimpleSelect {...args} value={value} onChange={newValue => {
    setValue(newValue);
    args.onChange && args.onChange(newValue);
  }}>
      {options.map(({
      value,
      label,
      disabled
    }) => <OptionItem key={value} value={value} label={label} disabled={disabled} className={styles.customOption}>
          <Box alignItems="center" justifyContent="space-between" width="100%">
            <IconSelectionContains24 />
            <Box flexDirection="column" alignItems="center" gap="4px">
              <Typography variant="Body1-Medium">{label}</Typography>
              <Typography variant="Caption" color="success">
                Дополнительное описание {label}
              </Typography>
            </Box>
            <IconSelectionContains24 />
          </Box>
        </OptionItem>)}
    </SimpleSelect>;
}`,...(re=(se=j.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var oe,ie,ue;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
  const [paginationValue, setPaginationValue] = useState('10');
  const pageSizes = [10, 20, 30, 50, 100];
  const generateDisplayValue = (val: string) => {
    if (!val) return '';
    const num = Number(val);
    return \`\${num} записей на странице\`;
  };
  const handleReset = () => {
    setPaginationValue('');
    args.onReset && args.onReset();
  };
  return <SimpleSelect {...args} value={paginationValue} displayValue={generateDisplayValue(paginationValue)} onChange={newValue => {
    setPaginationValue(newValue.toString());
    args.onChange && args.onChange(newValue);
  }} onReset={handleReset} reset label="Количество записей">
      {pageSizes.map(pageSize => <OptionItem key={pageSize} value={pageSize.toString()} label={pageSize.toString()}>
          <Typography variant="Body1-Medium">{pageSize} записей</Typography>
        </OptionItem>)}
    </SimpleSelect>;
}`,...(ue=(ie=I.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};const $e=["SelectDefault","SelectWithSearch","SelectDisabled","SelectWithSelectionCallback","SelectCompact","SelectScrollingItems","SelectSuccess","SelectWarning","SelectError","SelectEmpty","SelectWithCustomOptions","SelectWithDisplayValue"];export{h as SelectCompact,m as SelectDefault,v as SelectDisabled,V as SelectEmpty,x as SelectError,y as SelectScrollingItems,C as SelectSuccess,b as SelectWarning,j as SelectWithCustomOptions,I as SelectWithDisplayValue,g as SelectWithSearch,S as SelectWithSelectionCallback,$e as __namedExportsOrder,Le as default};
