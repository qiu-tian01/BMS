<template>
    <div id="book-info" class="clearfix">
        <div id="header">
            <span>图书信息</span>
        </div>
        <div class="book-info-sreach">
            <Sreach></Sreach>
        </div>
        <div class="book-info-table">
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
                    prop="bookName"
                    label="图书名称"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="category"
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
                    prop="bookNumber"
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
                        @click="showIntrofuction(scope.$index, scope.row)">简介</el-button>
                        <el-button
                        size="mini"
                        type="success"
                        @click="handlecollect(scope.$index, scope.row)">收藏</el-button>
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
        <!-- 简介模态框 -->
        <el-dialog
            title="简介"
            :visible.sync="dialogVisible"
            width="30%"
            >
            <span>{{bookIntrofuction}}</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script src="./bookInfo.js"></script>

<style scoped>
@import './bookInfo.css';
</style>
