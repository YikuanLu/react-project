import { connect } from 'react-redux'
import AdsUi from './ui'

const mapStateToProps = (state) => {
  const { adPositions } = state.commonData
  return {
    adPositions
  }
}

export default connect(mapStateToProps)(AdsUi)
