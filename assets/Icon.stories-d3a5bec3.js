import{a as b,j as o}from"./clsx.m-3764cf42.js";import{R as c}from"./index-f1f749bf.js";import{I as d,i as l}from"./index-ed56af28.js";import{s}from"./Icon.module-c849345d.js";const k={color:{description:"Цвет иконки",table:{defaultValue:{summary:"primary"},type:{summary:"string"}},options:["action","disabled","error","primary","secondary","inherit","success","warning"],control:{type:"select"}},size:{description:"Размер иконки",table:{defaultValue:{summary:24},type:{summary:"number"}},options:[16,24,32],control:{type:"select"}},containerSize:{description:"Размер контейнера иконки",table:{defaultValue:{summary:24},type:{summary:"number"}},options:[16,24,32],control:{type:"select"}}},g={title:"Components/Icon/Stories",component:d,argTypes:k},i=a=>b("div",{className:s.wrapper,children:[o(d,{name:"IconTackleCrane24",color:"primary",containerSize:32,...a}),o(d,{name:"IconFeedback32",color:"primary",containerSize:32,...a})]});i.storyName="Компонент Icon по умолчанию";const t=()=>{const a={...l[16],...l[24],...l[32]},I=Object.keys(a).map(n=>{const e=a[n];return{title:n,default:c.createElement(e,{name:e}),action:c.createElement(e,{name:e,color:"action"}),disabled:c.createElement(e,{name:e,color:"disabled"}),error:c.createElement(e,{name:e,color:"error"}),inherit:c.createElement(e,{name:e,color:"inherit"}),primary:c.createElement(e,{name:e,color:"primary"}),secondary:c.createElement(e,{name:e,color:"secondary"}),success:c.createElement(e,{name:e,color:"success"}),warning:c.createElement(e,{name:e,color:"warning"})}});return o("div",{className:s.wrapper,children:o("div",{className:s.table,children:I.map((n,e)=>{const r=n.title==="LogoSvgIcon"||n.title==="LogoutSvgIcon"||n.title==="WhiteStarSvgIcon";return b("div",{className:s.row,children:[o("div",{children:n.title}),o("div",{style:{backgroundColor:r?"black":void 0},children:n.default}),o("div",{style:{backgroundColor:r?"black":void 0},children:n.action}),o("div",{style:{backgroundColor:r?"black":void 0},children:n.disabled}),o("div",{style:{backgroundColor:r?"black":void 0},children:n.error}),o("div",{style:{backgroundColor:r?"black":void 0},children:n.inherit}),o("div",{style:{backgroundColor:r?"black":void 0},children:n.primary}),o("div",{style:{backgroundColor:r?"black":void 0},children:n.secondary}),o("div",{style:{backgroundColor:r?"black":void 0},children:n.warning}),o("div",{style:{backgroundColor:r?"black":void 0},children:n.success})]},e)})})})};t.storyName="Все доступные иконки";var m,p,y;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`(argsTypes: any): JSX.Element => {
  return <div className={styles.wrapper}>
      <Icon name={'IconTackleCrane24'} color="primary" containerSize={32} {...argsTypes} />
      <Icon name="IconFeedback32" color="primary" containerSize={32} {...argsTypes} />
    </div>;
}`,...(y=(p=i.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var u,S,v;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`(): JSX.Element => {
  const allIcon = {
    ...icons[16],
    ...icons[24],
    ...icons[32]
  };
  const iconsWithColors = Object.keys(allIcon).map(iconName => {
    const SpecificStory = allIcon[iconName];
    return {
      title: iconName,
      default: React.createElement<TIconProps>(SpecificStory, {
        name: SpecificStory
      }),
      action: React.createElement<TIconProps>(SpecificStory, {
        name: SpecificStory,
        color: 'action'
      }),
      disabled: React.createElement<TIconProps>(SpecificStory, {
        name: SpecificStory,
        color: 'disabled'
      }),
      error: React.createElement<TIconProps>(SpecificStory, {
        name: SpecificStory,
        color: 'error'
      }),
      inherit: React.createElement<TIconProps>(SpecificStory, {
        name: SpecificStory,
        color: 'inherit'
      }),
      primary: React.createElement<TIconProps>(SpecificStory, {
        name: SpecificStory,
        color: 'primary'
      }),
      secondary: React.createElement<TIconProps>(SpecificStory, {
        name: SpecificStory,
        color: 'secondary'
      }),
      success: React.createElement<TIconProps>(SpecificStory, {
        name: SpecificStory,
        color: 'success'
      }),
      warning: React.createElement<TIconProps>(SpecificStory, {
        name: SpecificStory,
        color: 'warning'
      })
    };
  });
  return <div className={styles.wrapper}>
      <div className={styles.table}>
        {iconsWithColors.map((icon, key) => {
        const isWhiteIcon = icon.title === 'LogoSvgIcon' || icon.title === 'LogoutSvgIcon' || icon.title === 'WhiteStarSvgIcon';
        return <div key={key} className={styles.row}>
              <div>{icon.title}</div>
              <div style={{
            backgroundColor: isWhiteIcon ? 'black' : undefined
          }}>{icon.default}</div>
              <div style={{
            backgroundColor: isWhiteIcon ? 'black' : undefined
          }}>{icon.action}</div>
              <div style={{
            backgroundColor: isWhiteIcon ? 'black' : undefined
          }}>{icon.disabled}</div>
              <div style={{
            backgroundColor: isWhiteIcon ? 'black' : undefined
          }}>{icon.error}</div>
              <div style={{
            backgroundColor: isWhiteIcon ? 'black' : undefined
          }}>{icon.inherit}</div>
              <div style={{
            backgroundColor: isWhiteIcon ? 'black' : undefined
          }}>{icon.primary}</div>
              <div style={{
            backgroundColor: isWhiteIcon ? 'black' : undefined
          }}>{icon.secondary}</div>
              <div style={{
            backgroundColor: isWhiteIcon ? 'black' : undefined
          }}>{icon.warning}</div>
              <div style={{
            backgroundColor: isWhiteIcon ? 'black' : undefined
          }}>{icon.success}</div>
            </div>;
      })}
      </div>
    </div>;
}`,...(v=(S=t.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const f=["IconComponent","AllIcons"],W=Object.freeze(Object.defineProperty({__proto__:null,AllIcons:t,IconComponent:i,__namedExportsOrder:f,default:g},Symbol.toStringTag,{value:"Module"}));export{t as A,W as I,k as a};
