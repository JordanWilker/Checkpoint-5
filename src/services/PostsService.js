import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class PostsService {
  async getPosts() {
    try {
      const res = await api.get('api/blogs')
      // logger.log(res.data)
      AppState.posts = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async getPostById(id) {
    try {
      const res = await api.get('api/blogs/' + `${id}`)
      logger.log(res.data)
      AppState.activeBlog = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async createPost(postData) {
    try {
      await api.post('api/blogs', postData)
      this.getPosts()
    } catch (error) {
      logger.error(error)
      this.getPosts()
    }
  }

  async getComments(id) {
    try {
      const res = await api.get(`api/blogs/${id}/comments`)
      logger.log(res.data)
      AppState.comments = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async createComment(postData) {
    try {
      await api.post('api/comments', postData)
      this.getComments(postData.blog)
    } catch (error) {
      logger.error(error)
    }
  }

  async deletePost(id) {
    try {
      await api.delete('api/blogs/' + `${id}`)
      this.getPosts()
    } catch (error) {
      logger.error(error)
    }
  }

  async deleteComment(id) {
    try {
      await api.delete('api/comments/' + `${id}`)
      location.reload()
    } catch (error) {
      logger.error(error)
    }
  }

  async editPost(id) {
    try {
      await api.put('api/blogs/' + `${id}`)
    } catch (error) {
      logger.error(error)
    }
  }
}

export const postsService = new PostsService()
