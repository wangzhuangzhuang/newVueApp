<template>
    
       <dl class="commodity" :class='back != 1? "active" : "" '>
       	<dt class='text-c'>
       		<img :src='xsqg.goods_main_url'>
       	</dt>
       	<dd>
       		<p class='text-c goods_name SpecialEllipsis mt-10'>{{xsqg.goods_name}}</p>
       		<p class='text-c mt-10 Price'>￥{{xsqg.app_price}}</p>
       	</dd>
       </dl>
 
</template>
<script type="text/javascript">
	export default {  
	      props: ['xsqg','back'],
	      data(){
	            return {
	                
	            }
	      }

	};
</script>
<style type="text/css">
   .commodity img{
   	width: 100%;
   	height: auto;
   	display: block;
   	margin: 0 auto;
   }	
   .goods_name{
	color: #000;
   }
   .commodity dt{
   	 padding: 5px;
   	
   }
   .commodity dd{
   	padding: 0 10px;
   }
   .commodity.active dd{
   	padding:0;
   }

</style>	