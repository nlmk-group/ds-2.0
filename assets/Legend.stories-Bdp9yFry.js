import{j as e}from"./iframe-tXE4xoYc.js";import{T as h}from"./index-IJbXH1LS.js";import{I as i}from"./index-BavAFXG7.js";import{a as f,L as a,E as v}from"./argsTypes-CgutajXq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-C-sXzJO7.js";import"./24-CmyNkjMd.js";import"./24-DOosEbor.js";import"./24-BWrbmGeu.js";import"./24-BbCg_oVA.js";import"./24-DRYMupHO.js";import"./24-CzQL-KAt.js";import"./24-DKRMhkuJ.js";import"./24-BGmf7Yvo.js";import"./24-C3aWb0fW.js";import"./16-5OD6xOBP.js";import"./24-DhcVhNlZ.js";import"./24-CGaTDQAV.js";import"./16-DrGrHANJ.js";import"./16-3aq9OzD6.js";import"./16-Caqr7FMr.js";import"./index-BQHkH-Oh.js";import"./index-D0fx2znr.js";import"./generateUUID-M57HTP56.js";import"./index-mWxT_Pnt.js";import"./types-TdnjS80C.js";const y="Legend-module__wrapper___2bUHX",L="Legend-module__card___f8OHf",m={wrapper:y,card:L,"card-list":"Legend-module__card-list___vP5q1","card-list-icon":"Legend-module__card-list-icon___IzizW"},u=[{default:"var(--spectrum-red-20)",hover:"var(--spectrum-red-30)",active:"var(--spectrum-red-10)"},{default:"var(--spectrum-green-20)",hover:"var(--spectrum-green-30)",active:"var(--spectrum-green-10)"},{default:"var(--spectrum-orange-20)",hover:"var(--spectrum-orange-30)",active:"var(--spectrum-orange-10)"},{default:"var(--spectrum-yellow-20)",hover:"var(--spectrum-yellow-30)",active:"var(--spectrum-yellow-10)"},{default:"var(--spectrum-salad-20)",hover:"var(--spectrum-salad-30)",active:"var(--spectrum-salad-10)"},{default:"var(--spectrum-tiffany-20)",hover:"var(--spectrum-tiffany-30)",active:"var(--spectrum-tiffany-10)"},{default:"var(--spectrum-coffee-20)",hover:"var(--spectrum-coffee-30)",active:"var(--spectrum-coffee-10)"},{default:"var(--spectrum-rose-20)",hover:"var(--spectrum-rose-30)",active:"var(--spectrum-rose-10)"},{default:"var(--spectrum-sky-20)",hover:"var(--spectrum-sky-30)",active:"var(--spectrum-sky-10)"}],{useArgs:g}=__STORYBOOK_MODULE_PREVIEW_API__,x=r=>e.jsx("div",{className:m.wrapper,children:e.jsx(r,{})}),G={title:"Components/Legend/Stories",component:a,argTypes:f,decorators:[x]},C=u.filter((r,o)=>o<=3),s=r=>{const[,o]=g(),c=n=>{o({...r,color:n})};return e.jsx(a,{...r,onColorChange:c})};s.args={type:v.VIEW,colorList:C,label:"Анализ стали с УНРС",color:{default:"var(--spectrum-red-20)",hover:"var(--spectrum-red-30)",active:"var(--spectrum-red-10)"}};s.storyName="Legend по умолчанию";const t=r=>{const[,o]=g(),c=n=>{o({...r,color:n})};return e.jsx(a,{...r,onColorChange:c})};t.args={type:v.EDIT,colorList:u,label:"Анализ стали с УНРС",color:{default:"var(--spectrum-red-20)",hover:"var(--spectrum-red-30)",active:"var(--spectrum-red-10)"}};t.storyName="Legend редактируемый";const l=r=>{const[,o]=g(),c=n=>{o({...r,color:n})};return e.jsx(a,{...r,onColorChange:c})};l.args={type:v.EDIT,colorList:u,label:"Анализ стали с УНРС",isDisabled:!0,color:{default:"var(--spectrum-red-20)",hover:"var(--spectrum-red-30)",active:"var(--spectrum-red-10)"}};l.storyName="Legend заблокированный";const d=()=>e.jsxs("div",{className:m.card,children:[e.jsx(h,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Легенда обозначений"}),e.jsxs("div",{className:m["card-list"],children:[e.jsx(a,{label:"Проба стали с УНРС",color:{default:"var(--spectrum-salad-20)",hover:"var(--spectrum-salad-30)",active:"var(--spectrum-salad-10)"}}),e.jsx(a,{label:"Проба стали с АЦВ",color:{default:"var(--spectrum-violet-20)",hover:"var(--spectrum-violet-30)",active:"var(--spectrum-violet-10)"}}),e.jsx(a,{label:"Проба чугуна с УДЧ",color:{default:"var(--spectrum-tiffany-20)",hover:"var(--spectrum-tiffany-30)",active:"var(--spectrum-tiffany-10)"}})]})]});d.storyName="Legend список цветов";const p=()=>e.jsxs("div",{className:m.card,children:[e.jsx(h,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Легенда обозначений"}),e.jsxs("div",{className:m["card-list-icon"],children:[e.jsx(a,{label:"Рулон",color:{default:"roll",viewColor:({className:r})=>e.jsx("div",{className:r,style:{height:"24px",width:"24px"},children:e.jsx(i,{name:"IconRollFilled24",htmlColor:"var(--spectrum-red-50)"})})}}),e.jsx(a,{label:"Шлаковая чаша",color:{default:"shlack",viewColor:({className:r})=>e.jsx("div",{className:r,style:{height:"24px",width:"24px"},children:e.jsx(i,{name:"IconLotok24",htmlColor:"var(--mnemo-40)"})})}}),e.jsx(a,{label:"ПК",color:{default:"pk",viewColor:({className:r})=>e.jsx("div",{className:r,style:{height:"24px",width:"24px"},children:e.jsx(i,{name:"IconDplayersFilled24",htmlColor:"var(--mnemo-50)"})})}})]})]});p.storyName="Legend список иконок";s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(props: ILegendProps): JSX.Element => {
  const [, updateArgs] = useArgs();
  const onChange = (val: ILegendColor) => {
    updateArgs({
      ...props,
      color: val
    });
  };
  return <Legend {...props} onColorChange={onChange} />;
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(props: ILegendProps): JSX.Element => {
  const [, updateArgs] = useArgs();
  const onChange = (val: ILegendColor) => {
    updateArgs({
      ...props,
      color: val
    });
  };
  return <Legend {...props} onColorChange={onChange} />;
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(props: ILegendProps): JSX.Element => {
  const [, updateArgs] = useArgs();
  const onChange = (val: ILegendColor) => {
    updateArgs({
      ...props,
      color: val
    });
  };
  return <Legend {...props} onColorChange={onChange} />;
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...p.parameters?.docs?.source}}};const Q=["LegendDefault","LegendEdit","LegendDisabled","LegendSeveralView","LegendSeveralViewIcon"];export{s as LegendDefault,l as LegendDisabled,t as LegendEdit,d as LegendSeveralView,p as LegendSeveralViewIcon,Q as __namedExportsOrder,G as default};
