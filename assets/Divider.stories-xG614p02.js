import{j as e,a as n}from"./jsx-runtime-2xDJh5tt.js";import{r as H}from"./index-CBqU2yxZ.js";import{D as a,g as i,o as y,h as s,B as v}from"./index-DWTGGx_t.js";import"./generateUUID-DZpKhNdB.js";import"./index-C-x6zlLc.js";import"./index-CgSHB1U0.js";import"./index-BR2u5piM.js";import{I as h}from"./index-D3aZeTS2.js";import"./index-pmCx02Kh.js";import"./index-j1olA-rT.js";import"./index-Dp7-Jy-a.js";import"./index-ByRza-M8.js";import"./32-BI8cdrFX.js";import{c as Y}from"./clsx.m-CH7BE6MN.js";import{s as t}from"./styles.module-DeLvTIFi.js";import{a as q,D as L,b as U,c as k,d as P,V as G,e as W,f as J}from"./text-B6M0w6HN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-Y8Vz1tB_.js";const he={title:"Components/Divider/Stories",component:a,argTypes:q},d=r=>e("div",{className:t.wrapper,children:e(a,{...r})});d.storyName=L;d.args={children:e("span",{className:i["divider-content"],children:L})};const o=r=>e("div",{className:t.wrapper,children:e(a,{...r})});o.storyName=U;o.args={children:e("span",{className:i["divider-content"],children:U}),dashed:!0};const c=r=>e("div",{className:t.wrapper,children:Object.values(y).map(D=>H.createElement(a,{...r,orientation:D,key:D}))});c.storyName=k;c.args={children:e("span",{className:i["divider-content"],children:k})};const l=r=>n("div",{className:t.wrapper,children:[e(a,{...r,orientation:y.left,orientationSpace:68}),e(a,{...r,orientation:y.right,orientationSpace:72})]});l.storyName=P;l.args={children:e("span",{className:i["divider-content"],children:P})};const p=r=>e("div",{className:t.wrapper,children:n("div",{style:{display:"flex"},children:[e("span",{className:i["divider-content"],children:"Текст №1"}),e(a,{...r,type:s.vertical}),e("span",{className:i["divider-content"],children:"Текст №2"}),e(a,{...r,type:s.vertical,dashed:!0}),e("span",{className:i["divider-content"],children:"Текст №3"})]})});p.storyName=G;p.args={};const m=r=>e("div",{className:t.wrapper,children:e(a,{...r,orientation:y.left,className:i["test-classname"],children:n("div",{style:{display:"flex",alignItems:"center"},children:[e("span",{className:i["divider-content"],children:"Экспертиза"}),e(v,{variant:"primary",fill:"clear",children:e(h,{name:"IconChemical24",containerSize:24,htmlColor:"var(--primary-blue-600)"})})]})})});m.storyName=W;m.args={children:W};const u=r=>n("div",{className:Y(t.wrapper,i["show-divider-group"]),children:[e(a,{...r,dashed:!0}),n("div",{style:{display:"flex"},children:[e("span",{className:i["divider-content"],children:"Текст №1"}),e(a,{...r,type:s.vertical}),e("span",{className:i["divider-content"],children:"Текст №2"}),e(a,{...r,type:s.vertical,dashed:!0}),e("span",{className:i["divider-content"],children:"Текст №3"})]}),e(a,{...r,dashed:!0,children:e(v,{children:e("span",{children:"Нажать"})})}),n("div",{style:{display:"flex"},children:[e("div",{style:{display:"flex",alignItems:"center"},children:e("span",{className:i["divider-content"],children:"Текст №1"})}),e(a,{...r,type:s.vertical}),e(v,{variant:"secondary",children:e("span",{children:"Нажать"})}),e(a,{...r,type:s.vertical,dashed:!0}),e(v,{variant:"primary",fill:"clear",children:e(h,{name:"IconChemical24",containerSize:24,htmlColor:"var(--primary-blue-600)"})})]}),e(a,{...r,orientation:y.left,children:n("div",{style:{display:"flex",alignItems:"center"},children:[e("span",{className:i["divider-content"],children:"Экспертиза"}),e(v,{variant:"primary",fill:"clear",children:e(h,{name:"IconChemical24",containerSize:24,htmlColor:"var(--primary-blue-600)"})})]})})]});u.storyName=J;u.args={};var N,g,I;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`(argTypes: IDivider): ReactNode => {
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
}`,...(E=(x=c.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var A,M,R;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`(argTypes: IDivider): ReactNode => {
  return <div className={styles.wrapper}>
      <Divider {...argTypes} orientation={orientationMapping.left} orientationSpace={68} />
      <Divider {...argTypes} orientation={orientationMapping.right} orientationSpace={72} />
    </div>;
}`,...(R=(M=l.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var w,O,_;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`(argTypes: IDivider): ReactNode => {
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
}`,...(_=(O=p.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var B,V,b;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`(argTypes: IDivider): ReactNode => {
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
}`,...(F=(j=u.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};const De=["DefaultDivider","DashedDivider","DividerOrientation","DividerOrientationWithCustomSpace","DividerVertical","DividerCustomClassName","DividerType"];export{o as DashedDivider,d as DefaultDivider,m as DividerCustomClassName,c as DividerOrientation,l as DividerOrientationWithCustomSpace,u as DividerType,p as DividerVertical,De as __namedExportsOrder,he as default};
