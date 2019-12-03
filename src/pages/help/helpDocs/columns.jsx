import React from 'react'

const columns = [
  {
    title: '广告标题',
    dataIndex: 'name',
    width: 200,
    render: (item) => {
      return (
        <>
          <img className="fl" width="40" src={item.img} alt="" />
          <p title={item.title}>{item.title}</p>
        </>
      )
    }
  },
  {
    title: '位置',
    dataIndex: 'man'
  },
  {
    title: '客户端',
    dataIndex: 'game'
  },
  {
    title: '排序',
    dataIndex: 'type'
  },
  {
    title: '是否展示',
    dataIndex: 'attribute'
  },
  {
    title: '有效时间',
    dataIndex: 'comment_num'
  },
  {
    title: '添加时间',
    dataIndex: 'view_num'
  }
  // {
  //   title: '操作',
  //   dataIndex: 'operations',
  //   render: () => {
  //     return (
  //       <div className={styles.btnGroups}>
  //         <Button className={styles.btn} size="small" onClick={toEdit}>
  //           编辑
  //         </Button>
  //         <Button className={styles.btn} size="small" onClick={toggleShow}>
  //           展示
  //         </Button>
  //         <Button className={styles.btn} size="small" onClick={toggleTop}>
  //           置顶
  //         </Button>
  //         <Button className={styles.btn} size="small" type="danger" onClick={deleteArticle}>
  //           删除
  //         </Button>
  //       </div>
  //     )
  //   }
  // }
]

export default columns
