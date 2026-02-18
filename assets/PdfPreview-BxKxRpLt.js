import{r as m,j as t,m as a,S as s,U as n}from"./iframe-DXgTh6Z1.js";import{useMDXComponents as l}from"./index-D5E0TNiY.js";import{P as d}from"./index-7iv8Ztsr.js";import{DecoratorDefault as f}from"./Decorator.stories-Dx4VbD6X.js";import{s as o,H as c,E as u}from"./Header-Cx_iqH4o.js";import{P}from"./Properties-Bo87EZNs.js";import{T as v}from"./Tests-DMr2Ac1b.js";/* empty css               */import{T as i}from"./index-9eeKqrVB.js";import{a as h}from"./argsTypes-YVHmqm-S.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BVnvWAgp.js";import"./index-CnUkpoWG.js";import"./clsx-B-dksMZM.js";import"./index-DUoRmuKU.js";import"./index-xDA_A-aD.js";import"./index-Crin4Hk2.js";import"./index-B4LxWNEW.js";import"./16-B8cH_bM_.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-CmuppIra.js";import"./24-BhlAG-0S.js";import"./index-Bl4_x-Wd.js";import"./16-BbwgBG1i.js";import"./index-nfS7job7.js";import"./index-DdxGYpuj.js";import"./32-BZXccBNX.js";import"./24-C30wJjmO.js";import"./24-BbhvzLc-.js";import"./24-CHg1C3ZC.js";import"./24-sZrB_4qI.js";import"./24-CivDG4N5.js";import"./24-iRhnmlFx.js";import"./24-SIU2poG3.js";import"./24-Chag6Oqa.js";import"./24-BHCEpASW.js";import"./16-BY5Rr64R.js";import"./16-CRuPnIyY.js";import"./index-DYE4Bi1W.js";import"./index-C0y4NBi5.js";import"./index-XmWHrheD.js";import"./index-Nm4Qdu1z.js";import"./index-ucJ0GnFn.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-jEb4Knwf.js";import"./index-DhFDZi2m.js";import"./index-Bd4lHRV0.js";import"./index-D5KpWfD5.js";import"./index-ciSDAmyI.js";import"./index-DPmsdUVY.js";import"./types-TdnjS80C.js";import"./floating-ui.react-CorT-KP5.js";import"./sizesMapping-D8QavrGc.js";import"./index-RnR2fccb.js";import"./index-BeCrIpLY.js";import"./index-v0wPdj4d.js";import"./index-gjDbOsdM.js";import"./index-C0IGfKtj.js";import"./index-wJn_BZHg.js";import"./index-BvFe6bW5.js";import"./index-BxMhlDR6.js";import"./index-Nw7Pfvlf.js";import"./index-CT-QPPa4.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-G2u_ACY6.js";import"./useFloatingReferenceSync-DqOI9czm.js";import"./index-DJtob4fj.js";import"./index-BX7kJ5B_.js";import"./index-B4fWoCsE.js";import"./index-B61jHTw_.js";import"./index-Ck2v1TJK.js";import"./index-CRivC9UR.js";import"./index-BEPLxOmT.js";import"./index-DVjmoy4g.js";import"./index-BglbQ0D6.js";import"./index-BYuKbTqS.js";import"./index-BhusuGgV.js";import"./index-h3Z4FQnr.js";import"./index-BC9Rp5Jo.js";import"./index-IVdkDpCO.js";import"./index-ilhepyhL.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-D9sJnCBD.js";import"./index-RB1pFFkL.js";import"./index-D6Zu8-bW.js";import"./index-DavKZYHC.js";import"./index-gi2vkf8n.js";import"./index-B7Ar8a4x.js";import"./index-B_BoipIY.js";import"./index-CBxHuoj8.js";import"./index-ByGDn29v.js";import"./index-Ba6RId1F.js";import"./index-MG8YOKfD.js";import"./index-Cgkxu7Qk.js";import"./index-C_JFYl_R.js";import"./index-B-LJSldl.js";import"./index-Bxth20eU.js";import"./ComboBox-KK8W0C81.js";import"./index-CdxmqZWy.js";import"./TreeList-CqXttnbr.js";import"./copyToClipboard-DB_KM_BY.js";const x=()=>{const[r,e]=m.useState(0);return t.jsxs("div",{className:o.wrapper,children:[t.jsx(c,{title:"PdfPreview",description:"Компонент PdfPreview для предпросмотра PDF",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/PdfPreview"}),t.jsx("div",{className:o.tabs,children:t.jsxs(i,{children:[t.jsx(i.Tab,{label:"Разработчику",active:Number(r)===0,onClick:()=>e(0)}),t.jsx(i.Tab,{label:"Тестирование",active:Number(r)===1,onClick:()=>e(1)})]})}),Number(r)==0&&t.jsxs(t.Fragment,{children:[t.jsx(u,{height:600,description:"Компонент PdfPreview по умолчанию.",code:`import { useState, useRef } from "react";
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
`,t.jsx(n,{children:t.jsx(x,{})})]})}function ur(r={}){const{wrapper:e}={...l(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(p,{...r})}):p()}export{ur as default};
