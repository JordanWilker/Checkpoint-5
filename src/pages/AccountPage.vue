<template>
  <div class="container-fluid">
    <div class="about text-center row">
      <h1 class="col">
        Welcome {{ account.name }}
      </h1>
      <p class="">
        {{ account.email }}
      </p>
    </div>
    <img class="rounded justify-content-center" :src="account.picture" alt="" />
    <div class="row text-center">
      <button type="button" class="btn btn-primary justify-content-end" data-toggle="modal" data-target="#createModal" v-if="state.user.isAuthenticated">
        Create Post
      </button>
      <PostCreate />
    </div>
  </div>
  <div class="container-fluid" v-if="state.newPosts">
    <div class="">
      <AccountPost v-for="post in state.newPosts" :key="post" :post="post" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AccountPost } from '../components/AccountPost'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'
import { PostCreate } from '../components/PostCreate'
export default {
  name: 'Account',
  setup() {
    const state = reactive({
      newPosts: computed(() => AppState.posts),
      user: computed(() => AppState.user)
    })
    onMounted(() => {
      postsService.getPosts()
    })
    return {
      account: computed(() => AppState.account),
      state
    }
  },
  components: {
    AccountPost,
    PostCreate
  }
}

</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
