<template>
  <div class="question-box-container">
    <b-container fluid>
      <b-row class="my-1">
        <label for="input-default">Search GitHub User</label>
        <b-col sm="10">
          <b-form-input
            @keyup.enter="search"
            id="input-default"
            placeholder="Search user e.g. suardihaidar"
          >{{username}}</b-form-input>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    username: String
  },
  mounted() {
    console.log(this.username);
  }
};
</script>