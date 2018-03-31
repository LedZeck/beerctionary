<template>
  <el-container id="root">

    <el-header>
      <el-button plain
        type="primary"
        icon="el-icon-menu"
        @click="showSidebar = !showSidebar" />
    </el-header>
    
    <el-container>
      
      <transition
        name="slide"
        type="animation"
        mode="in-out">
          <sidebar
            v-if="showSidebar"/>
      </transition>
      
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    
    </el-container>  
  </el-container>
</template>

<script>
import vueSidebar from './sidebar/Sidebar'
export default {
  data () {
    return {
      showSidebar: false
    }
  },
  components: {
    sidebar: vueSidebar
  }
}
</script>

<style>

  #root {
    height: 100vh;
}

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: 100%;
    z-index: 9;
  }

  .el-footer {
    z-index: 9;
    text-align: center;
  }

  .el-container {
    position: relative;
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
