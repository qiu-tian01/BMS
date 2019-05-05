<template>
    <div id="bookManagement" class="clearfix">
         <div id="header">
            <span>图书管理</span>
        </div>
        <div class="book-management-sreach">
            <Sreach></Sreach>
            <div class="add-book-btn">
                <el-button type="primary" icon="el-icon-plus" @click="dialogFormVisible = true">新增书籍</el-button>
            </div>
        </div>
        <div class="book-management-table">
            <Table></Table>
        </div>

        <!-- 增加书籍模态框 -->
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
                    <el-button type="primary" @click="submitForm('ruleForm')">提交编辑</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>

    </div>
</template>

<script src="./booksMangement.js"></script>

<style scoped>
 @import './booksMangement';
</style>
