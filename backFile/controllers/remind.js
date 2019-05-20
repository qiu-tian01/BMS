const { handleData } = require('../util')
const remind_model = require('../models/remind')

// // 获取用户列表
// const listAll = async (req, res) => {
//     res.set('content-type', 'application/json; charset=utf8')
//     let _data = await user_model.listAll()
//     handleData(_data, res, 'book')
// }
//添加书籍
// 获取图书列表
const listAll = async (req, res) => {
    // res.set('content-type', 'application/json; charset=utf8')
    let _data = await remind_model.listAll()
    handleData(_data, res, 'remind')
}
// 返回部分数据
const list = async (req, res) => {
    res.set('content-type', 'application/json; charset=utf8')
    let _data = await remind_model.list(req.query)
    handleData(_data, res, 'remind')
}
const add = async (req,res) => {
    res.set('content-type', 'application/json; charset=utf8')
    let _data = await remind_model.add(req.body)
    handleData(_data, res, 'remind')
}
//删除书籍
const remove = async (req, res) => {
    res.set('content-type', 'application/json; charset=utf8')
    let _data = await remind_model.remove(req.query)
    // 如果数据已经删除了，同时删除图片
    handleData(_data, res, 'remind')
}
const edit = async (req, res) => {
    res.set('content-type', 'application/json; charset=utf8')
    let _data = await remind_model.edit(req.body)
    handleData(_data, res, 'remind')
}

module.exports = {
    listAll,
    add,
    remove,
    list,
    edit
}