
<template>
  <el-aside class="el-aside">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          class="el-menu-vertical-demo"
          :default-active="activeIndex">
          <transition-group
            name="slide"
            type="animation"
            mode="in-out">
            <el-menu-item
              v-for="(item, index) in menuData"
              index="index"
              @click="updateIndex(index)"
              :key="index"
              class="list-item">
              <i class="el-icon-setting"></i>
              <span>{{item.name}}</span>
            </el-menu-item>
          </transition-group>
        </el-menu>
      </el-col>
    </el-row>
  </el-aside>
</template>


<script>
  export default {
    data () {
      return {
        menuData: [],
        activeIndex: null
      }
    },
    async beforeCreate () {
      const url = 'http://www.json-generator.com/api/json/get/cfbOlbjjxe?indent=2'
      const call = this.$http.get(url)
      const response = await call
      this.menuData = response.body
    },
    methods: {
      updateIndex (index) {
        this.activeIndex = String(index)
        console.log(this.activeIndex)
      }
    }
  }
</script>

</script>

<style scoped>
  .el-aside {
    background-color: #D3DCE6;
    z-index: 10;
    position: absolute;
    height: 100%;
  }

  .el-menu-vertical-demo {
    background-color: #D3DCE6;
  }

  slide-enter {
    opacity: 0;
  }
  .slide-enter-active {
    transition: opacity 0.5s;
    opacity: 1;
    animation: slide-in 0.5s ease-out forwards;
  }
  .slide-leave {
    /* opacity: 1; */
  }
  .slide-leave-active {
    transition: opacity 1s;
    opacity: 0;
    animation: slide-out 0.5s ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateX(-25vw);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes slide-out {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-25vw);
    }
  }

</style>
