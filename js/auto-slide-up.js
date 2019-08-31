!function () {
    //添加offset类
    let specialTags = document.querySelectorAll('[data-x]')
    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset')
    }

    setTimeout(function () {
        findClosestAndRemoveOffset()
    }, 1000)

    window.addEventListener('scroll', function (x) {
        findClosestAndRemoveOffset()
    })//这里改成用addEventListener监听

    // 找到最近的移除offset的函数的封装
    function findClosestAndRemoveOffset() {
        let specialTags = document.querySelectorAll('[data-x]')
        if (window.scrollY > 1150) {
            specialTags[specialTags.length - 2].classList.remove('offset')
            specialTags[specialTags.length - 1].classList.remove('offset')
            // topNavBar.classList.add('sticky')//这个是为了在滚动条大于零的地方刷新后自动增加sticky


            let minIndex = 0;
            for (let i = 1; i < specialTags.length; i++) {
                if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
                    minIndex = i
                }
            }
            //minIndex 就是离窗口顶部最近的元素
            specialTags[minIndex].classList.remove('offset')

            let id = specialTags[minIndex].id
            let a = document.querySelector('a[href="#' + id + '"]')
            let li = a.parentNode
            let brothersAndMe = li.parentNode.children
            for (let i = 0; i < brothersAndMe.length; i++) {
                brothersAndMe[i].classList.remove('highlight')
            }
            li.classList.add('highlight')//24到40行代码主要是把下面的else的做的另外一件事情拷贝过来.



        }//这个代码主要是解决在最下面的刷新页面的时候，第二个元素挡住第三个元素的bug
        else {

            let minIndex = 0;
            for (let i = 1; i < specialTags.length; i++) {
                if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
                    minIndex = i
                }
            }
            //minIndex 就是离窗口顶部最近的元素
            specialTags[minIndex].classList.remove('offset')

            let id = specialTags[minIndex].id
            let a = document.querySelector('a[href="#' + id + '"]')
            let li = a.parentNode
            let brothersAndMe = li.parentNode.children
            for (let i = 0; i < brothersAndMe.length; i++) {
                brothersAndMe[i].classList.remove('highlight')//当滑动到最近的地方时候顶部的nav的某个a标签底部红色下划线高亮
            }
            li.classList.add('highlight')
        }
    }
}.call()
