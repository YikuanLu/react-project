import { connect } from 'react-redux'
import HelpDocsUi from './ui'

const mapStateToProps = (state) => {
  const { helpCats } = state.commonData
  return {
    helpCats
  }
}

export default connect(mapStateToProps)(HelpDocsUi)
