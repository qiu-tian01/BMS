const mongoose = require('../util/mongoose')
const Moment = require('moment')
const fs = require('fs-extra') // 时间格式化
const PATH = require('path') // 时间格式化

var UserInfo = mongoose.model('userInfos',new mongoose.Schema({
    userName : String,//用户名
    password : String,//密码
    phone : Number,//手机号
    email : String,//Email
    createTime: String,//添加时间
    formatTime: String,//转化后的时间
    level : String//等级
})) 
//获取所有信息
const listAll = () => {
    let _query = {}//查询约定条件
     return UserInfo.find(_query).sort({createTime: -1})
            .then((results) => {
                return results
            }).
            catch((err) => {  
                return false
            })
}
//返回数据列表,分页
const list = async ({ pageNo = 1, pageSize = 5, search = ''}) => {
    let reg = new RegExp(search, 'g')
    let _query = { // 匹配各个字段值只要有一个字段含有关键字
        $or: [
            { userName: reg },   
            { phone: reg },   
            { email: reg },  
        ]
    }// 查询的约定条件
    // limit // 取几条
    // skip // 从哪里开始
    let _all_items = await listAll(_query)
    return UserInfo.find(_query)
    .sort({createTime: -1})
    .skip((pageNo - 1) * pageSize)// 从哪一页开始
    .limit(~~pageSize)// 截取多少
    .then((results) => {
        return { 
            items: results, 
            pageInfo: { // 页码信息
                pageNo, // 当前页
                pageSize, // 一页数量
                total: _all_items.length, // 总数
                totalPage: Math.ceil(_all_items.length / pageSize), // 总页数
                search // 搜索关键字
            }
        }
    }).catch((err) => {
        return false
    })
}

// 根据id返回某一条数据
const listone = ({ id }) => {
    return UserInfo.findById(id).then((results) => {
        return results
    }).catch((err) => {
        return false
    }) 
}

//添加一条数据
const add = (body) => {
    
    let _timestamp = Date.now();//时间戳
    let moment = Moment(_timestamp)
    return new UserInfo({
        ...body,
        createTime: _timestamp,
        formatTime: moment.format("YYYY-MM-DD, hh:mm")
    }).save()
        .then((result) => {
            return result
        })
        .catch((err) =>{
            console.log(err)
            return false;
        })
}
// 删除职位的model
const remove = async( { id } ) => {
    // 删除数据库中的某一条数据
    let _row = await listone({ id })
    return UserInfo.deleteOne({ _id: id }).then((results) => {
        results.deleteId = id
        return results
    }).catch((err) => {
        // fs.appendFileSync('./logs/logs.txt', Moment().format("YYYY-MM-DD, hh:mm") + '' +JSON.stringify(err))
        return false
    })
}

// 更新职位信息， 确认是否重新发布，如果重新发布，更改创建时间
const edit = (body) => {
    return UserInfo.updateOne({ _id: body.id }, { ...body }).then((results) => {//第一个是查询条件，第二个参数是更改 
        return results
    }).catch((err) => {
        return false
    }) 
}
module.exports = {
    listAll,
    list,
    add,
    remove,
    listone,
    edit, 
    
}