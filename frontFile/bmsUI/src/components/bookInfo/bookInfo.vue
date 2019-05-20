<template>
  <div id="book-info" class="clearfix">
    <div id="header">
      <span>图书信息</span>
    </div>
    <div class="book-info-sreach">
      <Sreach v-model="searchValue" @getSearchList="getSeachList"></Sreach>
    </div>
    <div class="book-info-table">
      <el-table
        :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" 
        style="width: 100%"
        :header-cell-style="{background:'#66b1ff',color:'#fff'}"
        stripe
        highlight-current-row
      >
        <el-table-column prop="id" label="图书编号" align="center" width="100px"></el-table-column>
        <el-table-column prop="bookName" label="图书名称" align="center"></el-table-column>
        <el-table-column prop="author" label="作者" align="center"></el-table-column>

        <el-table-column prop="category" label="图书类别" align="center"></el-table-column>
        <el-table-column prop="press" label="出版社" align="center"></el-table-column>
        <el-table-column prop="bookNumber" label="图书数量" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="showIntrofuction(scope.$index, scope.row)"
            >简介</el-button>
            <el-button size="mini" type="" @click="handleComment(scope.$index, scope.row)">查看评论</el-button>
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
    <!-- 简介模态框 -->
    <el-dialog title="简介" :visible.sync="dialogVisible" width="30%">
      <span>{{bookIntrofuction}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 评论模态框 -->
    <el-dialog title="评论信息" :visible.sync="dialogCommentVisible">
    <el-dialog
      width="50%"
      title="添加评论"
      :visible.sync="addComment"
      append-to-body>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="commentInfo.comments">
      </el-input>
      <el-button type="primary" @click="addComments" style="margin-top:10px">提交评论</el-button>
    </el-dialog>
    <div class="commentList clearfloat" v-for="index in commentList" :key="index._id">
      <div class="user">
        <span>{{index.user}}</span>
      </div>
      <div class="commentInfo">
        <span>{{index.comments}}</span>
      </div>
      <div class="time">
        <span>{{index.formatTime}}</span>
      </div>
      <el-button v-if="isAdmin == true" class="delate-comment" type="danger" size="mini" @click="delateComment(index._id)">删除</el-button>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="outerVisible = false">取 消</el-button>
      <el-button type="primary" @click="addComment = true">添加评论</el-button>
    </div>
  </el-dialog>
  </div>
</template>

<script src="./bookInfo.js"></script>

<style scoped>
@import "./bookInfo.css";
</style>
