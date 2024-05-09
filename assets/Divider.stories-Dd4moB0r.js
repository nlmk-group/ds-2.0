import{j as e,a as n}from"./jsx-runtime-2xDJh5tt.js";import{r as P}from"./index-CBqU2yxZ.js";import{W as i,X as y,Y as t,I as v}from"./index-CnL2Y1yT.js";import"./generateUUID-BVRVPcdt.js";import"./index-jIJAWU0x.js";import"./index-B8bUpJH3.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import{T as Y}from"./index-CkVMA9Py.js";import{I as h}from"./index-BxqmQ_Es.js";import"./index-Cs1erf_V.js";import"./index-DFf4wlr3.js";import"./index-lhFT6koy.js";import"./index-fHOzSRtI.js";import"./32-CH6kctYz.js";import{c as H}from"./clsx.m-CH7BE6MN.js";import{s}from"./styles.module-DeLvTIFi.js";import{e as X,D as q,a as F,b as L,c as U,V as G,f as W,d as J}from"./text-C9ATZg3U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-prZMZXcd.js";const K="_space_8kqpp_1",r={space:K,"divider-content":"_divider-content_8kqpp_5","test-classname":"_test-classname_8kqpp_9","show-divider-group":"_show-divider-group_8kqpp_17"},Ie={title:"Components/Divider/Stories",component:i,argTypes:X},c=a=>e("div",{className:s.wrapper,children:e(i,{...a})});c.storyName=q;c.args={children:e(Y,{children:q})};const d=a=>e("div",{className:s.wrapper,children:e(i,{...a})});d.storyName=F;d.args={children:e("span",{className:r["divider-content"],children:F}),dashed:!0};const p=a=>e("div",{className:s.wrapper,children:Object.values(y).map(D=>P.createElement(i,{...a,orientation:D,key:D}))});p.storyName=L;p.args={children:e("span",{className:r["divider-content"],children:L})};const o=a=>n("div",{className:s.wrapper,children:[e(i,{...a,orientation:y.left,orientationSpace:68}),e(i,{...a,orientation:y.right,orientationSpace:72})]});o.storyName=U;o.args={children:e("span",{className:r["divider-content"],children:U})};const l=a=>e("div",{className:s.wrapper,children:n("div",{style:{display:"flex"},children:[e("span",{className:r["divider-content"],children:"Текст №1"}),e(i,{...a,type:t.vertical,className:r.space}),e("span",{className:r["divider-content"],children:"Текст №2"}),e(i,{...a,type:t.vertical,dashed:!0,className:r.space}),e("span",{className:r["divider-content"],children:"Текст №3"})]})});l.storyName=G;l.args={};const m=a=>e("div",{className:s.wrapper,children:e(i,{...a,orientation:y.left,className:r["test-classname"],children:n("div",{style:{display:"flex",alignItems:"center"},children:[e("span",{className:r["divider-content"],children:"Экспертиза"}),e(v,{variant:"primary",fill:"clear",children:e(h,{name:"IconChemical24",containerSize:24,htmlColor:"var(--primary-blue-600)"})})]})})});m.storyName=W;m.args={children:W};const u=a=>n("div",{className:H(s.wrapper,r["show-divider-group"]),children:[e(i,{...a,dashed:!0}),n("div",{style:{display:"flex",gap:"var(--16-size)"},children:[e("span",{className:r["divider-content"],children:"Текст №1"}),e(i,{...a,type:t.vertical}),e("span",{className:r["divider-content"],children:"Текст №2"}),e(i,{...a,type:t.vertical,dashed:!0}),e("span",{className:r["divider-content"],children:"Текст №3"})]}),e(i,{...a,dashed:!0,children:e(v,{children:e("span",{children:"Нажать"})})}),n("div",{style:{display:"flex",gap:"var(--16-size)"},children:[e("div",{style:{display:"flex",alignItems:"center"},children:e("span",{className:r["divider-content"],children:"Текст №1"})}),e(i,{...a,type:t.vertical,className:r.space}),e(v,{variant:"secondary",children:e("span",{children:"Нажать"})}),e(i,{...a,type:t.vertical,dashed:!0,className:r.space}),e(v,{variant:"primary",fill:"clear",children:e(h,{name:"IconChemical24",containerSize:24,htmlColor:"var(--primary-blue-600)"})})]}),e(i,{...a,orientation:y.left,children:n("div",{style:{display:"flex",alignItems:"center"},children:[e("span",{className:r["divider-content"],children:"Экспертиза"}),e(v,{variant:"primary",fill:"clear",children:e(h,{name:"IconChemical24",containerSize:24,htmlColor:"var(--primary-blue-600)"})})]})})]});u.storyName=J;u.args={};var N,g,I;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`(argTypes: IDivider): ReactNode => {
  return <div className={styles.wrapper}>
      <Divider {...argTypes} />
    </div>;
}`,...(I=(g=c.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var f,T,C;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`(argTypes: IDivider): ReactNode => {
  return <div className={styles.wrapper}>
      <Divider {...argTypes} />
    </div>;
}`,...(C=(T=d.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var S,_,x;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`(argTypes: IDivider): ReactNode => {
  return <div className={styles.wrapper}>
      {Object.values(orientationMapping).map((orientation: orientationMapping) => <Divider {...argTypes} orientation={orientation} key={orientation} />)}
    </div>;
}`,...(x=(_=p.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var w,E,A;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`(argTypes: IDivider): ReactNode => {
  return <div className={styles.wrapper}>
      <Divider {...argTypes} orientation={orientationMapping.left} orientationSpace={68} />
      <Divider {...argTypes} orientation={orientationMapping.right} orientationSpace={72} />
    </div>;
}`,...(A=(E=o.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var M,R,O;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`(argTypes: IDivider): ReactNode => {
  return <div className={styles.wrapper}>
      <div style={{
      display: 'flex'
    }}>
        <span className={style['divider-content']}>Текст №1</span>
        <Divider {...argTypes} type={typeMapping.vertical} className={style.space} />
        <span className={style['divider-content']}>Текст №2</span>
        <Divider {...argTypes} type={typeMapping.vertical} dashed className={style.space} />
        <span className={style['divider-content']}>Текст №3</span>
      </div>
    </div>;
}`,...(O=(R=l.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var B,V,z;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`(argTypes: IDivider): ReactNode => {
  return <div className={styles.wrapper}>
      <Divider {...argTypes} orientation={orientationMapping.left} className={style['test-classname']}>
        <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
          <span className={style['divider-content']}>Экспертиза</span>
          <Button variant="primary" fill="clear">
            <Icon name="IconChemical24" containerSize={24} htmlColor="var(--primary-blue-600)" />
          </Button>
        </div>
      </Divider>
    </div>;
}`,...(z=(V=m.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var b,k,j;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`(argTypes: IDivider): ReactNode => {
  return <div className={clsx(styles.wrapper, style['show-divider-group'])}>
      <Divider {...argTypes} dashed />

      <div style={{
      display: 'flex',
      gap: 'var(--16-size)'
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
      display: 'flex',
      gap: 'var(--16-size)'
    }}>
        <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
          <span className={style['divider-content']}>Текст №1</span>
        </div>
        <Divider {...argTypes} type={typeMapping.vertical} className={style.space} />
        <Button variant="secondary">
          <span>Нажать</span>
        </Button>
        <Divider {...argTypes} type={typeMapping.vertical} dashed className={style.space} />
        <Button variant="primary" fill="clear">
          <Icon name="IconChemical24" containerSize={24} htmlColor="var(--primary-blue-600)" />
        </Button>
      </div>

      <Divider {...argTypes} orientation={orientationMapping.left}>
        <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
          <span className={style['divider-content']}>Экспертиза</span>
          <Button variant="primary" fill="clear">
            <Icon name="IconChemical24" containerSize={24} htmlColor="var(--primary-blue-600)" />
          </Button>
        </div>
      </Divider>
    </div>;
}`,...(j=(k=u.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};const fe=["DefaultDivider","DashedDivider","DividerOrientation","DividerOrientationWithCustomSpace","DividerVertical","DividerCustomClassName","DividerType"];export{d as DashedDivider,c as DefaultDivider,m as DividerCustomClassName,p as DividerOrientation,o as DividerOrientationWithCustomSpace,u as DividerType,l as DividerVertical,fe as __namedExportsOrder,Ie as default};
