import{j as e,a as p}from"./jsx-runtime-2xDJh5tt.js";import{r as n}from"./index-CBqU2yxZ.js";import{a8 as l,B as i,Z as M,a9 as v,I as k}from"./index-8_zPi9mf.js";import"./generateUUID-BitdulAq.js";import"./index-D_z3tN8U.js";import"./index-CTkD9j2t.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import{T as c}from"./index-nWYpQihe.js";import"./index-CZmYKfHv.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-BDxIiU-V.js";import"./32-D4qDQhsJ.js";import{a as d}from"./chunk-WFFRPTHA-B5TewAtn.js";import{a as w}from"./argsTypes-DzXbhqpH.js";import{o as x}from"./mocks-CNxb5xTG.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx.m-CH7BE6MN.js";import"./index-BtM5VmRH.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-CMH8wQUv.js";import"./preview-errors-Dg5lG0lC.js";import"./index-DrFu-skq.js";const A="_wrapper_c8tl6_1",P={wrapper:A},b=o=>e("div",{className:P.wrapper,children:o()}),re={title:"Components/Modal/Stories",component:l,decorators:[b],argTypes:w},a=o=>{const[r,u]=n.useState(!1);return p("div",{children:[e(i,{onClick:()=>u(!0),children:"Открыть модальное окно"}),e(l,{...o,isOpen:r,onClose:()=>{u(!1),d("modalClosed")()},children:e(c,{color:"primary",children:"Содержимое модального окна"})})]})};a.storyName="Модальное окно по умолчанию";const s=o=>{const[r,u]=n.useState(!1);return p("div",{children:[e(i,{onClick:()=>u(!0),children:"Открыть перетаскиваемое модальное окно"}),e(l,{...o,isOpen:r,onClose:()=>{u(!1),d("modalClosed")()},children:e(c,{color:"primary",children:"Это перетаскиваемое модальное окно."})})]})};s.storyName="Перетаскиваемое модальное окно";s.args={isDraggable:!0};const t=o=>{const[r,u]=n.useState(!1),[S,B]=n.useState(new Date),[T,I]=n.useState([]);return p("div",{children:[e(i,{onClick:()=>u(!0),children:"Открыть модальное окно изменяемого размера"}),p(l,{...o,isOpen:r,onClose:()=>{u(!1),d("modalClosed")()},disableBackdropClick:!0,children:[e(c,{color:"primary",style:{marginBottom:"10px"},children:"Это модальное окно изменяемого размера."}),e(M,{withPortal:!0,value:S,onChange:B}),e(v,{options:x,selected:T,onSelectionChange:I,withPortal:!0,style:{marginTop:"10px"}}),e(k,{style:{marginTop:"10px"}})]})]})};t.storyName="Модальное окно изменяемого размера";t.args={isResizable:!0};var m,C,E;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`(argsTypes: IModalProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);
  return <div>
      <Button onClick={() => setIsOpen(true)}>Открыть модальное окно</Button>
      <Modal {...argsTypes} isOpen={isOpen} onClose={() => {
      setIsOpen(false);
      action('modalClosed')();
    }}>
        <Typography color="primary">Содержимое модального окна</Typography>
      </Modal>
    </div>;
}`,...(E=(C=a.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var g,y,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`(argsTypes: IModalProps): ReactNode => {
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
}`,...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var D,O,f;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`(argsTypes: IModalProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, onChange] = useState(new Date());
  const [selected, setSelected] = useState<TSelected>([]);
  return <div>
      <Button onClick={() => setIsOpen(true)}>Открыть модальное окно изменяемого размера</Button>
      <Modal {...argsTypes} isOpen={isOpen} onClose={() => {
      setIsOpen(false);
      action('modalClosed')();
    }} disableBackdropClick>
        <Typography color="primary" style={{
        marginBottom: '10px'
      }}>Это модальное окно изменяемого размера.</Typography>
        <DatePicker withPortal value={value} onChange={onChange} />
        <Select options={options} selected={selected} onSelectionChange={setSelected} withPortal style={{
        marginTop: '10px'
      }} />
        <Input style={{
        marginTop: '10px'
      }} />
      </Modal>
    </div>;
}`,...(f=(O=t.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};const ae=["ModalDefault","DraggableModal","ResizableModal"];export{s as DraggableModal,a as ModalDefault,t as ResizableModal,ae as __namedExportsOrder,re as default};
