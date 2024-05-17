import{j as u,a as ce}from"./jsx-runtime-2xDJh5tt.js";import{r as o}from"./index-CBqU2yxZ.js";import{am as he,an as me,ao as de,ag as s,B as ge}from"./index-2j3g-nq8.js";import"./generateUUID-CbWNkpu4.js";import"./index-YguXCR6_.js";import"./index-D60oXbFF.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import"./index-nWYpQihe.js";import"./index-DbX0JV5O.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-lhFT6koy.js";import"./index-DFeUewHl.js";import"./32-CjiFhZy5.js";import{a as pe}from"./argsTypes-CyaKMt9D.js";import{a as le}from"./chunk-WFFRPTHA-B5TewAtn.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx.m-CH7BE6MN.js";import"./index-BtM5VmRH.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-CMH8wQUv.js";import"./preview-errors-Dg5lG0lC.js";import"./index-DrFu-skq.js";function Te(e,a){const t=+he(e);return me(e,t+a)}function ie(e,a){return Te(e,a*de)}const Ce="_wrapper_1tr2g_1",Ve={wrapper:Ce},ve=e=>u("div",{className:Ve.wrapper,children:e()}),qe={title:"Components/TimePicker/Stories",component:s,decorators:[ve],parameters:{actions:{argTypesRegex:"^on.*"}},argTypes:pe},c=e=>{const[a,t]=o.useState(new Date);return u(s,{value:a,...e,onChange:n=>{t(n),e.onChange&&e.onChange(n)}})},h=e=>{const[a,t]=o.useState(new Date);return u(s,{value:a,label:"Время",...e,onChange:n=>{t(n),e.onChange&&e.onChange(n)}})},m=e=>{const[a,t]=o.useState(new Date);return u(s,{value:a,disabled:!0,...e,onChange:n=>{t(n),e.onChange&&e.onChange(n)}})},d=e=>{const[a,t]=o.useState(new Date);return u(s,{value:a,disabledPanel:!0,...e,onChange:n=>{t(n),e.onChange&&e.onChange(n)}})},g=e=>{const[a,t]=o.useState(new Date);return u(s,{value:a,type:"timeWithSeconds",...e,onChange:n=>{t(n),e.onChange&&e.onChange(n)}})},p=e=>{const[a,t]=o.useState(new Date);return u(s,{value:a,enabledMinuteFrom:()=>32,enabledMinuteTo:()=>59,...e,onChange:i=>{t(i),e.onChange&&e.onChange(i)}})},T=e=>{const[a,t]=o.useState(new Date);return u(s,{value:a,enabledHourFrom:()=>2,enabledHourTo:()=>9,...e,onChange:i=>{t(i),e.onChange&&e.onChange(i)}})},C=e=>{const[a,t]=o.useState(new Date);return u(s,{value:a,isOpenOnFocus:!0,...e,onChange:n=>{t(n),e.onChange&&e.onChange(n)}})},V=e=>{const[a,t]=o.useState(new Date);return u(s,{value:a,withIcon:!1,...e,onChange:n=>{t(n),e.onChange&&e.onChange(n)}})},v=e=>{const[a,t]=o.useState(!1),[r,n]=o.useState(new Date);return ce("div",{children:[u(s,{type:"timeWithSeconds",label:"Время",pseudo:a,value:r,...e,onChange:i=>{n(i),e.onChange&&e.onChange(i)}}),u(ge,{style:{marginTop:"10px"},onClick:()=>t(!a),children:"Переключить"})]})},P=e=>{const[a,t]=o.useState(new Date);return u(s,{value:a,withPicker:!1,...e,onChange:n=>{t(n),e.onChange&&e.onChange(n)}})},S=e=>{const[a,t]=o.useState({valueFrom:new Date,valueTo:ie(new Date,10)}),r=(n,l)=>{le("изменен период времени")(n,l),t({valueFrom:n,valueTo:l})};return u(s,{type:"period",valueFrom:a.valueFrom,valueTo:a.valueTo,onPeriodChange:r})},D=e=>{const[a,t]=o.useState({valueFrom:new Date,valueTo:ie(new Date,10)}),r=(n,l)=>{le("изменен период времени")(n,l),t({valueFrom:n,valueTo:l})};return u(s,{type:"periodWithSeconds",valueFrom:a.valueFrom,valueTo:a.valueTo,onPeriodChange:r})};var w,f,k;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
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
}`,...(O=(W=m.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var J,X,M;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} disabledPanel={true} {...argTypes} onChange={handleValueChange} />;
}`,...(M=(X=d.parameters)==null?void 0:X.docs)==null?void 0:M.source}}};var I,x,H;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} type="timeWithSeconds" {...argTypes} onChange={handleValueChange} />;
}`,...(H=(x=g.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};var _,B,j;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
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
}`,...(j=(B=p.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var L,A,N;T.parameters={...T.parameters,docs:{...(L=T.parameters)==null?void 0:L.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
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
}`,...(N=(A=T.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var R,q,z;C.parameters={...C.parameters,docs:{...(R=C.parameters)==null?void 0:R.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} isOpenOnFocus={true} {...argTypes} onChange={handleValueChange} />;
}`,...(z=(q=C.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var G,K,Q;V.parameters={...V.parameters,docs:{...(G=V.parameters)==null?void 0:G.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} withIcon={false} {...argTypes} onChange={handleValueChange} />;
}`,...(Q=(K=V.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,Y,Z;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
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
}`,...(se=(oe=D.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};const ze=["TimePickerDefault","TimePickerWithLabel","DisabledTimePicker","TimePickerWithDisabledPanel","TimePickerWithSeconds","EnabledMinutesFromTo","EnabledHoursFromTo","OpenTimePickerOnInputFocus","TimePickerWithoutIcon","TimePickerWithPseudo","TimePickerWithoutPicker","TimePickerPeriod","TimePickerPeriodWithSeconds"];export{m as DisabledTimePicker,T as EnabledHoursFromTo,p as EnabledMinutesFromTo,C as OpenTimePickerOnInputFocus,c as TimePickerDefault,S as TimePickerPeriod,D as TimePickerPeriodWithSeconds,d as TimePickerWithDisabledPanel,h as TimePickerWithLabel,v as TimePickerWithPseudo,g as TimePickerWithSeconds,V as TimePickerWithoutIcon,P as TimePickerWithoutPicker,ze as __namedExportsOrder,qe as default};
