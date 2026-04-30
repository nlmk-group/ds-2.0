import{j as e,R as d}from"./iframe-BYEcINU_.js";import{E as f}from"./index-CrpGn3Cf.js";import{B as c}from"./index-D6OuuQjE.js";import{H as I}from"./index-C3exR97g.js";import{N as u}from"./index-NFm-qVra.js";import{T as E,E as C}from"./index-CTms4VQ3.js";import{g as N}from"./styles.module-P9JyAdOG.js";import{a as B}from"./argsTypes-DfDV2BSc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./localeMapping-Cf4j9Ek8.js";import"./index-DEnU3uQc.js";import"./24-Bg-YkJof.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-DOSHn3uj.js";import"./colorsMapping-C6bFIk14.js";import"./sizesMapping-D8QavrGc.js";const j=m=>e.jsx(c,{alignItems:"flex-start",justifyContent:"center",st:{minHeight:"300px",marginTop:"40px",borderRadius:"10px",overflow:"visible"},className:N.wrapper,children:e.jsx(m,{})}),V={title:"Components/NotificationItem/Stories",component:u,decorators:[j],argTypes:B},l=m=>e.jsx(c,{flexDirection:"column",gap:4,maxWidth:270,children:e.jsx(u,{...m})});l.storyName="NotificationItem по умолчанию";l.args={label:"Отпуска и отгулы",count:4,badgeColor:f.error,active:!1};const s=()=>e.jsxs(c,{flexDirection:"column",gap:4,maxWidth:270,children:[e.jsx(u,{label:"Обучение и развитие",count:0}),e.jsx(u,{label:"Заявки и обращения",count:0}),e.jsx(u,{label:"Корпоративные новости",count:0})]});s.storyName="NotificationItem без уведомлений";s.parameters={controls:{disable:!0}};const a=()=>{const[m,b]=d.useState(!1),y=d.useRef(null),n=d.useRef(null);d.useEffect(()=>{const t=document.querySelector('[data-testid="HEADER_NOTIFICATION"]'),r=document.querySelector('[data-testid="HEADER_NOTIFICATION_AMOUNT"]');if(!t)return;const g=t.style.cursor,v=r?.style.pointerEvents??"";t.style.cursor="pointer",r&&(r.style.pointerEvents="none");const x=(o,p,i)=>!!i&&o>=i.left&&o<=i.right&&p>=i.top&&p<=i.bottom,R=o=>{const p=t.getBoundingClientRect(),i=r?.getBoundingClientRect(),T=y.current?.getBoundingClientRect();x(o.clientX,o.clientY,p)||x(o.clientX,o.clientY,i)||x(o.clientX,o.clientY,T)?(n.current&&(clearTimeout(n.current),n.current=null),b(!0)):n.current||(n.current=setTimeout(()=>{b(!1),n.current=null},200))};return document.addEventListener("mousemove",R),()=>{document.removeEventListener("mousemove",R),t.style.cursor=g,r&&(r.style.pointerEvents=v),n.current&&clearTimeout(n.current)}},[]);const h=[{label:"Требуется сделать",count:2,badgeColor:f.error},{label:"Важно ознакомиться",count:7,badgeColor:f.error},{label:"Для информации",count:115,badgeColor:f.brand}];return e.jsxs(c,{st:{position:"relative",width:"100%"},children:[e.jsx(I,{title:"Портал сотрудника",showNotification:!0,notificationAmount:115}),m&&e.jsx("div",{ref:y,style:{position:"absolute",top:"100%",right:0,zIndex:1100},children:e.jsxs(c,{flexDirection:"column",gap:4,st:{padding:"8px 0",minWidth:270,background:"var(--steel-10)",borderRadius:8,boxShadow:"0 2px 8px rgba(0, 0, 0, 0.25)"},children:[e.jsx(c,{st:{padding:"6px 12px"},children:e.jsx(E,{variant:C.Heading4,children:"Уведомления"})}),h.map((t,r)=>e.jsx(u,{label:t.label,count:t.count,badgeColor:t.badgeColor,onClick:g=>console.log("Click:",g,r)},t.label))]})})]})};a.storyName="Сборка панели с Header";a.parameters={controls:{disable:!0}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(argTypes: INotificationItemProps) => {
  return <Box flexDirection="column" gap={4} maxWidth={270}>
      <NotificationItem {...argTypes} />
    </Box>;
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <Box flexDirection="column" gap={4} maxWidth={270}>
      <NotificationItem label="Обучение и развитие" count={0} />
      <NotificationItem label="Заявки и обращения" count={0} />
      <NotificationItem label="Корпоративные новости" count={0} />
    </Box>;
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const [showPanel, setShowPanel] = React.useState(false);
  const panelRef = React.useRef<HTMLDivElement | null>(null);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  React.useEffect(() => {
    const bell = document.querySelector('[data-testid="HEADER_NOTIFICATION"]') as HTMLElement | null;
    const amount = document.querySelector('[data-testid="HEADER_NOTIFICATION_AMOUNT"]') as HTMLElement | null;
    if (!bell) return;
    const prevBellCursor = bell.style.cursor;
    const prevAmountPointer = amount?.style.pointerEvents ?? '';
    bell.style.cursor = 'pointer';
    if (amount) {
      amount.style.pointerEvents = 'none';
    }
    const pointInRect = (x: number, y: number, rect?: DOMRect) => !!rect && x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
    const handleMove = (e: MouseEvent) => {
      const bellRect = bell.getBoundingClientRect();
      const amountRect = amount?.getBoundingClientRect();
      const panelRect = panelRef.current?.getBoundingClientRect();
      const inside = pointInRect(e.clientX, e.clientY, bellRect) || pointInRect(e.clientX, e.clientY, amountRect) || pointInRect(e.clientX, e.clientY, panelRect);
      if (inside) {
        if (closeTimer.current) {
          clearTimeout(closeTimer.current);
          closeTimer.current = null;
        }
        setShowPanel(true);
      } else if (!closeTimer.current) {
        closeTimer.current = setTimeout(() => {
          setShowPanel(false);
          closeTimer.current = null;
        }, 200);
      }
    };
    document.addEventListener('mousemove', handleMove);
    return () => {
      document.removeEventListener('mousemove', handleMove);
      bell.style.cursor = prevBellCursor;
      if (amount) amount.style.pointerEvents = prevAmountPointer;
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);
  const items = [{
    label: 'Требуется сделать',
    count: 2,
    badgeColor: EBadgeColors.error
  }, {
    label: 'Важно ознакомиться',
    count: 7,
    badgeColor: EBadgeColors.error
  }, {
    label: 'Для информации',
    count: 115,
    badgeColor: EBadgeColors.brand
  }];
  return <Box st={{
    position: 'relative',
    width: '100%'
  }}>
      <Header title="Портал сотрудника" showNotification notificationAmount={115} />
      {showPanel && <div ref={panelRef} style={{
      position: 'absolute',
      top: '100%',
      right: 0,
      zIndex: 1100
    }}>
          <Box flexDirection="column" gap={4} st={{
        padding: '8px 0',
        minWidth: 270,
        background: 'var(--steel-10)',
        borderRadius: 8,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)'
      }}>
            <Box st={{
          padding: '6px 12px'
        }}>
              <Typography variant={ETypographyVariants.Heading4}>Уведомления</Typography>
            </Box>
            {items.map((item, idx) => <NotificationItem key={item.label} label={item.label} count={item.count} badgeColor={item.badgeColor} onClick={(value: string) => console.log('Click:', value, idx)} />)}
          </Box>
        </div>}
    </Box>;
}`,...a.parameters?.docs?.source}}};const G=["DefaultNotificationItem","NotificationItemEmpty","NotificationItemWithHeader"];export{l as DefaultNotificationItem,s as NotificationItemEmpty,a as NotificationItemWithHeader,G as __namedExportsOrder,V as default};
