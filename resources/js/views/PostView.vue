<template>
  <article>
    <header>
      <h1>{{ title }}</h1>
    </header>
    <p>{{ body }}</p>
  </article>
</template>

<script>
import axios from 'axios'

export default {
    data: function() {
      return {
        title: "",
        body: ""
      }
    },
    created () {
      var self = this
      axios.get('/api/posts/' + this.$route.params.postID)
        .then(function (response) {
          self.title = response.data.title
          self.body = response.data.body
        })
    }
}
</script>