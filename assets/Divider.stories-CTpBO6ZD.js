import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{av as s,n,m as t,B as v,aw as q}from"./TreeList-ls9Njcdr.js";import"./generateUUID-CpKhmTry.js";import"./index-CzNzGEue.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import{T as a}from"./index-DmffzHLE.js";import{I as g}from"./index-CaDFz05s.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-BZ5zMSTm.js";import"./index-C5rKoyII.js";import"./index-BcJSXhQi.js";import"./32-icvDJE6i.js";import{c as V}from"./clsx-B-dksMZM.js";import{g as o}from"./styles.module-m0Zsy3Hi.js";import{a as W}from"./argsTypes-Pdb9ekMS.js";import"./index-ChsGqxH_.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";const A="_space_l8ozg_1",i={space:A,"divider-content":"_divider-content_l8ozg_5","test-classname":"_test-classname_l8ozg_9","btn-divider-handler":"_btn-divider-handler_l8ozg_17","show-divider-group":"_show-divider-group_l8ozg_21"},ve={title:"Components/Divider/Stories",component:s,argTypes:W},d=r=>e.jsx("div",{className:o.wrapper,children:e.jsx(s,{...r})});d.storyName="Divider по умолчанию";d.args={children:e.jsx(a,{children:"Divider по умолчанию"})};const c=r=>e.jsx("div",{className:o.wrapper,children:e.jsx(s,{...r})});c.storyName="Divider с пунктирной линией";c.args={children:e.jsx(a,{className:i["divider-content"],children:"Divider с пунктирной линией"}),dashed:!0};const p=r=>e.jsxs("div",{className:o.wrapper,children:[e.jsx(s,{...r,orientation:n.left,children:e.jsx(a,{className:i["divider-content"],children:"Left"})}),e.jsx(s,{...r,orientation:n.center,children:e.jsx(a,{className:i["divider-content"],children:"Center"})}),e.jsx(s,{...r,orientation:n.right,children:e.jsx(a,{className:i["divider-content"],children:"Right"})})]});p.storyName="Варианты ориентаций Divider";p.args={};const l=r=>e.jsxs("div",{className:o.wrapper,children:[e.jsx(s,{...r,orientation:n.left,orientationSpace:68}),e.jsx(s,{...r,orientation:n.right,orientationSpace:72})]});l.storyName="Кастомизация размера пространства";l.args={children:e.jsx(a,{className:i["divider-content"],children:"Кастомизация размера пространства"})};const y=r=>e.jsx("div",{className:o.wrapper,children:e.jsxs("div",{style:{display:"flex"},children:[e.jsx(a,{className:i["divider-content"],children:"Текст №1"}),e.jsx(s,{...r,type:t.vertical,className:i.space}),e.jsx(a,{className:i["divider-content"],children:"Текст №2"}),e.jsx(s,{...r,type:t.vertical,dashed:!0,className:i.space}),e.jsx(a,{className:i["divider-content"],children:"Текст №3"})]})});y.storyName="Вертикальный Divider";const m=r=>e.jsx("div",{className:o.wrapper,children:e.jsx(s,{...r,orientation:n.left,className:i["test-classname"],children:e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx(a,{className:i["divider-content"],children:"Экспертиза"}),e.jsx(v,{type:"button",size:"m",className:i["btn-divider-handler"],iconButton:e.jsx(g,{name:"IconChemical24",containerSize:16,htmlColor:"var(--unique-white)"})})]})})});m.storyName="Divider с кастомным классом";const h=r=>e.jsxs("div",{className:V(o.wrapper,i["show-divider-group"]),children:[e.jsx(s,{...r,dashed:!0}),e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx(a,{className:i["divider-content"],children:"Текст №1"}),e.jsx(s,{...r,type:t.vertical}),e.jsx(a,{className:i["divider-content"],children:"Текст №2"}),e.jsx(s,{...r,type:t.vertical,dashed:!0}),e.jsx(a,{className:i["divider-content"],children:"Текст №3"})]}),e.jsx(s,{...r,dashed:!0,children:e.jsx(v,{type:"button",children:e.jsx("span",{children:"Нажать"})})}),e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx("div",{style:{display:"flex",alignItems:"center"},children:e.jsx(a,{className:i["divider-content"],children:"Текст №1"})}),e.jsx(s,{...r,type:t.vertical,className:i.space}),e.jsx(v,{type:"button",variant:"secondary",children:e.jsx("span",{children:"Нажать"})}),e.jsx(s,{...r,type:t.vertical,dashed:!0,className:i.space}),e.jsx(v,{type:"button",variant:"primary",color:"ghost",iconButton:e.jsx(g,{name:"IconChemical24",containerSize:24,htmlColor:"var(--brand-sapphire-60)"})}),e.jsx(s,{...r,type:t.vertical,dashed:!0,className:i.space}),e.jsx("span",{style:{display:"flex",alignItems:"center"},children:e.jsx(q,{href:"#",children:"Ссылка"})})]}),e.jsx(s,{...r,orientation:n.left,children:e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx(a,{className:i["divider-content"],children:"Экспертиза"}),e.jsx(v,{type:"button",variant:"primary",color:"ghost",iconButton:e.jsx(g,{name:"IconChemical24",containerSize:24,htmlColor:"var(--brand-sapphire-60)"})})]})})]});h.storyName="Типы Divider";var u,x,D;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`(argTypes: IDividerProps): ReactNode => {
  return <div className={styles.wrapper}>
      <Divider {...argTypes} />
    </div>;
}`,...(D=(x=d.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var N,j,T;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`(argTypes: IDividerProps): ReactNode => {
  return <div className={styles.wrapper}>
      <Divider {...argTypes} />
    </div>;
}`,...(T=(j=c.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var f,I,w;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`(argTypes: IDividerProps): ReactNode => {
  return <div className={styles.wrapper}>
      <Divider {...argTypes} orientation={EDividerOrientation.left}>
        <Typography className={style['divider-content']}>Left</Typography>
      </Divider>
      <Divider {...argTypes} orientation={EDividerOrientation.center}>
        <Typography className={style['divider-content']}>Center</Typography>
      </Divider>
      <Divider {...argTypes} orientation={EDividerOrientation.right}>
        <Typography className={style['divider-content']}>Right</Typography>
      </Divider>
    </div>;
}`,...(w=(I=p.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var C,S,b;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`(argTypes: IDividerProps): ReactNode => {
  return <div className={styles.wrapper}>
      <Divider {...argTypes} orientation={EDividerOrientation.left} orientationSpace={68} />
      <Divider {...argTypes} orientation={EDividerOrientation.right} orientationSpace={72} />
    </div>;
}`,...(b=(S=l.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var E,_,B;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`(argTypes: IDividerProps): ReactNode => {
  return <div className={styles.wrapper}>
      <div style={{
      display: 'flex'
    }}>
        <Typography className={style['divider-content']}>Текст №1</Typography>
        <Divider {...argTypes} type={EDividerType.vertical} className={style.space} />
        <Typography className={style['divider-content']}>Текст №2</Typography>
        <Divider {...argTypes} type={EDividerType.vertical} dashed className={style.space} />
        <Typography className={style['divider-content']}>Текст №3</Typography>
      </div>
    </div>;
}`,...(B=(_=y.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var z,O,R;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`(argTypes: IDividerProps): ReactNode => {
  return <div className={styles.wrapper}>
      <Divider {...argTypes} orientation={EDividerOrientation.left} className={style['test-classname']}>
        <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
          <Typography className={style['divider-content']}>Экспертиза</Typography>
          <Button type="button" size="m" className={style['btn-divider-handler']} iconButton={<Icon name="IconChemical24" containerSize={16} htmlColor="var(--unique-white)" />} />
        </div>
      </Divider>
    </div>;
}`,...(R=(O=m.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var P,L,k;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`(argTypes: IDividerProps): ReactNode => {
  return <div className={clsx(styles.wrapper, style['show-divider-group'])}>
      <Divider {...argTypes} dashed />

      <div style={{
      display: 'flex',
      gap: '16px'
    }}>
        <Typography className={style['divider-content']}>Текст №1</Typography>
        <Divider {...argTypes} type={EDividerType.vertical} />
        <Typography className={style['divider-content']}>Текст №2</Typography>
        <Divider {...argTypes} type={EDividerType.vertical} dashed />
        <Typography className={style['divider-content']}>Текст №3</Typography>
      </div>

      <Divider {...argTypes} dashed>
        <Button type="button">
          <span>Нажать</span>
        </Button>
      </Divider>

      <div style={{
      display: 'flex',
      gap: '16px'
    }}>
        <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
          <Typography className={style['divider-content']}>Текст №1</Typography>
        </div>
        <Divider {...argTypes} type={EDividerType.vertical} className={style.space} />
        <Button type="button" variant="secondary">
          <span>Нажать</span>
        </Button>
        <Divider {...argTypes} type={EDividerType.vertical} dashed className={style.space} />
        <Button type="button" variant="primary" color="ghost" iconButton={<Icon name="IconChemical24" containerSize={24} htmlColor="var(--brand-sapphire-60)" />} />
        <Divider {...argTypes} type={EDividerType.vertical} dashed className={style.space} />
        <span style={{
        display: 'flex',
        alignItems: 'center'
      }}>
          <Link href="#">Ссылка</Link>
        </span>
      </div>

      <Divider {...argTypes} orientation={EDividerOrientation.left}>
        <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
          <Typography className={style['divider-content']}>Экспертиза</Typography>
          <Button type="button" variant="primary" color="ghost" iconButton={<Icon name="IconChemical24" containerSize={24} htmlColor="var(--brand-sapphire-60)" />} />
        </div>
      </Divider>
    </div>;
}`,...(k=(L=h.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};const ye=["DividerDefault","DividerDashed","DividerOrientation","DividerOrientationWithCustomSpace","DividerVertical","DividerCustomClassName","DividerType"];export{m as DividerCustomClassName,c as DividerDashed,d as DividerDefault,p as DividerOrientation,l as DividerOrientationWithCustomSpace,h as DividerType,y as DividerVertical,ye as __namedExportsOrder,ve as default};
