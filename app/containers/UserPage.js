import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import React, { Component } from 'react';
import * as UserActions from '../actions/user';

class UserPage extends Component {
  props: Props;

  render() {
    const { setUser, user } = this.props;
    return (
      <div className="user">
        <div>Welcome {user.name}</div>
        <div>Type your new name: <input onChange={(e) => setUser(e.target.value)}></input></div>
        <style jsx>
          {
            `
            .user {
              display: flex;
              flex: 1;
              flex-direction: column;
              padding: 50px;
              justify-content: space-around;
              align-items: center;
            }
            .user div {
              flex: 1;
              font-size: 36px;
            }

            @media (min-width: 900px) {
              .user {
                flex-direction: row;
              }
            }
            `
          }
        </style>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
