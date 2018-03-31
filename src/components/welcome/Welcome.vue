<template>
  <div id="welcome-screen">
    
    <el-row
      type="flex"
      justify="center">
      <el-col
        :span="24">
        <div>
          <h1>Welcome to the Beerctionary!</h1>
        </div>
      </el-col>
    </el-row>

    <el-row
      id="welcome-card-container"
      type="flex"
      justify="center"
      :gutter="20">
      <el-col
        :span="20">
        <welcome-card />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import vueWelcomeCard from './WelcomeCard'
export default {
  components: {
    welcomeCard: vueWelcomeCard
  }
}
</script>

<style scoped>
.el-col {
  text-align: center
}
h1 {
  font-weight: 100;
  color: white;
}
#welcome-screen{
  height: 100vh;
  background-image: url('../../../static/main_bg.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}

#welcome-card-container {
  position: absolute;
  margin: 0;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 100%;
}
</style>
