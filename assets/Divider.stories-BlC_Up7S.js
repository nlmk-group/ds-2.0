import{j as e,a as n}from"./jsx-runtime-2xDJh5tt.js";import{r as H}from"./index-CBqU2yxZ.js";import{U as i,V as y,W as t,D as v}from"./index-BTGymsfC.js";import"./generateUUID-1cqmAxQg.js";import"./index-D1sOrwww.js";import"./index-BqvJ5JrJ.js";import"./index-CkVMA9Py.js";import{I as h}from"./index-BulafiJ9.js";import"./index-Dd2IALEV.js";import"./index-BGOHbkSJ.js";import"./index-Dp7-Jy-a.js";import"./index-D8kVD15d.js";import"./32-oKJmtLZM.js";import{c as Y}from"./clsx.m-CH7BE6MN.js";import{s}from"./styles.module-DeLvTIFi.js";import{e as q,D as F,a as L,b as W,c as k,V as G,f as P,d as J}from"./text-CYioeczQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-4J70fF5O.js";const K="_space_1wgv4_1",r={space:K,"divider-content":"_divider-content_1wgv4_5","test-classname":"_test-classname_1wgv4_9","show-divider-group":"_show-divider-group_1wgv4_17"},De={title:"Components/Divider/Stories",component:i,argTypes:q},c=a=>e("div",{className:s.wrapper,children:e(i,{...a})});c.storyName=F;c.args={children:e("span",{className:r["divider-content"],children:F})};const d=a=>e("div",{className:s.wrapper,children:e(i,{...a})});d.storyName=L;d.args={children:e("span",{className:r["divider-content"],children:L}),dashed:!0};const l=a=>e("div",{className:s.wrapper,children:Object.values(y).map(D=>H.createElement(i,{...a,orientation:D,key:D}))});l.storyName=W;l.args={children:e("span",{className:r["divider-content"],children:W})};const o=a=>n("div",{className:s.wrapper,children:[e(i,{...a,orientation:y.left,orientationSpace:68}),e(i,{...a,orientation:y.right,orientationSpace:72})]});o.storyName=k;o.args={children:e("span",{className:r["divider-content"],children:k})};const p=a=>e("div",{className:s.wrapper,children:n("div",{style:{display:"flex"},children:[e("span",{className:r["divider-content"],children:"Текст №1"}),e(i,{...a,type:t.vertical,className:r.space}),e("span",{className:r["divider-content"],children:"Текст №2"}),e(i,{...a,type:t.vertical,dashed:!0,className:r.space}),e("span",{className:r["divider-content"],children:"Текст №3"})]})});p.storyName=G;p.args={};const m=a=>e("div",{className:s.wrapper,children:e(i,{...a,orientation:y.left,className:r["test-classname"],children:n("div",{style:{display:"flex",alignItems:"center"},children:[e("span",{className:r["divider-content"],children:"Экспертиза"}),e(v,{variant:"primary",fill:"clear",children:e(h,{name:"IconChemical24",containerSize:24,htmlColor:"var(--primary-blue-600)"})})]})})});m.storyName=P;m.args={children:P};const u=a=>n("div",{className:Y(s.wrapper,r["show-divider-group"]),children:[e(i,{...a,dashed:!0}),n("div",{style:{display:"flex"},children:[e("span",{className:r["divider-content"],children:"Текст №1"}),e(i,{...a,type:t.vertical}),e("span",{className:r["divider-content"],children:"Текст №2"}),e(i,{...a,type:t.vertical,dashed:!0}),e("span",{className:r["divider-content"],children:"Текст №3"})]}),e(i,{...a,dashed:!0,children:e(v,{children:e("span",{children:"Нажать"})})}),n("div",{style:{display:"flex"},children:[e("div",{style:{display:"flex",alignItems:"center"},children:e("span",{className:r["divider-content"],children:"Текст №1"})}),e(i,{...a,type:t.vertical,className:r.space}),e(v,{variant:"secondary",children:e("span",{children:"Нажать"})}),e(i,{...a,type:t.vertical,dashed:!0,className:r.space}),e(v,{variant:"primary",fill:"clear",children:e(h,{name:"IconChemical24",containerSize:24,htmlColor:"var(--primary-blue-600)"})})]}),e(i,{...a,orientation:y.left,children:n("div",{style:{display:"flex",alignItems:"center"},children:[e("span",{className:r["divider-content"],children:"Экспертиза"}),e(v,{variant:"primary",fill:"clear",children:e(h,{name:"IconChemical24",containerSize:24,htmlColor:"var(--primary-blue-600)"})})]})})]});u.storyName=J;u.args={};var N,g,I;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`(argTypes: IDivider): ReactNode => {
  return <div className={styles.wrapper}>
      <Divider {...argTypes} />
    </div>;
}`,...(I=(g=c.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var f,T,C;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`(argTypes: IDivider): ReactNode => {
  return <div className={styles.wrapper}>
      <Divider {...argTypes} />
    </div>;
}`,...(C=(T=d.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var S,_,w;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`(argTypes: IDivider): ReactNode => {
  return <div className={styles.wrapper}>
      {Object.values(orientationMapping).map((orientation: orientationMapping) => <Divider {...argTypes} orientation={orientation} key={orientation} />)}
    </div>;
}`,...(w=(_=l.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var x,E,A;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`(argTypes: IDivider): ReactNode => {
  return <div className={styles.wrapper}>
      <Divider {...argTypes} orientation={orientationMapping.left} orientationSpace={68} />
      <Divider {...argTypes} orientation={orientationMapping.right} orientationSpace={72} />
    </div>;
}`,...(A=(E=o.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var M,R,O;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`(argTypes: IDivider): ReactNode => {
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
}`,...(O=(R=p.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var V,B,b;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`(argTypes: IDivider): ReactNode => {
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
}`,...(b=(B=m.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var z,j,U;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`(argTypes: IDivider): ReactNode => {
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
}`,...(U=(j=u.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};const Ne=["DefaultDivider","DashedDivider","DividerOrientation","DividerOrientationWithCustomSpace","DividerVertical","DividerCustomClassName","DividerType"];export{d as DashedDivider,c as DefaultDivider,m as DividerCustomClassName,l as DividerOrientation,o as DividerOrientationWithCustomSpace,u as DividerType,p as DividerVertical,Ne as __namedExportsOrder,De as default};
