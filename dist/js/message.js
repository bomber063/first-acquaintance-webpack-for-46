!function () {
  var view = View('.message');
  var model = Model({
    resorceName: 'Message'
  }); // var model={
  //     //初始化数据
  //     init:function(){
  //         var APP_ID = 'sTbSDyixTTS72jUHUPpKy8RS-gzGzoHsz';
  //         var APP_KEY = 'zh9IwgNMavadsArDRMma86xB';
  //         AV.init({
  //             appId: APP_ID,
  //             appKey: APP_KEY
  //         });
  //         //上面的代码是初始化id和key
  //         // console.log('没有报错')
  //     },
  //     //获取数据
  //     fetch:function(){
  //         var query = new AV.Query('Message');
  //         return query.find()
  //     },
  //     //保存数据
  //     save:function(name,content){//需要把name和content传进来
  //         var Message = AV.Object.extend('Message');
  //         var message = new Message()
  //         return message.save({//保存这个message，内容是一个哈希
  //             content: content,
  //             name:name//增加一个留言的名字
  //         })
  //     }
  // }

  var controller = Controller({
    // view: null,
    // model: null,
    messageList: null,
    myForm: null,
    init: function () {
      //这里把view和model参数省略也没有关系
      // this.view=view
      // this.model=model
      this.messageList = view.querySelector('#messageList');
      this.myForm = view.querySelector('#postMessageForm'); // this.model.init()

      this.loadMessages(); // this.bindEvents()
    },
    loadMessages: function () {
      this.model.fetch().then( //这里的第一个函数是前面的find没有问题会执行第一个函数，如果有问题就执行第二个函数
      function (messages) {
        var _this = this;

        //   console.log(messages[0])
        let array = messages.map(function (item) {
          return item.attributes;
        }); // console.log(array)
        //   let messageList=document.querySelector('#messageList')

        array.forEach(function (item) {
          let li = document.createElement('li'); // li.textContent = item.name+':'+item.content//这里用innerText也可以

          li.textContent = `${item.name}:${item.content}`; //这里用反引号也可以
          //这里用反引号，可以写成`${item.name}:${item.content}`

          _this.messageList.appendChild(li); //这里用append也可以

        }); // console.log(array)//array里面就是包括了所有content的一个数组
      }, function (error) {
        //如果有问题就执行这个函数
        alert('提交失败，请改天留言');
      }).then(function (s) {
        console.log(s);
      }, //这里的函数是前面的then后面两个函数都没有问题才会执行这个函数。
      function (error) {
        console.log(error);
      } //这里的函数是前面的then后面两个函数如果有一个有问题就会执行这个函数，比如前面的#messageList，把#删除就会执行该函数，因为有错误
      );
    },
    bindEvents: function () {
      var _this2 = this;

      //这里不能用箭头函数，用了箭头函数会报错，因为箭头函数没有自己的this
      this.myForm.addEventListener('submit', function (e) {
        //绑定事件里面的代码必须用箭头函数才不会改变this。
        e.preventDefault(); //这里不阻止默认事件会刷新页面

        _this2.saveMessage();
      });
    },
    saveMessage: function () {
      let myForm = this.myForm;
      let content = myForm.querySelector('input[name=content]').value; //找到name=content的属性，input里面有一个value属性，就是输入的当前值

      let name = myForm.querySelector('input[name=name]').value; //找到name=name的属性，input里面有一个value属性，就是输入的当前值

      this.model.save(name, content).then(function (object) {
        //   alert('LeanCloud Rocks!');
        let li = document.createElement('li'); // li.textContent = item.name+':'+item.content//这里用innerText也可以

        li.textContent = `${object.attributes.name}:${object.attributes.content}`; //这里用反引号也可以

        this.messageList.appendChild(li); //这里用append也可以

        myForm.querySelector('input[name=content]').value = ''; //数据传输完毕后，使input[name=content]元素的内容清空
        // console.log(object)
        // window.location.reload()//页面刷新
      }); //如果成功了就执行then的第一个函数
    }
  });
  controller.init(view, model); // let button=myForm.querySelector('input[type=submit]')
  // console.log(button)
  // button.addEventListener('click', function (e) {
  //     e.preventDefault()//这里不阻止默认事件会刷新页面
  //     let content = myForm.querySelector('input[name=content]').value//input里面有一个value属性，就是输入的当前值
  //     var Message = AV.Object.extend('Message');
  //     var message = new Message()
  //     message.save({//保存这个message，内容是一个哈希
  //         content: content
  //     }).then(function (object) {
  //         //   alert('LeanCloud Rocks!');
  //         console.log('存入成功')
  //         console.log(object)
  //     })//如果成功了就执行then的第一个函数
  // })
  // let input=myForm.querySelector('input[name=content]')
  // console.log(input)
  // input.addEventListener('keypress',function(e){
  //     if(e.keyCode===13){//数字13代表回车
  //         e.preventDefault()//这里不阻止默认事件会刷新页面
  //         let content = myForm.querySelector('input[name=content]').value//input里面有一个value属性，就是输入的当前值
  //         var Message = AV.Object.extend('Message');
  //         var message = new Message()
  //         message.save({//保存这个message，内容是一个哈希
  //             content: content
  //         }).then(function (object) {
  //             //   alert('LeanCloud Rocks!');
  //             console.log('存入成功')
  //             console.log(object)
  //         })//如果成功了就执行then的第一个函数
  //     }
  // })
  // //创建TestObject，它是一个表
  // var X = AV.Object.extend('bomber');//看下面一行前面有new，后面有一个括号，说明TestObject是一个函数
  // //在TestObject表中创建一行数据testObject
  // var x = new X();//new赋值给textObject,textObject就是一个对象
  // //数据内容是 words: 'Hello World!'，并保存
  // x.save({//保存这个textObject，内容是一个哈希
  //   xxx: '你好世界2'
  // }).then(function(object) {
  // //   alert('LeanCloud Rocks!');
  //   console.log(arguments[0])
  // })//如果成功了就执行then的第一个函数，也就是  alert('LeanCloud Rocks!');
}.call();