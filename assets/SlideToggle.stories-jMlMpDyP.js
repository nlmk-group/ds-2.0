import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{r as l}from"./index-Bnop-kX6.js";import{aJ as n,$ as f,B as d,ah as w,e as O,I as q}from"./TreeList-DCE8PUnW.js";import"./generateUUID-CKWu6hxV.js";import"./index-GIq1hJAH.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import{T as c}from"./index-qC5wYQgy.js";import"./index-BDwZaM9Z.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-8bMf8-rB.js";import"./index-DokmLR-l.js";import{C as A,d as J,D as W,c as X,a as y}from"./32-DOo0Pdng.js";import{g as R}from"./styles.module-ox-emdf8.js";import{a as $}from"./argsTypes-DgEfiXSb.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-B5g4YLzC.js";const G="_wrapper_lebkt_1",H="_color_lebkt_11",K={wrapper:G,color:H},Q=o=>e.jsx("div",{className:R.wrapper,children:e.jsx(o,{})}),fe={title:"Components/SlideToggle/Stories",component:n,decorators:[Q],argTypes:$},u="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus tellus non arcu dignissim, sed venenatis tortor sollicitudin. Phasellus sodales urna ut mi porttitor blandit. Integer id ligula quis ante ultrices rhoncus. Aenean mi augue, venenatis id volutpat a, vehicula vitae massa. Nullam aliquam diam eu dui imperdiet rutrum. Nam porta quam eu dolor malesuada consequat. Cras non lacinia orci, scelerisque tincidunt mi. Praesent velit turpis, euismod a dictum et, viverra et diam. Morbi feugiat erat a bibendum commodo. Nullam facilisis pulvinar justo, et posuere leo dapibus et. Morbi quam mi, rutrum sed egestas eu, rutrum vitae ipsum. Integer dignissim ex in mauris suscipit volutpat. Donec nec ipsum rutrum lectus venenatis pulvinar. Sed molestie id ex a tristique. Sed arcu augue, rhoncus at commodo ut, rutrum in libero",p=o=>{const[t,i]=l.useState(!1);return e.jsx(n,{...o,isShow:t,onToggle:()=>i(!t),children:e.jsx(c,{variant:"Body2-Medium",color:"primary",children:u})})};p.storyName="SlideToggle по умолчанию";p.args={title:"Заголовок"};const g=o=>{const[t,i]=l.useState(!1),[a,h]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{...o,title:o.title,isShow:t,onToggle:()=>i(!t),size:f.default,children:e.jsx(c,{variant:"Body2-Medium",color:"primary",children:u})}),e.jsx(n,{...o,title:o.title,isShow:a,onToggle:()=>h(!a),size:f.compact,children:e.jsx(c,{variant:"Body2-Medium",color:"primary",children:u})})]})};g.storyName="SlideToggle с разными размерами";g.args={title:"Заголовок"};const r=o=>{const[t,i]=l.useState(!1),[a,h]=l.useState(!1),[S,x]=l.useState(!1),[C,L]=l.useState(!1),T=s=>{console.log("click",s)},N=e.jsxs("div",{style:{display:"flex",alignItems:"center",marginLeft:"4px",gap:"4px"},children:[e.jsx(d,{onClick:s=>{s.stopPropagation(),T(s),x(!S)},size:"s",style:{padding:"4px"},startIcon:S?e.jsx(A,{}):e.jsx(J,{}),color:"ghost",variant:"secondary"}),e.jsx(w,{size:"s",color:o.badgeColor,children:o.badgeChildren})]}),_=e.jsxs("div",{style:{display:"flex",alignItems:"center",marginLeft:"4px",gap:"4px"},children:[e.jsx(d,{onClick:s=>{s.stopPropagation(),T(s),L(!C)},color:"ghost",variant:"secondary",size:"m",style:{padding:"4px"},startIcon:C?e.jsx(W,{}):e.jsx(X,{})}),e.jsx(w,{size:"l",color:o.badgeColor,children:o.badgeChildren})]});return e.jsxs(e.Fragment,{children:[e.jsx(n,{...o,title:o.title,isShow:t,onToggle:()=>i(!t),size:f.default,after:_,children:e.jsx(c,{variant:"Body2-Medium",color:"primary",children:u})}),e.jsx(n,{...o,title:o.title,isShow:a,onToggle:()=>h(!a),size:f.compact,after:N,children:e.jsx(c,{variant:"Body2-Medium",color:"primary",children:u})})]})};r.storyName="SlideToggle с иконкой-кнопкой";r.args={title:"Заголовок",badgeChildren:"1",badgeColor:O.error};r.argTypes={badgeColor:{description:"Заливка Badge",options:Object.values(O),control:{type:"select"}},badgeChildren:{description:"Содержимое Badge",control:{type:"text"}}};const m=o=>{const[t,i]=l.useState(!1),a=x=>{x.stopPropagation(),console.log("click")},h=e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginLeft:"16px"},children:[e.jsx(d,{onClick:a,iconButton:e.jsx(y,{})}),e.jsx(c,{variant:"Body2-Medium",children:o.title})]}),S=e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginLeft:"16px"},children:[e.jsx(q,{label:"input в action block"}),e.jsx(d,{onClick:a,iconButton:e.jsx(y,{})}),e.jsx(d,{onClick:a,iconButton:e.jsx(y,{})}),e.jsx(d,{onClick:a,iconButton:e.jsx(y,{})})]});return e.jsx(n,{...o,isShow:t,onToggle:()=>i(!t),title:h,after:S,children:e.jsx(c,{variant:"Body2-Medium",color:"primary",children:u})})};m.storyName="SlideToggle кастомный";m.args={className:K.color,title:"Это кастомный title компонента SlideToggle"};var B,v,I;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`(args: ISlideToggleProps): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  return <SlideToggle {...args} isShow={show} onToggle={() => setShow(!show)}>
      <Typography variant="Body2-Medium" color="primary">
        {loremIpsum}
      </Typography>
    </SlideToggle>;
}`,...(I=(v=p.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var j,k,b;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`(args: ISlideToggleProps): JSX.Element => {
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
}`,...(b=(k=g.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var D,z,M;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`(args: ISlideToggleWithButtonProps): JSX.Element => {
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
      <Button onClick={e => {
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
      <Button onClick={e => {
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
}`,...(M=(z=r.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var F,E,P;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`(args: ISlideToggleProps): JSX.Element => {
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
      <Button onClick={handleClick} iconButton={<IconArticleOutlined24 />} />
      <Typography variant="Body2-Medium">{args.title}</Typography>
    </div>;
  const actionBlock = <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginLeft: '16px'
  }}>
      <Input label="input в action block" />
      <Button onClick={handleClick} iconButton={<IconArticleOutlined24 />} />
      <Button onClick={handleClick} iconButton={<IconArticleOutlined24 />} />
      <Button onClick={handleClick} iconButton={<IconArticleOutlined24 />} />
    </div>;
  return <SlideToggle {...args} isShow={show} onToggle={() => setShow(!show)} title={title} after={actionBlock}>
      <Typography variant="Body2-Medium" color="primary">
        {loremIpsum}
      </Typography>
    </SlideToggle>;
}`,...(P=(E=m.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};const xe=["SlideToggleDefault","SlideToggleSizes","SlideToggleWithButton","SlideToggleCustomized"];export{m as SlideToggleCustomized,p as SlideToggleDefault,g as SlideToggleSizes,r as SlideToggleWithButton,xe as __namedExportsOrder,fe as default};
