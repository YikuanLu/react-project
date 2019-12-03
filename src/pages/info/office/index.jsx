import React, { useState, useEffect } from 'react'
import { Input, Radio, PageHeader, Button, Modal, message } from 'antd'
import CreateSelect from '@/components/common/mySelect'
import {
  GAME_TYPES,
  INFO_TYPES,
  INFO_ATTRIBUTES,
  INFO_IS_TOP,
  INFO_LIST_TYPES,
  OFFICE_TAB_TYPES
} from '@/assets/js/type'
// import { demoApi } from '@/api/index'
import styles from './Style.module.css'
import SnTable from '@/components/common/table'

const Office = (props) => {
  const [tabTitle, setTabTitle] = useState('文章作品')
  const [tabVal, setTabVal] = useState(1)
  const [btnText, setBtnText] = useState('官方发布文章')
  const { history } = props

  // 搜索栏配置项
  const searchConfigList = [
    {
      key: 'game',
      slot: <CreateSelect placeholder="筛选游戏" data={GAME_TYPES} />,
      rules: [],
      initialValue: 'dota'
    },
    {
      key: 'type',
      slot: <CreateSelect placeholder="筛选分类" data={INFO_TYPES} />,
      rules: []
    },
    {
      key: 'attribute',
      slot: <CreateSelect placeholder="筛选属性" data={INFO_ATTRIBUTES} />,
      rules: []
    },
    {
      key: 'is_top',
      slot: <CreateSelect placeholder="是否置顶" data={INFO_IS_TOP} />,
      rules: []
    },
    {
      key: 'author',
      slot: <Input placeholder="发布人昵称" />,
      rules: [],
      initialValue: 'csgo'
    },
    {
      key: 'title',
      slot: <Input placeholder="请输入帖子标题" />,
      rules: []
    }
  ]

  // 切换tab
  const switchTab = (e) => {
    const val = e.target.value
    const tit = e.target.innerText
    setTabTitle(tit)
    setTabVal(val)
    setBtnText(OFFICE_TAB_TYPES[val])
  }

  // 异步获取数据
  const getData = async () => {
    // return demoApi.demoAxios({
    //   matchId: 'lgwi9913kij7n2l6kn5355k677knnlm5902n'
    // })
  }

  // 通用confirm方法
  const commonConfirm = (title, cb) => {
    const { confirm } = Modal
    confirm({
      okText: '确定',
      cancelText: '取消',
      title,
      onOk() {
        cb()
      },
      onCancel() {}
    })
  }
  // 切换展示隐藏
  const toggleShow = () => {
    commonConfirm('确定展示该文章？', () => {
      message.success('点了确定')
    })
  }

  // 切换置顶
  const toggleTop = () => {
    commonConfirm('确定置顶该文章？', () => {
      message.success('点了确定')
    })
  }

  // 删除文章
  const deleteArticle = () => {
    commonConfirm('确定删除该文章？', () => {
      message.success('点了确定')
    })
  }

  // 到编辑页面
  const toEdit = () => {
    history.push('/info/office/edit?id=123')
  }

  // 到新增页面
  const toAdd = () => {
    history.push('/info/office/add')
  }

  // 顶部tab栏
  const Tabs = () => {
    const [data, setData] = useState([])
    useEffect(() => {
      // hook异步获取数据，[]参数是为了防止重复请求数据
      getData().then(() => {
        // console.log(res)
      })
      const list = INFO_LIST_TYPES.map((item) =>
        Object.assign(item, { num: 2 })
      )
      setData(list)
    }, [])
    return (
      <Radio.Group
        onChange={switchTab}
        defaultValue={tabVal}
        size="large"
        buttonStyle="solid"
      >
        {data.map((item) => {
          return (
            <Radio.Button key={item.key} innerText={item.name} value={item.key}>
              {item.name}（{item.num}）
            </Radio.Button>
          )
        })}
      </Radio.Group>
    )
  }

  // 页面通用头部
  const Header = () => {
    return (
      <PageHeader
        style={{
          background: '#fff'
        }}
        title={tabTitle}
      />
    )
  }

  // 新增按钮
  const AddBtn = () => {
    return (
      <Button onClick={toAdd} className="fr" type="primary">
        {btnText}
      </Button>
    )
  }

  // 列表展示
  const DataTable = () => {
    const columns = [
      {
        title: '文章标题',
        dataIndex: 'name',
        render: (item) => {
          return (
            <>
              <img className="fl" width="40" src={item.img} alt="" />
              <p title={item.title} className={styles.titleText}>
                {item.title}
              </p>
            </>
          )
        }
      },
      {
        title: '发布人',
        dataIndex: 'man'
      },
      {
        title: '游戏',
        dataIndex: 'game'
      },
      {
        title: '分类',
        dataIndex: 'type'
      },
      {
        title: '属性',
        dataIndex: 'attribute'
      },
      {
        title: '评论数',
        dataIndex: 'comment_num'
      },
      {
        title: '浏览量',
        dataIndex: 'view_num'
      },
      {
        title: '被收藏数',
        dataIndex: 'collect_num'
      },
      {
        title: '发布最新时间',
        dataIndex: 'time'
      },
      {
        title: '端口展示',
        dataIndex: 'platform'
      },
      {
        title: '发布状态',
        dataIndex: 'punish_status'
      },
      {
        title: '审核状态',
        dataIndex: 'review_status'
      },
      {
        title: '操作',
        dataIndex: 'operations',
        render: () => {
          return (
            <div className={styles.btnGroups}>
              <Button className={styles.btn} size="small" onClick={toEdit}>
                编辑
              </Button>
              <Button className={styles.btn} size="small" onClick={toggleShow}>
                展示
              </Button>
              <Button className={styles.btn} size="small" onClick={toggleTop}>
                置顶
              </Button>
              <Button
                className={styles.btn}
                size="small"
                type="danger"
                onClick={deleteArticle}
              >
                删除
              </Button>
            </div>
          )
        }
      }
    ]

    return (
      <SnTable
        searchConfigList={searchConfigList}
        columns={columns}
        apiFun={getData}
      />
    )
  }

  return (
    <div className="news">
      <Tabs />
      <AddBtn />
      <Header />
      <DataTable />
    </div>
  )
}

export default Office
