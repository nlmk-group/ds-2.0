import{a as u,c as m,j as e}from"./clsx.m-3764cf42.js";import{r as C}from"./index-f1f749bf.js";import{a as w}from"./index-c9e69acb.js";import{T as E}from"./index-fb030d50.js";const O="_avatar_acwrr_1",D="_circle_acwrr_8",G="_image_acwrr_11",F="_online_acwrr_22",k="_offline_acwrr_38",P="_letters_acwrr_57",U="_badge_acwrr_66",i={avatar:O,circle:D,image:G,"user-icon":"_user-icon_acwrr_15","online-indicator":"_online-indicator_acwrr_22","number-indicator":"_number-indicator_acwrr_23",online:F,offline:k,letters:P,badge:U};var n=(a=>(a.xxl="xxl",a.xl="xl",a.l="l",a.m="m",a.s="s",a))(n||{}),x=(a=>(a.circle="circle",a.square="square",a))(x||{});const j={[n.xxl]:{avatarSize:64,iconSize:32,squareRadius:8,lettersVariant:"Subheading3-Medium",lettersSize:20,badgeNumbersSize:12,numberIndicatorSize:24,badgeSize:28,specialBadgeSize:38,badgeTranslate:[21,-23]},[n.xl]:{avatarSize:56,iconSize:32,squareRadius:8,lettersVariant:"Subheading3-Medium",lettersSize:20,badgeNumbersSize:12,numberIndicatorSize:24,badgeSize:28,specialBadgeSize:38,badgeTranslate:[21,-23]},[n.l]:{avatarSize:48,iconSize:24,squareRadius:8,lettersVariant:"Body1-Medium",lettersSize:18,badgeNumbersSize:12,numberIndicatorSize:24,badgeSize:24,specialBadgeSize:32,badgeTranslate:[21,-23]},[n.m]:{avatarSize:40,iconSize:24,squareRadius:4,lettersVariant:"Body1-Medium",lettersSize:16,badgeNumbersSize:12,numberIndicatorSize:16,badgeSize:24,specialBadgeSize:32,badgeTranslate:[21,-23]},[n.s]:{avatarSize:32,iconSize:16,squareRadius:4,lettersVariant:"Body2-Medium",lettersSize:14,badgeNumbersSize:12,numberIndicatorSize:16,badgeSize:24,specialBadgeSize:32,badgeTranslate:[45,-38]}},Z=["IconBirthday16"],H=({sizeParameters:a,isSquare:t,isSpecialBadge:s,sizeVariant:l})=>{const{avatarSize:o,squareRadius:p,lettersSize:c,numberIndicatorSize:L,badgeNumbersSize:_,badgeSize:g,specialBadgeSize:b,badgeTranslate:z}=a,f=()=>{const r={width:`var(--${o}-size)`,height:`var(--${o}-size)`};return t&&(r.borderRadius=`var(--${p}-radius)`),r},A=()=>({fontSize:`var(--${c}-size)`}),I=()=>{const r={width:`var(--${L}-size)`,height:`var(--${L}-size)`,fontSize:`var(--${_}-size)`,lineHeight:`var(--${_}-size)`,transform:"translate(20%, 20%)"};return(t||l===n.s)&&(r.transform="translate(30%, 30%)"),r},y=()=>{const r={transform:"translate(0%, 0%)"};return(t||l===n.s)&&(r.transform="translate(30%, 30%)"),r},S=()=>{const[r,N]=z,v=s?b:g,h={width:`${v}px`,height:`${v}px`,transform:`translate(${r}%, ${N}%)`};return t&&(h.transform="translate(45%, -35%)"),h};return{avatarStyles:f(),lettersStyles:A(),numberIndicatorStyles:I(),onlineIndicatorStyles:y(),badgeStyles:S()}},R=a=>Z.includes(a||""),ee=()=>{const a="/assets/avatar_mock.png",{origin:t,pathname:s}=window.parent.location;return`${t}${s==="/"?"":s}${a}`},J="_overlay_1q6la_20",d={"icon-badge":"_icon-badge_1q6la_1",default:"_default_1q6la_9","with-overlay":"_with-overlay_1q6la_15",overlay:J,"special-icon":"_special-icon_1q6la_28"},K={"badge-special-overlay":"_badge-special-overlay_1hz8y_1"},B=({className:a})=>u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 34 34",fill:"none",className:m(K["badge-special-overlay"],a),children:[u("g",{filter:"url(#filter0_dd_662_1961)",children:[e("path",{d:"M17 5L18.4642 5.75524L20.0902 5.48944L21.2494 6.66018L22.8779 6.90983L23.6185 8.38148L25.0902 9.12215L25.3398 10.7506L26.5106 11.9098L26.2448 13.5358L27 15L26.2448 16.4642L26.5106 18.0902L25.3398 19.2494L25.0902 20.8779L23.6185 21.6185L22.8779 23.0902L21.2494 23.3398L20.0902 24.5106L18.4642 24.2448L17 25L15.5358 24.2448L13.9098 24.5106L12.7506 23.3398L11.1221 23.0902L10.3815 21.6185L8.90983 20.8779L8.66018 19.2494L7.48944 18.0902L7.75524 16.4642L7 15L7.75524 13.5358L7.48944 11.9098L8.66018 10.7506L8.90983 9.12215L10.3815 8.38148L11.1221 6.90983L12.7506 6.66018L13.9098 5.48944L15.5358 5.75524L17 5Z",fill:"var(--spectrum-violet-600)"}),e("path",{d:"M17.2292 4.55563L17 4.43741L16.7708 4.55563L15.4534 5.23513L13.9905 4.99599L13.736 4.95438L13.5545 5.13764L12.5116 6.19099L11.0464 6.4156L10.7915 6.45468L10.6755 6.68505L10.0091 8.00913L8.68505 8.67552L8.45468 8.79146L8.4156 9.04638L8.19099 10.5116L7.13764 11.5545L6.95438 11.736L6.99599 11.9905L7.23513 13.4534L6.55563 14.7708L6.43741 15L6.55563 15.2292L7.23513 16.5466L6.99599 18.0095L6.95438 18.264L7.13764 18.4455L8.19099 19.4884L8.4156 20.9536L8.45468 21.2085L8.68505 21.3245L10.0091 21.9909L10.6755 23.315L10.7915 23.5453L11.0464 23.5844L12.5116 23.809L13.5545 24.8624L13.736 25.0456L13.9905 25.004L15.4534 24.7649L16.7708 25.4444L17 25.5626L17.2292 25.4444L18.5466 24.7649L20.0095 25.004L20.264 25.0456L20.4455 24.8624L21.4884 23.809L22.9536 23.5844L23.2085 23.5453L23.3245 23.315L23.9909 21.9909L25.315 21.3245L25.5453 21.2085L25.5844 20.9536L25.809 19.4884L26.8624 18.4455L27.0456 18.264L27.004 18.0095L26.7649 16.5466L27.4444 15.2292L27.5626 15L27.4444 14.7708L26.7649 13.4534L27.004 11.9905L27.0456 11.736L26.8624 11.5545L25.809 10.5116L25.5844 9.04638L25.5453 8.79146L25.315 8.67552L23.9909 8.00913L23.3245 6.68505L23.2085 6.45468L22.9536 6.4156L21.4884 6.19099L20.4455 5.13764L20.264 4.95438L20.0095 4.99599L18.5466 5.23513L17.2292 4.55563Z",stroke:"var(--never-changes-white)"})]}),e("defs",{children:u("filter",{id:"filter0_dd_662_1961",x:"0.874756",y:"0.874756",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[e("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),e("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),e("feOffset",{dy:"2"}),e("feGaussianBlur",{stdDeviation:"2.5"}),e("feComposite",{in2:"hardAlpha",operator:"out"}),e("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.403922 0 0 0 0 0.431373 0 0 0 0 0.462745 0 0 0 0.08 0"}),e("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_662_1961"}),e("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),e("feOffset",{dy:"1"}),e("feGaussianBlur",{stdDeviation:"0.5"}),e("feComposite",{in2:"hardAlpha",operator:"out"}),e("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"}),e("feBlend",{mode:"normal",in2:"effect1_dropShadow_662_1961",result:"effect2_dropShadow_662_1961"}),e("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect2_dropShadow_662_1961",result:"shape"})]})})]});try{B.displayName="BadgeSpecialOverlay",B.__docgenInfo={description:"",displayName:"BadgeSpecialOverlay",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const V=({className:a,iconName:t})=>R(t)?u("div",{className:m(d["icon-badge"],d["with-overlay"],a),"data-testid":"AVATAR_BADGE_SPECIAL",children:[e(B,{className:d.overlay}),e("div",{className:d["special-icon"],children:e(w,{name:t,containerSize:16,htmlColor:"var(--never-changes-white)"})})]}):e("div",{className:m(d["icon-badge"],d.default,a),"data-testid":"AVATAR_BADGE_DEFAULT",children:e(w,{name:t,containerSize:16,htmlColor:"var(--never-changes-white)"})});try{V.displayName="IconBadge",V.__docgenInfo={description:"",displayName:"IconBadge",props:{iconName:{defaultValue:null,description:"",name:"iconName",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const q=({size:a=n.m,shape:t=x.circle,imageSrc:s,userName:l,userSurname:o,online:p,badgeIconName:c,numberIndicator:L,className:_})=>{const g=typeof L=="number",b=!g&&typeof p=="boolean",z=t===x.square,f=j[a],{iconSize:A,lettersVariant:I}=f,y=l==null?void 0:l.charAt(0),S=o==null?void 0:o.charAt(0),r=!s&&y&&S,N=!s&&!r,{avatarStyles:v,lettersStyles:h,onlineIndicatorStyles:T,numberIndicatorStyles:$,badgeStyles:M}=C.useMemo(()=>H({sizeParameters:f,isSquare:z,isSpecialBadge:R(c),sizeVariant:a}),[a,t,c]);return u("div",{className:m(i.avatar,i[a],i[t],_),style:v,"data-testid":"AVATAR",children:[s&&e("img",{src:s,className:i.image,"data-testid":"AVATAR_IMAGE"}),r&&e("div",{className:i.letters,style:h,children:u(E,{variant:I,"data-testid":"AVATAR_LETTERS",children:[y,S]})}),N&&e("div",{className:i["user-icon"],"data-testid":"AVATAR_ICON",children:e(w,{name:"IconPersonFilled32",containerSize:A,htmlColor:"var(--never-changes-white)"})}),b&&e("div",{className:m(i["online-indicator"],i[p?"online":"offline"]),style:T,"data-testid":"AVATAR_INDICATOR_ONLINE"}),g&&e("div",{className:i["number-indicator"],style:$,"data-testid":"AVATAR_INDICATOR_NUMBER",children:L}),c&&e("div",{className:i.badge,style:M,children:e(V,{iconName:c})})]})};try{q.displayName="Avatar",q.__docgenInfo={description:"",displayName:"Avatar",props:{size:{defaultValue:{value:"AvatarSize.m"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xxl"'},{value:'"xl"'},{value:'"l"'},{value:'"m"'},{value:'"s"'}]}},shape:{defaultValue:{value:"AvatarShape.circle"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"square"'}]}},imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!1,type:{name:"string"}},userName:{defaultValue:null,description:"",name:"userName",required:!1,type:{name:"string"}},userSurname:{defaultValue:null,description:"",name:"userSurname",required:!1,type:{name:"string"}},online:{defaultValue:null,description:"",name:"online",required:!1,type:{name:"boolean"}},badgeIconName:{defaultValue:null,description:"",name:"badgeIconName",required:!1,type:{name:"string"}},numberIndicator:{defaultValue:null,description:"",name:"numberIndicator",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{q as A,Z as S,n as a,x as b,ee as g};
