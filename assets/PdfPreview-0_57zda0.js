import{r as m,j as t,m as a,S as s,U as n}from"./iframe-DXeeMUlS.js";import{useMDXComponents as l}from"./index-CAD-9v6k.js";import{P as d}from"./index-6n6_bedz.js";import{DecoratorDefault as f}from"./Decorator.stories-DJYsOzS0.js";import{s as o,H as c,E as u}from"./Header-BbzYBLL5.js";import{P}from"./Properties-CfZ39wJO.js";import{T as v}from"./Tests-C8_7PxaT.js";/* empty css               */import{T as i}from"./index-CfeZzpgs.js";import{a as h}from"./argsTypes-YVHmqm-S.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CszhfbMz.js";import"./index-BHI3eI3g.js";import"./clsx-B-dksMZM.js";import"./index-PnnjiXFF.js";import"./index-DVWmtr1D.js";import"./index-DZc_Je-I.js";import"./index-CuRTdhZw.js";import"./16-C_DfNdCf.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-CBLD6MwG.js";import"./24-CHgX55v6.js";import"./index-D5lDtE6T.js";import"./16-eB7nAebF.js";import"./index-BeR8cofE.js";import"./index-IY4AFwls.js";import"./32-CGcqymZX.js";import"./24-DzDWDUmy.js";import"./24-DpK5eddQ.js";import"./24-BtzwVLrk.js";import"./24-BXEslVYf.js";import"./24-BO1wVPpM.js";import"./24-Bdd9D4Ti.js";import"./24-BEN_WnoL.js";import"./24-yThwR12y.js";import"./24-CsKtuqYo.js";import"./16-DPaGmQaD.js";import"./16-9aNWehyQ.js";import"./index-CS-N0axT.js";import"./index-DTjMDcvY.js";import"./index-Dgj4-etr.js";import"./index-C5-mffQZ.js";import"./index-D6zPR6x_.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-DKJTyuxe.js";import"./index-CIN4IkhO.js";import"./index-BMRC5SOo.js";import"./index-CpO2fZ6u.js";import"./index-BXmVr5wC.js";import"./index-BAiw0P9_.js";import"./types-TdnjS80C.js";import"./floating-ui.react-D6vM1ylD.js";import"./sizesMapping-D8QavrGc.js";import"./index-lmS2Z8XU.js";import"./index-DEU_C-CF.js";import"./index-Cd-LHCBs.js";import"./index-CwewWkbt.js";import"./index-Cs5S9q8Y.js";import"./index-CtqkFbMR.js";import"./index-BKA76Ifo.js";import"./index-BO90VTyW.js";import"./index-CM6F5ah0.js";import"./index-zw_MLesm.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-CE7G7CXw.js";import"./useFloatingReferenceSync-D1-TZfLV.js";import"./index-njfCmUMO.js";import"./index-B5y6kVop.js";import"./index-5ou-46if.js";import"./index-C27yRONQ.js";import"./index-1AKTzjWH.js";import"./index-BSNOoPXq.js";import"./index-n2Qh6IgR.js";import"./index-Cip2TGbq.js";import"./index-DfF7qLpq.js";import"./index-DEuU-g3N.js";import"./index-PB-RB5Z0.js";import"./index-CI_iOl8v.js";import"./index-dihm09I5.js";import"./index-DNE-7B4q.js";import"./index-DR0r2zXh.js";import"./index-CQ-4hoeh.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-DSmhyhqI.js";import"./index-SGPmwNfG.js";import"./index-DnB9MQyQ.js";import"./index-5p4PnV8M.js";import"./index-CocQ4obD.js";import"./index-DyZjUOWl.js";import"./index-BE70tGtN.js";import"./index-DW8OwNMu.js";import"./index-BONO3tZk.js";import"./index-FvFNIRYR.js";import"./index-BSOjBlgq.js";import"./index-aMJa5hfH.js";import"./index-DazVin3p.js";import"./index-BYbdmuaq.js";import"./index-C3_SrVzw.js";import"./ComboBox-DH4E0EfK.js";import"./index-bQdqyENo.js";import"./TreeList-6f3aQ_TB.js";import"./copyToClipboard-DB_KM_BY.js";const x=()=>{const[r,e]=m.useState(0);return t.jsxs("div",{className:o.wrapper,children:[t.jsx(c,{title:"PdfPreview",description:"Компонент PdfPreview для предпросмотра PDF",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/PdfPreview"}),t.jsx("div",{className:o.tabs,children:t.jsxs(i,{children:[t.jsx(i.Tab,{label:"Разработчику",active:Number(r)===0,onClick:()=>e(0)}),t.jsx(i.Tab,{label:"Тестирование",active:Number(r)===1,onClick:()=>e(1)})]})}),Number(r)==0&&t.jsxs(t.Fragment,{children:[t.jsx(u,{height:600,description:"Компонент PdfPreview по умолчанию.",code:`import { useState, useRef } from "react";
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
`}),t.jsx(P,{argsTypes:h})]}),Number(r)==1&&t.jsx(v,{componentName:"PdfPreview"})]})};function p(r){return t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"Components/PdfPreview/Info",component:d,parameters:{jest:["PdfPreview.test.tsx"]}}),`
`,t.jsx(s,{of:f}),`
`,t.jsx(n,{children:t.jsx(x,{})})]})}function Pr(r={}){const{wrapper:e}={...l(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(p,{...r})}):p()}export{Pr as default};
