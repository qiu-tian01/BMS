<template>
    <div id="sreach">
        <el-input
                placeholder="请输入查找内容"
                v-model="sreachData"
                style="width:300px">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <el-button type="primary" icon="el-icon-search" @click="submitSreach">搜索</el-button>
            <el-button v-if="isShowReset == true" type="warning" icon="el-icon-refresh" @click="resetInput">重置</el-button>
    </div>
</template>

<script src="./sreach.js"></script>

<style scoped>

</style>
