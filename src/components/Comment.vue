<template>
  <div class="comment card">
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
export default {
  name: 'Comment',
  props: {
    comment: Object
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
