import{r as m,j as t,m as a,S as n,U as d}from"./iframe-B-8SjXGq.js";import{useMDXComponents as l}from"./index-BM0F5ub6.js";import{P as f}from"./index-CCVipuRP.js";import{DecoratorDefault as c}from"./Decorator.stories-Dr4lnSCK.js";import{s as p,H as u,E as i}from"./Header-Bt2eZ0XI.js";import{P,T as h}from"./Tests-BJxC6M0y.js";/* empty css               */import{T as o}from"./index-lTVAi1na.js";import{a as v}from"./argsTypes-YVHmqm-S.js";import"./preload-helper-PPVm8Dsz.js";import"./index-aEU1GZqG.js";import"./index-BRmunlbh.js";import"./clsx-B-dksMZM.js";import"./index-DWjwH6nq.js";import"./index-CgN-9tGr.js";import"./index-Dfriq7lO.js";import"./index-DcMeZWW2.js";import"./16-BDcju3io.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-Dnj2eOeL.js";import"./24-CcDcN9Vt.js";import"./index-SApy96bT.js";import"./16-BNHSjjb0.js";import"./index-WkQvqD6p.js";import"./index-DqQiUiOd.js";import"./32-CnDyPHET.js";import"./24-DwPXEH6E.js";import"./24-2N5QtnbH.js";import"./24-nrV1efA2.js";import"./24-CjfWKKEu.js";import"./24-BSP12KOo.js";import"./24-rC0gEzBb.js";import"./24-DxfkYE9X.js";import"./24-CBHgkWPK.js";import"./24-FlXbOQvU.js";import"./16-B09-A838.js";import"./16-Bjal1Kcy.js";import"./index-1sCEIwws.js";import"./index-D81MGMsd.js";import"./index-O63UzFtM.js";import"./index-BG3v9Uex.js";import"./index-DjGSmZX3.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-BA-hOJmZ.js";import"./index-C0fhG72W.js";import"./index-CVbeuYKL.js";import"./index-CDSure0q.js";import"./index-DLvwH50I.js";import"./index-DHxtbo6p.js";import"./types-TdnjS80C.js";import"./floating-ui.react-D9KZKjfI.js";import"./sizesMapping-D8QavrGc.js";import"./index-BFb5q96r.js";import"./index-nnfFZ9zh.js";import"./index-CJXb8S3m.js";import"./index-DQp-at3f.js";import"./index-BKV_kQZi.js";import"./index-BsPt_Eeq.js";import"./index-CA4vmu2I.js";import"./index-DmKJBqLb.js";import"./index-BpxvuqRy.js";import"./index-Bwm1RwE7.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-CezGHJxo.js";import"./useFloatingReferenceSync-Dse8FenO.js";import"./index-lbMvjW_5.js";import"./index-BQw9APNC.js";import"./index-BIIYwqts.js";import"./index-gTdR2BgD.js";import"./index-BO_pppR1.js";import"./index-CA8coT2V.js";import"./index-BOvyB9Hg.js";import"./index-D0y26aqM.js";import"./index-nMsf_JLJ.js";import"./index-CbDdcaTf.js";import"./index-Bemzq2Pd.js";import"./index-CZwmGRm1.js";import"./index-BsUh_WOc.js";import"./index-BiLYqWzA.js";import"./index-CRdPa-5u.js";import"./index-DXDnCKkm.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CHI72_Mb.js";import"./index-6SN77Vs_.js";import"./index-J-DZaU2Z.js";import"./index-DRE2VGwx.js";import"./index-pTCHtkWj.js";import"./index-BistaHJu.js";import"./index-CdcbwH8N.js";import"./index-D7Pw4d7U.js";import"./index-B09XZxaV.js";import"./index-DTtZr5oI.js";import"./index--AS7wYhz.js";import"./index-XCg4i2Qb.js";import"./index-K1Up07vg.js";import"./index-CYq0uzEC.js";import"./index-D9xdw-kV.js";import"./ComboBox-D53aWZPr.js";import"./index-CIaEAtE8.js";import"./TreeList-u3mntEr0.js";import"./copyToClipboard-DB_KM_BY.js";const g=()=>{const[e,r]=m.useState(0);return t.jsxs("div",{className:p.wrapper,children:[t.jsx(u,{title:"PdfPreview",description:"PdfPreview отображает состояние загрузки, пустое состояние и предпросмотр PDF-документа. Компонент принимает PDF-данные и поддерживает кастомные сообщения и размеры контейнера.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/PdfPreview"}),t.jsx("div",{className:p.tabs,children:t.jsxs(o,{children:[t.jsx(o.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>r(0)}),t.jsx(o.Tab,{label:"Тестирование",active:Number(e)===1,onClick:()=>r(1)})]})}),Number(e)==0&&t.jsxs(t.Fragment,{children:[t.jsx(i,{minHeight:360,description:"Пустое состояние с кастомным текстом через emptyMessage.",code:`import { PdfPreview } from "@nlmk/ds-2.0";

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
`,t.jsx(d,{children:t.jsx(g,{})})]})}function he(e={}){const{wrapper:r}={...l(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(s,{...e})}):s()}export{he as default};
