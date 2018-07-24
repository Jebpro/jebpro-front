import React from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Title } from '../styles';

const Projects = props => (
  <div className="col-md-12">
    <Title>Coming soon...</Title>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/')
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Projects)
