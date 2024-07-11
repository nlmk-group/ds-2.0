import{j as e,a as S,F as z}from"./jsx-runtime-2xDJh5tt.js";import{r as p}from"./index-CBqU2yxZ.js";import{ah as a,w as T,B as g,I as N}from"./index-DUR5naaP.js";import"./generateUUID-BitdulAq.js";import"./index-D_z3tN8U.js";import"./index-CTkD9j2t.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import{T as l}from"./index-nWYpQihe.js";import"./index-CZmYKfHv.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-BDxIiU-V.js";import{q as m}from"./32-D4qDQhsJ.js";import{s as _}from"./styles.module-DeLvTIFi.js";import{a as q}from"./argsTypes-D8eVDCl5.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx.m-CH7BE6MN.js";import"./index-BtM5VmRH.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-CMH8wQUv.js";const k="_wrapper_1ut8b_1",O="_color_1ut8b_11",P={wrapper:k,color:O},L=t=>e("div",{className:_.wrapper,children:t()}),ae={title:"Components/SlideToggle/Stories",component:a,decorators:[L],argTypes:q},c="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus tellus non arcu dignissim, sed venenatis tortor sollicitudin. Phasellus sodales urna ut mi porttitor blandit. Integer id ligula quis ante ultrices rhoncus. Aenean mi augue, venenatis id volutpat a, vehicula vitae massa. Nullam aliquam diam eu dui imperdiet rutrum. Nam porta quam eu dolor malesuada consequat. Cras non lacinia orci, scelerisque tincidunt mi. Praesent velit turpis, euismod a dictum et, viverra et diam. Morbi feugiat erat a bibendum commodo. Nullam facilisis pulvinar justo, et posuere leo dapibus et. Morbi quam mi, rutrum sed egestas eu, rutrum vitae ipsum. Integer dignissim ex in mauris suscipit volutpat. Donec nec ipsum rutrum lectus venenatis pulvinar. Sed molestie id ex a tristique. Sed arcu augue, rhoncus at commodo ut, rutrum in libero",n=t=>{const[o,r]=p.useState(!1);return e(a,{...t,title:"Заголовок",isShow:o,onToggle:()=>r(!o),children:e(l,{color:"primary",children:c})})};n.storyName="SlideToggle по умолчанию";const u=t=>{const[o,r]=p.useState(!1),[d,h]=p.useState(!1);return S(z,{children:[e(a,{...t,title:"Заголовок",isShow:o,onToggle:()=>r(!o),size:T.default,children:e(l,{color:"primary",children:c})}),e(a,{...t,title:"Заголовок",isShow:d,onToggle:()=>h(!d),size:T.compact,children:e(l,{color:"primary",children:c})})]})};u.storyName="SlideToggle с разными размерами";const s=t=>{const[o,r]=p.useState(!1);return e(a,{...t,title:"Заголовок",isShow:o,onToggle:()=>r(!o),children:e(l,{color:"primary",children:c})})};s.storyName="SlideToggle с тенью";s.args={toggleContainerShadow:!0};const i=t=>{const[o,r]=p.useState(!1);return e(a,{...t,isShow:o,onToggle:()=>r(!o),title:S("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginLeft:"16px"},children:[e(g,{iconButton:e(m,{})}),e(l,{children:"Это кастомный title компонента SlideToggle"})]}),after:S("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginLeft:"16px"},children:[e(N,{label:"input в action block"}),e(g,{iconButton:e(m,{})}),e(g,{iconButton:e(m,{})}),e(g,{iconButton:e(m,{})})]}),children:e(l,{color:"primary",children:c})})};i.storyName="SlideToggle кастомный";i.args={className:P.color,toggleContainerShadow:!0};var y,w,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`(argTypes: ISlideToggleProps): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  return <SlideToggle {...argTypes} title={'Заголовок'} isShow={show} onToggle={() => setShow(!show)}>
      <Typography color="primary">{loremIpsum}</Typography>
    </SlideToggle>;
}`,...(f=(w=n.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var E,I,B;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`(argTypes: ISlideToggleProps): JSX.Element => {
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
}`,...(B=(I=u.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var v,x,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`(argTypes: ISlideToggleProps): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  return <SlideToggle {...argTypes} title={'Заголовок'} isShow={show} onToggle={() => setShow(!show)}>
      <Typography color="primary">{loremIpsum}</Typography>
    </SlideToggle>;
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var C,D,A;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`(argTypes: ISlideToggleProps): JSX.Element => {
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
      <Input label='input в action block' />
      <Button iconButton={<IconArticleOutlined24 />} />
      <Button iconButton={<IconArticleOutlined24 />} />
      <Button iconButton={<IconArticleOutlined24 />} />
    </div>;
  return <SlideToggle {...argTypes} isShow={show} onToggle={() => setShow(!show)} title={title} after={actionBlock}>
      <Typography color="primary">{loremIpsum}</Typography>
    </SlideToggle>;
}`,...(A=(D=i.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};const le=["SlideToggleDefault","SlideToggleSizes","SlideToggleShadow","SlideToggleCustomized"];export{i as SlideToggleCustomized,n as SlideToggleDefault,s as SlideToggleShadow,u as SlideToggleSizes,le as __namedExportsOrder,ae as default};
