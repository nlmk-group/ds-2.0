import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as E}from"./index-BcJSXhQi.js";import{B as j,aU as a}from"./TreeList-r95OQsMc.js";import"./generateUUID-DDeHuJRp.js";import"./index-C3pqwiJi.js";import"./index-WHoiTdKD.js";import{B as me}from"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import{T as w}from"./index-DmffzHLE.js";import"./index-BIIyWenB.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-DRazNneG.js";import"./index-C5rKoyII.js";import{O as i,P as L,Q as d,z as ke,R as pe}from"./32-Bdg6aZTc.js";import"./index-ChsGqxH_.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";const De="_wrapper_6a0kf_1",he={wrapper:De},ge=()=>e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(j,{type:"button",onClick:()=>console.log("Edit"),iconButton:e.jsx(ke,{}),variant:"secondary",color:"ghost",size:"s",title:"Edit"}),e.jsx(j,{type:"button",onClick:()=>console.log("Delete"),iconButton:e.jsx(pe,{}),variant:"secondary",color:"ghost",size:"s",title:"Delete"})]}),y=[{key:"0-0",title:"Производство стали",rightSideControls:e.jsx(ge,{}),children:[{key:"0-0-0",title:"Конвертерный цех",children:[{key:"0-0-0-0",title:"Конвертер №1"},{key:"0-0-0-1",title:"Конвертер №2"},{key:"0-0-0-2",title:"МНЛЗ №3"}]},{key:"0-0-1",title:"Электросталеплавильный цех",children:[{key:"0-0-1-0",title:"ДСП №1"},{key:"0-0-1-1",title:"МНЛЗ №4"}]}]},{key:"0-1",title:"Прокатное производство",children:[{key:"0-1-0",title:"Цех горячей прокатки",children:[{key:"0-1-0-0",title:"Стан 2000"},{key:"0-1-0-1",title:"Нагревательные печи"}]},{key:"0-1-1",title:"Цех холодной прокатки",children:[{key:"0-1-1-0",title:"Стан 1400"},{key:"0-1-1-1",title:"Травильная линия"}]}]},{key:"0-2",title:"Вспомогательное производство",children:[{key:"0-2-0",title:"Кислородный цех"},{key:"0-2-1",title:"Энергетический цех"}]}],Te=[{key:"0-0",title:"Производство стали",icon:e.jsx(d,{}),rightSideControls:e.jsx(ge,{}),children:[{key:"0-0-0",title:"Конвертерный цех",icon:e.jsx(d,{}),children:[{key:"0-0-0-0",title:"Конвертер №1",icon:e.jsx(i,{}),children:[]},{key:"0-0-0-1",title:"Конвертер №2 (заблокирован)",icon:e.jsx(L,{}),disabled:!0},{key:"0-0-0-2",title:"МНЛЗ №3 (нельзя перетаскивать)",icon:e.jsx(i,{}),disableDraggable:!0}]},{key:"0-0-1",title:"Электросталеплавильный цех (полностью заблокирован)",icon:e.jsx(L,{}),disabled:!0,children:[{key:"0-0-1-0",title:"ДСП №1",icon:e.jsx(i,{})},{key:"0-0-1-1",title:"МНЛЗ №4",icon:e.jsx(i,{})}]}]},{key:"0-1",title:"Прокатное производство",icon:e.jsx(d,{}),children:[{key:"0-1-0",title:"Цех горячей прокатки",icon:e.jsx(d,{}),children:[{key:"0-1-0-0",title:"Стан 2000",icon:e.jsx(i,{})},{key:"0-1-0-1",title:"Нагревательные печи (нельзя перетаскивать)",icon:e.jsx(i,{}),disableDraggable:!0}]},{key:"0-1-1",title:"Цех холодной прокатки",icon:e.jsx(d,{}),children:[{key:"0-1-1-0",title:"Стан 1400",icon:e.jsx(i,{})},{key:"0-1-1-1",title:"Травильная линия (заблокирована)",icon:e.jsx(L,{}),disabled:!0}]}]},{key:"0-2",title:"Вспомогательное производство",icon:e.jsx(d,{}),disableDraggable:!0,children:[{key:"0-2-0",title:"Кислородный цех",icon:e.jsx(i,{})},{key:"0-2-1",title:"Энергетический цех",icon:e.jsx(i,{})}]}],ue=t=>e.jsx("div",{className:he.wrapper,children:e.jsx(t,{})}),Ue={title:"Components/TreeList/Stories",component:a,decorators:[ue],parameters:{actions:{argTypesRegex:"^on.*"}}},g=t=>{const[l,n]=E.useState(y),r=s=>{console.log("SelectedNodeEvent: ",s)},v=s=>{console.log("onDataAfterDrag: ",s),n(s)},c=s=>{console.log("Drag start event: ",s.event)},o=s=>{console.log("Drag end event; ",s.event)};return e.jsx(a,{data:l,checkable:t.checkable,draggable:t.draggable,rowHeight:t.rowHeight,onSelectedNode:r,onDataAfterDrag:v,onDragStart:c,onDragEnd:o})};g.args={checkable:!0,draggable:!0,rowHeight:"s"};g.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};g.storyName="TreeList по умолчанию";const m=()=>e.jsx(a,{data:y,checkable:!0,rowHeight:"s"});m.storyName="TreeList только с чекбоксами";m.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const k=()=>e.jsx(a,{data:y,draggable:!0,rowHeight:"s"});k.storyName="TreeList с drag-n-drop";k.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const p=()=>e.jsx(a,{data:y,checkableSimple:!0,rowHeight:"s"});p.storyName="TreeList с простыми чекбоксами";p.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const D=()=>e.jsxs(me,{flexDirection:"column",gap:"20px",children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Размер XS"}),e.jsx(a,{data:y,checkable:!0,rowHeight:"xs"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Размер S"}),e.jsx(a,{data:y,checkable:!0,rowHeight:"s"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Размер M"}),e.jsx(a,{data:y,checkable:!0,rowHeight:"m"})]})]});D.storyName="TreeList с разными размерами строк";D.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const h=()=>{const[t,l]=E.useState(Te),n=o=>{console.log("SelectedNodeEvent: ",o)},r=o=>{console.log("onDataAfterDrag: ",o),l(o)},v=o=>{console.log("Drag start event: ",o.event)},c=o=>{console.log("Drag end event: ",o.event)};return e.jsx(a,{data:t,checkable:!0,draggable:!0,rowHeight:"s",onSelectedNode:n,onDataAfterDrag:r,onDragStart:v,onDragEnd:c})};h.storyName="TreeList с комплексным примером";h.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const T=()=>{const t=[{key:"0-0",title:"Папка проекта",icon:e.jsx(d,{}),children:[{key:"0-0-0",title:"Файл документации",icon:e.jsx(i,{})},{key:"0-0-1",title:"Файл конфигурации",icon:e.jsx(i,{})}]},{key:"0-1",title:"Папка с исходным кодом",icon:e.jsx(d,{}),children:[{key:"0-1-0",title:"Главный файл",icon:e.jsx(i,{})}]},{key:"0-2",title:"Узел без иконки (стандартная стрелка)",children:[{key:"0-2-0",title:"Дочерний элемент"}]}];return e.jsx(a,{data:t,rowHeight:"s"})};T.storyName="TreeList с кастомными иконками";T.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const u=()=>{const t=[{key:"0-0",title:"Обычный узел (можно перетаскивать)",children:[{key:"0-0-0",title:"Дочерний узел"},{key:"0-0-1",title:"Еще один дочерний узел"}]},{key:"0-1",title:"Узел с блокировкой перетаскивания",disableDraggable:!0,children:[{key:"0-1-0",title:"Дочерний узел"}]},{key:"0-2",title:"Секция без перетаскивания",disableDraggable:!0,children:[{key:"0-2-0",title:"Обычный дочерний узел (можно перетаскивать)",children:[{key:"0-2-0-0",title:"Внук"}]},{key:"0-2-1",title:"Заблокированный дочерний узел",disableDraggable:!0}]}];return e.jsx(a,{data:t,draggable:!0,rowHeight:"s"})};u.storyName="TreeList с блокировкой перетаскивания";u.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const b=()=>{const t=[{key:"0-0",title:"Обычный узел",children:[{key:"0-0-0",title:"Подчиненный узел"},{key:"0-0-1",title:"Заблокированный узел",disabled:!0}]},{key:"0-1",title:"Полностью заблокированный раздел",disabled:!0,children:[{key:"0-1-0",title:"Дочерний узел 1"},{key:"0-1-1",title:"Дочерний узел 2"}]}];return e.jsx(a,{data:t,checkable:!0,draggable:!0,rowHeight:"s"})};b.storyName="TreeList с заблокированными узлами";b.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const N=()=>{const t=r=>{console.log("onDrop вызван с деталями:"),console.log("- Ключ перетаскиваемого узла:",r.dragNode.key),console.log("- Ключ целевого узла:",r.node.key),console.log("- Позиция сброса:",r.dropPosition),console.log("- Сброшен между узлами:",r.dropToGap),console.log("- Все ключи перетаскиваемых узлов:",r.dragNodesKeys),console.log("- Полный объект события:",r)},l=r=>{console.log("onDataAfterDrag - новые данные:",r)},n=[{key:"0-0",title:"Перетащите меня в другой узел",children:[{key:"0-0-0",title:"Дочерний узел 1"},{key:"0-0-1",title:"Дочерний узел 2"}]},{key:"0-1",title:"Целевой узел для перетаскивания",children:[{key:"0-1-0",title:"Существующий дочерний узел"}]},{key:"0-2",title:"Еще один целевой узел"}];return e.jsx("div",{children:e.jsx(a,{data:n,draggable:!0,rowHeight:"s",onDrop:t,onDataAfterDrag:l})})};N.storyName="TreeList с onDrop callback";N.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const x=()=>{const[t,l]=E.useState([{key:"0",title:"Корневой узел 1",children:[{key:"0-0",title:"Дочерний 1.1"},{key:"0-1",title:"Дочерний 1.2"},{key:"0-2",title:"Дочерний 1.3 с детьми",children:[{key:"0-2-0",title:"Внук 1.3.1"},{key:"0-2-1",title:"Внук 1.3.2"}]}]},{key:"1",title:"Корневой узел 2",children:[{key:"1-0",title:"Дочерний 2.1"},{key:"1-1",title:"Дочерний 2.2"}]},{key:"2",title:"Корневой узел 3 (без детей)"}]),n=r=>{console.log("Обновленные данные после перетаскивания:",r),l(r)};return e.jsx("div",{children:e.jsx(a,{data:t,draggable:!0,sameLevelDragOnly:!0,rowHeight:"s",onDataAfterDrag:n,initialExpandedKeys:["0","1","0-2"]})})};x.storyName="TreeList с ограничением DnD на одном уровне";x.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const S=()=>{const[t]=E.useState([{key:"0",title:"Корневой узел 1",children:[{key:"0-0",title:"Дочерний 1.1"},{key:"0-1",title:"Дочерний 1.2"},{key:"0-2",title:"Дочерний 1.3 с детьми",children:[{key:"0-2-0",title:"Внук 1.3.1"},{key:"0-2-1",title:"Внук 1.3.2"}]}]},{key:"1",title:"Корневой узел 2",children:[{key:"1-0",title:"Дочерний 2.1"},{key:"1-1",title:"Дочерний 2.2"}]},{key:"2",title:"Корневой узел 3 (без детей)"}]),[l,n]=E.useState([]),r=v=>{const c=String(v.currentKey),o=l.includes(c);n(o?s=>s.filter(ye=>ye!==c):s=>[...s,c])};return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:16,padding:16,borderRadius:8,border:"2px solid var(--brand-sapphire-10)"},children:[e.jsx(w,{variant:"Body1-Medium",style:{marginBottom:8},children:"ФИНАЛЬНЫЙ МАССИВ (только реальные клики):"}),e.jsxs(w,{variant:"Body1-Medium",style:{padding:8,borderRadius:4},children:["[",l.join(", "),"]"]})]}),e.jsx(a,{data:t,checkable:!0,checkableSimple:!1,onSelectedNode:r,initialExpandedKeys:["0","1","0-2"]})]})};S.storyName="TreeList - подсчет только реальных кликов";S.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};var I,A,f;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`(argTypes: TTreeListProps): JSX.Element => {
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
}`,...(f=(A=g.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var H,O,C;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:'(): JSX.Element => <TreeList data={DEFAULT_TREE_DATA} checkable rowHeight="s" />',...(C=(O=m.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var _,K,B;k.parameters={...k.parameters,docs:{...(_=k.parameters)==null?void 0:_.docs,source:{originalSource:'(): JSX.Element => <TreeList data={DEFAULT_TREE_DATA} draggable rowHeight="s" />',...(B=(K=k.parameters)==null?void 0:K.docs)==null?void 0:B.source}}};var R,F,X;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:'(): JSX.Element => <TreeList data={DEFAULT_TREE_DATA} checkableSimple rowHeight="s" />',...(X=(F=p.parameters)==null?void 0:F.docs)==null?void 0:X.source}}};var J,U,M;D.parameters={...D.parameters,docs:{...(J=D.parameters)==null?void 0:J.docs,source:{originalSource:`(): JSX.Element => <Box flexDirection="column" gap="20px">
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
  </Box>`,...(M=(U=D.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var W,z,P;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(P=(z=h.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var G,Q,q;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(q=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:q.source}}};var V,Y,Z;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,te;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(te=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ae,oe;N.parameters={...N.parameters,docs:{...(re=N.parameters)==null?void 0:re.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(oe=(ae=N.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var se,ie,le;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(le=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ne,de,ce;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`(): JSX.Element => {
  const [data] = useState<TNodeItem[]>([{
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
  const [clickedOnlyKeys, setClickedOnlyKeys] = useState<string[]>([]);
  const handleSelectedNode = (e: TSelectedNodeEvent) => {
    const clickedKey = String(e.currentKey);
    const wasClicked = clickedOnlyKeys.includes(clickedKey);
    if (wasClicked) {
      setClickedOnlyKeys(prev => prev.filter(key => key !== clickedKey));
    } else {
      setClickedOnlyKeys(prev => [...prev, clickedKey]);
    }
  };
  return <div>
      <div style={{
      marginBottom: 16,
      padding: 16,
      borderRadius: 8,
      border: '2px solid var(--brand-sapphire-10)'
    }}>
        <Typography variant="Body1-Medium" style={{
        marginBottom: 8
      }}>
          ФИНАЛЬНЫЙ МАССИВ (только реальные клики):
        </Typography>
        <Typography variant="Body1-Medium" style={{
        padding: 8,
        borderRadius: 4
      }}>
          [{clickedOnlyKeys.join(', ')}]
        </Typography>
      </div>

      <TreeList data={data} checkable checkableSimple={false} onSelectedNode={handleSelectedNode} initialExpandedKeys={['0', '1', '0-2']} />
    </div>;
}`,...(ce=(de=S.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};const Me=["TreeListDefault","TreeListCheckableOnly","TreeListDraggableOnly","TreeListSimpleCheckboxes","TreeListSizes","TreeListWithEnhancements","TreeListCustomIcons","TreeListDragDisabled","TreeListDisabledNodes","TreeListWithOnDrop","TreeListSameLevelDragOnly","TreeListClickedOnly"];export{m as TreeListCheckableOnly,S as TreeListClickedOnly,T as TreeListCustomIcons,g as TreeListDefault,b as TreeListDisabledNodes,u as TreeListDragDisabled,k as TreeListDraggableOnly,x as TreeListSameLevelDragOnly,p as TreeListSimpleCheckboxes,D as TreeListSizes,h as TreeListWithEnhancements,N as TreeListWithOnDrop,Me as __namedExportsOrder,Ue as default};
