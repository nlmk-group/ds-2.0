import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as t}from"./index-BcJSXhQi.js";import{M as C,a as E,F as S}from"./TreeList-Dx-quzH6.js";import"./generateUUID-Cm0X4XRy.js";import"./index-cHpEh_mw.js";import"./index-0Ow6mfXJ.js";import"./index-DMhwcTYd.js";import"./index-Dl1-T1_Z.js";import"./index-DmffzHLE.js";import"./index-CQem5UP1.js";import"./index-VmJK6twV.js";import"./index-DWrMXfke.js";import"./index-bO57duG5.js";import"./index-C5rKoyII.js";import"./32-CkUgnIrf.js";import{g as B}from"./styles.module-m0Zsy3Hi.js";import{a as j}from"./argsTypes-YVHmqm-S.js";import"./index-ChsGqxH_.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";const N=a=>e.jsx("div",{className:B.wrapper,children:e.jsx(a,{})}),ae={title:"Components/PdfPreview/Stories",component:C,decorators:[N],argTypes:j},r=a=>{const[l,n]=t.useState(null),[u,g]=t.useState(""),[R,d]=t.useState(!1),[p,f]=t.useState(""),i=t.useRef(null),b=()=>{var o;(o=i.current)==null||o.click()},w=o=>{var F;const s=(F=o.target.files)==null?void 0:F[0];if(s)if(s.type==="application/pdf"){d(!0),g(s.name);const c=new FileReader;c.onload=m=>{var P;const h=(P=m==null?void 0:m.target)==null?void 0:P.result;if(h){const A=new Blob([h],{type:"application/pdf"});n(A)}d(!1)},c.onerror=()=>{f("Ошибка при чтении файла"),d(!1)},c.readAsArrayBuffer(s)}else n(null),f("Пожалуйста, выберите PDF-файл")},x=()=>{n(null),g(""),f(""),i.current&&(i.current.value="")};return e.jsxs(e.Fragment,{children:[e.jsx(E,{children:e.jsx(S,{label:u||"Нажмите, чтобы выбрать PDF",description:u?"Файл успешно выбран":p||"Файл ещё не выбран",addFile:!l,addFileOnClick:b,removed:!!l,removedOnClick:x})}),e.jsx("input",{ref:i,type:"file",accept:"application/pdf",style:{display:"none"},onChange:w}),e.jsx("div",{style:{marginTop:24},children:e.jsx(C,{...a,data:l,loading:R,errorMessage:p||a.errorMessage})})]})};r.storyName="Отображение PDF";r.args={errorMessage:"Ошибка предпросмотра PDF"};var v,y,D;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`(args: TPdfPreviewProps): JSX.Element => {
  const [pdfData, setPdfData] = useState<Blob | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const handleAddFileClick = () => {
    inputRef.current?.click();
  };
  const handleFileChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const file = evt.target.files?.[0];
    if (!file) return;
    if (file.type === 'application/pdf') {
      setLoading(true);
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = e => {
        const arrayBuffer = e?.target?.result;
        if (arrayBuffer) {
          const blob = new Blob([arrayBuffer], {
            type: 'application/pdf'
          });
          setPdfData(blob);
        }
        setLoading(false);
      };
      reader.onerror = () => {
        setError('Ошибка при чтении файла');
        setLoading(false);
      };
      reader.readAsArrayBuffer(file);
    } else {
      setPdfData(null);
      setError('Пожалуйста, выберите PDF-файл');
    }
  };
  const handleRemoveFile = () => {
    setPdfData(null);
    setFileName('');
    setError('');
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };
  return <>
      <AttachFiles>
        <File label={fileName || 'Нажмите, чтобы выбрать PDF'} description={fileName ? 'Файл успешно выбран' : error ? error : 'Файл ещё не выбран'} addFile={!pdfData} addFileOnClick={handleAddFileClick} removed={Boolean(pdfData)} removedOnClick={handleRemoveFile} />
      </AttachFiles>

      <input ref={inputRef} type="file" accept="application/pdf" style={{
      display: 'none'
    }} onChange={handleFileChange} />

      <div style={{
      marginTop: 24
    }}>
        <PdfPreview {...args} data={pdfData} loading={loading} errorMessage={error || args.errorMessage} />
      </div>
    </>;
}`,...(D=(y=r.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};const ie=["PdfPreviewWithAttachFiles"];export{r as PdfPreviewWithAttachFiles,ie as __namedExportsOrder,ae as default};
