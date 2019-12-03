import { connect } from 'react-redux'
import AdsEditUi from './ui'

const mapStateToProps = (state) => {
  const { adPositions } = state.commonData
  return {
    adPositions
  }
}

export default connect(mapStateToProps)(AdsEditUi)
