import{j as p}from"./jsx-runtime-BRNY0I4F.js";import{r as C}from"./index-Bnop-kX6.js";import{ai as ue,aZ as me,a_ as A,a$ as pe,I as he,aj as Ie,b0 as fe}from"./VideoWindow-DEkDdpx_.js";import{C as ye}from"./index-DLMKDK-I.js";import"./generateUUID-Z4ktHL_f.js";import"./index-CkAXh9uP.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import{T as F}from"./index-qC5wYQgy.js";import{i as R,I as ne}from"./index-CvRFF9aG.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-D_lYSbi8.js";import"./index-DokmLR-l.js";import{c as ge}from"./clsx-B-dksMZM.js";import{g as ve}from"./styles.module-ox-emdf8.js";function V(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}const Se="_wrapper_z8k8n_5",Ce="_sized_z8k8n_35",_e="_row_z8k8n_47",ke="_table_z8k8n_56",Oe="_noResults_z8k8n_63",Te="_controls_z8k8n_69",ze="_input_z8k8n_77",xe="_colorControlTitle_z8k8n_82",we="_colorControl_z8k8n_82",be="_colorInput_z8k8n_95",Ne="_card_z8k8n_99",Pe="_cardHeader_z8k8n_106",Re="_icons_z8k8n_117",Ee="_icon_z8k8n_15",Me="_strokeIcon_z8k8n_135",Le="_fillAndStrokeIcon_z8k8n_139",je="_iconFill_z8k8n_144",v={"wrapper-border-radius":"_wrapper-border-radius_z8k8n_5","wrapper-info":"_wrapper-info_z8k8n_9","icon-block":"_icon-block_z8k8n_15",wrapper:Se,sized:Ce,row:_e,table:ke,noResults:Oe,controls:Te,input:ze,colorControlTitle:xe,colorControl:we,colorInput:be,card:Ne,cardHeader:Pe,icons:Re,icon:Ee,strokeIcon:Me,fillAndStrokeIcon:Le,iconFill:je},Ae={name:{description:"Имя иконки",table:{defaultValue:{summary:""},type:{summary:"string"}},options:[...Object.keys({...R[16],...R[24],...R[32]})],control:{type:"select"}},color:{description:"Цвет иконки",table:{defaultValue:{summary:"primary"},type:{summary:'"action" | "disabled" | "error" | "primary" | "secondary" | "inherit" | "success" | "warning"'}},options:["action","disabled","error","primary","secondary","inherit","success","warning"],control:{type:"select"}},htmlColor:{description:"HTML цвет иконки. Чтобы его включить нужно в опциях цвета выбрать inherit.",table:{defaultValue:{summary:void 0},type:{summary:"string"}},control:{type:"color"}},containerSize:{description:"Размер контейнера иконки",table:{defaultValue:{summary:"24"},type:{summary:'"16" | "24" | "32"'}},options:[16,24,32],control:{type:"select"}},badge:{description:"JSX код компонента Badge",table:{defaultValue:{summary:"<Badge size='s' color='error'>1</Badge>"},type:{summary:"ReactNode"}},control:{type:"boolean"},mapping:{false:"",true:p.jsx(ue,{size:"s",color:"error",children:"1"})}}};var Fe=typeof performance=="object"&&typeof performance.now=="function",q=Fe?function(){return performance.now()}:function(){return Date.now()};function K(r){cancelAnimationFrame(r.id)}function $e(r,t){var i=q();function d(){q()-i>=t?r.call(null):I.id=requestAnimationFrame(d)}var I={id:requestAnimationFrame(d)};return I}var $=-1;function J(r){if(r===void 0&&(r=!1),$===-1||r){var t=document.createElement("div"),i=t.style;i.width="50px",i.height="50px",i.overflow="scroll",document.body.appendChild(t),$=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return $}var N=null;function X(r){if(r===void 0&&(r=!1),N===null||r){var t=document.createElement("div"),i=t.style;i.width="50px",i.height="50px",i.overflow="scroll",i.direction="rtl";var d=document.createElement("div"),I=d.style;return I.width="100px",I.height="100px",t.appendChild(d),document.body.appendChild(t),t.scrollLeft>0?N="positive-descending":(t.scrollLeft=1,t.scrollLeft===0?N="negative":N="positive-ascending"),document.body.removeChild(t),N}return N}var We=150,Be=function(t,i){return t};function De(r){var t,i=r.getItemOffset,d=r.getEstimatedTotalSize,I=r.getItemSize,b=r.getOffsetForIndexAndAlignment,x=r.getStartIndexForOffset,_=r.getStopIndexForStartIndex,k=r.initInstanceProps,O=r.shouldResetStyleCacheOnItemSizeChange,c=r.validateProps;return t=function(g){me(S,g);function S(u){var e;return e=g.call(this,u)||this,e._instanceProps=k(e.props,V(e)),e._outerRef=void 0,e._resetIsScrollingTimeoutId=null,e.state={instance:V(e),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof e.props.initialScrollOffset=="number"?e.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},e._callOnItemsRendered=void 0,e._callOnItemsRendered=A(function(n,o,s,l){return e.props.onItemsRendered({overscanStartIndex:n,overscanStopIndex:o,visibleStartIndex:s,visibleStopIndex:l})}),e._callOnScroll=void 0,e._callOnScroll=A(function(n,o,s){return e.props.onScroll({scrollDirection:n,scrollOffset:o,scrollUpdateWasRequested:s})}),e._getItemStyle=void 0,e._getItemStyle=function(n){var o=e.props,s=o.direction,l=o.itemSize,h=o.layout,a=e._getItemStyleCache(O&&l,O&&h,O&&s),m;if(a.hasOwnProperty(n))m=a[n];else{var y=i(e.props,n,e._instanceProps),T=I(e.props,n,e._instanceProps),z=s==="horizontal"||h==="horizontal",M=s==="rtl",L=z?y:0;a[n]=m={position:"absolute",left:M?void 0:L,right:M?L:void 0,top:z?0:y,height:z?"100%":T,width:z?T:"100%"}}return m},e._getItemStyleCache=void 0,e._getItemStyleCache=A(function(n,o,s){return{}}),e._onScrollHorizontal=function(n){var o=n.currentTarget,s=o.clientWidth,l=o.scrollLeft,h=o.scrollWidth;e.setState(function(a){if(a.scrollOffset===l)return null;var m=e.props.direction,y=l;if(m==="rtl")switch(X()){case"negative":y=-l;break;case"positive-descending":y=h-s-l;break}return y=Math.max(0,Math.min(y,h-s)),{isScrolling:!0,scrollDirection:a.scrollOffset<y?"forward":"backward",scrollOffset:y,scrollUpdateWasRequested:!1}},e._resetIsScrollingDebounced)},e._onScrollVertical=function(n){var o=n.currentTarget,s=o.clientHeight,l=o.scrollHeight,h=o.scrollTop;e.setState(function(a){if(a.scrollOffset===h)return null;var m=Math.max(0,Math.min(h,l-s));return{isScrolling:!0,scrollDirection:a.scrollOffset<m?"forward":"backward",scrollOffset:m,scrollUpdateWasRequested:!1}},e._resetIsScrollingDebounced)},e._outerRefSetter=function(n){var o=e.props.outerRef;e._outerRef=n,typeof o=="function"?o(n):o!=null&&typeof o=="object"&&o.hasOwnProperty("current")&&(o.current=n)},e._resetIsScrollingDebounced=function(){e._resetIsScrollingTimeoutId!==null&&K(e._resetIsScrollingTimeoutId),e._resetIsScrollingTimeoutId=$e(e._resetIsScrolling,We)},e._resetIsScrolling=function(){e._resetIsScrollingTimeoutId=null,e.setState({isScrolling:!1},function(){e._getItemStyleCache(-1,null)})},e}S.getDerivedStateFromProps=function(e,n){return He(e,n),c(e),null};var f=S.prototype;return f.scrollTo=function(e){e=Math.max(0,e),this.setState(function(n){return n.scrollOffset===e?null:{scrollDirection:n.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},f.scrollToItem=function(e,n){n===void 0&&(n="auto");var o=this.props,s=o.itemCount,l=o.layout,h=this.state.scrollOffset;e=Math.max(0,Math.min(e,s-1));var a=0;if(this._outerRef){var m=this._outerRef;l==="vertical"?a=m.scrollWidth>m.clientWidth?J():0:a=m.scrollHeight>m.clientHeight?J():0}this.scrollTo(b(this.props,e,n,h,this._instanceProps,a))},f.componentDidMount=function(){var e=this.props,n=e.direction,o=e.initialScrollOffset,s=e.layout;if(typeof o=="number"&&this._outerRef!=null){var l=this._outerRef;n==="horizontal"||s==="horizontal"?l.scrollLeft=o:l.scrollTop=o}this._callPropsCallbacks()},f.componentDidUpdate=function(){var e=this.props,n=e.direction,o=e.layout,s=this.state,l=s.scrollOffset,h=s.scrollUpdateWasRequested;if(h&&this._outerRef!=null){var a=this._outerRef;if(n==="horizontal"||o==="horizontal")if(n==="rtl")switch(X()){case"negative":a.scrollLeft=-l;break;case"positive-ascending":a.scrollLeft=l;break;default:var m=a.clientWidth,y=a.scrollWidth;a.scrollLeft=y-m-l;break}else a.scrollLeft=l;else a.scrollTop=l}this._callPropsCallbacks()},f.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&K(this._resetIsScrollingTimeoutId)},f.render=function(){var e=this.props,n=e.children,o=e.className,s=e.direction,l=e.height,h=e.innerRef,a=e.innerElementType,m=e.innerTagName,y=e.itemCount,T=e.itemData,z=e.itemKey,M=z===void 0?Be:z,L=e.layout,oe=e.outerElementType,re=e.outerTagName,se=e.style,ie=e.useIsScrolling,le=e.width,B=this.state.isScrolling,j=s==="horizontal"||L==="horizontal",ae=j?this._onScrollHorizontal:this._onScrollVertical,D=this._getRangeToRender(),ce=D[0],de=D[1],H=[];if(y>0)for(var E=ce;E<=de;E++)H.push(C.createElement(n,{data:T,key:M(E,T),index:E,isScrolling:ie?B:void 0,style:this._getItemStyle(E)}));var U=d(this.props,this._instanceProps);return C.createElement(oe||re||"div",{className:o,onScroll:ae,ref:this._outerRefSetter,style:pe({position:"relative",height:l,width:le,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:s},se)},C.createElement(a||m||"div",{children:H,ref:h,style:{height:j?"100%":U,pointerEvents:B?"none":void 0,width:j?U:"100%"}}))},f._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var e=this.props.itemCount;if(e>0){var n=this._getRangeToRender(),o=n[0],s=n[1],l=n[2],h=n[3];this._callOnItemsRendered(o,s,l,h)}}if(typeof this.props.onScroll=="function"){var a=this.state,m=a.scrollDirection,y=a.scrollOffset,T=a.scrollUpdateWasRequested;this._callOnScroll(m,y,T)}},f._getRangeToRender=function(){var e=this.props,n=e.itemCount,o=e.overscanCount,s=this.state,l=s.isScrolling,h=s.scrollDirection,a=s.scrollOffset;if(n===0)return[0,0,0,0];var m=x(this.props,a,this._instanceProps),y=_(this.props,m,a,this._instanceProps),T=!l||h==="backward"?Math.max(1,o):1,z=!l||h==="forward"?Math.max(1,o):1;return[Math.max(0,m-T),Math.max(0,Math.min(n-1,y+z)),m,y]},S}(C.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},t}var He=function(t,i){t.children,t.direction,t.height,t.layout,t.innerTagName,t.outerTagName,t.width,i.instance},Ue=De({getItemOffset:function(t,i){var d=t.itemSize;return i*d},getItemSize:function(t,i){var d=t.itemSize;return d},getEstimatedTotalSize:function(t){var i=t.itemCount,d=t.itemSize;return d*i},getOffsetForIndexAndAlignment:function(t,i,d,I,b,x){var _=t.direction,k=t.height,O=t.itemCount,c=t.itemSize,g=t.layout,S=t.width,f=_==="horizontal"||g==="horizontal",u=f?S:k,e=Math.max(0,O*c-u),n=Math.min(e,i*c),o=Math.max(0,i*c-u+c+x);switch(d==="smart"&&(I>=o-u&&I<=n+u?d="auto":d="center"),d){case"start":return n;case"end":return o;case"center":{var s=Math.round(o+(n-o)/2);return s<Math.ceil(u/2)?0:s>e+Math.floor(u/2)?e:s}case"auto":default:return I>=o&&I<=n?I:I<o?o:n}},getStartIndexForOffset:function(t,i){var d=t.itemCount,I=t.itemSize;return Math.max(0,Math.min(d-1,Math.floor(i/I)))},getStopIndexForStartIndex:function(t,i,d){var I=t.direction,b=t.height,x=t.itemCount,_=t.itemSize,k=t.layout,O=t.width,c=I==="horizontal"||k==="horizontal",g=i*_,S=c?O:b,f=Math.ceil((S+d-g)/_);return Math.max(0,Math.min(x-1,i+f-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){t.itemSize}});const Ve=["IconJsonOutlined24","IconLightningStroke16","IconLightningStroke24","IconLightningStroke32","IconPhoneCallContact16","IconPhoneCallContact24","IconPhoneCallContact32","IconTemperatureStroke16","IconTemperatureStroke24","IconTemperatureStroke32","IconWeightTypeOutlined16","IconWeightTypeOutlined24","IconWeightTypeOutlined32","IconMesBunkerOutlined16","IconMesBunkerOutlined24","IconMesBunkerOutlined32","IconPicInPic16","IconPicInPic24","IconPicInPic32"],qe=["IconLightningFilled16","IconLightningFilled24","IconLightningFilled32","IconBasketBuying16","IconBasketBuying24","IconBasketBuying32","IconPlay16","IconPlay24","IconPlay32","IconBalanceOutlined16","IconBalanceOutlined24","IconBalanceOutlined32","IconKovsh16","IconKovsh24","IconKovsh32","IconWeightTypeFilled16","IconWeightTypeFilled24","IconWeightTypeFilled32"],Ke=["IconBorder16","IconBorder24","IconBorder32","IconOrderIsNotSecured16","IconOrderIsNotSecured24","IconOrderIsNotSecured32","IconOrderIsOverlySecured16","IconOrderIsOverlySecured24","IconOrderIsOverlySecured32","IconOrderIsOverlySecuredLater16","IconOrderIsOverlySecuredLater24","IconOrderIsOverlySecuredLater32","IconOrderIsSecured16","IconOrderIsSecured24","IconOrderIsSecured32","IconOrderIsSecuredLater16","IconOrderIsSecuredLater24","IconOrderIsSecuredLater32","IconOrderIsPartiallySecured16","IconOrderIsPartiallySecured24","IconOrderIsPartiallySecured32","IconOrderIsPartiallySecuredLater16","IconOrderIsPartiallySecuredLater24","IconOrderIsPartiallySecuredLater32"],W=3,Je=r=>p.jsx("div",{className:v["icon-block"],children:p.jsx("div",{className:ve.wrapper,style:{width:"96%",marginLeft:"15px"},children:p.jsx(r,{})})}),Xe={title:"Components/Icon/Stories",component:ne,argTypes:Ae,decorators:[Je],parameters:{layout:"fullscreen"}},w=r=>p.jsx("div",{style:{display:"flex",justifyContent:" center"},children:p.jsx(ne,{...r})});w.storyName="Компонент Icon по умолчанию";w.args={name:"IconTuneControlOutlined32",color:"primary",containerSize:24};const P=()=>{const[r,t]=C.useState(""),i=C.useCallback(c=>c.replace("Icon",""),[]),d=C.useMemo(()=>{const c={};return Object.keys(R).forEach(g=>{Object.keys(R[g]||{}).forEach(S=>{const f=i(S).replace(g.toString(),"");c[f]||(c[f]={});const u=S.includes("Kovsh"),e=R[g][S];if(e){const n={style:{...u&&{stroke:"var(--brand-sapphire-60)"}}};c[f][g.toString()]=C.createElement(e,n)}})}),c},[i]),I=C.useCallback(c=>{const g=c.target.value;document.documentElement.style.setProperty("--icon-search",g)},[]),b=C.useCallback(c=>{const g=c.target.value;t(g)},[]),x=()=>{t("")},_=C.useRef(null);C.useEffect(()=>{document.documentElement.style.removeProperty("--icon-search");const c=getComputedStyle(document.documentElement).getPropertyValue("var(--icon-search)").trim()||"#1952b6";_.current&&(_.current.value=c)},[]);const k=C.useMemo(()=>Object.keys(d).filter(c=>c.toLowerCase().includes(r.toLowerCase())).map(c=>({title:c,sizes:d[c]})),[d,r]),O=({index:c,style:g})=>p.jsx("div",{style:g,className:v.row,children:new Array(W).fill(null).map((S,f)=>{const u=c*W+f;if(u>=k.length)return null;const e=k[u];return p.jsxs(Ie,{className:v.card,indicatorStatus:"default",children:[p.jsx("div",{className:v.cardHeader,children:p.jsx(F,{variant:"Body1",color:"var(--steel-90)",children:fe.startCase(i(e.title))})}),p.jsx("div",{className:v.icons,children:Object.entries(e.sizes).map(([n,o])=>{const s=Ve.includes(`Icon${e.title}${n}`),l=qe.includes(`Icon${e.title}${n}`),h=Ke.includes(`Icon${e.title}${n}`);return p.jsx(ye,{copy:`Icon${e.title}${n}`,placement:"bottom",children:p.jsx("div",{className:ge(v.icon,{[v.strokeIcon]:s,[v.fillAndStrokeIcon]:l,[v.iconFill]:!s&&!l&&!h}),children:o})},`Icon${e.title}${n}`)})})]},u)})});return p.jsxs("div",{className:v.wrapper,children:[p.jsxs("div",{className:v.controls,children:[p.jsx(he,{label:"Поиск иконок",value:r,onChange:b,className:v.input,reset:!0,onReset:x}),p.jsxs("div",{className:v.colorControl,children:[p.jsx(F,{variant:"Body1",className:v.colorControlTitle,children:"Выберите цвет:"}),p.jsx("input",{type:"color",ref:_,onChange:I,className:v.colorInput})]})]}),p.jsx("div",{className:v.table,children:k.length>0?p.jsx(Ue,{height:900,itemCount:Math.ceil(k.length/W),itemSize:200,width:"100%",children:O}):p.jsx(F,{variant:"Heading2",color:"var(--text-grey-900)",className:v.noResults,children:"Ничего не найдено"})})]})};P.storyName="Все доступные иконки";var G,Z,Q;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`(argsTypes: TIconProps): JSX.Element => {
  return <div style={{
    display: 'flex',
    justifyContent: ' center'
  }}>
      <Icon {...argsTypes} />
    </div>;
}`,...(Q=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:Q.source}}};var Y,ee,te;P.parameters={...P.parameters,docs:{...(Y=P.parameters)==null?void 0:Y.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(te=(ee=P.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const Ge=["IconComponent","AllIcons"],ht=Object.freeze(Object.defineProperty({__proto__:null,AllIcons:P,IconComponent:w,__namedExportsOrder:Ge,default:Xe},Symbol.toStringTag,{value:"Module"}));export{P as A,ht as I,Ae as a,v as l};
