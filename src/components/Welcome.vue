<template>
  <div id="welcome">
    {{msg}}
  </div>
</template>
<script>
export default {
  name: 'welcome',
  data () {
    return {
      msg: 'Welcome to Beerctionary!'
    }
  }
}
</script>
<style scoped>
#welcome {
  color: white;
}
</style>
