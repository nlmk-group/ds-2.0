import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as I}from"./index-BcJSXhQi.js";import{b as l,I as P,a as j}from"./index-BQAMZg9d.js";import{a as y}from"./argsTypes-DuZ9CXYR.js";import"./index-ChsGqxH_.js";import"./index-53N2drcz.js";import"./clsx-B-dksMZM.js";import"./32-DMwn_7G4.js";const x="_wrapper_jtiom_1",_="_row_jtiom_13",a={wrapper:x,row:_},w="img/image_picture_mock.jpg",v=r=>e.jsx("div",{style:{minHeight:80},children:e.jsx(r,{})}),k={title:"Components/ImagePicture/Stories",component:l,decorators:[v],argTypes:y},d=r=>e.jsx("div",{children:Object.values(P).map(m=>e.jsx("div",{className:a.row,children:Object.values(j).map(c=>I.createElement(l,{...r,key:c,aspectRatio:c,radius:m}))},m))}),t=r=>e.jsx("div",{className:a.wrapper,children:e.jsx(d,{...r})});t.storyName="Варианты компонента ImagePicture";t.args={src:w,alt:"Mock image"};const s=r=>e.jsx("div",{className:a.wrapper,children:e.jsx(d,{...r})});s.storyName="ImagePicture без изображения";s.args={src:"",alt:""};var o,i,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`(argTypes: IImagePicture): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfImagePictures {...argTypes} />
    </div>;
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var n,u,g;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`(argTypes: IImagePicture): JSX.Element => {
  return <div className={styles.wrapper}>
      <SetOfImagePictures {...argTypes} />
    </div>;
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const C=["ImagePictureDefault","ImagePictureEmpty"];export{t as ImagePictureDefault,s as ImagePictureEmpty,C as __namedExportsOrder,k as default};
