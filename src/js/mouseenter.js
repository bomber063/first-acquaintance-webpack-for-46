        // let Taglis = menu.getElementsByClassName('menuTigger')
        let Taglis = document.querySelectorAll('.menu >ul > li')
        let i = 0
        while (i < Taglis.length) {
            Taglis[i].onmouseenter = function (xxx) {
                xxx.currentTarget.classList.add('active')
            }
            // nextElementSibling的兼容性不好,IE9.0以下的都兼容性比较差。所以一般都是用递归来找弟弟的element元素。
            Taglis[i].onmouseleave = function (xxx) {
                xxx.currentTarget.classList.remove('active')
                // xxx.currentTarget.nextSibling.nextSibling.classList.add('active')
                //为什么找两次弟弟，因为第一个nextSibling会找到一个回车或者文本，回车或者文本也算是一个弟弟。
                // console.log(Tagas[i])
            }
            // nextElementSibling的兼容性不好,IE9.0以下的都兼容性比较差。所以一般都是用递归来找弟弟的element元素。

            // Tagas[i].onmouseleave = function (xxx) {
            // xxx.currentTarget.nextSibling.nextSibling.classList.remove('active')
            //为什么找两次弟弟，因为第一个nextSibling会找到一个回车或者文本，回车或者文本也算是一个弟弟。
            // console.log(Tagas[i])
            // }
            i++
        }



        // menuTigger.onmouseenter = function (xxx) {/*对应65行的a标签，当离开a标签的*/
        //     console.log(xxx.currentTarget)
        //     xxx.currentTarget.nextSibling.nextSibling.classList.add('active')
        //     // brother=submenu.classList.nextSibling.nextSibling
        //     // brother.add('active')
        // }
        // menuTigger.onmouseleave = function (xxx) {
        //     xxx.currentTarget.nextSibling.nextSibling.classList.remove('active')
        // }