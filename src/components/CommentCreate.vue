<template>
  <div class="CommentCreate">
    <div class="modal fade"
         id="createModalComment"
         tabindex="-1"
         role="dialog"
         aria-labelledby="modelTitleId"
         aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Create Comment
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="form-inline" @submit.prevent="createComment">
              <div class="form-group">
                <input type="text"
                       name="body"
                       id="body"
                       class="form-control"
                       placeholder="Enter Body of Comment"
                       aria-describedby="helpId"
                       v-model="state.newComment.body"
                >
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
            <button class="btn btn-success" @click="createComment">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { postsService } from '../services/PostsService'
import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
import $ from 'jquery'

export default {
  name: 'CommentCreate',
  setup() {
    const state = reactive({
      newComment: {}
    })
    return {
      state,
      async createComment() {
        try {
          state.newComment.blog = AppState.activeBlog.id
          await postsService.createComment(state.newComment)
          state.newComment = {}
          $('#createModal').modal('hide')
        } catch (error) {
          logger.log(error)
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
