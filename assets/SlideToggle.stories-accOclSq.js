import{j as e,r as i}from"./iframe-Bo4nALm7.js";import{B as w,E as B}from"./index-DcKSVsFY.js";import{B as p}from"./index-BdFgkFQG.js";import{I as j}from"./index-rp9NcFhw.js";import{S as n,E as f}from"./index-DZkdzlJ9.js";import{T as c}from"./index-CUIhMP_o.js";import{g as k}from"./styles.module-P9JyAdOG.js";import{a as D}from"./argsTypes-D09RVZG7.js";import{k as z}from"./index-DUNZSITs.js";import{I as M}from"./16-BT8X9gPM.js";import{I as F}from"./24-DO_3r_fK.js";import{I as E}from"./24-D5XAI_AH.js";import{I as y}from"./24-C8hAPZTM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-yK1xfIEO.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-DrwGWWyr.js";import"./24-DMCeAA-V.js";import"./24-85pGpdFN.js";import"./24-BysagIQq.js";import"./24-BfwlYFIe.js";import"./24-CbRb0MeE.js";import"./24-NHhFZcqx.js";import"./24-gy5ADEN_.js";import"./24-CNhMk3Hk.js";import"./16-aMqW81vf.js";import"./24-Blxmuo2i.js";import"./16-CUTQAt8-.js";import"./16-BgwH21Xk.js";import"./16-Bi9OWKG5.js";import"./16-KygOpizh.js";const P="SlideToggle-module__color___tVK0W",O={color:P},L=t=>e.jsx("div",{className:k.wrapper,children:e.jsx(t,{})}),fe={title:"Components/SlideToggle/Stories",component:n,decorators:[L],argTypes:D},u="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus tellus non arcu dignissim, sed venenatis tortor sollicitudin. Phasellus sodales urna ut mi porttitor blandit. Integer id ligula quis ante ultrices rhoncus. Aenean mi augue, venenatis id volutpat a, vehicula vitae massa. Nullam aliquam diam eu dui imperdiet rutrum. Nam porta quam eu dolor malesuada consequat. Cras non lacinia orci, scelerisque tincidunt mi. Praesent velit turpis, euismod a dictum et, viverra et diam. Morbi feugiat erat a bibendum commodo. Nullam facilisis pulvinar justo, et posuere leo dapibus et. Morbi quam mi, rutrum sed egestas eu, rutrum vitae ipsum. Integer dignissim ex in mauris suscipit volutpat. Donec nec ipsum rutrum lectus venenatis pulvinar. Sed molestie id ex a tristique. Sed arcu augue, rhoncus at commodo ut, rutrum in libero",d=t=>{const[o,l]=i.useState(!1);return e.jsx(n,{...t,isShow:o,onToggle:()=>l(!o),children:e.jsx(c,{variant:"Body2-Medium",color:"primary",children:u})})};d.storyName="SlideToggle по умолчанию";d.args={title:"Заголовок"};const m=t=>{const[o,l]=i.useState(!1),[a,S]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{...t,title:t.title,isShow:o,onToggle:()=>l(!o),size:f.default,children:e.jsx(c,{variant:"Body2-Medium",color:"primary",children:u})}),e.jsx(n,{...t,title:t.title,isShow:a,onToggle:()=>S(!a),size:f.compact,children:e.jsx(c,{variant:"Body2-Medium",color:"primary",children:u})})]})};m.storyName="SlideToggle с разными размерами";m.args={title:"Заголовок"};const r=t=>{const[o,l]=i.useState(!1),[a,S]=i.useState(!1),[h,x]=i.useState(!1),[T,I]=i.useState(!1),C=s=>{console.log("click",s)},v=e.jsxs("div",{style:{display:"flex",alignItems:"center",marginLeft:"4px",gap:"4px"},children:[e.jsx(p,{type:"button",onClick:s=>{s.stopPropagation(),C(s),x(!h)},size:"s",style:{padding:"4px"},startIcon:h?e.jsx(z,{}):e.jsx(M,{}),color:"ghost",variant:"secondary"}),e.jsx(w,{size:"s",color:t.badgeColor,children:t.badgeChildren})]}),b=e.jsxs("div",{style:{display:"flex",alignItems:"center",marginLeft:"4px",gap:"4px"},children:[e.jsx(p,{type:"button",onClick:s=>{s.stopPropagation(),C(s),I(!T)},color:"ghost",variant:"secondary",size:"m",style:{padding:"4px"},startIcon:T?e.jsx(F,{}):e.jsx(E,{})}),e.jsx(w,{size:"l",color:t.badgeColor,children:t.badgeChildren})]});return e.jsxs(e.Fragment,{children:[e.jsx(n,{...t,title:t.title,isShow:o,onToggle:()=>l(!o),size:f.default,after:b,children:e.jsx(c,{variant:"Body2-Medium",color:"primary",children:u})}),e.jsx(n,{...t,title:t.title,isShow:a,onToggle:()=>S(!a),size:f.compact,after:v,children:e.jsx(c,{variant:"Body2-Medium",color:"primary",children:u})})]})};r.storyName="SlideToggle с иконкой-кнопкой";r.args={title:"Заголовок",badgeChildren:"1",badgeColor:B.error};r.argTypes={badgeColor:{description:"Заливка Badge",options:Object.values(B),control:{type:"select"}},badgeChildren:{description:"Содержимое Badge",control:{type:"text"}}};const g=t=>{const[o,l]=i.useState(!1),a=x=>{x.stopPropagation(),console.log("click")},S=e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginLeft:"16px"},children:[e.jsx(p,{type:"button",onClick:a,iconButton:e.jsx(y,{})}),e.jsx(c,{variant:"Body2-Medium",children:t.title})]}),h=e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginLeft:"16px"},children:[e.jsx(j,{label:"input в action block"}),e.jsx(p,{type:"button",onClick:a,iconButton:e.jsx(y,{})}),e.jsx(p,{type:"button",onClick:a,iconButton:e.jsx(y,{})}),e.jsx(p,{type:"button",onClick:a,iconButton:e.jsx(y,{})})]});return e.jsx(n,{...t,isShow:o,onToggle:()=>l(!o),title:S,after:h,children:e.jsx(c,{variant:"Body2-Medium",color:"primary",children:u})})};g.storyName="SlideToggle кастомный";g.args={className:O.color,title:"Это кастомный title компонента SlideToggle"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: ISlideToggleBaseProps): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  return <SlideToggle {...args} isShow={show} onToggle={() => setShow(!show)}>
      <Typography variant="Body2-Medium" color="primary">
        {loremIpsum}
      </Typography>
    </SlideToggle>;
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: ISlideToggleBaseProps): JSX.Element => {
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
}`,...m.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: ISlideToggleWithButtonProps): JSX.Element => {
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
}`,...r.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(args: ISlideToggleBaseProps): JSX.Element => {
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
}`,...g.parameters?.docs?.source}}};const xe=["SlideToggleDefault","SlideToggleSizes","SlideToggleWithButton","SlideToggleCustomized"];export{g as SlideToggleCustomized,d as SlideToggleDefault,m as SlideToggleSizes,r as SlideToggleWithButton,xe as __namedExportsOrder,fe as default};
