import React, {PureComponent} from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';
import { Title, ButtonToolbar, Button, Footer, Wrapper } from '../styles';
import About from './aboutme';

class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      home: true,
      selected: '',
    };
  }

  selectedView(key) {
    if (this.state.home !== false) {
      this.setState({home: false});
    }
    switch (key) {
      default:
      return this.setState({selected: ''});
    }
  }

  render() {
    const ToolBarContent = [
    <Button value={"news"} key={"news"} onClick={(key) => this.selectedView(key.target.value)}>News</Button>,
    <Button value={"aboutme"} key={"aboutme"} onClick={(key) => this.selectedView(key.target.value)}>About</Button>,
    <Button value={"projects"} key={"projects"} onClick={(key) => this.selectedView(key.target.value)}>Projects</Button>,
    <Button value={"contact"} key={"contact"} onClick={(key) => this.selectedView(key.target.value)}>Contact</Button>
    ];
    return (
      <div className="col-md-12">
        {this.state.home ? (
          <Wrapper>
            <Title home={this.state.home}>Jebpro</Title>
            <ButtonToolbar home={this.state.home}>
              {ToolBarContent}
            </ButtonToolbar>
          </Wrapper>
        ) : (
          <Wrapper>
            <div className="col-md-2">
              <Title home={this.state.home} onClick={() => this.setState({home: true})}>Jebpro</Title>
            </div>
            <div className="col-md-10">
              <ButtonToolbar>
                {ToolBarContent}
              </ButtonToolbar>
            </div>
            <br/>
            {this.state.selected !== '' ? this.state.selected : (
              <Title style={{marginTop: '50vh'}}>Coming soon...</Title>
            )}
          </Wrapper>
        )}
        <Footer>
          <a href="https://github.com/Jebpro/jebpro-front"><Image src={require("../images/github-logo.png")}/></a>
          <a href="https://discord.gg/NaYnYy8"><Image src={require("../images/discord-logo.png")}/></a>
        </Footer>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: (value) => push(`/${value}`)
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Home)
