<template>
    <div id="table" class="clearfix">
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
                background
                :page-size="5"
                layout="total, prev, pager, next"
                :total="tableData.length">
            </el-pagination>
        </div>
        <!-- 编辑信息 -->
            <el-dialog title="编辑书籍" :visible.sync="dialogFormVisible">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                     <el-form-item label="书籍编号" prop="id">
                        <el-input v-model.trim="ruleForm.id" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="书籍名称" prop="name">
                        <el-input v-model.trim="ruleForm.name" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="书籍类别" prop="category">
                        <el-select v-model="ruleForm.category" placeholder="请选择书籍区域">
                            <el-option label="教育" value="教育"></el-option>
                            <el-option label="文学" value="文学"></el-option>
                            <el-option label="幼儿" value="幼儿"></el-option>
                            <el-option label="历史" value="历史"></el-option>
                            <el-option label="青春" value="青春"></el-option>
                            <el-option label="恐怖" value="恐怖"></el-option>
                            <el-option label="玄幻" value="玄幻"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="出版社" prop="publishingHouse">
                        <el-input v-model.trim="ruleForm.publishingHouse" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="图书数量" prop="number">
                        <el-input-number v-model="ruleForm.number" :min="1"  label="描述文字"></el-input-number>
                    </el-form-item>
                    <el-form-item label="书籍简介" prop="desc">
                        <el-input type="textarea" v-model.trim="ruleForm.desc" clearable></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitEditForm('ruleForm')">提交编辑</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-dialog>
    </div> 
</template>

<script src="./table.js"></script>

<style scoped>
    .pagination{
        float: right;
    }
</style>
