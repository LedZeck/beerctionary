<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <h3>
        <span>Age confirmation</span>
      </h3>
    </div>
    <div>
      <h4>
        Beerctionary is an Open Source project with a simple purpose:
      </h4>
      <h3>
        Brings information to anyone which is curious about anything in the many many options of beer in the world!
      </h3>
      <h4>
        For that, first we'd like to confirm your age, then, if allowed, you'll see everything about that wonderfull world 😃	
      </h4>
    </div>
    <el-row>
      <el-col :span="12">
        <router-link to="">
          <confirmation-button
          buttonText="I'm under 18"
          buttonClass=""
          buttonTextColor="rgb(230, 162, 60)"/>
        </router-link>
      </el-col>
      <el-col :span="12">
        <router-link to="/home">
          <confirmation-button
          buttonText="I'm over 18"
          buttonClass="warning"
          buttonTextColor="white"/>
        </router-link>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import vueButton from '../buttons/Button'
export default {
  components: {
    confirmationButton: vueButton
  }
}
</script>

<style scope>
 .el-card {
   background-color: rgba(255, 255, 255, 0.8);
 }
 .el-card h3 span {
   color: rgb(230, 162, 60);
   font-weight: 300
 }
 .el-card h4 {
 }
</style>
