import{j as a,r as i}from"./iframe-D1ppCfJL.js";import{c as k}from"./colorsMapping-C6bFIk14.js";import{s as E}from"./sizeMappingInput-XXScYzk1.js";import{B as w}from"./index-D1MtTpbs.js";import{C as R}from"./index-_EnS4SPv.js";import{M as o}from"./index-CHKV4Xzj.js";import{O as u}from"./index-D3y4eWrN.js";import{T as f}from"./index-B8OV2sj9.js";import{a as N}from"./argsTypes-B1cH_Gd8.js";import{d as A}from"./index-1Ia9d37J.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./16-Dg_oBXFF.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./generateUUID-M57HTP56.js";import"./index-BuboyXZl.js";import"./index-CskC-lf5.js";import"./index-pBOwR2Sr.js";import"./useFloatingReferenceSync-_s1uppib.js";import"./index-BAWCPbpv.js";import"./types-TdnjS80C.js";import"./index-BkONTIs-.js";import"./index-DTDhhVJl.js";import"./floating-ui.react-DKQvXyy0.js";import"./index-DQiorVga.js";import"./24-DvGStvE4.js";import"./32-DzcHwvay.js";import"./24-Cp8l4Ntb.js";import"./24-CXzdah1X.js";import"./24-eQHncE30.js";import"./24-CRTRQ8Ly.js";import"./24-C2zrmoH8.js";import"./24-DEoWbW1a.js";import"./24-DTwfOo-x.js";import"./24-Dwzv70HG.js";import"./24-hEGWduDH.js";import"./16-CJBceTE3.js";import"./24-BoJlH0P7.js";import"./24-DeVNRByj.js";import"./16-DDpVoX5v.js";import"./16-DyMPAZyw.js";import"./16-m76_vWtK.js";import"./16-CtdeCqSX.js";const _="MultiSelect-module__wrapper___Yjvxi",J="MultiSelect-module__customOption___27eL7",W={wrapper:_,customOption:J},{action:P}=__STORYBOOK_MODULE_ACTIONS__,X=n=>a.jsx("div",{className:W.wrapper,children:a.jsx(n,{})}),c=[{value:"steel",label:"High-Strength Low-Alloy Steel"},{value:"aluminum",label:"Aluminum"},{value:"copper",label:"Copper",disabled:!0},{value:"nickel",label:"Nickel"},{value:"zinc",label:"Zinc"},{value:"lead",label:"Lead"},{value:"tin",label:"Tin"}],p=({option:n,isSelected:t=!1})=>a.jsxs(w,{alignItems:"center",gap:"8px",children:[a.jsx(R,{checked:t,disabled:n.disabled,onChange:()=>{},style:{pointerEvents:"none"}}),a.jsx(f,{variant:"Body1-Medium",children:n.label})]}),ke={title:"Components/MultiSelect/Stories",component:o,argTypes:N,decorators:[X],parameters:{actions:{argTypesRegex:"^on.*"}}},j=n=>{const[t,l]=i.useState(n.value||[]),s=r=>{l(r),n.onChange&&n.onChange(r)},e=()=>{l([]),n.onReset&&n.onReset()};return a.jsx(o,{...n,value:t,onChange:s,onReset:n.reset?e:void 0,reset:n.reset,children:c.map(r=>a.jsx(u,{value:r.value,label:r.label,disabled:r.disabled,children:a.jsx(p,{option:r})},r.value))})};j.args={label:"MultiSelect по умолчанию"};j.storyName="MultiSelect по умолчанию";const d=n=>{const[t,l]=i.useState(n.value||[]),s=e=>{l(e),n.onChange&&n.onChange(e)};return a.jsx(o,{...n,value:t,onChange:s,children:c.map(e=>a.jsx(u,{value:e.value,label:e.label,disabled:e.disabled,children:a.jsx(p,{option:e})},e.value))})};d.args={label:"MultiSelect с поиском",searchable:!0};d.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};d.storyName="MultiSelect с поиском";const h=n=>{const[t,l]=i.useState(n.value||[]),s=e=>{l(e),n.onChange&&n.onChange(e)};return a.jsx(o,{...n,value:t,onChange:s,children:c.map(e=>a.jsx(u,{value:e.value,label:e.label,children:a.jsx(p,{option:e})},e.value))})};h.args={label:"Disabled",disabled:!0};h.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};h.storyName="Заблокированный MultiSelect";const m=n=>{const[t,l]=i.useState(n.value||["aluminum"]),s=e=>{l(e),n.onChange&&n.onChange(e),P("onSelectionChange")(e)};return a.jsx(o,{...n,value:t,onChange:s,children:c.map(e=>a.jsx(u,{value:e.value,label:e.label,disabled:e.disabled,children:a.jsx(p,{option:e})},e.value))})};m.args={label:"Обработчик при выборе"};m.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};m.storyName="MultiSelect с коллбэком при выборе";const g=n=>{const[t,l]=i.useState(n.value||["steel","aluminum","nickel","zinc"]),s=e=>{l(e),n.onChange&&n.onChange(e)};return a.jsx(o,{...n,value:t,onChange:s,children:c.map(e=>a.jsx(u,{value:e.value,label:e.label,disabled:e.disabled,children:a.jsx(p,{option:e})},e.value))})};g.args={label:"MultiSelect с тегами"};g.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};g.storyName="MultiSelect с тегами";const b=n=>{const[t,l]=i.useState(n.value||[]),s=e=>{l(e),n.onChange&&n.onChange(e)};return a.jsx(o,{...n,value:t,onChange:s,children:c.map(e=>a.jsx(u,{value:e.value,label:e.label,disabled:e.disabled,children:a.jsx(p,{option:e})},e.value))})};b.args={label:"Размер s",size:E.s};b.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};b.storyName="MultiSelect компактный";const v=n=>{const[t,l]=i.useState(n.value||[]),s=e=>{l(e),n.onChange&&n.onChange(e)};return a.jsx(o,{...n,value:t,onChange:s,children:c.map(e=>a.jsx(u,{value:e.value,label:e.label,disabled:e.disabled,children:a.jsx(p,{option:e})},e.value))})};v.args={label:"Скролл",scrollingItems:2};v.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};v.storyName="MultiSelect с настройкой скролла";const S=n=>{const[t,l]=i.useState(n.value||[]),s=e=>{l(e),n.onChange&&n.onChange(e)};return a.jsx(o,{...n,value:t,onChange:s,children:c.map(e=>a.jsx(u,{value:e.value,label:e.label,disabled:e.disabled,children:a.jsx(p,{option:e})},e.value))})};S.args={label:"Цвет success",color:k.success};S.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};S.storyName="MultiSelect в состоянии success";const C=n=>{const[t,l]=i.useState(n.value||[]),s=e=>{l(e),n.onChange&&n.onChange(e)};return a.jsx(o,{...n,value:t,onChange:s,children:c.map(e=>a.jsx(u,{value:e.value,label:e.label,disabled:e.disabled,children:a.jsx(p,{option:e})},e.value))})};C.args={label:"Цвет warning",color:k.warning};C.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};C.storyName="MultiSelect в состоянии warning";const M=n=>{const[t,l]=i.useState(n.value||[]),s=e=>{l(e),n.onChange&&n.onChange(e)};return a.jsx(o,{...n,value:t,onChange:s,children:c.map(e=>a.jsx(u,{value:e.value,label:e.label,disabled:e.disabled,children:a.jsx(p,{option:e})},e.value))})};M.args={label:"Цвет error",color:k.error};M.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};M.storyName="MultiSelect в состоянии error";const x=n=>{const[t,l]=i.useState(n.value||[]),s=e=>{l(e),n.onChange&&n.onChange(e)};return a.jsx(o,{...n,value:t,onChange:s})};x.args={label:"Пустой MultiSelect"};x.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};x.storyName="MultiSelect пустой";const y=n=>{const[t,l]=i.useState(n.value||[]),s=e=>{l(e),n.onChange&&n.onChange(e)};return a.jsx(o,{...n,value:t,onChange:s,children:c.map(({value:e,label:r,disabled:T})=>a.jsx(u,{value:e,label:r,disabled:T,className:W.customOption,children:a.jsxs(w,{alignItems:"center",justifyContent:"space-between",width:"100%",children:[a.jsx(A,{}),a.jsxs(w,{flexDirection:"column",alignItems:"center",gap:"4px",children:[a.jsx(f,{variant:"Body1-Medium",children:r}),a.jsxs(f,{variant:"Caption",color:"success",children:["Дополнительное описание ",r]})]}),a.jsx(A,{})]})},e))})};y.args={label:"MultiSelect со стилизованными OptionItems"};y.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};y.storyName="MultiSelect со стилизованными OptionItems";const V=n=>{const[t,l]=i.useState(n.value||[]),s=e=>{l(e),n.onChange&&n.onChange(e)};return a.jsx(o,{...n,value:t,onChange:s,children:c.map(e=>a.jsx(u,{value:e.value,label:e.label,disabled:e.disabled,children:a.jsx(p,{option:e})},e.value))})};V.args={label:'MultiSelect с кнопкой "Выбрать все"',showSelectAll:!0};V.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};V.storyName="MultiSelect с выбором всех";const I=n=>{const[t,l]=i.useState(n.value||[]),s=e=>{l(e),n.onChange&&n.onChange(e)};return a.jsx(o,{...n,value:t,onChange:s,children:c.map(e=>a.jsx(u,{value:e.value,label:e.label,disabled:e.disabled,children:a.jsx(p,{option:e})},e.value))})};I.args={label:"MultiSelect с очисткой поиска при выборе",searchable:!0,clearSearchOnSelect:!0};I.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};I.storyName="MultiSelect с очисткой поиска";const O=n=>{const[t,l]=i.useState(n.value||["steel","aluminum"]),s=r=>{l(r),n.onChange&&n.onChange(r)},e=()=>{l([]),n.onReset&&n.onReset()};return a.jsx(o,{...n,value:t,onChange:s,onReset:e,reset:!0,children:c.map(r=>a.jsx(u,{value:r.value,label:r.label,disabled:r.disabled,children:a.jsx(p,{option:r})},r.value))})};O.args={label:"MultiSelect с кнопкой сброса"};O.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};O.storyName="MultiSelect с кнопкой сброса";j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`(args: IMultiSelectProps): JSX.Element => {
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
}`,...j.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: IMultiSelectProps): JSX.Element => {
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
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`(args: IMultiSelectProps): JSX.Element => {
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
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: IMultiSelectProps): JSX.Element => {
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
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(args: IMultiSelectProps): JSX.Element => {
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
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`(args: IMultiSelectProps): JSX.Element => {
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
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`(args: IMultiSelectProps): JSX.Element => {
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
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`(args: IMultiSelectProps): JSX.Element => {
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
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`(args: IMultiSelectProps): JSX.Element => {
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
}`,...C.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`(args: IMultiSelectProps): JSX.Element => {
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
}`,...M.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`(args: IMultiSelectProps): JSX.Element => {
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
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`(args: IMultiSelectProps): JSX.Element => {
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
}`,...y.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`(args: IMultiSelectProps): JSX.Element => {
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
}`,...V.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`(args: IMultiSelectProps): JSX.Element => {
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
}`,...I.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`(args: IMultiSelectProps): JSX.Element => {
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
}`,...O.parameters?.docs?.source}}};const Ae=["MultiSelectDefault","MultiSelectWithSearch","MultiSelectDisabled","MultiSelectSelectionCallback","MultiSelectWithTags","MultiSelectCompact","MultiSelectScrollingItems","MultiSelectSuccess","MultiSelectWarning","MultiSelectError","MultiSelectEmpty","MultiSelectWithCustomOptions","MultiSelectWithSelectAll","MultiSelectWithClearSearch","MultiSelectWithReset"];export{b as MultiSelectCompact,j as MultiSelectDefault,h as MultiSelectDisabled,x as MultiSelectEmpty,M as MultiSelectError,v as MultiSelectScrollingItems,m as MultiSelectSelectionCallback,S as MultiSelectSuccess,C as MultiSelectWarning,I as MultiSelectWithClearSearch,y as MultiSelectWithCustomOptions,O as MultiSelectWithReset,d as MultiSelectWithSearch,V as MultiSelectWithSelectAll,g as MultiSelectWithTags,Ae as __namedExportsOrder,ke as default};
