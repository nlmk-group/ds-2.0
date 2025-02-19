import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{r as m}from"./index-Bnop-kX6.js";import{aD as r,a0 as y,B as c,ai as f,e as E,I as N}from"./TreeList-xp0hkVtZ.js";import"./generateUUID-B-1dzpB_.js";import"./index-CvUjrmfM.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import{T as l}from"./index-qC5wYQgy.js";import"./index-DubX4Ptm.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-CLtrYh5C.js";import"./index-DokmLR-l.js";import{d as _,c as P,a as S}from"./32-BXnIH58b.js";import{g as q}from"./styles.module-ox-emdf8.js";import{a as A}from"./argsTypes-BqqSk_6W.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./index-B5g4YLzC.js";const J="_wrapper_lebkt_1",W="_color_lebkt_11",X={wrapper:J,color:W},F=o=>e.jsx("div",{className:q.wrapper,children:e.jsx(o,{})}),de={title:"Components/SlideToggle/Stories",component:r,decorators:[F],argTypes:A},u="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus tellus non arcu dignissim, sed venenatis tortor sollicitudin. Phasellus sodales urna ut mi porttitor blandit. Integer id ligula quis ante ultrices rhoncus. Aenean mi augue, venenatis id volutpat a, vehicula vitae massa. Nullam aliquam diam eu dui imperdiet rutrum. Nam porta quam eu dolor malesuada consequat. Cras non lacinia orci, scelerisque tincidunt mi. Praesent velit turpis, euismod a dictum et, viverra et diam. Morbi feugiat erat a bibendum commodo. Nullam facilisis pulvinar justo, et posuere leo dapibus et. Morbi quam mi, rutrum sed egestas eu, rutrum vitae ipsum. Integer dignissim ex in mauris suscipit volutpat. Donec nec ipsum rutrum lectus venenatis pulvinar. Sed molestie id ex a tristique. Sed arcu augue, rhoncus at commodo ut, rutrum in libero",p=o=>{const[t,a]=m.useState(!1);return e.jsx(r,{...o,isShow:t,onToggle:()=>a(!t),children:e.jsx(l,{variant:"Body2-Medium",color:"primary",children:u})})};p.storyName="SlideToggle по умолчанию";p.args={title:"Заголовок"};const d=o=>{const[t,a]=m.useState(!1),[s,n]=m.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{...o,title:o.title,isShow:t,onToggle:()=>a(!t),size:y.default,children:e.jsx(l,{variant:"Body2-Medium",color:"primary",children:u})}),e.jsx(r,{...o,title:o.title,isShow:s,onToggle:()=>n(!s),size:y.compact,children:e.jsx(l,{variant:"Body2-Medium",color:"primary",children:u})})]})};d.storyName="SlideToggle с разными размерами";d.args={title:"Заголовок"};const i=o=>{const[t,a]=m.useState(!1),[s,n]=m.useState(!1),x=h=>{h.stopPropagation()},O=e.jsxs("div",{style:{display:"flex",alignItems:"center",marginLeft:"4px",gap:"4px"},children:[e.jsx(c,{onClick:h=>{x(h),n(!s)},size:"s",style:{padding:"4px"},startIcon:e.jsx(_,{}),color:"ghost",variant:"secondary"}),e.jsx(f,{size:"s",color:o.badgeColor,children:o.badgeChildren})]}),L=e.jsxs("div",{style:{display:"flex",alignItems:"center",marginLeft:"4px",gap:"4px"},children:[e.jsx(c,{onClick:h=>{x(h),a(!t)},color:"ghost",variant:"secondary",size:"m",style:{padding:"4px"},startIcon:e.jsx(P,{})}),e.jsx(f,{size:"l",color:o.badgeColor,children:o.badgeChildren})]});return e.jsxs(e.Fragment,{children:[e.jsx(r,{...o,title:o.title,isShow:t,onToggle:()=>a(!t),size:y.default,after:L,children:e.jsx(l,{variant:"Body2-Medium",color:"primary",children:u})}),e.jsx(r,{...o,title:o.title,isShow:s,onToggle:()=>n(!s),size:y.compact,after:O,children:e.jsx(l,{variant:"Body2-Medium",color:"primary",children:u})})]})};i.storyName="SlideToggle с иконкой-кнопкой";i.args={title:"Заголовок",badgeChildren:"1",badgeColor:E.error};i.argTypes={badgeColor:{description:"Заливка Badge",options:Object.values(E),control:{type:"select"}},badgeChildren:{description:"Содержимое Badge",control:{type:"text"}}};const g=o=>{const[t,a]=m.useState(!1),s=e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginLeft:"16px"},children:[e.jsx(c,{iconButton:e.jsx(S,{})}),e.jsx(l,{variant:"Body2-Medium",children:o.title})]}),n=e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginLeft:"16px"},children:[e.jsx(N,{label:"input в action block"}),e.jsx(c,{iconButton:e.jsx(S,{})}),e.jsx(c,{iconButton:e.jsx(S,{})}),e.jsx(c,{iconButton:e.jsx(S,{})})]});return e.jsx(r,{...o,isShow:t,onToggle:()=>a(!t),title:s,after:n,children:e.jsx(l,{variant:"Body2-Medium",color:"primary",children:u})})};g.storyName="SlideToggle кастомный";g.args={className:X.color,title:"Это кастомный title компонента SlideToggle"};var w,T,B;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`(args: ISlideToggleProps): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  return <SlideToggle {...args} isShow={show} onToggle={() => setShow(!show)}>
      <Typography variant="Body2-Medium" color="primary">
        {loremIpsum}
      </Typography>
    </SlideToggle>;
}`,...(B=(T=p.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var v,C,j;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`(args: ISlideToggleProps): JSX.Element => {
  const [showDefault, setShowDefault] = useState<boolean>(false);
  const [showCompact, setShowCompact] = useState<boolean>(false);
  return <>
      <SlideToggle {...args} title={args.title} isShow={showDefault} onToggle={() => setShowDefault(!showDefault)} size={ESizeMapping.default}>
        <Typography variant="Body2-Medium" color="primary">
          {loremIpsum}
        </Typography>
      </SlideToggle>
      <SlideToggle {...args} title={args.title} isShow={showCompact} onToggle={() => setShowCompact(!showCompact)} size={ESizeMapping.compact}>
        <Typography variant="Body2-Medium" color="primary">
          {loremIpsum}
        </Typography>
      </SlideToggle>
    </>;
}`,...(j=(C=d.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var I,b,z;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`(args: ISlideToggleWithButtonProps): JSX.Element => {
  const [showDefault, setShowDefault] = useState<boolean>(false);
  const [showCompact, setShowCompact] = useState<boolean>(false);
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  const actionBlockCompact = <div style={{
    display: 'flex',
    alignItems: 'center',
    marginLeft: '4px',
    gap: '4px'
  }}>
      <Button onClick={e => {
      handleClick(e);
      setShowCompact(!showCompact);
    }} size="s" style={{
      padding: '4px'
    }} startIcon={<IconStarOutlined16 />} color="ghost" variant="secondary" />
      <Badge size="s" color={args.badgeColor}>
        {args.badgeChildren}
      </Badge>
    </div>;
  const actionBlockDefault = <div style={{
    display: 'flex',
    alignItems: 'center',
    marginLeft: '4px',
    gap: '4px'
  }}>
      <Button onClick={e => {
      handleClick(e);
      setShowDefault(!showDefault);
    }} color="ghost" variant="secondary" size="m" style={{
      padding: '4px'
    }} startIcon={<IconStarOutlined24 />} />
      <Badge size="l" color={args.badgeColor}>
        {args.badgeChildren}
      </Badge>
    </div>;
  return <>
      <SlideToggle {...args} title={args.title} isShow={showDefault} onToggle={() => setShowDefault(!showDefault)} size={ESizeMapping.default} after={actionBlockDefault}>
        <Typography variant="Body2-Medium" color="primary">
          {loremIpsum}
        </Typography>
      </SlideToggle>

      <SlideToggle {...args} title={args.title} isShow={showCompact} onToggle={() => setShowCompact(!showCompact)} size={ESizeMapping.compact} after={actionBlockCompact}>
        <Typography variant="Body2-Medium" color="primary">
          {loremIpsum}
        </Typography>
      </SlideToggle>
    </>;
}`,...(z=(b=i.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var D,M,k;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`(args: ISlideToggleProps): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const title = <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginLeft: '16px'
  }}>
      <Button iconButton={<IconArticleOutlined24 />} />
      <Typography variant="Body2-Medium">{args.title}</Typography>
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
  return <SlideToggle {...args} isShow={show} onToggle={() => setShow(!show)} title={title} after={actionBlock}>
      <Typography variant="Body2-Medium" color="primary">
        {loremIpsum}
      </Typography>
    </SlideToggle>;
}`,...(k=(M=g.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};const ge=["SlideToggleDefault","SlideToggleSizes","SlideToggleWithButton","SlideToggleCustomized"];export{g as SlideToggleCustomized,p as SlideToggleDefault,d as SlideToggleSizes,i as SlideToggleWithButton,ge as __namedExportsOrder,de as default};
