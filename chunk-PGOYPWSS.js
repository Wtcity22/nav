import{Ab as I,Gb as M,Pb as N,Tb as D,V as U,X as T}from"./chunk-QOCNWMW3.js";import{Hb as h,Ia as u,Jb as i,Xb as c,Yb as y,Yd as p,Zb as m,ec as C,gc as _,gd as z,lb as r,mb as f,od as v,tb as g}from"./chunk-GMSVFBBO.js";function S(o,n){if(o&1&&m(0,"i",4),o&2){let e=_();i("title",e.$t("_upload"))}}function b(o,n){o&1&&m(0,"i",5),o&2&&i("nzType","loading")}var w=class o{constructor(n){this.message=n}onChange=new u;$t=p;uploading=!1;id=`f${Date.now()}${parseInt(Math.random()*1e6)}`;onChangeFile(n){if(this.uploading)return;let{files:e}=n.target;if(e.length<=0)return;let t=e[0];if(!t.type.startsWith("image"))return this.message.error(p("_notUpload"));this.onUpload(t).finally(()=>{n.target.value=""})}onUpload(n){let e=this;return new Promise((t,l)=>{let a=new FileReader;a.readAsDataURL(n),a.onerror=l,a.onload=function(){e.uploading=!0;let $=this.result.split(",")[1],F=n.name.replace(/\s/gi,""),s=`nav-${Date.now()}-${F}`;M({branch:I||"image",message:"create image",content:$,isEncode:!1,path:s}).then(P=>{let d={rawPath:s,cdn:P?.data?.imagePath||N(s)};e.onChange.emit(d),e.message.success(p("_uploadSuccess")),t(d)}).catch(l).finally(()=>{e.uploading=!1})}})}static \u0275fac=function(e){return new(e||o)(f(D))};static \u0275cmp=g({type:o,selectors:[["app-upload"]],outputs:{onChange:"onChange"},decls:4,vars:4,consts:[[1,"file",3,"id"],["nz-icon","","nzType","upload","nzTheme","outline","class","cursor-pointer",3,"title",4,"ngIf"],["nz-icon","",3,"nzType",4,"ngIf"],["type","file","accept","image/*",1,"file-upload",3,"change","name"],["nz-icon","","nzType","upload","nzTheme","outline",1,"cursor-pointer",3,"title"],["nz-icon","",3,"nzType"]],template:function(e,t){e&1&&(c(0,"label",0),h(1,S,1,1,"i",1)(2,b,1,1,"i",2),c(3,"input",3),C("change",function(a){return t.onChangeFile(a)}),y()()),e&2&&(i("id",t.id),r(),i("ngIf",!t.uploading),r(),i("ngIf",t.uploading),r(),i("name",t.id))},dependencies:[v,z,T,U],styles:[".file[_ngcontent-%COMP%]   .file-upload[_ngcontent-%COMP%]{display:none}"]})};export{w as a};
