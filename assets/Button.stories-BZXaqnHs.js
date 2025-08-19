import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{B as c,h as E,f as I,g as p}from"./TreeList-BgLkmMSk.js";import"./generateUUID-B0loqD05.js";import"./index-B_7MXUVi.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import{T as d,E as m}from"./index-DmffzHLE.js";import"./index-CqWNtYbo.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-CBc2nLPm.js";import"./index-C5rKoyII.js";import"./index-BcJSXhQi.js";import{c as $,d as u}from"./32-BRZfqcB0.js";import{c as N}from"./clsx-B-dksMZM.js";import{a as _}from"./argsTypes-DmCZdZGG.js";import"./index-ChsGqxH_.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";const z="_wrapper_1h9b7_1",O="_container_1h9b7_7",w="_section_1h9b7_31",f="_row_1h9b7_41",o={wrapper:z,container:O,"container--grid":"_container--grid_1h9b7_15",section:w,row:f},et={title:"Components/Button/Stories",component:c,argTypes:_},a=e=>t.jsx("div",{className:o.wrapper,children:t.jsx(c,{type:"button",...e,children:e.children})});a.storyName="Button по умолчанию";a.args={children:"Button"};const l={[p.m]:t.jsx(u,{}),[p.s]:t.jsx(u,{}),[p.xs]:t.jsx($,{})},s=()=>t.jsx("div",{className:N(o.container,o["container--grid"]),children:Object.values(E).map(e=>t.jsxs("div",{className:o.section,children:[t.jsx(d,{variant:m.Heading3,color:"var(--steel-90)",children:e}),Object.values(I).map(n=>t.jsxs("div",{className:o.row,children:[t.jsx(d,{variant:m.Body1,color:"var(--steel-90)",children:n}),Object.values(p).map(r=>t.jsx(c,{type:"button",color:e,variant:n,size:r,iconButton:l[r]},`${e}-${n}-${r}`))]},`${e}-${n}`))]},e))});s.storyName="Кнопки-иконки";s.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const i=()=>t.jsx("div",{className:o.container,children:Object.values(E).map(e=>t.jsxs("div",{className:o.section,children:[t.jsx(d,{variant:m.Heading3,color:"var(--steel-90)",children:e}),Object.values(I).map(n=>t.jsxs("div",{className:o.section,children:[t.jsx(d,{variant:m.Heading4,color:"var(--steel-90)",children:n}),Object.values(p).map(r=>t.jsxs("div",{className:o.row,children:[t.jsx(d,{variant:m.Body1,color:"var(--steel-90)",children:r}),t.jsx(c,{type:"button",color:e,variant:n,size:r,startIcon:l[r],endIcon:l[r],children:"With Icons"}),t.jsx(c,{type:"button",color:e,variant:n,size:r,startBadge:"1",endBadge:"2",children:"With Badges"}),t.jsx(c,{type:"button",color:e,variant:n,size:r,startIcon:l[r],endIcon:l[r],startBadge:"1",endBadge:"2",children:"All Elements"})]},`${e}-${n}-${r}`))]},`${e}-${n}`))]},e))});i.storyName="Button с элементами";i.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};var y,v,h;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`(args: IButtonProps): JSX.Element => {
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
}`,...(T=(x=i.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};const rt=["ButtonDefault","IconButtons","ButtonsWithElements"];export{a as ButtonDefault,i as ButtonsWithElements,s as IconButtons,rt as __namedExportsOrder,et as default};
