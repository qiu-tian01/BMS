const mongoose = require('../util/mongoose')
const Moment = require('moment')

var BookInfo = mongoose.model('bookInfos',new mongoose.Schema({
    bookName : String,
    category : String,
    press : String,
    author : String,
    bookNumber : Number,
    bookImg : String,
    createTime: String,
    formatTime: String,

}))
//搜索列表
const list = () => {
    let _query = {}//查询约定条件
     return BookInfo.find(_query).sort({createTime: -1})
            .then((results) => {
                return results
            }).
            catch((err) => {
                return false
            })
}
//添加一条数据
const add = (body) => {
    
    let _timestamp = Date.now();//时间戳
    let moment = Moment(_timestamp)
    return new BookInfo({
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
    return BookInfo.deleteOne({ _id: id }).then((results) => {
        results.deleteId = id
        // 有图片就删图片
        if ( _row.companyLogo && _row.companyLogo !== default_logo ) {
            fs.removeSync(PATH.resolve(__dirname, '../public'+_row.companyLogo))
        }  
        return results
    }).catch((err) => {
        // fs.appendFileSync('./logs/logs.txt', Moment().format("YYYY-MM-DD, hh:mm") + '' +JSON.stringify(err))
        return false
    })
}
// 根据id返回某一条数据
const listone = ({ id }) => {
    return BookInfo.findById(id).then((results) => {
        return results
    }).catch((err) => {
        return false
    }) 
}
// 更新职位信息， 确认是否重新发布，如果重新发布，更改创建时间
const edit = (body) => {
    console.log(body.republish)
    if ( body ) {
        let _timestamp = Date.now()
        let moment = Moment(_timestamp)
        body.createTime = _timestamp
        body.formatTime = moment.format("YYYY-MM-DD, hh:mm")
    }
    return BookInfo.updateOne({ _id: body.id }, { ...body }).then((results) => {//第一个是查询条件，第二个参数是更改 
        return results
    }).catch((err) => {
        return false
    }) 
}

module.exports = {
    list,
    add,
    remove,
    listone,
    edit
}