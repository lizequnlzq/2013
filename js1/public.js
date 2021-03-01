//每个页面的开头
var head1=document.querySelector(".head1")
//每个页面的结尾
var foot1=document.querySelector(".foot1")
var body1=document.querySelector("body")
head1.innerHTML=`<div class="head">
<div id="box">
  <ul>
    <li>1件包邮</li>
    <li><a href="../pages1/sign in.html">亲，请登录</a></li>
    <li><a href="../pages1/register.html">免费注册</a></li>
    <li><span class="iconfont">&#xe61b;</span>搜索</li>
    <li><span class="iconfont">&#xe607;</span>购物车<span>0</span>件</li>
    <li><span class="iconfont">&#xe6b5;</span>我的订单</li>
    <li class="iconfont icon-erji">专属导购</li>
    <li>关注JACKJONES微信</li>
    <li>手机购物</li>
  </ul>
</div>
</div>
<div class="nav">
<div id="box">
  <ul>
    <li><img src="../img1/logo.png" alt="牌子"></li>
    <li> <a href="../pages1/home.html">首页</a> </li>
    <li><a href="../pages1/list.html">冬季甄选</a></li>
    <li><a href="../pages1/list.html">王者荣耀IP</a></li>
    <li><a href="../pages1/list.html">Jack&Jones系列</a></li>
    <li><a href="../pages1/list.html">Jl系列</a></li>
    <li><a href="../pages1/list.html">core系列</a></li>
    <li><a href="../pages1/list.html">Editorial</a></li>
    <li>会员中心</li>
  </ul>
</div>
</div>
<div class="kong">
    <div id="box"></div>
  </div>
`
foot1.innerHTML=`<div class="meau">
<div id="box">
  <dl class="d1">
    <dt class="iconfont icon-ziliao"></dt>
    <dd>用户服务协议及隐私政策</dd>
    <dd>点击查看</dd>
  </dl>

    <dl class="d2">
      <dt><img src="../img1/exclusiveConsultant.jpg" alt=""></dt>
      <dd>专属时尚顾问</dd>
    </dl>
    <dl class="d3">
      <dt><img src="../img1/applet.png" alt=""></dt>
      <dd>小程序</dd>
    </dl>
    <dl class="d4">
      <dt><img src="../img1/WeChat.png" alt=""></dt>
      <dd>官方微信</dd>
    </dl>

  <dl class="d5">
    <dt class="iconfont icon-dianhua"></dt>
    <dd>售后服务热线
    <br/>400-862-8888
    <br/>服务时间：9:00-21:00</dd>
  </dl>
</div>
</div>
<div class="footer">
<div id="box">
  <ul>
    <li><a href="https://www.selected.com.cn/" target="_blank"><img src="../img1/logo-footer.png" alt=""></a></li>
    <li><a href="https://www.only.cn/" target="_blank"><img src="../img1/logo-footer(1).png" alt=""></a></li>
    <li><a href="https://www.veromoda.com.cn/" target="_blank"><img src="../img1/logo-footer(2).png" alt=""></a></li>
  </ul>
  <br>
  <ol>
    <li>&copy;2013 Bestseller.All Rights Reserved</li>
    <li><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=12011402000593" target="_blank"><img src="../img1/bah.png" alt="">津公网安备12011402000593号</a></li>
    <li>违法和不良信息举报电话：12377</li>
    <li>津ICP备12007886号-1(营业执照)</li>
  </ol>
</div>
</div>
<div class="daogou">
  <ul>
    <li>添加您的专属微信时尚顾问</li>
    <li>一对一<span>售前售后</span>专属服务</li>
    <li>定期<span>超级福利</span>大放送</li>
    <li><img src="../img1/exclusiveConsultant.jpg" alt=""></li>
    <li>打开微信“扫一扫”</li>
    <li>添加您的专属时尚顾问</li>
    <li>统一客服热线 400-862-8888</li>
  </ul>
</div>
<div class="weixin">
  <ul>
    <li><img src="../img1/WeChat.png" alt=""></li>
    <li>微信扫一扫关注 <br/>第一时间了解品牌资讯！</li>
  </ul>
</div>
<div class="sjgw">
  <ul>
    <li><img src="../img1/applet.png" alt=""></li>
    <li>微信扫一扫购物<br/>众多潮流单品助你焕新造型！</li>
  </ul>
</div>`
var daogou=document.querySelector(".daogou")
var weixin=document.querySelector(".weixin")
var sjgw=document.querySelector(".sjgw")
daogou.onmouseover=function(){
  // console.log(1)
  daogou.style.display="block"
}
daogou.onmouseout=function(){
  // console.log(1)
  daogou.style.display="none"
}
weixin.onmouseover=function(){
  // console.log(1)
  weixin.style.display="block"
}
weixin.onmouseout=function(){
  // console.log(1)
  weixin.style.display="none"
}
sjgw.onmouseover=function(){
  // console.log(1)
  sjgw.style.display="block"
}
sjgw.onmouseout=function(){
  // console.log(1)
  sjgw.style.display="none"
}
//鼠标滑入事件
head1.onmouseover=function(e){
  // console.log(1)
  var e = e || window.event
    //获取点击对象
  var target=e.target || e.srcElement
//判断当前滑入的
  if(target.innerHTML=="专属导购"){
    daogou.style.display="block" 
  }else{
    daogou.style.display="none"
  }
  if(target.innerHTML=="关注JACKJONES微信"){
    weixin.style.display="block"
  }else{
    weixin.style.display="none"
  }
  if(target.innerHTML=="手机购物"){
    sjgw.style.display="block"
  }else{
    sjgw.style.display="none"
  }
}

















