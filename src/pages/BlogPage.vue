<template>
  <div class="BlogPage" v-if="state.activePost.id">
    {{ state.activePost.title }}
  </div>
  <div>{{ state.activePost.body }}</div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'
import { useRoute } from 'vue-router'

export default {
  name: 'BlogPage',
  setup() {
    const route = useRoute()
    const state = reactive({
      activePost: computed(() => AppState.activeBlog)
    })
    onMounted(() => {
      postsService.getPostById(route.params.id)
    })
    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
