// @flow

import { connect } from 'react-redux';
import React, { Component } from 'react';

class AboutPage extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="about">
        <div>Hi, {user.name}</div>
        <div>Created by Jay</div>
        <div>Only for test purposes</div>
        <style jsx>
          {
            `
            .about {
              display: flex;
              flex: 1;
              flex-direction: column;
              padding: 50px;
              justify-content: space-around;
              align-items: center;
            }
            .about div {
              font-size: 36px;
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


export default connect(mapStateToProps)(AboutPage);
