<template>
  <div class="posts container-fluid">
    <div class="row">
      <Post v-for="post in state.newPosts" :key="post" :post="post" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { Post } from '../components/Post'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'
export default {
  name: 'Posts',
  setup() {
    const state = reactive({
      newPosts: computed(() => AppState.posts)
    })
    onMounted(() => {
      postsService.getPosts()
    })
    return {
      state
    }
  },
  components: {
    Post
  }
}
</script>

<style lang="scss" scoped>

</style>
