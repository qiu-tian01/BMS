<template>
    <div id="navigation">
        <el-row class="tac">
            <el-col :span="12">
                <el-menu
                default-active="home"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                text-color="#fff"
                active-text-color="#409EFF"
                background-color="#030303"
                router
                >
                <el-menu-item index="home">
                    <i class="iconfont iconhome" style="font-size:18px"></i>
                    <span slot="title" style="font-size:18px">首页</span>
                </el-menu-item>
                <el-menu-item index="bookInfo">
                    <i class="iconfont iconbook" style="font-size:18px" ></i>
                    <span slot="title" style="font-size:18px">图书信息</span>
                </el-menu-item>
                <el-menu-item index="bookManagement">
                    <i class="iconfont iconbook1" style="font-size:18px"></i>
                    <span slot="title" style="font-size:18px">图书管理</span>
                </el-menu-item>
                <el-menu-item index="borrowBooks">
                    <i class="iconfont iconpen" style="font-size:18px"></i>
                    <span slot="title" style="font-size:18px">借阅信息</span>
                </el-menu-item>
                <el-menu-item index="borrowManagement">
                    <i class="iconfont icontianchongxing-" style="font-size:18px"></i>
                    <span slot="title" style="font-size:18px">借阅管理</span>
                </el-menu-item>
                <el-menu-item index="userInfo"> 
                    <i class="iconfont iconuser" style="font-size:18px"></i>
                    <span slot="title" style="font-size:18px">个人中心</span>
                </el-menu-item>
                <el-menu-item index="userManagement"> 
                    <i class="iconfont iconrenyuanguanli" style="font-size:18px"></i>
                    <span slot="title" style="font-size:18px">人员管理</span>
                </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script src="./navigation.js"></script>

<style scoped>
@import './navigation.css'
</style>
