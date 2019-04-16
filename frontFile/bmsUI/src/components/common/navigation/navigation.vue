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
                router="true"
                >
                <el-menu-item index="home">
                    <i class="iconfont iconhome"></i>
                    <span slot="title">首页</span>
                </el-menu-item>
                <el-menu-item index="bookInfo">
                    <i class="iconfont iconbook"></i>
                    <span slot="title">图书信息</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="iconfont iconbook1"></i>
                    <span slot="title">图书管理</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="iconfont iconpen"></i>
                    <span slot="title">借阅信息</span>
                </el-menu-item>
                <el-menu-item index="5">
                    <i class="iconfont iconuser"></i>
                    <span slot="title">人员管理</span>
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
