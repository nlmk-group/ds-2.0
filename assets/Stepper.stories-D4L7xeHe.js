import{j as s}from"./jsx-runtime-DFnSfiB4.js";import{T as o,Q as r}from"./index-BNUKZqmp.js";import"./generateUUID-vFnGh3I6.js";import"./index-CNoQ_QnE.js";import"./index-CSbymPMC.js";import{B as u}from"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import"./index-ehXB0alm.js";import"./index-Cw4KJrZO.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-BvIp-sDO.js";import"./32-MLA202Yz.js";import"./index-DQ2WTIsS.js";import{s as N}from"./styles.module-BSI8LUpZ.js";import{a as g}from"./argsTypes-Komt_a0Y.js";import"./clsx-B-dksMZM.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./index-BKbm6zW0.js";const x=e=>s.jsx("div",{style:{minHeight:80},children:e()}),Q={title:"Components/Stepper/Stories",component:o,decorators:[x],argTypes:g},t=e=>s.jsx("div",{className:N.wrapper,children:s.jsx(o,{...e})});t.storyName="Stepper по умолчанию";t.args={stepName:"Step 1",index:0,showStep:!0};const p=()=>{const e=[{state:r.filled,stepName:"Filled"},{state:r.focused,stepName:"Focused"},{state:r.inProgress,stepName:"In Progress"},{state:r.notFilled,stepName:"Not Filled"},{state:r.disabled,stepName:"Disabled"}];return s.jsx("div",{className:N.wrapper,children:s.jsx(u,{flexDirection:"row",width:"100%",gap:16,children:e.map((i,a)=>s.jsx(o,{state:i.state,index:a,showStep:a!==e.length-1,stepName:i.stepName},a))})})};p.storyName="Stepper с несколькими шагами";var m,d,n;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`(argTypes: IStepperProps): JSX.Element => {
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
}`,...(c=(S=p.parameters)==null?void 0:S.docs)==null?void 0:c.source}}};const R=["StepperDefault","StepperWithSteps"];export{t as StepperDefault,p as StepperWithSteps,R as __namedExportsOrder,Q as default};
