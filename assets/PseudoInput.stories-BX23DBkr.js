import{j as e}from"./iframe-tXE4xoYc.js";import{c as m}from"./colorsMapping-C6bFIk14.js";import{P as i,E as x}from"./index-CnPKv_iQ.js";import{T as u}from"./index-IJbXH1LS.js";import{c as v}from"./clsx-B-dksMZM.js";import{g as p}from"./styles.module-BGEDXogi.js";import{a as f}from"./argsTypes-LRqWQweT.js";import{I,a as y}from"./16-3aq9OzD6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-UIqxTLHU.js";import"./IconsDirectory.module-CEwWgW3i.js";const h="PseudoInput-module__row___kUgYh",g="PseudoInput-module__item___BxIhY",P="PseudoInput-module__description___M-6aB",b="PseudoInput-module__suffix___bwqXC",N="PseudoInput-module__custom___YI5RW",o={row:h,item:g,description:P,suffix:b,custom:N},d="Label",c="PseudoInput",_=s=>e.jsx("div",{className:v(p.wrapper,p["flex-height"]),children:e.jsx(s,{})}),X={title:"Components/PseudoInput/Stories",component:i,argTypes:f,decorators:[_]},r=s=>e.jsx(i,{...s,children:c});r.args={label:d};r.storyName="PseudoInput по умолчанию";const t=()=>{const s=Object.values(x);return e.jsx("div",{className:o.row,children:s.map(a=>e.jsxs("div",{className:o.item,children:[e.jsxs(u,{variant:"Body2",color:"var(--steel-70)",className:o.description,children:['size="',a,'"']}),e.jsx(i,{label:d,size:a,children:c})]},a))})};t.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};t.storyName="PseudoInput разных размеров";const l=()=>{const s=Object.values(m);return e.jsx("div",{className:o.row,children:s.map(a=>e.jsxs("div",{className:o.item,children:[e.jsxs(u,{variant:"Body2",color:"var(--steel-70)",className:o.description,children:['labelColor="',a,'"']}),e.jsx(i,{label:d,labelColor:a,children:c})]},a))})};l.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};l.storyName="PseudoInputStates в разных состояниях";const n=()=>{const s=e.jsxs("div",{className:o.suffix,children:["kg",e.jsx("div",{style:{display:"flex",alignSelf:"center"},children:e.jsx(I,{})}),e.jsxs("div",{style:{display:"flex",height:"22px",alignItems:"flex-end"},children:[e.jsx("div",{style:{display:"flex",paddingTop:"2px"},children:e.jsx(y,{htmlColor:"var(--spectrum-green-60)"})}),e.jsx(u,{variant:"Body2Mono-Medium",children:"2"})]})]});return e.jsx(i,{label:d,badgeChildren:1234,suffix:s,className:o.custom,children:c})};n.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};n.storyName="PseudoInput с суффиксом и компонентом Badge";r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"(argTypes: IPseudoInputProps): JSX.Element => <PseudoInput {...argTypes}>{value}</PseudoInput>",...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(): JSX.Element => {
  const sizes = Object.values(EPseudoInputSizes);
  return <div className={classNames.row}>
      {sizes.map(size => <div key={size} className={classNames.item}>
          <Typography variant="Body2" color="var(--steel-70)" className={classNames.description}>
            size="{size}"
          </Typography>
          <PseudoInput label={labelText} size={size}>
            {value}
          </PseudoInput>
        </div>)}
    </div>;
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(): JSX.Element => {
  const colors = Object.values(customInputColors);
  return <div className={classNames.row}>
      {colors.map(color => <div key={color} className={classNames.item}>
          <Typography variant="Body2" color="var(--steel-70)" className={classNames.description}>
            labelColor="{color}"
          </Typography>
          <PseudoInput label={labelText} labelColor={color}>
            {value}
          </PseudoInput>
        </div>)}
    </div>;
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(): JSX.Element => {
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
      height: '22px',
      alignItems: 'flex-end'
    }}>
        <div style={{
        display: 'flex',
        paddingTop: '2px'
      }}>
          <IconStackExpandedTriangleUp16 htmlColor="var(--spectrum-green-60)" />
        </div>
        <Typography variant="Body2Mono-Medium">2</Typography>
      </div>
    </div>;
  return <PseudoInput label={labelText} badgeChildren={1234} suffix={suffix} className={classNames.custom}>
      {value}
    </PseudoInput>;
}`,...n.parameters?.docs?.source}}};const J=["PseudoInputDefault","PseudoInputSizes","PseudoInputColors","PseudoInputWithSuffixAndBadge"];export{l as PseudoInputColors,r as PseudoInputDefault,t as PseudoInputSizes,n as PseudoInputWithSuffixAndBadge,J as __namedExportsOrder,X as default};
