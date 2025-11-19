import{j as o}from"./jsx-runtime-BTJTZTIL.js";import{e as H}from"./index-BcJSXhQi.js";import{U as a,V as t,T as N,B as u}from"./TreeList-ls9Njcdr.js";import"./generateUUID-CpKhmTry.js";import"./index-CzNzGEue.js";import"./index-WHoiTdKD.js";import{B as n}from"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import{T as e}from"./index-DmffzHLE.js";import"./index-CaDFz05s.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-BZ5zMSTm.js";import"./index-C5rKoyII.js";import"./32-icvDJE6i.js";import{a as r}from"./index-B-lxVbXh.js";import{g as A}from"./styles.module-m0Zsy3Hi.js";import{a as w}from"./argsTypes-BKPYKpbF.js";import"./index-ChsGqxH_.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";import"./v4-CtRu48qb.js";const M=l=>o.jsx("div",{className:A.wrapper,children:o.jsx(l,{})}),io={title:"Components/SegmentButtonGroup/Stories",component:a,decorators:[M],argTypes:w},B=l=>o.jsxs(a,{...l,children:[o.jsx(t,{onClick:r("onClick"),children:o.jsx(e,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Сталь"})}),o.jsx(t,{onClick:r("onClick"),children:o.jsx(e,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Цинк"})}),o.jsx(t,{onClick:r("onClick"),children:o.jsx(e,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Чугун"})})]});B.storyName="SegmentButtonGroup по умолчанию";const c=l=>o.jsx(n,{flexDirection:"column",gap:12,children:Object.values(N).map((i,z)=>o.jsxs(n,{flexDirection:"column",gap:8,children:[o.jsx(e,{variant:"Body1-Bold",color:"var(--steel-90)",children:`Размер ${i} `}),o.jsxs(a,{size:i,...l,children:[o.jsx(t,{onClick:r("onClick"),children:o.jsx(e,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Сталь"})}),o.jsx(t,{onClick:r("onClick"),children:o.jsx(e,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Цинк"})}),o.jsx(t,{onClick:r("onClick"),children:o.jsx(e,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Чугун"})})]}),o.jsxs(a,{size:i,...l,children:[o.jsx(t,{onClick:r("onClick"),children:o.jsx(e,{variant:"Body1-Medium",color:"var(--steel-90)",children:"Сталь"})}),o.jsx(t,{onClick:r("onClick"),children:o.jsx(e,{variant:"Body1-Medium",color:"var(--steel-90)",children:"Цинк"})}),o.jsx(t,{onClick:r("onClick"),children:o.jsx(e,{variant:"Body1-Medium",color:"var(--steel-90)",children:"Чугун"})})]})]},z))});c.storyName="SegmentButtonGroup с разными обертками для текста";c.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const s=()=>o.jsxs(n,{flexDirection:"column",gap:24,children:[o.jsxs(n,{flexDirection:"column",gap:8,children:[o.jsx(e,{variant:"Heading4",color:"var(--steel-90)",children:"Первая кнопка активна по умолчанию"}),o.jsxs(a,{children:[o.jsx(t,{active:!0,onClick:r("Сталь clicked"),children:o.jsx(e,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Сталь"})}),o.jsx(t,{onClick:r("Цинк clicked"),children:o.jsx(e,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Цинк"})}),o.jsx(t,{onClick:r("Чугун clicked"),children:o.jsx(e,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Чугун"})})]})]}),o.jsxs(n,{flexDirection:"column",gap:8,children:[o.jsx(e,{variant:"Heading4",color:"var(--steel-90)",children:"Средняя кнопка активна по умолчанию"}),o.jsxs(a,{children:[o.jsx(t,{onClick:r("Сталь clicked"),children:o.jsx(e,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Сталь"})}),o.jsx(t,{active:!0,onClick:r("Цинк clicked"),children:o.jsx(e,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Цинк"})}),o.jsx(t,{onClick:r("Чугун clicked"),children:o.jsx(e,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Чугун"})})]})]}),o.jsxs(n,{flexDirection:"column",gap:8,children:[o.jsx(e,{variant:"Heading4",color:"var(--steel-90)",children:"Последняя кнопка активна по умолчанию"}),o.jsxs(a,{children:[o.jsx(t,{onClick:r("Сталь clicked"),children:o.jsx(e,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Сталь"})}),o.jsx(t,{onClick:r("Цинк clicked"),children:o.jsx(e,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Цинк"})}),o.jsx(t,{active:!0,onClick:r("Чугун clicked"),children:o.jsx(e,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Чугун"})})]})]})]});s.storyName="SegmentButtonGroup с активной кнопкой по умолчанию";s.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const d=()=>o.jsxs(n,{flexDirection:"column",gap:24,children:[o.jsxs(n,{flexDirection:"column",gap:8,children:[o.jsx(e,{variant:"Heading4",color:"var(--steel-90)",children:"Вся группа отключена"}),o.jsxs(a,{disabled:!0,children:[o.jsx(t,{onClick:r("Сталь clicked"),children:o.jsx(e,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Сталь"})}),o.jsx(t,{onClick:r("Цинк clicked"),children:o.jsx(e,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Цинк"})}),o.jsx(t,{onClick:r("Чугун clicked"),children:o.jsx(e,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Чугун"})})]})]}),o.jsxs(n,{flexDirection:"column",gap:8,children:[o.jsx(e,{variant:"Heading4",color:"var(--steel-90)",children:"Отдельные кнопки отключены"}),o.jsxs(a,{children:[o.jsx(t,{onClick:r("Сталь clicked"),children:o.jsx(e,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Сталь"})}),o.jsx(t,{disabled:!0,onClick:r("Цинк clicked"),children:o.jsx(e,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Цинк (отключено)"})}),o.jsx(t,{onClick:r("Чугун clicked"),children:o.jsx(e,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Чугун"})})]})]}),o.jsxs(n,{flexDirection:"column",gap:8,children:[o.jsx(e,{variant:"Heading4",color:"var(--steel-90)",children:"Комбинация: активная по умолчанию + отключена одна кнопка"}),o.jsxs(a,{children:[o.jsx(t,{active:!0,onClick:r("Сталь clicked"),children:o.jsx(e,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Сталь"})}),o.jsx(t,{onClick:r("Цинк clicked"),children:o.jsx(e,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Цинк"})}),o.jsx(t,{disabled:!0,onClick:r("Чугун clicked"),children:o.jsx(e,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Чугун (отключено)"})})]})]})]});d.storyName="SegmentButtonGroup с отключенными кнопками";d.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const p=()=>{const[l,i]=H.useState("steel");return o.jsx(n,{flexDirection:"column",gap:24,children:o.jsxs(n,{flexDirection:"column",gap:8,children:[o.jsx(e,{variant:"Heading4",color:"var(--steel-90)",children:"Управление активной кнопкой извне"}),o.jsxs(e,{variant:"Body1-Medium",color:"var(--steel-70)",children:["Текущая активная: ",l==="steel"?"Сталь":l==="zinc"?"Цинк":"Чугун"]}),o.jsxs(a,{children:[o.jsx(t,{active:l==="steel",onClick:()=>{i("steel"),r("Сталь clicked")()},children:o.jsx(e,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Сталь"})}),o.jsx(t,{active:l==="zinc",onClick:()=>{i("zinc"),r("Цинк clicked")()},children:o.jsx(e,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Цинк"})}),o.jsx(t,{active:l==="iron",onClick:()=>{i("iron"),r("Чугун clicked")()},children:o.jsx(e,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Чугун"})})]}),o.jsxs(n,{flexDirection:"row",gap:8,pt:16,children:[o.jsx(u,{onClick:()=>i("steel"),children:"Активировать Сталь через state"}),o.jsx(u,{onClick:()=>i("zinc"),children:"Активировать Цинк через state"}),o.jsx(u,{onClick:()=>i("iron"),children:"Активировать Чугун через state"})]})]})})};p.storyName="SegmentButtonGroup с управлением извне";p.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};var y,g,m;B.parameters={...B.parameters,docs:{...(y=B.parameters)==null?void 0:y.docs,source:{originalSource:`(argTypes: ISegmentButtonGroupProps): ReactNode => {
  return <SegmentButtonGroup {...argTypes}>
      <SegmentButton onClick={action('onClick')}>
        <Typography variant="Body1-Bold" color="var(--steel-90)">
          Сталь
        </Typography>
      </SegmentButton>
      <SegmentButton onClick={action('onClick')}>
        <Typography variant="Body1-Bold" color="var(--steel-90)">
          Цинк
        </Typography>
      </SegmentButton>
      <SegmentButton onClick={action('onClick')}>
        <Typography variant="Body1-Bold" color="var(--steel-90)">
          Чугун
        </Typography>
      </SegmentButton>
    </SegmentButtonGroup>;
}`,...(m=(g=B.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var v,h,x;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`(argTypes: ISegmentButtonGroupProps): ReactNode => {
  return <Box flexDirection="column" gap={12}>
      {Object.values(ESegmentButtonGroupSizes).map((size, index) => <Box key={index} flexDirection="column" gap={8}>
          <Typography variant="Body1-Bold" color="var(--steel-90)">
            {\`Размер \${size} \`}
          </Typography>

          <SegmentButtonGroup size={size} {...argTypes}>
            <SegmentButton onClick={action('onClick')}>
              <Typography variant="Body1-Bold" color="var(--steel-90)">
                Сталь
              </Typography>
            </SegmentButton>
            <SegmentButton onClick={action('onClick')}>
              <Typography variant="Body1-Bold" color="var(--steel-90)">
                Цинк
              </Typography>
            </SegmentButton>
            <SegmentButton onClick={action('onClick')}>
              <Typography variant="Body1-Bold" color="var(--steel-90)">
                Чугун
              </Typography>
            </SegmentButton>
          </SegmentButtonGroup>

          <SegmentButtonGroup size={size} {...argTypes}>
            <SegmentButton onClick={action('onClick')}>
              <Typography variant="Body1-Medium" color="var(--steel-90)">
                Сталь
              </Typography>
            </SegmentButton>
            <SegmentButton onClick={action('onClick')}>
              <Typography variant="Body1-Medium" color="var(--steel-90)">
                Цинк
              </Typography>
            </SegmentButton>
            <SegmentButton onClick={action('onClick')}>
              <Typography variant="Body1-Medium" color="var(--steel-90)">
                Чугун
              </Typography>
            </SegmentButton>
          </SegmentButtonGroup>
        </Box>)}
    </Box>;
}`,...(x=(h=c.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var k,S,j;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`(): ReactNode => {
  return <Box flexDirection="column" gap={24}>
      <Box flexDirection="column" gap={8}>
        <Typography variant="Heading4" color="var(--steel-90)">
          Первая кнопка активна по умолчанию
        </Typography>
        <SegmentButtonGroup>
          <SegmentButton active onClick={action('Сталь clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Сталь
            </Typography>
          </SegmentButton>
          <SegmentButton onClick={action('Цинк clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Цинк
            </Typography>
          </SegmentButton>
          <SegmentButton onClick={action('Чугун clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Чугун
            </Typography>
          </SegmentButton>
        </SegmentButtonGroup>
      </Box>

      <Box flexDirection="column" gap={8}>
        <Typography variant="Heading4" color="var(--steel-90)">
          Средняя кнопка активна по умолчанию
        </Typography>
        <SegmentButtonGroup>
          <SegmentButton onClick={action('Сталь clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Сталь
            </Typography>
          </SegmentButton>
          <SegmentButton active onClick={action('Цинк clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Цинк
            </Typography>
          </SegmentButton>
          <SegmentButton onClick={action('Чугун clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Чугун
            </Typography>
          </SegmentButton>
        </SegmentButtonGroup>
      </Box>

      <Box flexDirection="column" gap={8}>
        <Typography variant="Heading4" color="var(--steel-90)">
          Последняя кнопка активна по умолчанию
        </Typography>
        <SegmentButtonGroup>
          <SegmentButton onClick={action('Сталь clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Сталь
            </Typography>
          </SegmentButton>
          <SegmentButton onClick={action('Цинк clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Цинк
            </Typography>
          </SegmentButton>
          <SegmentButton active onClick={action('Чугун clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Чугун
            </Typography>
          </SegmentButton>
        </SegmentButtonGroup>
      </Box>
    </Box>;
}`,...(j=(S=s.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var T,C,G;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`(): ReactNode => {
  return <Box flexDirection="column" gap={24}>
      <Box flexDirection="column" gap={8}>
        <Typography variant="Heading4" color="var(--steel-90)">
          Вся группа отключена
        </Typography>
        <SegmentButtonGroup disabled>
          <SegmentButton onClick={action('Сталь clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Сталь
            </Typography>
          </SegmentButton>
          <SegmentButton onClick={action('Цинк clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Цинк
            </Typography>
          </SegmentButton>
          <SegmentButton onClick={action('Чугун clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Чугун
            </Typography>
          </SegmentButton>
        </SegmentButtonGroup>
      </Box>

      <Box flexDirection="column" gap={8}>
        <Typography variant="Heading4" color="var(--steel-90)">
          Отдельные кнопки отключены
        </Typography>
        <SegmentButtonGroup>
          <SegmentButton onClick={action('Сталь clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Сталь
            </Typography>
          </SegmentButton>
          <SegmentButton disabled onClick={action('Цинк clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Цинк (отключено)
            </Typography>
          </SegmentButton>
          <SegmentButton onClick={action('Чугун clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Чугун
            </Typography>
          </SegmentButton>
        </SegmentButtonGroup>
      </Box>

      <Box flexDirection="column" gap={8}>
        <Typography variant="Heading4" color="var(--steel-90)">
          Комбинация: активная по умолчанию + отключена одна кнопка
        </Typography>
        <SegmentButtonGroup>
          <SegmentButton active onClick={action('Сталь clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Сталь
            </Typography>
          </SegmentButton>
          <SegmentButton onClick={action('Цинк clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Цинк
            </Typography>
          </SegmentButton>
          <SegmentButton disabled onClick={action('Чугун clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Чугун (отключено)
            </Typography>
          </SegmentButton>
        </SegmentButtonGroup>
      </Box>
    </Box>;
}`,...(G=(C=d.parameters)==null?void 0:C.docs)==null?void 0:G.source}}};var f,D,b;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`(): ReactNode => {
  const [activeButton, setActiveButton] = React.useState<'steel' | 'zinc' | 'iron'>('steel');
  return <Box flexDirection="column" gap={24}>
      <Box flexDirection="column" gap={8}>
        <Typography variant="Heading4" color="var(--steel-90)">
          Управление активной кнопкой извне
        </Typography>
        <Typography variant="Body1-Medium" color="var(--steel-70)">
          Текущая активная: {activeButton === 'steel' ? 'Сталь' : activeButton === 'zinc' ? 'Цинк' : 'Чугун'}
        </Typography>

        <SegmentButtonGroup>
          <SegmentButton active={activeButton === 'steel'} onClick={() => {
          setActiveButton('steel');
          action('Сталь clicked')();
        }}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Сталь
            </Typography>
          </SegmentButton>
          <SegmentButton active={activeButton === 'zinc'} onClick={() => {
          setActiveButton('zinc');
          action('Цинк clicked')();
        }}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Цинк
            </Typography>
          </SegmentButton>
          <SegmentButton active={activeButton === 'iron'} onClick={() => {
          setActiveButton('iron');
          action('Чугун clicked')();
        }}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Чугун
            </Typography>
          </SegmentButton>
        </SegmentButtonGroup>

        <Box flexDirection="row" gap={8} pt={16}>
          <Button onClick={() => setActiveButton('steel')}>Активировать Сталь через state</Button>
          <Button onClick={() => setActiveButton('zinc')}>Активировать Цинк через state</Button>
          <Button onClick={() => setActiveButton('iron')}>Активировать Чугун через state</Button>
        </Box>
      </Box>
    </Box>;
}`,...(b=(D=p.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};const co=["SegmentButtonGroupDefault","SegmentButtonGroupWithTypography","SegmentButtonGroupWithDefaultActive","SegmentButtonGroupDisabled","SegmentButtonGroupControlled"];export{p as SegmentButtonGroupControlled,B as SegmentButtonGroupDefault,d as SegmentButtonGroupDisabled,s as SegmentButtonGroupWithDefaultActive,c as SegmentButtonGroupWithTypography,co as __namedExportsOrder,io as default};
