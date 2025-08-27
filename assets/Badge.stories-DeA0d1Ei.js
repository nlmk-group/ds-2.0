import{j as a}from"./jsx-runtime-BTJTZTIL.js";import{ag as l,v as u,d as N,c as j}from"./TreeList-BcCsA96L.js";import"./index-BcJSXhQi.js";import"./generateUUID-Cm0X4XRy.js";import"./index-cHpEh_mw.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import{T as o,E as c}from"./index-DmffzHLE.js";import"./index-CQem5UP1.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-bO57duG5.js";import"./index-C5rKoyII.js";import"./32-CkUgnIrf.js";import{a as B}from"./argsTypes-Cb62NRjV.js";import"./index-ChsGqxH_.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";const f="_wrapper_1fxxe_1",T="_variants_1fxxe_8",w="_grid_1fxxe_21",E="_header_1fxxe_27",S="_row_1fxxe_34",z="_column_1fxxe_41",b="_title_1fxxe_45",s={wrapper:f,variants:T,"variants-section":"_variants-section_1fxxe_13","variants-title":"_variants-title_1fxxe_16",grid:w,header:E,row:S,column:z,title:b},O=e=>a.jsx("div",{style:{minHeight:80},children:a.jsx(e,{})}),aa={title:"Components/Badge/Stories",component:l,decorators:[O],argTypes:B},t=e=>a.jsx("div",{className:s.wrapper,children:a.jsx(l,{...e,children:e.children})});t.storyName="Badge по умолчанию";t.args={children:"1"};const i=()=>{const e=Object.values(j),h=Object.values(N),_=Object.values(u);return a.jsx("div",{className:s.wrapper,children:a.jsx("div",{className:s.variants,children:_.map(n=>a.jsxs("div",{className:s["variants-section"],children:[a.jsx(o,{className:s["variants-title"],variant:c.Heading4,children:n}),a.jsxs("div",{className:s.grid,children:[a.jsxs("div",{className:s.header,children:[a.jsx("div",{className:s.column}),e.map(r=>a.jsx(o,{className:s.title,variant:c.Body1,children:r},r))]}),h.map(r=>a.jsxs("div",{className:s.row,children:[a.jsx(o,{className:s.title,variant:c.Body1,children:r}),e.map(p=>a.jsx(l,{variant:n,color:p,size:r,children:"1"},`${n}-${p}-${r}`))]},r))]})]},n))})})};i.storyName="Все варианты Badge";i.parameters={controls:{disable:!0}};var d,m,v;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`(argsTypes: IBadgeProps): JSX.Element => {
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
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const sa=["BadgeDefault","BadgeShowcase"];export{t as BadgeDefault,i as BadgeShowcase,sa as __namedExportsOrder,aa as default};
