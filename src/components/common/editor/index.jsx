import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'
import styles from './Style.module.css'

export default class EditorDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editorState: null }
  }

  componentDidMount() {
    BraftEditor.createEditorState('<p>Hello <b>World!</b></p>')
  }

  handleEditorChange = (editorState) => {
    console.log(editorState.toHTML())
    this.setState({ editorState })
  }

  render() {
    const { editorState } = this.state
    return (
      <BraftEditor
        className={styles.editor}
        value={editorState}
        onChange={this.handleEditorChange}
      />
    )
  }
}
