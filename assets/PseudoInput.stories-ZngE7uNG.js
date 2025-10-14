import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{aI as n,Q as T,l as S}from"./TreeList-BjeWiidJ.js";import"./index-BcJSXhQi.js";import"./generateUUID-Cm0X4XRy.js";import"./index-cHpEh_mw.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import{T as p}from"./index-DmffzHLE.js";import"./index-CQem5UP1.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-bO57duG5.js";import"./index-C5rKoyII.js";import{B as _,C}from"./32-CkUgnIrf.js";import{c as w}from"./clsx-B-dksMZM.js";import{g as u}from"./styles.module-m0Zsy3Hi.js";import{a as z}from"./argsTypes-B4IcCde_.js";import"./index-ChsGqxH_.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";const k="_row_1dyok_1",B="_item_1dyok_8",E="_description_1dyok_14",O="_suffix_1dyok_18",J="_custom_1dyok_26",o={row:k,item:B,description:E,suffix:O,custom:J},d="Label",c="PseudoInput",M=s=>e.jsx("div",{className:w(u.wrapper,u["flex-height"]),children:e.jsx(s,{})}),ie={title:"Components/PseudoInput/Stories",component:n,argTypes:z,decorators:[M]},a=s=>e.jsx(n,{...s,children:c});a.args={label:d};a.storyName="PseudoInput по умолчанию";const t=()=>{const s=Object.values(T);return e.jsx("div",{className:o.row,children:s.map(r=>e.jsxs("div",{className:o.item,children:[e.jsxs(p,{variant:"Body2",color:"var(--steel-70)",className:o.description,children:['size="',r,'"']}),e.jsx(n,{label:d,size:r,children:c})]},r))})};t.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};t.storyName="PseudoInput разных размеров";const l=()=>{const s=Object.values(S);return e.jsx("div",{className:o.row,children:s.map(r=>e.jsxs("div",{className:o.item,children:[e.jsxs(p,{variant:"Body2",color:"var(--steel-70)",className:o.description,children:['labelColor="',r,'"']}),e.jsx(n,{label:d,labelColor:r,children:c})]},r))})};l.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};l.storyName="PseudoInputStates в разных состояниях";const i=()=>{const s=e.jsxs("div",{className:o.suffix,children:["kg",e.jsx("div",{style:{display:"flex",alignSelf:"center"},children:e.jsx(_,{})}),e.jsxs("div",{style:{display:"flex",height:"22px",alignItems:"flex-end"},children:[e.jsx("div",{style:{display:"flex",paddingTop:"2px"},children:e.jsx(C,{htmlColor:"var(--spectrum-green-60)"})}),e.jsx(p,{variant:"Body2Mono-Medium",children:"2"})]})]});return e.jsx(n,{label:d,badgeChildren:1234,suffix:s,className:o.custom,children:c})};i.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};i.storyName="PseudoInput с суффиксом и компонентом Badge";var m,x,v;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"(argTypes: IPseudoInputProps): JSX.Element => <PseudoInput {...argTypes}>{value}</PseudoInput>",...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var y,f,h;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var I,g,N;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(N=(g=l.parameters)==null?void 0:g.docs)==null?void 0:N.source}}};var b,P,j;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(j=(P=i.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};const ne=["PseudoInputDefault","PseudoInputSizes","PseudoInputColors","PseudoInputWithSuffixAndBadge"];export{l as PseudoInputColors,a as PseudoInputDefault,t as PseudoInputSizes,i as PseudoInputWithSuffixAndBadge,ne as __namedExportsOrder,ie as default};
