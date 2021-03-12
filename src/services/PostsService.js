import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class PostsService {
  async getPosts() {
    try {
      const res = await api.get('/blogs')
      // logger.log(res.data)
      AppState.posts = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async getPostById(id) {
    try {
      const res = await api.get('/blogs/' + `${id}`)
      logger.log(res.data)
      AppState.activeBlog = res.data
    } catch (error) {
      logger.error(error)
    }
  }
}

export const postsService = new PostsService()
