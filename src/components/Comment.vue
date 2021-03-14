<template>
  <div class="comment card">
    <div class="text-right absolute top right p-2 z-2">
      <button class="btn btn-danger" v-if="comment.creator.email == state.user.email" @click="deleteComment">
        X
      </button>
    </div>
    <div class="card-body text-center">
      <div class="card-title">
        {{ comment.body }}
      </div>
      <div class="card-text" v-if="comment.creator">
        {{ comment.creator.email }}
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'

export default {
  name: 'Comment',
  props: {
    comment: Object
  },
  setup(props) {
    const state = reactive({
      user: computed(() => AppState.user),
      comment: computed(() => AppState.comments)

    })
    return {
      state,
      deleteComment() {
        postsService.deleteComment(props.comment.id)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
