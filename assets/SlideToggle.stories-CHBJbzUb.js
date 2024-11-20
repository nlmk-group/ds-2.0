import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{r as m}from"./index-Bnop-kX6.js";import{at as r,U as y,B as c,aa as x,c as E,I as N}from"./index-N7PQoZjI.js";import"./generateUUID-Dz4mOyMt.js";import"./index-BuHkNwZq.js";import"./index-CiiUx5gY.js";import"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import{T as l}from"./index-qC5wYQgy.js";import"./index-Dxx-yGvP.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-CG5Hm5ah.js";import{p as _,q,a as S}from"./32-QiGXh8Io.js";import{g as P}from"./styles.module-ox-emdf8.js";import{a as A}from"./argsTypes-B3Kya3gQ.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./index-CT8gBKwQ.js";const J="_wrapper_lebkt_1",W="_color_lebkt_11",X={wrapper:J,color:W},F=t=>e.jsx("div",{className:P.wrapper,children:e.jsx(t,{})}),pe={title:"Components/SlideToggle/Stories",component:r,decorators:[F],argTypes:A},u="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus tellus non arcu dignissim, sed venenatis tortor sollicitudin. Phasellus sodales urna ut mi porttitor blandit. Integer id ligula quis ante ultrices rhoncus. Aenean mi augue, venenatis id volutpat a, vehicula vitae massa. Nullam aliquam diam eu dui imperdiet rutrum. Nam porta quam eu dolor malesuada consequat. Cras non lacinia orci, scelerisque tincidunt mi. Praesent velit turpis, euismod a dictum et, viverra et diam. Morbi feugiat erat a bibendum commodo. Nullam facilisis pulvinar justo, et posuere leo dapibus et. Morbi quam mi, rutrum sed egestas eu, rutrum vitae ipsum. Integer dignissim ex in mauris suscipit volutpat. Donec nec ipsum rutrum lectus venenatis pulvinar. Sed molestie id ex a tristique. Sed arcu augue, rhoncus at commodo ut, rutrum in libero",p=t=>{const[o,a]=m.useState(!1);return e.jsx(r,{...t,isShow:o,onToggle:()=>a(!o),children:e.jsx(l,{variant:"Body2-Medium",color:"primary",children:u})})};p.storyName="SlideToggle по умолчанию";p.args={title:"Заголовок"};const d=t=>{const[o,a]=m.useState(!1),[i,n]=m.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{...t,title:t.title,isShow:o,onToggle:()=>a(!o),size:y.default,children:e.jsx(l,{variant:"Body2-Medium",color:"primary",children:u})}),e.jsx(r,{...t,title:t.title,isShow:i,onToggle:()=>n(!i),size:y.compact,children:e.jsx(l,{variant:"Body2-Medium",color:"primary",children:u})})]})};d.storyName="SlideToggle с разными размерами";d.args={title:"Заголовок"};const s=t=>{const[o,a]=m.useState(!1),[i,n]=m.useState(!1),f=h=>{h.stopPropagation()},O=e.jsxs("div",{style:{display:"flex",alignItems:"center",marginLeft:"4px",gap:"4px"},children:[e.jsx(c,{onClick:h=>{f(h),n(!i)},variant:"primary",size:"s",style:{padding:"4px"},startIcon:e.jsx(_,{}),fill:"clear"}),e.jsx(x,{size:"s",color:t.badgeColor,children:t.badgeChildren})]}),L=e.jsxs("div",{style:{display:"flex",alignItems:"center",marginLeft:"4px",gap:"4px"},children:[e.jsx(c,{onClick:h=>{f(h),a(!o)},variant:"primary",size:"m",style:{padding:"4px"},startIcon:e.jsx(q,{}),fill:"clear"}),e.jsx(x,{size:"l",color:t.badgeColor,children:t.badgeChildren})]});return e.jsxs(e.Fragment,{children:[e.jsx(r,{...t,title:t.title,isShow:o,onToggle:()=>a(!o),size:y.default,after:L,children:e.jsx(l,{variant:"Body2-Medium",color:"primary",children:u})}),e.jsx(r,{...t,title:t.title,isShow:i,onToggle:()=>n(!i),size:y.compact,after:O,children:e.jsx(l,{variant:"Body2-Medium",color:"primary",children:u})})]})};s.storyName="SlideToggle с иконкой-кнопкой";s.args={title:"Заголовок",badgeChildren:"1",badgeColor:E.error};s.argTypes={badgeColor:{description:"Заливка Badge",options:Object.values(E),control:{type:"select"}},badgeChildren:{description:"Содержимое Badge",control:{type:"text"}}};const g=t=>{const[o,a]=m.useState(!1),i=e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginLeft:"16px"},children:[e.jsx(c,{iconButton:e.jsx(S,{})}),e.jsx(l,{variant:"Body2-Medium",children:t.title})]}),n=e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginLeft:"16px"},children:[e.jsx(N,{label:"input в action block"}),e.jsx(c,{iconButton:e.jsx(S,{})}),e.jsx(c,{iconButton:e.jsx(S,{})}),e.jsx(c,{iconButton:e.jsx(S,{})})]});return e.jsx(r,{...t,isShow:o,onToggle:()=>a(!o),title:i,after:n,children:e.jsx(l,{variant:"Body2-Medium",color:"primary",children:u})})};g.storyName="SlideToggle кастомный";g.args={className:X.color,title:"Это кастомный title компонента SlideToggle"};var w,T,B;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`(args: ISlideToggleProps): JSX.Element => {
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
}`,...(j=(C=d.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var I,b,z;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`(args: ISlideToggleWithButtonProps): JSX.Element => {
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
    }} variant="primary" size="s" style={{
      padding: '4px'
    }} startIcon={<IconStarOutlined16 />} fill="clear" />
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
    }} variant="primary" size="m" style={{
      padding: '4px'
    }} startIcon={<IconStarOutlined24 />} fill="clear" />
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
}`,...(z=(b=s.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var D,M,k;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`(args: ISlideToggleProps): JSX.Element => {
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
}`,...(k=(M=g.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};const de=["SlideToggleDefault","SlideToggleSizes","SlideToggleWithButton","SlideToggleCustomized"];export{g as SlideToggleCustomized,p as SlideToggleDefault,d as SlideToggleSizes,s as SlideToggleWithButton,de as __namedExportsOrder,pe as default};
