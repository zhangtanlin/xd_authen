/**
 * Created by Administrator on 2017/4/19 0019.
 */
$(function(){
  /*【管理中心】底部内容垂直居中*/
  $("#admin_footer").children("span").verticalCenter();


  /*【管理中心】内容部分高度*/
  $("#admin_center").outBowserH({"cunNumber":130});
  /*【管理中心】右侧文档宽度*/
  $("#admin_content").width($(window).width()-250+"px");
  /*浏览器窗口拉伸时*/
  $(window).resize(function(){
    /*【管理中心】底部内容垂直居中*/
    $("#admin_footer").children("span").verticalCenter();
  })
});