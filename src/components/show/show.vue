<template>
	<div id="content">
                 <div v-show="Load">
                    <LoadAnimation></LoadAnimation>
                </div>
	    <swiperHTML :bannner=bannner></swiperHTML>
	    <div class="swiperText">
	   	<div class="swiper-container2">
			  <div class="swiper-wrapper">
				       <div class="swiper-slide"  v-for="v in sy_notice">
                                                                <a :href="v.notice_val">{{v.notice_theme}}</a>
                                                       </div>
			  </div>
		</div>
	    </div>
                <div class="downloda">
                     <a href="#">下载洋窝儿APP，更多跨境商品等你来</a>
                </div>
                <div class="borderBox borderPadding back-f">
                       <h3 class="text-c one_Title"><span>超值新品<img src="../../../static/imgs/NEW.png"></span></h3>
                       <h4 class='text-c'>新品上线     时时购</h4>
                       <div class="box newBox">
                                       <div class='box-flex' v-for='v in sy_jrsx'>
                                                        <router-link :to="'/details/'+v.goods_id" @click.native="flushCom">
                                                                    <commodity :xsqg='v'></commodity>
                                                        </router-link>
                                       </div>
                       </div>
                </div>
                 <div class="borderBox borderPadding back-f">
                       <h3 class="text-c one_Title"><span>爆款热卖<img src="../../../static/imgs/NEW.png"></span></h3>
                       <h4 class='text-c'>高端好货     值得买</h4>
                       <div class="box newBox">
                                       <div class='box-flex' v-for='v in sy_dsbm'>
                                                        <router-link :to="'/details/'+v.goods_id" @click.native="flushCom">
                                                                    <commodity :xsqg='v'></commodity>
                                                        </router-link>
                                       </div>
                       </div>
                </div>
                <div class="borderBox sy_zqlb back-f">
                       <div class="swiper-container3">
                                      <div class="swiper-wrapper">
                                                    <div class="swiper-slide" v-for='v in sy_zqlb'><img :src='v.special_img' class="img"></div>
                                      </div>
                        </div>
                 </div>







         <div class="show_content back-f">
             <div class="show_content_list borderBox" v-for='v in sy_syfl'>
                     <div class='img-box'>
                         <router-link :to="'ClassifyDetails?category_id='+v.category_id+'&category_name='+v.category_name">
                                <img :src='v.category_image' class="img">
                         </router-link>   
                     </div>
                     <div class="textNav">
                        <div class="swiper-container4">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide text-c" v-for='y in v.category_keyword'>
                                    <a href="#" class='border-a'>{{y.category_keyword}}</a>
                                </div>
                        </div>
                    </div>
                     </div>
                     <div class='pb-10'>
                             <div class="swiper-container3">
                                          <div class="swiper-wrapper">
                                                   <div class="swiper-slide"  v-for="y in v.category_names">
                                                             <router-link :to="'/details/'+y.goods_id" @click.native="flushCom">
                                                                          <commodity :xsqg='y' :back='"1"'></commodity>
                                                             </router-link>          
                                                    </div>
                                          </div>
                                </div>
                     </div>
             </div>
            <!--  <div class="show_content_list" v-for='v in sy_ppmk'>
                 <div class='img-box'>
                           <img :src='v.home_brand_image' class="img">
                 </div>
                 <div>
                      <div class="swiper-container3">
                              <div class="swiper-wrapper">
                                       <div class="swiper-slide"  v-for="y in v.brand_goods">
                                            <router-link :to="'/details/'+y.goods_id" @click.native="flushCom">
                                                        <dl>
                                                                <dt>
                                                                    <img :src="y.goods_main_url" class='img'>
                                                                </dt>
                                                                <dd>
                                                                        <p>{{y.goods_name}}</p>
                                                                        <p>
                                                                            <span>￥{{y.app_price}}</span>
                                                                            <span style="color:red;font-size:10px">￥{{y.market_price}}</span>
                                                                        </p>
                                                                </dd>
                                                        </dl>
                                              </router-link>          
                                        </div>
                              </div>
                        </div>
                 </div>
             </div> -->
         </div>
         <footerHTML :type='type'></footerHTML>
	</div>
</template>
<script type="text/ecmascript-6">
    import swiper from '../../../static/js/swiper.min.js'; 
    import swiperHTML from '../function/swiper.vue';
    import LoadAnimation from '../function/LoadAnimation.vue';
    import footerHTML from '../footer/footer.vue';
    import commodity from '../../common/commodity.vue';
    import url from '../../Api/url.js';
    import Global from '../function/Global.vue';
    export default {
        data() {
            return {
                scroll: {},
                data:"",
                text:"首页",
                bannner:"",
                sy_notice:"",
                sy_jrsx:'',
                sy_dsbm:'',
                sy_zqlb:'',
                sy_syfl:'',
                Load:true,
               
               
                sy_ppmk:'',
                type:"1"
            };
        },
        created(){

                this.$http.post(url.url+"sy_back",{emulateJSON:true}).then(
                            function (res) {
                           
                                let data = res.body.data;
                                this.Load = false;
                                this.bannner=data.bannner;
                                this.sy_notice = data.sy_notice;
                                this.sy_jrsx = data.sy_jrsx;
                                this.sy_dsbm = data.sy_dsbm;
                                this.sy_zqlb = data.sy_zqlb;
                                this.sy_syfl = data.sy_syfl;
                                // this.sy_xsqg = data.sy_xsqg;
                                // ;
                                // this.sy_ppmk = data.sy_ppmk;
                                // 
                                // 
                                this.$nextTick(function(){
                                    Global.reset.LazyLoadImg("#content")
                                     new Swiper('.swiper-container',{
                                                  autoplay:5000,
                                                  loop:true
                                    });
                                     new Swiper('.swiper-container2',{
                                                  autoplay:3000,
                                                  loop:true,
                                                  direction:'vertical'
                                    });
                                    new Swiper('.swiper-container3',{
                                                 slidesPerView : 2.5
                
                                    });
                                     new Swiper('.swiper-container4',{
                                                 slidesPerView : 4.5
                
                                    });
                                 })
                            },function (res) {
                            // 处理失败的结果
                            }
                        ); 
        },

        mounted(){
          
        
             


        //     var mySwiper = new Swiper('.swiper-container2', {

        // autoplay: 5000,//可选选项，自动滑动
        // direction : 'vertical',
        // loop : true,
        // autoplayDisableOnInteraction : false

        //     })

        },
        updated:function(){

        },
        methods:{
            flushCom () {
                    　this.$router.go(0);  
             }
        },
        components: {
            swiperHTML,
            LoadAnimation,
            footerHTML,
            commodity
        }
    };
</script>
<style lang='less'>
    body {
            font-size: 14px;
    }
    .swiperText{
    	height: 40px;
    	width: 100%;
    	overflow: hidden;
    	line-height: 40px;
    	padding-left: 50px;
            background: url('../../../static/imgs/Radio.png') no-repeat 13px center #fff;
            background-size: 25px  auto;
    }
    .swiper-container2 .swiper-slide{
    	height: 25px;
    }
    .borderBox{
      border-top: 10px solid #f5f5f5;
    }
    .borderPadding{
        padding: 12px;
    }
    .one_Title{
        font-weight: bold;
        font-size: 18px;
        line-height: 18px;
        margin-top: 10px;
        margin-bottom: 5px;
    }
    .one_Title span{
        position: relative;
    }
     .one_Title span img{
        position: absolute;
        width: 30px;
        height: auto;
        top: -10px;
        right: -30px;
     }
     .newBox{
        margin-top: 10px;
     }
     .newBox a{
        display: block;
     }
     .newBox div{
        margin-right: 10px;
     }
     .newBox div:last-child{
        margin-right: 0;
     }

     .textNav{
        height: 25px;
        margin-top: 10px;
     }






    .newBox section{
        padding: 10px;

    }
    .newBox section:last-child{
        padding-left: 5px;
    } 
    .newBox section:first-child{
        padding-right: 5px;
    }  
    .sy_zqlb{
        padding-top: 10px;
        padding-left: 10px;
        padding-bottom: 10px;
    }
    .sy_zqlb .swiper-slide{
         padding-right: 10px;
    }
    .img{
        width: 100%;
        height:auto;
        display: block;
    }
    .border-a{
        border: 1px solid #ccc;
        border-radius:12px;
        line-height: 25px;
        padding:3px 8px;
    }
    .show_content{
        padding-bottom: 45px;
    }
    .downloda{
        width: 100%;
        height: 44px;
        background: #fff;
        padding-top: 7px;
        margin-top: 10px;
        a{
            height: 30px;
            width: 90%;
            margin: 0 auto;
            text-align: center;
            color: #fff;
            background: #ff9600;
            display: block;
            border-radius: 15px;
            line-height: 30px;
        }
    }
</style>
