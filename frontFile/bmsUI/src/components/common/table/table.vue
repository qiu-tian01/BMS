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
            <el-dialog title="添加书籍" :visible.sync="dialogFormVisible">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="书籍名称" prop="name">
                        <el-input v-model.trim="ruleForm.name" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="书籍类别" prop="category">
                        <el-select v-model="ruleForm.category" placeholder="请选择书籍区域">
                            <el-option label="教育" value="education"></el-option>
                            <el-option label="文学" value="literature "></el-option>
                            <el-option label="幼儿" value="baay"></el-option>
                            <el-option label="历史" value="history"></el-option>
                            <el-option label="青春" value="young"></el-option>
                            <el-option label="恐怖" value="terror"></el-option>
                            <el-option label="玄幻" value="fantasy"></el-option>
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
                    <el-form-item label="书籍图片" prop="img">
                    <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">添加书籍</el-button>
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
