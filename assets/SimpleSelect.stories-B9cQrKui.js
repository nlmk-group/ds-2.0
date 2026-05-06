import{j as t,r as p}from"./iframe-D_geb98U.js";import{c as w}from"./colorsMapping-C6bFIk14.js";import{s as M}from"./sizeMappingInput-XXScYzk1.js";import{B as T}from"./index-hZv1vyiY.js";import{O as c}from"./index-gGDdMD4Z.js";import{S as o}from"./index-BHIlvHWF.js";import{T as u}from"./index-DVKWK4-j.js";import{a as f}from"./argsTypes-CnufI8iF.js";import{e as O}from"./index-DXqbsWBL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-DzpyBbEs.js";import"./index-CV6hzqCP.js";import"./24-Cpo6jKx5.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-Dc0Smdiq.js";import"./index-DY6Wauvi.js";import"./generateUUID-M57HTP56.js";import"./index-C9yrXfLO.js";import"./index-DtINpL4z.js";import"./useFloatingReferenceSync-Uu7LJ-ip.js";import"./index-Ds2s981t.js";import"./types-TdnjS80C.js";import"./floating-ui.react-C_U8tQaz.js";import"./32-CJsTn9GR.js";import"./32-CSeewk7k.js";import"./24-Dks7beat.js";import"./24-wTI-a7Qj.js";import"./24-B20dUB8u.js";import"./24-ckbWkRdy.js";import"./24-8OlOIiot.js";import"./24-D4VquirR.js";import"./24-Dh3bHrWZ.js";import"./24-l18nGkor.js";import"./16-ytttYgy7.js";import"./24-CvT8JzoY.js";import"./24-Bgy5v27I.js";import"./16-CQHHA9le.js";import"./16-ZmyXGQ60.js";import"./16-Dy6XUum1.js";import"./16-CAqgkR1g.js";import"./16-B1x2jzVj.js";const R="SimpleSelect-module__wrapper___d4RGZ",E="SimpleSelect-module__customOption___fN8BE",B={wrapper:R,customOption:E},{action:N}=__STORYBOOK_MODULE_ACTIONS__,_=e=>t.jsx("div",{className:B.wrapper,children:t.jsx(e,{})}),d=[{value:"steel",label:"High-Strength Low-Alloy Steel"},{value:"aluminum",label:"Aluminum"},{value:"copper",label:"Copper",disabled:!0},{value:"nickel",label:"Nickel"},{value:"zinc",label:"Zinc"},{value:"lead",label:"Lead"},{value:"tin",label:"Tin"}],Ie={title:"Components/SimpleSelect/Stories",component:o,argTypes:f,decorators:[_],parameters:{actions:{argTypesRegex:"^on.*"}}},I=e=>{const[n,s]=p.useState(e.value||""),a=()=>{s(""),e.onReset&&e.onReset()};return t.jsx("div",{style:{padding:"50px"},children:t.jsx(o,{...e,value:n,onChange:l=>{s(l),e.onChange&&e.onChange(l)},onReset:e.reset?a:void 0,reset:e.reset,children:d.map(({value:l,label:r,disabled:i})=>t.jsx(c,{value:l,label:r,disabled:i,children:t.jsx(u,{variant:"Body1-Medium",children:r})},l))})})};I.args={label:"Select по умолчанию"};I.storyName="Select по умолчанию";const m=e=>{const[n,s]=p.useState(e.value||"");return t.jsx("div",{style:{padding:"50px"},children:t.jsx(o,{...e,value:n,onChange:a=>{s(a),e.onChange&&e.onChange(a)},children:d.map(({value:a,label:l,disabled:r})=>t.jsx(c,{value:a,label:l,disabled:r,children:t.jsx(u,{variant:"Body1-Medium",children:l})},a))})})};m.args={label:"Select с поиском",searchable:!0};m.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};m.storyName="Select с поиском";const g=e=>{const[n,s]=p.useState(e.value||"");return t.jsx("div",{style:{padding:"50px"},children:t.jsx(o,{...e,value:n,onChange:a=>{s(a),e.onChange&&e.onChange(a)},children:d.map(({value:a,label:l,disabled:r})=>t.jsx(c,{value:a,label:l,children:t.jsx(u,{variant:"Body1-Medium",children:l})},a))})})};g.args={label:"Disabled",disabled:!0};g.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};g.storyName="Заблокированный Select";const v=e=>{const[n,s]=p.useState(e.value||"apple");return t.jsx("div",{style:{padding:"50px"},children:t.jsx(o,{...e,value:n,onChange:a=>{s(a),e.onChange&&e.onChange(a),N("onSelectionChange")(a)},children:d.map(({value:a,label:l,disabled:r})=>t.jsx(c,{value:a,label:l,children:t.jsx(u,{variant:"Body1-Medium",children:l})},a))})})};v.args={label:"Обработчик при выборе"};v.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};v.storyName="Select с коллбэком при выборе";const S=e=>{const[n,s]=p.useState(e.value||"");return t.jsx("div",{style:{padding:"50px"},children:t.jsx(o,{...e,value:n,onChange:a=>{s(a),e.onChange&&e.onChange(a)},children:d.map(({value:a,label:l,disabled:r})=>t.jsx(c,{value:a,label:l,children:t.jsx(u,{variant:"Body1-Medium",children:l})},a))})})};S.args={label:"Размер s",size:M.s};S.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};S.storyName="Select компактный";const h=e=>{const[n,s]=p.useState(e.value||"");return t.jsx("div",{style:{padding:"50px"},children:t.jsx(o,{...e,value:n,onChange:a=>{s(a),e.onChange&&e.onChange(a)},children:d.map(({value:a,label:l,disabled:r})=>t.jsx(c,{value:a,label:l,children:t.jsx(u,{variant:"Body1-Medium",children:l})},a))})})};h.args={label:"Скролл",scrollingItems:2};h.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};h.storyName="Select с настройкой скролла";const y=e=>{const[n,s]=p.useState(e.value||"");return t.jsx("div",{style:{padding:"50px"},children:t.jsx(o,{...e,value:n,onChange:a=>{s(a),e.onChange&&e.onChange(a)},children:d.map(({value:a,label:l,disabled:r})=>t.jsx(c,{value:a,label:l,children:t.jsx(u,{variant:"Body1-Medium",children:l})},a))})})};y.args={label:"Цвет success",color:w.success};y.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};y.storyName="Select в состоянии success";const b=e=>{const[n,s]=p.useState(e.value||"");return t.jsx("div",{style:{padding:"50px"},children:t.jsx(o,{...e,value:n,onChange:a=>{s(a),e.onChange&&e.onChange(a)},children:d.map(({value:a,label:l,disabled:r})=>t.jsx(c,{value:a,label:l,children:t.jsx(u,{variant:"Body1-Medium",children:l})},a))})})};b.args={label:"Цвет warning",color:w.warning};b.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};b.storyName="Select в состоянии warning";const C=e=>{const[n,s]=p.useState(e.value||"");return t.jsx("div",{style:{padding:"50px"},children:t.jsx(o,{...e,value:n,onChange:a=>{s(a),e.onChange&&e.onChange(a)},children:d.map(({value:a,label:l,disabled:r})=>t.jsx(c,{value:a,label:l,children:t.jsx(u,{variant:"Body1-Medium",children:l})},a))})})};C.args={label:"Цвет error",color:w.error};C.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};C.storyName="Select в состоянии error";const x=e=>{const[n,s]=p.useState(e.value||"");return t.jsx("div",{style:{padding:"50px"},children:t.jsx(o,{...e,value:n,onChange:a=>{s(a),e.onChange&&e.onChange(a)}})})};x.args={label:"Пустой select"};x.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};x.storyName="Select пустой";const V=e=>{const[n,s]=p.useState(e.value||"");return t.jsx(o,{...e,value:n,onChange:a=>{s(a),e.onChange&&e.onChange(a)},children:d.map(({value:a,label:l,disabled:r})=>t.jsx(c,{value:a,label:l,disabled:r,className:B.customOption,children:t.jsxs(T,{alignItems:"center",justifyContent:"space-between",width:"100%",children:[t.jsx(O,{}),t.jsxs(T,{flexDirection:"column",alignItems:"center",gap:"4px",children:[t.jsx(u,{variant:"Body1-Medium",children:l}),t.jsxs(u,{variant:"Caption",color:"success",children:["Дополнительное описание ",l]})]}),t.jsx(O,{})]})},a))})};V.args={label:"Select со стилизованными OptionItems"};V.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};V.storyName="Select со стилизованными OptionItems";const j=e=>{const[n,s]=p.useState("10"),a=[10,20,30,50,100],l=i=>i?`${Number(i)} записей на странице`:"",r=()=>{s(""),e.onReset&&e.onReset()};return t.jsx(o,{...e,value:n,displayValue:l(n),onChange:i=>{s(i.toString()),e.onChange&&e.onChange(i)},onReset:r,reset:!0,label:"Количество записей",children:a.map(i=>t.jsx(c,{value:i.toString(),label:i.toString(),children:t.jsxs(u,{variant:"Body1-Medium",children:[i," записей"]})},i))})};j.args={label:"Select с кастомным displayValue"};j.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};j.storyName="Select с кастомным displayValue";I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...I.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...x.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...V.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`(args: ISelectProps): JSX.Element => {
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
}`,...j.parameters?.docs?.source}}};const we=["SelectDefault","SelectWithSearch","SelectDisabled","SelectWithSelectionCallback","SelectCompact","SelectScrollingItems","SelectSuccess","SelectWarning","SelectError","SelectEmpty","SelectWithCustomOptions","SelectWithDisplayValue"];export{S as SelectCompact,I as SelectDefault,g as SelectDisabled,x as SelectEmpty,C as SelectError,h as SelectScrollingItems,y as SelectSuccess,b as SelectWarning,V as SelectWithCustomOptions,j as SelectWithDisplayValue,m as SelectWithSearch,v as SelectWithSelectionCallback,we as __namedExportsOrder,Ie as default};
