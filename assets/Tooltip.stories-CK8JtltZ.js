import{j as t}from"./jsx-runtime-DFnSfiB4.js";import{ad as o,B as s,X as a,Z as y}from"./index-DlGLur7j.js";import"./generateUUID-CY9Prqwy.js";import"./index-BenQYTIH.js";import"./index-BgyuaCKK.js";import"./index-B8KuQLf-.js";import"./index-B_c816qF.js";import{T as r}from"./index-DJXOh8UI.js";import"./index-Dvm_EBHX.js";import"./index-wNTT8eSr.js";import"./index-S3KjbRnp.js";import"./index-CWVO2cHI.js";import{u as T,v as W,w as $}from"./32-CCQbJusC.js";import"./index-DQ2WTIsS.js";import{c as l}from"./clsx-B-dksMZM.js";import{a as L}from"./argsTypes-9I-snFsy.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./index-0sbKER3h.js";const Q="_wrapper_1p01i_1",R="_placements_1p01i_12",Z="_behaviors_1p01i_20",q="_custom_1p01i_27",F="_line_1p01i_107",G="_popup_1p01i_137",e={wrapper:Q,"wrapper-height":"_wrapper-height_1p01i_8",placements:R,behaviors:Z,custom:q,"custom-item":"_custom-item_1p01i_31","tooltip-top":"_tooltip-top_1p01i_41","tooltip-top-right":"_tooltip-top-right_1p01i_44","tooltip-top-left":"_tooltip-top-left_1p01i_47","tooltip-bottom":"_tooltip-bottom_1p01i_50","tooltip-bottom-left":"_tooltip-bottom-left_1p01i_53","tooltip-bottom-right":"_tooltip-bottom-right_1p01i_56","tooltip-left":"_tooltip-left_1p01i_59","tooltip-right":"_tooltip-right_1p01i_62","tooltip-left-start":"_tooltip-left-start_1p01i_65","tooltip-right-start":"_tooltip-right-start_1p01i_68","tooltip-left-end":"_tooltip-left-end_1p01i_71","tooltip-right-end":"_tooltip-right-end_1p01i_74","traffic-wrapper":"_traffic-wrapper_1p01i_78","traffic-item":"_traffic-item_1p01i_84","card-helper":"_card-helper_1p01i_91","card-wrapper":"_card-wrapper_1p01i_96","text-card":"_text-card_1p01i_101","line-wrapper":"_line-wrapper_1p01i_107",line:F,"line-success":"_line-success_1p01i_121","line-warning":"_line-warning_1p01i_125","line-primary":"_line-primary_1p01i_129","line-error":"_line-error_1p01i_133",popup:G},Tt={title:"Components/Tooltip/Stories",component:o,argTypes:L},n=i=>t.jsx("div",{className:e.wrapper,children:t.jsx(o,{title:"Тултип по умолчанию",...i,children:t.jsx(s,{variant:"secondary",children:"Наведи на меня курсор!"})})});n.storyName="Тултип по умолчанию";const p=i=>t.jsx("div",{className:e.wrapper,children:t.jsx(o,{title:"Тултип c кастомным стилем",...i,popupClassName:e.popup,children:t.jsx(s,{variant:"secondary",children:"Наведи на меня курсор!"})})});p.storyName="Тултип c кастомным стилем";const c=i=>t.jsx("div",{className:e.wrapper,children:t.jsx(o,{description:"Сюда вы можете добавить текст/подсказу для компонента",...i,children:t.jsx("span",{children:t.jsx(s,{variant:"secondary",disabled:!0,children:"Наведи на меня курсор!"})})})});c.storyName="Тултип обернутый вокруг disabled элемента";const d=i=>t.jsx("div",{className:e.wrapper,children:t.jsxs("div",{className:e.placements,children:[t.jsx("div",{className:e["tooltip-top"],children:t.jsx(o,{placement:a.top,description:"Tooltip on top",...i,children:t.jsx(s,{variant:"secondary",children:"Наведи, тултип будет сверху!"})})}),t.jsx("div",{className:e["tooltip-top-left"],children:t.jsx(o,{placement:a["top-start"],description:"Tooltip on top start",...i,children:t.jsx(s,{variant:"secondary",children:"Наведи, тултип будет сверху слева!"})})}),t.jsx("div",{className:e["tooltip-top-right"],children:t.jsx(o,{placement:a["top-end"],description:"Tooltip on top end",...i,children:t.jsx(s,{variant:"secondary",children:"Наведи, тултип будет сверху справа!"})})}),t.jsx("div",{className:e["tooltip-left-start"],children:t.jsx(o,{placement:a["left-start"],description:"Tooltip on left start",...i,children:t.jsx(s,{variant:"secondary",children:"Наведи, тултип будет слева!"})})}),t.jsx("div",{className:e["tooltip-right-start"],children:t.jsx(o,{placement:a["right-start"],description:"Tooltip on right start",...i,children:t.jsx(s,{variant:"secondary",children:"Наведи, тултип будет справа!"})})}),t.jsx("div",{className:e["tooltip-left"],children:t.jsx(o,{placement:a.left,description:"Tooltip on left",...i,children:t.jsx(s,{variant:"secondary",children:"Наведи, тултип будет слева!"})})}),t.jsx("div",{className:e["tooltip-right"],children:t.jsx(o,{placement:a.right,description:"Tooltip on right",...i,children:t.jsx(s,{variant:"secondary",children:"Наведи, тултип будет справа!"})})}),t.jsx("div",{className:e["tooltip-left-end"],children:t.jsx(o,{placement:a["left-end"],description:"Tooltip on left end",...i,children:t.jsx(s,{variant:"secondary",children:"Наведи, тултип будет слева!"})})}),t.jsx("div",{className:e["tooltip-right-end"],children:t.jsx(o,{placement:a["right-end"],description:"Tooltip on right end",...i,children:t.jsx(s,{variant:"secondary",children:"Наведи, тултип будет справа!"})})}),t.jsx("div",{className:e["tooltip-bottom"],children:t.jsx(o,{placement:a.bottom,description:"Tooltip on bottom",...i,children:t.jsx(s,{variant:"secondary",children:"Наведи, тултип будет снизу!"})})}),t.jsx("div",{className:e["tooltip-bottom-left"],children:t.jsx(o,{placement:a["bottom-start"],description:"Tooltip on bottom start",...i,children:t.jsx(s,{variant:"secondary",children:"Наведи, тултип будет снизу слева!"})})}),t.jsx("div",{className:e["tooltip-bottom-right"],children:t.jsx(o,{placement:a["bottom-end"],description:"Tooltip on bottom end",...i,children:t.jsx(s,{variant:"secondary",children:"Наведи, тултип будет снизу справа!"})})})]})});d.storyName="Варианты расположения тултипа";const m=i=>t.jsx("div",{className:e.wrapper,children:t.jsxs("div",{className:e.behaviors,children:[t.jsx(o,{placement:"top",behavior:"hover",description:"Tooltip on hover",...i,children:t.jsx(s,{variant:"secondary",children:"Тултип появится при наведении!"})}),t.jsx(o,{placement:"top",behavior:"click",description:"Tooltip on click",...i,children:t.jsx(s,{variant:"secondary",children:"Тултип появится при клике!"})}),t.jsx(o,{placement:"top",behavior:"focus",description:"Tooltip on focus",...i,children:t.jsx(s,{variant:"secondary",children:"Тултип появится при фокусе!"})})]})});m.storyName="Варианты поведения тултипа";const v=i=>{const I=()=>{const A=["Первый пункт","Второй пункт","Третий пункт"];return t.jsxs("div",{className:e["traffic-wrapper"],children:[t.jsx(r,{variant:"Body2-Bold",children:"Список"}),t.jsx(r,{variant:"Body2-Medium",children:"Просто обычный пример списка"}),t.jsx("div",{className:e.custom,children:A.map((h,J)=>t.jsxs("div",{className:e["custom-item"],children:[t.jsx(T,{color:"success"}),t.jsx(r,{variant:"Caption-Medium",children:h})]},`${h}-${J}`))})]})},X=()=>t.jsxs("div",{className:e["traffic-wrapper"],children:[t.jsx("div",{children:t.jsx(r,{variant:"Body2-Bold",children:"Светофор"})}),t.jsxs("div",{children:[t.jsxs("div",{className:e["traffic-item"],children:[t.jsx(y,{color:"success",size:"s"}),t.jsx(r,{variant:"Body2-Medium",children:"Зеленая зона"})]}),t.jsxs("div",{className:e["traffic-item"],children:[t.jsx(y,{color:"warning",size:"s"}),t.jsx(r,{variant:"Body2-Medium",children:"Желтая зона"})]}),t.jsxs("div",{className:e["traffic-item"],children:[t.jsx(y,{color:"error",size:"s"}),t.jsx(r,{variant:"Body2-Medium",children:"Красная зона"})]})]}),t.jsx("div",{children:t.jsx(r,{variant:"Body2-Bold",children:"Карточки"})}),t.jsxs("div",{className:e["traffic-wrapper"],children:[t.jsxs("div",{className:e["card-wrapper"],children:[t.jsx("div",{className:e["line-wrapper"],children:t.jsx("div",{className:l(e.line,e["line-success"])})}),t.jsx(r,{variant:"Body2-Medium",className:e["text-card"],children:"Считаются по формуле, информация собирается с КПЭ нижних уровней"})]}),t.jsxs("div",{className:e["card-wrapper"],children:[t.jsx("div",{className:e["line-wrapper"],children:t.jsx("div",{className:l(e.line,e["line-warning"])})}),t.jsx(r,{variant:"Body2-Medium",className:e["text-card"],children:"Формула отсутствует, информация не собирается с КПЭ нижних уровней, влияние определено путем математического моделирования"})]}),t.jsxs("div",{className:e["card-wrapper"],children:[t.jsx("div",{className:e["line-wrapper"],children:t.jsx("div",{className:l(e.line,e["line-primary"])})}),t.jsx(r,{variant:"Body2-Medium",className:e["text-card"],children:"Формула отсутствует, информация не собирается с КПЭ нижних уровней, влияние определено экспертно (влияет / не влияет)"})]}),t.jsxs("div",{className:e["card-wrapper"],children:[t.jsx("div",{className:e["line-wrapper"],children:t.jsx("div",{className:l(e.line,e["line-error"])})}),t.jsx(r,{variant:"Body2-Medium",className:e["text-card"],children:"Формула отсутствует, информация не собирается с КПЭ нижних уровней, влияние определено экспертно (влияет / не влияет)"})]})]}),t.jsx("div",{children:t.jsx(s,{children:"Настройки"})})]}),z=()=>t.jsxs("div",{className:e["traffic-wrapper"],children:[t.jsx("div",{children:t.jsx(r,{variant:"Body2-Bold",children:"Специалист по коммерции"})}),t.jsxs("div",{children:[t.jsxs("div",{className:e["traffic-item"],children:[t.jsx(T,{color:"success"}),t.jsx(r,{variant:"Body2-Medium",children:"Капранчиков С.Н. — 20.02.2021"})]}),t.jsxs("div",{className:e["traffic-item"],children:[t.jsx(W,{color:"primary"}),t.jsx(r,{variant:"Body2-Medium",children:"Райкова Н.С. — 25.02.2021"})]})]}),t.jsx("div",{children:t.jsx(r,{variant:"Body2-Bold",children:"Генеральный директор"})}),t.jsx("div",{children:t.jsxs("div",{className:e["traffic-item"],children:[t.jsx($,{color:"error"}),t.jsx(r,{variant:"Body2-Medium",children:"Тевс М.В. — 25.02.2021"})]})})]});return t.jsxs("div",{className:l(e.wrapper,e["wrapper-height"]),children:[t.jsx(o,{behavior:"click",render:I(),...i,children:t.jsx(s,{variant:"secondary",children:"Нажми на меня для появления тултипа!"})}),t.jsx(o,{behavior:"click",render:X(),...i,placement:"right",clickable:!0,children:t.jsx(s,{variant:"secondary",children:"Нажми на меня для появления тултипа!"})}),t.jsx(o,{behavior:"click",render:z(),...i,placement:"top-end",children:t.jsx(s,{variant:"secondary",children:"Нажми на меня для появления тултипа!"})})]})};v.storyName="Тултип с кастомным элементом внутри";var u,x,j;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`(argsTypes: Args): JSX.Element => {
  return <div className={styles.wrapper}>
      <Tooltip title="Тултип по умолчанию" {...argsTypes}>
        <Button variant="secondary">Наведи на меня курсор!</Button>
      </Tooltip>
    </div>;
}`,...(j=(x=n.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var g,N,f;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`(argsTypes: Args): JSX.Element => {
  return <div className={styles.wrapper}>
      <Tooltip title="Тултип c кастомным стилем" {...argsTypes} popupClassName={styles.popup}>
        <Button variant="secondary">Наведи на меня курсор!</Button>
      </Tooltip>
    </div>;
}`,...(f=(N=p.parameters)==null?void 0:N.docs)==null?void 0:f.source}}};var B,_,w;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`(argsTypes: Args): JSX.Element => {
  return <div className={styles.wrapper}>
      <Tooltip description="Сюда вы можете добавить текст/подсказу для компонента" {...argsTypes}>
        <span>
          <Button variant="secondary" disabled>
            Наведи на меня курсор!
          </Button>
        </span>
      </Tooltip>
    </div>;
}`,...(w=(_=c.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var b,M,E;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`(argsTypes: Args): JSX.Element => {
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
          <Tooltip placement={ETooltipPlacementType['right']} description="Tooltip on right" {...argsTypes}>
            <Button variant="secondary">Наведи, тултип будет справа!</Button>
          </Tooltip>
        </div>
        <div className={styles['tooltip-left-end']}>
          <Tooltip placement={ETooltipPlacementType['left-end']} description="Tooltip on left end" {...argsTypes}>
            <Button variant="secondary">Наведи, тултип будет слева!</Button>
          </Tooltip>
        </div>
        <div className={styles['tooltip-right-end']}>
          <Tooltip placement={ETooltipPlacementType['right-end']} description="Tooltip on right end" {...argsTypes}>
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
}`,...(E=(M=d.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var k,C,P;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`(argsTypes: Args): JSX.Element => {
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
}`,...(P=(C=m.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var S,O,D;v.parameters={...v.parameters,docs:{...(S=v.parameters)==null?void 0:S.docs,source:{originalSource:`(argsTypes: Args): JSX.Element => {
  const renderCustom = () => {
    const customMap = ['Первый пункт', 'Второй пункт', 'Третий пункт'];
    return <div className={styles['traffic-wrapper']}>
        <Typography variant="Body2-Bold">Список</Typography>
        <Typography variant="Body2-Medium">Просто обычный пример списка</Typography>
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
        <Typography variant="Body2-Bold">Светофор</Typography>
      </div>
      <div>
        <div className={styles['traffic-item']}>
          <Badge color="success" size="s" />
          <Typography variant="Body2-Medium">Зеленая зона</Typography>
        </div>
        <div className={styles['traffic-item']}>
          <Badge color="warning" size="s" />
          <Typography variant="Body2-Medium">Желтая зона</Typography>
        </div>
        <div className={styles['traffic-item']}>
          <Badge color="error" size="s" />
          <Typography variant="Body2-Medium">Красная зона</Typography>
        </div>
      </div>
      <div>
        <Typography variant="Body2-Bold">Карточки</Typography>
      </div>
      <div className={styles['traffic-wrapper']}>
        <div className={styles['card-wrapper']}>
          <div className={styles['line-wrapper']}>
            <div className={clsx(styles.line, styles['line-success'])} />
          </div>
          <Typography variant="Body2-Medium" className={styles['text-card']}>
            Считаются по формуле, информация собирается с КПЭ нижних уровней
          </Typography>
        </div>

        <div className={styles['card-wrapper']}>
          <div className={styles['line-wrapper']}>
            <div className={clsx(styles.line, styles['line-warning'])} />
          </div>
          <Typography variant="Body2-Medium" className={styles['text-card']}>
            Формула отсутствует, информация не собирается с КПЭ нижних уровней, влияние определено путем математического
            моделирования
          </Typography>
        </div>

        <div className={styles['card-wrapper']}>
          <div className={styles['line-wrapper']}>
            <div className={clsx(styles.line, styles['line-primary'])} />
          </div>
          <Typography variant="Body2-Medium" className={styles['text-card']}>
            Формула отсутствует, информация не собирается с КПЭ нижних уровней, влияние определено экспертно (влияет /
            не влияет)
          </Typography>
        </div>

        <div className={styles['card-wrapper']}>
          <div className={styles['line-wrapper']}>
            <div className={clsx(styles.line, styles['line-error'])} />
          </div>
          <Typography variant="Body2-Medium" className={styles['text-card']}>
            Формула отсутствует, информация не собирается с КПЭ нижних уровней, влияние определено экспертно (влияет /
            не влияет)
          </Typography>
        </div>
      </div>
      <div>
        <Button>Настройки</Button>
      </div>
    </div>;
  const speciality = () => <div className={styles['traffic-wrapper']}>
      <div>
        <Typography variant="Body2-Bold">Специалист по коммерции</Typography>
      </div>
      <div>
        <div className={styles['traffic-item']}>
          <IconDoneCheckOutlined24 color="success" />
          <Typography variant="Body2-Medium">Капранчиков С.Н. — 20.02.2021</Typography>
        </div>
        <div className={styles['traffic-item']}>
          <IconQuestionMarkOutlined24 color="primary" />
          <Typography variant="Body2-Medium">Райкова Н.С. — 25.02.2021</Typography>
        </div>
      </div>
      <div>
        <Typography variant="Body2-Bold">Генеральный директор</Typography>
      </div>
      <div>
        <div className={styles['traffic-item']}>
          <IconCloseOutlined24 color="error" />
          <Typography variant="Body2-Medium">Тевс М.В. — 25.02.2021</Typography>
        </div>
      </div>
    </div>;
  return <div className={clsx(styles.wrapper, styles['wrapper-height'])}>
      <Tooltip behavior="click" render={renderCustom()} {...argsTypes}>
        <Button variant="secondary">Нажми на меня для появления тултипа!</Button>
      </Tooltip>
      <Tooltip behavior="click" render={trafficLights()} {...argsTypes} placement="right" clickable>
        <Button variant="secondary">Нажми на меня для появления тултипа!</Button>
      </Tooltip>
      <Tooltip behavior="click" render={speciality()} {...argsTypes} placement="top-end">
        <Button variant="secondary">Нажми на меня для появления тултипа!</Button>
      </Tooltip>
    </div>;
}`,...(D=(O=v.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};const ut=["TooltipDefault","TooltipWithOpacity","TooltipWrappedDisabled","TooltipPlacements","TooltipBehaviors","TooltipWithCustom"];export{m as TooltipBehaviors,n as TooltipDefault,d as TooltipPlacements,v as TooltipWithCustom,p as TooltipWithOpacity,c as TooltipWrappedDisabled,ut as __namedExportsOrder,Tt as default};
