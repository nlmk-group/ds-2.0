import{j as o,a as I}from"./jsx-runtime-2xDJh5tt.js";import{r as a}from"./index-CBqU2yxZ.js";import{C as w}from"./index-DcHaDCth.js";import{i,I as b}from"./index-DbX0JV5O.js";import{I as $,Q as D,ah as W}from"./index-2j3g-nq8.js";import"./generateUUID-CbWNkpu4.js";import"./index-YguXCR6_.js";import"./index-D60oXbFF.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import{T as C}from"./index-nWYpQihe.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-lhFT6koy.js";import"./index-DFeUewHl.js";import{c as A}from"./clsx.m-CH7BE6MN.js";const L={name:{description:"Имя иконки",table:{defaultValue:{summary:""},type:{summary:"string"}},options:[...Object.keys({...i[16],...i[24],...i[32]})],control:{type:"select"}},color:{description:"Цвет иконки",table:{defaultValue:{summary:"primary"},type:{summary:'"action" | "disabled" | "error" | "primary" | "secondary" | "inherit" | "success" | "warning"'}},options:["action","disabled","error","primary","secondary","inherit","success","warning"],control:{type:"select"}},htmlColor:{description:"HTML цвет иконки",table:{defaultValue:{summary:void 0},type:{summary:"string"}},control:{type:"color"}},containerSize:{description:"Размер контейнера иконки",table:{defaultValue:{summary:"24"},type:{summary:'"16" | "24" | "32"'}},options:[16,24,32],control:{type:"select"}},size:{description:"Физический размер иконки",table:{defaultValue:{summary:"24"},type:{summary:"number"}},options:[16,24,32],control:{type:"select"}}},j=L,R="_wrapper_2mvrz_1",H="_sized_2mvrz_8",M="_table_2mvrz_16",V="_noResults_2mvrz_23",K="_controls_2mvrz_29",U="_input_2mvrz_37",J="_colorControlTitle_2mvrz_42",X="_colorControl_2mvrz_42",Q="_colorInput_2mvrz_55",q="_card_2mvrz_59",G="_cardHeader_2mvrz_66",Y="_icons_2mvrz_74",Z="_icon_2mvrz_74",ee="_iconFill_2mvrz_91",ne="_strokeIcon_2mvrz_95",oe="_fillAndStrokeIcon_2mvrz_99",n={wrapper:R,sized:H,table:M,noResults:V,controls:K,input:U,colorControlTitle:J,colorControl:X,colorInput:Q,card:q,cardHeader:G,icons:Y,icon:Z,iconFill:ee,strokeIcon:ne,fillAndStrokeIcon:oe},te={title:"Components/Icon/Stories",component:b,argTypes:j,parameters:{layout:"fullscreen"}},r=({name:d="IconArmatura32",color:y="primary",containerSize:h=32,...s})=>o("div",{className:A(n.wrapper,n.sized),children:o(b,{name:"IconArmatura32",color:y,containerSize:h,...s})});r.storyName="Компонент Icon по умолчанию";r.args={name:"IconArmatura32",color:"primary",containerSize:32};r.decorators=[d=>o("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"200px"},children:o(d,{})})];const l=()=>{const d=["IconJsonOutlined24","IconLightningStroke16","IconLightningStroke24","IconLightningStroke32","IconPhoneCallContact16","IconPhoneCallContact24","IconPhoneCallContact32","IconTemperatureStroke16","IconTemperatureStroke24","IconTemperatureStroke32","IconWeightTypeOutlined16","IconWeightTypeOutlined24","IconWeightTypeOutlined32","IconMesBunkerOutlined16","IconMesBunkerOutlined24","IconMesBunkerOutlined32","IconPicInPic16","IconPicInPic24","IconPicInPic32"],y=["IconLightningFilled16","IconLightningFilled24","IconLightningFilled32","IconBasketBuying16","IconBasketBuying24","IconBasketBuying32","IconPlay16","IconPlay24","IconPlay32","IconBalanceOutlined16","IconBalanceOutlined24","IconBalanceOutlined32","IconKovsh16","IconKovsh24","IconKovsh32","IconWeightTypeFilled16","IconWeightTypeFilled24","IconWeightTypeFilled32"],h=["IconBorder16","IconBorder24","IconBorder32"],[s,z]=a.useState(""),[O,P]=a.useState(s),u={};a.useEffect(()=>{const e=setTimeout(()=>{P(s)},500);return()=>{clearTimeout(e)}},[s]);const F=e=>{const c=e.target.value;document.documentElement.style.setProperty("--icon-color",c)},v=e=>e.replace("Icon","");Object.keys(i).forEach(e=>{Object.keys(i[e]||{}).forEach(c=>{const t=v(c).replace(e.toString(),"");u[t]||(u[t]={});const f=c.includes("Kovsh"),m=i[e][c];if(m){const p={style:{...f&&{stroke:"var(--icon-color)"}}};u[t][e.toString()]=a.createElement(m,p)}})});const k=Object.keys(u).filter(e=>O.toLowerCase().split(" ").every(t=>e.toLowerCase().includes(t))).map(e=>({title:e,sizes:u[e]})),g=a.useRef(null);return a.useEffect(()=>{const e=getComputedStyle(document.documentElement).getPropertyValue("--icon-color").trim()||"#167ffb";g.current&&(g.current.value=e)},[]),I("div",{className:n.wrapper,children:[I("div",{className:n.controls,children:[o($,{label:"Поиск иконок",value:s,onChange:e=>z(e.target.value),className:n.input}),I("div",{className:n.colorControl,children:[o(C,{variant:"Body1",className:n.colorControlTitle,children:"Выберите цвет:"}),o("input",{type:"color",ref:g,defaultValue:"#167ffb",onChange:F,className:n.colorInput})]})]}),o("div",{className:n.table,children:k.length>0?k.map((e,c)=>I(D,{className:n.card,indicatorStatus:"info",children:[o("div",{className:n.cardHeader,children:o(C,{variant:"Body1",color:"primary",children:W.startCase(v(e.title))})}),o("div",{className:n.icons,children:Object.entries(e.sizes).map(([t,f])=>{const m=d.includes(`Icon${e.title}${t}`),p=y.includes(`Icon${e.title}${t}`),x=h.includes(`Icon${e.title}${t}`);return o(w,{copy:`Icon${e.title}${t}`,placement:"bottom",children:o("div",{className:A(n.icon,{[n.strokeIcon]:m,[n.fillAndStrokeIcon]:p,[n.iconFill]:!m&&!p&&!x}),children:f},t)},`Icon${e.title}${t}`)})})]},c)):o(C,{variant:"Heading2",color:"primary",className:n.noResults,children:"Ничего не найдено"})})]})};l.storyName="Все доступные иконки";var S,T,_;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`({
  name = 'IconArmatura32',
  color = 'primary',
  containerSize = 32,
  ...args
}: TIconProps): JSX.Element => {
  return <div className={clsx(styles.wrapper, styles.sized)}>
      <Icon name="IconArmatura32" color={color} containerSize={containerSize} {...args} />
    </div>;
}`,...(_=(T=r.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var N,B,E;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`(): JSX.Element => {
  // Иконки только со stroke
  const iconsUseStroke = ['IconJsonOutlined24', 'IconLightningStroke16', 'IconLightningStroke24', 'IconLightningStroke32', 'IconPhoneCallContact16', 'IconPhoneCallContact24', 'IconPhoneCallContact32', 'IconTemperatureStroke16', 'IconTemperatureStroke24', 'IconTemperatureStroke32', 'IconWeightTypeOutlined16', 'IconWeightTypeOutlined24', 'IconWeightTypeOutlined32', 'IconMesBunkerOutlined16', 'IconMesBunkerOutlined24', 'IconMesBunkerOutlined32', 'IconPicInPic16', 'IconPicInPic24', 'IconPicInPic32'];
  // Иконки и с fill, и со stroke
  const iconsUseFillAndStroke = ['IconLightningFilled16', 'IconLightningFilled24', 'IconLightningFilled32', 'IconBasketBuying16', 'IconBasketBuying24', 'IconBasketBuying32', 'IconPlay16', 'IconPlay24', 'IconPlay32', 'IconBalanceOutlined16', 'IconBalanceOutlined24', 'IconBalanceOutlined32', 'IconKovsh16', 'IconKovsh24', 'IconKovsh32', 'IconWeightTypeFilled16', 'IconWeightTypeFilled24', 'IconWeightTypeFilled32'];
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
  Object.keys(icons).forEach((size: keyof TIconsObject) => {
    Object.keys(icons[size] || {}).forEach((iconName: string) => {
      const formattedIconName = formatIconName((iconName as TIconName)).replace(size.toString(), '');
      if (!iconsByNames[formattedIconName]) {
        iconsByNames[formattedIconName] = {};
      }
      const useStroke = iconName.includes('Kovsh');
      const iconComponent = icons[size][(iconName as TIconName)];
      if (iconComponent) {
        const iconProps: Record<string, any> = {
          style: {
            ...(useStroke && {
              stroke: 'var(--icon-color)'
            })
          }
        };
        iconsByNames[formattedIconName][size.toString()] = createElement(iconComponent, iconProps);
      }
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
        {filteredIcons.length > 0 ? filteredIcons.map((icon, key) => <Card key={key} className={styles.card} indicatorStatus="info">
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
            return <CopyWrapper key={\`Icon\${icon.title}\${size}\`} copy={\`Icon\${icon.title}\${size}\`} placement="bottom">
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
            </Card>) : <Typography variant="Heading2" color="primary" className={styles.noResults}>
            Ничего не найдено
          </Typography>}
      </div>
    </div>;
}`,...(E=(B=l.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};const ce=["IconComponent","AllIcons"],ke=Object.freeze(Object.defineProperty({__proto__:null,AllIcons:l,IconComponent:r,__namedExportsOrder:ce,default:te},Symbol.toStringTag,{value:"Module"}));export{l as A,ke as I,j as a};
