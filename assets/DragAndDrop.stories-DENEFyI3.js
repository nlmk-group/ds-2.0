import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{r as n}from"./index-Bnop-kX6.js";import{D as s,o as le,m as re,n as T,j,p as de,q as ae,r as ce}from"./index-Z14Faoel.js";import"./generateUUID-Dz4mOyMt.js";import"./index-BuHkNwZq.js";import"./index-CiiUx5gY.js";import"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import"./index-qC5wYQgy.js";import{I as se}from"./index-Dxx-yGvP.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-CG5Hm5ah.js";import"./32-QiGXh8Io.js";import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{g as o}from"./styles.module-ox-emdf8.js";import{a as ie}from"./argsTypes-D8s0EIvX.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./index-CT8gBKwQ.js";import"./v4-CQkTLCs1.js";const ue=r=>e.jsx("div",{className:o["wrapper-fit-content"],children:e.jsx(r,{})}),Re={title:"Components/DragAndDrop/Stories",component:s,decorators:[ue],argTypes:ie},g=r=>{const[a,te]=n.useState(null),[N,x]=n.useState(!1),[oe,ne]=n.useState(""),[S,U]=n.useState(0),I=n.useRef(null),pe=async D=>{x(!0),ne(`${D[0].name}, ${D[0].size}`),await new Promise(()=>setTimeout(()=>{x(!1),te(D[0])},2e3))};return n.useEffect(()=>(N&&S<100?I.current=setInterval(()=>{U(D=>D+1)},20):U(0),()=>{clearInterval(I.current)}),[N,S]),e.jsx(s,{loading:N,percentUpload:S,description:N?oe:void 0,...r,onUpload:pe})};g.storyName="DragNDrop по умолчанию";const p=r=>e.jsx("div",{className:o["wrapper-row"],children:Object.values(le).map(a=>e.jsx(s,{size:a,...r},a))});p.storyName="Размеры DragNDrop";p.args={onUpload:t("OnUpload")};const l=r=>e.jsx("div",{className:o["wrapper-row"],children:Object.values(re).map(a=>e.jsx(s,{fileType:a,...r},a))});l.storyName="DragNDrop с различными типами файлов";l.args={onUpload:t("OnUpload")};const d=r=>e.jsx("div",{className:o["wrapper-row"],children:e.jsx(s,{...r})});d.storyName="DragNDrop, принимающий определенный тип файлов";d.args={onUpload:t("OnUpload"),accept:".pdf",description:"По умолчанию только файлы формата PDF",fileType:re.file,title:"PDF Drag&Drop"};const c=r=>e.jsx("div",{className:o["wrapper-row"],children:Object.values(T).slice(0,3).map(a=>e.jsx(s,{statusColor:a,...r},a))});c.storyName="DragNDrop различные статусы";c.args={onUpload:t("OnUpload"),cancelUpload:t("onCancelUpload")};const i=r=>e.jsxs("div",{className:o["wrapper-row"],children:[Object.values(T).slice(3).map(a=>e.jsx(s,{statusColor:a,...r},a)),e.jsx(s,{loading:!0,percentUpload:75,title:j,btnLabel:de,...r})]});i.storyName="DragNDrop в состоянии Loading";i.args={onUpload:t("OnUpload"),cancelUpload:t("onCancelUpload")};const u=r=>e.jsxs("div",{className:o["wrapper-row"],children:[Object.values(T).map(a=>e.jsx(s,{statusColor:a,...r},a)),e.jsx(s,{title:ae,loading:!0,percentUpload:99,...r}),e.jsx(s,{title:j,disabled:!0,...r})]});u.storyName="DragNDrop в состоянии SmallIcon";u.args={onUpload:t("OnUpload"),smallIcon:!0};const m=r=>e.jsxs("div",{className:o["wrapper-row"],children:[Object.values(T).map(a=>e.jsx(s,{statusColor:a,...r},a)),e.jsx(s,{title:ae,loading:!0,percentUpload:99,...r}),e.jsx(s,{title:j,disabled:!0,...r})]});m.storyName="DragNDrop в состоянии SmallText";m.args={onUpload:t("OnUpload"),smallText:!0};const y=r=>e.jsx(s,{customIcon:e.jsx(se,{name:"IconUploadOutlined24"}),...r});y.storyName="DragNDrop с кастомной иконкой";const v=r=>e.jsx(s,{...r,children:e.jsxs("div",{className:ce["custom-component-style"],children:[e.jsx(se,{name:"IconUploadOutlined24"}),e.jsx("div",{style:{color:"var(--steel-90)"},children:"Перетащите сюда что-нибудь!"})]})});v.storyName="DragNDrop кастомный";var f,w,A;g.parameters={...g.parameters,docs:{...(f=g.parameters)==null?void 0:f.docs,source:{originalSource:`(argTypes: IDragAndDropProps): ReactNode => {
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
      clearInterval(intervalID.current as ReturnType<typeof setInterval>);
    };
  }, [loading, percent]);
  return <DragAndDrop loading={loading} percentUpload={percent} description={loading ? uploadingFile : undefined} {...argTypes} onUpload={handleOnUpload} />;
}`,...(A=(w=g.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var O,C,b;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`(argTypes: IDragAndDropProps): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(EDnDSizes).map((size: EDnDSizes) => {
      return <DragAndDrop key={size} size={size} {...argTypes} />;
    })}
    </div>;
}`,...(b=(C=p.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var E,F,P;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`(argTypes: IDragAndDropProps): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(EDnDFileType).map((fileType: EDnDFileType) => <DragAndDrop key={fileType} fileType={fileType} {...argTypes} />)}
    </div>;
}`,...(P=(F=l.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var h,R,L;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`(argTypes: IDragAndDropProps): ReactNode => {
  return <div className={styles['wrapper-row']}>
      <DragAndDrop {...argTypes} />
    </div>;
}`,...(L=(R=d.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var z,k,$;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`(argTypes: IDragAndDropProps): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(EDnDStatusColor).slice(0, 3).map((status: EDnDStatusColor) => <DragAndDrop key={status} statusColor={status} {...argTypes} />)}
    </div>;
}`,...($=(k=c.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var _,q,W;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`(argTypes: IDragAndDropProps): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(EDnDStatusColor).slice(3).map((status: EDnDStatusColor) => <DragAndDrop key={status} statusColor={status} {...argTypes} />)}
      <DragAndDrop loading={true} percentUpload={75} title={dragNDropTitle} btnLabel={cancelUploadLabel} {...argTypes} />
    </div>;
}`,...(W=(q=i.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var B,G,H;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`(argTypes: IDragAndDropProps): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(EDnDStatusColor).map((status: EDnDStatusColor) => <DragAndDrop key={status} statusColor={status} {...argTypes} />)}
      <DragAndDrop title={smallTextUploadText} loading percentUpload={99} {...argTypes} />
      <DragAndDrop title={dragNDropTitle} disabled {...argTypes} />
    </div>;
}`,...(H=(G=u.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,M;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`(argTypes: IDragAndDropProps): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(EDnDStatusColor).map((status: EDnDStatusColor) => <DragAndDrop key={status} statusColor={status} {...argTypes} />)}
      <DragAndDrop title={smallTextUploadText} loading percentUpload={99} {...argTypes} />
      <DragAndDrop title={dragNDropTitle} disabled {...argTypes} />
    </div>;
}`,...(M=(K=m.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var Q,V,X;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`(argTypes: IDragAndDropProps): ReactNode => {
  return <DragAndDrop customIcon={<Icon name="IconUploadOutlined24" />} {...argTypes} />;
}`,...(X=(V=y.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,ee;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`(argTypes: IDragAndDropProps): ReactNode => {
  return <DragAndDrop {...argTypes}>
      <div className={customStyle['custom-component-style']}>
        <Icon name="IconUploadOutlined24" />
        <div style={{
        color: 'var(--steel-90)'
      }}>Перетащите сюда что-нибудь!</div>
      </div>
    </DragAndDrop>;
}`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Le=["dndDefault","dndSizes","dndFileTypes","dndCustomAccept","dndStatuses","dndLoading","dndSmallIcon","dndSmallText","dndCustomIcon","dndCustom"];export{Le as __namedExportsOrder,Re as default,v as dndCustom,d as dndCustomAccept,y as dndCustomIcon,g as dndDefault,l as dndFileTypes,i as dndLoading,p as dndSizes,u as dndSmallIcon,m as dndSmallText,c as dndStatuses};
