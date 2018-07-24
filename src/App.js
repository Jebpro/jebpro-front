import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction';
import { Route, withRouter } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import Home from './components/home';
import About from './components/aboutme';
import Contact from './components/contact';
import Projects from './components/projects';
import News from './components/news';
import LSLight from './font/LSLight.otf';
import { Image } from 'react-bootstrap';
import { Footer } from './styles';

class App extends Component {
 render() {
  return (
    <div className="container-fluid">
      <Route exact path="/" component={Home} />
      <Route path="/news" component={News} />
      <Route path="/aboutme" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />

      <Footer>
        <a href="https://github.com/Jebpro/jebpro-front"><Image src={require("./images/github-logo.png")}/></a>
        <a href="https://discord.gg/NaYnYy8"><Image src={require("./images/discord-logo.png")}/></a>
        <a href="https://open.spotify.com/user/mechlul/playlist/3QgqsgqJn8m55J3YPK6J38"><Image src={require("./images/spotify-logo.png")}/></a>
      </Footer>
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
