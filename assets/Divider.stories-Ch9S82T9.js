import{j as e,a as n,c as H}from"./clsx.m-CcuEzMhP.js";import{r as Y}from"./index-CBqU2yxZ.js";import{D as a,j as i,k as y,l as s,d as v}from"./index-CMWTVP_7.js";import"./index-ehJh3wQv.js";import"./index-D-9trSFj.js";import"./index-DjeAniHW.js";import"./index-fOOxcv8w.js";import"./index-fbTu1Hcf.js";import{I as h}from"./index-BhQGQSXE.js";import"./index-hvdSV1r-.js";import"./index-BQVY97ak.js";import"./index-B5tj7Glx.js";import"./index-DyFb8FNg.js";import"./32-UdY5WLK9.js";import{s as t}from"./styles.module-DeLvTIFi.js";import{a as q,D as F,b as L,c as U,d as P,V as G,e as W,f as J}from"./text-FYzxBx9n.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-BO3pQ7ot.js";const he={title:"Components/Divider/Stories",component:a,argTypes:q},d=r=>e("div",{className:t.wrapper,children:e(a,{...r})});d.storyName=F;d.args={children:e("span",{className:i["divider-content"],children:F})};const o=r=>e("div",{className:t.wrapper,children:e(a,{...r})});o.storyName=L;o.args={children:e("span",{className:i["divider-content"],children:L}),dashed:!0};const c=r=>e("div",{className:t.wrapper,children:Object.values(y).map(D=>Y.createElement(a,{...r,orientation:D,key:D}))});c.storyName=U;c.args={children:e("span",{className:i["divider-content"],children:U})};const p=r=>n("div",{className:t.wrapper,children:[e(a,{...r,orientation:y.left,orientationSpace:68}),e(a,{...r,orientation:y.right,orientationSpace:72})]});p.storyName=P;p.args={children:e("span",{className:i["divider-content"],children:P})};const l=r=>e("div",{className:t.wrapper,children:n("div",{style:{display:"flex"},children:[e("span",{className:i["divider-content"],children:"Текст №1"}),e(a,{...r,type:s.vertical}),e("span",{className:i["divider-content"],children:"Текст №2"}),e(a,{...r,type:s.vertical,dashed:!0}),e("span",{className:i["divider-content"],children:"Текст №3"})]})});l.storyName=G;l.args={};const m=r=>e("div",{className:t.wrapper,children:e(a,{...r,orientation:y.left,className:i["test-classname"],children:n("div",{style:{display:"flex",alignItems:"center"},children:[e("span",{className:i["divider-content"],children:"Экспертиза"}),e(v,{variant:"text",children:e(h,{name:"IconChemical24",containerSize:24,htmlColor:"var(--primary-blue-600)"})})]})})});m.storyName=W;m.args={children:W};const u=r=>n("div",{className:H(t.wrapper,i["show-divider-group"]),children:[e(a,{...r,dashed:!0}),n("div",{style:{display:"flex"},children:[e("span",{className:i["divider-content"],children:"Текст №1"}),e(a,{...r,type:s.vertical}),e("span",{className:i["divider-content"],children:"Текст №2"}),e(a,{...r,type:s.vertical,dashed:!0}),e("span",{className:i["divider-content"],children:"Текст №3"})]}),e(a,{...r,dashed:!0,children:e(v,{children:e("span",{children:"Нажать"})})}),n("div",{style:{display:"flex"},children:[e("div",{style:{display:"flex",alignItems:"center"},children:e("span",{className:i["divider-content"],children:"Текст №1"})}),e(a,{...r,type:s.vertical}),e(v,{variant:"secondary",children:e("span",{children:"Нажать"})}),e(a,{...r,type:s.vertical,dashed:!0}),e(v,{variant:"text",children:e(h,{name:"IconChemical24",containerSize:24,htmlColor:"var(--primary-blue-600)"})})]}),e(a,{...r,orientation:y.left,children:n("div",{style:{display:"flex",alignItems:"center"},children:[e("span",{className:i["divider-content"],children:"Экспертиза"}),e(v,{variant:"text",children:e(h,{name:"IconChemical24",containerSize:24,htmlColor:"var(--primary-blue-600)"})})]})})]});u.storyName=J;u.args={};var N,g,I;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`(argTypes: IDivider): ReactNode => {
  return <div className={styles.wrapper}>
      <Divider {...argTypes} />
    </div>;
}`,...(I=(g=d.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var f,T,C;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`(argTypes: IDivider): ReactNode => {
  return <div className={styles.wrapper}>
      <Divider {...argTypes} />
    </div>;
}`,...(C=(T=o.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var S,x,E;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`(argTypes: IDivider): ReactNode => {
  return <div className={styles.wrapper}>
      {Object.values(orientationMapping).map((orientation: orientationMapping) => <Divider {...argTypes} orientation={orientation} key={orientation} />)}
    </div>;
}`,...(E=(x=c.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var A,M,R;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`(argTypes: IDivider): ReactNode => {
  return <div className={styles.wrapper}>
      <Divider {...argTypes} orientation={orientationMapping.left} orientationSpace={68} />
      <Divider {...argTypes} orientation={orientationMapping.right} orientationSpace={72} />
    </div>;
}`,...(R=(M=p.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var w,O,_;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`(argTypes: IDivider): ReactNode => {
  return <div className={styles.wrapper}>
      <div style={{
      display: 'flex'
    }}>
        <span className={style['divider-content']}>Текст №1</span>
        <Divider {...argTypes} type={typeMapping.vertical} />
        <span className={style['divider-content']}>Текст №2</span>
        <Divider {...argTypes} type={typeMapping.vertical} dashed />
        <span className={style['divider-content']}>Текст №3</span>
      </div>
    </div>;
}`,...(_=(O=l.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var B,V,b;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`(argTypes: IDivider): ReactNode => {
  return <div className={styles.wrapper}>
      <Divider {...argTypes} orientation={orientationMapping.left} className={style['test-classname']}>
        <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
          <span className={style['divider-content']}>Экспертиза</span>
          <Button variant="text">
            <Icon name="IconChemical24" containerSize={24} htmlColor="var(--primary-blue-600)" />
          </Button>
        </div>
      </Divider>
    </div>;
}`,...(b=(V=m.parameters)==null?void 0:V.docs)==null?void 0:b.source}}};var j,z,k;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`(argTypes: IDivider): ReactNode => {
  return <div className={clsx(styles.wrapper, style['show-divider-group'])}>
      <Divider {...argTypes} dashed />

      <div style={{
      display: 'flex'
    }}>
        <span className={style['divider-content']}>Текст №1</span>
        <Divider {...argTypes} type={typeMapping.vertical} />
        <span className={style['divider-content']}>Текст №2</span>
        <Divider {...argTypes} type={typeMapping.vertical} dashed />
        <span className={style['divider-content']}>Текст №3</span>
      </div>

      <Divider {...argTypes} dashed>
        <Button>
          <span>Нажать</span>
        </Button>
      </Divider>

      <div style={{
      display: 'flex'
    }}>
        <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
          <span className={style['divider-content']}>Текст №1</span>
        </div>
        <Divider {...argTypes} type={typeMapping.vertical} />
        <Button variant="secondary">
          <span>Нажать</span>
        </Button>
        <Divider {...argTypes} type={typeMapping.vertical} dashed />
        <Button variant="text">
          <Icon name="IconChemical24" containerSize={24} htmlColor="var(--primary-blue-600)" />
        </Button>
      </div>

      <Divider {...argTypes} orientation={orientationMapping.left}>
        <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
          <span className={style['divider-content']}>Экспертиза</span>
          <Button variant="text">
            <Icon name="IconChemical24" containerSize={24} htmlColor="var(--primary-blue-600)" />
          </Button>
        </div>
      </Divider>
    </div>;
}`,...(k=(z=u.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};const De=["DefaultDivider","DashedDivider","DividerOrientation","DividerOrientationWithCustomSpace","DividerVertical","DividerCustomClassName","DividerType"];export{o as DashedDivider,d as DefaultDivider,m as DividerCustomClassName,c as DividerOrientation,p as DividerOrientationWithCustomSpace,u as DividerType,l as DividerVertical,De as __namedExportsOrder,he as default};
