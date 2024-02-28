import{j as r,a as v}from"./clsx.m-CcuEzMhP.js";import{r as n}from"./index-CBqU2yxZ.js";import{V as t,b as se,q as K,r as N,W as A,X as oe,Y as ne}from"./index-4w0GPB2W.js";import"./index-ehJh3wQv.js";import"./index-D-9trSFj.js";import"./index-DjeAniHW.js";import"./index-fbTu1Hcf.js";import{I as Q}from"./index-BhQGQSXE.js";import"./index-hvdSV1r-.js";import"./index-BQVY97ak.js";import"./index-B5tj7Glx.js";import"./index-DyFb8FNg.js";import"./32-UdY5WLK9.js";import{a as s}from"./chunk-WFFRPTHA-B5TewAtn.js";import{s as o}from"./styles.module-DeLvTIFi.js";import{b as pe}from"./argsTypes-BT0SwbBB.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-BO3pQ7ot.js";import"./preview-errors-Dg5lG0lC.js";import"./index-DrFu-skq.js";const le="DragAndDrop по умолчанию",de="DragAndDrop по размерам",ce="DragAndDrop по типам файлов",ie="DragAndDrop с кастомным набором принимаемых файлов",me="DragAndDrop по статусам",ue="DragAndDrop Small-Text",ge="DragAndDrop Small-Icon",De="DragAndDrop с иконкой",ye="DragAndDrop с самостоятельным компонентом",Te=e=>r("div",{className:o["wrapper-fit-content"],children:e()}),$e={title:"Components/DragAndDrop/Stories",component:t,decorators:[Te],argTypes:pe},g=e=>{const[a,ee]=n.useState(null),[T,S]=n.useState(!1),[re,ae]=n.useState(""),[U,f]=n.useState(0),I=n.useRef(null),te=async u=>{S(!0),ae(`${u[0].name}, ${u[0].size}`),await new Promise(()=>setTimeout(()=>{S(!1),ee(u[0])},2e3))};return n.useEffect(()=>(T&&U<100?I.current=setInterval(()=>{f(u=>u+1)},20):f(0),()=>{clearInterval(I.current)}),[T,U]),r(t,{loading:T,percentUpload:U,description:T?re:void 0,...e,onUpload:te})};g.storyName=le;const p=e=>r("div",{className:o["wrapper-row"],children:Object.values(se).map(a=>r(t,{size:a,...e},a))});p.storyName=de;p.args={onUpload:s("OnUpload")};const l=e=>r("div",{className:o["wrapper-row"],children:Object.values(K).map(a=>r(t,{fileType:a,...e},a))});l.storyName=ce;l.args={onUpload:s("OnUpload")};const d=e=>r("div",{className:o["wrapper-row"],children:r(t,{...e})});d.storyName=ie;d.args={onUpload:s("OnUpload"),accept:".pdf",description:"По умолчанию только файлы формата PDF",fileType:K.file,title:"PDF Drag&Drop"};const c=e=>v("div",{className:o["wrapper-row"],children:[Object.values(N).map(a=>r(t,{statusColor:a,...e},a)),r(t,{loading:!0,percentUpload:75,title:A,btnLabel:oe,...e})]});c.storyName=me;c.args={onUpload:s("OnUpload"),cancelUpload:s("onCancelUpload")};const i=e=>v("div",{className:o["wrapper-row"],children:[Object.values(N).map(a=>r(t,{statusColor:a,...e},a)),r("div",{style:{color:"var(--ac-drag-drop-default-text-title)"},children:r(t,{loading:!0,title:A,percentUpload:99,...e})})]});i.storyName=ue;i.args={onUpload:s("OnUpload"),smallText:!0};const m=e=>v("div",{className:o["wrapper-row"],children:[Object.values(N).map(a=>r(t,{statusColor:a,...e},a)),r(t,{title:A,loading:!0,percentUpload:99,...e})]});m.storyName=ge;m.args={onUpload:s("OnUpload"),smallIcon:!0};const D=e=>r(t,{customIcon:r(Q,{name:"IconUploadOutlined24"}),...e});D.storyName=De;const y=e=>r(t,{...e,children:v("div",{className:ne["custom-component-style"],children:[r(Q,{name:"IconUploadOutlined24"}),r("div",{style:{color:"var(--text-grey-900)"},children:"Just throw something here!"})]})});y.storyName=ye;var w,O,C;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
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
}`,...(C=(O=g.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var h,x,b;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(sizesMapping).map((size: sizesMapping) => <DragAndDrop key={size} size={size} {...argTypes} />)}
    </div>;
}`,...(b=(x=p.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,F,_;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
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
      <div style={{
      color: 'var(--ac-drag-drop-default-text-title)'
    }}>
        <DragAndDrop loading title={smallTextUploadText} percentUpload={99} {...argTypes} />
      </div>
    </div>;
}`,...(J=($=i.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var W,X,Y;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(statusColorMapping).map((status: statusColorMapping) => <DragAndDrop key={status} statusColor={status} {...argTypes} />)}
      <DragAndDrop title={smallTextUploadText} loading percentUpload={99} {...argTypes} />
    </div>;
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var q,V,Z;D.parameters={...D.parameters,docs:{...(q=D.parameters)==null?void 0:q.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
  return <DragAndDrop customIcon={<Icon name="IconUploadOutlined24" />} {...argTypes} />;
}`,...(Z=(V=D.parameters)==null?void 0:V.docs)==null?void 0:Z.source}}};var B,G,H;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`(argTypes: IDragAndDrop): ReactNode => {
  return <DragAndDrop {...argTypes}>
      <div className={customStyle['custom-component-style']}>
        <Icon name="IconUploadOutlined24" />
        <div style={{
        color: 'var(--text-grey-900)'
      }}>Just throw something here!</div>
      </div>
    </DragAndDrop>;
}`,...(H=(G=y.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const Je=["dndDefault","dndSizes","dndFileTypes","dndCustomAccept","dndStatuses","dndSmallText","dndSmallIcon","dndCustomIcon","dndCustom"];export{Je as __namedExportsOrder,$e as default,y as dndCustom,d as dndCustomAccept,D as dndCustomIcon,g as dndDefault,l as dndFileTypes,p as dndSizes,m as dndSmallIcon,i as dndSmallText,c as dndStatuses};
