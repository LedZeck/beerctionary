<template>
  <div>
    <el-button round :type="buttonClass" :style="style">{{buttonText}}</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      style: {
        color: this.buttonTextColor
      }
    }
  },
  props: {
    buttonText: {
      type: String
    },
    buttonClass: {
      type: String
    },
    buttonTextColor: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>
