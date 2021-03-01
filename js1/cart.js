//获取账号cookie
var name1=getCookie("user")
//获取大盒子对象
var box=document.querySelector(".cart")
//获取地址栏中的地址
var url=location.href
//获取localStorage中的cartList3
var cartList=localStorage.getItem("cartList3")
//把当前cartList字符串转为数组对象
cartList=JSON.parse(cartList)||[]
//判断当前cookie是否存在
if(name1){
    show()
}else{
    alert("你还没登录，请登录在进入")
    location="../pages1/sign in.html?pathUrl="+url
}
function show(){
    //判断当前localStorage中是否有内容
    if(cartList.length>0){
        //获取全选框是否被选中
        var aa=cartList.every(item=>{
            //判断当前商品是否被选中
            return item.is_select==1
        })
        //获取当前被选中商品的种类和价格
        var sum=total()
        var str2=`
        <h3>购物车</h3>
        <a href="../pages1/list.html" style="font-size: 40px; float: right;">接着买</a>
        <div class="pagehead"> 
            <span>全部商品 <strong>${cartList.length}</strong>"|"</span>
            <span> 库存紧张</span>
        </div>
        <div class="header1">
            <h4 class="width1"><input type="checkbox"name="quanxuan" value="全选"${aa?"checked":''}>全选</h4>
            <h4 class="width2">商品信息</h4>
            <h4 class="width3">数量</h4>
            <h4 class="width4">金额</h4>
            <h4>操作</h4>
        </div>
        <div class="shopss">
        `
        //遍历数组中所有商品
        cartList.forEach(item=>{
            str2+=`
            <div class="content">
                <h4 class="width1">
                    <input type="checkbox" ${item.is_select==1?"checked":''} name="xuan" data-id="${item.id}">
                    <img src="${item.img}" alt=""></h4>
                </h4>
                
                <h4 class="width2">
                    <p>${item.title}</p>
                    <p>221162016 | 221162016</p>
                </h4>
                <h4 class="width3">
                <button type="button" class="btn btn-default" data-id="${item.id}" ${item.cart_number<=1?"disabled":''}>-</button>
                <button type="button" class="btn btn-default">${item.cart_number}</button>
                <button type="button" class="btn btn-default" data-id="${item.id}" ${item.goods_number<=item.cart_number?"disabled":''}>+</button> 
                </h4>
                <h4 class="width4">${item.price}</h4>
                <h4><button class="btn btn-info" data-id="${item.id}">删除</button></h4>
            </div>
            
            `
        })
        str2+=`</div>
        <div class="footer1">
            <h4 class="qq"><input type="checkbox"name="quanxuan" value="全选"${aa?"checked":''}>全选</h4>
            <h4 class="ww">已选商品：<span>${sum[0]}</span>件</h4>
            <h4 class="ee">合计(不含运费): <span>${sum[1]}</span></h4>
            <h4 class="rr">结算</h4>
        </div>`
        
        //给当前字符串拼接结束的标签
        // str2+='</div>'
        //最后把拼接好的内容添加到box大盒子中
        box.innerHTML=str2
    }else{
        var str1=`
          <div class="jumbotron">
              <h1>您的购物车空空如也</h1>
              <p>点击下方按钮快去选购吧! ^_^</p>
              <p><a class="btn btn-primary btn-lg" href="./list.html" role="button">赶紧去选吧</a></p>
          </div>
        ` 
        //把当前内容添加到box盒子中
        box.innerHTML=str1
        
    }
}

//给box大盒子对象绑定点击事件
box.onclick=function(e){
    console.log(box)
    var e = e || window.event
    //获取点击对象
    var target=e.target || e.srcElement
    //判断当前点击的是否为+
    if(target.innerHTML=="+"){
        //获取当前对象中的id属性
        var id=target.getAttribute("data-id")
        //遍历cartList数组对象
        cartList.forEach(item=>{
            //判断遍历出来的商品是否为当前操作商品
            if(item.id==id){
                item.cart_number++
            }
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList3",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }
    //判断当前点击的是否为减法按钮
    if(target.innerHTML=='-'){
        //获取当前对象中的id属性
        var id=target.getAttribute("data-id")
        //遍历cartList数组对象
        cartList.forEach(item=>{
            //判断遍历出来的商品是否为当前操作商品
            if(item.id==id){
                item.cart_number--
            }
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList3",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }
    //删除
    if(target.innerHTML=="删除"){
        //获取当前点击对象的id
        var id=target.getAttribute("data-id")
        cartList=cartList.filter(item=>{
            //过滤被删除的商品
            return item.id!=id
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList3",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }
    //全选
    if(target.name=="quanxuan"){
        //遍历所有商品
        cartList.forEach(item=>{
            //判断当前全选框是否被选中
            if(target.checked){
                item.is_select=1
            }else{
                item.is_select=0
            }
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList3",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }
    //选中框
    if(target.name=="xuan"){
        //获取当前商品对应的id 
        var id1=target.getAttribute("data-id")
        //遍历数组中所有的商品对象
        cartList.forEach(item=>{
           if(item.id==id1){
            //   //判断当前选中框是否被选中
            //   if(item.is_select==1){
            //       item.is_select=0
            //   }else{
            //       item.is_select=1
            //   }
            item.is_select=item.is_select==1?"0":"1"
           }
       })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList3",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }
    //去结算
    if(target.innerHTML=="结算"){
        //添加确认框
        if(confirm("你确定要购买吗？")){
            alert("你需要支付：￥"+total()[1])
            cartList=cartList.filter(item=>{
                return item.is_select!=1
            })
            //重新把当前操作完毕的数组添加到localStorage中
            localStorage.setItem("cartList3",JSON.stringify(cartList))
            //调用show方法，重新把页面再次渲染
            show()
        }
    }
    //清空购物车
    // if(target.innerHTML=="清空购物车"){
    //     //重新把当前操作完毕的数组添加到localStorage中
    //     localStorage.setItem("cartList3",JSON.stringify([]))
    //     //调用show方法，重新把页面再次渲染
    //     show()
    // }

}
//统计所选商品种类和价格
function total(){
    var num=0 //所选商品种类
    var price=0 //所选商品总价格
    //遍历cartList数组对象
    cartList.forEach(item=>{
        //判断当前商品是否被选中
        var price2=item.price
        // var price22=price2.replace(/[^\d\.]/g,'');

        if(item.is_select==1){
            num++
            price+=item.cart_number*Math.floor(price2)
        }
    })
    return [num,price]
}