import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as s}from"./index-CbmgEnq2.js";import{am as n,an as l,ao as p}from"./chunk-NUUEMKO5-BpO0R7nX.js";import{af as i,R as m}from"./TreeList-YqG01ELH.js";import{DecoratorDefault as d}from"./Decorator.stories-B1hjNCvN.js";import{r as f}from"./index-Bnop-kX6.js";import{s as a,H as c,E as u}from"./Header-Dv8jD8tN.js";import{P}from"./Properties-BlaN8mPn.js";import{T as v}from"./Tests-BjdzLg9N.js";/* empty css               */import"./generateUUID-Z4ktHL_f.js";import"./index-CkAXh9uP.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-CvRFF9aG.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-D_lYSbi8.js";import"./index-DokmLR-l.js";import"./32-DmPReyKt.js";import{a as h}from"./argsTypes-YVHmqm-S.js";import"./iframe-BWqAlQP2.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-DNqyZNcJ.js";import"./index-B5g4YLzC.js";const x=()=>{const[t,r]=f.useState(0);return e.jsxs("div",{className:a.wrapper,children:[e.jsx(c,{title:"PdfPreview",description:"Компонент PdfPreview для предпросмотра PDF",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/PdfPreview"}),e.jsx("div",{className:a.tabs,children:e.jsxs(i,{children:[e.jsx(i.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>r(0)}),e.jsx(i.Tab,{label:"Тестирование",active:Number(t)===1,onClick:()=>r(1)})]})}),Number(t)==0&&e.jsxs(e.Fragment,{children:[e.jsx(u,{height:600,description:"Компонент PdfPreview по умолчанию.",code:`import { useState, useRef } from "react";
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
`}),e.jsx(P,{argsTypes:h})]}),Number(t)==1&&e.jsx(v,{componentName:"PdfPreview"})]})};function o(t){return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Components/PdfPreview/Info",component:m,parameters:{jest:["PdfPreview.test.tsx"]}}),`
`,e.jsx(l,{of:d}),`
`,e.jsx(p,{children:e.jsx(x,{})})]})}function ee(t={}){const{wrapper:r}={...s(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(o,{...t})}):o()}export{ee as default};
