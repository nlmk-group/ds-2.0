import{j as o,c as b,a as m}from"./clsx.m-CcuEzMhP.js";import{r as a}from"./index-CBqU2yxZ.js";import{C as $}from"./index-D4dgyRWh.js";import{i,I as A}from"./index-CpJBQeN-.js";import{a2 as z,Q as D,ac as W}from"./index-eGAKGCMw.js";import"./generateUUID-BkPc_NdJ.js";import"./index-SiU_55iz.js";import"./index-BzeUb5Di.js";import{T as h}from"./index-fbTu1Hcf.js";import"./index-hvdSV1r-.js";import"./index-BQVY97ak.js";import"./index-B5tj7Glx.js";import"./index-14g2znra.js";const L={name:{description:"Имя иконки",table:{defaultValue:{summary:""},type:{summary:"string"}},options:[...Object.keys({...i[16],...i[24],...i[32]})],control:{type:"select"}},color:{description:"Цвет иконки",table:{defaultValue:{summary:"primary"},type:{summary:'"action" | "disabled" | "error" | "primary" | "secondary" | "inherit" | "success" | "warning"'}},options:["action","disabled","error","primary","secondary","inherit","success","warning"],control:{type:"select"}},htmlColor:{description:"HTML цвет иконки",table:{defaultValue:{summary:void 0},type:{summary:"string"}},control:{type:"color"}},containerSize:{description:"Размер контейнера иконки",table:{defaultValue:{summary:"24"},type:{summary:'"16" | "24" | "32"'}},options:[16,24,32],control:{type:"select"}},size:{description:"Физический размер иконки",table:{defaultValue:{summary:"24"},type:{summary:"number"}},options:[16,24,32],control:{type:"select"}}},j=L,R="_wrapper_goa93_1",H="_sized_goa93_8",M="_table_goa93_16",V="_noResults_goa93_23",K="_controls_goa93_29",U="_input_goa93_37",J="_colorControlTitle_goa93_42",X="_colorControl_goa93_42",Q="_colorInput_goa93_55",q="_card_goa93_59",G="_cardHeader_goa93_66",Y="_icons_goa93_74",Z="_icon_goa93_74",ee="_iconFill_goa93_91",ne="_strokeIcon_goa93_95",oe="_fillAndStrokeIcon_goa93_99",n={wrapper:R,sized:H,table:M,noResults:V,controls:K,input:U,colorControlTitle:J,colorControl:X,colorInput:Q,card:q,cardHeader:G,icons:Y,icon:Z,iconFill:ee,strokeIcon:ne,fillAndStrokeIcon:oe},te={title:"Components/Icon/Stories",component:A,argTypes:j,parameters:{layout:"fullscreen"}},r=({name:u="IconArmatura32",color:p="primary",containerSize:I=32,...s})=>o("div",{className:b(n.wrapper,n.sized),children:o(A,{name:u,color:p,containerSize:I,...s})});r.storyName="Компонент Icon по умолчанию";r.args={name:"IconArmatura32",color:"primary",containerSize:32};r.decorators=[u=>o("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"200px"},children:o(u,{})})];const l=()=>{const u=["IconJsonOutlined24","IconLightningStroke16","IconLightningStroke24","IconLightningStroke32","IconPhoneCallContact16","IconPhoneCallContact24","IconPhoneCallContact32","IconTemperatureStroke16","IconTemperatureStroke24","IconTemperatureStroke32","IconWeightTypeOutlined16","IconWeightTypeOutlined24","IconWeightTypeOutlined32","IconMesBunkerOutlined16","IconMesBunkerOutlined24","IconMesBunkerOutlined32","IconPicInPic16","IconPicInPic24","IconPicInPic32"],p=["IconLightningFilled16","IconLightningFilled24","IconLightningFilled32","IconBasketBuying16","IconBasketBuying24","IconBasketBuying32","IconPlay16","IconPlay24","IconPlay32","IconBalanceOutlined16","IconBalanceOutlined24","IconBalanceOutlined32","IconKovsh16","IconKovsh24","IconKovsh32","IconWeightTypeFilled16","IconWeightTypeFilled24","IconWeightTypeFilled32"],I=["IconBorder16","IconBorder24","IconBorder32"],[s,O]=a.useState(""),[P,F]=a.useState(s),d={};a.useEffect(()=>{const e=setTimeout(()=>{F(s)},500);return()=>{clearTimeout(e)}},[s]);const x=e=>{const c=e.target.value;document.documentElement.style.setProperty("--icon-color",c)},f=e=>e.replace("Icon","");Object.keys(i).forEach(e=>{Object.keys(i[e]).forEach(c=>{const t=f(c).replace(e,"");d[t]||(d[t]={});const g=c.includes("Kovsh");d[t][e]=a.createElement(i[e][c],{style:{...g&&{stroke:"var(--icon-color)"}}})})});const C=Object.keys(d).filter(e=>P.toLowerCase().split(" ").every(t=>e.toLowerCase().includes(t))).map(e=>({title:e,sizes:d[e]})),y=a.useRef(null);return a.useEffect(()=>{const e=getComputedStyle(document.documentElement).getPropertyValue("--icon-color").trim()||"#167ffb";y.current&&(y.current.value=e)},[]),m("div",{className:n.wrapper,children:[m("div",{className:n.controls,children:[o(z,{label:"Поиск иконок",value:s,onChange:e=>O(e.target.value),className:n.input}),m("div",{className:n.colorControl,children:[o(h,{variant:"Body1",className:n.colorControlTitle,children:"Выберите цвет:"}),o("input",{type:"color",ref:y,defaultValue:"#167ffb",onChange:x,className:n.colorInput})]})]}),o("div",{className:n.table,children:C.length>0?C.map((e,c)=>m(D,{className:n.card,indicatorStatus:"info",children:[o("div",{className:n.cardHeader,children:o(h,{variant:"Body1",color:"primary",children:W.startCase(f(e.title))})}),o("div",{className:n.icons,children:Object.entries(e.sizes).map(([t,g])=>{const k=u.includes(`Icon${e.title}${t}`),S=p.includes(`Icon${e.title}${t}`),w=I.includes(`Icon${e.title}${t}`);return o($,{copy:`Icon${e.title}${t}`,placement:"bottom",children:o("div",{className:b(n.icon,{[n.strokeIcon]:k,[n.fillAndStrokeIcon]:S,[n.iconFill]:!k&&!S&&!w}),children:g},t)},`Icon${e.title}${t}`)})})]},c)):o(h,{variant:"Heading2",color:"primary",className:n.noResults,children:"Ничего не найдено"})})]})};l.storyName="Все доступные иконки";var T,_,v;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`({
  name = 'IconArmatura32',
  color = 'primary',
  containerSize = 32,
  ...args
}: any): JSX.Element => {
  return <div className={clsx(styles.wrapper, styles.sized)}>
      <Icon name={name} color={color} containerSize={containerSize} {...args} />
    </div>;
}`,...(v=(_=r.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var N,B,E;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`(): JSX.Element => {
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
  Object.keys(icons).forEach(size => {
    Object.keys(icons[size]).forEach(iconName => {
      const formattedIconName = formatIconName(iconName).replace(size, '');
      if (!iconsByNames[formattedIconName]) {
        iconsByNames[formattedIconName] = {};
      }
      const useStroke = iconName.includes('Kovsh');
      iconsByNames[formattedIconName][size] = createElement(icons[size][iconName], {
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
}`,...(E=(B=l.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};const ce=["IconComponent","AllIcons"],fe=Object.freeze(Object.defineProperty({__proto__:null,AllIcons:l,IconComponent:r,__namedExportsOrder:ce,default:te},Symbol.toStringTag,{value:"Module"}));export{l as A,fe as I,j as a};
