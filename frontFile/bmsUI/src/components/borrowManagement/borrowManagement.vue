<template>
    <div id="borrow-management" class="clearfix">
        <div id="header">
            <span>借阅管理</span>
        </div>
        <div class="sreach-book">
            <el-input
                placeholder="请输入图书名称"
                v-model="sreachData"
                style="width:300px">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <el-button type="primary" icon="el-icon-search" @click="submitSreach">搜索</el-button>
            <el-button v-if="isShowReset == true" type="warning" icon="el-icon-refresh" @click="resetInput">重置</el-button>
        </div>
        <div class="borrow-book-table">
            <el-table
            :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" 
            style="width: 100%"
            :header-cell-style="{background:'#66b1ff',color:'#fff'}" 
            stripe   
            highlight-current-row
        >
            <el-table-column
                prop="bookName"
                label="图书名称"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="user"
                label="借书用户"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="startTime"
                label="借书时间"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="endTime"
                label="归还时间"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="remainTime"
                label="剩余时间"
                align="center"
            >
            </el-table-column>
            <el-table-column 
                label="操作"
                align="center"
            >
            <template slot-scope="scope">
                <el-button
                v-if="scope.row.isRemind == false"
                size="mini"
                type="primary"
                @click="handleRemind(scope.$index, scope.row)">提醒用户</el-button>
                <el-button
                v-if="scope.row.isRemind == true"
                size="mini"
                type="primary"
                disabled
                >已提醒</el-button>
                 <el-button
                size="mini"
                type="primary"
                @click="delateRemindInfo(scope.$index, scope.row)">确认还书</el-button>
            </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
           <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                background
                :page-size="pagesize"  
                layout="total, prev, pager, next"
                :total="tableData.length"
            ></el-pagination>
        </div>
        </div>
    </div>
</template>

<script src="./borrowManagement.js"></script>

<style scoped>
    @import "./borrowManagement.css";
</style>
<style>

</style>

