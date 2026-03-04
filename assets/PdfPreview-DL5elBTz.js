import{r as m,j as t,m as a,S as n,U as d}from"./iframe-CE_JzATH.js";import{useMDXComponents as l}from"./index--LKfDmxm.js";import{P as f}from"./index-Bie4xbHL.js";import{DecoratorDefault as c}from"./Decorator.stories-Cj-tg-7N.js";import{s as p,H as u,E as i}from"./Header-CEastCIP.js";import{P,T as h}from"./Tests-BOPY5pZ5.js";/* empty css               */import{T as o}from"./index-DR6oWFtr.js";import{a as v}from"./argsTypes-YVHmqm-S.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dlf_Ao8T.js";import"./index-Vjux8dVh.js";import"./clsx-B-dksMZM.js";import"./index-D_aCbd9C.js";import"./index-BBICZI1L.js";import"./index-CuFOreg9.js";import"./index-BmicXPVL.js";import"./16-BkTHhwnS.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-DEt0-nuC.js";import"./24-J6XSru0N.js";import"./index-vmgVWNov.js";import"./16-DWPiS2iU.js";import"./index-14rW-JY7.js";import"./index-MfvAP8aB.js";import"./32-CrxSrIcc.js";import"./24-0Dk1wnnD.js";import"./24-BBq2cK-Y.js";import"./24-Cd5pTj28.js";import"./24-DGYmTzFV.js";import"./24-HbFaW7H_.js";import"./24-BQMnublh.js";import"./24-DzFwSmYQ.js";import"./24-CjAn70IH.js";import"./24-D38MhcLh.js";import"./16-BIs1fvk9.js";import"./16-p0CPjrKD.js";import"./index-DqQz5Bh6.js";import"./index-DYU6s7CX.js";import"./index-CLTGTTU8.js";import"./index-BGKZjWkn.js";import"./index-C9knVUuX.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-BFAgnURa.js";import"./index-BzyAc0E-.js";import"./index-2jg-3oeM.js";import"./index-Dg5Lxpt5.js";import"./index-BiitYh94.js";import"./index-DTnW7Fop.js";import"./types-TdnjS80C.js";import"./floating-ui.react-BU5fnxMH.js";import"./sizesMapping-D8QavrGc.js";import"./index-DCIzctxN.js";import"./index-D9YxWY4C.js";import"./index-Os9u-Jz6.js";import"./index-BaSH6PPb.js";import"./index-Bz3uj4QG.js";import"./index-BvCaACBB.js";import"./index-1zCxhXDP.js";import"./index-C1XFyCw_.js";import"./index-3C1lTiZm.js";import"./index-zLxCaNl1.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-B7kzxF9t.js";import"./useFloatingReferenceSync-B_aNqrAc.js";import"./index-e5L8QLyK.js";import"./index-GJu7X8CR.js";import"./index-CIwcf8Lj.js";import"./index-B98ISFmk.js";import"./index-Bd3jAiyn.js";import"./index-Dg1nWoIh.js";import"./index-DFbFAj2G.js";import"./index-Y_CVE_H3.js";import"./index-8oyMVyrk.js";import"./index-QZq9zOpZ.js";import"./index-CT3rs89l.js";import"./index-CAijYJEe.js";import"./index-CEXEVLrc.js";import"./index-pURGVU60.js";import"./index-D1Sci6D5.js";import"./index-kWQnP7zC.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-tXN-kzru.js";import"./index-DCIrx6NW.js";import"./index-DHVZe4vO.js";import"./index-DuLnj-te.js";import"./index-C7v9s-B0.js";import"./index-y0ewvpMP.js";import"./index-OcscY6If.js";import"./index-DjVMJKcc.js";import"./index-TCeJA5jN.js";import"./index-DtSKDO7f.js";import"./index-DPX3eImA.js";import"./index-DNC3PuSz.js";import"./index-CIs5j9YL.js";import"./index-WRw5KxXj.js";import"./index-DYl6OFvJ.js";import"./ComboBox-KBNGbY8a.js";import"./index-BdsesjiO.js";import"./TreeList-t_ASH-u2.js";import"./copyToClipboard-DB_KM_BY.js";const g=()=>{const[e,r]=m.useState(0);return t.jsxs("div",{className:p.wrapper,children:[t.jsx(u,{title:"PdfPreview",description:"PdfPreview отображает состояние загрузки, пустое состояние и предпросмотр PDF-документа. Компонент принимает PDF-данные и поддерживает кастомные сообщения и размеры контейнера.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/PdfPreview"}),t.jsx("div",{className:p.tabs,children:t.jsxs(o,{children:[t.jsx(o.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>r(0)}),t.jsx(o.Tab,{label:"Тестирование",active:Number(e)===1,onClick:()=>r(1)})]})}),Number(e)==0&&t.jsxs(t.Fragment,{children:[t.jsx(i,{minHeight:360,description:"Пустое состояние с кастомным текстом через emptyMessage.",code:`import { PdfPreview } from "@nlmk/ds-2.0";

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
