# first-acquaintance-webpack-for-46
## 软件工程化
* 自动化
* 模块化
* 性能优化
* 该节的前期代码来自[第40节](https://github.com/bomber063/object-oriented-programming-for-40)
## 该节的软件不同版本所使用的的命令不一定相同
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
### 把箭头函数转换成没有箭头的函数，使得不兼容箭头函数的浏览器可以兼容(下面有一部分已经跟课程不一样了，因为已经升级了，所以我是自己查询的，没有按照视频的来)
* 因为let语法在IE上面是不兼容的。如果有的用户是用IE浏览器就可能这个文件虎报错，因为IE不支持let。需要**一个工具自动的把let变成var**，这个工具是[babel](https://babeljs.io/docs/en/babel-cli)，[中文babel](https://www.babeljs.cn/docs/babel-cli)
#### 第一种方法
* 根据[中文babel](https://www.babeljs.cn/docs/babel-cli)说明进行
* 注意： 如果不存在 package.json 文件，请在安装之前创建一个。**这将确保能够使用 npx 命令**。
* 这里需要创建一个package.json文件，只需要输入命令，然后一直回车即可。这里**文件夹不能用中文名及部分特殊符号**
```
npm init
```
* 初始化安装完成后，在安装cli和core
```
npm install --save-dev @babel/core @babel/cli
```
* 之后你的 package.json 文件应当包括如下内容：
```
{
  "devDependencies": {
+   "@babel/cli": "^7.0.0",//新增，版本号可能不同
+   "@babel/core": "^7.0.0"//新增，版本号可能不同
  }
}
```
* 接下来如果有一个js文件名字是waiting.js，那么你可以通过下面的命令把它的代码打出来，**因为是局部安装的所以需要把路径写出来**
```
./node_modules/.bin/babel waiting.js
```
* 因为前面安装了babel-cli，那么就可以使用npx来代替这个局部安装的路径./node_modules/.bin/
```
npx babel waiting.js
```
* 如果你希望 输出到文件 ，可以使用 --out-file 或 -o 参数。前面的waiting.js就被转换的文件，后面的waiting-compiled.js就是转换后的文件
```
npx babel waiting.js --out-file waiting-compiled.js
```
* 要在 每次文件修改后 编译该文件，请使用 --watch 或 -w 参数：
```
npx babel waiting.js --watch --out-file waiting-compiled.js
```
* 只是目前来说前面的和后面的没有区别，因为没有配置转换的规则。接下来就来配置转换后的效果
* 配置前需要安装[插件](https://www.babeljs.cn/docs/plugins),比如[箭头函数](https://www.babeljs.cn/docs/babel-plugin-transform-arrow-functions)
```
npm install --save-dev @babel/plugin-transform-arrow-functions
```
* 安装完成之后，你就可以在你的package.json里面的"devDependencies"看到多了一个
```
    "@babel/plugin-transform-arrow-functions": "^7.2.0",
```
* 此时需要在babel.config.js文件里面增加一个代码
```
  module.exports = function (api) {
    api.cache(true);
  
    const presets = [  ];
    const plugins = [ "@babel/plugin-transform-arrow-functions" ];//这个中括号里面的是新增的插件

    return {
      presets,
      plugins
    };
  }
```
* 如果不修改babel.config.js文件，也可以通过修改.babelrc文件增加"@babel/plugin-transform-arrow-functions"
```
{
    "presets": [
    ],
    "plugins": [
      "@babel/plugin-transform-arrow-functions"//这个是新增
    ]
  }
```
* 这样我们就可以通过,前面的js是转换前的目录，后面的aa转换后的目录
```
npx babel js --watch --out-dir aa
```
* 就可以把代码
```
let dou = numbers.map((number)=>number*2); 
```
* 转换为代码
```
var dou = numbers.map(function (number) {
    return number * 2;
});
```
#### 第二种方法
* 我是参考这个[babel编译js（可以把高级的es语法转化成低级的）](https://blog.csdn.net/weixin_42458708/article/details/82718551),但是他的代码有点小错误
* 首先要安装es2015
```
npm i babel-cli babel-preset-es2015 -s
```
* 新建一个.babelrc(必须要.babelrc文件)的配置文件,并且要在presets加入es2015,如果不写这个就算安装了，不配置这个也不会实现转换效果。比如
```
{
    "presets": [
        "es2015"
    ]
}
```
* 安装babel-cli，这里的安装代码前面链接中的有错误，save前面是两个--。
```
npm i babel-cli --save-dev
```
* 这样我们就可以通过,前面的js是转换前的目录，后面的aa转换后的目录
```
npx babel js --watch --out-dir aa
```
* 将代码
```
let dou = numbers.map((number)=>number*2); 
```
* 转换为代码
```
var dou = numbers.map(function (number) {
    return number * 2;
});
```
### 一个警告的解决方案
* 报错开头是
```
WARNING: We noticed you're using the `useBuiltIns` option without declaring a core-js version
```
* 查询之后解决方案[链接](https://github.com/vuejs/vuepress/issues/1471)
* Adding "corejs": "3.0.0" in the .babelrc file turned off the warnings.
```
"presets": [
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "usage", // "usage" | "entry" | false, defaults to false.
                "corejs": "3.0.0",//这个是新增
                "targets": {
                    "esmodules": true,
                    "ie": "11"
                }
            }
        ]
    ],
```
* 这样就不会出现警告了

### 全局安装和局部安装
* 不同系统或者版本的全局安装目录不一定一样，比如window10的全局安装的目录在这里
```
C:\Users\bomber\AppData\Roaming\npm\node_modules
```
* -g就是全局安装的意思，比如
```
npm install -g http-server
```
* 并且全局安装后之后，会提出是安装目录的，全局安装之后直接http-server就可以使用了，不需**路径**,因为这个全局安装的目录是包含在path里面的。你可以通过下面代码查看path
```
echo $PATH
```
* 可以看到很多路径，就可以看到其实一个路径是C:\Users\bomber\AppData\Roaming\npm
* 你可以通过下面代码查看安装的全局路径
```
which http-server
```
* 如果不加-g就是局部安装（当前目录），比如，**但是局部安装之前需要npm init一下**，也就是初始化，初始化之后会有一个package.json
```
npm install http-server
```
* 但是**局部安装的缺点是使用的时候需要把它的路径给出来才可以使用**。
* 另外删除http-server可以通过下面命令
```
npm uninstall -g http-server
```
* babel网站的[建议安装](https://www.babeljs.cn/docs/babel-cli)
> 虽然你 可以 在你的计算机上将 Babel CLI 安装到全局环境中，但是更好的方式是 将 Babel CLI 安装到每个项目的 本地 目录下。
> 这主要有两个原因：  
> 1.同一台计算机上的不同项目可能依赖不同版本的 Babel ，并且你可以针对项目单独升级 Babel 的版本。  
> 2.没有对你所正在工作的环境的隐性依赖 能够让你的项目更易于迁移和设置。  
