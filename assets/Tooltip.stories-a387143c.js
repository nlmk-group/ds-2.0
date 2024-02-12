import{j as u,c as X,a as d}from"./clsx.m-3764cf42.js";import{f as j}from"./index-ed56af28.js";import{a7 as o}from"./index-d664667a.js";import"./index-a4c35820.js";import"./index-63601013.js";import"./index-e99519f1.js";import{B as e}from"./index-cd305b84.js";import"./index-147655d7.js";import{T as I}from"./index-fb030d50.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-8c6efd17.js";import"./index-f1f749bf.js";import{a as P}from"./argsTypes-aed4bc4c.js";import"./IconsList.module-e4fe8555.js";import"./IconArticle24-414bfa4c.js";import"./IconPanTool24-f1398bf1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./get-78cac09e.js";import"./index-c1da5c13.js";const O="_wrapper_404cf_1",q="_placements_404cf_12",z="_behaviors_404cf_19",G="_custom_404cf_26",t={wrapper:O,"wrapper-height":"_wrapper-height_404cf_8",placements:q,behaviors:z,custom:G,"custom-item":"_custom-item_404cf_30","tooltip-top":"_tooltip-top_404cf_40","tooltip-bottom":"_tooltip-bottom_404cf_43","tooltip-left":"_tooltip-left_404cf_46","tooltip-right":"_tooltip-right_404cf_49"},m4={title:"Components/Tooltip/Stories",component:o,argTypes:P},r=l=>u("div",{className:t.wrapper,children:u(o,{...l,children:u(e,{variant:"secondary",children:"Наведи на меня курсор!"})})});r.storyName="Тултип по умолчанию";const i=()=>u("div",{className:t.wrapper,children:u(o,{description:"Сюда вы можете добавить текст/подсказу для компонента",children:u(e,{variant:"secondary",children:"Наведи на меня курсор!"})})});i.storyName="Тултип с текстом";const n=()=>u("div",{className:t.wrapper,children:u(o,{description:"Сюда вы можете добавить текст/подсказу для компонента",children:u("span",{children:u(e,{variant:"secondary",disabled:!0,children:"Наведи на меня курсор!"})})})});n.storyName="Тултип обернутый вокруг disabled элемента";const s=()=>u("div",{className:X(t.wrapper,t["wrapper-height"]),children:u(o,{title:"Заголовок текста подсказки",description:"Сюда вы можете добавить текст/подсказу для компонента",list:["Здесь, вы можете","добавить нужную вам","информацию по пунктам"],children:u(e,{variant:"secondary",children:"Наведи на меня курсор!"})})});s.storyName="Тултип с заголовком, текстом и списком";const a=()=>u("div",{className:t.wrapper,children:d("div",{className:t.placements,children:[u("div",{className:t["tooltip-top"],children:u(o,{placement:"top",description:"Tooltip on top",children:u(e,{variant:"secondary",children:"Наведи, тултип будет сверху!"})})}),u("div",{className:t["tooltip-bottom"],children:u(o,{placement:"bottom",description:"Tooltip on bottom",children:u(e,{variant:"secondary",children:"Наведи, тултип будет снизу!"})})}),u("div",{className:t["tooltip-left"],children:u(o,{placement:"left",description:"Tooltip on left",children:u(e,{variant:"secondary",children:"Наведи, тултип будет слева!"})})}),u("div",{className:t["tooltip-right"],children:u(o,{placement:"right",description:"Tooltip on right",children:u(e,{variant:"secondary",children:"Наведи, тултип будет справа!"})})})]})});a.storyName="Варианты расположения тултипа";const p=()=>u("div",{className:t.wrapper,children:d("div",{className:t.behaviors,children:[u(o,{placement:"top",behavior:"hover",description:"Tooltip on hover",children:u(e,{variant:"secondary",children:"Тултип появится при наведении!"})}),u(o,{placement:"top",behavior:"click",description:"Tooltip on click",children:u(e,{variant:"secondary",children:"Тултип появится при клике!"})}),u(o,{placement:"top",behavior:"focus",description:"Tooltip on focus",children:u(e,{variant:"secondary",children:"Тултип появится при фокусе!"})})]})});p.storyName="Варианты поведения тултипа";const c=()=>{const l=()=>{const M=["Первый пункт","Второй пункт","Третий пункт"];return u("div",{className:t.custom,children:M.map((m,$)=>d("div",{className:t["custom-item"],children:[u(j,{color:"success"}),u(I,{variant:"Caption-Medium",children:m})]},`${m}-${$}`))})};return u("div",{className:X(t.wrapper,t["wrapper-height"]),children:u(o,{behavior:"click",title:"Заголовок тултипа с кастомным элементом",description:"за добавление кастомного элемента отвечает prop - render",list:["Внутри вы можете добавить","Нужную вам разметку"],render:l(),children:u(e,{variant:"secondary",children:"Нажми на меня для появления тултипа!"})})})};c.storyName="Тултип с кастомным элементом внутри";var v,h,T;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`(argsTypes: Args): JSX.Element => {
  return <div className={styles.wrapper}>
      <Tooltip {...argsTypes}>
        <Button variant="secondary">Наведи на меня курсор!</Button>
      </Tooltip>
    </div>;
}`,...(T=(h=r.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var y,E,B;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper}>
      <Tooltip description="Сюда вы можете добавить текст/подсказу для компонента">
        <Button variant="secondary">Наведи на меня курсор!</Button>
      </Tooltip>
    </div>;
}`,...(B=(E=i.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var D,F,C;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper}>
      <Tooltip description="Сюда вы можете добавить текст/подсказу для компонента">
        <span>
          <Button variant="secondary" disabled>
            Наведи на меня курсор!
          </Button>
        </span>
      </Tooltip>
    </div>;
}`,...(C=(F=n.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};var N,_,f;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={clsx(styles.wrapper, styles['wrapper-height'])}>
      <Tooltip title="Заголовок текста подсказки" description="Сюда вы можете добавить текст/подсказу для компонента" list={['Здесь, вы можете', 'добавить нужную вам', 'информацию по пунктам']}>
        <Button variant="secondary">Наведи на меня курсор!</Button>
      </Tooltip>
    </div>;
}`,...(f=(_=s.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var g,A,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper}>
      <div className={styles.placements}>
        <div className={styles['tooltip-top']}>
          <Tooltip placement="top" description="Tooltip on top">
            <Button variant="secondary">Наведи, тултип будет сверху!</Button>
          </Tooltip>
        </div>
        <div className={styles['tooltip-bottom']}>
          <Tooltip placement="bottom" description="Tooltip on bottom">
            <Button variant="secondary">Наведи, тултип будет снизу!</Button>
          </Tooltip>
        </div>
        <div className={styles['tooltip-left']}>
          <Tooltip placement="left" description="Tooltip on left">
            <Button variant="secondary">Наведи, тултип будет слева!</Button>
          </Tooltip>
        </div>
        <div className={styles['tooltip-right']}>
          <Tooltip placement="right" description="Tooltip on right">
            <Button variant="secondary">Наведи, тултип будет справа!</Button>
          </Tooltip>
        </div>
      </div>
    </div>;
}`,...(b=(A=a.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var w,S,x;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper}>
      <div className={styles.behaviors}>
        <Tooltip placement="top" behavior="hover" description="Tooltip on hover">
          <Button variant="secondary">Тултип появится при наведении!</Button>
        </Tooltip>
        <Tooltip placement="top" behavior="click" description="Tooltip on click">
          <Button variant="secondary">Тултип появится при клике!</Button>
        </Tooltip>
        <Tooltip placement="top" behavior="focus" description="Tooltip on focus">
          <Button variant="secondary">Тултип появится при фокусе!</Button>
        </Tooltip>
      </div>
    </div>;
}`,...(x=(S=p.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var W,k,J;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`(): JSX.Element => {
  const renderCustom = () => {
    const customMap = ['Первый пункт', 'Второй пункт', 'Третий пункт'];
    return <div className={styles.custom}>
        {customMap.map((item, index) => <div key={\`\${item}-\${index}\`} className={styles['custom-item']}>
            <IconDone24 color="success" />
            <Typography variant="Caption-Medium">{item}</Typography>
          </div>)}
      </div>;
  };
  return <div className={clsx(styles.wrapper, styles['wrapper-height'])}>
      <Tooltip behavior="click" title="Заголовок тултипа с кастомным элементом" description="за добавление кастомного элемента отвечает prop - render" list={['Внутри вы можете добавить', 'Нужную вам разметку']} render={renderCustom()}>
        <Button variant="secondary">Нажми на меня для появления тултипа!</Button>
      </Tooltip>
    </div>;
}`,...(J=(k=c.parameters)==null?void 0:k.docs)==null?void 0:J.source}}};const v4=["TooltipDefault","TooltipWithDescription","TooltipWrappedDisabled","TooltipWithFull","TooltipPlacements","TooltipBehaviors","TooltipWithCustom"];export{p as TooltipBehaviors,r as TooltipDefault,a as TooltipPlacements,c as TooltipWithCustom,i as TooltipWithDescription,s as TooltipWithFull,n as TooltipWrappedDisabled,v4 as __namedExportsOrder,m4 as default};
