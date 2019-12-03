import React, { Component } from 'react'
import { Form, Icon, Input, Button, Row, Col } from 'antd'
import ReactCanvasNest from 'react-canvas-nest'

import { SET_USERINFO } from '@/redux/actions-types'
import { common } from '@/api'

import './login.css'
import Logo from '@/assets/img/logo.png'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageCaptche: '',
      imgToken: ''
    }
  }

  componentDidMount() {
    const { userInfo, history } = this.props
    const { token } = userInfo
    if (token) {
      history.push('/info/office')
      return
    }
    this.getImageCaptche()
  }

  // 获取图形验证码接口
  getImageCaptche = () => {
    return common.getImageCaptche().then((res) => {
      this.setState({
        imageCaptche: res.image,
        imgToken: res.token
      })
    })
  }

  // 登录请求
  login = (params) => {
    const { setCommonData, history } = this.props
    return common.login(params).then((res) => {
      const result = {
        userName: res.username,
        resources: res.resources,
        token: res.token
      }
      setCommonData(SET_USERINFO, result)
      history.push('/info/office')
    })
  }

  // 触发登录方法
  handleSubmit = (e) => {
    e.preventDefault()
    const { form } = this.props
    form.validateFields((err, values) => {
      if (!err) {
        const { imgToken } = this.state
        const params = {
          ...values,
          imgToken
        }
        this.login(params)
      }
    })
  }

  render() {
    const {
      form: { getFieldDecorator }
    } = this.props
    const { imageCaptche } = this.state
    const { handleSubmit, getImageCaptche } = this

    const FormView = (
      <Form className="login-form" onSubmit={handleSubmit}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名' }],
            initialValue: 'admin'
          })(
            <Input
              size="large"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
            initialValue: 'battle6688'
          })(
            <Input
              size="large"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('googleCode', {
            rules: [{ required: true, message: '请输入谷歌验证码' }],
            initialValue: '123456'
          })(
            <Input
              size="large"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="text"
              placeholder="谷歌验证码"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Row gutter={16}>
            <Col span={16}>
              {getFieldDecorator('code', {
                rules: [{ required: true, message: '请输入验证码' }]
              })(
                <Input
                  size="large"
                  placeholder="验证码"
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                />
              )}
            </Col>
            <Col span={8}>
              <div className="captche-box" onClick={getImageCaptche}>
                <img src={imageCaptche} alt="" />
              </div>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item>
          <Button
            onClick={handleSubmit}
            htmlType="submit"
            size="large"
            type="primary"
            className="login-form-button"
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    )

    return (
      <div className="login-layout" id="login-layout">
        <ReactCanvasNest
          style={{ zIndex: 1 }}
          config={{
            pointColor: '24,144,255',
            lineColor: '24,144,255',
            pointOpacity: 0.6
          }}
        />
        <div className="logo-box">
          <img className="logo" src={Logo} alt="" />
          <span className="logo-name">尚牛比分网管理后台</span>
        </div>
        {FormView}
      </div>
    )
  }
}
const Login = Form.create()(LoginForm)
export default Login
