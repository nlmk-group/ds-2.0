import{j as r}from"./jsx-runtime-2xDJh5tt.js";import{r as I}from"./index-CBqU2yxZ.js";import{b as l,a as P,I as y}from"./index-ByRza-M8.js";import{a as _}from"./argsTypes-DEnnEX1e.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3aZeTS2.js";import"./clsx.m-CH7BE6MN.js";import"./32-BI8cdrFX.js";const w="_wrapper_1apt3_1",v="_row_1apt3_13",s={wrapper:w,row:v},f="assets/image_picture_mock.jpg",S=e=>r("div",{style:{minHeight:80},children:e()}),k={title:"Components/ImagePicture/Stories",component:l,decorators:[S],argTypes:_},d=e=>r("div",{children:Object.values(P).map(c=>r("div",{className:s.row,children:Object.values(y).map(m=>I.createElement(l,{...e,key:m,aspectRatio:m,radius:c}))},c))}),a=e=>r("div",{className:s.wrapper,children:r(d,{...e})});a.storyName="Варианты компонента ImagePicture";a.args={src:f,alt:"Mock image"};const t=e=>r("div",{className:s.wrapper,children:r(d,{...e})});t.storyName="ImagePicture без изображения";t.args={src:"",alt:""};var o,i,p;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`(argTypes: IImagePicture): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfImagePictures {...argTypes} />
    </div>;
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var n,u,g;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`(argTypes: IImagePicture): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfImagePictures {...argTypes} />
    </div>;
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const C=["ImagePictureDefault","ImagePictureEmpty"];export{a as ImagePictureDefault,t as ImagePictureEmpty,C as __namedExportsOrder,k as default};
