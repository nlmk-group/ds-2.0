import{j as t,r as x}from"./iframe-tXE4xoYc.js";import{B as h}from"./index-Cx9ne2MY.js";import{B as N}from"./index-DfJPKXXV.js";import{a as f,S as m,E,b as p}from"./argsTypes-BD3NBfuy.js";import{g as C}from"./styles.module-BGEDXogi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-IJbXH1LS.js";import"./index-UIqxTLHU.js";import"./index-DnvHMcnj.js";const B=s=>t.jsx("div",{style:{minHeight:80},children:t.jsx(s,{})}),A={title:"Components/Stepper/Stories",component:m,decorators:[B],argTypes:f},S=[{stepName:"Шаг 1",index:0},{stepName:"Шаг 2",index:1},{stepName:"Шаг 3",index:2},{stepName:"Шаг 4",index:3,color:E.error},{stepName:"Шаг 5",index:4,state:p.disabled}],i=s=>t.jsx("div",{className:C.wrapper,children:t.jsx(m,{...s})});i.storyName="Stepper по умолчанию";i.args={stepName:"Шаг 1",index:0,showStep:!0};const l=()=>{const[s,o]=x.useState(1),a=S.map(e=>({...e,state:e.state===p.disabled?p.disabled:e.index<=s?p.filled:p.notFilled}));return t.jsx("div",{className:C.wrapper,children:t.jsx(h,{flexDirection:"row",width:"100%",gap:16,children:a.map((e,r)=>t.jsx(m,{currentStep:s,state:e.state,index:r,showStep:r!==a.length-1,stepName:e.stepName,onClick:()=>o(r)},r))})})};l.storyName="Stepper с несколькими шагами";l.parameters={controls:{disable:!0}};const c=()=>{const[s,o]=x.useState(0),[a,e]=x.useState(!1),r=S.map(n=>({...n,state:n.index<=s?p.filled:p.notFilled,color:a?E.success:E.brand})),g=()=>{if(s<S.length-1){o(n=>n+1);return}e(!0)},w=()=>{o(0),e(!1)};return t.jsxs("div",{className:C.wrapper,children:[t.jsx(h,{flexDirection:"row",width:"100%",gap:16,children:r.map((n,u)=>t.jsx(m,{currentStep:s,state:n.state,index:u,color:n.color,showStep:u!==r.length-1,stepName:n.stepName,onClick:()=>o(u)},u))}),t.jsx(h,{pt:24,gap:8,children:a?t.jsx(N,{variant:"secondary",onClick:w,children:"Начать заново"}):t.jsx(N,{onClick:g,children:s===S.length-1?"Завершить процесс":"Следующий шаг"})})]})};c.storyName="Пример Stepper с интерактивным сценарием";c.parameters={controls:{disable:!0}};const d=()=>{const[s,o]=x.useState(1),a=S.map(e=>({...e,state:e.state===p.disabled?p.disabled:e.index<=s?p.filled:p.notFilled}));return t.jsx("div",{className:C.wrapper,children:t.jsx(h,{flexDirection:"row",width:"100%",gap:16,children:a.map((e,r)=>t.jsx(m,{currentStep:s,state:e.state,color:e.color,index:r,showStep:r!==a.length-1,stepName:e.stepName,onClick:()=>o(r)},r))})})};d.storyName="Stepper с индикатором ошибки";d.parameters={controls:{disable:!0}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(argTypes: IStepperProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Stepper {...argTypes} />
    </div>;
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
      return;
    }
    setIsCompleted(true);
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}};const F=["StepperDefault","StepperWithSteps","StepperWithInteractive","StepperWithError"];export{i as StepperDefault,d as StepperWithError,c as StepperWithInteractive,l as StepperWithSteps,F as __namedExportsOrder,A as default};
