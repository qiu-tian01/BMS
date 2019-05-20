const { handleData } = require('../util')
const user_model = require('../models/user')

// 获取用户列表
const listAll = async (req, res) => {
    res.set('content-type', 'application/json; charset=utf8')
    let _data = await user_model.listAll()
    handleData(_data, res, 'book')
}
// 返回部分数据
const list = async (req, res) => {
    res.set('content-type', 'application/json; charset=utf8')
    console.log(req.query)
    let _data = await user_model.list(req.query)
    handleData(_data, res, 'user')
}

//添加用户
const add = async (req,res) => {
    res.set('content-type', 'application/json; charset=utf8')
    let _data = await user_model.add(req.body)
    handleData(_data, res, 'user')
}
//删除用户
const remove = async (req, res) => {
    res.set('content-type', 'application/json; charset=utf8')
    let _data = await user_model.remove(req.query)
    // 如果数据已经删除了，同时删除图片
    handleData(_data, res, 'user')
}
const listone = async (req, res) => {
    res.set('content-type', 'application/json; charset=utf8')
    let _data = await user_model.listone(req.query)
    handleData(_data, res, 'user')
}
const edit = async (req, res) => {
    res.set('content-type', 'application/json; charset=utf8')
    let _data = await user_model.edit(req.body)
    handleData(_data, res, 'user')
}
module.exports = {
    listAll,
    add,
    remove,
    listone,
    edit,
    list
}