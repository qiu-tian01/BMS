<template>
    <div id="login" >
       
        <div class="login" :class="{'bk-lg-1': isLogin == false,'bk-lg-2' : isLogin == true}">
             
            <div class="login-content">
                <div class="status">
                    <div class="status-list fl" @click="changeStatus('1')" :class="{'active':status == '1'}">管理员</div>
                     <div class="status-list fl" @click="changeStatus('2')" :class="{'active':status == '2' }">用户</div>
                </div>
                <div v-if="loginOrRegiste == 'login'">
                <h1>{{title.login}}</h1>
                <el-form ref="form" :model="user" label-width="80px" style="margin-top:20px">
                     <el-form-item label="用户名:" class="form-item">
                        <el-input v-model="user.name" style="width:480px"></el-input>
                        <p class="remind" style="color:red">用户名不能为空</p>
                    </el-form-item>
                    
                    <el-form-item label="密码:" style="margin-top:60px">
                        <el-input v-model="user.password" type="password" style="width:480px" @blur="loginUserPwd"></el-input>
                        <p class="remind" style="color:red">密码不能为空</p>
                        <!-- <p class="remind1" style="color:red">密码输入错误，请重新输入</p> -->
                    </el-form-item>
                    <el-form-item style="margin-top:80px">
                        <el-button type="primary" @click="onSubmit">登陆</el-button>
                        <el-button @click="registe">注册</el-button>
                    </el-form-item>
                </el-form>
                </div>
                <div v-if="loginOrRegiste == 'registe'">
                    <h1>{{title.registe}}</h1>
                    <el-form ref="form" :model="registeForm" label-width="80px" style="margin-top:20px;color:#fff">
                        <el-form-item label="用户名:">
                            <el-input v-model="registeForm.name" style="width:480px"></el-input>
                            <p class="remind" style="color:red">用户名不能为空</p>
                             <!-- <p class="remind2" style="color:red">用户名不能超过10位哟！</p> -->
                        </el-form-item>
                        <el-form-item label="密码" prop="pass" style="margin-top:40px">
                            <el-input type="password" style="width:480px" v-model="registeForm.password" autocomplete="off"></el-input>
                            <p class="remind" style="color:red">密码不能为空</p>
                            <!-- <p class="remind2" style="color:red">密码不能超过12位哟！</p> -->
                        </el-form-item>
                        <el-form-item label="确认密码" prop="checkPass" style="margin-top:40px">
                            <el-input type="password" style="width:480px" v-model="registeForm.checkPass" autocomplete="off"></el-input>
                            <p class="remind" style="color:red">确认密码不能为空</p>
                            <!-- <p class="remind" style="color:red">密码不一致</p> -->
                        </el-form-item>
                        <el-form-item style="margin-top:40px;position:relative" >
                            <p class="goLogin" @click="goLogin">去登陆</p>
                            <el-button type="primary" @click="submitForm('ruleForm')" style="margin-left:0">提交</el-button>
                            <el-button @click="resetForm('ruleForm')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./login.js"></script>

<style>
 @import "./login.css";
</style>
