import{j as r}from"./clsx.m-3764cf42.js";import{r as I}from"./index-f1f749bf.js";import{I as d,b as P,a as y}from"./index-bc089e17.js";import{a as _}from"./argsTypes-ee63b6ac.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-c9e69acb.js";const f="_wrapper_fo28d_1",w="_row_fo28d_12",s={wrapper:f,row:w},v="/assets/image_picture_mock.jpg",S=e=>r("div",{style:{minHeight:80},children:e()}),x={title:"Components/ImagePicture/Stories",component:d,decorators:[S],argTypes:_},l=e=>r("div",{children:Object.values(P).map(c=>r("div",{className:s.row,children:Object.values(y).map(m=>I.createElement(d,{...e,key:m,aspectRatio:m,radius:c}))},c))}),a=e=>r("div",{className:s.wrapper,children:r(l,{...e})});a.storyName="Варианты компонента ImagePicture";a.args={src:v,alt:"Mock image"};const t=e=>r("div",{className:s.wrapper,children:r(l,{...e})});t.storyName="ImagePicture без изображения";t.args={src:"",alt:""};var o,i,p;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`(argTypes: IImagePicture): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfImagePictures {...argTypes} />
    </div>;
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var n,u,g;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`(argTypes: IImagePicture): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfImagePictures {...argTypes} />
    </div>;
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const b=["ImagePictureDefault","ImagePictureEmpty"];export{a as ImagePictureDefault,t as ImagePictureEmpty,b as __namedExportsOrder,x as default};
