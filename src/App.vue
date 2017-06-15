<!-- Needs to create the Vue components for each one of App's elements -->
<template>
  <v-app id="beerctionaryApplication">
    <!-- Application drawer menu  -->
    <v-navigation-drawer persistent light :mini-variant.sync="mini" v-model="drawer">
      <v-list class="pa-0">
        <v-list-item>
          <v-list-tile tag="div">
            <v-list-tile-content>
              <v-list-tile-title>Menu</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon @click.native.stop="mini = !mini">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-item>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-item v-for="item in items" :key="item">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- End of application drawer -->
    <!-- Application toolbar -->
    <v-toolbar fixed class="amber darken-1" light>
      <v-btn icon light @click.native.stop="drawer = !drawer">
        <img id="menu-logo" src="../static/jar-of-beer.svg" alt="Beer Menu">
      </v-btn>
      <v-toolbar-title>Beerctionary</v-toolbar-title>
    </v-toolbar>
    <!-- End of application toolbar -->
    <!-- Application general contents -->
    <main>
      <v-container fluid>
        <div class="title">Application content: todo</div>
        <div class="title">
          <Welcome></Welcome>
        </div>
        <!--v-router-->
      </v-container>
    </main>
  </v-app>
</template>

<script>
  import Welcome from './components/Welcome'
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Item', icon: 'extension' },
          { title: 'Item', icon: 'extension' },
          { title: 'Item', icon: 'extension' },
          { title: 'Item', icon: 'extension' },
          { title: 'Item', icon: 'extension' },
          { title: 'Item', icon: 'extension' },
          { title: 'Item', icon: 'extension' },
          { title: 'Item', icon: 'extension' },
          { title: 'Item', icon: 'extension' }
        ],
        mini: false,
        right: null
      }
    },
    components: {
      Welcome
    }
    //  Primary API consuming
    // mounted: function mounted () {
    //   this.$http.get('SOME NICE URL')
    //   .then(response => {
    //     console.log(response.data.query.results.channel)
    //   })
    // }
  }
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#menu-logo{
  height: 40px;
}
#beerctionaryApplication {
  background-image: url('../static/main_bg.jpg');
  background-repeat: no-repeat;
  background-position: center;;
  background-size: cover;
  color: white;
}
</style>
