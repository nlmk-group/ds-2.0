import{r as m,j as t,m as a,S as n,U as d}from"./iframe-CbS8bInr.js";import{useMDXComponents as l}from"./index-FQFA8fbo.js";import{P as f}from"./index-C-2db-Xh.js";import{DecoratorDefault as c}from"./Decorator.stories-B_ZhqKNm.js";import{s as p,H as u,E as i}from"./Header-DtwNtocj.js";import{P,T as h}from"./Tests-CELr3Suj.js";/* empty css               */import{T as o}from"./index-BZODxpmY.js";import{a as v}from"./argsTypes-YVHmqm-S.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CNVtutNW.js";import"./index-YseVeHvS.js";import"./clsx-B-dksMZM.js";import"./index-CKjhTvOz.js";import"./index-DFlE0BoX.js";import"./index-BmJKslqM.js";import"./index-CrvMY39-.js";import"./16-B5g6d240.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-Sa4UUf3z.js";import"./24-B8ZOnMJQ.js";import"./index-8cX9WAIH.js";import"./16-aZBE51Hh.js";import"./index-OI82wUv3.js";import"./index-CA2hv6TN.js";import"./32-BZ5ZA3rE.js";import"./24-CiyiO54M.js";import"./24-Di0nu-by.js";import"./24-CC9V7_4j.js";import"./24-BfjqGgZ9.js";import"./24-CqnhtF5T.js";import"./24-BWksqsvG.js";import"./24-mlG8Xvhb.js";import"./24-BGnREA9p.js";import"./24-C_iNukEM.js";import"./16-BMdnWzuc.js";import"./16-CGq2ocz6.js";import"./index-ZFz_t-ha.js";import"./index-Bl1t28dV.js";import"./index-BYj-taLQ.js";import"./index-DsMC7Zj7.js";import"./index-CjORfByN.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-DgZPBMQ0.js";import"./index-BRRvAv7x.js";import"./index-B6Qf8jdS.js";import"./index-CD4Ms4Kk.js";import"./index-CF1r-WqF.js";import"./index-4JwXcQ6W.js";import"./types-TdnjS80C.js";import"./floating-ui.react-CCPXVVQu.js";import"./sizesMapping-D8QavrGc.js";import"./index-DNdNd9K1.js";import"./index-BseawL0q.js";import"./index-BR8A-Tk7.js";import"./index-CxpitsSn.js";import"./index-ClICwiNM.js";import"./index-rEDSKjd0.js";import"./index-ef9lu6Ja.js";import"./index-D4khgXsL.js";import"./index-DkJpm8py.js";import"./index-CdD_sciz.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-B-JpRLL-.js";import"./useFloatingReferenceSync-CLFAbrLx.js";import"./index-DskViU9t.js";import"./index-DL8dHQVX.js";import"./index-DjEFd8p0.js";import"./index-DuRcBvNr.js";import"./index-CDdYNhVB.js";import"./index-CTYy3ATz.js";import"./index-RC84cX2N.js";import"./index-1okAfVDI.js";import"./index-BZnrPoK4.js";import"./index-Bb6ai6CK.js";import"./index-B-o2ielS.js";import"./index-Bu3gBpCD.js";import"./index-sRzOyYuW.js";import"./index-OTRnbLNR.js";import"./index-DQhvKMWh.js";import"./index-CqrliyN6.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-QP3zFYLY.js";import"./index-fm5omEVd.js";import"./index-DT6Z4PFF.js";import"./index-DmffHaCi.js";import"./index-CR0-Vswk.js";import"./index-Bmek4GOF.js";import"./index-IW_o2CdI.js";import"./index-C7nQdULz.js";import"./index-0rd4srWV.js";import"./index-CXElAOzz.js";import"./index-WNdB1hMv.js";import"./index-C3xH0iq7.js";import"./index-DfNwsgKQ.js";import"./index-DhhLArOn.js";import"./index-DInBiNnO.js";import"./index-7qjhDsEe.js";import"./ComboBox-BZRB6Qpf.js";import"./index-DfGlJ-l6.js";import"./TreeList-BbNfEBTC.js";import"./copyToClipboard-DB_KM_BY.js";const g=()=>{const[e,r]=m.useState(0);return t.jsxs("div",{className:p.wrapper,children:[t.jsx(u,{title:"PdfPreview",description:"PdfPreview отображает состояние загрузки, пустое состояние и предпросмотр PDF-документа. Компонент принимает PDF-данные и поддерживает кастомные сообщения и размеры контейнера.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/PdfPreview"}),t.jsx("div",{className:p.tabs,children:t.jsxs(o,{children:[t.jsx(o.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>r(0)}),t.jsx(o.Tab,{label:"Тестирование",active:Number(e)===1,onClick:()=>r(1)})]})}),Number(e)==0&&t.jsxs(t.Fragment,{children:[t.jsx(i,{minHeight:360,description:"Пустое состояние с кастомным текстом через emptyMessage.",code:`import { PdfPreview } from "@nlmk/ds-2.0";

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
`,t.jsx(d,{children:t.jsx(g,{})})]})}function ve(e={}){const{wrapper:r}={...l(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(s,{...e})}):s()}export{ve as default};
