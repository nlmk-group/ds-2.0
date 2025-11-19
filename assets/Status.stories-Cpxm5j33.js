import{j as r}from"./jsx-runtime-BTJTZTIL.js";import{aP as s}from"./TreeList-CgatSFr0.js";import{a as O}from"./argsTypes-DL-OKzuv.js";import"./index-ChsGqxH_.js";import"./index-BcJSXhQi.js";import"./clsx-B-dksMZM.js";import"./generateUUID-CpKhmTry.js";import"./32-icvDJE6i.js";import"./index-DmffzHLE.js";import"./index-CzNzGEue.js";import"./index-CaDFz05s.js";import"./index-D8WlRtvM.js";import"./index-D-jyRV5V.js";import"./index-WHoiTdKD.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./index-VmJK6twV.js";import"./index-CRm92gKC.js";import"./index-DxgC_uyg.js";import"./index-BZ5zMSTm.js";import"./index-C5rKoyII.js";import"./tiny-invariant-CopsF_GD.js";const N="_wrapper_fhhiv_1",c={wrapper:N},i=({htmlColor:e="var(--spectrum-yellow-60)"})=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"16",fill:e,children:r.jsx("path",{d:"M12.047.002c-1.473.004-2.945.02-4.418.023a5.562 5.562 0 0 0-1.085.112C2.437.97-.353 4.657.036 8.72c.401 4.18 3.823 7.262 8.086 7.276 1.85.006 3.699 0 5.621 0 1.335-.05 2.62.034 3.854-.175 3.997-.675 6.682-4.378 6.38-8.65C23.713 3.4 20.32.13 16.464.037c-1.472-.035-2.944-.04-4.416-.035zm-.103 1.02a461.3 461.3 0 0 1 4.594.018c.162.002.322.01.48.027 1.107.112 2.115.569 3.043 1.214l.028.023.014.009c1.701 1.333 2.707 3.056 2.842 4.822 0 .013.003.026.004.04.009.127.013.254.013.382v.014c-.001.123-.005.246-.014.368H1.027a8.496 8.496 0 0 1 .057-.82 7.205 7.205 0 0 1 .234-1.154 6.577 6.577 0 0 1 .255-.718 6.48 6.48 0 0 1 .744-1.315c.225-.31.48-.604.763-.883a8.158 8.158 0 0 1 1.01-.846c.276-.196.562-.371.857-.523.296-.151.602-.279.917-.378a5.2 5.2 0 0 1 1.485-.243c1.531-.024 3.062-.035 4.594-.037Z"})});try{i.displayName="CustomIcon",i.__docgenInfo={description:"",displayName:"CustomIcon",props:{htmlColor:{defaultValue:{value:"var(--spectrum-yellow-60)"},description:"",name:"htmlColor",required:!1,type:{name:"string"}}}}}catch{}const U={title:"Components/Status/Stories",component:s,argTypes:O},o=e=>r.jsx("div",{className:c.wrapper,children:r.jsx(s,{...e,children:e.children})});o.storyName="Status по умолчанию";o.args={children:"Published",icon:"IconCloudDoneOutlined24"};const l=e=>r.jsxs("div",{className:c.wrapper,children:[r.jsx(s,{...e,icon:"IconCloudDoneOutlined24",color:"default",children:"Published"}),r.jsx(s,{...e,icon:"IconBlockCloseOutlined24",color:"error",children:"Cancelled"}),r.jsx(s,{...e,icon:"IconAllDoneDoubleCheckOutlined24",color:"success",children:"Pinned"}),r.jsx(s,{...e,icon:"IconPeopleCheckDoneOutlined24",color:"warning",children:"In progress"}),r.jsx(s,{...e,icon:"IconEditPenOutlined24",color:"grey",children:"Draft"})]});l.storyName="Status с разными цветами";const t=e=>r.jsxs("div",{className:c.wrapper,children:[r.jsx(s,{...e,fill:"solid",children:e.children}),r.jsx(s,{...e,fill:"clear",children:e.children})]});t.storyName="Status с разными заливками фона";t.args={children:"Pinned",icon:"IconAllDoneDoubleCheckOutlined24",color:"success"};const n=e=>r.jsxs("div",{className:c.wrapper,children:[r.jsx(s,{...e,size:"s",icon:"IconBlockCloseOutlined16",children:"Small"}),r.jsx(s,{...e,size:"m",icon:"IconBlockCloseOutlined24",children:"Medium"}),r.jsx(s,{...e,size:"l",icon:"IconBlockCloseOutlined24",children:"Large"})]});n.storyName="Status с разными размерами";n.args={color:"error"};const a=e=>r.jsx("div",{className:c.wrapper,children:r.jsx(s,{...e,icon:r.jsx(i,{htmlColor:"var(--spectrum-yellow-60)"}),children:e.children})});a.storyName="Status с нестандартной иконкой";a.args={children:"Partial drain",color:"warning",fill:"clear"};var u,p,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`(props: IStatusProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Status {...props}>{props.children}</Status>
    </div>;
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,S,h;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`(props: IStatusProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Status {...props} icon="IconCloudDoneOutlined24" color="default">
        Published
      </Status>
      <Status {...props} icon="IconBlockCloseOutlined24" color="error">
        Cancelled
      </Status>
      <Status {...props} icon="IconAllDoneDoubleCheckOutlined24" color="success">
        Pinned
      </Status>
      <Status {...props} icon="IconPeopleCheckDoneOutlined24" color="warning">
        In progress
      </Status>
      <Status {...props} icon="IconEditPenOutlined24" color="grey">
        Draft
      </Status>
    </div>;
}`,...(h=(S=l.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var C,I,g;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`(props: IStatusProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Status {...props} fill="solid">
        {props.children}
      </Status>
      <Status {...props} fill="clear">
        {props.children}
      </Status>
    </div>;
}`,...(g=(I=t.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};var w,x,v;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`(props: IStatusProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Status {...props} size="s" icon="IconBlockCloseOutlined16">
        Small
      </Status>
      <Status {...props} size="m" icon="IconBlockCloseOutlined24">
        Medium
      </Status>
      <Status {...props} size="l" icon="IconBlockCloseOutlined24">
        Large
      </Status>
    </div>;
}`,...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var y,j,f;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`(props: IStatusProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Status {...props} icon={<CustomIcon htmlColor="var(--spectrum-yellow-60)" />}>
        {props.children}
      </Status>
    </div>;
}`,...(f=(j=a.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};const W=["StatusDefault","StatusColors","StatusFills","StatusSizes","StatusCustomIcon"];export{l as StatusColors,a as StatusCustomIcon,o as StatusDefault,t as StatusFills,n as StatusSizes,W as __namedExportsOrder,U as default};
