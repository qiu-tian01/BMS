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
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        </el-breadcrumb>
        
        <router-view/>
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
