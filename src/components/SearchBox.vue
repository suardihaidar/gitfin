<template>
  <div class="question-box-container">
    <b-container fluid>
      <b-row class="my-1">
        <label for="input-default">Search GitHub User</label>
        <b-col sm="10">
          <b-form-input
            v-on:keyup.enter="fetchRepos"
            id="input-default"
            placeholder="Search user e.g. suardihaidar"
            v-model="username"
          ></b-form-input>
        </b-col>
        <b-button v-on:click="fetchRepos">Search</b-button>
      </b-row>
    </b-container>

    <b-container>
      <b-list-group-item v-for="data in userData" v-bind:key="data.full_name">
        <b-button block variant="light">
          <a
            :href="`https://github.com/${username}/${data.name}/blob/master/README.md`" target="_blank"
          >{{ data.full_name }}</a>
        </b-button>
      </b-list-group-item>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  data() {
    return {
      userData: [],
      username: "",
      isActive: false
    };
  },

  methods: {
    fetchRepos() {
      axios
        .get(`https://api.github.com/users/${this.username}/repos`)
        .then(response => {
          this.userData = response.data;
          console.log(this.userData);
        })
        .catch(err => {
          this.username = "";
          console.log(err);
        });
    }
  }
};
</script>