const { handleData } = require('../util')
const collect_model = require('../models/collect')

const listAll = async (req, res) => {
    res.set('content-type', 'application/json; charset=utf8')
    let _data = await collect_model.listAll()
    handleData(_data, res, 'collect')
}

// 返回部分数据
const list = async (req, res) => {
    res.set('content-type', 'application/json; charset=utf8')
    let _data = await collect_model.list(req.query)
    handleData(_data, res, 'collect')
}

//添加收藏
const add = async (req,res) => {
    res.set('content-type', 'application/json; charset=utf8')
    let _data = await collect_model.add(req.body)
    handleData(_data, res, 'collect')
}
//删除收藏
const remove = async (req, res) => {
    res.set('content-type', 'application/json; charset=utf8')
    let _data = await collect_model.remove(req.query)
    // 如果数据已经删除了，同时删除图片
    handleData(_data, res, 'collect')
}
module.exports = {
    listAll,
    add,
    remove,
    list
}