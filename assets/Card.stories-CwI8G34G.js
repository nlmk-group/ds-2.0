import{a as o,j as e,F as B}from"./jsx-runtime-2xDJh5tt.js";import{D as v,C as x,a1 as D,O as H,a6 as M,M as z,L as h}from"./index-BTGymsfC.js";import"./generateUUID-1cqmAxQg.js";import"./index-D1sOrwww.js";import"./index-BqvJ5JrJ.js";import{T as E}from"./index-CkVMA9Py.js";import{I as _}from"./index-BulafiJ9.js";import"./index-Dd2IALEV.js";import"./index-BGOHbkSJ.js";import"./index-Dp7-Jy-a.js";import"./index-D8kVD15d.js";import"./32-oKJmtLZM.js";import{r as S}from"./index-CBqU2yxZ.js";import{s as q}from"./styles.module-DeLvTIFi.js";import{c as w}from"./clsx.m-CH7BE6MN.js";import{a as g}from"./chunk-WFFRPTHA-B5TewAtn.js";import{a as F,D as V,C as P}from"./text-BlcRxDEh.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-4J70fF5O.js";import"./preview-errors-Dg5lG0lC.js";import"./index-DrFu-skq.js";const A={"card-vertical":"_card-vertical_1yhvu_1","card-horizontal":"_card-horizontal_1yhvu_6"},r={"image-wrapper":"_image-wrapper_tzkhv_1","image-vertical":"_image-vertical_tzkhv_10","image-horizontal":"_image-horizontal_tzkhv_14","image-content":"_image-content_tzkhv_18","icon-wrapper":"_icon-wrapper_tzkhv_25","badges-wrapper":"_badges-wrapper_tzkhv_34","info-block":"_info-block_tzkhv_44","info-block-vertical":"_info-block-vertical_tzkhv_50","info-block-horizontal":"_info-block-horizontal_tzkhv_54","title-wrapper":"_title-wrapper_tzkhv_58","title-typography-helper":"_title-typography-helper_tzkhv_63","description-typography-helper":"_description-typography-helper_tzkhv_70","badge-helper":"_badge-helper_tzkhv_79"},d=({primaryButton:a,secondaryButton:t})=>o("div",{style:{display:"flex",gap:"8px"},children:[a!==null&&e("div",{"data-testid":"CARD_BUTTON_PRIMARY",children:e(v,{startIcon:a.startIcon||e(_,{name:"IconArticleOutlined24",containerSize:24,htmlColor:"var(--assigned-colors-button-main-text)"}),onClick:a.onClick,children:a.label})}),t!==null&&e("div",{"data-testid":"CARD_BUTTON_SECONDARY",children:e(v,{variant:"primary",fill:"clear",startIcon:t.startIcon,onClick:t.onClick,children:t.label})})]});try{d.displayName="BtnGroup",d.__docgenInfo={description:"",displayName:"BtnGroup",props:{primaryButton:{defaultValue:null,description:"",name:"primaryButton",required:!0,type:{name:"IButton | null"}},secondaryButton:{defaultValue:null,description:"",name:"secondaryButton",required:!0,type:{name:"IButton | null"}}}}}catch{}const j=[{label:"C++",value:"C++"},{label:"C#",value:"C#"},{disabled:!0,label:"Swift",value:"Swift"},{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"Kotlin",value:"Kotlin"}],G="Кириллица важна Следует отметить, что перспективное планирование предполагает независимые способы реализации переосмысления внешнеэкономических политик. С другой стороны, семантический разбор внешних противодействий предопределяет высокую востребованность экономической целесообразности принимаемых решений. Являясь всего лишь частью общей картины, представители современных социальных резервов формируют глобальную экономическую сеть и при этом — объявлены нарушающими общечеловеческие нормы этики и морали. Таким образом, синтетическое тестирование предоставляет широкие возможности для укрепления моральных ценностей.",K={label:"Принять",onClick:g("onClick, Принять")},U={label:"Отменить",onClick:g("onClick, Отменить")},$="https://assets.euromoneydigital.com/dims4/default/38fddd1/2147483647/strip/true/crop/3576x2000+0+0/resize/840x470!/quality/90/?url=http%3A%2F%2Feuromoney-brightspot.s3.amazonaws.com%2Ff5%2Fb4%2F9835b4a04b02a0ac15aebbe9c774%2Fnlmk-alamy-23march22.jpg",J=["HTML","CSS","JavaScript","TypeScript","React","Angular","SQL","Jira"],C={label:"Programming languages",options:j,onSelectionChange:g("onSelectionChange")},m=({orientation:a,imageURL:t,badges:n})=>o("div",{className:w(r["image-wrapper"],r[`image-${a}`]),children:[t.length?e("img",{"data-testid":"CARD_IMAGE",className:r["image-content"],src:t,alt:"Card Icon"}):e("div",{"data-testid":"IMAGE_BLANK",className:r["icon-wrapper"],children:e(_,{name:"IconFactory32",htmlColor:"var(--dark-primary-navyblue-200)"})}),n.length!==0&&e("div",{"data-testid":"BADGES_WRAPPER",className:r["badges-wrapper"],children:n.map((p,s)=>e(x,{children:p},s))})]});try{m.displayName="ImageHelper",m.__docgenInfo={description:"",displayName:"ImageHelper",props:{orientation:{defaultValue:null,description:"",name:"orientation",required:!0,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},imageURL:{defaultValue:null,description:"",name:"imageURL",required:!0,type:{name:"string"}},badges:{defaultValue:null,description:"",name:"badges",required:!0,type:{name:"string[]"}}}}}catch{}const u=({title:a,href:t="",checkAction:n=null,checked:p=!1})=>{const[s,R]=S.useState(p),O=L=>{R(!s),n!==null&&n(L)},y=()=>e(E,{variant:"Heading3",className:r["title-typography-helper"],children:a});return t.length?e("div",{"data-testid":"TITLE_LINK",children:e(D,{href:t,size:"h3",rightIcon:e(_,{name:"IconArrowRightOutlined24"}),children:a})}):n!==null?o("div",{className:r["title-wrapper"],"data-testid":"TITLE_CHECKBOX",children:[e("div",{style:{display:"flex",alignItems:"center"},children:e(H,{checked:s,onChange:O})}),e(y,{})]}):e("div",{className:r["title-wrapper"],"data-testid":"TITLE_SIMPLE",children:e(y,{})})};try{u.displayName="TitleHelper",u.__docgenInfo={description:"",displayName:"TitleHelper",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},href:{defaultValue:{value:""},description:"",name:"href",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},checkAction:{defaultValue:{value:"null"},description:"",name:"checkAction",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}const c=({orientation:a=z.vertical})=>{const[t,n]=S.useState("");return o(B,{children:[e(m,{orientation:a,imageURL:$,badges:J}),o("div",{className:w(r["info-block"],r[`info-block-${a}`]),children:[e(u,{title:"Пример заголовка"}),e(E,{variant:"Body1-Medium",className:r["description-typography-helper"],children:G}),e(x,{className:r["badge-helper"],children:"12"}),e(M,{selected:t,label:C.label,onSelectionChange:n,options:C.options}),e(d,{primaryButton:K,secondaryButton:U})]})]})};try{c.displayName="ContentExample",c.__docgenInfo={description:"",displayName:"ContentExample",props:{orientation:{defaultValue:{value:"orientationMapping.vertical"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}const W=a=>e("div",{className:q.wrapper,style:{background:"var(--background-paper)",width:"fit-content"},children:a()}),fe={title:"Components/Card/Stories",component:h,decorators:[W],argTypes:F},l=a=>e(h,{...a,className:A["card-vertical"],children:e(c,{})});l.storyName=V;const i=a=>e("div",{style:{display:"flex",gap:"20px"},children:Object.values(z).map((t,n)=>e(h,{...a,orientation:t,className:A[`card-${t}`],children:e(c,{orientation:t})},n))});i.storyName=P;i.args={};var f,b,k;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`(argTypes: ICard): ReactNode => {
  return <Card {...argTypes} className={stylesCard['card-vertical']}>
      <ContentExample />
    </Card>;
}`,...(k=(b=l.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var I,N,T;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`(argTypes: ICard): ReactNode => {
  return <div style={{
    display: 'flex',
    gap: '20px'
  }}>
      {Object.values(orientationMapping).map((orientation: orientationMapping, index: number) => <Card key={index} {...argTypes} orientation={orientation} className={stylesCard[\`card-\${orientation}\`]}>
          <ContentExample orientation={orientation} />
        </Card>)}
    </div>;
}`,...(T=(N=i.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};const be=["CardDefault","CardOrientation"];export{l as CardDefault,i as CardOrientation,be as __namedExportsOrder,fe as default};