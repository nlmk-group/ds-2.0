import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{Q as o,O as r}from"./index-ZojCmbpv.js";import"./generateUUID-CG7VmJJw.js";import"./index-XsxLq1mj.js";import"./index-AXtJih2E.js";import{B as g}from"./index-ED8ccfsJ.js";import"./index-CWQ0GGcJ.js";import"./index-BHxe-dnq.js";import"./index-iWHyAWYR.js";import"./index-BztLnIMF.js";import"./index-Udc0C2Qz.js";import"./index-CPdpS9Jm.js";import"./32-Bjhqu_Pf.js";import"./index-Cu9bd8lq.js";import{g as N}from"./styles.module-DyNiVTaI.js";import{a as u}from"./argsTypes-Ibt_u-yr.js";import"./clsx-B-dksMZM.js";import"./index-Ckls47V4.js";import"./types-CpBSVUgC.js";import"./get-CeVb1zXw.js";import"./index-7KVZVlDS.js";const x=t=>e.jsx("div",{style:{minHeight:80},children:e.jsx(t,{})}),J={title:"Components/Stepper/Stories",component:o,decorators:[x],argTypes:u},s=t=>e.jsx("div",{className:N.wrapper,children:e.jsx(o,{...t})});s.storyName="Stepper по умолчанию";s.args={stepName:"Step 1",index:0,showStep:!0};const p=()=>{const t=[{state:r.filled,stepName:"Filled"},{state:r.focused,stepName:"Focused"},{state:r.inProgress,stepName:"In Progress"},{state:r.notFilled,stepName:"Not Filled"},{state:r.disabled,stepName:"Disabled"}];return e.jsx("div",{className:N.wrapper,children:e.jsx(g,{flexDirection:"row",width:"100%",gap:16,children:t.map((i,a)=>e.jsx(o,{state:i.state,index:a,showStep:a!==t.length-1,stepName:i.stepName},a))})})};p.storyName="Stepper с несколькими шагами";var m,d,l;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`(argTypes: IStepperProps): JSX.Element => {
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
}`,...(c=(S=p.parameters)==null?void 0:S.docs)==null?void 0:c.source}}};const Q=["StepperDefault","StepperWithSteps"];export{s as StepperDefault,p as StepperWithSteps,Q as __namedExportsOrder,J as default};
