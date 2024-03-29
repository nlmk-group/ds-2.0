import{j as u,a as p}from"./jsx-runtime-2xDJh5tt.js";import{r as i}from"./index-CBqU2yxZ.js";import{a4 as n,B as l}from"./index-DWTGGx_t.js";import"./generateUUID-DZpKhNdB.js";import"./index-C-x6zlLc.js";import"./index-CgSHB1U0.js";import{T as d}from"./index-BR2u5piM.js";import"./index-D3aZeTS2.js";import"./index-pmCx02Kh.js";import"./index-j1olA-rT.js";import"./index-Dp7-Jy-a.js";import"./index-ByRza-M8.js";import"./32-BI8cdrFX.js";import{a as c}from"./chunk-WFFRPTHA-B5TewAtn.js";import{a as M}from"./argsTypes-DzXbhqpH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx.m-CH7BE6MN.js";import"./index-BtM5VmRH.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-Y8Vz1tB_.js";import"./preview-errors-Dg5lG0lC.js";import"./index-DrFu-skq.js";const B="_wrapper_1mm44_1",T={wrapper:B},I=r=>u("div",{className:T.wrapper,children:r()}),V={title:"Components/Modal/Stories",component:n,decorators:[I],argTypes:M},t=r=>{const[a,e]=i.useState(!1);return p("div",{children:[u(l,{onClick:()=>e(!0),children:"Открыть модальное окно"}),u(n,{...r,isOpen:a,onClose:()=>{e(!1),c("modalClosed")()},children:u(d,{color:"primary",children:"Содержимое модального окна"})})]})};t.storyName="Модальное окно по умолчанию";const o=r=>{const[a,e]=i.useState(!1);return p("div",{children:[u(l,{onClick:()=>e(!0),children:"Открыть перетаскиваемое модальное окно"}),u(n,{...r,isOpen:a,onClose:()=>{e(!1),c("modalClosed")()},children:u(d,{color:"primary",children:"Это перетаскиваемое модальное окно."})})]})};o.storyName="Перетаскиваемое модальное окно";o.args={isDraggable:!0};const s=r=>{const[a,e]=i.useState(!1);return p("div",{children:[u(l,{onClick:()=>e(!0),children:"Открыть модальное окно изменяемого размера"}),u(n,{...r,isOpen:a,onClose:()=>{e(!1),c("modalClosed")()},children:u(d,{color:"primary",children:"Это модальное окно изменяемого размера."})})]})};s.storyName="Модальное окно изменяемого размера";s.args={isResizable:!0};var m,C,E;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`(argsTypes: IModalProps): ReactNode => {
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
}`,...(E=(C=t.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var y,g,O;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`(argsTypes: IModalProps): ReactNode => {
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
}`,...(O=(g=o.parameters)==null?void 0:g.docs)==null?void 0:O.source}}};var f,h,D;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`(argsTypes: IModalProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);
  return <div>
      <Button onClick={() => setIsOpen(true)}>Открыть модальное окно изменяемого размера</Button>
      <Modal {...argsTypes} isOpen={isOpen} onClose={() => {
      setIsOpen(false);
      action('modalClosed')();
    }}>
        <Typography color="primary">Это модальное окно изменяемого размера.</Typography>
      </Modal>
    </div>;
}`,...(D=(h=s.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};const X=["ModalDefault","DraggableModal","ResizableModal"];export{o as DraggableModal,t as ModalDefault,s as ResizableModal,X as __namedExportsOrder,V as default};
