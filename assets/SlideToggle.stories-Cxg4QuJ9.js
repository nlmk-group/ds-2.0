import{j as e}from"./jsx-runtime-DFnSfiB4.js";import{r as c}from"./index-DQ2WTIsS.js";import{aj as a,y as h,B as u,I as D}from"./index-De6xVjfl.js";import"./generateUUID-i9L7EtYg.js";import"./index-bLIWCpda.js";import"./index-BgyuaCKK.js";import"./index-B8KuQLf-.js";import"./index-B_c816qF.js";import{T as l}from"./index-DJXOh8UI.js";import"./index-DB41iIPt.js";import"./index-wNTT8eSr.js";import"./index-S3KjbRnp.js";import"./index-CpIRsoAz.js";import{a as d}from"./32-C4VDZHit.js";import{s as E}from"./styles.module-C4SoDQaA.js";import{a as N}from"./argsTypes-DJ0TDsmg.js";import"./clsx-B-dksMZM.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./index-0sbKER3h.js";const _="_wrapper_1b2ir_1",q="_color_1b2ir_11",A={wrapper:_,color:q},O=t=>e.jsx("div",{className:E.wrapper,children:t()}),re={title:"Components/SlideToggle/Stories",component:a,decorators:[O],argTypes:N},g="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus tellus non arcu dignissim, sed venenatis tortor sollicitudin. Phasellus sodales urna ut mi porttitor blandit. Integer id ligula quis ante ultrices rhoncus. Aenean mi augue, venenatis id volutpat a, vehicula vitae massa. Nullam aliquam diam eu dui imperdiet rutrum. Nam porta quam eu dolor malesuada consequat. Cras non lacinia orci, scelerisque tincidunt mi. Praesent velit turpis, euismod a dictum et, viverra et diam. Morbi feugiat erat a bibendum commodo. Nullam facilisis pulvinar justo, et posuere leo dapibus et. Morbi quam mi, rutrum sed egestas eu, rutrum vitae ipsum. Integer dignissim ex in mauris suscipit volutpat. Donec nec ipsum rutrum lectus venenatis pulvinar. Sed molestie id ex a tristique. Sed arcu augue, rhoncus at commodo ut, rutrum in libero",n=t=>{const[o,s]=c.useState(!1);return e.jsx(a,{...t,title:"Заголовок",isShow:o,onToggle:()=>s(!o),children:e.jsx(l,{color:"primary",children:g})})};n.storyName="SlideToggle по умолчанию";const p=t=>{const[o,s]=c.useState(!1),[m,S]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{...t,title:"Заголовок",isShow:o,onToggle:()=>s(!o),size:h.default,children:e.jsx(l,{color:"primary",children:g})}),e.jsx(a,{...t,title:"Заголовок",isShow:m,onToggle:()=>S(!m),size:h.compact,children:e.jsx(l,{color:"primary",children:g})})]})};p.storyName="SlideToggle с разными размерами";const r=t=>{const[o,s]=c.useState(!1);return e.jsx(a,{...t,title:"Заголовок",isShow:o,onToggle:()=>s(!o),children:e.jsx(l,{color:"primary",children:g})})};r.storyName="SlideToggle с тенью";r.args={toggleContainerShadow:!0};const i=t=>{const[o,s]=c.useState(!1),m=e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginLeft:"16px"},children:[e.jsx(u,{iconButton:e.jsx(d,{})}),e.jsx(l,{children:"Это кастомный title компонента SlideToggle"})]}),S=e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginLeft:"16px"},children:[e.jsx(D,{label:"input в action block"}),e.jsx(u,{iconButton:e.jsx(d,{})}),e.jsx(u,{iconButton:e.jsx(d,{})}),e.jsx(u,{iconButton:e.jsx(d,{})})]});return e.jsx(a,{...t,isShow:o,onToggle:()=>s(!o),title:m,after:S,children:e.jsx(l,{color:"primary",children:g})})};i.storyName="SlideToggle кастомный";i.args={className:A.color,toggleContainerShadow:!0};var T,y,w;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`(argTypes: ISlideToggleProps): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  return <SlideToggle {...argTypes} title={'Заголовок'} isShow={show} onToggle={() => setShow(!show)}>
      <Typography color="primary">{loremIpsum}</Typography>
    </SlideToggle>;
}`,...(w=(y=n.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var x,f,j;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`(argTypes: ISlideToggleProps): JSX.Element => {
  const [showDefault, setShowDefault] = useState<boolean>(false);
  const [showCompact, setShowCompact] = useState<boolean>(false);
  return <>
      <SlideToggle {...argTypes} title={'Заголовок'} isShow={showDefault} onToggle={() => setShowDefault(!showDefault)} size={ESizeMapping.default}>
        <Typography color="primary">{loremIpsum}</Typography>
      </SlideToggle>
      <SlideToggle {...argTypes} title={'Заголовок'} isShow={showCompact} onToggle={() => setShowCompact(!showCompact)} size={ESizeMapping.compact}>
        <Typography color="primary">{loremIpsum}</Typography>
      </SlideToggle>
    </>;
}`,...(j=(f=p.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var I,v,b;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`(argTypes: ISlideToggleProps): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  return <SlideToggle {...argTypes} title={'Заголовок'} isShow={show} onToggle={() => setShow(!show)}>
      <Typography color="primary">{loremIpsum}</Typography>
    </SlideToggle>;
}`,...(b=(v=r.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var B,C,z;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`(argTypes: ISlideToggleProps): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const title = <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginLeft: '16px'
  }}>
      <Button iconButton={<IconArticleOutlined24 />} />
      <Typography>Это кастомный title компонента SlideToggle</Typography>
    </div>;
  const actionBlock = <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginLeft: '16px'
  }}>
      <Input label="input в action block" />
      <Button iconButton={<IconArticleOutlined24 />} />
      <Button iconButton={<IconArticleOutlined24 />} />
      <Button iconButton={<IconArticleOutlined24 />} />
    </div>;
  return <SlideToggle {...argTypes} isShow={show} onToggle={() => setShow(!show)} title={title} after={actionBlock}>
      <Typography color="primary">{loremIpsum}</Typography>
    </SlideToggle>;
}`,...(z=(C=i.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};const ie=["SlideToggleDefault","SlideToggleSizes","SlideToggleShadow","SlideToggleCustomized"];export{i as SlideToggleCustomized,n as SlideToggleDefault,r as SlideToggleShadow,p as SlideToggleSizes,ie as __namedExportsOrder,re as default};
