### Module Federation

#### Points
1. iview组件因为是全局注册，并非是组件内部import，所以不会在被链接到remote的bundle中，需要自己在消费方引入iview。但会存在版本问题。
2. echarts由于是在组件内部import，所以会被链接到remote的bundle中
3. mf可以配置share进行资源共享，会自动进行版本比对，选择高版本


#### TODO
1. publicPath如何处理，不影响自身，目前添加的会影响本身