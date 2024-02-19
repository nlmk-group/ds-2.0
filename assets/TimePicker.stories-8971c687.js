import{j as u,a as ce}from"./clsx.m-3764cf42.js";import{r as o}from"./index-f1f749bf.js";import{a5 as he,a6 as me,a7 as de,a4 as s,f as ge}from"./index-f014e98c.js";import"./index-ec455f54.js";import"./index-095d5581.js";import"./index-e99519f1.js";import"./index-147655d7.js";import"./index-fb030d50.js";import"./index-c9e69acb.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-bc089e17.js";import{a as pe}from"./argsTypes-e2c854a8.js";import{a as le}from"./chunk-WFFRPTHA-a68c42c5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./get-78cac09e.js";import"./index-c1da5c13.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";var Te=6e4;function ie(e,a){he(2,arguments);var t=de(a);return me(e,t*Te)}const Ce="_wrapper_m24fi_1",Ve={wrapper:Ce},ve=e=>u("div",{className:Ve.wrapper,children:e()}),Ne={title:"Components/TimePicker/Stories",component:s,decorators:[ve],parameters:{actions:{argTypesRegex:"^on.*"}},argTypes:pe},c=e=>{const[a,t]=o.useState(new Date);return u(s,{value:a,...e,onChange:n=>{t(n),e.onChange&&e.onChange(n)}})},h=e=>{const[a,t]=o.useState(new Date);return u(s,{value:a,label:"Время",...e,onChange:n=>{t(n),e.onChange&&e.onChange(n)}})},m=e=>{const[a,t]=o.useState(new Date);return u(s,{value:a,disabled:!0,...e,onChange:n=>{t(n),e.onChange&&e.onChange(n)}})},d=e=>{const[a,t]=o.useState(new Date);return u(s,{value:a,disabledPanel:!0,...e,onChange:n=>{t(n),e.onChange&&e.onChange(n)}})},g=e=>{const[a,t]=o.useState(new Date);return u(s,{value:a,type:"timeWithSeconds",...e,onChange:n=>{t(n),e.onChange&&e.onChange(n)}})},p=e=>{const[a,t]=o.useState(new Date);return u(s,{value:a,enabledMinuteFrom:()=>32,enabledMinuteTo:()=>59,...e,onChange:i=>{t(i),e.onChange&&e.onChange(i)}})},T=e=>{const[a,t]=o.useState(new Date);return u(s,{value:a,enabledHourFrom:()=>2,enabledHourTo:()=>9,...e,onChange:i=>{t(i),e.onChange&&e.onChange(i)}})},C=e=>{const[a,t]=o.useState(new Date);return u(s,{value:a,isOpenOnFocus:!0,...e,onChange:n=>{t(n),e.onChange&&e.onChange(n)}})},V=e=>{const[a,t]=o.useState(new Date);return u(s,{value:a,withIcon:!1,...e,onChange:n=>{t(n),e.onChange&&e.onChange(n)}})},v=e=>{const[a,t]=o.useState(!1),[r,n]=o.useState(new Date);return ce("div",{children:[u(s,{type:"timeWithSeconds",label:"Время",pseudo:a,value:r,...e,onChange:i=>{n(i),e.onChange&&e.onChange(i)}}),u(ge,{style:{marginTop:"10px"},onClick:()=>t(!a),children:"Переключить"})]})},P=e=>{const[a,t]=o.useState(new Date);return u(s,{value:a,withPicker:!1,...e,onChange:n=>{t(n),e.onChange&&e.onChange(n)}})},S=e=>{const[a,t]=o.useState({valueFrom:new Date,valueTo:ie(new Date,10)}),r=(n,l)=>{le("изменен период времени")(n,l),t({valueFrom:n,valueTo:l})};return u(s,{type:"period",valueFrom:a.valueFrom,valueTo:a.valueTo,onPeriodChange:r})},D=e=>{const[a,t]=o.useState({valueFrom:new Date,valueTo:ie(new Date,10)}),r=(n,l)=>{le("изменен период времени")(n,l),t({valueFrom:n,valueTo:l})};return u(s,{type:"periodWithSeconds",valueFrom:a.valueFrom,valueTo:a.valueTo,onPeriodChange:r})};var w,f,k;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} {...argTypes} onChange={handleValueChange} />;
}`,...(k=(f=c.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var y,F,b;h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} label="Время" {...argTypes} onChange={handleValueChange} />;
}`,...(b=(F=h.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var E,W,O;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} disabled={true} {...argTypes} onChange={handleValueChange} />;
}`,...(O=(W=m.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var I,J,X;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} disabledPanel={true} {...argTypes} onChange={handleValueChange} />;
}`,...(X=(J=d.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var M,x,_;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} type="timeWithSeconds" {...argTypes} onChange={handleValueChange} />;
}`,...(_=(x=g.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var H,B,L;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const func = (): any => {
    return 32;
  };
  const funcOne = (): any => {
    return 59;
  };
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} enabledMinuteFrom={func} enabledMinuteTo={funcOne} {...argTypes} onChange={handleValueChange} />;
}`,...(L=(B=p.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var N,j,A;T.parameters={...T.parameters,docs:{...(N=T.parameters)==null?void 0:N.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const func = (): any => {
    return 2;
  };
  const funcOne = (): any => {
    return 9;
  };
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} enabledHourFrom={func} enabledHourTo={funcOne} {...argTypes} onChange={handleValueChange} />;
}`,...(A=(j=T.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var q,R,U;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} isOpenOnFocus={true} {...argTypes} onChange={handleValueChange} />;
}`,...(U=(R=C.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var z,G,K;V.parameters={...V.parameters,docs:{...(z=V.parameters)==null?void 0:z.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} withIcon={false} {...argTypes} onChange={handleValueChange} />;
}`,...(K=(G=V.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,Y,Z;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [save, setSave] = useState(false);
  const [innerValue, setInnerValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setInnerValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <div>
      <TimePicker type="timeWithSeconds" label="Время" pseudo={save} value={innerValue} {...argTypes} onChange={handleValueChange} />
      <Button style={{
      marginTop: '10px'
    }} onClick={() => setSave(!save)}>
        Переключить
      </Button>
    </div>;
}`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ne;P.parameters={...P.parameters,docs:{...($=P.parameters)==null?void 0:$.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} withPicker={false} {...argTypes} onChange={handleValueChange} />;
}`,...(ne=(ee=P.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var ae,te,re;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [values, setValues] = useState<{
    valueFrom?: Date;
    valueTo?: Date;
  }>({
    valueFrom: new Date(),
    valueTo: addMinutes(new Date(), 10)
  });
  const handlePeriodChange = (valueFrom: Date | undefined, valueTo: Date | undefined) => {
    action('изменен период времени')(valueFrom, valueTo);
    setValues({
      valueFrom,
      valueTo
    });
  };
  return <TimePicker type="period" valueFrom={values.valueFrom} valueTo={values.valueTo} onPeriodChange={handlePeriodChange} />;
}`,...(re=(te=S.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ue,oe,se;D.parameters={...D.parameters,docs:{...(ue=D.parameters)==null?void 0:ue.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [values, setValues] = useState<{
    valueFrom?: Date;
    valueTo?: Date;
  }>({
    valueFrom: new Date(),
    valueTo: addMinutes(new Date(), 10)
  });
  const handlePeriodChange = (valueFrom: Date | undefined, valueTo: Date | undefined) => {
    action('изменен период времени')(valueFrom, valueTo);
    setValues({
      valueFrom,
      valueTo
    });
  };
  return <TimePicker type="periodWithSeconds" valueFrom={values.valueFrom} valueTo={values.valueTo} onPeriodChange={handlePeriodChange} />;
}`,...(se=(oe=D.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};const je=["TimePickerDefault","TimePickerWithLabel","DisabledTimePicker","TimePickerWithDisabledPanel","TimePickerWithSeconds","EnabledMinutesFromTo","EnabledHoursFromTo","OpenTimePickerOnInputFocus","TimePickerWithoutIcon","TimePickerWithPseudo","TimePickerWithoutPicker","TimePickerPeriod","TimePickerPeriodWithSeconds"];export{m as DisabledTimePicker,T as EnabledHoursFromTo,p as EnabledMinutesFromTo,C as OpenTimePickerOnInputFocus,c as TimePickerDefault,S as TimePickerPeriod,D as TimePickerPeriodWithSeconds,d as TimePickerWithDisabledPanel,h as TimePickerWithLabel,v as TimePickerWithPseudo,g as TimePickerWithSeconds,V as TimePickerWithoutIcon,P as TimePickerWithoutPicker,je as __namedExportsOrder,Ne as default};
