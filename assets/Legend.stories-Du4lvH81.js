import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{aC as a,I as v}from"./TreeList-e8j-Ky4T.js";import"./generateUUID-D5yDV8CF.js";import"./index-BrUUz505.js";import"./index-Dd1OPmdN.js";import"./index-vbXA6nr0.js";import"./index-PY2fm1mi.js";import{T}from"./index-DmffzHLE.js";import{I as i}from"./index-CsQ_b7hm.js";import"./index-VmJK6twV.js";import"./index-BPWT-JIL.js";import"./index-SjOgrvem.js";import"./index-C1EIKtiR.js";import"./index-BcJSXhQi.js";import"./32-CiI8XTkU.js";import{a as D}from"./argsTypes-Cs5hKGen.js";import"./index-ChsGqxH_.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";const k="_wrapper_1c4gg_1",B="_card_1c4gg_9",m={wrapper:k,card:B,"card-list":"_card-list_1c4gg_21","card-list-icon":"_card-list-icon_1c4gg_27"},u=[{default:"var(--spectrum-red-20)",hover:"var(--spectrum-red-30)",active:"var(--spectrum-red-10)"},{default:"var(--spectrum-green-20)",hover:"var(--spectrum-green-30)",active:"var(--spectrum-green-10)"},{default:"var(--spectrum-orange-20)",hover:"var(--spectrum-orange-30)",active:"var(--spectrum-orange-10)"},{default:"var(--spectrum-yellow-20)",hover:"var(--spectrum-yellow-30)",active:"var(--spectrum-yellow-10)"},{default:"var(--spectrum-salad-20)",hover:"var(--spectrum-salad-30)",active:"var(--spectrum-salad-10)"},{default:"var(--spectrum-tiffany-20)",hover:"var(--spectrum-tiffany-30)",active:"var(--spectrum-tiffany-10)"},{default:"var(--spectrum-coffee-20)",hover:"var(--spectrum-coffee-30)",active:"var(--spectrum-coffee-10)"},{default:"var(--spectrum-rose-20)",hover:"var(--spectrum-rose-30)",active:"var(--spectrum-rose-10)"},{default:"var(--spectrum-sky-20)",hover:"var(--spectrum-sky-30)",active:"var(--spectrum-sky-10)"}],{useArgs:g}=__STORYBOOK_MODULE_PREVIEW_API__,V=r=>e.jsx("div",{className:m.wrapper,children:e.jsx(r,{})}),le={title:"Components/Legend/Stories",component:a,argTypes:D,decorators:[V]},J=u.filter((r,o)=>o<=3),s=r=>{const[,o]=g(),c=n=>{o({...r,color:n})};return e.jsx(a,{...r,onColorChange:c})};s.args={type:v.VIEW,colorList:J,label:"Анализ стали с УНРС",color:{default:"var(--spectrum-red-20)",hover:"var(--spectrum-red-30)",active:"var(--spectrum-red-10)"}};s.storyName="Legend по умолчанию";const t=r=>{const[,o]=g(),c=n=>{o({...r,color:n})};return e.jsx(a,{...r,onColorChange:c})};t.args={type:v.EDIT,colorList:u,label:"Анализ стали с УНРС",color:{default:"var(--spectrum-red-20)",hover:"var(--spectrum-red-30)",active:"var(--spectrum-red-10)"}};t.storyName="Legend редактируемый";const l=r=>{const[,o]=g(),c=n=>{o({...r,color:n})};return e.jsx(a,{...r,onColorChange:c})};l.args={type:v.EDIT,colorList:u,label:"Анализ стали с УНРС",isDisabled:!0,color:{default:"var(--spectrum-red-20)",hover:"var(--spectrum-red-30)",active:"var(--spectrum-red-10)"}};l.storyName="Legend заблокированный";const d=()=>e.jsxs("div",{className:m.card,children:[e.jsx(T,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Легенда обозначений"}),e.jsxs("div",{className:m["card-list"],children:[e.jsx(a,{label:"Проба стали с УНРС",color:{default:"var(--spectrum-salad-20)",hover:"var(--spectrum-salad-30)",active:"var(--spectrum-salad-10)"}}),e.jsx(a,{label:"Проба стали с АЦВ",color:{default:"var(--spectrum-violet-20)",hover:"var(--spectrum-violet-30)",active:"var(--spectrum-violet-10)"}}),e.jsx(a,{label:"Проба чугуна с УДЧ",color:{default:"var(--spectrum-tiffany-20)",hover:"var(--spectrum-tiffany-30)",active:"var(--spectrum-tiffany-10)"}})]})]});d.storyName="Legend список цветов";const p=()=>e.jsxs("div",{className:m.card,children:[e.jsx(T,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Легенда обозначений"}),e.jsxs("div",{className:m["card-list-icon"],children:[e.jsx(a,{label:"Рулон",color:{default:"roll",viewColor:({className:r})=>e.jsx("div",{className:r,style:{height:"24px",width:"24px"},children:e.jsx(i,{name:"IconRollFilled24",htmlColor:"var(--spectrum-red-50)"})})}}),e.jsx(a,{label:"Шлаковая чаша",color:{default:"shlack",viewColor:({className:r})=>e.jsx("div",{className:r,style:{height:"24px",width:"24px"},children:e.jsx(i,{name:"IconLotok24",htmlColor:"var(--mnemo-40)"})})}}),e.jsx(a,{label:"ПК",color:{default:"pk",viewColor:({className:r})=>e.jsx("div",{className:r,style:{height:"24px",width:"24px"},children:e.jsx(i,{name:"IconDplayersFilled24",htmlColor:"var(--mnemo-50)"})})}})]})]});p.storyName="Legend список иконок";var h,f,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`(props: ILegendProps): JSX.Element => {
  const [, updateArgs] = useArgs();
  const onChange = (val: ILegendColor) => {
    updateArgs({
      ...props,
      color: val
    });
  };
  return <Legend {...props} onColorChange={onChange} />;
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var L,x,C;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`(props: ILegendProps): JSX.Element => {
  const [, updateArgs] = useArgs();
  const onChange = (val: ILegendColor) => {
    updateArgs({
      ...props,
      color: val
    });
  };
  return <Legend {...props} onColorChange={onChange} />;
}`,...(C=(x=t.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var j,I,w;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`(props: ILegendProps): JSX.Element => {
  const [, updateArgs] = useArgs();
  const onChange = (val: ILegendColor) => {
    updateArgs({
      ...props,
      color: val
    });
  };
  return <Legend {...props} onColorChange={onChange} />;
}`,...(w=(I=l.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var N,_,b;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.card}>
      <Typography variant="Body1-Bold" color="var(--steel-90)">
        Легенда обозначений
      </Typography>
      <div className={styles['card-list']}>
        <Legend label="Проба стали с УНРС" color={{
        default: 'var(--spectrum-salad-20)',
        hover: 'var(--spectrum-salad-30)',
        active: 'var(--spectrum-salad-10)'
      }} />
        <Legend label="Проба стали с АЦВ" color={{
        default: 'var(--spectrum-violet-20)',
        hover: 'var(--spectrum-violet-30)',
        active: 'var(--spectrum-violet-10)'
      }} />
        <Legend label="Проба чугуна с УДЧ" color={{
        default: 'var(--spectrum-tiffany-20)',
        hover: 'var(--spectrum-tiffany-30)',
        active: 'var(--spectrum-tiffany-10)'
      }} />
      </div>
    </div>;
}`,...(b=(_=d.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var E,S,A;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.card}>
      <Typography variant="Body1-Bold" color="var(--steel-90)">
        Легенда обозначений
      </Typography>
      <div className={styles['card-list-icon']}>
        <Legend label="Рулон" color={{
        default: 'roll',
        viewColor: ({
          className
        }) => <div className={className} style={{
          height: '24px',
          width: '24px'
        }}>
                <Icon name="IconRollFilled24" htmlColor="var(--spectrum-red-50)" />
              </div>
      }} />
        <Legend label="Шлаковая чаша" color={{
        default: 'shlack',
        viewColor: ({
          className
        }) => <div className={className} style={{
          height: '24px',
          width: '24px'
        }}>
                <Icon name="IconLotok24" htmlColor="var(--mnemo-40)" />
              </div>
      }} />
        <Legend label="ПК" color={{
        default: 'pk',
        viewColor: ({
          className
        }) => <div className={className} style={{
          height: '24px',
          width: '24px'
        }}>
                <Icon name="IconDplayersFilled24" htmlColor="var(--mnemo-50)" />
              </div>
      }} />
      </div>
    </div>;
}`,...(A=(S=p.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};const ce=["LegendDefault","LegendEdit","LegendDisabled","LegendSeveralView","LegendSeveralViewIcon"];export{s as LegendDefault,l as LegendDisabled,t as LegendEdit,d as LegendSeveralView,p as LegendSeveralViewIcon,ce as __namedExportsOrder,le as default};
