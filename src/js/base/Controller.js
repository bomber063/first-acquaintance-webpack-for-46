// Controller({
    // init:(view,model){//这里的两个参数也可以不传入，因为下面两行代码已经绑定在this上面了
        // this.view=view
        // this.model=model
        // this.xxx()
        // this.yyy()
    // },
    // xxx()
    // yyy()
// })

window.Controller = function (options) {
    let a = options.init//先调用options自己的init函数，得到的还是一个函数，并且赋值给变量a
    bindEvents=options.bindEvents
    // debugger

    return {
        view:null,
        model:null,

        init: function (view,model) {//这里的init是函数的一个属性，首先调用这个init函数，这是第一步
            // debugger

            this.view = view
            this.model = model
            this.model.init()
            // debugger
            console.dir(this)//这里打出来的this和下面打出来的this结果相同，但是a的调用却不能放到这个地方很奇怪。
            for(key in options){//因为return后面整个包裹起来的对象是没有loadMessages和saveMessage的属性的，所以需要options[key]传给它，因为init已经有了，所以可以排除init在外
                if(key!=='init'){//这里的'init'也可以写成a
                    this[key]=options[key]//这里的this就是return后面整个包裹起来的对象
                }
            }
            a.call(this, view, model)//第一步后，调用options自己的init函数后，调用上面的变量a传入的参数options的init属性继续被调用，并传入一个this，view,model进入。这个变量a的调用必须放到for循环的后面，不然会缺少一些key导致报错。
            //这里的this是return后面整个包裹起来的对象
            // debugger

            console.dir(this)
            bindEvents.call(this)//第一步后，这里是调用这个options.bindEvents,并把this传给它，这个this也就是return后面整个包裹的函数
        }
    }
}