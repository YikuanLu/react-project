import $axios from '@/utils/axios'

export default {
  login(params) {
    return $axios.post('/api/admin/admin/login', params)
  }
}
