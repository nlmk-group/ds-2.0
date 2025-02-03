import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{B as c,h as p,g as b,i as I}from"./index-C4t5CiEI.js";import"./generateUUID-CwQfW92c.js";import"./index-D73feNss.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import{T as d,E as m}from"./index-qC5wYQgy.js";import"./index-NOJR75CD.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-bks6ELD5.js";import"./index-DokmLR-l.js";import{c as u,d as $}from"./32-DRujtrbd.js";import"./index-Bnop-kX6.js";import{c as N}from"./clsx-B-dksMZM.js";import{a as _}from"./argsTypes-Z7Js8O9U.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./index-B5g4YLzC.js";const z="_wrapper_1h9b7_1",O="_container_1h9b7_7",w="_section_1h9b7_31",S="_row_1h9b7_41",n={wrapper:z,container:O,"container--grid":"_container--grid_1h9b7_15",section:w,row:S},Y={title:"Components/Button/Stories",component:c,argTypes:_},o=e=>t.jsx("div",{className:n.wrapper,children:t.jsx(c,{...e,children:e.children})});o.storyName="Button по умолчанию";o.args={children:"Button"};const l={[p.m]:t.jsx(u,{}),[p.s]:t.jsx(u,{}),[p.xs]:t.jsx($,{})},s=()=>t.jsx("div",{className:N(n.container,n["container--grid"]),children:Object.values(b).map(e=>t.jsxs("div",{className:n.section,children:[t.jsx(d,{variant:m.Heading3,color:"var(--steel-90)",children:e}),Object.values(I).map(a=>t.jsxs("div",{className:n.row,children:[t.jsx(d,{variant:m.Body1,color:"var(--steel-90)",children:a}),Object.values(p).map(r=>t.jsx(c,{color:e,variant:a,size:r,iconButton:l[r]},`${e}-${a}-${r}`))]},`${e}-${a}`))]},e))});s.storyName="Кнопки-иконки";s.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const i=()=>t.jsx("div",{className:n.container,children:Object.values(b).map(e=>t.jsxs("div",{className:n.section,children:[t.jsx(d,{variant:m.Heading3,color:"var(--steel-90)",children:e}),Object.values(I).map(a=>t.jsxs("div",{className:n.section,children:[t.jsx(d,{variant:m.Heading4,color:"var(--steel-90)",children:a}),Object.values(p).map(r=>t.jsxs("div",{className:n.row,children:[t.jsx(d,{variant:m.Body1,color:"var(--steel-90)",children:r}),t.jsx(c,{color:e,variant:a,size:r,startIcon:l[r],endIcon:l[r],children:"With Icons"}),t.jsx(c,{color:e,variant:a,size:r,startBadge:"1",endBadge:"2",children:"With Badges"}),t.jsx(c,{color:e,variant:a,size:r,startIcon:l[r],endIcon:l[r],startBadge:"1",endBadge:"2",children:"All Elements"})]},`${e}-${a}-${r}`))]},`${e}-${a}`))]},e))});i.storyName="Button с элементами";i.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};var v,y,h;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`(args: IButtonProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Button {...args}>{args.children}</Button>
    </div>;
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var B,g,j;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <div className={clsx(styles.container, styles['container--grid'])}>
      {Object.values(EButtonColor).map(color => <div key={color} className={styles.section}>
          <Typography variant={ETypographyVariants.Heading3} color="var(--steel-90)">
            {color}
          </Typography>
          {Object.values(EButtonVariant).map(variant => <div key={\`\${color}-\${variant}\`} className={styles.row}>
              <Typography variant={ETypographyVariants.Body1} color="var(--steel-90)">
                {variant}
              </Typography>
              {Object.values(EButtonSize).map(size => <Button key={\`\${color}-\${variant}-\${size}\`} color={color} variant={variant} size={size} iconButton={sizeToIcon[size]} />)}
            </div>)}
        </div>)}
    </div>;
}`,...(j=(g=s.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var x,T,E;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
                  <Button color={color} variant={variant} size={size} startIcon={sizeToIcon[size]} endIcon={sizeToIcon[size]}>
                    With Icons
                  </Button>
                  <Button color={color} variant={variant} size={size} startBadge="1" endBadge="2">
                    With Badges
                  </Button>
                  <Button color={color} variant={variant} size={size} startIcon={sizeToIcon[size]} endIcon={sizeToIcon[size]} startBadge="1" endBadge="2">
                    All Elements
                  </Button>
                </div>)}
            </div>)}
        </div>)}
    </div>;
}`,...(E=(T=i.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};const Z=["ButtonDefault","IconButtons","ButtonsWithElements"];export{o as ButtonDefault,i as ButtonsWithElements,s as IconButtons,Z as __namedExportsOrder,Y as default};
