import{j as e}from"./jsx-runtime-DFnSfiB4.js";import{r as p}from"./index-DQ2WTIsS.js";import{ae as l,B as i,a3 as M,af as v,I as B}from"./index-DLauUNt7.js";import"./generateUUID-CY9Prqwy.js";import"./index-BenQYTIH.js";import"./index-BgyuaCKK.js";import{B as w}from"./index-B8KuQLf-.js";import"./index-B_c816qF.js";import{T as c}from"./index-DJXOh8UI.js";import"./index-Dvm_EBHX.js";import"./index-wNTT8eSr.js";import"./index-S3KjbRnp.js";import"./index-CWVO2cHI.js";import"./32-CCQbJusC.js";import{o as D}from"./mocks-DrsD8qqS.js";import{a as d}from"./chunk-454WOBUV-CM0pFb8Z.js";import{a as P}from"./argsTypes-DzXbhqpH.js";import"./clsx-B-dksMZM.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./index-0sbKER3h.js";import"./v4-CQkTLCs1.js";const k="_wrapper_6hp5q_1",N={wrapper:k},R=o=>e.jsx(w,{className:N.wrapper,alignItems:"center",justifyContent:"center",children:e.jsx(o,{})}),re={title:"Components/Modal/Stories",component:l,decorators:[R],argTypes:P},n=o=>{const[a,s]=p.useState(!1);return e.jsxs("div",{children:[e.jsx(i,{onClick:()=>s(!0),children:"Открыть модальное окно"}),e.jsx(l,{...o,isOpen:a,onClose:()=>{s(!1),d("modalClosed")()},children:e.jsx(c,{color:"var(--steel-90)",children:"Содержимое модального окна"})})]})};n.storyName="Модальное окно по умолчанию";const t=o=>{const[a,s]=p.useState(!1);return e.jsxs("div",{children:[e.jsx(i,{onClick:()=>s(!0),children:"Открыть перетаскиваемое модальное окно"}),e.jsx(l,{...o,isOpen:a,onClose:()=>{s(!1),d("modalClosed")()},children:e.jsx(c,{color:"primary",children:"Это перетаскиваемое модальное окно."})})]})};t.storyName="Перетаскиваемое модальное окно";t.args={isDraggable:!0};const r=o=>{const[a,s]=p.useState(!1),[S,T]=p.useState(new Date),[j,I]=p.useState([]);return e.jsxs("div",{children:[e.jsx(i,{onClick:()=>s(!0),children:"Открыть модальное окно изменяемого размера"}),e.jsxs(l,{...o,isOpen:a,onClose:()=>{s(!1),d("modalClosed")()},children:[e.jsx(c,{color:"primary",style:{marginBottom:"10px"},children:"Это модальное окно изменяемого размера."}),e.jsx(M,{withPortal:!0,value:S,onChange:T}),e.jsx(v,{options:D,selected:j,onSelectionChange:I,withPortal:!0,style:{marginTop:"10px"}}),e.jsx(B,{style:{marginTop:"10px"}})]})]})};r.storyName="Модальное окно изменяемого размера";r.args={isResizable:!0};var m,u,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`(argsTypes: IModalProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);
  return <div>
      <Button onClick={() => setIsOpen(true)}>Открыть модальное окно</Button>
      <Modal {...argsTypes} isOpen={isOpen} onClose={() => {
      setIsOpen(false);
      action('modalClosed')();
    }}>
        <Typography color="var(--steel-90)">Содержимое модального окна</Typography>
      </Modal>
    </div>;
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,h,x;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`(argsTypes: IModalProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);
  return <div>
      <Button onClick={() => setIsOpen(true)}>Открыть перетаскиваемое модальное окно</Button>
      <Modal {...argsTypes} isOpen={isOpen} onClose={() => {
      setIsOpen(false);
      action('modalClosed')();
    }}>
        <Typography color="primary">Это перетаскиваемое модальное окно.</Typography>
      </Modal>
    </div>;
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var C,f,O;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`(argsTypes: IModalProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, onChange] = useState(new Date());
  const [selected, setSelected] = useState<TSelected>([]);
  return <div>
      <Button onClick={() => setIsOpen(true)}>Открыть модальное окно изменяемого размера</Button>
      <Modal {...argsTypes} isOpen={isOpen} onClose={() => {
      setIsOpen(false);
      action('modalClosed')();
    }}>
        <Typography color="primary" style={{
        marginBottom: '10px'
      }}>
          Это модальное окно изменяемого размера.
        </Typography>
        <DatePicker withPortal value={value} onChange={onChange} />
        <Select options={options} selected={selected} onSelectionChange={setSelected} withPortal style={{
        marginTop: '10px'
      }} />
        <Input style={{
        marginTop: '10px'
      }} />
      </Modal>
    </div>;
}`,...(O=(f=r.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};const ae=["ModalDefault","DraggableModal","ResizableModal"];export{t as DraggableModal,n as ModalDefault,r as ResizableModal,ae as __namedExportsOrder,re as default};
