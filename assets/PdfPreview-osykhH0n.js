import{r as m,j as t,m as a,S as n,U as d}from"./iframe-DfRM7LXF.js";import{useMDXComponents as l}from"./index-s3G8uf3c.js";import{P as f}from"./index-Bk5TUS1W.js";import{DecoratorDefault as c}from"./Decorator.stories-Dc5cDQ_A.js";import{s as p,H as u,E as i}from"./Header-BrYoDfav.js";import{P,T as h}from"./Tests-Bl_4nCEK.js";/* empty css               */import{T as o}from"./index-HQdxBngH.js";import{a as v}from"./argsTypes-YVHmqm-S.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DyLcPuXd.js";import"./index--nFqMQdT.js";import"./clsx-B-dksMZM.js";import"./index-B2VJ83In.js";import"./index-BBdLC-OA.js";import"./index-DINl29EL.js";import"./index-CbWBwQI3.js";import"./16-BAUAAMRf.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-DPno0QZj.js";import"./24-D3pKJ1t3.js";import"./index-BRJ-Ua9i.js";import"./16-fn2TPoua.js";import"./index-eg8itsWK.js";import"./index-CN5IEPbV.js";import"./32-Bjn7Co6i.js";import"./24-D-2FQCka.js";import"./24-Bx5Ko4Zf.js";import"./24-CWpuPGUf.js";import"./24-CLWtzJRM.js";import"./24-Cp5qlwo7.js";import"./24-LAGNS7eA.js";import"./24-CSBD1goG.js";import"./24-DunoRfpD.js";import"./24-WTey2qPh.js";import"./16-B4jpe3eU.js";import"./16-UKcUYuG7.js";import"./index-CqGpx5F6.js";import"./index-D2Kz8Cjc.js";import"./index-DVB7RJDK.js";import"./index-Bbrpw_Ow.js";import"./index-rkxnOxqa.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-BGl-7D4l.js";import"./index-BqE4MY4m.js";import"./index-wON6kCEo.js";import"./index-CRXfl0Vt.js";import"./index-UMg-UgH6.js";import"./index-DZtnbN5A.js";import"./types-TdnjS80C.js";import"./floating-ui.react-CdQVfeSt.js";import"./sizesMapping-D8QavrGc.js";import"./index-DkFFLpKU.js";import"./index-BRcbigKy.js";import"./index-Bs9bu8w1.js";import"./index-CAWkMWRs.js";import"./index-B6F_DLS2.js";import"./index-D0L1Sk36.js";import"./index-CPQdLsa5.js";import"./index-CJQswicC.js";import"./index-DmFtZ-Ny.js";import"./index-wY5Em-zL.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-nVILX9LA.js";import"./useFloatingReferenceSync-B2OO83Jd.js";import"./index-TH-r5Kbz.js";import"./index-Di10VY84.js";import"./index-CKR5Megx.js";import"./index-Baxn1nZN.js";import"./index-D3rQde2D.js";import"./index-W4qf1pCz.js";import"./index-B7Cg2_me.js";import"./index-BsZ7Kff4.js";import"./index-D2NcEt1k.js";import"./index-DUe44RxZ.js";import"./index-CzpPczJJ.js";import"./index-oHV1kBbR.js";import"./index-ydaVehZ7.js";import"./index-D_2odW5T.js";import"./index-B4s-8p3z.js";import"./index-C6yYWo4G.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-DsM1Nq1m.js";import"./index-S_twP3Il.js";import"./index-C1EDehIY.js";import"./index-BfvSM5Fb.js";import"./index-DTIMN90s.js";import"./index-syqq8EGq.js";import"./index-Dj81d4ZI.js";import"./index-Casca5S3.js";import"./index-Ba4KYGTt.js";import"./index-BvJOeOlN.js";import"./index-C6jCapMo.js";import"./index-BzMT43aM.js";import"./index-DsvUz8Pz.js";import"./index-DRK0Fag0.js";import"./index-DUBAR20C.js";import"./index-DRVnFPP8.js";import"./ComboBox-Dt4xV1fo.js";import"./index-Cotw6HSH.js";import"./TreeList-k1lhCedt.js";import"./copyToClipboard-DB_KM_BY.js";const g=()=>{const[e,r]=m.useState(0);return t.jsxs("div",{className:p.wrapper,children:[t.jsx(u,{title:"PdfPreview",description:"PdfPreview отображает состояние загрузки, пустое состояние и предпросмотр PDF-документа. Компонент принимает PDF-данные и поддерживает кастомные сообщения и размеры контейнера.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/PdfPreview"}),t.jsx("div",{className:p.tabs,children:t.jsxs(o,{children:[t.jsx(o.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>r(0)}),t.jsx(o.Tab,{label:"Тестирование",active:Number(e)===1,onClick:()=>r(1)})]})}),Number(e)==0&&t.jsxs(t.Fragment,{children:[t.jsx(i,{minHeight:360,description:"Пустое состояние с кастомным текстом через emptyMessage.",code:`import { PdfPreview } from "@nlmk/ds-2.0";

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
