import{j as u,a as o}from"./jsx-runtime-2xDJh5tt.js";import{a7 as i,B as n,K as a,N as y}from"./index-CPpCWzCZ.js";import"./generateUUID-C4dJbmAm.js";import"./index-DdUHXjGd.js";import"./index-D60oXbFF.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import{T as r}from"./index-nWYpQihe.js";import"./index-tm22VGJr.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-D-OkhesI.js";import{z as h,A as I,B as J}from"./32-CjiFhZy5.js";import"./index-CBqU2yxZ.js";import{c as s}from"./clsx.m-CH7BE6MN.js";import{a as X}from"./argsTypes-pokGFaPA.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-CMH8wQUv.js";const W="_wrapper_1nhcy_1",$="_placements_1nhcy_12",j="_behaviors_1nhcy_20",L="_custom_1nhcy_27",Q="_line_1nhcy_107",t={wrapper:W,"wrapper-height":"_wrapper-height_1nhcy_8",placements:$,behaviors:j,custom:L,"custom-item":"_custom-item_1nhcy_31","tooltip-top":"_tooltip-top_1nhcy_41","tooltip-top-right":"_tooltip-top-right_1nhcy_44","tooltip-top-left":"_tooltip-top-left_1nhcy_47","tooltip-bottom":"_tooltip-bottom_1nhcy_50","tooltip-bottom-left":"_tooltip-bottom-left_1nhcy_53","tooltip-bottom-right":"_tooltip-bottom-right_1nhcy_56","tooltip-left":"_tooltip-left_1nhcy_59","tooltip-right":"_tooltip-right_1nhcy_62","tooltip-left-start":"_tooltip-left-start_1nhcy_65","tooltip-right-start":"_tooltip-right-start_1nhcy_68","tooltip-left-end":"_tooltip-left-end_1nhcy_71","tooltip-right-end":"_tooltip-right-end_1nhcy_74","traffic-wrapper":"_traffic-wrapper_1nhcy_78","traffic-item":"_traffic-item_1nhcy_84","card-helper":"_card-helper_1nhcy_91","card-wrapper":"_card-wrapper_1nhcy_96","text-card":"_text-card_1nhcy_101","line-wrapper":"_line-wrapper_1nhcy_107",line:Q,"line-success":"_line-success_1nhcy_121","line-warning":"_line-warning_1nhcy_125","line-primary":"_line-primary_1nhcy_129","line-error":"_line-error_1nhcy_133"},d4={title:"Components/Tooltip/Stories",component:i,argTypes:X},l=e=>u("div",{className:t.wrapper,children:u(i,{title:"Тултип по умолчанию",...e,children:u(n,{variant:"secondary",children:"Наведи на меня курсор!"})})});l.storyName="Тултип по умолчанию";const c=e=>u("div",{className:t.wrapper,children:u(i,{description:"Сюда вы можете добавить текст/подсказу для компонента",...e,children:u("span",{children:u(n,{variant:"secondary",disabled:!0,children:"Наведи на меня курсор!"})})})});c.storyName="Тултип обернутый вокруг disabled элемента";const p=e=>u("div",{className:t.wrapper,children:o("div",{className:t.placements,children:[u("div",{className:t["tooltip-top"],children:u(i,{placement:a.top,description:"Tooltip on top",...e,children:u(n,{variant:"secondary",children:"Наведи, тултип будет сверху!"})})}),u("div",{className:t["tooltip-top-left"],children:u(i,{placement:a["top-start"],description:"Tooltip on top start",...e,children:u(n,{variant:"secondary",children:"Наведи, тултип будет сверху слева!"})})}),u("div",{className:t["tooltip-top-right"],children:u(i,{placement:a["top-end"],description:"Tooltip on top end",...e,children:u(n,{variant:"secondary",children:"Наведи, тултип будет сверху справа!"})})}),u("div",{className:t["tooltip-left-start"],children:u(i,{placement:a["left-start"],description:"Tooltip on left start",...e,children:u(n,{variant:"secondary",children:"Наведи, тултип будет слева!"})})}),u("div",{className:t["tooltip-right-start"],children:u(i,{placement:a["right-start"],description:"Tooltip on right start",...e,children:u(n,{variant:"secondary",children:"Наведи, тултип будет справа!"})})}),u("div",{className:t["tooltip-left"],children:u(i,{placement:a.left,description:"Tooltip on left",...e,children:u(n,{variant:"secondary",children:"Наведи, тултип будет слева!"})})}),u("div",{className:t["tooltip-right"],children:u(i,{placement:a.right,description:"Tooltip on right",...e,children:u(n,{variant:"secondary",children:"Наведи, тултип будет справа!"})})}),u("div",{className:t["tooltip-left-end"],children:u(i,{placement:a["left-end"],description:"Tooltip on left end",...e,children:u(n,{variant:"secondary",children:"Наведи, тултип будет слева!"})})}),u("div",{className:t["tooltip-right-end"],children:u(i,{placement:a["right-end"],description:"Tooltip on right end",...e,children:u(n,{variant:"secondary",children:"Наведи, тултип будет справа!"})})}),u("div",{className:t["tooltip-bottom"],children:u(i,{placement:a.bottom,description:"Tooltip on bottom",...e,children:u(n,{variant:"secondary",children:"Наведи, тултип будет снизу!"})})}),u("div",{className:t["tooltip-bottom-left"],children:u(i,{placement:a["bottom-start"],description:"Tooltip on bottom start",...e,children:u(n,{variant:"secondary",children:"Наведи, тултип будет снизу слева!"})})}),u("div",{className:t["tooltip-bottom-right"],children:u(i,{placement:a["bottom-end"],description:"Tooltip on bottom end",...e,children:u(n,{variant:"secondary",children:"Наведи, тултип будет снизу справа!"})})})]})});p.storyName="Варианты расположения тултипа";const d=e=>u("div",{className:t.wrapper,children:o("div",{className:t.behaviors,children:[u(i,{placement:"top",behavior:"hover",description:"Tooltip on hover",...e,children:u(n,{variant:"secondary",children:"Тултип появится при наведении!"})}),u(i,{placement:"top",behavior:"click",description:"Tooltip on click",...e,children:u(n,{variant:"secondary",children:"Тултип появится при клике!"})}),u(i,{placement:"top",behavior:"focus",description:"Tooltip on focus",...e,children:u(n,{variant:"secondary",children:"Тултип появится при фокусе!"})})]})});d.storyName="Варианты поведения тултипа";const m=e=>{const k=()=>{const O=["Первый пункт","Второй пункт","Третий пункт"];return o("div",{className:t["traffic-wrapper"],children:[u(r,{variant:"Body2-Bold",children:"Список"}),u(r,{variant:"Body2-Medium",children:"Просто обычный пример списка"}),u("div",{className:t.custom,children:O.map((v,z)=>o("div",{className:t["custom-item"],children:[u(h,{color:"success"}),u(r,{variant:"Caption-Medium",children:v})]},`${v}-${z}`))})]})},P=()=>o("div",{className:t["traffic-wrapper"],children:[u("div",{children:u(r,{variant:"Body2-Bold",children:"Светофор"})}),o("div",{children:[o("div",{className:t["traffic-item"],children:[u(y,{color:"success",size:"s"}),u(r,{variant:"Body2-Medium",children:"Зеленая зона"})]}),o("div",{className:t["traffic-item"],children:[u(y,{color:"warning",size:"s"}),u(r,{variant:"Body2-Medium",children:"Желтая зона"})]}),o("div",{className:t["traffic-item"],children:[u(y,{color:"error",size:"s"}),u(r,{variant:"Body2-Medium",children:"Красная зона"})]})]}),u("div",{children:u(r,{variant:"Body2-Bold",children:"Карточки"})}),o("div",{className:t["traffic-wrapper"],children:[o("div",{className:t["card-wrapper"],children:[u("div",{className:t["line-wrapper"],children:u("div",{className:s(t.line,t["line-success"])})}),u(r,{variant:"Body2-Medium",className:t["text-card"],children:"Считаются по формуле, информация собирается с КПЭ нижних уровней"})]}),o("div",{className:t["card-wrapper"],children:[u("div",{className:t["line-wrapper"],children:u("div",{className:s(t.line,t["line-warning"])})}),u(r,{variant:"Body2-Medium",className:t["text-card"],children:"Формула отсутствует, информация не собирается с КПЭ нижних уровней, влияние определено путем математического моделирования"})]}),o("div",{className:t["card-wrapper"],children:[u("div",{className:t["line-wrapper"],children:u("div",{className:s(t.line,t["line-primary"])})}),u(r,{variant:"Body2-Medium",className:t["text-card"],children:"Формула отсутствует, информация не собирается с КПЭ нижних уровней, влияние определено экспертно (влияет / не влияет)"})]}),o("div",{className:t["card-wrapper"],children:[u("div",{className:t["line-wrapper"],children:u("div",{className:s(t.line,t["line-error"])})}),u(r,{variant:"Body2-Medium",className:t["text-card"],children:"Формула отсутствует, информация не собирается с КПЭ нижних уровней, влияние определено экспертно (влияет / не влияет)"})]})]}),u("div",{children:u(n,{children:"Настройки"})})]}),S=()=>o("div",{className:t["traffic-wrapper"],children:[u("div",{children:u(r,{variant:"Body2-Bold",children:"Специалист по коммерции"})}),o("div",{children:[o("div",{className:t["traffic-item"],children:[u(h,{color:"success"}),u(r,{variant:"Body2-Medium",children:"Капранчиков С.Н.  —  20.02.2021"})]}),o("div",{className:t["traffic-item"],children:[u(I,{color:"primary"}),u(r,{variant:"Body2-Medium",children:"Райкова Н.С.  —  25.02.2021"})]})]}),u("div",{children:u(r,{variant:"Body2-Bold",children:"Генеральный директор"})}),u("div",{children:o("div",{className:t["traffic-item"],children:[u(J,{color:"error"}),u(r,{variant:"Body2-Medium",children:"Тевс М.В.  —  25.02.2021"})]})})]});return o("div",{className:s(t.wrapper,t["wrapper-height"]),children:[u(i,{behavior:"click",render:k(),...e,children:u(n,{variant:"secondary",children:"Нажми на меня для появления тултипа!"})}),u(i,{behavior:"click",render:P(),...e,placement:"right",clickable:!0,children:u(n,{variant:"secondary",children:"Нажми на меня для появления тултипа!"})}),u(i,{behavior:"click",render:S(),...e,placement:"top-end",children:u(n,{variant:"secondary",children:"Нажми на меня для появления тултипа!"})})]})};m.storyName="Тултип с кастомным элементом внутри";var T,B,g;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`(argsTypes: Args): JSX.Element => {
  return <div className={styles.wrapper}>
      <Tooltip title='Тултип по умолчанию' {...argsTypes}>
        <Button variant="secondary">Наведи на меня курсор!</Button>
      </Tooltip>
    </div>;
}`,...(g=(B=l.parameters)==null?void 0:B.docs)==null?void 0:g.source}}};var N,f,F;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`(argsTypes: Args): JSX.Element => {
  return <div className={styles.wrapper}>
      <Tooltip description="Сюда вы можете добавить текст/подсказу для компонента" {...argsTypes}>
        <span>
          <Button variant="secondary" disabled>
            Наведи на меня курсор!
          </Button>
        </span>
      </Tooltip>
    </div>;
}`,...(F=(f=c.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var D,_,E;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`(argsTypes: Args): JSX.Element => {
  return <div className={styles.wrapper}>
      <div className={styles.placements}>
        <div className={styles['tooltip-top']}>
          <Tooltip placement={ETooltipPlacementType.top} description="Tooltip on top" {...argsTypes}>
            <Button variant="secondary">Наведи, тултип будет сверху!</Button>
          </Tooltip>
        </div>
        <div className={styles['tooltip-top-left']}>
          <Tooltip placement={ETooltipPlacementType['top-start']} description="Tooltip on top start" {...argsTypes}>
            <Button variant="secondary">Наведи, тултип будет сверху слева!</Button>
          </Tooltip>
        </div>
        <div className={styles['tooltip-top-right']}>
          <Tooltip placement={ETooltipPlacementType['top-end']} description="Tooltip on top end" {...argsTypes}>
            <Button variant="secondary">Наведи, тултип будет сверху справа!</Button>
          </Tooltip>
        </div>
        <div className={styles['tooltip-left-start']}>
          <Tooltip placement={ETooltipPlacementType['left-start']} description="Tooltip on left start" {...argsTypes}>
            <Button variant="secondary">Наведи, тултип будет слева!</Button>
          </Tooltip>
        </div>
        <div className={styles['tooltip-right-start']}>
          <Tooltip placement={ETooltipPlacementType['right-start']} description="Tooltip on right start" {...argsTypes}>
            <Button variant="secondary">Наведи, тултип будет справа!</Button>
          </Tooltip>
        </div>
        <div className={styles['tooltip-left']}>
          <Tooltip placement={ETooltipPlacementType['left']} description="Tooltip on left" {...argsTypes}>
            <Button variant="secondary">Наведи, тултип будет слева!</Button>
          </Tooltip>
        </div>
        <div className={styles['tooltip-right']}>
          <Tooltip placement={ETooltipPlacementType["right"]} description="Tooltip on right" {...argsTypes}>
            <Button variant="secondary">Наведи, тултип будет справа!</Button>
          </Tooltip>
        </div>
        <div className={styles['tooltip-left-end']}>
          <Tooltip placement={ETooltipPlacementType["left-end"]} description="Tooltip on left end" {...argsTypes}>
            <Button variant="secondary">Наведи, тултип будет слева!</Button>
          </Tooltip>
        </div>
        <div className={styles['tooltip-right-end']}>
          <Tooltip placement={ETooltipPlacementType["right-end"]} description="Tooltip on right end" {...argsTypes}>
            <Button variant="secondary">Наведи, тултип будет справа!</Button>
          </Tooltip>
        </div>
        <div className={styles['tooltip-bottom']}>
          <Tooltip placement={ETooltipPlacementType.bottom} description="Tooltip on bottom" {...argsTypes}>
            <Button variant="secondary">Наведи, тултип будет снизу!</Button>
          </Tooltip>
        </div>
        <div className={styles['tooltip-bottom-left']}>
          <Tooltip placement={ETooltipPlacementType['bottom-start']} description="Tooltip on bottom start" {...argsTypes}>
            <Button variant="secondary">Наведи, тултип будет снизу слева!</Button>
          </Tooltip>
        </div>
        <div className={styles['tooltip-bottom-right']}>
          <Tooltip placement={ETooltipPlacementType['bottom-end']} description="Tooltip on bottom end" {...argsTypes}>
            <Button variant="secondary">Наведи, тултип будет снизу справа!</Button>
          </Tooltip>
        </div>
      </div>
    </div>;
}`,...(E=(_=p.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var w,b,C;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`(argsTypes: Args): JSX.Element => {
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
}`,...(C=(b=d.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var A,M,x;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`(argsTypes: Args): JSX.Element => {
  const renderCustom = () => {
    const customMap = ['Первый пункт', 'Второй пункт', 'Третий пункт'];
    return <div className={styles['traffic-wrapper']}>
        <Typography variant='Body2-Bold'>
          Список
        </Typography>
        <Typography variant='Body2-Medium'>
          Просто обычный пример списка
        </Typography>
        <div className={styles.custom}>
          {customMap.map((item, index) => <div key={\`\${item}-\${index}\`} className={styles['custom-item']}>
              <IconDoneCheckOutlined24 color="success" />
              <Typography variant="Caption-Medium">{item}</Typography>
            </div>)}
        </div>
      </div>;
  };
  const trafficLights = () => <div className={styles['traffic-wrapper']}>
      <div>
        <Typography variant='Body2-Bold'>
          Светофор
        </Typography>
      </div>
      <div>
        <div className={styles['traffic-item']}>
          <Badge color='success' size='s' />
          <Typography variant='Body2-Medium'>
            Зеленая зона
          </Typography>
        </div>
        <div className={styles['traffic-item']}>
          <Badge color='warning' size='s' />
          <Typography variant='Body2-Medium'>
            Желтая зона
          </Typography>
        </div>
        <div className={styles['traffic-item']}>
          <Badge color='error' size='s' />
          <Typography variant='Body2-Medium'>
            Красная зона
          </Typography>
        </div>
      </div>
      <div>
        <Typography variant='Body2-Bold'>
          Карточки
        </Typography>
      </div>
      <div className={styles['traffic-wrapper']}>
        <div className={styles['card-wrapper']}>
          <div className={styles['line-wrapper']}>
            <div className={clsx(styles.line, styles['line-success'])} />
          </div>
          <Typography variant='Body2-Medium' className={styles['text-card']}>
            Считаются по формуле, информация собирается с КПЭ нижних уровней
          </Typography>
        </div>

        <div className={styles['card-wrapper']}>
          <div className={styles['line-wrapper']}>
            <div className={clsx(styles.line, styles['line-warning'])} />
          </div>
          <Typography variant='Body2-Medium' className={styles['text-card']}>
            Формула отсутствует, информация не собирается с КПЭ нижних уровней, влияние определено путем математического моделирования
          </Typography>
        </div>

        <div className={styles['card-wrapper']}>
          <div className={styles['line-wrapper']}>
            <div className={clsx(styles.line, styles['line-primary'])} />
          </div>
          <Typography variant='Body2-Medium' className={styles['text-card']}>
            Формула отсутствует, информация не собирается с КПЭ нижних уровней, влияние определено экспертно (влияет / не влияет)
          </Typography>
        </div>

        <div className={styles['card-wrapper']}>
          <div className={styles['line-wrapper']}>
            <div className={clsx(styles.line, styles['line-error'])} />
          </div>
          <Typography variant='Body2-Medium' className={styles['text-card']}>
            Формула отсутствует, информация не собирается с КПЭ нижних уровней, влияние определено экспертно (влияет / не влияет)
          </Typography>
        </div>

      </div>
      <div>
        <Button>Настройки</Button>
      </div>
    </div>;
  const speciality = () => <div className={styles['traffic-wrapper']}>
      <div>
        <Typography variant='Body2-Bold'>
          Специалист по коммерции
        </Typography>
      </div>
      <div>
        <div className={styles['traffic-item']}>
          <IconDoneCheckOutlined24 color='success' />
          <Typography variant='Body2-Medium'>
            Капранчиков С.Н.  —  20.02.2021
          </Typography>
        </div>
        <div className={styles['traffic-item']}>
          <IconQuestionMarkOutlined24 color='primary' />
          <Typography variant='Body2-Medium'>
            Райкова Н.С.  —  25.02.2021
          </Typography>
        </div>
      </div>
      <div>
        <Typography variant='Body2-Bold'>
          Генеральный директор
        </Typography>
      </div>
      <div>
        <div className={styles['traffic-item']}>
          <IconCloseOutlined24 color='error' />
          <Typography variant='Body2-Medium'>
            Тевс М.В.  —  25.02.2021
          </Typography>
        </div>
      </div>
    </div>;
  return <div className={clsx(styles.wrapper, styles['wrapper-height'])}>
      <Tooltip behavior="click" render={renderCustom()} {...argsTypes}>
        <Button variant="secondary">Нажми на меня для появления тултипа!</Button>
      </Tooltip>
      <Tooltip behavior="click" render={trafficLights()} {...argsTypes} placement='right' clickable>
        <Button variant="secondary">Нажми на меня для появления тултипа!</Button>
      </Tooltip>
      <Tooltip behavior="click" render={speciality()} {...argsTypes} placement='top-end'>
        <Button variant="secondary">Нажми на меня для появления тултипа!</Button>
      </Tooltip>
    </div>;
}`,...(x=(M=m.parameters)==null?void 0:M.docs)==null?void 0:x.source}}};const m4=["TooltipDefault","TooltipWrappedDisabled","TooltipPlacements","TooltipBehaviors","TooltipWithCustom"];export{d as TooltipBehaviors,l as TooltipDefault,p as TooltipPlacements,m as TooltipWithCustom,c as TooltipWrappedDisabled,m4 as __namedExportsOrder,d4 as default};
