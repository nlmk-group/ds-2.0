import{j as e,r as u}from"./iframe-CVAHojaF.js";import{A as s,s as O}from"./index-BU6bgXU9.js";import{F as l}from"./index-Ct8OSbvg.js";import{c as x}from"./clsx-B-dksMZM.js";import{g as c}from"./styles.module-BGEDXogi.js";import{a as b}from"./argsTypes-DxsSZR-t.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DZ_c8xXN.js";import"./index-BHrg75jh.js";import"./index-x8Y8AkZd.js";import"./index-RGmS5SUD.js";import"./16-DOUHJXJi.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-DbZB43lA.js";import"./24-DKX7LJ7g.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,j=t=>e.jsx("div",{style:{minHeight:80},children:e.jsx(t,{})}),M={title:"Components/AttachFiles/Stories",component:s,decorators:[j],parameters:{actions:{argTypesRegex:"^on.*"}},argTypes:b},v=[e.jsx(l,{label:"Название файла.pdf"}),e.jsx(l,{label:"Название файла.pdf",checked:!0}),e.jsx(l,{label:"Название файла.pdf",tick:!0}),e.jsx(l,{label:"Название файла.pdf",empty:!0})],i=t=>e.jsx("div",{className:c.wrapper,children:e.jsx(l,{...t})});i.storyName="File по умолчанию";i.args={label:"Название файла.pdf"};const n=t=>e.jsx("div",{className:c.wrapper,children:e.jsx(l,{...t})});n.storyName="File с описанием";n.args={description:"File с описанием",label:"Название файла.pdf"};const o=()=>e.jsx("div",{className:x(c.wrapper,O["vertical-wrapper"]),children:v.map((t,a)=>e.jsx(u.Fragment,{children:t},a))});o.storyName="File вариации левой иконки";const d=t=>e.jsxs("div",{className:x(c.wrapper,O["vertical-wrapper"]),children:[e.jsx(l,{label:"Название файла.pdf",removed:!0,removedOnClick:t.removedOnClick}),e.jsx(l,{label:"Название файла.pdf",commented:!0,commentedOnClick:t.commentedOnClick}),e.jsx(l,{label:"Название файла.pdf",saved:!0,savedOnClick:t.savedOnClick}),e.jsx(l,{label:"Название файла.pdf",commented:!0,commentedOnClick:t.commentedOnClick,removed:!0,removedOnClick:t.removedOnClick}),e.jsx(l,{label:"Название файла.pdf",commented:!0,commentedOnClick:t.commentedOnClick,saved:!0,savedOnClick:t.savedOnClick}),e.jsx(l,{label:"Название файла.pdf",removed:!0,removedOnClick:t.removedOnClick,saved:!0,savedOnClick:t.savedOnClick}),e.jsx(l,{label:"Название файла.pdf",commented:!0,commentedOnClick:t.commentedOnClick,removed:!0,removedOnClick:t.removedOnClick,saved:!0,savedOnClick:t.savedOnClick}),e.jsx(l,{label:"Название файла.pdf",addFile:!0,addFileOnClick:t.addFileOnClick})]});d.storyName="File с контролами";d.args={removedOnClick:m("removedOnClick"),commentedOnClick:m("commentedOnClick"),savedOnClick:m("savedOnClick"),addFileOnClick:m("addFileOnClick")};const p=()=>e.jsx("div",{className:c.wrapper,children:e.jsx(s,{children:Array(4).fill(0).map(t=>e.jsx(l,{label:"Название файла.pdf",removed:!0},t))})});p.storyName="AttachFiles без заголовка";const h=()=>e.jsxs("div",{className:c.wrapper,style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(s,{title:e.jsx(l,{label:"Название файла.pdf",checked:!0}),children:v.map((t,a)=>e.jsx(u.Fragment,{children:t},a))}),e.jsx(s,{title:e.jsx(l,{label:"Название файла.pdf",empty:!0}),children:v.map((t,a)=>e.jsx(u.Fragment,{children:t},a))})]});h.storyName="AttachFiles с заголовком";const k=()=>e.jsx("div",{className:c.wrapper,children:e.jsx(s,{children:v.map((t,a)=>e.jsx(u.Fragment,{children:t},a))})});k.storyName="AttachFiles со списком";const F=()=>e.jsx("div",{className:c.wrapper,children:e.jsx(s,{title:e.jsx(l,{label:"Название файла.pdf",checked:!0,addFile:!0,addFileOnClick:m("addFileOnClick")}),children:v.map(t=>t)})});F.storyName="AttachFiles с кнопкой добавления файла";const C=()=>{const[t,a]=u.useState([!0,!1]),g=r=>{a([r.target.checked,r.target.checked])},f=r=>{a([r.target.checked,t[1]])},y=r=>{a([t[0],r.target.checked])};return e.jsx("div",{className:c.wrapper,children:e.jsxs(s,{title:e.jsx(l,{label:"Название файла.pdf",checked:!0,checkedValue:t.some(r=>r),indeterminate:t.some(r=>!r),onCheckedChange:g,addFile:!0,addFileOnClick:()=>console.log("Добавить файл!")}),children:[e.jsx(l,{label:"Название файла.pdf",checked:!0,checkedValue:t[0],onCheckedChange:f,removed:!0}),e.jsx(l,{label:"Название файла.pdf",checked:!0,checkedValue:t[1],onCheckedChange:y,removed:!0})]})})};C.storyName="AttachFiles с чекбоксами";i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(argTypes: IFileProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <File {...argTypes} />
    </div>;
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(argTypes: IFileProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <File {...argTypes} />
    </div>;
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={clsx(styles.wrapper, style['vertical-wrapper'])}>
      {FileCollection.map((FileItem: JSX.Element, index: number) => <Fragment key={index}>{FileItem}</Fragment>)}
    </div>;
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(argTypes: IFileProps): JSX.Element => {
  return <div className={clsx(styles.wrapper, style['vertical-wrapper'])}>
      <File label="Название файла.pdf" removed removedOnClick={argTypes.removedOnClick} />
      <File label="Название файла.pdf" commented commentedOnClick={argTypes.commentedOnClick} />
      <File label="Название файла.pdf" saved savedOnClick={argTypes.savedOnClick} />
      <File label="Название файла.pdf" commented commentedOnClick={argTypes.commentedOnClick} removed removedOnClick={argTypes.removedOnClick} />
      <File label="Название файла.pdf" commented commentedOnClick={argTypes.commentedOnClick} saved savedOnClick={argTypes.savedOnClick} />
      <File label="Название файла.pdf" removed removedOnClick={argTypes.removedOnClick} saved savedOnClick={argTypes.savedOnClick} />
      <File label="Название файла.pdf" commented commentedOnClick={argTypes.commentedOnClick} removed removedOnClick={argTypes.removedOnClick} saved savedOnClick={argTypes.savedOnClick} />
      <File label="Название файла.pdf" addFile addFileOnClick={argTypes.addFileOnClick} />
    </div>;
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper}>
      <AttachFiles>
        {Array(4).fill(0).map((index: number) => <File label="Название файла.pdf" removed key={index} />)}
      </AttachFiles>
    </div>;
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper} style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <AttachFiles title={<File label="Название файла.pdf" checked />}>
        {FileCollection.map((FileItem: JSX.Element, index: number) => <Fragment key={index}>{FileItem}</Fragment>)}
      </AttachFiles>
      <AttachFiles title={<File label="Название файла.pdf" empty />}>
        {FileCollection.map((FileItem: JSX.Element, index: number) => <Fragment key={index}>{FileItem}</Fragment>)}
      </AttachFiles>
    </div>;
}`,...h.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper}>
      <AttachFiles>
        {FileCollection.map((FileItem: JSX.Element, index: number) => <Fragment key={index}>{FileItem}</Fragment>)}
      </AttachFiles>
    </div>;
}`,...k.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper}>
      <AttachFiles title={<File label="Название файла.pdf" checked addFile addFileOnClick={action('addFileOnClick')} />}>
        {FileCollection.map((FileItem: JSX.Element) => FileItem)}
      </AttachFiles>
    </div>;
}`,...F.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`(): JSX.Element => {
  const [checked, setChecked] = useState([true, false]);
  const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };
  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };
  const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };
  return <div className={styles.wrapper}>
      <AttachFiles title={<File label="Название файла.pdf" checked checkedValue={checked.some(ch => ch)} indeterminate={checked.some(ch => !ch)} onCheckedChange={handleChange1} addFile addFileOnClick={() => console.log('Добавить файл!')} />}>
        <File label="Название файла.pdf" checked checkedValue={checked[0]} onCheckedChange={handleChange2} removed />
        <File label="Название файла.pdf" checked checkedValue={checked[1]} onCheckedChange={handleChange3} removed />
      </AttachFiles>
    </div>;
}`,...C.parameters?.docs?.source}}};const P=["AttachFilesDefault","AttachFilesDescription","AttachFilesLeftIcon","AttachFilesControl","AttachFilesWithoutTitle","AttachFilesWithTitle","AttachFilesList","AttachFilesAddFileButton","AttachFilesWithCheckboxes"];export{F as AttachFilesAddFileButton,d as AttachFilesControl,i as AttachFilesDefault,n as AttachFilesDescription,o as AttachFilesLeftIcon,k as AttachFilesList,C as AttachFilesWithCheckboxes,h as AttachFilesWithTitle,p as AttachFilesWithoutTitle,P as __namedExportsOrder,M as default};
