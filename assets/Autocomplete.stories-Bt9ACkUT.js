import{j as o,r as t}from"./iframe-CxLN9ksd.js";import{B as x}from"./index-CT_Q_AhL.js";import{T as I}from"./index-CORENSTS.js";import{A as n}from"./index-BIbmxsii.js";import{g as v}from"./styles.module-BGEDXogi.js";import{a as y}from"./argsTypes-BFr6lVn-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./colorsMapping-C6bFIk14.js";import"./index-BN0H6Yla.js";import"./sizeMappingInput-XXScYzk1.js";import"./index-DcM-4FYU.js";import"./index-LyR6p6RN.js";import"./index-M8Uj9-kW.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-B2BQHND4.js";import"./24-BGXSSISX.js";import"./24-MJ8JdQQ9.js";import"./24-2IXSosOm.js";import"./24-Dlyxu4_q.js";import"./24-BFZg9aq0.js";import"./24-DMGI7E0m.js";import"./24-voYW8sKN.js";import"./24-DMqNa1pl.js";import"./24-DJtALV7Z.js";import"./16-CchysOzF.js";import"./24-CJ9IDGZV.js";import"./24-CbC-8o3Y.js";import"./16-kcyE2NZr.js";import"./16-DRyq0qh_.js";import"./16-D_ueUpcb.js";import"./generateUUID-M57HTP56.js";import"./lodash-D8MmIXKa.js";import"./useFloatingReferenceSync-DscYnpdV.js";import"./index-Ck8f73vE.js";import"./index-CYd80pzx.js";import"./types-TdnjS80C.js";import"./index-DRzRogyp.js";import"./floating-ui.react-B9Baa2-L.js";import"./sizesMapping-D8QavrGc.js";import"./index-CosC_TVD.js";import"./index-AybKi-wv.js";import"./index-Boblobe5.js";import"./index-D3DoxRCP.js";import"./index-DYBNPjYe.js";import"./index-C9nyZABc.js";import"./index-BnDPEMC8.js";const i=[{id:1,value:"blast_furnace",label:"Доменная печь"},{id:2,value:"converter",label:"Конвертер"},{id:3,value:"rolling_mill",label:"Прокатный стан"},{id:4,value:"sinter_plant",label:"Агломерационная фабрика"},{id:5,value:"coke_plant",label:"Коксовая батарея"},{id:6,value:"steel_ladle",label:"Сталеразливочный ковш"},{id:7,value:"continuous_casting",label:"Машина непрерывного литья"},{id:8,value:"electric_furnace",label:"Электродуговая печь"},{id:9,value:"oxygen_plant",label:"Кислородная станция"},{id:10,value:"heat_treatment",label:"Термическая обработка"}],L=t.createContext({}),T=({children:e})=>o.jsx(L.Provider,{value:{},children:e}),j=e=>o.jsx("div",{className:v.wrapper,style:{padding:"50px"},children:e()}),fe={title:"Components/Autocomplete/Stories",component:n,argTypes:y,decorators:[e=>o.jsx(T,{children:o.jsx(e,{})}),j],parameters:{actions:{argTypesRegex:"^on.*"}}},u=e=>{const[s,l]=t.useState(e.items??i),[a,r]=t.useState(void 0);return t.useEffect(()=>{l(e.items??i)},[e.items]),o.jsx(n,{...e,items:s,nameGetter:m=>m.label||"",onCreateItem:void 0,selected:a,onChange:r})};u.storyName="Autocomplete по умолчанию";const p=()=>{const[e]=t.useState(i),[s,l]=t.useState(void 0);return o.jsx(n,{items:e,nameGetter:a=>a.label||"",onChange:l,selected:s,totalText:"Найдено:",label:"Autocomplete с кастомным текстом 'Total'"})};p.storyName='Autocomplete с кастомным текстом "Total"';const d=()=>{const[e,s]=t.useState([]),[l,a]=t.useState(void 0),[r,m]=t.useState(!1),h=t.useCallback(c=>{m(!0),setTimeout(()=>{const C=i.filter(f=>f.label?.toLowerCase().includes(c.toLowerCase()));s(C),m(!1)},1e3)},[]);return o.jsx(n,{items:e,nameGetter:c=>c.label||"",onChange:a,selected:l,isLoading:r,onLoadOptions:h,label:"Autocomplete с асинхронной загрузкой данных",placeholder:"Начните вводить для поиска..."})};d.storyName="Autocomplete с асинхронной загрузкой";const S=()=>{const[e,s]=t.useState(i),[l,a]=t.useState(void 0),r=t.useCallback(m=>{const h={id:e.length+1,value:m.toLowerCase().replace(/\s+/g,"_"),label:m};s(c=>[...c,h]),a(h)},[e]);return o.jsx(n,{items:e,nameGetter:m=>m.label||"",onChange:a,selected:l,onCreateItem:r,createItemText:m=>`Создать новый элемент: ${m}`,label:"Autocomplete с возможностью создания элементов",placeholder:"Введите название или создайте новый элемент"})};S.storyName="Autocomplete с созданием новых элементов";const g=()=>{const[e]=t.useState(i),[s,l]=t.useState(void 0),a=t.useCallback(r=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsxs(I,{variant:"Body-Medium",color:"var(--spectrum-red-50)",children:["ID: ",r.id]}),o.jsx(I,{color:"var(--steel-90)",children:r.label}),o.jsxs(I,{variant:"Caption-Medium",color:"var(--steel-70)",children:["(",r.value,")"]})]}),[]);return o.jsx(n,{items:e,nameGetter:r=>r.label||"",onChange:l,selected:s,renderLabel:a,label:"Autocomplete с кастомным рендерингом опций",showTooltip:!0})};g.storyName="Autocomplete с кастомным рендерингом опций";const A=()=>{const[e]=t.useState(i),[s,l]=t.useState(void 0);return o.jsx(n,{items:e,nameGetter:a=>a.label||"",onChange:l,selected:s,withPortal:!0,portalContainerId:"root",label:"Autocomplete с рендерингом через портал"})};A.storyName="Autocomplete с рендерингом через портал";const b=()=>{const[e]=t.useState(i);return o.jsxs(x,{display:"flex",flexDirection:"column",gap:"20px",children:[o.jsx(n,{items:e,nameGetter:s=>s.label||"",onChange:()=>{},size:"xs",label:"Размер XS"}),o.jsx(n,{items:e,nameGetter:s=>s.label||"",onChange:()=>{},size:"s",label:"Размер S"}),o.jsx(n,{items:e,nameGetter:s=>s.label||"",onChange:()=>{},size:"m",label:"Размер M (по умолчанию)"})]})};b.storyName="Autocomplete с разными размерами";u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: IAutocompleteProps): JSX.Element => {
  const [items, setItems] = useState<IAutocompleteValue[]>(args.items ?? defaultOptions);
  const [selected, setSelected] = useState<IAutocompleteValue | undefined>(undefined);
  useEffect(() => {
    setItems(args.items ?? defaultOptions);
  }, [args.items]);
  return <Autocomplete {...args} items={items} nameGetter={item => item.label || ''} onCreateItem={undefined} selected={selected} onChange={setSelected} />;
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(): JSX.Element => {
  const [items] = useState<IAutocompleteValue[]>(defaultOptions);
  const [selected, setSelected] = useState<IAutocompleteValue | undefined>(undefined);
  return <Autocomplete items={items} nameGetter={item => item.label || ''} onChange={setSelected} selected={selected} totalText="Найдено:" label="Autocomplete с кастомным текстом 'Total'" />;
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...d.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...S.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...g.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`(): JSX.Element => {
  const [items] = useState<IAutocompleteValue[]>(defaultOptions);
  const [selected, setSelected] = useState<IAutocompleteValue | undefined>(undefined);
  return <Autocomplete items={items} nameGetter={item => item.label || ''} onChange={setSelected} selected={selected} withPortal={true} portalContainerId="root" label="Autocomplete с рендерингом через портал" />;
}`,...A.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`(): JSX.Element => {
  const [items] = useState<IAutocompleteValue[]>(defaultOptions);
  return <Box display="flex" flexDirection="column" gap="20px">
      <Autocomplete items={items} nameGetter={item => item.label || ''} onChange={() => {}} size="xs" label="Размер XS" />

      <Autocomplete items={items} nameGetter={item => item.label || ''} onChange={() => {}} size="s" label="Размер S" />

      <Autocomplete items={items} nameGetter={item => item.label || ''} onChange={() => {}} size="m" label="Размер M (по умолчанию)" />
    </Box>;
}`,...b.parameters?.docs?.source}}};const xe=["AutocompleteDefault","AutocompleteWithCustomTotalText","AutocompleteWithAsyncLoading","AutocompleteWithCreateItem","AutocompleteWithCustomRendering","AutocompleteWithPortal","AutocompleteWithSizes"];export{u as AutocompleteDefault,d as AutocompleteWithAsyncLoading,S as AutocompleteWithCreateItem,g as AutocompleteWithCustomRendering,p as AutocompleteWithCustomTotalText,A as AutocompleteWithPortal,b as AutocompleteWithSizes,xe as __namedExportsOrder,fe as default};
