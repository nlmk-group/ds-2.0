import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as i}from"./index-BcJSXhQi.js";import{aM as n,Z as f,B as p,ag as w,ay as A,c as O}from"./TreeList-Dfumwbts.js";import"./generateUUID-BavcPfJ4.js";import"./index-Inj23kr-.js";import"./index-2_my9O6o.js";import"./index-BTu6RRiT.js";import"./index-CkFns3eu.js";import{T as c}from"./index-DmffzHLE.js";import"./index-Btxx-I9m.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-DqPMIbXX.js";import"./index-C5rKoyII.js";import{D as _,c as J,E as W,d as X,a as y}from"./32-DGpMxF8b.js";import{g as R}from"./styles.module-m0Zsy3Hi.js";import{a as Z}from"./argsTypes-7qpQtttJ.js";import"./index-ChsGqxH_.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";const G="_color_zyzxp_11",H={color:G},K=t=>e.jsx("div",{className:R.wrapper,children:e.jsx(t,{})}),xe={title:"Components/SlideToggle/Stories",component:n,decorators:[K],argTypes:Z},m="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus tellus non arcu dignissim, sed venenatis tortor sollicitudin. Phasellus sodales urna ut mi porttitor blandit. Integer id ligula quis ante ultrices rhoncus. Aenean mi augue, venenatis id volutpat a, vehicula vitae massa. Nullam aliquam diam eu dui imperdiet rutrum. Nam porta quam eu dolor malesuada consequat. Cras non lacinia orci, scelerisque tincidunt mi. Praesent velit turpis, euismod a dictum et, viverra et diam. Morbi feugiat erat a bibendum commodo. Nullam facilisis pulvinar justo, et posuere leo dapibus et. Morbi quam mi, rutrum sed egestas eu, rutrum vitae ipsum. Integer dignissim ex in mauris suscipit volutpat. Donec nec ipsum rutrum lectus venenatis pulvinar. Sed molestie id ex a tristique. Sed arcu augue, rhoncus at commodo ut, rutrum in libero",d=t=>{const[o,l]=i.useState(!1);return e.jsx(n,{...t,isShow:o,onToggle:()=>l(!o),children:e.jsx(c,{variant:"Body2-Medium",color:"primary",children:m})})};d.storyName="SlideToggle по умолчанию";d.args={title:"Заголовок"};const g=t=>{const[o,l]=i.useState(!1),[a,S]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{...t,title:t.title,isShow:o,onToggle:()=>l(!o),size:f.default,children:e.jsx(c,{variant:"Body2-Medium",color:"primary",children:m})}),e.jsx(n,{...t,title:t.title,isShow:a,onToggle:()=>S(!a),size:f.compact,children:e.jsx(c,{variant:"Body2-Medium",color:"primary",children:m})})]})};g.storyName="SlideToggle с разными размерами";g.args={title:"Заголовок"};const r=t=>{const[o,l]=i.useState(!1),[a,S]=i.useState(!1),[h,x]=i.useState(!1),[C,L]=i.useState(!1),T=s=>{console.log("click",s)},N=e.jsxs("div",{style:{display:"flex",alignItems:"center",marginLeft:"4px",gap:"4px"},children:[e.jsx(p,{type:"button",onClick:s=>{s.stopPropagation(),T(s),x(!h)},size:"s",style:{padding:"4px"},startIcon:h?e.jsx(_,{}):e.jsx(J,{}),color:"ghost",variant:"secondary"}),e.jsx(w,{size:"s",color:t.badgeColor,children:t.badgeChildren})]}),q=e.jsxs("div",{style:{display:"flex",alignItems:"center",marginLeft:"4px",gap:"4px"},children:[e.jsx(p,{type:"button",onClick:s=>{s.stopPropagation(),T(s),L(!C)},color:"ghost",variant:"secondary",size:"m",style:{padding:"4px"},startIcon:C?e.jsx(W,{}):e.jsx(X,{})}),e.jsx(w,{size:"l",color:t.badgeColor,children:t.badgeChildren})]});return e.jsxs(e.Fragment,{children:[e.jsx(n,{...t,title:t.title,isShow:o,onToggle:()=>l(!o),size:f.default,after:q,children:e.jsx(c,{variant:"Body2-Medium",color:"primary",children:m})}),e.jsx(n,{...t,title:t.title,isShow:a,onToggle:()=>S(!a),size:f.compact,after:N,children:e.jsx(c,{variant:"Body2-Medium",color:"primary",children:m})})]})};r.storyName="SlideToggle с иконкой-кнопкой";r.args={title:"Заголовок",badgeChildren:"1",badgeColor:O.error};r.argTypes={badgeColor:{description:"Заливка Badge",options:Object.values(O),control:{type:"select"}},badgeChildren:{description:"Содержимое Badge",control:{type:"text"}}};const u=t=>{const[o,l]=i.useState(!1),a=x=>{x.stopPropagation(),console.log("click")},S=e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginLeft:"16px"},children:[e.jsx(p,{type:"button",onClick:a,iconButton:e.jsx(y,{})}),e.jsx(c,{variant:"Body2-Medium",children:t.title})]}),h=e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginLeft:"16px"},children:[e.jsx(A,{label:"input в action block"}),e.jsx(p,{type:"button",onClick:a,iconButton:e.jsx(y,{})}),e.jsx(p,{type:"button",onClick:a,iconButton:e.jsx(y,{})}),e.jsx(p,{type:"button",onClick:a,iconButton:e.jsx(y,{})})]});return e.jsx(n,{...t,isShow:o,onToggle:()=>l(!o),title:S,after:h,children:e.jsx(c,{variant:"Body2-Medium",color:"primary",children:m})})};u.storyName="SlideToggle кастомный";u.args={className:H.color,title:"Это кастомный title компонента SlideToggle"};var B,v,I;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`(args: ISlideToggleProps): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  return <SlideToggle {...args} isShow={show} onToggle={() => setShow(!show)}>
      <Typography variant="Body2-Medium" color="primary">
        {loremIpsum}
      </Typography>
    </SlideToggle>;
}`,...(I=(v=d.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var b,j,k;g.parameters={...g.parameters,docs:{...(b=g.parameters)==null?void 0:b.docs,source:{originalSource:`(args: ISlideToggleProps): JSX.Element => {
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
}`,...(k=(j=g.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var D,z,M;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`(args: ISlideToggleWithButtonProps): JSX.Element => {
  const [showDefault, setShowDefault] = useState<boolean>(false);
  const [showCompact, setShowCompact] = useState<boolean>(false);
  const [isCompactStarFilled, setIsCompactStarFilled] = useState(false);
  const [isDefaultStarFilled, setIsDefaultStarFilled] = useState(false);
  const handleClick = (e: React.MouseEvent) => {
    console.log('click', e);
  };
  const actionBlockCompact = <div style={{
    display: 'flex',
    alignItems: 'center',
    marginLeft: '4px',
    gap: '4px'
  }}>
      <Button type="button" onClick={e => {
      e.stopPropagation();
      handleClick(e);
      setIsCompactStarFilled(!isCompactStarFilled);
    }} size="s" style={{
      padding: '4px'
    }} startIcon={isCompactStarFilled ? <IconStarFilled16 /> : <IconStarOutlined16 />} color="ghost" variant="secondary" />
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
      <Button type="button" onClick={e => {
      e.stopPropagation();
      handleClick(e);
      setIsDefaultStarFilled(!isDefaultStarFilled);
    }} color="ghost" variant="secondary" size="m" style={{
      padding: '4px'
    }} startIcon={isDefaultStarFilled ? <IconStarFilled24 /> : <IconStarOutlined24 />} />
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
}`,...(M=(z=r.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var F,E,P;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`(args: ISlideToggleProps): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('click');
  };
  const title = <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginLeft: '16px'
  }}>
      <Button type="button" onClick={handleClick} iconButton={<IconArticleOutlined24 />} />
      <Typography variant="Body2-Medium">{args.title}</Typography>
    </div>;
  const actionBlock = <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginLeft: '16px'
  }}>
      <Input label="input в action block" />
      <Button type="button" onClick={handleClick} iconButton={<IconArticleOutlined24 />} />
      <Button type="button" onClick={handleClick} iconButton={<IconArticleOutlined24 />} />
      <Button type="button" onClick={handleClick} iconButton={<IconArticleOutlined24 />} />
    </div>;
  return <SlideToggle {...args} isShow={show} onToggle={() => setShow(!show)} title={title} after={actionBlock}>
      <Typography variant="Body2-Medium" color="primary">
        {loremIpsum}
      </Typography>
    </SlideToggle>;
}`,...(P=(E=u.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};const Ce=["SlideToggleDefault","SlideToggleSizes","SlideToggleWithButton","SlideToggleCustomized"];export{u as SlideToggleCustomized,d as SlideToggleDefault,g as SlideToggleSizes,r as SlideToggleWithButton,Ce as __namedExportsOrder,xe as default};
