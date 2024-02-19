import{j as u,a as p}from"./clsx.m-3764cf42.js";import{r as l}from"./index-f1f749bf.js";import{Z as n,f as i}from"./index-f014e98c.js";import"./index-ec455f54.js";import"./index-095d5581.js";import"./index-e99519f1.js";import"./index-147655d7.js";import{T as d}from"./index-fb030d50.js";import"./index-c9e69acb.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-bc089e17.js";import{a as c}from"./chunk-WFFRPTHA-a68c42c5.js";import{a as M}from"./argsTypes-b285a84e.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./get-78cac09e.js";import"./index-c1da5c13.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const B="_wrapper_1b61r_1",T={wrapper:B},I=r=>u("div",{className:T.wrapper,children:r()}),L={title:"Components/Modal/Stories",component:n,decorators:[I],argTypes:M},t=r=>{const[a,e]=l.useState(!1);return p("div",{children:[u(i,{onClick:()=>e(!0),children:"Открыть модальное окно"}),u(n,{...r,isOpen:a,onClose:()=>{e(!1),c("modalClosed")()},children:u(d,{color:"primary",children:"Содержимое модального окна"})})]})};t.storyName="Модальное окно по умолчанию";const o=r=>{const[a,e]=l.useState(!1);return p("div",{children:[u(i,{onClick:()=>e(!0),children:"Открыть перетаскиваемое модальное окно"}),u(n,{...r,isOpen:a,onClose:()=>{e(!1),c("modalClosed")()},children:u(d,{color:"primary",children:"Это перетаскиваемое модальное окно."})})]})};o.storyName="Перетаскиваемое модальное окно";o.args={isDraggable:!0};const s=r=>{const[a,e]=l.useState(!1);return p("div",{children:[u(i,{onClick:()=>e(!0),children:"Открыть модальное окно изменяемого размера"}),u(n,{...r,isOpen:a,onClose:()=>{e(!1),c("modalClosed")()},children:u(d,{color:"primary",children:"Это модальное окно изменяемого размера."})})]})};s.storyName="Модальное окно изменяемого размера";s.args={isResizable:!0};var m,C,E;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`(argsTypes: IModalProps): ReactNode => {
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
}`,...(D=(h=s.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};const Q=["ModalDefault","DraggableModal","ResizableModal"];export{o as DraggableModal,t as ModalDefault,s as ResizableModal,Q as __namedExportsOrder,L as default};
