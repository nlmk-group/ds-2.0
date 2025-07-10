import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as G}from"./index-BcJSXhQi.js";import{aB as i,aw as s,ab as a,B as x,ag as u}from"./TreeList-ClJk-dpm.js";import"./generateUUID-CJxgi7Ha.js";import"./index-BG4omi31.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import{T as o}from"./index-DmffzHLE.js";import"./index-DcXliXrs.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-t2lirjGB.js";import"./index-C5rKoyII.js";import{G as f,H,J as q}from"./32-BpMTv1cT.js";import{c as l}from"./clsx-B-dksMZM.js";import{g as F}from"./styles.module-m0Zsy3Hi.js";import{a as K}from"./argsTypes-CtfgTcTu.js";import"./index-ChsGqxH_.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";const U="_wrapper_yvthy_1",V="_placements_yvthy_12",Y="_behaviors_yvthy_20",Z="_custom_yvthy_34",ee="_line_yvthy_113",te="_popup_yvthy_143",t={wrapper:U,"wrapper-height":"_wrapper-height_yvthy_8",placements:V,behaviors:Y,"manual-wrapper":"_manual-wrapper_yvthy_27",custom:Z,"custom-item":"_custom-item_yvthy_38","tooltip-top":"_tooltip-top_yvthy_48","tooltip-top-right":"_tooltip-top-right_yvthy_51","tooltip-top-left":"_tooltip-top-left_yvthy_54","tooltip-bottom":"_tooltip-bottom_yvthy_57","tooltip-bottom-left":"_tooltip-bottom-left_yvthy_60","tooltip-bottom-right":"_tooltip-bottom-right_yvthy_63","tooltip-left":"_tooltip-left_yvthy_66","tooltip-right":"_tooltip-right_yvthy_69","tooltip-left-start":"_tooltip-left-start_yvthy_72","tooltip-right-start":"_tooltip-right-start_yvthy_75","tooltip-left-end":"_tooltip-left-end_yvthy_78","tooltip-right-end":"_tooltip-right-end_yvthy_81","traffic-wrapper":"_traffic-wrapper_yvthy_85","traffic-item":"_traffic-item_yvthy_91","card-wrapper":"_card-wrapper_yvthy_103","text-card":"_text-card_yvthy_108","line-wrapper":"_line-wrapper_yvthy_113",line:ee,"line-success":"_line-success_yvthy_127","line-warning":"_line-warning_yvthy_131","line-primary":"_line-primary_yvthy_135","line-error":"_line-error_yvthy_139",popup:te},re=r=>e.jsx("div",{className:F.wrapper,children:e.jsx(r,{})}),be={title:"Components/Tooltip/Stories",component:i,decorators:[re],argTypes:K},p=r=>e.jsx("div",{className:t.wrapper,children:e.jsx(i,{title:"Тултип по умолчанию",...r,children:e.jsx(s,{preventRedirect:!0,href:"",children:"Наведи на меня курсор"})})});p.storyName="Тултип по умолчанию";const n=r=>e.jsx("div",{className:t.wrapper,children:e.jsx(i,{title:"Тултип c кастомным стилем",...r,popupClassName:t.popup,children:e.jsx(s,{preventRedirect:!0,href:"",children:"Наведи на меня курсор"})})});n.storyName="Тултип c кастомным стилем";const c=r=>e.jsx("div",{className:t.wrapper,children:e.jsx(i,{description:"Сюда вы можете добавить текст/подсказу для компонента",...r,children:e.jsx("span",{children:e.jsx(s,{preventRedirect:!0,href:"",children:"Наведи на меня курсор"})})})});c.storyName="Тултип обернутый вокруг disabled элемента";const d=r=>e.jsx("div",{className:t.wrapper,children:e.jsxs("div",{className:t.placements,children:[e.jsx("div",{className:t["tooltip-top"],children:e.jsx(i,{placement:a.top,description:"Tooltip on top",...r,children:e.jsx(s,{preventRedirect:!0,href:"",children:"Наведи на меня курсор, тултип будет сверху"})})}),e.jsx("div",{className:t["tooltip-top-left"],children:e.jsx(i,{placement:a["top-start"],description:"Tooltip on top start",...r,children:e.jsx(s,{preventRedirect:!0,href:"",children:"Наведи на меня курсор, тултип будет сверх слева"})})}),e.jsx("div",{className:t["tooltip-top-right"],children:e.jsx(i,{placement:a["top-end"],description:"Tooltip on top end",...r,children:e.jsx(s,{preventRedirect:!0,href:"",children:"Наведи на меня курсор, тултип будет сверху"})})}),e.jsx("div",{className:t["tooltip-left-start"],children:e.jsx(i,{placement:a["left-start"],description:"Tooltip on left start",...r,children:e.jsx(s,{preventRedirect:!0,href:"",children:"Наведи, тултип будет слева!"})})}),e.jsx("div",{className:t["tooltip-right-start"],children:e.jsx(i,{placement:a["right-start"],description:"Tooltip on right start",...r,children:e.jsx(s,{preventRedirect:!0,href:"",children:"Наведи, тултип будет справа!"})})}),e.jsx("div",{className:t["tooltip-left"],children:e.jsx(i,{placement:a.left,description:"Tooltip on left",...r,children:e.jsx(s,{preventRedirect:!0,href:"",children:"Наведи, тултип будет слева!"})})}),e.jsx("div",{className:t["tooltip-right"],children:e.jsx(i,{placement:a.right,description:"Tooltip on right",...r,children:e.jsx(s,{preventRedirect:!0,href:"",children:"Наведи, тултип будет справа!"})})}),e.jsx("div",{className:t["tooltip-left-end"],children:e.jsx(i,{placement:a["left-end"],description:"Tooltip on left end",...r,children:e.jsx(s,{preventRedirect:!0,href:"",children:"Наведи, тултип будет слева!"})})}),e.jsx("div",{className:t["tooltip-right-end"],children:e.jsx(i,{placement:a["right-end"],description:"Tooltip on right end",...r,children:e.jsx(s,{preventRedirect:!0,href:"",children:"Наведи, тултип будет справа!"})})}),e.jsx("div",{className:t["tooltip-bottom"],children:e.jsx(i,{placement:a.bottom,description:"Tooltip on bottom",...r,children:e.jsx(s,{preventRedirect:!0,href:"",children:"Наведи, тултип будет снизу!"})})}),e.jsx("div",{className:t["tooltip-bottom-left"],children:e.jsx(i,{placement:a["bottom-start"],description:"Tooltip on bottom start",...r,children:e.jsx(s,{preventRedirect:!0,href:"",children:"Наведи, тултип будет снизу слева!"})})}),e.jsx("div",{className:t["tooltip-bottom-right"],children:e.jsx(i,{placement:a["bottom-end"],description:"Tooltip on bottom end",...r,children:e.jsx(s,{preventRedirect:!0,href:"",children:"Наведи, тултип будет снизу справа!"})})})]})});d.storyName="Варианты расположения тултипа";const m=r=>e.jsx("div",{className:t.wrapper,children:e.jsxs("div",{className:t.behaviors,children:[e.jsx(i,{placement:"top",behavior:"hover",description:"Tooltip on hover",...r,children:e.jsx(s,{preventRedirect:!0,href:"",children:"Тултип появится при наведении!"})}),e.jsx(i,{placement:"top",behavior:"click",description:"Tooltip on click",...r,children:e.jsx(s,{preventRedirect:!0,href:"",children:"Тултип появится при клике!"})}),e.jsx(i,{placement:"top",behavior:"focus",description:"Tooltip on focus",...r,children:e.jsx(s,{preventRedirect:!0,href:"",children:"Тултип появится при фокусе!"})})]})});m.storyName="Варианты поведения тултипа";const h=r=>{const y=()=>{const $=["Первый пункт","Второй пункт","Третий пункт"];return e.jsxs("div",{className:t["traffic-wrapper"],children:[e.jsx(o,{variant:"Body2-Bold",children:"Список"}),e.jsx(o,{variant:"Body2-Medium",children:"Просто обычный пример списка"}),e.jsx("div",{className:t.custom,children:$.map((T,Q)=>e.jsxs("div",{className:t["custom-item"],children:[e.jsx(f,{color:"success"}),e.jsx(o,{variant:"Caption-Medium",children:T})]},`${T}-${Q}`))})]})},A=()=>e.jsxs("div",{className:t["traffic-wrapper"],children:[e.jsx("div",{children:e.jsx(o,{variant:"Body2-Bold",children:"Светофор"})}),e.jsxs("div",{children:[e.jsxs("div",{className:t["traffic-item"],children:[e.jsx(u,{color:"success",size:"s"}),e.jsx(o,{variant:"Body2-Medium",children:"Зеленая зона"})]}),e.jsxs("div",{className:t["traffic-item"],children:[e.jsx(u,{color:"warning",size:"s"}),e.jsx(o,{variant:"Body2-Medium",children:"Желтая зона"})]}),e.jsxs("div",{className:t["traffic-item"],children:[e.jsx(u,{color:"error",size:"s"}),e.jsx(o,{variant:"Body2-Medium",children:"Красная зона"})]})]}),e.jsx("div",{children:e.jsx(o,{variant:"Body2-Bold",children:"Карточки"})}),e.jsxs("div",{className:t["traffic-wrapper"],children:[e.jsxs("div",{className:t["card-wrapper"],children:[e.jsx("div",{className:t["line-wrapper"],children:e.jsx("div",{className:l(t.line,t["line-success"])})}),e.jsx(o,{variant:"Body2-Medium",className:t["text-card"],children:"Считаются по формуле, информация собирается с КПЭ нижних уровней"})]}),e.jsxs("div",{className:t["card-wrapper"],children:[e.jsx("div",{className:t["line-wrapper"],children:e.jsx("div",{className:l(t.line,t["line-warning"])})}),e.jsx(o,{variant:"Body2-Medium",className:t["text-card"],children:"Формула отсутствует, информация не собирается с КПЭ нижних уровней, влияние определено путем математического моделирования"})]}),e.jsxs("div",{className:t["card-wrapper"],children:[e.jsx("div",{className:t["line-wrapper"],children:e.jsx("div",{className:l(t.line,t["line-primary"])})}),e.jsx(o,{variant:"Body2-Medium",className:t["text-card"],children:"Формула отсутствует, информация не собирается с КПЭ нижних уровней, влияние определено экспертно (влияет / не влияет)"})]}),e.jsxs("div",{className:t["card-wrapper"],children:[e.jsx("div",{className:t["line-wrapper"],children:e.jsx("div",{className:l(t.line,t["line-error"])})}),e.jsx(o,{variant:"Body2-Medium",className:t["text-card"],children:"Формула отсутствует, информация не собирается с КПЭ нижних уровней, влияние определено экспертно (влияет / не влияет)"})]})]}),e.jsx("div",{children:e.jsx(s,{preventRedirect:!0,href:"",children:"Настройки"})})]}),X=()=>e.jsxs("div",{className:t["traffic-wrapper"],children:[e.jsx("div",{children:e.jsx(o,{variant:"Body2-Bold",children:"Специалист по коммерции"})}),e.jsxs("div",{children:[e.jsxs("div",{className:t["traffic-item"],children:[e.jsx(f,{color:"success"}),e.jsx(o,{variant:"Body2-Medium",children:"Капранчиков С.Н. — 20.02.2021"})]}),e.jsxs("div",{className:t["traffic-item"],children:[e.jsx(H,{color:"primary"}),e.jsx(o,{variant:"Body2-Medium",children:"Райкова Н.С. — 25.02.2021"})]})]}),e.jsx("div",{children:e.jsx(o,{variant:"Body2-Bold",children:"Генеральный директор"})}),e.jsx("div",{children:e.jsxs("div",{className:t["traffic-item"],children:[e.jsx(q,{color:"error"}),e.jsx(o,{variant:"Body2-Medium",children:"Тевс М.В. — 25.02.2021"})]})})]});return e.jsxs("div",{className:l(t.wrapper,t["wrapper-height"]),children:[e.jsx(i,{behavior:"click",render:y(),...r,children:e.jsx(s,{preventRedirect:!0,href:"",children:"Нажми на меня для появления тултипа!"})}),e.jsx(i,{behavior:"click",render:A(),...r,placement:"right",clickable:!0,children:e.jsx(s,{preventRedirect:!0,href:"",children:"Нажми на меня для появления тултипа!"})}),e.jsx(i,{behavior:"click",render:X(),...r,placement:"top-end",children:e.jsx(s,{preventRedirect:!0,href:"",children:"Нажми на меня для появления тултипа!"})})]})};h.storyName="Тултип с кастомным элементом внутри";const v=()=>{const[r,y]=G.useState(!1);return e.jsx("div",{className:t.wrapper,children:e.jsxs("div",{className:t["manual-wrapper"],children:[e.jsx(i,{title:"Заголовок тултипа",isOpen:r,children:e.jsx(x,{type:"button",variant:"secondary",children:"Кнопка с тултипом"})}),e.jsx(x,{type:"button",variant:"secondary",onClick:()=>y(!r),children:"Нажми на меня для переключения тултипа!"})]})})};v.storyName="Тултип с ручным открытием";var j,g,N;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`(argsTypes: Args): JSX.Element => {
  return <div className={styles.wrapper}>
      <Tooltip title="Тултип по умолчанию" {...argsTypes}>
        <Link preventRedirect={true} href="">
          Наведи на меня курсор
        </Link>
      </Tooltip>
    </div>;
}`,...(N=(g=p.parameters)==null?void 0:g.docs)==null?void 0:N.source}}};var _,k,w;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`(argsTypes: Args): JSX.Element => {
  return <div className={styles.wrapper}>
      <Tooltip title="Тултип c кастомным стилем" {...argsTypes} popupClassName={styles.popup}>
        <Link preventRedirect={true} href="">
          Наведи на меня курсор
        </Link>
      </Tooltip>
    </div>;
}`,...(w=(k=n.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var B,b,L;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`(argsTypes: Args): JSX.Element => {
  return <div className={styles.wrapper}>
      <Tooltip description="Сюда вы можете добавить текст/подсказу для компонента" {...argsTypes}>
        <span>
          <Link preventRedirect={true} href="">
            Наведи на меня курсор
          </Link>
        </span>
      </Tooltip>
    </div>;
}`,...(L=(b=c.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var R,M,E;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`(argsTypes: Args): JSX.Element => {
  return <div className={styles.wrapper}>
      <div className={styles.placements}>
        <div className={styles['tooltip-top']}>
          <Tooltip placement={ETooltipPlacementType.top} description="Tooltip on top" {...argsTypes}>
            <Link preventRedirect={true} href="">
              Наведи на меня курсор, тултип будет сверху
            </Link>
          </Tooltip>
        </div>
        <div className={styles['tooltip-top-left']}>
          <Tooltip placement={ETooltipPlacementType['top-start']} description="Tooltip on top start" {...argsTypes}>
            <Link preventRedirect={true} href="">
              Наведи на меня курсор, тултип будет сверх слева
            </Link>
          </Tooltip>
        </div>
        <div className={styles['tooltip-top-right']}>
          <Tooltip placement={ETooltipPlacementType['top-end']} description="Tooltip on top end" {...argsTypes}>
            <Link preventRedirect={true} href="">
              Наведи на меня курсор, тултип будет сверху
            </Link>
          </Tooltip>
        </div>
        <div className={styles['tooltip-left-start']}>
          <Tooltip placement={ETooltipPlacementType['left-start']} description="Tooltip on left start" {...argsTypes}>
            <Link preventRedirect={true} href="">
              Наведи, тултип будет слева!
            </Link>
          </Tooltip>
        </div>
        <div className={styles['tooltip-right-start']}>
          <Tooltip placement={ETooltipPlacementType['right-start']} description="Tooltip on right start" {...argsTypes}>
            <Link preventRedirect={true} href="">
              Наведи, тултип будет справа!
            </Link>
          </Tooltip>
        </div>
        <div className={styles['tooltip-left']}>
          <Tooltip placement={ETooltipPlacementType['left']} description="Tooltip on left" {...argsTypes}>
            <Link preventRedirect={true} href="">
              Наведи, тултип будет слева!
            </Link>
          </Tooltip>
        </div>
        <div className={styles['tooltip-right']}>
          <Tooltip placement={ETooltipPlacementType['right']} description="Tooltip on right" {...argsTypes}>
            <Link preventRedirect={true} href="">
              Наведи, тултип будет справа!
            </Link>
          </Tooltip>
        </div>
        <div className={styles['tooltip-left-end']}>
          <Tooltip placement={ETooltipPlacementType['left-end']} description="Tooltip on left end" {...argsTypes}>
            <Link preventRedirect={true} href="">
              Наведи, тултип будет слева!
            </Link>
          </Tooltip>
        </div>
        <div className={styles['tooltip-right-end']}>
          <Tooltip placement={ETooltipPlacementType['right-end']} description="Tooltip on right end" {...argsTypes}>
            <Link preventRedirect={true} href="">
              Наведи, тултип будет справа!
            </Link>
          </Tooltip>
        </div>
        <div className={styles['tooltip-bottom']}>
          <Tooltip placement={ETooltipPlacementType.bottom} description="Tooltip on bottom" {...argsTypes}>
            <Link preventRedirect={true} href="">
              Наведи, тултип будет снизу!
            </Link>
          </Tooltip>
        </div>
        <div className={styles['tooltip-bottom-left']}>
          <Tooltip placement={ETooltipPlacementType['bottom-start']} description="Tooltip on bottom start" {...argsTypes}>
            <Link preventRedirect={true} href="">
              Наведи, тултип будет снизу слева!
            </Link>
          </Tooltip>
        </div>
        <div className={styles['tooltip-bottom-right']}>
          <Tooltip placement={ETooltipPlacementType['bottom-end']} description="Tooltip on bottom end" {...argsTypes}>
            <Link preventRedirect={true} href="">
              Наведи, тултип будет снизу справа!
            </Link>
          </Tooltip>
        </div>
      </div>
    </div>;
}`,...(E=(M=d.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var O,C,S;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`(argsTypes: Args): JSX.Element => {
  return <div className={styles.wrapper}>
      <div className={styles.behaviors}>
        <Tooltip placement="top" behavior="hover" description="Tooltip on hover" {...argsTypes}>
          <Link preventRedirect={true} href="">
            Тултип появится при наведении!
          </Link>
        </Tooltip>
        <Tooltip placement="top" behavior="click" description="Tooltip on click" {...argsTypes}>
          <Link preventRedirect={true} href="">
            Тултип появится при клике!
          </Link>
        </Tooltip>
        <Tooltip placement="top" behavior="focus" description="Tooltip on focus" {...argsTypes}>
          <Link preventRedirect={true} href="">
            Тултип появится при фокусе!
          </Link>
        </Tooltip>
      </div>
    </div>;
}`,...(S=(C=m.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var P,W,D;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`(argsTypes: Args): JSX.Element => {
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
        <Link preventRedirect={true} href="">
          Настройки
        </Link>
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
        <Link preventRedirect={true} href="">
          Нажми на меня для появления тултипа!
        </Link>
      </Tooltip>
      <Tooltip behavior="click" render={trafficLights()} {...argsTypes} placement="right" clickable>
        <Link preventRedirect={true} href="">
          Нажми на меня для появления тултипа!
        </Link>
      </Tooltip>
      <Tooltip behavior="click" render={speciality()} {...argsTypes} placement="top-end">
        <Link preventRedirect={true} href="">
          Нажми на меня для появления тултипа!
        </Link>
      </Tooltip>
    </div>;
}`,...(D=(W=h.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var I,J,z;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [isOpen, setOpen] = useState(false);
  return <div className={styles.wrapper}>
      <div className={styles['manual-wrapper']}>
        <Tooltip title="Заголовок тултипа" isOpen={isOpen}>
          <Button type="button" variant="secondary">Кнопка с тултипом</Button>
        </Tooltip>
        <Button type="button" variant="secondary" onClick={() => setOpen(!isOpen)}>
          Нажми на меня для переключения тултипа!
        </Button>
      </div>
    </div>;
}`,...(z=(J=v.parameters)==null?void 0:J.docs)==null?void 0:z.source}}};const Le=["TooltipDefault","TooltipWithOpacity","TooltipWrappedDisabled","TooltipPlacements","TooltipBehaviors","TooltipWithCustom","TooltipWithManualOpen"];export{m as TooltipBehaviors,p as TooltipDefault,d as TooltipPlacements,h as TooltipWithCustom,v as TooltipWithManualOpen,n as TooltipWithOpacity,c as TooltipWrappedDisabled,Le as __namedExportsOrder,be as default};
