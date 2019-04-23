<template>
    <div id="home">
        <div class="home-info">
            <div id="header">
                <span>图书管理系统</span>
            </div>
            <div class="home-body-title clearfix">
                <router-link tag="div" :to = "{name : 'bookInfo'}" class="home-book-info-haeder fl bk-info">
                    <i class="iconfont iconbook" style="font-size:26px"></i>
                    <span>图书信息</span>
                </router-link>
                <router-link tag="div" :to = "{name : 'borrowBooks'}" class="home-book-borrow-header fl bk-brw">
                    <i class="iconfont iconpen" style="font-size:26px"></i>
                    <span>借阅信息</span>
                </router-link>
                <router-link tag="div" :to = "{name : 'userManagement'}" class="home-book-user-header fl bk-user">
                    <i class="iconfont iconuser" style="font-size:26px"></i>
                    <span>个人信息</span>
                </router-link>
            </div>
            <div class="home-body clearfix">
                <div class="home-book-info fl  opcity">
                    <div class="home-body-box">
                        <p>本系统的图书信息模块拥有精品图书，点击上方按钮可以浏览到各式各种的图书信息，也可以通过左边导航栏查看到图书信息，快去看看有什么你喜欢的书吧！</p>
                        
                    </div>
                </div>
                <div class="home-book-borrow fl  opcity">
                    <div class="home-body-box">
                        <span>本系统可以借阅自己喜欢的图书，点击上方按钮跳转至借阅界面，查询自己想要的图书，赶快去借一本吧！</span>
                        <img src="../../assets/img/creay.jpg" alt="">
                    </div>
                    
                </div>
                <div class="home-book-user fl  opcity">
                    <div class="home-body-box">
                        <span>在这个系统里你可以设置自己的信息，也可以登录和退出这个系统，登录的时候可以查看图书信息，评论图书，借阅图书，修改自己的信息。</span>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    @import './home'
</style>
