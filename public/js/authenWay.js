/**
 * Created by Administrator on 2017/4/20 0020.
 */
(function($){
  $.fn.extend({
    /*垂直于父元素*/
    "verticalCenter":function(options){
      var defaults = {"parent":this.parent(),"child":this};
      var opts = $.extend(defaults,options);
      opts.parent.css("position","relative");
      opts.child.css({
        "position":"absolute",
        "top":"50%","left":"50%",
        "margin-left":-opts.child.width()/2+"px",
        "margin-top":-opts.child.height()/2+"px"
      });
      return this;
    },
    /*超出浏览器高度采用body的高度*/
    outBowserH:function(options){
      var defaults = {"eleH":this.height(),"bowserH":$(window).height(),"cunNumber":0};
      var opts = $.extend(defaults,options);
      if(opts.eleH>opts.bowserH){
        this.height(opts.eleH-opts.cunNumber+"px");
      }else{
        this.height(opts.bowserH-opts.cunNumber+"px");
      }
      return this;
    }
  });
})(jQuery);