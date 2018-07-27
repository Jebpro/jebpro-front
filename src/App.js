import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, NavLink } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import Home from './components/home';
import About from './components/aboutme';
import Contact from './components/contact';
import Projects from './components/projects';
import News from './components/news';
import LSLight from './font/LSLight.otf';
import { Image } from 'react-bootstrap';
import { Footer, NavBar, NavIndex, NavContent } from './styles';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      root: true
    }
  }

 render() {
  return (
    <div>
      {this.props.location.pathname === "/" ? null : <NavBar>
        <NavIndex>
          <NavLink to="/">Jebpro</NavLink>
        </NavIndex>
        <NavContent>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/aboutme">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavContent>
      </NavBar>}
        <Route exact path="/" component={Home} />
        <Route path="/news" component={News} />
        <Route path="/aboutme" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />

      <Footer>
        <a href="https://github.com/Jebpro/jebpro-front" target="_blank" rel="noopener noreferrer"><Image src={require("./images/github-logo.png")}/></a>
        <a href="https://discord.gg/NaYnYy8" target="_blank" rel="noopener noreferrer"><Image src={require("./images/discord-logo.png")}/></a>
        <a href="https://open.spotify.com/user/mechlul/playlist/3QgqsgqJn8m55J3YPK6J38" target="_blank" rel="noopener noreferrer"><Image src={require("./images/spotify-logo.png")}/></a>
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

export default withRouter(connect(mapStateToProps)(App));
