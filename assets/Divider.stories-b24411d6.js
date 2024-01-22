import{j as e,a as n,c as q}from"./clsx.m-3764cf42.js";import{r as H}from"./index-f1f749bf.js";import{q as a,x as i,r as y,w as s}from"./index-dd92ee6a.js";import"./index-a4c35820.js";import"./index-63601013.js";import"./index-e99519f1.js";import{B as v}from"./index-cd305b84.js";import"./index-147655d7.js";import"./index-fb030d50.js";import{I as h}from"./index-ed56af28.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-8c6efd17.js";import{s as t}from"./styles.module-caf3a80a.js";import{e as Y,D as L,a as U,b as k,c as P,V as G,f as W,d as J}from"./text-48894c2f.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./IconArticle24-414bfa4c.js";import"./IconsList.module-e4fe8555.js";import"./IconPanTool24-f1398bf1.js";import"./get-78cac09e.js";import"./index-c1da5c13.js";const Ne={title:"Components/Divider/Stories",component:a,argTypes:Y},d=r=>e("div",{className:t.wrapper,children:e(a,{...r})});d.storyName=L;d.args={children:e("span",{className:i["divider-content"],children:L})};const o=r=>e("div",{className:t.wrapper,children:e(a,{...r})});o.storyName=U;o.args={children:e("span",{className:i["divider-content"],children:U}),dashed:!0};const c=r=>e("div",{className:t.wrapper,children:Object.values(y).map(D=>H.createElement(a,{...r,orientation:D,key:D}))});c.storyName=k;c.args={children:e("span",{className:i["divider-content"],children:k})};const p=r=>n("div",{className:t.wrapper,children:[e(a,{...r,orientation:y.left,orientationSpace:68}),e(a,{...r,orientation:y.right,orientationSpace:72})]});p.storyName=P;p.args={children:e("span",{className:i["divider-content"],children:P})};const l=r=>e("div",{className:t.wrapper,children:n("div",{style:{display:"flex"},children:[e("span",{className:i["divider-content"],children:"Текст №1"}),e(a,{...r,type:s.vertical}),e("span",{className:i["divider-content"],children:"Текст №2"}),e(a,{...r,type:s.vertical,dashed:!0}),e("span",{className:i["divider-content"],children:"Текст №3"})]})});l.storyName=G;l.args={};const m=r=>e("div",{className:t.wrapper,children:e(a,{...r,orientation:y.left,className:i["test-classname"],children:n("div",{style:{display:"flex",alignItems:"center"},children:[e("span",{className:i["divider-content"],children:"Экспертиза"}),e(v,{variant:"text",children:e(h,{name:"IconChemical24",containerSize:24,htmlColor:"var(--primary-blue-600)"})})]})})});m.storyName=W;m.args={children:W};const u=r=>n("div",{className:q(t.wrapper,i["show-divider-group"]),children:[e(a,{...r,dashed:!0}),n("div",{style:{display:"flex"},children:[e("span",{className:i["divider-content"],children:"Текст №1"}),e(a,{...r,type:s.vertical}),e("span",{className:i["divider-content"],children:"Текст №2"}),e(a,{...r,type:s.vertical,dashed:!0}),e("span",{className:i["divider-content"],children:"Текст №3"})]}),e(a,{...r,dashed:!0,children:e(v,{children:e("span",{children:"Нажать"})})}),n("div",{style:{display:"flex"},children:[e("div",{style:{display:"flex",alignItems:"center"},children:e("span",{className:i["divider-content"],children:"Текст №1"})}),e(a,{...r,type:s.vertical}),e(v,{variant:"secondary",children:e("span",{children:"Нажать"})}),e(a,{...r,type:s.vertical,dashed:!0}),e(v,{variant:"text",children:e(h,{name:"IconChemical24",containerSize:24,htmlColor:"var(--primary-blue-600)"})})]}),e(a,{...r,orientation:y.left,children:n("div",{style:{display:"flex",alignItems:"center"},children:[e("span",{className:i["divider-content"],children:"Экспертиза"}),e(v,{variant:"text",children:e(h,{name:"IconChemical24",containerSize:24,htmlColor:"var(--primary-blue-600)"})})]})})]});u.storyName=J;u.args={};var N,g,I;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`(argTypes: IDivider): ReactNode => {
  return <div className={styles.wrapper}>
      <Divider {...argTypes} />
    </div>;
}`,...(I=(g=d.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var f,T,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`(argTypes: IDivider): ReactNode => {
  return <div className={styles.wrapper}>
      <Divider {...argTypes} />
    </div>;
}`,...(x=(T=o.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var C,S,E;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`(argTypes: IDivider): ReactNode => {
  return <div className={styles.wrapper}>
      {Object.values(orientationMapping).map((orientation: orientationMapping) => <Divider {...argTypes} orientation={orientation} key={orientation} />)}
    </div>;
}`,...(E=(S=c.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var w,A,M;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`(argTypes: IDivider): ReactNode => {
  return <div className={styles.wrapper}>
      <Divider {...argTypes} orientation={orientationMapping.left} orientationSpace={68} />
      <Divider {...argTypes} orientation={orientationMapping.right} orientationSpace={72} />
    </div>;
}`,...(M=(A=p.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var R,O,_;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`(argTypes: IDivider): ReactNode => {
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
}`,...(b=(V=m.parameters)==null?void 0:V.docs)==null?void 0:b.source}}};var z,j,F;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`(argTypes: IDivider): ReactNode => {
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
}`,...(F=(j=u.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};const ge=["DefaultDivider","DashedDivider","DividerOrientation","DividerOrientationWithCustomSpace","DividerVertical","DividerCustomClassName","DividerType"];export{o as DashedDivider,d as DefaultDivider,m as DividerCustomClassName,c as DividerOrientation,p as DividerOrientationWithCustomSpace,u as DividerType,l as DividerVertical,ge as __namedExportsOrder,Ne as default};
