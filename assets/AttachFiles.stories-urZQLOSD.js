import{j as t,a as E}from"./jsx-runtime-2xDJh5tt.js";import{r as v}from"./index-CBqU2yxZ.js";import{A as c,F as a,a as z}from"./index-CTSkFh7q.js";import"./generateUUID-B5cPxuxR.js";import"./index-CcmeEFL2.js";import"./index-CTkD9j2t.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import"./index-nWYpQihe.js";import"./index-D_LOBm7Z.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-DkuQRQ9j.js";import"./32-C0P3XX_L.js";import{a as o}from"./chunk-WFFRPTHA-B5TewAtn.js";import{c as G}from"./clsx.m-CH7BE6MN.js";import{s as n}from"./styles.module-DeLvTIFi.js";import{a as ee,F as te,b as r,c as Q,d as ae,e as re,f as le,g as ne,h as ce,i as ie,j as se}from"./text-BlM6NsIu.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-CMH8wQUv.js";import"./preview-errors-Dg5lG0lC.js";import"./index-DrFu-skq.js";const de=e=>t("div",{style:{minHeight:80},children:e()}),Xe={title:"Components/AttachFiles/Stories",component:c,decorators:[de],parameters:{actions:{argTypesRegex:"^on.*"}},argTypes:ee},O=[t(a,{label:r}),t(a,{label:r,checked:!0}),t(a,{label:r,tick:!0}),t(a,{label:r,empty:!0})],s=e=>t("div",{className:n.wrapper,children:t(a,{...e})});s.storyName=te;s.args={label:r};const d=e=>t("div",{className:n.wrapper,children:t(a,{...e})});d.storyName=Q;d.args={description:Q,label:r};const p=()=>t("div",{className:G(n.wrapper,z["vertical-wrapper"]),children:O.map((e,l)=>t(v.Fragment,{children:e},l))});p.storyName=ae;const m=e=>E("div",{className:G(n.wrapper,z["vertical-wrapper"]),children:[t(a,{label:r,removed:!0,removedOnClick:e.removedOnClick}),t(a,{label:r,commented:!0,commentedOnClick:e.commentedOnClick}),t(a,{label:r,saved:!0,savedOnClick:e.savedOnClick}),t(a,{label:r,commented:!0,commentedOnClick:e.commentedOnClick,removed:!0,removedOnClick:e.removedOnClick}),t(a,{label:r,commented:!0,commentedOnClick:e.commentedOnClick,saved:!0,savedOnClick:e.savedOnClick}),t(a,{label:r,removed:!0,removedOnClick:e.removedOnClick,saved:!0,savedOnClick:e.savedOnClick}),t(a,{label:r,commented:!0,commentedOnClick:e.commentedOnClick,removed:!0,removedOnClick:e.removedOnClick,saved:!0,savedOnClick:e.savedOnClick}),t(a,{label:r,addFile:!0,addFileOnClick:e.addFileOnClick})]});m.storyName=re;m.args={removedOnClick:o("removedOnClick"),commentedOnClick:o("commentedOnClick"),savedOnClick:o("savedOnClick"),addFileOnClick:o("addFileOnClick")};const h=()=>t("div",{className:n.wrapper,children:t(c,{children:Array(4).fill(0).map(e=>t(a,{label:r,removed:!0},e))})});h.storyName=le;const F=()=>E("div",{className:n.wrapper,style:{display:"flex",flexDirection:"column",gap:"var(--16-space)"},children:[t(c,{title:t(a,{label:r,checked:!0}),children:O.map((e,l)=>t(v.Fragment,{children:e},l))}),t(c,{title:t(a,{label:r,empty:!0}),children:O.map((e,l)=>t(v.Fragment,{children:e},l))})]});F.storyName=ne;const k=()=>t("div",{className:n.wrapper,children:t(c,{children:O.map((e,l)=>t(v.Fragment,{children:e},l))})});k.storyName=ce;const u=()=>t("div",{className:n.wrapper,children:t(c,{title:t(a,{label:r,checked:!0,addFile:!0,addFileOnClick:o("addFileOnClick")}),children:O.map(e=>e)})});u.storyName=ie;const C=()=>{const[e,l]=v.useState([!0,!1]),Y=i=>{l([i.target.checked,i.target.checked])},Z=i=>{l([i.target.checked,e[1]])},$=i=>{l([e[0],i.target.checked])};return t("div",{className:n.wrapper,children:E(c,{title:t(a,{label:r,checked:!0,checkedValue:e[0]&&e[1],indeterminate:!0,onCheckedChange:Y,addFile:!0,addFileOnClick:()=>console.log("Добавить файл!")}),children:[t(a,{label:r,checked:!0,checkedValue:e[0],onCheckedChange:Z,removed:!0}),t(a,{label:r,checked:!0,checkedValue:e[1],onCheckedChange:$,removed:!0})]})})};C.storyName=se;var g,A,I;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`(argTypes: IFile): JSX.Element => {
  return <div className={styles.wrapper}>
      <File {...argTypes} />
    </div>;
}`,...(I=(A=s.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var N,y,b;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`(argTypes: IFile): JSX.Element => {
  return <div className={styles.wrapper}>
      <File {...argTypes} />
    </div>;
}`,...(b=(y=d.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var L,S,_;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={clsx(styles.wrapper, style['vertical-wrapper'])}>
      {FileCollection.map((FileItem: JSX.Element, index: number) => <Fragment key={index}>{FileItem}</Fragment>)}
    </div>;
}`,...(_=(S=p.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var T,x,w;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`(argTypes: IFile): JSX.Element => {
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
}`,...(w=(x=m.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var f,M,X;h.parameters={...h.parameters,docs:{...(f=h.parameters)==null?void 0:f.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper}>
      <AttachFiles>
        {Array(4).fill(0).map((index: number) => <File label={FILE_NAME} removed key={index} />)}
      </AttachFiles>
    </div>;
}`,...(X=(M=h.parameters)==null?void 0:M.docs)==null?void 0:X.source}}};var J,D,W;F.parameters={...F.parameters,docs:{...(J=F.parameters)==null?void 0:J.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(W=(D=F.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var H,V,B;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper}>
      <AttachFiles>
        {FileCollection.map((FileItem: JSX.Element, index: number) => <Fragment key={index}>{FileItem}</Fragment>)}
      </AttachFiles>
    </div>;
}`,...(B=(V=k.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var j,R,U;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper}>
      <AttachFiles title={<File label={FILE_NAME} checked addFile addFileOnClick={action('addFileOnClick')} />}>
        {FileCollection.map((FileItem: JSX.Element) => FileItem)}
      </AttachFiles>
    </div>;
}`,...(U=(R=u.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var P,K,q;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`(): JSX.Element => {
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
      <AttachFiles title={<File label={FILE_NAME} checked checkedValue={checked[0] && checked[1]} indeterminate={true} onCheckedChange={handleChange1} addFile addFileOnClick={() => console.log('Добавить файл!')} />}>
        <File label={FILE_NAME} checked checkedValue={checked[0]} onCheckedChange={handleChange2} removed />
        <File label={FILE_NAME} checked checkedValue={checked[1]} onCheckedChange={handleChange3} removed />
      </AttachFiles>
    </div>;
}`,...(q=(K=C.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};const Je=["AttachFilesDefault","AttachFilesDescription","AttachFilesLeftIcon","AttachFilesControl","AttachFilesWithoutTitle","AttachFilesWithTitle","AttachFilesList","AttachFilesAddFileButton","AttachFilesWithCheckboxes"];export{u as AttachFilesAddFileButton,m as AttachFilesControl,s as AttachFilesDefault,d as AttachFilesDescription,p as AttachFilesLeftIcon,k as AttachFilesList,C as AttachFilesWithCheckboxes,F as AttachFilesWithTitle,h as AttachFilesWithoutTitle,Je as __namedExportsOrder,Xe as default};
