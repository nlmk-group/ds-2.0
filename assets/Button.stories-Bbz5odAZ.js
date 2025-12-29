import{j as t}from"./iframe-CxLN9ksd.js";import{B as c,b as y,E as v,a as d}from"./index-D3DoxRCP.js";import{T as p,E as u}from"./index-CORENSTS.js";import{c as B}from"./clsx-B-dksMZM.js";import{a as h}from"./argsTypes-CUxH2mMj.js";import{I as g}from"./16-kcyE2NZr.js";import{I as m}from"./24-Dlyxu4_q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-LyR6p6RN.js";import"./32-B2BQHND4.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-CbC-8o3Y.js";const j="Button-module__wrapper___YXdo5",T="Button-module__container___M9Qhm",b="Button-module__section___NVZ1o",x="Button-module__row___bnwBD",a={wrapper:j,container:T,"container--grid":"Button-module__container--grid___AZ88T",section:b,row:x},H={title:"Components/Button/Stories",component:c,argTypes:h},r=e=>t.jsx("div",{className:a.wrapper,children:t.jsx(c,{type:"button",...e,children:e.children})});r.storyName="Button по умолчанию";r.args={children:"Button"};const l={[d.m]:t.jsx(m,{}),[d.s]:t.jsx(m,{}),[d.xs]:t.jsx(g,{})},s=()=>t.jsx("div",{className:B(a.container,a["container--grid"]),children:Object.values(y).map(e=>t.jsxs("div",{className:a.section,children:[t.jsx(p,{variant:u.Heading3,color:"var(--steel-90)",children:e}),Object.values(v).map(o=>t.jsxs("div",{className:a.row,children:[t.jsx(p,{variant:u.Body1,color:"var(--steel-90)",children:o}),Object.values(d).map(n=>t.jsx(c,{type:"button",color:e,variant:o,size:n,iconButton:l[n]},`${e}-${o}-${n}`))]},`${e}-${o}`))]},e))});s.storyName="Кнопки-иконки";s.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const i=()=>t.jsx("div",{className:a.container,children:Object.values(y).map(e=>t.jsxs("div",{className:a.section,children:[t.jsx(p,{variant:u.Heading3,color:"var(--steel-90)",children:e}),Object.values(v).map(o=>t.jsxs("div",{className:a.section,children:[t.jsx(p,{variant:u.Heading4,color:"var(--steel-90)",children:o}),Object.values(d).map(n=>t.jsxs("div",{className:a.row,children:[t.jsx(p,{variant:u.Body1,color:"var(--steel-90)",children:n}),t.jsx(c,{type:"button",color:e,variant:o,size:n,startIcon:l[n],endIcon:l[n],children:"With Icons"}),t.jsx(c,{type:"button",color:e,variant:o,size:n,startBadge:"1",endBadge:"2",children:"With Badges"}),t.jsx(c,{type:"button",color:e,variant:o,size:n,startIcon:l[n],endIcon:l[n],startBadge:"1",endBadge:"2",children:"All Elements"})]},`${e}-${o}-${n}`))]},`${e}-${o}`))]},e))});i.storyName="Button с элементами";i.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: IButtonProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Button type="button" {...args}>
        {args.children}
      </Button>
    </div>;
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <div className={clsx(styles.container, styles['container--grid'])}>
      {Object.values(EButtonColor).map(color => <div key={color} className={styles.section}>
          <Typography variant={ETypographyVariants.Heading3} color="var(--steel-90)">
            {color}
          </Typography>
          {Object.values(EButtonVariant).map(variant => <div key={\`\${color}-\${variant}\`} className={styles.row}>
              <Typography variant={ETypographyVariants.Body1} color="var(--steel-90)">
                {variant}
              </Typography>
              {Object.values(EButtonSize).map(size => <Button type="button" key={\`\${color}-\${variant}-\${size}\`} color={color} variant={variant} size={size} iconButton={sizeToIcon[size]} />)}
            </div>)}
        </div>)}
    </div>;
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <div className={styles.container}>
      {Object.values(EButtonColor).map(color => <div key={color} className={styles.section}>
          <Typography variant={ETypographyVariants.Heading3} color="var(--steel-90)">
            {color}
          </Typography>
          {Object.values(EButtonVariant).map(variant => <div key={\`\${color}-\${variant}\`} className={styles.section}>
              <Typography variant={ETypographyVariants.Heading4} color="var(--steel-90)">
                {variant}
              </Typography>
              {Object.values(EButtonSize).map(size => <div key={\`\${color}-\${variant}-\${size}\`} className={styles.row}>
                  <Typography variant={ETypographyVariants.Body1} color="var(--steel-90)">
                    {size}
                  </Typography>
                  <Button type="button" color={color} variant={variant} size={size} startIcon={sizeToIcon[size]} endIcon={sizeToIcon[size]}>
                    With Icons
                  </Button>
                  <Button type="button" color={color} variant={variant} size={size} startBadge="1" endBadge="2">
                    With Badges
                  </Button>
                  <Button type="button" color={color} variant={variant} size={size} startIcon={sizeToIcon[size]} endIcon={sizeToIcon[size]} startBadge="1" endBadge="2">
                    All Elements
                  </Button>
                </div>)}
            </div>)}
        </div>)}
    </div>;
}`,...i.parameters?.docs?.source}}};const W=["ButtonDefault","IconButtons","ButtonsWithElements"];export{r as ButtonDefault,i as ButtonsWithElements,s as IconButtons,W as __namedExportsOrder,H as default};
