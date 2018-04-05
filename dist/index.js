!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("smooth-dnd"),require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["smooth-dnd","prop-types","react"],t):"object"==typeof exports?exports.ReactSmoothDnD=t(require("smooth-dnd"),require("prop-types"),require("react")):e.ReactSmoothDnD=t(e.SmoothDND,e.PropTypes,e.React)}(window,function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(3),a=c(i),u=c(n(2)),s=n(1);function c(e){return e&&e.__esModule?e:{default:e}}var l=s.constants.wrapperClass,p=s.constants.animationClass,f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),o(t,[{key:"render",value:function(){var e=this.props.className?this.props.className+" ":"";return a.default.createElement("div",r({},this.props,{className:""+e+l+" "+p}),this.props.children)}}]),t}();f.propTypes={payload:u.default.object},t.default=f},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(3),i=c(o),a=c(n(2)),u=n(1),s=c(u);c(n(0));function c(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getContainerOptions=n.getContainerOptions.bind(n),n.dropHandler=u.dropHandlers.reactDropHandler(),n.prevContainer=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentDidMount",value:function(){this.prevContainer=this.containerDiv,this.container=(0,s.default)(this.containerDiv,this.getContainerOptions(this.props))}},{key:"componentWillUnmount",value:function(){this.container.dispose(),this.container=null}},{key:"componentDidUpdate",value:function(){this.containerDiv&&this.prevContainer&&this.prevContainer!==this.containerDiv&&(this.container.dispose(),this.container=(0,s.default)(this.containerDiv,this.getContainerOptions(this.props)),this.prevContainer=this.containerDiv)}},{key:"render",value:function(){var e=this;return i.default.createElement("div",{style:this.props.style,ref:function(t){e.containerDiv=t}},this.props.children)}},{key:"getContainerOptions",value:function(e){return Object.assign({},e,{dropHandler:this.dropHandler.handler})}}]),t}();l.propTypes={behaviour:a.default.oneOf(["move","copy"]),groupName:a.default.string,orientation:a.default.oneOf(["horizontal","vertical"]),style:a.default.object,dragHandleSelector:a.default.string,nonDragAreaSelector:a.default.string,dragBeginDelay:a.default.number,animationDuration:a.default.number,getChildPayload:a.default.func,dragClass:a.default.string,autoScrollEnabled:a.default.string},l.defaultProps={behaviour:"move",orientation:"vertical"},t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Draggable=t.Container=void 0;var r=i(n(4)),o=i(n(0));function i(e){return e&&e.__esModule?e:{default:e}}t.Container=r.default,t.Draggable=o.default}])});