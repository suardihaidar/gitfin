<template>
  <div id="app">
    <Header />
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" offset="3">
          <SearchBox />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import SearchBox from "./components/SearchBox.vue";

export default {
  name: "app",
  components: {
    Header,
    SearchBox
  },
  data() {
    return {
      userData: [],
      username: "tes"
    };
  },
  methods: {
    search() {
      
    }
  },
  mounted: function() {
    fetch(`https://api.github.com/users/${username}/repos`, {
      method: "get"
    })
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.userData = jsonData;
      });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
