import{j as e,r as t}from"./iframe-tXE4xoYc.js";import{A as R}from"./index-Cu5AyS0R.js";import{F as b}from"./index-DhBXdiS-.js";import{a as w,P as g}from"./argsTypes-CHLUJ4hD.js";import{g as x}from"./styles.module-BGEDXogi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-DfJPKXXV.js";import"./index-IJbXH1LS.js";import"./index-UIqxTLHU.js";import"./index-CXdAYqeX.js";import"./16-Caqr7FMr.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-BWrbmGeu.js";import"./24-C3aWb0fW.js";import"./index-CZmf5b9z.js";const A=a=>e.jsx("div",{className:x.wrapper,children:e.jsx(a,{})}),q={title:"Components/PdfPreview/Stories",component:g,decorators:[A],argTypes:w},r=a=>{const[o,l]=t.useState(null),[c,u]=t.useState(""),[F,n]=t.useState(!1),[d,p]=t.useState(""),s=t.useRef(null),h=()=>{s.current?.click()},P=y=>{const i=y.target.files?.[0];if(i)if(i.type==="application/pdf"){n(!0),u(i.name);const f=new FileReader;f.onload=D=>{const m=D?.target?.result;if(m){const C=new Blob([m],{type:"application/pdf"});l(C)}n(!1)},f.onerror=()=>{p("Ошибка при чтении файла"),n(!1)},f.readAsArrayBuffer(i)}else l(null),p("Пожалуйста, выберите PDF-файл")},v=()=>{l(null),u(""),p(""),s.current&&(s.current.value="")};return e.jsxs(e.Fragment,{children:[e.jsx(R,{children:e.jsx(b,{label:c||"Нажмите, чтобы выбрать PDF",description:c?"Файл успешно выбран":d||"Файл ещё не выбран",addFile:!o,addFileOnClick:h,removed:!!o,removedOnClick:v})}),e.jsx("input",{ref:s,type:"file",accept:"application/pdf",style:{display:"none"},onChange:P}),e.jsx("div",{style:{marginTop:24},children:e.jsx(g,{...a,data:o,loading:F,errorMessage:d||a.errorMessage})})]})};r.storyName="Отображение PDF";r.args={errorMessage:"Ошибка предпросмотра PDF"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: TPdfPreviewProps): JSX.Element => {
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
}`,...r.parameters?.docs?.source}}};const z=["PdfPreviewWithAttachFiles"];export{r as PdfPreviewWithAttachFiles,z as __namedExportsOrder,q as default};
