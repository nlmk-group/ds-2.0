import{j as e}from"./jsx-runtime-DFnSfiB4.js";import{r as n}from"./index-DQ2WTIsS.js";import{ad as a,g as A,l as Q,m as S,ae as V,af as oe,ag as ne}from"./index-CMhB4zJG.js";import"./generateUUID-DB8_0F2G.js";import"./index-C04uUQ85.js";import"./index-CSbymPMC.js";import"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import"./index-ehXB0alm.js";import{I as X}from"./index-5BTuYEoj.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-BThqyTlu.js";import"./32-Y-7Ywnum.js";import{a as t}from"./chunk-454WOBUV-CM0pFb8Z.js";import{s as o}from"./styles.module-BSI8LUpZ.js";import{b as pe}from"./argsTypes-BRisi9qu.js";import"./clsx-B-dksMZM.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./index-BKbm6zW0.js";import"./v4-CQkTLCs1.js";const le="DragAndDrop по умолчанию",de="DragAndDrop по размерам",ce="DragAndDrop по типам файлов",ie="DragAndDrop с кастомным набором принимаемых файлов",ee="DragAndDrop по статусам",ue="DragAndDrop Small-Icon",me="DragAndDrop с иконкой",De="DragAndDrop с самостоятельным компонентом",ge=r=>e.jsx("div",{className:o["wrapper-fit-content"],children:r()}),ke={title:"Components/DragAndDrop/Stories",component:a,decorators:[ge],argTypes:pe},D=r=>{const[s,re]=n.useState(null),[v,U]=n.useState(!1),[se,ae]=n.useState(""),[T,N]=n.useState(0),I=n.useRef(null),te=async m=>{U(!0),ae(`${m[0].name}, ${m[0].size}`),await new Promise(()=>setTimeout(()=>{U(!1),re(m[0])},2e3))};return n.useEffect(()=>(v&&T<100?I.current=setInterval(()=>{N(m=>m+1)},20):N(0),()=>{clearInterval(I.current)}),[v,T]),e.jsx(a,{loading:v,percentUpload:T,description:v?se:void 0,...r,onUpload:te})};D.storyName=le;const p=r=>e.jsx("div",{className:o["wrapper-row"],children:Object.values(A).map(s=>{if(s!==A.s)return e.jsx(a,{size:s,...r},s)})});p.storyName=de;p.args={onUpload:t("OnUpload")};const l=r=>e.jsx("div",{className:o["wrapper-row"],children:Object.values(Q).map(s=>e.jsx(a,{fileType:s,...r},s))});l.storyName=ce;l.args={onUpload:t("OnUpload")};const d=r=>e.jsx("div",{className:o["wrapper-row"],children:e.jsx(a,{...r})});d.storyName=ie;d.args={onUpload:t("OnUpload"),accept:".pdf",description:"По умолчанию только файлы формата PDF",fileType:Q.file,title:"PDF Drag&Drop"};const c=r=>e.jsx("div",{className:o["wrapper-row"],children:Object.values(S).slice(0,3).map(s=>e.jsx(a,{statusColor:s,...r},s))});c.storyName=ee;c.args={onUpload:t("OnUpload"),cancelUpload:t("onCancelUpload")};const i=r=>e.jsxs("div",{className:o["wrapper-row"],children:[Object.values(S).slice(3).map(s=>e.jsx(a,{statusColor:s,...r},s)),e.jsx(a,{loading:!0,percentUpload:75,title:V,btnLabel:oe,...r})]});i.storyName=ee;i.args={onUpload:t("OnUpload"),cancelUpload:t("onCancelUpload")};const u=r=>e.jsxs("div",{className:o["wrapper-row"],children:[Object.values(S).map(s=>e.jsx(a,{statusColor:s,...r},s)),e.jsx(a,{title:V,loading:!0,percentUpload:99,...r})]});u.storyName=ue;u.args={onUpload:t("OnUpload"),smallIcon:!0};const g=r=>e.jsx(a,{customIcon:e.jsx(X,{name:"IconUploadOutlined24"}),...r});g.storyName=me;const y=r=>e.jsx(a,{...r,children:e.jsxs("div",{className:ne["custom-component-style"],children:[e.jsx(X,{name:"IconUploadOutlined24"}),e.jsx("div",{style:{color:"var(--steel-90)"},children:"Just throw something here!"})]})});y.storyName=De;var f,j,x;D.parameters={...D.parameters,docs:{...(f=D.parameters)==null?void 0:f.docs,source:{originalSource:`(argTypes: IDragAndDropProps): ReactNode => {
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
}`,...(x=(j=D.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var w,C,O;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`(argTypes: IDragAndDropProps): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(sizesMapping).map((size: sizesMapping) => {
      if (size !== sizesMapping.s) return <DragAndDrop key={size} size={size} {...argTypes} />;
    })}
    </div>;
}`,...(O=(C=p.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var E,h,F;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`(argTypes: IDragAndDropProps): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(EFileTypeDnD).map((fileType: EFileTypeDnD) => <DragAndDrop key={fileType} fileType={fileType} {...argTypes} />)}
    </div>;
}`,...(F=(h=l.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};var b,P,_;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`(argTypes: IDragAndDropProps): ReactNode => {
  return <div className={styles['wrapper-row']}>
      <DragAndDrop {...argTypes} />
    </div>;
}`,...(_=(P=d.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var L,R,z;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`(argTypes: IDragAndDropProps): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(EStatusColorDnD).slice(0, 3).map((status: EStatusColorDnD) => <DragAndDrop key={status} statusColor={status} {...argTypes} />)}
    </div>;
}`,...(z=(R=c.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var M,k,$;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`(argTypes: IDragAndDropProps): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(EStatusColorDnD).slice(3).map((status: EStatusColorDnD) => <DragAndDrop key={status} statusColor={status} {...argTypes} />)}
      <DragAndDrop loading={true} percentUpload={75} title={smallTextUploadText} btnLabel={cancelUploadLabel} {...argTypes} />
    </div>;
}`,...($=(k=i.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var J,W,Y;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`(argTypes: IDragAndDropProps): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(EStatusColorDnD).map((status: EStatusColorDnD) => <DragAndDrop key={status} statusColor={status} {...argTypes} />)}
      <DragAndDrop title={smallTextUploadText} loading percentUpload={99} {...argTypes} />
    </div>;
}`,...(Y=(W=u.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var Z,q,B;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`(argTypes: IDragAndDropProps): ReactNode => {
  return <DragAndDrop customIcon={<Icon name="IconUploadOutlined24" />} {...argTypes} />;
}`,...(B=(q=g.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var G,H,K;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`(argTypes: IDragAndDropProps): ReactNode => {
  return <DragAndDrop {...argTypes}>
      <div className={customStyle['custom-component-style']}>
        <Icon name="IconUploadOutlined24" />
        <div style={{
        color: 'var(--steel-90)'
      }}>Just throw something here!</div>
      </div>
    </DragAndDrop>;
}`,...(K=(H=y.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};const $e=["dndDefault","dndSizes","dndFileTypes","dndCustomAccept","dndStatuses","dndStatuses2","dndSmallIcon","dndCustomIcon","dndCustom"];export{$e as __namedExportsOrder,ke as default,y as dndCustom,d as dndCustomAccept,g as dndCustomIcon,D as dndDefault,l as dndFileTypes,p as dndSizes,u as dndSmallIcon,c as dndStatuses,i as dndStatuses2};
