import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{r as F}from"./index-Bnop-kX6.js";import{az as i,B as D,G as n}from"./VideoWindow-CFcxNO7a.js";import"./generateUUID-C8R2tEu_.js";import"./index-CJCwTxEb.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import{T as o,E as c}from"./index-qC5wYQgy.js";import"./index-AmjBKqYJ.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-D1ZRpW5q.js";import"./index-DokmLR-l.js";import"./32-DP423pJT.js";import{a as _}from"./argsTypes-CtKbMHCD.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-B5g4YLzC.js";const A="_wrapper_tgjl3_1",s={wrapper:A,"wrapper--small":"_wrapper--small_tgjl3_7","variants-container":"_variants-container_tgjl3_11","variants-element":"_variants-element_tgjl3_17"},{useArgs:f}=__STORYBOOK_MODULE_PREVIEW_API__,N=t=>e.jsx("div",{className:s.wrapper,children:e.jsx(t,{})}),q={title:"Components/FilterTip/Stories",component:i,decorators:[N],argTypes:_},r=()=>{const[t,p]=f(),d=()=>{p({...t,isActive:!t.isActive})};return e.jsx(i,{...t,onClick:d})};r.storyName="FilterTip по умолчанию";r.args={text:"ГК Партии"};const a=t=>{const[p,d]=F.useState(!1);return e.jsx("div",{children:p?e.jsx(D,{type:"button",onClick:()=>d(!1),children:"Вернуть FilterTip"}):e.jsx(i,{...t,onDelete:()=>d(!0)})})};a.storyName="FilterTip с удалением";a.args={text:"ГК Партии"};const l=()=>e.jsxs("div",{className:s["variants-container"],children:[e.jsxs("div",{className:s["variants-element"],children:[e.jsx("div",{style:{minWidth:"120px"}}),e.jsx(o,{variant:c.Heading4,children:"selected"}),e.jsx(o,{variant:c.Heading4,children:"unselected"})]}),e.jsxs("div",{className:s["variants-element"],children:[e.jsx("div",{children:"default - s"}),e.jsx("div",{children:e.jsx(i,{isActive:!0,text:"ГК Партии"})}),e.jsx("div",{children:e.jsx(i,{text:"ГК Партии"})})]}),e.jsxs("div",{className:s["variants-element"],children:[e.jsx("div",{children:"disabled - s"}),e.jsx("div",{children:e.jsx(i,{isDisabled:!0,isActive:!0,text:"ГК Партии"})}),e.jsx("div",{children:e.jsx(i,{isDisabled:!0,text:"ГК Партии"})})]}),e.jsxs("div",{className:s["variants-element"],children:[e.jsx("div",{children:"default - m"}),e.jsx("div",{children:e.jsx(i,{isActive:!0,size:n.m,text:"ГК Партии"})}),e.jsx("div",{children:e.jsx(i,{size:n.m,text:"ГК Партии"})})]}),e.jsxs("div",{className:s["variants-element"],children:[e.jsx("div",{children:"disabled - m"}),e.jsx("div",{children:e.jsx(i,{isDisabled:!0,size:n.m,isActive:!0,text:"ГК Партии"})}),e.jsx("div",{children:e.jsx(i,{isDisabled:!0,size:n.m,text:"ГК Партии"})})]})]});l.storyName="Все варианты FilterTip";var v,m,x;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const [args, updateArgs] = useArgs<IFilterTipProps>();
  const onClick = () => {
    updateArgs({
      ...args,
      isActive: !args.isActive
    });
  };
  return <FilterTip {...args} onClick={onClick} />;
}`,...(x=(m=r.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var u,T,j;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`(args: IFilterTipProps) => {
  const [isDeleted, setIsDeleted] = useState(false);
  return <div>
      {isDeleted ? <Button type="button" onClick={() => setIsDeleted(false)}>Вернуть FilterTip</Button> : <FilterTip {...args} onDelete={() => setIsDeleted(true)} />}
    </div>;
}`,...(j=(T=a.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var g,h,y;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
}`,...(y=(h=l.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const J=["FilterTipDefault","FilterTipDelete","FilterTipVariants"];export{r as FilterTipDefault,a as FilterTipDelete,l as FilterTipVariants,J as __namedExportsOrder,q as default};
