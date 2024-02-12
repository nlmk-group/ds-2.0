import{j as r,a as v}from"./clsx.m-3764cf42.js";import{r as n}from"./index-f1f749bf.js";import{E as s,d as te,J as Q,K as U,M as A,N as oe,O as ne}from"./index-d664667a.js";import"./index-a4c35820.js";import"./index-63601013.js";import"./index-e99519f1.js";import"./index-cd305b84.js";import"./index-147655d7.js";import"./index-fb030d50.js";import{I as V}from"./index-ed56af28.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-8c6efd17.js";import{a as t}from"./chunk-WFFRPTHA-a68c42c5.js";import{s as o}from"./styles.module-caf3a80a.js";import{b as pe}from"./argsTypes-96b18a7d.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./IconArticle24-414bfa4c.js";import"./IconsList.module-e4fe8555.js";import"./IconPanTool24-f1398bf1.js";import"./get-78cac09e.js";import"./index-c1da5c13.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const le="DragAndDrop по умолчанию",de="DragAndDrop по размерам",ce="DragAndDrop по типам файлов",ie="DragAndDrop с кастомным набором принимаемых файлов",me="DragAndDrop по статусам",ue="DragAndDrop Small-Text",ge="DragAndDrop Small-Icon",De="DragAndDrop с иконкой",ye="DragAndDrop с самостоятельным компонентом",Te=e=>r("div",{className:o["wrapper-fit-content"],children:e()}),We={title:"Components/DragAndDrop/Stories",component:s,decorators:[Te],argTypes:pe},g=e=>{const[a,ee]=n.useState([]),[T,I]=n.useState(!1),[re,ae]=n.useState(""),[N,S]=n.useState(0),f=n.useRef(null),se=async u=>{I(!0),ae(`${u[0].name}, ${u[0].size}`),await new Promise(()=>setTimeout(()=>{I(!1),ee(u)},2e3))};return n.useEffect(()=>(T&&N<100?f.current=setInterval(()=>{S(u=>u+1)},20):S(0),()=>{clearInterval(f.current)}),[T,N]),r(s,{loading:T,percentUpload:N,description:T?re:void 0,...e,onUpload:se})};g.storyName=le;const p=e=>r("div",{className:o["wrapper-row"],children:Object.values(te).map(a=>r(s,{size:a,...e},a))});p.storyName=de;p.args={onUpload:t("OnUpload")};const l=e=>r("div",{className:o["wrapper-row"],children:Object.values(Q).map(a=>r(s,{fileType:a,...e},a))});l.storyName=ce;l.args={onUpload:t("OnUpload")};const d=e=>r("div",{className:o["wrapper-row"],children:r(s,{...e})});d.storyName=ie;d.args={onUpload:t("OnUpload"),accept:".pdf",description:"По умолчанию только файлы формата PDF",fileType:Q.file,title:"PDF Drag&Drop"};const c=e=>v("div",{className:o["wrapper-row"],children:[Object.values(U).map(a=>r(s,{statusColor:a,...e},a)),r(s,{loading:!0,percentUpload:75,title:A,btnLabel:oe,...e})]});c.storyName=me;c.args={onUpload:t("OnUpload"),cancelUpload:t("onCancelUpload")};const i=e=>v("div",{className:o["wrapper-row"],children:[Object.values(U).map(a=>r(s,{statusColor:a,...e},a)),r(s,{title:A,loading:!0,percentUpload:99,...e})]});i.storyName=ue;i.args={onUpload:t("OnUpload"),smallText:!0};const m=e=>v("div",{className:o["wrapper-row"],children:[Object.values(U).map(a=>r(s,{statusColor:a,...e},a)),r(s,{title:A,loading:!0,percentUpload:99,...e})]});m.storyName=ge;m.args={onUpload:t("OnUpload"),smallIcon:!0};const D=e=>r(s,{customIcon:r(V,{name:"IconUpload24"}),...e});D.storyName=De;const y=e=>r(s,{...e,children:v("div",{className:ne["custom-component-style"],children:[r(V,{name:"IconUpload24"}),r("div",{children:"Just throw something here!"})]})});y.storyName=ye;var w,C,O;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
  const [files, setFiles] = useState<IFile>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [uploadingFile, setUploadingFile] = useState<string>('');
  const [percent, setPercent] = useState<number>(0);
  const intervalID = useRef<ReturnType<typeof setInterval> | null>(null);
  const handleOnUpload = async (a: IFile) => {
    setLoading(true);
    setUploadingFile(\`\${a[0].name}, \${a[0].size}\`);
    await new Promise(() => setTimeout(() => {
      setLoading(false);
      setFiles(a);
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
}`,...(O=(C=g.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var h,b,M;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(sizesMapping).map((size: sizesMapping) => <DragAndDrop key={size} size={size} {...argTypes} />)}
    </div>;
}`,...(M=(b=p.parameters)==null?void 0:b.docs)==null?void 0:M.source}}};var x,F,_;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(fileTypeMapping).map((fileType: fileTypeMapping) => <DragAndDrop key={fileType} fileType={fileType} {...argTypes} />)}
    </div>;
}`,...(_=(F=l.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var L,j,R;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
  return <div className={styles['wrapper-row']}>
      <DragAndDrop {...argTypes} />
    </div>;
}`,...(R=(j=d.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var E,z,P;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(statusColorMapping).map((status: statusColorMapping) => <DragAndDrop key={status} statusColor={status} {...argTypes} />)}
      <DragAndDrop loading={true} percentUpload={75} title={smallTextUploadText} btnLabel={cancelUploadLabel} {...argTypes} />
    </div>;
}`,...(P=(z=c.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var k,$,J;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(statusColorMapping).map((status: statusColorMapping) => <DragAndDrop key={status} statusColor={status} {...argTypes} />)}
      <DragAndDrop title={smallTextUploadText} loading={true} percentUpload={99} {...argTypes} />
    </div>;
}`,...(J=($=i.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var K,W,X;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(statusColorMapping).map((status: statusColorMapping) => <DragAndDrop key={status} statusColor={status} {...argTypes} />)}
      <DragAndDrop title={smallTextUploadText} loading={true} percentUpload={99} {...argTypes} />
    </div>;
}`,...(X=(W=m.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,q;D.parameters={...D.parameters,docs:{...(Y=D.parameters)==null?void 0:Y.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
  return <DragAndDrop customIcon={<Icon name="IconUpload24" />} {...argTypes} />;
}`,...(q=(Z=D.parameters)==null?void 0:Z.docs)==null?void 0:q.source}}};var B,G,H;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
  return <DragAndDrop {...argTypes}>
      <div className={customStyle['custom-component-style']}>
        <Icon name="IconUpload24" />
        <div>Just throw something here!</div>
      </div>
    </DragAndDrop>;
}`,...(H=(G=y.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const Xe=["dndDefault","dndSizes","dndFileTypes","dndCustomAccept","dndStatuses","dndSmallText","dndSmallIcon","dndCustomIcon","dndCustom"];export{Xe as __namedExportsOrder,We as default,y as dndCustom,d as dndCustomAccept,D as dndCustomIcon,g as dndDefault,l as dndFileTypes,p as dndSizes,m as dndSmallIcon,i as dndSmallText,c as dndStatuses};
