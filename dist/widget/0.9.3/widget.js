define("#widget/0.9.3/widget",["base","$","./daparser"],function(a,b,c){function l(a){return k.call(a)==="[object String]"}function m(a){return k.call(a)==="[object Function]"}function n(a){return a.replace(/^\s*/,"").replace(/\s*$/,"")}function p(a,b){var c=q(a,b.cid),d;return(d=o[c])?d:(d=function(c){m(a)?a.call(b,c):b[a](c)},o[c]=d,d)}function q(a,b){var c;l(a)?c=a:m(a)&&m(a.toString)&&(c=a.toString().substring(0,50));if(c)return b+"-"+c;throw'"handler" must be a string or a function'}function s(){return"widget-"+r++}function t(a,b,c){for(var d=0,e=g.length;d<e;d++){var f=g[d];if(f in b){var h=b[f];a[f]=c?h.value:h}}}function u(a,b){for(var c in a){var d=n(c).split(/\s*,\s*/),e=a[c];while(c=d.shift()){var f=c.split(/\s+/),g=f[0],h=f[1];h||(h=g,g="click"),b[g+" "+e]=h}}}function v(a){return m(a.events)&&(a.events=a.events()),a.events}function w(a,b){var c=a.match(h),d=c[1]+i+b.cid,e=c[2]||"";return e.indexOf("{{")>-1&&(e=y(e,b)),{type:d,selector:e}}function y(a,b){return a.replace(x,function(a,c){var d=c.split("."),e=b,f;while(f=d.shift())e===b.attrs?e=b.get(f):e=e[f];return l(e)&&e.indexOf(".")===0?e:b.stamp(e)})}var d=a("base"),e=a("$"),f=a("./daparser"),g=["element","model"],h=/^(\S+)\s*(.*)$/,i=".delegate-events-",j=d.extend({attrs:{template:"<div></div>",parentNode:document.body,"data-api":!0},events:null,initialize:function(a){this.cid=s(),j.superclass.initialize.call(this,a),this.parseElement(),this.parseDataAttrs(),this.initProps(),this.delegateEvents(),this.setup()},initAttrs:function(a){var b=this.constructor.prototype;b.attrs||(b.attrs={}),t(b.attrs,this),j.superclass.initAttrs.call(this,a),t(this,this.attrs,!0)},parseElement:function(){var a=this.element;a?this.element=e(a):this.get("template")&&this.parseElementFromTemplate();if(!this.element||!this.element[0])throw"element is invalid"},parseElementFromTemplate:function(){this.element=e(this.get("template"))},parseDataAttrs:function(){if(this.get("data-api")){this.dataset=f.parse(this.element[0]);var a=this.dataset.action;if(a){var b=v(this)||(this.events={});u(a,b)}}},initProps:function(){},delegateEvents:function(a,b){a||(a=v(this));if(!a)return;if(l(a)&&m(b)){var c={};c[a]=b,a=c}for(var d in a){var e=w(d,this);b=p(a[d],this),this.element.on(e.type,e.selector,b)}return this},undelegateEvents:function(a,b){var c=this.cid,d={};arguments.length===0?d.type=i+c:d=w(a,this);if(b){var e=q(b,c);b=o[e]}return this.element.off(d.type,d.selector,b),this},setup:function(){},render:function(){var a=this.element[0].parentNode||{nodeType:11};return a.nodeType===11&&this.get("parentNode")&&this.element.appendTo(this.get("parentNode")),this},$:function(a){return this.element.find(a)},stamp:function(a){var b=e(a)[0];if(!b||b.nodeType!==1)throw"This element is not a valid DOM element: "+a;return"."+f.stamp(b)},destroy:function(){this.undelegateEvents(),j.superclass.destroy.call(this)}});c.exports=j;var k=Object.prototype.toString,o={},r=0,x=/\{\{([^\}]+)\}\}/g});