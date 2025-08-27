import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as v}from"./index-BcJSXhQi.js";import{B as L,aU as a}from"./TreeList-BcCsA96L.js";import"./generateUUID-Cm0X4XRy.js";import"./index-cHpEh_mw.js";import"./index-WHoiTdKD.js";import{B as ne}from"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-CQem5UP1.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-bO57duG5.js";import"./index-C5rKoyII.js";import{O as o,P as S,Q as n,z as le,R as ce}from"./32-CkUgnIrf.js";import"./index-ChsGqxH_.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";const de="_wrapper_6a0kf_1",ge={wrapper:de},ie=()=>e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(L,{type:"button",onClick:()=>console.log("Edit"),iconButton:e.jsx(le,{}),variant:"secondary",color:"ghost",size:"s",title:"Edit"}),e.jsx(L,{type:"button",onClick:()=>console.log("Delete"),iconButton:e.jsx(ce,{}),variant:"secondary",color:"ghost",size:"s",title:"Delete"})]}),g=[{key:"0-0",title:"Производство стали",rightSideControls:e.jsx(ie,{}),children:[{key:"0-0-0",title:"Конвертерный цех",children:[{key:"0-0-0-0",title:"Конвертер №1"},{key:"0-0-0-1",title:"Конвертер №2"},{key:"0-0-0-2",title:"МНЛЗ №3"}]},{key:"0-0-1",title:"Электросталеплавильный цех",children:[{key:"0-0-1-0",title:"ДСП №1"},{key:"0-0-1-1",title:"МНЛЗ №4"}]}]},{key:"0-1",title:"Прокатное производство",children:[{key:"0-1-0",title:"Цех горячей прокатки",children:[{key:"0-1-0-0",title:"Стан 2000"},{key:"0-1-0-1",title:"Нагревательные печи"}]},{key:"0-1-1",title:"Цех холодной прокатки",children:[{key:"0-1-1-0",title:"Стан 1400"},{key:"0-1-1-1",title:"Травильная линия"}]}]},{key:"0-2",title:"Вспомогательное производство",children:[{key:"0-2-0",title:"Кислородный цех"},{key:"0-2-1",title:"Энергетический цех"}]}],De=[{key:"0-0",title:"Производство стали",icon:e.jsx(n,{}),rightSideControls:e.jsx(ie,{}),children:[{key:"0-0-0",title:"Конвертерный цех",icon:e.jsx(n,{}),children:[{key:"0-0-0-0",title:"Конвертер №1",icon:e.jsx(o,{}),children:[]},{key:"0-0-0-1",title:"Конвертер №2 (заблокирован)",icon:e.jsx(S,{}),disabled:!0},{key:"0-0-0-2",title:"МНЛЗ №3 (нельзя перетаскивать)",icon:e.jsx(o,{}),disableDraggable:!0}]},{key:"0-0-1",title:"Электросталеплавильный цех (полностью заблокирован)",icon:e.jsx(S,{}),disabled:!0,children:[{key:"0-0-1-0",title:"ДСП №1",icon:e.jsx(o,{})},{key:"0-0-1-1",title:"МНЛЗ №4",icon:e.jsx(o,{})}]}]},{key:"0-1",title:"Прокатное производство",icon:e.jsx(n,{}),children:[{key:"0-1-0",title:"Цех горячей прокатки",icon:e.jsx(n,{}),children:[{key:"0-1-0-0",title:"Стан 2000",icon:e.jsx(o,{})},{key:"0-1-0-1",title:"Нагревательные печи (нельзя перетаскивать)",icon:e.jsx(o,{}),disableDraggable:!0}]},{key:"0-1-1",title:"Цех холодной прокатки",icon:e.jsx(n,{}),children:[{key:"0-1-1-0",title:"Стан 1400",icon:e.jsx(o,{})},{key:"0-1-1-1",title:"Травильная линия (заблокирована)",icon:e.jsx(S,{}),disabled:!0}]}]},{key:"0-2",title:"Вспомогательное производство",icon:e.jsx(n,{}),disableDraggable:!0,children:[{key:"0-2-0",title:"Кислородный цех",icon:e.jsx(o,{})},{key:"0-2-1",title:"Энергетический цех",icon:e.jsx(o,{})}]}],me=t=>e.jsx("div",{className:ge.wrapper,children:e.jsx(t,{})}),Fe={title:"Components/TreeList/Stories",component:a,decorators:[me],parameters:{actions:{argTypesRegex:"^on.*"}}},d=t=>{const[l,c]=v.useState(g),r=i=>{console.log("SelectedNodeEvent: ",i)},E=i=>{console.log("onDataAfterDrag: ",i),c(i)},N=i=>{console.log("Drag start event: ",i.event)},s=i=>{console.log("Drag end event; ",i.event)};return e.jsx(a,{data:l,checkable:t.checkable,draggable:t.draggable,rowHeight:t.rowHeight,onSelectedNode:r,onDataAfterDrag:E,onDragStart:N,onDragEnd:s})};d.args={checkable:!0,draggable:!0,rowHeight:"s"};d.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};d.storyName="TreeList по умолчанию";const D=()=>e.jsx(a,{data:g,checkable:!0,rowHeight:"s"});D.storyName="TreeList только с чекбоксами";D.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const m=()=>e.jsx(a,{data:g,draggable:!0,rowHeight:"s"});m.storyName="TreeList с drag-n-drop";m.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const y=()=>e.jsx(a,{data:g,checkableSimple:!0,rowHeight:"s"});y.storyName="TreeList с простыми чекбоксами";y.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const p=()=>e.jsxs(ne,{flexDirection:"column",gap:"20px",children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Размер XS"}),e.jsx(a,{data:g,checkable:!0,rowHeight:"xs"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Размер S"}),e.jsx(a,{data:g,checkable:!0,rowHeight:"s"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Размер M"}),e.jsx(a,{data:g,checkable:!0,rowHeight:"m"})]})]});p.storyName="TreeList с разными размерами строк";p.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const k=()=>{const[t,l]=v.useState(De),c=s=>{console.log("SelectedNodeEvent: ",s)},r=s=>{console.log("onDataAfterDrag: ",s),l(s)},E=s=>{console.log("Drag start event: ",s.event)},N=s=>{console.log("Drag end event: ",s.event)};return e.jsx(a,{data:t,checkable:!0,draggable:!0,rowHeight:"s",onSelectedNode:c,onDataAfterDrag:r,onDragStart:E,onDragEnd:N})};k.storyName="TreeList с комплексным примером";k.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const h=()=>{const t=[{key:"0-0",title:"Папка проекта",icon:e.jsx(n,{}),children:[{key:"0-0-0",title:"Файл документации",icon:e.jsx(o,{})},{key:"0-0-1",title:"Файл конфигурации",icon:e.jsx(o,{})}]},{key:"0-1",title:"Папка с исходным кодом",icon:e.jsx(n,{}),children:[{key:"0-1-0",title:"Главный файл",icon:e.jsx(o,{})}]},{key:"0-2",title:"Узел без иконки (стандартная стрелка)",children:[{key:"0-2-0",title:"Дочерний элемент"}]}];return e.jsx(a,{data:t,rowHeight:"s"})};h.storyName="TreeList с кастомными иконками";h.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const T=()=>{const t=[{key:"0-0",title:"Обычный узел (можно перетаскивать)",children:[{key:"0-0-0",title:"Дочерний узел"},{key:"0-0-1",title:"Еще один дочерний узел"}]},{key:"0-1",title:"Узел с блокировкой перетаскивания",disableDraggable:!0,children:[{key:"0-1-0",title:"Дочерний узел"}]},{key:"0-2",title:"Секция без перетаскивания",disableDraggable:!0,children:[{key:"0-2-0",title:"Обычный дочерний узел (можно перетаскивать)",children:[{key:"0-2-0-0",title:"Внук"}]},{key:"0-2-1",title:"Заблокированный дочерний узел",disableDraggable:!0}]}];return e.jsx(a,{data:t,draggable:!0,rowHeight:"s"})};T.storyName="TreeList с блокировкой перетаскивания";T.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const u=()=>{const t=[{key:"0-0",title:"Обычный узел",children:[{key:"0-0-0",title:"Подчиненный узел"},{key:"0-0-1",title:"Заблокированный узел",disabled:!0}]},{key:"0-1",title:"Полностью заблокированный раздел",disabled:!0,children:[{key:"0-1-0",title:"Дочерний узел 1"},{key:"0-1-1",title:"Дочерний узел 2"}]}];return e.jsx(a,{data:t,checkable:!0,draggable:!0,rowHeight:"s"})};u.storyName="TreeList с заблокированными узлами";u.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const b=()=>{const t=r=>{console.log("onDrop вызван с деталями:"),console.log("- Ключ перетаскиваемого узла:",r.dragNode.key),console.log("- Ключ целевого узла:",r.node.key),console.log("- Позиция сброса:",r.dropPosition),console.log("- Сброшен между узлами:",r.dropToGap),console.log("- Все ключи перетаскиваемых узлов:",r.dragNodesKeys),console.log("- Полный объект события:",r)},l=r=>{console.log("onDataAfterDrag - новые данные:",r)},c=[{key:"0-0",title:"Перетащите меня в другой узел",children:[{key:"0-0-0",title:"Дочерний узел 1"},{key:"0-0-1",title:"Дочерний узел 2"}]},{key:"0-1",title:"Целевой узел для перетаскивания",children:[{key:"0-1-0",title:"Существующий дочерний узел"}]},{key:"0-2",title:"Еще один целевой узел"}];return e.jsx("div",{children:e.jsx(a,{data:c,draggable:!0,rowHeight:"s",onDrop:t,onDataAfterDrag:l})})};b.storyName="TreeList с onDrop callback";b.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const x=()=>{const[t,l]=v.useState([{key:"0",title:"Корневой узел 1",children:[{key:"0-0",title:"Дочерний 1.1"},{key:"0-1",title:"Дочерний 1.2"},{key:"0-2",title:"Дочерний 1.3 с детьми",children:[{key:"0-2-0",title:"Внук 1.3.1"},{key:"0-2-1",title:"Внук 1.3.2"}]}]},{key:"1",title:"Корневой узел 2",children:[{key:"1-0",title:"Дочерний 2.1"},{key:"1-1",title:"Дочерний 2.2"}]},{key:"2",title:"Корневой узел 3 (без детей)"}]),c=r=>{console.log("Обновленные данные после перетаскивания:",r),l(r)};return e.jsx("div",{children:e.jsx(a,{data:t,draggable:!0,sameLevelDragOnly:!0,rowHeight:"s",onDataAfterDrag:c,initialExpandedKeys:["0","1","0-2"]})})};x.storyName="TreeList с ограничением DnD на одном уровне";x.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};var j,w,A;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`(argTypes: TTreeListProps): JSX.Element => {
  const [data, setData] = useState(DEFAULT_TREE_DATA);
  const onSelectedNode = (e: TSelectedNodeEvent) => {
    console.log('SelectedNodeEvent: ', e);
  };
  const onDataAfterDrag = (newData: TNodeItem[]) => {
    console.log('onDataAfterDrag: ', newData);
    setData(newData);
  };
  const onDragStart = (e: TDragEvent) => {
    console.log('Drag start event: ', e.event);
  };
  const onDragEnd = (e: TDragEvent) => {
    console.log('Drag end event; ', e.event);
  };
  return <TreeList data={data} checkable={argTypes.checkable} draggable={argTypes.draggable} rowHeight={argTypes.rowHeight} onSelectedNode={onSelectedNode} onDataAfterDrag={onDataAfterDrag} onDragStart={onDragStart} onDragEnd={onDragEnd} />;
}`,...(A=(w=d.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var I,f,H;D.parameters={...D.parameters,docs:{...(I=D.parameters)==null?void 0:I.docs,source:{originalSource:'(): JSX.Element => <TreeList data={DEFAULT_TREE_DATA} checkable rowHeight="s" />',...(H=(f=D.parameters)==null?void 0:f.docs)==null?void 0:H.source}}};var _,C,O;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:'(): JSX.Element => <TreeList data={DEFAULT_TREE_DATA} draggable rowHeight="s" />',...(O=(C=m.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var F,R,X;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:'(): JSX.Element => <TreeList data={DEFAULT_TREE_DATA} checkableSimple rowHeight="s" />',...(X=(R=y.parameters)==null?void 0:R.docs)==null?void 0:X.source}}};var J,B,U;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`(): JSX.Element => <Box flexDirection="column" gap="20px">
    <div>
      <h4>Размер XS</h4>
      <TreeList data={DEFAULT_TREE_DATA} checkable rowHeight="xs" />
    </div>
    <div>
      <h4>Размер S</h4>
      <TreeList data={DEFAULT_TREE_DATA} checkable rowHeight="s" />
    </div>
    <div>
      <h4>Размер M</h4>
      <TreeList data={DEFAULT_TREE_DATA} checkable rowHeight="m" />
    </div>
  </Box>`,...(U=(B=p.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var W,z,P;k.parameters={...k.parameters,docs:{...(W=k.parameters)==null?void 0:W.docs,source:{originalSource:`(): JSX.Element => {
  const [data, setData] = useState(ENHANCED_TREE_DATA);
  const onSelectedNode = (e: TSelectedNodeEvent) => {
    console.log('SelectedNodeEvent: ', e);
  };
  const onDataAfterDrag = (newData: TNodeItem[]) => {
    console.log('onDataAfterDrag: ', newData);
    setData(newData);
  };
  const onDragStart = (e: TDragEvent) => {
    console.log('Drag start event: ', e.event);
  };
  const onDragEnd = (e: TDragEvent) => {
    console.log('Drag end event: ', e.event);
  };
  return <TreeList data={data} checkable draggable rowHeight="s" onSelectedNode={onSelectedNode} onDataAfterDrag={onDataAfterDrag} onDragStart={onDragStart} onDragEnd={onDragEnd} />;
}`,...(P=(z=k.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var K,G,M;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`(): JSX.Element => {
  const iconsData: TNodeItem[] = [{
    key: '0-0',
    title: 'Папка проекта',
    icon: <IconFolderFilled24 />,
    children: [{
      key: '0-0-0',
      title: 'Файл документации',
      icon: <IconCircleOutlined24 />
    }, {
      key: '0-0-1',
      title: 'Файл конфигурации',
      icon: <IconCircleOutlined24 />
    }]
  }, {
    key: '0-1',
    title: 'Папка с исходным кодом',
    icon: <IconFolderFilled24 />,
    children: [{
      key: '0-1-0',
      title: 'Главный файл',
      icon: <IconCircleOutlined24 />
    }]
  }, {
    key: '0-2',
    title: 'Узел без иконки (стандартная стрелка)',
    children: [{
      key: '0-2-0',
      title: 'Дочерний элемент'
    }]
  }];
  return <TreeList data={iconsData} rowHeight="s" />;
}`,...(M=(G=h.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var Q,q,V;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`(): JSX.Element => {
  const dragDisabledData: TNodeItem[] = [{
    key: '0-0',
    title: 'Обычный узел (можно перетаскивать)',
    children: [{
      key: '0-0-0',
      title: 'Дочерний узел'
    } as TNodeItem, {
      key: '0-0-1',
      title: 'Еще один дочерний узел'
    } as TNodeItem]
  }, {
    key: '0-1',
    title: 'Узел с блокировкой перетаскивания',
    disableDraggable: true,
    children: [{
      key: '0-1-0',
      title: 'Дочерний узел'
    } as TNodeItem]
  }, {
    key: '0-2',
    title: 'Секция без перетаскивания',
    disableDraggable: true,
    children: [{
      key: '0-2-0',
      title: 'Обычный дочерний узел (можно перетаскивать)',
      children: [{
        key: '0-2-0-0',
        title: 'Внук'
      } as TNodeItem]
    } as TNodeItem, {
      key: '0-2-1',
      title: 'Заблокированный дочерний узел',
      disableDraggable: true
    } as TNodeItem]
  }];
  return <TreeList data={dragDisabledData} draggable rowHeight="s" />;
}`,...(V=(q=T.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var Y,Z,$;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`(): JSX.Element => {
  const disabledData: TNodeItem[] = [{
    key: '0-0',
    title: 'Обычный узел',
    children: [{
      key: '0-0-0',
      title: 'Подчиненный узел'
    }, {
      key: '0-0-1',
      title: 'Заблокированный узел',
      disabled: true
    }]
  }, {
    key: '0-1',
    title: 'Полностью заблокированный раздел',
    disabled: true,
    children: [{
      key: '0-1-0',
      title: 'Дочерний узел 1'
    }, {
      key: '0-1-1',
      title: 'Дочерний узел 2'
    }]
  }];
  return <TreeList data={disabledData} checkable draggable rowHeight="s" />;
}`,...($=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,re;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`(): JSX.Element => {
  const onDrop = (dropEvent: TDropEvent) => {
    console.log('onDrop вызван с деталями:');
    console.log('- Ключ перетаскиваемого узла:', dropEvent.dragNode.key);
    console.log('- Ключ целевого узла:', dropEvent.node.key);
    console.log('- Позиция сброса:', dropEvent.dropPosition);
    console.log('- Сброшен между узлами:', dropEvent.dropToGap);
    console.log('- Все ключи перетаскиваемых узлов:', dropEvent.dragNodesKeys);
    console.log('- Полный объект события:', dropEvent);
  };
  const onDataAfterDrag = (newData: TNodeItem[]) => {
    console.log('onDataAfterDrag - новые данные:', newData);
  };
  const simpleData: TNodeItem[] = [{
    key: '0-0',
    title: 'Перетащите меня в другой узел',
    children: [{
      key: '0-0-0',
      title: 'Дочерний узел 1'
    } as TNodeItem, {
      key: '0-0-1',
      title: 'Дочерний узел 2'
    } as TNodeItem]
  } as TNodeItem, {
    key: '0-1',
    title: 'Целевой узел для перетаскивания',
    children: [{
      key: '0-1-0',
      title: 'Существующий дочерний узел'
    } as TNodeItem]
  } as TNodeItem, {
    key: '0-2',
    title: 'Еще один целевой узел'
  } as TNodeItem];
  return <div>
      <TreeList data={simpleData} draggable rowHeight="s" onDrop={onDrop} onDataAfterDrag={onDataAfterDrag} />
    </div>;
}`,...(re=(te=b.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ae,oe,se;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`(): JSX.Element => {
  const [data, setData] = useState<TNodeItem[]>([{
    key: '0',
    title: 'Корневой узел 1',
    children: [{
      key: '0-0',
      title: 'Дочерний 1.1'
    } as TNodeItem, {
      key: '0-1',
      title: 'Дочерний 1.2'
    } as TNodeItem, {
      key: '0-2',
      title: 'Дочерний 1.3 с детьми',
      children: [{
        key: '0-2-0',
        title: 'Внук 1.3.1'
      } as TNodeItem, {
        key: '0-2-1',
        title: 'Внук 1.3.2'
      } as TNodeItem]
    } as TNodeItem]
  } as TNodeItem, {
    key: '1',
    title: 'Корневой узел 2',
    children: [{
      key: '1-0',
      title: 'Дочерний 2.1'
    } as TNodeItem, {
      key: '1-1',
      title: 'Дочерний 2.2'
    } as TNodeItem]
  } as TNodeItem, {
    key: '2',
    title: 'Корневой узел 3 (без детей)'
  } as TNodeItem]);
  const onDataAfterDrag = (newData: TNodeItem[]) => {
    console.log('Обновленные данные после перетаскивания:', newData);
    setData(newData);
  };
  return <div>
      <TreeList data={data} draggable sameLevelDragOnly rowHeight="s" onDataAfterDrag={onDataAfterDrag} initialExpandedKeys={['0', '1', '0-2']} />
    </div>;
}`,...(se=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};const Re=["TreeListDefault","TreeListCheckableOnly","TreeListDraggableOnly","TreeListSimpleCheckboxes","TreeListSizes","TreeListWithEnhancements","TreeListCustomIcons","TreeListDragDisabled","TreeListDisabledNodes","TreeListWithOnDrop","TreeListSameLevelDragOnly"];export{D as TreeListCheckableOnly,h as TreeListCustomIcons,d as TreeListDefault,u as TreeListDisabledNodes,T as TreeListDragDisabled,m as TreeListDraggableOnly,x as TreeListSameLevelDragOnly,y as TreeListSimpleCheckboxes,p as TreeListSizes,k as TreeListWithEnhancements,b as TreeListWithOnDrop,Re as __namedExportsOrder,Fe as default};
