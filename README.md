## Module Federation

#### Points
1. iview组件因为是全局注册，并非是组件内部import，所以不会在被链接到remote的bundle中，需要自己在消费方引入iview。但会存在版本问题。
2. echarts由于是在组件内部import，所以会被链接到remote的bundle中
3. mf可以配置share进行资源共享，会自动进行版本比对，选择高版本


#### TODO
1. publicPath如何处理，不影响自身，目前添加的会影响本身

#### Questions
1. 为何vue-router、View-design等需要Vue.use()



*******

## Qiankun

#### Points
1. 如果主应用是hash模式，activeRule应该是需要带上hash的，才能匹配成功。
   `activeRule: '/#/app1'`

#### Question

1. 主应用和子应用的路由模式选择【官方建议微应用使用histroy模式，设置路有base，与activeRule一样】

  如果主应用是hash模式，子应用的路由模式需要跟基座的一样【网易云音乐团队回复】

  · 主应用的路由模式选择会影响子应用的路由模式么？
  · 主应用是hash模式，子应用可以是hash模式和histroy模式么？
  · 主应用是histroy模式
1. 为什么histroy模式下需要设置base，并且跟activeRule保持一致
2. qiankun的沙箱是怎么设计的，以及html entry的设计？？
3. 通信方案
4. 当一个页面需要加载两个子应用时，并非是通过路由控制，应该如何实现【是否可以为模块共享提供方案】
5. 角色权限
6. 