import{j as o}from"./jsx-runtime-BRNY0I4F.js";import{r as s}from"./index-Bnop-kX6.js";import{aO as se,aP as ue,aQ as ie,aG as u,B as le}from"./TreeList-biahPqpH.js";import"./generateUUID-C85qI4Bk.js";import"./index-lePHaZI9.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-Cy-FRK8M.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-cYFuzf0Y.js";import"./index-DokmLR-l.js";import"./32-D2mD275C.js";import{a as ce}from"./argsTypes-Be-OeByn.js";import{a as re}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./index-B5g4YLzC.js";import"./v4-CQkTLCs1.js";function me(e,n){const t=+se(e);return ue(e,t+n)}function oe(e,n){return me(e,n*ie)}const he="_wrapper_1p2mb_1",pe={wrapper:he},de=e=>o.jsx("div",{className:pe.wrapper,children:o.jsx(e,{})}),Me={title:"Components/TimePicker/Stories",component:u,decorators:[de],parameters:{actions:{argTypesRegex:"^on.*"}},argTypes:ce},c=e=>{const[n,t]=s.useState(new Date),r=a=>{e.onChange&&(t(a),e.onChange(a))};return o.jsx(u,{value:n,...e,onChange:r})};c.storyName="TimerPicker по умолчанию";const m=e=>{const[n,t]=s.useState(new Date),r=a=>{t(a),e.onChange&&e.onChange(a)};return o.jsx(u,{value:n,label:"Время",...e,onChange:r})};m.storyName="TimePicker с полем label";const h=e=>{const[n,t]=s.useState(new Date),r=a=>{t(a),e.onChange&&e.onChange(a)};return o.jsx(u,{value:n,disabled:!0,...e,onChange:r})};h.storyName="TimePicker в состоянии disabled";const p=e=>{const[n,t]=s.useState(new Date),r=a=>{t(a),e.onChange&&e.onChange(a)};return o.jsx(u,{value:n,type:"timeWithSeconds",...e,onChange:r})};p.storyName="TimePicker с опцией выбора секунд";const d=e=>{const[n,t]=s.useState(new Date),r=()=>32,a=()=>59,i=l=>{t(l),e.onChange&&e.onChange(l)};return o.jsx(u,{value:n,enabledMinuteFrom:r,enabledMinuteTo:a,...e,onChange:i})};d.storyName="TimePicker с включенным ограничением по выбору минут";const g=e=>{const[n,t]=s.useState(new Date),r=()=>2,a=()=>9,i=l=>{t(l),e.onChange&&e.onChange(l)};return o.jsx(u,{value:n,enabledHourFrom:r,enabledHourTo:a,...e,onChange:i})};g.storyName="TimePicker с включенным ограничением по выбору часов";const T=e=>{const[n,t]=s.useState(new Date),r=a=>{t(a),e.onChange&&e.onChange(a)};return o.jsx(u,{value:n,isOpenOnFocus:!0,...e,onChange:r})};T.storyName="TimePicker с опцией открытия панели при фокусе на поле ввода";const C=e=>{const[n,t]=s.useState(new Date),r=a=>{t(a),e.onChange&&e.onChange(a)};return o.jsx(u,{value:n,withIcon:!1,...e,onChange:r})};C.storyName="TimePicker без иконки";const v=e=>{const[n,t]=s.useState(!1),[r,a]=s.useState(new Date),i=l=>{a(l),e.onChange&&e.onChange(l)};return o.jsxs("div",{children:[o.jsx(u,{type:"timeWithSeconds",label:"Время",pseudo:n,value:r,...e,onChange:i}),o.jsx(le,{style:{marginTop:"10px"},onClick:()=>t(!n),children:"Переключить"})]})};v.storyName="TimePicker с кнопкой переключения на pseudo input";const V=e=>{const[n,t]=s.useState(new Date),r=a=>{t(a),e.onChange&&e.onChange(a)};return o.jsx(u,{value:n,withPicker:!1,...e,onChange:r})};V.storyName="TimePicker без панели выбора времени";const P=e=>{const[n,t]=s.useState({valueFrom:new Date,valueTo:oe(new Date,10)}),r=(a,i)=>{re("изменен период времени")(a,i),t({valueFrom:a,valueTo:i})};return o.jsx(u,{...e,type:"period",valueFrom:n.valueFrom,valueTo:n.valueTo,onPeriodChange:r})};P.storyName="TimePicker с возможностью выбора периода времени";const y=e=>{const[n,t]=s.useState({valueFrom:new Date,valueTo:oe(new Date,10)}),r=(a,i)=>{re("изменен период времени")(a,i),t({valueFrom:a,valueTo:i})};return o.jsx(u,{type:"periodWithSeconds",valueFrom:n.valueFrom,valueTo:n.valueTo,onPeriodChange:r})};y.storyName="TimePicker с возможностью выбора периода времени с секундами";var k,S,w;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    if (argTypes.onChange) {
      setValue(newValue);
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} {...argTypes} onChange={handleValueChange} />;
}`,...(w=(S=c.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var f,D,F;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} label="Время" {...argTypes} onChange={handleValueChange} />;
}`,...(F=(D=m.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var b,x,E;h.parameters={...h.parameters,docs:{...(b=h.parameters)==null?void 0:b.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} disabled={true} {...argTypes} onChange={handleValueChange} />;
}`,...(E=(x=h.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var W,j,O;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} type="timeWithSeconds" {...argTypes} onChange={handleValueChange} />;
}`,...(O=(j=p.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var N,J,X;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
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
}`,...(X=(J=d.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var M,I,H;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
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
}`,...(H=(I=g.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var _,B,L;T.parameters={...T.parameters,docs:{...(_=T.parameters)==null?void 0:_.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} isOpenOnFocus={true} {...argTypes} onChange={handleValueChange} />;
}`,...(L=(B=T.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var R,G,Q;C.parameters={...C.parameters,docs:{...(R=C.parameters)==null?void 0:R.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} withIcon={false} {...argTypes} onChange={handleValueChange} />;
}`,...(Q=(G=C.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var q,z,A;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
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
}`,...(A=(z=v.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var K,U,Y;V.parameters={...V.parameters,docs:{...(K=V.parameters)==null?void 0:K.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} withPicker={false} {...argTypes} onChange={handleValueChange} />;
}`,...(Y=(U=V.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,$,ee;P.parameters={...P.parameters,docs:{...(Z=P.parameters)==null?void 0:Z.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
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
  return <TimePicker {...argTypes} type="period" valueFrom={values.valueFrom} valueTo={values.valueTo} onPeriodChange={handlePeriodChange} />;
}`,...(ee=($=P.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,ne,te;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
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
}`,...(te=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const Ie=["TimePickerDefault","TimePickerWithLabel","DisabledTimePicker","TimePickerWithSeconds","EnabledMinutesFromTo","EnabledHoursFromTo","OpenTimePickerOnInputFocus","TimePickerWithoutIcon","TimePickerWithPseudo","TimePickerWithoutPicker","TimePickerPeriod","TimePickerPeriodWithSeconds"];export{h as DisabledTimePicker,g as EnabledHoursFromTo,d as EnabledMinutesFromTo,T as OpenTimePickerOnInputFocus,c as TimePickerDefault,P as TimePickerPeriod,y as TimePickerPeriodWithSeconds,m as TimePickerWithLabel,v as TimePickerWithPseudo,p as TimePickerWithSeconds,C as TimePickerWithoutIcon,V as TimePickerWithoutPicker,Ie as __namedExportsOrder,Me as default};
