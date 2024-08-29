import{j as f}from"./jsx-runtime-DFnSfiB4.js";import{r as T}from"./index-DQ2WTIsS.js";import{_ as pe,a as he}from"./get-CxO0u_T9.js";import{_ as V}from"./assertThisInitialized-B9jnkVVz.js";import{C as fe}from"./index-DmFFZQ7H.js";import{Z as Ie,I as ge,$ as ye,av as ve}from"./index-BGpPsu4k.js";import"./generateUUID-C8XntvAg.js";import"./index-ByiRgrzj.js";import"./index-Cd-Fhxqm.js";import"./index-B8KuQLf-.js";import"./index-B_c816qF.js";import{T as F}from"./index-ehXB0alm.js";import{i as M,I as oe}from"./index-CFeGFBie.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-CTg4GkBi.js";import{c as re}from"./clsx-B-dksMZM.js";const Se="_wrapper_hs1u5_1",Ce="_sized_hs1u5_18",_e="_row_hs1u5_30",Te="_table_hs1u5_39",xe="_noResults_hs1u5_46",we="_controls_hs1u5_52",be="_input_hs1u5_60",ke="_colorControlTitle_hs1u5_65",Ne="_colorControl_hs1u5_65",ze="_colorInput_hs1u5_78",Oe="_card_hs1u5_82",Pe="_cardHeader_hs1u5_90",Me="_icons_hs1u5_101",Re="_icon_hs1u5_101",Ee="_iconFill_hs1u5_118",je="_strokeIcon_hs1u5_122",Ae="_fillAndStrokeIcon_hs1u5_126",I={"wrapper-border-radius":"_wrapper-border-radius_hs1u5_1","wrapper-info":"_wrapper-info_hs1u5_5",wrapper:Se,sized:Ce,row:_e,table:Te,noResults:xe,controls:we,input:be,colorControlTitle:ke,colorControl:Ne,colorInput:ze,card:Oe,cardHeader:Pe,icons:Me,icon:Re,iconFill:Ee,strokeIcon:je,fillAndStrokeIcon:Ae},Fe={name:{description:"Имя иконки",table:{defaultValue:{summary:""},type:{summary:"string"}},options:[...Object.keys({...M[16],...M[24],...M[32]})],control:{type:"select"}},color:{description:"Цвет иконки",table:{defaultValue:{summary:"primary"},type:{summary:'"action" | "disabled" | "error" | "primary" | "secondary" | "inherit" | "success" | "warning"'}},options:["action","disabled","error","primary","secondary","inherit","success","warning"],control:{type:"select"}},htmlColor:{description:"HTML цвет иконки. Чтобы его включить нужно в опциях цвета выбрать inherit.",table:{defaultValue:{summary:void 0},type:{summary:"string"}},control:{type:"color"}},containerSize:{description:"Размер контейнера иконки",table:{defaultValue:{summary:"24"},type:{summary:'"16" | "24" | "32"'}},options:[16,24,32],control:{type:"select"}},badge:{description:"JSX код компонента Badge",table:{defaultValue:{summary:"<Badge size='s' color='error'>1</Badge>"},type:{summary:"ReactNode"}},control:{type:"boolean"},mapping:{false:"",true:f.jsx(Ie,{size:"s",color:"error",children:"1"})}}},Le=Fe;var q=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function $e(o,t){return!!(o===t||q(o)&&q(t))}function We(o,t){if(o.length!==t.length)return!1;for(var s=0;s<o.length;s++)if(!$e(o[s],t[s]))return!1;return!0}function L(o,t){t===void 0&&(t=We);var s,c=[],d,x=!1;function w(){for(var C=[],S=0;S<arguments.length;S++)C[S]=arguments[S];return x&&s===this&&t(C,c)||(d=o.apply(this,C),x=!0,s=this,c=C),d}return w}var Be=typeof performance=="object"&&typeof performance.now=="function",K=Be?function(){return performance.now()}:function(){return Date.now()};function J(o){cancelAnimationFrame(o.id)}function De(o,t){var s=K();function c(){K()-s>=t?o.call(null):d.id=requestAnimationFrame(c)}var d={id:requestAnimationFrame(c)};return d}var $=-1;function X(o){if(o===void 0&&(o=!1),$===-1||o){var t=document.createElement("div"),s=t.style;s.width="50px",s.height="50px",s.overflow="scroll",document.body.appendChild(t),$=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return $}var O=null;function G(o){if(o===void 0&&(o=!1),O===null||o){var t=document.createElement("div"),s=t.style;s.width="50px",s.height="50px",s.overflow="scroll",s.direction="rtl";var c=document.createElement("div"),d=c.style;return d.width="100px",d.height="100px",t.appendChild(c),document.body.appendChild(t),t.scrollLeft>0?O="positive-descending":(t.scrollLeft=1,t.scrollLeft===0?O="negative":O="positive-ascending"),document.body.removeChild(t),O}return O}var He=150,Ue=function(t,s){return t};function Ve(o){var t,s=o.getItemOffset,c=o.getEstimatedTotalSize,d=o.getItemSize,x=o.getOffsetForIndexAndAlignment,w=o.getStartIndexForOffset,C=o.getStopIndexForStartIndex,S=o.initInstanceProps,b=o.shouldResetStyleCacheOnItemSizeChange,u=o.validateProps;return t=function(v){pe(_,v);function _(m){var e;return e=v.call(this,m)||this,e._instanceProps=S(e.props,V(e)),e._outerRef=void 0,e._resetIsScrollingTimeoutId=null,e.state={instance:V(e),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof e.props.initialScrollOffset=="number"?e.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},e._callOnItemsRendered=void 0,e._callOnItemsRendered=L(function(n,r,i,l){return e.props.onItemsRendered({overscanStartIndex:n,overscanStopIndex:r,visibleStartIndex:i,visibleStopIndex:l})}),e._callOnScroll=void 0,e._callOnScroll=L(function(n,r,i){return e.props.onScroll({scrollDirection:n,scrollOffset:r,scrollUpdateWasRequested:i})}),e._getItemStyle=void 0,e._getItemStyle=function(n){var r=e.props,i=r.direction,l=r.itemSize,h=r.layout,a=e._getItemStyleCache(b&&l,b&&h,b&&i),p;if(a.hasOwnProperty(n))p=a[n];else{var y=s(e.props,n,e._instanceProps),k=d(e.props,n,e._instanceProps),N=i==="horizontal"||h==="horizontal",E=i==="rtl",j=N?y:0;a[n]=p={position:"absolute",left:E?void 0:j,right:E?j:void 0,top:N?0:y,height:N?"100%":k,width:N?k:"100%"}}return p},e._getItemStyleCache=void 0,e._getItemStyleCache=L(function(n,r,i){return{}}),e._onScrollHorizontal=function(n){var r=n.currentTarget,i=r.clientWidth,l=r.scrollLeft,h=r.scrollWidth;e.setState(function(a){if(a.scrollOffset===l)return null;var p=e.props.direction,y=l;if(p==="rtl")switch(G()){case"negative":y=-l;break;case"positive-descending":y=h-i-l;break}return y=Math.max(0,Math.min(y,h-i)),{isScrolling:!0,scrollDirection:a.scrollOffset<y?"forward":"backward",scrollOffset:y,scrollUpdateWasRequested:!1}},e._resetIsScrollingDebounced)},e._onScrollVertical=function(n){var r=n.currentTarget,i=r.clientHeight,l=r.scrollHeight,h=r.scrollTop;e.setState(function(a){if(a.scrollOffset===h)return null;var p=Math.max(0,Math.min(h,l-i));return{isScrolling:!0,scrollDirection:a.scrollOffset<p?"forward":"backward",scrollOffset:p,scrollUpdateWasRequested:!1}},e._resetIsScrollingDebounced)},e._outerRefSetter=function(n){var r=e.props.outerRef;e._outerRef=n,typeof r=="function"?r(n):r!=null&&typeof r=="object"&&r.hasOwnProperty("current")&&(r.current=n)},e._resetIsScrollingDebounced=function(){e._resetIsScrollingTimeoutId!==null&&J(e._resetIsScrollingTimeoutId),e._resetIsScrollingTimeoutId=De(e._resetIsScrolling,He)},e._resetIsScrolling=function(){e._resetIsScrollingTimeoutId=null,e.setState({isScrolling:!1},function(){e._getItemStyleCache(-1,null)})},e}_.getDerivedStateFromProps=function(e,n){return qe(e,n),u(e),null};var g=_.prototype;return g.scrollTo=function(e){e=Math.max(0,e),this.setState(function(n){return n.scrollOffset===e?null:{scrollDirection:n.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},g.scrollToItem=function(e,n){n===void 0&&(n="auto");var r=this.props,i=r.itemCount,l=r.layout,h=this.state.scrollOffset;e=Math.max(0,Math.min(e,i-1));var a=0;if(this._outerRef){var p=this._outerRef;l==="vertical"?a=p.scrollWidth>p.clientWidth?X():0:a=p.scrollHeight>p.clientHeight?X():0}this.scrollTo(x(this.props,e,n,h,this._instanceProps,a))},g.componentDidMount=function(){var e=this.props,n=e.direction,r=e.initialScrollOffset,i=e.layout;if(typeof r=="number"&&this._outerRef!=null){var l=this._outerRef;n==="horizontal"||i==="horizontal"?l.scrollLeft=r:l.scrollTop=r}this._callPropsCallbacks()},g.componentDidUpdate=function(){var e=this.props,n=e.direction,r=e.layout,i=this.state,l=i.scrollOffset,h=i.scrollUpdateWasRequested;if(h&&this._outerRef!=null){var a=this._outerRef;if(n==="horizontal"||r==="horizontal")if(n==="rtl")switch(G()){case"negative":a.scrollLeft=-l;break;case"positive-ascending":a.scrollLeft=l;break;default:var p=a.clientWidth,y=a.scrollWidth;a.scrollLeft=y-p-l;break}else a.scrollLeft=l;else a.scrollTop=l}this._callPropsCallbacks()},g.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&J(this._resetIsScrollingTimeoutId)},g.render=function(){var e=this.props,n=e.children,r=e.className,i=e.direction,l=e.height,h=e.innerRef,a=e.innerElementType,p=e.innerTagName,y=e.itemCount,k=e.itemData,N=e.itemKey,E=N===void 0?Ue:N,j=e.layout,se=e.outerElementType,ie=e.outerTagName,le=e.style,ae=e.useIsScrolling,ce=e.width,B=this.state.isScrolling,A=i==="horizontal"||j==="horizontal",ue=A?this._onScrollHorizontal:this._onScrollVertical,D=this._getRangeToRender(),de=D[0],me=D[1],H=[];if(y>0)for(var R=de;R<=me;R++)H.push(T.createElement(n,{data:k,key:E(R,k),index:R,isScrolling:ae?B:void 0,style:this._getItemStyle(R)}));var U=c(this.props,this._instanceProps);return T.createElement(se||ie||"div",{className:r,onScroll:ue,ref:this._outerRefSetter,style:he({position:"relative",height:l,width:ce,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:i},le)},T.createElement(a||p||"div",{children:H,ref:h,style:{height:A?"100%":U,pointerEvents:B?"none":void 0,width:A?U:"100%"}}))},g._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var e=this.props.itemCount;if(e>0){var n=this._getRangeToRender(),r=n[0],i=n[1],l=n[2],h=n[3];this._callOnItemsRendered(r,i,l,h)}}if(typeof this.props.onScroll=="function"){var a=this.state,p=a.scrollDirection,y=a.scrollOffset,k=a.scrollUpdateWasRequested;this._callOnScroll(p,y,k)}},g._getRangeToRender=function(){var e=this.props,n=e.itemCount,r=e.overscanCount,i=this.state,l=i.isScrolling,h=i.scrollDirection,a=i.scrollOffset;if(n===0)return[0,0,0,0];var p=w(this.props,a,this._instanceProps),y=C(this.props,p,a,this._instanceProps),k=!l||h==="backward"?Math.max(1,r):1,N=!l||h==="forward"?Math.max(1,r):1;return[Math.max(0,p-k),Math.max(0,Math.min(n-1,y+N)),p,y]},_}(T.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},t}var qe=function(t,s){t.children,t.direction,t.height,t.layout,t.innerTagName,t.outerTagName,t.width,s.instance},Ke=Ve({getItemOffset:function(t,s){var c=t.itemSize;return s*c},getItemSize:function(t,s){var c=t.itemSize;return c},getEstimatedTotalSize:function(t){var s=t.itemCount,c=t.itemSize;return c*s},getOffsetForIndexAndAlignment:function(t,s,c,d,x,w){var C=t.direction,S=t.height,b=t.itemCount,u=t.itemSize,v=t.layout,_=t.width,g=C==="horizontal"||v==="horizontal",m=g?_:S,e=Math.max(0,b*u-m),n=Math.min(e,s*u),r=Math.max(0,s*u-m+u+w);switch(c==="smart"&&(d>=r-m&&d<=n+m?c="auto":c="center"),c){case"start":return n;case"end":return r;case"center":{var i=Math.round(r+(n-r)/2);return i<Math.ceil(m/2)?0:i>e+Math.floor(m/2)?e:i}case"auto":default:return d>=r&&d<=n?d:d<r?r:n}},getStartIndexForOffset:function(t,s){var c=t.itemCount,d=t.itemSize;return Math.max(0,Math.min(c-1,Math.floor(s/d)))},getStopIndexForStartIndex:function(t,s,c){var d=t.direction,x=t.height,w=t.itemCount,C=t.itemSize,S=t.layout,b=t.width,u=d==="horizontal"||S==="horizontal",v=s*C,_=u?b:x,g=Math.ceil((_+c-v)/C);return Math.max(0,Math.min(w-1,s+g-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){t.itemSize}});const Je=["IconJsonOutlined24","IconLightningStroke16","IconLightningStroke24","IconLightningStroke32","IconPhoneCallContact16","IconPhoneCallContact24","IconPhoneCallContact32","IconTemperatureStroke16","IconTemperatureStroke24","IconTemperatureStroke32","IconWeightTypeOutlined16","IconWeightTypeOutlined24","IconWeightTypeOutlined32","IconMesBunkerOutlined16","IconMesBunkerOutlined24","IconMesBunkerOutlined32","IconPicInPic16","IconPicInPic24","IconPicInPic32"],Xe=["IconLightningFilled16","IconLightningFilled24","IconLightningFilled32","IconBasketBuying16","IconBasketBuying24","IconBasketBuying32","IconPlay16","IconPlay24","IconPlay32","IconBalanceOutlined16","IconBalanceOutlined24","IconBalanceOutlined32","IconKovsh16","IconKovsh24","IconKovsh32","IconWeightTypeFilled16","IconWeightTypeFilled24","IconWeightTypeFilled32"],Ge=["IconBorder16","IconBorder24","IconBorder32"],W=3,Ze={title:"Components/Icon/Stories",component:oe,argTypes:Le,parameters:{layout:"fullscreen"}},z=o=>f.jsx("div",{className:re(I.wrapper,I.sized,I["wrapper-border-radius"]),children:f.jsx(oe,{...o})});z.storyName="Компонент Icon по умолчанию";z.args={name:"IconTuneControlOutlined32",color:"primary",containerSize:24};z.decorators=[o=>f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"200px"},children:f.jsx(o,{})})];const P=()=>{const[o,t]=T.useState(""),s=T.useCallback(u=>u.replace("Icon",""),[]),c=T.useMemo(()=>{const u={};return Object.keys(M).forEach(v=>{Object.keys(M[v]||{}).forEach(_=>{const g=s(_).replace(v.toString(),"");u[g]||(u[g]={});const m=_.includes("Kovsh"),e=M[v][_];if(e){const n={style:{...m&&{stroke:"var(--icon-color)"}}};u[g][v.toString()]=T.createElement(e,n)}})}),u},[s]),d=T.useCallback(u=>{const v=u.target.value;document.documentElement.style.setProperty("--icon-color",v)},[]),x=T.useCallback(u=>{const v=u.target.value;t(v)},[]),w=()=>{t("")},C=T.useRef(null);T.useEffect(()=>{const u=getComputedStyle(document.documentElement).getPropertyValue("--icon-color").trim()||"#167ffb";C.current&&(C.current.value=u)},[]);const S=T.useMemo(()=>Object.keys(c).filter(u=>u.toLowerCase().includes(o.toLowerCase())).map(u=>({title:u,sizes:c[u]})),[c,o]),b=({index:u,style:v})=>(S[u],f.jsx("div",{style:v,className:I.row,children:new Array(W).fill(null).map((_,g)=>{const m=u*W+g;if(m>=S.length)return null;const e=S[m];return f.jsxs(ye,{className:I.card,indicatorStatus:"default",children:[f.jsx("div",{className:I.cardHeader,children:f.jsx(F,{variant:"Body1",color:"var(--steel-90)",children:ve.startCase(s(e.title))})}),f.jsx("div",{className:I.icons,children:Object.entries(e.sizes).map(([n,r])=>{const i=Je.includes(`Icon${e.title}${n}`),l=Xe.includes(`Icon${e.title}${n}`),h=Ge.includes(`Icon${e.title}${n}`);return f.jsx(fe,{copy:`Icon${e.title}${n}`,placement:"bottom",children:f.jsx("div",{className:re(I.icon,{[I.strokeIcon]:i,[I.fillAndStrokeIcon]:l,[I.iconFill]:!i&&!l&&!h}),children:r})},`Icon${e.title}${n}`)})})]},m)})}));return f.jsxs("div",{className:I.wrapper,children:[f.jsxs("div",{className:I.controls,children:[f.jsx(ge,{label:"Поиск иконок",value:o,onChange:x,className:I.input,reset:!0,onReset:w}),f.jsxs("div",{className:I.colorControl,children:[f.jsx(F,{variant:"Body1",className:I.colorControlTitle,children:"Выберите цвет:"}),f.jsx("input",{type:"color",ref:C,onChange:d,className:I.colorInput})]})]}),f.jsx("div",{className:I.table,children:S.length>0?f.jsx(Ke,{height:900,itemCount:Math.ceil(S.length/W),itemSize:200,width:"100%",children:b}):f.jsx(F,{variant:"Heading2",color:"primary",className:I.noResults,children:"Ничего не найдено"})})]})};P.storyName="Все доступные иконки";var Z,Q,Y;z.parameters={...z.parameters,docs:{...(Z=z.parameters)==null?void 0:Z.docs,source:{originalSource:`(argsTypes: TIconProps): JSX.Element => {
  return <div className={clsx(styles.wrapper, styles.sized, styles['wrapper-border-radius'])}>
      <Icon {...argsTypes} />
    </div>;
}`,...(Y=(Q=z.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var ee,te,ne;P.parameters={...P.parameters,docs:{...(ee=P.parameters)==null?void 0:ee.docs,source:{originalSource:`(): JSX.Element => {
  const [searchText, setSearchText] = useState('');
  const formatIconName = useCallback((name: string) => {
    return name.replace('Icon', '');
  }, []);
  const iconsByNames: IconsWithSizesAndColors = useMemo(() => {
    const result: IconsWithSizesAndColors = {};
    Object.keys(icons).forEach((size: keyof TIconsObject) => {
      Object.keys(icons[size] || {}).forEach((iconName: string) => {
        const formattedIconName = formatIconName((iconName as TIconName)).replace(size.toString(), '');
        if (!result[formattedIconName]) {
          result[formattedIconName] = {};
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
          result[formattedIconName][size.toString()] = createElement(iconComponent, iconProps);
        }
      });
    });
    return result;
  }, [formatIconName]);
  const handleChangeColor = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    document.documentElement.style.setProperty('--icon-color', newColor);
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
    const initialColor = getComputedStyle(document.documentElement).getPropertyValue('--icon-color').trim() || '#167ffb';
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
    const icon = filteredIconsMemo[index];
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
          </List> : <Typography variant="Heading2" color="primary" className={styles.noResults}>
            Ничего не найдено
          </Typography>}
      </div>
    </div>;
}`,...(ne=(te=P.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const Qe=["IconComponent","AllIcons"],It=Object.freeze(Object.defineProperty({__proto__:null,AllIcons:P,IconComponent:z,__namedExportsOrder:Qe,default:Ze},Symbol.toStringTag,{value:"Module"}));export{P as A,It as I,Le as a,I as l};
