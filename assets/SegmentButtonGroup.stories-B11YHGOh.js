import{j as t}from"./jsx-runtime-DFnSfiB4.js";import{S as o,y as j}from"./index-LmI_Dv35.js";import"./generateUUID-DDiDEiZj.js";import"./index-BUicYAu_.js";import"./index-CSbymPMC.js";import"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import"./index-ehXB0alm.js";import"./index-BKAatnfy.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-CLzAcar6.js";import"./32-sVrGXRAZ.js";import"./index-DQ2WTIsS.js";import{a as n}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{g as y}from"./styles.module-DyNiVTaI.js";import{a as O,D as N,S as h,b,c as _}from"./constants-DTM9clwo.js";import"./clsx-B-dksMZM.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-oHtgdQEu.js";import"./index-BKbm6zW0.js";import"./v4-CQkTLCs1.js";const f=e=>t.jsx("div",{className:y.wrapper,children:t.jsx(e,{})}),$={title:"Components/SegmentButtonGroup/Stories",component:o,decorators:[f],argTypes:O},r=e=>t.jsxs(o,{...e,children:[t.jsx(o.Button,{onClick:n("onClick"),children:"Печенье"}),t.jsx(o.Button,{onClick:n("onClick"),children:"Торты"}),t.jsx(o.Button,{onClick:n("onClick"),children:"Конфеты"})]});r.storyName=N;const u=e=>t.jsxs(o,{compact:!0,...e,children:[t.jsx(o.Button,{onClick:n("onClick"),children:"Печенье"}),t.jsx(o.Button,{onClick:n("onClick"),children:"Торты"}),t.jsx(o.Button,{onClick:n("onClick"),children:"Конфеты"})]});u.storyName=h;const c=e=>t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:Object.values(j).map((s,p)=>t.jsxs(o,{color:s,...e,children:[t.jsx(o.Button,{onClick:n("onClick"),children:"Печенье"}),t.jsx(o.Button,{onClick:n("onClick"),children:"Торты"}),t.jsx(o.Button,{onClick:n("onClick"),children:"Конфеты"})]},p))});c.storyName=b;const i=e=>t.jsx(o,{...e,children:Object.values(j).map((s,p)=>t.jsx(o.Button,{color:s,onClick:n("onClick"),children:p},p))});i.storyName=_;var a,m,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`(argTypes: ISegmentButtonGroup): ReactNode => {
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
}`,...(T=(x=i.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};const tt=["DefaultBtnGroup","BtnGroupCompact","BtnGroupOptions","BtnGroupOptionsVariable"];export{u as BtnGroupCompact,c as BtnGroupOptions,i as BtnGroupOptionsVariable,r as DefaultBtnGroup,tt as __namedExportsOrder,$ as default};
