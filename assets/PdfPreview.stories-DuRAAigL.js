import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{r as t}from"./index-Bnop-kX6.js";import{R,a as E,F as S}from"./TreeList-xp0hkVtZ.js";import"./generateUUID-B-1dzpB_.js";import"./index-CvUjrmfM.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DubX4Ptm.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-CLtrYh5C.js";import"./index-DokmLR-l.js";import"./32-BXnIH58b.js";import{g as B}from"./styles.module-ox-emdf8.js";import{a as j}from"./argsTypes-YVHmqm-S.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./index-B5g4YLzC.js";const N=a=>e.jsx("div",{className:B.wrapper,children:e.jsx(a,{})}),ee={title:"Components/PdfPreview/Stories",component:R,decorators:[N],argTypes:j},r=a=>{const[l,n]=t.useState(null),[u,g]=t.useState(""),[C,d]=t.useState(!1),[p,f]=t.useState(""),s=t.useRef(null),b=()=>{var i;(i=s.current)==null||i.click()},w=i=>{var F;const o=(F=i.target.files)==null?void 0:F[0];if(o)if(o.type==="application/pdf"){d(!0),g(o.name);const c=new FileReader;c.onload=m=>{var P;const h=(P=m==null?void 0:m.target)==null?void 0:P.result;if(h){const A=new Blob([h],{type:"application/pdf"});n(A)}d(!1)},c.onerror=()=>{f("Ошибка при чтении файла"),d(!1)},c.readAsArrayBuffer(o)}else n(null),f("Пожалуйста, выберите PDF-файл")},x=()=>{n(null),g(""),f(""),s.current&&(s.current.value="")};return e.jsxs(e.Fragment,{children:[e.jsx(E,{children:e.jsx(S,{label:u||"Нажмите, чтобы выбрать PDF",description:u?"Файл успешно выбран":p||"Файл ещё не выбран",addFile:!l,addFileOnClick:b,removed:!!l,removedOnClick:x})}),e.jsx("input",{ref:s,type:"file",accept:"application/pdf",style:{display:"none"},onChange:w}),e.jsx("div",{style:{marginTop:24},children:e.jsx(R,{...a,data:l,loading:C,errorMessage:p||a.errorMessage})})]})};r.storyName="Отображение PDF";r.args={errorMessage:"Ошибка предпросмотра PDF"};var v,y,D;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`(args: TPdfPreviewProps): JSX.Element => {
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
}`,...(D=(y=r.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};const re=["PdfPreviewWithAttachFiles"];export{r as PdfPreviewWithAttachFiles,re as __namedExportsOrder,ee as default};
