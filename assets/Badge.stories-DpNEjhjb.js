import{j as a}from"./jsx-runtime-BRNY0I4F.js";import{af as l,e as u,d as N,v as j}from"./TreeList-DdX155Lh.js";import"./index-Bnop-kX6.js";import"./generateUUID-X09o9Pdp.js";import"./index-qbkiYuzD.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import{T as o,E as c}from"./index-qC5wYQgy.js";import"./index-DovCGOp-.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-n_FSf3Cv.js";import"./index-DokmLR-l.js";import"./32-BTlKmMLd.js";import{a as B}from"./argsTypes-DyGWtwZz.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-B5g4YLzC.js";const f="_wrapper_1fxxe_1",T="_variants_1fxxe_8",w="_grid_1fxxe_21",E="_header_1fxxe_27",S="_row_1fxxe_34",z="_column_1fxxe_41",b="_title_1fxxe_45",s={wrapper:f,variants:T,"variants-section":"_variants-section_1fxxe_13","variants-title":"_variants-title_1fxxe_16",grid:w,header:E,row:S,column:z,title:b},O=e=>a.jsx("div",{style:{minHeight:80},children:a.jsx(e,{})}),Y={title:"Components/Badge/Stories",component:l,decorators:[O],argTypes:B},t=e=>a.jsx("div",{className:s.wrapper,children:a.jsx(l,{...e,children:e.children})});t.storyName="Badge по умолчанию";t.args={children:"1"};const i=()=>{const e=Object.values(u),h=Object.values(N),_=Object.values(j);return a.jsx("div",{className:s.wrapper,children:a.jsx("div",{className:s.variants,children:_.map(n=>a.jsxs("div",{className:s["variants-section"],children:[a.jsx(o,{className:s["variants-title"],variant:c.Heading4,children:n}),a.jsxs("div",{className:s.grid,children:[a.jsxs("div",{className:s.header,children:[a.jsx("div",{className:s.column}),e.map(r=>a.jsx(o,{className:s.title,variant:c.Body1,children:r},r))]}),h.map(r=>a.jsxs("div",{className:s.row,children:[a.jsx(o,{className:s.title,variant:c.Body1,children:r}),e.map(d=>a.jsx(l,{variant:n,color:d,size:r,children:"1"},`${n}-${d}-${r}`))]},r))]})]},n))})})};i.storyName="Все варианты Badge";i.parameters={controls:{disable:!0}};var p,m,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`(argsTypes: IBadgeProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Badge {...argsTypes}>{argsTypes.children}</Badge>
    </div>;
}`,...(v=(m=t.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var y,g,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const Z=["BadgeDefault","BadgeShowcase"];export{t as BadgeDefault,i as BadgeShowcase,Z as __namedExportsOrder,Y as default};
