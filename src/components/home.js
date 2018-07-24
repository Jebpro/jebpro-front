import React, {PureComponent} from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Title, ButtonToolbar, Button } from '../styles';

class Home extends PureComponent {
  render() {
    const ToolBarContent = [
    <Button value={"news"} key={"news"} onClick={(key) => this.props.changePage(key.target.value)}>News</Button>,
    <Button value={"aboutme"} key={"aboutme"} onClick={(key) => this.props.changePage(key.target.value)}>About</Button>,
    <Button value={"projects"} key={"projects"} onClick={(key) => this.props.changePage(key.target.value)}>Projects</Button>,
    <Button value={"contact"} key={"contact"} onClick={(key) => this.props.changePage(key.target.value)}>Contact</Button>
    ];
    return (
      <div className="col-md-12">
        <Title>Jebpro</Title>
        <ButtonToolbar>
          {ToolBarContent}
        </ButtonToolbar>
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
