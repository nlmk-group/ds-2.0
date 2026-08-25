import{j as r,r as u}from"./iframe-DaRyOQD4.js";import{B as D}from"./index-CmkzyLkL.js";import{T as i}from"./index-Dxzj7Vk2.js";import{a as w}from"./argsTypes-By1lE0DO.js";import{t as k,c as F,m as b}from"./hook-VmrMNmoE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dvw5dMma.js";import"./clsx-B-dksMZM.js";import"./index-CBZ_keLy.js";import"./generateUUID-M57HTP56.js";import"./useFloatingReferenceSync-e0QbxRQz.js";import"./index-gWNSPh3n.js";import"./types-TdnjS80C.js";import"./index-Cf3JpTrJ.js";import"./colorsMapping-C6bFIk14.js";import"./floating-ui.react-CBGLEHeQ.js";import"./index-CcSpOCs_.js";import"./sizeMappingInput-XXScYzk1.js";import"./index-7E4T5yQV.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-BBsCXdKC.js";import"./32-BjfT3i4e.js";import"./24-CISCaQ63.js";import"./24-60eD6Z-I.js";import"./24-qK0x_3Ma.js";import"./24-B-wOqD5j.js";import"./24-B-h9yLtA.js";import"./24-B_dTG4ub.js";import"./24-D0g0E23x.js";import"./24-gNed2SUN.js";import"./24-C175QdoB.js";import"./16-CvdS6GvX.js";import"./24-BGR-3ALd.js";import"./24-DFKe0nyJ.js";import"./16-0E3xB5Tl.js";import"./16-lUiuHRHz.js";import"./16-rE0E2ssb.js";import"./16-BvoUreEM.js";import"./16-BqEOmvvO.js";function x(e,t){const n=+k(e);return F(e,n+t)}function S(e,t){return x(e,t*b)}const E="TimePicker-module__wrapper___gq0De",W={wrapper:E},j=e=>r.jsx("div",{className:W.wrapper,children:r.jsx(e,{})}),Te={title:"Components/TimePicker/Stories",component:i,decorators:[j],parameters:{actions:{argTypesRegex:"^on.*"}},argTypes:w},c={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}},y=e=>{const[t,n]=u.useState(new Date),o=a=>{e.onChange&&(n(a),e.onChange(a))},s=()=>{n(void 0),e?.onReset&&e.onReset()};return r.jsx(i,{...e,value:t,reset:!0,onChange:o,onReset:s})};y.storyName="TimerPicker по умолчанию";const m=e=>{const[t,n]=u.useState(new Date),o=a=>{n(a),e.onChange&&e.onChange(a)},s=()=>{n(void 0),e?.onReset&&e.onReset()};return r.jsx(i,{value:t,label:"Время",...e,reset:!0,onChange:o,onReset:s})};m.storyName="TimePicker с полем label";m.parameters=c;const h=e=>{const[t,n]=u.useState(new Date),o=a=>{n(a),e.onChange&&e.onChange(a)},s=()=>{n(void 0),e?.onReset&&e.onReset()};return r.jsx(i,{value:t,disabled:!0,...e,reset:!0,onChange:o,onReset:s})};h.storyName="TimePicker в состоянии disabled";h.parameters=c;const p=e=>{const[t,n]=u.useState(new Date),o=a=>{n(a),e.onChange&&e.onChange(a)},s=()=>{n(void 0),e?.onReset&&e.onReset()};return r.jsx(i,{value:t,type:"timeWithSeconds",...e,reset:!0,onChange:o,onReset:s})};p.storyName="TimePicker с опцией выбора секунд";p.parameters=c;const g=e=>{const[t,n]=u.useState(new Date),o=()=>32,s=()=>59,a=d=>{n(d),e.onChange&&e.onChange(d)},l=()=>{n(void 0),e?.onReset&&e.onReset()};return r.jsx(i,{value:t,enabledMinuteFrom:o,enabledMinuteTo:s,...e,reset:!0,onChange:a,onReset:l})};g.storyName="TimePicker с включенным ограничением по выбору минут";g.parameters=c;const v=e=>{const[t,n]=u.useState(new Date),o=()=>2,s=()=>9,a=d=>{n(d),e.onChange&&e.onChange(d)},l=()=>{n(void 0),e?.onReset&&e.onReset()};return r.jsx(i,{value:t,enabledHourFrom:o,enabledHourTo:s,...e,reset:!0,onChange:a,onReset:l})};v.storyName="TimePicker с включенным ограничением по выбору часов";v.parameters=c;const C=e=>{const[t,n]=u.useState(new Date),o=a=>{n(a),e.onChange&&e.onChange(a)},s=()=>{n(void 0),e?.onReset&&e.onReset()};return r.jsx(i,{value:t,isOpenOnFocus:!0,...e,reset:!0,onChange:o,onReset:s})};C.storyName="TimePicker с опцией открытия панели при фокусе на поле ввода";C.parameters=c;const R=e=>{const[t,n]=u.useState(new Date),o=a=>{n(a),e.onChange&&e.onChange(a)},s=()=>{n(void 0),e?.onReset&&e.onReset()};return r.jsx(i,{value:t,withIcon:!1,...e,reset:!0,onChange:o,onReset:s})};R.storyName="TimePicker без иконки";R.parameters=c;const T=e=>{const[t,n]=u.useState(!1),[o,s]=u.useState(new Date),a=d=>{s(d),e.onChange&&e.onChange(d)},l=()=>{s(void 0),e?.onReset&&e.onReset()};return r.jsxs("div",{children:[r.jsx(i,{type:"timeWithSeconds",label:"Время",pseudo:t,value:o,...e,reset:!0,onChange:a,onReset:l}),r.jsx(D,{type:"button",style:{marginTop:"10px"},onClick:()=>n(!t),children:"Переключить"})]})};T.storyName="TimePicker с кнопкой переключения на pseudo input";T.parameters=c;const f=e=>{const[t,n]=u.useState(new Date),o=a=>{n(a),e.onChange&&e.onChange(a)},s=()=>{n(void 0),e?.onReset&&e.onReset()};return r.jsx(i,{value:t,withPicker:!1,...e,reset:!0,onChange:o,onReset:s})};f.storyName="TimePicker без панели выбора времени";f.parameters=c;const V=e=>{const[t,n]=u.useState({valueFrom:new Date,valueTo:S(new Date,10)}),o=(a,l)=>{e.onPeriodChange&&e.onPeriodChange(a,l),n({valueFrom:a,valueTo:l})},s=()=>{n({valueFrom:void 0,valueTo:void 0}),e?.onReset&&e.onReset()};return r.jsx(i,{...e,type:"period",valueFrom:t.valueFrom,valueTo:t.valueTo,onPeriodChange:o,reset:!0,onReset:s})};V.storyName="TimePicker с возможностью выбора периода времени";V.parameters=c;const P=e=>{const[t,n]=u.useState({valueFrom:new Date,valueTo:S(new Date,10)}),o=(a,l)=>{e.onPeriodChange&&e.onPeriodChange(a,l),n({valueFrom:a,valueTo:l})},s=()=>{n({valueFrom:void 0,valueTo:void 0}),e?.onReset&&e.onReset()};return r.jsx(i,{...e,type:"periodWithSeconds",valueFrom:t.valueFrom,valueTo:t.valueTo,onPeriodChange:o,reset:!0,onReset:s})};P.storyName="TimePicker с возможностью выбора периода времени с секундами";P.parameters=c;y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`(argTypes: any): JSX.Element => {
  const [value, setValue] = useState<Date | undefined>(new Date());
  const handleValueChange = (newValue: Date) => {
    if (argTypes.onChange) {
      setValue(newValue);
      argTypes.onChange(newValue);
    }
  };
  const handleReset = () => {
    setValue(undefined);
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };
  return <TimePicker {...argTypes} value={value} reset onChange={handleValueChange} onReset={handleReset} />;
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(argTypes: any): JSX.Element => {
  const [value, setValue] = useState<Date | undefined>(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  const handleReset = () => {
    setValue(undefined);
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };
  return <TimePicker value={value} label="Время" {...argTypes} reset onChange={handleValueChange} onReset={handleReset} />;
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`(argTypes: any): JSX.Element => {
  const [value, setValue] = useState<Date | undefined>(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  const handleReset = () => {
    setValue(undefined);
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };
  return <TimePicker value={value} disabled={true} {...argTypes} reset onChange={handleValueChange} onReset={handleReset} />;
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(argTypes: any): JSX.Element => {
  const [value, setValue] = useState<Date | undefined>(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  const handleReset = () => {
    setValue(undefined);
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };
  return <TimePicker value={value} type="timeWithSeconds" {...argTypes} reset onChange={handleValueChange} onReset={handleReset} />;
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(argTypes: any): JSX.Element => {
  const [value, setValue] = useState<Date | undefined>(new Date());
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
  const handleReset = () => {
    setValue(undefined);
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };
  return <TimePicker value={value} enabledMinuteFrom={func} enabledMinuteTo={funcOne} {...argTypes} reset onChange={handleValueChange} onReset={handleReset} />;
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`(argTypes: any): JSX.Element => {
  const [value, setValue] = useState<Date | undefined>(new Date());
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
  const handleReset = () => {
    setValue(undefined);
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };
  return <TimePicker value={value} enabledHourFrom={func} enabledHourTo={funcOne} {...argTypes} reset onChange={handleValueChange} onReset={handleReset} />;
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`(argTypes: any): JSX.Element => {
  const [value, setValue] = useState<Date | undefined>(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  const handleReset = () => {
    setValue(undefined);
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };
  return <TimePicker value={value} isOpenOnFocus={true} {...argTypes} reset onChange={handleValueChange} onReset={handleReset} />;
}`,...C.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`(argTypes: any): JSX.Element => {
  const [value, setValue] = useState<Date | undefined>(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  const handleReset = () => {
    setValue(undefined);
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };
  return <TimePicker value={value} withIcon={false} {...argTypes} reset onChange={handleValueChange} onReset={handleReset} />;
}`,...R.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`(argTypes: any): JSX.Element => {
  const [save, setSave] = useState(false);
  const [innerValue, setInnerValue] = useState<Date | undefined>(new Date());
  const handleValueChange = (newValue: Date) => {
    setInnerValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  const handleReset = () => {
    setInnerValue(undefined);
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };
  return <div>
      <TimePicker type="timeWithSeconds" label="Время" pseudo={save} value={innerValue} {...argTypes} reset onChange={handleValueChange} onReset={handleReset} />
      <Button type="button" style={{
      marginTop: '10px'
    }} onClick={() => setSave(!save)}>
        Переключить
      </Button>
    </div>;
}`,...T.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`(argTypes: any): JSX.Element => {
  const [value, setValue] = useState<Date | undefined>(new Date());
  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };
  const handleReset = () => {
    setValue(undefined);
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };
  return <TimePicker value={value} withPicker={false} {...argTypes} reset onChange={handleValueChange} onReset={handleReset} />;
}`,...f.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`(argTypes: any): JSX.Element => {
  const [values, setValues] = useState<{
    valueFrom?: Date;
    valueTo?: Date;
  }>({
    valueFrom: new Date(),
    valueTo: addMinutes(new Date(), 10)
  });
  const handlePeriodChange = (valueFrom: Date | undefined, valueTo: Date | undefined) => {
    if (argTypes.onPeriodChange) {
      argTypes.onPeriodChange(valueFrom, valueTo);
    }
    setValues({
      valueFrom,
      valueTo
    });
  };
  const handleReset = () => {
    setValues({
      valueFrom: undefined,
      valueTo: undefined
    });
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };
  return <TimePicker {...argTypes} type="period" valueFrom={values.valueFrom} valueTo={values.valueTo} onPeriodChange={handlePeriodChange} reset onReset={handleReset} />;
}`,...V.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`(argTypes: any): JSX.Element => {
  const [values, setValues] = useState<{
    valueFrom?: Date;
    valueTo?: Date;
  }>({
    valueFrom: new Date(),
    valueTo: addMinutes(new Date(), 10)
  });
  const handlePeriodChange = (valueFrom: Date | undefined, valueTo: Date | undefined) => {
    if (argTypes.onPeriodChange) {
      argTypes.onPeriodChange(valueFrom, valueTo);
    }
    setValues({
      valueFrom,
      valueTo
    });
  };
  const handleReset = () => {
    setValues({
      valueFrom: undefined,
      valueTo: undefined
    });
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };
  return <TimePicker {...argTypes} type="periodWithSeconds" valueFrom={values.valueFrom} valueTo={values.valueTo} onPeriodChange={handlePeriodChange} reset onReset={handleReset} />;
}`,...P.parameters?.docs?.source}}};const fe=["TimePickerDefault","TimePickerWithLabel","DisabledTimePicker","TimePickerWithSeconds","EnabledMinutesFromTo","EnabledHoursFromTo","OpenTimePickerOnInputFocus","TimePickerWithoutIcon","TimePickerWithPseudo","TimePickerWithoutPicker","TimePickerPeriod","TimePickerPeriodWithSeconds"];export{h as DisabledTimePicker,v as EnabledHoursFromTo,g as EnabledMinutesFromTo,C as OpenTimePickerOnInputFocus,y as TimePickerDefault,V as TimePickerPeriod,P as TimePickerPeriodWithSeconds,m as TimePickerWithLabel,T as TimePickerWithPseudo,p as TimePickerWithSeconds,R as TimePickerWithoutIcon,f as TimePickerWithoutPicker,fe as __namedExportsOrder,Te as default};
