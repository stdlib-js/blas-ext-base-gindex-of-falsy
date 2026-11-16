"use strict";var o=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var f=o(function(R,v){
function l(e,r,a,u){var t,s,i,n;for(t=r.data,s=r.accessors[0],i=u,n=0;n<e;n++){if(!s(t,i))return n;i+=a}return-1}v.exports=l
});var c=o(function(h,x){
var g=require('@stdlib/array-base-arraylike2object/dist'),p=f();function O(e,r,a,u){var t,s,i;if(e<=0)return-1;if(s=g(r),s.accessorProtocol)return p(e,s,a,u);for(t=u,i=0;i<e;i++){if(!r[t])return i;t+=a}return-1}x.exports=O
});var d=o(function(w,y){
var F=require('@stdlib/strided-base-stride2offset/dist'),b=c();function j(e,r,a){return b(e,r,a,F(e,a))}y.exports=j
});var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=d(),m=c();k(q,"ndarray",m);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
