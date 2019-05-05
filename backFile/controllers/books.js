const { handleData } = require('../util')
const book_model = require('../models//books')

// 获取图书列表
const list = async (req, res) => {
    res.set('content-type', 'application/json; charset=utf8')
    let _data = await book_model.list()
    handleData(_data, res, 'book')
    
}

//添加书籍
const add = async (req,res) => {
    res.set('content-type', 'application/json; charset=utf8')
    let _data = await book_model.add(req.body)
    handleData(_data, res, 'book')
}
//删除书籍
const remove = async (req, res) => {
    res.set('content-type', 'application/json; charset=utf8')
    let _data = await book_model.remove(req.query)
    // 如果数据已经删除了，同时删除图片
    handleData(_data, res, 'book')
}
const listone = async (req, res) => {
    // res.set('content-type', 'application/json; charset=utf8')
    let _data = await book_model.listone(req.query)
    handleData(_data, res, 'book')
}
const edit = async (req, res) => {
    // res.set('content-type', 'application/json; charset=utf8')
    let _data = await book_model.edit(req.body)
    handleData(_data, res, 'book')
}
module.exports = {
    list,
    add,
    remove,
    listone,
    edit
}