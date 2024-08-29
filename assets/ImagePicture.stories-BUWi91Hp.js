import{j as r}from"./jsx-runtime-DFnSfiB4.js";import{r as I}from"./index-DQ2WTIsS.js";import{b as l,a as P,I as y}from"./index-CTg4GkBi.js";import{a as _}from"./argsTypes-C6q6_-46.js";import"./index-CFeGFBie.js";import"./clsx-B-dksMZM.js";import"./32-CkcGOl0S.js";const j="_wrapper_zu1tq_1",w="_row_zu1tq_13",a={wrapper:j,row:w},x="assets/image_picture_mock.jpg",v=e=>r.jsx("div",{style:{minHeight:80},children:e()}),b={title:"Components/ImagePicture/Stories",component:l,decorators:[v],argTypes:_},d=e=>r.jsx("div",{children:Object.values(P).map(c=>r.jsx("div",{className:a.row,children:Object.values(y).map(m=>I.createElement(l,{...e,key:m,aspectRatio:m,radius:c}))},c))}),s=e=>r.jsx("div",{className:a.wrapper,children:r.jsx(d,{...e})});s.storyName="Варианты компонента ImagePicture";s.args={src:x,alt:"Mock image"};const t=e=>r.jsx("div",{className:a.wrapper,children:r.jsx(d,{...e})});t.storyName="ImagePicture без изображения";t.args={src:"",alt:""};var o,i,p;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`(argTypes: IImagePicture): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfImagePictures {...argTypes} />
    </div>;
}`,...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var n,u,g;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`(argTypes: IImagePicture): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfImagePictures {...argTypes} />
    </div>;
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const k=["ImagePictureDefault","ImagePictureEmpty"];export{s as ImagePictureDefault,t as ImagePictureEmpty,k as __namedExportsOrder,b as default};
