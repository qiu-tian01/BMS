<template>
    <div id="table">
         <el-table
            :data="tableData"
            style="width: 100%"
            :header-cell-style="{background:'#66b1ff',color:'#fff'}" 
            stripe   
            highlight-current-row
        >
            <el-table-column
                prop="img"
                label="图书图片"
                align="center"
            >
            <template slot-scope="scope">
                <img  :src="scope.row.imgPath" alt="" style="width: 60px;height: 80px">
            </template>
            </el-table-column>
            <el-table-column
                prop="name"
                label="图书名称"
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
                @click="handleDelete(scope.$index, scope.row)">借阅</el-button>
                <el-button
                size="mini"
                type="success"
                @click="handleDelete(scope.$index, scope.row)">收藏</el-button>
                <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="100"
                layout="total, prev, pager, next"
                :total="tableData.length">
            </el-pagination>
        </div>
    </div> 
</template>

<script src="./table.js"></script>

<style scoped>

</style>
