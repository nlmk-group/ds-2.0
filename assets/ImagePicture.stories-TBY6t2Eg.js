import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{r as I}from"./index-Bnop-kX6.js";import{b as l,a as P,I as j}from"./index-DxaWDDI2.js";import{a as y}from"./argsTypes-BvjqGfqV.js";import"./index-DLbY_Jxu.js";import"./clsx-B-dksMZM.js";import"./32-bzYAI2s2.js";const x="_wrapper_jtiom_1",_="_row_jtiom_13",a={wrapper:x,row:_},w="img/image_picture_mock.jpg",v=r=>e.jsx("div",{style:{minHeight:80},children:e.jsx(r,{})}),b={title:"Components/ImagePicture/Stories",component:l,decorators:[v],argTypes:y},d=r=>e.jsx("div",{children:Object.values(P).map(m=>e.jsx("div",{className:a.row,children:Object.values(j).map(c=>I.createElement(l,{...r,key:c,aspectRatio:c,radius:m}))},m))}),s=r=>e.jsx("div",{className:a.wrapper,children:e.jsx(d,{...r})});s.storyName="Варианты компонента ImagePicture";s.args={src:w,alt:"Mock image"};const t=r=>e.jsx("div",{className:a.wrapper,children:e.jsx(d,{...r})});t.storyName="ImagePicture без изображения";t.args={src:"",alt:""};var o,i,p;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`(argTypes: IImagePicture): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfImagePictures {...argTypes} />
    </div>;
}`,...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var n,u,g;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`(argTypes: IImagePicture): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfImagePictures {...argTypes} />
    </div>;
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const k=["ImagePictureDefault","ImagePictureEmpty"];export{s as ImagePictureDefault,t as ImagePictureEmpty,k as __namedExportsOrder,b as default};
