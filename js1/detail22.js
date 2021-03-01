//获取当前地址栏中的参数信息
var search=location.search
//获取大盒子对象
var BOX=document.querySelector(".main1")
var dt;

//判断当前search对象中是否有值
if(search){
    //分割search字符串
  
    var id=search.split('=')[1];
    // console.log(id)
    (async function(){
        dt=await promiseAjax({
            url:'../php1/detail.php',
            data:'id='+id,
            datatype:'json'
        })
        //创建拼接所有内容的字符串
        // console.log(1)
        var str=`
        <h6 class="road">首页/全部商品/<span>${dt.title}</span></h6>
        <div class="xqdy">
            <div class="xqxy">
                <div class="tpjh">
                    <ul>
                        <li><img src="${dt.img}" alt="" class="imgborder"></li>
                        <li><img src="https://cdn.bestseller.com.cn/goodsImagePC/JACKJONES/220427030/220427030E04/313500/220427030E04_p3.jpg" alt=""></li>
                        <li><img src="https://cdn.bestseller.com.cn/goodsImagePC/JACKJONES/220427030/220427030E04/313500/220427030E04_p3.jpg" alt=""></li>
                        <li><img src="https://cdn.bestseller.com.cn/goodsImagePC/JACKJONES/220427030/220427030E04/313500/220427030E04_p3.jpg" alt=""></li>
                    </ul>
                </div>
                <div class="xzjh">
                    <img src="${dt.img}" alt="">
                    <div class='mark'></div>
                </div>
                <div class="boxright">
                    <img src="${dt.img}" alt="">
                </div>
                <div class="jsy">
                    <h2>${dt.title}</h2>
                    <p>产品编号:220427030E04</p>
                    <div class="neirong">
                        <ul>
                            <li>价格<strong>${dt.price}</strong><em>${dt.pricetwo}</em><span>${dt.discount}</span></li>
                            <li>本店活动    满一件，包邮</li>
                        </ul>
                    </div>
                    <div class="slgs">
                        <span>数量</span>
                        <input class="aa" type="button" value="-">
                        <input class="cc" type="text" name="wenben" value="1">
                        <input class="aa" type="button" value="+">
                    </div>
                    <div class="jgwc"> <span class="iconfont icon-gouwuche"></span> <a href="javascript:;">加入购物车</a></div>
                    <div class="ljgm"><a href="../pages1/carts.html">立即购买</a></div>
                    
                </div>
            </div>
        </div>
        <div class="shopings">
            <div class="list">
                <ul>
                    <li>2月22日直播专区</li>
                    <li>每周折扣抢先</li>
                    <li>每周新品NEW</li>
                    <li>爆款HOT</li>
                    <li>IP联名系列</li>
                    <li>限量推荐款</li>
                    <li>精选折扣专区</li>
                    <li>线上专享款</li>
                    <li>男鞋</li>
                    <li>配饰</li>
                </ul>
            </div>
            <div class="right">
                <ul>
                    <li><img src="https://cdn.bestseller.com.cn/goodsImagePC/JACKJONES/220427030/description/1610956754076.jpg" alt=""></li>
                    <li>
                    <p>可拆卸抽绳连帽立领/按扣拉链双侧门襟/胸前撞色字母胶印印花</p>
                    <img src="${dt.img}" alt="">
                    </li>
                    <li><img src="https://cdn.bestseller.com.cn/goodsImagePC/JACKJONES/220427030/description/1603439867179.jpg" alt=""></li>
                    <li><img src="https://cdn.bestseller.com.cn/goodsImagePC/JACKJONES/220427030/description/1603439868386.jpg" alt=""></li>
                    <li><img src="https://cdn.bestseller.com.cn/assets/h5/JACKJONES/image/markWashing.jpg" alt=""></li>
                </ul>
            </div>
        </div>
        `
        //把当前内容添加到大盒子中
        BOX.innerHTML=str;
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

    })()
    
}
else{
    alert("你还没选中商品")
    location="./list.html"
}

// 给大盒子对象绑定点击事件
BOX.onclick=function(e){
   
    var e = e || window.event
    //获取点击对象
    var target=e.target || e.srcElement
    //判断点击的对象是否为加入购物车按钮
    if(target.innerHTML=="加入购物车"){
        console.log(22);
        //获取localStorage中的cartList3
        var cartList=localStorage.getItem("cartList3")
        //判断当前获取的cartList是否存在
        if(cartList){
            //把localStorage中获取的内容转为数组对象
            cartList=JSON.parse(cartList)
            var a=0 //判断当前添加的商品是否在localStorage中存在
            //遍历数组中所有元素啊
            cartList.forEach(item=>{
                //判断当前遍历的商品是否等于要添加的商品
                if(item.id==dt.id){
                    a++
                    item.cart_number++
                }
            })
            //判断a变量是否等于0
            if(a==0){
                //修改商品数量
                dt.cart_number=1
                //把当前对象追加到数组中
                cartList.push(dt)
            }
            //把当前商品添加到localStorage中
            localStorage.setItem("cartList3",JSON.stringify(cartList))
        }else{
            //修改当前商品数量
            dt['cart_number']=1
            //把当前商品添加到localStorage中
            localStorage.setItem("cartList3",JSON.stringify([dt]))
        }

    }  
    




}