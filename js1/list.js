//获取操作对象
var row=document.querySelector('.row');
var pagination1=document.querySelector('.pagination');
(async function(){
    var dt=await promiseAjax({
        url:'../php1/list.php',
        datatype:'json'
    })
    //创建分页器对象
    new Pagination(pagination1,{
        pageInfo:{
            pagenum:1,
            pagesize:9,
            totalsize:dt.length,
            totalpage:Math.ceil(dt.length/9)
        },
        textInfo:{
            first:'首页',
            prev:"上一页",
            next:"下一页",
            last:"尾页"
        },cb(m){
            //获取当前页需要显示的数据
            var ar1=dt.slice((m-1)*9,m*9)
            //创建拼接所有数据的字符串
            var str=''
            //遍历当前ar1数组中所有的数据
            ar1.forEach(item=>{
                str+=`
                <dl class="wares">
                    <dt><img src="${item.img}" alt=""></dt>
                    <dd style="margin-top: 20px;">${item.title}</dd>
                    <dd><strong>${item.price}</strong><em>${item.pricetwo}</em><span>${item.discount}</span></dd>
                    <p class="ppp" class="pp"><a href="../pages1/detail.html?id=${item.id}">查看详情</a></p>
                </dl>
                `
            })
            //把当前拼接好的字符串，添加到row盒子中
            row.innerHTML=str
            var wares1=document.querySelectorAll(".wares")
            console.log(wares1)
            var p1=document.querySelectorAll(".ppp")
            console.log(p1)
            //给下面五张小图片绑定点击事件
            for(let i=0;i<wares1.length;i++){
                wares1[i].onmousemove=function(){
                    // for(var j=0;j<wares1.length;j++){     
                    p1[i].className='pp'
                    // }
                }
                wares1[i].onmouseout=function(){
                    // for(var j=0;j<wares1.length;j++){     
                    p1[i].className='ppp'
                    // }
                
                }
            }
        }
    })
    
    
})()
