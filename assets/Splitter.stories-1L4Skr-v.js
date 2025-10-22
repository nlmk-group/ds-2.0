import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as g}from"./index-BcJSXhQi.js";import{aU as m,B as u,aE as M,aF as R}from"./TreeList-DaNCMioE.js";import"./generateUUID-CwHnX0Hw.js";import"./index-BekOEyNL.js";import"./index-WHoiTdKD.js";import{B as n}from"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import{T as a}from"./index-DmffzHLE.js";import"./index-9k2b7QWQ.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import{b as T}from"./index-uupel1IP.js";import"./index-C5rKoyII.js";import{M as O,N as E,G as H}from"./32-BKmqX1Rw.js";import{g as z}from"./styles.module-m0Zsy3Hi.js";import"./index-ChsGqxH_.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";const l=r=>e.jsxs("svg",{width:"150",height:"81",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:r.className??"",children:[e.jsx("path",{d:"M75 71.948c-39.381 0-65.72-12.901-65.72-32.004C9.28 20.84 35.62 7.939 75 7.939c39.382 0 65.719 12.901 65.719 32.005 0 19.103-26.337 32.004-65.719 32.004Zm0-64.753c-39.883 0-66.473 13.149-66.473 32.749S35.117 72.693 75 72.693c39.883 0 66.473-13.15 66.473-32.75S114.883 7.196 75 7.196Zm0 68.97c-42.392 0-70.736-14.637-70.736-36.221C4.264 18.11 32.608 3.722 75 3.722c42.642 0 70.736 14.39 70.736 36.222 0 21.584-28.094 36.22-70.736 36.22ZM75 0C29.85 0 0 16.126 0 39.944c0 23.568 29.85 39.943 75 39.943 45.402 0 75-16.375 75-39.943C150 16.126 120.402 0 75 0Z",fill:"#1952B6"}),e.jsx("path",{d:"M35.482 28.53v8.56h-7.5v-8.56h-7.789v22.826h7.788v-8.56h7.5v8.56h7.79V28.53h-7.79ZM129.809 28.53h-7.994l-4.996 8.56h-2.298v-8.56h-7.789v22.826h7.818l-.029-8.56h2.298l4.996 8.56h7.994l-6.661-11.412 6.661-11.413ZM95.194 28.53 88.56 39.898l-6.635-11.366h-7.211v22.825h7.211V40.514l4.997 8.56h3.276l4.996-8.56v10.842h7.212V28.53h-7.212ZM50.374 28.53l-.403 11.411c-.113 3.209-.772 5.709-2.96 5.709h-.859v5.706H49.2c5.454.018 7.468-4.86 7.69-11.175l.211-5.95 5.495.006v17.119h7.788V28.53H50.374Z",fill:"#1952B6"})]});try{Logotype.displayName="Logotype",Logotype.__docgenInfo={description:"",displayName:"Logotype",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: any) => void)"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}}}}}catch{}const D="_wrapper_1eams_1",L="_mgtop_1eams_46",V="_picture_1eams_50",t={wrapper:D,"wrapper-dark":"_wrapper-dark_1eams_5","wrapper-light":"_wrapper-light_1eams_19","icon-light":"_icon-light_1eams_28","icon-dark":"_icon-dark_1eams_32","text-dark":"_text-dark_1eams_39",mgtop:L,"picture-wrapper":"_picture-wrapper_1eams_50",picture:V},Z="img/mnemo_image_picture_mock.jpg",A=r=>e.jsx(n,{alignItems:"flex-start",justifyContent:"center",st:{height:"530px",maxWidth:"1400px",marginTop:"40px",borderRadius:"10px"},className:z.wrapper,children:e.jsx(r,{})}),me={title:"Components/Splitter/Stories",component:m,decorators:[A]},i=()=>{const r=Array.from({length:11},(o,d)=>d),s=()=>{const o=g.useRef(null),[d,B]=g.useState(0);return g.useEffect(()=>{if(o.current&&o.current.parentElement){const h=o.current.parentElement;h.style.minHeight="240px";const y=()=>{const k=h.getBoundingClientRect();B(k.height)};y();const x=new ResizeObserver(()=>{y()});return x.observe(h),()=>{x.disconnect()}}},[]),e.jsx("div",{ref:o,className:t["picture-wrapper"],children:e.jsx("div",{className:t.picture,style:{height:`${d-32}px`},children:e.jsx(T,{src:Z,alt:"Mock Image Mnemo",aspectRatio:"ratio-16x9",radius:"radius-none",zoom:!1,style:{width:"100%",height:"100%",objectFit:"contain",overflow:"hidden"}})})})},S=e.jsxs("div",{className:t.wrapper,style:{paddingTop:"16px"},children:[e.jsxs(n,{alignItems:"center",gap:"8px",children:[e.jsx(a,{className:t.mgtop,variant:"Heading4",children:"Информация по рассмотрению"}),e.jsx(u,{type:"button",variant:"secondary",color:"ghost",style:{pointerEvents:"none"},size:"s",iconButton:e.jsx(O,{htmlColor:"var(--brand-sapphire-60)"})})]}),e.jsxs(n,{justifyContent:"center",alignItems:"center",children:[e.jsxs(n,{justifyContent:"center",alignItems:"center",gap:"16px",children:[e.jsx(a,{className:t.mgtop,variant:"Body1-Medium",children:"Отображать строк"}),e.jsx(M,{value:10,style:{width:"80px"},children:r.map(o=>e.jsx(R,{value:o,label:String(o),children:o},o))})]}),e.jsxs(n,{justifyContent:"center",alignItems:"center",gap:"16px",children:[e.jsx(u,{type:"button",startIcon:e.jsx(E,{htmlColor:"var(--unique-bluewhite)"}),variant:"secondary",children:"Добавить"}),e.jsx(u,{type:"button",startIcon:e.jsx(H,{}),children:"Разрешить"})]})]})]});return e.jsx(m,{topComponent:e.jsx(s,{}),bottomComponent:S})};i.storyName="Splitter по умолчанию";const p=()=>{const r=e.jsx("div",{className:t["wrapper-light"],children:e.jsx(l,{className:t["icon-light"]})}),s=e.jsx("div",{className:t["wrapper-dark"],children:e.jsx(l,{className:t["icon-dark"]})});return e.jsx(m,{bottomComponent:s,topComponent:r})};p.storyName="Splitter c логотипами";const c=()=>{const r=e.jsx("div",{className:t["wrapper-light"],style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:e.jsxs(n,{flexDirection:"column",alignItems:"center",gap:"16px",children:[e.jsx(l,{className:t["icon-light"]}),e.jsx(a,{variant:"Heading4",children:"Левая панель"}),e.jsx(a,{variant:"Body1-Medium",children:"Содержимое левой части"})]})}),s=e.jsx("div",{className:t["wrapper-dark"],style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:e.jsxs(n,{flexDirection:"column",alignItems:"center",gap:"16px",children:[e.jsx(l,{className:t["icon-dark"]}),e.jsx(a,{variant:"Heading4",className:t["text-dark"],children:"Правая панель"}),e.jsx(a,{variant:"Body1-Medium",className:t["text-dark"],children:"Содержимое правой части"})]})});return e.jsx(m,{topComponent:r,bottomComponent:s,orientation:"vertical"})};c.storyName="Splitter вертикальный";var v,f,j;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`(): ReactNode => {
  const options = Array.from({
    length: 11
  }, (_, i) => i);
  const TopComponent = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);
    useEffect(() => {
      if (wrapperRef.current && wrapperRef.current.parentElement) {
        const parentNode = wrapperRef.current.parentElement;
        parentNode.style.minHeight = '240px';
        const updateHeight = () => {
          const rect = parentNode.getBoundingClientRect();
          setHeight(rect.height);
        };
        updateHeight();
        const resizeObserver = new ResizeObserver(() => {
          updateHeight();
        });
        resizeObserver.observe(parentNode);
        return () => {
          resizeObserver.disconnect();
        };
      }
    }, []);
    return <div ref={wrapperRef} className={style['picture-wrapper']}>
        <div className={style.picture} style={{
        height: \`\${height - 32}px\`
      }}>
          <ImagePicture src={IMAGE_MOCK_SRC_MNEMO} alt="Mock Image Mnemo" aspectRatio="ratio-16x9" radius="radius-none" zoom={false} style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          overflow: 'hidden'
        }} />
        </div>
      </div>;
  };
  const bottomComponent = <div className={style.wrapper} style={{
    paddingTop: '16px'
  }}>
      <Box alignItems="center" gap="8px">
        <Typography className={style.mgtop} variant="Heading4">
          Информация по рассмотрению
        </Typography>
        <Button type="button" variant="secondary" color="ghost" style={{
        pointerEvents: 'none'
      }} size="s" iconButton={<IconEyeOutlined24 htmlColor="var(--brand-sapphire-60)" />} />
      </Box>
      <Box justifyContent="center" alignItems="center">
        <Box justifyContent="center" alignItems="center" gap="16px">
          <Typography className={style.mgtop} variant="Body1-Medium">
            Отображать строк
          </Typography>
          <SimpleSelect value={10} style={{
          width: '80px'
        }}>
            {options.map(i => <OptionItem key={i} value={i} label={String(i)}>
                {i}
              </OptionItem>)}
          </SimpleSelect>
        </Box>
        <Box justifyContent="center" alignItems="center" gap="16px">
          <Button type="button" startIcon={<IconAddPlusOutlined24 htmlColor="var(--unique-bluewhite)" />} variant="secondary">
            Добавить
          </Button>
          <Button type="button" startIcon={<IconDoneCheckOutlined24 />}>
            Разрешить
          </Button>
        </Box>
      </Box>
    </div>;
  return <Splitter topComponent={<TopComponent />} bottomComponent={bottomComponent} />;
}`,...(j=(f=i.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var C,N,_;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`(): ReactNode => {
  const topComponent = <div className={style['wrapper-light']}>
      <IconLogotype className={style['icon-light']} />
    </div>;
  const bottomComponent = <div className={style['wrapper-dark']}>
      <IconLogotype className={style['icon-dark']} />
    </div>;
  return <Splitter bottomComponent={bottomComponent} topComponent={topComponent} />;
}`,...(_=(N=p.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var I,w,b;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`(): ReactNode => {
  const leftComponent = <div className={style['wrapper-light']} style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  }}>
      <Box flexDirection="column" alignItems="center" gap="16px">
        <IconLogotype className={style['icon-light']} />
        <Typography variant="Heading4">Левая панель</Typography>
        <Typography variant="Body1-Medium">Содержимое левой части</Typography>
      </Box>
    </div>;
  const rightComponent = <div className={style['wrapper-dark']} style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  }}>
      <Box flexDirection="column" alignItems="center" gap="16px">
        <IconLogotype className={style['icon-dark']} />
        <Typography variant="Heading4" className={style['text-dark']}>
          Правая панель
        </Typography>
        <Typography variant="Body1-Medium" className={style['text-dark']}>
          Содержимое правой части
        </Typography>
      </Box>
    </div>;
  return <Splitter topComponent={leftComponent} bottomComponent={rightComponent} orientation="vertical" />;
}`,...(b=(w=c.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const de=["SplitterDefault","SplitterImages","SplitterVertical"];export{i as SplitterDefault,p as SplitterImages,c as SplitterVertical,de as __namedExportsOrder,me as default};
