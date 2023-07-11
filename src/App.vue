<template>
  <div>
    base_app
    <p>echart version: {{ data_version }}</p>
    <childAppButton/>
    <childAppChart/>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  components: {
    childAppButton: () => import('childApp/custom-button'),
    childAppChart: () => import('childApp/custom-chart'),
  },
  data() {
    return {
      data_version: ''
    };
  },
  mounted() {
    this.data_version = echarts.version
  }
};
</script>

<style scoped lang="less">

</style>
