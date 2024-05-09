import{j as r,a as n}from"./jsx-runtime-2xDJh5tt.js";import{B as o}from"./index-DGfD3wI4.js";import{G as u}from"./index-CjrtVycB.js";import{s as x}from"./styles.module-DeLvTIFi.js";import{a as c}from"./argsTypes-CszzgEaZ.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx.m-CH7BE6MN.js";const f=l=>r("div",{style:{minHeight:80},children:l()}),G={title:"Components/Grid/Stories",component:u,decorators:[f],argTypes:c},{Column:p,Row:v}=u,e=l=>r("div",{className:x.wrapper,children:n(u,{...l,children:[r(o,{background:"var(--info-lightblue-200)",borderRadius:4,border:"1px solid var(--info-lightblue-300)",st:{flex:"1"},children:"Контент 1"}),r(o,{background:"var(--info-lightblue-200)",borderRadius:4,border:"1px solid var(--info-lightblue-300)",st:{flex:"1"},children:"Контент 2"}),r(o,{background:"var(--info-lightblue-200)",borderRadius:4,border:"1px solid var(--info-lightblue-300)",st:{flex:"1"},children:"Контент 3"})]})});e.storyName="Grid по умолчанию";e.args={background:"var(--text-grey-200)",borderRadius:4,border:"1px solid var(--text-grey-300)"};const i=l=>r("div",{className:x.wrapper,children:n(u,{...l,children:[n(p,{st:{flex:"1"},background:"var(--spectrum-yellow-100)",border:"1px solid var(--spectrum-yellow-200)",children:[r(o,{st:{flex:"1"},background:"var(--info-lightblue-200)",borderRadius:4,border:"1px solid var(--info-lightblue-300)",children:"Контент 1"}),r(o,{st:{flex:"1"},background:"var(--info-lightblue-200)",borderRadius:4,border:"1px solid var(--info-lightblue-300)",children:"Контент 2"}),r(o,{st:{flex:"1"},background:"var(--info-lightblue-200)",borderRadius:4,border:"1px solid var(--info-lightblue-300)",children:"Контент 3"})]}),n(v,{st:{flex:"1"},background:"var(--spectrum-yellow-50)",border:"1px solid var(--spectrum-yellow-200)",children:[r(o,{st:{flex:"1"},background:"var(--info-lightblue-200)",borderRadius:4,border:"1px solid var(--info-lightblue-300)",children:"Контент 1"}),r(o,{st:{flex:"1"},background:"var(--info-lightblue-200)",borderRadius:4,border:"1px solid var(--info-lightblue-300)",children:"Контент 2"}),r(o,{st:{flex:"1"},background:"var(--info-lightblue-200)",borderRadius:4,border:"1px solid var(--info-lightblue-300)",children:"Контент 3"})]})]})});i.storyName="Grid с разной ориентацией контейнеров";i.args={background:"var(--text-grey-200)",borderRadius:4,border:"1px solid var(--text-grey-300)"};var d,a,s;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`(argTypes: IBox): JSX.Element => {
  return <div className={styles.wrapper}>
      <Grid {...argTypes}>
        <Box background="var(--info-lightblue-200)" borderRadius={4} border="1px solid var(--info-lightblue-300)" st={{
        flex: '1'
      }}>
          Контент 1
        </Box>
        <Box background="var(--info-lightblue-200)" borderRadius={4} border="1px solid var(--info-lightblue-300)" st={{
        flex: '1'
      }}>
          Контент 2
        </Box>
        <Box background="var(--info-lightblue-200)" borderRadius={4} border="1px solid var(--info-lightblue-300)" st={{
        flex: '1'
      }}>
          Контент 3
        </Box>
      </Grid>
    </div>;
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var t,b,g;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`(argTypes: IBox): JSX.Element => {
  return <div className={styles.wrapper}>
      <Grid {...argTypes}>
        <Column st={{
        flex: '1'
      }} background="var(--spectrum-yellow-100)" border="1px solid var(--spectrum-yellow-200)">
          <Box st={{
          flex: '1'
        }} background="var(--info-lightblue-200)" borderRadius={4} border="1px solid var(--info-lightblue-300)">
            Контент 1
          </Box>
          <Box st={{
          flex: '1'
        }} background="var(--info-lightblue-200)" borderRadius={4} border="1px solid var(--info-lightblue-300)">
            Контент 2
          </Box>
          <Box st={{
          flex: '1'
        }} background="var(--info-lightblue-200)" borderRadius={4} border="1px solid var(--info-lightblue-300)">
            Контент 3
          </Box>
        </Column>
        <Row st={{
        flex: '1'
      }} background="var(--spectrum-yellow-50)" border="1px solid var(--spectrum-yellow-200)">
          <Box st={{
          flex: '1'
        }} background="var(--info-lightblue-200)" borderRadius={4} border="1px solid var(--info-lightblue-300)">
            Контент 1
          </Box>
          <Box st={{
          flex: '1'
        }} background="var(--info-lightblue-200)" borderRadius={4} border="1px solid var(--info-lightblue-300)">
            Контент 2
          </Box>
          <Box st={{
          flex: '1'
        }} background="var(--info-lightblue-200)" borderRadius={4} border="1px solid var(--info-lightblue-300)">
            Контент 3
          </Box>
        </Row>
      </Grid>
    </div>;
}`,...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const E=["GridDefault","GridOrientation"];export{e as GridDefault,i as GridOrientation,E as __namedExportsOrder,G as default};
