import{j as e,r as n}from"./iframe-D1ppCfJL.js";import{D as s,E as F,b as w,a as T,f as P,e as U,s as f,g as R}from"./index-BPCh3R_L.js";import{I as A}from"./index-1Ia9d37J.js";import{g as o}from"./styles.module-P9JyAdOG.js";import{a as h}from"./argsTypes-cWplZO2Y.js";import"./preload-helper-PPVm8Dsz.js";import"./generateUUID-M57HTP56.js";import"./clsx-B-dksMZM.js";import"./index-DQiorVga.js";import"./index-B8OV2sj9.js";import"./index-pBOwR2Sr.js";import"./index-dwkJrdOm.js";import"./sizesMapping-D8QavrGc.js";import"./24-hEGWduDH.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-DzcHwvay.js";import"./24-Cp8l4Ntb.js";import"./24-CXzdah1X.js";import"./24-eQHncE30.js";import"./24-CRTRQ8Ly.js";import"./24-C2zrmoH8.js";import"./24-DvGStvE4.js";import"./24-DEoWbW1a.js";import"./24-DTwfOo-x.js";import"./24-Dwzv70HG.js";import"./16-CJBceTE3.js";import"./24-BoJlH0P7.js";import"./24-DeVNRByj.js";import"./16-DDpVoX5v.js";import"./16-DyMPAZyw.js";import"./16-Dg_oBXFF.js";import"./16-m76_vWtK.js";import"./16-CtdeCqSX.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,L=r=>e.jsx("div",{className:o["wrapper-fit-content"],children:e.jsx(r,{})}),ye={title:"Components/DragAndDrop/Stories",component:s,decorators:[L],argTypes:h},g=r=>{const[a,O]=n.useState(null),[N,x]=n.useState(!1),[C,b]=n.useState(""),[S,j]=n.useState(0),I=n.useRef(null),E=async D=>{x(!0),b(`${D[0].name}, ${D[0].size}`),await new Promise(()=>setTimeout(()=>{x(!1),O(D[0])},2e3))};return n.useEffect(()=>(N&&S<100?I.current=setInterval(()=>{j(D=>D+1)},20):j(0),()=>{clearInterval(I.current)}),[N,S]),e.jsx(s,{loading:N,percentUpload:S,description:N?C:void 0,...r,onUpload:E})};g.storyName="DragNDrop по умолчанию";const p=r=>e.jsx("div",{className:o["wrapper-row"],children:Object.values(F).map(a=>e.jsx(s,{size:a,...r},a))});p.storyName="Размеры DragNDrop";p.args={onUpload:t("OnUpload")};const l=r=>e.jsx("div",{className:o["wrapper-row"],children:Object.values(w).map(a=>e.jsx(s,{fileType:a,...r},a))});l.storyName="DragNDrop с различными типами файлов";l.args={onUpload:t("OnUpload")};const d=r=>e.jsx("div",{className:o["wrapper-row"],children:e.jsx(s,{...r})});d.storyName="DragNDrop, принимающий определенный тип файлов";d.args={onUpload:t("OnUpload"),accept:".pdf",description:"По умолчанию только файлы формата PDF",fileType:w.file,title:"PDF Drag&Drop"};const c=r=>e.jsx("div",{className:o["wrapper-row"],children:Object.values(T).slice(0,3).map(a=>e.jsx(s,{statusColor:a,...r},a))});c.storyName="DragNDrop различные статусы";c.args={onUpload:t("OnUpload"),cancelUpload:t("onCancelUpload")};const i=r=>e.jsxs("div",{className:o["wrapper-row"],children:[Object.values(T).slice(3).map(a=>e.jsx(s,{statusColor:a,...r},a)),e.jsx(s,{loading:!0,percentUpload:75,title:U,btnLabel:P,...r})]});i.storyName="DragNDrop в состоянии Loading";i.args={onUpload:t("OnUpload"),cancelUpload:t("onCancelUpload")};const m=r=>e.jsxs("div",{className:o["wrapper-row"],children:[Object.values(T).map(a=>e.jsx(s,{statusColor:a,...r},a)),e.jsx(s,{title:f,loading:!0,percentUpload:99,...r}),e.jsx(s,{title:U,disabled:!0,...r})]});m.storyName="DragNDrop в состоянии SmallIcon";m.args={onUpload:t("OnUpload"),smallIcon:!0};const u=r=>e.jsxs("div",{className:o["wrapper-row"],children:[Object.values(T).map(a=>e.jsx(s,{statusColor:a,...r},a)),e.jsx(s,{title:f,loading:!0,percentUpload:99,...r}),e.jsx(s,{title:U,disabled:!0,...r})]});u.storyName="DragNDrop в состоянии SmallText";u.args={onUpload:t("OnUpload"),smallText:!0};const y=r=>e.jsx(s,{customIcon:e.jsx(A,{name:"IconUploadOutlined24"}),...r});y.storyName="DragNDrop с кастомной иконкой";const v=r=>e.jsx(s,{...r,children:e.jsxs("div",{className:R["custom-component-style"],children:[e.jsx(A,{name:"IconUploadOutlined24"}),e.jsx("div",{style:{color:"var(--steel-90)"},children:"Перетащите сюда что-нибудь!"})]})});v.storyName="DragNDrop кастомный";g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(argTypes: IDragAndDropProps): ReactNode => {
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
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(argTypes: IDragAndDropProps): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(EDnDSizes).map((size: EDnDSizes) => {
      return <DragAndDrop key={size} size={size} {...argTypes} />;
    })}
    </div>;
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(argTypes: IDragAndDropProps): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(EDnDFileType).map((fileType: EDnDFileType) => <DragAndDrop key={fileType} fileType={fileType} {...argTypes} />)}
    </div>;
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(argTypes: IDragAndDropProps): ReactNode => {
  return <div className={styles['wrapper-row']}>
      <DragAndDrop {...argTypes} />
    </div>;
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(argTypes: IDragAndDropProps): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(EDnDStatusColor).slice(0, 3).map((status: EDnDStatusColor) => <DragAndDrop key={status} statusColor={status} {...argTypes} />)}
    </div>;
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(argTypes: IDragAndDropProps): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(EDnDStatusColor).slice(3).map((status: EDnDStatusColor) => <DragAndDrop key={status} statusColor={status} {...argTypes} />)}
      <DragAndDrop loading={true} percentUpload={75} title={dragNDropTitle} btnLabel={cancelUploadLabel} {...argTypes} />
    </div>;
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(argTypes: IDragAndDropProps): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(EDnDStatusColor).map((status: EDnDStatusColor) => <DragAndDrop key={status} statusColor={status} {...argTypes} />)}
      <DragAndDrop title={smallTextUploadText} loading percentUpload={99} {...argTypes} />
      <DragAndDrop title={dragNDropTitle} disabled {...argTypes} />
    </div>;
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(argTypes: IDragAndDropProps): ReactNode => {
  return <div className={styles['wrapper-row']}>
      {Object.values(EDnDStatusColor).map((status: EDnDStatusColor) => <DragAndDrop key={status} statusColor={status} {...argTypes} />)}
      <DragAndDrop title={smallTextUploadText} loading percentUpload={99} {...argTypes} />
      <DragAndDrop title={dragNDropTitle} disabled {...argTypes} />
    </div>;
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`(argTypes: IDragAndDropProps): ReactNode => {
  return <DragAndDrop customIcon={<Icon name="IconUploadOutlined24" />} {...argTypes} />;
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`(argTypes: IDragAndDropProps): ReactNode => {
  return <DragAndDrop {...argTypes}>
      <div className={customStyle['custom-component-style']}>
        <Icon name="IconUploadOutlined24" />
        <div style={{
        color: 'var(--steel-90)'
      }}>Перетащите сюда что-нибудь!</div>
      </div>
    </DragAndDrop>;
}`,...v.parameters?.docs?.source}}};const ve=["dndDefault","dndSizes","dndFileTypes","dndCustomAccept","dndStatuses","dndLoading","dndSmallIcon","dndSmallText","dndCustomIcon","dndCustom"];export{ve as __namedExportsOrder,ye as default,v as dndCustom,d as dndCustomAccept,y as dndCustomIcon,g as dndDefault,l as dndFileTypes,i as dndLoading,p as dndSizes,m as dndSmallIcon,u as dndSmallText,c as dndStatuses};
