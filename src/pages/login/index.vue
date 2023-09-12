<template>
  <div class="login-root">
    <div class="login-content">
      <h1 class="mt-10">Welcome</h1>
      <Input placeholder="请输入账号" class="mt-10"/>
      <Input placeholder="请输入密码" type="password" class="mt-10"/>
      <Button type="primary" @click="handleLogin">Login</Button>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {

    };
  },
  methods: {
    handleLogin() {
      sessionStorage.setItem('token', 'admin')
      this.$router.push('/home')
    }
  }
};
</script>

<style scoped lang="less">
.login-root {
  width: 100%;
  height: 100%;
  .flex(column, center, center);
  .mt-10 {
    margin-bottom: 10px;
  }
  .login-content {
    .flex(column, center, center);
    width: 400px;
  }
}
</style>
