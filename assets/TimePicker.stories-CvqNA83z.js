import{j as s}from"./jsx-runtime-BRNY0I4F.js";import{r as o}from"./index-Bnop-kX6.js";import{aN as ce,aO as me,aP as he,aH as u,B as de}from"./index-CxYSwmcB.js";import"./generateUUID-BGENHwlB.js";import"./index-CEyYlgyG.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-B79NNBmL.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-B0dtJOWw.js";import"./index-Br4tp0-d.js";import"./32-DySMCdgK.js";import{a as pe}from"./argsTypes-Be-OeByn.js";import{a as le}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./index-D0sJu8id.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./index-B5g4YLzC.js";import"./v4-CQkTLCs1.js";function ge(e,n){const t=+ce(e);return me(e,t+n)}function ie(e,n){return ge(e,n*he)}const Te="_wrapper_1p2mb_1",Ce={wrapper:Te},ve=e=>s.jsx("div",{className:Ce.wrapper,children:s.jsx(e,{})}),Le={title:"Components/TimePicker/Stories",component:u,decorators:[ve],parameters:{actions:{argTypesRegex:"^on.*"}},argTypes:pe},c=e=>{const[n,t]=o.useState(new Date),r=a=>{t(a),e.onChange&&e.onChange(a)};return s.jsx(u,{value:n,...e,onChange:r})},m=e=>{const[n,t]=o.useState(new Date),r=a=>{t(a),e.onChange&&e.onChange(a)};return s.jsx(u,{value:n,label:"Время",...e,onChange:r})},h=e=>{const[n,t]=o.useState(new Date),r=a=>{t(a),e.onChange&&e.onChange(a)};return s.jsx(u,{value:n,disabled:!0,...e,onChange:r})},d=e=>{const[n,t]=o.useState(new Date),r=a=>{t(a),e.onChange&&e.onChange(a)};return s.jsx(u,{value:n,disabledPanel:!0,...e,onChange:r})},p=e=>{const[n,t]=o.useState(new Date),r=a=>{t(a),e.onChange&&e.onChange(a)};return s.jsx(u,{value:n,type:"timeWithSeconds",...e,onChange:r})},g=e=>{const[n,t]=o.useState(new Date),r=()=>32,a=()=>59,l=i=>{t(i),e.onChange&&e.onChange(i)};return s.jsx(u,{value:n,enabledMinuteFrom:r,enabledMinuteTo:a,...e,onChange:l})},T=e=>{const[n,t]=o.useState(new Date),r=()=>2,a=()=>9,l=i=>{t(i),e.onChange&&e.onChange(i)};return s.jsx(u,{value:n,enabledHourFrom:r,enabledHourTo:a,...e,onChange:l})},C=e=>{const[n,t]=o.useState(new Date),r=a=>{t(a),e.onChange&&e.onChange(a)};return s.jsx(u,{value:n,isOpenOnFocus:!0,...e,onChange:r})},v=e=>{const[n,t]=o.useState(new Date),r=a=>{t(a),e.onChange&&e.onChange(a)};return s.jsx(u,{value:n,withIcon:!1,...e,onChange:r})},V=e=>{const[n,t]=o.useState(!1),[r,a]=o.useState(new Date),l=i=>{a(i),e.onChange&&e.onChange(i)};return s.jsxs("div",{children:[s.jsx(u,{type:"timeWithSeconds",label:"Время",pseudo:n,value:r,...e,onChange:l}),s.jsx(de,{style:{marginTop:"10px"},onClick:()=>t(!n),children:"Переключить"})]})},P=e=>{const[n,t]=o.useState(new Date),r=a=>{t(a),e.onChange&&e.onChange(a)};return s.jsx(u,{value:n,withPicker:!1,...e,onChange:r})},S=e=>{const[n,t]=o.useState({valueFrom:new Date,valueTo:ie(new Date,10)}),r=(a,l)=>{le("изменен период времени")(a,l),t({valueFrom:a,valueTo:l})};return s.jsx(u,{type:"period",valueFrom:n.valueFrom,valueTo:n.valueTo,onPeriodChange:r})},w=e=>{const[n,t]=o.useState({valueFrom:new Date,valueTo:ie(new Date,10)}),r=(a,l)=>{le("изменен период времени")(a,l),t({valueFrom:a,valueTo:l})};return s.jsx(u,{type:"periodWithSeconds",valueFrom:n.valueFrom,valueTo:n.valueTo,onPeriodChange:r})};var k,y,D;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} {...argTypes} onChange={handleValueChange} />;
}`,...(D=(y=c.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var f,F,b;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} label="Время" {...argTypes} onChange={handleValueChange} />;
}`,...(b=(F=m.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var x,W,E;h.parameters={...h.parameters,docs:{...(x=h.parameters)==null?void 0:x.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} disabled={true} {...argTypes} onChange={handleValueChange} />;
}`,...(E=(W=h.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var j,O,J;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} disabledPanel={true} {...argTypes} onChange={handleValueChange} />;
}`,...(J=(O=d.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var X,M,I;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} type="timeWithSeconds" {...argTypes} onChange={handleValueChange} />;
}`,...(I=(M=p.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var H,_,B;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
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
}`,...(B=(_=g.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var L,N,R;T.parameters={...T.parameters,docs:{...(L=T.parameters)==null?void 0:L.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
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
}`,...(R=(N=T.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var q,z,A;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} isOpenOnFocus={true} {...argTypes} onChange={handleValueChange} />;
}`,...(A=(z=C.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var G,K,Q;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} withIcon={false} {...argTypes} onChange={handleValueChange} />;
}`,...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,Y,Z;V.parameters={...V.parameters,docs:{...(U=V.parameters)==null?void 0:U.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
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
}`,...(Z=(Y=V.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ae;P.parameters={...P.parameters,docs:{...($=P.parameters)==null?void 0:$.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} withPicker={false} {...argTypes} onChange={handleValueChange} />;
}`,...(ae=(ee=P.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,te,re;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
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
}`,...(re=(te=S.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,oe,ue;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
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
}`,...(ue=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:ue.source}}};const Ne=["TimePickerDefault","TimePickerWithLabel","DisabledTimePicker","TimePickerWithDisabledPanel","TimePickerWithSeconds","EnabledMinutesFromTo","EnabledHoursFromTo","OpenTimePickerOnInputFocus","TimePickerWithoutIcon","TimePickerWithPseudo","TimePickerWithoutPicker","TimePickerPeriod","TimePickerPeriodWithSeconds"];export{h as DisabledTimePicker,T as EnabledHoursFromTo,g as EnabledMinutesFromTo,C as OpenTimePickerOnInputFocus,c as TimePickerDefault,S as TimePickerPeriod,w as TimePickerPeriodWithSeconds,d as TimePickerWithDisabledPanel,m as TimePickerWithLabel,V as TimePickerWithPseudo,p as TimePickerWithSeconds,v as TimePickerWithoutIcon,P as TimePickerWithoutPicker,Ne as __namedExportsOrder,Le as default};
