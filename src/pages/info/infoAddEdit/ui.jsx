import React from 'react'
import { PageHeader, Form, Input, Button, Upload, Icon, Radio } from 'antd'
import CreateSelect from '@/components/common/mySelect'
import Editor from '@/components/common/editor'

import styles from './Style.module.css'
import { informationApi } from '@/api'

informationApi.login()

const InfoForm = (props) => {
  console.log(props)
  const { articleTypes, gameTypes, form, match, location } = props
  const query = new URLSearchParams(location.search)
  const {
    params,
    params: { type }
  } = match

  console.log(query, params)

  const title = type === 'add' ? '新增文章' : '编辑文章'
  // 页面通用头部
  const Header = () => {
    return (
      <PageHeader
        style={{
          background: '#fff'
        }}
        title={title}
      />
    )
  }

  const handleSubmit = () => {}

  // 表单部分
  const Forms = () => {
    const { getFieldDecorator } = form
    const formItemLayout = {
      labelCol: {
        sm: { span: 2, pull: 0 }
      },
      wrapperCol: {
        sm: { span: 18, pull: 0 }
      }
    }
    const inlineLayout = {
      labelCol: {
        sm: { span: 6, pull: 0 }
      },
      wrapperCol: {
        sm: { span: 18, pull: 0 }
      }
    }
    const inlineStyle = {
      display: 'inline-block',
      marginLeft: '6px'
    }
    const space = <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
    return (
      <Form
        {...formItemLayout}
        onSubmit={handleSubmit}
        style={{ overflow: 'hidden' }}
      >
        <Form.Item
          label=" "
          colon={false}
          style={{
            whiteSpace: 'nowrap',
            marginLeft: '-70px'
          }}
        >
          <Form.Item
            label="游戏"
            style={inlineStyle}
            labelCol={inlineLayout.labelCol}
            wrapperCol={inlineLayout.wrapperCol}
          >
            {getFieldDecorator('gameType', {
              rules: [
                {
                  required: true,
                  message: '请选择游戏类型！'
                }
              ]
            })(<CreateSelect placeholder="选择游戏" data={gameTypes} />)}
          </Form.Item>
          <Form.Item
            label="分类"
            style={inlineStyle}
            labelCol={inlineLayout.labelCol}
            wrapperCol={inlineLayout.wrapperCol}
          >
            {getFieldDecorator('articleCategoryId', {
              rules: [
                {
                  required: true,
                  message: '请选择文章分类！'
                }
              ]
            })(<CreateSelect placeholder="选择分类" data={articleTypes} />)}
          </Form.Item>
          <Form.Item
            label="比赛"
            style={inlineStyle}
            labelCol={inlineLayout.labelCol}
            wrapperCol={inlineLayout.wrapperCol}
          >
            {getFieldDecorator('比赛对战', {})(
              <CreateSelect placeholder="选择比赛" data={gameTypes} />
            )}
          </Form.Item>
          <Form.Item
            label="比赛"
            style={inlineStyle}
            labelCol={inlineLayout.labelCol}
            wrapperCol={inlineLayout.wrapperCol}
          >
            {getFieldDecorator('比赛对战', {})(
              <CreateSelect placeholder="选择比赛" data={gameTypes} />
            )}
          </Form.Item>
        </Form.Item>
        <Form.Item label="标题">
          {getFieldDecorator('title', {
            rules: [
              {
                required: true,
                message: '请输入文章标题！'
              }
            ]
          })(<Input maxLength={45} placeholder="输入文章标题，限3-45个字" />)}
        </Form.Item>
        <Form.Item label="概要">
          {getFieldDecorator('briefContent', {
            rules: [
              {
                required: true,
                message: '请输入文章概要！'
              }
            ]
          })(<Input maxLength={100} placeholder="输入文章概要，限3-100个字" />)}
        </Form.Item>
        <Form.Item label="关键字">
          {getFieldDecorator('keyword', {
            rules: [
              {
                required: true,
                message: '请输入文章关键字！'
              }
            ]
          })(
            <Input
              maxLength={100}
              placeholder="输入文章关键字，关键字之间以，号隔开"
            />
          )}
        </Form.Item>
        <Form.Item label="封面图">
          {getFieldDecorator('briefContent', {
            rules: [
              {
                required: true,
                message: '请上传封面图！'
              }
            ]
          })(
            <div className={styles['upload-box']}>
              <Upload
                name="coverPicUrl"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              >
                {
                  <div>
                    <Icon type="plus" />
                    <div className="ant-upload-text">Upload</div>
                  </div>
                }
              </Upload>
              <span className={styles['upload-tip']}>
                只支持JPG、PNG、GIF，大小不超过5M
              </span>
            </div>
          )}
        </Form.Item>
        <Form.Item label="内容">
          {getFieldDecorator('content', {
            rules: [
              {
                required: true,
                message: '请输入文章内容！'
              }
            ]
          })(<Editor />)}
        </Form.Item>
        <Form.Item label="图片来源">
          {getFieldDecorator('sourceName', {
            initialValue: '1'
          })(
            <Radio.Group>
              <Radio value="1">原创</Radio>
              {space}
              <Radio value="0">
                <Input maxLength={100} placeholder="请输入来源！" />
              </Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item label="默认浏览量">
          {getFieldDecorator('initClickTimes', {})(
            <Input maxLength={100} placeholder="输入默认浏览量值（选填）！" />
          )}
        </Form.Item>
        <Form.Item label="文章属性">
          {getFieldDecorator('bestStatus', {
            initialValue: '0'
          })(
            <Radio.Group>
              <Radio value="0">普通</Radio>
              <Radio value="1">精华</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item label="是否置顶">
          {getFieldDecorator('isTop', {
            initialValue: '0'
          })(
            <Radio.Group>
              <Radio value="0">否</Radio>
              <Radio value="1">是</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item label="是否展示">
          {getFieldDecorator('status', {
            initialValue: '1'
          })(
            <Radio.Group>
              <Radio value="1">是</Radio>
              <Radio value="0">否</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 3 }
          }}
        >
          <Button type="primary" htmlType="submit">
            保存
          </Button>
          {space}
          <Button type="primary" htmlType="submit">
            发表
          </Button>
          {space}
          <Button type="primary" htmlType="submit">
            手机预览
          </Button>
          {space}
          <Button type="primary" htmlType="submit">
            PC预览
          </Button>
        </Form.Item>
      </Form>
    )
  }

  return (
    <div className="news">
      <Header />
      {Forms()}
    </div>
  )
}

const Forms = Form.create()(InfoForm)
export default Forms
