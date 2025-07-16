import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as l}from"./index-BcJSXhQi.js";import{aT as d,B as m,aE as I,aF as S}from"./TreeList-BgNZ17Gs.js";import"./generateUUID-CJxgi7Ha.js";import"./index-BG4omi31.js";import"./index-WHoiTdKD.js";import{B as a}from"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import{T as g}from"./index-DmffzHLE.js";import"./index-DcXliXrs.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import{b as B}from"./index-t2lirjGB.js";import"./index-C5rKoyII.js";import{M,N as O,G as R}from"./32-BpMTv1cT.js";import{g as E}from"./styles.module-m0Zsy3Hi.js";import"./index-ChsGqxH_.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";const y=()=>e.jsxs("svg",{width:"150",height:"81",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M75 71.948c-39.381 0-65.72-12.901-65.72-32.004C9.28 20.84 35.62 7.939 75 7.939c39.382 0 65.719 12.901 65.719 32.005 0 19.103-26.337 32.004-65.719 32.004Zm0-64.753c-39.883 0-66.473 13.149-66.473 32.749S35.117 72.693 75 72.693c39.883 0 66.473-13.15 66.473-32.75S114.883 7.196 75 7.196Zm0 68.97c-42.392 0-70.736-14.637-70.736-36.221C4.264 18.11 32.608 3.722 75 3.722c42.642 0 70.736 14.39 70.736 36.222 0 21.584-28.094 36.22-70.736 36.22ZM75 0C29.85 0 0 16.126 0 39.944c0 23.568 29.85 39.943 75 39.943 45.402 0 75-16.375 75-39.943C150 16.126 120.402 0 75 0Z",fill:"#1952B6"}),e.jsx("path",{d:"M35.482 28.53v8.56h-7.5v-8.56h-7.789v22.826h7.788v-8.56h7.5v8.56h7.79V28.53h-7.79ZM129.809 28.53h-7.994l-4.996 8.56h-2.298v-8.56h-7.789v22.826h7.818l-.029-8.56h2.298l4.996 8.56h7.994l-6.661-11.412 6.661-11.413ZM95.194 28.53 88.56 39.898l-6.635-11.366h-7.211v22.825h7.211V40.514l4.997 8.56h3.276l4.996-8.56v10.842h7.212V28.53h-7.212ZM50.374 28.53l-.403 11.411c-.113 3.209-.772 5.709-2.96 5.709h-.859v5.706H49.2c5.454.018 7.468-4.86 7.69-11.175l.211-5.95 5.495.006v17.119h7.788V28.53H50.374Z",fill:"#1952B6"})]});try{Logotype.displayName="Logotype",Logotype.__docgenInfo={description:"",displayName:"Logotype",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: any) => void)"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}}}}}catch{}const k="_wrapper_1snat_1",H="_mgtop_1snat_23",T="_picture_1snat_34",o={wrapper:k,"wrapper-dark":"_wrapper-dark_1snat_5","wrapper-light":"_wrapper-light_1snat_14",mgtop:H,"icon-light":"_icon-light_1snat_27","icon-dark":"_icon-dark_1snat_30","picture-wrapper":"_picture-wrapper_1snat_34",picture:T},z="img/mnemo_image_picture_mock.jpg",L=r=>e.jsx(a,{alignItems:"flex-start",justifyContent:"center",st:{height:"530px",maxWidth:"1400px",marginTop:"40px",borderRadius:"10px"},className:E.wrapper,children:e.jsx(r,{})}),ie={title:"Components/Splitter/Stories",component:d,decorators:[L]},n=()=>{const r=Array.from({length:11},(t,p)=>p),i=()=>{const t=l.useRef(null),[p,N]=l.useState(0);return l.useEffect(()=>{if(t.current&&t.current.parentElement){const c=t.current.parentElement;c.style.minHeight="240px";const u=()=>{const b=c.getBoundingClientRect();N(b.height)};u();const h=new ResizeObserver(()=>{u()});return h.observe(c),()=>{h.disconnect()}}},[]),e.jsx("div",{ref:t,className:o["picture-wrapper"],children:e.jsx("div",{className:o.picture,style:{height:`${p-32}px`},children:e.jsx(B,{src:z,alt:"Mock Image Mnemo",aspectRatio:"ratio-16x9",radius:"radius-none",zoom:!1,style:{width:"100%",height:"100%",objectFit:"contain",overflow:"hidden"}})})})},w=e.jsxs("div",{className:o.wrapper,style:{paddingTop:"16px"},children:[e.jsxs(a,{alignItems:"center",gap:"8px",children:[e.jsx(g,{className:o.mgtop,variant:"Heading4",children:"Информация по рассмотрению"}),e.jsx(m,{type:"button",variant:"secondary",color:"ghost",style:{pointerEvents:"none"},size:"s",iconButton:e.jsx(M,{htmlColor:"var(--brand-sapphire-60)"})})]}),e.jsxs(a,{justifyContent:"center",alignItems:"center",children:[e.jsx(g,{className:o.mgtop,variant:"Body1-Medium",children:"Отображать строк"}),e.jsx(I,{value:10,style:{width:"80px"},children:r.map(t=>e.jsx(S,{value:t,label:String(t),children:t},t))}),e.jsxs(a,{justifyContent:"center",alignItems:"center",gap:"16px",children:[e.jsx(m,{type:"button",startIcon:e.jsx(O,{htmlColor:"var(--unique-bluewhite)"}),variant:"secondary",children:"Добавить"}),e.jsx(m,{type:"button",startIcon:e.jsx(R,{}),children:"Разрешить"})]})]})]});return e.jsx(d,{topComponent:e.jsx(i,{}),bottomComponent:w})};n.storyName="Splitter по умолчанию";const s=()=>{const r=e.jsx("div",{className:o["wrapper-light"],children:e.jsx(y,{className:o["icon-light"]})}),i=e.jsx("div",{className:o["wrapper-dark"],children:e.jsx(y,{className:o["icon-dark"]})});return e.jsx(d,{bottomComponent:i,topComponent:r})};s.storyName="Splitter c логотипами";var x,v,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`(): ReactNode => {
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
        <Box justifyContent="center" alignItems="center" gap="16px">
          <Button type="button" startIcon={<IconAddPlusOutlined24 htmlColor="var(--unique-bluewhite)" />} variant="secondary">
            Добавить
          </Button>
          <Button type="button" startIcon={<IconDoneCheckOutlined24 />}>Разрешить</Button>
        </Box>
      </Box>
    </div>;
  return <Splitter topComponent={<TopComponent />} bottomComponent={bottomComponent} />;
}`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var _,C,j;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`(): ReactNode => {
  const topComponent = <div className={style['wrapper-light']}>
      <IconLogotype className={style['icon-light']} />
    </div>;
  const bottomComponent = <div className={style['wrapper-dark']}>
      <IconLogotype className={style['icon-dark']} />
    </div>;
  return <Splitter bottomComponent={bottomComponent} topComponent={topComponent} />;
}`,...(j=(C=s.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const pe=["SplitterDefault","SplitterImages"];export{n as SplitterDefault,s as SplitterImages,pe as __namedExportsOrder,ie as default};
