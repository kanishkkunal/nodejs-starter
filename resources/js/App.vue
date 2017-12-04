<template>
  <div class="container-readable">
    Hello from Vue! Posts will be loaded below via API.
    <ul id="v-for-object" class="bare">
      <li v-for="post in posts">
        <h2 class="h3">
          <a :href="post.url">{{ post.title }}</a>
        </h2>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>


<script>
import axios from 'axios'

export default {
    data: function() {
      return {
        posts: []
      }
    },
    created () {
      var self = this
      axios.get('/api/posts')
        .then(function (response) {
          self.posts = response.data
        })
    }
}
</script>
