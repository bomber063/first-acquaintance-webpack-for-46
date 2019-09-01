!function () {
    var view = View('.jobs')//创建一个view
    var controller = {
        view:null,//经过第二步这里的view就是外面的view啦
        swiper:null,//经过第四步后swiper被new Swiper(this.view.querySelector('.swiper-container'), this.swiperOptions)赋值
        swiperOptions:
            {//在view里面找相应的需要控制的元素，这样我们的view也是分块的
                // Optional parameters
                // direction: 'vertical',//是否选择垂直
                loop: true,//是否是无缝的
    
                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',//是否需要分页器
                    clickable: true,//可点击
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + (index + 1) + '</span>';
                    },//第几张图片的显示
                },
    
                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',//是否需要上个按钮
                    prevEl: '.swiper-button-prev',//是否需要下个按钮
                },
    
                // And if we need scrollbar
                scrollbar: {
                    // el: '.swiper-scrollbar',//是否需要滚动条
                }
        },
        init:function(x){
            this.view=x//第二步把传入的参数赋值给this.view，这里的this是controller。
            this.initswiper()//第三步掉用initswiper函数，也就是controller.initswiper.call(controller)
        },
        initswiper:function(){
            this.swiper = new Swiper(this.view.querySelector('.swiper-container'), this.swiperOptions)
        }//第四步，这里的this就是controller.
        
    }
    controller.init(view)//第一步传入一个外部的view作为参数
}.call()


let numbers = [1,2,3]; 
let dou = numbers.map((number)=>number*2); 
console.log(dou);



