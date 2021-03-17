<template>
	<div id='app'>
		<nav class="nav nav_container" v-if='is_nav'>
			<ul class="nav_list">
				<router-link to='/index'  tag='li' :class="[to_index ==0?is_class:'']">count</router-link>
				<router-link to='/about' tag='li' :class="[to_index ==1?is_class:'']">about</router-link>
				<router-link to='/product'  tag='li' :class="[to_index ==2?is_class:'']">product</router-link>
			</ul>
		</nav>
	
		<router-view></router-view>
	
	</div>
</template>

<script>
	
	export default {
		data(){
			return{
				is_nav:true,
				is_class:"",
				to_index:""
			}
		},
		watch:{
			'$route':function(to, from){
			
				if(to.path == '/login'){
					this.is_nav = false;
				}else{
					this.is_nav = true;
				}
				var pathArr = ['/count','/about','/product'];
				var to_index= pathArr.indexOf(to.path);
				var from_index= pathArr.indexOf(from.path);
				this.to_index = to_index;
				if(to_index != -1){
					var index = to_index - from_index;
					this.is_class = index>0?'switch_right':'switch_left'
				}
				
			}
		},
		computed:{
		
		},
		methods:{
		
			
		},
		
	}
</script>

<style>

</style>
