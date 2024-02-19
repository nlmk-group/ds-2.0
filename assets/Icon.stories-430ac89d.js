import{j as o,c as w,a as m}from"./clsx.m-3764cf42.js";import{r as a}from"./index-f1f749bf.js";import{C as O}from"./index-f7212560.js";import{k as i,a as b}from"./index-c9e69acb.js";import{U as L,C as $,V as P}from"./index-f014e98c.js";import"./index-ec455f54.js";import"./index-095d5581.js";import"./index-e99519f1.js";import"./index-147655d7.js";import{T as h}from"./index-fb030d50.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-bc089e17.js";const j={name:{description:"Имя иконки",table:{defaultValue:{summary:""},type:{summary:"string"}},options:[...Object.keys({...i[16],...i[24],...i[32]})],control:{type:"select"}},color:{description:"Цвет иконки",table:{defaultValue:{summary:"primary"},type:{summary:'"action" | "disabled" | "error" | "primary" | "secondary" | "inherit" | "success" | "warning"'}},options:["action","disabled","error","primary","secondary","inherit","success","warning"],control:{type:"select"}},htmlColor:{description:"HTML цвет иконки",table:{defaultValue:{summary:void 0},type:{summary:"string"}},control:{type:"color"}},containerSize:{description:"Размер контейнера иконки",table:{defaultValue:{summary:"24"},type:{summary:'"16" | "24" | "32"'}},options:[16,24,32],control:{type:"select"}},size:{description:"Физический размер иконки",table:{defaultValue:{summary:"24"},type:{summary:"number"}},options:[16,24,32],control:{type:"select"}}},R=j,H="_wrapper_2wfe9_1",V="_sized_2wfe9_8",K="_table_2wfe9_16",W="_noResults_2wfe9_23",U="_controls_2wfe9_29",J="_input_2wfe9_37",M="_colorControlTitle_2wfe9_42",X="_colorControl_2wfe9_42",q="_colorInput_2wfe9_54",G="_card_2wfe9_58",Q="_cardHeader_2wfe9_65",Y="_icons_2wfe9_72",Z="_icon_2wfe9_72",ee="_iconFill_2wfe9_89",ne="_strokeIcon_2wfe9_93",oe="_fillAndStrokeIcon_2wfe9_97",n={wrapper:H,sized:V,table:K,noResults:W,controls:U,input:J,colorControlTitle:M,colorControl:X,colorInput:q,card:G,cardHeader:Q,icons:Y,icon:Z,iconFill:ee,strokeIcon:ne,fillAndStrokeIcon:oe},te={title:"Components/Icon/Stories",component:b,argTypes:R,parameters:{layout:"fullscreen"}},c=({name:u="IconArmatura32",color:p="primary",containerSize:y=32,...s})=>o("div",{className:w(n.wrapper,n.sized),children:o(b,{name:u,color:p,containerSize:y,...s})});c.storyName="Компонент Icon по умолчанию";c.args={name:"IconArmatura32",color:"primary",containerSize:32};c.decorators=[u=>o("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"200px"},children:o(u,{})})];const l=()=>{const u=["IconJsonOutlined24","IconLightningStroke16","IconLightningStroke24","IconLightningStroke32","IconPhoneCallContact16","IconPhoneCallContact24","IconPhoneCallContact32","IconTemperatureStroke16","IconTemperatureStroke24","IconTemperatureStroke32"],p=["IconLightningFilled16","IconLightningFilled24","IconLightningFilled32","IconBasketBuying16","IconBasketBuying24","IconBasketBuying32","IconPlay16","IconPlay24","IconPlay32","IconBalanceOutlined16","IconBalanceOutlined24","IconBalanceOutlined32","IconKovsh16","IconKovsh24","IconKovsh32"],y=["IconBorder16","IconBorder24","IconBorder32"],[s,A]=a.useState(""),[x,F]=a.useState(s),d={};a.useEffect(()=>{const e=setTimeout(()=>{F(s)},500);return()=>{clearTimeout(e)}},[s]);const z=e=>{const r=e.target.value;document.documentElement.style.setProperty("--icon-color",r)},g=e=>e.replace("Icon","");Object.keys(i).forEach(e=>{Object.keys(i[e]).forEach(r=>{const t=g(r).replace(e,"");d[t]||(d[t]={});const f=r.includes("Kovsh");d[t][e]=a.createElement(i[e][r],{color:"primary",style:{...f&&{stroke:"var(--icon-color)"}}})})});const C=Object.keys(d).filter(e=>x.toLowerCase().split(" ").every(t=>e.toLowerCase().includes(t))).map(e=>({title:e,sizes:d[e]})),I=a.useRef(null);return a.useEffect(()=>{const e=getComputedStyle(document.documentElement).getPropertyValue("--icon-color").trim()||"#167ffb";I.current&&(I.current.value=e)},[]),m("div",{className:n.wrapper,children:[m("div",{className:n.controls,children:[o(L,{label:"Поиск иконок",value:s,onChange:e=>A(e.target.value),className:n.input}),m("div",{className:n.colorControl,children:[o(h,{variant:"Body1",className:n.colorControlTitle,children:"Выберите цвет:"}),o("input",{type:"color",ref:I,defaultValue:"#167ffb",onChange:z,className:n.colorInput})]})]}),o("div",{className:n.table,children:C.length>0?C.map((e,r)=>m($,{className:n.card,children:[o("div",{className:n.cardHeader,children:o(h,{variant:"Body1",color:"primary",children:P.startCase(g(e.title))})}),o("div",{className:n.icons,children:Object.entries(e.sizes).map(([t,f])=>{const S=u.includes(`Icon${e.title}${t}`),k=p.includes(`Icon${e.title}${t}`),D=y.includes(`Icon${e.title}${t}`);return o(O,{copy:`Icon${e.title}${t}`,placement:"bottom",children:o("div",{className:w(n.icon,{[n.strokeIcon]:S,[n.fillAndStrokeIcon]:k,[n.iconFill]:!S&&!k&&!D}),children:f},t)})})})]},r)):o(h,{variant:"Heading2",className:n.noResults,children:"Ничего не найдено"})})]})};l.storyName="Все доступные иконки";var _,v,N;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`({
  name = 'IconArmatura32',
  color = 'primary',
  containerSize = 32,
  ...args
}: any): JSX.Element => {
  return <div className={clsx(styles.wrapper, styles.sized)}>
      <Icon name={name} color={color} containerSize={containerSize} {...args} />
    </div>;
}`,...(N=(v=c.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var T,E,B;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`(): JSX.Element => {
  // Иконки только со stroke
  const iconsUseStroke = ['IconJsonOutlined24', 'IconLightningStroke16', 'IconLightningStroke24', 'IconLightningStroke32', 'IconPhoneCallContact16', 'IconPhoneCallContact24', 'IconPhoneCallContact32', 'IconTemperatureStroke16', 'IconTemperatureStroke24', 'IconTemperatureStroke32'];
  // Иконки и с fill, и со stroke
  const iconsUseFillAndStroke = ['IconLightningFilled16', 'IconLightningFilled24', 'IconLightningFilled32', 'IconBasketBuying16', 'IconBasketBuying24', 'IconBasketBuying32', 'IconPlay16', 'IconPlay24', 'IconPlay32', 'IconBalanceOutlined16', 'IconBalanceOutlined24', 'IconBalanceOutlined32', 'IconKovsh16', 'IconKovsh24', 'IconKovsh32'];
  // Иконки которые задуманы для использования только в одном цвете
  const iconsAlwaysDefaultColor = ['IconBorder16', 'IconBorder24', 'IconBorder32'];
  const [searchText, setSearchText] = useState('');
  const [debouncedSearchText, setDebouncedSearchText] = useState(searchText);
  const iconsByNames: IconsWithSizesAndColors = {};
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [searchText]);
  const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    document.documentElement.style.setProperty('--icon-color', newColor);
  };
  const formatIconName = (name: string) => {
    return name.replace('Icon', '');
  };
  Object.keys(icons).forEach(size => {
    Object.keys(icons[size]).forEach(iconName => {
      const formattedIconName = formatIconName(iconName).replace(size, '');
      if (!iconsByNames[formattedIconName]) {
        iconsByNames[formattedIconName] = {};
      }
      const useStroke = iconName.includes('Kovsh');
      // const useFillAndStroke = iconName.includes('Calendar');
      iconsByNames[formattedIconName][size] = createElement(icons[size][iconName], {
        color: 'primary',
        style: {
          ...(useStroke && {
            stroke: 'var(--icon-color)'
          })
        }
      });
    });
  });
  const filteredIcons = Object.keys(iconsByNames).filter(iconName => {
    const searchWords = debouncedSearchText.toLowerCase().split(' ');
    return searchWords.every(word => iconName.toLowerCase().includes(word));
  }).map(iconName => ({
    title: iconName,
    sizes: iconsByNames[iconName]
  }));
  const colorInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const initialColor = getComputedStyle(document.documentElement).getPropertyValue('--icon-color').trim() || '#167ffb';
    if (colorInputRef.current) {
      colorInputRef.current.value = initialColor;
    }
  }, []);
  return <div className={styles.wrapper}>
      <div className={styles.controls}>
        <Input label="Поиск иконок" value={searchText} onChange={e => setSearchText(e.target.value)} className={styles.input} />
        <div className={styles.colorControl}>
          <Typography variant="Body1" className={styles.colorControlTitle}>
            Выберите цвет:
          </Typography>
          <input type="color" ref={colorInputRef} defaultValue="#167ffb" onChange={handleChangeColor} className={styles.colorInput} />
        </div>
      </div>
      <div className={styles.table}>
        {filteredIcons.length > 0 ? filteredIcons.map((icon, key) => <Card key={key} className={styles.card}>
              <div className={styles.cardHeader}>
                <Typography variant="Body1" color="primary">
                  {startCase(formatIconName(icon.title))}
                </Typography>
              </div>
              <div className={styles.icons}>
                {Object.entries(icon.sizes).map(([size, iconElement]) => {
            const useStroke = iconsUseStroke.includes(\`Icon\${icon.title}\${size}\`);
            const useFillAndStroke = iconsUseFillAndStroke.includes(\`Icon\${icon.title}\${size}\`);
            const isAlwaysDefaultColorIcon = iconsAlwaysDefaultColor.includes(\`Icon\${icon.title}\${size}\`);
            return <CopyWrapper copy={\`Icon\${icon.title}\${size}\`} placement="bottom">
                      <div key={size} className={clsx(styles.icon, {
                [styles.strokeIcon]: useStroke,
                [styles.fillAndStrokeIcon]: useFillAndStroke,
                [styles.iconFill]: !useStroke && !useFillAndStroke && !isAlwaysDefaultColorIcon
              })}>
                        {iconElement}
                      </div>
                    </CopyWrapper>;
          })}
              </div>
            </Card>) : <Typography variant="Heading2" className={styles.noResults}>
            Ничего не найдено
          </Typography>}
      </div>
    </div>;
}`,...(B=(E=l.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};const re=["IconComponent","AllIcons"],Ce=Object.freeze(Object.defineProperty({__proto__:null,AllIcons:l,IconComponent:c,__namedExportsOrder:re,default:te},Symbol.toStringTag,{value:"Module"}));export{l as A,Ce as I,R as a};
