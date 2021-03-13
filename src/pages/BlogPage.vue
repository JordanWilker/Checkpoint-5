<template>
  <div class="BlogPage">
    {{ state.activePost.title }}
  </div>
  <div>{{ state.activePost.body }}</div>
  <div>
    <Comment v-for="comment in state.comments" :key="comment" :comment="comment" />
  </div>
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#createModalComment" v-if="state.user.isAuthenticated">
    Create Comment
  </button>
  <CommentCreate />
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'
import { useRoute } from 'vue-router'
import { Comment } from '../components/Comment'
import { CommentCreate } from '../components/CommentCreate'

export default {
  name: 'Blog',
  setup() {
    const route = useRoute()
    const state = reactive({
      activePost: computed(() => AppState.activeBlog),
      comments: computed(() => AppState.comments),
      user: computed(() => AppState.user)

    })
    onMounted(() => {
      postsService.getPostById(route.params.id)
      postsService.getComments(route.params.id)
    })
    return {
      state
    }
  },
  components: {
    Comment,
    CommentCreate
  }
}
</script>

<style lang="scss" scoped>

</style>
