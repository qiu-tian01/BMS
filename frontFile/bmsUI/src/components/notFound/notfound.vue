<template>
    <div id="not-found">
        <img src="../../assets/img/notfound1.jpg" alt="notFound">
        <div>
            <span style="font-size:30px"><i class="el-icon-arrow-down"></i></span>
        </div>
        <router-link tag="div" :to = "{ name: 'home' }" class="go-home">
            回首页看看吧
        </router-link> 
            

    </div>
</template>

<script src="./notfound.js"></script>

<style scoped>
    @import './notfound';
</style>
