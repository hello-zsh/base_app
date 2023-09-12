<template>
  <div class="layout-root">
    <Menu
      class="menu-wrapper" 
      mode="horizontal" 
      theme="dark" 
      :active-name="activeName" 
      @on-select="handleMenuSelect"
    >
      <MenuItem 
        v-for="item in menuList"
        :key="item.id"
        :name="item.id"
      >
        {{ item.name }}
      </MenuItem>
    </Menu>
    <div class="route-content" id="routeContent">
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      activeName: '1',
    };
  },
  created() {
    this.menuList = [
      {
        id: '1',
        name: '首页',
        url: '/home',
      },
      {
        id: '2',
        name: 'vue',
        url: '/micro/child1/#/vue',
        type: 'micro',
      },
      {
        id: '3',
        name: '系统设置',
        url: '/system'
      }
    ]
  },
  methods: {
    handleMenuSelect(name) {
      const { url } = this.menuList.find(item => item.id === name)
      this.$router.push(url)
      // history.pushState(null, 'sub-app', type === 'micro' ? url : `#${url}`)
    }
  }
};
</script>

<style scoped lang="less">
.layout-root {
  width: 100%;
  height: 100%;
  .menu-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .route-content {
    width: 100%;
    height: 100%;
    padding: 80px 20px 20px;
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>
