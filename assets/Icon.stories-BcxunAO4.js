import{j as m,r as O}from"./iframe-D1ppCfJL.js";import{_ as ce,a as ue}from"./inheritsLoose-D3Az7yH5.js";import{C as de}from"./index-CFS97sLw.js";import{B as Y}from"./index-D1MtTpbs.js";import{C as me}from"./index-DwwGufnW.js";import{o as j,I as Q}from"./index-1Ia9d37J.js";import{I as pe}from"./index-B2DrMXcC.js";import{I as he}from"./index-BuboyXZl.js";import{T as B}from"./index-B8OV2sj9.js";import{c as Ie}from"./clsx-B-dksMZM.js";import{g as fe}from"./styles.module-P9JyAdOG.js";import{B as ye}from"./index-pBOwR2Sr.js";const ge=n=>{const t=n.match(/[A-Z]+(?![a-z])|[A-Z]?[a-z]+|\d+/g);return t?t.map(s=>s[0].toUpperCase()+s.slice(1).toLowerCase()).join(" "):""};function q(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}const Se="Icon-module__wrapper___RjU7B",ve="Icon-module__row___i2ubI",_e="Icon-module__table___U17ph",Ce="Icon-module__noResults___ydYb7",Oe="Icon-module__controls___QlfXO",Te="Icon-module__input___WCmns",be="Icon-module__colorControlTitle___Y-jmZ",xe="Icon-module__colorControl___OKfes",we="Icon-module__colorInput___VcbuF",ke="Icon-module__card___kzPjV",Ne="Icon-module__cardHeader___HGE3u",ze="Icon-module__icons___A5JR8",Pe="Icon-module__icon___pSbls",Re="Icon-module__strokeIcon___1qqhB",je="Icon-module__fillAndStrokeIcon___tBLqh",Ee="Icon-module__iconFill___2Dtvk",S={"wrapper-info":"Icon-module__wrapper-info___p4O-8","icon-block":"Icon-module__icon-block___-zosa",wrapper:Se,row:ve,table:_e,noResults:Ce,controls:Oe,input:Te,colorControlTitle:be,colorControl:xe,colorInput:we,card:ke,cardHeader:Ne,icons:ze,icon:Pe,strokeIcon:Re,fillAndStrokeIcon:je,iconFill:Ee},Le={name:{description:"Имя иконки",table:{defaultValue:{summary:""},type:{summary:"string"}},options:[...Object.keys({...j[16],...j[24],...j[32]})],control:{type:"select"}},color:{description:"Цвет иконки",table:{defaultValue:{summary:"primary"},type:{summary:'"action" | "disabled" | "error" | "primary" | "secondary" | "inherit" | "success" | "warning"'}},options:["action","disabled","error","primary","secondary","inherit","success","warning"],control:{type:"select"}},htmlColor:{description:"HTML цвет иконки. Чтобы его включить нужно в опциях цвета выбрать inherit.",table:{defaultValue:{summary:void 0},type:{summary:"string"}},control:{type:"color"}},containerSize:{description:"Размер контейнера иконки",table:{defaultValue:{summary:"24"},type:{summary:'"16" | "24" | "32"'}},options:[16,24,32],control:{type:"select"}},badge:{description:"JSX код компонента Badge",table:{defaultValue:{summary:"<Badge size='s' color='error'>1</Badge>"},type:{summary:"ReactNode"}},control:{type:"boolean"},mapping:{false:"",true:m.jsx(ye,{size:"s",color:"error",children:"1"})}}},ee={unit:{description:"Строковое значение, отображаемое в иконке. Например, кг, см и тд",table:{defaultValue:{summary:""},type:{summary:"string"}},control:{type:"text"}},className:{description:"Дополнительный CSS класс",table:{type:{summary:"string"}},control:{type:"text"}},style:{description:"Inline CSS стили",table:{type:{summary:"CSSProperties"}},control:{type:"object"}}};var K=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Me(n,t){return!!(n===t||K(n)&&K(t))}function Ae(n,t){if(n.length!==t.length)return!1;for(var s=0;s<n.length;s++)if(!Me(n[s],t[s]))return!1;return!0}function F(n,t){t===void 0&&(t=Ae);var s,c=[],d,T=!1;function b(){for(var v=[],_=0;_<arguments.length;_++)v[_]=arguments[_];return T&&s===this&&t(v,c)||(d=n.apply(this,v),T=!0,s=this,c=v),d}return b}var Be=typeof performance=="object"&&typeof performance.now=="function",J=Be?function(){return performance.now()}:function(){return Date.now()};function G(n){cancelAnimationFrame(n.id)}function Fe(n,t){var s=J();function c(){J()-s>=t?n.call(null):d.id=requestAnimationFrame(c)}var d={id:requestAnimationFrame(c)};return d}var W=-1;function X(n){if(n===void 0&&(n=!1),W===-1||n){var t=document.createElement("div"),s=t.style;s.width="50px",s.height="50px",s.overflow="scroll",document.body.appendChild(t),W=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return W}var R=null;function Z(n){if(n===void 0&&(n=!1),R===null||n){var t=document.createElement("div"),s=t.style;s.width="50px",s.height="50px",s.overflow="scroll",s.direction="rtl";var c=document.createElement("div"),d=c.style;return d.width="100px",d.height="100px",t.appendChild(c),document.body.appendChild(t),t.scrollLeft>0?R="positive-descending":(t.scrollLeft=1,t.scrollLeft===0?R="negative":R="positive-ascending"),document.body.removeChild(t),R}return R}var We=150,$e=function(t,s){return t};function Ue(n){var t,s=n.getItemOffset,c=n.getEstimatedTotalSize,d=n.getItemSize,T=n.getOffsetForIndexAndAlignment,b=n.getStartIndexForOffset,v=n.getStopIndexForStartIndex,_=n.initInstanceProps,x=n.shouldResetStyleCacheOnItemSizeChange,u=n.validateProps;return t=function(g){ce(C,g);function C(p){var e;return e=g.call(this,p)||this,e._instanceProps=_(e.props,q(e)),e._outerRef=void 0,e._resetIsScrollingTimeoutId=null,e.state={instance:q(e),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof e.props.initialScrollOffset=="number"?e.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},e._callOnItemsRendered=void 0,e._callOnItemsRendered=F(function(o,r,i,a){return e.props.onItemsRendered({overscanStartIndex:o,overscanStopIndex:r,visibleStartIndex:i,visibleStopIndex:a})}),e._callOnScroll=void 0,e._callOnScroll=F(function(o,r,i){return e.props.onScroll({scrollDirection:o,scrollOffset:r,scrollUpdateWasRequested:i})}),e._getItemStyle=void 0,e._getItemStyle=function(o){var r=e.props,i=r.direction,a=r.itemSize,I=r.layout,l=e._getItemStyleCache(x&&a,x&&I,x&&i),h;if(l.hasOwnProperty(o))h=l[o];else{var y=s(e.props,o,e._instanceProps),w=d(e.props,o,e._instanceProps),k=i==="horizontal"||I==="horizontal",L=i==="rtl",M=k?y:0;l[o]=h={position:"absolute",left:L?void 0:M,right:L?M:void 0,top:k?0:y,height:k?"100%":w,width:k?w:"100%"}}return h},e._getItemStyleCache=void 0,e._getItemStyleCache=F(function(o,r,i){return{}}),e._onScrollHorizontal=function(o){var r=o.currentTarget,i=r.clientWidth,a=r.scrollLeft,I=r.scrollWidth;e.setState(function(l){if(l.scrollOffset===a)return null;var h=e.props.direction,y=a;if(h==="rtl")switch(Z()){case"negative":y=-a;break;case"positive-descending":y=I-i-a;break}return y=Math.max(0,Math.min(y,I-i)),{isScrolling:!0,scrollDirection:l.scrollOffset<y?"forward":"backward",scrollOffset:y,scrollUpdateWasRequested:!1}},e._resetIsScrollingDebounced)},e._onScrollVertical=function(o){var r=o.currentTarget,i=r.clientHeight,a=r.scrollHeight,I=r.scrollTop;e.setState(function(l){if(l.scrollOffset===I)return null;var h=Math.max(0,Math.min(I,a-i));return{isScrolling:!0,scrollDirection:l.scrollOffset<h?"forward":"backward",scrollOffset:h,scrollUpdateWasRequested:!1}},e._resetIsScrollingDebounced)},e._outerRefSetter=function(o){var r=e.props.outerRef;e._outerRef=o,typeof r=="function"?r(o):r!=null&&typeof r=="object"&&r.hasOwnProperty("current")&&(r.current=o)},e._resetIsScrollingDebounced=function(){e._resetIsScrollingTimeoutId!==null&&G(e._resetIsScrollingTimeoutId),e._resetIsScrollingTimeoutId=Fe(e._resetIsScrolling,We)},e._resetIsScrolling=function(){e._resetIsScrollingTimeoutId=null,e.setState({isScrolling:!1},function(){e._getItemStyleCache(-1,null)})},e}C.getDerivedStateFromProps=function(e,o){return De(e,o),u(e),null};var f=C.prototype;return f.scrollTo=function(e){e=Math.max(0,e),this.setState(function(o){return o.scrollOffset===e?null:{scrollDirection:o.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},f.scrollToItem=function(e,o){o===void 0&&(o="auto");var r=this.props,i=r.itemCount,a=r.layout,I=this.state.scrollOffset;e=Math.max(0,Math.min(e,i-1));var l=0;if(this._outerRef){var h=this._outerRef;a==="vertical"?l=h.scrollWidth>h.clientWidth?X():0:l=h.scrollHeight>h.clientHeight?X():0}this.scrollTo(T(this.props,e,o,I,this._instanceProps,l))},f.componentDidMount=function(){var e=this.props,o=e.direction,r=e.initialScrollOffset,i=e.layout;if(typeof r=="number"&&this._outerRef!=null){var a=this._outerRef;o==="horizontal"||i==="horizontal"?a.scrollLeft=r:a.scrollTop=r}this._callPropsCallbacks()},f.componentDidUpdate=function(){var e=this.props,o=e.direction,r=e.layout,i=this.state,a=i.scrollOffset,I=i.scrollUpdateWasRequested;if(I&&this._outerRef!=null){var l=this._outerRef;if(o==="horizontal"||r==="horizontal")if(o==="rtl")switch(Z()){case"negative":l.scrollLeft=-a;break;case"positive-ascending":l.scrollLeft=a;break;default:var h=l.clientWidth,y=l.scrollWidth;l.scrollLeft=y-h-a;break}else l.scrollLeft=a;else l.scrollTop=a}this._callPropsCallbacks()},f.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&G(this._resetIsScrollingTimeoutId)},f.render=function(){var e=this.props,o=e.children,r=e.className,i=e.direction,a=e.height,I=e.innerRef,l=e.innerElementType,h=e.innerTagName,y=e.itemCount,w=e.itemData,k=e.itemKey,L=k===void 0?$e:k,M=e.layout,te=e.outerElementType,ne=e.outerTagName,oe=e.style,re=e.useIsScrolling,se=e.width,U=this.state.isScrolling,A=i==="horizontal"||M==="horizontal",ie=A?this._onScrollHorizontal:this._onScrollVertical,D=this._getRangeToRender(),ae=D[0],le=D[1],H=[];if(y>0)for(var E=ae;E<=le;E++)H.push(O.createElement(o,{data:w,key:L(E,w),index:E,isScrolling:re?U:void 0,style:this._getItemStyle(E)}));var V=c(this.props,this._instanceProps);return O.createElement(te||ne||"div",{className:r,onScroll:ie,ref:this._outerRefSetter,style:ue({position:"relative",height:a,width:se,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:i},oe)},O.createElement(l||h||"div",{children:H,ref:I,style:{height:A?"100%":V,pointerEvents:U?"none":void 0,width:A?V:"100%"}}))},f._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var e=this.props.itemCount;if(e>0){var o=this._getRangeToRender(),r=o[0],i=o[1],a=o[2],I=o[3];this._callOnItemsRendered(r,i,a,I)}}if(typeof this.props.onScroll=="function"){var l=this.state,h=l.scrollDirection,y=l.scrollOffset,w=l.scrollUpdateWasRequested;this._callOnScroll(h,y,w)}},f._getRangeToRender=function(){var e=this.props,o=e.itemCount,r=e.overscanCount,i=this.state,a=i.isScrolling,I=i.scrollDirection,l=i.scrollOffset;if(o===0)return[0,0,0,0];var h=b(this.props,l,this._instanceProps),y=v(this.props,h,l,this._instanceProps),w=!a||I==="backward"?Math.max(1,r):1,k=!a||I==="forward"?Math.max(1,r):1;return[Math.max(0,h-w),Math.max(0,Math.min(o-1,y+k)),h,y]},C}(O.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},t}var De=function(t,s){t.children,t.direction,t.height,t.layout,t.innerTagName,t.outerTagName,t.width,s.instance},He=Ue({getItemOffset:function(t,s){var c=t.itemSize;return s*c},getItemSize:function(t,s){var c=t.itemSize;return c},getEstimatedTotalSize:function(t){var s=t.itemCount,c=t.itemSize;return c*s},getOffsetForIndexAndAlignment:function(t,s,c,d,T,b){var v=t.direction,_=t.height,x=t.itemCount,u=t.itemSize,g=t.layout,C=t.width,f=v==="horizontal"||g==="horizontal",p=f?C:_,e=Math.max(0,x*u-p),o=Math.min(e,s*u),r=Math.max(0,s*u-p+u+b);switch(c==="smart"&&(d>=r-p&&d<=o+p?c="auto":c="center"),c){case"start":return o;case"end":return r;case"center":{var i=Math.round(r+(o-r)/2);return i<Math.ceil(p/2)?0:i>e+Math.floor(p/2)?e:i}case"auto":default:return d>=r&&d<=o?d:d<r?r:o}},getStartIndexForOffset:function(t,s){var c=t.itemCount,d=t.itemSize;return Math.max(0,Math.min(c-1,Math.floor(s/d)))},getStopIndexForStartIndex:function(t,s,c){var d=t.direction,T=t.height,b=t.itemCount,v=t.itemSize,_=t.layout,x=t.width,u=d==="horizontal"||_==="horizontal",g=s*v,C=u?x:T,f=Math.ceil((C+c-g)/v);return Math.max(0,Math.min(b-1,s+f-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){t.itemSize}});const Ve=["IconJsonOutlined24","IconLightningStroke16","IconLightningStroke24","IconLightningStroke32","IconPhoneCallContact16","IconPhoneCallContact24","IconPhoneCallContact32","IconTemperatureStroke16","IconTemperatureStroke24","IconTemperatureStroke32","IconWeightTypeOutlined16","IconWeightTypeOutlined24","IconWeightTypeOutlined32","IconMesBunkerOutlined16","IconMesBunkerOutlined24","IconMesBunkerOutlined32","IconPicInPic16","IconPicInPic24","IconPicInPic32"],qe=["IconLightningFilled16","IconLightningFilled24","IconLightningFilled32","IconBasketBuying16","IconBasketBuying24","IconBasketBuying32","IconPlay16","IconPlay24","IconPlay32","IconBalanceOutlined16","IconBalanceOutlined24","IconBalanceOutlined32","IconKovsh16","IconKovsh24","IconKovsh32","IconWeightTypeFilled16","IconWeightTypeFilled24","IconWeightTypeFilled32"],Ke=["IconBorder16","IconBorder24","IconBorder32","IconOrderIsNotSecured16","IconOrderIsNotSecured24","IconOrderIsNotSecured32","IconOrderIsOverlySecured16","IconOrderIsOverlySecured24","IconOrderIsOverlySecured32","IconOrderIsOverlySecuredLater16","IconOrderIsOverlySecuredLater24","IconOrderIsOverlySecuredLater32","IconOrderIsSecured16","IconOrderIsSecured24","IconOrderIsSecured32","IconOrderIsSecuredLater16","IconOrderIsSecuredLater24","IconOrderIsSecuredLater32","IconOrderIsPartiallySecured16","IconOrderIsPartiallySecured24","IconOrderIsPartiallySecured32","IconOrderIsPartiallySecuredLater16","IconOrderIsPartiallySecuredLater24","IconOrderIsPartiallySecuredLater32","IconGrafana16","IconGrafana24","IconGrafana32"],$=3,Je=n=>m.jsx("div",{className:S["icon-block"],children:m.jsx("div",{className:fe.wrapper,style:{width:"96%",marginLeft:"15px"},children:m.jsx(n,{})})}),Ge={title:"Components/Icon/Stories",component:Q,argTypes:Le,decorators:[Je],parameters:{layout:"fullscreen"}},z=n=>m.jsx(Y,{justifyContent:"center",children:m.jsx(Q,{...n})});z.storyName="Компонент Icon по умолчанию";z.args={name:"IconTuneControlOutlined32",color:"primary",containerSize:24};const P=()=>{const[n,t]=O.useState(""),s=O.useCallback(u=>u.replace("Icon",""),[]),c=O.useMemo(()=>{const u={};return Object.keys(j).forEach(g=>{Object.keys(j[g]||{}).forEach(C=>{const f=s(C).replace(g.toString(),"");u[f]||(u[f]={});const p=C.includes("Kovsh"),e=j[g][C];if(e){const o={style:{...p&&{stroke:"var(--brand-sapphire-60)"}}};u[f][g.toString()]=O.createElement(e,o)}})}),u},[s]),d=O.useCallback(u=>{const g=u.target.value;document.documentElement.style.setProperty("--icon-search",g)},[]),T=O.useCallback(u=>{const g=u.target.value;t(g)},[]),b=()=>{t("")},v=O.useRef(null);O.useEffect(()=>{document.documentElement.style.removeProperty("--icon-search");const u=getComputedStyle(document.documentElement).getPropertyValue("var(--icon-search)").trim()||"#1952b6";v.current&&(v.current.value=u)},[]);const _=O.useMemo(()=>Object.keys(c).filter(u=>u.toLowerCase().includes(n.toLowerCase())).map(u=>({title:u,sizes:c[u]})),[c,n]),x=({index:u,style:g})=>m.jsx("div",{style:g,className:S.row,children:new Array($).fill(null).map((C,f)=>{const p=u*$+f;if(p>=_.length)return null;const e=_[p];return m.jsxs(me,{className:S.card,indicatorStatus:"default",children:[m.jsx("div",{className:S.cardHeader,children:m.jsx(B,{variant:"Body1",color:"var(--steel-90)",children:ge(s(e.title))})}),m.jsx("div",{className:S.icons,children:Object.entries(e.sizes).map(([o,r])=>{const i=Ve.includes(`Icon${e.title}${o}`),a=qe.includes(`Icon${e.title}${o}`),I=Ke.includes(`Icon${e.title}${o}`);return m.jsx(de,{copy:`Icon${e.title}${o}`,placement:"bottom",children:m.jsx("div",{className:Ie(S.icon,{[S.strokeIcon]:i,[S.fillAndStrokeIcon]:a,[S.iconFill]:!i&&!a&&!I}),children:r})},`Icon${e.title}${o}`)})})]},p)})});return m.jsxs("div",{className:S.wrapper,children:[m.jsxs("div",{className:S.controls,children:[m.jsx(he,{label:"Поиск иконок",value:n,onChange:T,className:S.input,reset:!0,onReset:b}),m.jsxs("div",{className:S.colorControl,children:[m.jsx(B,{variant:"Body1",className:S.colorControlTitle,children:"Выберите цвет:"}),m.jsx("input",{type:"color",ref:v,onChange:d,className:S.colorInput})]})]}),m.jsx("div",{className:S.table,children:_.length>0?m.jsx(He,{height:900,itemCount:Math.ceil(_.length/$),itemSize:200,width:"100%",children:x}):m.jsx(B,{variant:"Heading2",color:"var(--steel-90)",className:S.noResults,children:"Ничего не найдено"})})]})};P.storyName="Все доступные иконки";P.parameters={controls:{disable:!0}};const N=n=>m.jsx(Y,{justifyContent:"center",children:m.jsx(pe,{...n})});N.storyName="Компонент иконки для единиц измерения";N.args={unit:"кг"};N.parameters={controls:{include:Object.keys(ee)}};N.argTypes=ee;z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`(argsTypes: TIconProps): JSX.Element => {
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
}`,...P.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`(argsTypes: IIconUnitProps): JSX.Element => {
  return <Box justifyContent="center">
      <IconUnit {...argsTypes} />
    </Box>;
}`,...N.parameters?.docs?.source}}};const Xe=["IconComponent","AllIcons","IconUnitComponent"],ct=Object.freeze(Object.defineProperty({__proto__:null,AllIcons:P,IconComponent:z,IconUnitComponent:N,__namedExportsOrder:Xe,default:Ge},Symbol.toStringTag,{value:"Module"}));export{P as A,ct as I,Le as a,S as l};
