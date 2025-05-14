import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{aG as i,O as T,H as S}from"./TreeList-DdX155Lh.js";import"./index-Bnop-kX6.js";import"./generateUUID-X09o9Pdp.js";import"./index-qbkiYuzD.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import{T as p}from"./index-qC5wYQgy.js";import"./index-DovCGOp-.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-n_FSf3Cv.js";import"./index-DokmLR-l.js";import{B as _,C}from"./32-BTlKmMLd.js";import{c as w}from"./clsx-B-dksMZM.js";import{g as u}from"./styles.module-ox-emdf8.js";import{a as z}from"./argsTypes-BFIkBBN1.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-B5g4YLzC.js";const k="_row_1dyok_1",B="_item_1dyok_8",E="_description_1dyok_14",O="_suffix_1dyok_18",J="_custom_1dyok_26",o={row:k,item:B,description:E,suffix:O,custom:J},d="Label",c="PseudoInput",M=s=>e.jsx("div",{className:w(u.wrapper,u["flex-height"]),children:e.jsx(s,{})}),te={title:"Components/PseudoInput/Stories",component:i,argTypes:z,parameters:{controls:{exclude:["variant","color","className","suffix","style","badgeChildren"]}},decorators:[M]},a=s=>e.jsx(i,{...s,children:c});a.args={label:d};a.storyName="PseudoInput по умолчанию";const t=()=>{const s=Object.values(T);return e.jsx("div",{className:o.row,children:s.map(r=>e.jsxs("div",{className:o.item,children:[e.jsxs(p,{variant:"Body2",color:"var(--steel-70)",className:o.description,children:['size="',r,'"']}),e.jsx(i,{label:d,size:r,children:c})]},r))})};t.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};t.storyName="PseudoInput разных размеров";const l=()=>{const s=Object.values(S);return e.jsx("div",{className:o.row,children:s.map(r=>e.jsxs("div",{className:o.item,children:[e.jsxs(p,{variant:"Body2",color:"var(--steel-70)",className:o.description,children:['labelColor="',r,'"']}),e.jsx(i,{label:d,labelColor:r,children:c})]},r))})};l.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};l.storyName="PseudoInputStates в разных состояниях";const n=()=>{const s=e.jsxs("div",{className:o.suffix,children:["kg",e.jsx("div",{style:{display:"flex",alignSelf:"center"},children:e.jsx(_,{})}),e.jsxs("div",{style:{display:"flex",height:"22px",alignItems:"flex-end"},children:[e.jsx("div",{style:{display:"flex",paddingTop:"2px"},children:e.jsx(C,{htmlColor:"var(--spectrum-green-60)"})}),e.jsx(p,{variant:"Body2Mono-Medium",children:"2"})]})]});return e.jsx(i,{label:d,badgeChildren:1234,suffix:s,className:o.custom,children:c})};n.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};n.storyName="PseudoInput с суффиксом и компонентом Badge";var m,x,v;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"(argTypes: IPseudoInputProps): JSX.Element => <PseudoInput {...argTypes}>{value}</PseudoInput>",...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var y,f,h;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var g,I,N;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(N=(I=l.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var b,P,j;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(j=(P=n.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};const le=["PseudoInputDefault","PseudoInputSizes","PseudoInputColors","PseudoInputWithSuffixAndBadge"];export{l as PseudoInputColors,a as PseudoInputDefault,t as PseudoInputSizes,n as PseudoInputWithSuffixAndBadge,le as __namedExportsOrder,te as default};
