<template>
    <div id="borrow-books" class="clearfix">
        <div id="header">
            <span>借阅图书</span>
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
            :data="tableData"
            style="width: 100%"
            :header-cell-style="{background:'#66b1ff',color:'#fff'}" 
            stripe   
            highlight-current-row
        >
            <el-table-column
                prop="id"
                label="图书编号"
                align="center"
                width="100px"
            >
            </el-table-column>
            <el-table-column
                prop="author"
                label="作者"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="name"
                label="图书名称"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="magazine"
                label="图书类别"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="press"
                label="出版社"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="number"
                label="图书数量"
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
                @click="handleBorrowBook(scope.$index, scope.row)">借阅</el-button>
                <el-button
                size="mini"
                type="success"
                @click="handleCollectBook(scope.$index, scope.row)">收藏</el-button>
                
            </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
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

        <!-- 借阅模态框 -->
        <el-dialog title="借阅图书" :visible.sync="dialogFormVisible">
            <el-form :model="borrowBokkInfo">
                <span class="" style="font-size:16px;margin-right:10px">图书名称：</span><span>{{borrowBokkInfo.bookName}}</span>
                <p style="font-size:16px;margin-top:15px">借阅日期：</p>
                <el-date-picker
                    v-model="data"
                    type="monthrange"
                    range-separator="至"
                    start-placeholder="开始月份"
                    end-placeholder="结束月份">
                </el-date-picker>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script src="./borrowBooks.js"></script>

<style scoped>
@import './borrowBooks';
</style>
