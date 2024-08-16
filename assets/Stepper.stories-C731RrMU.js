import{j as s}from"./jsx-runtime-DFnSfiB4.js";import{M as o,L as r}from"./index-Bq8dHBmc.js";import"./generateUUID-i9L7EtYg.js";import"./index-bLIWCpda.js";import"./index-BgyuaCKK.js";import{B as u}from"./index-B8KuQLf-.js";import"./index-B_c816qF.js";import"./index-DJXOh8UI.js";import"./index-DB41iIPt.js";import"./index-wNTT8eSr.js";import"./index-S3KjbRnp.js";import"./index-CpIRsoAz.js";import"./32-C4VDZHit.js";import"./index-DQ2WTIsS.js";import{s as N}from"./styles.module-C4SoDQaA.js";import{a as g}from"./argsTypes-CY4kZpXG.js";import"./clsx-B-dksMZM.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./index-0sbKER3h.js";const x=e=>s.jsx("div",{style:{minHeight:80},children:e()}),M={title:"Components/Stepper/Stories",component:o,decorators:[x],argTypes:g},t=e=>s.jsx("div",{className:N.wrapper,children:s.jsx(o,{...e})});t.storyName="Stepper по умолчанию";t.args={stepName:"Step 1",index:0,showStep:!0};const p=()=>{const e=[{state:r.filled,stepName:"Filled"},{state:r.focused,stepName:"Focused"},{state:r.inProgress,stepName:"In Progress"},{state:r.notFilled,stepName:"Not Filled"},{state:r.disabled,stepName:"Disabled"}];return s.jsx("div",{className:N.wrapper,children:s.jsx(u,{flexDirection:"row",width:"100%",gap:16,children:e.map((i,a)=>s.jsx(o,{state:i.state,index:a,showStep:a!==e.length-1,stepName:i.stepName},a))})})};p.storyName="Stepper с несколькими шагами";var m,d,n;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`(argTypes: IStepperProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Stepper {...argTypes} />
    </div>;
}`,...(n=(d=t.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var l,S,c;p.parameters={...p.parameters,docs:{...(l=p.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const mockSteps: Array<{
    state: EStepState;
    stepName: string;
  }> = [{
    state: EStepState.filled,
    stepName: 'Filled'
  }, {
    state: EStepState.focused,
    stepName: 'Focused'
  }, {
    state: EStepState.inProgress,
    stepName: 'In Progress'
  }, {
    state: EStepState.notFilled,
    stepName: 'Not Filled'
  }, {
    state: EStepState.disabled,
    stepName: 'Disabled'
  }];
  return <div className={styles.wrapper}>
      <Box flexDirection="row" width="100%" gap={16}>
        {mockSteps.map((step, i) => <Stepper key={i} state={step.state} index={i} showStep={i !== mockSteps.length - 1} stepName={step.stepName} />)}
      </Box>
    </div>;
}`,...(c=(S=p.parameters)==null?void 0:S.docs)==null?void 0:c.source}}};const O=["StepperDefault","StepperWithSteps"];export{t as StepperDefault,p as StepperWithSteps,O as __namedExportsOrder,M as default};
