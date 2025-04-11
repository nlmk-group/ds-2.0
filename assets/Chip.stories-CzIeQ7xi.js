import{j as s}from"./jsx-runtime-BRNY0I4F.js";import{ag as x,C as _,l as j,k as c,v as C}from"./TreeList-BjAYGU6i.js";import"./index-Bnop-kX6.js";import"./generateUUID-BLuKx6pe.js";import"./index-DcUsRIWc.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import{T as o,E as p}from"./index-qC5wYQgy.js";import"./index-Dj-Wh1Bz.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-C9xHhmyi.js";import"./index-DokmLR-l.js";import"./32-70JnsVF1.js";import{a as T}from"./argsTypes-Dx3M5PEh.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-B5g4YLzC.js";const f="_wrapper_e876t_1",w="_variants_e876t_8",E="_grid_e876t_21",z="_header_e876t_27",b="_row_e876t_34",S="_column_e876t_41",$="_title_e876t_45",a={wrapper:f,variants:w,"variants-section":"_variants-section_e876t_13","variants-title":"_variants-title_e876t_16",grid:E,header:z,row:b,column:S,title:$,"chip-cell":"_chip-cell_e876t_49"},k=e=>s.jsx("div",{style:{minHeight:80},children:s.jsx(e,{})}),Z={title:"Components/Chip/Stories",component:x,decorators:[k],argTypes:T},i=e=>s.jsx("div",{className:a.wrapper,children:s.jsx(_,{...e,children:e.children})});i.storyName="Chip по умолчанию";i.args={children:"1234"};const t=()=>{const e=Object.values(j),u=[c.m,c.s],N=Object.values(C);return s.jsx("div",{className:a.wrapper,children:s.jsx("div",{className:a.variants,children:N.map(n=>s.jsxs("div",{className:a["variants-section"],children:[s.jsx(o,{className:a["variants-title"],variant:p.Heading4,children:n}),s.jsxs("div",{className:a.grid,children:[s.jsxs("div",{className:a.header,children:[s.jsx("div",{className:a.column}),e.map(r=>s.jsx(o,{className:a.title,variant:p.Body1,children:r},r))]}),u.map(r=>s.jsxs("div",{className:a.row,children:[s.jsx(o,{className:a.title,variant:p.Body1,children:r}),e.map(l=>s.jsx("div",{className:a["chip-cell"],children:s.jsx(_,{variant:n,color:l,size:r,label:"Label",suffix:"suffix",children:"1234"})},`${n}-${l}-${r}`))]},r))]})]},n))})})};t.storyName="Все варианты Chip";t.parameters={controls:{disable:!0}};var m,d,v;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`(argsTypes: IChipProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Chip {...argsTypes} children={argsTypes.children} />
    </div>;
}`,...(v=(d=i.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var h,y,g;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`(): JSX.Element => {
  const colors = Object.values(EChipColors);
  const sizes: TChipSize[] = [sizesMapping.m, sizesMapping.s];
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
                  {colors.map(color => <div key={\`\${variant}-\${color}-\${size}\`} className={styles['chip-cell']}>
                      <Chip variant={variant} color={color} size={size} label="Label" suffix="suffix">
                        1234
                      </Chip>
                    </div>)}
                </div>)}
            </div>
          </div>)}
      </div>
    </div>;
}`,...(g=(y=t.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const ss=["ChipDefault","ChipShowcase"];export{i as ChipDefault,t as ChipShowcase,ss as __namedExportsOrder,Z as default};
