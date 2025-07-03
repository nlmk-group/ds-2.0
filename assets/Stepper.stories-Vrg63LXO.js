import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{r as x}from"./index-BcJSXhQi.js";import{a7 as m,a5 as N,a6 as p,B as E}from"./TreeList-BD5pX8WO.js";import"./generateUUID-Cr6BF8sx.js";import"./index-D9qQUMnP.js";import"./index-WHoiTdKD.js";import{B as h}from"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-53N2drcz.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-BQAMZg9d.js";import"./index-C5rKoyII.js";import"./32-DMwn_7G4.js";import{g as C}from"./styles.module-m0Zsy3Hi.js";import{a as A}from"./argsTypes-BdwuPiUg.js";import"./index-ChsGqxH_.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";const F=s=>t.jsx("div",{style:{minHeight:80},children:t.jsx(s,{})}),oe={title:"Components/Stepper/Stories",component:m,decorators:[F],argTypes:A},S=[{stepName:"Шаг 1",index:0},{stepName:"Шаг 2",index:1},{stepName:"Шаг 3",index:2},{stepName:"Шаг 4",index:3,color:N.error},{stepName:"Шаг 5",index:4,state:p.disabled}],i=s=>t.jsx("div",{className:C.wrapper,children:t.jsx(m,{...s})});i.storyName="Stepper по умолчанию";i.args={stepName:"Шаг 1",index:0,showStep:!0};const l=()=>{const[s,n]=x.useState(1),a=S.map(e=>({...e,state:e.state===p.disabled?p.disabled:e.index<=s?p.filled:p.notFilled}));return t.jsx("div",{className:C.wrapper,children:t.jsx(h,{flexDirection:"row",width:"100%",gap:16,children:a.map((e,r)=>t.jsx(m,{currentStep:s,state:e.state,index:r,showStep:r!==a.length-1,stepName:e.stepName,onClick:()=>n(r)},r))})})};l.storyName="Stepper с несколькими шагами";l.parameters={controls:{disable:!0}};const c=()=>{const[s,n]=x.useState(0),[a,e]=x.useState(!1),r=S.map(o=>({...o,state:o.index<=s?p.filled:p.notFilled,color:a?N.success:N.brand})),P=()=>{s<S.length-1?n(o=>o+1):e(!0)},I=()=>{n(0),e(!1)};return t.jsxs("div",{className:C.wrapper,children:[t.jsx(h,{flexDirection:"row",width:"100%",gap:16,children:r.map((o,u)=>t.jsx(m,{currentStep:s,state:o.state,index:u,color:o.color,showStep:u!==r.length-1,stepName:o.stepName,onClick:()=>n(u)},u))}),t.jsx(h,{pt:24,gap:8,children:a?t.jsx(E,{variant:"secondary",onClick:I,children:"Начать заново"}):t.jsx(E,{onClick:P,children:s===S.length-1?"Завершить процесс":"Следующий шаг"})})]})};c.storyName="Пример Stepper с интерактивным сценарием";c.parameters={controls:{disable:!0}};const d=()=>{const[s,n]=x.useState(1),a=S.map(e=>({...e,state:e.state===p.disabled?p.disabled:e.index<=s?p.filled:p.notFilled}));return t.jsx("div",{className:C.wrapper,children:t.jsx(h,{flexDirection:"row",width:"100%",gap:16,children:a.map((e,r)=>t.jsx(m,{currentStep:s,state:e.state,color:e.color,index:r,showStep:r!==a.length-1,stepName:e.stepName,onClick:()=>n(r)},r))})})};d.storyName="Stepper с индикатором ошибки";d.parameters={controls:{disable:!0}};var g,w,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`(argTypes: IStepperProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Stepper {...argTypes} />
    </div>;
}`,...(f=(w=i.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var B,v,y;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = BASE_STEPS.map(step => ({
    ...step,
    state: step.state === EStepState.disabled ? EStepState.disabled : step.index <= currentStep ? EStepState.filled : EStepState.notFilled
  }));
  return <div className={styles.wrapper}>
      <Box flexDirection="row" width="100%" gap={16}>
        {steps.map((step, i) => <Stepper currentStep={currentStep} key={i} state={step.state} index={i} showStep={i !== steps.length - 1} stepName={step.stepName} onClick={() => setCurrentStep(i)} />)}
      </Box>
    </div>;
}`,...(y=(v=l.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var j,b,k;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const steps = BASE_STEPS.map(step => ({
    ...step,
    state: step.index <= currentStep ? EStepState.filled : EStepState.notFilled,
    color: isCompleted ? EStepColor.success : EStepColor.brand
  }));
  const handleNext = () => {
    if (currentStep < BASE_STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };
  const handleReset = () => {
    setCurrentStep(0);
    setIsCompleted(false);
  };
  return <div className={styles.wrapper}>
      <Box flexDirection="row" width="100%" gap={16}>
        {steps.map((step, i) => <Stepper currentStep={currentStep} key={i} state={step.state} index={i} color={step.color} showStep={i !== steps.length - 1} stepName={step.stepName} onClick={() => setCurrentStep(i)} />)}
      </Box>
      <Box pt={24} gap={8}>
        {!isCompleted ? <Button onClick={handleNext}>
            {currentStep === BASE_STEPS.length - 1 ? 'Завершить процесс' : 'Следующий шаг'}
          </Button> : <Button variant="secondary" onClick={handleReset}>
            Начать заново
          </Button>}
      </Box>
    </div>;
}`,...(k=(b=c.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var T,_,D;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = BASE_STEPS.map(step => ({
    ...step,
    state: step.state === EStepState.disabled ? EStepState.disabled : step.index <= currentStep ? EStepState.filled : EStepState.notFilled
  }));
  return <div className={styles.wrapper}>
      <Box flexDirection="row" width="100%" gap={16}>
        {steps.map((step, i) => <Stepper currentStep={currentStep} key={i} state={step.state} color={step.color} index={i} showStep={i !== steps.length - 1} stepName={step.stepName} onClick={() => setCurrentStep(i)} />)}
      </Box>
    </div>;
}`,...(D=(_=d.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const ne=["StepperDefault","StepperWithSteps","StepperWithInteractive","StepperWithError"];export{i as StepperDefault,d as StepperWithError,c as StepperWithInteractive,l as StepperWithSteps,ne as __namedExportsOrder,oe as default};
