<template>
  <div class="question-box-container">
    <b-container fluid>
      <b-row class="my-1">
        <label for="input-default">Search GitHub User</label>
        <b-col sm="10">
          <b-form-input
            v-on:keyup.enter="fetchItems"
            id="input-default"
            placeholder="Search user e.g. suardihaidar"
            v-model="username"
          ></b-form-input>
        </b-col>
        <b-button v-on:click="fetchItems">Search</b-button>
      </b-row>
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
      username: ""
    };
  },

  methods: {
    fetchItems() {
      axios
        .get(`https://api.github.com/users/${this.username}/repos`)
        .then(response => {
          this.userData = response.data;
          this.username = "";
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