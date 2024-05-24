import{j as o,a as I}from"./jsx-runtime-2xDJh5tt.js";import{r as s}from"./index-CBqU2yxZ.js";import{C as x}from"./index-6LboHHAJ.js";import{N as $,I as z,U as D,aj as W}from"./index-BXHiB0mH.js";import"./generateUUID-C4dJbmAm.js";import"./index-DdUHXjGd.js";import"./index-D60oXbFF.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import{T as g}from"./index-nWYpQihe.js";import{i as l,I as B}from"./index-tm22VGJr.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-D-OkhesI.js";import{c as b}from"./clsx.m-CH7BE6MN.js";const L="_wrapper_15srj_1",R="_sized_15srj_18",H="_table_15srj_30",M="_noResults_15srj_37",V="_controls_15srj_43",K="_input_15srj_51",U="_colorControlTitle_15srj_56",J="_colorControl_15srj_56",X="_colorInput_15srj_69",q="_card_15srj_73",G="_cardHeader_15srj_79",Q="_icons_15srj_87",Y="_icon_15srj_87",Z="_iconFill_15srj_104",ee="_strokeIcon_15srj_108",ne="_fillAndStrokeIcon_15srj_112",n={"wrapper-border-radius":"_wrapper-border-radius_15srj_1","wrapper-info":"_wrapper-info_15srj_5",wrapper:L,sized:R,table:H,noResults:M,controls:V,input:K,colorControlTitle:U,colorControl:J,colorInput:X,card:q,cardHeader:G,icons:Q,icon:Y,iconFill:Z,strokeIcon:ee,fillAndStrokeIcon:ne},oe={name:{description:"Имя иконки",table:{defaultValue:{summary:""},type:{summary:"string"}},options:[...Object.keys({...l[16],...l[24],...l[32]})],control:{type:"select"}},color:{description:"Цвет иконки",table:{defaultValue:{summary:"primary"},type:{summary:'"action" | "disabled" | "error" | "primary" | "secondary" | "inherit" | "success" | "warning"'}},options:["action","disabled","error","primary","secondary","inherit","success","warning"],control:{type:"select"}},htmlColor:{description:"HTML цвет иконки. Чтобы его включить нужно в опциях цвета выбрать inherit.",table:{defaultValue:{summary:void 0},type:{summary:"string"}},control:{type:"color"}},containerSize:{description:"Размер контейнера иконки",table:{defaultValue:{summary:"24"},type:{summary:'"16" | "24" | "32"'}},options:[16,24,32],control:{type:"select"}},size:{description:"Физический размер иконки",table:{defaultValue:{summary:"24"},type:{summary:"number"}},options:[16,24,32],control:{type:"select"}},badge:{description:"JSX код компонента Badge",table:{defaultValue:{summary:"<Badge size='s' color='error'>1</Badge>"},type:{summary:"ReactNode"}},control:{type:"boolean"},mapping:{false:"",true:o($,{size:"s",color:"error",children:"1"})}}},te=oe,re={title:"Components/Icon/Stories",component:B,argTypes:te,parameters:{layout:"fullscreen"}},c=i=>o("div",{className:b(n.wrapper,n.sized,n["wrapper-border-radius"]),children:o(B,{...i})});c.storyName="Компонент Icon по умолчанию";c.args={name:"IconTuneControlOutlined32",color:"primary",containerSize:24};c.decorators=[i=>o("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"200px"},children:o(i,{})})];const a=()=>{const i=["IconJsonOutlined24","IconLightningStroke16","IconLightningStroke24","IconLightningStroke32","IconPhoneCallContact16","IconPhoneCallContact24","IconPhoneCallContact32","IconTemperatureStroke16","IconTemperatureStroke24","IconTemperatureStroke32","IconWeightTypeOutlined16","IconWeightTypeOutlined24","IconWeightTypeOutlined32","IconMesBunkerOutlined16","IconMesBunkerOutlined24","IconMesBunkerOutlined32","IconPicInPic16","IconPicInPic24","IconPicInPic32"],E=["IconLightningFilled16","IconLightningFilled24","IconLightningFilled32","IconBasketBuying16","IconBasketBuying24","IconBasketBuying32","IconPlay16","IconPlay24","IconPlay32","IconBalanceOutlined16","IconBalanceOutlined24","IconBalanceOutlined32","IconKovsh16","IconKovsh24","IconKovsh32","IconWeightTypeFilled16","IconWeightTypeFilled24","IconWeightTypeFilled32"],j=["IconBorder16","IconBorder24","IconBorder32"],[p,A]=s.useState(""),[O,P]=s.useState(p),u={};s.useEffect(()=>{const e=setTimeout(()=>{P(p)},500);return()=>{clearTimeout(e)}},[p]);const w=e=>{const r=e.target.value;document.documentElement.style.setProperty("--icon-color",r)},f=e=>e.replace("Icon","");Object.keys(l).forEach(e=>{Object.keys(l[e]||{}).forEach(r=>{const t=f(r).replace(e.toString(),"");u[t]||(u[t]={});const h=r.includes("Kovsh"),d=l[e][r];if(d){const m={style:{...h&&{stroke:"var(--icon-color)"}}};u[t][e.toString()]=s.createElement(d,m)}})});const C=Object.keys(u).filter(e=>O.toLowerCase().split(" ").every(t=>e.toLowerCase().includes(t))).map(e=>({title:e,sizes:u[e]})),y=s.useRef(null);return s.useEffect(()=>{const e=getComputedStyle(document.documentElement).getPropertyValue("--icon-color").trim()||"#167ffb";y.current&&(y.current.value=e)},[]),I("div",{className:n.wrapper,children:[I("div",{className:n.controls,children:[o(z,{label:"Поиск иконок",value:p,onChange:e=>A(e.target.value),className:n.input}),I("div",{className:n.colorControl,children:[o(g,{variant:"Body1",className:n.colorControlTitle,children:"Выберите цвет:"}),o("input",{type:"color",ref:y,defaultValue:"#167ffb",onChange:w,className:n.colorInput})]})]}),o("div",{className:n.table,children:C.length>0?C.map((e,r)=>I(D,{className:n.card,indicatorStatus:"default",children:[o("div",{className:n.cardHeader,children:o(g,{variant:"Body1",color:"primary",children:W.startCase(f(e.title))})}),o("div",{className:n.icons,children:Object.entries(e.sizes).map(([t,h])=>{const d=i.includes(`Icon${e.title}${t}`),m=E.includes(`Icon${e.title}${t}`),F=j.includes(`Icon${e.title}${t}`);return o(x,{copy:`Icon${e.title}${t}`,placement:"bottom",children:o("div",{className:b(n.icon,{[n.strokeIcon]:d,[n.fillAndStrokeIcon]:m,[n.iconFill]:!d&&!m&&!F}),children:h},t)},`Icon${e.title}${t}`)})})]},r)):o(g,{variant:"Heading2",color:"primary",className:n.noResults,children:"Ничего не найдено"})})]})};a.storyName="Все доступные иконки";var k,S,T;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`(argsTypes: TIconProps): JSX.Element => {
  return <div className={clsx(styles.wrapper, styles.sized, styles['wrapper-border-radius'])}>
      <Icon {...argsTypes} />
    </div>;
}`,...(T=(S=c.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var _,v,N;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`(): JSX.Element => {
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
        {filteredIcons.length > 0 ? filteredIcons.map((icon, key) => <Card key={key} className={styles.card} indicatorStatus="default">
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
}`,...(N=(v=a.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};const ce=["IconComponent","AllIcons"],Se=Object.freeze(Object.defineProperty({__proto__:null,AllIcons:a,IconComponent:c,__namedExportsOrder:ce,default:re},Symbol.toStringTag,{value:"Module"}));export{a as A,Se as I,te as a,n as l};
