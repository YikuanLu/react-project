import React from 'react'
// import { demoApi } from '@/api/index'

class Axios extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    // demoApi
    //   .demoAxios({
    //     matchId: 'lgwi9913kij7n2l6kn5355k677knnlm5902n'
    //   })
    //   .then((res) => {
    //     this.setState({
    //       data: res
    //     })
    // })
  }

  render() {
    const { data } = this.state
    if (!Object.keys(data).length) return null
    return <div>{data.body.season}</div>
  }
}

export default Axios
