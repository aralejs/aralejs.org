define("#overlay/0.9.2/mask",["$","../src/overlay"],function(a,b,c){var d=a("$"),e=a("../src/overlay"),f=d.browser&&d.browser.msie&&d.browser.version==6,g=e.extend({attrs:{opacity:.2,backgroundColor:"#000",template:'<div id="J_mask"></div>',align:{baseElement:f?document.body:undefined,baseXY:[0,0]}},setup:function(){this.element.css({position:f?"absolute":"fixed"})},render:function(){return g.superclass.render.call(this),this.element.hide(),this},_onChangeBackgroundColor:function(a){this.element.css("backgroundColor",a)},_onChangeOpacity:function(a){this.element.css("opacity",a)}}),h;c.exports=function(){return h||(h=new g({width:f?d(document.body).outerWidth(!0):"100%",height:f?d(document.body).outerHeight(!0):"100%"}),h.render()),h}()});