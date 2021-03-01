//获取操作对象
var mark=document.querySelector(".mark")
var boxright=document.querySelector(".boxright")
var divImgs=document.querySelector(".tpjh")

var box=document.querySelector(".xzjh")


var boxImg=box.querySelector("img")
var imgs=divImgs.querySelectorAll("img")
var rightImg=boxright.querySelector("img")



//给左边大盒子对象绑定三个事件
box.onmouseover=function(e){
    //让隐藏的内容显示
    mark.style.display="block"
    boxright.style.display='block'
}
//移动
box.onmousemove=function(e){
    var e = e||window.event
    move(e)
}
//移出
box.onmouseout=function(){
    //让显示的内容隐藏
    mark.style.display="none"
    boxright.style.display='none'
}

//移动函数
function move(e){
     //获取当前移动距离
     var x1=e.pageX-box.offsetLeft-120-parseInt(mark.offsetWidth/2)
     var y1=e.pageY-box.offsetTop-129-parseInt(mark.offsetHeight/2)
    //  console.log(box.offsetTop)
    //     console.log(e.pageY)
     //设置移动范围
     var maxX=box.offsetWidth-mark.offsetWidth
     var maxY=box.offsetHeight-mark.offsetHeight
     //右边图片的移动
     var rightX,rightY
     //水平判断
     if(x1<=0){
         mark.style.left="0px"
         rightX=0
     }else if(x1>=maxX){
         mark.style.left=maxX+"px"
         rightX=maxX
     }else{
         mark.style.left=x1+"px"
         rightX=x1
     }

     //垂直方式
     if(y1<=0){
         mark.style.top="0px"
         rightY=0
     }else if(y1>=maxY){
         mark.style.top=maxY+'px'
         rightY=maxY
     }else{
         mark.style.top=y1+'px'
         rightY=y1
     }
     //让右边图片进行移动
     rightImg.style.top=-3.1*rightY+'px'
     rightImg.style.left=-3*rightX+'px'
}
//给下面五张小图片绑定点击事件
for(var i=0;i<imgs.length;i++){
    imgs[i].onclick=function(){
        //先把所有的图片边框去掉
        for(var j=0;j<imgs.length;j++){
            imgs[j].className=''
        }
        //给当前选中对象添加边框
        this.className='imgborder'
        //获取当前点击的图片地址
        var url1=this.getAttribute("src")
        //分别修改左右两个盒子中的图片路径
        boxImg.setAttribute('src',url1)
        rightImg.setAttribute('src',url1)
    }
}
