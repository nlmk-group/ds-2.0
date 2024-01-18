import{a as V,c as w,j as n}from"./clsx.m-3764cf42.js";import{r as h}from"./index-f1f749bf.js";import{I as A}from"./index-ed56af28.js";import{T as N}from"./index-fb030d50.js";const g="_wrapper_37oy9_1",k={wrapper:g};var v=(e=>(e.plus="plus",e.arrow="arrow",e))(v||{}),t=(e=>(e.xs="xs",e.s="s",e.m="m",e))(t||{}),C=(e=>(e.default="default",e.paper="paper",e))(C||{});const S="_accordionItem_1v5vk_1",M="_header_1v5vk_6",R="_disabled_1v5vk_13",H="_hovered_1v5vk_20",B="_paper_1v5vk_23",L="_m_1v5vk_32",P="_content_1v5vk_35",Y="_s_1v5vk_38",j="_xs_1v5vk_44",d={accordionItem:S,header:M,disabled:R,default:"_default_1v5vk_17",hovered:H,paper:B,m:L,content:P,s:Y,xs:j},q=16,z={[t.xs]:"Body-Medium (18)",[t.s]:"Subheading3-Medium",[t.m]:"Subheading3-Medium"},D={[t.xs]:"Body1 (16)",[t.s]:"Body (18)",[t.m]:"Body (18)"},E=({id:e,title:_,size:l,variant:f,startIcon:u,endIcon:c,isExpanded:s,onExpand:I,disabled:i,children:p,...o})=>{const[y,a]=h.useState(!1),r={[v.plus]:s?"IconClose24":"IconAdd24",[v.arrow]:s?"IconChevronArrowUpOutlined24":"IconChevronArrowDownOutlined24"},m=()=>{a(!0)},x=()=>{a(!1)},O=T=>{i||I(T)};return V("div",{className:w(d.accordionItem,d[l],d[f],{[d.disabled]:i,[d.hovered]:y}),onMouseEnter:m,onMouseLeave:x,...o,children:[V("div",{className:d.header,onClick:()=>O(e),children:[n("div",{children:u&&n("div",{"data-testid":"ACCORDION_LEFT_ICON",children:n(A,{name:r[u],containerSize:q})})}),n(N,{variant:z[l],children:_}),n("div",{children:c&&n("div",{"data-testid":"ACCORDION_RIGHT_ICON",children:n(A,{name:r[c],containerSize:q})})})]}),s&&!i&&n(N,{variant:D[l],className:d.content,children:p})]})};try{E.displayName="AccordionItem",E.__docgenInfo={description:"",displayName:"AccordionItem",props:{isExpanded:{defaultValue:null,description:"",name:"isExpanded",required:!0,type:{name:"boolean"}},onExpand:{defaultValue:null,description:"",name:"onExpand",required:!0,type:{name:"(id: string | number) => void"}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:'"plus" | "arrow" | null'}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:'"plus" | "arrow" | null'}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"m"'},{value:'"s"'},{value:'"xs"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"default"'},{value:'"paper"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string | number"}},initiallyExpanded:{defaultValue:null,description:"",name:"initiallyExpanded",required:!1,type:{name:"boolean"}}}}}catch{}const b=({items:e,variant:_=C.default,startIcon:l=v.arrow,endIcon:f=null,size:u=t.m,multipleExpanded:c=!1,className:s,disabled:I=!1,...i})=>{const[p,o]=h.useState([]),y=a=>{const r=p.includes(a);o(c?m=>r?m.filter(x=>x!==a):[...m,a]:()=>r?[]:[a])};return h.useEffect(()=>{const a=e.filter(r=>r.initiallyExpanded).map(r=>r.id);o(a)},[e]),n("div",{className:w(k.wrapper,s),...i,children:e.map(a=>n(E,{id:a.id,title:a.title,onExpand:y,isExpanded:p.includes(a.id),startIcon:l,endIcon:f,size:u,variant:_,disabled:I||a.disabled,children:a.content},a.id))})};try{b.displayName="Accordion",b.__docgenInfo={description:"",displayName:"Accordion",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TAccordionItem[]"}},startIcon:{defaultValue:{value:"iconsMapping.arrow"},description:"",name:"startIcon",required:!1,type:{name:"iconsMapping | null"}},endIcon:{defaultValue:{value:"null"},description:"",name:"endIcon",required:!1,type:{name:"iconsMapping | null"}},size:{defaultValue:{value:"sizesMapping.m"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"s"'},{value:'"m"'}]}},variant:{defaultValue:{value:"variantsMapping.default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"paper"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},multipleExpanded:{defaultValue:{value:"false"},description:"",name:"multipleExpanded",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}export{b as A,v as i,t as s,C as v};