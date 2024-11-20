import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{S as o,M as j}from"./index-Z14Faoel.js";import"./generateUUID-Dz4mOyMt.js";import"./index-BuHkNwZq.js";import"./index-CiiUx5gY.js";import"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import"./index-qC5wYQgy.js";import"./index-Dxx-yGvP.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-CG5Hm5ah.js";import"./32-QiGXh8Io.js";import"./index-Bnop-kX6.js";import{a as n}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{g as O}from"./styles.module-ox-emdf8.js";import{a as y,D as N,S as h,b,c as _}from"./constants-CJM8CEMY.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./index-CT8gBKwQ.js";import"./v4-CQkTLCs1.js";const f=e=>t.jsx("div",{className:O.wrapper,children:t.jsx(e,{})}),Z={title:"Components/SegmentButtonGroup/Stories",component:o,decorators:[f],argTypes:y},r=e=>t.jsxs(o,{...e,children:[t.jsx(o.Button,{onClick:n("onClick"),children:"Печенье"}),t.jsx(o.Button,{onClick:n("onClick"),children:"Торты"}),t.jsx(o.Button,{onClick:n("onClick"),children:"Конфеты"})]});r.storyName=N;const u=e=>t.jsxs(o,{compact:!0,...e,children:[t.jsx(o.Button,{onClick:n("onClick"),children:"Печенье"}),t.jsx(o.Button,{onClick:n("onClick"),children:"Торты"}),t.jsx(o.Button,{onClick:n("onClick"),children:"Конфеты"})]});u.storyName=h;const c=e=>t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:Object.values(j).map((s,p)=>t.jsxs(o,{color:s,...e,children:[t.jsx(o.Button,{onClick:n("onClick"),children:"Печенье"}),t.jsx(o.Button,{onClick:n("onClick"),children:"Торты"}),t.jsx(o.Button,{onClick:n("onClick"),children:"Конфеты"})]},p))});c.storyName=b;const i=e=>t.jsx(o,{...e,children:Object.values(j).map((s,p)=>t.jsx(o.Button,{color:s,onClick:n("onClick"),children:p},p))});i.storyName=_;var a,m,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`(argTypes: ISegmentButtonGroup): ReactNode => {
  return <SegmentButtonGroup {...argTypes}>
      <SegmentButtonGroup.Button onClick={action('onClick')}>Печенье</SegmentButtonGroup.Button>
      <SegmentButtonGroup.Button onClick={action('onClick')}>Торты</SegmentButtonGroup.Button>
      <SegmentButtonGroup.Button onClick={action('onClick')}>Конфеты</SegmentButtonGroup.Button>
    </SegmentButtonGroup>;
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var B,g,C;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`(argTypes: ISegmentButtonGroup): ReactNode => {
  return <SegmentButtonGroup compact {...argTypes}>
      <SegmentButtonGroup.Button onClick={action('onClick')}>Печенье</SegmentButtonGroup.Button>
      <SegmentButtonGroup.Button onClick={action('onClick')}>Торты</SegmentButtonGroup.Button>
      <SegmentButtonGroup.Button onClick={action('onClick')}>Конфеты</SegmentButtonGroup.Button>
    </SegmentButtonGroup>;
}`,...(C=(g=u.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var S,G,d;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`(argTypes: ISegmentButtonGroup): ReactNode => {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      {Object.values(buttonColor).map((color: buttonColor, index: number) => <SegmentButtonGroup color={color} key={index} {...argTypes}>
          <SegmentButtonGroup.Button onClick={action('onClick')}>Печенье</SegmentButtonGroup.Button>
          <SegmentButtonGroup.Button onClick={action('onClick')}>Торты</SegmentButtonGroup.Button>
          <SegmentButtonGroup.Button onClick={action('onClick')}>Конфеты</SegmentButtonGroup.Button>
        </SegmentButtonGroup>)}
    </div>;
}`,...(d=(G=c.parameters)==null?void 0:G.docs)==null?void 0:d.source}}};var k,x,T;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`(argTypes: ISegmentButtonGroup): ReactNode => {
  return <SegmentButtonGroup {...argTypes}>
      {Object.values(buttonColor).map((color: buttonColor, index: number) => <SegmentButtonGroup.Button color={color} key={index} onClick={action('onClick')}>
          {index}
        </SegmentButtonGroup.Button>)}
    </SegmentButtonGroup>;
}`,...(T=(x=i.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};const $=["DefaultBtnGroup","BtnGroupCompact","BtnGroupOptions","BtnGroupOptionsVariable"];export{u as BtnGroupCompact,c as BtnGroupOptions,i as BtnGroupOptionsVariable,r as DefaultBtnGroup,$ as __namedExportsOrder,Z as default};
