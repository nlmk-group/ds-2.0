import{j as a}from"./iframe-tXE4xoYc.js";import{B as l,v,a as g,E as y}from"./index-UIqxTLHU.js";import{T as o,E as d}from"./index-IJbXH1LS.js";import{a as _}from"./argsTypes-CS5x7rFg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";const h="Badge-module__wrapper___ZFFAe",u="Badge-module__variants___QYjNP",B="Badge-module__grid___kYznz",j="Badge-module__header___6lpD7",N="Badge-module__row___9jXVq",x="Badge-module__column___A8t5S",T="Badge-module__title___B5d2W",s={wrapper:h,variants:u,"variants-section":"Badge-module__variants-section___BzJ4V","variants-title":"Badge-module__variants-title___8SLMy",grid:B,header:j,row:N,column:x,title:T},w=e=>a.jsx("div",{style:{minHeight:80},children:a.jsx(e,{})}),V={title:"Components/Badge/Stories",component:l,decorators:[w],argTypes:_},t=e=>a.jsx("div",{className:s.wrapper,children:a.jsx(l,{...e,children:e.children})});t.storyName="Badge по умолчанию";t.args={children:"1"};const n=()=>{const e=Object.values(y),p=Object.values(g),m=Object.values(v);return a.jsx("div",{className:s.wrapper,children:a.jsx("div",{className:s.variants,children:m.map(i=>a.jsxs("div",{className:s["variants-section"],children:[a.jsx(o,{className:s["variants-title"],variant:d.Heading4,children:i}),a.jsxs("div",{className:s.grid,children:[a.jsxs("div",{className:s.header,children:[a.jsx("div",{className:s.column}),e.map(r=>a.jsx(o,{className:s.title,variant:d.Body1,children:r},r))]}),p.map(r=>a.jsxs("div",{className:s.row,children:[a.jsx(o,{className:s.title,variant:d.Body1,children:r}),e.map(c=>a.jsx(l,{variant:i,color:c,size:r,children:"1"},`${i}-${c}-${r}`))]},r))]})]},i))})})};n.storyName="Все варианты Badge";n.parameters={controls:{disable:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(argsTypes: IBadgeProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Badge {...argsTypes}>{argsTypes.children}</Badge>
    </div>;
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(): JSX.Element => {
  const colors = Object.values(EBadgeColors);
  const sizes = Object.values(EBadgeSizes);
  const variants = Object.values(variantsMapping);
  return <div className={styles.wrapper}>
      <div className={styles.variants}>
        {variants.map(variant => <div key={variant} className={styles['variants-section']}>
            <Typography className={styles['variants-title']} variant={ETypographyVariants.Heading4}>
              {variant}
            </Typography>
            <div className={styles.grid}>
              <div className={styles.header}>
                <div className={styles.column}></div>
                {colors.map(color => <Typography key={color} className={styles.title} variant={ETypographyVariants.Body1}>
                    {color}
                  </Typography>)}
              </div>
              {sizes.map(size => <div key={size} className={styles.row}>
                  <Typography className={styles.title} variant={ETypographyVariants.Body1}>
                    {size}
                  </Typography>
                  {colors.map(color => <Badge key={\`\${variant}-\${color}-\${size}\`} variant={variant} color={color} size={size}>
                      1
                    </Badge>)}
                </div>)}
            </div>
          </div>)}
      </div>
    </div>;
}`,...n.parameters?.docs?.source}}};const $=["BadgeDefault","BadgeShowcase"];export{t as BadgeDefault,n as BadgeShowcase,$ as __namedExportsOrder,V as default};
