import React, {PureComponent} from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Title, ButtonToolbar, Button } from '../styles';

class Home extends PureComponent {
  render() {
    const ToolBarContent = [
    <Button key={"news"} onClick={(key) => this.props.changePage("news")}><i className="fa fa-comment-alt"></i>News</Button>,
    <Button key={"aboutme"} onClick={(key) => this.props.changePage("aboutme")}><i className="fa fa-user"></i>About</Button>,
    <Button key={"projects"} onClick={(key) => this.props.changePage("projects")}><i className="fa fa-project-diagram"></i>Projects</Button>,
    <Button key={"contact"} onClick={(key) => this.props.changePage("contact")}><i className="fa fa-envelope"></i>Contact</Button>
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
