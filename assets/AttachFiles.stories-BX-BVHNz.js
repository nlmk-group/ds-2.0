import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{r as v}from"./index-Bnop-kX6.js";import{a as s,F as a,s as q}from"./TreeList-DPzHLkJK.js";import"./generateUUID-4L6n6RLA.js";import"./index-C8k_JyfR.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DLbY_Jxu.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-DxaWDDI2.js";import"./index-DokmLR-l.js";import"./32-bzYAI2s2.js";import{a as o}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as z}from"./clsx-B-dksMZM.js";import{g as c}from"./styles.module-ox-emdf8.js";import{a as $,F as ee,b as l,c as G,d as te,e as ae,f as le,g as re,h as ne,i as ce,j as se}from"./text-CvDLagVv.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-B5g4YLzC.js";import"./v4-CQkTLCs1.js";const ie=t=>e.jsx("div",{style:{minHeight:80},children:e.jsx(t,{})}),we={title:"Components/AttachFiles/Stories",component:s,decorators:[ie],parameters:{actions:{argTypesRegex:"^on.*"}},argTypes:$},O=[e.jsx(a,{label:l}),e.jsx(a,{label:l,checked:!0}),e.jsx(a,{label:l,tick:!0}),e.jsx(a,{label:l,empty:!0})],i=t=>e.jsx("div",{className:c.wrapper,children:e.jsx(a,{...t})});i.storyName=ee;i.args={label:l};const d=t=>e.jsx("div",{className:c.wrapper,children:e.jsx(a,{...t})});d.storyName=G;d.args={description:G,label:l};const p=()=>e.jsx("div",{className:z(c.wrapper,q["vertical-wrapper"]),children:O.map((t,r)=>e.jsx(v.Fragment,{children:t},r))});p.storyName=te;const m=t=>e.jsxs("div",{className:z(c.wrapper,q["vertical-wrapper"]),children:[e.jsx(a,{label:l,removed:!0,removedOnClick:t.removedOnClick}),e.jsx(a,{label:l,commented:!0,commentedOnClick:t.commentedOnClick}),e.jsx(a,{label:l,saved:!0,savedOnClick:t.savedOnClick}),e.jsx(a,{label:l,commented:!0,commentedOnClick:t.commentedOnClick,removed:!0,removedOnClick:t.removedOnClick}),e.jsx(a,{label:l,commented:!0,commentedOnClick:t.commentedOnClick,saved:!0,savedOnClick:t.savedOnClick}),e.jsx(a,{label:l,removed:!0,removedOnClick:t.removedOnClick,saved:!0,savedOnClick:t.savedOnClick}),e.jsx(a,{label:l,commented:!0,commentedOnClick:t.commentedOnClick,removed:!0,removedOnClick:t.removedOnClick,saved:!0,savedOnClick:t.savedOnClick}),e.jsx(a,{label:l,addFile:!0,addFileOnClick:t.addFileOnClick})]});m.storyName=ae;m.args={removedOnClick:o("removedOnClick"),commentedOnClick:o("commentedOnClick"),savedOnClick:o("savedOnClick"),addFileOnClick:o("addFileOnClick")};const h=()=>e.jsx("div",{className:c.wrapper,children:e.jsx(s,{children:Array(4).fill(0).map(t=>e.jsx(a,{label:l,removed:!0},t))})});h.storyName=le;const F=()=>e.jsxs("div",{className:c.wrapper,style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(s,{title:e.jsx(a,{label:l,checked:!0}),children:O.map((t,r)=>e.jsx(v.Fragment,{children:t},r))}),e.jsx(s,{title:e.jsx(a,{label:l,empty:!0}),children:O.map((t,r)=>e.jsx(v.Fragment,{children:t},r))})]});F.storyName=re;const k=()=>e.jsx("div",{className:c.wrapper,children:e.jsx(s,{children:O.map((t,r)=>e.jsx(v.Fragment,{children:t},r))})});k.storyName=ne;const C=()=>e.jsx("div",{className:c.wrapper,children:e.jsx(s,{title:e.jsx(a,{label:l,checked:!0,addFile:!0,addFileOnClick:o("addFileOnClick")}),children:O.map(t=>t)})});C.storyName=ce;const u=()=>{const[t,r]=v.useState([!0,!1]),Q=n=>{r([n.target.checked,n.target.checked])},Y=n=>{r([n.target.checked,t[1]])},Z=n=>{r([t[0],n.target.checked])};return e.jsx("div",{className:c.wrapper,children:e.jsxs(s,{title:e.jsx(a,{label:l,checked:!0,checkedValue:t.some(n=>n),indeterminate:t.some(n=>!n),onCheckedChange:Q,addFile:!0,addFileOnClick:()=>console.log("Добавить файл!")}),children:[e.jsx(a,{label:l,checked:!0,checkedValue:t[0],onCheckedChange:Y,removed:!0}),e.jsx(a,{label:l,checked:!0,checkedValue:t[1],onCheckedChange:Z,removed:!0})]})})};u.storyName=se;var E,g,x;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`(argTypes: IFileProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <File {...argTypes} />
    </div>;
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var A,I,N;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`(argTypes: IFileProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <File {...argTypes} />
    </div>;
}`,...(N=(I=d.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var y,b,j;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={clsx(styles.wrapper, style['vertical-wrapper'])}>
      {FileCollection.map((FileItem: JSX.Element, index: number) => <Fragment key={index}>{FileItem}</Fragment>)}
    </div>;
}`,...(j=(b=p.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var L,S,_;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`(argTypes: IFileProps): JSX.Element => {
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
    gap: '16px'
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
}`,...(H=(W=k.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var V,P,B;C.parameters={...C.parameters,docs:{...(V=C.parameters)==null?void 0:V.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper}>
      <AttachFiles title={<File label={FILE_NAME} checked addFile addFileOnClick={action('addFileOnClick')} />}>
        {FileCollection.map((FileItem: JSX.Element) => FileItem)}
      </AttachFiles>
    </div>;
}`,...(B=(P=C.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var R,U,K;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(K=(U=u.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};const fe=["AttachFilesDefault","AttachFilesDescription","AttachFilesLeftIcon","AttachFilesControl","AttachFilesWithoutTitle","AttachFilesWithTitle","AttachFilesList","AttachFilesAddFileButton","AttachFilesWithCheckboxes"];export{C as AttachFilesAddFileButton,m as AttachFilesControl,i as AttachFilesDefault,d as AttachFilesDescription,p as AttachFilesLeftIcon,k as AttachFilesList,u as AttachFilesWithCheckboxes,F as AttachFilesWithTitle,h as AttachFilesWithoutTitle,fe as __namedExportsOrder,we as default};
