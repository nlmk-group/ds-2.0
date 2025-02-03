import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{a9 as o,a8 as r}from"./index-C4t5CiEI.js";import"./generateUUID-CwQfW92c.js";import"./index-D73feNss.js";import"./index-DppSdhCO.js";import{B as g}from"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-NOJR75CD.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-bks6ELD5.js";import"./index-DokmLR-l.js";import"./32-DRujtrbd.js";import"./index-Bnop-kX6.js";import{g as N}from"./styles.module-ox-emdf8.js";import{a as u}from"./argsTypes-CcipLFap.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./index-B5g4YLzC.js";const x=t=>e.jsx("div",{style:{minHeight:80},children:e.jsx(t,{})}),O={title:"Components/Stepper/Stories",component:o,decorators:[x],argTypes:u},s=t=>e.jsx("div",{className:N.wrapper,children:e.jsx(o,{...t})});s.storyName="Stepper по умолчанию";s.args={stepName:"Step 1",index:0,showStep:!0};const p=()=>{const t=[{state:r.filled,stepName:"Filled"},{state:r.focused,stepName:"Focused"},{state:r.inProgress,stepName:"In Progress"},{state:r.notFilled,stepName:"Not Filled"},{state:r.disabled,stepName:"Disabled"}];return e.jsx("div",{className:N.wrapper,children:e.jsx(g,{flexDirection:"row",width:"100%",gap:16,children:t.map((i,a)=>e.jsx(o,{state:i.state,index:a,showStep:a!==t.length-1,stepName:i.stepName},a))})})};p.storyName="Stepper с несколькими шагами";var m,d,l;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`(argTypes: IStepperProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Stepper {...argTypes} />
    </div>;
}`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var n,S,c;p.parameters={...p.parameters,docs:{...(n=p.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(c=(S=p.parameters)==null?void 0:S.docs)==null?void 0:c.source}}};const R=["StepperDefault","StepperWithSteps"];export{s as StepperDefault,p as StepperWithSteps,R as __namedExportsOrder,O as default};
