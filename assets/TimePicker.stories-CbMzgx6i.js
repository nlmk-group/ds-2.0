import{j as s}from"./jsx-runtime-BTJTZTIL.js";import{r as o}from"./index-BcJSXhQi.js";import{a_ as ue,a$ as ie,b0 as le,aQ as u,B as ce}from"./TreeList-CgatSFr0.js";import"./generateUUID-CpKhmTry.js";import"./index-CzNzGEue.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-CaDFz05s.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-BZ5zMSTm.js";import"./index-C5rKoyII.js";import"./32-icvDJE6i.js";import{a as me}from"./argsTypes-C75KUjMB.js";import{a as se}from"./index-B-lxVbXh.js";import"./index-ChsGqxH_.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";import"./v4-CtRu48qb.js";function pe(e,n){const r=+ue(e);return ie(e,r+n)}function oe(e,n){return pe(e,n*le)}const he="_wrapper_1p2mb_1",de={wrapper:he},ge=e=>s.jsx("div",{className:de.wrapper,children:s.jsx(e,{})}),Be={title:"Components/TimePicker/Stories",component:u,decorators:[ge],parameters:{actions:{argTypesRegex:"^on.*"}},argTypes:me},l={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}},k=e=>{const[n,r]=o.useState(new Date),t=a=>{e.onChange&&(r(a),e.onChange(a))};return s.jsx(u,{value:n,...e,onChange:t})};k.storyName="TimerPicker по умолчанию";const m=e=>{const[n,r]=o.useState(new Date),t=a=>{r(a),e.onChange&&e.onChange(a)};return s.jsx(u,{value:n,label:"Время",...e,onChange:t})};m.storyName="TimePicker с полем label";m.parameters=l;const p=e=>{const[n,r]=o.useState(new Date),t=a=>{r(a),e.onChange&&e.onChange(a)};return s.jsx(u,{value:n,disabled:!0,...e,onChange:t})};p.storyName="TimePicker в состоянии disabled";p.parameters=l;const h=e=>{const[n,r]=o.useState(new Date),t=a=>{r(a),e.onChange&&e.onChange(a)};return s.jsx(u,{value:n,type:"timeWithSeconds",...e,onChange:t})};h.storyName="TimePicker с опцией выбора секунд";h.parameters=l;const d=e=>{const[n,r]=o.useState(new Date),t=()=>32,a=()=>59,i=c=>{r(c),e.onChange&&e.onChange(c)};return s.jsx(u,{value:n,enabledMinuteFrom:t,enabledMinuteTo:a,...e,onChange:i})};d.storyName="TimePicker с включенным ограничением по выбору минут";d.parameters=l;const g=e=>{const[n,r]=o.useState(new Date),t=()=>2,a=()=>9,i=c=>{r(c),e.onChange&&e.onChange(c)};return s.jsx(u,{value:n,enabledHourFrom:t,enabledHourTo:a,...e,onChange:i})};g.storyName="TimePicker с включенным ограничением по выбору часов";g.parameters=l;const T=e=>{const[n,r]=o.useState(new Date),t=a=>{r(a),e.onChange&&e.onChange(a)};return s.jsx(u,{value:n,isOpenOnFocus:!0,...e,onChange:t})};T.storyName="TimePicker с опцией открытия панели при фокусе на поле ввода";T.parameters=l;const C=e=>{const[n,r]=o.useState(new Date),t=a=>{r(a),e.onChange&&e.onChange(a)};return s.jsx(u,{value:n,withIcon:!1,...e,onChange:t})};C.storyName="TimePicker без иконки";C.parameters=l;const v=e=>{const[n,r]=o.useState(!1),[t,a]=o.useState(new Date),i=c=>{a(c),e.onChange&&e.onChange(c)};return s.jsxs("div",{children:[s.jsx(u,{type:"timeWithSeconds",label:"Время",pseudo:n,value:t,...e,onChange:i}),s.jsx(ce,{type:"button",style:{marginTop:"10px"},onClick:()=>r(!n),children:"Переключить"})]})};v.storyName="TimePicker с кнопкой переключения на pseudo input";v.parameters=l;const V=e=>{const[n,r]=o.useState(new Date),t=a=>{r(a),e.onChange&&e.onChange(a)};return s.jsx(u,{value:n,withPicker:!1,...e,onChange:t})};V.storyName="TimePicker без панели выбора времени";V.parameters=l;const P=e=>{const[n,r]=o.useState({valueFrom:new Date,valueTo:oe(new Date,10)}),t=(a,i)=>{se("изменен период времени")(a,i),r({valueFrom:a,valueTo:i})};return s.jsx(u,{...e,type:"period",valueFrom:n.valueFrom,valueTo:n.valueTo,onPeriodChange:t})};P.storyName="TimePicker с возможностью выбора периода времени";P.parameters=l;const y=e=>{const[n,r]=o.useState({valueFrom:new Date,valueTo:oe(new Date,10)}),t=(a,i)=>{se("изменен период времени")(a,i),r({valueFrom:a,valueTo:i})};return s.jsx(u,{type:"periodWithSeconds",valueFrom:n.valueFrom,valueTo:n.valueTo,onPeriodChange:t})};y.storyName="TimePicker с возможностью выбора периода времени с секундами";y.parameters=l;var S,w,f;k.parameters={...k.parameters,docs:{...(S=k.parameters)==null?void 0:S.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    if (argTypes.onChange) {
      setValue(newValue);
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} {...argTypes} onChange={handleValueChange} />;
}`,...(f=(w=k.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var D,F,b;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} label="Время" {...argTypes} onChange={handleValueChange} />;
}`,...(b=(F=m.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var x,E,W;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} disabled={true} {...argTypes} onChange={handleValueChange} />;
}`,...(W=(E=p.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var j,O,N;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} type="timeWithSeconds" {...argTypes} onChange={handleValueChange} />;
}`,...(N=(O=h.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var J,X,M;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
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
}`,...(M=(X=d.parameters)==null?void 0:X.docs)==null?void 0:M.source}}};var I,_,H;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
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
}`,...(H=(_=g.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var B,L,R;T.parameters={...T.parameters,docs:{...(B=T.parameters)==null?void 0:B.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} isOpenOnFocus={true} {...argTypes} onChange={handleValueChange} />;
}`,...(R=(L=T.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var Q,$,q;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} withIcon={false} {...argTypes} onChange={handleValueChange} />;
}`,...(q=($=C.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var z,A,G;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
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
      <Button type="button" style={{
      marginTop: '10px'
    }} onClick={() => setSave(!save)}>
        Переключить
      </Button>
    </div>;
}`,...(G=(A=v.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var K,U,Y;V.parameters={...V.parameters,docs:{...(K=V.parameters)==null?void 0:K.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  return <TimePicker value={value} withPicker={false} {...argTypes} onChange={handleValueChange} />;
}`,...(Y=(U=V.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,ee,ae;P.parameters={...P.parameters,docs:{...(Z=P.parameters)==null?void 0:Z.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
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
}`,...(ae=(ee=P.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,re,te;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`(argTypes: TTimePickerType): JSX.Element => {
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
}`,...(te=(re=y.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};const Le=["TimePickerDefault","TimePickerWithLabel","DisabledTimePicker","TimePickerWithSeconds","EnabledMinutesFromTo","EnabledHoursFromTo","OpenTimePickerOnInputFocus","TimePickerWithoutIcon","TimePickerWithPseudo","TimePickerWithoutPicker","TimePickerPeriod","TimePickerPeriodWithSeconds"];export{p as DisabledTimePicker,g as EnabledHoursFromTo,d as EnabledMinutesFromTo,T as OpenTimePickerOnInputFocus,k as TimePickerDefault,P as TimePickerPeriod,y as TimePickerPeriodWithSeconds,m as TimePickerWithLabel,v as TimePickerWithPseudo,h as TimePickerWithSeconds,C as TimePickerWithoutIcon,V as TimePickerWithoutPicker,Le as __namedExportsOrder,Be as default};
