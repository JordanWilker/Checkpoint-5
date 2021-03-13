<template>
  <div class="post card col-4">
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
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: Object
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
