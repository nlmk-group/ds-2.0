import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{A as o,B as H}from"./TreeList-CL8ODmb6.js";import"./generateUUID-4L6n6RLA.js";import"./index-C8k_JyfR.js";import"./index-DppSdhCO.js";import{B as p}from"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import{T as I}from"./index-qC5wYQgy.js";import{I as N}from"./index-DLbY_Jxu.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-DxaWDDI2.js";import"./index-DokmLR-l.js";import"./index-Bnop-kX6.js";import"./32-bzYAI2s2.js";import{g as S}from"./styles.module-ox-emdf8.js";import{a as D}from"./argsTypes-sJezv12V.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-B5g4YLzC.js";const E=r=>e.jsx(p,{justifyContent:"center",alignItems:"center",className:S.wrapper,children:e.jsx(r,{})}),re={title:"Components/Alert/Stories",component:o,decorators:[E],parameters:{actions:{argTypesRegex:"^(close|onActionClick)$"}},argTypes:{...D}},c=({showChildren:r,showCloseButton:i=!0,showActionButton:a=!1,actionLabel:t,onActionClick:u,close:m,action:y,...d})=>{const k=a?e.jsx(H,{type:"button",variant:"primary",size:"s",onClick:u,children:t||"Действие"}):void 0,L=i?m:void 0;return e.jsx(o,{...d,close:L,action:k,children:r&&e.jsxs("ul",{style:{paddingLeft:"16px",paddingBottom:"4px",margin:"unset"},children:[e.jsx("li",{children:"Первый пункт списка"}),e.jsx("li",{children:"Второй пункт списка"}),e.jsx("li",{children:"Третий пункт списка"})]})})};c.storyName="Alert по умолчанию";c.args={title:"Alert по умолчанию",showChildren:!1,showCloseButton:!0,showActionButton:!1,actionLabel:"Действие"};c.argTypes={showChildren:{description:"Показать дополнительный контент в виде списка",control:{type:"boolean"}},showCloseButton:{description:"Показать кнопку закрытия",control:{type:"boolean"}},showActionButton:{description:"Показать кнопку действия",control:{type:"boolean"}},actionLabel:{description:"Текст кнопки действия",control:{type:"text"}},onActionClick:{description:"Функция для обработки нажатия на кнопку действия",action:"actionClick",control:{type:null}}};const s=({close:r,showCloseButton:i=!0,...a})=>{const t=i?r:void 0;return e.jsxs(p,{display:"flex",flexDirection:"column",gap:16,width:"100%",children:[e.jsx(o,{severity:"success",title:"Успешное действие",close:t,children:"Операция успешно выполнена"}),e.jsx(o,{severity:"error",title:"Ошибка",close:t,children:"Произошла ошибка при выполнении операции"}),e.jsx(o,{severity:"warning",title:"Предупреждение",close:t,children:"Внимание! Это важное предупреждение"}),e.jsx(o,{severity:"info",title:"Информация",close:t,children:"Дополнительная информация о процессе"})]})};s.storyName="Варианты Alert";s.parameters={controls:{exclude:["title","severity","className","action"]}};s.args={showCloseButton:!0};s.argTypes={showCloseButton:{description:"Показать кнопку закрытия",control:{type:"boolean"}},close:{action:"close",control:{type:null}}};const n=({close:r,onActionClick:i,actionLabel:a,showCloseButton:t=!0,showActionButton:u=!0,...m})=>{const y=u?e.jsx(H,{type:"button",variant:"primary",size:"s",onClick:i,children:a||"Действие"}):void 0,d=t?r:void 0;return e.jsxs(p,{display:"flex",flexDirection:"column",gap:16,width:"100%",children:[e.jsx(o,{severity:"success",title:"С кнопкой действия",action:y,close:d,children:"Alert с дополнительным действием"}),e.jsx(o,{severity:"info",title:"Только кнопка закрытия",close:d}),e.jsx(o,{severity:"warning",title:"Без кнопок",children:"Alert без кнопок действий"})]})};n.storyName="Alert с действиями";n.parameters={controls:{exclude:["title","severity","className","action"]}};n.args={showCloseButton:!0,showActionButton:!0,actionLabel:"Действие"};n.argTypes={close:{action:"close",control:{type:null}},onActionClick:{action:"actionClick",control:{type:null}},actionLabel:{description:"Текст кнопки действия",control:{type:"text"}},showCloseButton:{description:"Показать кнопку закрытия",control:{type:"boolean"}},showActionButton:{description:"Показать кнопку действия",control:{type:"boolean"}}};const l=({close:r,showCloseButton:i=!0,...a})=>{const t=i?r:void 0;return e.jsxs(p,{display:"flex",flexDirection:"column",gap:16,width:"100%",children:[e.jsx(o,{severity:"info",title:"Alert со списком",close:t,children:e.jsxs("ul",{style:{margin:0,paddingLeft:"16px",paddingBottom:"4px"},children:[e.jsx("li",{children:"Первый пункт"}),e.jsx("li",{children:"Второй пункт"}),e.jsx("li",{children:"Третий пункт"})]})}),e.jsx(o,{severity:"success",title:"Alert с кастомной разметкой",close:t,children:e.jsxs(p,{display:"flex",alignItems:"center",gap:8,children:[e.jsx(N,{name:"IconSuccessOutlined24"}),e.jsx(I,{variant:"Body2",children:"Кастомный контент"})]})})]})};l.storyName="Alert с кастомным контентом";l.parameters={controls:{exclude:["title","severity","className","action"]}};l.args={showCloseButton:!0};l.argTypes={close:{action:"close",control:{type:null}},showCloseButton:{description:"Показать кнопку закрытия",control:{type:"boolean"}}};var h,x,A;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`({
  showChildren,
  showCloseButton = true,
  showActionButton = false,
  actionLabel,
  onActionClick,
  close,
  action,
  ...argTypes
}: IAlertStoryProps): ReactNode => {
  const actionElement = showActionButton ? <Button type="button" variant="primary" size="s" onClick={onActionClick}>
      {actionLabel || 'Действие'}
    </Button> : undefined;
  const closeHandler = showCloseButton ? close : undefined;
  return <Alert {...argTypes} close={closeHandler} action={actionElement}>
      {showChildren && <ul style={{
      paddingLeft: '16px',
      paddingBottom: '4px',
      margin: 'unset'
    }}>
          <li>Первый пункт списка</li>
          <li>Второй пункт списка</li>
          <li>Третий пункт списка</li>
        </ul>}
    </Alert>;
}`,...(A=(x=c.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var g,B,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`({
  close,
  showCloseButton = true,
  ...argTypes
}: IAlertProps & {
  showCloseButton?: boolean;
}): ReactNode => {
  const closeHandler = showCloseButton ? close : undefined;
  return <Box display="flex" flexDirection="column" gap={16} width="100%">
      <Alert severity="success" title="Успешное действие" close={closeHandler}>
        Операция успешно выполнена
      </Alert>

      <Alert severity="error" title="Ошибка" close={closeHandler}>
        Произошла ошибка при выполнении операции
      </Alert>

      <Alert severity="warning" title="Предупреждение" close={closeHandler}>
        Внимание! Это важное предупреждение
      </Alert>

      <Alert severity="info" title="Информация" close={closeHandler}>
        Дополнительная информация о процессе
      </Alert>
    </Box>;
}`,...(f=(B=s.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var w,C,v;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`({
  close,
  onActionClick,
  actionLabel,
  showCloseButton = true,
  showActionButton = true,
  ...argTypes
}: IAlertProps & {
  onActionClick?: () => void;
  actionLabel?: string;
  showCloseButton?: boolean;
  showActionButton?: boolean;
}): ReactNode => {
  const actionElement = showActionButton ? <Button type="button" variant="primary" size="s" onClick={onActionClick}>
      {actionLabel || 'Действие'}
    </Button> : undefined;
  const closeHandler = showCloseButton ? close : undefined;
  return <Box display="flex" flexDirection="column" gap={16} width="100%">
      <Alert severity="success" title="С кнопкой действия" action={actionElement} close={closeHandler}>
        Alert с дополнительным действием
      </Alert>

      <Alert severity="info" title="Только кнопка закрытия" close={closeHandler} />

      <Alert severity="warning" title="Без кнопок">
        Alert без кнопок действий
      </Alert>
    </Box>;
}`,...(v=(C=n.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var j,b,T;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`({
  close,
  showCloseButton = true,
  ...argTypes
}: IAlertProps & {
  showCloseButton?: boolean;
}): ReactNode => {
  const closeHandler = showCloseButton ? close : undefined;
  return <Box display="flex" flexDirection="column" gap={16} width="100%">
      <Alert severity="info" title="Alert со списком" close={closeHandler}>
        <ul style={{
        margin: 0,
        paddingLeft: '16px',
        paddingBottom: '4px'
      }}>
          <li>Первый пункт</li>
          <li>Второй пункт</li>
          <li>Третий пункт</li>
        </ul>
      </Alert>

      <Alert severity="success" title="Alert с кастомной разметкой" close={closeHandler}>
        <Box display="flex" alignItems="center" gap={8}>
          <Icon name="IconSuccessOutlined24" />
          <Typography variant="Body2">Кастомный контент</Typography>
        </Box>
      </Alert>
    </Box>;
}`,...(T=(b=l.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};const se=["AlertDefault","AlertVariants","AlertWithActions","AlertWithCustomContent"];export{c as AlertDefault,s as AlertVariants,n as AlertWithActions,l as AlertWithCustomContent,se as __namedExportsOrder,re as default};
