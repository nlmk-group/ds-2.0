import{j as e,r as m}from"./iframe-C2j-UzJI.js";import{B as v}from"./index-EKbY0pty.js";import{F as i,E as n}from"./index-BYjJWpD4.js";import{T as o,E as c}from"./index-P9-ONPUI.js";import{a as x}from"./argsTypes-BSG6GzzI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-D3z7S9ph.js";import"./index-Cgs4mkOo.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-BI8xtbsU.js";import"./32-CJ0o-VIC.js";import"./24-CuDIHvWX.js";import"./24-Cva_JBwh.js";import"./24-KVke6soD.js";import"./24-BrI2by3D.js";import"./24-B5ODlOpD.js";import"./24-OjUQZVfT.js";import"./24-CeOxJPqx.js";import"./24-CHP3BsWo.js";import"./24-CKMbmC7d.js";import"./16-049IwUhX.js";import"./24-nYvLFNAE.js";import"./24-fUQbig4h.js";import"./16-BMa1J7tj.js";import"./16-SQC_C9px.js";import"./16-BuZexhOR.js";import"./16-DPV7Mbm7.js";import"./16-ChsbLgyw.js";const u="FilterTip-module__wrapper___SHUJG",s={wrapper:u,"variants-container":"FilterTip-module__variants-container___oMkGU","variants-element":"FilterTip-module__variants-element___dHeHs"},{useArgs:T}=__STORYBOOK_MODULE_PREVIEW_API__,j=t=>e.jsx("div",{className:s.wrapper,children:e.jsx(t,{})}),L={title:"Components/FilterTip/Stories",component:i,decorators:[j],argTypes:x},r=()=>{const[t,p]=T(),d=()=>{p({...t,isActive:!t.isActive})};return e.jsx(i,{...t,onClick:d})};r.storyName="FilterTip по умолчанию";r.args={text:"ГК Партии"};const a=t=>{const[p,d]=m.useState(!1);return e.jsx("div",{children:p?e.jsx(v,{type:"button",onClick:()=>d(!1),children:"Вернуть FilterTip"}):e.jsx(i,{...t,onDelete:()=>d(!0)})})};a.storyName="FilterTip с удалением";a.args={text:"ГК Партии"};const l=()=>e.jsxs("div",{className:s["variants-container"],children:[e.jsxs("div",{className:s["variants-element"],children:[e.jsx("div",{style:{minWidth:"120px"}}),e.jsx(o,{variant:c.Heading4,children:"selected"}),e.jsx(o,{variant:c.Heading4,children:"unselected"})]}),e.jsxs("div",{className:s["variants-element"],children:[e.jsx("div",{children:"default - s"}),e.jsx("div",{children:e.jsx(i,{isActive:!0,text:"ГК Партии"})}),e.jsx("div",{children:e.jsx(i,{text:"ГК Партии"})})]}),e.jsxs("div",{className:s["variants-element"],children:[e.jsx("div",{children:"disabled - s"}),e.jsx("div",{children:e.jsx(i,{isDisabled:!0,isActive:!0,text:"ГК Партии"})}),e.jsx("div",{children:e.jsx(i,{isDisabled:!0,text:"ГК Партии"})})]}),e.jsxs("div",{className:s["variants-element"],children:[e.jsx("div",{children:"default - m"}),e.jsx("div",{children:e.jsx(i,{isActive:!0,size:n.m,text:"ГК Партии"})}),e.jsx("div",{children:e.jsx(i,{size:n.m,text:"ГК Партии"})})]}),e.jsxs("div",{className:s["variants-element"],children:[e.jsx("div",{children:"disabled - m"}),e.jsx("div",{children:e.jsx(i,{isDisabled:!0,size:n.m,isActive:!0,text:"ГК Партии"})}),e.jsx("div",{children:e.jsx(i,{isDisabled:!0,size:n.m,text:"ГК Партии"})})]})]});l.storyName="Все варианты FilterTip";r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const [args, updateArgs] = useArgs<IFilterTipProps>();
  const onClick = () => {
    updateArgs({
      ...args,
      isActive: !args.isActive
    });
  };
  return <FilterTip {...args} onClick={onClick} />;
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: IFilterTipProps) => {
  const [isDeleted, setIsDeleted] = useState(false);
  return <div>
      {isDeleted ? <Button type="button" onClick={() => setIsDeleted(false)}>
          Вернуть FilterTip
        </Button> : <FilterTip {...args} onDelete={() => setIsDeleted(true)} />}
    </div>;
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <div className={styles['variants-container']}>
      <div className={styles['variants-element']}>
        <div style={{
        minWidth: '120px'
      }} />
        <Typography variant={ETypographyVariants.Heading4}>selected</Typography>
        <Typography variant={ETypographyVariants.Heading4}>unselected</Typography>
      </div>
      <div className={styles['variants-element']}>
        <div>default - s</div>
        <div>
          <FilterTip isActive text="ГК Партии" />
        </div>
        <div>
          <FilterTip text="ГК Партии" />
        </div>
      </div>
      <div className={styles['variants-element']}>
        <div>disabled - s</div>
        <div>
          <FilterTip isDisabled isActive text="ГК Партии" />
        </div>
        <div>
          <FilterTip isDisabled text="ГК Партии" />
        </div>
      </div>
      <div className={styles['variants-element']}>
        <div>default - m</div>
        <div>
          <FilterTip isActive size={EFilterTipSize.m} text="ГК Партии" />
        </div>
        <div>
          <FilterTip size={EFilterTipSize.m} text="ГК Партии" />
        </div>
      </div>
      <div className={styles['variants-element']}>
        <div>disabled - m</div>
        <div>
          <FilterTip isDisabled size={EFilterTipSize.m} isActive text="ГК Партии" />
        </div>
        <div>
          <FilterTip isDisabled size={EFilterTipSize.m} text="ГК Партии" />
        </div>
      </div>
    </div>;
}`,...l.parameters?.docs?.source}}};const Y=["FilterTipDefault","FilterTipDelete","FilterTipVariants"];export{r as FilterTipDefault,a as FilterTipDelete,l as FilterTipVariants,Y as __namedExportsOrder,L as default};
