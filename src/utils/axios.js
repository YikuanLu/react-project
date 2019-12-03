import axios from 'axios'
import { HashRouter } from 'react-router-dom'
import store from '@/redux/store'
import setCommonData from '@/redux/actions'
import { SET_USERINFO } from '@/redux/actions-types'

const router = new HashRouter()

const config = {
  timeout: 10000
  // baseURL: process.env.REACT_APP_BASE_URL
}
Object.assign(axios.defaults, config)
axios.defaults.headers['Content-Type'] = 'application/json'

// 请求前拦截
axios.interceptors.request.use(
  (req) => {
    const { token } = store.getState().commonData.userInfo
    req.headers.token = token
    return req
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 返回后拦截
axios.interceptors.response.use(
  ({ data }) => {
    if (data.code === 200) {
      return data.body
    }
    if (data.code === 10002) {
      store.dispatch(
        setCommonData(SET_USERINFO, {
          userName: '',
          resources: [],
          token: ''
        })
      )
      router.history.replace('/login')
    }
    return Promise.reject(data)
  },
  (err) => {
    return Promise.reject(err)
  }
)

// post请求
axios.post = (url, params) => {
  return axios({
    method: 'post',
    url,
    data: params
  })
}

// get请求
axios.get = (url, params) => {
  return axios({
    method: 'get',
    url,
    params
  })
}

export default axios
