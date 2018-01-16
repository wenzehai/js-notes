# 帕吉网络后台框架
此框架基于vue，结合elementUI,vue-Router,vuex等，样式文件采用sass结合css书写。
#### 

## 文件目录结构

```
app
├── build // webpack 打包配置文件
|								如果想修改输出端口，可以更改config.js中的port
├── client - APP目录结构
│   └── components - 框架组件。包含初始化App组件、顶部导航栏Header组件、侧边栏Sidebar组件、和黑色蒙版Dimmer组件
│   ├── router - 路由配置文件
│   ├── store - Vuex store
│   ├── styles - 全局性的sass配置文件，用于定义全局字体、颜色。此处的sass文件最好不要变更文件位置
│   ├── views - 内部组件，所有的内容组件都放在此文件夹内
│   ├── index.js - 入口文件，里面引入了各项依赖和全局样式文件，请不要更改文件名称
├── dist - build.
├── static - static assets, etc.

```

## 初始化:

```bash
 git clone https://github.com/wenzehai/pudge-element-framework.git pudge-element-project  
 cd pudge-element-project && rm -rf .git
 npm install

```


运行:

```bash
 npm run dev
```

打包:

```bash
 npm run build
```

