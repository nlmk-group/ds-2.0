import{r as s,j as r,m as a,S as n,U as c}from"./iframe-DXgTh6Z1.js";import{useMDXComponents as l}from"./index-D5E0TNiY.js";import{D as u}from"./index-RB1pFFkL.js";import{DecoratorDefault as d}from"./Decorator.stories-Dx4VbD6X.js";import{s as p,H as f,E as e}from"./Header-Cx_iqH4o.js";import{F as w}from"./FigmaEmbed-iMMFN0ni.js";import{P as D}from"./Properties-Bo87EZNs.js";import{T as x}from"./Tests-DMr2Ac1b.js";import{T as i}from"./index-9eeKqrVB.js";import{a as j}from"./argsTypes-940CHTRI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-xDA_A-aD.js";import"./index-CnUkpoWG.js";import"./clsx-B-dksMZM.js";import"./index-Crin4Hk2.js";import"./types-TdnjS80C.js";import"./24-BhlAG-0S.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-DUoRmuKU.js";import"./index-B4LxWNEW.js";import"./16-B8cH_bM_.js";import"./24-CmuppIra.js";import"./index-Bl4_x-Wd.js";import"./16-BbwgBG1i.js";import"./index-nfS7job7.js";import"./index-DdxGYpuj.js";import"./32-BZXccBNX.js";import"./24-C30wJjmO.js";import"./24-BbhvzLc-.js";import"./24-CHg1C3ZC.js";import"./24-sZrB_4qI.js";import"./24-CivDG4N5.js";import"./24-iRhnmlFx.js";import"./24-SIU2poG3.js";import"./24-Chag6Oqa.js";import"./24-BHCEpASW.js";import"./16-BY5Rr64R.js";import"./16-CRuPnIyY.js";import"./index-DYE4Bi1W.js";import"./index-C0y4NBi5.js";import"./index-XmWHrheD.js";import"./index-Nm4Qdu1z.js";import"./index-ucJ0GnFn.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-jEb4Knwf.js";import"./index-DhFDZi2m.js";import"./index-Bd4lHRV0.js";import"./index-D5KpWfD5.js";import"./index-ciSDAmyI.js";import"./index-DPmsdUVY.js";import"./floating-ui.react-CorT-KP5.js";import"./sizesMapping-D8QavrGc.js";import"./index-BVnvWAgp.js";import"./index-RnR2fccb.js";import"./index-BeCrIpLY.js";import"./index-v0wPdj4d.js";import"./index-gjDbOsdM.js";import"./index-C0IGfKtj.js";import"./index-wJn_BZHg.js";import"./index-BvFe6bW5.js";import"./index-BxMhlDR6.js";import"./index-Nw7Pfvlf.js";import"./index-CT-QPPa4.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-G2u_ACY6.js";import"./useFloatingReferenceSync-DqOI9czm.js";import"./index-DJtob4fj.js";import"./index-BX7kJ5B_.js";import"./index-B4fWoCsE.js";import"./index-B61jHTw_.js";import"./index-Ck2v1TJK.js";import"./index-CRivC9UR.js";import"./index-BEPLxOmT.js";import"./index-DVjmoy4g.js";import"./index-BglbQ0D6.js";import"./index-BYuKbTqS.js";import"./index-BhusuGgV.js";import"./index-h3Z4FQnr.js";import"./index-BC9Rp5Jo.js";import"./index-IVdkDpCO.js";import"./index-ilhepyhL.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-D9sJnCBD.js";import"./index-D6Zu8-bW.js";import"./index-DavKZYHC.js";import"./index-gi2vkf8n.js";import"./index-B7Ar8a4x.js";import"./index-B_BoipIY.js";import"./index-CBxHuoj8.js";import"./index-ByGDn29v.js";import"./index-Ba6RId1F.js";import"./index-MG8YOKfD.js";import"./index-Cgkxu7Qk.js";import"./index-C_JFYl_R.js";import"./index-7iv8Ztsr.js";import"./index-B-LJSldl.js";import"./index-Bxth20eU.js";import"./ComboBox-KK8W0C81.js";import"./index-CdxmqZWy.js";import"./TreeList-CqXttnbr.js";import"./copyToClipboard-DB_KM_BY.js";const b=()=>{const[t,o]=s.useState(0);return r.jsxs("div",{className:p.wrapper,children:[r.jsx(f,{title:"Drawer",description:"Компонент Drawer обеспечивает отображение выдвижной панели с возможностью настройки позиции и обработки закрытия.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Drawer"}),r.jsx("div",{className:p.tabs,children:r.jsxs(i,{children:[r.jsx(i.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>o(0)}),r.jsx(i.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>o(1)}),r.jsx(i.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>o(2)})]})}),Number(t)===0&&r.jsxs(r.Fragment,{children:[r.jsx(e,{height:350,description:"Пример базового использования Drawer.",code:`import { Button, Drawer, Typography }  from '@nlmk/ds-2.0';
import { useState } from 'react';

export default  App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <>
        <Button type="button" onClick={() => setIsOpen(true)}>Открыть Drawer</Button>
        <Drawer
            isOpen={isOpen}
            onClose={() => {
                setIsOpen(false);
            }}
        >
            <Typography color="primary">Содержимое Drawer</Typography>
        </Drawer>
      </>
  );
};
`}),r.jsx(e,{height:350,description:"Пример Drawer, открывающегося слева.",code:`import { Button, Drawer, Typography }  from '@nlmk/ds-2.0';
import { useState } from 'react';

export default  App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <>
        <Button type="button" onClick={() => setIsOpen(true)}>Открыть Drawer слева</Button>
        <Drawer
            isOpen={isOpen}
            position="left"
            onClose={() => {
                setIsOpen(false);
            }}
        >
            <Typography color="primary">Drawer, открывающийся слева</Typography>
        </Drawer>
      </>
  );
};
`}),r.jsx(D,{argsTypes:j})]}),Number(t)===1&&r.jsx(w,{url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=286-1924&p=f"}),Number(t)===2&&r.jsx(x,{componentName:"Drawer"})]})};function m(t){return r.jsxs(r.Fragment,{children:[r.jsx(a,{title:"Components/Drawer/Info",component:u,parameters:{design:{type:"figma",url:"https://www.figma.com/file/0BGHYt5CjO71I4KhygQJD5/DS2.0-Filtering-%26-Sorting?node-id=534-67220"},jest:["Drawer.test.tsx"]}}),`
`,r.jsx(n,{of:d}),`
`,r.jsx(c,{children:r.jsx(b,{})})]})}function xt(t={}){const{wrapper:o}={...l(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(m,{...t})}):m()}export{xt as default};
