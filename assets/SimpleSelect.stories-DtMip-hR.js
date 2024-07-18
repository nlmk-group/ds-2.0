import{j as n,a as w}from"./jsx-runtime-2xDJh5tt.js";import{r as u}from"./index-CBqU2yxZ.js";import{ad as s,ae as p,n as x}from"./index-B_lQn97I.js";import{s as se}from"./index-CjrtVycB.js";import"./generateUUID-BitdulAq.js";import"./index-D_z3tN8U.js";import"./index-CTkD9j2t.js";import{B as O}from"./index-DGfD3wI4.js";import{T as i}from"./index-nWYpQihe.js";import"./index-CZmYKfHv.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-BDxIiU-V.js";import{a as B}from"./32-D4qDQhsJ.js";import{a as ie}from"./chunk-WFFRPTHA-B5TewAtn.js";import{a as ue}from"./argsTypes-pfD-aRyE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx.m-CH7BE6MN.js";import"./index-BtM5VmRH.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-CMH8wQUv.js";import"./preview-errors-Dg5lG0lC.js";import"./index-DrFu-skq.js";const pe="_wrapper_1qcvm_1",ce="_customOption_1qcvm_9",oe={wrapper:pe,customOption:ce},de=a=>n("div",{className:oe.wrapper,children:a()}),c=[{value:"steel",label:"High-Strength Low-Alloy Steel"},{value:"aluminum",label:"Aluminum"},{value:"copper",label:"Copper",disabled:!0},{value:"nickel",label:"Nickel"},{value:"zinc",label:"Zinc"},{value:"lead",label:"Lead"},{value:"tin",label:"Tin"}],We={title:"Components/SimpleSelect/Stories",component:s,argTypes:ue,decorators:[de],parameters:{actions:{argTypesRegex:"^on.*"}}},d=a=>{const[t,r]=u.useState(a.value||"");return n("div",{style:{padding:"50px"},children:n(s,{...a,value:t,onChange:e=>{r(e),a.onChange&&a.onChange(e)},children:c.map(({value:e,label:l,disabled:o})=>n(p,{value:e,label:l,disabled:o,children:n(i,{variant:"Body1-Medium",children:l})},e))})})};d.args={label:"Select по умолчанию"};d.storyName="Select по умолчанию";const m=a=>{const[t,r]=u.useState(a.value||"");return n("div",{style:{padding:"50px"},children:n(s,{...a,value:t,onChange:e=>{r(e),a.onChange&&a.onChange(e)},children:c.map(({value:e,label:l,disabled:o})=>n(p,{value:e,label:l,disabled:o,children:n(i,{variant:"Body1-Medium",children:l})},e))})})};m.args={label:"Select с поиском",searchable:!0};m.storyName="Select с поиском";const v=a=>{const[t,r]=u.useState(a.value||"");return n("div",{style:{padding:"50px"},children:n(s,{...a,value:t,onChange:e=>{r(e),a.onChange&&a.onChange(e)},children:c.map(({value:e,label:l,disabled:o})=>n(p,{value:e,label:l,children:n(i,{variant:"Body1-Medium",children:l})},e))})})};v.args={label:"Disabled",disabled:!0};v.storyName="Заблокированный Select";const g=a=>{const[t,r]=u.useState(a.value||"apple");return n("div",{style:{padding:"50px"},children:n(s,{...a,value:t,onChange:e=>{r(e),a.onChange&&a.onChange(e),ie("onSelectionChange")(e)},children:c.map(({value:e,label:l,disabled:o})=>n(p,{value:e,label:l,children:n(i,{variant:"Body1-Medium",children:l})},e))})})};g.args={label:"Обработчик при выборе"};g.storyName="Select с коллбэком при выборе";const S=a=>{const[t,r]=u.useState(a.value||"");return n("div",{style:{padding:"50px"},children:n(s,{...a,value:t,onChange:e=>{r(e),a.onChange&&a.onChange(e)},children:c.map(({value:e,label:l,disabled:o})=>n(p,{value:e,label:l,children:n(i,{variant:"Body1-Medium",children:l})},e))})})};S.args={label:"Размер s",size:se.s};S.storyName="Select компактный";const h=a=>{const[t,r]=u.useState(a.value||"");return n("div",{style:{padding:"50px"},children:n(s,{...a,value:t,onChange:e=>{r(e),a.onChange&&a.onChange(e)},children:c.map(({value:e,label:l,disabled:o})=>n(p,{value:e,label:l,children:n(i,{variant:"Body1-Medium",children:l})},e))})})};h.args={label:"Скролл",scrollingItems:2};h.storyName="Select с настройкой скролла";const y=a=>{const[t,r]=u.useState(a.value||"");return n("div",{style:{padding:"50px"},children:n(s,{...a,value:t,onChange:e=>{r(e),a.onChange&&a.onChange(e)},children:c.map(({value:e,label:l,disabled:o})=>n(p,{value:e,label:l,children:n(i,{variant:"Body1-Medium",children:l})},e))})})};y.args={label:"Цвет success",color:x.success};y.storyName="Select в состоянии success";const C=a=>{const[t,r]=u.useState(a.value||"");return n("div",{style:{padding:"50px"},children:n(s,{...a,value:t,onChange:e=>{r(e),a.onChange&&a.onChange(e)},children:c.map(({value:e,label:l,disabled:o})=>n(p,{value:e,label:l,children:n(i,{variant:"Body1-Medium",children:l})},e))})})};C.args={label:"Цвет warning",color:x.warning};C.storyName="Select в состоянии warning";const b=a=>{const[t,r]=u.useState(a.value||"");return n("div",{style:{padding:"50px"},children:n(s,{...a,value:t,onChange:e=>{r(e),a.onChange&&a.onChange(e)},children:c.map(({value:e,label:l,disabled:o})=>n(p,{value:e,label:l,children:n(i,{variant:"Body1-Medium",children:l})},e))})})};b.args={label:"Цвет error",color:x.error};b.storyName="Select в состоянии error";const V=a=>{const[t,r]=u.useState(a.value||"");return n("div",{style:{padding:"50px"},children:n(s,{...a,value:t,onChange:e=>{r(e),a.onChange&&a.onChange(e)}})})};V.args={label:"Пустой select"};V.storyName="Select пустой";const I=a=>{const[t,r]=u.useState(a.value||"");return n(s,{...a,value:t,onChange:e=>{r(e),a.onChange&&a.onChange(e)},children:c.map(({value:e,label:l,disabled:o})=>n(p,{value:e,label:l,disabled:o,className:oe.customOption,children:w(O,{alignItems:"center",justifyContent:"space-between",width:"100%",children:[n(B,{}),w(O,{flexDirection:"column",alignItems:"center",gap:"4px",children:[n(i,{variant:"Body1-Medium",children:l}),w(i,{variant:"Caption",color:"success",children:["Дополнительное описание ",l]})]}),n(B,{})]})},e))})};I.args={label:"Select со стилизованными OptionItems"};I.storyName="Select со стилизованными OptionItems";var T,E,M;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(M=(E=d.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var f,N,k;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(k=(N=m.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var J,P,X;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(X=(P=v.parameters)==null?void 0:P.docs)==null?void 0:X.source}}};var D,W,_;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(_=(W=g.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var j,z,q;S.parameters={...S.parameters,docs:{...(j=S.parameters)==null?void 0:j.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(q=(z=S.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var A,F,L;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(L=(F=h.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var H,R,Z;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(Z=(R=y.parameters)==null?void 0:R.docs)==null?void 0:Z.source}}};var G,K,Q;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(Q=(K=C.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,Y,$;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...($=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var ee,ae,ne;V.parameters={...V.parameters,docs:{...(ee=V.parameters)==null?void 0:ee.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(ne=(ae=V.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var le,te,re;I.parameters={...I.parameters,docs:{...(le=I.parameters)==null?void 0:le.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(re=(te=I.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const _e=["SelectDefault","SelectWithSearch","SelectDisabled","SelectWithSelectionCallback","SelectCompact","SelectScrollingItems","SelectSuccess","SelectWarning","SelectError","SelectEmpty","SelectWithCustomOptions"];export{S as SelectCompact,d as SelectDefault,v as SelectDisabled,V as SelectEmpty,b as SelectError,h as SelectScrollingItems,y as SelectSuccess,C as SelectWarning,I as SelectWithCustomOptions,m as SelectWithSearch,g as SelectWithSelectionCallback,_e as __namedExportsOrder,We as default};
