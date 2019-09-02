//    var model=Model({resorceName:'Message'})
// model.init()
// model.fetch()
// model.save()
// Model就是一个模板
window.Model = function (options) {
    let resorceName=options.resorceName
    return {
        init: function () {
            var APP_ID = 'sTbSDyixTTS72jUHUPpKy8RS-gzGzoHsz';
            var APP_KEY = 'zh9IwgNMavadsArDRMma86xB';

            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
            //上面的代码是初始化id和key
            // console.log('没有报错')
        },
        //获取数据
        fetch: function () {
            var query = new AV.Query(resorceName);
            return query.find()
        },
        //保存数据
        save: function (name, content) {//需要把name和content传进来,方方老师把这里改成了一个参数object，也就是一个对象，我觉得没有必要就没有修改啦
            var Message = AV.Object.extend(resorceName);
            var message = new Message()
            return message.save({//保存这个message，内容是一个哈希
                content: content,
                name: name//增加一个留言的名字
            })
        }
    }
}