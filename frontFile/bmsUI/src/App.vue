<!--
 *@NAME : 邱添 
 *@date: 2019-04-16 22:26:35
 *@description: 
!-->
<template>
  <div id="app">
      <Header></Header>
      <Navigation></Navigation>
      <div id="AppInfo">
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
      </div>
      
      
  </div>
</template>

<script>
import Header from '@components/common/header/header.vue'
import Navigation from '@components/common/navigation/navigation.vue'

export default {
  components : { Header,Navigation},
  name: 'App'
}
</script>

<style>
@import './assets/css/commonStyle.css';
@import './App'
</style>
