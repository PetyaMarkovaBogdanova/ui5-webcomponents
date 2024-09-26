"use strict";import n from"../../types/MovePlacement.js";import A from"../../types/Orientation.js";const M=(t,o,s,r)=>{const e=Math.abs(t-o),i=Math.abs(t-s),a=Math.abs(t-r),c=Math.min(e,i,a);let l=[];switch(c){case e:l=[n.Before];break;case i:l=[n.On,e<a?n.Before:n.After];break;case a:l=[n.After];break}return l},B=(t,o,s)=>{let r=Number.POSITIVE_INFINITY,e=null;for(let f=0;f<t.length;f++){const d=t[f],{left:P,width:T,top:w,height:k}=d.getBoundingClientRect();let b;s===A.Vertical?b=w+k/2:b=P+T/2;const u=Math.abs(o-b);u<r&&(r=u,e=d)}if(!e)return null;const{width:i,height:a,left:c,right:l,top:h,bottom:g}=e.getBoundingClientRect();let m;return s===A.Vertical?m=M(o,h,h+a/2,g):m=M(o,c,c+i/2,l),{element:e,placements:m}},E=(t,o,s)=>{let r,e=t.indexOf(o);switch(s.key){case"ArrowLeft":case"ArrowUp":r=n.Before,e--;break;case"ArrowRight":case"ArrowDown":r=n.After,e++;break;case"Home":r=n.Before,e=0;break;case"End":r=n.After,e=t.length-1;break}return{element:t[e],placement:r}};export{B as findClosestPosition,E as findClosestPositionByKey};
//# sourceMappingURL=findClosestPosition.js.map