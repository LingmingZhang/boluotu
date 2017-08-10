
var tag=document.getElementById("tag").children; //获取Tag下的li，即Tag标签
var content=document.getElementById("tagContent").children; //获取Tag标签对应的内容
content[0].style.display = "block"; //默认显示第一个标签的内容
var len= tag.length;
for(var i=0; i<len; i++)//无论点击谁都能实现当前显示，其余隐藏
{
  tag[i].index=i;
  tag[i].onclick = function(){//0级DOM的事件句柄注册
    for(var n=0; n<len; n++){
      tag[n].className="";
      content[n].style.display="none";
    }   //首先将全部的div隐藏
    tag[this.index].className = "current";
    content[this.index].style.display = "block";
  }
}