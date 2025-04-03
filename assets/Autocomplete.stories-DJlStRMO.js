import{j as o}from"./jsx-runtime-BRNY0I4F.js";import{r as t}from"./index-Bnop-kX6.js";import{b as m}from"./TreeList-BR3jFxI-.js";import"./generateUUID-DcAM5OoX.js";import"./index-BtfGMBzk.js";import"./index-DppSdhCO.js";import{B as R}from"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import{T as I}from"./index-qC5wYQgy.js";import"./index-L_UGJClr.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-nqntSJSg.js";import"./index-DokmLR-l.js";import"./32-X262ygjI.js";import{g as q}from"./styles.module-ox-emdf8.js";import{a as $}from"./argsTypes-DOjiRLQR.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-B5g4YLzC.js";const c=[{id:1,value:"blast_furnace",label:"Доменная печь"},{id:2,value:"converter",label:"Конвертер"},{id:3,value:"rolling_mill",label:"Прокатный стан"},{id:4,value:"sinter_plant",label:"Агломерационная фабрика"},{id:5,value:"coke_plant",label:"Коксовая батарея"},{id:6,value:"steel_ladle",label:"Сталеразливочный ковш"},{id:7,value:"continuous_casting",label:"Машина непрерывного литья"},{id:8,value:"electric_furnace",label:"Электродуговая печь"},{id:9,value:"oxygen_plant",label:"Кислородная станция"},{id:10,value:"heat_treatment",label:"Термическая обработка"}],F=t.createContext({}),H=({children:e})=>o.jsx(F.Provider,{value:{},children:e}),K=e=>o.jsx("div",{className:q.wrapper,style:{padding:"50px"},children:e()}),he={title:"Components/Autocomplete/Stories",component:m,argTypes:$,decorators:[e=>o.jsx(H,{children:o.jsx(e,{})}),K],parameters:{actions:{argTypesRegex:"^on.*"}}},u=e=>{const[s,l]=t.useState(e.items??c),[a,r]=t.useState(void 0);return t.useEffect(()=>{l(e.items??c)},[e.items]),o.jsx(m,{...e,items:s,nameGetter:n=>n.label||"",onCreateItem:void 0,selected:a,onChange:r})};u.storyName="Autocomplete по умолчанию";const d=()=>{const[e]=t.useState(c),[s,l]=t.useState(void 0);return o.jsx(m,{items:e,nameGetter:a=>a.label||"",onChange:l,selected:s,totalText:"Найдено:",label:"Autocomplete с кастомным текстом 'Total'"})};d.storyName='Autocomplete с кастомным текстом "Total"';const p=()=>{const[e,s]=t.useState([]),[l,a]=t.useState(void 0),[r,n]=t.useState(!1),h=t.useCallback(i=>{n(!0),setTimeout(()=>{const D=c.filter(M=>{var f;return(f=M.label)==null?void 0:f.toLowerCase().includes(i.toLowerCase())});s(D),n(!1)},1e3)},[]);return o.jsx(m,{items:e,nameGetter:i=>i.label||"",onChange:a,selected:l,isLoading:r,onLoadOptions:h,label:"Autocomplete с асинхронной загрузкой данных",placeholder:"Начните вводить для поиска..."})};p.storyName="Autocomplete с асинхронной загрузкой";const S=()=>{const[e,s]=t.useState(c),[l,a]=t.useState(void 0),r=t.useCallback(n=>{const h={id:e.length+1,value:n.toLowerCase().replace(/\s+/g,"_"),label:n};s(i=>[...i,h]),a(h)},[e]);return o.jsx(m,{items:e,nameGetter:n=>n.label||"",onChange:a,selected:l,onCreateItem:r,createItemText:n=>`Создать новый элемент: ${n}`,label:"Autocomplete с возможностью создания элементов",placeholder:"Введите название или создайте новый элемент"})};S.storyName="Autocomplete с созданием новых элементов";const g=()=>{const[e]=t.useState(c),[s,l]=t.useState(void 0),a=t.useCallback(r=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsxs(I,{variant:"Body-Medium",color:"var(--spectrum-red-50)",children:["ID: ",r.id]}),o.jsx(I,{color:"var(--steel-90)",children:r.label}),o.jsxs(I,{variant:"Caption-Medium",color:"var(--steel-70)",children:["(",r.value,")"]})]}),[]);return o.jsx(m,{items:e,nameGetter:r=>r.label||"",onChange:l,selected:s,renderLabel:a,label:"Autocomplete с кастомным рендерингом опций",showTooltip:!0})};g.storyName="Autocomplete с кастомным рендерингом опций";const b=()=>{const[e]=t.useState(c),[s,l]=t.useState(void 0);return o.jsx(m,{items:e,nameGetter:a=>a.label||"",onChange:l,selected:s,withPortal:!0,portalContainerId:"root",label:"Autocomplete с рендерингом через портал"})};b.storyName="Autocomplete с рендерингом через портал";const A=()=>{const[e]=t.useState(c);return o.jsxs(R,{display:"flex",flexDirection:"column",gap:"20px",children:[o.jsx(m,{items:e,nameGetter:s=>s.label||"",onChange:()=>{},size:"xs",label:"Размер XS"}),o.jsx(m,{items:e,nameGetter:s=>s.label||"",onChange:()=>{},size:"s",label:"Размер S"}),o.jsx(m,{items:e,nameGetter:s=>s.label||"",onChange:()=>{},size:"m",label:"Размер M (по умолчанию)"})]})};A.storyName="Autocomplete с разными размерами";var C,x,v;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`(args: IAutocompleteProps): JSX.Element => {
  const [items, setItems] = useState<IAutocompleteValue[]>(args.items ?? defaultOptions);
  const [selected, setSelected] = useState<IAutocompleteValue | undefined>(undefined);
  useEffect(() => {
    setItems(args.items ?? defaultOptions);
  }, [args.items]);
  return <Autocomplete {...args} items={items} nameGetter={item => item.label || ''} onCreateItem={undefined} selected={selected} onChange={setSelected} />;
}`,...(v=(x=u.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var y,L,T;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`(): JSX.Element => {
  const [items] = useState<IAutocompleteValue[]>(defaultOptions);
  const [selected, setSelected] = useState<IAutocompleteValue | undefined>(undefined);
  return <Autocomplete items={items} nameGetter={item => item.label || ''} onChange={setSelected} selected={selected} totalText="Найдено:" label="Autocomplete с кастомным текстом 'Total'" />;
}`,...(T=(L=d.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var j,G,w;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`(): JSX.Element => {
  const [items, setItems] = useState<IAutocompleteValue[]>([]);
  const [selected, setSelected] = useState<IAutocompleteValue | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const handleLoadOptions = useCallback((query: string) => {
    setIsLoading(true);
    setTimeout(() => {
      const filteredItems = defaultOptions.filter(item => item.label?.toLowerCase().includes(query.toLowerCase()));
      setItems(filteredItems);
      setIsLoading(false);
    }, 1000);
  }, []);
  return <Autocomplete items={items} nameGetter={item => item.label || ''} onChange={setSelected} selected={selected} isLoading={isLoading} onLoadOptions={handleLoadOptions} label="Autocomplete с асинхронной загрузкой данных" placeholder="Начните вводить для поиска..." />;
}`,...(w=(G=p.parameters)==null?void 0:G.docs)==null?void 0:w.source}}};var O,V,_;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`(): JSX.Element => {
  const [items, setItems] = useState<IAutocompleteValue[]>(defaultOptions);
  const [selected, setSelected] = useState<IAutocompleteValue | undefined>(undefined);
  const handleCreateItem = useCallback((value: string) => {
    const newItem: IAutocompleteValue = {
      id: items.length + 1,
      value: value.toLowerCase().replace(/\\s+/g, '_'),
      label: value
    };
    setItems(prevItems => [...prevItems, newItem]);
    setSelected(newItem);
  }, [items]);
  return <Autocomplete items={items} nameGetter={item => item.label || ''} onChange={setSelected} selected={selected} onCreateItem={handleCreateItem} createItemText={value => \`Создать новый элемент: \${value}\`} label="Autocomplete с возможностью создания элементов" placeholder="Введите название или создайте новый элемент" />;
}`,...(_=(V=S.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var W,E,X;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`(): JSX.Element => {
  const [items] = useState<IAutocompleteValue[]>(defaultOptions);
  const [selected, setSelected] = useState<IAutocompleteValue | undefined>(undefined);
  const renderCustomLabel = useCallback((item: IAutocompleteValue) => {
    return <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
        <Typography variant="Body-Medium" color="var(--spectrum-red-50)">
          ID: {item.id}
        </Typography>
        <Typography color="var(--steel-90)">{item.label}</Typography>
        <Typography variant="Caption-Medium" color="var(--steel-70)">
          ({item.value})
        </Typography>
      </div>;
  }, []);
  return <Autocomplete items={items} nameGetter={item => item.label || ''} onChange={setSelected} selected={selected} renderLabel={renderCustomLabel} label="Autocomplete с кастомным рендерингом опций" showTooltip={true} />;
}`,...(X=(E=g.parameters)==null?void 0:E.docs)==null?void 0:X.source}}};var z,N,k;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`(): JSX.Element => {
  const [items] = useState<IAutocompleteValue[]>(defaultOptions);
  const [selected, setSelected] = useState<IAutocompleteValue | undefined>(undefined);
  return <Autocomplete items={items} nameGetter={item => item.label || ''} onChange={setSelected} selected={selected} withPortal={true} portalContainerId="root" label="Autocomplete с рендерингом через портал" />;
}`,...(k=(N=b.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var J,P,B;A.parameters={...A.parameters,docs:{...(J=A.parameters)==null?void 0:J.docs,source:{originalSource:`(): JSX.Element => {
  const [items] = useState<IAutocompleteValue[]>(defaultOptions);
  return <Box display="flex" flexDirection="column" gap="20px">
      <Autocomplete items={items} nameGetter={item => item.label || ''} onChange={() => {}} size="xs" label="Размер XS" />

      <Autocomplete items={items} nameGetter={item => item.label || ''} onChange={() => {}} size="s" label="Размер S" />

      <Autocomplete items={items} nameGetter={item => item.label || ''} onChange={() => {}} size="m" label="Размер M (по умолчанию)" />
    </Box>;
}`,...(B=(P=A.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};const Ie=["AutocompleteDefault","AutocompleteWithCustomTotalText","AutocompleteWithAsyncLoading","AutocompleteWithCreateItem","AutocompleteWithCustomRendering","AutocompleteWithPortal","AutocompleteWithSizes"];export{u as AutocompleteDefault,p as AutocompleteWithAsyncLoading,S as AutocompleteWithCreateItem,g as AutocompleteWithCustomRendering,d as AutocompleteWithCustomTotalText,b as AutocompleteWithPortal,A as AutocompleteWithSizes,Ie as __namedExportsOrder,he as default};
