import{j as o}from"./jsx-runtime-BRNY0I4F.js";import{T as f}from"./index-qC5wYQgy.js";import{c as a}from"./clsx-B-dksMZM.js";const j="_wrapper_136sg_1",v="_input_136sg_8",i={wrapper:j,"input-wrapper":"_input-wrapper_136sg_8","control-wrapper":"_control-wrapper_136sg_14",input:v},y="_control_fja3j_1",r={control:y,"control-disabled":"_control-disabled_fja3j_15","hover-wrapper":"_hover-wrapper_fja3j_18","point-hover":"_point-hover_fja3j_22","control-tooltip":"_control-tooltip_fja3j_34","control-tooltip-none":"_control-tooltip-none_fja3j_50","control-tooltip-disabled":"_control-tooltip-disabled_fja3j_64","control-tooltip-bottom":"_control-tooltip-bottom_fja3j_67","two-sticks":"_two-sticks_fja3j_83"};var _=(e=>(e.top="top",e.bottom="bottom",e.none="none",e))(_||{});const d=({position:e,value:n,disabled:t,hover:s,showValue:m=!0,thumbValuePosition:p=_.top})=>o.jsxs("div",{className:a(r.control,t&&r["control-disabled"]),style:{left:`${e}%`},children:[o.jsx("div",{className:r["two-sticks"]}),m&&o.jsx("div",{className:a(p==="top"&&r["control-tooltip"],p==="bottom"&&r["control-tooltip-bottom"],p==="none"&&r["control-tooltip-none"],t&&r["control-tooltip-disabled"]),children:o.jsx(f,{variant:"Body2-Medium",children:`${n}%`})}),o.jsx("div",{className:a(!t&&r["hover-wrapper"]),children:o.jsx("div",{className:a(s&&!t&&r["point-hover"])})})]});try{d.displayName="Control",d.__docgenInfo={description:"",displayName:"Control",props:{showValue:{defaultValue:{value:"true"},description:"",name:"showValue",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"number"}},hover:{defaultValue:null,description:"",name:"hover",required:!1,type:{name:"boolean"}},thumbValuePosition:{defaultValue:{value:"ESliderThumbValuePosition.top"},description:"",name:"thumbValuePosition",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"top"'},{value:'"bottom"'}]}}}}}catch{}const b="_rail_qz691_1",l={rail:b,"inner-rail":"_inner-rail_qz691_11","inner-rail-disabled":"_inner-rail-disabled_qz691_17"},c=({maxPosition:e,minPosition:n,disabled:t})=>o.jsx("div",{className:a(l.rail,t&&l["rail-disabled"]),children:o.jsx("div",{className:a(l["inner-rail"],t&&l["inner-rail-disabled"]),style:{left:`${n}%`,right:`${100-e}%`}})});try{c.displayName="Rail",c.__docgenInfo={description:"",displayName:"Rail",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},minPosition:{defaultValue:null,description:"",name:"minPosition",required:!0,type:{name:"number"}},maxPosition:{defaultValue:null,description:"",name:"maxPosition",required:!0,type:{name:"number"}}}}}catch{}const u=({setHover:e,...n})=>{const t=()=>{e&&e(!0)},s=()=>{e&&e(!1)};return o.jsx("input",{className:i.input,type:"range",...n,onMouseOver:t,onMouseLeave:s})};try{u.displayName="InputSlider",u.__docgenInfo={description:"",displayName:"InputSlider",props:{setHover:{defaultValue:null,description:"",name:"setHover",required:!1,type:{name:"((value: boolean) => void)"}}}}}catch{}const N={Control:d,Rail:c,Wrapper:({children:e})=>o.jsx("div",{className:i.wrapper,children:e}),InputWrapper:({children:e})=>o.jsx("div",{className:i["input-wrapper"],children:e}),ControlWrapper:({children:e})=>o.jsx("div",{className:i["control-wrapper"],children:e}),Input:u};export{_ as E,N as S};
