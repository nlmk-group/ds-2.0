import{r as m,j as t,m as a,S as n,U as d}from"./iframe-CHHQDVoX.js";import{useMDXComponents as l}from"./index-B1LTtkqD.js";import{P as f}from"./index-U8RdPQdR.js";import{DecoratorDefault as c}from"./Decorator.stories-DNZYnr5K.js";import{s as p,H as u,E as i}from"./Header-C4Gtm_L5.js";import{P,T as h}from"./Tests-B0qmEzAm.js";/* empty css               */import{T as o}from"./index-BTZVm9Y3.js";import{a as v}from"./argsTypes-YVHmqm-S.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CdHeQl8P.js";import"./index-C5RO9eqh.js";import"./clsx-B-dksMZM.js";import"./index-DucDzwTg.js";import"./index-DYQTidD-.js";import"./index-CwmmLxy5.js";import"./index-DBfCc0Jn.js";import"./16-CzdCZHDH.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-O653EECt.js";import"./24-JhZx5C50.js";import"./index-XGZPkqjb.js";import"./16-1skbPHrv.js";import"./index-vSQLaUqp.js";import"./index-Di9izlqG.js";import"./32-BrvnL8Hj.js";import"./24-BunGgvie.js";import"./24-CZW84qpr.js";import"./24-DIXfQiLz.js";import"./24-CD6xrv2j.js";import"./24-CWmeerJT.js";import"./24-Gpv48tUf.js";import"./24-BKM1KU47.js";import"./24-Bp815V0R.js";import"./24-BaGOPWtX.js";import"./16-CjM46jjK.js";import"./16-DL1hQxMw.js";import"./index-BEx0Kzll.js";import"./index-CJmLln8K.js";import"./index-CSuovX3X.js";import"./index-BHnpI8kT.js";import"./index-dSmaknGw.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-De57FWCK.js";import"./index-BzIC8vFU.js";import"./index-B-9sGLZR.js";import"./index-BANVVOGG.js";import"./index-DZgd0Qfe.js";import"./index-IsGk3ZIX.js";import"./types-TdnjS80C.js";import"./floating-ui.react-6VfTZOrw.js";import"./sizesMapping-D8QavrGc.js";import"./index-DxMlVd1J.js";import"./index-DtzYchqB.js";import"./index-D-VDIxFn.js";import"./index-BmtuxTTp.js";import"./index-CMjJ_rHR.js";import"./index-Y1gY5mOJ.js";import"./index-DmLZE8cz.js";import"./index-BI9I3JHz.js";import"./index-8V-zlFGO.js";import"./index-qkZhGjnb.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-01GcG0LR.js";import"./useFloatingReferenceSync-adXaq3Ya.js";import"./index-KI_mLAAh.js";import"./index-BtFeD-3X.js";import"./index-CxXtU9jM.js";import"./index-DD65tyqZ.js";import"./index-3J2s6a0v.js";import"./index-C6OX9F5-.js";import"./index-DvPBu460.js";import"./index-BhlmHl_K.js";import"./index-DicmkMu7.js";import"./index-CRrW3b0X.js";import"./index-G8_-uYaZ.js";import"./index-CC5B16j-.js";import"./index-TWHnUoEw.js";import"./index-a9LznR3Q.js";import"./index-HGD0h4gs.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CWser92f.js";import"./index-CQek3CAN.js";import"./index-p2bUiyyW.js";import"./index-CzvxnUYC.js";import"./index-B1ffb27g.js";import"./index-DdD0P9sc.js";import"./index-DhCDiUD2.js";import"./index-DgjlDdW0.js";import"./index-Ge3Tw8iO.js";import"./index-CNVqUNB9.js";import"./index-BGj-2ukp.js";import"./index-Bg5xPX9b.js";import"./index-c_MoiZvK.js";import"./index-rMcQZCT_.js";import"./index-DqjA2CJI.js";import"./index-DUcChkPA.js";import"./index-Bd568ebt.js";import"./index-CXzLkByr.js";import"./ComboBox-BthUrrTu.js";import"./index-CV7DnwVd.js";import"./TreeList-BLcOMBIT.js";import"./copyToClipboard-DB_KM_BY.js";const g=()=>{const[e,r]=m.useState(0);return t.jsxs("div",{className:p.wrapper,children:[t.jsx(u,{title:"PdfPreview",description:"PdfPreview отображает состояние загрузки, пустое состояние и предпросмотр PDF-документа. Компонент принимает PDF-данные и поддерживает кастомные сообщения и размеры контейнера.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/PdfPreview"}),t.jsx("div",{className:p.tabs,children:t.jsxs(o,{children:[t.jsx(o.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>r(0)}),t.jsx(o.Tab,{label:"Тестирование",active:Number(e)===1,onClick:()=>r(1)})]})}),Number(e)==0&&t.jsxs(t.Fragment,{children:[t.jsx(i,{minHeight:360,description:"Пустое состояние с кастомным текстом через emptyMessage.",code:`import { PdfPreview } from "@nlmk/ds-2.0";

const App = () => (
  <PdfPreview
    data={null}
    emptyMessage="Выберите документ для предпросмотра"
    style={{ height: "320px", width: "100%" }}
  />
);

export default App;
`}),t.jsx(i,{minHeight:360,description:"Состояние загрузки документа через loading.",code:`import { PdfPreview } from "@nlmk/ds-2.0";

const App = () => (
  <PdfPreview
    data={null}
    loading
    style={{ height: "320px", width: "100%" }}
  />
);

export default App;
`}),t.jsx(i,{minHeight:1200,description:"Интерактивный пример загрузки и предпросмотра PDF-файла.",code:`import { useEffect, useState, useRef } from "react";
import { PdfPreview, AttachFiles, File } from "@nlmk/ds-2.0";

const App = () => {
  const [pdfData, setPdfData] = useState(null);
  const [fileName, setFileName] = useState("pdf-test.pdf");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    const preloadPdf = async () => {
      setLoading(true);

      try {
        const response = await fetch("/docs/pdf-test.pdf");
        if (!response.ok) throw new Error("Не удалось загрузить demo PDF");

        const blob = await response.blob();
        setPdfData(blob);
        setFileName("pdf-test.pdf");
        setError("");
      } catch {
        setPdfData(null);
        setFileName("");
        setError("Ошибка при загрузке demo PDF");
      } finally {
        setLoading(false);
      }
    };

    preloadPdf();
  }, []);

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
`}),t.jsx(P,{argsTypes:v})]}),Number(e)==1&&t.jsx(h,{componentName:"PdfPreview"})]})};function s(e){return t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"Components/PdfPreview/Info",component:f,parameters:{jest:["PdfPreview.test.tsx"]}}),`
`,t.jsx(n,{of:c}),`
`,t.jsx(d,{children:t.jsx(g,{})})]})}function ge(e={}){const{wrapper:r}={...l(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(s,{...e})}):s()}export{ge as default};
