import{j as e}from"./jsx-runtime-DFnSfiB4.js";import{r as n}from"./index-DQ2WTIsS.js";import{a3 as s,g as j,l as re,m as U,a4 as x,a5 as de,a6 as ce}from"./index-De6xVjfl.js";import"./generateUUID-i9L7EtYg.js";import"./index-bLIWCpda.js";import"./index-BgyuaCKK.js";import"./index-B8KuQLf-.js";import"./index-B_c816qF.js";import"./index-DJXOh8UI.js";import{I as se}from"./index-DB41iIPt.js";import"./index-wNTT8eSr.js";import"./index-S3KjbRnp.js";import"./index-CpIRsoAz.js";import"./32-C4VDZHit.js";import{a as t}from"./chunk-454WOBUV-CM0pFb8Z.js";import{s as o}from"./styles.module-C4SoDQaA.js";import{b as ie}from"./argsTypes-3ZWiStxe.js";import"./clsx-B-dksMZM.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./index-0sbKER3h.js";import"./v4-CQkTLCs1.js";const ue="DragAndDrop по умолчанию",me="DragAndDrop по размерам",ge="DragAndDrop по типам файлов",De="DragAndDrop с кастомным набором принимаемых файлов",te="DragAndDrop по статусам",ye="DragAndDrop Small-Text",ve="DragAndDrop Small-Icon",Te="DragAndDrop с иконкой",Ue="DragAndDrop с самостоятельным компонентом",Ne=a=>e.jsx("div",{className:o["wrapper-fit-content"],children:a()}),Ye={title:"Components/DragAndDrop/Stories",component:s,decorators:[Ne],argTypes:ie},D=a=>{const[r,oe]=n.useState(null),[T,S]=n.useState(!1),[ne,pe]=n.useState(""),[N,A]=n.useState(0),f=n.useRef(null),le=async g=>{S(!0),pe(`${g[0].name}, ${g[0].size}`),await new Promise(()=>setTimeout(()=>{S(!1),oe(g[0])},2e3))};return n.useEffect(()=>(T&&N<100?f.current=setInterval(()=>{A(g=>g+1)},20):A(0),()=>{clearInterval(f.current)}),[T,N]),e.jsx(s,{loading:T,percentUpload:N,description:T?ne:void 0,...a,onUpload:le})};D.storyName=ue;const p=a=>e.jsx("div",{className:o["wrapper-row"],children:Object.values(j).map(r=>{if(r!==j.s)return e.jsx(s,{size:r,...a},r)})});p.storyName=me;p.args={onUpload:t("OnUpload")};const l=a=>e.jsx("div",{className:o["wrapper-row"],children:Object.values(re).map(r=>e.jsx(s,{fileType:r,...a},r))});l.storyName=ge;l.args={onUpload:t("OnUpload")};const d=a=>e.jsx("div",{className:o["wrapper-row"],children:e.jsx(s,{...a})});d.storyName=De;d.args={onUpload:t("OnUpload"),accept:".pdf",description:"По умолчанию только файлы формата PDF",fileType:re.file,title:"PDF Drag&Drop"};const c=a=>e.jsx("div",{className:o["wrapper-row"],children:Object.values(U).slice(0,3).map(r=>e.jsx(s,{statusColor:r,...a},r))});c.storyName=te;c.args={onUpload:t("OnUpload"),cancelUpload:t("onCancelUpload")};const i=a=>e.jsxs("div",{className:o["wrapper-row"],children:[Object.values(U).slice(3).map(r=>e.jsx(s,{statusColor:r,...a},r)),e.jsx(s,{loading:!0,percentUpload:75,title:x,btnLabel:de,...a})]});i.storyName=te;i.args={onUpload:t("OnUpload"),cancelUpload:t("onCancelUpload")};const u=a=>e.jsxs("div",{className:o["wrapper-row"],children:[Object.values(U).map(r=>e.jsx(s,{statusColor:r,...a},r)),e.jsx("div",{style:{color:"var(--ac-drag-drop-default-text-title)"},children:e.jsx(s,{loading:!0,title:x,percentUpload:99,cancelUpload:t("onCancelUpload"),...a})})]});u.storyName=ye;u.args={onUpload:t("OnUpload"),cancelUpload:t("onCancelUpload"),smallText:!0};const m=a=>e.jsxs("div",{className:o["wrapper-row"],children:[Object.values(U).map(r=>e.jsx(s,{statusColor:r,...a},r)),e.jsx(s,{title:x,loading:!0,percentUpload:99,...a})]});m.storyName=ve;m.args={onUpload:t("OnUpload"),smallIcon:!0};const y=a=>e.jsx(s,{customIcon:e.jsx(se,{name:"IconUploadOutlined24"}),...a});y.storyName=Te;const v=a=>e.jsx(s,{...a,children:e.jsxs("div",{className:ce["custom-component-style"],children:[e.jsx(se,{name:"IconUploadOutlined24"}),e.jsx("div",{style:{color:"var(--text-grey-900)"},children:"Just throw something here!"})]})});v.storyName=Ue;var I,w,C;D.parameters={...D.parameters,docs:{...(I=D.parameters)==null?void 0:I.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
  const [files, setFiles] = useState<FileList[0] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [uploadingFile, setUploadingFile] = useState<string>('');
  const [percent, setPercent] = useState<number>(0);
  const intervalID = useRef<ReturnType<typeof setInterval> | null>(null);
  const handleOnUpload = async (a: FileList) => {
    setLoading(true);
    setUploadingFile(\`\${a[0].name}, \${a[0].size}\`);
    await new Promise(() => setTimeout(() => {
      setLoading(false);
      setFiles(a[0]);
    }, 2000));
  };
  useEffect(() => {
    if (loading && percent < 100) {
      intervalID.current = setInterval(() => {
        setPercent(percent => percent + 1);
      }, 20);
    } else {
      setPercent(0);
    }
    return () => {
      clearInterval((intervalID.current as ReturnType<typeof setInterval>));
    };
  }, [loading, percent]);
  return <DragAndDrop loading={loading} percentUpload={percent} description={loading ? uploadingFile : undefined} {...argTypes} onUpload={handleOnUpload} />;
}`,...(C=(w=D.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var O,h,b;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(sizesMapping).map((size: sizesMapping) => {
      if (size !== sizesMapping.s) return <DragAndDrop key={size} size={size} {...argTypes} />;
    })}
    </div>;
}`,...(b=(h=p.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var M,F,_;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(fileTypeMapping).map((fileType: fileTypeMapping) => <DragAndDrop key={fileType} fileType={fileType} {...argTypes} />)}
    </div>;
}`,...(_=(F=l.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var L,R,E;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
  return <div className={styles['wrapper-row']}>
      <DragAndDrop {...argTypes} />
    </div>;
}`,...(E=(R=d.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var z,P,k;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(statusColorMapping).slice(0, 3).map((status: statusColorMapping) => <DragAndDrop key={status} statusColor={status} {...argTypes} />)}
    </div>;
}`,...(k=(P=c.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var $,J,W;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(statusColorMapping).slice(3).map((status: statusColorMapping) => <DragAndDrop key={status} statusColor={status} {...argTypes} />)}
      <DragAndDrop loading={true} percentUpload={75} title={smallTextUploadText} btnLabel={cancelUploadLabel} {...argTypes} />
    </div>;
}`,...(W=(J=i.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};var X,Y,Z;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(statusColorMapping).map((status: statusColorMapping) => <DragAndDrop key={status} statusColor={status} {...argTypes} />)}
      <div style={{
      color: 'var(--ac-drag-drop-default-text-title)'
    }}>
        <DragAndDrop loading title={smallTextUploadText} percentUpload={99} cancelUpload={action('onCancelUpload')} {...argTypes} />
      </div>
    </div>;
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var q,B,G;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(statusColorMapping).map((status: statusColorMapping) => <DragAndDrop key={status} statusColor={status} {...argTypes} />)}
      <DragAndDrop title={smallTextUploadText} loading percentUpload={99} {...argTypes} />
    </div>;
}`,...(G=(B=m.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var H,K,Q;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
  return <DragAndDrop customIcon={<Icon name="IconUploadOutlined24" />} {...argTypes} />;
}`,...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var V,ee,ae;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
  return <DragAndDrop {...argTypes}>
      <div className={customStyle['custom-component-style']}>
        <Icon name="IconUploadOutlined24" />
        <div style={{
        color: 'var(--text-grey-900)'
      }}>Just throw something here!</div>
      </div>
    </DragAndDrop>;
}`,...(ae=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const Ze=["dndDefault","dndSizes","dndFileTypes","dndCustomAccept","dndStatuses","dndStatuses2","dndSmallText","dndSmallIcon","dndCustomIcon","dndCustom"];export{Ze as __namedExportsOrder,Ye as default,v as dndCustom,d as dndCustomAccept,y as dndCustomIcon,D as dndDefault,l as dndFileTypes,p as dndSizes,m as dndSmallIcon,u as dndSmallText,c as dndStatuses,i as dndStatuses2};
