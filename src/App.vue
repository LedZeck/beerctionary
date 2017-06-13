<!-- Needs to create the Vue components for each one of App's elements -->
<template>
  <v-app id="beerctionaryApplication">

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

    <v-toolbar fixed class="amber darken-1" light>
      <!-- <v-toolbar-side-icon light @click.native.stop="drawer = !drawer"></v-toolbar-side-icon> -->
      <v-btn icon light @click.native.stop="drawer = !drawer">
        <!-- <v-icon>favorite</v-icon> -->
        <img id="menu-logo" src="../static/jar-of-beer.svg" alt="Beer Menu">
      </v-btn>
      <v-toolbar-title>Beerctionary</v-toolbar-title>
    </v-toolbar>
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
    //   this.$http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maceio%22)%20and%20u%3D%22c%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
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
}
</style>
