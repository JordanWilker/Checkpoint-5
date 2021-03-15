<template>
  <div class="row" v-if="post.creator">
    <div class="post card col-4" v-if="post.creator.email == state.user.email">
      <div class="text-right absolute top right p-2 z-2" v-if="post.creator">
        <button class="btn btn-danger" v-if="post.creator.email == state.user.email" @click="deletePost">
          X
        </button>
      </div>
      <router-link :to="{name: 'Blog', params:{id: post.id}}">
        <div class="card-body text-center">
          <div class="card-title">
            {{ post.title }}
          </div>
          <div class="card-text" v-if="post.creator">
            {{ post.creator.email }}
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'

export default {
  name: 'AccountPost',
  props: {
    post: Object
  },
  setup(props) {
    const state = reactive({
      user: computed(() => AppState.user),
      post: computed(() => AppState.posts)

    })
    return {
      state,
      deletePost() {
        postsService.deletePost(props.post.id)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
