import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{r as I}from"./index-Cu9bd8lq.js";import{b as l,a as P,I as y}from"./index-CPdpS9Jm.js";import{a as j}from"./argsTypes-BGH-0tKJ.js";import"./index-iWHyAWYR.js";import"./clsx-B-dksMZM.js";import"./32-Bjhqu_Pf.js";const x="_wrapper_zu1tq_1",_="_row_zu1tq_13",a={wrapper:x,row:_},w="assets/image_picture_mock.jpg",v=r=>e.jsx("div",{style:{minHeight:80},children:e.jsx(r,{})}),b={title:"Components/ImagePicture/Stories",component:l,decorators:[v],argTypes:j},d=r=>e.jsx("div",{children:Object.values(P).map(c=>e.jsx("div",{className:a.row,children:Object.values(y).map(m=>I.createElement(l,{...r,key:m,aspectRatio:m,radius:c}))},c))}),s=r=>e.jsx("div",{className:a.wrapper,children:e.jsx(d,{...r})});s.storyName="Варианты компонента ImagePicture";s.args={src:w,alt:"Mock image"};const t=r=>e.jsx("div",{className:a.wrapper,children:e.jsx(d,{...r})});t.storyName="ImagePicture без изображения";t.args={src:"",alt:""};var o,i,p;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`(argTypes: IImagePicture): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfImagePictures {...argTypes} />
    </div>;
}`,...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var n,u,g;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`(argTypes: IImagePicture): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfImagePictures {...argTypes} />
    </div>;
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const k=["ImagePictureDefault","ImagePictureEmpty"];export{s as ImagePictureDefault,t as ImagePictureEmpty,k as __namedExportsOrder,b as default};
