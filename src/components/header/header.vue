<template>

 <div >
        <header v-if='type=="login"' class="header">
                   <div class="left register">
                               <a href="">注册</a>
                    </div>
                    <div class="right registerL">
                                 <img src="../../../static/images/regin-02.png" @click = 'back'>
                    </div>
        </header>
         <header v-if='type=="details"'  v-bind:style="{opacity:number}" class="header detailsHeader">
                   <div class="left" @click = 'back2'>
                                <img src="../../../static/images/back-l.png" class="img">
                    </div>
                    <div class="right">
                                 <img src="https://ywdev.youngworld.com.cn/html/app/images/dom12-1.png" class="img">
                    </div>
        </header>
         <header v-if='type=="graphic"' class="header">
                   <div class="left" @click='hide'>
                                <img src="https://ywdev.youngworld.com.cn/html/app/images/dom11.png" class="img">
                    </div>
                    <h4 style="margin:0;line-height:45px" class="text-c">图文详情</h4>

        </header>
          <header v-if='type=="ClassifyDetails"' class="header active">
                   <div class="left" @click='back2'>
                                <img src="../../../static/images/back-l.png" height="87" width="87" class="img">
                    </div>
                    <h4 style="margin:0;line-height:45px" class="text-c">{{text}}</h4>

        </header>
        <header v-if='type=="searchResult"' class="header searchResultHeader active">
                   <div class="left" @click='back2'>
                                <img src="../../../static/images/back-l.png" height="87" width="87" class="img">
                    </div>
                    <h4 class='searchResultHeader'>{{text}}</h4>

        </header>
   <!--  -->
 </div>
</template>  
<script>
 export default {
    props:  {
      type: {
        type: String
      },
      text:{
         type: String
      }
    },
    data() {
       return {
          scroll: '',
          number:1
       };
    },
    methods: {
       menu() {
            this.scroll = document.body.scrollTop;
            let H = 300;
            this.number =1-(this.scroll/300);
       },
       back(){
           this.$router.go(-1);  
       },
       hide(){ 
           this.$emit('hide');
       },
       back2(){
           this.$router.go(-1);  
       }
    },
    mounted() {
      window.addEventListener('scroll', this.menu);
    }
  };
</script>
<style lang="less" >
 @import '../../assets/less/header.less';
</style>