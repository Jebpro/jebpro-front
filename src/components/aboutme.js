import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const About = props => (
  <div className="container">
    <h1>About me</h1>
    <button onClick={() => props.changePage()}>Go to home page via redux</button>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/')
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(About)
