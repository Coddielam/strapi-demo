(self.webpackChunknutman_strapi_cms=self.webpackChunknutman_strapi_cms||[]).push([[3650],{80117:(e,t,n)=>{"use strict";e.exports=n(41706)},41706:function(e,t,n){var r,a;e.exports=(r=n(53547),a=n(78384),function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=109)}({0:function(e,t,n){e.exports=n(17)()},1:function(e,t){e.exports=r},10:function(e,t,n){var r=n(23),a=n(24),o=n(20),i=n(25);e.exports=function(e,t){return r(e)||a(e,t)||o(e,t)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},109:function(e,t,n){"use strict";n.r(t),n.d(t,"Main",(function(){return b})),n.d(t,"SkipToContent",(function(){return w}));var r,a=n(6),o=n.n(a),i=n(5),u=n.n(i),s=n(3),l=n.n(s),c=n(1),d=n.n(c),f=n(0),p=n.n(f),m=n(2),g=n.n(m),v=["labelledBy"],y=g.a.main(r||(r=l()(["\n  // To prevent global outline on focus visible to force an outline when Main is focused\n  &:focus-visible {\n    outline: none;\n  }\n"]))),b=function(e){var t=e.labelledBy,n=u()(e,v),r=t||"main-content-title";return d.a.createElement(y,o()({"aria-labelledby":r,id:"main-content",tabIndex:-1},n))};b.defaultProps={labelledBy:void 0},b.propTypes={labelledBy:p.a.string};var h,O=n(4),x=g()(O.Box)(h||(h=l()(["\n  text-decoration: none;\n  position: absolute;\n  z-index: 9999;\n  left: -100%;\n  top: -100%;\n\n  &:focus {\n    left: ",";\n    top: ",";\n  }\n"])),(function(e){return e.theme.spaces[3]}),(function(e){return e.theme.spaces[3]})),w=function(e){var t=e.children;return d.a.createElement(x,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},t)};w.propTypes={children:p.a.node.isRequired}},13:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},17:function(e,t,n){"use strict";var r=n(18);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},18:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},19:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},2:function(e,t){e.exports=a},20:function(e,t,n){var r=n(19);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},22:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a},e.exports.default=e.exports,e.exports.__esModule=!0},23:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},24:function(e,t){e.exports=function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){u=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(u)throw a}}return o}},e.exports.default=e.exports,e.exports.__esModule=!0},25:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},3:function(e,t){e.exports=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},e.exports.default=e.exports,e.exports.__esModule=!0},4:function(e,t,n){"use strict";n.r(t),n.d(t,"Box",(function(){return f}));var r,a=n(3),o=n.n(a),i=n(0),u=n.n(i),s=n(2),l=n.n(s),c=n(7),d={color:!0},f=l.a.div.withConfig({shouldForwardProp:function(e,t){return!d[e]&&t(e)}})(r||(r=o()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(e){var t=e.fontSize;return e.theme.fontSizes[t]||t}),(function(e){var t=e.theme,n=e.background;return t.colors[n]}),(function(e){var t=e.theme,n=e.color;return t.colors[n]}),(function(e){var t=e.theme,n=e.padding;return Object(c.a)("padding",n,t)}),(function(e){var t=e.theme,n=e.paddingTop;return Object(c.a)("padding-top",n,t)}),(function(e){var t=e.theme,n=e.paddingRight;return Object(c.a)("padding-right",n,t)}),(function(e){var t=e.theme,n=e.paddingBottom;return Object(c.a)("padding-bottom",n,t)}),(function(e){var t=e.theme,n=e.paddingLeft;return Object(c.a)("padding-left",n,t)}),(function(e){var t=e.theme,n=e.marginLeft;return Object(c.a)("margin-left",n,t)}),(function(e){var t=e.theme,n=e.marginRight;return Object(c.a)("margin-right",n,t)}),(function(e){var t=e.theme,n=e.marginTop;return Object(c.a)("margin-top",n,t)}),(function(e){var t=e.theme,n=e.marginBottom;return Object(c.a)("margin-bottom",n,t)}),(function(e){var t=e.theme;return e.hiddenS?"".concat(t.mediaQueries.tablet," { display: none; }"):void 0}),(function(e){var t=e.theme;return e.hiddenXS?"".concat(t.mediaQueries.mobile," { display: none; }"):void 0}),(function(e){var t=e.theme,n=e.hasRadius,r=e.borderRadius;return n?t.borderRadius:r}),(function(e){return e.borderStyle}),(function(e){return e.borderWidth}),(function(e){var t=e.borderColor;return e.theme.colors[t]}),(function(e){var t=e.theme,n=e.borderColor,r=e.borderStyle,a=e.borderWidth;if(n&&!r&&!a)return"1px solid ".concat(t.colors[n])}),(function(e){var t=e.theme,n=e.shadow;return t.shadows[n]}),(function(e){return e.pointerEvents}),(function(e){var t=e._hover,n=e.theme;return t?t(n):void 0}),(function(e){return e.display}),(function(e){return e.position}),(function(e){var t=e.left;return e.theme.spaces[t]||t}),(function(e){var t=e.right;return e.theme.spaces[t]||t}),(function(e){var t=e.top;return e.theme.spaces[t]||t}),(function(e){var t=e.bottom;return e.theme.spaces[t]||t}),(function(e){return e.zIndex}),(function(e){return e.overflow}),(function(e){return e.cursor}),(function(e){var t=e.width;return e.theme.spaces[t]||t}),(function(e){var t=e.maxWidth;return e.theme.spaces[t]||t}),(function(e){var t=e.minWidth;return e.theme.spaces[t]||t}),(function(e){var t=e.height;return e.theme.spaces[t]||t}),(function(e){var t=e.maxHeight;return e.theme.spaces[t]||t}),(function(e){var t=e.minHeight;return e.theme.spaces[t]||t}),(function(e){return e.transition}),(function(e){return e.transform}),(function(e){return e.animation}),(function(e){return e.shrink}),(function(e){return e.grow}),(function(e){return e.basis}),(function(e){return e.flex}),(function(e){return e.textAlign}),(function(e){return e.textTransform}),(function(e){return e.lineHeight}),(function(e){return e.cursor}));f.displayName="Box",f.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},f.propTypes={_hover:u.a.func,background:u.a.string,basis:u.a.oneOfType([u.a.string,u.a.string]),borderColor:u.a.string,children:u.a.oneOfType([u.a.node,u.a.string]),color:u.a.string,flex:u.a.oneOfType([u.a.string,u.a.string]),grow:u.a.oneOfType([u.a.string,u.a.string]),hasRadius:u.a.bool,hiddenS:u.a.bool,hiddenXS:u.a.bool,padding:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingBottom:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingLeft:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingRight:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingTop:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),shadow:u.a.string,shrink:u.a.oneOfType([u.a.string,u.a.string])}},5:function(e,t,n){var r=n(22);e.exports=function(e,t){if(null==e)return{};var n,a,o=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o},e.exports.default=e.exports,e.exports.__esModule=!0},6:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},7:function(e,t,n){"use strict";var r=n(10),a=n.n(r),o=n(13),i=n.n(o);t.a=function(e,t,n){var r=t;if(Array.isArray(t)||"object"!==i()(t)||(r=[null==t?void 0:t.desktop,null==t?void 0:t.tablet,null==t?void 0:t.mobile]),void 0!==r){if(Array.isArray(r)){var o=r,u=a()(o,3),s=u[0],l=u[1],c=u[2],d="".concat(e,": ").concat(n.spaces[s],";");return void 0!==l&&(d+="".concat(n.mediaQueries.tablet,"{\n          ").concat(e,": ").concat(n.spaces[l],";\n        }")),void 0!==c&&(d+="".concat(n.mediaQueries.mobile,"{\n          ").concat(e,": ").concat(n.spaces[c],";\n        }")),d}var f=n.spaces[r]||r;return"".concat(e,": ").concat(f,";")}}}}))},82203:(e,t,n)=>{"use strict";var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.PaginationFooter=void 0;var a=r(n(53547)),o=r(n(45697)),i=n(94117),u=n(40264),s=n(68547),l=function(e){var t=e.pagination;return a.default.createElement(i.Box,{paddingTop:6},a.default.createElement(u.Flex,{alignItems:"flex-end",justifyContent:"space-between"},a.default.createElement(s.PageSizeURLQuery,null),a.default.createElement(s.PaginationURLQuery,{pagination:t})))};t.PaginationFooter=l,l.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},l.propTypes={pagination:o.default.shape({page:o.default.number,pageCount:o.default.number,pageSize:o.default.number,total:o.default.number})}},79909:(e,t,n)=>{"use strict";var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.useAssets=void 0;var a=r(n(64687)),o=r(n(17156)),i=r(n(27424)),u=n(53547),s=n(23724),l=n(67422),c=n(68547),d=n(97132),f=n(78763);t.useAssets=function(e){var t=e.skipWhen,n=(0,d.useIntl)().formatMessage,r=(0,c.useNotification)(),p=(0,l.useNotifyAT)().notifyStatus,m=(0,c.useQueryParams)(),g=(0,i.default)(m,1)[0].rawQuery,v=(0,f.getRequestUrl)("files"),y=function(){var e=(0,o.default)(a.default.mark((function e(){var t,n;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.axiosInstance.get("".concat(v).concat(g));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=(0,s.useQuery)(["assets",g],y,{enabled:!t,staleTime:0,cacheTime:0}),h=b.data,O=b.error,x=b.isLoading;return(0,u.useEffect)((function(){h&&p(n({id:"list.asset.at.finished",defaultMessage:"The assets have finished loading."}))}),[h,p,n]),(0,u.useEffect)((function(){O&&r({type:"warning",message:{id:"notification.error"}})}),[O,r]),{data:h,error:O,isLoading:x}}},90873:(e,t,n)=>{"use strict";var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.useBulkRemoveAsset=void 0;var a=r(n(38416)),o=n(23724),i=n(68547),u=n(9709);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=function(e){var t=e.map((function(e){return(0,u.removeAssetRequest)(e)}));return Promise.all(t)};t.useBulkRemoveAsset=function(){var e=(0,i.useNotification)(),t=(0,o.useQueryClient)(),n=(0,o.useMutation)(c,{onSuccess:function(){t.refetchQueries(["assets"],{active:!0}),t.refetchQueries(["asset-count"],{active:!0}),e({type:"success",message:{id:"modal.remove.success-label",defaultMessage:"The asset has been successfully removed."}})},onError:function(t){e({type:"warning",message:t.message})}});return l(l({},n),{},{removeAssets:function(e){return n.mutateAsync(e)}})}},91338:(e,t,n)=>{"use strict";var r=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.MediaLibrary=void 0;var o=r(n(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var n=E(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=o?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(r,i,u):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(53547)),u=n(97132),s=r(n(78384)),l=n(68547),c=n(35395),d=n(80117),f=n(64459),p=r(n(89326)),m=n(94117),g=n(46458),v=n(91386),y=n(80898),b=n(97234),h=r(n(38069)),O=n(79909),x=n(78763),w=n(82817),_=n(82203),j=n(87004),M=n(26156),P=n(43290);function E(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(E=function(e){return e?n:t})(e)}var S=(0,s.default)(m.Box).withConfig({displayName:"MediaLibrary__BoxWithHeight",componentId:"sc-1gb6n0n-0"})(["height:","rem;display:flex;align-items:center;"],2);t.MediaLibrary=function(){var e,t=(0,j.useMediaLibraryPermissions)(),n=t.canRead,r=t.canCreate,a=t.canUpdate,s=t.canCopyLink,m=t.canDownload,E=t.isLoading,T=(0,l.useQueryParams)(),k=(0,o.default)(T,2),A=k[0].query,C=k[1],B=(0,u.useIntl)().formatMessage,L=(0,O.useAssets)({skipWhen:!n}),R=L.data,D=L.isLoading,I=L.error,W=(0,i.useState)(!1),F=(0,o.default)(W,2),Q=F[0],z=F[1],U=(0,i.useState)(void 0),q=(0,o.default)(U,2),N=q[0],H=q[1],$=(0,l.useSelectionState)("id",[]),X=(0,o.default)($,2),V=X[0],Y=X[1],G=Y.selectOne,J=Y.selectAll,K=function(){return z((function(e){return!e}))};(0,l.useFocusWhenNavigate)();var Z=E||D,ee=null===R||void 0===R?void 0:R.results,te=(null===R||void 0===R||null===(e=R.pagination)||void 0===e?void 0:e.total)||0,ne=Boolean(A._q||A.filters);return i.default.createElement(c.Layout,null,i.default.createElement(d.Main,{"aria-busy":Z},i.default.createElement(c.HeaderLayout,{title:B({id:(0,x.getTrad)("plugin.name"),defaultMessage:"Media Library"}),subtitle:B({id:(0,x.getTrad)(te>0?"header.content.assets-multiple":"header.content.assets.assets-single"),defaultMessage:"0 assets"},{number:te}),primaryAction:r?i.default.createElement(f.Button,{startIcon:i.default.createElement(p.default,null),onClick:K},B({id:(0,x.getTrad)("header.actions.add-assets"),defaultMessage:"Add new assets"})):void 0}),i.default.createElement(c.ActionLayout,{startActions:i.default.createElement(i.default.Fragment,null,a&&i.default.createElement(S,{paddingLeft:2,paddingRight:2,background:"neutral0",hasRadius:!0,borderColor:"neutral200"},i.default.createElement(g.BaseCheckbox,{"aria-label":B({id:(0,x.getTrad)("bulk.select.label"),defaultMessage:"Select all assets"}),indeterminate:(null===ee||void 0===ee?void 0:ee.length)>0&&V.length>0&&V.length!==(null===ee||void 0===ee?void 0:ee.length),value:(null===ee||void 0===ee?void 0:ee.length)>0&&V.length===(null===ee||void 0===ee?void 0:ee.length),onChange:function(){return J(ee)}})),n&&i.default.createElement(h.default,{onChangeSort:function(e){C({sort:e})}}),n&&i.default.createElement(w.Filters,null)),endActions:i.default.createElement(l.SearchURLQuery,{label:B({id:(0,x.getTrad)("search.label"),defaultMessage:"Search for an asset"})})}),i.default.createElement(c.ContentLayout,null,V.length>0&&i.default.createElement(M.BulkDeleteButton,{selectedAssets:V,onSuccess:J}),Z&&i.default.createElement(l.LoadingIndicatorPage,null),I&&i.default.createElement(l.AnErrorOccurred,null),!n&&i.default.createElement(l.NoPermissions,null),n&&ee&&0===ee.length&&i.default.createElement(P.EmptyAssets,{action:r&&!ne?i.default.createElement(f.Button,{variant:"secondary",startIcon:i.default.createElement(p.default,null),onClick:K},B({id:(0,x.getTrad)("header.actions.add-assets"),defaultMessage:"Add new assets"})):void 0,content:B(ne?{id:(0,x.getTrad)("list.assets-empty.title-withSearch"),defaultMessage:"There are no assets with the applied filters"}:r?{id:(0,x.getTrad)("list.assets.empty"),defaultMessage:"Upload your first assets..."}:{id:(0,x.getTrad)("list.assets.empty.no-permissions"),defaultMessage:"The asset list is empty"})}),n&&ee&&ee.length>0&&i.default.createElement(i.default.Fragment,null,i.default.createElement(b.AssetList,{assets:ee,onEditAsset:H,onSelectAsset:G,selectedAssets:V}),(null===R||void 0===R?void 0:R.pagination)&&i.default.createElement(_.PaginationFooter,{pagination:R.pagination})))),Q&&i.default.createElement(v.UploadAssetDialog,{onClose:K,trackedLocation:"upload"}),N&&i.default.createElement(y.EditAssetDialog,{onClose:function(){return H(void 0)},asset:N,canUpdate:a,canCopyLink:s,canDownload:m,trackedLocation:"upload"}))}},26156:(e,t,n)=>{"use strict";var r=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.BulkDeleteButton=void 0;var o=r(n(64687)),i=r(n(17156)),u=r(n(27424)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=o?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(r,i,u):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(53547)),l=r(n(45697)),c=n(97132),d=n(33483),f=n(64459),p=n(9524),m=r(n(62982)),g=n(68547),v=n(90873),y=r(n(6955));function b(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}var h=function(e){var t=e.selectedAssets,n=e.onSuccess,r=(0,c.useIntl)().formatMessage,a=(0,s.useState)(!1),l=(0,u.default)(a,2),b=l[0],h=l[1],O=(0,v.useBulkRemoveAsset)(),x=O.isLoading,w=O.removeAssets,_=function(){var e=(0,i.default)(o.default.mark((function e(){return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t.map((function(e){return e.id})));case 2:n();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s.default.createElement(s.default.Fragment,null,s.default.createElement(p.Stack,{horizontal:!0,spacing:2,paddingBottom:5},s.default.createElement(d.Typography,{variant:"epsilon",textColor:"neutral600"},r({id:(0,y.default)("list.assets.selected"),defaultMessage:"{number, plural, =0 {No asset} one {1 asset} other {# assets}} selected"},{number:t.length})),s.default.createElement(f.Button,{variant:"danger-light",size:"S",startIcon:s.default.createElement(m.default,null),onClick:function(){return h(!0)}},r({id:"global.delete",defaultMessage:"Delete"}))),s.default.createElement(g.ConfirmDialog,{isConfirmButtonLoading:x,isOpen:b,onToggleDialog:function(){return h(!1)},onConfirm:_}))};t.BulkDeleteButton=h,h.propTypes={selectedAssets:l.default.arrayOf(l.default.shape({})).isRequired,onSuccess:l.default.func.isRequired}},82817:(e,t,n)=>{"use strict";var r=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.Filters=void 0;var o=r(n(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=o?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(r,i,u):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(53547)),u=n(64459),s=n(68547),l=r(n(88231)),c=n(97132),d=r(n(82708)),f=r(n(6229)),p=r(n(65326));function m(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}t.Filters=function(){var e,t=(0,i.useRef)(null),n=(0,i.useState)(!1),r=(0,o.default)(n,2),a=r[0],m=r[1],g=(0,c.useIntl)().formatMessage,v=(0,s.useQueryParams)(),y=(0,o.default)(v,2),b=y[0].query,h=y[1],O=(null===b||void 0===b||null===(e=b.filters)||void 0===e?void 0:e.$and)||[],x=function(){return m((function(e){return!e}))};return i.default.createElement(i.default.Fragment,null,i.default.createElement(u.Button,{variant:"tertiary",ref:t,startIcon:i.default.createElement(l.default,null),onClick:x,size:"S"},g({id:"app.utils.filters",defaultMessage:"Filters"})),a&&i.default.createElement(f.default,{displayedFilters:p.default,filters:O,onSubmit:function(e){h({filters:{$and:e},page:1})},onToggle:x,source:t}),i.default.createElement(d.default,{appliedFilters:O,filtersSchema:p.default,onRemoveFilter:function(e){h({filters:{$and:e},page:1})}}))}},16466:(e,t,n)=>{"use strict";var r=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=o?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(r,i,u):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(53547)),u=n(15482),s=n(97132),l=n(68547),c=n(78763),d=n(91338);function f(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var p=function(){var e=(0,l.useQueryParams)(),t=(0,o.default)(e,2),n=t[0].rawQuery,r=t[1],a=(0,(0,s.useIntl)().formatMessage)({id:(0,c.getTrad)("plugin.name"),defaultMessage:"Media Library"});return(0,i.useEffect)((function(){n||r({sort:"updatedAt:DESC",page:1,pageSize:10})}),[n,r]),n?i.default.createElement(i.default.Fragment,null,i.default.createElement(u.Helmet,{title:a}),i.default.createElement(d.MediaLibrary,null)):null};t.default=p}}]);