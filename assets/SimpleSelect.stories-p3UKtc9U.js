import{j as l}from"./jsx-runtime-BRNY0I4F.js";import{r as u}from"./index-Bnop-kX6.js";import{ax as o,ay as p,J as j}from"./index-ByAgZyky.js";import{s as re}from"./index-C7kuRPht.js";import"./generateUUID-B22BSTI4.js";import"./index-DJJ0U8Tt.js";import"./index-CGzvFf0p.js";import{B as I}from"./index-wMnNF9Um.js";import{T as i}from"./index-qC5wYQgy.js";import"./index-BuA7rasS.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-BAfSYk8P.js";import"./index-Br4tp0-d.js";import{e as w}from"./32-DCTol8-9.js";import{a as oe}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{a as ie}from"./argsTypes-mc-dabnr.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./index-CT8gBKwQ.js";import"./v4-CQkTLCs1.js";const ue="_wrapper_1r3dx_1",pe="_customOption_1r3dx_9",ne={wrapper:ue,customOption:pe},ce=a=>l.jsx("div",{className:ne.wrapper,children:l.jsx(a,{})}),c=[{value:"steel",label:"High-Strength Low-Alloy Steel"},{value:"aluminum",label:"Aluminum"},{value:"copper",label:"Copper",disabled:!0},{value:"nickel",label:"Nickel"},{value:"zinc",label:"Zinc"},{value:"lead",label:"Lead"},{value:"tin",label:"Tin"}],Je={title:"Components/SimpleSelect/Stories",component:o,argTypes:ie,decorators:[ce],parameters:{actions:{argTypesRegex:"^on.*"}}},d=a=>{const[s,n]=u.useState(a.value||"");return l.jsx("div",{style:{padding:"50px"},children:l.jsx(o,{...a,value:s,onChange:e=>{n(e),a.onChange&&a.onChange(e)},children:c.map(({value:e,label:t,disabled:r})=>l.jsx(p,{value:e,label:t,disabled:r,children:l.jsx(i,{variant:"Body1-Medium",children:t})},e))})})};d.args={label:"Select по умолчанию"};d.storyName="Select по умолчанию";const m=a=>{const[s,n]=u.useState(a.value||"");return l.jsx("div",{style:{padding:"50px"},children:l.jsx(o,{...a,value:s,onChange:e=>{n(e),a.onChange&&a.onChange(e)},children:c.map(({value:e,label:t,disabled:r})=>l.jsx(p,{value:e,label:t,disabled:r,children:l.jsx(i,{variant:"Body1-Medium",children:t})},e))})})};m.args={label:"Select с поиском",searchable:!0};m.storyName="Select с поиском";const g=a=>{const[s,n]=u.useState(a.value||"");return l.jsx("div",{style:{padding:"50px"},children:l.jsx(o,{...a,value:s,onChange:e=>{n(e),a.onChange&&a.onChange(e)},children:c.map(({value:e,label:t,disabled:r})=>l.jsx(p,{value:e,label:t,children:l.jsx(i,{variant:"Body1-Medium",children:t})},e))})})};g.args={label:"Disabled",disabled:!0};g.storyName="Заблокированный Select";const v=a=>{const[s,n]=u.useState(a.value||"apple");return l.jsx("div",{style:{padding:"50px"},children:l.jsx(o,{...a,value:s,onChange:e=>{n(e),a.onChange&&a.onChange(e),oe("onSelectionChange")(e)},children:c.map(({value:e,label:t,disabled:r})=>l.jsx(p,{value:e,label:t,children:l.jsx(i,{variant:"Body1-Medium",children:t})},e))})})};v.args={label:"Обработчик при выборе"};v.storyName="Select с коллбэком при выборе";const S=a=>{const[s,n]=u.useState(a.value||"");return l.jsx("div",{style:{padding:"50px"},children:l.jsx(o,{...a,value:s,onChange:e=>{n(e),a.onChange&&a.onChange(e)},children:c.map(({value:e,label:t,disabled:r})=>l.jsx(p,{value:e,label:t,children:l.jsx(i,{variant:"Body1-Medium",children:t})},e))})})};S.args={label:"Размер s",size:re.s};S.storyName="Select компактный";const h=a=>{const[s,n]=u.useState(a.value||"");return l.jsx("div",{style:{padding:"50px"},children:l.jsx(o,{...a,value:s,onChange:e=>{n(e),a.onChange&&a.onChange(e)},children:c.map(({value:e,label:t,disabled:r})=>l.jsx(p,{value:e,label:t,children:l.jsx(i,{variant:"Body1-Medium",children:t})},e))})})};h.args={label:"Скролл",scrollingItems:2};h.storyName="Select с настройкой скролла";const y=a=>{const[s,n]=u.useState(a.value||"");return l.jsx("div",{style:{padding:"50px"},children:l.jsx(o,{...a,value:s,onChange:e=>{n(e),a.onChange&&a.onChange(e)},children:c.map(({value:e,label:t,disabled:r})=>l.jsx(p,{value:e,label:t,children:l.jsx(i,{variant:"Body1-Medium",children:t})},e))})})};y.args={label:"Цвет success",color:j.success};y.storyName="Select в состоянии success";const x=a=>{const[s,n]=u.useState(a.value||"");return l.jsx("div",{style:{padding:"50px"},children:l.jsx(o,{...a,value:s,onChange:e=>{n(e),a.onChange&&a.onChange(e)},children:c.map(({value:e,label:t,disabled:r})=>l.jsx(p,{value:e,label:t,children:l.jsx(i,{variant:"Body1-Medium",children:t})},e))})})};x.args={label:"Цвет warning",color:j.warning};x.storyName="Select в состоянии warning";const C=a=>{const[s,n]=u.useState(a.value||"");return l.jsx("div",{style:{padding:"50px"},children:l.jsx(o,{...a,value:s,onChange:e=>{n(e),a.onChange&&a.onChange(e)},children:c.map(({value:e,label:t,disabled:r})=>l.jsx(p,{value:e,label:t,children:l.jsx(i,{variant:"Body1-Medium",children:t})},e))})})};C.args={label:"Цвет error",color:j.error};C.storyName="Select в состоянии error";const b=a=>{const[s,n]=u.useState(a.value||"");return l.jsx("div",{style:{padding:"50px"},children:l.jsx(o,{...a,value:s,onChange:e=>{n(e),a.onChange&&a.onChange(e)}})})};b.args={label:"Пустой select"};b.storyName="Select пустой";const V=a=>{const[s,n]=u.useState(a.value||"");return l.jsx(o,{...a,value:s,onChange:e=>{n(e),a.onChange&&a.onChange(e)},children:c.map(({value:e,label:t,disabled:r})=>l.jsx(p,{value:e,label:t,disabled:r,className:ne.customOption,children:l.jsxs(I,{alignItems:"center",justifyContent:"space-between",width:"100%",children:[l.jsx(w,{}),l.jsxs(I,{flexDirection:"column",alignItems:"center",gap:"4px",children:[l.jsx(i,{variant:"Body1-Medium",children:t}),l.jsxs(i,{variant:"Caption",color:"success",children:["Дополнительное описание ",t]})]}),l.jsx(w,{})]})},e))})};V.args={label:"Select со стилизованными OptionItems"};V.storyName="Select со стилизованными OptionItems";var O,T,B;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(f=(E=m.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var N,k,J;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(J=(k=g.parameters)==null?void 0:k.docs)==null?void 0:J.source}}};var P,X,W;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(W=(X=v.parameters)==null?void 0:X.docs)==null?void 0:W.source}}};var _,D,z;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(q=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:q.source}}};var F,G,K;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(K=(G=x.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,U,Y;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(Y=(U=C.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var $,ee,ae;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(ae=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var le,te,se;V.parameters={...V.parameters,docs:{...(le=V.parameters)==null?void 0:le.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...(se=(te=V.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};const Pe=["SelectDefault","SelectWithSearch","SelectDisabled","SelectWithSelectionCallback","SelectCompact","SelectScrollingItems","SelectSuccess","SelectWarning","SelectError","SelectEmpty","SelectWithCustomOptions"];export{S as SelectCompact,d as SelectDefault,g as SelectDisabled,b as SelectEmpty,C as SelectError,h as SelectScrollingItems,y as SelectSuccess,x as SelectWarning,V as SelectWithCustomOptions,m as SelectWithSearch,v as SelectWithSelectionCallback,Pe as __namedExportsOrder,Je as default};