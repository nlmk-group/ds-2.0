import{r as s,j as r,m as a,S as n,U as c}from"./iframe-DVMl8sUd.js";import{useMDXComponents as l}from"./index-CAw1kPaN.js";import{D as u}from"./index-yBXS77Dw.js";import{DecoratorDefault as d}from"./Decorator.stories-CV1kor5g.js";import{s as p,H as f,E as e}from"./Header-CsvOsVxR.js";import{F as w}from"./FigmaEmbed-BhcSTkWa.js";import{P as D}from"./Properties-D_4CcFrq.js";import{T as x}from"./Tests-BBMIGr6p.js";import{T as i}from"./index-BKzSZHPo.js";import{a as j}from"./argsTypes-940CHTRI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bp2By6__.js";import"./index-BiQzV66K.js";import"./clsx-B-dksMZM.js";import"./index-DBP40flF.js";import"./types-TdnjS80C.js";import"./24-zy_Eb8yW.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-c_cWNEvj.js";import"./index-B6wmWkKl.js";import"./16-DS6pkd6h.js";import"./24-B6TQx9cH.js";import"./index-ckEmqNWl.js";import"./16-B_-dTBZH.js";import"./index-BkEnu_9U.js";import"./index-DXlbLt0r.js";import"./32-DlVlhRBC.js";import"./24-Dxm6iXAZ.js";import"./24-BpU9xG6s.js";import"./24-B8I_S3Z2.js";import"./24-CWuMWKc-.js";import"./24-dsfZEEjk.js";import"./24-wxW4P8Ns.js";import"./24-C_f6t1jh.js";import"./24-IUyK1JcU.js";import"./24-CEGSM-Jk.js";import"./16-CGhI_ilc.js";import"./16-BX8-DyZt.js";import"./index-CJD9gF_1.js";import"./index-D9mSQM-g.js";import"./index-BDf5uUdD.js";import"./index-DyUq_Ha8.js";import"./index-DFTiKKVp.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-qgNwGWRd.js";import"./index-BT2IFx4q.js";import"./index-CxKYaCMZ.js";import"./index-JdG74ms_.js";import"./index-C9A9Gets.js";import"./index-BAf8pb65.js";import"./floating-ui.react-DI7kI9D-.js";import"./sizesMapping-D8QavrGc.js";import"./index-B9DaXCaB.js";import"./index-FpPixloK.js";import"./index-0BERZfC3.js";import"./index-CLCIgSqb.js";import"./index-DSj7G5qX.js";import"./index-DSuX4nuo.js";import"./index-iSEbVQin.js";import"./index-iQSHIB6o.js";import"./index-B85_aTFp.js";import"./index-BkR2z-Xc.js";import"./index-vUoPUndJ.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-C0GcVDfG.js";import"./useFloatingReferenceSync-7YTNcl0h.js";import"./index-B08U8Eji.js";import"./index-Ek0LlI95.js";import"./index-C45P8Ih7.js";import"./index-Dpl1hQuk.js";import"./index-CphKjyIZ.js";import"./index-Db0U5WML.js";import"./index-CQVR9uK0.js";import"./index-b7tpmXVt.js";import"./index-IJGfvyRE.js";import"./index-DAfqaa2G.js";import"./index-DTcCV-Je.js";import"./index-Cn8Pdxua.js";import"./index-DmVjcjny.js";import"./index-CPDTjkl_.js";import"./index-DESvXwG_.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-Bg1GYGiZ.js";import"./index-D1p2RRKl.js";import"./index-q_lPpOLF.js";import"./index-CYrbOrYX.js";import"./index-CAzTY8lY.js";import"./index-Dkm8jcwi.js";import"./index-C6xjJOKz.js";import"./index-wSRpoQej.js";import"./index-Du6dXHHd.js";import"./index-DiVXqmN1.js";import"./index-CBUFRF6B.js";import"./index-DMJQuZMx.js";import"./index-B3TyGJqx.js";import"./index-DqRlCSI9.js";import"./index-CD2cCXFu.js";import"./ComboBox-BKCir-_v.js";import"./index-BYHclbdr.js";import"./TreeList-WfFaeHrC.js";import"./copyToClipboard-DB_KM_BY.js";const b=()=>{const[t,o]=s.useState(0);return r.jsxs("div",{className:p.wrapper,children:[r.jsx(f,{title:"Drawer",description:"Компонент Drawer обеспечивает отображение выдвижной панели с возможностью настройки позиции и обработки закрытия.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Drawer"}),r.jsx("div",{className:p.tabs,children:r.jsxs(i,{children:[r.jsx(i.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>o(0)}),r.jsx(i.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>o(1)}),r.jsx(i.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>o(2)})]})}),Number(t)===0&&r.jsxs(r.Fragment,{children:[r.jsx(e,{height:350,description:"Пример базового использования Drawer.",code:`import { Button, Drawer, Typography }  from '@nlmk/ds-2.0';
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
