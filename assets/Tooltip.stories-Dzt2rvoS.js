import{j as u,a as d}from"./jsx-runtime-2xDJh5tt.js";import{a1 as e,B as r}from"./index-DWTGGx_t.js";import"./generateUUID-DZpKhNdB.js";import"./index-C-x6zlLc.js";import"./index-CgSHB1U0.js";import{T as O}from"./index-BR2u5piM.js";import"./index-D3aZeTS2.js";import"./index-pmCx02Kh.js";import"./index-j1olA-rT.js";import"./index-Dp7-Jy-a.js";import"./index-ByRza-M8.js";import{l as I}from"./32-BI8cdrFX.js";import"./index-CBqU2yxZ.js";import{c as X}from"./clsx.m-CH7BE6MN.js";import{a as P}from"./argsTypes-C6vRXpxN.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-Y8Vz1tB_.js";const q="_wrapper_7b3ug_1",z="_placements_7b3ug_12",G="_behaviors_7b3ug_19",H="_custom_7b3ug_26",o={wrapper:q,"wrapper-height":"_wrapper-height_7b3ug_8",placements:z,behaviors:G,custom:H,"custom-item":"_custom-item_7b3ug_30","tooltip-top":"_tooltip-top_7b3ug_40","tooltip-bottom":"_tooltip-bottom_7b3ug_43","tooltip-left":"_tooltip-left_7b3ug_46","tooltip-right":"_tooltip-right_7b3ug_49"},d4={title:"Components/Tooltip/Stories",component:e,argTypes:P},s=t=>u("div",{className:o.wrapper,children:u(e,{description:"Тултип по умолчанию",...t,children:u(r,{variant:"secondary",children:"Наведи на меня курсор!"})})});s.storyName="Тултип по умолчанию";const i=t=>u("div",{className:o.wrapper,children:u(e,{description:"Сюда вы можете добавить текст/подсказу для компонента",...t,children:u(r,{variant:"secondary",children:"Наведи на меня курсор!"})})});i.storyName="Тултип с текстом";const n=t=>u("div",{className:o.wrapper,children:u(e,{description:"Сюда вы можете добавить текст/подсказу для компонента",...t,children:u("span",{children:u(r,{variant:"secondary",disabled:!0,children:"Наведи на меня курсор!"})})})});n.storyName="Тултип обернутый вокруг disabled элемента";const a=t=>u("div",{className:X(o.wrapper,o["wrapper-height"]),children:u(e,{title:"Заголовок текста подсказки",description:"Сюда вы можете добавить текст/подсказу для компонента",list:["Здесь, вы можете","добавить нужную вам","информацию по пунктам"],...t,children:u(r,{variant:"secondary",children:"Наведи на меня курсор!"})})});a.storyName="Тултип с заголовком, текстом и списком";const p=t=>u("div",{className:o.wrapper,children:d("div",{className:o.placements,children:[u("div",{className:o["tooltip-top"],children:u(e,{placement:"top",description:"Tooltip on top",...t,children:u(r,{variant:"secondary",children:"Наведи, тултип будет сверху!"})})}),u("div",{className:o["tooltip-bottom"],children:u(e,{placement:"bottom",description:"Tooltip on bottom",...t,children:u(r,{variant:"secondary",children:"Наведи, тултип будет снизу!"})})}),u("div",{className:o["tooltip-left"],children:u(e,{placement:"left",description:"Tooltip on left",...t,children:u(r,{variant:"secondary",children:"Наведи, тултип будет слева!"})})}),u("div",{className:o["tooltip-right"],children:u(e,{placement:"right",description:"Tooltip on right",...t,children:u(r,{variant:"secondary",children:"Наведи, тултип будет справа!"})})})]})});p.storyName="Варианты расположения тултипа";const c=t=>u("div",{className:o.wrapper,children:d("div",{className:o.behaviors,children:[u(e,{placement:"top",behavior:"hover",description:"Tooltip on hover",...t,children:u(r,{variant:"secondary",children:"Тултип появится при наведении!"})}),u(e,{placement:"top",behavior:"click",description:"Tooltip on click",...t,children:u(r,{variant:"secondary",children:"Тултип появится при клике!"})}),u(e,{placement:"top",behavior:"focus",description:"Tooltip on focus",...t,children:u(r,{variant:"secondary",children:"Тултип появится при фокусе!"})})]})});c.storyName="Варианты поведения тултипа";const l=t=>{const M=()=>{const $=["Первый пункт","Второй пункт","Третий пункт"];return u("div",{className:o.custom,children:$.map((m,j)=>d("div",{className:o["custom-item"],children:[u(I,{color:"success"}),u(O,{variant:"Caption-Medium",children:m})]},`${m}-${j}`))})};return u("div",{className:X(o.wrapper,o["wrapper-height"]),children:u(e,{behavior:"click",title:"Заголовок тултипа с кастомным элементом",description:"за добавление кастомного элемента отвечает prop - render",list:["Внутри вы можете добавить","Нужную вам разметку"],render:M(),...t,children:u(r,{variant:"secondary",children:"Нажми на меня для появления тултипа!"})})})};l.storyName="Тултип с кастомным элементом внутри";var h,v,T;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`(argsTypes: Args): JSX.Element => {
  return <div className={styles.wrapper}>
      <Tooltip description='Тултип по умолчанию' {...argsTypes}>
        <Button variant="secondary">Наведи на меня курсор!</Button>
      </Tooltip>
    </div>;
}`,...(T=(v=s.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var y,E,B;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`(argsTypes: Args): JSX.Element => {
  return <div className={styles.wrapper}>
      <Tooltip description="Сюда вы можете добавить текст/подсказу для компонента" {...argsTypes}>
        <Button variant="secondary">Наведи на меня курсор!</Button>
      </Tooltip>
    </div>;
}`,...(B=(E=i.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var g,D,F;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`(argsTypes: Args): JSX.Element => {
  return <div className={styles.wrapper}>
      <Tooltip description="Сюда вы можете добавить текст/подсказу для компонента" {...argsTypes}>
        <span>
          <Button variant="secondary" disabled>
            Наведи на меня курсор!
          </Button>
        </span>
      </Tooltip>
    </div>;
}`,...(F=(D=n.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var C,N,b;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`(argsTypes: Args): JSX.Element => {
  return <div className={clsx(styles.wrapper, styles['wrapper-height'])}>
      <Tooltip title="Заголовок текста подсказки" description="Сюда вы можете добавить текст/подсказу для компонента" list={['Здесь, вы можете', 'добавить нужную вам', 'информацию по пунктам']} {...argsTypes}>
        <Button variant="secondary">Наведи на меня курсор!</Button>
      </Tooltip>
    </div>;
}`,...(b=(N=a.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var A,_,w;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`(argsTypes: Args): JSX.Element => {
  return <div className={styles.wrapper}>
      <div className={styles.placements}>
        <div className={styles['tooltip-top']}>
          <Tooltip placement="top" description="Tooltip on top" {...argsTypes}>
            <Button variant="secondary">Наведи, тултип будет сверху!</Button>
          </Tooltip>
        </div>
        <div className={styles['tooltip-bottom']}>
          <Tooltip placement="bottom" description="Tooltip on bottom" {...argsTypes}>
            <Button variant="secondary">Наведи, тултип будет снизу!</Button>
          </Tooltip>
        </div>
        <div className={styles['tooltip-left']}>
          <Tooltip placement="left" description="Tooltip on left" {...argsTypes}>
            <Button variant="secondary">Наведи, тултип будет слева!</Button>
          </Tooltip>
        </div>
        <div className={styles['tooltip-right']}>
          <Tooltip placement="right" description="Tooltip on right" {...argsTypes}>
            <Button variant="secondary">Наведи, тултип будет справа!</Button>
          </Tooltip>
        </div>
      </div>
    </div>;
}`,...(w=(_=p.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var f,S,k;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`(argsTypes: Args): JSX.Element => {
  return <div className={styles.wrapper}>
      <div className={styles.behaviors}>
        <Tooltip placement="top" behavior="hover" description="Tooltip on hover" {...argsTypes}>
          <Button variant="secondary">Тултип появится при наведении!</Button>
        </Tooltip>
        <Tooltip placement="top" behavior="click" description="Tooltip on click" {...argsTypes}>
          <Button variant="secondary">Тултип появится при клике!</Button>
        </Tooltip>
        <Tooltip placement="top" behavior="focus" description="Tooltip on focus" {...argsTypes}>
          <Button variant="secondary">Тултип появится при фокусе!</Button>
        </Tooltip>
      </div>
    </div>;
}`,...(k=(S=c.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var x,W,J;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`(argsTypes: Args): JSX.Element => {
  const renderCustom = () => {
    const customMap = ['Первый пункт', 'Второй пункт', 'Третий пункт'];
    return <div className={styles.custom}>
        {customMap.map((item, index) => <div key={\`\${item}-\${index}\`} className={styles['custom-item']}>
            <IconDoneCheckOutlined24 color="success" />
            <Typography variant="Caption-Medium">{item}</Typography>
          </div>)}
      </div>;
  };
  return <div className={clsx(styles.wrapper, styles['wrapper-height'])}>
      <Tooltip behavior="click" title="Заголовок тултипа с кастомным элементом" description="за добавление кастомного элемента отвечает prop - render" list={['Внутри вы можете добавить', 'Нужную вам разметку']} render={renderCustom()} {...argsTypes}>
        <Button variant="secondary">Нажми на меня для появления тултипа!</Button>
      </Tooltip>
    </div>;
}`,...(J=(W=l.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};const m4=["TooltipDefault","TooltipWithDescription","TooltipWrappedDisabled","TooltipWithFull","TooltipPlacements","TooltipBehaviors","TooltipWithCustom"];export{c as TooltipBehaviors,s as TooltipDefault,p as TooltipPlacements,l as TooltipWithCustom,i as TooltipWithDescription,a as TooltipWithFull,n as TooltipWrappedDisabled,m4 as __namedExportsOrder,d4 as default};
