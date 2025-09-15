import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as s}from"./index-D2yTtfOz.js";import"./index-DBJrpVqj.js";import{af as i,M as n}from"./TreeList-Dx-quzH6.js";import{DecoratorDefault as l}from"./Decorator.stories-D7iJJ_iz.js";import{r as p}from"./index-BcJSXhQi.js";import{s as o,H as m,E as d}from"./Header-_Kvo3PlW.js";import{P as f}from"./Properties-Bc2FKMFa.js";import{T as c}from"./Tests-CRUl_eaF.js";/* empty css               */import"./generateUUID-Cm0X4XRy.js";import"./index-cHpEh_mw.js";import"./index-0Ow6mfXJ.js";import"./index-DMhwcTYd.js";import"./index-Dl1-T1_Z.js";import"./index-DmffzHLE.js";import"./index-CQem5UP1.js";import"./index-VmJK6twV.js";import"./index-DWrMXfke.js";import"./index-bO57duG5.js";import"./index-C5rKoyII.js";import"./32-CkUgnIrf.js";import{a as u}from"./argsTypes-YVHmqm-S.js";import{c as P,S as v,U as h}from"./DocsRenderer-CFRXHY34-DGF3tSn7.js";import"./index-ChsGqxH_.js";import"./preview-Du4KB2sj.js";import"./iframe-CIjGc7rL.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-kFSDrB5T.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const x=()=>{const[t,r]=p.useState(0);return e.jsxs("div",{className:o.wrapper,children:[e.jsx(m,{title:"PdfPreview",description:"Компонент PdfPreview для предпросмотра PDF",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/PdfPreview"}),e.jsx("div",{className:o.tabs,children:e.jsxs(i,{children:[e.jsx(i.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>r(0)}),e.jsx(i.Tab,{label:"Тестирование",active:Number(t)===1,onClick:()=>r(1)})]})}),Number(t)==0&&e.jsxs(e.Fragment,{children:[e.jsx(d,{height:600,description:"Компонент PdfPreview по умолчанию.",code:`import { useState, useRef } from "react";
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
`}),e.jsx(f,{argsTypes:u})]}),Number(t)==1&&e.jsx(c,{componentName:"PdfPreview"})]})};function a(t){return e.jsxs(e.Fragment,{children:[e.jsx(P,{title:"Components/PdfPreview/Info",component:n,parameters:{jest:["PdfPreview.test.tsx"]}}),`
`,e.jsx(v,{of:l}),`
`,e.jsx(h,{children:e.jsx(x,{})})]})}function re(t={}){const{wrapper:r}={...s(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(a,{...t})}):a()}export{re as default};
