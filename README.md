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