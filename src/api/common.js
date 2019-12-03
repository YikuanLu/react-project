import $axios from '@/utils/axios'

export default {
  getImageCaptche() {
    return $axios.get('/api/common/img/getImageCaptche')
  },
  login(params) {
    return $axios.post('/api/admin/admin/login', params)
  },
  logout() {
    return $axios.post('/api/admin/admin/logout')
  }
}
