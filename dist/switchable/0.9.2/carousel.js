define("#switchable/0.9.2/carousel",["./switchable","jquery"],function(a,b,c){var d=a("./switchable"),e=a("jquery"),f="ui-switchable-",g="prevBtn",h="nextBtn",i=f+"panel-internal",j=c.exports=d.extend({attrs:{circular:!0,prevButtonClass:f+"prev-btn",nextButtonClass:f+"next-btn",disableButtonClass:f+"disable-btn"},_bindAction:function(){var a=this;j.superclass._bindAction.apply(this,arguments);var b=this.element,c=this.get("circular");this[g]=this.$("."+this.get("prevButtonClass")),this[h]=this.$("."+this.get("nextButtonClass"));var d={};d["mousedown ."+this.get("prevButtonClass")]=function(a){a.preventDefault(),(c||this.get("activeIndex")!=0)&&this.prev()},d["mousedown ."+this.get("nextButtonClass")]=function(a){var b=this.length-1;a.preventDefault(),(c||this.get("activeIndex")!=b)&&this.next()},c||this.on("beforeSwitch",function(b,c){a.updateBtnStatus(b,c)}),d["click ."+i]=function(a){a.preventDefault();var b=a.currentTarget;this.trigger("itemSelected",{item:b})},this.delegateEvents(d)},updateBtnStatus:function(a,b){var c=this.get("disableButtonClass"),d=e(this[g]),f=e(this[h]);d.removeClass(c),f.removeClass(c),a==0&&d.addClass(c),a==this.length-1&&f.addClass(c)}})});