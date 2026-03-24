import{r as m,j as t,m as a,S as n,U as d}from"./iframe-auckHHdj.js";import{useMDXComponents as l}from"./index-D2-gUu9G.js";import{P as f}from"./index-D9WAgLdq.js";import{DecoratorDefault as c}from"./Decorator.stories-CU9Bre90.js";import{s as p,H as u,E as i}from"./Header-Xv1TykH5.js";import{P,T as h}from"./Tests-Be3Z9p2z.js";/* empty css               */import{T as o}from"./index-DeGyB7Dd.js";import{a as v}from"./argsTypes-YVHmqm-S.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Toxo3H46.js";import"./index-DVSj14ZC.js";import"./clsx-B-dksMZM.js";import"./index-Pjjb9oj1.js";import"./index-Bi3cHAEE.js";import"./index-p7YOrb6p.js";import"./index-WoM53gF_.js";import"./16-DXAjwKj0.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-JpVCCs1C.js";import"./24-BbN_tXia.js";import"./index-c4yDlpPS.js";import"./16-DoCVdKUE.js";import"./index-CczZHqJG.js";import"./index-BLWgIzMD.js";import"./32-Dgon7Y2a.js";import"./24-D3OVyFof.js";import"./24-CZ9ZAk74.js";import"./24-D-Ce91Qj.js";import"./24-DCTJG6OU.js";import"./24-BOn3Xrid.js";import"./24-BC-oV7QY.js";import"./24-Gcxv2DAi.js";import"./24-zuSrA0QY.js";import"./24-aRDAvjva.js";import"./16-BIzc6kNX.js";import"./16-CQDnK6-A.js";import"./index-CznkRUli.js";import"./index-HmkWsx8T.js";import"./index-7B7uGpjf.js";import"./index-D6wJCd8e.js";import"./index-qO9dtrtH.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-Bay6_7KL.js";import"./index-CHU7bacX.js";import"./index-CXN1ldU3.js";import"./index-CsbgtAb7.js";import"./index-Dtv-oYzE.js";import"./index-B-ej4zbU.js";import"./types-TdnjS80C.js";import"./floating-ui.react-2bHrE470.js";import"./sizesMapping-D8QavrGc.js";import"./index-BQRpE3vE.js";import"./index-DIknRWC4.js";import"./index-BTrYr-DM.js";import"./index-NkgoTVoy.js";import"./index-DI5MKq0T.js";import"./index-DI7c4HX8.js";import"./index-5_PQcWJ_.js";import"./index-BJ_pO-nS.js";import"./index-Bgj3TetA.js";import"./index-7Ftiwmbj.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-DQjzjF05.js";import"./useFloatingReferenceSync-y2Sb52o3.js";import"./index-B4KZvEgZ.js";import"./index-MeCbP8N7.js";import"./index-DJL6Ketu.js";import"./index-DEqo2gt9.js";import"./index-DEdd9dJR.js";import"./index-symdhavQ.js";import"./index-mikXIReK.js";import"./index-DjEbf1Sc.js";import"./index-Clnp6vy5.js";import"./index-DPDFUXOz.js";import"./index-BcPHqDDB.js";import"./index-CmECfUaS.js";import"./index-CfC-iwgs.js";import"./index-D5mVsZu_.js";import"./index-CMGZFX1T.js";import"./index-DaTNyn08.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CYpVoyww.js";import"./index-C4xiOmXd.js";import"./index-Ckcsg1R_.js";import"./index-B4AAAwTV.js";import"./index-BbQCbaJ_.js";import"./index-1SaxXTAW.js";import"./index-Bfe18qq-.js";import"./index-DBO3Tr6M.js";import"./index-eQTa5KLe.js";import"./index-jYXTCRtU.js";import"./index-DKRvyNZX.js";import"./index-Cwm_m_JE.js";import"./index-DSyAIbs-.js";import"./index-BgB7HTk8.js";import"./index-84_n7Alc.js";import"./index-EESLLEw6.js";import"./index-CLlcyrdp.js";import"./ComboBox-0tLuTHDp.js";import"./index-D1zl6Im_.js";import"./TreeList-BsnCF1G8.js";import"./copyToClipboard-DB_KM_BY.js";const g=()=>{const[e,r]=m.useState(0);return t.jsxs("div",{className:p.wrapper,children:[t.jsx(u,{title:"PdfPreview",description:"PdfPreview отображает состояние загрузки, пустое состояние и предпросмотр PDF-документа. Компонент принимает PDF-данные и поддерживает кастомные сообщения и размеры контейнера.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/PdfPreview"}),t.jsx("div",{className:p.tabs,children:t.jsxs(o,{children:[t.jsx(o.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>r(0)}),t.jsx(o.Tab,{label:"Тестирование",active:Number(e)===1,onClick:()=>r(1)})]})}),Number(e)==0&&t.jsxs(t.Fragment,{children:[t.jsx(i,{minHeight:360,description:"Пустое состояние с кастомным текстом через emptyMessage.",code:`import { PdfPreview } from "@nlmk/ds-2.0";

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
