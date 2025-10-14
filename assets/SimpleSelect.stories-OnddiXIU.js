import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{r as p}from"./index-BcJSXhQi.js";import{aE as o,aF as c,l as w}from"./TreeList-BjeWiidJ.js";import{s as ce}from"./index-D8WlRtvM.js";import"./generateUUID-Cm0X4XRy.js";import"./index-cHpEh_mw.js";import"./index-WHoiTdKD.js";import{B as T}from"./index-D-jyRV5V.js";import{T as u}from"./index-DmffzHLE.js";import"./index-CQem5UP1.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-bO57duG5.js";import"./index-C5rKoyII.js";import{m as O}from"./32-CkUgnIrf.js";import{a as de}from"./index-B-lxVbXh.js";import{a as me}from"./argsTypes-BADMVf2y.js";import"./index-ChsGqxH_.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";import"./v4-CtRu48qb.js";const ge="_wrapper_1r3dx_1",ve="_customOption_1r3dx_9",pe={wrapper:ge,customOption:ve},Se=e=>t.jsx("div",{className:pe.wrapper,children:t.jsx(e,{})}),d=[{value:"steel",label:"High-Strength Low-Alloy Steel"},{value:"aluminum",label:"Aluminum"},{value:"copper",label:"Copper",disabled:!0},{value:"nickel",label:"Nickel"},{value:"zinc",label:"Zinc"},{value:"lead",label:"Lead"},{value:"tin",label:"Tin"}],Le={title:"Components/SimpleSelect/Stories",component:o,argTypes:me,decorators:[Se],parameters:{actions:{argTypesRegex:"^on.*"}}},I=e=>{const[n,s]=p.useState(e.value||""),a=()=>{s(""),e.onReset&&e.onReset()};return t.jsx("div",{style:{padding:"50px"},children:t.jsx(o,{...e,value:n,onChange:l=>{s(l),e.onChange&&e.onChange(l)},onReset:e.reset?a:void 0,reset:e.reset,children:d.map(({value:l,label:r,disabled:i})=>t.jsx(c,{value:l,label:r,disabled:i,children:t.jsx(u,{variant:"Body1-Medium",children:r})},l))})})};I.args={label:"Select по умолчанию"};I.storyName="Select по умолчанию";const m=e=>{const[n,s]=p.useState(e.value||"");return t.jsx("div",{style:{padding:"50px"},children:t.jsx(o,{...e,value:n,onChange:a=>{s(a),e.onChange&&e.onChange(a)},children:d.map(({value:a,label:l,disabled:r})=>t.jsx(c,{value:a,label:l,disabled:r,children:t.jsx(u,{variant:"Body1-Medium",children:l})},a))})})};m.args={label:"Select с поиском",searchable:!0};m.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};m.storyName="Select с поиском";const g=e=>{const[n,s]=p.useState(e.value||"");return t.jsx("div",{style:{padding:"50px"},children:t.jsx(o,{...e,value:n,onChange:a=>{s(a),e.onChange&&e.onChange(a)},children:d.map(({value:a,label:l,disabled:r})=>t.jsx(c,{value:a,label:l,children:t.jsx(u,{variant:"Body1-Medium",children:l})},a))})})};g.args={label:"Disabled",disabled:!0};g.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};g.storyName="Заблокированный Select";const v=e=>{const[n,s]=p.useState(e.value||"apple");return t.jsx("div",{style:{padding:"50px"},children:t.jsx(o,{...e,value:n,onChange:a=>{s(a),e.onChange&&e.onChange(a),de("onSelectionChange")(a)},children:d.map(({value:a,label:l,disabled:r})=>t.jsx(c,{value:a,label:l,children:t.jsx(u,{variant:"Body1-Medium",children:l})},a))})})};v.args={label:"Обработчик при выборе"};v.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};v.storyName="Select с коллбэком при выборе";const S=e=>{const[n,s]=p.useState(e.value||"");return t.jsx("div",{style:{padding:"50px"},children:t.jsx(o,{...e,value:n,onChange:a=>{s(a),e.onChange&&e.onChange(a)},children:d.map(({value:a,label:l,disabled:r})=>t.jsx(c,{value:a,label:l,children:t.jsx(u,{variant:"Body1-Medium",children:l})},a))})})};S.args={label:"Размер s",size:ce.s};S.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};S.storyName="Select компактный";const h=e=>{const[n,s]=p.useState(e.value||"");return t.jsx("div",{style:{padding:"50px"},children:t.jsx(o,{...e,value:n,onChange:a=>{s(a),e.onChange&&e.onChange(a)},children:d.map(({value:a,label:l,disabled:r})=>t.jsx(c,{value:a,label:l,children:t.jsx(u,{variant:"Body1-Medium",children:l})},a))})})};h.args={label:"Скролл",scrollingItems:2};h.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};h.storyName="Select с настройкой скролла";const y=e=>{const[n,s]=p.useState(e.value||"");return t.jsx("div",{style:{padding:"50px"},children:t.jsx(o,{...e,value:n,onChange:a=>{s(a),e.onChange&&e.onChange(a)},children:d.map(({value:a,label:l,disabled:r})=>t.jsx(c,{value:a,label:l,children:t.jsx(u,{variant:"Body1-Medium",children:l})},a))})})};y.args={label:"Цвет success",color:w.success};y.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};y.storyName="Select в состоянии success";const b=e=>{const[n,s]=p.useState(e.value||"");return t.jsx("div",{style:{padding:"50px"},children:t.jsx(o,{...e,value:n,onChange:a=>{s(a),e.onChange&&e.onChange(a)},children:d.map(({value:a,label:l,disabled:r})=>t.jsx(c,{value:a,label:l,children:t.jsx(u,{variant:"Body1-Medium",children:l})},a))})})};b.args={label:"Цвет warning",color:w.warning};b.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};b.storyName="Select в состоянии warning";const C=e=>{const[n,s]=p.useState(e.value||"");return t.jsx("div",{style:{padding:"50px"},children:t.jsx(o,{...e,value:n,onChange:a=>{s(a),e.onChange&&e.onChange(a)},children:d.map(({value:a,label:l,disabled:r})=>t.jsx(c,{value:a,label:l,children:t.jsx(u,{variant:"Body1-Medium",children:l})},a))})})};C.args={label:"Цвет error",color:w.error};C.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};C.storyName="Select в состоянии error";const x=e=>{const[n,s]=p.useState(e.value||"");return t.jsx("div",{style:{padding:"50px"},children:t.jsx(o,{...e,value:n,onChange:a=>{s(a),e.onChange&&e.onChange(a)}})})};x.args={label:"Пустой select"};x.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};x.storyName="Select пустой";const V=e=>{const[n,s]=p.useState(e.value||"");return t.jsx(o,{...e,value:n,onChange:a=>{s(a),e.onChange&&e.onChange(a)},children:d.map(({value:a,label:l,disabled:r})=>t.jsx(c,{value:a,label:l,disabled:r,className:pe.customOption,children:t.jsxs(T,{alignItems:"center",justifyContent:"space-between",width:"100%",children:[t.jsx(O,{}),t.jsxs(T,{flexDirection:"column",alignItems:"center",gap:"4px",children:[t.jsx(u,{variant:"Body1-Medium",children:l}),t.jsxs(u,{variant:"Caption",color:"success",children:["Дополнительное описание ",l]})]}),t.jsx(O,{})]})},a))})};V.args={label:"Select со стилизованными OptionItems"};V.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};V.storyName="Select со стилизованными OptionItems";const j=e=>{const[n,s]=p.useState("10"),a=[10,20,30,50,100],l=i=>i?`${Number(i)} записей на странице`:"",r=()=>{s(""),e.onReset&&e.onReset()};return t.jsx(o,{...e,value:n,displayValue:l(n),onChange:i=>{s(i.toString()),e.onChange&&e.onChange(i)},onReset:r,reset:!0,label:"Количество записей",children:a.map(i=>t.jsx(c,{value:i.toString(),label:i.toString(),children:t.jsxs(u,{variant:"Body1-Medium",children:[i," записей"]})},i))})};j.args={label:"Select с кастомным displayValue"};j.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};j.storyName="Select с кастомным displayValue";var B,M,f;I.parameters={...I.parameters,docs:{...(B=I.parameters)==null?void 0:B.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
  const [value, setValue] = useState(args.value || '');
  const handleReset = () => {
    setValue('');
    if (args.onReset) {
      args.onReset();
    }
  };
  return <div style={{
    padding: '50px'
  }}>
      <SimpleSelect {...args} value={value} onChange={newValue => {
      setValue(newValue);
      args.onChange && args.onChange(newValue);
    }} onReset={args.reset ? handleReset : undefined} reset={args.reset}>
        {options.map(({
        value,
        label,
        disabled
      }) => <OptionItem key={value} value={value} label={label} disabled={disabled}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>)}
      </SimpleSelect>
    </div>;
}`,...(f=(M=I.parameters)==null?void 0:M.docs)==null?void 0:f.source}}};var E,R,N;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(N=(R=m.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var P,k,D;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(D=(k=g.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var J,X,W;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(W=(X=v.parameters)==null?void 0:X.docs)==null?void 0:W.source}}};var _,z,A;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(A=(z=S.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var L,$,F;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(F=($=h.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var H,Z,q;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(q=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:q.source}}};var G,K,Q;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,Y,ee;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(ee=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var ae,te,le;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(le=(te=x.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var se,ne,re;V.parameters={...V.parameters,docs:{...(se=V.parameters)==null?void 0:se.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(re=(ne=V.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var oe,ie,ue;j.parameters={...j.parameters,docs:{...(oe=j.parameters)==null?void 0:oe.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(ue=(ie=j.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};const $e=["SelectDefault","SelectWithSearch","SelectDisabled","SelectWithSelectionCallback","SelectCompact","SelectScrollingItems","SelectSuccess","SelectWarning","SelectError","SelectEmpty","SelectWithCustomOptions","SelectWithDisplayValue"];export{S as SelectCompact,I as SelectDefault,g as SelectDisabled,x as SelectEmpty,C as SelectError,h as SelectScrollingItems,y as SelectSuccess,b as SelectWarning,V as SelectWithCustomOptions,j as SelectWithDisplayValue,m as SelectWithSearch,v as SelectWithSelectionCallback,$e as __namedExportsOrder,Le as default};
