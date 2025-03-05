import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{r as H}from"./index-Bnop-kX6.js";import{B as d,aP as t}from"./TreeList-DCE8PUnW.js";import"./generateUUID-CKWu6hxV.js";import"./index-GIq1hJAH.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-BDwZaM9Z.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-8bMf8-rB.js";import"./index-DokmLR-l.js";import{N as f,O as N}from"./32-DOo0Pdng.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-B5g4YLzC.js";const R="_wrapper_1p2mb_1",C={wrapper:R},F=()=>e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(d,{onClick:()=>console.log("Edit"),iconButton:e.jsx(f,{}),variant:"secondary",color:"ghost",size:"s",title:"Edit"}),e.jsx(d,{onClick:()=>console.log("Delete"),iconButton:e.jsx(N,{}),variant:"secondary",color:"ghost",size:"s",title:"Delete"})]}),s=[{key:"0-0",title:"Производство стали",rightSideControls:e.jsx(F,{}),children:[{key:"0-0-0",title:"Конвертерный цех",children:[{key:"0-0-0-0",title:"Конвертер №1",children:[]},{key:"0-0-0-1",title:"Конвертер №2"},{key:"0-0-0-2",title:"МНЛЗ №3"}]},{key:"0-0-1",title:"Электросталеплавильный цех",children:[{key:"0-0-1-0",title:"ДСП №1"},{key:"0-0-1-1",title:"МНЛЗ №4"}]}]},{key:"0-1",title:"Прокатное производство",children:[{key:"0-1-0",title:"Цех горячей прокатки",children:[{key:"0-1-0-0",title:"Стан 2000"},{key:"0-1-0-1",title:"Нагревательные печи"}]},{key:"0-1-1",title:"Цех холодной прокатки",children:[{key:"0-1-1-0",title:"Стан 1400"},{key:"0-1-1-1",title:"Травильная линия"}]}]},{key:"0-2",title:"Вспомогательное производство",children:[{key:"0-2-0",title:"Кислородный цех"},{key:"0-2-1",title:"Энергетический цех"}]}],O=c=>e.jsx("div",{className:C.wrapper,children:e.jsx(c,{})}),se={title:"Components/TreeList/Stories",component:t,decorators:[O],parameters:{actions:{argTypesRegex:"^on.*"}}},r=c=>{const[A,j]=H.useState(s),v=n=>{console.log("SelectedNodeEvent: ",n)},_=n=>{console.log("onDataAfterDrag: ",n),j(n)};return e.jsx(t,{data:A,checkable:c.checkable,draggable:c.draggable,rowHeight:c.rowHeight,onSelectedNode:v,onDataAfterDrag:_})};r.args={checkable:!0,draggable:!0,rowHeight:"s"};r.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};r.storyName="TreeList по умолчанию";const a=()=>e.jsx(t,{data:s,checkable:!0,rowHeight:"s"});a.storyName="TreeList только с чекбоксами";a.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const o=()=>e.jsx(t,{data:s,draggable:!0,rowHeight:"s"});o.storyName="TreeList с drag-n-drop";o.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const i=()=>e.jsx(t,{data:s,checkableSimple:!0,rowHeight:"s"});i.storyName="TreeList с простыми чекбоксами";i.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const l=()=>e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsxs("div",{style:{width:"300px"},children:[e.jsx("h4",{children:"Размер XS"}),e.jsx(t,{data:s,checkable:!0,rowHeight:"xs"})]}),e.jsxs("div",{style:{width:"300px"},children:[e.jsx("h4",{children:"Размер S"}),e.jsx(t,{data:s,checkable:!0,rowHeight:"s"})]}),e.jsxs("div",{style:{width:"300px"},children:[e.jsx("h4",{children:"Размер M"}),e.jsx(t,{data:s,checkable:!0,rowHeight:"m"})]})]});l.storyName="TreeList с разными размерами строк";l.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};var p,h,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`(argTypes: TTreeListProps): JSX.Element => {
  const [data, setData] = useState(DEFAULT_TREE_DATA);
  const onSelectedNode = (e: TSelectedNodeEvent) => {
    console.log('SelectedNodeEvent: ', e);
  };
  const onDataAfterDrag = (newData: TNodeItem[]) => {
    console.log('onDataAfterDrag: ', newData);
    setData(newData);
  };
  return <TreeList data={data} checkable={argTypes.checkable} draggable={argTypes.draggable} rowHeight={argTypes.rowHeight} onSelectedNode={onSelectedNode} onDataAfterDrag={onDataAfterDrag} />;
}`,...(m=(h=r.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var g,T,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:'(): JSX.Element => <TreeList data={DEFAULT_TREE_DATA} checkable rowHeight="s" />',...(u=(T=a.parameters)==null?void 0:T.docs)==null?void 0:u.source}}};var y,x,D;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:'(): JSX.Element => <TreeList data={DEFAULT_TREE_DATA} draggable rowHeight="s" />',...(D=(x=o.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var b,k,E;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:'(): JSX.Element => <TreeList data={DEFAULT_TREE_DATA} checkableSimple rowHeight="s" />',...(E=(k=i.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var w,L,S;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`(): JSX.Element => <div style={{
  display: 'flex',
  gap: '20px'
}}>
    <div style={{
    width: '300px'
  }}>
      <h4>Размер XS</h4>
      <TreeList data={DEFAULT_TREE_DATA} checkable rowHeight="xs" />
    </div>
    <div style={{
    width: '300px'
  }}>
      <h4>Размер S</h4>
      <TreeList data={DEFAULT_TREE_DATA} checkable rowHeight="s" />
    </div>
    <div style={{
    width: '300px'
  }}>
      <h4>Размер M</h4>
      <TreeList data={DEFAULT_TREE_DATA} checkable rowHeight="m" />
    </div>
  </div>`,...(S=(L=l.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const ae=["TreeListDefault","TreeListCheckableOnly","TreeListDraggableOnly","TreeListSimpleCheckboxes","TreeListSizes"];export{a as TreeListCheckableOnly,r as TreeListDefault,o as TreeListDraggableOnly,i as TreeListSimpleCheckboxes,l as TreeListSizes,ae as __namedExportsOrder,se as default};
