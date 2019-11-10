<template>
  <div>
     <router-view></router-view>
     <FooterGuide v-if="$route.meta.isShowFooterGuide"/> 
   
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'
  //引入问题


  export default {
    name: 'App',
    components: {FooterGuide}
  
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 

</style>
