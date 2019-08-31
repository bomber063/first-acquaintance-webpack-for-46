!function () {
    var view = View('.menu')
    controller = {
        view: null,
        aTags: null,
        init: function (xx) {//初始化
            this.view = xx//把外面传的参数view传入进来
            this.initAnimate()//初始化动画
            this.bindEvents()//绑定事件
        },
        initAnimate: function () {//初始化动画的函数
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate)//这个求动画帧,会根据电脑的CPU及显卡来使浏览器一秒钟动多少次，比较好的就一秒钟60次，比较差的就一秒钟动20次
        },
        scrollToElement:function(x){//这里是把66行代码的element传入进来啦
            let top = x.offsetTop
            // let n = 20//一共动了多少次
            // let t = 500/n//多少时间动一次
            let currentTop = window.scrollY//当前滑条移动的距离
            let targetTop = top - 80
            let s = targetTop - currentTop
            let t = Math.abs((s / 100) * 300)
            if (t > 500) { t = 500 }
            // let i = 0
            // let id = setInterval(() => {
            //         if (i === n) {
            //             window.clearTimeout(id)
            //             return
            //         }
            //         i = i + 1
            //         window.scrollTo(0, currentTop + s * i)

            // }, t)

            var coords = {
                x: 0, y: window.scrollY
            };
            var tween = new TWEEN.Tween(coords)
                .to({
                    x: 0, y: targetTop
                }, t)
                .easing(TWEEN.Easing.Quadratic.In)
                .onUpdate(function () {
                    window.scrollTo(coords.x, coords.y);
                    //     box.style.setProperty('transform', 'translate(' + coords.x + 'px, ' + coords.y + 'px)');
                    console.log(coords.x, coords.y)
                })
                .start();
            //增加了tween.js库后的缓动平滑过渡的跳转页面
        },
        bindEvents:function(){
            let aTags = this.view.querySelectorAll('.menu > ul > li > a')
            for (i = 0; i < aTags.length; i++) {
                aTags[i].onclick = (x) => {
                    x.preventDefault()//阻止默认动作
                    let a = x.currentTarget
                    let href = a.getAttribute('href')//括号里面是写属性名字
                    let element = document.querySelector(href)//这里的href是#aboutSite,是在CSS中的选择器
                    // asp=as[i].preventDefault
                    // let d=elementTwo.getBoundingClientRect()//这个API是距离浏览器的垂直高度。
                    // let current = window.scrollY
                    this.scrollToElement(element)//把element参数传给18行代码的函数
                }
            }
        }
    }
    controller.init(view)
    // console.log(as[0].href)//这个的输出结果是http://192.168.1.3:8080/#aboutSite,但是我们只想要#aboutSite
}.call()