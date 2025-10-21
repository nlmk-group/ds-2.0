import{j as n}from"./jsx-runtime-BTJTZTIL.js";import{r as u}from"./index-BcJSXhQi.js";import{aG as o,aF as i,am as Ie,l as k}from"./TreeList-DLKvZc0E.js";import{s as we}from"./index-D8WlRtvM.js";import"./generateUUID-CwHnX0Hw.js";import"./index-BekOEyNL.js";import"./index-WHoiTdKD.js";import{B as O}from"./index-D-jyRV5V.js";import{T as f}from"./index-DmffzHLE.js";import"./index-9k2b7QWQ.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-uupel1IP.js";import"./index-C5rKoyII.js";import{m as A}from"./32-BKmqX1Rw.js";import{a as je}from"./index-B-lxVbXh.js";import{a as Oe}from"./argsTypes-BN962dA1.js";import"./index-ChsGqxH_.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";import"./v4-CtRu48qb.js";const fe="_wrapper_1r3dx_1",ke="_customOption_1r3dx_9",ye={wrapper:fe,customOption:ke},Ae=a=>n.jsx("div",{className:ye.wrapper,children:n.jsx(a,{})}),c=[{value:"steel",label:"High-Strength Low-Alloy Steel"},{value:"aluminum",label:"Aluminum"},{value:"copper",label:"Copper",disabled:!0},{value:"nickel",label:"Nickel"},{value:"zinc",label:"Zinc"},{value:"lead",label:"Lead"},{value:"tin",label:"Tin"}],p=({option:a,isSelected:t=!1})=>n.jsxs(O,{alignItems:"center",gap:"8px",children:[n.jsx(Ie,{checked:t,disabled:a.disabled,onChange:()=>{},style:{pointerEvents:"none"}}),n.jsx(f,{variant:"Body1-Medium",children:a.label})]}),na={title:"Components/MultiSelect/Stories",component:o,argTypes:Oe,decorators:[Ae],parameters:{actions:{argTypesRegex:"^on.*"}}},j=a=>{const[t,l]=u.useState(a.value||[]),s=r=>{l(r),a.onChange&&a.onChange(r)},e=()=>{l([]),a.onReset&&a.onReset()};return n.jsx(o,{...a,value:t,onChange:s,onReset:a.reset?e:void 0,reset:a.reset,children:c.map(r=>n.jsx(i,{value:r.value,label:r.label,disabled:r.disabled,children:n.jsx(p,{option:r})},r.value))})};j.args={label:"MultiSelect по умолчанию"};j.storyName="MultiSelect по умолчанию";const d=a=>{const[t,l]=u.useState(a.value||[]),s=e=>{l(e),a.onChange&&a.onChange(e)};return n.jsx(o,{...a,value:t,onChange:s,children:c.map(e=>n.jsx(i,{value:e.value,label:e.label,disabled:e.disabled,children:n.jsx(p,{option:e})},e.value))})};d.args={label:"MultiSelect с поиском",searchable:!0};d.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};d.storyName="MultiSelect с поиском";const h=a=>{const[t,l]=u.useState(a.value||[]),s=e=>{l(e),a.onChange&&a.onChange(e)};return n.jsx(o,{...a,value:t,onChange:s,children:c.map(e=>n.jsx(i,{value:e.value,label:e.label,children:n.jsx(p,{option:e})},e.value))})};h.args={label:"Disabled",disabled:!0};h.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};h.storyName="Заблокированный MultiSelect";const m=a=>{const[t,l]=u.useState(a.value||["aluminum"]),s=e=>{l(e),a.onChange&&a.onChange(e),je("onSelectionChange")(e)};return n.jsx(o,{...a,value:t,onChange:s,children:c.map(e=>n.jsx(i,{value:e.value,label:e.label,disabled:e.disabled,children:n.jsx(p,{option:e})},e.value))})};m.args={label:"Обработчик при выборе"};m.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};m.storyName="MultiSelect с коллбэком при выборе";const g=a=>{const[t,l]=u.useState(a.value||["steel","aluminum","nickel","zinc"]),s=e=>{l(e),a.onChange&&a.onChange(e)};return n.jsx(o,{...a,value:t,onChange:s,children:c.map(e=>n.jsx(i,{value:e.value,label:e.label,disabled:e.disabled,children:n.jsx(p,{option:e})},e.value))})};g.args={label:"MultiSelect с тегами"};g.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};g.storyName="MultiSelect с тегами";const b=a=>{const[t,l]=u.useState(a.value||[]),s=e=>{l(e),a.onChange&&a.onChange(e)};return n.jsx(o,{...a,value:t,onChange:s,children:c.map(e=>n.jsx(i,{value:e.value,label:e.label,disabled:e.disabled,children:n.jsx(p,{option:e})},e.value))})};b.args={label:"Размер s",size:we.s};b.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};b.storyName="MultiSelect компактный";const v=a=>{const[t,l]=u.useState(a.value||[]),s=e=>{l(e),a.onChange&&a.onChange(e)};return n.jsx(o,{...a,value:t,onChange:s,children:c.map(e=>n.jsx(i,{value:e.value,label:e.label,disabled:e.disabled,children:n.jsx(p,{option:e})},e.value))})};v.args={label:"Скролл",scrollingItems:2};v.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};v.storyName="MultiSelect с настройкой скролла";const S=a=>{const[t,l]=u.useState(a.value||[]),s=e=>{l(e),a.onChange&&a.onChange(e)};return n.jsx(o,{...a,value:t,onChange:s,children:c.map(e=>n.jsx(i,{value:e.value,label:e.label,disabled:e.disabled,children:n.jsx(p,{option:e})},e.value))})};S.args={label:"Цвет success",color:k.success};S.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};S.storyName="MultiSelect в состоянии success";const C=a=>{const[t,l]=u.useState(a.value||[]),s=e=>{l(e),a.onChange&&a.onChange(e)};return n.jsx(o,{...a,value:t,onChange:s,children:c.map(e=>n.jsx(i,{value:e.value,label:e.label,disabled:e.disabled,children:n.jsx(p,{option:e})},e.value))})};C.args={label:"Цвет warning",color:k.warning};C.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};C.storyName="MultiSelect в состоянии warning";const M=a=>{const[t,l]=u.useState(a.value||[]),s=e=>{l(e),a.onChange&&a.onChange(e)};return n.jsx(o,{...a,value:t,onChange:s,children:c.map(e=>n.jsx(i,{value:e.value,label:e.label,disabled:e.disabled,children:n.jsx(p,{option:e})},e.value))})};M.args={label:"Цвет error",color:k.error};M.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};M.storyName="MultiSelect в состоянии error";const x=a=>{const[t,l]=u.useState(a.value||[]),s=e=>{l(e),a.onChange&&a.onChange(e)};return n.jsx(o,{...a,value:t,onChange:s})};x.args={label:"Пустой MultiSelect"};x.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};x.storyName="MultiSelect пустой";const y=a=>{const[t,l]=u.useState(a.value||[]),s=e=>{l(e),a.onChange&&a.onChange(e)};return n.jsx(o,{...a,value:t,onChange:s,children:c.map(({value:e,label:r,disabled:Ve})=>n.jsx(i,{value:e,label:r,disabled:Ve,className:ye.customOption,children:n.jsxs(O,{alignItems:"center",justifyContent:"space-between",width:"100%",children:[n.jsx(A,{}),n.jsxs(O,{flexDirection:"column",alignItems:"center",gap:"4px",children:[n.jsx(f,{variant:"Body1-Medium",children:r}),n.jsxs(f,{variant:"Caption",color:"success",children:["Дополнительное описание ",r]})]}),n.jsx(A,{})]})},e))})};y.args={label:"MultiSelect со стилизованными OptionItems"};y.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};y.storyName="MultiSelect со стилизованными OptionItems";const V=a=>{const[t,l]=u.useState(a.value||[]),s=e=>{l(e),a.onChange&&a.onChange(e)};return n.jsx(o,{...a,value:t,onChange:s,children:c.map(e=>n.jsx(i,{value:e.value,label:e.label,disabled:e.disabled,children:n.jsx(p,{option:e})},e.value))})};V.args={label:'MultiSelect с кнопкой "Выбрать все"',showSelectAll:!0};V.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};V.storyName="MultiSelect с выбором всех";const I=a=>{const[t,l]=u.useState(a.value||[]),s=e=>{l(e),a.onChange&&a.onChange(e)};return n.jsx(o,{...a,value:t,onChange:s,children:c.map(e=>n.jsx(i,{value:e.value,label:e.label,disabled:e.disabled,children:n.jsx(p,{option:e})},e.value))})};I.args={label:"MultiSelect с очисткой поиска при выборе",searchable:!0,clearSearchOnSelect:!0};I.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};I.storyName="MultiSelect с очисткой поиска";const w=a=>{const[t,l]=u.useState(a.value||["steel","aluminum"]),s=r=>{l(r),a.onChange&&a.onChange(r)},e=()=>{l([]),a.onReset&&a.onReset()};return n.jsx(o,{...a,value:t,onChange:s,onReset:e,reset:!0,children:c.map(r=>n.jsx(i,{value:r.value,label:r.label,disabled:r.disabled,children:n.jsx(p,{option:r})},r.value))})};w.args={label:"MultiSelect с кнопкой сброса"};w.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};w.storyName="MultiSelect с кнопкой сброса";var W,T,E;j.parameters={...j.parameters,docs:{...(W=j.parameters)==null?void 0:W.docs,source:{originalSource:`(args: IMultiSelectProps): JSX.Element => {
  const [value, setValue] = useState<Array<string | number>>(args.value || []);
  const handleChange = (newValue: Array<string | number>) => {
    setValue(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };
  const handleReset = () => {
    setValue([]);
    if (args.onReset) {
      args.onReset();
    }
  };
  return <MultiSelect {...args} value={value} onChange={handleChange} onReset={args.reset ? handleReset : undefined} reset={args.reset}>
      {options.map(option => <OptionItem key={option.value} value={option.value} label={option.label} disabled={option.disabled}>
          <OptionWithCheckbox option={option} />
        </OptionItem>)}
    </MultiSelect>;
}`,...(E=(T=j.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var R,N,J;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`(args: IMultiSelectProps): JSX.Element => {
  const [value, setValue] = useState<Array<string | number>>(args.value || []);
  const handleChange = (newValue: Array<string | number>) => {
    setValue(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };
  return <MultiSelect {...args} value={value} onChange={handleChange}>
      {options.map(option => <OptionItem key={option.value} value={option.value} label={option.label} disabled={option.disabled}>
          <OptionWithCheckbox option={option} />
        </OptionItem>)}
    </MultiSelect>;
}`,...(J=(N=d.parameters)==null?void 0:N.docs)==null?void 0:J.source}}};var P,X,B;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`(args: IMultiSelectProps): JSX.Element => {
  const [value, setValue] = useState<Array<string | number>>(args.value || []);
  const handleChange = (newValue: Array<string | number>) => {
    setValue(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };
  return <MultiSelect {...args} value={value} onChange={handleChange}>
      {options.map(option => <OptionItem key={option.value} value={option.value} label={option.label}>
          <OptionWithCheckbox option={option} />
        </OptionItem>)}
    </MultiSelect>;
}`,...(B=(X=h.parameters)==null?void 0:X.docs)==null?void 0:B.source}}};var _,D,z;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`(args: IMultiSelectProps): JSX.Element => {
  const [value, setValue] = useState<Array<string | number>>(args.value || ['aluminum']);
  const handleChange = (newValue: Array<string | number>) => {
    setValue(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
    action('onSelectionChange')(newValue);
  };
  return <MultiSelect {...args} value={value} onChange={handleChange}>
      {options.map(option => <OptionItem key={option.value} value={option.value} label={option.label} disabled={option.disabled}>
          <OptionWithCheckbox option={option} />
        </OptionItem>)}
    </MultiSelect>;
}`,...(z=(D=m.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var L,F,G;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`(args: IMultiSelectProps): JSX.Element => {
  const [value, setValue] = useState<Array<string | number>>(args.value || ['steel', 'aluminum', 'nickel', 'zinc']);
  const handleChange = (newValue: Array<string | number>) => {
    setValue(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };
  return <MultiSelect {...args} value={value} onChange={handleChange}>
      {options.map(option => <OptionItem key={option.value} value={option.value} label={option.label} disabled={option.disabled}>
          <OptionWithCheckbox option={option} />
        </OptionItem>)}
    </MultiSelect>;
}`,...(G=(F=g.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,Z,q;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`(args: IMultiSelectProps): JSX.Element => {
  const [value, setValue] = useState<Array<string | number>>(args.value || []);
  const handleChange = (newValue: Array<string | number>) => {
    setValue(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };
  return <MultiSelect {...args} value={value} onChange={handleChange}>
      {options.map(option => <OptionItem key={option.value} value={option.value} label={option.label} disabled={option.disabled}>
          <OptionWithCheckbox option={option} />
        </OptionItem>)}
    </MultiSelect>;
}`,...(q=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:q.source}}};var K,Q,U;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`(args: IMultiSelectProps): JSX.Element => {
  const [value, setValue] = useState<Array<string | number>>(args.value || []);
  const handleChange = (newValue: Array<string | number>) => {
    setValue(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };
  return <MultiSelect {...args} value={value} onChange={handleChange}>
      {options.map(option => <OptionItem key={option.value} value={option.value} label={option.label} disabled={option.disabled}>
          <OptionWithCheckbox option={option} />
        </OptionItem>)}
    </MultiSelect>;
}`,...(U=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,$,ee;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`(args: IMultiSelectProps): JSX.Element => {
  const [value, setValue] = useState<Array<string | number>>(args.value || []);
  const handleChange = (newValue: Array<string | number>) => {
    setValue(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };
  return <MultiSelect {...args} value={value} onChange={handleChange}>
      {options.map(option => <OptionItem key={option.value} value={option.value} label={option.label} disabled={option.disabled}>
          <OptionWithCheckbox option={option} />
        </OptionItem>)}
    </MultiSelect>;
}`,...(ee=($=S.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,ne,te;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`(args: IMultiSelectProps): JSX.Element => {
  const [value, setValue] = useState<Array<string | number>>(args.value || []);
  const handleChange = (newValue: Array<string | number>) => {
    setValue(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };
  return <MultiSelect {...args} value={value} onChange={handleChange}>
      {options.map(option => <OptionItem key={option.value} value={option.value} label={option.label} disabled={option.disabled}>
          <OptionWithCheckbox option={option} />
        </OptionItem>)}
    </MultiSelect>;
}`,...(te=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var le,se,re;M.parameters={...M.parameters,docs:{...(le=M.parameters)==null?void 0:le.docs,source:{originalSource:`(args: IMultiSelectProps): JSX.Element => {
  const [value, setValue] = useState<Array<string | number>>(args.value || []);
  const handleChange = (newValue: Array<string | number>) => {
    setValue(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };
  return <MultiSelect {...args} value={value} onChange={handleChange}>
      {options.map(option => <OptionItem key={option.value} value={option.value} label={option.label} disabled={option.disabled}>
          <OptionWithCheckbox option={option} />
        </OptionItem>)}
    </MultiSelect>;
}`,...(re=(se=M.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var oe,ue,ie;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`(args: IMultiSelectProps): JSX.Element => {
  const [value, setValue] = useState<Array<string | number>>(args.value || []);
  const handleChange = (newValue: Array<string | number>) => {
    setValue(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };
  return <MultiSelect {...args} value={value} onChange={handleChange}>
      {/* No options */}
    </MultiSelect>;
}`,...(ie=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:ie.source}}};var ce,pe,de;y.parameters={...y.parameters,docs:{...(ce=y.parameters)==null?void 0:ce.docs,source:{originalSource:`(args: IMultiSelectProps): JSX.Element => {
  const [value, setValue] = useState<Array<string | number>>(args.value || []);
  const handleChange = (newValue: Array<string | number>) => {
    setValue(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };
  return <MultiSelect {...args} value={value} onChange={handleChange}>
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
    </MultiSelect>;
}`,...(de=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var he,me,ge;V.parameters={...V.parameters,docs:{...(he=V.parameters)==null?void 0:he.docs,source:{originalSource:`(args: IMultiSelectProps): JSX.Element => {
  const [value, setValue] = useState<Array<string | number>>(args.value || []);
  const handleChange = (newValue: Array<string | number>) => {
    setValue(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };
  return <MultiSelect {...args} value={value} onChange={handleChange}>
      {options.map(option => <OptionItem key={option.value} value={option.value} label={option.label} disabled={option.disabled}>
          <OptionWithCheckbox option={option} />
        </OptionItem>)}
    </MultiSelect>;
}`,...(ge=(me=V.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var be,ve,Se;I.parameters={...I.parameters,docs:{...(be=I.parameters)==null?void 0:be.docs,source:{originalSource:`(args: IMultiSelectProps): JSX.Element => {
  const [value, setValue] = useState<Array<string | number>>(args.value || []);
  const handleChange = (newValue: Array<string | number>) => {
    setValue(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };
  return <MultiSelect {...args} value={value} onChange={handleChange}>
      {options.map(option => <OptionItem key={option.value} value={option.value} label={option.label} disabled={option.disabled}>
          <OptionWithCheckbox option={option} />
        </OptionItem>)}
    </MultiSelect>;
}`,...(Se=(ve=I.parameters)==null?void 0:ve.docs)==null?void 0:Se.source}}};var Ce,Me,xe;w.parameters={...w.parameters,docs:{...(Ce=w.parameters)==null?void 0:Ce.docs,source:{originalSource:`(args: IMultiSelectProps): JSX.Element => {
  const [value, setValue] = useState<Array<string | number>>(args.value || ['steel', 'aluminum']);
  const handleChange = (newValue: Array<string | number>) => {
    setValue(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };
  const handleReset = () => {
    setValue([]);
    if (args.onReset) {
      args.onReset();
    }
  };
  return <MultiSelect {...args} value={value} onChange={handleChange} onReset={handleReset} reset>
      {options.map(option => <OptionItem key={option.value} value={option.value} label={option.label} disabled={option.disabled}>
          <OptionWithCheckbox option={option} />
        </OptionItem>)}
    </MultiSelect>;
}`,...(xe=(Me=w.parameters)==null?void 0:Me.docs)==null?void 0:xe.source}}};const ta=["MultiSelectDefault","MultiSelectWithSearch","MultiSelectDisabled","MultiSelectSelectionCallback","MultiSelectWithTags","MultiSelectCompact","MultiSelectScrollingItems","MultiSelectSuccess","MultiSelectWarning","MultiSelectError","MultiSelectEmpty","MultiSelectWithCustomOptions","MultiSelectWithSelectAll","MultiSelectWithClearSearch","MultiSelectWithReset"];export{b as MultiSelectCompact,j as MultiSelectDefault,h as MultiSelectDisabled,x as MultiSelectEmpty,M as MultiSelectError,v as MultiSelectScrollingItems,m as MultiSelectSelectionCallback,S as MultiSelectSuccess,C as MultiSelectWarning,I as MultiSelectWithClearSearch,y as MultiSelectWithCustomOptions,w as MultiSelectWithReset,d as MultiSelectWithSearch,V as MultiSelectWithSelectAll,g as MultiSelectWithTags,ta as __namedExportsOrder,na as default};
