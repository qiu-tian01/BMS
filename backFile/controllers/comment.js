const { handleData } = require('../util')
const comment_model = require('../models/comment')

// 获取图书列表
const listAll = async (req, res) => {
    res.set('content-type', 'application/json; charset=utf8')
    let _data = await comment_model.listAll()
    handleData(_data, res, 'comment')
}
// 返回部分数据
const list = async (req, res) => {
    res.set('content-type', 'application/json; charset=utf8')
    let _data = await comment_model.list(req.query)
    handleData(_data, res, 'comment')
}

//添加书籍
const add = async (req,res) => {
    res.set('content-type', 'application/json; charset=utf8')
    let _data = await comment_model.add(req.body)
    handleData(_data, res, 'comment')
}
//删除书籍
const remove = async (req, res) => {
    res.set('content-type', 'application/json; charset=utf8')
    let _data = await comment_model.remove(req.query)
    handleData(_data, res, 'comment')
}


module.exports = {
    listAll,
    add,
    remove,
    list
}