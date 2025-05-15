import{j as u}from"./jsx-runtime-BRNY0I4F.js";import{r as C}from"./index-Bnop-kX6.js";import{af as ye,a$ as ge,b0 as B,b1 as Se,ax as ve,aR as Ce,ag as _e,b2 as ke}from"./TreeList-B-WBSPVj.js";import{C as Te}from"./index-DqAX-RI3.js";import"./generateUUID-Cqv9hAcn.js";import"./index-C1V47aNp.js";import"./index-DppSdhCO.js";import{B as ie}from"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import{T as F}from"./index-qC5wYQgy.js";import{i as E,I as ae}from"./index-C34gbTH6.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-mRe2NAx2.js";import"./index-DokmLR-l.js";import{c as xe}from"./clsx-B-dksMZM.js";import{g as Oe}from"./styles.module-ox-emdf8.js";function q(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}const be="_wrapper_z8k8n_5",ze="_sized_z8k8n_35",we="_row_z8k8n_47",Ne="_table_z8k8n_56",Pe="_noResults_z8k8n_63",Re="_controls_z8k8n_69",Ee="_input_z8k8n_77",Me="_colorControlTitle_z8k8n_82",je="_colorControl_z8k8n_82",Le="_colorInput_z8k8n_95",Ae="_card_z8k8n_99",Be="_cardHeader_z8k8n_106",Fe="_icons_z8k8n_117",$e="_icon_z8k8n_15",We="_strokeIcon_z8k8n_135",Ue="_fillAndStrokeIcon_z8k8n_139",De="_iconFill_z8k8n_144",S={"wrapper-border-radius":"_wrapper-border-radius_z8k8n_5","wrapper-info":"_wrapper-info_z8k8n_9","icon-block":"_icon-block_z8k8n_15",wrapper:be,sized:ze,row:we,table:Ne,noResults:Pe,controls:Re,input:Ee,colorControlTitle:Me,colorControl:je,colorInput:Le,card:Ae,cardHeader:Be,icons:Fe,icon:$e,strokeIcon:We,fillAndStrokeIcon:Ue,iconFill:De},He={name:{description:"Имя иконки",table:{defaultValue:{summary:""},type:{summary:"string"}},options:[...Object.keys({...E[16],...E[24],...E[32]})],control:{type:"select"}},color:{description:"Цвет иконки",table:{defaultValue:{summary:"primary"},type:{summary:'"action" | "disabled" | "error" | "primary" | "secondary" | "inherit" | "success" | "warning"'}},options:["action","disabled","error","primary","secondary","inherit","success","warning"],control:{type:"select"}},htmlColor:{description:"HTML цвет иконки. Чтобы его включить нужно в опциях цвета выбрать inherit.",table:{defaultValue:{summary:void 0},type:{summary:"string"}},control:{type:"color"}},containerSize:{description:"Размер контейнера иконки",table:{defaultValue:{summary:"24"},type:{summary:'"16" | "24" | "32"'}},options:[16,24,32],control:{type:"select"}},badge:{description:"JSX код компонента Badge",table:{defaultValue:{summary:"<Badge size='s' color='error'>1</Badge>"},type:{summary:"ReactNode"}},control:{type:"boolean"},mapping:{false:"",true:u.jsx(ye,{size:"s",color:"error",children:"1"})}}},ce={unit:{description:"Строковое значение, отображаемое в иконке. Например, кг, см и тд",table:{defaultValue:{summary:""},type:{summary:"string"}},control:{type:"text"}},className:{description:"Дополнительный CSS класс",table:{type:{summary:"string"}},control:{type:"text"}},style:{description:"Inline CSS стили",table:{type:{summary:"CSSProperties"}},control:{type:"object"}}};var Ve=typeof performance=="object"&&typeof performance.now=="function",K=Ve?function(){return performance.now()}:function(){return Date.now()};function J(r){cancelAnimationFrame(r.id)}function qe(r,t){var i=K();function d(){K()-i>=t?r.call(null):I.id=requestAnimationFrame(d)}var I={id:requestAnimationFrame(d)};return I}var $=-1;function G(r){if(r===void 0&&(r=!1),$===-1||r){var t=document.createElement("div"),i=t.style;i.width="50px",i.height="50px",i.overflow="scroll",document.body.appendChild(t),$=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return $}var R=null;function X(r){if(r===void 0&&(r=!1),R===null||r){var t=document.createElement("div"),i=t.style;i.width="50px",i.height="50px",i.overflow="scroll",i.direction="rtl";var d=document.createElement("div"),I=d.style;return I.width="100px",I.height="100px",t.appendChild(d),document.body.appendChild(t),t.scrollLeft>0?R="positive-descending":(t.scrollLeft=1,t.scrollLeft===0?R="negative":R="positive-ascending"),document.body.removeChild(t),R}return R}var Ke=150,Je=function(t,i){return t};function Ge(r){var t,i=r.getItemOffset,d=r.getEstimatedTotalSize,I=r.getItemSize,P=r.getOffsetForIndexAndAlignment,z=r.getStartIndexForOffset,_=r.getStopIndexForStartIndex,k=r.initInstanceProps,T=r.shouldResetStyleCacheOnItemSizeChange,l=r.validateProps;return t=function(g){ge(v,g);function v(m){var e;return e=g.call(this,m)||this,e._instanceProps=k(e.props,q(e)),e._outerRef=void 0,e._resetIsScrollingTimeoutId=null,e.state={instance:q(e),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof e.props.initialScrollOffset=="number"?e.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},e._callOnItemsRendered=void 0,e._callOnItemsRendered=B(function(n,o,s,a){return e.props.onItemsRendered({overscanStartIndex:n,overscanStopIndex:o,visibleStartIndex:s,visibleStopIndex:a})}),e._callOnScroll=void 0,e._callOnScroll=B(function(n,o,s){return e.props.onScroll({scrollDirection:n,scrollOffset:o,scrollUpdateWasRequested:s})}),e._getItemStyle=void 0,e._getItemStyle=function(n){var o=e.props,s=o.direction,a=o.itemSize,h=o.layout,c=e._getItemStyleCache(T&&a,T&&h,T&&s),p;if(c.hasOwnProperty(n))p=c[n];else{var y=i(e.props,n,e._instanceProps),x=I(e.props,n,e._instanceProps),O=s==="horizontal"||h==="horizontal",j=s==="rtl",L=O?y:0;c[n]=p={position:"absolute",left:j?void 0:L,right:j?L:void 0,top:O?0:y,height:O?"100%":x,width:O?x:"100%"}}return p},e._getItemStyleCache=void 0,e._getItemStyleCache=B(function(n,o,s){return{}}),e._onScrollHorizontal=function(n){var o=n.currentTarget,s=o.clientWidth,a=o.scrollLeft,h=o.scrollWidth;e.setState(function(c){if(c.scrollOffset===a)return null;var p=e.props.direction,y=a;if(p==="rtl")switch(X()){case"negative":y=-a;break;case"positive-descending":y=h-s-a;break}return y=Math.max(0,Math.min(y,h-s)),{isScrolling:!0,scrollDirection:c.scrollOffset<y?"forward":"backward",scrollOffset:y,scrollUpdateWasRequested:!1}},e._resetIsScrollingDebounced)},e._onScrollVertical=function(n){var o=n.currentTarget,s=o.clientHeight,a=o.scrollHeight,h=o.scrollTop;e.setState(function(c){if(c.scrollOffset===h)return null;var p=Math.max(0,Math.min(h,a-s));return{isScrolling:!0,scrollDirection:c.scrollOffset<p?"forward":"backward",scrollOffset:p,scrollUpdateWasRequested:!1}},e._resetIsScrollingDebounced)},e._outerRefSetter=function(n){var o=e.props.outerRef;e._outerRef=n,typeof o=="function"?o(n):o!=null&&typeof o=="object"&&o.hasOwnProperty("current")&&(o.current=n)},e._resetIsScrollingDebounced=function(){e._resetIsScrollingTimeoutId!==null&&J(e._resetIsScrollingTimeoutId),e._resetIsScrollingTimeoutId=qe(e._resetIsScrolling,Ke)},e._resetIsScrolling=function(){e._resetIsScrollingTimeoutId=null,e.setState({isScrolling:!1},function(){e._getItemStyleCache(-1,null)})},e}v.getDerivedStateFromProps=function(e,n){return Xe(e,n),l(e),null};var f=v.prototype;return f.scrollTo=function(e){e=Math.max(0,e),this.setState(function(n){return n.scrollOffset===e?null:{scrollDirection:n.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},f.scrollToItem=function(e,n){n===void 0&&(n="auto");var o=this.props,s=o.itemCount,a=o.layout,h=this.state.scrollOffset;e=Math.max(0,Math.min(e,s-1));var c=0;if(this._outerRef){var p=this._outerRef;a==="vertical"?c=p.scrollWidth>p.clientWidth?G():0:c=p.scrollHeight>p.clientHeight?G():0}this.scrollTo(P(this.props,e,n,h,this._instanceProps,c))},f.componentDidMount=function(){var e=this.props,n=e.direction,o=e.initialScrollOffset,s=e.layout;if(typeof o=="number"&&this._outerRef!=null){var a=this._outerRef;n==="horizontal"||s==="horizontal"?a.scrollLeft=o:a.scrollTop=o}this._callPropsCallbacks()},f.componentDidUpdate=function(){var e=this.props,n=e.direction,o=e.layout,s=this.state,a=s.scrollOffset,h=s.scrollUpdateWasRequested;if(h&&this._outerRef!=null){var c=this._outerRef;if(n==="horizontal"||o==="horizontal")if(n==="rtl")switch(X()){case"negative":c.scrollLeft=-a;break;case"positive-ascending":c.scrollLeft=a;break;default:var p=c.clientWidth,y=c.scrollWidth;c.scrollLeft=y-p-a;break}else c.scrollLeft=a;else c.scrollTop=a}this._callPropsCallbacks()},f.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&J(this._resetIsScrollingTimeoutId)},f.render=function(){var e=this.props,n=e.children,o=e.className,s=e.direction,a=e.height,h=e.innerRef,c=e.innerElementType,p=e.innerTagName,y=e.itemCount,x=e.itemData,O=e.itemKey,j=O===void 0?Je:O,L=e.layout,le=e.outerElementType,de=e.outerTagName,ue=e.style,me=e.useIsScrolling,pe=e.width,U=this.state.isScrolling,A=s==="horizontal"||L==="horizontal",he=A?this._onScrollHorizontal:this._onScrollVertical,D=this._getRangeToRender(),Ie=D[0],fe=D[1],H=[];if(y>0)for(var M=Ie;M<=fe;M++)H.push(C.createElement(n,{data:x,key:j(M,x),index:M,isScrolling:me?U:void 0,style:this._getItemStyle(M)}));var V=d(this.props,this._instanceProps);return C.createElement(le||de||"div",{className:o,onScroll:he,ref:this._outerRefSetter,style:Se({position:"relative",height:a,width:pe,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:s},ue)},C.createElement(c||p||"div",{children:H,ref:h,style:{height:A?"100%":V,pointerEvents:U?"none":void 0,width:A?V:"100%"}}))},f._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var e=this.props.itemCount;if(e>0){var n=this._getRangeToRender(),o=n[0],s=n[1],a=n[2],h=n[3];this._callOnItemsRendered(o,s,a,h)}}if(typeof this.props.onScroll=="function"){var c=this.state,p=c.scrollDirection,y=c.scrollOffset,x=c.scrollUpdateWasRequested;this._callOnScroll(p,y,x)}},f._getRangeToRender=function(){var e=this.props,n=e.itemCount,o=e.overscanCount,s=this.state,a=s.isScrolling,h=s.scrollDirection,c=s.scrollOffset;if(n===0)return[0,0,0,0];var p=z(this.props,c,this._instanceProps),y=_(this.props,p,c,this._instanceProps),x=!a||h==="backward"?Math.max(1,o):1,O=!a||h==="forward"?Math.max(1,o):1;return[Math.max(0,p-x),Math.max(0,Math.min(n-1,y+O)),p,y]},v}(C.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},t}var Xe=function(t,i){t.children,t.direction,t.height,t.layout,t.innerTagName,t.outerTagName,t.width,i.instance},Qe=Ge({getItemOffset:function(t,i){var d=t.itemSize;return i*d},getItemSize:function(t,i){var d=t.itemSize;return d},getEstimatedTotalSize:function(t){var i=t.itemCount,d=t.itemSize;return d*i},getOffsetForIndexAndAlignment:function(t,i,d,I,P,z){var _=t.direction,k=t.height,T=t.itemCount,l=t.itemSize,g=t.layout,v=t.width,f=_==="horizontal"||g==="horizontal",m=f?v:k,e=Math.max(0,T*l-m),n=Math.min(e,i*l),o=Math.max(0,i*l-m+l+z);switch(d==="smart"&&(I>=o-m&&I<=n+m?d="auto":d="center"),d){case"start":return n;case"end":return o;case"center":{var s=Math.round(o+(n-o)/2);return s<Math.ceil(m/2)?0:s>e+Math.floor(m/2)?e:s}case"auto":default:return I>=o&&I<=n?I:I<o?o:n}},getStartIndexForOffset:function(t,i){var d=t.itemCount,I=t.itemSize;return Math.max(0,Math.min(d-1,Math.floor(i/I)))},getStopIndexForStartIndex:function(t,i,d){var I=t.direction,P=t.height,z=t.itemCount,_=t.itemSize,k=t.layout,T=t.width,l=I==="horizontal"||k==="horizontal",g=i*_,v=l?T:P,f=Math.ceil((v+d-g)/_);return Math.max(0,Math.min(z-1,i+f-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){t.itemSize}});const Ye=["IconJsonOutlined24","IconLightningStroke16","IconLightningStroke24","IconLightningStroke32","IconPhoneCallContact16","IconPhoneCallContact24","IconPhoneCallContact32","IconTemperatureStroke16","IconTemperatureStroke24","IconTemperatureStroke32","IconWeightTypeOutlined16","IconWeightTypeOutlined24","IconWeightTypeOutlined32","IconMesBunkerOutlined16","IconMesBunkerOutlined24","IconMesBunkerOutlined32","IconPicInPic16","IconPicInPic24","IconPicInPic32"],Ze=["IconLightningFilled16","IconLightningFilled24","IconLightningFilled32","IconBasketBuying16","IconBasketBuying24","IconBasketBuying32","IconPlay16","IconPlay24","IconPlay32","IconBalanceOutlined16","IconBalanceOutlined24","IconBalanceOutlined32","IconKovsh16","IconKovsh24","IconKovsh32","IconWeightTypeFilled16","IconWeightTypeFilled24","IconWeightTypeFilled32"],et=["IconBorder16","IconBorder24","IconBorder32","IconOrderIsNotSecured16","IconOrderIsNotSecured24","IconOrderIsNotSecured32","IconOrderIsOverlySecured16","IconOrderIsOverlySecured24","IconOrderIsOverlySecured32","IconOrderIsOverlySecuredLater16","IconOrderIsOverlySecuredLater24","IconOrderIsOverlySecuredLater32","IconOrderIsSecured16","IconOrderIsSecured24","IconOrderIsSecured32","IconOrderIsSecuredLater16","IconOrderIsSecuredLater24","IconOrderIsSecuredLater32","IconOrderIsPartiallySecured16","IconOrderIsPartiallySecured24","IconOrderIsPartiallySecured32","IconOrderIsPartiallySecuredLater16","IconOrderIsPartiallySecuredLater24","IconOrderIsPartiallySecuredLater32","IconGrafana16","IconGrafana24","IconGrafana32"],W=3,tt=r=>u.jsx("div",{className:S["icon-block"],children:u.jsx("div",{className:Oe.wrapper,style:{width:"96%",marginLeft:"15px"},children:u.jsx(r,{})})}),nt={title:"Components/Icon/Stories",component:ae,argTypes:He,decorators:[tt],parameters:{layout:"fullscreen"}},w=r=>u.jsx(ie,{justifyContent:"center",children:u.jsx(ae,{...r})});w.storyName="Компонент Icon по умолчанию";w.args={name:"IconTuneControlOutlined32",color:"primary",containerSize:24};const N=()=>{const[r,t]=C.useState(""),i=C.useCallback(l=>l.replace("Icon",""),[]),d=C.useMemo(()=>{const l={};return Object.keys(E).forEach(g=>{Object.keys(E[g]||{}).forEach(v=>{const f=i(v).replace(g.toString(),"");l[f]||(l[f]={});const m=v.includes("Kovsh"),e=E[g][v];if(e){const n={style:{...m&&{stroke:"var(--brand-sapphire-60)"}}};l[f][g.toString()]=C.createElement(e,n)}})}),l},[i]),I=C.useCallback(l=>{const g=l.target.value;document.documentElement.style.setProperty("--icon-search",g)},[]),P=C.useCallback(l=>{const g=l.target.value;t(g)},[]),z=()=>{t("")},_=C.useRef(null);C.useEffect(()=>{document.documentElement.style.removeProperty("--icon-search");const l=getComputedStyle(document.documentElement).getPropertyValue("var(--icon-search)").trim()||"#1952b6";_.current&&(_.current.value=l)},[]);const k=C.useMemo(()=>Object.keys(d).filter(l=>l.toLowerCase().includes(r.toLowerCase())).map(l=>({title:l,sizes:d[l]})),[d,r]),T=({index:l,style:g})=>u.jsx("div",{style:g,className:S.row,children:new Array(W).fill(null).map((v,f)=>{const m=l*W+f;if(m>=k.length)return null;const e=k[m];return u.jsxs(_e,{className:S.card,indicatorStatus:"default",children:[u.jsx("div",{className:S.cardHeader,children:u.jsx(F,{variant:"Body1",color:"var(--steel-90)",children:ke.startCase(i(e.title))})}),u.jsx("div",{className:S.icons,children:Object.entries(e.sizes).map(([n,o])=>{const s=Ye.includes(`Icon${e.title}${n}`),a=Ze.includes(`Icon${e.title}${n}`),h=et.includes(`Icon${e.title}${n}`);return u.jsx(Te,{copy:`Icon${e.title}${n}`,placement:"bottom",children:u.jsx("div",{className:xe(S.icon,{[S.strokeIcon]:s,[S.fillAndStrokeIcon]:a,[S.iconFill]:!s&&!a&&!h}),children:o})},`Icon${e.title}${n}`)})})]},m)})});return u.jsxs("div",{className:S.wrapper,children:[u.jsxs("div",{className:S.controls,children:[u.jsx(ve,{label:"Поиск иконок",value:r,onChange:P,className:S.input,reset:!0,onReset:z}),u.jsxs("div",{className:S.colorControl,children:[u.jsx(F,{variant:"Body1",className:S.colorControlTitle,children:"Выберите цвет:"}),u.jsx("input",{type:"color",ref:_,onChange:I,className:S.colorInput})]})]}),u.jsx("div",{className:S.table,children:k.length>0?u.jsx(Qe,{height:900,itemCount:Math.ceil(k.length/W),itemSize:200,width:"100%",children:T}):u.jsx(F,{variant:"Heading2",color:"var(--text-grey-900)",className:S.noResults,children:"Ничего не найдено"})})]})};N.storyName="Все доступные иконки";N.parameters={controls:{disable:!0}};const b=r=>u.jsx(ie,{justifyContent:"center",children:u.jsx(Ce,{...r})});b.storyName="Компонент иконки для единиц измерения";b.args={unit:"кг"};b.parameters={controls:{include:Object.keys(ce)}};b.argTypes=ce;var Q,Y,Z;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`(argsTypes: TIconProps): JSX.Element => {
  return <Box justifyContent="center">
      <Icon {...argsTypes} />
    </Box>;
}`,...(Z=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ne;N.parameters={...N.parameters,docs:{...(ee=N.parameters)==null?void 0:ee.docs,source:{originalSource:`(): JSX.Element => {
  const [searchText, setSearchText] = useState('');
  const formatIconName = useCallback((name: string) => {
    return name.replace('Icon', '');
  }, []);
  const iconsByNames: IconsWithSizesAndColors = useMemo(() => {
    const result: IconsWithSizesAndColors = {};
    Object.keys(icons).forEach((size: keyof TIconsObject) => {
      Object.keys(icons[size] || {}).forEach((iconName: string) => {
        const formattedIconName = formatIconName(iconName as TIconName).replace(size.toString(), '');
        if (!result[formattedIconName]) {
          result[formattedIconName] = {};
        }
        const useStroke = iconName.includes('Kovsh');
        const iconComponent = icons[size][iconName as TIconName];
        if (iconComponent) {
          const iconProps: Record<string, any> = {
            style: {
              ...(useStroke && {
                stroke: 'var(--brand-sapphire-60)'
              })
            }
          };
          result[formattedIconName][size.toString()] = createElement(iconComponent, iconProps);
        }
      });
    });
    return result;
  }, [formatIconName]);
  const handleChangeColor = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    document.documentElement.style.setProperty('--icon-search', newColor);
  }, []);
  const handleSearchChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = useCallback(e => {
    const value = e.target.value;
    setSearchText(value);
  }, []);
  const resetSearch = () => {
    setSearchText('');
  };
  const colorInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    document.documentElement.style.removeProperty('--icon-search');
    const initialColor = getComputedStyle(document.documentElement).getPropertyValue('var(--icon-search)').trim() || '#1952b6';
    if (colorInputRef.current) {
      colorInputRef.current.value = initialColor;
    }
  }, []);
  const filteredIconsMemo = useMemo(() => {
    return Object.keys(iconsByNames).filter(iconName => iconName.toLowerCase().includes(searchText.toLowerCase())).map(iconName => ({
      title: iconName,
      sizes: iconsByNames[iconName]
    }));
  }, [iconsByNames, searchText]);
  const Row = ({
    index,
    style
  }: {
    index: number;
    style: CSSProperties;
  }) => {
    return <div style={style} className={styles.row}>
        {new Array(rowCount).fill(null).map((_, colIndex) => {
        const iconIndex = index * rowCount + colIndex;
        if (iconIndex >= filteredIconsMemo.length) return null;
        const icon = filteredIconsMemo[iconIndex];
        return <Card key={iconIndex} className={styles.card} indicatorStatus="default">
              <div className={styles.cardHeader}>
                <Typography variant="Body1" color="var(--steel-90)">
                  {startCase(formatIconName(icon.title))}
                </Typography>
              </div>
              <div className={styles.icons}>
                {Object.entries(icon.sizes).map(([size, iconElement]) => {
              const useStroke = iconsUseStroke.includes(\`Icon\${icon.title}\${size}\`);
              const useFillAndStroke = iconsUseFillAndStroke.includes(\`Icon\${icon.title}\${size}\`);
              const isAlwaysDefaultColorIcon = iconsAlwaysDefaultColor.includes(\`Icon\${icon.title}\${size}\`);
              return <CopyWrapper key={\`Icon\${icon.title}\${size}\`} copy={\`Icon\${icon.title}\${size}\`} placement="bottom">
                      <div className={clsx(styles.icon, {
                  [styles.strokeIcon]: useStroke,
                  [styles.fillAndStrokeIcon]: useFillAndStroke,
                  [styles.iconFill]: !useStroke && !useFillAndStroke && !isAlwaysDefaultColorIcon
                })}>
                        {iconElement}
                      </div>
                    </CopyWrapper>;
            })}
              </div>
            </Card>;
      })}
      </div>;
  };
  return <div className={styles.wrapper}>
      <div className={styles.controls}>
        <Input label="Поиск иконок" value={searchText} onChange={handleSearchChange} className={styles.input} reset onReset={resetSearch} />
        <div className={styles.colorControl}>
          <Typography variant="Body1" className={styles.colorControlTitle}>
            Выберите цвет:
          </Typography>
          <input type="color" ref={colorInputRef} onChange={handleChangeColor} className={styles.colorInput} />
        </div>
      </div>
      <div className={styles.table}>
        {filteredIconsMemo.length > 0 ? <List height={900} itemCount={Math.ceil(filteredIconsMemo.length / rowCount)} itemSize={200} width={'100%'}>
            {Row}
          </List> : <Typography variant="Heading2" color="var(--text-grey-900)" className={styles.noResults}>
            Ничего не найдено
          </Typography>}
      </div>
    </div>;
}`,...(ne=(te=N.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,re,se;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`(argsTypes: IIconUnitProps): JSX.Element => {
  return <Box justifyContent="center">
      <IconUnit {...argsTypes} />
    </Box>;
}`,...(se=(re=b.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};const ot=["IconComponent","AllIcons","IconUnitComponent"],Ct=Object.freeze(Object.defineProperty({__proto__:null,AllIcons:N,IconComponent:w,IconUnitComponent:b,__namedExportsOrder:ot,default:nt},Symbol.toStringTag,{value:"Module"}));export{N as A,Ct as I,He as a,S as l};
