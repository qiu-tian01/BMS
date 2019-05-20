<template>
    <div id="user-info">
        <div id="header">
            <span>个人中心</span>
        </div>
        <div class="user-content">
            <div class="user-content-list clearfix">
                <div class="user-list-name fl">用户名称：</div>
                <div  class="user-list-info name fl"><span>{{userInfo.userName}}</span></div>
            </div>
            <div class="user-content-list clearfix">
                <div class="user-list-name fl">手机号：</div>
                <div  class="user-list-info phone fl"><span>{{userInfo.phone}}</span></div>
            </div>
            <div class="user-content-list clearfix">
                <div class="user-list-name fl">Email：</div>
                <div  class="user-list-info phone fl"><span>{{userInfo.email}}</span></div>
            </div>
            <div class="collect" style="margin-bottom:20px">
                <el-button type="primary" round @click="changeUserInfo">修改信息</el-button>
                <el-button type="success" round @click="handelCollect">我的收藏</el-button>
                <el-button type="success" round @click="handelRemind">提示信息</el-button>
            </div>
        </div>
        <!-- 修改信息模态框 -->
        <el-dialog title="修改信息" :visible.sync="dialogFormVisible" width="60%">
            <el-form :model="userInfo" :rules="rules2" ref="userInfo" >
                <el-form-item label="用户名称:" :label-width="formLabelWidth" prop="userName">
                    <el-input v-model="userInfo.userName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机号：" :label-width="formLabelWidth" prop="phone">
                    <el-input v-model="userInfo.phone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Email：" :label-width="formLabelWidth" prop="email">
                    <el-input v-model="userInfo.email" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码："   :label-width="formLabelWidth" prop="password">
                    <el-input v-model="userInfo.password" type="password" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码：" :label-width="formLabelWidth" prop="checkPwd">
                    <el-input  type="password" v-model="userInfo.checkPwd" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitEditForm('userInfo')">确 定</el-button>
            </div>
        </el-dialog>

        <!-- 收藏模态框 -->
        <el-dialog title="我的收藏" :visible.sync="dialogTableVisible" width="800px">
            <el-table :data="collectInfo" >
                <el-table-column property="bookName" label="书籍名称" width="150"></el-table-column>
                <el-table-column property="author" label="作者" width="200"></el-table-column>
                <el-table-column property="category" label="类别" width="200"></el-table-column>
                <el-table-column property="press" label="出版社"></el-table-column>
                <el-table-column 
                    label="操作"
                    align="center"
                >
               <template slot-scope="scope">
                        <el-button
                        size="mini"
                        type="danger"
                        @click="delateCollect(scope.$index, scope.row)">取消收藏</el-button>
                </template>
                </el-table-column>
            </el-table>
        </el-dialog>
         <!-- 收藏模态框 -->
        <el-dialog title="我的信息" :visible.sync="dialogRemindVisible" width="800px">
            <el-table :data="remindInfo" >
                <el-table-column property="bookName" label="书籍名称" width="150"></el-table-column>
                <el-table-column property="startTime" label="借书时间" width="200"></el-table-column>
                <el-table-column property="endTime" label="还书时间" width="200"></el-table-column>
                <el-table-column property="remainTime" label="剩余时间"></el-table-column>
                <el-table-column 
                    label="操作"
                    align="center"
                >
               <template slot-scope="scope">
                        <el-button
                        size="mini"
                        type="primary"
                        @click="returnBook(scope.$index, scope.row)">还书</el-button>
                        <!-- <el-button
                        v-if="scope.row.isReturn === true"
                        size="mini"
                        type="primary"
                        disabled
                        >已还书</el-button> -->
                </template>
                </el-table-column>
            </el-table>
        </el-dialog>
    </div>
</template>

<script src="./userInfo.js"></script>

<style scoped>
    @import './userInfo';
</style>
