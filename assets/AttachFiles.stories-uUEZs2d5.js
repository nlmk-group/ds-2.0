import{j as t,c as q,a as z}from"./clsx.m-CcuEzMhP.js";import{r as v}from"./index-CBqU2yxZ.js";import{A as o,F as a,a as G}from"./index-eGAKGCMw.js";import"./generateUUID-BkPc_NdJ.js";import"./index-SiU_55iz.js";import"./index-BzeUb5Di.js";import"./index-fbTu1Hcf.js";import"./index-CpJBQeN-.js";import"./index-hvdSV1r-.js";import"./index-BQVY97ak.js";import"./index-B5tj7Glx.js";import"./index-14g2znra.js";import"./32-BmhDzcbC.js";import{a as m}from"./chunk-WFFRPTHA-B5TewAtn.js";import{s as c}from"./styles.module-DeLvTIFi.js";import{a as ee,F as te,b as r,c as Q,d as ae,e as re,f as le,g as ce,h as ne,i as se,j as ie}from"./text-BlM6NsIu.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-BO3pQ7ot.js";import"./preview-errors-Dg5lG0lC.js";import"./index-DrFu-skq.js";const de=e=>t("div",{style:{minHeight:80},children:e()}),Me={title:"Components/AttachFiles/Stories",component:o,decorators:[de],parameters:{actions:{argTypesRegex:"^on.*"}},argTypes:ee},O=[t(a,{label:r}),t(a,{label:r,checked:!0}),t(a,{label:r,tick:!0}),t(a,{label:r,empty:!0})],s=e=>t("div",{className:c.wrapper,children:t(a,{...e})});s.storyName=te;s.args={label:r};const i=e=>t("div",{className:c.wrapper,children:t(a,{...e})});i.storyName=Q;i.args={description:Q,label:r};const p=()=>t("div",{className:q(c.wrapper,G["vertical-wrapper"]),children:O.map((e,l)=>t(v.Fragment,{children:e},l))});p.storyName=ae;const d=e=>z("div",{className:q(c.wrapper,G["vertical-wrapper"]),children:[t(a,{label:r,removed:!0,removedOnClick:e.removedOnClick}),t(a,{label:r,commented:!0,commentedOnClick:e.commentedOnClick}),t(a,{label:r,saved:!0,savedOnClick:e.savedOnClick}),t(a,{label:r,commented:!0,commentedOnClick:e.commentedOnClick,removed:!0,removedOnClick:e.removedOnClick}),t(a,{label:r,commented:!0,commentedOnClick:e.commentedOnClick,saved:!0,savedOnClick:e.savedOnClick}),t(a,{label:r,removed:!0,removedOnClick:e.removedOnClick,saved:!0,savedOnClick:e.savedOnClick}),t(a,{label:r,commented:!0,commentedOnClick:e.commentedOnClick,removed:!0,removedOnClick:e.removedOnClick,saved:!0,savedOnClick:e.savedOnClick}),t(a,{label:r,addFile:!0,addFileOnClick:e.addFileOnClick})]});d.storyName=re;d.args={removedOnClick:m("removedOnClick"),commentedOnClick:m("commentedOnClick"),savedOnClick:m("savedOnClick"),addFileOnClick:m("addFileOnClick")};const h=()=>t("div",{className:c.wrapper,children:t(o,{children:Array(4).fill(0).map(e=>t(a,{label:r,removed:!0},e))})});h.storyName=le;const F=()=>t("div",{className:c.wrapper,children:t(o,{title:t(a,{label:r,checked:!0}),children:O.map((e,l)=>t(v.Fragment,{children:e},l))})});F.storyName=ce;const k=()=>t("div",{className:c.wrapper,children:t(o,{children:O.map((e,l)=>t(v.Fragment,{children:e},l))})});k.storyName=ne;const C=()=>t("div",{className:c.wrapper,children:t(o,{title:t(a,{label:r,checked:!0,addFile:!0,addFileOnClick:m("addFileOnClick")}),children:O.map(e=>e)})});C.storyName=se;const u=()=>{const[e,l]=v.useState([!0,!1]),Y=n=>{l([n.target.checked,n.target.checked])},Z=n=>{l([n.target.checked,e[1]])},$=n=>{l([e[0],n.target.checked])};return t("div",{className:c.wrapper,children:z(o,{title:t(a,{label:r,checked:!0,checkedValue:e[0]&&e[1],indeterminate:!0,onCheckedChange:Y,addFile:!0,addFileOnClick:()=>console.log("Добавить файл!")}),children:[t(a,{label:r,checked:!0,checkedValue:e[0],onCheckedChange:Z,removed:!0}),t(a,{label:r,checked:!0,checkedValue:e[1],onCheckedChange:$,removed:!0})]})})};u.storyName=ie;var E,g,A;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`(argTypes: IFile): JSX.Element => {
  return <div className={styles.wrapper}>
      <File {...argTypes} />
    </div>;
}`,...(A=(g=s.parameters)==null?void 0:g.docs)==null?void 0:A.source}}};var I,N,b;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`(argTypes: IFile): JSX.Element => {
  return <div className={styles.wrapper}>
      <File {...argTypes} />
    </div>;
}`,...(b=(N=i.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var y,L,S;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={clsx(styles.wrapper, style['vertical-wrapper'])}>
      {FileCollection.map((FileItem: JSX.Element, index: number) => <Fragment key={index}>{FileItem}</Fragment>)}
    </div>;
}`,...(S=(L=p.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var _,T,w;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`(argTypes: IFile): JSX.Element => {
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
}`,...(w=(T=d.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var x,M,f;h.parameters={...h.parameters,docs:{...(x=h.parameters)==null?void 0:x.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper}>
      <AttachFiles>
        {Array(4).fill(0).map((index: number) => <File label={FILE_NAME} removed key={index} />)}
      </AttachFiles>
    </div>;
}`,...(f=(M=h.parameters)==null?void 0:M.docs)==null?void 0:f.source}}};var X,J,W;F.parameters={...F.parameters,docs:{...(X=F.parameters)==null?void 0:X.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper}>
      <AttachFiles title={<File label={FILE_NAME} checked />}>
        {FileCollection.map((FileItem: JSX.Element, index: number) => <Fragment key={index}>{FileItem}</Fragment>)}
      </AttachFiles>
    </div>;
}`,...(W=(J=F.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};var D,H,V;k.parameters={...k.parameters,docs:{...(D=k.parameters)==null?void 0:D.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper}>
      <AttachFiles>
        {FileCollection.map((FileItem: JSX.Element, index: number) => <Fragment key={index}>{FileItem}</Fragment>)}
      </AttachFiles>
    </div>;
}`,...(V=(H=k.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var B,j,R;C.parameters={...C.parameters,docs:{...(B=C.parameters)==null?void 0:B.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper}>
      <AttachFiles title={<File label={FILE_NAME} checked addFile addFileOnClick={action('addFileOnClick')} />}>
        {FileCollection.map((FileItem: JSX.Element) => FileItem)}
      </AttachFiles>
    </div>;
}`,...(R=(j=C.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var U,P,K;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(K=(P=u.parameters)==null?void 0:P.docs)==null?void 0:K.source}}};const fe=["AttachFilesDefault","AttachFilesDescription","AttachFilesLeftIcon","AttachFilesControl","AttachFilesWithoutTitle","AttachFilesWithTitle","AttachFilesList","AttachFilesAddFileButton","AttachFilesWithCheckboxes"];export{C as AttachFilesAddFileButton,d as AttachFilesControl,s as AttachFilesDefault,i as AttachFilesDescription,p as AttachFilesLeftIcon,k as AttachFilesList,u as AttachFilesWithCheckboxes,F as AttachFilesWithTitle,h as AttachFilesWithoutTitle,fe as __namedExportsOrder,Me as default};
