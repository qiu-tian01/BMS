<template>
    <div id="user-management" class="clearfix">
        <div id="header">
            <span>用户管理</span>
        </div>
        <div class="sreach-book">
            <el-input
                placeholder="请输入名称"
                v-model="sreachData"
                style="width:300px">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <el-button type="primary" icon="el-icon-search" @click="submitSreach">搜索</el-button>
            <el-button v-if="isShowReset == true" type="warning" icon="el-icon-refresh" @click="resetInput">重置</el-button>
        </div>
        <div class="borrow-book-table">
            <el-table
            :data="tableData"
            style="width: 100%"
            :header-cell-style="{background:'#66b1ff',color:'#fff'}" 
            stripe   
            highlight-current-row
        >
            
            <el-table-column
                prop="userName"
                label="用户名称"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="startDate"
                label="注册时间"
                align="center"
            >
            </el-table-column>
             <el-table-column
                prop="phone"
                label="手机号"
                align="center"
            >
            </el-table-column>
             <el-table-column
                prop="email"
                label="Email"
                align="center"
            >
            </el-table-column>
            <el-table-column 
                label="操作"
                align="center"
            >
            <template slot-scope="scope">
                <el-button
                size="mini"
                type="primary"
                @click="addblacklist(scope.$index, scope.row)">提升管理员</el-button>  
                <el-button
                size="mini"
                type="danger"
                @click="logoffUser(scope.$index, scope.row)">注销用户</el-button>  
            </template>
            </el-table-column>
        </el-table>
        <div class="pagination fr">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                background
                :page-size="5"
                layout="total, prev, pager, next"
                :total="tableData.length">
            </el-pagination>
        </div>
        </div>
    </div>
</template>

<script src="./userManagement.js"></script>

<style scoped>
    @import "./userManagement.css";
</style>
