<template>
	<div class="login_box">
		<headerHtml  :type=type ref="header"></headerHtml>
          <div class="logoImg">
                 <div></div>
           </div>
           <form class="MyForm box mt-30 box-pack-c">
               <ul>
                  <li class="box box-pack-c box-align-c">
                    <input type="text" class="Mytext userName" placeholder="请输入手机号" v-model='userName'>
                  </li>
                  <li class="box box-pack-c box-align-c">
                    <input type="password" class="Mytext Mypassword" placeholder="请输入密码" v-model='Mypassword' >
                    <a href="javascript:;" class="pasBtn" id="pasBtn"></a>
                  </li>
                  <li class="loginBtn box box-pack-c box-align-c" @click='login'>登录</li>
                  <li class="forgetBtn box box-pack-c box-align-c"><a href="forgetPass.html">忘记密码</a></li>
               </ul>
         </form>
         <transition name="bounceUp" tag="ul" class="list-group">
              <div v-show="bool" style="color:#fff" class="Prompt text-c">{{PromptText}}</div>
         </transition>

	</div>
</template>	
<script type="text/ecmascript-6">
  import headerHtml from '../header/header.vue';
  import Global from '../function/Global.vue'
  export default {
  	
  	 data() {
               return {
                   type:'login',
                   userName:'',
                   Mypassword:'',
                   bool:false,
                   PromptText:''
               };
      },
     mounted(){
         
     },
     methods:{
          login(){
                let userName = this.userName.trim();
                let Mypassword = this.Mypassword.trim();
                let data = {
                   user_phone:userName,
                   user_pwd:Mypassword
                };
               if(userName.length == 0 || Mypassword == 0){
                  this.bool = true;
                  this.PromptText = '请输入账号密码不能为空';
                  let that = this;
                  setTimeout(function(){
                     that.bool = false;
                  },1500)
                  return false;
               }
               let that = this;
                this.$http.post("https://ywapi.youngworld.com.cn/server.php/login",data,{emulateJSON:true}).then(
                          function (res) {
                                  let data = res.body.data;
                                  if( res.body.code == '10000'){
                                      let user_id = data.user_id;
                                      Global.Cookie.set('user_id',user_id,7);
                                      this.$refs.header.back();
                                    }else{
                                            that.bool = true;
                                            that.PromptText = res.body.msg;
                                            setTimeout(function(){
                                               that.bool = false;
                                            },1500)
                                    }
                                
                          },function (res) {
                          // 处理失败的结果
                          }
               );
          }
     },
     components: {
          headerHtml
     }
     
  }
</script>  
<style type="text/css">
   .login_box{
      position: absolute;
      width: 100%;
      height: 100%;
      background: url('../../../static/images/login_back.png') no-repeat;
      background-position: center center;
      background-size: cover;
   }
   .logoImg{
    width: 100%;
    margin-top: 75px;
   }
   .logoImg div{
      width: 85px;
      height: 90px;
      margin: 0 auto;
      background: url('../../../static/images/regin-04.png') no-repeat center center;
      background-size: 100% 100%;
   }
 .MyForm ul{
  width: 73.6%;
 }
   .MyForm li{
        border: 1px solid #FFF;
        border-radius: 17px;
        height: 34px;
        width: 100%;
        max-height: 50px;
        background: rgba(255,255,255,.3);
        background-size: 100% 100%;
        margin-bottom:20px;
        position: relative;
   }
   .MyForm li input{
        width: 65%;
        display: block;
        height: 80%;
        border: 0;
        outline: 0;
        background: rgba(0,0,0,0);
    }
    .MyForm .loginBtn{
          border: none;
          background: rgba(255,186,0,.8);
          margin-bottom: .1rem;
          overflow: hidden;
          -webkit-box-pack: center;
          box-pack: center;
          -moz-box-pack: center;
          -ms-box-pack: center;
          -o-box-pack: center;
          color: #FFF;
          font-size: .2rem;
    }
    .MyForm .forgetBtn{
          background: 0;
          border: 0;
          -webkit-box-align: center;
          box-align: center;
          -moz-box-align: center;
          -ms-box-align: center;
          -o-box-align: center;
    }
</style>