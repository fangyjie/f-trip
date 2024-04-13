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

### 项目配置

1. 配置项目的 **icon**
2. 配置项目的**标题**
3.  配置 jsconfig.json (有利于更好的代码提示)

### 项目基本目录结构划分(src 下)

1. assets (静态资源)
2. components
3. hooks (功能抽取)
4. mock (模拟数据)
5. router
6. service (网络请求)
7. stores
8. utils (工具)
9. views

### CSS样式的重置

**对默认CSS样式进行重置:**

1. normalize.css

   ~~~bash
   npm i normalize.css
   ~~~

2. reset.css (自定义)

### 全家桶 – 路由配置



### 全家桶 – 状态管理