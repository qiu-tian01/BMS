<template>
    <div id="header" class="clearfix">
        <div class="header-left">
            <span>BMS</span> 
        </div>
        <div class="header-right">
            <router-link to="/login" tag="p" class="exit">
                <i class="iconfont iconexit"></i>
            </router-link>
            <div class="user-name">
                <span></span>
                <span>请登录</span>
            </div>
        </div>
    </div>
</template>

<script src="./header.js"></script>

<style scoped>
    @import './header'
</style>

