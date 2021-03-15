<template class="container-fluid justify-content-center text-center">
  <div class="text-center justify-content-center">
    <div class="BlogPage row">
      <div class="col">
        <h3> {{ state.activePost.title }} </h3>
      </div>
    </div>
    <div class="row">
      <h5 class="col">
        {{ state.activePost.body }}
      </h5>
      <p class="pt-2">
        <br>Comments
      </p>
    </div>
    <button class="btn btn-danger" v-if="state.activePost.email == state.user.email" @click="deletePost">
      X
    </button>
    <div>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#createModalComment" v-if="state.user.isAuthenticated">
        Create Comment
      </button>
      <CommentCreate />
      <Comment v-for="comment in state.comments" :key="comment" :comment="comment" />
    </div>
  </div>
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
      state,
      async editPost() {
        try {
          postsService.editPost()
        } catch (error) {
        }
      }
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
