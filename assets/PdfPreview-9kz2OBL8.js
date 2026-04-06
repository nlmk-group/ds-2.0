import{r as m,j as t,m as a,S as n,U as d}from"./iframe-adG_7yRG.js";import{useMDXComponents as l}from"./index-Cg8Pf3Pw.js";import{P as f}from"./index-DvSn1Rpa.js";import{DecoratorDefault as c}from"./Decorator.stories-Beo23sgK.js";import{s as p,H as u,E as i}from"./Header-cMHYDLeC.js";import{P,T as h}from"./Tests-C1XQ0sNC.js";/* empty css               */import{T as o}from"./index-Yehuvb9K.js";import{a as v}from"./argsTypes-YVHmqm-S.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Da_FDSx_.js";import"./index-TjqOvBrG.js";import"./clsx-B-dksMZM.js";import"./index-CnTjgQRx.js";import"./index-DzN3aT-y.js";import"./index-N0HJx9V2.js";import"./index-y2k2yeKx.js";import"./16-C5RTlL5k.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-C2G2GNsa.js";import"./24-B-tnmrg_.js";import"./index-C6st097g.js";import"./16-LI8OsMJg.js";import"./index-DSz2Fxi8.js";import"./index-DC_nQVbx.js";import"./32-B9XnRb5u.js";import"./24-DrBRk2vS.js";import"./24-BuaVNHQi.js";import"./24-B4fAX0Ec.js";import"./24-Wv8b4C8A.js";import"./24-GH3yabNM.js";import"./24-BDLYxJUB.js";import"./24-DcUw9JWs.js";import"./24-BxGqfMjL.js";import"./24-B0jNPX91.js";import"./16-BTp4GQQG.js";import"./16-D-NUuvME.js";import"./index-BSzISWDV.js";import"./index-Bw5qm4Ov.js";import"./index-75kOkesn.js";import"./index-Dyd59tUY.js";import"./index-BhxlvnnA.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-COV9g-2Q.js";import"./index-DJrVOycg.js";import"./index-Dy1IE1cv.js";import"./index-DtX9i5FK.js";import"./index-B1pHFt52.js";import"./index-CwSciSyB.js";import"./types-TdnjS80C.js";import"./floating-ui.react-7VA0tf7C.js";import"./sizesMapping-D8QavrGc.js";import"./index-U_RCd_HH.js";import"./index-CMSErBpE.js";import"./index-CzkpZwDT.js";import"./index-BOTgB3bz.js";import"./index-DFAIDFiK.js";import"./index-CkcKW4Vm.js";import"./index-C0jfxf7x.js";import"./index-Csnb6gHF.js";import"./index-BYkQO_14.js";import"./index-CsSUhH6Q.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-Cl0xhJAL.js";import"./useFloatingReferenceSync-D48fx_Db.js";import"./index-D02QEMLS.js";import"./index-CXTleZNA.js";import"./index-aAdctPR4.js";import"./index-onHurrhQ.js";import"./index-QnhurHRA.js";import"./index--d2ZPp2Q.js";import"./index-44u0uri5.js";import"./index-PgA7KtkC.js";import"./index-CzL7ANP0.js";import"./index-DFN2ZEva.js";import"./index-B97cDh6f.js";import"./index-CZ0fPPTA.js";import"./index-BMxGNkbP.js";import"./index-Bj8TCYsg.js";import"./index-KPC3KFCd.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CjWSOjsl.js";import"./index-x0hwq8uq.js";import"./index-BwyGxYsl.js";import"./index-B9-K2gEf.js";import"./index-BkYL4d7S.js";import"./index-Bikxfajv.js";import"./index-xPNSVzye.js";import"./index-Bh4CHjuX.js";import"./index-DCdHhu1d.js";import"./index-DvU_tOJJ.js";import"./index-DcziJIpL.js";import"./index-CQDvThHr.js";import"./index-BvXrgCCA.js";import"./index-DlthScRn.js";import"./index-Dmvi1Ah7.js";import"./index-Bv05uYkg.js";import"./index-Cl4HH77d.js";import"./index-CTk4SyJ7.js";import"./ComboBox-C085h5Nz.js";import"./index-C3nPMNvV.js";import"./TreeList-zjoUqghX.js";import"./copyToClipboard-DB_KM_BY.js";const g=()=>{const[e,r]=m.useState(0);return t.jsxs("div",{className:p.wrapper,children:[t.jsx(u,{title:"PdfPreview",description:"PdfPreview отображает состояние загрузки, пустое состояние и предпросмотр PDF-документа. Компонент принимает PDF-данные и поддерживает кастомные сообщения и размеры контейнера.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/PdfPreview"}),t.jsx("div",{className:p.tabs,children:t.jsxs(o,{children:[t.jsx(o.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>r(0)}),t.jsx(o.Tab,{label:"Тестирование",active:Number(e)===1,onClick:()=>r(1)})]})}),Number(e)==0&&t.jsxs(t.Fragment,{children:[t.jsx(i,{minHeight:360,description:"Пустое состояние с кастомным текстом через emptyMessage.",code:`import { PdfPreview } from "@nlmk/ds-2.0";

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
