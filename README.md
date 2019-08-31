# first-acquaintance-webpack-for-46
## 软件工程化
* 自动化
* 模块化
* 性能优化
* 该节的前期代码来自[第40节](https://github.com/bomber063/object-oriented-programming-for-40)
## scss自动转换为css
* scss这种语种语法的样式表文件需要以 .scss 扩展名。 第二种比较老的语法成为缩排语法（或者就称为"Sass"）， 提供了一种更简洁的CSS 书写方式。 它不使用花括号，而是通过缩排的方式来表达选择符的嵌套层级，I 而且也不使用分号，而是用换行符来分隔属性。 很多人认为这种格式比SCSS 更容易阅读，书写也更快速。
* 我们在google上搜索scss git hub,然后可以找到并打开[Sass makes CSS fun](https://github.com/sass/sass)，上课的时候没有使用这个仓库的Sass，因为这个里面没有Npm安装的方式（课程是一年前的，好像现在有了）,另外提一点：scss是写Ruby的人发明的语言，
* 我们在google上搜node scss git hub，然后找到并打开[node-sass](https://github.com/sass/node-sass),
* Install from mirror in China输入，-g是全局安装的意思。
```
npm install -g mirror-config-china --registry=http://registry.npm.taobao.org
npm install node-sass
```
* 一般如果安装出错就在google上搜索'node-sass安装失败'，然后找哪个出错和自己的一样的错的说明就可以了。不过我经过测试，在FQ状态在windows上用上面的方法安装没有问题，版本通过
```
node-sass -v
```
* 查看是的版本是**4.11.0**
* 因为scss是完全兼容CSS的语法的，它只是在css语法上加上一些更高级的用法，所以可以把css修改为scss，通过下面代码就可以把style.css修改为style.scss
```
 mv style.css style.scss
```
* 接下来我们把scss翻译成css，一个例子,前面的src/style.scss是翻译前的路径，dest/style.css是翻译后的路径
```
node-sass src/style.scss dest/style.css
```
* 打开style.scss和style.css看，发现**除了一点排版不一样**其他基本是一样的。
### 用scss语法转换为css语法
* 比如把
```
 section ol#messageList{
     max-width: 700px;
     margin:0 auto;
     list-style: none;
     background:#F5F5F5;
     border-top:1px solid #CCC;
 }

 section ol#messageList li{
     padding: 16px;
     border-bottom:1px solid #CCC;
 }
```
* 修改为**嵌套格式**
```
section{
    ol#messaageList{
        max-width: 700px;
        margin:0 auto;
        list-style: none;
        background:#F5F5F5;
        border-top:1px solid #CCC;
        li{
             padding: 16px;
            border-bottom:1px solid #CCC;
        }
    }
}
```
* 再次通过转换为CSS
```
node-sass style.scss style.css
```
* 得到style.css的代码为
```
section ol#messaageList {
  max-width: 700px;
  margin: 0 auto;
  list-style: none;
  background: #F5F5F5;
  border-top: 1px solid #CCC; }//前面的代码大括号到这里就结束了
  section ol#messaageList li {
    padding: 16px;
    border-bottom: 1px solid #CCC; }//前面的代码大括号到这里就结束了
```
* 这个代码其实只是前面每个大括号结束都会**左边有一些缩进**，其他都是符合css语法的样式的。
### 为什么有Sass和Scss
* Ruby发明了一个简洁的语法Sass,Sass语法见下面
```
body 
    color：red;
```
* 我这里**遇到一个问题**，就是用node-sass转换为css，能够生成文件，文件名字也没错，也没有报错，但是生成的css文件是空文件。里面什么内容都没有。
* 这两个更多的区别见[Sass 与 SCSS 是什么关系？](https://segmentfault.com/a/1190000005646206)
* 另外也有一种说法就是很多前端不太能理解SASS的语法，所以Ruby有发明了SCSS语法，因为SCSS一样的语法，但是多一些功能，比如嵌套，多一些符号，比如大括号，分号
### 自动编译
* 因为我们引用的是style.css，但是我们所用的代码是style.scss，所以每次修改style.scss都需要输入命令来编译一遍，显得很麻烦，所以需要**自动来控制这个过程**
* 我们Google上搜索node-sass watch，找到通过命令来实现style.scss编译为style.css，然后监听styls.scss变化
```
node-sass style.scss style.css -w styls.scss
```
* 此时这个命令窗口就会挂起来，类似于一个服务器一样来控制，**当你改变styls.scss的时候就实现style.scss编译为style.css，然后继续监听styls.scss变化**。
***
* **这就是自动化**
***
* 很多前端不会用sass，可能是不会用**命令行**
* 这里对于编辑器没有要求，不管用什么编辑器都可以，比如用git bash编辑也可以，比如在git bash里面可以用echo来写命令，比如
```
echo 'body{background:green;}'>>style.scss
```
### 把let语法转换为var语法
* 因为let语法在IE上面是不兼容的。如果有的用户是用IE浏览器就可能这个文件虎报错，因为IE不支持let。需要**一个工具自动的把let变成var**，这个工具是[babel]()