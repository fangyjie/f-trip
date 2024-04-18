# 项目介绍

# 项目实现过程

## 一、创建项目

1. **方式一**：Vue CLI

   * 基于 webpack 工具

   * 命令：

     ~~~bash
     vue create (yourproject-name)
     ~~~

2. **方式二**：create-vue (**该项目所使用的创建方式**)

   * 基于 vite 工具

   * 命令：

     ~~~bash
     npm init vue@latest
     ~~~

## 二、项目初始化配置

### 1. 项目配置

1. 配置项目的 **icon**
2. 配置项目的**标题**
3.  配置 jsconfig.json (有利于更好的代码提示)

### 2. 项目基本目录结构划分(src 下)

1. assets (静态资源)
2. components
3. hooks (功能抽取)
4. mock (模拟数据)
5. router
6. service (网络请求)
7. stores
8. utils (工具)
9. views

### 3. CSS样式的重置

**对默认CSS样式进行重置:**

1. normalize.css

   ~~~bash
   npm i normalize.css
   ~~~

2. reset.css (自定义)

### 4. 全家桶 – 路由配置



### 5. 全家桶 – 状态管理



## 三、项目的具体实现

### 1. TabBar的实现

#### 注意

vite中**动态**引入**本地**图片，路径值需要进行特殊处理，并且不能使用require语法（因为 `Vite` 是基于 ES Modules (ESM) 构建的，而 `require` 是 CommonJS 模块系统的一部分）

~~~js
const getAssetURL = (image) => {
  // 参数一: 相对路径
  // 参数二: 当前路径的URL
  return new URL(`../assets/img/${image}`, import.meta.url).href
} //该函数所在文件位于src/utils
~~~



#### 1.1 方法一 自己搭建



#### 1.2 方法二 使用Vant组件库

##### 注意

图标使用自己图片时，直接在地址栏修改路由，需要自己绑定事件处理图标的变化。

##### 1.2.1 修改第三方UI组件库样式的方法

1. 用插槽，插入自己的元素
   * 在自己的作用域中直接修改这个元素

2. 全局定义一个变量，覆盖它默认变量的值
   * 缺点：全局修改

3. 局部定义一个变量，覆盖它默认变量的值
   * 优点：局部修改

4. 直接查找对应的子组件选择器，进行修改
   * :deep(子组件中元素的选择器)进行修改
   * 直接修改CSS



### 2. 首页的实现

#### 2.1 NavBar的实现



#### 2.2 轮播图的实现



#### 2.3 SearchBox的实现



#### 2.4 Categories的实现



#### 2.5 热门推荐的实现

#### 2.5.1 更多加载



#### 2.6 SearchBar的实现



### TabBar的隐藏



### 3. 城市页面的实现



### 4. 搜索页面的实现