import{j as s}from"./iframe-BPtLBEuk.js";import{s as d}from"./sizesMapping-D8QavrGc.js";import{v}from"./index-D-pLh_NR.js";import{C as p,E as _}from"./index-CANPVv15.js";import{T as o,E as l}from"./index-C9_7xPUt.js";import{a as y}from"./argsTypes-DbjuocQ1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-d_6bz31j.js";const u="Chip-module__wrapper___eDZeq",g="Chip-module__variants___6zgDr",C="Chip-module__grid___iUCZW",N="Chip-module__header___S-7W9",x="Chip-module__row___x024w",j="Chip-module__column___wd1i0",f="Chip-module__title___m-RSo",a={wrapper:u,variants:g,"variants-section":"Chip-module__variants-section___m6r6J","variants-title":"Chip-module__variants-title___zbEC-",grid:C,header:N,row:x,column:j,title:f,"chip-cell":"Chip-module__chip-cell___-p4Xt"},w=e=>s.jsx("div",{style:{minHeight:80},children:s.jsx(e,{})}),B={title:"Components/Chip/Stories",component:p,decorators:[w],argTypes:y},r=e=>s.jsx("div",{className:a.wrapper,children:s.jsx(p,{...e,children:e.children})});r.storyName="Chip по умолчанию";r.args={children:"1234"};const t=()=>{const e=Object.values(_),m=[d.m,d.s],h=Object.values(v);return s.jsx("div",{className:a.wrapper,children:s.jsx("div",{className:a.variants,children:h.map(n=>s.jsxs("div",{className:a["variants-section"],children:[s.jsx(o,{className:a["variants-title"],variant:l.Heading4,children:n}),s.jsxs("div",{className:a.grid,children:[s.jsxs("div",{className:a.header,children:[s.jsx("div",{className:a.column}),e.map(i=>s.jsx(o,{className:a.title,variant:l.Body1,children:i},i))]}),m.map(i=>s.jsxs("div",{className:a.row,children:[s.jsx(o,{className:a.title,variant:l.Body1,children:i}),e.map(c=>s.jsx("div",{className:a["chip-cell"],children:s.jsx(p,{variant:n,color:c,size:i,label:"Label",suffix:"suffix",children:"1234"})},`${n}-${c}-${i}`))]},i))]})]},n))})})};t.storyName="Все варианты Chip";t.parameters={controls:{disable:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(argsTypes: IChipProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Chip {...argsTypes} children={argsTypes.children} />
    </div>;
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...t.parameters?.docs?.source}}};const D=["ChipDefault","ChipShowcase"];export{r as ChipDefault,t as ChipShowcase,D as __namedExportsOrder,B as default};
