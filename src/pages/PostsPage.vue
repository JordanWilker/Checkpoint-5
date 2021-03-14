<template>
  <div class="posts container-fluid">
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#createModal" v-if="state.user.isAuthenticated">
      Create Post
    </button>
    <PostCreate />
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
import { PostCreate } from '../components/PostCreate'
export default {
  name: 'Posts',
  setup() {
    const state = reactive({
      newPosts: computed(() => AppState.posts),
      user: computed(() => AppState.user),
      newComments: computed(() => AppState.comments)
    })
    onMounted(() => {
      postsService.getPosts()
    })

    return {
      state

    }
  },
  components: {
    Post,
    PostCreate
  }
}
</script>

<style lang="scss" scoped>

</style>
