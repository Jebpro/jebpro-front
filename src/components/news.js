import React from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { HeaderTitle, ContentBlock, ContentTitle, ContentImage } from '../styles';

const json = [
  {
    id: 'a76sd7-39sd78fd-7sad76f',
    title: 'Test news',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    publishDate: '',
  },
  {
    id: 'a76sd9-39sd78fd-7sad76f',
    title: 'asd',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    publishDate: '',
    image: require('../images/placeholder.png')
  }
]

const News = props => (
  <div className="col-md-12">
    <HeaderTitle>News</HeaderTitle>
    {typeof json !== 'undefined' && json.length > 0 ? json.map((item, i) => {
      return <div className="col-md-4" key={i}>
        <ContentBlock>
          <ContentImage src={item.image}/>
          <ContentTitle>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </ContentTitle>
        </ContentBlock>
      </div>
    }) : <HeaderTitle>Loading...</HeaderTitle>}
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/')
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(News)
