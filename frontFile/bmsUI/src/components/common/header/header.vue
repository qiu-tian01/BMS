<template>
    <div id="header" class="clearfix">
        <div class="header-left">
            <span>BMS</span> 
        </div>
        <div class="header-right">
            <router-link to="/login" tag="p" class="exit" @click="cahngeIsLogin">
                <i class="iconfont iconexit"></i>
            </router-link>
            <div class="user-name">
                <span>欢迎</span>
                <span v-if="isAdmin == true">管理员</span>
                <span v-if="isAdmin == false">用户</span>
                <span>{{userName}}</span>
            </div>
        </div>
    </div>
</template>

<script src="./header.js"></script>

<style scoped>
    @import './header'
</style>

