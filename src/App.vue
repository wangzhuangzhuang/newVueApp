<template>
  <div>
     <keep-alive>
     <!-- <router-view :datas="datas" @upup="change" ref="chil"></router-view>-->
     <transition name="fade">
     	  <router-view ></router-view>
     </transition>	
     
    </keep-alive>
  </div>
</template>
<script type="text/ecmascript-6">
	 export default {
	 	 data(){
	 	 	/*return {
          datas:123,
          that:this
       };*/
      return {
      	
      	
      	
      }
	 	 },
	 	  mounted(){
	 	 
	 	  	// this.$refs.chil.chilFn(1);
	 	  },
	 	 methods: {
			  /*  change(msg) {
			    	 this.datas = msg;
			    	
			    }*/
     }
	 }
</script>
<style lang='less'>
    @import './assets/less/base.less';
</style>
