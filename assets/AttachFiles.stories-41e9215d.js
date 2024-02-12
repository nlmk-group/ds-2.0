import{j as a,c as Y,a as Z}from"./clsx.m-3764cf42.js";import{r as O}from"./index-f1f749bf.js";import{b as m,F as t,c as $}from"./index-d664667a.js";import"./index-a4c35820.js";import"./index-63601013.js";import"./index-e99519f1.js";import"./index-cd305b84.js";import"./index-147655d7.js";import"./index-fb030d50.js";import"./index-ed56af28.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-8c6efd17.js";import{a as p}from"./chunk-WFFRPTHA-a68c42c5.js";import{s as l}from"./styles.module-caf3a80a.js";import{f as le,F as ce,b as r,g as ne,L as se,a as ee,h as ie,i as de,j as oe,c as me,k as pe,d as he,e as Fe}from"./text-fc1a5ad7.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./IconArticle24-414bfa4c.js";import"./IconsList.module-e4fe8555.js";import"./IconPanTool24-f1398bf1.js";import"./get-78cac09e.js";import"./index-c1da5c13.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const ke=e=>a("div",{style:{minHeight:80},children:e()}),je={title:"Components/AttachFiles/Stories",component:m,decorators:[ke],parameters:{actions:{argTypesRegex:"^on.*"}},argTypes:le},E=[a(t,{label:r}),a(t,{label:r,checked:!0}),a(t,{label:r,tick:!0}),a(t,{label:r,empty:!0})],s=e=>a("div",{className:l.wrapper,children:a(t,{...e})});s.storyName=ce;s.args={label:r};const i=e=>a("div",{className:l.wrapper,children:a(t,{...e})});i.storyName=ne;i.args={longTitle:!0,label:se};const d=e=>a("div",{className:l.wrapper,children:a(t,{...e})});d.storyName=ee;d.args={description:ee,label:r};const h=()=>a("div",{className:Y(l.wrapper,$["vertical-wrapper"]),children:E.map((e,c)=>a(O.Fragment,{children:e},c))});h.storyName=ie;const o=e=>Z("div",{className:Y(l.wrapper,$["vertical-wrapper"]),children:[a(t,{label:r,removed:!0,removedOnClick:e.removedOnClick}),a(t,{label:r,commented:!0,commentedOnClick:e.commentedOnClick}),a(t,{label:r,saved:!0,savedOnClick:e.savedOnClick}),a(t,{label:r,commented:!0,commentedOnClick:e.commentedOnClick,removed:!0,removedOnClick:e.removedOnClick}),a(t,{label:r,commented:!0,commentedOnClick:e.commentedOnClick,saved:!0,savedOnClick:e.savedOnClick}),a(t,{label:r,removed:!0,removedOnClick:e.removedOnClick,saved:!0,savedOnClick:e.savedOnClick}),a(t,{label:r,commented:!0,commentedOnClick:e.commentedOnClick,removed:!0,removedOnClick:e.removedOnClick,saved:!0,savedOnClick:e.savedOnClick}),a(t,{label:r,addFile:!0,addFileOnClick:e.addFileOnClick})]});o.storyName=de;o.args={removedOnClick:p("removedOnClick"),commentedOnClick:p("commentedOnClick"),savedOnClick:p("savedOnClick"),addFileOnClick:p("addFileOnClick")};const F=()=>a("div",{className:l.wrapper,children:a(m,{children:Array(4).fill(0).map(e=>a(t,{label:r,removed:!0},e))})});F.storyName=oe;const k=()=>a("div",{className:l.wrapper,children:a(m,{title:a(t,{label:r,checked:!0}),children:E.map((e,c)=>a(O.Fragment,{children:e},c))})});k.storyName=me;const u=()=>a("div",{className:l.wrapper,children:a(m,{children:E.map((e,c)=>a(O.Fragment,{children:e},c))})});u.storyName=pe;const C=()=>a("div",{className:l.wrapper,children:a(m,{title:a(t,{label:r,checked:!0,addFile:!0,addFileOnClick:p("addFileOnClick")}),children:E.map(e=>e)})});C.storyName=he;const v=()=>{const[e,c]=O.useState([!0,!1]),ae=n=>{c([n.target.checked,n.target.checked])},te=n=>{c([n.target.checked,e[1]])},re=n=>{c([e[0],n.target.checked])};return a("div",{className:l.wrapper,children:Z(m,{title:a(t,{label:r,checked:!0,checkedValue:e[0]&&e[1],indeterminate:!0,onCheckedChange:ae,addFile:!0,addFileOnClick:()=>console.log("Добавить файл!")}),children:[a(t,{label:r,checked:!0,checkedValue:e[0],onCheckedChange:te,removed:!0}),a(t,{label:r,checked:!0,checkedValue:e[1],onCheckedChange:re,removed:!0})]})})};v.storyName=Fe;var g,A,I;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`(argTypes: IFile): JSX.Element => {
  return <div className={styles.wrapper}>
      <File {...argTypes} />
    </div>;
}`,...(I=(A=s.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var N,L,b;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`(argTypes: IFile): JSX.Element => {
  return <div className={styles.wrapper}>
      <File {...argTypes} />
    </div>;
}`,...(b=(L=i.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};var y,S,_;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`(argTypes: IFile): JSX.Element => {
  return <div className={styles.wrapper}>
      <File {...argTypes} />
    </div>;
}`,...(_=(S=d.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var T,w,x;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={clsx(styles.wrapper, style['vertical-wrapper'])}>
      {FileCollection.map((FileItem: JSX.Element, index: number) => <Fragment key={index}>{FileItem}</Fragment>)}
    </div>;
}`,...(x=(w=h.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var M,f,X;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`(argTypes: IFile): JSX.Element => {
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
}`,...(X=(f=o.parameters)==null?void 0:f.docs)==null?void 0:X.source}}};var J,W,D;F.parameters={...F.parameters,docs:{...(J=F.parameters)==null?void 0:J.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper}>
      <AttachFiles>
        {Array(4).fill(0).map((index: number) => <File label={FILE_NAME} removed key={index} />)}
      </AttachFiles>
    </div>;
}`,...(D=(W=F.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var H,B,V;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper}>
      <AttachFiles title={<File label={FILE_NAME} checked />}>
        {FileCollection.map((FileItem: JSX.Element, index: number) => <Fragment key={index}>{FileItem}</Fragment>)}
      </AttachFiles>
    </div>;
}`,...(V=(B=k.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var j,R,U;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper}>
      <AttachFiles>
        {FileCollection.map((FileItem: JSX.Element, index: number) => <Fragment key={index}>{FileItem}</Fragment>)}
      </AttachFiles>
    </div>;
}`,...(U=(R=u.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var G,P,K;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper}>
      <AttachFiles title={<File label={FILE_NAME} checked addFile addFileOnClick={action('addFileOnClick')} />}>
        {FileCollection.map((FileItem: JSX.Element) => FileItem)}
      </AttachFiles>
    </div>;
}`,...(K=(P=C.parameters)==null?void 0:P.docs)==null?void 0:K.source}}};var q,z,Q;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(Q=(z=v.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};const Re=["AttachFilesDefault","AttachFilesLongLabel","AttachFilesDescription","AttachFilesLeftIcon","AttachFilesControl","AttachFilesWithoutTitle","AttachFilesWithTitle","AttachFilesList","AttachFilesAddFileButton","AttachFilesWithCheckboxes"];export{C as AttachFilesAddFileButton,o as AttachFilesControl,s as AttachFilesDefault,d as AttachFilesDescription,h as AttachFilesLeftIcon,u as AttachFilesList,i as AttachFilesLongLabel,v as AttachFilesWithCheckboxes,k as AttachFilesWithTitle,F as AttachFilesWithoutTitle,Re as __namedExportsOrder,je as default};
