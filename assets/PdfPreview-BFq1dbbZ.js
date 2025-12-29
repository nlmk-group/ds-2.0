import{r as s,j as e,f as n,S as l,U as p}from"./iframe-CxLN9ksd.js";import{useMDXComponents as m}from"./index-CeChe1UL.js";import{a as d,P as f}from"./argsTypes-DbKRlJtK.js";import{DecoratorDefault as c}from"./Decorator.stories-DWPS1QvQ.js";import{s as o,H as u,E as P}from"./Header-B1Tht5jw.js";import{P as v}from"./Properties-Be6XSfnk.js";import{T as h}from"./Tests-B-cCRdNI.js";/* empty css               */import{T as i}from"./index-Bs6EWGDb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ck8f73vE.js";import"./index-CORENSTS.js";import"./clsx-B-dksMZM.js";import"./index-DUSNaC2m.js";import"./index-Bz6VJdOb.js";import"./index-C9nyZABc.js";import"./index-BnDPEMC8.js";import"./generateUUID-M57HTP56.js";import"./24-CbC-8o3Y.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-LyR6p6RN.js";import"./sizesMapping-D8QavrGc.js";import"./index-IRxTPoEY.js";import"./index-D3DoxRCP.js";import"./index-BniRS5vs.js";import"./index-CT_Q_AhL.js";import"./index-M8Uj9-kW.js";import"./32-B2BQHND4.js";import"./24-BGXSSISX.js";import"./24-MJ8JdQQ9.js";import"./24-2IXSosOm.js";import"./24-Dlyxu4_q.js";import"./24-BFZg9aq0.js";import"./24-DMGI7E0m.js";import"./24-voYW8sKN.js";import"./24-DMqNa1pl.js";import"./24-DJtALV7Z.js";import"./16-CchysOzF.js";import"./24-CJ9IDGZV.js";import"./16-kcyE2NZr.js";import"./16-DRyq0qh_.js";import"./16-D_ueUpcb.js";const x=()=>{const[t,r]=s.useState(0);return e.jsxs("div",{className:o.wrapper,children:[e.jsx(u,{title:"PdfPreview",description:"Компонент PdfPreview для предпросмотра PDF",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/PdfPreview"}),e.jsx("div",{className:o.tabs,children:e.jsxs(i,{children:[e.jsx(i.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>r(0)}),e.jsx(i.Tab,{label:"Тестирование",active:Number(t)===1,onClick:()=>r(1)})]})}),Number(t)==0&&e.jsxs(e.Fragment,{children:[e.jsx(P,{height:600,description:"Компонент PdfPreview по умолчанию.",code:`import { useState, useRef } from "react";
import { PdfPreview, AttachFiles, File } from "@nlmk/ds-2.0";

const App = () => {
  const [pdfData, setPdfData] = useState(null);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const inputRef = useRef(null);

  const handleAddFileClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (evt) => {
    const file = evt.target.files?.[0];
    if (!file) return;

    if (file.type === "application/pdf") {
      setLoading(true);
      setFileName(file.name);
      setError("");

      const reader = new FileReader();
      reader.onload = (e) => {
        const arrayBuffer = e?.target?.result;
        if (arrayBuffer) {
          const blob = new Blob([arrayBuffer], { type: "application/pdf" });
          setPdfData(blob);
        }
        setLoading(false);
      };
      reader.onerror = () => {
        setError("Ошибка при чтении файла");
        setLoading(false);
      };
      reader.readAsArrayBuffer(file);
    } else {
      setPdfData(null);
      setFileName("");
      setError("Пожалуйста, выберите PDF-файл");
    }
  };

  const handleRemoveFile = () => {
    setPdfData(null);
    setFileName("");
    setError("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div style={{ padding: 16 }}>
      <AttachFiles>
        <File
          label={fileName || "Нажмите, чтобы выбрать PDF"}
          description={
            fileName
              ? "Файл успешно выбран"
              : error
              ? error
              : "Файл ещё не выбран"
          }
          addFile={!pdfData}
          addFileOnClick={handleAddFileClick}
          removed={Boolean(pdfData)}
          removedOnClick={handleRemoveFile}
        />
      </AttachFiles>

      <input
        ref={inputRef}
        type="file"
        accept="application/pdf"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      <div style={{ marginTop: 24 }}>
        <PdfPreview
          data={pdfData}
          loading={loading}
          errorMessage={error}
          style={{ height: "80vh", width: "100%" }}
        />
      </div>
    </div>
  );
};

export default App;
`}),e.jsx(v,{argsTypes:d})]}),Number(t)==1&&e.jsx(h,{componentName:"PdfPreview"})]})};function a(t){return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Components/PdfPreview/Info",component:f,parameters:{jest:["PdfPreview.test.tsx"]}}),`
`,e.jsx(l,{of:c}),`
`,e.jsx(p,{children:e.jsx(x,{})})]})}function ne(t={}){const{wrapper:r}={...m(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(a,{...t})}):a()}export{ne as default};
