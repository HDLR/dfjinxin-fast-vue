<template>
  <div class="mod-demo-ueditor">
    <el-alert title="提示" type="warning">
      <div class="description">
        <p class="el-alert__description">文本编辑器ueditor因更新vue-cli为3.0版本后无法使用，后续再ueditor版本或者替换别的文本编辑器</p>
        <p class="el-alert__description">此Demo只提供UEditor官方使用文档，入门部署和体验功能。具体使用请参考：http://fex.baidu.com/ueditor/</p>
      </div>
    </el-alert>

  </div>
</template>

<script>
  export default {
    components: {

    },
    data () {
      return {

      }
    },
    mounted () {

    },
    methods: {

    }
  }
</script>

<style lang="scss">
  .mod-demo-ueditor {
    position: relative;
    z-index: 510;
    > .el-alert {
      margin-bottom: 10px;
    }
  }
</style>
