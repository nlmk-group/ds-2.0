import{j as e}from"./jsx-runtime-DFnSfiB4.js";import{r as u}from"./index-DQ2WTIsS.js";import{a as s,F as a,s as q}from"./index-BB0QFCoF.js";import"./generateUUID-vFnGh3I6.js";import"./index-CNoQ_QnE.js";import"./index-CSbymPMC.js";import"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import"./index-ehXB0alm.js";import"./index-Cw4KJrZO.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-BvIp-sDO.js";import"./32-MLA202Yz.js";import{a as o}from"./chunk-454WOBUV-CM0pFb8Z.js";import{c as z}from"./clsx-B-dksMZM.js";import{s as c}from"./styles.module-BSI8LUpZ.js";import{a as $,F as ee,b as r,c as G,d as te,e as ae,f as re,g as le,h as ne,i as ce,j as se}from"./text-BlM6NsIu.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./index-BKbm6zW0.js";import"./v4-CQkTLCs1.js";const ie=t=>e.jsx("div",{style:{minHeight:80},children:t()}),we={title:"Components/AttachFiles/Stories",component:s,decorators:[ie],parameters:{actions:{argTypesRegex:"^on.*"}},argTypes:$},O=[e.jsx(a,{label:r}),e.jsx(a,{label:r,checked:!0}),e.jsx(a,{label:r,tick:!0}),e.jsx(a,{label:r,empty:!0})],i=t=>e.jsx("div",{className:c.wrapper,children:e.jsx(a,{...t})});i.storyName=ee;i.args={label:r};const d=t=>e.jsx("div",{className:c.wrapper,children:e.jsx(a,{...t})});d.storyName=G;d.args={description:G,label:r};const p=()=>e.jsx("div",{className:z(c.wrapper,q["vertical-wrapper"]),children:O.map((t,l)=>e.jsx(u.Fragment,{children:t},l))});p.storyName=te;const m=t=>e.jsxs("div",{className:z(c.wrapper,q["vertical-wrapper"]),children:[e.jsx(a,{label:r,removed:!0,removedOnClick:t.removedOnClick}),e.jsx(a,{label:r,commented:!0,commentedOnClick:t.commentedOnClick}),e.jsx(a,{label:r,saved:!0,savedOnClick:t.savedOnClick}),e.jsx(a,{label:r,commented:!0,commentedOnClick:t.commentedOnClick,removed:!0,removedOnClick:t.removedOnClick}),e.jsx(a,{label:r,commented:!0,commentedOnClick:t.commentedOnClick,saved:!0,savedOnClick:t.savedOnClick}),e.jsx(a,{label:r,removed:!0,removedOnClick:t.removedOnClick,saved:!0,savedOnClick:t.savedOnClick}),e.jsx(a,{label:r,commented:!0,commentedOnClick:t.commentedOnClick,removed:!0,removedOnClick:t.removedOnClick,saved:!0,savedOnClick:t.savedOnClick}),e.jsx(a,{label:r,addFile:!0,addFileOnClick:t.addFileOnClick})]});m.storyName=ae;m.args={removedOnClick:o("removedOnClick"),commentedOnClick:o("commentedOnClick"),savedOnClick:o("savedOnClick"),addFileOnClick:o("addFileOnClick")};const h=()=>e.jsx("div",{className:c.wrapper,children:e.jsx(s,{children:Array(4).fill(0).map(t=>e.jsx(a,{label:r,removed:!0},t))})});h.storyName=re;const F=()=>e.jsxs("div",{className:c.wrapper,style:{display:"flex",flexDirection:"column",gap:"var(--16-space)"},children:[e.jsx(s,{title:e.jsx(a,{label:r,checked:!0}),children:O.map((t,l)=>e.jsx(u.Fragment,{children:t},l))}),e.jsx(s,{title:e.jsx(a,{label:r,empty:!0}),children:O.map((t,l)=>e.jsx(u.Fragment,{children:t},l))})]});F.storyName=le;const k=()=>e.jsx("div",{className:c.wrapper,children:e.jsx(s,{children:O.map((t,l)=>e.jsx(u.Fragment,{children:t},l))})});k.storyName=ne;const C=()=>e.jsx("div",{className:c.wrapper,children:e.jsx(s,{title:e.jsx(a,{label:r,checked:!0,addFile:!0,addFileOnClick:o("addFileOnClick")}),children:O.map(t=>t)})});C.storyName=ce;const v=()=>{const[t,l]=u.useState([!0,!1]),Q=n=>{l([n.target.checked,n.target.checked])},Y=n=>{l([n.target.checked,t[1]])},Z=n=>{l([t[0],n.target.checked])};return e.jsx("div",{className:c.wrapper,children:e.jsxs(s,{title:e.jsx(a,{label:r,checked:!0,checkedValue:t.some(n=>n),indeterminate:t.some(n=>!n),onCheckedChange:Q,addFile:!0,addFileOnClick:()=>console.log("Добавить файл!")}),children:[e.jsx(a,{label:r,checked:!0,checkedValue:t[0],onCheckedChange:Y,removed:!0}),e.jsx(a,{label:r,checked:!0,checkedValue:t[1],onCheckedChange:Z,removed:!0})]})})};v.storyName=se;var E,g,x;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`(argTypes: IFile): JSX.Element => {
  return <div className={styles.wrapper}>
      <File {...argTypes} />
    </div>;
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var A,I,N;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`(argTypes: IFile): JSX.Element => {
  return <div className={styles.wrapper}>
      <File {...argTypes} />
    </div>;
}`,...(N=(I=d.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var y,b,j;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={clsx(styles.wrapper, style['vertical-wrapper'])}>
      {FileCollection.map((FileItem: JSX.Element, index: number) => <Fragment key={index}>{FileItem}</Fragment>)}
    </div>;
}`,...(j=(b=p.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var L,S,_;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`(argTypes: IFile): JSX.Element => {
  return <div className={clsx(styles.wrapper, style['vertical-wrapper'])}>
      <File label={FILE_NAME} removed removedOnClick={argTypes.removedOnClick}
    // {...handlers}
    />
      <File label={FILE_NAME} commented commentedOnClick={argTypes.commentedOnClick} />
      <File label={FILE_NAME} saved savedOnClick={argTypes.savedOnClick} />
      <File label={FILE_NAME} commented commentedOnClick={argTypes.commentedOnClick} removed removedOnClick={argTypes.removedOnClick} />
      <File label={FILE_NAME} commented commentedOnClick={argTypes.commentedOnClick} saved savedOnClick={argTypes.savedOnClick} />
      <File label={FILE_NAME} removed removedOnClick={argTypes.removedOnClick} saved savedOnClick={argTypes.savedOnClick} />
      <File label={FILE_NAME} commented commentedOnClick={argTypes.commentedOnClick} removed removedOnClick={argTypes.removedOnClick} saved savedOnClick={argTypes.savedOnClick} />
      <File label={FILE_NAME} addFile addFileOnClick={argTypes.addFileOnClick} />
    </div>;
}`,...(_=(S=m.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var T,w,f;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper}>
      <AttachFiles>
        {Array(4).fill(0).map((index: number) => <File label={FILE_NAME} removed key={index} />)}
      </AttachFiles>
    </div>;
}`,...(f=(w=h.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var M,X,J;F.parameters={...F.parameters,docs:{...(M=F.parameters)==null?void 0:M.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper} style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--16-space)'
  }}>
      <AttachFiles title={<File label={FILE_NAME} checked />}>
        {FileCollection.map((FileItem: JSX.Element, index: number) => <Fragment key={index}>{FileItem}</Fragment>)}
      </AttachFiles>
      <AttachFiles title={<File label={FILE_NAME} empty />}>
        {FileCollection.map((FileItem: JSX.Element, index: number) => <Fragment key={index}>{FileItem}</Fragment>)}
      </AttachFiles>
    </div>;
}`,...(J=(X=F.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var D,W,H;k.parameters={...k.parameters,docs:{...(D=k.parameters)==null?void 0:D.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper}>
      <AttachFiles>
        {FileCollection.map((FileItem: JSX.Element, index: number) => <Fragment key={index}>{FileItem}</Fragment>)}
      </AttachFiles>
    </div>;
}`,...(H=(W=k.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var V,B,R;C.parameters={...C.parameters,docs:{...(V=C.parameters)==null?void 0:V.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper}>
      <AttachFiles title={<File label={FILE_NAME} checked addFile addFileOnClick={action('addFileOnClick')} />}>
        {FileCollection.map((FileItem: JSX.Element) => FileItem)}
      </AttachFiles>
    </div>;
}`,...(R=(B=C.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var U,P,K;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`(): JSX.Element => {
  const [checked, setChecked] = useState([true, false]);
  const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };
  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };
  const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };
  return <div className={styles.wrapper}>
      <AttachFiles title={<File label={FILE_NAME} checked checkedValue={checked.some(ch => ch)} indeterminate={checked.some(ch => !ch)} onCheckedChange={handleChange1} addFile addFileOnClick={() => console.log('Добавить файл!')} />}>
        <File label={FILE_NAME} checked checkedValue={checked[0]} onCheckedChange={handleChange2} removed />
        <File label={FILE_NAME} checked checkedValue={checked[1]} onCheckedChange={handleChange3} removed />
      </AttachFiles>
    </div>;
}`,...(K=(P=v.parameters)==null?void 0:P.docs)==null?void 0:K.source}}};const fe=["AttachFilesDefault","AttachFilesDescription","AttachFilesLeftIcon","AttachFilesControl","AttachFilesWithoutTitle","AttachFilesWithTitle","AttachFilesList","AttachFilesAddFileButton","AttachFilesWithCheckboxes"];export{C as AttachFilesAddFileButton,m as AttachFilesControl,i as AttachFilesDefault,d as AttachFilesDescription,p as AttachFilesLeftIcon,k as AttachFilesList,v as AttachFilesWithCheckboxes,F as AttachFilesWithTitle,h as AttachFilesWithoutTitle,fe as __namedExportsOrder,we as default};
