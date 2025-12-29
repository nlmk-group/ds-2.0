import{j as r}from"./iframe-CVAHojaF.js";import{S as s}from"./index-B5cJZo4f.js";import{a as u}from"./argsTypes-C6JzzB85.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BHrg75jh.js";import"./clsx-B-dksMZM.js";import"./index-BN_w7FjE.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-BGkTw_Iv.js";import"./24-DhWu0U6R.js";import"./24-QBRQbIxz.js";import"./24-DbZB43lA.js";import"./24-CpQC9mRz.js";import"./24-D4AD88CD.js";import"./24-i225Oh9B.js";import"./24-Tgd-_Nih.js";import"./24-BHgrLOFn.js";import"./24-DKX7LJ7g.js";import"./16-D51laVEK.js";import"./24-DoIGH_dx.js";import"./24-BKsua3Hk.js";import"./16-D08SDomb.js";import"./16-R8HovCn5.js";import"./16-DOUHJXJi.js";const p="Status-module__wrapper___wJ-zD",c={wrapper:p},i=({htmlColor:e="var(--spectrum-yellow-60)"})=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"16",fill:e,children:r.jsx("path",{d:"M12.047.002c-1.473.004-2.945.02-4.418.023a5.562 5.562 0 0 0-1.085.112C2.437.97-.353 4.657.036 8.72c.401 4.18 3.823 7.262 8.086 7.276 1.85.006 3.699 0 5.621 0 1.335-.05 2.62.034 3.854-.175 3.997-.675 6.682-4.378 6.38-8.65C23.713 3.4 20.32.13 16.464.037c-1.472-.035-2.944-.04-4.416-.035zm-.103 1.02a461.3 461.3 0 0 1 4.594.018c.162.002.322.01.48.027 1.107.112 2.115.569 3.043 1.214l.028.023.014.009c1.701 1.333 2.707 3.056 2.842 4.822 0 .013.003.026.004.04.009.127.013.254.013.382v.014c-.001.123-.005.246-.014.368H1.027a8.496 8.496 0 0 1 .057-.82 7.205 7.205 0 0 1 .234-1.154 6.577 6.577 0 0 1 .255-.718 6.48 6.48 0 0 1 .744-1.315c.225-.31.48-.604.763-.883a8.158 8.158 0 0 1 1.01-.846c.276-.196.562-.371.857-.523.296-.151.602-.279.917-.378a5.2 5.2 0 0 1 1.485-.243c1.531-.024 3.062-.035 4.594-.037Z"})});try{i.displayName="CustomIcon",i.__docgenInfo={description:"",displayName:"CustomIcon",props:{htmlColor:{defaultValue:{value:"var(--spectrum-yellow-60)"},description:"",name:"htmlColor",required:!1,type:{name:"string"}}}}}catch{}const X={title:"Components/Status/Stories",component:s,argTypes:u},t=e=>r.jsx("div",{className:c.wrapper,children:r.jsx(s,{...e,children:e.children})});t.storyName="Status по умолчанию";t.args={children:"Published",icon:"IconCloudDoneOutlined24"};const l=e=>r.jsxs("div",{className:c.wrapper,children:[r.jsx(s,{...e,icon:"IconCloudDoneOutlined24",color:"default",children:"Published"}),r.jsx(s,{...e,icon:"IconBlockCloseOutlined24",color:"error",children:"Cancelled"}),r.jsx(s,{...e,icon:"IconAllDoneDoubleCheckOutlined24",color:"success",children:"Pinned"}),r.jsx(s,{...e,icon:"IconPeopleCheckDoneOutlined24",color:"warning",children:"In progress"}),r.jsx(s,{...e,icon:"IconEditPenOutlined24",color:"grey",children:"Draft"})]});l.storyName="Status с разными цветами";const o=e=>r.jsxs("div",{className:c.wrapper,children:[r.jsx(s,{...e,fill:"solid",children:e.children}),r.jsx(s,{...e,fill:"clear",children:e.children})]});o.storyName="Status с разными заливками фона";o.args={children:"Pinned",icon:"IconAllDoneDoubleCheckOutlined24",color:"success"};const n=e=>r.jsxs("div",{className:c.wrapper,children:[r.jsx(s,{...e,size:"s",icon:"IconBlockCloseOutlined16",children:"Small"}),r.jsx(s,{...e,size:"m",icon:"IconBlockCloseOutlined24",children:"Medium"}),r.jsx(s,{...e,size:"l",icon:"IconBlockCloseOutlined24",children:"Large"})]});n.storyName="Status с разными размерами";n.args={color:"error"};const a=e=>r.jsx("div",{className:c.wrapper,children:r.jsx(s,{...e,icon:r.jsx(i,{htmlColor:"var(--spectrum-yellow-60)"}),children:e.children})});a.storyName="Status с нестандартной иконкой";a.args={children:"Partial drain",color:"warning",fill:"clear"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(props: IStatusProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Status {...props}>{props.children}</Status>
    </div>;
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(props: IStatusProps): JSX.Element => {
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
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(props: IStatusProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Status {...props} fill="solid">
        {props.children}
      </Status>
      <Status {...props} fill="clear">
        {props.children}
      </Status>
    </div>;
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(props: IStatusProps): JSX.Element => {
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
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(props: IStatusProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Status {...props} icon={<CustomIcon htmlColor="var(--spectrum-yellow-60)" />}>
        {props.children}
      </Status>
    </div>;
}`,...a.parameters?.docs?.source}}};const A=["StatusDefault","StatusColors","StatusFills","StatusSizes","StatusCustomIcon"];export{l as StatusColors,a as StatusCustomIcon,t as StatusDefault,o as StatusFills,n as StatusSizes,A as __namedExportsOrder,X as default};
