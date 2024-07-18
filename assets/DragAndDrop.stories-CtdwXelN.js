import{j as a,a as U}from"./jsx-runtime-2xDJh5tt.js";import{r as n}from"./index-CBqU2yxZ.js";import{a1 as s,f as C,j as se,k as N,a2 as A,a3 as ce,a4 as ie}from"./index-B_lQn97I.js";import"./generateUUID-BitdulAq.js";import"./index-D_z3tN8U.js";import"./index-CTkD9j2t.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import"./index-nWYpQihe.js";import{I as te}from"./index-CZmYKfHv.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-BDxIiU-V.js";import"./32-D4qDQhsJ.js";import{a as t}from"./chunk-WFFRPTHA-B5TewAtn.js";import{s as o}from"./styles.module-DeLvTIFi.js";import{b as ue}from"./argsTypes-3fHZLxM9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx.m-CH7BE6MN.js";import"./index-BtM5VmRH.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-CMH8wQUv.js";import"./preview-errors-Dg5lG0lC.js";import"./index-DrFu-skq.js";const me="DragAndDrop по умолчанию",ge="DragAndDrop по размерам",De="DragAndDrop по типам файлов",ye="DragAndDrop с кастомным набором принимаемых файлов",oe="DragAndDrop по статусам",ve="DragAndDrop Small-Text",Te="DragAndDrop Small-Icon",Ue="DragAndDrop с иконкой",Ne="DragAndDrop с самостоятельным компонентом",Se=e=>a("div",{className:o["wrapper-fit-content"],children:e()}),qe={title:"Components/DragAndDrop/Stories",component:s,decorators:[Se],argTypes:ue},D=e=>{const[r,ne]=n.useState(null),[T,f]=n.useState(!1),[pe,le]=n.useState(""),[S,I]=n.useState(0),w=n.useRef(null),de=async g=>{f(!0),le(`${g[0].name}, ${g[0].size}`),await new Promise(()=>setTimeout(()=>{f(!1),ne(g[0])},2e3))};return n.useEffect(()=>(T&&S<100?w.current=setInterval(()=>{I(g=>g+1)},20):I(0),()=>{clearInterval(w.current)}),[T,S]),a(s,{loading:T,percentUpload:S,description:T?pe:void 0,...e,onUpload:de})};D.storyName=me;const p=e=>a("div",{className:o["wrapper-row"],children:Object.values(C).map(r=>{if(r!==C.s)return a(s,{size:r,...e},r)})});p.storyName=ge;p.args={onUpload:t("OnUpload")};const l=e=>a("div",{className:o["wrapper-row"],children:Object.values(se).map(r=>a(s,{fileType:r,...e},r))});l.storyName=De;l.args={onUpload:t("OnUpload")};const d=e=>a("div",{className:o["wrapper-row"],children:a(s,{...e})});d.storyName=ye;d.args={onUpload:t("OnUpload"),accept:".pdf",description:"По умолчанию только файлы формата PDF",fileType:se.file,title:"PDF Drag&Drop"};const c=e=>a("div",{className:o["wrapper-row"],children:Object.values(N).slice(0,3).map(r=>a(s,{statusColor:r,...e},r))});c.storyName=oe;c.args={onUpload:t("OnUpload"),cancelUpload:t("onCancelUpload")};const i=e=>U("div",{className:o["wrapper-row"],children:[Object.values(N).slice(3).map(r=>a(s,{statusColor:r,...e},r)),a(s,{loading:!0,percentUpload:75,title:A,btnLabel:ce,...e})]});i.storyName=oe;i.args={onUpload:t("OnUpload"),cancelUpload:t("onCancelUpload")};const u=e=>U("div",{className:o["wrapper-row"],children:[Object.values(N).map(r=>a(s,{statusColor:r,...e},r)),a("div",{style:{color:"var(--ac-drag-drop-default-text-title)"},children:a(s,{loading:!0,title:A,percentUpload:99,cancelUpload:t("onCancelUpload"),...e})})]});u.storyName=ve;u.args={onUpload:t("OnUpload"),cancelUpload:t("onCancelUpload"),smallText:!0};const m=e=>U("div",{className:o["wrapper-row"],children:[Object.values(N).map(r=>a(s,{statusColor:r,...e},r)),a(s,{title:A,loading:!0,percentUpload:99,...e})]});m.storyName=Te;m.args={onUpload:t("OnUpload"),smallIcon:!0};const y=e=>a(s,{customIcon:a(te,{name:"IconUploadOutlined24"}),...e});y.storyName=Ue;const v=e=>a(s,{...e,children:U("div",{className:ie["custom-component-style"],children:[a(te,{name:"IconUploadOutlined24"}),a("div",{style:{color:"var(--text-grey-900)"},children:"Just throw something here!"})]})});v.storyName=Ne;var O,h,b;D.parameters={...D.parameters,docs:{...(O=D.parameters)==null?void 0:O.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
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
}`,...(b=(h=D.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var x,M,F;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(sizesMapping).map((size: sizesMapping) => {
      if (size !== sizesMapping.s) return <DragAndDrop key={size} size={size} {...argTypes} />;
    })}
    </div>;
}`,...(F=(M=p.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var _,j,L;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(fileTypeMapping).map((fileType: fileTypeMapping) => <DragAndDrop key={fileType} fileType={fileType} {...argTypes} />)}
    </div>;
}`,...(L=(j=l.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var R,z,E;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
  return <div className={styles['wrapper-row']}>
      <DragAndDrop {...argTypes} />
    </div>;
}`,...(E=(z=d.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var P,k,$;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(statusColorMapping).slice(0, 3).map((status: statusColorMapping) => <DragAndDrop key={status} statusColor={status} {...argTypes} />)}
    </div>;
}`,...($=(k=c.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var J,W,X;i.parameters={...i.parameters,docs:{...(J=i.parameters)==null?void 0:J.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(statusColorMapping).slice(3).map((status: statusColorMapping) => <DragAndDrop key={status} statusColor={status} {...argTypes} />)}
      <DragAndDrop loading={true} percentUpload={75} title={smallTextUploadText} btnLabel={cancelUploadLabel} {...argTypes} />
    </div>;
}`,...(X=(W=i.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,q;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(statusColorMapping).map((status: statusColorMapping) => <DragAndDrop key={status} statusColor={status} {...argTypes} />)}
      <div style={{
      color: 'var(--ac-drag-drop-default-text-title)'
    }}>
        <DragAndDrop loading title={smallTextUploadText} percentUpload={99} cancelUpload={action('onCancelUpload')} {...argTypes} />
      </div>
    </div>;
}`,...(q=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:q.source}}};var B,G,H;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(statusColorMapping).map((status: statusColorMapping) => <DragAndDrop key={status} statusColor={status} {...argTypes} />)}
      <DragAndDrop title={smallTextUploadText} loading percentUpload={99} {...argTypes} />
    </div>;
}`,...(H=(G=m.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var K,Q,V;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
  return <DragAndDrop customIcon={<Icon name="IconUploadOutlined24" />} {...argTypes} />;
}`,...(V=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var ee,ae,re;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
  return <DragAndDrop {...argTypes}>
      <div className={customStyle['custom-component-style']}>
        <Icon name="IconUploadOutlined24" />
        <div style={{
        color: 'var(--text-grey-900)'
      }}>Just throw something here!</div>
      </div>
    </DragAndDrop>;
}`,...(re=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};const Be=["dndDefault","dndSizes","dndFileTypes","dndCustomAccept","dndStatuses","dndStatuses2","dndSmallText","dndSmallIcon","dndCustomIcon","dndCustom"];export{Be as __namedExportsOrder,qe as default,v as dndCustom,d as dndCustomAccept,y as dndCustomIcon,D as dndDefault,l as dndFileTypes,p as dndSizes,m as dndSmallIcon,u as dndSmallText,c as dndStatuses,i as dndStatuses2};
