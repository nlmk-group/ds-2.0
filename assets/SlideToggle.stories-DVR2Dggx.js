import{j as e,r as i}from"./iframe-CVAHojaF.js";import{B as w,E as B}from"./index-x8Y8AkZd.js";import{I as j}from"./index-Bale6U52.js";import{B as p}from"./index-DZ_c8xXN.js";import{T as n}from"./index-BHrg75jh.js";import{a as k,S as c,E as f}from"./argsTypes-Bkq8JZHn.js";import{g as D}from"./styles.module-BGEDXogi.js";import{r as z,s as M}from"./index-BN_w7FjE.js";import{I as F}from"./16-D08SDomb.js";import{I as E}from"./24-CpQC9mRz.js";import{I as y}from"./24-BKsua3Hk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./index-dVGqcEPw.js";import"./generateUUID-M57HTP56.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-BGkTw_Iv.js";import"./24-DhWu0U6R.js";import"./24-QBRQbIxz.js";import"./24-DbZB43lA.js";import"./24-D4AD88CD.js";import"./24-i225Oh9B.js";import"./24-Tgd-_Nih.js";import"./24-BHgrLOFn.js";import"./24-DKX7LJ7g.js";import"./16-D51laVEK.js";import"./24-DoIGH_dx.js";import"./16-R8HovCn5.js";import"./16-DOUHJXJi.js";const P="SlideToggle-module__color___tVK0W",O={color:P},L=t=>e.jsx("div",{className:D.wrapper,children:e.jsx(t,{})}),ue={title:"Components/SlideToggle/Stories",component:c,decorators:[L],argTypes:k},u="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus tellus non arcu dignissim, sed venenatis tortor sollicitudin. Phasellus sodales urna ut mi porttitor blandit. Integer id ligula quis ante ultrices rhoncus. Aenean mi augue, venenatis id volutpat a, vehicula vitae massa. Nullam aliquam diam eu dui imperdiet rutrum. Nam porta quam eu dolor malesuada consequat. Cras non lacinia orci, scelerisque tincidunt mi. Praesent velit turpis, euismod a dictum et, viverra et diam. Morbi feugiat erat a bibendum commodo. Nullam facilisis pulvinar justo, et posuere leo dapibus et. Morbi quam mi, rutrum sed egestas eu, rutrum vitae ipsum. Integer dignissim ex in mauris suscipit volutpat. Donec nec ipsum rutrum lectus venenatis pulvinar. Sed molestie id ex a tristique. Sed arcu augue, rhoncus at commodo ut, rutrum in libero",d=t=>{const[o,l]=i.useState(!1);return e.jsx(c,{...t,isShow:o,onToggle:()=>l(!o),children:e.jsx(n,{variant:"Body2-Medium",color:"primary",children:u})})};d.storyName="SlideToggle по умолчанию";d.args={title:"Заголовок"};const g=t=>{const[o,l]=i.useState(!1),[a,S]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{...t,title:t.title,isShow:o,onToggle:()=>l(!o),size:f.default,children:e.jsx(n,{variant:"Body2-Medium",color:"primary",children:u})}),e.jsx(c,{...t,title:t.title,isShow:a,onToggle:()=>S(!a),size:f.compact,children:e.jsx(n,{variant:"Body2-Medium",color:"primary",children:u})})]})};g.storyName="SlideToggle с разными размерами";g.args={title:"Заголовок"};const r=t=>{const[o,l]=i.useState(!1),[a,S]=i.useState(!1),[h,x]=i.useState(!1),[T,I]=i.useState(!1),C=s=>{console.log("click",s)},v=e.jsxs("div",{style:{display:"flex",alignItems:"center",marginLeft:"4px",gap:"4px"},children:[e.jsx(p,{type:"button",onClick:s=>{s.stopPropagation(),C(s),x(!h)},size:"s",style:{padding:"4px"},startIcon:h?e.jsx(z,{}):e.jsx(F,{}),color:"ghost",variant:"secondary"}),e.jsx(w,{size:"s",color:t.badgeColor,children:t.badgeChildren})]}),b=e.jsxs("div",{style:{display:"flex",alignItems:"center",marginLeft:"4px",gap:"4px"},children:[e.jsx(p,{type:"button",onClick:s=>{s.stopPropagation(),C(s),I(!T)},color:"ghost",variant:"secondary",size:"m",style:{padding:"4px"},startIcon:T?e.jsx(M,{}):e.jsx(E,{})}),e.jsx(w,{size:"l",color:t.badgeColor,children:t.badgeChildren})]});return e.jsxs(e.Fragment,{children:[e.jsx(c,{...t,title:t.title,isShow:o,onToggle:()=>l(!o),size:f.default,after:b,children:e.jsx(n,{variant:"Body2-Medium",color:"primary",children:u})}),e.jsx(c,{...t,title:t.title,isShow:a,onToggle:()=>S(!a),size:f.compact,after:v,children:e.jsx(n,{variant:"Body2-Medium",color:"primary",children:u})})]})};r.storyName="SlideToggle с иконкой-кнопкой";r.args={title:"Заголовок",badgeChildren:"1",badgeColor:B.error};r.argTypes={badgeColor:{description:"Заливка Badge",options:Object.values(B),control:{type:"select"}},badgeChildren:{description:"Содержимое Badge",control:{type:"text"}}};const m=t=>{const[o,l]=i.useState(!1),a=x=>{x.stopPropagation(),console.log("click")},S=e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginLeft:"16px"},children:[e.jsx(p,{type:"button",onClick:a,iconButton:e.jsx(y,{})}),e.jsx(n,{variant:"Body2-Medium",children:t.title})]}),h=e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginLeft:"16px"},children:[e.jsx(j,{label:"input в action block"}),e.jsx(p,{type:"button",onClick:a,iconButton:e.jsx(y,{})}),e.jsx(p,{type:"button",onClick:a,iconButton:e.jsx(y,{})}),e.jsx(p,{type:"button",onClick:a,iconButton:e.jsx(y,{})})]});return e.jsx(c,{...t,isShow:o,onToggle:()=>l(!o),title:S,after:h,children:e.jsx(n,{variant:"Body2-Medium",color:"primary",children:u})})};m.storyName="SlideToggle кастомный";m.args={className:O.color,title:"Это кастомный title компонента SlideToggle"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: ISlideToggleBaseProps): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  return <SlideToggle {...args} isShow={show} onToggle={() => setShow(!show)}>
      <Typography variant="Body2-Medium" color="primary">
        {loremIpsum}
      </Typography>
    </SlideToggle>;
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(args: ISlideToggleBaseProps): JSX.Element => {
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
}`,...g.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: ISlideToggleWithButtonProps): JSX.Element => {
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
}`,...r.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: ISlideToggleBaseProps): JSX.Element => {
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
}`,...m.parameters?.docs?.source}}};const Se=["SlideToggleDefault","SlideToggleSizes","SlideToggleWithButton","SlideToggleCustomized"];export{m as SlideToggleCustomized,d as SlideToggleDefault,g as SlideToggleSizes,r as SlideToggleWithButton,Se as __namedExportsOrder,ue as default};
