import{j as d,r as O}from"./iframe-BPtLBEuk.js";import{_ as de,a as me}from"./inheritsLoose-D3Az7yH5.js";import{C as pe}from"./index-JZteZNBV.js";import{I as he}from"./index-B8NQmRXS.js";import{B as Q}from"./index-d_6bz31j.js";import{C as Ie}from"./index-CkghP8bN.js";import{T as A}from"./index-C9_7xPUt.js";import{B as fe,o as R,I as ee}from"./index-CDRf2h9x.js";import{c as te}from"./clsx-B-dksMZM.js";import{g as ye}from"./styles.module-BGEDXogi.js";import{B as ge}from"./index-D-pLh_NR.js";const Se=n=>{const t=n.match(/[A-Z]+(?![a-z])|[A-Z]?[a-z]+|\d+/g);return t?t.map(s=>s[0].toUpperCase()+s.slice(1).toLowerCase()).join(" "):""},ve={"icon-unit":"IconUnit-module__icon-unit___Masgg"},U=({unit:n,className:t,style:s})=>d.jsx(fe,{containerSize:32,className:te(ve["icon-unit"],t),style:s,children:d.jsx(A,{children:n})});try{U.displayName="IconUnit",U.__docgenInfo={description:"",displayName:"IconUnit",props:{unit:{defaultValue:null,description:"",name:"unit",required:!0,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}function K(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}const _e="Icon-module__wrapper___RjU7B",Ce="Icon-module__row___i2ubI",Oe="Icon-module__table___U17ph",Te="Icon-module__noResults___ydYb7",xe="Icon-module__controls___QlfXO",be="Icon-module__input___WCmns",Ne="Icon-module__colorControlTitle___Y-jmZ",we="Icon-module__colorControl___OKfes",ke="Icon-module__colorInput___VcbuF",ze="Icon-module__card___kzPjV",Pe="Icon-module__cardHeader___HGE3u",je="Icon-module__icons___A5JR8",Re="Icon-module__icon___pSbls",Ee="Icon-module__strokeIcon___1qqhB",Le="Icon-module__fillAndStrokeIcon___tBLqh",Me="Icon-module__iconFill___2Dtvk",S={"wrapper-info":"Icon-module__wrapper-info___p4O-8","icon-block":"Icon-module__icon-block___-zosa",wrapper:_e,row:Ce,table:Oe,noResults:Te,controls:xe,input:be,colorControlTitle:Ne,colorControl:we,colorInput:ke,card:ze,cardHeader:Pe,icons:je,icon:Re,strokeIcon:Ee,fillAndStrokeIcon:Le,iconFill:Me},Ae={name:{description:"Имя иконки",table:{defaultValue:{summary:""},type:{summary:"string"}},options:[...Object.keys({...R[16],...R[24],...R[32]})],control:{type:"select"}},color:{description:"Цвет иконки",table:{defaultValue:{summary:"primary"},type:{summary:'"action" | "disabled" | "error" | "primary" | "secondary" | "inherit" | "success" | "warning"'}},options:["action","disabled","error","primary","secondary","inherit","success","warning"],control:{type:"select"}},htmlColor:{description:"HTML цвет иконки. Чтобы его включить нужно в опциях цвета выбрать inherit.",table:{defaultValue:{summary:void 0},type:{summary:"string"}},control:{type:"color"}},containerSize:{description:"Размер контейнера иконки",table:{defaultValue:{summary:"24"},type:{summary:'"16" | "24" | "32"'}},options:[16,24,32],control:{type:"select"}},badge:{description:"JSX код компонента Badge",table:{defaultValue:{summary:"<Badge size='s' color='error'>1</Badge>"},type:{summary:"ReactNode"}},control:{type:"boolean"},mapping:{false:"",true:d.jsx(ge,{size:"s",color:"error",children:"1"})}}},ne={unit:{description:"Строковое значение, отображаемое в иконке. Например, кг, см и тд",table:{defaultValue:{summary:""},type:{summary:"string"}},control:{type:"text"}},className:{description:"Дополнительный CSS класс",table:{type:{summary:"string"}},control:{type:"text"}},style:{description:"Inline CSS стили",table:{type:{summary:"CSSProperties"}},control:{type:"object"}}};var J=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Be(n,t){return!!(n===t||J(n)&&J(t))}function Fe(n,t){if(n.length!==t.length)return!1;for(var s=0;s<n.length;s++)if(!Be(n[s],t[s]))return!1;return!0}function F(n,t){t===void 0&&(t=Fe);var s,c=[],m,T=!1;function x(){for(var v=[],_=0;_<arguments.length;_++)v[_]=arguments[_];return T&&s===this&&t(v,c)||(m=n.apply(this,v),T=!0,s=this,c=v),m}return x}var We=typeof performance=="object"&&typeof performance.now=="function",G=We?function(){return performance.now()}:function(){return Date.now()};function X(n){cancelAnimationFrame(n.id)}function $e(n,t){var s=G();function c(){G()-s>=t?n.call(null):m.id=requestAnimationFrame(c)}var m={id:requestAnimationFrame(c)};return m}var W=-1;function Z(n){if(n===void 0&&(n=!1),W===-1||n){var t=document.createElement("div"),s=t.style;s.width="50px",s.height="50px",s.overflow="scroll",document.body.appendChild(t),W=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return W}var j=null;function Y(n){if(n===void 0&&(n=!1),j===null||n){var t=document.createElement("div"),s=t.style;s.width="50px",s.height="50px",s.overflow="scroll",s.direction="rtl";var c=document.createElement("div"),m=c.style;return m.width="100px",m.height="100px",t.appendChild(c),document.body.appendChild(t),t.scrollLeft>0?j="positive-descending":(t.scrollLeft=1,t.scrollLeft===0?j="negative":j="positive-ascending"),document.body.removeChild(t),j}return j}var Ue=150,De=function(t,s){return t};function He(n){var t,s=n.getItemOffset,c=n.getEstimatedTotalSize,m=n.getItemSize,T=n.getOffsetForIndexAndAlignment,x=n.getStartIndexForOffset,v=n.getStopIndexForStartIndex,_=n.initInstanceProps,b=n.shouldResetStyleCacheOnItemSizeChange,u=n.validateProps;return t=function(g){de(C,g);function C(p){var e;return e=g.call(this,p)||this,e._instanceProps=_(e.props,K(e)),e._outerRef=void 0,e._resetIsScrollingTimeoutId=null,e.state={instance:K(e),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof e.props.initialScrollOffset=="number"?e.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},e._callOnItemsRendered=void 0,e._callOnItemsRendered=F(function(o,r,i,a){return e.props.onItemsRendered({overscanStartIndex:o,overscanStopIndex:r,visibleStartIndex:i,visibleStopIndex:a})}),e._callOnScroll=void 0,e._callOnScroll=F(function(o,r,i){return e.props.onScroll({scrollDirection:o,scrollOffset:r,scrollUpdateWasRequested:i})}),e._getItemStyle=void 0,e._getItemStyle=function(o){var r=e.props,i=r.direction,a=r.itemSize,I=r.layout,l=e._getItemStyleCache(b&&a,b&&I,b&&i),h;if(l.hasOwnProperty(o))h=l[o];else{var y=s(e.props,o,e._instanceProps),N=m(e.props,o,e._instanceProps),w=i==="horizontal"||I==="horizontal",L=i==="rtl",M=w?y:0;l[o]=h={position:"absolute",left:L?void 0:M,right:L?M:void 0,top:w?0:y,height:w?"100%":N,width:w?N:"100%"}}return h},e._getItemStyleCache=void 0,e._getItemStyleCache=F(function(o,r,i){return{}}),e._onScrollHorizontal=function(o){var r=o.currentTarget,i=r.clientWidth,a=r.scrollLeft,I=r.scrollWidth;e.setState(function(l){if(l.scrollOffset===a)return null;var h=e.props.direction,y=a;if(h==="rtl")switch(Y()){case"negative":y=-a;break;case"positive-descending":y=I-i-a;break}return y=Math.max(0,Math.min(y,I-i)),{isScrolling:!0,scrollDirection:l.scrollOffset<y?"forward":"backward",scrollOffset:y,scrollUpdateWasRequested:!1}},e._resetIsScrollingDebounced)},e._onScrollVertical=function(o){var r=o.currentTarget,i=r.clientHeight,a=r.scrollHeight,I=r.scrollTop;e.setState(function(l){if(l.scrollOffset===I)return null;var h=Math.max(0,Math.min(I,a-i));return{isScrolling:!0,scrollDirection:l.scrollOffset<h?"forward":"backward",scrollOffset:h,scrollUpdateWasRequested:!1}},e._resetIsScrollingDebounced)},e._outerRefSetter=function(o){var r=e.props.outerRef;e._outerRef=o,typeof r=="function"?r(o):r!=null&&typeof r=="object"&&r.hasOwnProperty("current")&&(r.current=o)},e._resetIsScrollingDebounced=function(){e._resetIsScrollingTimeoutId!==null&&X(e._resetIsScrollingTimeoutId),e._resetIsScrollingTimeoutId=$e(e._resetIsScrolling,Ue)},e._resetIsScrolling=function(){e._resetIsScrollingTimeoutId=null,e.setState({isScrolling:!1},function(){e._getItemStyleCache(-1,null)})},e}C.getDerivedStateFromProps=function(e,o){return Ve(e,o),u(e),null};var f=C.prototype;return f.scrollTo=function(e){e=Math.max(0,e),this.setState(function(o){return o.scrollOffset===e?null:{scrollDirection:o.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},f.scrollToItem=function(e,o){o===void 0&&(o="auto");var r=this.props,i=r.itemCount,a=r.layout,I=this.state.scrollOffset;e=Math.max(0,Math.min(e,i-1));var l=0;if(this._outerRef){var h=this._outerRef;a==="vertical"?l=h.scrollWidth>h.clientWidth?Z():0:l=h.scrollHeight>h.clientHeight?Z():0}this.scrollTo(T(this.props,e,o,I,this._instanceProps,l))},f.componentDidMount=function(){var e=this.props,o=e.direction,r=e.initialScrollOffset,i=e.layout;if(typeof r=="number"&&this._outerRef!=null){var a=this._outerRef;o==="horizontal"||i==="horizontal"?a.scrollLeft=r:a.scrollTop=r}this._callPropsCallbacks()},f.componentDidUpdate=function(){var e=this.props,o=e.direction,r=e.layout,i=this.state,a=i.scrollOffset,I=i.scrollUpdateWasRequested;if(I&&this._outerRef!=null){var l=this._outerRef;if(o==="horizontal"||r==="horizontal")if(o==="rtl")switch(Y()){case"negative":l.scrollLeft=-a;break;case"positive-ascending":l.scrollLeft=a;break;default:var h=l.clientWidth,y=l.scrollWidth;l.scrollLeft=y-h-a;break}else l.scrollLeft=a;else l.scrollTop=a}this._callPropsCallbacks()},f.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&X(this._resetIsScrollingTimeoutId)},f.render=function(){var e=this.props,o=e.children,r=e.className,i=e.direction,a=e.height,I=e.innerRef,l=e.innerElementType,h=e.innerTagName,y=e.itemCount,N=e.itemData,w=e.itemKey,L=w===void 0?De:w,M=e.layout,oe=e.outerElementType,re=e.outerTagName,se=e.style,ie=e.useIsScrolling,ae=e.width,D=this.state.isScrolling,B=i==="horizontal"||M==="horizontal",le=B?this._onScrollHorizontal:this._onScrollVertical,H=this._getRangeToRender(),ce=H[0],ue=H[1],V=[];if(y>0)for(var E=ce;E<=ue;E++)V.push(O.createElement(o,{data:N,key:L(E,N),index:E,isScrolling:ie?D:void 0,style:this._getItemStyle(E)}));var q=c(this.props,this._instanceProps);return O.createElement(oe||re||"div",{className:r,onScroll:le,ref:this._outerRefSetter,style:me({position:"relative",height:a,width:ae,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:i},se)},O.createElement(l||h||"div",{children:V,ref:I,style:{height:B?"100%":q,pointerEvents:D?"none":void 0,width:B?q:"100%"}}))},f._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var e=this.props.itemCount;if(e>0){var o=this._getRangeToRender(),r=o[0],i=o[1],a=o[2],I=o[3];this._callOnItemsRendered(r,i,a,I)}}if(typeof this.props.onScroll=="function"){var l=this.state,h=l.scrollDirection,y=l.scrollOffset,N=l.scrollUpdateWasRequested;this._callOnScroll(h,y,N)}},f._getRangeToRender=function(){var e=this.props,o=e.itemCount,r=e.overscanCount,i=this.state,a=i.isScrolling,I=i.scrollDirection,l=i.scrollOffset;if(o===0)return[0,0,0,0];var h=x(this.props,l,this._instanceProps),y=v(this.props,h,l,this._instanceProps),N=!a||I==="backward"?Math.max(1,r):1,w=!a||I==="forward"?Math.max(1,r):1;return[Math.max(0,h-N),Math.max(0,Math.min(o-1,y+w)),h,y]},C}(O.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},t}var Ve=function(t,s){t.children,t.direction,t.height,t.layout,t.innerTagName,t.outerTagName,t.width,s.instance},qe=He({getItemOffset:function(t,s){var c=t.itemSize;return s*c},getItemSize:function(t,s){var c=t.itemSize;return c},getEstimatedTotalSize:function(t){var s=t.itemCount,c=t.itemSize;return c*s},getOffsetForIndexAndAlignment:function(t,s,c,m,T,x){var v=t.direction,_=t.height,b=t.itemCount,u=t.itemSize,g=t.layout,C=t.width,f=v==="horizontal"||g==="horizontal",p=f?C:_,e=Math.max(0,b*u-p),o=Math.min(e,s*u),r=Math.max(0,s*u-p+u+x);switch(c==="smart"&&(m>=r-p&&m<=o+p?c="auto":c="center"),c){case"start":return o;case"end":return r;case"center":{var i=Math.round(r+(o-r)/2);return i<Math.ceil(p/2)?0:i>e+Math.floor(p/2)?e:i}case"auto":default:return m>=r&&m<=o?m:m<r?r:o}},getStartIndexForOffset:function(t,s){var c=t.itemCount,m=t.itemSize;return Math.max(0,Math.min(c-1,Math.floor(s/m)))},getStopIndexForStartIndex:function(t,s,c){var m=t.direction,T=t.height,x=t.itemCount,v=t.itemSize,_=t.layout,b=t.width,u=m==="horizontal"||_==="horizontal",g=s*v,C=u?b:T,f=Math.ceil((C+c-g)/v);return Math.max(0,Math.min(x-1,s+f-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){t.itemSize}});const Ke=["IconJsonOutlined24","IconLightningStroke16","IconLightningStroke24","IconLightningStroke32","IconPhoneCallContact16","IconPhoneCallContact24","IconPhoneCallContact32","IconTemperatureStroke16","IconTemperatureStroke24","IconTemperatureStroke32","IconWeightTypeOutlined16","IconWeightTypeOutlined24","IconWeightTypeOutlined32","IconMesBunkerOutlined16","IconMesBunkerOutlined24","IconMesBunkerOutlined32","IconPicInPic16","IconPicInPic24","IconPicInPic32"],Je=["IconLightningFilled16","IconLightningFilled24","IconLightningFilled32","IconBasketBuying16","IconBasketBuying24","IconBasketBuying32","IconPlay16","IconPlay24","IconPlay32","IconBalanceOutlined16","IconBalanceOutlined24","IconBalanceOutlined32","IconKovsh16","IconKovsh24","IconKovsh32","IconWeightTypeFilled16","IconWeightTypeFilled24","IconWeightTypeFilled32"],Ge=["IconBorder16","IconBorder24","IconBorder32","IconOrderIsNotSecured16","IconOrderIsNotSecured24","IconOrderIsNotSecured32","IconOrderIsOverlySecured16","IconOrderIsOverlySecured24","IconOrderIsOverlySecured32","IconOrderIsOverlySecuredLater16","IconOrderIsOverlySecuredLater24","IconOrderIsOverlySecuredLater32","IconOrderIsSecured16","IconOrderIsSecured24","IconOrderIsSecured32","IconOrderIsSecuredLater16","IconOrderIsSecuredLater24","IconOrderIsSecuredLater32","IconOrderIsPartiallySecured16","IconOrderIsPartiallySecured24","IconOrderIsPartiallySecured32","IconOrderIsPartiallySecuredLater16","IconOrderIsPartiallySecuredLater24","IconOrderIsPartiallySecuredLater32","IconGrafana16","IconGrafana24","IconGrafana32"],$=3,Xe=n=>d.jsx("div",{className:S["icon-block"],children:d.jsx("div",{className:ye.wrapper,style:{width:"96%",marginLeft:"15px"},children:d.jsx(n,{})})}),Ze={title:"Components/Icon/Stories",component:ee,argTypes:Ae,decorators:[Xe],parameters:{layout:"fullscreen"}},z=n=>d.jsx(Q,{justifyContent:"center",children:d.jsx(ee,{...n})});z.storyName="Компонент Icon по умолчанию";z.args={name:"IconTuneControlOutlined32",color:"primary",containerSize:24};const P=()=>{const[n,t]=O.useState(""),s=O.useCallback(u=>u.replace("Icon",""),[]),c=O.useMemo(()=>{const u={};return Object.keys(R).forEach(g=>{Object.keys(R[g]||{}).forEach(C=>{const f=s(C).replace(g.toString(),"");u[f]||(u[f]={});const p=C.includes("Kovsh"),e=R[g][C];if(e){const o={style:{...p&&{stroke:"var(--brand-sapphire-60)"}}};u[f][g.toString()]=O.createElement(e,o)}})}),u},[s]),m=O.useCallback(u=>{const g=u.target.value;document.documentElement.style.setProperty("--icon-search",g)},[]),T=O.useCallback(u=>{const g=u.target.value;t(g)},[]),x=()=>{t("")},v=O.useRef(null);O.useEffect(()=>{document.documentElement.style.removeProperty("--icon-search");const u=getComputedStyle(document.documentElement).getPropertyValue("var(--icon-search)").trim()||"#1952b6";v.current&&(v.current.value=u)},[]);const _=O.useMemo(()=>Object.keys(c).filter(u=>u.toLowerCase().includes(n.toLowerCase())).map(u=>({title:u,sizes:c[u]})),[c,n]),b=({index:u,style:g})=>d.jsx("div",{style:g,className:S.row,children:new Array($).fill(null).map((C,f)=>{const p=u*$+f;if(p>=_.length)return null;const e=_[p];return d.jsxs(Ie,{className:S.card,indicatorStatus:"default",children:[d.jsx("div",{className:S.cardHeader,children:d.jsx(A,{variant:"Body1",color:"var(--steel-90)",children:Se(s(e.title))})}),d.jsx("div",{className:S.icons,children:Object.entries(e.sizes).map(([o,r])=>{const i=Ke.includes(`Icon${e.title}${o}`),a=Je.includes(`Icon${e.title}${o}`),I=Ge.includes(`Icon${e.title}${o}`);return d.jsx(pe,{copy:`Icon${e.title}${o}`,placement:"bottom",children:d.jsx("div",{className:te(S.icon,{[S.strokeIcon]:i,[S.fillAndStrokeIcon]:a,[S.iconFill]:!i&&!a&&!I}),children:r})},`Icon${e.title}${o}`)})})]},p)})});return d.jsxs("div",{className:S.wrapper,children:[d.jsxs("div",{className:S.controls,children:[d.jsx(he,{label:"Поиск иконок",value:n,onChange:T,className:S.input,reset:!0,onReset:x}),d.jsxs("div",{className:S.colorControl,children:[d.jsx(A,{variant:"Body1",className:S.colorControlTitle,children:"Выберите цвет:"}),d.jsx("input",{type:"color",ref:v,onChange:m,className:S.colorInput})]})]}),d.jsx("div",{className:S.table,children:_.length>0?d.jsx(qe,{height:900,itemCount:Math.ceil(_.length/$),itemSize:200,width:"100%",children:b}):d.jsx(A,{variant:"Heading2",color:"var(--steel-90)",className:S.noResults,children:"Ничего не найдено"})})]})};P.storyName="Все доступные иконки";P.parameters={controls:{disable:!0}};const k=n=>d.jsx(Q,{justifyContent:"center",children:d.jsx(U,{...n})});k.storyName="Компонент иконки для единиц измерения";k.args={unit:"кг"};k.parameters={controls:{include:Object.keys(ne)}};k.argTypes=ne;z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`(argsTypes: TIconProps): JSX.Element => {
  return <Box justifyContent="center">
      <Icon {...argsTypes} />
    </Box>;
}`,...z.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`(): JSX.Element => {
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
                  {toStartCase(formatIconName(icon.title))}
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
          </List> : <Typography variant="Heading2" color="var(--steel-90)" className={styles.noResults}>
            Ничего не найдено
          </Typography>}
      </div>
    </div>;
}`,...P.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`(argsTypes: IIconUnitProps): JSX.Element => {
  return <Box justifyContent="center">
      <IconUnit {...argsTypes} />
    </Box>;
}`,...k.parameters?.docs?.source}}};const Ye=["IconComponent","AllIcons","IconUnitComponent"],ut=Object.freeze(Object.defineProperty({__proto__:null,AllIcons:P,IconComponent:z,IconUnitComponent:k,__namedExportsOrder:Ye,default:Ze},Symbol.toStringTag,{value:"Module"}));export{P as A,ut as I,Ae as a,S as l};
