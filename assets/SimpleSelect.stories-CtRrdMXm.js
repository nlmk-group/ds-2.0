import{j as l}from"./jsx-runtime-DFnSfiB4.js";import{r as u}from"./index-DQ2WTIsS.js";import{an as o,ao as p,r as j}from"./index-C8yIAa62.js";import{s as re}from"./index-rzy6QoZO.js";import"./generateUUID-7LaMQRml.js";import"./index-KO6O_hQW.js";import"./index-CSbymPMC.js";import{B as I}from"./index-c1a7ry8u.js";import{T as i}from"./index-ehXB0alm.js";import"./index-StdbG6rE.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-Bl5L39jK.js";import{e as w}from"./32-l5SNSvvS.js";import{a as oe}from"./chunk-454WOBUV-CM0pFb8Z.js";import{a as ie}from"./argsTypes-Boubdc50.js";import"./clsx-B-dksMZM.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./index-BKbm6zW0.js";import"./v4-CQkTLCs1.js";const ue="_wrapper_21j2v_1",pe="_customOption_21j2v_9",se={wrapper:ue,customOption:pe},ce=a=>l.jsx("div",{className:se.wrapper,children:a()}),c=[{value:"steel",label:"High-Strength Low-Alloy Steel"},{value:"aluminum",label:"Aluminum"},{value:"copper",label:"Copper",disabled:!0},{value:"nickel",label:"Nickel"},{value:"zinc",label:"Zinc"},{value:"lead",label:"Lead"},{value:"tin",label:"Tin"}],Pe={title:"Components/SimpleSelect/Stories",component:o,argTypes:ie,decorators:[ce],parameters:{actions:{argTypesRegex:"^on.*"}}},d=a=>{const[n,s]=u.useState(a.value||"");return l.jsx("div",{style:{padding:"50px"},children:l.jsx(o,{...a,value:n,onChange:e=>{s(e),a.onChange&&a.onChange(e)},children:c.map(({value:e,label:t,disabled:r})=>l.jsx(p,{value:e,label:t,disabled:r,children:l.jsx(i,{variant:"Body1-Medium",children:t})},e))})})};d.args={label:"Select по умолчанию"};d.storyName="Select по умолчанию";const m=a=>{const[n,s]=u.useState(a.value||"");return l.jsx("div",{style:{padding:"50px"},children:l.jsx(o,{...a,value:n,onChange:e=>{s(e),a.onChange&&a.onChange(e)},children:c.map(({value:e,label:t,disabled:r})=>l.jsx(p,{value:e,label:t,disabled:r,children:l.jsx(i,{variant:"Body1-Medium",children:t})},e))})})};m.args={label:"Select с поиском",searchable:!0};m.storyName="Select с поиском";const v=a=>{const[n,s]=u.useState(a.value||"");return l.jsx("div",{style:{padding:"50px"},children:l.jsx(o,{...a,value:n,onChange:e=>{s(e),a.onChange&&a.onChange(e)},children:c.map(({value:e,label:t,disabled:r})=>l.jsx(p,{value:e,label:t,children:l.jsx(i,{variant:"Body1-Medium",children:t})},e))})})};v.args={label:"Disabled",disabled:!0};v.storyName="Заблокированный Select";const g=a=>{const[n,s]=u.useState(a.value||"apple");return l.jsx("div",{style:{padding:"50px"},children:l.jsx(o,{...a,value:n,onChange:e=>{s(e),a.onChange&&a.onChange(e),oe("onSelectionChange")(e)},children:c.map(({value:e,label:t,disabled:r})=>l.jsx(p,{value:e,label:t,children:l.jsx(i,{variant:"Body1-Medium",children:t})},e))})})};g.args={label:"Обработчик при выборе"};g.storyName="Select с коллбэком при выборе";const S=a=>{const[n,s]=u.useState(a.value||"");return l.jsx("div",{style:{padding:"50px"},children:l.jsx(o,{...a,value:n,onChange:e=>{s(e),a.onChange&&a.onChange(e)},children:c.map(({value:e,label:t,disabled:r})=>l.jsx(p,{value:e,label:t,children:l.jsx(i,{variant:"Body1-Medium",children:t})},e))})})};S.args={label:"Размер s",size:re.s};S.storyName="Select компактный";const h=a=>{const[n,s]=u.useState(a.value||"");return l.jsx("div",{style:{padding:"50px"},children:l.jsx(o,{...a,value:n,onChange:e=>{s(e),a.onChange&&a.onChange(e)},children:c.map(({value:e,label:t,disabled:r})=>l.jsx(p,{value:e,label:t,children:l.jsx(i,{variant:"Body1-Medium",children:t})},e))})})};h.args={label:"Скролл",scrollingItems:2};h.storyName="Select с настройкой скролла";const y=a=>{const[n,s]=u.useState(a.value||"");return l.jsx("div",{style:{padding:"50px"},children:l.jsx(o,{...a,value:n,onChange:e=>{s(e),a.onChange&&a.onChange(e)},children:c.map(({value:e,label:t,disabled:r})=>l.jsx(p,{value:e,label:t,children:l.jsx(i,{variant:"Body1-Medium",children:t})},e))})})};y.args={label:"Цвет success",color:j.success};y.storyName="Select в состоянии success";const C=a=>{const[n,s]=u.useState(a.value||"");return l.jsx("div",{style:{padding:"50px"},children:l.jsx(o,{...a,value:n,onChange:e=>{s(e),a.onChange&&a.onChange(e)},children:c.map(({value:e,label:t,disabled:r})=>l.jsx(p,{value:e,label:t,children:l.jsx(i,{variant:"Body1-Medium",children:t})},e))})})};C.args={label:"Цвет warning",color:j.warning};C.storyName="Select в состоянии warning";const x=a=>{const[n,s]=u.useState(a.value||"");return l.jsx("div",{style:{padding:"50px"},children:l.jsx(o,{...a,value:n,onChange:e=>{s(e),a.onChange&&a.onChange(e)},children:c.map(({value:e,label:t,disabled:r})=>l.jsx(p,{value:e,label:t,children:l.jsx(i,{variant:"Body1-Medium",children:t})},e))})})};x.args={label:"Цвет error",color:j.error};x.storyName="Select в состоянии error";const b=a=>{const[n,s]=u.useState(a.value||"");return l.jsx("div",{style:{padding:"50px"},children:l.jsx(o,{...a,value:n,onChange:e=>{s(e),a.onChange&&a.onChange(e)}})})};b.args={label:"Пустой select"};b.storyName="Select пустой";const V=a=>{const[n,s]=u.useState(a.value||"");return l.jsx(o,{...a,value:n,onChange:e=>{s(e),a.onChange&&a.onChange(e)},children:c.map(({value:e,label:t,disabled:r})=>l.jsx(p,{value:e,label:t,disabled:r,className:se.customOption,children:l.jsxs(I,{alignItems:"center",justifyContent:"space-between",width:"100%",children:[l.jsx(w,{}),l.jsxs(I,{flexDirection:"column",alignItems:"center",gap:"4px",children:[l.jsx(i,{variant:"Body1-Medium",children:t}),l.jsxs(i,{variant:"Caption",color:"success",children:["Дополнительное описание ",t]})]}),l.jsx(w,{})]})},e))})};V.args={label:"Select со стилизованными OptionItems"};V.storyName="Select со стилизованными OptionItems";var O,T,B;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(B=(T=d.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var M,E,f;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(f=(E=m.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var N,k,J;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(J=(k=v.parameters)==null?void 0:k.docs)==null?void 0:J.source}}};var P,X,W;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(W=(X=g.parameters)==null?void 0:X.docs)==null?void 0:W.source}}};var _,D,z;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(z=(D=S.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var A,L,R;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(R=(L=h.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var H,Z,q;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(q=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:q.source}}};var F,G,K;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(K=(G=C.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,U,Y;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(Y=(U=x.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var $,ee,ae;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(ae=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var le,te,ne;V.parameters={...V.parameters,docs:{...(le=V.parameters)==null?void 0:le.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(ne=(te=V.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const Xe=["SelectDefault","SelectWithSearch","SelectDisabled","SelectWithSelectionCallback","SelectCompact","SelectScrollingItems","SelectSuccess","SelectWarning","SelectError","SelectEmpty","SelectWithCustomOptions"];export{S as SelectCompact,d as SelectDefault,v as SelectDisabled,b as SelectEmpty,x as SelectError,h as SelectScrollingItems,y as SelectSuccess,C as SelectWarning,V as SelectWithCustomOptions,m as SelectWithSearch,g as SelectWithSelectionCallback,Xe as __namedExportsOrder,Pe as default};
