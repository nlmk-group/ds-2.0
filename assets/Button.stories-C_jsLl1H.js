import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{B as c,h as p,g as E,i as I}from"./TreeList-BfGIdsD6.js";import"./generateUUID-X09o9Pdp.js";import"./index-Ddr79P0b.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import{T as d,E as m}from"./index-qC5wYQgy.js";import"./index-D6U2gleG.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-C6Bf8XA5.js";import"./index-DokmLR-l.js";import"./index-Bnop-kX6.js";import{c as u,d as $}from"./32-BTlKmMLd.js";import{c as N}from"./clsx-B-dksMZM.js";import{a as _}from"./argsTypes-Mkdagvh3.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-B5g4YLzC.js";const z="_wrapper_1h9b7_1",O="_container_1h9b7_7",w="_section_1h9b7_31",S="_row_1h9b7_41",o={wrapper:z,container:O,"container--grid":"_container--grid_1h9b7_15",section:w,row:S},Z={title:"Components/Button/Stories",component:c,argTypes:_},a=e=>t.jsx("div",{className:o.wrapper,children:t.jsx(c,{type:"button",...e,children:e.children})});a.storyName="Button по умолчанию";a.args={children:"Button"};const l={[p.m]:t.jsx(u,{}),[p.s]:t.jsx(u,{}),[p.xs]:t.jsx($,{})},s=()=>t.jsx("div",{className:N(o.container,o["container--grid"]),children:Object.values(E).map(e=>t.jsxs("div",{className:o.section,children:[t.jsx(d,{variant:m.Heading3,color:"var(--steel-90)",children:e}),Object.values(I).map(r=>t.jsxs("div",{className:o.row,children:[t.jsx(d,{variant:m.Body1,color:"var(--steel-90)",children:r}),Object.values(p).map(n=>t.jsx(c,{type:"button",color:e,variant:r,size:n,iconButton:l[n]},`${e}-${r}-${n}`))]},`${e}-${r}`))]},e))});s.storyName="Кнопки-иконки";s.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const i=()=>t.jsx("div",{className:o.container,children:Object.values(E).map(e=>t.jsxs("div",{className:o.section,children:[t.jsx(d,{variant:m.Heading3,color:"var(--steel-90)",children:e}),Object.values(I).map(r=>t.jsxs("div",{className:o.section,children:[t.jsx(d,{variant:m.Heading4,color:"var(--steel-90)",children:r}),Object.values(p).map(n=>t.jsxs("div",{className:o.row,children:[t.jsx(d,{variant:m.Body1,color:"var(--steel-90)",children:n}),t.jsx(c,{type:"button",color:e,variant:r,size:n,startIcon:l[n],endIcon:l[n],children:"With Icons"}),t.jsx(c,{type:"button",color:e,variant:r,size:n,startBadge:"1",endBadge:"2",children:"With Badges"}),t.jsx(c,{type:"button",color:e,variant:r,size:n,startIcon:l[n],endIcon:l[n],startBadge:"1",endBadge:"2",children:"All Elements"})]},`${e}-${r}-${n}`))]},`${e}-${r}`))]},e))});i.storyName="Button с элементами";i.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};var y,v,h;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`(args: IButtonProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Button type="button" {...args}>
        {args.children}
      </Button>
    </div>;
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var B,g,j;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
}`,...(j=(g=s.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var b,x,T;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
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
}`,...(T=(x=i.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};const tt=["ButtonDefault","IconButtons","ButtonsWithElements"];export{a as ButtonDefault,i as ButtonsWithElements,s as IconButtons,tt as __namedExportsOrder,Z as default};
