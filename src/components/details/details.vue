<template ref="as">
  <div class="good">
     <div v-show="Load">
            <LoadAnimation></LoadAnimation>
       </div>
      <headerHtml :type="type"></headerHtml>
      <div class="swiperImg">
          <div class="swiper-container">
              <div class="swiper-wrapper">
              <div class="swiper-slide"  v-for="food in data.goods_photo">
                  <img :src="food.goods_main_url" >
                </div>
               
              </div>
          </div>
      </div>
      <div class="sp-content">
      	<!-- {{$route.query}} -->
        <section class='back-f pb-10'> 
                <h4 class="sp-title pl-10 TitleStyle mb-10 pt-10">{{data.goods_name}}</h4>
                <div class="pl-10"><span  class='Presentprice'>￥{{data.app_price}}</span><del style="margin-left: 15px;" class='Originalprice'>￥{{data.market_price}}</del></div>
               <div style="color: #C0C0C0" class="pl-10 mt-10">
               	 运费：￥{{data.freight}} (以实际结算运费价为主)
               </div>
               <div class="pl-10 mt-10" v-if='data.trip' style="color: #C0C0C0">
                   <h3>{{data.trip}}</h3>
                   <div class="shipmentsImg">
                         <img v-if="data.support_channel == '中国海关'" src="../../../static/images/shipments2.png">
                         <img v-if="data.support_channel != '中国海关'" src="../../../static/images/shipments1.png">
                   </div>
                   <div class="shipmentsText">
                        <span class="text-c active" v-if="data.support_channel == '中国海关'">{{data.support_status}}</span>
                        <span class="text-c" v-if="data.support_channel == '中国海关'">{{data.support_channel}}</span>
                        <span class="text-c active" v-if="data.support_channel != '中国海关'">{{data.support_status}}</span>
                        <span class="text-c active" v-if="data.support_channel != '中国海关'">{{data.support_channel}}</span>
                        <span class="text-c">{{data.harvest_address}}</span>
                   </div>
               </div>
       </section>
       <div style="height:30px;" class="favorable box">
                <li class="box-flex box box-pack-c box-align-c">
                    <img src="../../../static/images/dom15.png" >
                    正品保证假一赔十
                </li>
                <li class="box-flex box box-pack-c box-align-c">
                   <img src="../../../static/images/dom16.png" >
                   保税仓发货
                </li>
                <li class="box-flex box box-pack-c box-align-c">
                   <img src="../../../static/images/dom17.png" >
                   支持7天退货
                </li>
       </div>  
       <div class="pt-10 pb-10 border-b-e6 box box-pack-j  back-f mb-10" @click='graphicFn'>
            <div class="box box-align-c pl-10">
                    <span>图文详情</span>
            </div>
            <div class="box box-align-c">
                   <span class='Arrow'></span>
            </div>
       </div>
      <!--  用户评价 -->
       <div class='border-b-e6  border-t-e6 evaluate back-f' >
              <h2>用户评价（0）</h2>
       </div>
       <div class=' back-f'>
       	 <h4 class="h4 pl-10">大家还买了什么</h4>
       	 <div class='o-h'>
       	 	
       	 	  <dl class="sp-dl" v-for="val in data.everybody_buys">
       	 	     <router-link :to="'/details/'+val.goods_id" @click.native="flushCom">
       	 	  
			       	 	  	<dt>
			       	 	  		<img :src="val.goods_main_url" />
			       	 	  	</dt>
			       	 	  	<dd>
			       	 	  		<h5>{{val.goods_name}}</h5>
			       	 	  		<p>￥{{val.app_price}}<del>￥{{val.market_price}}</del></p>
			       	 	  	</dd>
       	 	  		
       	 	  	 </router-link>
       	 	  </dl>
       	 	
       	 </div>
       	<!--   <router-link to="/address">
       	 <button>地址</button>
       	  </router-link> -->
       </div>
      <!--  <img v-for="img in imgs" :src="img" />-->
     
      </div>
      <div class='footter box'>
          <div class="box-flex pl-10" style="line-height:45px">
            ￥{{data.app_price}}
          </div>
          <div class="goBtn text-c">
              立即购买
          </div>
      </div>
      <div>
          <graphicDetails ref='graphic'></graphicDetails>
      </div>
  </div>
   
</template>  
<script type="text/ecmascript-6">
 import headerHtml from '../header/header.vue';
 import $ from '../../../static/js/jquery.js';
 import Global from '../function/Global.vue';
 import swiper from '../../../static/js/swiper.min.js'; 
 import graphicDetails from './graphicDetails.vue';
 import LoadAnimation from '../function/LoadAnimation.vue';
 import url from '../../Api/url.js';

 
  export default {
  
    data() {
       return {
          scroll: '',
          data:"",
          type:"details",
          user_id:'',
          goods_id:'',
          Load:true
       };
    },
    beforeMount(){
       
    },
    
    mounted(){

     let goods_id = this.$route.params.id;
      this.init(goods_id);


    
        
        
        	
        
        	
        
      /*let that = this;
      $.ajax({
        url:"https://ywapi.youngworld.com.cn/server.php/product_details",
        type:"post",
        data:{
          goods_id:605
        },
        dataType:"json",
        success:function(e){
          
        }
      });*/
     
      
    },
    updated:function(){
    	       
    },
    methods:{
            
            init(goods_id){
                   this.user_id =  Global.Cookie.get('user_id');
                   let that = this;
                  
                   let data = {
                                      'goods_id' : goods_id
                                   };
                    if( this.user_id !=''){
                        data.user_id =  this.user_id;
                    };    

                    this.$http.post(url.url+"product_details",data,{emulateJSON:true}).then(
                          function (res) {
                         
                            that.data = res.body.data;
                            that.$nextTick(function(){
                              let mySwiper = new swiper('.swiper-container', {
                                       autoplay: 5000,//可选选项，自动滑动
                                 })
                                         $('html,body').scrollTop(0);
                                         this.Load = false;
                            })
                          },function (res) {
                          // 处理失败的结果
                          }
                     );
            },
	      chilFn (msg) {
	　　    alert(msg)
	　　},
		 flushCom () {
			　this.$router.go(0);  
		 },
             graphicFn(){
                      this.$refs.graphic.show(this.$route.params.id);
             },
            getStatus (urlStr) {
                    var urlStrArr = urlStr.split('/')
                    return urlStrArr[urlStrArr.length - 1]
            }
    },
     watch: {
         '$route' (to, from) {
            this.Load = true;
            this.init(this.getStatus(this.$route.path));
         }
    },
    components: {
     headerHtml,
     graphicDetails,
     LoadAnimation
    }
  };
</script>
<style  lang='less'>
   .good{
   	  height: 1000px;
   }
   .swiperImg{
    width: 100%;
    overflow: hidden;
   }
   .swiperImg img{
        display: block;
        width: 100%;
        height: auto;
   }
   .sp-dl{
   	    width: 33.33%;
        float: left;
   }
   .sp-dl dt {
    text-align: center;
}
.sp-dl dt img{
	    width: 74px;
    height: 74px;
    display: block;
    margin: 0 auto;
}
.sp-dl dd {
    width: 80%;
    margin: 0 auto;
}
.sp-dl dd h5{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    font-size: 14px;
}
.sp-dl dd p{
	font-size: 14px;
}
h4{
   text-align:left
}
.package{
  background:#FFFFFF;
  padding: 5px 0;
  border-right: none;
  border-left: none;
}
.footter{
  width: 100%;
  height: 45px;
  position: fixed;
  border-top: 1px solid #cccccc;
  left: 0px;
  bottom: 0px;
  background: #f8f8f8;
}
.sp-content{
  padding-bottom: 45px;
}
.goBtn{
    width: 100px;
    background: #F99800;
    line-height: 45px;
    color: #fff;
}
.vipBox{
   font-weight: bolder;
   font-size: 18px;
   color: red;
}
.imgLabel{
  display: block;
  width: 24px;
  height: 24px;
  margin-left: 10px;
}
.imgLabel img{
  border-radius: 100%;
}
.imgLabel+span{
  margin-left: 15px;
}
.Arrow{
   background: url('../../../static/images/Arrow.png') no-repeat right center;
   background-size: 8px auto;
   margin-right: 10px;
   padding-right: 15px;
}
.evaluate{
   padding: 10px;
} 
.evaluate h2{
     font-weight: bolder;
     font-size: 16px;
}
.shipmentsImg{
  margin-top: 10px;
  img{
    width: 2.68rem;
    margin: 0 auto;
    display: block;
  }
}
.shipmentsText{
  overflow: hidden;
  margin-top: 10px;
  span{
    display: block;
    float:left;
    width: 33.33%;
  }
  span.active{
    color: #ff9600;
  }
}
.favorable{
  img{
     display: block;
     width: 13px;
     height: auto;
  }
}
</style>