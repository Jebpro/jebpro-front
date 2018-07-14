import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction';
import { Route, withRouter } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import Home from './components/home';
import About from './components/aboutme';
import LSLight from './font/LSLight.otf';

class App extends Component {
 render() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/aboutme" component={About} />
    </div>
  );
 }
}

injectGlobal`
@font-face {
  font-family: 'LSLight';
  src: url(${LSLight});
}
body {
  font-family: 'LSLight';
  background-color: snow;
  z-index: 1;
  min-height: 100vh;
}
`

const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({
 simpleAction: () => dispatch(simpleAction())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
