import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{e as g}from"./index-Bnop-kX6.js";import{a9 as o,a8 as r}from"./VideoWindow-DEkDdpx_.js";import"./generateUUID-Z4ktHL_f.js";import"./index-CkAXh9uP.js";import"./index-DppSdhCO.js";import{B as h}from"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-CvRFF9aG.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-D_lYSbi8.js";import"./index-DokmLR-l.js";import"./32-DmPReyKt.js";import{g as u}from"./styles.module-ox-emdf8.js";import{a as f}from"./argsTypes-CeALE9rU.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-B5g4YLzC.js";const w=t=>e.jsx("div",{style:{minHeight:80},children:e.jsx(t,{})}),G={title:"Components/Stepper/Stories",component:o,decorators:[w],argTypes:f},s=t=>e.jsx("div",{className:u.wrapper,children:e.jsx(o,{...t})});s.storyName="Stepper по умолчанию";s.args={stepName:"Step 1",index:0,showStep:!0};const a=()=>{const[t,N]=g.useState(1),m=[{stepName:"Step 1",index:0},{stepName:"Step 2",index:1},{stepName:"Step 3",index:2},{stepName:"Step 4",index:3},{stepName:"Step 5",index:4,state:r.disabled}].map(p=>({...p,state:p.state===r.disabled?r.disabled:p.index<=t?r.filled:r.notFilled}));return e.jsx("div",{className:u.wrapper,children:e.jsx(h,{flexDirection:"row",width:"100%",gap:16,children:m.map((p,i)=>e.jsx(o,{currentStep:t,state:p.state,index:i,showStep:i!==m.length-1,stepName:p.stepName,onClick:()=>N(i)},i))})})};a.storyName="Stepper с несколькими шагами";var n,S,d;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`(argTypes: IStepperProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Stepper {...argTypes} />
    </div>;
}`,...(d=(S=s.parameters)==null?void 0:S.docs)==null?void 0:d.source}}};var c,l,x;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const [currentStep, setCurrentStep] = React.useState(1);
  const baseSteps = [{
    stepName: 'Step 1',
    index: 0
  }, {
    stepName: 'Step 2',
    index: 1
  }, {
    stepName: 'Step 3',
    index: 2
  }, {
    stepName: 'Step 4',
    index: 3
  }, {
    stepName: 'Step 5',
    index: 4,
    state: EStepState.disabled
  }];
  const steps = baseSteps.map(step => ({
    ...step,
    state: step.state === EStepState.disabled ? EStepState.disabled : step.index <= currentStep ? EStepState.filled : EStepState.notFilled
  }));
  return <div className={styles.wrapper}>
      <Box flexDirection="row" width="100%" gap={16}>
        {steps.map((step, i) => <Stepper currentStep={currentStep} key={i} state={step.state} index={i} showStep={i !== steps.length - 1} stepName={step.stepName} onClick={() => setCurrentStep(i)} />)}
      </Box>
    </div>;
}`,...(x=(l=a.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};const K=["StepperDefault","StepperWithSteps"];export{s as StepperDefault,a as StepperWithSteps,K as __namedExportsOrder,G as default};
