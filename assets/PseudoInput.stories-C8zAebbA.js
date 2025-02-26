import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{T as n,S as j,U as p,K as T}from"./TreeList-C6MnL0cn.js";import"./index-Bnop-kX6.js";import"./generateUUID-DxloPTqA.js";import"./index-CpbWvJzH.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import{T as N}from"./index-qC5wYQgy.js";import"./index-CzMHMlM5.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-EMjLjg44.js";import"./index-DokmLR-l.js";import{y as C,z}from"./32-BuOLl5Xl.js";import{c as E}from"./clsx-B-dksMZM.js";import{g as u}from"./styles.module-ox-emdf8.js";import{a as w}from"./argsTypes-CZtbcLW0.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./index-B5g4YLzC.js";const i="Label",d="PseudoInput",O=s=>e.jsx("div",{className:E(u.wrapper,u["flex-height"]),children:e.jsx(s,{})}),$={title:"Components/PseudoInput/Stories",component:n,argTypes:w,parameters:{controls:{exclude:["variant","color","className","suffix","style","badgeChildren"]}},decorators:[O]},r=s=>e.jsx(n,{...s,children:d});r.args={label:i};r.storyName="PseudoInput по умолчанию";const o=()=>{const s=Object.values(j);return e.jsx("div",{className:p.row,children:s.map(l=>e.jsx(n,{label:i,size:l,children:d},l))})};o.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};o.storyName="PseudoInput разных размеров";const a=()=>{const s=Object.values(T);return e.jsx("div",{className:p.row,children:s.map(l=>e.jsx(n,{label:i,labelColor:l,children:d},l))})};a.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};a.storyName="PseudoInputStates в разных состояниях";const t=()=>{const s=e.jsxs("div",{className:p.suffix,children:["kg",e.jsx("div",{style:{display:"flex",alignSelf:"center"},children:e.jsx(C,{})}),e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx("div",{style:{display:"flex",alignSelf:"start",paddingTop:"2px"},children:e.jsx(z,{htmlColor:"var(--spectrum-green-60)"})}),e.jsx(N,{variant:"Body2Mono-Medium",children:"2"})]})]});return e.jsx(n,{label:i,badgeChildren:1234,suffix:s,children:d})};t.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};t.storyName="PseudoInput с суффиксом и компонентом Badge";var c,m,x;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"(argTypes: IPseudoInputProps): JSX.Element => <PseudoInput {...argTypes}>{value}</PseudoInput>",...(x=(m=r.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var f,I,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`(): JSX.Element => {
  const sizes = Object.values(EPseudoInputSizes);
  return <div className={classNames.row}>
      {sizes.map(size => <PseudoInput key={size} label={labelText} size={size}>
          {value}
        </PseudoInput>)}
    </div>;
}`,...(v=(I=o.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var g,y,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`(): JSX.Element => {
  const colors = Object.values(customInputColors);
  return <div className={classNames.row}>
      {colors.map(color => <PseudoInput key={color} label={labelText} labelColor={color}>
          {value}
        </PseudoInput>)}
    </div>;
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var h,P,S;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`(): JSX.Element => {
  const suffix = <div className={classNames.suffix}>
      kg
      <div style={{
      display: 'flex',
      alignSelf: 'center'
    }}>
        <IconInfoOutlined16 />
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center'
    }}>
        <div style={{
        display: 'flex',
        alignSelf: 'start',
        paddingTop: '2px'
      }}>
          <IconStackExpandedTriangleUp16 htmlColor="var(--spectrum-green-60)" />
        </div>
        <Typography variant="Body2Mono-Medium">2</Typography>
      </div>
    </div>;
  return <PseudoInput label={labelText} badgeChildren={1234} suffix={suffix}>
      {value}
    </PseudoInput>;
}`,...(S=(P=t.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};const ee=["PseudoInputDefault","PseudoInputSizes","PseudoInputColors","PseudoInputWithSuffixAndBadge"];export{a as PseudoInputColors,r as PseudoInputDefault,o as PseudoInputSizes,t as PseudoInputWithSuffixAndBadge,ee as __namedExportsOrder,$ as default};
