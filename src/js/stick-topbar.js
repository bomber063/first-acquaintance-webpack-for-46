!function () {
    var view = View('#topNavBar')
    var controller = {
        view: null,
        init: function (x) {
            this.view = x//这里的this是controller,也就是controller.view=document.querySelector('#topNavBar')第二步
            this.bindEvents()//这里的this是controller,也就是controller.bindEvents(),里面传入的this就是controller，第三步
            //意思就是controller.bindEvents.call(controller)
            //bindeEvents是函数，所以后面加上()
        },
        bindEvents: function () {
            // var bview=this.view//这里的this是controller,也就是新声明一个变量bview=controller.view，第四步
            //第二步的controller.view=document.querySelector('#topNavBar'),所以这里的意思就是var bview=this.view=document.querySelector('#topNavBar')
            window.addEventListener('scroll', ()=> {
                if (window.scrollY > 0) {
                    // bview.classList.add('sticky')
                    this.active()//active是函数，所以要后面加上()
                    // console.log('滑动',this)
                }
                if (window.scrollY <= 0) {
                    // bview.classList.remove('sticky')
                    this.deactive()//deactive是函数，所以要后面加上()
                    // console.log('未滑动',this)
                }
            }) //使用箭头函数，这里就不需要bind()了
            if (window.scrollY > 0) {
                // bview.classList.add('sticky')
                this.active()//active是函数，所以要后面加上()
                // console.log('刷新',this)
            }//这个是没有滚动条没有滚动，但是滚动条的Y方向的距离大于零的时候，也是就是在大于零的时候刷新页面也会增加 sticky
        },
        active:function(){
            this.view.classList.add('sticky')
            // console.log('active',this)
        },
        deactive:function(){
            this.view.classList.remove('sticky')
            // console.log('deactive',this)
        }
    }
    controller.init(view)//这里传入一个view，并且controller作为一个对象调用函数，那么this就是controller。可以写成controller.init.call(controller,view)第一步
}.call()
